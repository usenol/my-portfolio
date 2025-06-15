import React from 'react'
import java from '/images/java.png'
import swift from '/images/swift.png'
import kotlin from '/images/kotlin.png'
import springboot from '/images/springboot.svg'
import tailwindcss from '/images/tailwindcss.png'
import react from '/images/react.png'
import { useTranslation } from "react-i18next";

const SkillBox = ({ image, title, description }) => (
  <article className='bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg text-center hover:bg-purple-800 transition-all duration-300'>
    <figure className='flex justify-center mb-4'>
      <img src={image} alt={title} className='w-16 h-16 sm:w-20 sm:h-20' />
    </figure>
    <header>
      <h3 className='text-lg sm:text-xl font-semibold mb-2'>{title}</h3>
    </header>
    <p className='text-gray-400 text-sm sm:text-base'>{description}</p>
  </article>
)

export default function Skills() {
  const { t } = useTranslation();

  const skillsData = [
    {
      id: 1,
      image: java,
      title: t("skills.java.title"),
      description: t("skills.java.description")
    },
    {
      id: 2,
      image: springboot,
      title: t("skills.springboot.title"),
      description: t("skills.springboot.description")
    },
    {
      id: 3,
      image: kotlin,
      title: t("skills.kotlin.title"),
      description: t("skills.kotlin.description")
    },
    {
      id: 4,
      image: react,
      title: t("skills.react.title"),
      description: t("skills.react.description")
    },
    {
      id: 5,
      image: tailwindcss,
      title: t("skills.tailwind.title"),
      description: t("skills.tailwind.description")
    },
    {
      id: 6,
      image: swift,
      title: t("skills.swift.title"),
      description: t("skills.swift.description")
    }
  ]

  return (
    <section id="skills" className="relative min-h-screen overflow-hidden flex flex-col items-center justify-start text-white px-4 pt-20 pb-10 sm:pt-20">
      <div className='absolute z-0 w-72 h-36 sm:w-96 sm:h-44 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 top-10 sm:top-28 left-1/2 transform -translate-x-1/2'></div>

      <div data-aos="fade-up" data-aos-delay="300" className='relative z-20 text-center space-y-6 sm:space-y-10'>
        <header>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            {t("skills.header")}
          </h1>
          <p className='text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base'>
            {t("skills.subheader")}
          </p>
        </header>
        <section data-aos='fade-up' data-aos-delay="300" className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 mt-4 w-full max-w-7xl'>
          {skillsData.map(skill => (
            <SkillBox key={skill.id} image={skill.image} title={skill.title} description={skill.description} />
          ))}
        </section>
      </div>
    </section>
  )
}