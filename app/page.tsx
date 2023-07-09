import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"> 
      <h1>Hello World</h1>
      <Link href='/about'>Ir para pagina about</Link>
      <p>
        <Link href='/users'>Usuários</Link>
      </p>
    </main>
  )
}
