# Modern E-Commerce Platform

![E-Commerce Banner](../Design/Banner.png)

## Project Description

A modern, full-featured e-commerce platform built with **Next.js**, **TypeScript**, and **Tailwind CSS**. This project showcases a complete online shopping experience with seamless bilingual support (Arabic & English), secure authentication, and a comprehensive admin dashboard for managing products, orders, and users.

Designed with performance and scalability in mind, it leverages the latest Next.js App Router and Server Actions, providing a blazing-fast user experience optimized for SEO and conversion.

## Live Demo

🚀 **View Live Demo:** [https://ecommerce-pi-seven-36.vercel.app](https://ecommerce-pi-seven-36.vercel.app)
---

## Key Features

### User Features

- **Authentication**: Secure Login and Registration system with JWT.
- **Browse Products**: Advanced filtering, search, and category navigation.
- **Product Details**: Detailed product pages with image galleries, specifications, and related items.
- **Shopping Cart**: Real-time cart management with quantity adjustments.
- **Checkout Process**: Streamlined checkout flow with address management and payment integration.
- **Order History**: Users can track their order status and view past purchases.
- **Reviews System**: Verified purchase reviews and ratings.
- **Performance**: Highly optimized image loading and caching strategies.
- **Internationalization**: Full RTL support for Arabic and LTR for English using `next-intl`.

### Admin Features

- **Admin Dashboard**: Overview of sales, orders, and user statistics.
- **Product Management**: Create, edit, and delete products with image uploads.
- **Category Management**: Organize products into categories and subcategories.
- **Brand Management**: Manage brand partnerships and listings.
- **Order Management**: View and update order statuses (Processing, Shipped, Delivered).
- **Review Moderation**: Approve or remove user reviews.
- **User Management**: Manage customer accounts and permissions.

---

## Tech Stack

- **Frontend**: [Next.js (App Router)](https://nextjs.org/), [React](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/), [Shadcn UI](https://ui.shadcn.com/) (or similar UI library if used)
- **Internationalization**: [next-intl](https://next-intl-docs.vercel.app/)
- **State Management**: React Context / Hooks
- **Authentication**: JWT (JSON Web Tokens)
- **Backend Integration**: RESTful API
- **Deployment**: [Vercel](https://vercel.com/)

---

## Folder Structure

```
├── app/                  # Next.js App Router (Pages & Layouts)
│   ├── [locale]/         # Localized routes (en/ar)
│   │   ├── (auth)/       # Authentication routes
│   │   ├── (root)/       # Main application routes
│   │   └── layout.tsx    # Root layout
│   ├── api/              # API routes / Server Actions
│   └── globals.css       # Global styles
├── components/           # Reusable UI components
├── services/             # API service calls
├── hooks/                # Custom React hooks
├── types/                # TypeScript interfaces and types
├── context/              # React Context Providers (Cart, Auth)
├── middleware.ts         # Middleware for Auth & Localization
├── next.config.mjs       # Next.js configuration
└── tailwind.config.ts    # Tailwind configuration
```

---

## Getting Started

Follow these steps to set up the project locally:

### 1. Clone the repository

```bash
git clone https://github.com/mohamedFawzei/E-Commerce.git
cd E-Commerce
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 4. Build for production

```bash
npm run build
npm start
```


## Screenshots

|                                          Home Page                                          |                                      Products Page                                      |
| :-----------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------: |
|       ![Home Page](../Design/Home%20page.png)       | ![Products Page](../Design/Product%20page.png) |
|                                     **Brand Page**                                     |                                    **Checkout Page**                                    |
| ![Brand Page](../Design/Brand%20Page.png) | ![Checkout Page](../Design/Checkout%20page.png) |

---

## Author

**Mohamed Fawzei**

- **Role**: Frontend Developer | Next.js - TypeScript
- **LinkedIn**: [Link to LinkedIn](www.linkedin.com/in/mohamed--fawzi)
- **GitHub**: [Link to GitHub](https://github.com/mohamedFawzei)


