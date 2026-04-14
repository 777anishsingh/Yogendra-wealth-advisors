# Yogendra Singh Panwar — Financial Advisor Website

A premium, high-performance landing page and portfolio website built for Yogendra Singh Panwar, a trusted LIC Agent and Financial Advisor based in Dehradun, Uttarakhand.

## 🚀 Features

- **Premium Dark-Themed UI:** A rich aesthetic utilizing Navy, Gold, and LIC Blue with glassmorphism components.
- **Interactive 3D Hero:** A golden rotating wireframe icosahedron with a dynamic particle field built using Three.js and React Three Fiber.
- **Live Calculators:** Built-in dynamic Loan/EMI Calculator and LIC Premium Estimator backed by Recharts.
- **Bilingual Interface:** Strategic use of English and Hindi for maximum local audience accessibility.
- **Robust Lead Generation:** Contact form integrated directly into the page with validation and email delivery.
- **Built-in SEO:** Statically generated pages with specialized LocalBusiness JSON-LD schema, perfect for search ranking.

## 🛠️ Technology Stack

- **Framework:** [Next.js 16 (App Router)](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Components:** [@base-ui/react](https://base-ui.com/) with extended Shadcn styling
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **3D Graphics:** [Three.js](https://threejs.org/) & [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/)
- **Data Visualization:** [Recharts](https://recharts.org/)
- **Form Handling:** [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **Email Backend:** [Nodemailer](https://nodemailer.com/)

## 💻 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository and install dependencies:
```bash
npm install
```

2. **Environment Variables**: To run the email functionality locally, create a `.env.local` file in the root directory and add your Gmail SMTP credentials.
```env
SMTP_EMAIL=your_email@gmail.com
SMTP_PASSWORD=your_app_password
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 👨‍💻 Developed By

Developed with ❤️ by [Anish Singh Butola](https://github.com/777anishsingh).
