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
  // Fallback formatting for custom keys
  return normalizedKey.charAt(0).toUpperCase() + normalizedKey.slice(1);
};

export const translations = {
  uk: {
    topbar: {
      phoneUA: '+380 50 380 66 92',
      distributorBadge: 'ОФІЦІЙНИЙ ДИСТРИБ’ЮТОР DITCH WITCH В УКРАЇНІ',
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
      directionalDrills: 'Установки ГНБ',
      vacuumExcavators: 'Вакуумні екскаватори',
      trenchers: 'Траншеєкопачі',
      skidSteers: 'Міні-навантажувачі',
      fluidSystems: 'Системи приготування бурового розчину',
      subsite: 'Локаційні системи Subsite',
      americanAugers: 'Обладнання American Augers'
    },
    hero: {
      slide1: {
        badge: 'ФЛАГМАН ГНБ',
        title: 'УСТАНОВКА ГНБ DITCH WITCH JT10',
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
        title: 'ТРАНШЕЄКОПАЧ DITCH WITCH C16X',
        subtitle: 'ВИСОКА ПРОДУКТИВНІСТЬ ПРОКЛАДАННЯ ТРАНШЕЙ У БУДЬ-ЯКОМУ ҐРУНТІ.',
        btnMore: 'ДЕТАЛЬНІШЕ',
        btnQuote: 'ЗАМОВИТИ'
      }
    },
    welcome: {
      title: 'ЛАСКАВО ПРОСИМО ДО DITCH WITCH УКРАЇНА',
      desc1: 'Ditch Witch Україна надає найповнішу лінійку установок горизонтально-направленого буріння (ГНБ), бурового інструменту, вакуумних екскаваторів, траншеєкопачів, бурових систем та міні-навантажувачів.',
      desc2: 'Будучи офіційним дистриб’ютором Ditch Witch в Україні, ми забезпечуємо не лише постачання надійного спецобладнання, а й сертифікований сервіс, оригінальні запчастини та кваліфіковане навчання операторів.',
      btnCatalog: 'ПЕРЕГЛЯНУТИ КАТАЛОГ',
      btnContact: 'ЗВ’ЯЗАТИСЯ З НАМИ'
    },
    categories: {
      subtitle: 'СПЕЦІАЛІЗОВАНА БУДІВЕЛЬНА ТЕХНІКА',
      title: 'КАТЕГОРІЇ ОБЛАДНАННЯ DITCH WITCH',
      cat1: { name: 'Установки ГНБ', desc: 'Установки горизонтально-направленого буріння для прокладання комунікацій без пошкодження покриття.' },
      cat2: { name: 'Вакуумні екскаватори', desc: 'Ефективна вакуумна екскавація для безпечного розкопування та пошуку підземних мереж.' },
      cat3: { name: 'Траншеєкопачі', desc: 'Компактні та потужні ланцюгові траншеєкопачі для швидкого прокладання траншей.' },
      cat4: { name: 'Міні-навантажувачі', desc: 'Універсальні гусеничні та колісні міні-навантажувачі для широкого спектра завдань.' },
      cat5: { name: 'Приготування розчину', desc: 'Професійні бурові системи для швидкого замішування бентонітового розчину.' },
      btnView: 'Детальніше'
    },
    featured: {
      subtitle: 'ТОП ПРОДАЖІВ В УКРАЇНІ',
      title: 'РЕКОМЕНДОВАНА СПЕЦТЕХНІКА DITCH WITCH',
      specsBtn: 'ХАРАКТЕРИСТИКИ ТА ЦІНА',
      m1: { title: 'Установка ГНБ Ditch Witch JT10', tag: 'Компактність та потужність 40 к.с.', s1: 'Тяга: 44.5 кН', s2: 'Двигун: Deutz 2.9L 40 к.с.', s3: 'Крутний момент: 1490 Нм' },
      m2: { title: 'Установка ГНБ Ditch Witch JT5', tag: 'Легендарна надійність для вузьких ділянок', s1: 'Тяга: 22.2 кН', s2: 'Двигун: Kubota 24.8 к.с.', s3: 'Довжина буріння: до 90 м' },
      m3: { title: 'Траншеєкопач Ditch Witch C16X', tag: 'Запатентна система CX Track', s1: 'Глибина: до 1.2 м', s2: 'Двигун: Vanguard 16 к.с.', s3: 'Ширина: 900 мм' }
    },
    news: {
      subtitle: 'ОСТАННІ ОНОВЛЕННЯ ТА ПОРАДИ ЕКСПЕРТІВ',
      title: 'НОВИНИ ТА ТЕХНІЧНІ СТАТТІ DITCH WITCH',
      allNews: 'Всі Новини',
      readMore: 'Читати детальніше',
      a1: { cat: 'ПОРАДИ ТА ГАЙДИ', date: '14 СЕРПНЯ 2026', title: 'Який вакуумний екскаватор обрати для вашого об’єкта?', desc: 'Порівняльний аналіз гідравлічних (Hydro) та повітряних (Air) систем виймання ґрунту.' },
      a2: { cat: 'ОГЛЯД ТЕХНІКИ', date: '28 ЛИПНЯ 2026', title: 'Покрокове керівництво з обслуговування траншеєкопачів', desc: 'Як щоденний огляд ланцюга та зірочок подовжує ресурс техніки на 40%.' },
      a3: { cat: 'ПОРАДИ ТА ГАЙДИ', date: '10 ЛИПНЯ 2026', title: 'Висока продуктивність та точність: Ditch Witch HX20G', desc: 'Новий рівень ефективності з потужним бензиновим двигуном на компактному причепі.' }
    },
    footer: {
      aboutText: 'Ditch Witch Україна — офіційний дистриб’ютор спеціалізованої будівельної техніки для підземного прокладання комунікацій в Україні.',
      contactUA: 'Україна, м. Київ: +380 50 380 66 92',
      productsTitle: 'Продукція',
      companyTitle: 'Ditch Witch Україна',
      distributorTitle: 'Офіційний Дистриб’ютор',
      distributorDesc: 'Забезпечуємо сертифікований сервіс, оригінальні запчастини та гарантійну підтримку обладнання Ditch Witch.',
      motto: 'МИ ЛІДИРУЄМО. МИ ІННОВУЄМО. МИ СЛУЖИМО.',
      privacy: 'Політика конфіденційності',
      terms: 'Умови використання',
      rights: 'Всі права захищені.',
      top: 'НАГОРА'
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
      partsService: 'PARTS & SERVICE',
      docs: 'DOCUMENTATION',
      news: 'NEWS',
      offers: 'OFFERS',
      menu: 'MENU',
      directionalDrills: 'Directional Drills',
      vacuumExcavators: 'Vacuum Excavators',
      trenchers: 'Trenchers',
      skidSteers: 'Skid Steers',
      fluidSystems: 'Fluid Management Systems',
      subsite: 'Subsite Electronics',
      americanAugers: 'American Augers Equipment'
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
      title: 'WELCOME TO DITCH WITCH UKRAINE',
      desc1: 'Ditch Witch Ukraine provides the complete line of horizontal directional drills, trenchers, vacuum excavators, fluid systems, and mini skid steers.',
      desc2: 'As the official Ditch Witch distributor in Ukraine, we provide certified service, genuine replacement parts, and operator training.',
      btnCatalog: 'VIEW CATALOG',
      btnContact: 'CONTACT US'
    },
    categories: {
      subtitle: 'UNDERGROUND CONSTRUCTION EQUIPMENT',
      title: 'DITCH WITCH EQUIPMENT CATEGORIES',
      cat1: { name: 'Directional Drills', desc: 'HDD rigs for trenchless underground utility installation.' },
      cat2: { name: 'Vacuum Excavators', desc: 'High-performance non-destructive potholing and utility daylighting.' },
      cat3: { name: 'Trenchers', desc: 'Heavy-duty chain trenchers for rapid utility trenching.' },
      cat4: { name: 'Skid Steers', desc: 'Versatile compact tool carriers for demanding jobsites.' },
      cat5: { name: 'Fluid Systems', desc: 'High-yield mud mixing systems for HDD drilling fluid preparation.' },
      btnView: 'View Range'
    },
    featured: {
      subtitle: 'TOP SELLING MACHINERY IN UKRAINE',
      title: 'FEATURED DITCH WITCH EQUIPMENT',
      specsBtn: 'SPECS & QUOTE',
      m1: { title: 'Ditch Witch JT10 Directional Drill', tag: 'Compact 40 HP power package', s1: 'Thrust: 44.5 kN', s2: 'Engine: Deutz 2.9L 40 HP', s3: 'Torque: 1490 Nm' },
      m2: { title: 'Ditch Witch JT5 Directional Drill', tag: 'Legendary reliability for tight residential yards', s1: 'Thrust: 22.2 kN', s2: 'Engine: Kubota 24.8 HP', s3: 'Drill Distance: up to 90 m' },
      m3: { title: 'Ditch Witch C16X Trencher', tag: 'Patented CX Track design for maximum traction', s1: 'Depth: up to 1.2 m', s2: 'Engine: Vanguard 16 HP', s3: 'Width: 900 mm' }
    },
    news: {
      subtitle: 'LATEST UPDATES & INDUSTRY ADVICE',
      title: 'DITCH WITCH NEWS & ARTICLES',
      allNews: 'All News',
      readMore: 'Read full story',
      a1: { cat: 'GUIDES & ADVICE', date: '14 AUGUST 2026', title: 'Which Vacuum Excavator Is Right for Your Jobsite?', desc: 'A comprehensive comparison between Hydro and Air vacuum excavation technology.' },
      a2: { cat: 'EQUIPMENT SPOTLIGHT', date: '28 JULY 2026', title: 'Step-by-Step Guide to Trencher Maintenance', desc: 'How daily chain and sprocket inspections extend equipment life by 40%.' },
      a3: { cat: 'GUIDES & ADVICE', date: '10 JULY 2026', title: 'Performance and Precision: Ditch Witch HX20G', desc: 'Next-level gas-powered vacuum excavation power on a trailer chassis.' }
    },
    footer: {
      aboutText: 'Ditch Witch Ukraine is the official distributor of underground construction and utility installation equipment in Ukraine.',
      contactUA: 'Kyiv, Ukraine: +380 50 380 66 92',
      productsTitle: 'Products',
      companyTitle: 'Ditch Witch Ukraine',
      distributorTitle: 'Official Distributor',
      distributorDesc: 'Providing certified service, genuine parts, and warranty support for Ditch Witch machinery.',
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
      distributorBadge: 'OFICJALNY DYSTRYBUTOR DITCH WITCH W UKRAINIE',
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
      vacuumExcavators: 'Koparki próżniowe',
      trenchers: 'Koparki łańcuchowe',
      skidSteers: 'Ładowarki kompaktowe',
      fluidSystems: 'Systemy płuczkowe',
      subsite: 'Systemy lokalizacji Subsite',
      americanAugers: 'Sprzęt American Augers'
    },
    hero: {
      slide1: {
        badge: 'FLAGOWIEC HDB',
        title: 'WIERTNICA STEROWANA DITCH WITCH JT10',
        subtitle: 'MAKSYMALNA MOC I PRECYZJA W KOMPAKTOWEJ OBUDOWIE.',
        btnMore: 'PRZEGLĄD WIERTNIC',
        btnQuote: 'ZAPYTAJ O CENĘ'
      },
      slide2: {
        badge: 'WYKOPY PRÓŻNIOWE',
        title: 'BEZPIECZNE ODSŁANIANIE SIECI PODZIEMNYCH',
        subtitle: 'NIEZAWODNE KOPARKI PRÓŻNIOWE SERII HXT I HX.',
        btnMore: 'KATALOG PRÓŻNIOWY',
        btnQuote: 'KONSULTACJA'
      },
      slide3: {
        badge: 'BESTSELLER',
        title: 'WIERTNICA STEROWANA JT5',
        subtitle: 'OPTYMALNA WYDAJNOŚĆ W WARUNKACH MIEJSKICH.',
        btnMore: 'PRZEGLĄD WIERTNIC',
        btnQuote: 'ZAPYTAJ O CENĘ'
      },
      slide4: {
        badge: 'KOPARKI ŁAŃCUCHOWE',
        title: 'KOPARKA ŁAŃCUCHOWA DITCH WITCH C16X',
        subtitle: 'WYSOKA WYDAJNOŚĆ W KAŻDYM TERENIE.',
        btnMore: 'SZCZEGÓŁY',
        btnQuote: 'ZAMÓW'
      }
    },
    welcome: {
      title: 'WITAMY W DITCH WITCH UKRAINA',
      desc1: 'Ditch Witch Ukraina oferuje pełną gamę wiertnic sterowanych HDB, koparek łańcuchowych, koparek próżniowych i ładowarek.',
      desc2: 'Jako oficjalny dystrybutor Ditch Witch w Ukrainie zapewniamy certyfikowany serwis, oryginalne części oraz szkolenia.',
      btnCatalog: 'ZOBACZ KATALOG',
      btnContact: 'SKONTAKTUJ SIĘ'
    },
    categories: {
      subtitle: 'SPECJALISTYCZNY SPRZĘT BUDOWLANY',
      title: 'KATEGORIE SPRZĘTU DITCH WITCH',
      cat1: { name: 'Wiertnice HDB', desc: 'Wiertnice sterowane do bezwykopowej instalacji podziemnej.' },
      cat2: { name: 'Koparki próżniowe', desc: 'Wydajny wykop próżniowy do bezpiecznego odsłaniania sieci.' },
      cat3: { name: 'Koparki łańcuchowe', desc: 'Kompaktowe i silne koparki łańcuchowe do szybkiego wykopu.' },
      cat4: { name: 'Ładowarki kompaktowe', desc: 'Uniwersalne ładowarki gąsienicowe do ciężkich prac.' },
      cat5: { name: 'Systemy płuczkowe', desc: 'Profesjonalne systemy do mieszania płuczki wiertniczej.' },
      btnView: 'Szczegóły'
    },
    featured: {
      subtitle: 'NAJPOPULARNIEJSZY SPRZĘT W UKRAINIE',
      title: 'POLECANY SPRZĘT DITCH WITCH',
      specsBtn: 'SPECYFIKACJA I CENA',
      m1: { title: 'Wiertnica HDB Ditch Witch JT10', tag: 'Kompaktowa moc 40 KM', s1: 'Ciąg: 44.5 kN', s2: 'Silnik: Deutz 2.9L 40 KM', s3: 'Moment: 1490 Nm' },
      m2: { title: 'Wiertnica HDB Ditch Witch JT5', tag: 'Niezawodność w ciasnych przestrzeniach', s1: 'Ciąg: 22.2 kN', s2: 'Silnik: Kubota 24.8 KM', s3: 'Długość wiertnicza: do 90 m' },
      m3: { title: 'Koparka Łańcuchowa Ditch Witch C16X', tag: 'System CX Track dla maksymalnej przyczepności', s1: 'Głębokość: do 1.2 m', s2: 'Silnik: Vanguard 16 KM', s3: 'Szerokość: 900 mm' }
    },
    news: {
      subtitle: 'NAJNOWSZE AKTUALNOŚCI I PORADY',
      title: 'AKTUALNOŚCI DITCH WITCH',
      allNews: 'Wszystkie Artykuły',
      readMore: 'Czytaj więcej',
      a1: { cat: 'PORADNIKI', date: '14 SIERPNIA 2026', title: 'Jaką koparkę próżniową wybrać do swojego projektu?', desc: 'Kompleksowe porównanie technologii wykopu próżniowego hydro i powietrznego.' },
      a2: { cat: 'PREZENTACJA SPRZĘTU', date: '28 LIPCA 2026', title: 'Przewodnik po konserwacji koparek łańcuchowych', desc: 'Jak codzienna kontrola łańcucha wydłuża żywotność maszyny o 40%.' },
      a3: { cat: 'PORADNIKI', date: '10 LIPCA 2026', title: 'Wydajność i precyzja: Ditch Witch HX20G', desc: 'Nowy poziom wydajności z silnikiem benzynowym na przyczepie.' }
    },
    footer: {
      aboutText: 'Ditch Witch Ukraina jest oficjalnym dystrybutorem maszyn budownictwa podziemnego w Ukrainie.',
      contactUA: 'Kijów, Ukraina: +380 50 380 66 92',
      productsTitle: 'Produkty',
      companyTitle: 'Ditch Witch Ukraina',
      distributorTitle: 'Oficjalny Dystrybutor',
      distributorDesc: 'Zapewniamy certyfikowany serwis, oryginalne części i wsparcie gwarancyjne.',
      motto: 'PROWADZIMY. INNOWUJEMY. SŁUŻYMY.',
      privacy: 'Polityka prywatności',
      terms: 'Warunki użytkowania',
      rights: 'Wszelkie prawa zastrzeżone.',
      top: 'DO GÓRY'
    }
  }
};
