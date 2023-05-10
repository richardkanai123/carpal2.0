import LoginForm from "@/Components/LoginForm";

export default function Home() {
  return (
    <main className="flex w-screen min-h-screen max-h-fit flex-col items-center justify-center align-middle ">
      <h1 className="text-6xl font-bold text-center text-gray-100 mb-4">Carpal</h1>
      <LoginForm />
    </main >
  )
}
