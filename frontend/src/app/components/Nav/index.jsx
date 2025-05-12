"use client"
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import "./style.scss"


function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const pathname = usePathname()

    const navLinks = [
        { href: '/', label: 'Главная' },
        { href: '/about', label: 'О нас' },
        { href: '/services', label: 'Услуги' },
        { href: '/contact', label: 'Контакты' },
        { href: '/auth/login', label: 'Войти' },
        { href: '/auth/register', label: 'Регистрация' }
    ]

    return (
        <nav className="navbar">
            <div className="container">
                <Link href="/" className="logo">KI Cars</Link>
                
                <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    {navLinks.map((link) => (
                        <Link 
                            key={link.href}
                            href={link.href}
                            className={`nav-link ${pathname === link.href ? 'active' : ''}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <button 
                    className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    )
}

export default Nav

    
