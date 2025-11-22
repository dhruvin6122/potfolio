import Link from "next/link"
import { Github, Linkedin, Instagram, Mail, Phone } from "lucide-react"
import { SOCIALS } from "@/lib/data"

export function Footer() {
    return (
        <footer className="border-t bg-muted/50">
            <div className="container py-12 md:py-16">
                <div className="grid gap-8 md:grid-cols-3">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold">Dhruvin<span className="text-primary"> Patel</span></h3>
                        <p className="text-sm text-muted-foreground">
                            AI Engineer & Full-Stack Developer
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold">Quick Links</h4>
                        <nav className="flex flex-col space-y-2 text-sm">
                            <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                                Home
                            </a>
                            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                                About
                            </a>
                            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                                Services
                            </a>
                            <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                                Projects
                            </a>
                            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                                Contact
                            </a>
                        </nav>
                    </div>

                    {/* Contact & Social */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold">Connect</h4>
                        <div className="flex flex-col space-y-3 text-sm">
                            <a href={`mailto:${SOCIALS.email}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                                <Mail className="h-4 w-4" />
                                {SOCIALS.email}
                            </a>
                            <a href={`tel:${SOCIALS.phone}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                                <Phone className="h-4 w-4" />
                                {SOCIALS.phone}
                            </a>
                        </div>
                        <div className="flex gap-4 pt-2">
                            <Link href={SOCIALS.github} target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                                <Github className="h-5 w-5" />
                                <span className="sr-only">GitHub</span>
                            </Link>
                            <Link href={SOCIALS.linkedin} target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                            <Link href={SOCIALS.instagram} target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} Dhruvin Patel. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
