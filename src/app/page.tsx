import { Hero } from "@/components/home/Hero"
import { ProjectsCarousel } from "@/components/home/ProjectsCarousel"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { SERVICES, SOCIALS } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Instagram, Github, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col">
            {/* Hero Section */}
            <div id="home">
                <Hero />
            </div>

            {/* About Section */}
            <section id="about" className="container py-16 md:py-24 bg-muted/30">
                <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                    <div className="space-y-6 text-center md:text-left">
                        <SectionHeading title="About Me" subtitle="My Journey" className="items-center md:items-start mb-6" />
                        <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                            <p>
                                I’m Dhruvin Patel, an AI Engineer from India who loves turning complex ideas into intelligent, real-world systems. My main focus is on LLMs, multimodal models, RAG pipelines, agentic AI workflows, and model finetuning.
                            </p>
                            <p>
                                I also use modern full-stack technologies like React, Next.js, and Node.js to build scalable platforms that bring these AI capabilities to life. My goal is always the same: create products that solve real problems and push what’s possible with AI.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-2">
                            <Button asChild variant="outline" size="sm" className="rounded-full">
                                <Link href={SOCIALS.github} target="_blank">
                                    <Github className="mr-2 h-4 w-4" /> GitHub
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="sm" className="rounded-full">
                                <Link href={SOCIALS.linkedin} target="_blank">
                                    <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="sm" className="rounded-full">
                                <Link href={SOCIALS.instagram} target="_blank">
                                    <Instagram className="mr-2 h-4 w-4" /> Instagram
                                </Link>
                            </Button>
                        </div>
                    </div>

                    <div className="relative w-full max-w-xs md:max-w-md mx-auto">
                        <div className="aspect-square overflow-hidden rounded-2xl border-4 border-background shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-300">
                            <img
                                src="/profile.png"
                                alt="Dhruvin Patel"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="absolute -z-10 top-4 -right-4 w-full h-full rounded-2xl bg-primary/10 rotate-6"></div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="container py-16 md:py-24">
                <SectionHeading title="Services" subtitle="What I Offer" className="mb-12" />
                <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {SERVICES.map((service) => (
                        <div key={service.title} className="group rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-primary hover:-translate-y-1">
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                <service.icon className="h-6 w-6" />
                            </div>
                            <h3 className="mb-2 text-xl font-bold">{service.title}</h3>
                            <p className="text-muted-foreground text-sm md:text-base">{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="container py-16 md:py-24 bg-muted/30">
                <SectionHeading title="Featured Projects" subtitle="Recent Work" className="mb-12" />
                <ProjectsCarousel />
            </section>

            {/* Contact Section */}
            <section id="contact" className="container py-16 md:py-24">
                <div className="mx-auto max-w-3xl text-center">
                    <SectionHeading title="Get in Touch" subtitle="Let's Work Together" className="mb-8" />
                    <p className="mb-10 text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
                        Have a project in mind or just want to say hi? Feel free to reach out via email or phone. I'm always open to discussing new ideas.
                    </p>

                    <div className="grid gap-4 md:gap-6 sm:grid-cols-2">
                        <a
                            href={`mailto:${SOCIALS.email}`}
                            className="flex flex-col items-center justify-center gap-3 rounded-2xl border bg-card p-6 md:p-8 shadow-sm transition-all hover:shadow-lg hover:border-primary/50 group"
                        >
                            <div className="rounded-full bg-primary/10 p-4 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                <Mail className="h-6 w-6 md:h-8 md:w-8" />
                            </div>
                            <div className="text-center">
                                <p className="text-sm font-medium text-muted-foreground mb-1">Email Me</p>
                                <p className="text-base md:text-lg font-bold break-all">{SOCIALS.email}</p>
                            </div>
                        </a>

                        <a
                            href={`tel:${SOCIALS.phone}`}
                            className="flex flex-col items-center justify-center gap-3 rounded-2xl border bg-card p-6 md:p-8 shadow-sm transition-all hover:shadow-lg hover:border-primary/50 group"
                        >
                            <div className="rounded-full bg-primary/10 p-4 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                <Phone className="h-6 w-6 md:h-8 md:w-8" />
                            </div>
                            <div className="text-center">
                                <p className="text-sm font-medium text-muted-foreground mb-1">Call Me</p>
                                <p className="text-base md:text-lg font-bold">{SOCIALS.phone}</p>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    )
}
