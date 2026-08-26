import type { Metadata } from 'next';
import './globals.css';
import { Footer } from '@/components/footer/footer';
import { Header } from '@/components/header/header';
import { inter, roboto, segoeUI, uniSans, uniSansBook } from './fonts';

export const metadata: Metadata = {
  title: 'Unios - сервис для автоматизации эксплуатации объекта',
  description:
    'Unios - сервис автоматизации эксплуатации и технического обслуживания оборудования. Мониторинг, Диспетчеризация, Техническое обслуживание и Ремонт оборудования',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="ru"
      className={`
    ${uniSans.variable}
    ${uniSansBook.variable}
    ${inter.variable}
    ${segoeUI.variable}
    ${roboto.variable}

  `}
    >
      <body className="flex min-h-screen flex-col bg-[radial-gradient(67.33%_94.91%_at_48.71%_49.95%,#24CAFF_9.8%,#0075FF_100%)]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
