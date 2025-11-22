"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center px-4 py-20">
            <div className="max-w-4xl mx-auto text-center space-y-8">
                {/* Profile Picture */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-center"
                >
                    <div className="relative h-48 w-48 md:h-56 md:w-56 overflow-hidden rounded-full border-4 border-primary/20 shadow-xl">
                        <img
                            src="/profile.png"
                            alt="Dhruvin Patel"
                            className="h-full w-full object-cover"
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
                        AI Engineer & Full-Stack Developer
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground mt-3">
                        Building intelligent systems with cutting-edge AI and modern web technologies
                    </p>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-base text-muted-foreground max-w-2xl mx-auto"
                >
                    Specializing in Agentic AI, RAG systems, Machine Learning, and scalable full-stack applications.
                    Transforming complex problems into elegant AI-powered solutions.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-wrap gap-4 justify-center"
                >
                    <Button asChild size="lg">
                        <Link href="#projects">
                            View My Work <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                        <Link href="#contact">
                            Get In Touch
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}
