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
      <main className='bg-white dark:bg-[#080808]'>
        <div className='popup-modal flex flex-col fixed w-screen h-0 dark:bg-white bg-[#080808] inset-0 z-20 overflow-hidden'>
          <div className='relative h-[50vh] overflow-hidden'>
            <div className='absolute'>
              <Image
                className='absolute popup-img'
                src='/static/images/Slider2.png'
                width='3840'
                height='2160'
                alt='Popup Image'
              />
            </div>
          </div>
          <div className='relative h-[50vh] overflow-hidden'></div>
          <a
            onClick={() => {
              document
                .querySelector(".popup-modal")
                .classList.remove("modal-active");
            }}
            className='font-Outfit cursor-pointer absolute bottom-0 right-0 flex flex-row items-center justify-center gap-4 font-light mr-16 mb-16 text-white mix-blend-difference text-2xl'
          >
            Close Popup
            <div className='w-[18px]'>
              <Image
                className='invert rotate-[-90deg]'
                src='/static/images/arr-icon.svg'
                width='300'
                height='300'
                alt='Right Arrow Icon'
              />
            </div>
          </a>
        </div>
        <section className='relative h-screen max-w-[100vw] z-10 px-8 flex flex-col justify-center items-center w-screen'>
          <a
            onClick={() => {
              document
                .querySelector(".popup-modal")
                .classList.add("modal-active");
            }}
            className='cursor-pointer absolute h-[s0px] w-[30px] z-50 left-[20%] top-[52%]'
          >
            <Image
              src='/static/images/clickable.png'
              width='100'
              height='100'
              alt='Clickable Icon'
            />
          </a>
          <div className='relative h-fit max-h-[80vh] 3xl:w-[98vw] rounded-2xl mt-16 overflow-hidden'>
            <video
              className='hero-hidden rounded-2xl trailerVid absolute inset-0 z-50 w-full max-w-none'
              src='/static/videos/TrailerSourceFixed.mp4'
              autoPlay
              muted
              controls
              disablePictureInPicture
              controlsList='nodownload noremoteplayback noplaybackrate'
              playsInline
              loop
            ></video>
            <Image
              className='heroImg rounded-2xl'
              src='/static/images/tempHero.png'
              width='3840'
              height='1600'
              alt='BAYC Hero Image'
            />
          </div>
          <a
            onClick={() => {
              document
                .querySelector(".trailerVid")
                .classList.toggle("hero-hidden");
              const timer = setTimeout(() => {
                if (
                  !document
                    .querySelector(".trailerVid")
                    .classList.contains("hero-hidden")
                )
                  document.querySelector(".heroChangeBtn").innerText =
                    "City View";
                else
                  document.querySelector(".heroChangeBtn").innerHTML =
                    "View Trailer";
              }, 100);
            }}
            className='font-Outfit flex flex-row items-center justify-center gap-4 font-light underline-stable text-black dark:text-white place-self-end mt-8 text-2xl'
          >
            <span className='heroChangeBtn'>View Trailer</span>
            <div className='w-[18px]'>
              <Image
                className='dark:invert'
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
