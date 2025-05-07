import Nav from './components/Nav'
import "./style.scss"

export default function Home() {
    return (
        <>
            <Nav />
            <main className="home-page">
                <section className="hero">
                    <div className="container">
                        <h1 className="fade-in">Добро пожаловать в NFT Marketplace</h1>
                        <p className="fade-in">Откройте для себя мир уникальных цифровых активов</p>
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
                                <h3>Безопасность</h3>
                                <p>Все транзакции защищены с помощью блокчейн-технологий</p>
                            </div>
                            <div className="feature-card fade-in">
                                <h3>Уникальность</h3>
                                <p>Каждый NFT является уникальным и не подлежит копированию</p>
                            </div>
                            <div className="feature-card fade-in">
                                <h3>Доступность</h3>
                                <p>Простой и удобный интерфейс для всех пользователей</p>
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
