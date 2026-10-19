// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "Ocso",
  description: "Sistema de gestión",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-pink-100 antialiased">
        {children}
      </body>
    </html>
  );
}