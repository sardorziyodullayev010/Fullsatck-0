import Nav from './components/Nav'
import "./style.scss"

export default function Home() {
    return (
        <div className="home-page">
            <Nav />
            <section className="hero">
                <div className="container">
                    <h1>Криптовалютная платформа будущего</h1>
                    <p>Безопасная торговля и инвестиции в цифровые активы</p>
                    <div className="cta-buttons">
                        <button className="btn btn-red">Начать торговлю</button>
                        <button className="btn btn-blue">Узнать больше</button>
                    </div>
                </div>
            </section>

            <section className="features">
                <div className="container">
                    <h2>Почему выбирают нас</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <h3>Безопасность</h3>
                            <p>Многоуровневая система защиты ваших активов</p>
                            <button className="btn btn-yellow">Подробнее</button>
                        </div>
                        <div className="feature-card">
                            <h3>Низкие комиссии</h3>
                            <p>Минимальные комиссии за торговые операции</p>
                            <button className="btn btn-white">Подробнее</button>
                        </div>
                        <div className="feature-card">
                            <h3>Поддержка 24/7</h3>
                            <p>Профессиональная команда всегда на связи</p>
                            <button className="btn btn-red">Подробнее</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="crypto-stats">
                <div className="container">
                    <h2>Популярные криптовалюты</h2>
                    <div className="stats-grid">
                        <div className="stat-card">
                            <h3>Bitcoin (BTC)</h3>
                            <p className="price">$45,000</p>
                            <p className="change positive">+2.5%</p>
                        </div>
                        <div className="stat-card">
                            <h3>Ethereum (ETH)</h3>
                            <p className="price">$3,200</p>
                            <p className="change positive">+1.8%</p>
                        </div>
                        <div className="stat-card">
                            <h3>Binance Coin (BNB)</h3>
                            <p className="price">$420</p>
                            <p className="change negative">-0.5%</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="newsletter">
                <div className="container">
                    <h2>Будьте в курсе событий</h2>
                    <p>Подпишитесь на нашу рассылку для получения последних новостей и аналитики</p>
                    <form className="newsletter-form">
                        <input type="email" placeholder="Ваш email" />
                        <button className="btn btn-blue">Подписаться</button>
                    </form>
                </div>
            </section>
        </div>
    )
}
