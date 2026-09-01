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
      id: 'INQ-1001',
      date: '28 СЕРПНЯ 2026 15:42',
      customerName: 'Олександр Ковальчук',
      company: 'ТОВ "СпецБудСервіс"',
      phone: '+380 67 123-45-67',
      email: 'o.kovalchuk@specbud.ua',
      machine: 'Установка ГНБ JT10',
      status: 'Новий',
      notes: 'Цікавить наявність техніки в Києві та умови лізингу.'
    },
    {
      id: 'INQ-1002',
      date: '28 СЕРПНЯ 2026 14:15',
      customerName: 'Андрій Мельник',
      company: 'ПП "КиївКомунМережі"',
      phone: '+380 50 987-65-43',
      email: 'a.melnyk@kievkomun.com.ua',
      machine: 'Вакуумний Екскаватор HXT75-800',
      status: 'В обробці',
      notes: 'Потрібна демонстрація роботи на об’єкті.'
    },
    {
      id: 'INQ-1003',
      date: '27 СЕРПНЯ 2026 18:30',
      customerName: 'Piotr Wiśniewski',
      company: 'Infrastruktura Podziemna Sp. z o.o.',
      phone: '+48 601 234 567',
      email: 'p.wisniewski@infrastruktura.pl',
      machine: 'Траншеєкопач C16X',
      status: 'Завершено',
      notes: 'Комерційну пропозицію надіслано.'
    },
    {
      id: 'INQ-1004',
      date: '27 СЕРПНЯ 2026 11:10',
      customerName: 'Дмитро Шевченко',
      company: 'ПрАТ "УкрТелеКомПроект"',
      phone: '+380 63 555-12-34',
      email: 'd.shevchenko@utkproject.ua',
      machine: 'Установка ГНБ JT5',
      status: 'Новий',
      notes: 'Термінова покупка під тендерний проект.'
    }
  ]
};
