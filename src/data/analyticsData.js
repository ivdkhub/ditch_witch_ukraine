export const initialAnalyticsData = {
  summary: {
    totalVisitorsToday: 1248,
    totalVisitorsWeek: 8930,
    totalVisitorsMonth: 34520,
    totalPageViews: 84910,
    activeUsersNow: 42,
    conversionRate: '4.8%',
    totalInquiries: 18
  },

  dailyTraffic: [
    { day: 'Пн', visits: 1120, pageviews: 2840 },
    { day: 'Вт', visits: 1350, pageviews: 3410 },
    { day: 'Ср', visits: 1480, pageviews: 3950 },
    { day: 'Чт', visits: 1290, pageviews: 3120 },
    { day: 'Пт', visits: 1560, pageviews: 4180 },
    { day: 'Сб', visits: 980, pageviews: 2210 },
    { day: 'Нд', visits: 1150, pageviews: 2790 }
  ],

  geoTraffic: [
    { country: 'Україна (UA)', code: 'UA', percentage: '68%', visitors: 23473, flag: '🇺🇦' },
    { country: 'Польща (PL)', code: 'PL', percentage: '18%', visitors: 6213, flag: '🇵🇱' },
    { country: 'Великобританія (UK)', code: 'UK', percentage: '7%', visitors: 2416, flag: '🇬🇧' },
    { country: 'Німеччина (DE)', code: 'DE', percentage: '4%', visitors: 1380, flag: '🇩🇪' },
    { country: 'Інші Країни', code: 'OTHER', percentage: '3%', visitors: 1038, flag: '🌐' }
  ],

  pageViewsBreakdown: [
    { page: 'Каталог Продукції (/products)', views: 28450, percentage: '33.5%' },
    { page: 'Установки ГНБ JT10 / JT5', views: 21300, percentage: '25.1%' },
    { page: 'Головна Сторінка (/)', views: 18920, percentage: '22.3%' },
    { page: 'Вакуумні Екскаватори HXT75', views: 9840, percentage: '11.6%' },
    { page: 'Новини та Гайди (/news)', views: 6400, percentage: '7.5%' }
  ],

  sources: [
    { source: 'Органічний пошук (Google)', percentage: '54%', count: 18640 },
    { source: 'Прямі заходи (Direct)', percentage: '26%', count: 8975 },
    { source: 'Соціальні мережі (LinkedIn/FB)', percentage: '12%', count: 4142 },
    { source: 'Реферальні посилання', percentage: '8%', count: 2763 }
  ],

  recentInquiries: [
    {
      id: 'INQ-2026-089',
      date: '01 Вересня 2026 14:25',
      customerName: 'Олександр Ковальчук',
      company: 'ТОВ "СпецБудСервіс"',
      phone: '+380 67 123 45 67',
      email: 'o.kovalchuk@specbud.ua',
      city: 'Київ, Україна',
      inquiryType: 'Придбання спецтехніки ГНБ',
      productModel: 'Установка ГНБ JT10 (Ditch Witch)',
      budget: '€45,000 - €55,000',
      status: 'Новий',
      notes: 'Цікавить наявність бурового комплексу в Києві, умови лізингу та терміни гарантійного обслуговування.'
    },
    {
      id: 'INQ-2026-088',
      date: '31 Серпня 2026 16:10',
      customerName: 'Андрій Мельник',
      company: 'ПП "КиївКомунМережі"',
      phone: '+380 50 987 65 43',
      email: 'a.melnyk@kievkomun.com.ua',
      city: 'Вишгород, Київська обл.',
      inquiryType: 'Замовлення комплектів ТО',
      productModel: 'Комплект ТО 500 мотогодин JT10 (KIT-JT10-500H)',
      budget: 'За прайсом',
      status: 'В обробці',
      notes: 'Потрібна виїзна заміна мастил та фільтрів сервісною бригадою Олег Липкин.'
    },
    {
      id: 'INQ-2026-087',
      date: '30 Серпня 2026 11:45',
      customerName: 'Piotr Wiśniewski',
      company: 'Infrastruktura Podziemna Sp. z o.o.',
      phone: '+48 601 234 567',
      email: 'p.wisniewski@infrastruktura.pl',
      city: 'Краків, Польща (PL)',
      inquiryType: 'Придбання спецтехніки',
      productModel: 'Траншеєкопач C16X Walk-Behind',
      budget: '€18,500',
      status: 'Узгоджено',
      notes: 'Офіційну комерційну пропозицію надіслано на email. Очікується підписання договору.'
    },
    {
      id: 'INQ-2026-086',
      date: '29 Серпня 2026 09:30',
      customerName: 'Дмитро Шевченко',
      company: 'ПрАТ "УкрТелеКомПроект"',
      phone: '+380 63 555 12 34',
      email: 'd.shevchenko@utkproject.ua',
      city: 'Дніпро, Україна',
      inquiryType: 'Придбання спецтехніки ГНБ',
      productModel: 'Компактна Установка ГНБ JT5',
      budget: '€32,000',
      status: 'Завершено',
      notes: 'Техніка відвантажена зі складу. Гарантійні документи передано клієнту.'
    },
    {
      id: 'INQ-2026-085',
      date: '28 Серпня 2026 17:15',
      customerName: 'Віктор Кравченко',
      company: 'ТОВ "БудКомплектСервіс"',
      phone: '+380 50 444 88 99',
      email: 'v.kravchenko@budkomplekt.ua',
      city: 'Львів, Україна',
      inquiryType: 'Діагностика та Сервіс Subsite',
      productModel: 'Локаційна система Subsite TK RECON',
      budget: 'За калькуляцією',
      status: 'Новий',
      notes: 'Діагностика електронних систем локації, калібрування зонду та оновлення ПЗ.'
    }
  ]
};

