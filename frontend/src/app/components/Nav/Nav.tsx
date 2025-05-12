'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX } from 'react-icons/fi';
import './style.scss';

export default function Nav() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className={`nav ${isScrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <Link href="/" className="logo">
                    KI Cars
                </Link>

                <div className="nav-links">
                    <Link href="/" className={pathname === '/' ? 'active' : ''}>
                        Главная
                    </Link>
                    <Link href="/services" className={pathname === '/services' ? 'active' : ''}>
                        Услуги
                    </Link>
                    <Link href="/about" className={pathname === '/about' ? 'active' : ''}>
                        О нас
                    </Link>
                </div>

                <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
                    <FiMenu />
                </button>
            </div>

            <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                <button className="close-btn" onClick={closeMobileMenu}>
                    <FiX />
                </button>
                <Link href="/" className={pathname === '/' ? 'active' : ''} onClick={closeMobileMenu}>
                    Главная
                </Link>
                <Link href="/services" className={pathname === '/services' ? 'active' : ''} onClick={closeMobileMenu}>
                    Услуги
                </Link>
                <Link href="/about" className={pathname === '/about' ? 'active' : ''} onClick={closeMobileMenu}>
                    О нас
                </Link>
            </div>
        </nav>
    );
} 