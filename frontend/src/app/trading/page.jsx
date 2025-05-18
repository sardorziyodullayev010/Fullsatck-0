"use client"

import Nav from '../components/Nav'
import './style.scss'

export default function Trading() {
    return (
        <div className="trading-page">
            <Nav />
            <section className="hero">
                <div className="container">
                    <h1>Торговля криптовалютами</h1>
                    <p>Профессиональная платформа для торговли цифровыми активами</p>
                </div>
            </section>

            <section className="trading-interface">
                <div className="container">
                    <div className="trading-grid">
                        <div className="chart-section">
                            <div className="chart-header">
                                <div className="pair-selector">
                                    <h2>BTC/USDT</h2>
                                    <span className="price">$45,000</span>
                                    <span className="change positive">+2.5%</span>
                                </div>
                                <div className="time-frames">
                                    <button className="btn btn-white">1H</button>
                                    <button className="btn btn-white">4H</button>
                                    <button className="btn btn-white">1D</button>
                                    <button className="btn btn-white">1W</button>
                                </div>
                            </div>
                            <div className="chart-container">
                                {/* Здесь будет график */}
                                <div className="placeholder-chart">
                                    <p>График будет доступен после подключения к API</p>
                                </div>
                            </div>
                        </div>

                        <div className="trading-panel">
                            <div className="order-form">
                                <h3>Создать ордер</h3>
                                <div className="form-group">
                                    <label>Тип ордера</label>
                                    <div className="order-type-buttons">
                                        <button className="btn btn-red">Покупка</button>
                                        <button className="btn btn-white">Продажа</button>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Количество</label>
                                    <input type="number" placeholder="0.00" />
                                </div>
                                <div className="form-group">
                                    <label>Цена</label>
                                    <input type="number" placeholder="0.00" />
                                </div>
                                <div className="form-group">
                                    <label>Итого</label>
                                    <input type="number" placeholder="0.00" disabled />
                                </div>
                                <button className="btn btn-blue">Разместить ордер</button>
                            </div>

                            <div className="order-book">
                                <h3>Книга ордеров</h3>
                                <div className="order-list">
                                    <div className="order-item sell">
                                        <span className="price">$45,100</span>
                                        <span className="amount">0.5 BTC</span>
                                        <span className="total">$22,550</span>
                                    </div>
                                    <div className="order-item sell">
                                        <span className="price">$45,050</span>
                                        <span className="amount">1.2 BTC</span>
                                        <span className="total">$54,060</span>
                                    </div>
                                    <div className="order-item buy">
                                        <span className="price">$45,000</span>
                                        <span className="amount">0.8 BTC</span>
                                        <span className="total">$36,000</span>
                                    </div>
                                    <div className="order-item buy">
                                        <span className="price">$44,950</span>
                                        <span className="amount">1.5 BTC</span>
                                        <span className="total">$67,425</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="trading-history">
                <div className="container">
                    <h2>История торговли</h2>
                    <div className="history-table">
                        <div className="table-header">
                            <div className="col">Дата</div>
                            <div className="col">Пара</div>
                            <div className="col">Тип</div>
                            <div className="col">Цена</div>
                            <div className="col">Количество</div>
                            <div className="col">Итого</div>
                        </div>
                        <div className="table-row">
                            <div className="col">2024-02-20 15:30</div>
                            <div className="col">BTC/USDT</div>
                            <div className="col buy">Покупка</div>
                            <div className="col">$45,000</div>
                            <div className="col">0.1 BTC</div>
                            <div className="col">$4,500</div>
                        </div>
                        <div className="table-row">
                            <div className="col">2024-02-20 14:15</div>
                            <div className="col">ETH/USDT</div>
                            <div className="col sell">Продажа</div>
                            <div className="col">$3,200</div>
                            <div className="col">2 ETH</div>
                            <div className="col">$6,400</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
} 