# 🚀 Portfolio CI/CD Deployment to EC2

[![Deploy Portfolio WebApp to EC2](https://github.com/matthieu-ntsiful/cicd-portfolio-ec2-deploy/actions/workflows/main.yml/badge.svg)](https://github.com/matthieu-ntsiful/cicd-portfolio-ec2-deploy/actions/workflows/main.yml)
[![GitHub last commit](https://img.shields.io/github/last-commit/matthieu-ntsiful/cicd-portfolio-ec2-deploy)](https://github.com/matthieu-ntsiful/cicd-portfolio-ec2-deploy/commits/main)
[![GitHub repo size](https://img.shields.io/github/repo-size/matthieu-ntsiful/cicd-portfolio-ec2-deploy)](https://github.com/matthieu-ntsiful/cicd-portfolio-ec2-deploy)
[![License](https://img.shields.io/github/license/matthieu-ntsiful/cicd-portfolio-ec2-deploy)](LICENSE)
[![AWS](https://img.shields.io/badge/AWS-EC2-orange?logo=amazon-aws)](https://aws.amazon.com/ec2/)
[![Apache](https://img.shields.io/badge/Apache-2.4-red?logo=apache)](https://httpd.apache.org/)
[![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-CI%2FCD-blue?logo=github-actions)](https://github.com/features/actions)
[![Slack](https://img.shields.io/badge/Slack-Notifications-4A154B?logo=slack)](https://slack.com/)

> **Automated CI/CD pipeline for deploying a DevOps portfolio website to AWS EC2 using GitHub Actions with Slack notifications.**

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Architecture](#-architecture)
- [Prerequisites](#-prerequisites)
- [Setup](#-setup)
- [Deployment](#-deployment)
- [Configuration](#-configuration)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)

## 🎯 Overview

This project demonstrates a complete CI/CD pipeline that automatically deploys a portfolio website to AWS EC2 whenever code is pushed to the main branch. The pipeline includes automated testing, deployment, and Slack notifications for deployment status.

**Live Demo:** [Portfolio Website](http://ec2-51-20-66-249.eu-north-1.compute.amazonaws.com)

## ✨ Features

- 🔄 **Automated CI/CD Pipeline** - GitHub Actions workflow for seamless deployment
- ☁️ **AWS EC2 Deployment** - Automated deployment to EC2 instance
- 🐧 **Apache Web Server** - Configured with CORS support and security headers
- 📱 **Responsive Design** - Modern portfolio website with mobile-first approach
- 🔔 **Slack Notifications** - Real-time deployment status notifications
- 🔒 **Security Hardened** - Proper file permissions and Apache security configuration
- 🎨 **Modern UI/UX** - Clean, professional design with animations
- 📊 **Reusable Workflows** - Modular GitHub Actions for notifications

## 🏗️ Architecture

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Developer     │    │   GitHub Actions │    │   AWS EC2       │
│                 │    │                  │    │                 │
│ Push to main ───┼───▶│ 1. Checkout code │    │ Apache Server   │
│                 │    │ 2. Deploy files  │───▶│ Portfolio Site  │
│                 │    │ 3. Configure     │    │ CORS Enabled    │
│                 │    │ 4. Notify Slack  │    │                 │
└─────────────────┘    └──────────────────┘    └─────────────────┘
                                │
                                ▼
                       ┌─────────────────┐
                       │ Slack Channel   │
                       │ Notifications   │
                       └─────────────────┘
```

## 📋 Prerequisites

- AWS Account with EC2 instance
- GitHub repository
- Slack workspace (optional, for notifications)
- Domain name (optional)

## 🛠️ Setup

### 1. Clone the Repository

```bash
git clone https://github.com/matthieu-ntsiful/cicd-portfolio-ec2-deploy.git
cd cicd-portfolio-ec2-deploy
```

### 2. AWS EC2 Setup

1. Launch an Ubuntu EC2 instance
2. Configure security group to allow HTTP (port 80) and SSH (port 22)
3. Generate and download SSH key pair

### 3. GitHub Secrets Configuration

Add the following secrets to your GitHub repository:

| Secret Name | Description | Example |
|-------------|-------------|---------|
| `EC2_SSH_KEY` | Private SSH key for EC2 access | `-----BEGIN RSA PRIVATE KEY-----...` |
| `HOST_DNS` | EC2 instance public DNS/IP | `ec2-xx-xx-xx-xx.compute.amazonaws.com` |
| `EC2_USER` | EC2 instance username | `ubuntu` |
| `TARGET_DIR` | Deployment target directory | `/home/ubuntu/deployment` |
| `SLACK_WEBHOOK_URL` | Slack webhook URL (optional) | `https://hooks.slack.com/services/...` |

### 4. Slack Integration (Optional)

1. Create a Slack app in your workspace
2. Enable Incoming Webhooks
3. Create a webhook URL
4. Add the webhook URL to GitHub secrets as `SLACK_WEBHOOK_URL`

#### Test Slack Webhook

```bash
# Test your webhook URL
curl -X POST -H 'Content-type: application/json' \
  --data '{"text":"🚀 Test notification from Portfolio CI/CD"}' \
  YOUR_SLACK_WEBHOOK_URL
```

## 🚀 Deployment

The deployment is fully automated through GitHub Actions:

1. **Push to main branch** triggers the workflow
2. **Files are deployed** to EC2 via SSH
3. **Apache is configured** with CORS and security headers
4. **Slack notification** is sent with deployment status

### Manual Deployment

You can also trigger deployment manually:

1. Go to Actions tab in your GitHub repository
2. Select "Deploy Portfolio WebApp to EC2" workflow
3. Click "Run workflow"

## ⚙️ Configuration

### Apache Configuration

The pipeline automatically configures Apache with:

- CORS headers for cross-origin requests
- Security headers (X-Content-Type-Options, X-Frame-Options, X-XSS-Protection)
- Proper MIME types for static files
- Gzip compression for better performance

### File Structure

```
cicd-portfolio-ec2-deploy/
├── .github/
│   └── workflows/
│       ├── main.yml          # Main deployment workflow
│       └── slack.yml         # Reusable Slack notification workflow
├── assets/
│   └── images/               # Portfolio images
├── components/               # HTML components (legacy)
├── css/
│   ├── main.css             # Main stylesheet
│   └── components/          # Component-specific styles
├── .htaccess                # Apache configuration
├── index.html               # Main portfolio page
├── LICENSE
└── README.md
```

### Workflow Triggers

The deployment workflow triggers on:

- Push to `main` branch
- Pull request to `main` branch
- Manual workflow dispatch
- Ignores changes to documentation files

## 🔧 Troubleshooting

### Common Issues

#### 1. Deployment Fails with Permission Denied
```bash
# Solution: Check SSH key and EC2 user permissions
chmod 400 your-key.pem
ssh -i your-key.pem ubuntu@your-ec2-instance
```

#### 2. Website Shows Directory Listing
- Ensure `index.html` is in `/var/www/html/`
- Check Apache configuration is properly applied

#### 3. Slack Notifications Not Working
- Verify `SLACK_WEBHOOK_URL` secret is correctly set
- Test webhook URL manually with curl

#### 4. CORS Issues
- The pipeline automatically configures CORS headers
- Check Apache modules are enabled: `sudo a2enmod headers`

### Logs and Debugging

- **GitHub Actions Logs:** Check the Actions tab in your repository
- **Apache Logs:** `sudo tail -f /var/log/apache2/error.log`
- **Access Logs:** `sudo tail -f /var/log/apache2/access.log`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [GitHub Actions](https://github.com/features/actions) for CI/CD automation
- [AWS EC2](https://aws.amazon.com/ec2/) for hosting infrastructure
- [Apache HTTP Server](https://httpd.apache.org/) for web serving
- [Slack API](https://api.slack.com/) for notifications

## 📞 Contact

**Matthew Ntsiful** - Cloud DevOps Engineer

- 📧 Email: matthew.ntsiful@gmail.com
- 📱 Phone: +233 5XX XXX XXX
- 📍 Location: Takoradi, Ghana
- 💼 LinkedIn: [Connect with me](https://www.linkedin.com/in/matthewntsiful)
- 🐙 GitHub: [@matthewntsiful](https://github.com/matthewntsiful)

---

⭐ **Star this repository if you found it helpful!**