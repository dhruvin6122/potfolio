"use client"
import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { PROJECTS } from "@/lib/data"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

function ProjectImageSlider({ images, title }: { images: string[]; title: string }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
    const [selectedIndex, setSelectedIndex] = React.useState(0)

    const scrollPrev = React.useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
    const scrollNext = React.useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

    const onSelect = React.useCallback(() => {
        if (!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [emblaApi])

    React.useEffect(() => {
        if (!emblaApi) return
        onSelect()
        emblaApi.on("select", onSelect)
        return () => {
            emblaApi.off("select", onSelect)
        }
    }, [emblaApi, onSelect])

    return (
        <div className="relative aspect-video w-full bg-muted overflow-hidden">
            <div className="h-full" ref={emblaRef}>
                <div className="flex h-full">
                    {images.slice(0, 3).map((image, index) => (
                        <div className="flex-[0_0_100%] min-w-0 h-full" key={index}>
                            <img
                                src={image}
                                alt={`${title} ${index + 1}`}
                                className="h-full w-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Slider buttons */}
            <button
                onClick={scrollPrev}
                className="absolute left-1.5 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-1.5 text-gray-900 shadow-md hover:bg-white transition-all z-10"
                aria-label="Previous"
            >
                <ChevronLeft className="h-4 w-4" />
            </button>
            <button
                onClick={scrollNext}
                className="absolute right-1.5 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-1.5 text-gray-900 shadow-md hover:bg-white transition-all z-10"
                aria-label="Next"
            >
                <ChevronRight className="h-4 w-4" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
                {images.slice(0, 3).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => emblaApi?.scrollTo(index)}
                        className={`h-1.5 rounded-full transition-all ${index === selectedIndex ? "bg-white w-4" : "bg-white/60 w-1.5"
                            }`}
                        aria-label={`Image ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}

export function ProjectsCarousel() {
    const [emblaRef] = useEmblaCarousel({ align: "start", loop: false })

    return (
        <div className="w-full overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-y gap-4 ml-[-1rem]">
                {PROJECTS.map((project) => (
                    <div className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_32%]" key={project.id}>
                        <Card className="h-full flex flex-col overflow-hidden group hover:border-primary transition-colors">
                            <ProjectImageSlider images={project.images} title={project.title} />

                            <CardHeader className="pb-3">
                                <CardTitle className="line-clamp-2 leading-snug mb-1">{project.title}</CardTitle>
                                <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                            </CardHeader>

                            <CardContent className="flex-grow pt-0">
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.slice(0, 3).map((tag) => (
                                        <Badge key={tag} variant="secondary" className="text-xs">
                                            {tag}
                                        </Badge>
                                    ))}
                                    {project.tags.length > 3 && (
                                        <Badge variant="secondary" className="text-xs">
                                            +{project.tags.length - 3}
                                        </Badge>
                                    )}
                                </div>
                            </CardContent>

                            <CardFooter className="pt-3">
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button className="w-full">
                                            View Details <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                                        <DialogHeader>
                                            <DialogTitle className="text-2xl font-bold mb-2">{project.title}</DialogTitle>
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {project.tags.map((tag) => (
                                                    <Badge key={tag} variant="secondary">
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </DialogHeader>

                                        <div className="space-y-6">
                                            <ProjectImageSlider images={project.images} title={project.title} />

                                            <DialogDescription className="text-base leading-relaxed text-foreground">
                                                {project.longDescription}
                                            </DialogDescription>

                                            <div className="flex gap-4 pt-4">
                                                <Button asChild className="flex-1">
                                                    <Link href={project.demoLink} target="_blank">
                                                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                                                    </Link>
                                                </Button>
                                                <Button asChild variant="outline" className="flex-1">
                                                    <Link href={project.repoLink} target="_blank">
                                                        <Github className="mr-2 h-4 w-4" /> Source Code
                                                    </Link>
                                                </Button>
                                            </div>
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            </CardFooter>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    )
}
