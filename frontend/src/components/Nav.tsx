import Link from 'next/link'
import './Nav.scss'

const Nav = () => {
    return (
        <nav className="main-nav">
            <div className="container">
                <Link href="/" className="logo">
                    KIA Marketplace
                </Link>
                <ul className="nav-links">
                    <li>
                        <Link href="/">Главная</Link>
                    </li>
                    <li>
                        <Link href="/marketplace">Маркетплейс</Link>
                    </li>
                    <li>
                        <Link href="/contact">Контакты</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav 