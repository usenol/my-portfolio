import React, { useState } from 'react';
import { useTranslation } from "react-i18next";

export default function Contact() {
    const { t } = useTranslation();
    const [status, setStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);

        try {
            const res = await fetch("https://formspree.io/f/xdkzdkkv", { 
                method: "POST",
                body: data,
                headers: {
                    Accept: "application/json"
                }
            });

            if (res.ok) {
                form.reset();
                setStatus("SUCCESS");
            } else {
                setStatus("ERROR");
            }
        } catch (err) {
            setStatus("ERROR");
        }
    };

    return (
        <section
            name="contact"
            data-aos="fade-up"
            data-aos-delay="300"
            className='min-h-screen overflow-hidden flex items-center justify-center relative'
        >
            <article className="shadow-lg rounded-lg justify-center flex flex-col md:flex-row max-w-4xl w-full relative">
                <section className='p-8 w-full md:w-4/5 relative'>
                    <div className='absolute z-0 w-72 h-36 sm:w-96 sm:h-44 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-6 left-1/2 transform -translate-x-1/2 pointer-events-none'></div>

                    <header className='mb-6 relative z-10'>
                        <h1 className='text-5xl font-bold text-center text-white'>
                            {t("contact.title")}
                        </h1>
                    </header>

                    <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className='block text-gray-300 font-semibold mb-2'>
                                {t("contact.name")}
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                required
                                placeholder={t("contact.namePlaceholder")}
                                className='w-full px-6 py-4 text-white bg-gray-900 rounded-lg focus:outline-none'
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className='block text-gray-300 font-semibold mb-2'>
                                {t("contact.email")}
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                required
                                placeholder={t("contact.emailPlaceholder")}
                                className='w-full px-6 py-4 text-white bg-gray-900 rounded-lg focus:outline-none'
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className='block text-gray-300 font-semibold mb-2'>
                                {t("contact.message")}
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                required
                                placeholder={t("contact.messagePlaceholder")}
                                className='w-full px-6 py-4 text-white bg-gray-900 rounded-lg focus:outline-none'
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className='w-full text-white border-2 py-4 px-8 focus:outline-none hover:bg-[#801b9c] hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-lg'>
                            {t("contact.send")}
                        </button>
                    </form>

                    {status === "SUCCESS" && (
                        <p className="text-green-400 text-center mt-4">
                            {t("contact.successMessage") || "Your message has been sent!"}
                        </p>
                    )}
                    {status === "ERROR" && (
                        <p className="text-red-400 text-center mt-4">
                            {t("contact.errorMessage") || "Something went wrong. Please try again later."}
                        </p>
                    )}
                </section>
            </article>
        </section>
    );
}
