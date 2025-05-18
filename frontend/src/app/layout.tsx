import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import ThemeToggle from '../components/ThemeToggle';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'CryptoExchange',
    description: 'Торговая платформа для криптовалют',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ru">
            <body className={inter.className}>
                {children}
                <ThemeToggle />
            </body>
        </html>
    );
} 