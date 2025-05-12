import Nav from '../components/Nav'
import "./style.scss"

export default function About() {
    return (
        <div className="about-page">
            <Nav />
            <section className="hero">
                <div className="container">
                    <h1>О компании KIA Cars</h1>
                    <p>Ваш надежный партнер в мире автомобилей с 2010 года</p>
                </div>
            </section>

            <section className="mission">
                <div className="container">
                    <div className="mission-content">
                        <div>
                            <h2>Наша миссия</h2>
                            <p>Мы стремимся предоставить нашим клиентам лучший сервис в области автомобильных услуг, обеспечивая высочайшее качество обслуживания и индивидуальный подход к каждому клиенту.</p>
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
                                <p>Генеральный директор</p>
                            </div>
                        </div>
                        <div className="team-member">
                            <div className="member-info">
                                <h3>Мария Иванова</h3>
                                <p>Технический директор</p>
                            </div>
                        </div>
                        <div className="team-member">
                            <div className="member-info">
                                <h3>Дмитрий Сидоров</h3>
                                <p>Главный механик</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="values">
                <div className="container">
                    <h2>Наши ценности</h2>
                    <div className="values-grid">
                        <div className="value-card">
                            <h3>Качество</h3>
                            <p>Мы гарантируем высочайшее качество всех предоставляемых услуг</p>
                        </div>
                        <div className="value-card">
                            <h3>Надежность</h3>
                            <p>Наши клиенты могут быть уверены в надежности и безопасности</p>
                        </div>
                        <div className="value-card">
                            <h3>Профессионализм</h3>
                            <p>Наша команда состоит из опытных специалистов</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}