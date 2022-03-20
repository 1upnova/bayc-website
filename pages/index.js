import Head from "next/head";
import { Fragment, useEffect, useState, useRef } from "react";
import Image from "next/image";
import Navigation from "../components/Navigation";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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

  const SongRow = () => {
    if (typeof Audio != "undefined") {
      var audioBAYC = new Audio("/static/music/DelistYourApe.mp3");
      audioBAYC.addEventListener(
        "timeupdate",
        function () {
          var duration = document.getElementById("soundPlayerWidget-time");
          var s = parseInt(audioBAYC.currentTime % 60);
          var m = parseInt((audioBAYC.currentTime / 60) % 60);
          duration.innerHTML = m + ":" + s;
        },
        false
      );
    }

    const playSong = () => {
      audioBAYC.play();
      document
        .querySelector(".soundPlayerWidget-PauseIcon")
        .classList.remove("realHidden");
      document
        .querySelector(".soundPlayerWidget-PlayIcon")
        .classList.add("realHidden");
    };
    const pauseSong = () => {
      audioBAYC.pause();
      document
        .querySelector(".soundPlayerWidget-PauseIcon")
        .classList.add("realHidden");
      document
        .querySelector(".soundPlayerWidget-PlayIcon")
        .classList.remove("realHidden");
    };
    return (
      <div className='absolute bg-white dark:bg-[#080808] w-[150px] h-[280px] xl:w-[300px] xl:h-[100px] left-[50%] md:left-[58%] xl:left-[67%] top-[36%] soundPlayer rounded-2xl overflow-hidden flex flex-col xl:flex-row justify-start'>
        <div className='soundPlayerImage w-full xl:w-1/3'>
          <Image
            className=''
            src='/static/images/ape.png'
            width='616'
            height='624'
            alt='Bored Ape (Jimmy)'
          />
        </div>
        <div className='soundPlayerWidget w-full xl:w-2/3 p-2 font-Outfit flex flex-col'>
          <span className=''>&ldquo;Delist your ape&rdquo;</span>
          <span className='font-light opacity-90 text-sm'>BAYC9797</span>
          <span className='font-light text-sm opacity-50'>
            ft. Reo Cragun &amp; Clear Eyes
          </span>
          <div className='flex flex-row items-center'>
            <div className='soundPlayerWidget-pauseBtn '>
              <svg
                onClick={() => pauseSong()}
                width='12'
                height='13'
                viewBox='0 0 12 13'
                className='soundPlayerWidget-PauseIcon realHidden cursor-pointer'
              >
                <path d='M0.443359 12.6221V0.622311L4.29929 0.622311V12.6221H0.443359Z'></path>
                <path d='M7.64109 12.6218V0.62207L11.497 0.62207V12.6218H7.64109Z'></path>
              </svg>
              <svg
                onClick={() => playSong()}
                viewBox='6 2 12 13.5'
                className='soundPlayerWidget-PlayIcon cursor-pointer'
              >
                <path d='M16.25 8.625L7.10317 2.52183V14.7282L16.25 8.625Z'></path>
              </svg>
            </div>
            <span
              className='ml-2 font-Outfit font-light'
              id='soundPlayerWidget-time'
            >
              0:0
            </span>
          </div>
        </div>
      </div>
    );
  };

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

    ScrollTrigger.matchMedia({
      "(min-width: 1280px)": function () {
        let bossesTl = gsap.timeline({
          scrollTrigger: {
            trigger: ".bossesSection",
            start: "center 60%",
            end: "bottom top",
            pin: ".bossesSection",
            pinSpacing: true,
            scrub: 0.2,
          },
        });

        bossesTl.to(".bossesSection-inner", {
          x: "-101%",
          ease: "none",
          duration: 10,
        });
      },
      "(max-width: 1279px)": function () {
        let bossesTl = gsap.timeline({
          scrollTrigger: {
            trigger: ".bossesSection",
            start: "center 53%",
            end: "bottom top",
            pin: ".bossesSection",
            pinSpacing: true,
            scrub: 0.2,
          },
        });

        bossesTl.to(".bossesSection-inner", {
          x: "-101%",
          ease: "none",
          duration: 10,
        });
      },
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
        <section className='relative h-fit py-16 max-w-[100vw] z-10 px-8 flex flex-col justify-center items-center w-screen'>
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
            <div className='heroImg opacity-0 xl:opacity-100'>
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
            className='hidden font-Outfit xl:flex flex-row items-center justify-center gap-4 font-light underline-stable text-black dark:text-white place-self-end mt-8 text-2xl'
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
        <section className='relative h-fit w-fit my-32 xl:my-64 z-10 px-8 pb-20 xl:pb-0'>
          <motion.div
            initial='initial'
            whileInView='inView'
            viewport={{ root: mainRef }}
            variants={stagger}
            className='slide-1 h-fit w-fit gap-16 px-8 hidden activeSlider flex-col xl:flex-row justify-between items-start xl:items-center'
          >
            <motion.div variants={fadeInUp} className=''>
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
              className='flex flex-col xl:w-1/2 items-start font-Outfit'
            >
              <h2 className='font-medium text-3xl xl:text-6xl'>
                This is a test title.
              </h2>
              <p className='font-light text-md xl:text-xl mt-8 opacity-[0.95]'>
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
            viewport={{ root: mainRef }}
            variants={stagger}
            className='slide-2 h-fit w-fit gap-16 px-8 hidden flex-col xl:flex-row justify-between items-start xl:items-center'
          >
            <motion.div variants={fadeInUp} className=''>
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
              className='flex flex-col xl:w-1/2 items-start font-Outfit'
            >
              <h2 className='font-medium text-3xl xl:text-6xl'>
                This is the second title.
              </h2>
              <p className='font-light text-md xl:text-xl mt-8 opacity-[0.95]'>
                Here is a test paragraph to demonstrate that Reit is a huge
                fucking idiot and that he will never ever succeed in his life.
                He literally sucks at everything; there is no thing that he is
                good at. He is also a scammer because he made 800k on the first
                project and only paid me 100$ and proxy 5$.
              </p>
            </motion.div>
          </motion.div>
          <div className='sliderArrSelector flex flex-row gap-4 bottom-0 font-Outfit font-normal xl:font-medium text-2xl xl:text-3xl absolute'>
            <div className='w-[16px] xl:w-[18px] leftSliderArr opacity-60 hover:opacity-100 cursor-pointer'>
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
            <div className='w-[16px] xl:w-[18px] rightSliderArr opacity-60 hover:opacity-100 cursor-pointer'>
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
        <section className='bossesSection max-w-none min-h-screen overflow-hidden'>
          <div className='bossesSection-inner flex flex-row'>
            <div className='h-fit w-screen  flex flex-col px-8 '>
              <div className='flex flex-col xl:flex-row gap-8 items-center xl:justify-between'>
                <div className='w-[90vw] h-[82vw] xl:w-[50vw] xl:h-[42vw] bg-cover bg-right bg-[url(/static/images/Slider2.png)]'></div>
                <div className='w-[90vw] h-[82vw] relative xl:w-[50vw] xl:h-[42vw] flex flex-row justify-center overflow-hidden'>
                  <div className='z-20 text-white p-4 absolute bottom-2 left-2'>
                    <svg
                      onClick={() => {
                        document.querySelector(".squareVid").pause();
                        document
                          .querySelector(".PauseIcon")
                          .classList.add("realHidden");
                        document
                          .querySelector(".PlayIcon")
                          .classList.remove("realHidden");
                      }}
                      width='12'
                      height='13'
                      viewBox='0 0 12 13'
                      className='cursor-pointer PauseIcon'
                    >
                      <path d='M0.443359 12.6221V0.622311L4.29929 0.622311V12.6221H0.443359Z'></path>
                      <path d='M7.64109 12.6218V0.62207L11.497 0.62207V12.6218H7.64109Z'></path>
                    </svg>
                    <svg
                      onClick={() => {
                        document.querySelector(".squareVid").play();
                        document
                          .querySelector(".PlayIcon")
                          .classList.add("realHidden");
                        document
                          .querySelector(".PauseIcon")
                          .classList.remove("realHidden");
                      }}
                      viewBox='6 2 12 13.5'
                      className='cursor-pointer PlayIcon realHidden'
                    >
                      <path d='M16.25 8.625L7.10317 2.52183V14.7282L16.25 8.625Z'></path>
                    </svg>
                  </div>
                  <video
                    className='squareVid h-full max-w-none right-0'
                    src='/static/videos/TrailerSourceFixed.mp4'
                    autoPlay
                    muted
                    disablePictureInPicture
                    playsInline
                    loop
                  ></video>
                </div>
              </div>
              <div className='flex flex-col xl:flex-row gap-8 items-center xl:justify-between'>
                <div className='w-[90vw] xl:w-[50vw]'></div>
                <div className='w-[90vw] relative xl:w-[50vw] flex flex-row justify-start overflow-hidden'>
                  <span className='mt-4 font-Outfit font-light text-black dark:text-white text-xl opacity-[0.9]'>
                    The thick ice covering the deepest lake on earth offers a
                    mesmerizing, crystal-clear view into its depths.
                  </span>
                </div>
              </div>
            </div>
            <div className='h-fit w-screen  flex flex-col px-8 '>
              <div className='flex flex-col xl:flex-row gap-8 items-center xl:justify-between'>
                <div className='w-[90vw] h-[82vw] xl:w-[50vw] xl:h-[42vw] bg-cover bg-right bg-[url(/static/images/Slider3.png)]'></div>
                <div className='w-[90vw] h-[82vw] relative xl:w-[50vw] xl:h-[42vw] flex flex-row justify-center overflow-hidden'>
                  <div className='z-20 text-white p-4 absolute bottom-2 left-2'>
                    <svg
                      onClick={() => {
                        document.querySelector(".squareVid2").pause();
                        document
                          .querySelector(".PauseIcon2")
                          .classList.add("realHidden");
                        document
                          .querySelector(".PlayIcon2")
                          .classList.remove("realHidden");
                      }}
                      width='12'
                      height='13'
                      viewBox='0 0 12 13'
                      className='cursor-pointer PauseIcon2'
                    >
                      <path d='M0.443359 12.6221V0.622311L4.29929 0.622311V12.6221H0.443359Z'></path>
                      <path d='M7.64109 12.6218V0.62207L11.497 0.62207V12.6218H7.64109Z'></path>
                    </svg>
                    <svg
                      onClick={() => {
                        document.querySelector(".squareVid2").play();
                        document
                          .querySelector(".PlayIcon2")
                          .classList.add("realHidden");
                        document
                          .querySelector(".PauseIcon2")
                          .classList.remove("realHidden");
                      }}
                      viewBox='6 2 12 13.5'
                      className='cursor-pointer PlayIcon2 realHidden'
                    >
                      <path d='M16.25 8.625L7.10317 2.52183V14.7282L16.25 8.625Z'></path>
                    </svg>
                  </div>
                  <video
                    className='squareVid2 h-full max-w-none right-0'
                    src='/static/videos/TrailerSourceFixed.mp4'
                    autoPlay
                    muted
                    disablePictureInPicture
                    playsInline
                    loop
                  ></video>
                </div>
              </div>
              <div className='flex flex-col xl:flex-row gap-8 items-center xl:justify-between'>
                <div className='w-[90vw] xl:w-[50vw]'></div>
                <div className='w-[90vw] relative xl:w-[50vw] flex flex-row justify-start overflow-hidden'>
                  <span className='mt-4 font-Outfit font-light text-black dark:text-white text-xl opacity-[0.9]'>
                    The thick ice covering the deepest lake on earth offers a
                    mesmerizing, crystal-clear view into its depths.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='mt-32 mb-64 flex flex-row items-center justify-between px-8 lg:px-16 overflow-hidden font-Outfit'>
          <div className='font-semibold text-2xl lg:text-4xl w-2/4 lg:w-1/4'>
            BAYC<br></br>Metaverse
          </div>
          <div className='flex gap-8 lg:gap-0 flex-col lg:flex-row w-2/4 lg:w-3/4 justify-between'>
            <div className='flex flex-col justify-between'>
              <span className='text-sm lg:text-lg font-light opacity-[0.85]'>
                Pro Team Mountaineering
              </span>
              <span className='text-lg lg:text-2xl font-normal'>
                One of the top Swiss speed climbers
              </span>
            </div>
            <div className='flex flex-col justify-between'>
              <span className='text-sm lg:text-lg font-light opacity-[0.85]'>
                Date of Birth
              </span>
              <span className='text-lg lg:text-2xl font-normal'>
                22 Feb 1984
              </span>
            </div>
            <div className='flex flex-col justify-between'>
              <span className='text-sm lg:text-lg font-light opacity-[0.85]'>
                At Mammut since
              </span>
              <span className='text-lg lg:text-2xl font-normal'>2011</span>
            </div>
          </div>
        </section>
        <section className='relative h-screen w-screen bg-cover bg-center bg-[url(/static/images/Slider2.png)]'>
          <SongRow />
        </section>
      </main>
    </Fragment>
  );
}
