import ModuleBlock from '@/components/module-block/module-block';

const listOne = [
  {
    id: '1',
    icon: '/icons/main/maintenance-and-repair/form.svg',
    title: 'Менеджер бизнес-процессов',
    text: 'Индивидуальная настройка Объектов / Устройств / Пользователей',
  },
  {
    id: '2',
    icon: '/icons/main/maintenance-and-repair/manager.svg',
    title: 'Менеджер исполнителей',
    text: 'Автоматическое формирование и ведение плановых работ',
  },
  {
    id: '3',
    icon: '/icons/main/maintenance-and-repair/map.svg',
    title: 'Интерактивные карты',
    text: '2D планы расположения устройств на объекте',
  },
  {
    id: '4',
    icon: '/icons/main/maintenance-and-repair/folder.svg',
    title: 'Формирование электронной отчетности',
    text: 'Приведение документов к единому стандарту',
  },
];

export default function MaintenanceAndRepair() {
  return (
    <section className="w-full bg-[#f6f9fc] px-3.75">
      <ModuleBlock
        title="Тех. Обслуживание и Ремонт"
        listOne={listOne}
        image="/images/main/maintenance-and-repair/image.png"
        imageAlt="Тех. Обслуживание и Ремонт"
        scheme="/images/main/maintenance-and-repair/scheme.svg"
      />
    </section>
  );
}
