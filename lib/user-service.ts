import bcrypt from "bcrypt"

// Simulation d'une base de données utilisateur
// Dans une application réelle, vous utiliseriez une vraie base de données
const users: User[] = []

export interface User {
  id: string
  name: string
  email: string
  password: string
  createdAt: Date
}

export async function createUser(name: string, email: string, password: string): Promise<User | null> {
  // Vérifier si l'utilisateur existe déjà
  const existingUser = users.find((user) => user.email === email)
  if (existingUser) {
    return null
  }

  // Hacher le mot de passe avec bcrypt
  const saltRounds = 10
  const hashedPassword = await bcrypt.hash(password, saltRounds)

  // Créer un nouvel utilisateur
  const newUser: User = {
    id: Date.now().toString(),
    name,
    email,
    password: hashedPassword,
    createdAt: new Date(),
  }

  // Ajouter l'utilisateur à notre "base de données"
  users.push(newUser)

  // Retourner l'utilisateur sans le mot de passe
  const { password: _, ...userWithoutPassword } = newUser
  return userWithoutPassword as User
}

export async function getUserByEmail(email: string): Promise<User | null> {
  return users.find((user) => user.email === email) || null
}

export async function verifyPassword(user: User, password: string): Promise<boolean> {
  return bcrypt.compare(password, user.password)
}

// Ajouter un utilisateur de test
createUser("Utilisateur Test", "user@example.com", "password")
  .then(() => console.log("Utilisateur de test créé"))
  .catch(console.error)
