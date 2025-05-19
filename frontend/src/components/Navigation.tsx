import Link from 'next/link'
import './Nav.scss'

const Navigation = () => {
    return (
        <nav className="main-nav">
            <div className="container">
                <Link href="/" className="logo">
                    CryptoExchange
                </Link>
                <ul className="nav-links">
                    <li>
                        <Link href="/">Главная</Link>
                    </li>
                    <li>
                        <Link href="/marketplace">Торговля</Link>
                    </li>
                    <li>
                        <Link href="/contacts">Контакты</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation 