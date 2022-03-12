import Head from "next/head";
import { Fragment, useEffect, useState, useRef } from "react";
import Image from "next/image";
import Navigation from "../components/Navigation";

export default function Home() {
  useEffect(() => {});

  return (
    <Fragment>
      <Head>
        <title>BAYC | NFTWorlds Project</title>
        <meta name='description' content='BAYC' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <Navigation />
      <main>
        <section className='relative h-screen max-w-[100vw] px-8 flex flex-col justify-center items-center w-screen bg-white dark:bg-[#080808]'>
          <a className='cursor-pointer absolute h-[s0px] w-[30px] z-50 left-[20%] top-[52%]'>
            <Image
              src='/static/images/clickable.png'
              width='100'
              height='100'
              alt='Clickable Icon'
            />
          </a>
          <div className='h-[80vh] 3xl:w-[98vw] rounded-2xl mt-16 overflow-hidden'>
            <Image
              className=''
              src='/static/images/tempHero.png'
              width='3000'
              height='1687'
              alt='BAYC Hero Image'
            />
          </div>
          <a className='font-Outfit flex flex-row items-center justify-center gap-4 font-normal underline-stable text-black dark:text-white place-self-end mt-8 text-2xl'>
            View Trailer
            <div className='w-[18px]'>
              <Image
                className='invert'
                src='/static/images/arr-icon.svg'
                width='300'
                height='300'
                alt='Right Arrow Icon'
              />
            </div>
          </a>
        </section>
      </main>
    </Fragment>
  );
}
