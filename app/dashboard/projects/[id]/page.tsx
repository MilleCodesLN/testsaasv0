"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Calendar, Edit, Scissors, RibbonIcon as Yarn } from "lucide-react"

export default function ProjectDetailPage() {
  const params = useParams()
  const projectId = params.id
  const [notes, setNotes] = useState("Utiliser un point mousse pour les bordures.")

  // Dans une application réelle, vous récupéreriez les données du projet depuis une API
  const project = {
    id: projectId,
    title: "Écharpe d'hiver",
    type: "Tricot",
    progress: 75,
    image: "/placeholder.svg?height=300&width=600",
    materials: ["Laine mérinos", "Aiguilles 5mm"],
    updatedAt: "Il y a 2 jours",
    startDate: "15 octobre 2023",
    estimatedEndDate: "30 novembre 2023",
    pattern: "Modèle #1234 - Écharpe à côtes",
    description:
      "Une écharpe chaude et confortable pour l'hiver. Réalisée en point de côtes 2/2 avec une laine mérinos douce.",
  }

  return (
    <div className="container mx-auto py-8">
      <div className="mb-6 flex items-center gap-4">
        <Link href="/dashboard" className="flex items-center text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour au tableau de bord
        </Link>
        <h1 className="text-3xl font-bold">{project.title}</h1>
        <Badge variant="secondary" className="ml-2">
          {project.type === "Tricot" ? (
            <Yarn className="mr-1 h-3 w-3 text-rose-500" />
          ) : (
            <Scissors className="mr-1 h-3 w-3 text-rose-500" />
          )}
          {project.type}
        </Badge>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card>
            <CardHeader className="p-0">
              <div className="relative h-64 w-full">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="rounded-t-lg object-cover"
                />
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="mb-4">
                <h3 className="text-lg font-medium">Progression</h3>
                <div className="mt-2 flex items-center justify-between text-sm">
                  <span>Avancement</span>
                  <span>{project.progress}%</span>
                </div>
                <div className="mt-1 h-2 w-full rounded-full bg-gray-100">
                  <div className="h-2 rounded-full bg-rose-500" style={{ width: `${project.progress}%` }} />
                </div>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-medium">Description</h3>
                <p className="mt-2 text-muted-foreground">{project.description}</p>
              </div>

              <Tabs defaultValue="materials" className="mt-6">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="materials">Matériaux</TabsTrigger>
                  <TabsTrigger value="pattern">Patron</TabsTrigger>
                  <TabsTrigger value="notes">Notes</TabsTrigger>
                </TabsList>
                <TabsContent value="materials" className="mt-4">
                  <div className="space-y-4">
                    <h4 className="font-medium">Matériaux nécessaires:</h4>
                    <ul className="ml-6 list-disc space-y-2">
                      {project.materials.map((material, index) => (
                        <li key={index}>{material}</li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>
                <TabsContent value="pattern" className="mt-4">
                  <div className="space-y-4">
                    <h4 className="font-medium">Patron utilisé:</h4>
                    <p>{project.pattern}</p>
                  </div>
                </TabsContent>
                <TabsContent value="notes" className="mt-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">Notes personnelles:</h4>
                      <Button variant="ghost" size="sm">
                        <Edit className="mr-2 h-4 w-4" />
                        Modifier
                      </Button>
                    </div>
                    <Textarea value={notes} onChange={(e) => setNotes(e.target.value)} className="min-h-[150px]" />
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Informations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Date de début</p>
                    <p className="text-sm text-muted-foreground">{project.startDate}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Date de fin estimée</p>
                    <p className="text-sm text-muted-foreground">{project.estimatedEndDate}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Yarn className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Dernière mise à jour</p>
                    <p className="text-sm text-muted-foreground">{project.updatedAt}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full bg-rose-500 hover:bg-rose-600">Mettre à jour la progression</Button>
              <Button variant="outline" className="w-full">
                Ajouter des photos
              </Button>
              <Button variant="outline" className="w-full">
                Partager le projet
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
