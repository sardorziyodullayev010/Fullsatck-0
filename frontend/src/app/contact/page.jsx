import Nav from '@/app/components/Nav'
import "./style.scss"

export default function Contact() {
    return (
        <>
            <Nav />
            <main className="contact-page">
                <section className="hero">
                    <div className="container">
                        <h1 className="fade-in">Свяжитесь с нами</h1>
                        <p className="fade-in">Мы всегда рады помочь вам с вашими NFT проектами</p>
                    </div>
                </section>

                <section className="contact-info">
                    <div className="container">
                        <div className="contact-grid">
                            <div className="contact-card fade-in">
                                <h3>Адрес</h3>
                                <p>г. Узбекстан, ул. Алишер Навои, д. 123</p>
                            </div>
                            <div className="contact-card fade-in">
                                <h3>Телефон</h3>
                                <p>+998 77-057-06-65</p>
                            </div>
                            <div className="contact-card fade-in">
                                <h3>Email</h3>
                                <p>info@nftmarketplace.com</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="contact-form">
                    <div className="container">
                        <h2 className="text-center mb-3">Напишите нам</h2>
                        <form className="form">
                            <div className="form-group">
                                <label htmlFor="name">Имя</label>
                                <input type="text" id="name" placeholder="Ваше имя" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" placeholder="Ваш email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Сообщение</label>
                                <textarea id="message" placeholder="Ваше сообщение" rows="5"></textarea>
                            </div>
                            <button type="submit" className="btn-primary">Отправить</button>
                        </form>
                    </div>
                </section>
            </main>
        </>
    )
} 