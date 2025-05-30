'use client'

import React, { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import Nav from '../components/Nav'
import './style.scss'

interface ContactForm {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const ContactsPage: React.FC = () => {
    const [formData, setFormData] = useState<ContactForm>({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Здесь будет логика отправки формы
        console.log('Form submitted:', formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="contacts-page">
            <Nav />
            <div className="container">
                <h1>Свяжитесь с нами</h1>
                
                <div className="contact-info">
                    <div className="info-item">
                        <FaEnvelope className="icon" />
                        <div>
                            <h3>Email</h3>
                            <p>support@cryptoexchange.com</p>
                        </div>
                    </div>
                    
                    <div className="info-item">
                        <FaPhone className="icon" />
                        <div>
                            <h3>Телефон</h3>
                            <p>+7 (999) 123-45-67</p>
                        </div>
                    </div>
                    
                    <div className="info-item">
                        <FaMapMarkerAlt className="icon" />
                        <div>
                            <h3>Адрес</h3>
                            <p>Москва, ул. Примерная, 123</p>
                        </div>
                    </div>
                </div>

                <div className="contact-form-container">
                    <h2>Отправить сообщение</h2>
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Ваше имя</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">Тема</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Сообщение</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={5}
                            />
                        </div>

                        <button type="submit" className="btn btn-blue">Отправить</button>
                    </form>
                </div>

                <div className="social-links">
                    <h2>Мы в социальных сетях</h2>
                    <div className="social-icons">
                        <a href="#" className="social-icon"><FaFacebook /></a>
                        <a href="#" className="social-icon"><FaTwitter /></a>
                        <a href="#" className="social-icon"><FaInstagram /></a>
                        <a href="#" className="social-icon"><FaLinkedin /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactsPage



