"use client"

import Nav from '@/components/Nav'
import './style.scss'

export default function Register() {
    return (
        <main className="register-page">
            <Nav />
            <div className="hero">
                <div className="hero-content">
                    <h1>Регистрация</h1>
                    <p>Создайте аккаунт для начала торговли криптовалютами</p>
                </div>
            </div>

            <div className="register-container">
                <div className="register-form">
                    <div className="form-header">
                        <h2>Создание аккаунта</h2>
                        <p>Заполните форму для регистрации</p>
                    </div>

                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Имя</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Введите ваше имя"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Введите ваш email"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Пароль</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Создайте пароль"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirm-password">Подтверждение пароля</label>
                            <input
                                type="password"
                                id="confirm-password"
                                placeholder="Повторите пароль"
                                required
                            />
                        </div>

                        <div className="form-options">
                            <label className="terms">
                                <input type="checkbox" required />
                                <span>
                                    Я согласен с{" "}
                                    <a href="/terms" className="terms-link">
                                        условиями использования
                                    </a>
                                </span>
                            </label>
                        </div>

                        <button type="submit" className="btn-primary">
                            Зарегистрироваться
                        </button>
                    </form>

                    <div className="form-footer">
                        <p>
                            Уже есть аккаунт?{" "}
                            <a href="/login" className="login-link">
                                Войти
                            </a>
                        </p>
                    </div>
                </div>

                <div className="register-benefits">
                    <div className="benefit-card">
                        <div className="benefit-icon">🚀</div>
                        <h3>Быстрый старт</h3>
                        <p>Начните торговать уже через 5 минут после регистрации</p>
                    </div>
                    <div className="benefit-card">
                        <div className="benefit-icon">💰</div>
                        <h3>Бонусы</h3>
                        <p>Получите бонусы за регистрацию и первую торговлю</p>
                    </div>
                    <div className="benefit-card">
                        <div className="benefit-icon">📱</div>
                        <h3>Мобильное приложение</h3>
                        <p>Торгуйте с любого устройства через наше приложение</p>
                    </div>
                </div>
            </div>
        </main>
    )
} 