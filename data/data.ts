export const projects = [
    {
        id: 1,
        title: "Food Hub",
        description: "A food ordering application. User can order food online.",
        fullDescription: "This is a food ordering application. It has admin dashboard, provider dashboard and customer dashboard. From admin dashboard, admin can see and manage all the users, can see orders and can manage categories. From provider dashboard, provider can see and manage their orders and can manage their meals. From customer dashboard, customer can browse and order food, can see and manage their orders, make payment through paypal and can manage their profile.",
        image: "/foodhub.png",
        stack: ["TypeScript", "Next.js", "Tailwind CSS", "Express.js", "Prisma", "PostgreSQL", "Redux Toolkit", "Paypal"],
        live: "https://food-hub-frontend-gamma.vercel.app/",
        github: "https://github.com/wali55/food-hub-frontend",
        challenges: "First I tried to use better auth for authentication for this application. But My user table is linked to other tables and I had difficulty implemented better auth. Then I used custom auth for this application.",
        improvements: "When creating a meal I want to give a feature, so that provider can add image of the food. I want to use cloudinary to store those images."
    },
    {
        id: 2,
        title: "Inventory Management App",
        description: "A full-stack web application for managing inventories.",
        fullDescription: "A full-stack web application for managing inventories. Developed authentication and profile management features with secure user access controls. Implemented inventory creation with tags, categories, and image uploads. Built a custom drag-and-drop inventory ID builder and added support for dynamic custom fields, including text, number, and boolean types.",
        image: "/inventory.png",
        stack: ["JavaScript", "React", "Tailwind CSS", "Express.js", "Prisma", "PostgreSQL", "Redux Toolkit", "Cloudinary"],
        live: "https://task5-frontend-tau.vercel.app/",
        github: "https://github.com/wali55/task5-frontend",
        challenges: "Implementation of dynamic custom fields was very challenging for me.",
        improvements: "Want to add discussion and comment section where people can give their opinion about inventory items."
    },
    {
        id: 3,
        title: "Collaborative Presentation App",
        description: "A real-time collaborative presentation platform.",
        fullDescription: "A real-time collaborative presentation platform. Developed a real-time collaborative presentation tool enabling users to create, edit, and share presentations using nickname-based access. Implemented role-based permissions allowing creators to grant editing rights to viewers. Built dynamic slide management features including add, edit, delete, and drag-and-drop text blocks. Integrated Socket.io for real-time updates and live presentation mode, ensuring synchronized slide changes across all users.",
        image: "/presentation.png",
        stack: ["JavaScript", "React", "Tailwind CSS", "Express.js", "Prisma", "PostgreSQL", "Redux Toolkit", "Socket.io"],
        live: "https://task6-frontend.vercel.app/",
        github: "https://github.com/wali55/task6-frontend",
        challenges: "Implementation of real time add text, edit text, delete text, drag-and-drop text was very challenging for me.",
        improvements: "Want to add more features apart form text. Like adding images."
    }
]