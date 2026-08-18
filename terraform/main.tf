# ECS Cluster

resource "aws_ecs_cluster" "employee_cluster" {
  name = var.cluster_name
}

# IAM Role

data "aws_iam_role" "ecs_execution_role" {
  name = "ecsTaskExecutionRole"
}

# Task Definition

resource "aws_ecs_task_definition" "employee_task" {

  family                   = var.task_family

  requires_compatibilities = ["FARGATE"]

  network_mode             = "awsvpc"

  cpu                      = "1024"

  memory                   = "2048"

  execution_role_arn = data.aws_iam_role.ecs_execution_role.arn

  container_definitions = jsonencode([

    {

      name = var.container_name

      image = var.image_uri

      essential = true

      portMappings = [

        {

          containerPort = 3000

          protocol = "tcp"

        }

      ]

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
}