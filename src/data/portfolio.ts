import { Skill, Experience, Project, Certification } from '../types';

export const skills: Skill[] = [
  {
    category: 'Cloud Platforms',
    items: ['AWS EC2', 'S3', 'VPC', 'RDS', 'ELB', 'Route 53', 'IAM', 'CloudFront', 'CloudWatch', 'ECR', 'ECS', 'EKS']
  },
  {
    category: 'Infrastructure as Code',
    items: ['Terraform', 'CloudFormation', 'Modular Architecture']
  },
  {
    category: 'CI/CD Tools',
    items: ['Jenkins', 'GitHub Actions', 'AWS CodePipeline', 'AWS CodeBuild', 'AWS CodeDeploy']
  },
  {
    category: 'Containerization & Orchestration',
    items: ['Docker', 'Kubernetes', 'Helm', 'Amazon ECS', 'Amazon EKS']
  },
  {
    category: 'Configuration Management',
    items: ['Ansible', 'Ansible Tower']
  },
  {
    category: 'Monitoring & Observability',
    items: ['Prometheus', 'Grafana', 'CloudWatch', 'Container Insights']
  },
  {
    category: 'Security Tools',
    items: ['SonarQube', 'Trivy', 'AWS WAF', 'IAM Policies', 'AWS KMS']
  },
  {
    category: 'Version Control',
    items: ['Git', 'GitHub', 'GitLab']
  },
  {
    category: 'Scripting & Programming',
    items: ['Shell Scripting', 'Python', 'Bash']
  },
  {
    category: 'Build & Artifact Management',
    items: ['Maven', 'Nexus', 'Harbor']
  }
];

export const experiences: Experience[] = [
  {
    title: 'DevOps Engineer',
    company: 'Advent Global Solutions Pvt. Ltd',
    period: 'July 2023 – Sep 2025',
    responsibilities: [
      'Designed, deployed, and maintained cloud infrastructure on AWS including VPCs, EC2, RDS, S3, IAM, ALB, and Route 53 following best security practices',
      'Automated application deployments using Jenkins pipelines integrated with GitHub, Docker, SonarQube, and Nexus, reducing deployment time by 40%',
      'Developed Infrastructure as Code using modular Terraform, enabling version-controlled, repeatable, and scalable infrastructure deployments across multiple environments',
      'Deployed microservices using Docker and orchestrated with Kubernetes (K8s) utilizing Helm charts to manage complex configurations and ensure high availability (99.9% uptime)',
      'Built and secured custom Docker images, scanned them for vulnerabilities using Trivy, and stored in Harbor/Nexus',
      'Implemented Ansible playbooks and Ansible Tower for automated configuration management and server provisioning',
      'Monitored infrastructure and application performance using CloudWatch, Prometheus, and Grafana; set up alerting for proactive issue detection',
      'Configured Apache and NGINX with SSL/TLS using Let\'s Encrypt and AWS ACM to secure web applications',
      'Developed disaster recovery solutions using scheduled backups via rsync and cron, automated RDS snapshots, and S3 replication policies'
    ]
  },
  {
    title: 'AWS Trainer',
    company: 'Freelance / Training Institute',
    period: 'Oct 2022 – Present',
    responsibilities: [
      'Conducting AWS training sessions for students and professionals, covering fundamental to advanced cloud concepts',
      'Designed and delivered hands-on labs on EC2, VPC, IAM, S3, RDS, and other AWS services',
      'Mentored learners on real-time projects and guided them towards AWS certifications (Cloud Practitioner, HashiCorp Terraform Associate)',
      'Created training materials, presentations, and practical assignments for effective learning'
    ]
  }
];

export const projects: Project[] = [
  {
    title: 'Messenger Application Deployment',
    subtitle: 'AWS Microservices Stack',
    technologies: ['AWS ECS', 'EC2/Fargate', 'ALB', 'S3', 'RDS', 'Route 53', 'ACM', 'Terraform', 'Jenkins', 'Docker', 'SonarQube', 'Trivy', 'CloudWatch'],
    highlights: [
      'Designed and implemented a robust multi-stage CI/CD pipeline using Jenkins, integrating SonarQube for code quality checks, Trivy for container vulnerability scanning',
      'Automated complete infrastructure provisioning using Terraform, configured with S3 remote backend and workspace isolation for managing dev/staging/production environments',
      'Deployed containerized microservices on Amazon ECS, leveraging both EC2 launch type and Fargate for serverless compute',
      'Implemented Blue/Green deployment strategy on ECS with Application Load Balancer (ALB) target group shifting for zero-downtime production releases',
      'Configured AutoScaling policies on ECS services based on CPU and memory utilization to ensure high availability and cost efficiency',
      'Enabled centralized monitoring and observability by integrating CloudWatch Logs, custom metrics, dashboards, and alarms'
    ]
  },
  {
    title: 'Isalaam Donation Platform',
    subtitle: 'Secure and Scalable AWS Deployment',
    technologies: ['AWS EKS', 'EBS', 'RDS', 'IAM', 'ALB', 'S3', 'KMS', 'Jenkins', 'Terraform', 'Docker', 'Helm', 'CloudWatch'],
    highlights: [
      'Designed and deployed a scalable, containerized donation platform using Amazon EKS with blue/green deployment strategy for zero-downtime rollouts',
      'Built and configured CI/CD pipelines in Jenkins to automate build, test, and deployment workflows for Dockerized microservices',
      'Provisioned secure and fault-tolerant Amazon RDS with Multi-AZ, custom parameter groups, enhanced monitoring, and automated daily snapshots',
      'Implemented robust security best practices, including encryption at rest (EBS, RDS) via AWS KMS, fine-grained IAM roles/policies, and TLS/SSL with ACM',
      'Enabled application observability with CloudWatch Container Insights, Kubernetes metrics server, and custom dashboards',
      'Maintained 99.9% application SLA using horizontal pod autoscaling, ALB ingress controller with health checks, and automated disaster recovery strategies'
    ]
  }
];

export const certifications: Certification[] = [
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    icon: 'cloud'
  },
  {
    name: 'AWS Certified Developer Associate',
    issuer: 'Amazon Web Services',
    icon: 'code'
  },
  {
    name: 'HashiCorp Certified: Terraform Associate (003)',
    issuer: 'HashiCorp',
    icon: 'box'
  }
];
