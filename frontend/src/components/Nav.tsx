'use client'

import React from 'react'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
import './Nav.scss'

const Nav: React.FC = () => {
    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-content">
                    <Link href="/" className="logo">
                        CryptoExchange
                    </Link>
                    
                    <div className="nav-links">
                        <Link href="/">Главная</Link>
                        <Link href="/market">Рынок</Link>
                        <Link href="/contacts">Контакты</Link>
                        <Link href="/login" className="btn btn-blue">Войти</Link>
                        <Link href="/register" className="btn btn-red">Регистрация</Link>
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav 