"use client"

import Nav from "@/components/Nav"
import "./style.scss"

export default function Contacts() {
    return (
        <main className="contacts-page">
            <Nav />
            <div className="hero">
                <div className="hero-content">
                    <h1>Свяжитесь с нами</h1>
                    <p>Мы всегда готовы помочь вам с любыми вопросами</p>
                </div>
            </div>

            <div className="contacts-container">
                <div className="contact-info">
                    <div className="info-card">
                        <div className="icon">📧</div>
                        <h3>Email</h3>
                        <p>support@cryptoexchange.com</p>
                        <a href="mailto:support@cryptoexchange.com" className="btn-primary">Написать</a>
                    </div>
                    <div className="info-card">
                        <div className="icon">📱</div>
                        <h3>Телефон</h3>
                        <p>+7 (999) 123-45-67</p>
                        <a href="tel:+79991234567" className="btn-primary">Позвонить</a>
                    </div>
                    <div className="info-card">
                        <div className="icon">📍</div>
                        <h3>Адрес</h3>
                        <p>Москва, ул. Криптовалютная, 42</p>
                        <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="btn-primary">На карте</a>
                    </div>
                </div>

                <div className="contact-form">
                    <div className="form-header">
                        <h2>Отправить сообщение</h2>
                        <p>Заполните форму ниже, и мы свяжемся с вами в ближайшее время</p>
                    </div>

                    <form>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">Имя</label>
                                <input type="text" id="name" placeholder="Введите ваше имя" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" placeholder="Введите ваш email" required />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">Тема</label>
                            <select id="subject" required>
                                <option value="">Выберите тему</option>
                                <option value="support">Техническая поддержка</option>
                                <option value="trading">Торговля</option>
                                <option value="security">Безопасность</option>
                                <option value="other">Другое</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Сообщение</label>
                            <textarea id="message" placeholder="Введите ваше сообщение" required></textarea>
                        </div>

                        <button type="submit" className="btn-primary">Отправить сообщение</button>
                    </form>
                </div>

                <div className="social-links">
                    <h2>Мы в социальных сетях</h2>
                    <div className="social-grid">
                        <a href="#" className="social-card">
                            <img src="/icons/telegram.svg" alt="Telegram" />
                            <span>Telegram</span>
                        </a>
                        <a href="#" className="social-card">
                            <img src="/icons/twitter.svg" alt="Twitter" />
                            <span>Twitter</span>
                        </a>
                        <a href="#" className="social-card">
                            <img src="/icons/discord.svg" alt="Discord" />
                            <span>Discord</span>
                        </a>
                    </div>
                </div>
            </div>
        </main>
    )
} 