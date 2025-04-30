import { type NextRequest, NextResponse } from "next/server"
import { createUser, getUserByEmail } from "@/lib/user-service"

export async function POST(request: NextRequest) {
  try {
    const { name, email, password } = await request.json()

    // Validation des champs
    if (!name || !email || !password) {
      return NextResponse.json({ error: "Tous les champs sont requis" }, { status: 400 })
    }

    // Vérifier si l'utilisateur existe déjà
    const existingUser = await getUserByEmail(email)
    if (existingUser) {
      return NextResponse.json({ error: "Cet email est déjà utilisé" }, { status: 409 })
    }

    // Créer l'utilisateur
    const user = await createUser(name, email, password)

    return NextResponse.json({ message: "Utilisateur créé avec succès", user }, { status: 201 })
  } catch (error) {
    console.error("Erreur lors de l'inscription:", error)
    return NextResponse.json({ error: "Une erreur s'est produite lors de l'inscription" }, { status: 500 })
  }
}

