import React, { createContext, useContext, useState, useEffect } from 'react';

const PartsContext = createContext();

export const initialPartsData = [
  // --- KITS (Комплекти запчастин) ---
  {
    id: 'kit-jt10-500h',
    type: 'kit', // 'kit' | 'single'
    category: 'hdd',
    title: {
      uk: 'Комплект ТО 500 мотогодин JT10',
      en: '500-Hour Maintenance Kit JT10',
      pl: 'Zestaw Przeglądu 500h JT10'
    },
    price: '18,500 грн',
    code: 'KIT-JT10-500H',
    models: 'Ditch Witch JT10',
    items: [
      'Масляний фільтр двигуна Deutz D2.9 OEM',
      'Паливний фільтр тонкої очистки',
      'Гідравлічний картридж високого тиску',
      'Повітряний фільтр первинний та вторинний',
      'Захисне мастило штанг Power Pipe Grease (1 уп)'
    ],
    desc: {
      uk: 'Повний офіційний комплект видаткових матеріалів та фільтрів для проведення планового технічного обслуговування бурової установки JT10 на 500 мотогодин.',
      en: 'Complete OEM maintenance filter and lubricant kit for 500-hour scheduled service of Ditch Witch JT10 HDD rig.',
      pl: 'Kompletny zestaw filtrów i smarów do przeglądu wiertnicy JT10 po 500 roboczogodzinach.'
    },
    image: '/Risorse/Immagini/dirdrills_jt10.png',
    docFile: '/documents/31 Power Pipe Forged 2015 ver UA.docx'
  },
  {
    id: 'kit-subsite-recon',
    type: 'kit',
    category: 'electronics',
    title: {
      uk: 'Ремкомплект Зондів та Ущільнень Subsite® TK',
      en: 'Subsite® TK Beacon & Seals Repair Kit',
      pl: 'Zestaw Uszczelnień i Sond Subsite® TK'
    },
    price: '42,000 грн',
    code: 'KIT-SUB-TK-SEAL',
    models: 'Subsite TK RECON, TK Commander',
    items: [
      'Випромінювальний зонд Subsite 17T4 Dual-Frequency',
      'Високотемпературні термостійкі O-Ring ущільнення (10 шт)',
      'Алюмінієва кришка відсіку живлення з різьбою',
      'Контактні пружини батарейного блоку (4 шт)'
    ],
    desc: {
      uk: 'Спеціальний комплект для відновлення та захисту зондів Subsite® під час важких бурових робіт у рідинному середовищі.',
      en: 'Specialized seal and beacon restoration kit for Subsite® HDD sondes operating under high mud pressure.',
      pl: 'Zestaw uszczelnień i akcesoriów do sond nawigacyjnych Subsite®.'
    },
    image: '/Risorse/Immagini/dirdrills_jt5.png',
    docFile: '/documents/11-2 укрBroszura System Serii TK v.11.2015.docx'
  },
  {
    id: 'kit-c16x-duratooth',
    type: 'kit',
    category: 'trenchers',
    title: {
      uk: 'Комплект Ланцюга та Твердосплавних Зубів C16X',
      en: 'DuraTooth Chain & Carbide Teeth Kit C16X',
      pl: 'Zestaw Łańcucha i Zębów Węglikowych C16X'
    },
    price: '24,900 грн',
    code: 'KIT-C16X-CHAIN',
    models: 'Ditch Witch C16X, C24X, C30X',
    items: [
      'Копальний ланцюг DuraTooth 36" (915 мм)',
      'Твердосплавні конусні зуби All-Rock Carbide (32 шт)',
      'Привідна зірочка ланцюга (Sprocket 12T)',
      'Зносостійкі пластини напрямної планки'
    ],
    desc: {
      uk: 'Ремкомплект копального органу траншеєкопача C16X для роботи у мерзлих, кам’янистих та важких ґрунтах.',
      en: 'Heavy-duty trencher digging chain and carbide teeth kit for frost and rocky soils.',
      pl: 'Zestaw do koparek łańcuchowych C16X do trudnych gruntów i kamieni.'
    },
    image: '/Risorse/Immagini/c16x.png',
    docFile: '/documents/10-2 укрBroszura UTG v.01.2016.docx'
  },

  // --- USED EQUIPMENT (Вживана Спецтехніка Б/В) ---
  {
    id: 'used-jt2020-mach1',
    type: 'used',
    category: 'hdd',
    title: {
      uk: 'Установка ГНБ Ditch Witch JT2020 Mach 1 (Вживана)',
      en: 'Used Ditch Witch JT2020 Mach 1 HDD Rig',
      pl: 'Używana Wiertnica Ditch Witch JT2020 Mach 1'
    },
    code: 'USED-JT2020-2018',
    models: 'Рік випуску: 2018 • 2,450 мотогодин',
    items: [
      'Повна передпродажна діагностика сервісом Ditch Witch Ukraine',
      'В комплекті: 150м бурових штанг Power Pipe',
      'Змішувальна система FM13V в подарунок',
      'Гарантія на гідравліку 6 місяців'
    ],
    desc: {
      uk: 'Офіційна вживана бурова установка в відмінному технічному стані. Пройшла повний сервісний огляд та заміну всіх мастил і фільтрів.',
      en: 'Pre-owned official Ditch Witch HDD rig in top working order with full service inspection history.',
      pl: 'Używana wiertnica Ditch Witch w doskonałym stanie technicznym po pełnym przeglądzie.'
    },
    image: '/Risorse/Immagini/dirdrills_jt10.png',
    docFile: '/documents/10-2 укрBroszura UTG v.01.2016.docx'
  },
  {
    id: 'used-rt45-trencher',
    type: 'used',
    category: 'trenchers',
    title: {
      uk: 'Траншеєкопач Ditch Witch RT45 з кабелеукладачем (Вживаний)',
      en: 'Used Ditch Witch RT45 Trencher & Plow',
      pl: 'Używana Koparka Łańcuchowa Ditch Witch RT45'
    },
    code: 'USED-RT45-2019',
    models: 'Рік випуску: 2019 • 1,820 мотогодин',
    items: [
      'Двигун Deutz Diesel 49 к.с.',
      'Глибина копання до 1.5м',
      'Новий копальний ланцюг DuraTooth',
      'Кабелеукладач H314 у комплекті'
    ],
    desc: {
      uk: 'Вживана копальна установка RT45 для важких ґрунтів. Повністю готова до роботи на об’єктах без додаткових вкладень.',
      en: 'Pre-owned RT45 heavy trencher fully prepped and inspected by Ditch Witch certified engineers.',
      pl: 'Używana koparka RT45 w pełni przygotowana do pracy.'
    },
    image: '/Risorse/Immagini/c16x.png',
    docFile: '/documents/10-2 укрBroszura UTG v.01.2016.docx'
  },

  // --- SINGLE PARTS (Окремі запасні частини) ---
  {
    id: 'part-ppf-jt10',
    type: 'single',
    category: 'hdd',
    title: {
      uk: 'Бурова штанга Power Pipe Forged JT10',
      en: 'Power Pipe Forged Drill Pipe JT10',
      pl: 'Żerdź Wiertnicza Power Pipe Forged JT10'
    },
    price: '8,200 грн',
    code: 'DW-PPF-JT10',
    models: 'Ditch Witch JT10, JT9',
    items: [],
    desc: {
      uk: 'Оригінальна суцільнокована бурова штанга довжиною 1.83 м (6 ft) з високоміцної сплавної сталі.',
      en: 'Genuine 1.83 m (6 ft) forged alloy steel drill pipe engineered for maximum torque.',
      pl: 'Oryginalna kuta żerdź wiertnicza o długości 1.83 m z stali stopowej.'
    },
    image: '/Risorse/Immagini/dirdrills_jt10.png',
    docFile: '/documents/31 Power Pipe Forged 2015 ver UA.docx'
  },
  {
    id: 'part-reamer-250',
    type: 'single',
    category: 'hdd',
    title: {
      uk: 'Буровий розширювач Reamer 250мм (10")',
      en: 'HDD Backreamer 250mm (10 in)',
      pl: 'Poszerzacz Wiertniczy Reamer 250mm'
    },
    price: '35,000 грн',
    code: 'DW-RM-250',
    models: 'JT5, JT10, JT20',
    items: [],
    desc: {
      uk: 'Універсальний ущільнювальний розширювач з твердосплавними різцями для розширення свердловини під трубу Ø 160-225 мм.',
      en: 'Heavy-duty compaction backreamer with carbide cutters for 160-225 mm pipe installation.',
      pl: 'Poszerzacz kompaktujący z zębami węglikowymi pod rury Ø 160-225 mm.'
    },
    image: '/Risorse/Immagini/category_drilling.png',
    docFile: '/documents/31 Power Pipe Forged 2015 ver UA.docx'
  },
  {
    id: 'part-subsite-sonde',
    type: 'single',
    category: 'electronics',
    title: {
      uk: 'Локаційний випромінювач Subsite® 17T4',
      en: 'Subsite® 17T4 Beacon Sonde Transmit',
      pl: 'Sonda Nadawcza Subsite® 17T4'
    },
    price: '68,000 грн',
    code: 'SUB-17T4',
    models: 'Subsite Marksman, TK RECON, TK Commander',
    items: [],
    desc: {
      uk: 'Двочастотний зонд високої потужності для точного визначення глибини та кута нахилу бурової головки до 33.5 м.',
      en: 'High-power dual-frequency transmitter sonde for deep pitch and depth readings up to 33.5 m.',
      pl: 'Sonda nadawcza dwuczęstotliwościowa do precyzyjnego pomiaru głębokości do 33.5 m.'
    },
    image: '/Risorse/Immagini/dirdrills_jt5.png',
    docFile: '/documents/11-2 укрBroszura System Serii TK v.11.2015.docx'
  },
  {
    id: 'part-duratooth-shark',
    type: 'single',
    category: 'trenchers',
    title: {
      uk: 'Твердосплавний зуб DuraTooth Shark',
      en: 'DuraTooth Shark Carbide Tooth',
      pl: 'Ząb Węglikowy DuraTooth Shark'
    },
    price: '650 грн',
    code: 'DW-DT-SHARK',
    models: 'C16X, C24X, C30X',
    items: [],
    desc: {
      uk: 'Зносостійкий карбідний зуб ланцюга для швидкого врізання у твердий та сухий ґрунт.',
      en: 'Carbide-tipped chain tooth engineered for rapid penetration into hard clay.',
      pl: 'Ząb węglikowy do koparek łańcuchowych do twardych gruntów.'
    },
    image: '/Risorse/Immagini/c16x.png',
    docFile: '/documents/10-2 укрBroszura UTG v.01.2016.docx'
  }
];

