import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'UrbanCafe - Where Urban Meets Coffee',
  description: 'A modern, stylish cafe located in the heart of downtown. Serving premium coffee, pastries, and delicious food in an urban environment.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
