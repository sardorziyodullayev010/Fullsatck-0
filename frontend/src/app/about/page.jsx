import Nav from '@/app/components/Nav'
import "./style.scss"

export default function About() {
    return (
        <>
            <Nav />
            <main className="about-page">
                <section className="hero">
                    <div className="container">
                        <h1 className="fade-in">О нашем NFT маркетплейсе</h1>
                        <p className="fade-in">Мы создаем будущее цифрового искусства</p>
                    </div>
                </section>

                <section className="features">
                    <div className="container">
                        <h2 className="text-center mb-3">Наши преимущества</h2>
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

                <section className="team">
                    <div className="container">
                        <h2 className="text-center mb-3">Наша команда</h2>
                        <div className="team-grid">
                            <div className="team-member fade-in">
                                <h3>Иван Иванов</h3>
                                <p>Основатель и CEO</p>
                            </div>
                            <div className="team-member fade-in">
                                <h3>Анна Петрова</h3>
                                <p>Главный дизайнер</p>
                            </div>
                            <div className="team-member fade-in">
                                <h3>Петр Сидоров</h3>
                                <p>Технический директор</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}