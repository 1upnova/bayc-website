import Head from "next/head";
import { Fragment, useEffect, useState, useRef } from "react";
import Image from "next/image";
import Navigation from "../components/Navigation";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: {
    y: 10,
    opacity: 0,
    skewY: 0.5,
  },
  inView: {
    y: 0,
    skewY: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const stagger = {
  inView: {
    transition: {
      staggerChildren: 0.6,
    },
  },
};

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
          <motion.div
            initial='initial'
            whileInView='inView'
            variants={stagger}
            className='px-64 pt-32 relative h-[50vh] flex flex-row overflow-hidden text-white dark:text-black'
          >
            <motion.div
              initial='initial'
              whileInView='inView'
              variants={stagger}
              className='w-1/2'
            >
              <motion.h1
                variants={fadeInUp}
                className='pb-4 font-Outfit font-medium text-6xl'
              >
                Quest Name
              </motion.h1>
              <motion.span
                variants={fadeInUp}
                className='font-Outfit font-light text-2xl'
              >
                Main Square
              </motion.span>
            </motion.div>
            <motion.p
              initial='initial'
              whileInView='inView'
              variants={stagger}
              className='flex flex-col w-1/2 font-Outfit font-light text-2xl'
            >
              <motion.span variants={fadeInUp}>
                Lorem ipsum dolor sit amet. Nam hendrerit, justo eget
              </motion.span>
              <motion.span variants={fadeInUp}>
                pretium orci purus. Morbi odio, varius nec hendrerit quis,
                eleifend
              </motion.span>
              <motion.span variants={fadeInUp}>
                posuere vel. Lectus purus, efficitur sit amet justo ac, commodo.
              </motion.span>
              <motion.span variants={fadeInUp}>
                Suspendisse ultrices diam, hendrerit facilisis velit malesuada,
              </motion.span>
              <motion.span variants={fadeInUp}>
                Fusce mattis dolor pharetra, nec vulputate. Aliquam eu.
              </motion.span>
              <motion.span variants={fadeInUp}>
                Quisque vehicula blandit nisl a feugiat. Vestibulum quam
              </motion.span>
            </motion.p>
          </motion.div>
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
            <div className='heroImg'>
              <Image
                className='rounded-2xl'
                src='/static/images/tempHero.png'
                width='3840'
                height='1600'
                alt='BAYC Hero Image'
              />
            </div>
          </div>
          <a
            onClick={() => {
              document
                .querySelector(".trailerVid")
                .classList.toggle("hero-hidden");
              document
                .querySelector(".heroImg")
                .classList.toggle("hero-img-hidden");
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
        <section className='relative h-fit w-fit my-96 z-10 px-8'>
          <div className='slide-1 h-fit w-fit gap-64 px-32 flex flex-row justify-center items-center'>
            <div className='w-1/4'>
              <div>
                <Image
                  className='rounded-2xl'
                  src='/static/images/ape.png'
                  width='616'
                  height='624'
                  alt='Bored Ape (Jimmy)'
                />
              </div>
            </div>
            <div className='flex flex-col w-1/2 font-Outfit'>
              <h2 className='font-medium text-6xl'>This is a test title.</h2>
              <p className='font-light text-xl mt-8 opacity-[0.95]'>
                Here is a test paragraph to demonstrate that Reit is a huge
                fucking idiot and that he will never ever succeed in his life.
                He literally sucks at everything; there is no thing that he is
                good at. He is also a scammer because he made 800k on the first
                project and only paid me 100$ and proxy 5$.
              </p>
            </div>
          </div>
          <div className='left-[45%]  flex flex-row gap-4 bottom-0 font-Outfit font-medium text-3xl absolute'>
            <div className='w-[18px] opacity-60 hover:opacity-100 cursor-pointer'>
              <Image
                className='dark:invert rotate-[180deg]'
                src='/static/images/arr-icon.svg'
                width='300'
                height='300'
                alt='Right Arrow Icon'
              />
            </div>
            <div className='opacity-60'>
              <span>01</span>
              <span>/04</span>
            </div>
            <div className='w-[18px] opacity-60 hover:opacity-100 cursor-pointer'>
              <Image
                className='dark:invert'
                src='/static/images/arr-icon.svg'
                width='300'
                height='300'
                alt='Right Arrow Icon'
              />
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
}
