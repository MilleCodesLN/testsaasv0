"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BookOpen,
  Calendar,
  Home,
  LogOut,
  Plus,
  Search,
  Settings,
  Scissors,
  User,
  RibbonIcon as Yarn,
} from "lucide-react"
import { ProjectCard } from "@/components/project-card"

export default function DashboardPage() {
  const [searchQuery, setSearchQuery] = useState("")

  // Données de démonstration pour les projets
  const projects = [
    {
      id: 1,
      title: "Écharpe d'hiver",
      type: "Tricot",
      progress: 75,
      image: "/placeholder.svg?height=100&width=200",
      materials: ["Laine mérinos", "Aiguilles 5mm"],
      updatedAt: "Il y a 2 jours",
    },
    {
      id: 2,
      title: "Amigurumi Lapin",
      type: "Crochet",
      progress: 25,
      image: "/placeholder.svg?height=100&width=200",
      materials: ["Coton", "Crochet 3mm"],
      updatedAt: "Il y a 1 semaine",
    },
    {
      id: 3,
      title: "Bonnet à pompon",
      type: "Tricot",
      progress: 50,
      image: "/placeholder.svg?height=100&width=200",
      materials: ["Laine alpaga", "Aiguilles circulaires"],
      updatedAt: "Hier",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-col md:flex-row">
        <aside className="flex w-full flex-col md:w-64 border-r bg-gray-50 md:h-screen">
          <div className="flex h-14 items-center border-b px-4">
            <Link className="flex items-center gap-2 font-semibold" href="/">
              <Yarn className="h-6 w-6 text-rose-500" />
              <span>CraftTracker</span>
            </Link>
          </div>
          <nav className="flex-1 overflow-auto py-2">
            <div className="px-4 py-2">
              <h2 className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Navigation</h2>
              <div className="grid gap-1">
                <Link
                  href="/dashboard"
                  className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-sm font-medium"
                >
                  <Home className="h-4 w-4" />
                  Tableau de bord
                </Link>
                <Link
                  href="/dashboard/projects"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-gray-100"
                >
                  <Scissors className="h-4 w-4" />
                  Mes projets
                </Link>
                <Link
                  href="/dashboard/patterns"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-gray-100"
                >
                  <BookOpen className="h-4 w-4" />
                  Patrons
                </Link>
                <Link
                  href="/dashboard/materials"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-gray-100"
                >
                  <Yarn className="h-4 w-4" />
                  Matériaux
                </Link>
                <Link
                  href="/dashboard/calendar"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-gray-100"
                >
                  <Calendar className="h-4 w-4" />
                  Calendrier
                </Link>
              </div>
            </div>
            <div className="px-4 py-2">
              <h2 className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Paramètres</h2>
              <div className="grid gap-1">
                <Link
                  href="/dashboard/profile"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-gray-100"
                >
                  <User className="h-4 w-4" />
                  Profil
                </Link>
                <Link
                  href="/dashboard/settings"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-gray-100"
                >
                  <Settings className="h-4 w-4" />
                  Paramètres
                </Link>
                <Link
                  href="/logout"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-gray-100"
                >
                  <LogOut className="h-4 w-4" />
                  Déconnexion
                </Link>
              </div>
            </div>
          </nav>
        </aside>
        <main className="flex flex-1 flex-col">
          <header className="flex h-14 items-center gap-4 border-b bg-white px-4 lg:px-6">
            <div className="w-full flex-1">
              <form>
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Rechercher..."
                    className="w-full appearance-none bg-white pl-8 shadow-none md:w-2/3 lg:w-1/3"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </form>
            </div>
            <Button variant="outline" size="sm" className="ml-auto gap-1">
              <Plus className="h-4 w-4" />
              <span>Nouveau projet</span>
            </Button>
          </header>
          <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">Tableau de bord</h2>
            </div>
            <Tabs defaultValue="all" className="space-y-4">
              <TabsList>
                <TabsTrigger value="all">Tous les projets</TabsTrigger>
                <TabsTrigger value="in-progress">En cours</TabsTrigger>
                <TabsTrigger value="completed">Terminés</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="in-progress" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {projects
                    .filter((project) => project.progress < 100)
                    .map((project) => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
              </TabsContent>
              <TabsContent value="completed" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {projects
                    .filter((project) => project.progress === 100)
                    .map((project) => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}
