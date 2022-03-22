import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../Footer'

const AppLayout: NextPage = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>DeFIRE</title>
        <meta name="description" content="DeFIRE landing page" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className="bg-center bg-no-repeat bg-cover bg-opacity-10" style={{ backgroundRepeat: "no-repeat", backgroundAttachment: "fixed", backgroundImage: "url(/images/back.jpg)" }}>
        {children}
        <Footer />
      </main>
    </div>
  )
}

export default AppLayout
