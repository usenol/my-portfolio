import React from 'react'
import java from '/java.png'
import swift from '/swift.png'
import kotlin from '/kotlin.png'
import springboot from '/springboot.svg'
import tailwindcss from '/tailwindcss.png'
import react from '/react.png'
import imghero from '/imghero.png'

const skillsData = [
    { id: 1, image: java, title: "Java", description: "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible." },
    { id: 2, image: swift, title: "Swift", description: "Swift is a powerful and intuitive programming language for iOS, macOS, watchOS, and tvOS app development." },
    { id: 3, image: kotlin, title: "Kotlin", description: "Kotlin is a modern programming language that makes developers happier and more productive." },
    { id: 4, image: springboot, title: "Spring Boot", description: "Spring Boot is an open-source Java-based framework used to create stand-alone, production-grade Spring-based applications." },
    { id: 5, image: react, title: "React", description: "Tailwind CSS is a utility-first CSS framework for creating custom designs without having to leave your HTML." },
    { id: 6, image: tailwindcss, title: "Tailwind CSS", description: "React is a JavaScript library for building user interfaces, allowing developers to create large web applications that can change data without reloading the page." }
]

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
    return (
        <section id="skills" className="relative min-h-screen overflow-hidden flex flex-col items-center justify-start text-white px-4 pt-20 pb-10 sm:pt-32">
            <div className='absolute z-0 w-72 h-36 sm:w-96 sm:h-44 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 top-10 sm:top-28 left-1/2 transform -translate-x-1/2'></div>

            <div data-aos="fade-up" data-aos-delay="300" className='relative z-20 text-center space-y-6 sm:space-y-10'>
                <header>
                    <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
                        My <span className='text-purple-400'>Skills</span>
                    </h1>
                    <p className='text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base'>
                        Look at some of the technologies I have worked with and the skills I have acquired over time.
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
