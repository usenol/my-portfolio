import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import trFlag from '/images/Turkiye.png';
import enFlag from '/images/UK.png';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const { t, i18n } = useTranslation();

    const NavbarLinks = [
        { id: 1, name: t('navbar.home'), href: 'home' },
        { id: 2, name: t('navbar.about'), href: 'about' },
        { id: 3, name: t('navbar.skills'), href: 'skills' },
        { id: 4, name: t('navbar.experiences'), href: 'experiences' },
        { id: 5, name: t('navbar.projects'), href: 'projects' },
    ];

    return (
        <header className='fixed top-0 left-0 w-full z-30 text-white backdrop-blur-lg' data-aos='fade-down' data-aos-delay='100'>
            <div className='container mx-auto flex items-center justify-between p-5'>

                <a href="#home" className='text-3xl sm:text-4xl font-bold tracking-tight text-white'>
                    Umut<span className='text-purple-400'>.dev</span>
                </a>

                <button className='md:hidden focus:outline-none' onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FiX className='w-8 h-8 text-white' /> : <FiMenu className='w-8 h-8 text-white' />}
                </button>

                {/* Masaüstü görünüm */}
                <nav className="hidden md:flex items-center space-x-5">
                    {NavbarLinks.map(link => (
                        <Link
                            key={link.id}
                            to={link.href}
                            smooth={true}
                            duration={300}
                            offset={-60}
                            className='cursor-pointer hover:text-gray-200 text-lg'
                        >
                            {link.name || ''}
                        </Link>
                    ))}

                    <Link
                        to="contact"
                        smooth={true}
                        duration={300}
                        offset={-90}
                        className='inline-flex cursor-pointer text-white border-2 py-2 px-6 focus:outline-none hover:bg-purple-800 rounded-full text-lg'
                    >
                        {t('navbar.contact')}
                    </Link>

                    <div className="flex items-center space-x-2 ml-4">
                        <img
                            src={trFlag}
                            alt="Türkçe"
                            className="w-5 h-3.5 cursor-pointer hover:scale-120 transition"
                            onClick={() => i18n.changeLanguage('tr')}
                        />
                        <img
                            src={enFlag}
                            alt="English"
                            className="w-5 h-3.5 cursor-pointer hover:scale-120 transition"
                            onClick={() => i18n.changeLanguage('en')}
                        />
                    </div>
                </nav>
            </div>

            {/* Mobil görünüm */}
            {isOpen && (
                <div className='md:hidden w-full bg-[#801b9c] flex flex-col items-center space-y-6 py-10 text-lg text-white'>
                    {NavbarLinks.map(link => (
                        <Link
                            key={link.id}
                            to={link.href}
                            smooth={true}
                            duration={300}
                            offset={-60}
                            onClick={() => setIsOpen(false)}
                            className='cursor-pointer hover:text-gray-200 text-lg'
                        >
                            {link.name || ''} {/* fallback */}
                        </Link>
                    ))}

                    <Link
                        to="contact"
                        smooth={true}
                        duration={300}
                        offset={-60}
                        onClick={() => setIsOpen(false)}
                        className='inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-purple-800 rounded-full text-lg'
                    >
                        {t('navbar.contact')}
                    </Link>

                    {/* Bayraklar (mobil) */}
                    <div className="flex space-x-4 pt-2">
                        <img
                            src={trFlag}
                            alt="Türkçe"
                            className="w-5 h-3.5 cursor-pointer hover:scale-120 transition"
                            onClick={() => {
                                i18n.changeLanguage('tr');
                                setIsOpen(false);
                            }}
                        />
                        <img
                            src={enFlag}
                            alt="English"
                            className="w-5 h-3.5 cursor-pointer hover:scale-120 transition"
                            onClick={() => {
                                i18n.changeLanguage('en');
                                setIsOpen(false);
                            }}
                        />
                    </div>
                </div>
            )}
        </header>
    );
}
