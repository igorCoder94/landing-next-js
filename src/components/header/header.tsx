import Image from 'next/image';
import Link from 'next/link';

import { Container } from '@/components/ui/container/container';

export function Header() {
  return (
    <header className="w-full">
      <Container>
        <div className="flex h-24 items-center justify-between">
          <Image src="/icons/logo.svg" alt="" width={100} height={25} />
          <nav className="flex items-center justify-between gap-10">
            <Link href="/">Главная</Link>
            <Link href="/about">О нас</Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}
