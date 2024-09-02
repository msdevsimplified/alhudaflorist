# Alhuda Florist

Welcome to the Alhuda Florist website repository! This repository contains the source code and resources for the official website of Alhuda Florist. Alhuda Florist is dedicated to providing exquisite floral arrangements for every occasion. 

## 🔗 Website link
[![portfolio](https://www.alhudaflorist.com/)

## Screenshots

![Front-End](https://i.postimg.cc/j2GQR4yr/scrnli-9-2-2024-12-00-10-PM.png)
![Admin Dashboard](https://i.postimg.cc/yx9ngG1N/scrnli-9-2-2024-12-04-19-PM.png)

## Overview

The Alhuda Florist website showcases our diverse range of flower collections, offers online ordering capabilities, and provides information about our services. This project includes both the front-end and back-end components of the website.
## Privacy & Policy

The source code in this repository is made available for the following purposes:

- **Educational Use**: To help learners understand and explore the structure, functionality, and technologies used in the Alhuda Florist website.
- **Development Practice**: To provide a reference for developers seeking to improve their coding skills and practices.

## Use of Source Code

The source code provided in this repository is intended solely for educational and learning purposes. You are permitted to:

- **Study and Learn**: Examine the code to understand its implementation and design.
- **Experiment**: Modify and test the code to gain hands-on experience.

You are not permitted to:

- **Copy for Commercial Use**: Reproduce or use the code for any commercial purposes or in a manner that competes with the original Alhuda Florist service.
- **Redistribute**: Distribute or share the code, either as-is or modified, without proper attribution and consent.
- **Use in Production**: Deploy the code in a production environment without proper authorization.

## Privacy of Personal Information

If you interact with this repository or related services, we may collect and process certain information. However, this repository itself does not directly collect personal information. Any personal data collected through interactions (e.g., issues, pull requests) should be handled in accordance with the general GitHub privacy policies.


## Features

- **Admin Dashboard**: Manage orders, flower collections, and view analytics.
- **Authentication**: Complete user authentication including login, logout, password recovery, and email verification.
- **WhatsApp Integration**: Direct communication and support via WhatsApp.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Technology Stack

- **Front-End**: Next.js, React, Tailwind CSS (or specify another CSS framework)
- **Back-End**: Next.js API routes
- **Database**: MongoDB, managed via Prisma
- **Authentication**: NextAuth.js, Email verification, password reset.
- **WhatsApp Integration**: WhatsApp Business API
- **Hosting**: Vercel

## Installation

To run this project locally, follow these steps:

### Prerequisites

- Node.js (version 14 or higher)
- MongoDB

### Clone the Repository

```bash
git clone https://github.com/yourusername/alhudaflorist.git
cd alhudaflorist
```
## Install Dependencies
For both front-end and back-end:
```bash
npm install
```

## Environment Variables
Create a .env file in the root directory and add the following environment variables:
```makefile
DATABASE_URL=MONGO_URI
NEXTAUTH_SECRET=Your next-auth secret
NEXTAUTH_URL=http://localhost:3000
TEMPLATE_ID=resend email template id
SERVICE_ID=resend service id
RESEND_API_KEY=Your resend api key
JWT_SECRET=Your JWT secret key
```
## Run the Application
Start development application:
```bash
npm run dev
```
Visit `http://localhost:3000` in your browser to view the website.
```bash
npx prisma studio
```
Visit `http://localhost:5555` in your browser to view prisma mongodb database.

## Usage

-   **Home Page**: View featured flower collections and promotions.
    
-   **Collections Page**: Explore different flower collections.
    
-   **About Page**: To Knows more about Alhuda florist.
    
-   **Contact Page**: Find contact details and store location.

## Contributing

We welcome contributions to improve the Alhuda Florist website. Please follow these guidelines:

1.  **Fork the Repository**: Create a personal copy of the repository on GitHub.
2.  **Create a Branch**: Use a descriptive name for your branch, e.g., `feature/add-payment-gateway`.
3.  **Make Changes**: Implement your changes and test thoroughly.
4.  **Submit a Pull Request**: Provide a clear description of the changes and why they should be merged.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Contact

For any questions or support, please contact us at:

-   **Email**: sahidularif1@gmail.com

Thank you for visiting the Alhuda Florist website repository!