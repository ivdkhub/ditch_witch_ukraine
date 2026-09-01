export const specLabels = {
  thrust: { uk: 'Зусилля подачі (Thrust)', en: 'Thrust Force', pl: 'Siła nacisku' },
  pullback: { uk: 'Сила зворотної тяги (Pullback)', en: 'Pullback Force', pl: 'Siła uciągu' },
  engine: { uk: 'Марка/Модель двигуна', en: 'Engine Model', pl: 'Silnik / Model' },
  power: { uk: 'Потужність двигуна', en: 'Engine Power', pl: 'Moc silnika' },
  torque: { uk: 'Крутний момент шпинделя (Max)', en: 'Max Spindle Torque', pl: 'Maks. moment obrotowy' },
  innerTorque: { uk: 'Внутрішній крутний момент (Rock Bit)', en: 'Inner Pipe Torque (Rock)', pl: 'Wewnętrzny moment obrotowy' },
  outerTorque: { uk: 'Зовнішній крутний момент (Outer Pipe)', en: 'Outer Pipe Torque', pl: 'Zewnętrzny moment obrotowy' },
  spindleSpeed: { uk: 'Швидкість обертання шпинделя', en: 'Spindle Speed', pl: 'Prędkość wrzeciona' },
  fluidFlow: { uk: 'Потік бурового насоса (Max)', en: 'Max Mud Pump Flow', pl: 'Maks. przepływ płuczki' },
  rodLength: { uk: 'Довжина бурової штанги', en: 'Drill Pipe Length', pl: 'Długość żerdzi' },
  bendRadius: { uk: 'Мін. радіус вигину штанг', en: 'Min Pipe Bend Radius', pl: 'Min. promień gięcia' },
  dimensions: { uk: 'Габаритні розміри (Д x Ш x В)', en: 'Dimensions (L x W x H)', pl: 'Wymiary (Dł x Szer x Wys)' },
  weight: { uk: 'Експлуатаційна маса комплексу', en: 'Operating Weight', pl: 'Masa eksploatacyjna' },
  width: { uk: 'Ширина установки', en: 'Overall Width', pl: 'Szerokość całkowita' },
  terrainType: { uk: 'Тип ґрунту / Скельна порода', en: 'Target Terrain / Rock', pl: 'Formacja skalna / Grunt' },
  digDepth: { uk: 'Глибина копання', en: 'Dig Depth', pl: 'Głębokość wykopu' },
  digWidth: { uk: 'Ширина копання', en: 'Dig Width', pl: 'Szerokość wykopu' },
  trackSystem: { uk: 'Гусеничний хід', en: 'Track System', pl: 'System gąsienicowy' },
  drive: { uk: 'Привід', en: 'Drive System', pl: 'Napęd' },
  tankCapacity: { uk: 'Бак для шламу', en: 'Spoil Tank Capacity', pl: 'Pojemność zbiornika' },
  waterTank: { uk: 'Водяний бак', en: 'Water Tank Capacity', pl: 'Zbiornik na wodę' },
  blowerCFM: { uk: 'Потік повітря', en: 'Air Blower CFM', pl: 'Przepływ powietrza' },
  waterPressure: { uk: 'Тиск води', en: 'Water Pressure', pl: 'Ciśnienie води' },
  operatingCapacity: { uk: 'Вантажопідйомність', en: 'Operating Capacity', pl: 'Udźwig roboczy' },
  hingePinHeight: { uk: 'Висота підйому', en: 'Hinge Pin Height', pl: 'Wysokość podnoszenia' },
  trackWidth: { uk: 'Ширина гусениці', en: 'Track Width', pl: 'Szerokość gąsienicy' },
  tankVolume: { uk: 'Об’єм баків', en: 'Tank Volume', pl: 'Pojemność zbiornika' },
  pumpFlow: { uk: 'Потік помпи', en: 'Pump Flow', pl: 'Wydajność pompy' },
  venturiHopper: { uk: 'Змішувач Venturi', en: 'Venturi Hopper', pl: 'Mieszalnik Venturiego' }
};

