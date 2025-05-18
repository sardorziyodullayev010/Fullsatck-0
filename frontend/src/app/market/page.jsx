"use client"

import Nav from '../components/Nav'
import './style.scss'

export default function Market() {
    return (
        <div className="market-page">
            <Nav />
            <section className="hero">
                <div className="container">
                    <h1>Рынок криптовалют</h1>
                    <p>Актуальные цены и аналитика криптовалютного рынка</p>
                </div>
            </section>

            <section className="market-overview">
                <div className="container">
                    <div className="market-stats">
                        <div className="stat-card">
                            <h3>Общая капитализация</h3>
                            <p className="value">$2.1T</p>
                            <p className="change positive">+3.2%</p>
                        </div>
                        <div className="stat-card">
                            <h3>Объем торгов за 24ч</h3>
                            <p className="value">$84.5B</p>
                            <p className="change positive">+5.7%</p>
                        </div>
                        <div className="stat-card">
                            <h3>Доминирование BTC</h3>
                            <p className="value">42.3%</p>
                            <p className="change negative">-0.8%</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="crypto-list">
                <div className="container">
                    <h2>Топ криптовалют</h2>
                    <div className="crypto-table">
                        <div className="table-header">
                            <div className="col">Название</div>
                            <div className="col">Цена</div>
                            <div className="col">24ч %</div>
                            <div className="col">Объем 24ч</div>
                            <div className="col">Капитализация</div>
                        </div>
                        <div className="table-row">
                            <div className="col">
                                <div className="crypto-info">
                                    <img src="/btc.png" alt="Bitcoin" />
                                    <div>
                                        <h4>Bitcoin</h4>
                                        <span>BTC</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col">$45,000</div>
                            <div className="col positive">+2.5%</div>
                            <div className="col">$28.5B</div>
                            <div className="col">$875B</div>
                        </div>
                        <div className="table-row">
                            <div className="col">
                                <div className="crypto-info">
                                    <img src="/eth.png" alt="Ethereum" />
                                    <div>
                                        <h4>Ethereum</h4>
                                        <span>ETH</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col">$3,200</div>
                            <div className="col positive">+1.8%</div>
                            <div className="col">$15.2B</div>
                            <div className="col">$385B</div>
                        </div>
                        <div className="table-row">
                            <div className="col">
                                <div className="crypto-info">
                                    <img src="/bnb.png" alt="Binance Coin" />
                                    <div>
                                        <h4>Binance Coin</h4>
                                        <span>BNB</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col">$420</div>
                            <div className="col negative">-0.5%</div>
                            <div className="col">$2.1B</div>
                            <div className="col">$65B</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="market-news">
                <div className="container">
                    <h2>Последние новости рынка</h2>
                    <div className="news-grid">
                        <div className="news-card">
                            <div className="news-image">
                                <img src="/news1.jpg" alt="News" />
                            </div>
                            <div className="news-content">
                                <h3>Bitcoin достиг нового максимума</h3>
                                <p>Крупнейшая криптовалюта показала значительный рост на фоне институционального интереса</p>
                                <span className="date">2 часа назад</span>
                            </div>
                        </div>
                        <div className="news-card">
                            <div className="news-image">
                                <img src="/news2.jpg" alt="News" />
                            </div>
                            <div className="news-content">
                                <h3>Ethereum 2.0: Обновление сети</h3>
                                <p>Важное обновление сети Ethereum принесет значительные улучшения в производительности</p>
                                <span className="date">5 часов назад</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
} 