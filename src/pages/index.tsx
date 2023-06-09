import Head from 'next/head'

import Menu from '@/components/menu'
import LoginRegister from '@/components/login-register'
import { useCallback, useState } from 'react'

export default function Home() {
  const [valor, setValor] = useState(true);

  const enable = useCallback(()=>{
    setValor(true);    
  }, []);

  const disable = useCallback(()=>{
    setValor(false);    
  }, []);

  return (
    <>
      <Head>
        <title>.: WebLogin - Exemplo de interface login :.</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Menu action={enable} logon={false}/>
        <LoginRegister isOpen={valor} action={disable}/>
      </main>
    </>
  )
}
