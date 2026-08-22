# AWS Employee Directory Cloud Platform (Docker + Amazon ECS + Terraform + CI/CD)

## Project Overview

This project demonstrates how to deploy a containerized Employee Directory application on AWS using modern cloud engineering practices.

The backend application was containerized with Docker and pushed to Amazon Elastic Container Registry (ECR). The application was deployed to Amazon ECS using AWS Fargate, while all AWS infrastructure was provisioned using Terraform.

A GitHub Actions CI/CD pipeline was implemented to automate infrastructure deployments. Every push to the GitHub repository automatically executes the deployment workflow.

An Application Load Balancer (ALB) was configured to securely expose the application, while CloudWatch Logs provide centralized logging and monitoring.

This project demonstrates Infrastructure as Code (IaC), containerization, cloud networking, load balancing, security, logging, and continuous deployment.

---

# Project Objectives

- Containerize a Node.js application using Docker
- Store Docker images in Amazon ECR
- Deploy containers on Amazon ECS (Fargate)
- Provision AWS infrastructure using Terraform
- Configure CloudWatch logging
- Implement CI/CD using GitHub Actions
- Configure an Application Load Balancer
- Secure the application using Security Groups
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

# Architecture Diagram

![](screenshots/architecture-diagram.png)

---

# Frontend

The Employee Directory frontend was developed locally to interact with the backend REST API.

<img width="1494" height="870" alt="employee-directory-frontend" src="https://github.com/user-attachments/assets/b63f6d51-4e0a-406d-9ef5-6fd34dda21f2" />


---

# Live Backend API

The backend API is deployed on Amazon ECS behind an Application Load Balancer.

<img width="1506" height="626" alt="live-application" src="https://github.com/user-attachments/assets/e2ed198f-1484-460c-8db6-9a4e6b38c11b" />

---

# Project Phases

## Phase 1 – Project Setup

### Completed Tasks

- Created GitHub repository
- Organized project folders
- Configured AWS Provider
- Created Terraform variables
- Created Terraform outputs
- Configured AWS credentials
- Initialized Terraform

---

## Phase 2 – Containerizing the Application

### Completed Tasks

- Built Express.js backend
- Created Dockerfile
- Created `.dockerignore`
- Built Docker image
- Tested Docker container locally
- Verified API response

---

## Phase 3 – Amazon Elastic Container Registry (ECR)

### Completed Tasks

- Created Amazon ECR repository
- Tagged Docker image
- Pushed Docker image to Amazon ECR
- Verified uploaded container image

### Repository Overview

<img width="1509" height="671" alt="Amazon ECR – Repository Overview (Summary tab)" src="https://github.com/user-attachments/assets/5c330b71-d14b-4076-a25d-56368eb232a1" />

### Amazon ECR - Uploaded Docker Image Repository

<img width="1507" height="800" alt="Amazon ECR – Employee Directory Docker Repository" src="https://github.com/user-attachments/assets/6227dfe7-b22c-4470-9073-8169aa82bd0a" />


---

## Phase 4 – Amazon ECS (Fargate)

### Completed Tasks

- Created ECS Cluster
- Created ECS Task Definition
- Created ECS Service
- Configured AWS Fargate
- Configured IAM Task Execution Role
- Configured container networking

### Amazon ECS Cluster

<img width="1503" height="746" alt="ecs-cluster" src="https://github.com/user-attachments/assets/c3ed9e9a-04b0-4a4a-94c3-73c9ad20be85" />

### ECS Service

<img width="1512" height="771" alt="ecs-service" src="https://github.com/user-attachments/assets/b900a25a-dc24-45e9-ab34-4533fc6649f6" />

### Running ECS Task

<img width="1512" height="736" alt="running-task" src="https://github.com/user-attachments/assets/f0e0e400-2cac-47cf-9867-9940eebfbf00" />

### Task Definition Overview

<img width="1511" height="802" alt="task-definition-overview" src="https://github.com/user-attachments/assets/ed53f07a-7ac6-43cf-8839-3a61327be4d7" />

### Task Definition Container

<img width="1509" height="733" alt="task-definition-container" src="https://github.com/user-attachments/assets/e55b1fb9-2ada-4238-a931-cd4a2d2c1eac" />

---

## Phase 5 – CloudWatch Logging

### Completed Tasks

