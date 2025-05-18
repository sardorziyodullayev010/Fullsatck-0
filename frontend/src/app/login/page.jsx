"use client"

import Nav from "@/components/Nav"
import "./style.scss"

export default function Login() {
    return (
        <main className="login-page">
            <Nav />
            <div className="hero">
                <div className="hero-content">
                    <h1>Вход в систему</h1>
                    <p>Получите доступ к торговле криптовалютами</p>
                </div>
            </div>

            <div className="login-container">
                <div className="login-form">
                    <div className="form-header">
                        <h2>Вход в аккаунт</h2>
                        <p>Введите свои данные для входа</p>
                    </div>

                    <form>
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
                                placeholder="Введите ваш пароль"
                                required
                            />
                        </div>

                        <div className="form-options">
                            <label className="remember-me">
                                <input type="checkbox" />
                                <span>Запомнить меня</span>
                            </label>
                            <a href="/forgot-password" className="forgot-password">
                                Забыли пароль?
                            </a>
                        </div>

                        <button type="submit" className="btn-primary">
                            Войти
                        </button>
                    </form>

                    <div className="form-footer">
                        <p>
                            Нет аккаунта?{" "}
                            <a href="/register" className="register-link">
                                Зарегистрироваться
                            </a>
                        </p>
                    </div>
                </div>

                <div className="login-features">
                    <div className="feature-card">
                        <div className="feature-icon">🔒</div>
                        <h3>Безопасность</h3>
                        <p>Двухфакторная аутентификация и шифрование данных</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">💱</div>
                        <h3>Торговля</h3>
                        <p>Мгновенный доступ к торговле криптовалютами</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">📊</div>
                        <h3>Аналитика</h3>
                        <p>Расширенные инструменты анализа рынка</p>
                    </div>
                </div>
            </div>
        </main>
    )
} 