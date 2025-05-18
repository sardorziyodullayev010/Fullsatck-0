"use client"

import Link from 'next/link'
import { useState } from 'react'
import './Nav.scss'

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-content">
                    <Link href="/" className="logo">
                        Crypto<span>Trade</span>
                    </Link>

                    <button 
                        className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                        <Link href="/" className="nav-link">Главная</Link>
                        <Link href="/market" className="nav-link">Рынок</Link>
                        <Link href="/trading" className="nav-link">Торговля</Link>
                        <Link href="/about" className="nav-link">О нас</Link>
                        <Link href="/contact" className="nav-link">Контакты</Link>
                        <div className="auth-buttons">
                            <Link href="/auth/login" className="btn btn-white">Войти</Link>
                            <Link href="/auth/register" className="btn btn-red">Регистрация</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
} 