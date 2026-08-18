resource "aws_lb" "employee_alb" {
  name               = "employee-directory-alb"
  internal           = false
  load_balancer_type = "application"

  security_groups = [aws_security_group.alb_sg.id]
  subnets          = var.subnet_ids
}

resource "aws_lb_target_group" "employee_tg" {
  name        = "employee-directory-tg"
  port        = 3000
  protocol    = "HTTP"
  target_type = "ip"
  vpc_id      = var.vpc_id

  health_check {
    path = "/"

    protocol = "HTTP"

    matcher = "200"

    interval = 30

    timeout = 5

    healthy_threshold = 2

    unhealthy_threshold = 2
  }
}

resource "aws_lb_listener" "employee_listener" {
  load_balancer_arn = aws_lb.employee_alb.arn

  port     = 80
  protocol = "HTTP"

  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.employee_tg.arn
  }
}