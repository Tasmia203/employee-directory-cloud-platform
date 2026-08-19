# AWS Project 4 – Employee Directory Cloud Platform (Docker + Amazon ECS + Terraform + CI/CD)

## Project Overview

This project demonstrates how to deploy a containerized Employee Directory application on AWS using modern cloud engineering practices.

The backend application was containerized with Docker and pushed to Amazon Elastic Container Registry (ECR). The application was then deployed to Amazon ECS using AWS Fargate, while all AWS infrastructure was provisioned using Terraform.

To automate deployments, a GitHub Actions CI/CD pipeline was implemented. Every push to the GitHub repository automatically runs the deployment workflow.

For production-style networking, an Application Load Balancer (ALB) was configured to route traffic to the ECS service, with CloudWatch Logs providing centralized application monitoring.

This project demonstrates Infrastructure as Code (IaC), containerization, cloud networking, load balancing, logging, security, and continuous deployment.

---

# Project Objectives

- Containerize a Node.js application using Docker
- Store Docker images in Amazon ECR
- Deploy containers on Amazon ECS (Fargate)
- Provision infrastructure using Terraform
- Configure CloudWatch logging
- Automate deployments using GitHub Actions
- Configure an Application Load Balancer
- Secure networking using Security Groups
- Deploy a production-style cloud application

---

# AWS Services Used

- Amazon ECS (Fargate)
- Amazon Elastic Container Registry (ECR)
- Application Load Balancer (ALB)
- Target Groups
- Load Balancer Listener
- Amazon CloudWatch
- AWS IAM
- Security Groups
- Terraform
- GitHub Actions

---

# Technologies Used

- Node.js
- Express.js
- Docker
- Terraform
- Git
- GitHub
- GitHub Actions
- REST API
- JSON

---

# Project Phases

## Phase 1 – Project Setup

Created the project structure and configured Terraform for Infrastructure as Code.

### Completed Tasks

- Created GitHub repository
- Organized project folders
- Configured AWS Provider
- Created Terraform variables
- Created Terraform outputs
- Configured AWS credentials
- Initialized Terraform

### Screenshot

- GitHub repository
- Project folder structure
- Successful `terraform init`

---

## Phase 2 – Containerizing the Application

Built the Employee Directory API and packaged it into a Docker container.

### Completed Tasks

- Built Express.js backend
- Created Dockerfile
- Created `.dockerignore`
- Built Docker image
- Tested Docker container locally
- Verified API response

### Screenshot

📷 Insert screenshots of:

- Dockerfile
- Docker image build
- Running Docker container
- Local API response

---

## Phase 3 – Amazon Elastic Container Registry (ECR)

Created a private container registry and uploaded the Docker image.

### Completed Tasks

- Created Amazon ECR repository
- Logged Docker into ECR
- Tagged Docker image
- Pushed image to ECR
- Verified uploaded image

### Screenshot

📷 Insert screenshots of:

- Amazon ECR repository
- Successful Docker push
- Uploaded Docker image

---

## Phase 4 – Amazon ECS (Fargate)

Provisioned the container infrastructure using Terraform.

### Completed Tasks

- Created ECS Cluster
- Created Task Definition
- Created ECS Service
- Configured AWS Fargate
- Configured IAM Task Execution Role
- Configured container networking

### Screenshot

- ECS Cluster
- ECS Service
- Task Definition
- Running ECS Task

---

## Phase 5 – CloudWatch Logging

Configured centralized logging for the ECS containers.

### Completed Tasks

- Created CloudWatch Log Group
- Configured ECS Log Driver
- Verified application logs
- Verified container startup logs

### Screenshot

- CloudWatch Log Group
- CloudWatch Log Streams
- Container logs

---

## Phase 6 – GitHub Actions CI/CD Pipeline

Implemented Continuous Integration and Continuous Deployment using GitHub Actions.

Whenever changes are pushed to GitHub, the workflow automatically executes Terraform and deploys infrastructure updates.

### Completed Tasks

- Created GitHub Actions workflow
- Configured GitHub Secrets
- Automated Terraform deployment
- Verified successful workflow execution

### Screenshot

- `.github/workflows`
- GitHub Actions workflow
- Successful workflow run
- Green checkmark pipeline

---

## Phase 7 – Application Load Balancer & Security

Configured production-style networking for the ECS service.

The Application Load Balancer receives incoming HTTP requests and forwards them to the ECS service. Security Groups were configured to allow HTTP traffic to the ALB while permitting only the ALB to communicate with the ECS application on port 3000.

### Completed Tasks

- Created Application Load Balancer
- Created Target Group
- Configured HTTP Listener
- Configured Health Checks
- Connected ECS Service to Target Group
- Created ALB Security Group
- Configured Security Group rules
- Verified healthy targets

### Screenshot

- Application Load Balancer
- Target Group
- Healthy Target
- Listener
- ALB Security Group
- ECS Security Group
- Security Group inbound rules

---

## Phase 8 – Testing and Validation

Validated the complete deployment and confirmed that all AWS resources work together correctly.

### Completed Tasks

- Verified ECS Service
- Verified ECS Tasks
- Verified Target Group health
- Verified Application Load Balancer
- Verified CloudWatch Logs
- Successfully accessed the application through the ALB DNS endpoint


### Screenshot

- Working API in browser
- ECS Running Task
- Healthy Target Group
- CloudWatch Logs
- Final GitHub repository

---

# Skills Demonstrated

- Docker Containerization
- Amazon ECS (Fargate)
- Amazon Elastic Container Registry (ECR)
- Infrastructure as Code (Terraform)
- GitHub Actions CI/CD
- Application Load Balancer (ALB)
- Target Groups
- Cloud Networking
- Security Groups
- IAM Roles
- CloudWatch Logging
- REST API Development
- Git & GitHub

---

# Key Learning Outcomes

Through this project I learned how to:

- Build and containerize applications using Docker.
- Push container images to Amazon ECR.
- Deploy containers using Amazon ECS Fargate.
- Provision AWS infrastructure using Terraform.
- Configure centralized application logging using CloudWatch.
- Automate infrastructure deployment using GitHub Actions.
- Configure an Application Load Balancer with Target Groups and Listeners.
- Implement secure networking using AWS Security Groups.
- Deploy and manage a production-style containerized application on AWS.

---

# Future Improvements

Potential enhancements include:

- HTTPS using AWS Certificate Manager (ACM)
- Custom domain using Amazon Route 53
- Amazon RDS integration
- AWS Secrets Manager
- ECS Auto Scaling
- CloudWatch dashboards and alarms
- Blue/Green deployments
- Multi-container architecture
- Amazon ElastiCache
- Migration to Amazon EKS (Kubernetes)
