import Head from 'next/head'

export default function PageTitle({children, href, ...props}){
  return (
    <Head  {...props}>
      <title>{children}</title>
    </Head>
  )
}