export function PartsProvider({ children }) {
  const [parts, setParts] = useState(() => {
    const saved = localStorage.getItem('ditchwitch_parts_data');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse saved parts data:', e);
      }
    }
    return initialPartsData;
  });

  useEffect(() => {
    localStorage.setItem('ditchwitch_parts_data', JSON.stringify(parts));
  }, [parts]);

  const addPartOrKit = (newItem) => {
    const formattedItem = {
      ...newItem,
      id: newItem.id || `part-${Date.now()}`,
      items: newItem.items || [],
      title: typeof newItem.title === 'object' ? newItem.title : { uk: newItem.title, en: newItem.title, pl: newItem.title },
      desc: typeof newItem.desc === 'object' ? newItem.desc : { uk: newItem.desc, en: newItem.desc, pl: newItem.desc }
    };
    setParts((prev) => [formattedItem, ...prev]);
  };

  const updatePartOrKit = (updatedItem) => {
    setParts((prev) =>
      prev.map((item) => (item.id === updatedItem.id ? { ...item, ...updatedItem } : item))
    );
  };

  const deletePartOrKit = (id) => {
    setParts((prev) => prev.filter((item) => item.id !== id));
  };

  const resetToDefaultParts = () => {
    setParts(initialPartsData);
    localStorage.removeItem('ditchwitch_parts_data');
  };

  return (
    <PartsContext.Provider
      value={{
        parts,
        addPartOrKit,
        updatePartOrKit,
        deletePartOrKit,
        resetToDefaultParts
      }}
    >
      {children}
    </PartsContext.Provider>
  );
}

export function useParts() {
  const context = useContext(PartsContext);
  if (!context) {
    throw new Error('useParts must be used within a PartsProvider');
  }
  return context;
}
