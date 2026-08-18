output "cluster_name" {

  value = aws_ecs_cluster.employee_cluster.name

}

output "cluster_arn" {

  value = aws_ecs_cluster.employee_cluster.arn

}

output "task_definition" {

  value = aws_ecs_task_definition.employee_task.arn

}