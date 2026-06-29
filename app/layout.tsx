import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lumière Botanicals — Premium Organic Skincare',
  description: 'Luxury botanical skincare crafted from 100% organic ingredients. Elevate your beauty ritual with our premium cosmetics collection.',
  metadataBase: new URL('https://lumiere-botanicals.com'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'Inter', sans-serif" }}>{children}</body>
    </html>
  );
}
