export default function ContactsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="contacts-layout">
            {children}
        </div>
    );
} 