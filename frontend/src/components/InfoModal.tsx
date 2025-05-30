"use client"

import './InfoModal.scss'

interface InfoModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    content: React.ReactNode;
}

export default function InfoModal({ isOpen, onClose, title, content }: InfoModalProps) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>×</button>
                <div className="modal-header">
                    <h2>{title}</h2>
                </div>
                <div className="modal-body">
                    {content}
                </div>
            </div>
        </div>
    )
} 