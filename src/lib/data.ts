import { Code2, Smartphone, Brain, Globe, Database, Terminal } from "lucide-react"

export const SOCIALS = {
    github: "https://github.com/dhruvin6122",
    linkedin: "https://www.linkedin.com/in/dhruvin0612",
    instagram: "https://instagram.com/kishan81400",
    email: "pateldhruvin0612@gmail.com",
    phone: "+919727133884",
}

export const SERVICES = [
    {
        title: "AI & ML Solutions",
        description: "Advanced AI solutions using cutting-edge models. From predictive analytics to computer vision, NLP, and deep learning applications.",
        icon: Brain,
    },
    {
        title: "Agentic AI Systems",
        description: "Build autonomous AI agents that can plan, reason, and execute complex tasks. Multi-agent systems with tool integration and memory.",
        icon: Terminal,
    },
    {
        title: "AI Chatbot Development",
        description: "Intelligent RAG-powered chatbots trained on your data. 24/7 automated customer support with context-aware responses.",
        icon: Code2,
    },

    {
        title: "AI Automation",
        description: "Automate repetitive tasks and workflows using AI. Intelligent process automation to boost productivity and reduce manual work.",
        icon: Database,
    },
    {
        title: "Full-Stack Web Development",
        description: "Modern, scalable web applications using Next.js, React, and Node.js. Responsive design with seamless user experiences.",
        icon: Globe,
    },
    {
        title: "Mobile App Development",
        description: "Cross-platform mobile applications for iOS and Android using React Native. Native performance with beautiful interfaces.",
        icon: Smartphone,
    },

]

export const PROJECTS = [
    {
        id: "rag-chatbot",
        title: "RAG-Powered AI Chatbot",
        description: "Intelligent chatbot using Retrieval-Augmented Generation for accurate, context-aware responses.",
        longDescription: "This advanced AI chatbot leverages Retrieval-Augmented Generation (RAG) technology to provide highly accurate and contextually relevant responses. Built with LangChain and OpenAI's GPT-4, it retrieves information from a custom knowledge base before generating responses. The system includes vector embeddings using Pinecone for efficient semantic search, real-time streaming responses, and conversation memory. Perfect for customer support, documentation queries, and knowledge management systems. The chatbot can handle complex multi-turn conversations, maintain context across sessions, and provide source citations for its answers.",
        images: [
            "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80",
            "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
            "https://images.unsplash.com/photo-1676277791608-ac3b8c7f8c3d?w=800&q=80",
        ],
        tags: ["Python", "LangChain", "OpenAI", "Pinecone", "FastAPI"],
        demoLink: "#",
        repoLink: "#",
    },
    {
        id: "ai-agents-platform",
        title: "Autonomous AI Agents Platform",
        description: "Multi-agent system with autonomous task execution, planning, and tool integration.",
        longDescription: "An advanced autonomous AI agents platform that orchestrates multiple specialized agents to complete complex tasks. Built with LangGraph and GPT-4, the system features intelligent task decomposition, dynamic planning, memory management, and tool integration. Agents can collaborate, delegate tasks, and learn from past executions. The platform includes a visual workflow builder, real-time monitoring dashboard, and supports custom agent creation. Use cases include automated research, content generation, data analysis, and business process automation. Successfully deployed for enterprise workflow automation, reducing manual work by 80%. The system supports multi-agent collaboration where different agents specialize in tasks like web scraping, data analysis, content writing, and quality assurance.",
        images: [
            "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
            "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
            "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
        ],
        tags: ["Python", "LangGraph", "GPT-4", "LangChain", "Redis", "FastAPI"],
        demoLink: "#",
        repoLink: "#",
    },
    {
        id: "ml-image-classifier",
        title: "Computer Vision Image Classifier",
        description: "Deep learning model for multi-class image classification with 95% accuracy.",
        longDescription: "A state-of-the-art computer vision system built using TensorFlow and PyTorch for multi-class image classification. The model achieves 95% accuracy on custom datasets and includes data augmentation pipelines, transfer learning from ResNet50, and real-time inference capabilities. Features include batch processing, confidence scoring, explainable AI visualizations using Grad-CAM, and REST API for easy integration. Successfully deployed in production for quality control in manufacturing and medical imaging applications. The system can process thousands of images per minute and provides detailed classification reports with confidence scores and visual explanations of the model's decision-making process.",
        images: [
            "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
            "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&q=80",
            "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?w=800&q=80",
        ],
        tags: ["Python", "TensorFlow", "PyTorch", "OpenCV", "Flask"],
        demoLink: "#",
        repoLink: "#",
    },
    {
        id: "ecommerce-platform",
        title: "Modern E-commerce Platform",
        description: "Full-featured online store with real-time inventory, secure payments, and admin dashboard.",
        longDescription: "A comprehensive e-commerce solution built with Next.js and Stripe for secure payment processing. Features include real-time inventory management, user authentication with NextAuth, shopping cart with persistent sessions, order tracking, product search with filters, customer reviews, and a powerful admin dashboard. The platform is optimized for SEO with server-side rendering, includes automated email notifications, and supports multiple payment methods. Mobile-first design ensures excellent user experience across all devices. The admin panel provides detailed analytics, sales reports, inventory alerts, and customer management tools. Integration with shipping providers enables automatic tracking and delivery updates.",
        images: [
            "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
            "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80",
            "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?w=800&q=80",
        ],
        tags: ["Next.js", "TypeScript", "Stripe", "MongoDB", "TailwindCSS"],
        demoLink: "#",
        repoLink: "#",
    },
    {
        id: "portfolio-website",
        title: "Creative Portfolio Website",
        description: "Stunning portfolio site with smooth animations and modern design.",
        longDescription: "A visually captivating portfolio website designed for creative professionals. Built with Next.js and Framer Motion, it features smooth page transitions, parallax scrolling effects, and interactive project showcases. The site includes a blog with MDX support, contact form with email integration, dark/light mode toggle, and is fully optimized for performance with lazy loading and image optimization. The design is mobile-responsive and achieves perfect Lighthouse scores across all metrics. Features include animated project galleries, testimonial sections, skills visualization, and an integrated CMS for easy content updates. The site is deployed on Vercel with automatic deployments from GitHub.",
        images: [
            "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
            "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
        ],
        tags: ["Next.js", "Framer Motion", "TailwindCSS", "MDX"],
        demoLink: "#",
        repoLink: "#",
    },
    {
        id: "fitness-mobile-app",
        title: "Fitness Tracking Mobile App",
        description: "Cross-platform fitness app with workout plans, nutrition tracking, and progress analytics.",
        longDescription: "A comprehensive fitness tracking application built with React Native for iOS and Android. The app includes personalized workout plans, exercise video tutorials, nutrition tracking with barcode scanning, calorie counter, progress photos, and detailed analytics. Features integration with wearable devices via HealthKit and Google Fit APIs, social sharing capabilities, and gamification elements to keep users motivated. The app uses Firebase for real-time data sync and includes offline mode for gym use without internet connectivity. Users can set goals, track their progress over time, join challenges, and connect with friends for accountability. The app includes a premium subscription tier with advanced features like AI-powered meal planning and personalized coaching.",
        images: [
            "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&q=80",
            "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
            "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
        ],
        tags: ["React Native", "Firebase", "Redux", "HealthKit", "Expo"],
        demoLink: "#",
        repoLink: "#",
    },
]
