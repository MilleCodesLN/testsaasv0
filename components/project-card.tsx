import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Scissors, RibbonIcon as Yarn } from "lucide-react"

interface Project {
  id: number
  title: string
  type: string
  progress: number
  image: string
  materials: string[]
  updatedAt: string
}

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          <div className="absolute right-2 top-2">
            <Badge variant="secondary" className="bg-white">
              {project.type === "Tricot" ? (
                <Yarn className="mr-1 h-3 w-3 text-rose-500" />
              ) : (
                <Scissors className="mr-1 h-3 w-3 text-rose-500" />
              )}
              {project.type}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-xl">{project.title}</CardTitle>
        <div className="mt-2">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>Progression</span>
            <span>{project.progress}%</span>
          </div>
          <div className="mt-1 h-2 w-full rounded-full bg-gray-100">
            <div className="h-2 rounded-full bg-rose-500" style={{ width: `${project.progress}%` }} />
          </div>
        </div>
        <div className="mt-4">
          <h4 className="text-sm font-medium">Matériaux:</h4>
          <div className="mt-1 flex flex-wrap gap-1">
            {project.materials.map((material, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {material}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between border-t p-4 text-sm text-muted-foreground">
        <span>Mis à jour {project.updatedAt}</span>
        <Link href={`/dashboard/projects/${project.id}`} className="text-rose-500 hover:underline">
          Voir détails
        </Link>
      </CardFooter>
    </Card>
  )
}
