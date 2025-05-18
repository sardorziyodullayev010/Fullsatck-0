import Nav from '../components/Nav'
import "./style.scss"

export default function About() {
    return (
        <div className="about-page">
            <Nav />
            <section className="hero">
                <div className="container">
                    <h1>О нашей криптоплатформе</h1>
                    <p>Ваш надежный партнер в мире криптовалют с 2010 года</p>
                </div>
            </section>

            <section className="video-section">
                <div className="container">
                    <h2>Что такое криптовалюта?</h2>
                    <div className="video-container">
                        <iframe 
                            width="100%" 
                            height="500" 
                            src="https://www.youtube.com/embed/1YyAzVmP9xQ" 
                            title="Что такое криптовалюта?" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>

            <section className="mission">
                <div className="container">
                    <div className="mission-content">
                        <div>
                            <h2>Наша миссия</h2>
                            <p>Мы стремимся сделать криптовалюты доступными для каждого, обеспечивая безопасные и удобные решения для торговли и инвестирования в цифровые активы.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="team">
                <div className="container">
                    <h2>Наша команда</h2>
                    <div className="team-grid">
                        <div className="team-member">
                            <div className="member-info">
                                <h3>Александр Петров</h3>
                                <p>CEO & Blockchain Expert</p>
                            </div>
                        </div>
                        <div className="team-member">
                            <div className="member-info">
                                <h3>Мария Иванова</h3>
                                <p>CTO & Security Specialist</p>
                            </div>
                        </div>
                        <div className="team-member">
                            <div className="member-info">
                                <h3>Дмитрий Сидоров</h3>
                                <p>Lead Developer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="values">
                <div className="container">
                    <h2>Наши преимущества</h2>
                    <div className="values-grid">
                        <div className="value-card">
                            <h3>Безопасность</h3>
                            <p>Многоуровневая система защиты ваших активов</p>
                        </div>
                        <div className="value-card">
                            <h3>Инновации</h3>
                            <p>Использование передовых технологий в криптоиндустрии</p>
                        </div>
                        <div className="value-card">
                            <h3>Поддержка 24/7</h3>
                            <p>Профессиональная команда всегда готова помочь</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}