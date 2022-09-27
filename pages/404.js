import Link from 'next/link'

export default function Page404() {
  return (
    <div>
      <h1>Você se perdeu e caiu na página 404!</h1>
      <Link href="/">
       Ir para a página do Home
      </Link>
    </div>
  )
}