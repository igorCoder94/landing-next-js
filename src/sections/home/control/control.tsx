import ModuleBlock from '@/components/module-block/module-block';

const listOne = [
  {
    id: '1',
    icon: '/icons/main/control/pc.svg',
    title: 'Автоматизированные мобильные рабочие места исполнителей',
    text: '',
  },
  {
    id: '2',
    icon: '/icons/main/control/map.svg',
    title: 'Модуль навигации на объекте',
    text: '',
  },
  {
    id: '3',
    icon: '/icons/main/control/form.svg',
    title: 'Автоматизированный контроль выполнения работ',
    text: '',
  },
];

export default function Control() {
  return (
    <section className="w-full bg-[#f6f9fc] px-3.75">
      <ModuleBlock
        title="Контроль регламентов"
        listOne={listOne}
        image="/images/main/control/image.png"
        imageAlt="Тех. Обслуживание и Ремонт"
        scheme="/images/main/control/scheme.svg"
      />
    </section>
  );
}
