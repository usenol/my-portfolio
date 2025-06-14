import React from 'react'

export default function Contact() {
    return (
        <section
            data-aos="fade-up"
            data-aos-delay="300"
            className='min-h-screen overflow-hidden flex items-center justify-center p-6 pt-32 relative'
        >
            <article className="shadow-lg rounded-lg justify-center flex flex-col md:flex-row max-w-4xl w-full relative">

                {/* Sağ taraf: Form */}
                <section className='p-8 w-full md:w-1/2 relative'>
                    
                    {/* Başlık blur efekti */}
                    <div className='absolute z-0 w-72 h-36 sm:w-96 sm:h-44 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-6 left-1/2 transform -translate-x-1/2 pointer-events-none'></div>
                    
                    <header className='mb-6 relative z-10'>
                        <h1 className='text-4xl font-bold text-center text-white'>Contact Me</h1>
                    </header>

                    <form className="space-y-4 relative z-10">
                        <div>
                            <label htmlFor="name" className='block text-gray-300 font-medium mb-2'>Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder='Your name'
                                className='w-full px-4 py-2 text-white bg-gray-900 rounded-lg focus:outline-none'
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className='block text-gray-300 font-medium mb-2'>Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder='Your email'
                                className='w-full px-4 py-2 text-white bg-gray-900 rounded-lg focus:outline-none'
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className='block text-gray-300 font-medium mb-2'>Message</label>
                            <textarea
                                name="message"
                                id="message"
                                placeholder='Your message'
                                className='w-full px-4 py-2 text-white bg-gray-900 rounded-lg focus:outline-none'
                            ></textarea>
                        </div>
                        <button
                            className='w-full text-white border-2 py-2 px-6 focus:outline-none hover:bg-[#801b9c] hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-lg'>
                            Send Message
                        </button>
                    </form>
                </section>
            </article>
        </section>
    )
}
