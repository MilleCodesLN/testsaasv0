import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Bookmark, Scissors, RibbonIcon as Yarn } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link className="flex items-center justify-center" href="/">
          <Yarn className="h-6 w-6 text-rose-500" />
          <span className="ml-2 text-lg font-bold">CraftTracker</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Fonctionnalités
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Tarifs
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Blog
          </Link>
        </nav>
        <div className="ml-4 flex items-center gap-2">
          <Link href="/login">
            <Button variant="ghost" size="sm">
              Connexion
            </Button>
          </Link>
          <Link href="/register">
            <Button size="sm">S'inscrire</Button>
          </Link>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Gérez vos projets créatifs en toute simplicité
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Organisez vos projets de tricot et crochet, suivez votre progression et ne perdez plus jamais vos
                    idées.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/register">
                    <Button size="lg" className="bg-rose-500 hover:bg-rose-600">
                      Commencer gratuitement
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#features">
                    <Button size="lg" variant="outline">
                      Découvrir les fonctionnalités
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-full overflow-hidden rounded-xl bg-gradient-to-b from-rose-100 to-rose-50 p-4 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <Yarn className="h-5 w-5 text-rose-500" />
                        <h3 className="font-medium">Projet Écharpe</h3>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full mb-2">
                        <div className="h-2 bg-rose-500 rounded-full w-3/4"></div>
                      </div>
                      <p className="text-xs text-muted-foreground">75% terminé</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <Scissors className="h-5 w-5 text-rose-500" />
                        <h3 className="font-medium">Amigurumi</h3>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full mb-2">
                        <div className="h-2 bg-rose-500 rounded-full w-1/4"></div>
                      </div>
                      <p className="text-xs text-muted-foreground">25% terminé</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <Bookmark className="h-5 w-5 text-rose-500" />
                        <h3 className="font-medium">Idées</h3>
                      </div>
                      <p className="text-xs text-muted-foreground">12 patrons sauvegardés</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <Yarn className="h-5 w-5 text-rose-500" />
                        <h3 className="font-medium">Matériaux</h3>
                      </div>
                      <p className="text-xs text-muted-foreground">24 fils en stock</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Fonctionnalités</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Tout ce dont vous avez besoin pour gérer vos projets créatifs
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-rose-100 text-rose-500">
                  <Bookmark className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Organisez vos projets</h3>
                  <p className="text-muted-foreground">
                    Créez et gérez tous vos projets de tricot et crochet au même endroit.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-rose-100 text-rose-500">
                  <Scissors className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Suivez votre progression</h3>
                  <p className="text-muted-foreground">
                    Gardez une trace de votre avancement et ne perdez plus le fil de vos projets.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-rose-100 text-rose-500">
                  <Yarn className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Gérez vos matériaux</h3>
                  <p className="text-muted-foreground">
                    Cataloguez vos fils, aiguilles et autres matériaux pour toujours savoir ce que vous avez.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full border-t px-4 md:px-6">
        <p className="text-xs text-muted-foreground">© 2025 CraftTracker. Tous droits réservés.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Conditions d'utilisation
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Politique de confidentialité
          </Link>
        </nav>
      </footer>
    </div>
  )
}
