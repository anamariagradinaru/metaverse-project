// import "@/globals.css"
import './globals.css';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html className="h-full bg-white" lang="ro">
            <body className="h-full">{children}</body>
        </html>
    );
}
