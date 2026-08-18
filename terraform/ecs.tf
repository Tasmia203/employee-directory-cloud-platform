resource "aws_cloudwatch_log_group" "employee_logs" {
  name              = "/ecs/employee-directory"
  retention_in_days = 7
}

# ECS Cluster

resource "aws_ecs_cluster" "employee_cluster" {
  name = var.cluster_name
}

# Task Definition

resource "aws_ecs_task_definition" "employee_task" {

  family = var.task_family

  requires_compatibilities = ["FARGATE"]

  network_mode = "awsvpc"

  cpu = "1024"

  memory = "2048"

  execution_role_arn = data.aws_iam_role.ecs_execution_role.arn

  container_definitions = jsonencode([
  {
    name      = var.container_name
    image     = var.image_uri
    essential = true

    portMappings = [
      {
        containerPort = 3000
        protocol      = "tcp"
      }
    ]

    logConfiguration = {
      logDriver = "awslogs"

      options = {
        awslogs-group         = "/ecs/employee-directory"
        awslogs-region        = "us-east-1"
        awslogs-stream-prefix = "ecs"
      }
    }
  }
])

}

resource "aws_ecs_service" "employee_service" {

  name            = var.service_name
  cluster         = aws_ecs_cluster.employee_cluster.id
  task_definition = aws_ecs_task_definition.employee_task.arn

  desired_count = 1
  launch_type   = "FARGATE"

  network_configuration {
    subnets          = var.subnet_ids
    security_groups  = var.security_group_ids
    assign_public_ip = true
  }

  load_balancer {
    target_group_arn = aws_lb_target_group.employee_tg.arn
    container_name   = var.container_name
    container_port   = 3000
  }

}