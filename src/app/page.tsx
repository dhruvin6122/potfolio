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
            <section id="about" className="container py-24 bg-muted/50">
                <div className="grid gap-12 md:grid-cols-2 items-center">
                    <div>
                        <SectionHeading title="About Me" subtitle="My Journey" className="items-start text-left mb-6" />
                        <p className="text-lg text-muted-foreground mb-6">
                            I’m Dhruvin Patel, an AI Engineer from India who loves turning complex ideas into intelligent, real-world systems. My main focus is on LLMs, multimodal models, RAG pipelines, agentic AI workflows, and model finetuning, where I enjoy building solutions that feel smart, fast, and genuinely useful. I’m driven by the challenge of creating AI that doesn’t just work in theory, but performs reliably in production.
                        </p>
                        <p className="text-lg text-muted-foreground mb-6">
                            I also use modern full-stack technologies like React, Next.js, and Node.js to build scalable platforms that bring these AI capabilities to life. Whether it's integrating advanced models into apps or crafting seamless user experiences, my goal is always the same: create products that solve real problems and push what’s possible with AI.
                        </p>
                        <div className="flex gap-4">
                            <Button asChild variant="outline">
                                <Link href={SOCIALS.github} target="_blank">
                                    <Github className="mr-2 h-4 w-4" /> GitHub
                                </Link>
                            </Button>
                            <Button asChild variant="outline">
                                <Link href={SOCIALS.linkedin} target="_blank">
                                    <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                                </Link>
                            </Button>
                            <Button asChild variant="outline">
                                <Link href={SOCIALS.instagram} target="_blank">
                                    <Instagram className="mr-2 h-4 w-4" /> Instagram
                                </Link>
                            </Button>
                        </div>
                    </div>
                    <div className="relative aspect-square overflow-hidden rounded-2xl border bg-background shadow-xl">
                        <img
                            src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80"
                            alt="About Me"
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="container py-24">
                <SectionHeading title="Services" subtitle="What I Offer" className="mb-12" />
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {SERVICES.map((service) => (
                        <div key={service.title} className="group rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-primary">
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                <service.icon className="h-6 w-6" />
                            </div>
                            <h3 className="mb-2 text-xl font-bold">{service.title}</h3>
                            <p className="text-muted-foreground">{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="container py-24 bg-muted/50">
                <SectionHeading title="Featured Projects" subtitle="Recent Work" className="mb-12" />
                <ProjectsCarousel />
            </section>

            {/* Contact Section */}
            <section id="contact" className="container py-24">
                <div className="mx-auto max-w-2xl text-center">
                    <SectionHeading title="Get in Touch" subtitle="Let's Work Together" className="mb-8" />
                    <p className="mb-12 text-lg text-muted-foreground">
                        Have a project in mind or just want to say hi? Feel free to reach out via email or phone.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <a
                            href={`mailto:${SOCIALS.email}`}
                            className="flex items-center justify-center gap-4 rounded-xl border bg-card p-8 shadow-sm transition-all hover:shadow-md hover:border-primary group"
                        >
                            <div className="rounded-full bg-primary/10 p-4 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                <Mail className="h-6 w-6" />
                            </div>
                            <div className="text-left">
                                <p className="text-sm font-medium text-muted-foreground">Email Me</p>
                                <p className="text-lg font-bold">{SOCIALS.email}</p>
                            </div>
                        </a>

                        <a
                            href={`tel:${SOCIALS.phone}`}
                            className="flex items-center justify-center gap-4 rounded-xl border bg-card p-8 shadow-sm transition-all hover:shadow-md hover:border-primary group"
                        >
                            <div className="rounded-full bg-primary/10 p-4 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                <Phone className="h-6 w-6" />
                            </div>
                            <div className="text-left">
                                <p className="text-sm font-medium text-muted-foreground">Call Me</p>
                                <p className="text-lg font-bold">{SOCIALS.phone}</p>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    )
}
