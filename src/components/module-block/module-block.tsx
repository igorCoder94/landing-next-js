import Image from 'next/image';

import { Container } from '@/components/ui/container/container';

interface ModuleItem {
  id: string;
  icon: string;
  title: string;
  text: string;
}

interface ModuleBlockProps {
  title: string;
  image: string;
  imageAlt?: string;
  listOne: ModuleItem[];
  listTwo?: ModuleItem[];
  scheme: string;
}

interface ModuleListProps {
  items: ModuleItem[];
  className?: string;
}

export default function ModuleBlock({ title, image, imageAlt = '', listOne, listTwo = [], scheme }: ModuleBlockProps) {
  const hasOptionalModules = listTwo.length > 0;

  return (
    <Container className="relative z-10 flex flex-col items-center gap-8 pt-15 min-[1101px]:flex-row min-[1101px]:items-start min-[1101px]:gap-21 min-[1101px]:pt-40">
      <h2 className="section-title self-start min-[1101px]:hidden">
        <span className="block">Unios</span>
        <span className="block">{title}</span>
      </h2>

      <div className="w-full min-[1101px]:max-w-127.5 flex flex-col items-center">
        <h2 className="section-title mb-5 hidden min-[1101px]:block self-start">
          <span className="block">Unios</span>
          <span className="block">{title}</span>
        </h2>

        <Image src={image} alt={imageAlt} width={510} height={300} className="mb-3.75 h-auto w-full max-w-127.5 " />

        <ModuleList items={listOne} />

        {hasOptionalModules && (
          <div className="w-full min-[1101px]:block flex flex-col items-center">
            <h3 className="section-subtitle mb-5 self-start">Опционально подключаемые модули</h3>

            <ModuleList items={listTwo} />
          </div>
        )}
      </div>

      <div className="flex w-full flex-1 justify-center overflow-visible">
        <Image src={scheme} alt="" width={403} height={800} className="h-auto w-full max-w-100.75" unoptimized={true} />
      </div>
    </Container>
  );
}

function ModuleList({ items, className = '' }: ModuleListProps) {
  return (
    <div
      className={`mb-10 w-full min-w-75 max-w-127.5 rounded-lg bg-white px-4.5 py-6.25 font-inter text-text-main shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_6px_10px_0_rgba(0,5,50,0.15)] max-[340px]:min-w-full ${className}`}
    >
      {items.map((item) => (
        <div key={item.id} className="mb-6 flex items-center gap-4 font-uni last:mb-0">
          <Image src={item.icon} alt="" width={40} height={40} className="size-10 shrink-0" />

          <div>
            <div className="text-[15px] font-semibold leading-[normal]">{item.title}</div>
            <div className="text-[15px] font-light leading-[normal]">{item.text}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
