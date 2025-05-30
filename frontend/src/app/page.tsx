"use client"

import { useState } from 'react'
import Nav from './components/Nav'
import RegisterModal from '../components/RegisterModal'
import InfoModal from '../components/InfoModal'
import "./style.scss"

type ModalType = 'security' | 'fees' | 'support' | null;

export default function Home() {
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
    const [activeInfoModal, setActiveInfoModal] = useState<ModalType>(null);

    const securityContent = (
        <div className="info-content">
            <h3>Многоуровневая система безопасности</h3>
            <ul>
                <li>Двухфакторная аутентификация (2FA)</li>
                <li>Шифрование данных по протоколу SSL/TLS</li>
                <li>Холодное хранение криптовалют</li>
                <li>Мониторинг подозрительной активности</li>
                <li>Регулярные аудиты безопасности</li>
                <li>Защита от DDoS-атак</li>
            </ul>
            <p>Мы используем передовые технологии для обеспечения максимальной безопасности ваших активов.</p>
        </div>
    );

    const feesContent = (
        <div className="info-content">
            <h3>Прозрачная система комиссий</h3>
            <div className="fees-table">
                <div className="fee-row">
                    <span>Спотовая торговля</span>
                    <span>0.1%</span>
                </div>
                <div className="fee-row">
                    <span>Фьючерсы</span>
                    <span>0.02%</span>
                </div>
                <div className="fee-row">
                    <span>Ввод средств</span>
                    <span>Бесплатно</span>
                </div>
                <div className="fee-row">
                    <span>Вывод криптовалют</span>
                    <span>Сеть</span>
                </div>
            </div>
            <p>Снижайте комиссии, используя нашу систему уровней и токен платформы.</p>
        </div>
    );

    const supportContent = (
        <div className="info-content">
            <h3>Профессиональная поддержка 24/7</h3>
            <div className="support-channels">
                <div className="channel">
                    <h4>Чат поддержки</h4>
                    <p>Мгновенные ответы на ваши вопросы</p>
                </div>
                <div className="channel">
                    <h4>Email поддержка</h4>
                    <p>Подробные ответы на сложные вопросы</p>
                </div>
                <div className="channel">
                    <h4>Телефон</h4>
                    <p>Экстренная поддержка</p>
                </div>
                <div className="channel">
                    <h4>База знаний</h4>
                    <p>Подробные руководства и FAQ</p>
                </div>
            </div>
            <p>Наша команда экспертов готова помочь вам в любое время суток.</p>
        </div>
    );

    return (
        <div className="home-page">
            <Nav />
            <section className="hero">
                <div className="container">
                    <h1>Криптовалютная платформа будущего</h1>
                    <p>Безопасная торговля и инвестиции в цифровые активы</p>
                    <div className="cta-buttons">
                        <button className="btn btn-red" onClick={() => setIsRegisterModalOpen(true)}>Начать торговлю</button>
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
                            <button className="btn btn-yellow" onClick={() => setActiveInfoModal('security')}>Подробнее</button>
                        </div>
                        <div className="feature-card">
                            <h3>Низкие комиссии</h3>
                            <p>Минимальные комиссии за торговые операции</p>
                            <button className="btn btn-white" onClick={() => setActiveInfoModal('fees')}>Подробнее</button>
                        </div>
                        <div className="feature-card">
                            <h3>Поддержка 24/7</h3>
                            <p>Профессиональная команда всегда на связи</p>
                            <button className="btn btn-red" onClick={() => setActiveInfoModal('support')}>Подробнее</button>
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

            <RegisterModal 
                isOpen={isRegisterModalOpen} 
                onClose={() => setIsRegisterModalOpen(false)} 
            />

            <InfoModal
                isOpen={activeInfoModal === 'security'}
                onClose={() => setActiveInfoModal(null)}
                title="Безопасность"
                content={securityContent}
            />

            <InfoModal
                isOpen={activeInfoModal === 'fees'}
                onClose={() => setActiveInfoModal(null)}
                title="Комиссии"
                content={feesContent}
            />

            <InfoModal
                isOpen={activeInfoModal === 'support'}
                onClose={() => setActiveInfoModal(null)}
                title="Поддержка"
                content={supportContent}
            />
        </div>
    )
} 