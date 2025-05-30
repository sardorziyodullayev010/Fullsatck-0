"use client"

import { useState } from 'react'
import Link from 'next/link'
import './RegisterModal.scss'

interface RegisterModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function RegisterModal({ isOpen, onClose }: RegisterModalProps) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>×</button>
                <div className="modal-header">
                    <h2>Начать торговлю</h2>
                </div>
                <div className="modal-body">
                    <p>Для начала торговли необходимо зарегистрироваться на платформе.</p>
                    <div className="modal-actions">
                        <Link href="/auth/register" className="btn-primary">
                            Зарегистрироваться
                        </Link>
                        <Link href="/auth/login" className="btn-secondary">
                            Уже есть аккаунт? Войти
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
} 