export const initialCustomerDossiers = [
  {
    id: 'CLI-001',
    name: 'Олександр Ковальчук',
    company: 'ТОВ "СпецБудСервіс"',
    taxId: '38472910',
    phone: '+380 67 123 45 67',
    email: 'o.kovalchuk@specbud.ua',
    city: 'Київ',
    region: 'Київська обл.',
    clientType: 'V.I.P. Постійний Клієнт',
    fleet: 'Ditch Witch JT10, FM13V Mixer, Subsite TK Recon',
    totalDealsValue: '€112,000',
    notes: 'Провідний підрядник з прокладання кабельних мереж та газопроводів у Київській області. Відповідальний платник.',
    createdAt: '2024-03-15'
  },
  {
    id: 'CLI-002',
    name: 'Андрій Мельник',
    company: 'ПП "КиївКомунМережі"',
    taxId: '41205938',
    phone: '+380 50 987 65 43',
    email: 'a.melnyk@kievkomun.com.ua',
    city: 'Вишгород',
    region: 'Київська обл.',
    clientType: 'Комунальне Підприємство',
    fleet: 'Ditch Witch RT45, C16X Trencher',
    totalDealsValue: '€48,500',
    notes: 'Комунальні роботи, риття траншей під водопровід. Замовляє оригінальне ТО та ремкомплекти ланцюгів DuraTooth.',
    createdAt: '2024-06-20'
  },
  {
    id: 'CLI-003',
    name: 'Piotr Wiśniewski',
    company: 'Infrastruktura Podziemna Sp. z o.o.',
    taxId: 'PL6762491029',
    phone: '+48 601 234 567',
    email: 'p.wisniewski@infrastruktura.pl',
    city: 'Краків',
    region: 'Малопольське воєводство (PL)',
    clientType: 'Міжнародний Партнер (PL)',
    fleet: 'Ditch Witch C16X, JT2020 Mach 1',
    totalDealsValue: '€85,000',
    notes: 'Польський підрядник infrastructure HDD projects. Закуповує техніку через офіційний офіс JLM Group Scandinavia.',
    createdAt: '2025-01-10'
  },
  {
    id: 'CLI-004',
    name: 'Дмитро Шевченко',
    company: 'ПрАТ "УкрТелеКомПроект"',
    taxId: '29384019',
    phone: '+380 63 555 12 34',
    email: 'd.shevchenko@utkproject.ua',
    city: 'Дніпро',
    region: 'Дніпропетровська обл.',
    clientType: 'Підрядник ГНБ',
    fleet: 'Ditch Witch JT5 Compact Rig',
    totalDealsValue: '€32,000',
    notes: 'Будівництво ВОЛЗ (волоконно-оптичних ліній зв’язку). Придбав бурову JT5.',
    createdAt: '2025-05-18'
  }
];
