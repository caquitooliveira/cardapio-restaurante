import "./globals.css";

export const metadata = {
  title: "Cardápio Restaurante",
  description: "Projeto de Cardápio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}