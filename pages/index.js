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
      duration: 0.6,
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
  const mainRef = useRef(null);

  useEffect(() => {
    var currentSlide = 1;
    var numOfSlides = 2;
    var rightSliderArr = document.querySelector(".rightSliderArr");
    var leftSliderArr = document.querySelector(".leftSliderArr");
    var sliderNumbSpan = document.querySelector(".currentSlideNumb");
    var sliderSelector;

    rightSliderArr.addEventListener("click", function () {
      if (!(currentSlide >= numOfSlides)) {
        sliderSelector = ".slide-" + currentSlide;
        document.querySelector(sliderSelector).classList.remove("activeSlider");
        currentSlide++;
        sliderSelector = ".slide-" + currentSlide;
        document.querySelector(sliderSelector).classList.add("activeSlider");
        sliderNumbSpan.innerText = currentSlide.toString().padStart(2, "0");
      }
    });
    leftSliderArr.addEventListener("click", function () {
      if (!(currentSlide <= 1)) {
        sliderSelector = ".slide-" + currentSlide;
        document.querySelector(sliderSelector).classList.remove("activeSlider");
        currentSlide--;
        sliderSelector = ".slide-" + currentSlide;
        document.querySelector(sliderSelector).classList.add("activeSlider");
        sliderNumbSpan.innerText = currentSlide.toString().padStart(2, "0");
      }
    });
  });

  return (
    <Fragment>
      <Head>
        <title>BAYC | NFTWorlds Project</title>
        <meta name='description' content='BAYC' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <Navigation />
      <main ref={mainRef} className='bg-white dark:bg-[#080808]'>
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
              document.querySelector("body").classList.remove("no-overflow");
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
              document.querySelector("body").classList.add("no-overflow");
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
              className='hero-hidden translate-y-0 rounded-2xl trailerVid absolute inset-0 z-50 w-full max-w-none'
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
          <motion.div
            initial='initial'
            whileInView='inView'
            viewport={{ root: mainRef }}
            variants={stagger}
            className='slide-1 h-fit w-fit gap-64 px-32 hidden activeSlider flex-row justify-center items-center'
          >
            <motion.div variants={fadeInUp} className='w-1/4'>
              <div>
                <Image
                  className='rounded-2xl'
                  src='/static/images/ape.png'
                  width='616'
                  height='624'
                  alt='Bored Ape (Jimmy)'
                />
              </div>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className='flex flex-col w-1/2 font-Outfit'
            >
              <h2 className='font-medium text-6xl'>This is a test title.</h2>
              <p className='font-light text-xl mt-8 opacity-[0.95]'>
                Here is a test paragraph to demonstrate that Reit is a huge
                fucking idiot and that he will never ever succeed in his life.
                He literally sucks at everything; there is no thing that he is
                good at. He is also a scammer because he made 800k on the first
                project and only paid me 100$ and proxy 5$.
              </p>
            </motion.div>
          </motion.div>
          <motion.div
            initial='initial'
            whileInView='inView'
            variants={stagger}
            className='slide-2 h-fit w-fit gap-64 px-32 hidden flex-row justify-center items-center'
          >
            <motion.div variants={fadeInUp} className='w-1/4'>
              <div>
                <Image
                  className='rounded-2xl invert'
                  src='/static/images/ape.png'
                  width='616'
                  height='624'
                  alt='Bored Ape (Jimmy)'
                />
              </div>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className='flex flex-col w-1/2 font-Outfit'
            >
              <h2 className='font-medium text-6xl'>
                This is the second title.
              </h2>
              <p className='font-light text-xl mt-8 opacity-[0.95]'>
                Here is a test paragraph to demonstrate that Reit is a huge
                fucking idiot and that he will never ever succeed in his life.
                He literally sucks at everything; there is no thing that he is
                good at. He is also a scammer because he made 800k on the first
                project and only paid me 100$ and proxy 5$.
              </p>
            </motion.div>
          </motion.div>
          <div className='left-[45%]  flex flex-row gap-4 bottom-[2%] font-Outfit font-medium text-3xl absolute'>
            <div className='w-[18px] leftSliderArr opacity-60 hover:opacity-100 cursor-pointer'>
              <Image
                className='dark:invert rotate-[180deg]'
                src='/static/images/arr-icon.svg'
                width='300'
                height='300'
                alt='Right Arrow Icon'
              />
            </div>
            <div className='opacity-60'>
              <span className='currentSlideNumb'>01</span>
              <span>/04</span>
            </div>
            <div className='w-[18px] rightSliderArr opacity-60 hover:opacity-100 cursor-pointer'>
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
        <section className='iframeSec relative flex flex-row items-center justify-center w-screen h-screen'>
          <iframe
            className='rounded-2xl'
            src='https://viewer.nftworlds.com/?world=159#159:-240:100:208:0:0:1.57:0:0:free'
            width='1920'
            height='1080'
          ></iframe>
        </section>
        <footer className='z-[30] mt-32 relative w-full h-[50vh] lg:h-fit flex flex-col bg-white dark:bg-black items-center justify-start overflow-hidden'>
          <a
            href='https://opensea.io/assets/0xbd4455da5929d5639ee098abfaa3241e9ae111af/159'
            target='_blank'
            rel='noreferrer'
          >
            <span className='text-[8em] z-[100] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-Outfit font-bold dark:text-white text-black lg:text-[16em]'>
              World
            </span>
          </a>
          <div className='hidden lg:flex flex-row flex-wrap grow-0 shrink basis-auto gap-6 w-screen p-8'>
            <div className='grow shrink-0 basis-0 max-w-full h-full z-50'>
              <div className='site-col block relative w-full h-0 pb-[100%] '></div>
              <div className='flex justify-between'>
                <span className='font-Outfit font-light text-base dark:text-white text-black'>
                  NFT World
                </span>
                <span className='font-Outfit font-light text-base dark:text-white text-black'>
                  #???
                </span>
              </div>
            </div>
            <div className='grow shrink-0 basis-0 max-w-full h-full z-50'>
              <div className='site-col block relative w-full h-0 pb-[100%] '></div>
              <div className='flex justify-between'>
                <span className='font-Outfit font-light text-base dark:text-white text-black'>
                  NFT World
                </span>
                <span className='font-Outfit font-light text-base dark:text-white text-black'>
                  #???
                </span>
              </div>
            </div>
            <div className='grow shrink-0 basis-0 max-w-full h-full z-50'>
              <div className='block relative w-full h-0 pb-[100%] overflow-hidden'>
                <a
                  href='https://opensea.io/assets/0xbd4455da5929d5639ee098abfaa3241e9ae111af/159'
                  target='_blank'
                  rel='noreferrer'
                >
                  <Image
                    className='hover:scale-110 transition-transform duration-150 ease-linear'
                    src='/static/images/World159.png'
                    width='700'
                    height='700'
                  />
                </a>
              </div>
              <div className='flex justify-between'>
                <span className='font-Outfit font-light text-base dark:text-white text-black'>
                  NFT World
                </span>
                <span className='font-Outfit font-light text-base dark:text-white text-black'>
                  #159
                </span>
              </div>
            </div>
            <div className='grow shrink-0 basis-0 max-w-full h-full z-50'>
              <div className='site-col block relative w-full h-0 pb-[100%]'></div>
              <div className='flex justify-between'>
                <span className='font-Outfit font-light text-base dark:text-white text-black'>
                  NFT World
                </span>
                <span className='font-Outfit font-light text-base dark:text-white text-black'>
                  #???
                </span>
              </div>
            </div>
            <div className='grow shrink-0 basis-0 max-w-full h-full z-50'>
              <div className='site-col block relative w-full h-0 pb-[100%]'></div>
              <div className='flex justify-between'>
                <span className='font-Outfit font-light text-base dark:text-white text-black'>
                  NFT World
                </span>
                <span className='font-Outfit font-light text-base dark:text-white text-black'>
                  #???
                </span>
              </div>
            </div>
            <div className='grow shrink-0 basis-0 max-w-full h-full z-50'>
              <div className='site-col block relative w-full h-0 pb-[100%]'></div>
              <div className='flex justify-between'>
                <span className='font-Outfit font-light text-base dark:text-white text-black'>
                  NFT World
                </span>
                <span className='font-Outfit font-light text-base dark:text-white text-black'>
                  #???
                </span>
              </div>
            </div>
            <div className='grow shrink-0 basis-0 max-w-full h-full z-50'>
              <div className='site-col block relative w-full h-0 pb-[100%]'></div>
              <div className='flex justify-between'>
                <span className='font-Outfit font-light text-base dark:text-white text-black'>
                  NFT World
                </span>
                <span className='font-Outfit font-light text-base dark:text-white text-black'>
                  #???
                </span>
              </div>
            </div>
            <div className='grow shrink-0 basis-0 max-w-full h-full z-50'>
              <div className='site-col block relative w-full h-0 pb-[100%]'></div>
              <div className='flex justify-between'>
                <span className='font-Outfit font-light text-base dark:text-white text-black'>
                  NFT World
                </span>
                <span className='font-Outfit font-light text-base dark:text-white text-black'>
                  #???
                </span>
              </div>
            </div>
          </div>
          <div className='hidden lg:flex flex-row flex-wrap grow-0 shrink basis-auto gap-6 w-screen p-8'>
            <div className='grow shrink-0 basis-0 max-w-full h-full z-50'>
              <div className='site-col block relative w-full h-0 pb-[100%]'></div>
              <div className='flex justify-between'>
                <span className='font-Outfit font-light text-base dark:text-white text-black'>
                  NFT World
                </span>
                <span className='font-Outfit font-light text-base dark:text-white text-black'>
                  #???
                </span>
              </div>
            </div>
            <div className='grow shrink-0 basis-0 max-w-full h-full z-50'>
              <div className='site-col block relative w-full h-0 pb-[100%]'></div>
              <div className='flex justify-between'>
                <span className='font-Outfit font-light text-base dark:text-white text-black'>
                  NFT World
                </span>
                <span className='font-Outfit font-light text-base dark:text-white text-black'>
                  #???
                </span>
              </div>
            </div>
            <div className='grow shrink-0 basis-0 max-w-full h-full z-50'>
              <div className='site-col block relative w-full h-0 pb-[100%]'></div>
              <div className='flex justify-between'>
                <span className='font-Outfit font-light text-base dark:text-white text-black'>
                  NFT World
                </span>
                <span className='font-Outfit font-light text-base dark:text-white text-black'>
                  #???
                </span>
              </div>
            </div>
            <div className='grow shrink-0 basis-0 max-w-full h-full z-50'>
              <div className='site-col block relative w-full h-0 pb-[100%]'></div>
              <div className='flex justify-between'>
                <span className='font-Outfit font-light text-base dark:text-white text-black'>
                  NFT World
                </span>
                <span className='font-Outfit font-light text-base dark:text-white text-black'>
                  #???
                </span>
              </div>
            </div>
            <div className='grow shrink-0 basis-0 max-w-full h-full z-50'>
              <div className='site-col block relative w-full h-0 pb-[100%]'></div>
              <div className='flex justify-between'>
                <span className='font-Outfit font-light text-base dark:text-white text-black'>
                  NFT World
                </span>
                <span className='font-Outfit font-light text-base dark:text-white text-black'>
                  #???
                </span>
              </div>
            </div>
            <div className='grow shrink-0 basis-0 max-w-full h-full z-50'>
              <div className='site-col block relative w-full h-0 pb-[100%]'></div>
              <div className='flex justify-between'>
                <span className='font-Outfit font-light text-base dark:text-white text-black'>
                  NFT World
                </span>
                <span className='font-Outfit font-light text-base dark:text-white text-black'>
                  #???
                </span>
              </div>
            </div>
            <div className='grow shrink-0 basis-0 max-w-full h-full z-50'>
              <div className='block relative w-full h-0 pb-[100%] overflow-hidden'>
                <a
                  href='https://opensea.io/assets/0xbd4455da5929d5639ee098abfaa3241e9ae111af/4200'
                  target='_blank'
                  rel='noreferrer'
                >
                  <Image
                    className='hover:scale-110 transition-transform duration-150 ease-linear'
                    src='/static/images/World4200.jpg'
                    width='700'
                    height='700'
                  />
                </a>
              </div>
              <div className='flex justify-between'>
                <span className='font-Outfit font-light text-base dark:text-white text-black'>
                  NFT World
                </span>
                <span className='font-Outfit font-light text-base dark:text-white text-black'>
                  #4200
                </span>
              </div>
            </div>
            <div className='grow shrink-0 basis-0 max-w-full h-full z-50'>
              <div className='site-col block relative w-full h-0 pb-[100%]'></div>
              <div className='flex justify-between'>
                <span className='font-Outfit font-light text-base dark:text-white text-black'>
                  NFT World
                </span>
                <span className='font-Outfit font-light text-base dark:text-white text-black'>
                  #???
                </span>
              </div>
            </div>
          </div>
          <div className='hidden lg:flex flex-row flex-wrap grow-0 shrink basis-auto gap-6 w-screen p-8'>
            <div className='grow shrink-0 basis-0 max-w-full h-full z-50'>
              <div className='site-col block relative w-full h-0 pb-[100%]'></div>
              <div className='flex justify-between'>
                <span className='font-Outfit font-light text-base dark:text-white text-black'>
                  NFT World
                </span>
                <span className='font-Outfit font-light text-base dark:text-white text-black'>
                  #???
                </span>
              </div>
            </div>
            <div className='grow shrink-0 basis-0 max-w-full h-full z-50'>
              <div className='block relative w-full h-0 pb-[100%] overflow-hidden'>
                <a
                  href='https://opensea.io/assets/0xbd4455da5929d5639ee098abfaa3241e9ae111af/198'
                  target='_blank'
                  rel='noreferrer'
                >
                  <Image
                    className='hover:scale-110 transition-transform duration-150 ease-linear'
                    src='/static/images/World198.jpg'
                    width='700'
                    height='700'
                  />
                </a>
              </div>
              <div className='flex justify-between'>
                <span className='font-Outfit font-light text-base dark:text-white text-black'>
                  NFT World
                </span>
                <span className='font-Outfit font-light text-base dark:text-white text-black'>
                  #198
                </span>
              </div>
            </div>
            <div className='grow shrink-0 basis-0 max-w-full h-full z-50'>
              <div className='site-col block relative w-full h-0 pb-[100%]'></div>
              <div className='flex justify-between'>
                <span className='font-Outfit font-light text-base dark:text-white text-black'>
                  NFT World
                </span>
                <span className='font-Outfit font-light text-base dark:text-white text-black'>
                  #???
                </span>
              </div>
            </div>
            <div className='grow shrink-0 basis-0 max-w-full h-full z-50'>
              <div className='site-col block relative w-full h-0 pb-[100%]'></div>
              <div className='flex justify-between'>
                <span className='font-Outfit font-light text-base dark:text-white text-black'>
                  NFT World
                </span>
                <span className='font-Outfit font-light text-base dark:text-white text-black'>
                  #???
                </span>
              </div>
            </div>
            <div className='grow shrink-0 basis-0 max-w-full h-full z-50'>
              <div className='site-col block relative w-full h-0 pb-[100%]'></div>
              <div className='flex justify-between'>
                <span className='font-Outfit font-light text-base dark:text-white text-black'>
                  NFT World
                </span>
                <span className='font-Outfit font-light text-base dark:text-white text-black'>
                  #???
                </span>
              </div>
            </div>
            <div className='grow shrink-0 basis-0 max-w-full h-full z-50'>
              <div className='site-col block relative w-full h-0 pb-[100%]'></div>
              <div className='flex justify-between'>
                <span className='font-Outfit font-light text-base dark:text-white text-black'>
                  NFT World
                </span>
                <span className='font-Outfit font-light text-base dark:text-white text-black'>
                  #???
                </span>
              </div>
            </div>
            <div className='grow shrink-0 basis-0 max-w-full h-full z-50'>
              <div className='site-col block relative w-full h-0 pb-[100%]'></div>
              <div className='flex justify-between'>
                <span className='font-Outfit font-light text-base dark:text-white text-black'>
                  NFT World
                </span>
                <span className='font-Outfit font-light text-base dark:text-white text-black'>
                  #???
                </span>
              </div>
            </div>
            <div className='grow shrink-0 basis-0 max-w-full h-full z-50'>
              <div className='site-col block relative w-full h-0 pb-[100%]'></div>
              <div className='flex justify-between'>
                <span className='font-Outfit font-light text-base dark:text-white text-black'>
                  NFT World
                </span>
                <span className='font-Outfit font-light text-base dark:text-white text-black'>
                  #???
                </span>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </Fragment>
  );
}
