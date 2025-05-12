import Nav from './components/Nav'
import "./style.scss"

export default function Home() {
    return (
        <>
            <Nav />
            <main className="home-page">
                <section className="hero">
                    <div className="container">
                        <h1 className="fade-in">Добро пожаловать в KI Cars</h1>
                        <div className="hero-content">
                            <div className="hero-text">
                                <h2>Kia Sorento 2024</h2>
                                <p>Современный кроссовер с передовыми технологиями и комфортом</p>
                                <ul>
                                    <li>Мощный двигатель 2.5L Turbo</li>
                                    <li>Полный привод AWD</li>
                                    <li>Премиальный интерьер</li>
                                    <li>Передовые системы безопасности</li>
                                </ul>
                            </div>
                        </div>
                        <div className="hero-buttons fade-in">
                            <a href="/auth/register" className="btn-primary">Начать</a>
                            <a href="/about" className="btn-secondary">Узнать больше</a>
                        </div>
                    </div>
                </section>

                <section className="features">
                    <div className="container">
                        <h2 className="text-center mb-3">Почему выбирают нас</h2>
                        <div className="features-grid">
                            <div className="feature-card fade-in">
                                <h3>Гарантия качества</h3>
                                <p>Официальная гарантия производителя на все автомобили</p>
                            </div>
                            <div className="feature-card fade-in">
                                <h3>Профессионализм</h3>
                                <p>Опытные специалисты и сертифицированный сервис</p>
                            </div>
                            <div className="feature-card fade-in">
                                <h3>Выгодные условия</h3>
                                <p>Гибкие программы кредитования и специальные предложения</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="cta">
                    <div className="container">
                        <h2>Готовы начать?</h2>
                        <p>Присоединяйтесь к нашему сообществу прямо сейчас</p>
                        <a href="/auth/register" className="btn-primary">Зарегистрироваться</a>
                    </div>
                </section>
            </main>
        </>
    )
}
