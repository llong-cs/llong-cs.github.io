import "./globals.css";
import type { Metadata } from "next";
// import { Noto_Serif_TC } from 'next/font/google';

// const notoSerifTC = Noto_Serif_TC({
//   subsets: ['latin'],
//   weight: ['400', '700'],
// });

export const metadata: Metadata = {
  title: "Lin Long - Personal Homepage",
  description: "Personal website of Lin Long",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🥷</text></svg>",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-gray-100 text-gray-900">
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}