- Created CloudWatch Log Group
- Configured ECS Log Driver
- Verified application logs
- Verified successful container startup

### CloudWatch

<img width="1512" height="563" alt="cloudwatch-log-group" src="https://github.com/user-attachments/assets/9a867faf-3c1e-4f1b-b56d-9b4efe67b32c" />

<img width="1250" height="459" alt="cloudwatch-log-stream" src="https://github.com/user-attachments/assets/08dbfbd4-3425-4b65-aa5a-942b790e3ae3" />

<img width="1509" height="796" alt="cloudwatch-running-logs" src="https://github.com/user-attachments/assets/487da4d3-6772-4a4e-9253-3d73b0a341c7" />

---

## Phase 6 – GitHub Actions CI/CD Pipeline

### Completed Tasks

- Created GitHub Actions workflow
- Configured GitHub Secrets
- Automated Terraform deployment
- Verified successful workflow execution

### GitHub Actions

<img width="1508" height="818" alt="Github Actions" src="https://github.com/user-attachments/assets/d120e0f3-3389-4796-acc0-79e7a7d247d7" />


---

## Phase 7 – Application Load Balancer & Security

### Completed Tasks

- Created Application Load Balancer
- Created Target Group
- Configured HTTP Listener
- Configured Health Checks
- Connected ECS Service to Target Group
- Created ALB Security Group
- Created ECS Security Group
- Configured inbound and outbound security rules
- Verified healthy targets

### Application Load Balancer

<img width="1512" height="803" alt="alb-overview" src="https://github.com/user-attachments/assets/12da1ccf-dadd-4814-84b2-5c511d3252a6" />


<img width="1512" height="769" alt="alb-listener" src="https://github.com/user-attachments/assets/53eb35b4-22cd-4bc3-8741-2e4cf9bf36fa" />


<img width="1512" height="798" alt="target-group" src="https://github.com/user-attachments/assets/4472503a-3d84-4629-ae98-3ffc291e64a2" />


### Security Groups

<img width="1508" height="772" alt="ecs-security-group" src="https://github.com/user-attachments/assets/b753e4cc-a976-42b3-b97f-d0e7324275df" />

---

## Phase 8 – Testing & Validation

### Completed Tasks

- Verified ECS Service
- Verified ECS Tasks
- Verified Target Group health
- Verified Application Load Balancer
- Verified CloudWatch Logs
- Successfully accessed the application through the ALB DNS endpoint

Example API Response

```json
{
  "message": "Employee Directory API Running"
}
```

---

## Terraform Infrastructure

Infrastructure was provisioned entirely using Terraform.

<img width="304" height="563" alt="terraform-folder" src="https://github.com/user-attachments/assets/118d644a-344c-4672-9872-d4b7b44de25e" />

<img width="1306" height="241" alt="terraform-plan" src="https://github.com/user-attachments/assets/68c54268-a125-4c4b-a7ff-715dcf46ab20" />

<img width="1277" height="378" alt="terraform-apply" src="https://github.com/user-attachments/assets/d82fb20c-19f2-4f2e-8429-8510999ae808" />


---

# Skills Demonstrated

- Docker Containerization
- Amazon ECS (Fargate)
- Amazon Elastic Container Registry (ECR)
- Infrastructure as Code (Terraform)
- GitHub Actions CI/CD
- Application Load Balancer
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
- Push Docker images to Amazon ECR.
- Deploy containers using Amazon ECS Fargate.
- Provision AWS infrastructure using Terraform.
- Configure centralized logging using CloudWatch.
- Automate infrastructure deployments using GitHub Actions.
- Configure an Application Load Balancer with Target Groups and Listeners.
- Secure AWS resources using Security Groups and IAM.
- Deploy and manage a production-style containerized application on AWS.

---

# Future Improvements

- Deploy the frontend to Amazon S3
- Distribute the frontend using Amazon CloudFront
- Connect the hosted frontend to the ECS backend
- Enable HTTPS using AWS Certificate Manager (ACM)
- Configure a custom domain with Amazon Route 53
- Integrate Amazon RDS
- Store secrets in AWS Secrets Manager
- Implement ECS Auto Scaling
- Create CloudWatch dashboards and alarms
- Implement Blue/Green deployments
- Migrate the application to Amazon EKS (Kubernetes)
