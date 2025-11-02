import React from 'react';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'VAIRON LLC - Dynamic Development & Evolution',
    template: '%s | VAIRON LLC',
  },
  description: 'Empowering businesses with innovative technology solutions. Professional POS systems, custom website development, mobile app development, and seamless cloud services integration.',
  keywords: [
    'POS System Development',
    'Website Development',
    'Mobile App Development',
    'Cloud Services Integration',
    'Custom Software Solutions',
    'VAIRON LLC',
    'Technology Solutions',
    'Business Software',
    'E-commerce Development',
    'Cloud Migration',
  ],
  authors: [{ name: 'VAIRON LLC' }],
  creator: 'VAIRON LLC',
  publisher: 'VAIRON LLC',
  metadataBase: new URL('https://vaironllc.com'), // Update with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vaironllc.com',
    title: 'VAIRON LLC - Dynamic Development & Evolution',
    description: 'Empowering businesses with innovative technology solutions. Professional POS systems, custom website development, mobile app development, and seamless cloud services integration.',
    siteName: 'VAIRON LLC',
    images: [
      {
        url: '/vairon-logo.jpg',
        width: 1200,
        height: 630,
        alt: 'VAIRON LLC - Dynamic Development & Evolution',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VAIRON LLC - Dynamic Development & Evolution',
    description: 'Empowering businesses with innovative technology solutions.',
    images: ['/vairon-logo.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/vairon-logo.jpg',
    apple: '/vairon-logo.jpg',
  },
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