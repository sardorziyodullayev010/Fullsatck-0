import Nav from '../components/Nav'
import "./style.scss"

export default function Services() {
    const services = [
        {
            title: "Продажа автомобилей",
            description: "Широкий выбор новых и подержанных автомобилей Kia",
            icon: "🚗"
        },
        {
            title: "Сервисное обслуживание",
            description: "Профессиональное обслуживание и ремонт автомобилей Kia",
            icon: "🔧"
        },
        {
            title: "Финансовые услуги",
            description: "Выгодные программы кредитования и лизинга",
            icon: "💰"
        },
        {
            title: "Trade-in",
            description: "Обмен вашего автомобиля на новый Kia с выгодой",
            icon: "🔄"
        }
    ]

    return (
        <div className="services-page">
            <Nav />
            <section className="hero">
                <div className="container">
                    <h1>Наши услуги</h1>
                    <p>Профессиональное обслуживание и ремонт вашего автомобиля</p>
                </div>
            </section>

            <section className="services">
                <div className="container">
                    <h2>Услуги сервиса</h2>
                    <div className="services-grid">
                        <div className="service-card">
                            <h3>Техническое обслуживание</h3>
                            <p>Регулярное техническое обслуживание для поддержания вашего автомобиля в отличном состоянии</p>
                            <div className="price">от 5 000 ₽</div>
                        </div>
                        <div className="service-card">
                            <h3>Диагностика</h3>
                            <p>Комплексная диагностика всех систем автомобиля с использованием современного оборудования</p>
                            <div className="price">от 2 000 ₽</div>
                        </div>
                        <div className="service-card">
                            <h3>Ремонт двигателя</h3>
                            <p>Профессиональный ремонт двигателя любой сложности</p>
                            <div className="price">от 15 000 ₽</div>
                        </div>
                        <div className="service-card">
                            <h3>Кузовной ремонт</h3>
                            <p>Восстановление кузова после повреждений с гарантией качества</p>
                            <div className="price">от 10 000 ₽</div>
                        </div>
                        <div className="service-card">
                            <h3>Замена масла</h3>
                            <p>Замена масла и фильтров с использованием оригинальных материалов</p>
                            <div className="price">от 3 000 ₽</div>
                        </div>
                        <div className="service-card">
                            <h3>Шиномонтаж</h3>
                            <p>Профессиональный шиномонтаж и балансировка колес</p>
                            <div className="price">от 1 500 ₽</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta">
                <div className="container">
                    <h2>Запишитесь на обслуживание</h2>
                    <p>Оставьте заявку, и наш менеджер свяжется с вами для уточнения деталей</p>
                    <a href="/contact" className="btn-primary">Записаться</a>
                </div>
            </section>
        </div>
    )
} 