export const getSpecLabel = (key, lang = 'uk') => {
  if (!key) return '';
  const normalizedKey = key.trim();
  if (specLabels[normalizedKey] && specLabels[normalizedKey][lang]) {
    return specLabels[normalizedKey][lang];
  }
  return normalizedKey.charAt(0).toUpperCase() + normalizedKey.slice(1);
};

export const translations = {
  uk: {
    topbar: {
      phoneUA: '+380 50 380 66 92',
      distributorBadge: 'ОФІЦІЙНИЙ ДИСТРИБ’ЮТОР ДІТЧ ВІТЧ В УКРАЇНІ',
      searchPlaceholder: 'Пошук обладнання...'
    },
    nav: {
      home: 'HOME',
      products: 'ПРОДУКЦІЯ',
      about: 'ПРО НАС',
      partsService: 'ЗАПЧАСТИНИ ТА СЕРВІС',
      docs: 'ДОКУМЕНТАЦІЯ',
      news: 'НОВИНИ',
      used: 'ВЖИВАНА ТЕХНІКА',
      offers: 'СПЕЦПРОПОЗИЦІЇ',
      menu: 'МЕНЮ',
      directionalDrills: 'Машини ГНБ (HDD)',
      vacuumExcavators: 'Вакуумні екскаватори',
      trenchers: 'Віброукладачі та Траншеєкопачі',
      skidSteers: 'Навантажувачі та Компакт',
      fluidSystems: 'Міксери бентонітові',
      subsite: 'Електроніка - системи пошуку та локалізації',
      americanAugers: 'Обладнання American Augers',
      bentonite: 'Бентоніт та Полімери Baroid',
      recycling: 'Рециклінг розчину',
      consumables: 'Витратні матеріали (Бентоніт тощо)'
    },
    hero: {
      slide1: {
        badge: 'ФЛАГМАН ГНБ',
        title: 'УСТАНОВКА ГНБ ДІТЧ ВІТЧ JT10',
        subtitle: 'МАКСИМАЛЬНА ПОТУЖНІСТЬ ТА ТОЧНІСТЬ У КОМПАКТНОМУ КОРПУСІ.',
        btnMore: 'ОГЛЯД БУРОВИХ',
        btnQuote: 'ЗАПИТАТИ ЦІНУ'
      },
      slide2: {
        badge: 'ЛОКАЦІЙНІ СИСТЕМИ',
        title: 'СИСТЕМА ЛОКАЦІЇ SUBSITE® MARKSMAN',
        subtitle: 'НАДТОЧНЕ ВЕДЕННЯ БУРОВОЇ ГОЛОВКИ ТА ЗАХИСТ ВІД ПЕРЕШКОД ПІД ЧАС ГНБ.',
        btnMore: 'КАТАЛОГ ЛОКАЦІЙ',
        btnQuote: 'ЗАПИТАТИ ЦІНУ'
      },
      slide3: {
        badge: 'БЕСТСЕЛЕР',
        title: 'УСТАНОВКА ГНБ JT5',
        subtitle: 'МАКСИМАЛЬНА ЕФЕКТИВНІСТЬ ДЛЯ МІСЬКИХ УМОВ ТА ОБМЕЖЕНОГО ПРОСТОРУ.',
        btnMore: 'ОГЛЯД БУРОВИХ',
        btnQuote: 'ЗАПИТАТИ ЦІНУ'
      },
      slide4: {
        badge: 'КОМПАКТНІ ТРАНШЕЄКОПАЧІ',
        title: 'ТРАНШЕЄКОПАЧ ДІТЧ ВІТЧ C16X',
        subtitle: 'ВИСОКА ПРОДУКТИВНІСТЬ ПРОКЛАДАННЯ ТРАНШЕЙ У БУДЬ-ЯКОМУ ҐРУНТІ.',
        btnMore: 'ДЕТАЛЬНІШЕ',
        btnQuote: 'ЗАМОВИТИ'
      }
    },
    welcome: {
      title: 'ЛАСКАВО ПРОСИМО ДО ДІТЧ ВІТЧ УКРАЇНА (JLM GROUP)',
      desc1: 'Дітч Вітч Україна входить до групи JLM — офіційного дистриб’ютора Дітч Вітч® у Швеції, Норвегії, Фінляндії, Данії, Польщі та Україні з понад 20-річним досвідом.',
      desc2: 'Ми є єдиним представником торгових марок Дітч Вітч®, Zahn®, Subsite® Electronics, HammerHead®, American Augers® та дистриб’ютором Baroid®.',
      btnCatalog: 'ПЕРЕГЛЯНУТИ КАТАЛОГ JLM',
      btnContact: 'ЗВ’ЯЗАТИСЯ З НАМИ'
    },
    categories: {
      subtitle: 'ОФІЦІЙНИЙ КАТАЛОГ ОБЛАДНАННЯ JLM',
      title: 'КАТЕГОРІЇ ПРОДУКЦІЇ ДІТЧ ВІТЧ & JLM',
      cat1: { name: 'Машини ГНБ (HDD)', desc: 'Установки горизонтально-направленого буріння для прокладання комунікацій без пошкодження покриття.' },
      cat2: { name: 'Міксери бентонітові', desc: 'Професійні системи змішування бентоніту та полімерів з помпою високого тиску.' },
      cat3: { name: 'Електроніка - системи пошуку та локалізації', desc: 'Високоточні локаційні системи Subsite® Marksman, TK RECON та зонди для безпомилкового ведення буріння.' },
      cat4: { name: 'Локатори Subsite®', desc: 'Професійні трасошукачі UtiliGuard® 2 для точного виявлення підземних комунікацій.' },
      cat5: { name: 'Віброукладачі та Траншеєкопачі', desc: 'Ланцюгові траншеєкопачі C16X та віброукладачі 100SX для швидкого підземного копання.' },
      cat6: { name: 'Бентоніт та Полімери Baroid®', desc: 'Промислові бурові добавки, змащувачі свердловини та емульсії Baroid® EZ-MUD®.' },
      cat7: { name: 'Навантажувачі (Компакт)', desc: 'Гусеничні міні-навантажувачі з стоячим місцем SK3000 та SK1550 для важких робіт.' },
      cat8: { name: 'American Augers®', desc: 'Важкі бурові комплекси ГНБ великої потужності для магістральних трубопроводів (Перейти на офіційний сайт).' },
      cat9: { name: 'Рециклінг розчину', desc: 'Установки замкнутого циклу очищення та регенерації бурового розчину Dupagro.' },
      cat10: { name: 'Витратні матеріали', desc: 'Оригінальні витратні матеріали Baroid®, розширювачі, бурові головки та компоненти.' },
      btnView: 'Детальніше'
    },
    featured: {
      subtitle: 'ТОП ПРОДАЖІВ В УКРАЇНІ',
      title: 'РЕКОМЕНДОВАНА СПЕЦТЕХНІКА ДІТЧ ВІТЧ',
      specsBtn: 'ХАРАКТЕРИСТИКИ ТА ЦІНА',
      m1: { title: 'Установка ГНБ Дітч Вітч JT10', tag: 'Компактність та потужність 40 к.с.', s1: 'Тяга: 44.5 кН', s2: 'Двигун: Deutz 2.9L 40 к.с.', s3: 'Крутний момент: 1490 Нм' },
      m2: { title: 'Установка ГНБ Дітч Вітч JT5', tag: 'Легендарна надійність для вузьких ділянок', s1: 'Тяга: 22.2 кН', s2: 'Двигун: Kubota 24.8 к.с.', s3: 'Довжина буріння: до 90 м' },
      m3: { title: 'Траншеєкопач Дітч Вітч C16X', tag: 'Маневрений ланцюговий траншеєкопач', s1: 'Глибина: до 915 мм', s2: 'Двигун: Vanguard 16 к.с.', s3: 'Гусеничний хід HX' },
      btnDetails: 'ТЕХНІЧНІ ХАРАКТЕРИСТИКИ',
      btnViewAll: 'ПЕРЕГЛЯНУТИ ВЕСЬ КАТАЛОГ'
    },
    parts: {
      title: 'ОРИГІНАЛЬНІ ЗАПЧАСТИНИ ТА СЕРВІС ДІТЧ ВІТЧ',
      subtitle: 'ОФІЦІЙНИЙ СЕРВІСНИЙ ЦЕНТР ТА СКЛАД ЗАПЧАСТИН В УКРАЇНІ',
      desc: 'Повний асортимент оригінальних запчастин Дітч Вітч®, бурових штанг, розширювачів, зондів Subsite® та фільтрів з оперативною доставкою по всій Україні.',
      badge: '100% Genuine Spare Parts',
      btnOrder: 'ЗАМОВИТИ ЗАПЧАСТИНИ',
      btnConsult: 'КОНСУЛЬТАЦІЯ СЕРВІСУ'
    },
    news: {
      subtitle: 'ОСТАННІ ОНОВЛЕННЯ ТА ПОРАДИ ЕКСПЕРТІВ',
      title: 'НОВИНИ ТА СТАТТІ ДІТЧ ВІТЧ',
      allNews: 'Всі Новини',
      readMore: 'Читати повністю'
    },
    footer: {
      aboutText: 'Дітч Вітч Україна входить до групи JLM — офіційний дистриб’ютор Ditch Witch®, Subsite®, American Augers® та Baroid® в Україні.',
      quickLinks: 'Швидкі Посилання',
      contactUs: 'Контакти',
      rights: 'Всі права захищено. JLM Group & Ditch Witch Ukraine.'
    }
  },

  en: {
    topbar: {
      phoneUA: '+380 50 380 66 92',
      distributorBadge: 'OFFICIAL DITCH WITCH DISTRIBUTOR IN UKRAINE',
      searchPlaceholder: 'Search equipment...'
    },
    nav: {
      home: 'HOME',
      products: 'PRODUCTS',
      about: 'ABOUT US',
      partsService: 'SPARE PARTS & SERVICE',
      docs: 'DOCUMENTATION',
      news: 'NEWS',
      used: 'USED EQUIPMENT',
      offers: 'SPECIAL OFFERS',
      menu: 'MENU',
      directionalDrills: 'HDD Rigs',
      vacuumExcavators: 'Vacuum Excavators',
      trenchers: 'Plows & Trenchers',
      skidSteers: 'Stand-on Skid Steers',
      fluidSystems: 'Bentonite Mixers',
      subsite: 'Subsite Electronics & Locating Systems',
      americanAugers: 'American Augers Equipment',
      bentonite: 'Baroid Bentonite',
      recycling: 'Mud Recycling',
      consumables: 'Consumable Materials (Bentonite & Fluids)'
    },
    hero: {
      slide1: {
        badge: 'HDD FLAGSHIP',
        title: 'DITCH WITCH JT10 DIRECTIONAL DRILL',
        subtitle: 'MAXIMUM POWER AND PRECISION IN A COMPACT FOOTPRINT.',
        btnMore: 'EXPLORE DRILLS',
        btnQuote: 'REQUEST QUOTE'
      },
      slide2: {
        badge: 'LOCATING SYSTEMS',
        title: 'SUBSITE® MARKSMAN LOCATING SYSTEM',
        subtitle: 'HIGH-PRECISION HDD TRACKING AND INTERFERENCE REJECTION.',
        btnMore: 'LOCATOR CATALOG',
        btnQuote: 'REQUEST QUOTE'
      },
      slide3: {
        badge: 'BESTSELLER',
        title: 'DITCH WITCH JT5 DIRECTIONAL DRILL',
        subtitle: 'OPTIMIZED EFFICIENCY FOR URBAN JOBSITES AND TIGHT SPACES.',
        btnMore: 'EXPLORE DRILLS',
        btnQuote: 'REQUEST QUOTE'
      },
      slide4: {
        badge: 'WALK-BEHIND TRENCHERS',
        title: 'DITCH WITCH C16X TRENCHER',
        subtitle: 'HIGH PERFORMANCE TRENCHING IN ALL SOIL CONDITIONS.',
        btnMore: 'DETAILS',
        btnQuote: 'ORDER NOW'
      }
    },
    welcome: {
      title: 'WELCOME TO DITCH WITCH UKRAINE (JLM GROUP)',
      desc1: 'Ditch Witch Ukraine is part of the JLM Group, the official representative of Ditch Witch® in Sweden, Norway, Finland, Denmark, Poland, and Ukraine.',
      desc2: 'We are the exclusive distributor of Ditch Witch®, Zahn®, Subsite® Electronics, HammerHead®, American Augers®, and Baroid®.',
      btnCatalog: 'VIEW JLM CATALOG',
      btnContact: 'CONTACT US'
    },
    categories: {
      subtitle: 'OFFICIAL JLM EQUIPMENT CATALOG',
      title: 'DITCH WITCH & JLM PRODUCT CATEGORIES',
      cat1: { name: 'HDD Drills', desc: 'Horizontal directional drills for trenchless utility laying.' },
      cat2: { name: 'Bentonite Mixers', desc: 'High-shear mud mixing systems and high-pressure delivery pumps.' },
      cat3: { name: 'Subsite® Locating Systems', desc: 'High-precision Subsite® Marksman, TK RECON locators and beacon sondes.' },
      cat4: { name: 'Subsite® Locators', desc: 'UtiliGuard® 2 advanced underground utility locators and pipe mapping.' },
      cat5: { name: 'Plows & Trenchers', desc: 'Walk-behind trenchers and vibratory plows for rapid underground installation.' },
      cat6: { name: 'Baroid® Bentonite & Polymers', desc: 'Industrial drilling fluids, borehole lubricants, and EZ-MUD® emulsions.' },
      cat7: { name: 'Stand-on Skid Steers', desc: 'Heavy-duty SK3000 and SK1550 compact stand-on skid steers.' },
      cat8: { name: 'American Augers®', desc: 'Heavy HDD rigs and auger boring machinery (Redirects to official site).' },
      cat9: { name: 'Mud Recycling Systems', desc: 'Closed-loop Dupagro mud cleaning and bentonite recycling units.' },
      cat10: { name: 'Consumable Materials', desc: 'Original Baroid® bentonites, polymers, reamers, drill bits, and sondes.' },
      btnView: 'Learn More'
    },
    featured: {
      subtitle: 'TOP SALES IN UKRAINE',
      title: 'FEATURED DITCH WITCH MACHINERY',
      specsBtn: 'SPECS & QUOTE',
      m1: { title: 'Ditch Witch JT10 HDD Rig', tag: 'Compact 40 hp power', s1: 'Thrust: 44.5 kN', s2: 'Engine: Deutz 2.9L 40 hp', s3: 'Torque: 1490 Nm' },
      m2: { title: 'Ditch Witch JT5 HDD Rig', tag: 'Legendary reliability for tight sites', s1: 'Thrust: 22.2 kN', s2: 'Engine: Kubota 24.8 hp', s3: 'Drill Distance: up to 90 m' },
      m3: { title: 'Ditch Witch C16X Trencher', tag: 'Maneuverable chain trencher', s1: 'Depth: up to 915 mm', s2: 'Engine: Vanguard 16 hp', s3: 'HX Track System' },
      btnDetails: 'VIEW SPECIFICATIONS',
      btnViewAll: 'VIEW FULL CATALOG'
    },
    parts: {
      title: 'GENUINE DITCH WITCH SPARE PARTS & SERVICE',
      subtitle: 'OFFICIAL SERVICE CENTER & PARTS WAREHOUSE IN UKRAINE',
      desc: 'Complete range of genuine Ditch Witch® spare parts, drill pipes, reamers, Subsite® sondes, and filters.',
      badge: '100% Genuine Spare Parts',
      btnOrder: 'ORDER SPARE PARTS',
      btnConsult: 'SERVICE CONSULTATION'
    },
    news: {
      subtitle: 'LATEST UPDATES & INDUSTRY ADVICE',
      title: 'DITCH WITCH NEWS & ARTICLES',
      allNews: 'All News',
      readMore: 'Read full story'
    },
    footer: {
      aboutText: 'Ditch Witch Ukraine is part of the JLM Group — official distributor of Ditch Witch®, Subsite®, American Augers®, and Baroid® in Ukraine.',
      quickLinks: 'Quick Links',
      contactUs: 'Contact Us',
      rights: 'All rights reserved. JLM Group & Ditch Witch Ukraine.'
    }
  },

  pl: {
    topbar: {
      phoneUA: '+380 50 380 66 92',
      distributorBadge: 'OFICJALNY DYSTRYBUTOR DITCH WITCH W UKRAINIE',
      searchPlaceholder: 'Szukaj sprzętu...'
    },
    nav: {
      home: 'HOME',
      products: 'PRODUKTY',
      about: 'O NAS',
      partsService: 'CZĘŚCI ZAMIENNE I SERWIS',
      docs: 'DOKUMENTACJA',
      news: 'AKTUALNOŚCI',
      used: 'SPRZĘT UŻYWANY',
      offers: 'OFERTY SPECJALNE',
      menu: 'MENU',
      directionalDrills: 'Wiertnice HDB',
      vacuumExcavators: 'Koparki Próżniowe',
      trenchers: 'Pługi i Koparki',
      skidSteers: 'Ładowarki Kompaktowe',
      fluidSystems: 'Mieszalniki Bentonitowe',
      subsite: 'Elektronika - systemy lokalizacji Subsite',
      americanAugers: 'Sprzęt American Augers',
      bentonite: 'Bentonit Baroid',
      recycling: 'Recykling Płuczki',
      consumables: 'Materiały eksploatacyjne (Bentonit itp.)'
    },
    hero: {
      slide1: {
        badge: 'FLAGOWA WIERTNICA HDB',
        title: 'WIERTNICA DITCH WITCH JT10',
        subtitle: 'MAKSYMALNA MOC I PRECYZJA W KOMPAKTOWEJ OBUDOWIE.',
        btnMore: 'PRZEGLĄDAJ WIERTNICE',
        btnQuote: 'ZAPYTAJ O CENĘ'
      },
      slide2: {
        badge: 'SYSTEMY LOKALIZACJI',
        title: 'SYSTEM LOKALIZACJI SUBSITE® MARKSMAN',
        subtitle: 'PRECYZYJNE PROWADZENIE GŁOWICY WIERTNICZEJ W KAŻDYCH WARUNKACH.',
        btnMore: 'KATALOG LOKALIZATORÓW',
        btnQuote: 'ZAPYTAJ O CENĘ'
      },
      slide3: {
        badge: 'BESTSELLER',
        title: 'WIERTNICA DITCH WITCH JT5',
        subtitle: 'MAKSYMALNA WYDAJNOŚĆ W MIEJSKICH PRZESTRZENIACH.',
        btnMore: 'PRZEGLĄDAJ WIERTNICE',
        btnQuote: 'ZAPYTAJ O CENĘ'
      },
      slide4: {
        badge: 'KOPARKI ŁAŃCUCHOWE',
        title: 'KOPARKA DITCH WITCH C16X',
        subtitle: 'WYSOKA WYDAJNOŚĆ W KAŻDYM TERENIE.',
        btnMore: 'SZCZEGÓŁY',
        btnQuote: 'ZAMÓW TERAZ'
      }
    },
    welcome: {
      title: 'WITAMY W DITCH WITCH UKRAINA (GRUPA JLM)',
      desc1: 'Ditch Witch Ukraina wchodzi w skład grupy JLM, oficjalnego przedstawiciela Ditch Witch® w Szwecji, Norwegii, Finlandii, Danii, Polsce i Ukrainie.',
      desc2: 'Jesteśmy wyłącznym przedstawicielem marek Ditch Witch®, Zahn®, Subsite® Electronics, HammerHead®, American Augers® oraz dystrybutorem Baroid®.',
      btnCatalog: 'ZOBACZ KATALOG JLM',
      btnContact: 'SKONTAKTUJ SIĘ Z NAMI'
    },
    categories: {
      subtitle: 'OFICJALNY KATALOG SPRZĘTU JLM',
      title: 'KATEGORIE PRODUKTÓW DITCH WITCH & JLM',
      cat1: { name: 'Wiertnice HDB', desc: 'Wiertnice horyzontalne do bezwykopowego układania rur i kabli.' },
      cat2: { name: 'Mieszalniki bentonitowe', desc: 'Systemy mieszania płuczki z głowicami Venturiego i pompami.' },
      cat3: { name: 'Elektronika - systemy lokalizacji Subsite', desc: 'Precyzyjne systemy lokalizacji Subsite® Marksman, TK RECON i sondy.' },
      cat4: { name: 'Lokalizatory Subsite®', desc: 'Zaawansowane wykrywacze trasowe UtiliGuard® 2.' },
      cat5: { name: 'Pługi i Koparki Łańcuchowe', desc: 'Samojezdne koparki łańcuchowe C16X i pługi wibracyjne 100SX.' },
      cat6: { name: 'Bentonit i Polimery Baroid®', desc: 'Dodatki wiertnicze, smary otworu i emulsje Baroid® EZ-MUD®.' },
      cat7: { name: 'Ładowarki Kompaktowe', desc: 'Kompaktowe ładowarki gąsienicowe stojące SK3000 i SK1550.' },
      cat8: { name: 'American Augers®', desc: 'Ciężkie zestawy wiertnicze (Przekierowanie do oficjalnej strony).' },
      cat9: { name: 'Recykling Płuczki', desc: 'Systemy zamkniętego obiegu czyszczenia płuczki Dupagro.' },
      cat10: { name: 'Materiały eksploatacyjne', desc: 'Oryginalne bentonity Baroid®, polimery, poszerzacze i korony.' },
      btnView: 'Więcej'
    },
    featured: {
      subtitle: 'TOP SPRZEDAŻ W UKRAINIE',
      title: 'POLECANY SPRZĘT DITCH WITCH',
      specsBtn: 'SPECYFIKACJA I CENA',
      m1: { title: 'Wiertnica Ditch Witch JT10', tag: 'Kompaktowa moc 40 KM', s1: 'Ciąg: 44.5 kN', s2: 'Silnik: Deutz 2.9L 40 KM', s3: 'Moment: 1490 Nm' },
      m2: { title: 'Wiertnica Ditch Witch JT5', tag: 'Niezawodność w ciasnych miejscach', s1: 'Ciąg: 22.2 kN', s2: 'Silnik: Kubota 24.8 KM', s3: 'Zasięg: do 90 m' },
      m3: { title: 'Koparka Ditch Witch C16X', tag: 'Koparka łańcuchowa gąsienicowa', s1: 'Głębokość: do 915 mm', s2: 'Silnik: Vanguard 16 KM', s3: 'Gąsienice HX' },
      btnDetails: 'SPECYFIKACJA TECHNICZNA',
      btnViewAll: 'ZOBACZ PEŁNY KATALOG'
    },
    parts: {
      title: 'ORYGINALNE CZĘŚCI ZAMIENNE I SERWIS DITCH WITCH',
      subtitle: 'OFICJALNY SERWIS I MAGASYNY CZĘŚCI W UKRAINIE',
      desc: 'Pełny asortyment oryginalnych części zamiennych Ditch Witch® i Subsite®.',
      badge: '100% Oryginalne Części Zamienne',
      btnOrder: 'ZAMÓW CZĘŚCI',
      btnConsult: 'KONSULTACJA SERWISU'
    },
    news: {
      subtitle: 'OSTATNIE AKTUALNOŚCI I PORADY',
      title: 'AKTUALNOŚCI I ARTYKUŁY DITCH WITCH',
      allNews: 'Wszystkie Artykuły',
      readMore: 'Czytaj więcej'
    },
    footer: {
      aboutText: 'Ditch Witch Ukraina wchodzi w skład grupy JLM — oficjalny dystrybutor Ditch Witch®, Subsite®, American Augers® i Baroid® w Ukrainie.',
      quickLinks: 'Szybkie Linki',
      contactUs: 'Kontakt',
      rights: 'Wszelkie prawa zastrzeżone. JLM Group & Ditch Witch Ukraine.'
    }
  }
};
