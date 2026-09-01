export const productsData = [
  // 1. HDD Drills (Машини горизонтально направленого буріння HDD)
  {
    id: 'jt10',
    category: 'hdd',
    categoryKey: 'hdd',
    image: '/Risorse/Immagini/dirdrills_jt10.png',
    featured: true,
    title: {
      uk: 'Установка ГНБ Дітч Вітч JT10',
      en: 'Ditch Witch JT10 Directional Drill',
      pl: 'Wiertnica HDB Ditch Witch JT10'
    },
    tagline: {
      uk: 'Компактність та неймовірна потужність для міського буріння',
      en: 'Unmatched HDD power in a compact footprint',
      pl: 'Niezwykła moc w kompaktowej konstrukcji dla prac miejskich'
    },
    specs: {
      thrust: '44.5 kN (10,000 lbs)',
      pullback: '44.5 kN (10,000 lbs)',
      engine: 'Deutz D2.9 L4 (66 HP / 49 kW)',
      torque: '1,490 N·m (1,100 ft-lb)',
      spindleSpeed: '220 rpm',
      fluidFlow: '60 L/min (16 gpm)'
    },
    desc: {
      uk: 'Установка горизонтально-направленого буріння JT10 забезпечує високу продуктивність у найтісніших міських умовах. Оснащена автоматичною подачею штанг та потужним дизельним двигуном.',
      en: 'The JT10 directional drill delivers high productivity in tight urban jobsites. Features automatic pipe loading and a powerful diesel engine.',
      pl: 'Wiertnica horyzontalna JT10 zapewnia wysoką wydajność w ciasnych przestrzeniach miejskich. Wyposażona w automatyчний podajnik żerdzi i silnik diesla.'
    }
  },
  {
    id: 'jt5',
    category: 'hdd',
    categoryKey: 'hdd',
    image: '/Risorse/Immagini/dirdrills_jt5.png',
    featured: true,
    title: {
      uk: 'Установка ГНБ Дітч Вітч JT5',
      en: 'Ditch Witch JT5 Directional Drill',
      pl: 'Wiertnica HDB Ditch Witch JT5'
    },
    tagline: {
      uk: 'Наднадійна маневреність для малих підключень',
      en: 'Compact agility for last-mile utility connections',
      pl: 'Kompaktowa zwrotność do przyłączy domowych i miejskich'
    },
    specs: {
      thrust: '22.2 kN (5,000 lbs)',
      pullback: '22.2 kN (5,000 lbs)',
      engine: 'Kubota D1105 (24.8 HP / 18.5 kW)',
      torque: '746 N·m (550 ft-lb)',
      spindleSpeed: '195 rpm',
      width: '91 cm (35.8 in)'
    },
    desc: {
      uk: 'Найкраще рішення для прокладання кабелів та труб під проїзною частиною без руйнування покриття. Ширина всього 91 см дозволяє проходити крізь стандартні хвіртки.',
      en: 'The ideal solution for laying cables and pipes under driveways without surface damage. At just 91 cm wide, it passes easily through standard yard gates.',
      pl: 'Idealne rozwiązanie do układania kabli i rur pod podjazdami bez uszkadzania nawierzchni. Szerokość zaledwie 91 cm umożliwia przejazd przez furtki.'
    }
  },

  // 2. Bentonite Mud Mixers (Міксери бентонітові)
  {
    id: 'fm13v',
    category: 'mixers',
    categoryKey: 'mixers',
    image: '/Risorse/Immagini/category_fluidSystems.png',
    featured: false,
    title: {
      uk: 'Змішувальна система FM13V',
      en: 'Ditch Witch FM13V Fluid Management System',
      pl: 'System Mieszania Płuczki FM13V'
    },
    tagline: {
      uk: 'Швидке та якісне приготування бентонітового розчину',
      en: 'Fast high-yield bentonite mud mixing and delivery',
      pl: 'Szybkie i wydajne mieszanie płuczki bentonitowej'
    },
    specs: {
      tankVolume: '1,890 L (500 gal) / 3,785 L (1,000 gal)',
      engine: 'Vanguard 13 HP',
      pumpFlow: '757 L/min (200 gpm)',
      venturiHopper: 'High-Shear Venturi Design'
    },
    desc: {
      uk: 'Спеціально розроблена система швидкого змішування бентоніту та полімерів з високопродуктивною помпою для безперервної подачі бурового розчину.',
      en: 'High-shear Venturi mixing system designed for rapid hydration of bentonite and polymer additives for HDD operations.',
      pl: 'System z głowicą Venturiego do szybkiego mieszania bentonitu i polimerów, zapewniający ciągłe zasilanie wiertnicy płuczką.'
    }
  },
  {
    id: 'fm25x',
    category: 'mixers',
    categoryKey: 'mixers',
    image: '/Risorse/Immagini/category_fluidSystems.png',
    featured: false,
    title: {
      uk: 'Змішувальна система FM25x',
      en: 'Ditch Witch FM25x High-Cap Fluid System',
      pl: 'System Mieszania Płuczki FM25x'
    },
    tagline: {
      uk: 'Професійна система для великих об’ємів буріння',
      en: 'High-capacity mud mixing unit for large HDD rigs',
      pl: 'Wysokowydajny system mieszania do dużych wiertnic'
    },
    specs: {
      tankVolume: '3,785 L (1,000 gal)',
      engine: 'Kubota 25 HP Diesel',
      pumpFlow: '1,135 L/min (300 gpm)',
      mixingTime: '8 - 10 min'
    },
    desc: {
      uk: 'Потужна бентонітова система з дизельним двигуном Kubota 25 к.с. для швидкої підготовки великих об’ємів розчину при бурінні великих діаметрів.',
      en: 'Heavy-duty bentonite mixing unit with a 25 HP Kubota diesel engine designed for rapid hydration on large-diameter HDD projects.',
      pl: 'Wydajny system mieszania z silnikiem diesla Kubota 25 KM do szybkiego przygotowywania płuczki przy wykopach o dużej średnicy.'
    }
  },

  // 3. Subsite Electronics (Електроніка: системи пошуку та локалізації)
  {
    id: 'tk_recon',
    category: 'electronics',
    categoryKey: 'electronics',
    image: '/Risorse/Immagini/dirdrills_jt10.png',
    featured: true,
    title: {
      uk: 'Локаційна система Subsite® TK RECON',
      en: 'Subsite® TK RECON HDD Locating System',
      pl: 'System Lokalizacji Subsite® TK RECON'
    },
    tagline: {
      uk: 'Неймовірна точність та захист від перешкод',
      en: 'Advanced noise filtering and deep signal tracking',
      pl: 'Niezwykła precyzja i odporność na zakłócenia'
    },
    specs: {
      depthRange: 'До 33.5 м (110 ft)',
      frequencies: 'Dual Frequency Tracking',
      batteryLife: 'До 50 годин роботи',
      telemetryRange: '610 м (2,000 ft)'
    },
    desc: {
      uk: 'Флагманська серія локаційних систем Subsite® TK RECON гарантує найвищу точність визначення глибини та кута нахилу бурової головки в умовах міських електромагнітних завад.',
      en: 'Subsite® TK RECON locating systems provide industry-leading depth accuracy and pitch tracking in high-EMI urban environments.',
      pl: 'Flagowy system lokalizacji Subsite® TK RECON zapewnia najwyższą precyzję pomiaru głębokości i kąta nachylenia głowicy w warunkach zakłóceń miejskich.'
    }
  },

  // 4. Subsite Locators (Локатори Subsite)
  {
    id: 'utiliguard2',
    category: 'locators',
    categoryKey: 'locators',
    image: '/Risorse/Immagini/category_vacumexcavator.png',
    featured: false,
    title: {
      uk: 'Трасошукач Subsite® UtiliGuard® 2',
      en: 'Subsite® UtiliGuard® 2 Utility Locator',
      pl: 'Lokalizator Trasowy Subsite® UtiliGuard® 2'
    },
    tagline: {
      uk: 'Точне знаходження підземних комунікацій та кабелів',
      en: 'Next-generation underground utility locating',
      pl: 'Precyzyjne lokalizowanie podziemnych kabli i rur'
    },
    specs: {
      frequencies: 'Понад 70 активних частот',
      display: 'Кольоровий ЖК з Ambient Interference Measurement',
      bluetooth: 'Integrated GPS & Bluetooth Logs',
      weight: '2.2 kg'
    },
    desc: {
      uk: 'Професійний трасошукач UtiliGuard® 2 автоматично аналізує рівень завад навколишнього середовища та вибирає оптимальну частоту для пошуку підземних мереж.',
      en: 'UtiliGuard® 2 utility locator automatically scans ambient noise and selects the best active frequency for precise utility mapping.',
      pl: 'Profesjonalny lokalizator UtiliGuard® 2 automatycznie analizuje zakłócenia i dobiera optymalną częstotliwość do wykrywania instalacji podziemnych.'
    }
  },

  // 5. Vibratory Plows & Trenchers (Віброукладачі та Траншеєкопачі)
  {
    id: 'c16x',
    category: 'trenchers',
    categoryKey: 'trenchers',
    image: '/Risorse/Immagini/c16x.png',
    featured: true,
    title: {
      uk: 'Траншеєкопач Дітч Вітч C16X',
      en: 'Ditch Witch C16X Walk-Behind Trencher',
      pl: 'Koparka Łańcuchowa Ditch Witch C16X'
    },
    tagline: {
      uk: 'Максимальна маневреність та глибоке копання',
      en: 'Maximum productivity & control in tight spaces',
      pl: 'Niezawodne i precyzyjne kopanie w trudnym terenie'
    },
    specs: {
      digDepth: 'До 910 мм (36 in)',
      digWidth: '100 - 150 мм (4 - 6 in)',
      engine: 'Vanguard 16 HP (11.9 kW)',
      trackSystem: 'CX High-Traction Rubber Tracks',
      weight: '857 kg'
    },
    desc: {
      uk: 'Самохідний траншеєкопач з ексклюзивним запатентованим гусеничним шасі CX, що забезпечує чудове зчеплення з ґрунтом та стабільність при прокладанні траншей.',
      en: 'Walk-behind trencher featuring the exclusive CX track design for superior traction and stability during heavy-duty trenching operations.',
      pl: 'Koparka samojezdna z ekskluzywnym gąsienicowym podwoziem CX, zapewniającym doskonałą przyczepność i stabilność podczas kopania.'
    }
  },
  {
    id: '100sx',
    category: 'trenchers',
    categoryKey: 'trenchers',
    image: '/Risorse/Immagini/c16x.png',
    featured: false,
    title: {
      uk: 'Віброукладач Дітч Вітч 100SX',
      en: 'Ditch Witch 100SX Walk-Behind Vibratory Plow',
      pl: 'Pług Wibracyjny Ditch Witch 100SX'
    },
    tagline: {
      uk: 'Безаварійне прокладання кабелю без розкопування траншей',
      en: 'Trenchless cable and pipe burial with zero surface damage',
      pl: 'Bezwykopowe układanie kabli i rur bez naruszania trawników'
    },
    specs: {
      plowDepth: 'До 305 мм (12 in)',
      engine: 'Honda 13 HP Gasoline',
      drive: 'Hydrostatic All-Wheel Drive',
      weight: '410 kg'
    },
    desc: {
      uk: 'Компактний віброукладач для швидкого та безаварійного підземного прокладання оптоволокна, електричних кабелів та труб зрошення без пошкодження газонів.',
      en: 'Compact vibratory plow engineered to pull cable and pipe underground smoothly without tearing up lawns or paved paths.',
      pl: 'Kompaktowy pług wibracyjny przeznaczony do szybkiego układania światłowodów i kabli pod ziemią bez niszczenia nawierzchni.'
    }
  },

  // 6. Baroid Bentonite & Polymers (Бентоніт та полімери Baroid®)
  {
    id: 'ez_mud',
    category: 'bentonite',
    categoryKey: 'bentonite',
    image: '/Risorse/Immagini/category_fluidSystems.png',
    featured: false,
    title: {
      uk: 'Рідкий полімер Baroid® EZ-MUD®',
      en: 'Baroid® EZ-MUD® Liquid Polymer Additive',
      pl: 'Polimer Płynny Baroid® EZ-MUD®'
    },
    tagline: {
      uk: 'Максимальне змащення та стабілізація стінок свердловини',
      en: 'High-performance shale inhibitor and borehole lubricant',
      pl: 'Maksymalny poślizg i stabilizacja ścian otworu'
    },
    specs: {
      package: '25 L Каністра',
      consumption: '0.5 - 1.5 L / 1000 L води',
      solubility: 'Instant Hydration in Water',
      viscosityBoost: 'High Yield Polymer'
    },
    desc: {
      uk: 'Офіційні бурові добавки Baroid® EZ-MUD® забезпечують ідеальну змащуваність бурового інструменту, запобігають налипанню глини та стабілізують свердловину.',
      en: 'Official Baroid® EZ-MUD® liquid polymer improves borehole stability, reduces torque, and prevents reactive clay swelling in HDD drilling.',
      pl: 'Oficjalny dodatek polimerowy Baroid® EZ-MUD® zapewnia doskonały poślizg, zapobiega oklejaniu się świdra i stabilizuje otwór wiertniczy.'
    }
  },

  // 7. Stand-on Skid Steers (Навантажувачі компактне обладнання)
  {
    id: 'sk3000',
    category: 'skidsteers',
    categoryKey: 'skidSteers',
    image: '/Risorse/Immagini/category_skidsteers.png',
    featured: true,
    title: {
      uk: 'Гусеничний Міні-навантажувач SK3000',
      en: 'Ditch Witch SK3000 Stand-On Skid Steer',
      pl: 'Ładowarka Gąsienicowa SK3000'
    },
    tagline: {
      uk: 'Найпотужніший у класі міні-навантажувач з стоячим місцем',
      en: 'Uncage the beast - stand-on skid steer unlike any other',
      pl: 'Najpotężniejsza ładowarka gąsienicowa w swojej klasie'
    },
    specs: {
      operatingCapacity: '1,400 kg (3,100 lbs)',
      engine: 'Kubota 59 HP Turbo Diesel',
      hingePinHeight: '3.05 m (120 in)',
      trackWidth: '350 mm',
      weight: '3,447 kg'
    },
    desc: {
      uk: 'Повністю замінює великогабаритні навантажувачі, зберігаючи високу оглядовість та легкість посадки для оператора. Ідеальний для важких вантажних робіт на об’єкті.',
      en: 'Delivers full-size skid steer power in a compact stand-on format. Offers unmatched visibility, fast cycle times, and heavy lift capacity.',
      pl: 'Zapewnia moc pełnowymiarowych ładowarek w kompaktowej formie stojącej. Oferuje doskonałą widoczność i dużą udźwig.'
    }
  },

  // 8. American Augers Equipment (Обладнання American Augers)
  {
    id: 'dd110',
    category: 'american_augers',
    categoryKey: 'american_augers',
    image: '/Risorse/Immagini/dirdrills_jt10.png',
    featured: true,
    title: {
      uk: 'Установка ГНБ American Augers® DD-110',
      en: 'American Augers® DD-110 Heavy HDD Rig',
      pl: 'Wiertnica HDB American Augers® DD-110'
    },
    tagline: {
      uk: 'Важкий клас буріння для магістральних трубопроводів',
      en: 'Heavy-class directional drilling rig for cross-country pipelines',
      pl: 'Ciężka wiertnica horyzontalna do magistrali rurociągowych'
    },
    specs: {
      thrust: '490 kN (110,000 lbs)',
      pullback: '490 kN (110,000 lbs)',
      engine: 'Cummins QSB6.7 (260 HP / 194 kW)',
      torque: '19,000 N·m (14,000 ft-lb)'
    },
    desc: {
      uk: 'Потужний буровий комплекс American Augers® DD-110 призначений для будівництва магістральних газо- та нафтопроводів під річками та автошляхами.',
      en: 'American Augers® DD-110 heavy HDD system engineered for large-diameter pipeline crossings under rivers and major highways.',
      pl: 'Potężny zespół wiertniczy American Augers® DD-110 przeznaczony do budowy magistrali gazowych pod rzekami i drogami.'
    }
  },

  // 9. Mud Recycling Equipment (Обладнання для рециклінгу бурового розчину)
  {
    id: 'dupagro_r5e',
    category: 'recycling',
    categoryKey: 'recycling',
    image: '/Risorse/Immagini/category_fluidSystems.png',
    featured: false,
    title: {
      uk: 'Система рециклінгу Dupagro R5E',
      en: 'Dupagro R5E Mud Recycling System',
      pl: 'System Recyklingu Płuczki Dupagro R5E'
    },
    tagline: {
      uk: 'Замкнутий цикл очищення та повторного використання бентоніту',
      en: 'Closed-loop mud cleaning and bentonite recycling',
      pl: 'Zamknięty obieg czyszczenia i ponownego użycia bentonitu'
    },
    specs: {
      capacity: '500 L/min (132 gpm)',
      shakerScreen: 'Double Deck Vibrating Screen',
      hydrocyclones: '2 x 5" Desander Cones',
      generator: 'Integrated Silent Diesel Gen'
    },
    desc: {
      uk: 'Професійна рециклінгова установка Dupagro R5E видаляє пісок та шлам з використаного бурового розчину, повертаючи очищений бентоніт назад у буріння та зменшуючи витрати на води і вивіз шламу на 80%.',
      en: 'Dupagro R5E mud recycler removes solids and sand from used drilling fluid, reducing water usage and mud disposal costs by up to 80%.',
      pl: 'Urządzenie do recyklingu płuczki Dupagro R5E skutecznie oczyszcza zużytą płuczkę z piasku, obniżając koszty utylizacji i zużycia wody o 80%.'
    }
  },

  // 10. Consumable Materials (Витратні матеріали: Бентоніт, розширювачі, бурові штанги)
  {
    id: 'quik_gel',
    category: 'consumables',
    categoryKey: 'consumables',
    image: '/Risorse/Immagini/category_fluidSystems.png',
    featured: false,
    title: {
      uk: 'Високоякісний Бентоніт Baroid® QUIK-GEL®',
      en: 'Baroid® QUIK-GEL® High-Yield Bentonite',
      pl: 'Bentonit Baroid® QUIK-GEL®'
    },
    tagline: {
      uk: 'Миттєве набрякання та висока в\'язкість для буріння в піску та гравії',
      en: 'Instant hydration and high viscosity for sand & gravel HDD',
      pl: 'Szybkie pęcznienie i wysoka lepkość do piasków i żwirów'
    },
    specs: {
      package: '25 kg Мішок',
      yield: '200+ bbl/ton',
      viscosity: 'High-Shear Hydration Gel',
      origin: 'Baroid Industrial Drilling Products USA'
    },
    desc: {
      uk: 'Високоочищений бентоніт Baroid® QUIK-GEL® призначений для швидкого приготування бурового розчину з високими виносними властивостями для піщаних та нестабільних ґрунтів.',
      en: 'Baroid® QUIK-GEL® high-yield sodium bentonite provides superior hole cleaning and fluid loss control in permeable formations.',
      pl: 'Wysokowydajny bentonit Baroid® QUIK-GEL® zapewnia idealną lepkość i zapobiega ucieczce płuczki w gruncie piaszczystym.'
    }
  }
];
