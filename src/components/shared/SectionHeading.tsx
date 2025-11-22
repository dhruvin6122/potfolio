import { cn } from "@/lib/utils"

interface SectionHeadingProps {
    title: string
    subtitle?: string
    className?: string
}

export function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
    return (
        <div className={cn("flex flex-col gap-2 text-center md:text-left", className)}>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
            {subtitle && <p className="text-lg text-muted-foreground">{subtitle}</p>}
        </div>
    )
}
