import { PROJECTS } from "@/lib/data"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

interface ProjectPageProps {
    searchParams: {
        id?: string
    }
}

export default function ProjectDetailsPage({ searchParams }: ProjectPageProps) {
    const projectId = searchParams.id
    const project = PROJECTS.find((p) => p.id === projectId)

    if (!project) {
        return (
            <div className="container py-24 min-h-screen flex flex-col items-center justify-center text-center">
                <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                <p className="text-muted-foreground mb-8">The project you are looking for does not exist.</p>
                <Button asChild>
                    <Link href="/">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
                    </Link>
                </Button>
            </div>
        )
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
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
                        <div className="flex flex-wrap gap-2 mb-8">
                            {project.tags.map((tag) => (
                                <Badge key={tag} variant="secondary" className="text-sm px-3 py-1">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                        <div className="prose prose-invert max-w-none">
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                {project.longDescription}
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <Button asChild size="lg" className="rounded-full">
                            <Link href={project.demoLink} target="_blank">
                                <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="rounded-full">
                            <Link href={project.repoLink} target="_blank">
                                <Github className="mr-2 h-4 w-4" /> Source Code
                            </Link>
                        </Button>
                    </div>
                </div>

                <div className="space-y-6">
                    {project.images.map((image, index) => (
                        <div key={index} className="overflow-hidden rounded-2xl border bg-muted shadow-lg group">
                            <img
                                src={image}
                                alt={`${project.title} screenshot ${index + 1}`}
                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}
