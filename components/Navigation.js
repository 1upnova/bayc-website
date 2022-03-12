import { Fragment, useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";

export default function Navigation() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme == "dark") {
      return (
        <SunIcon
          className='w-8 mix-blend-difference h-8 inline-flex'
          role='button'
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <MoonIcon
          className='w-8 h-8 inline-flex fill-current text-white'
          role='button'
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  return (
    <Fragment>
      <nav className='mix-blend-difference h-[90px] w-screen fixed top-0 z-50 flex flex-row justify-between items-center px-8'>
        <div className='max-w-[120px]'>
          <Image
            alt='broketopia'
            src='/static/images/BAYCLogo.png'
            width='209.3'
            height='109.7'
          ></Image>
        </div>
        <div className='ml-6 lg:ml-0 flex flex-row justify-center items-center gap-8'>
          <a
            href='https://opensea.io/assets/0xbd4455da5929d5639ee098abfaa3241e9ae111af/159'
            target='_blank'
            rel='noreferrer'
            className='bg-transparent text-white font-Outfit tracking-wider font-normal text-lg border-[2px] px-[1.2rem] py-2 border-white rounded-full'
          >
            World
          </a>
          {renderThemeChanger()}
        </div>
      </nav>
    </Fragment>
  );
}
