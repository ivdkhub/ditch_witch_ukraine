export const specLabels = {
  thrust: { uk: 'Тяга', en: 'Thrust', pl: 'Siła ciągu' },
  pullback: { uk: 'Зусилля протяжки', en: 'Pullback Force', pl: 'Siła uciągu' },
  engine: { uk: 'Двигун', en: 'Engine', pl: 'Silnik' },
  torque: { uk: 'Крутний момент', en: 'Torque', pl: 'Moment obrotowy' },
  spindleSpeed: { uk: 'Швидкість шпинделя', en: 'Spindle Speed', pl: 'Prędkość wrzeciona' },
  spindlespeed: { uk: 'Швидкість шпинделя', en: 'Spindle Speed', pl: 'Prędkość wrzeciona' },
  fluidFlow: { uk: 'Потік розчину', en: 'Fluid Flow', pl: 'Przepływ płynu' },
  width: { uk: 'Ширина', en: 'Width', pl: 'Szerokość' },
  digDepth: { uk: 'Глибина копання', en: 'Dig Depth', pl: 'Głębokość wykopu' },
  digWidth: { uk: 'Ширина копання', en: 'Dig Width', pl: 'Szerokość wykopu' },
  trackSystem: { uk: 'Гусеничний хід', en: 'Track System', pl: 'System gąsienicowy' },
  weight: { uk: 'Маса комплексу', en: 'Operating Weight', pl: 'Masa robocza' },
  drive: { uk: 'Привід', en: 'Drive System', pl: 'Napęd' },
  tankCapacity: { uk: 'Бак для шламу', en: 'Spoil Tank Capacity', pl: 'Pojemność zbiornika' },
  waterTank: { uk: 'Водяний бак', en: 'Water Tank Capacity', pl: 'Zbiornik na wodę' },
  blowerCFM: { uk: 'Потік повітря', en: 'Air Blower CFM', pl: 'Przepływ powietrza' },
  waterPressure: { uk: 'Тиск води', en: 'Water Pressure', pl: 'Ciśnienie wody' },
  operatingCapacity: { uk: 'Грузопідйомність', en: 'Operating Capacity', pl: 'Udźwig roboczy' },
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
      offers: 'СПЕЦПРОПОЗИЦІЇ',
      menu: 'МЕНЮ',
      directionalDrills: 'Машини ГНБ (HDD)',
      vacuumExcavators: 'Вакуумні екскаватори',
      trenchers: 'Віброукладачі та Траншеєкопачі',
      skidSteers: 'Навантажувачі та Компакт',
      fluidSystems: 'Міксери бентонітові',
      subsite: 'Електроніка та Пошук Subsite',
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
        badge: 'ВАКУУМНА ЕКСКАВАЦІЯ',
        title: 'БЕЗАВАРІЙНЕ РОЗКОПУВАННЯ КОМУНІКАЦІЙ',
        subtitle: 'НАДІЙНІ ВАКУУМНІ ЕКСКАВАТОРІ СЕРІЇ HXT ТА HX.',
        btnMore: 'КАТАЛОГ ВАКУУМІВ',
        btnQuote: 'КОНСУЛЬТАЦІЯ'
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
      cat3: { name: 'Електроніка та Локація', desc: 'Високоточні локаційні системи Subsite® TK RECON та зонди для безпомилкового ведення буріння.' },
      cat4: { name: 'Локатори Subsite®', desc: 'Професійні трасошукачі UtiliGuard® 2 для точного виявлення підземних комунікацій.' },
      cat5: { name: 'Віброукладачі та Траншеєкопачі', desc: 'Ланцюгові траншеєкопачі C16X та віброукладачі 100SX для швидкого підземного копання.' },
      cat6: { name: 'Бентоніт та Полімери Baroid®', desc: 'Промислові бурові добавки, змащувачі свердловини та емульсії Baroid® EZ-MUD®.' },
      cat7: { name: 'Навантажувачі (Компакт)', desc: 'Гусеничні міні-навантажувачі з стоячим місцем SK3000 та SK1550 для важких робіт.' },
      cat8: { name: 'American Augers®', desc: 'Важкі бурові комплекси ГНБ великої потужності для магістральних трубопроводів.' },
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
      m3: { title: 'Траншеєкопач Дітч Вітч C16X', tag: 'Запатентна система CX Track', s1: 'Глибина: до 1.2 м', s2: 'Двигун: Vanguard 16 к.с.', s3: 'Ширина: 900 мм' }
    },
    parts: {
      title: 'ОРИГІНАЛЬНІ ЗАПАСНІ ЧАСТИНИ ТА СЕРВІС ДІТЧ ВІТЧ',
      badge: '100% Оригінальні Запасні Частини'
    },
    news: {
      subtitle: 'ОСТАННІ ОНОВЛЕННЯ ТА ПОРАДИ ЕКСПЕРТІВ',
      title: 'НОВИНИ ТА ТЕХНІЧНІ СТАТТІ ДІТЧ ВІТЧ',
      allNews: 'Всі Новини',
      readMore: 'Читати детальніше'
    },
    footer: {
      aboutText: 'Дітч Вітч Україна входить до групи JLM — офіційний представник Дітч Вітч®, Subsite®, American Augers® та Baroid® в Україні.',
      contactUA: 'Україна, м. Київ: +380 50 380 66 92',
      productsTitle: 'Продукція JLM',
      companyTitle: 'Дітч Вітч Україна',
      distributorTitle: 'Офіційний Дистриб’ютор',
      distributorDesc: 'Забезпечуємо сертифікований сервіс, оригінальні запчастини та гарантійну підтримку обладнання Дітч Вітч.',
      motto: 'МИ ЛІДИРУЄМО. МИ ІННОВУЄМО. МИ СЛУЖИМО.',
      privacy: 'Політика конфіденційності',
      terms: 'Умови використання',
      rights: 'Всі права захищені.',
      top: 'НАГОРУ'
    }
  },

  en: {
    topbar: {
      phoneUA: '+380 50 380 66 92',
      distributorBadge: 'OFFICIAL DITCH WITCH DISTRIBUTOR IN UKRAINE (JLM GROUP)',
      searchPlaceholder: 'Search equipment...'
    },
    nav: {
      home: 'HOME',
      products: 'PRODUCTS',
      about: 'ABOUT US',
      partsService: 'PARTS & SERVICE',
      docs: 'DOCUMENTATION',
      news: 'NEWS',
      offers: 'OFFERS',
      menu: 'MENU',
      directionalDrills: 'HDD Rigs',
      vacuumExcavators: 'Vacuum Excavators',
      trenchers: 'Plows & Trenchers',
      skidSteers: 'Stand-on Skid Steers',
      fluidSystems: 'Bentonite Mixers',
      subsite: 'Subsite Electronics',
      americanAugers: 'American Augers',
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
        badge: 'VACUUM EXCAVATION',
        title: 'SAFE UTILITY EXCAVATION & DAYLIGHTING',
        subtitle: 'RELIABLE HXT AND HX SERIES VACUUM EXCAVATORS.',
        btnMore: 'VACUUM CATALOG',
        btnQuote: 'GET ADVICE'
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
      cat3: { name: 'Subsite® Electronics', desc: 'High-precision TK RECON locators and beacon sondes for accurate HDD tracking.' },
      cat4: { name: 'Subsite® Locators', desc: 'UtiliGuard® 2 advanced underground utility locators and pipe mapping.' },
      cat5: { name: 'Plows & Trenchers', desc: 'Walk-behind trenchers and vibratory plows for rapid underground installation.' },
      cat6: { name: 'Baroid® Bentonite & Polymers', desc: 'Industrial drilling fluids, borehole lubricants, and EZ-MUD® emulsions.' },
      cat7: { name: 'Stand-on Skid Steers', desc: 'Heavy-duty SK3000 and SK1550 compact stand-on skid steers.' },
      cat8: { name: 'American Augers®', desc: 'Heavy HDD rigs and auger boring machinery for cross-country pipelines.' },
      cat9: { name: 'Mud Recycling Systems', desc: 'Closed-loop Dupagro mud cleaning and bentonite recycling units.' },
      cat10: { name: 'Consumable Materials', desc: 'Original Baroid® bentonites, polymers, reamers, drill bits, and sondes.' },
      btnView: 'Learn More'
    },
    featured: {
      subtitle: 'TOP SALES IN UKRAINE',
      title: 'FEATURED DITCH WITCH MACHINERY',
      specsBtn: 'SPECS & QUOTE'
    },
    parts: {
      title: 'GENUINE DITCH WITCH SPARE PARTS & SERVICE',
      badge: '100% Genuine Spare Parts'
    },
    news: {
      subtitle: 'LATEST UPDATES & INDUSTRY ADVICE',
      title: 'DITCH WITCH NEWS & ARTICLES',
      allNews: 'All News',
      readMore: 'Read full story'
    },
    footer: {
      aboutText: 'Ditch Witch Ukraine is part of the JLM Group — official distributor of Ditch Witch®, Subsite®, American Augers®, and Baroid® in Ukraine.',
      contactUA: 'Ukraine, Kyiv: +380 50 380 66 92',
      productsTitle: 'JLM Products',
      companyTitle: 'Ditch Witch Ukraine',
      distributorTitle: 'Official Distributor',
      distributorDesc: 'Certified service, genuine spare parts, and warranty support.',
      motto: 'WE LEAD. WE INNOVATE. WE SERVE.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use',
      rights: 'All rights reserved.',
      top: 'TOP'
    }
  },

  pl: {
    topbar: {
      phoneUA: '+380 50 380 66 92',
      distributorBadge: 'OFICJALNY DYSTRYBUTOR DITCH WITCH W UKRAINIE (GRUPA JLM)',
      searchPlaceholder: 'Szukaj sprzętu...'
    },
    nav: {
      home: 'HOME',
      products: 'PRODUKTY',
      about: 'O NAS',
      partsService: 'CZĘŚCI I SERWIS',
      docs: 'DOKUMENTACJA',
      news: 'AKTUALNOŚCI',
      offers: 'OFERTY',
      menu: 'MENU',
      directionalDrills: 'Wiertnice HDB',
      vacuumExcavators: 'Koparki Próżniowe',
      trenchers: 'Pługi i Koparki',
      skidSteers: 'Ładowarki Kompaktowe',
      fluidSystems: 'Mieszalniki Bentonitowe',
      subsite: 'Elektronika Subsite',
      americanAugers: 'American Augers',
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
        badge: 'EKSKAWACJA PRÓŻNIOWA',
        title: 'BEZPIECZNE ODSŁANIANIE SIEĆ PODZIEMNYCH',
        subtitle: 'NIEZAWODNE KOPARKI PRÓŻNIOWE SERII HXT I HX.',
        btnMore: 'KATALOG PRÓŻNIOWY',
        btnQuote: 'KONSULTACJA'
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
      cat3: { name: 'Elektronika Subsite®', desc: 'Precyzyjne systemy lokalizacji TK RECON i sondy do wierceń.' },
      cat4: { name: 'Lokalizatory Subsite®', desc: 'Zaawansowane wykrywacze trasowe UtiliGuard® 2.' },
      cat5: { name: 'Pługi i Koparki Łańcuchowe', desc: 'Samojezdne koparki łańcuchowe C16X i pługi wibracyjne 100SX.' },
      cat6: { name: 'Bentonit i Polimery Baroid®', desc: 'Dodatki wiertnicze, smary otworu i emulsje Baroid® EZ-MUD®.' },
      cat7: { name: 'Ładowarki Kompaktowe', desc: 'Kompaktowe ładowarki gąsienicowe stojące SK3000 i SK1550.' },
      cat8: { name: 'American Augers®', desc: 'Ciężkie zestawy wiertnicze do magistrali rurociągowych.' },
      cat9: { name: 'Recykling Płuczki', desc: 'Systemy zamkniętego obiegu czyszczenia płuczki Dupagro.' },
      cat10: { name: 'Materiały eksploatacyjne', desc: 'Oryginalne bentonity Baroid®, polimery, poszerzacze i korony.' },
      btnView: 'Więcej'
    },
    featured: {
      subtitle: 'TOP SPRZEDAŻ W UKRAINIE',
      title: 'POLECANY SPRZĘT DITCH WITCH',
      specsBtn: 'SPECYFIKACJA I CENA'
    },
    parts: {
      title: 'ORYGINALNE CZĘŚCI ZAMIENNE I SERWIS DITCH WITCH',
      badge: '100% Oryginalne Części Zamienne'
    },
    news: {
      subtitle: 'OSTATNIE AKTUALNOŚCI I PORADY',
      title: 'AKTUALNOŚCI I ARTYKUŁY DITCH WITCH',
      allNews: 'Wszystkie Artykuły',
      readMore: 'Czytaj więcej'
    },
    footer: {
      aboutText: 'Ditch Witch Ukraina wchodzi w skład grupy JLM — oficjalny dystrybutor Ditch Witch®, Subsite®, American Augers® i Baroid® w Ukrainie.',
      contactUA: 'Ukraina, Kijów: +380 50 380 66 92',
      productsTitle: 'Produkty JLM',
      companyTitle: 'Ditch Witch Ukraina',
      distributorTitle: 'Oficjalny Dystrybutor',
      distributorDesc: 'Certyfikowany serwis, oryginalne części i wsparcie gwarancyjne.',
      motto: 'PROWADZIMY. INNOWUJEMY. SŁUŻYMY.',
      privacy: 'Polityka Prywatności',
      terms: 'Warunki Użytkowania',
      rights: 'Wszelkie prawa zastrzeżone.',
      top: 'DO GÓRY'
    }
  }
};
