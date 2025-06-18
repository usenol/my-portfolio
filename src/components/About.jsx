import React from 'react';
import vr from '/images/vr.png';
import avatar from '/images/avatar.png';
import kep from '/images/kep.png';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="relative min-h-screen overflow-hidden flex items-center justify-center text-white px-4 sm:px-6">

      <div className="absolute z-0 w-60 h-60 sm:w-72 sm:h-72 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 top-25 left-3/5 transform -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center relative z-10">

        <figure data-aos='fade-right' data-aos-delay='200' className="flex flex-wrap justify-center gap-4 relative">
          <div className="h-[200px] sm:h-[300px] w-[300px] sm:w-[400px] lg:h-[300px] lg:w-[500px] 
                          bg-gradient-to-r from-[#6d2897] via-[#6c95f5] to-[#bb61c5] 
                          absolute transform rotate-12 z-0 right-5 -top-2 md:top-10 rounded-full">
          </div>
          <img src={kep} alt="about picture 1"
            className='absolute -top-0 left-7 sm:left-10 transform -translate-y-6 z-10 w-20 h-20 sm:w-36 sm:h-36 rounded-3xl' />
          <img src={avatar} alt="about picture 2"
            className='relative z-10 w-36 h-44 sm:w-40 sm:h-40 md:w-72 md:h-96 rounded-lg' />
          <img src={vr} alt="about picture"
            className='absolute bottom-0 right-5 sm:right-10 transform translate-y-6 z-10 w-20 h-20 sm:w-32 sm:h-32 rounded-3xl' />
        </figure>

        <article data-aos='fade-left' data-aos-delay="200" className="text-center lg:text-left">
          <header>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white">
              {t("about.title")}
            </h1>
          </header>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
            {t("about.description")}
          </p>
          <footer>
            <button
              onClick={() => window.location.href = '#skills'}
              className="inline-flex text-white border-2 py-2 px-4 sm:px-6 focus:outline-none hover:bg-[#801b9c] hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-sm sm:text-lg"
            >
              {t("about.button")}
            </button>
          </footer>
        </article>
      </div>
    </section>
  );
}
