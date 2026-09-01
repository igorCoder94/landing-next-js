import ModuleBlock from '@/components/module-block/module-block';

const listOne = [
  {
    id: '1',
    icon: '/icons/main/dispatch/hub.svg',
    title: 'Диспетчеризация SCADA/IoT',
    text: 'Универсальный интегратор SCADA систем (MB RTU, TCP, S7, Profinet и др.)',
  },
  {
    id: '2',
    icon: '/icons/main/dispatch/smart.svg',
    title: 'Мониторинг',
    text: 'Панель мониторинга и оповещений. Представление данных в едином виде.',
  },
  {
    id: '3',
    icon: '/icons/main/dispatch/report.svg',
    title: 'Аналитика данных',
    text: 'Графическая интерпретация событий',
  },
  {
    id: '4',
    icon: '/icons/main/dispatch/ai.svg',
    title: 'Интерактивные карты',
    text: '2D планы расположения устройств на объекте',
  },
];

export default function Dispatch() {
  return (
    <section className="w-full bg-[#f6f9fc] px-3.75">
      <ModuleBlock
        title="Диспетчеризация и Мониторинг"
        listOne={listOne}
        image="/images/main/dispatch/dispatch.png"
        imageAlt="Диспетчеризация SCADA/IoT"
        scheme="/images/main/dispatch/scheme.svg"
      />
    </section>
  );
}
