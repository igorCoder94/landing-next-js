import ModuleBlock from '@/components/module-block/module-block';

const listOne = [
  {
    id: '1',
    icon: '/icons/main/integration/modules.svg',
    title: 'Подключаемые внешние модули',
    text: 'Расширение функционала дополнительными модулями и сервисами внешних систем',
  },
];

const listTwo = [
  {
    id: '1',
    icon: '/icons/main/integration/build.svg',
    title: 'Модуль интеграции 3D BIM моделей',
    text: '',
  },
  {
    id: '2',
    icon: '/icons/main/integration/settings.svg',
    title: 'Построение гибких Бизнес Процессов BPM',
    text: '',
  },
  {
    id: '3',
    icon: '/icons/main/integration/analytics.svg',
    title: 'Модуль статистической аналитики. Прогнозирование событий',
    text: '',
  },
  {
    id: '4',
    icon: '/icons/main/integration/video.svg',
    title: 'Промышленная видеоаналитика CCTV',
    text: '',
  },
  {
    id: '5',
    icon: '/icons/main/integration/table.svg',
    title: 'Системы электронного документооборота СЭД',
    text: '',
  },
  {
    id: '6',
    icon: '/icons/main/integration/table.svg',
    title: 'Интеграция с системами электронного документооборота 1:С',
    text: '',
  },
];

export default function Integration() {
  return (
    <section className="w-full bg-[#f6f9fc] px-3.75">
      <ModuleBlock
        title="Интеграция"
        listOne={listOne}
        listTwo={listTwo}
        image="/images/main/integration/image.png"
        imageAlt="Интеграция"
        scheme="/images/main/integration/scheme.svg"
      />
    </section>
  );
}
