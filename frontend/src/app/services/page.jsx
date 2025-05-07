import Nav from '@/app/components/Nav'
import "./style.scss"

export default function Services() {
    const services = [
        {
            title: "Создание NFT",
            description: "Помогаем художникам и создателям контента выпускать свои работы в виде NFT",
            price: "От 1000₽"
        },
        {
            title: "Маркетплейс",
            description: "Платформа для покупки и продажи NFT с минимальными комиссиями",
            price: "Комиссия 2.5%"
        },
        {
            title: "Консультации",
            description: "Профессиональные консультации по созданию и продвижению NFT",
            price: "От 5000₽/час"
        },
        {
            title: "Разработка смарт-контрактов",
            description: "Создание уникальных смарт-контрактов для ваших NFT проектов",
            price: "От 50000₽"
        }
    ]

    return (
        <>
            <Nav />
            <main className="services-page">
                <section className="hero">
                    <div className="container">
                        <h1 className="fade-in">Наши услуги</h1>
                        <p className="fade-in">Все, что нужно для успешного NFT проекта</p>
                    </div>
                </section>

                <section className="services">
                    <div className="container">
                        <div className="services-grid">
                            {services.map((service, index) => (
                                <div key={index} className="service-card fade-in">
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                    <div className="price">{service.price}</div>
                                    <button className="btn-primary">Узнать больше</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="cta">
                    <div className="container">
                        <h2>Готовы начать?</h2>
                        <p>Свяжитесь с нами для получения подробной информации</p>
                        <button className="btn-primary">Связаться</button>
                    </div>
                </section>
            </main>
        </>
    )
} 