'use client'

import Link from 'next/link';
import DecryptedText from "./components/reactbits/DecryptedText/DecryptedText";
export default function Custom404() {
  return (
    <div className='error' style={{ gap: '20px', fontSize: '1em', fontWeight: 700,fontFamily: 'IBMPlexMono', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <DecryptedText characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&()' text="404 - NOT FOUND" animateOn="view" revealDirection="left" speed={100} maxIterations={20} sequential={true} style={{ fontSize: '3em' }}/>
      <p>К сожалению, такой страницы не существует.</p>
      <Link  style={{ color: 'gray', textDecoration: 'none'}} href="/">Вернуться на главную</Link>
    </div>
  );
}

