import React from 'react';
import './globals.css';

export const metadata = {
  title: 'VAIRON LLC - Dynamic Development & Evolution',
  description: 'Professional POS systems, web development, app development, and cloud services integration.',
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