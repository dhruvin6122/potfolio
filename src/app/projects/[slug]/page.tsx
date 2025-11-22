import { PROJECTS } from "@/lib/data"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

interface ProjectPageProps {
    params: {
        slug: string
    }
}

export function generateStaticParams() {
    return PROJECTS.map((project) => ({
        slug: project.id,
    }))
}

export default function ProjectPage({ params }: ProjectPageProps) {
    const project = PROJECTS.find((p) => p.id === params.slug)

    if (!project) {
        notFound()
    }

    return (
        <main className="container py-24 min-h-screen">
            <div className="mb-8">
                <Button asChild variant="ghost" className="pl-0 hover:pl-2 transition-all">
                    <Link href="/#projects">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
                    </Link>
                </Button>
            </div>

            <div className="grid gap-12 lg:grid-cols-2">
                <div className="space-y-8">
                    <div>
                        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.tags.map((tag) => (
                                <Badge key={tag} variant="secondary">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            {project.longDescription}
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <Button asChild size="lg">
                            <Link href={project.demoLink} target="_blank">
                                <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg">
                            <Link href={project.repoLink} target="_blank">
                                <Github className="mr-2 h-4 w-4" /> Source Code
                            </Link>
                        </Button>
                    </div>
                </div>

                <div className="space-y-6">
                    {project.images.map((image, index) => (
                        <div key={index} className="overflow-hidden rounded-xl border bg-muted shadow-lg">
                            <img
                                src={image}
                                alt={`${project.title} screenshot ${index + 1}`}
                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}
