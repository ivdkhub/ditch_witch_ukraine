export const productsData = [
  // Directional Drills (ГНБ / HDB)
  {
    id: 'jt10',
    category: 'drilling',
    categoryKey: 'directionalDrills',
    image: '/Risorse/Immagini/dirdrills_jt10.png',
    featured: true,
    title: {
      uk: 'Установка ГНБ Ditch Witch JT10',
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
    category: 'drilling',
    categoryKey: 'directionalDrills',
    image: '/Risorse/Immagini/dirdrills_jt5.png',
    featured: true,
    title: {
      uk: 'Установка ГНБ Ditch Witch JT5',
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

  // Trenchers (Траншеєкопачі / Koparki łańcuchowe)
  {
    id: 'c16x',
    category: 'trenchers',
    categoryKey: 'trenchers',
    image: '/Risorse/Immagini/c16x.png',
    featured: true,
    title: {
      uk: 'Траншеєкопач Ditch Witch C16X',
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
    id: 'rt45',
    category: 'trenchers',
    categoryKey: 'trenchers',
    image: '/Risorse/Immagini/category_trenchers.png',
    featured: false,
    title: {
      uk: 'Самохідний траншеєкопач RT45',
      en: 'Ditch Witch RT45 Ride-On Trencher',
      pl: 'Koparka Samojezdna RT45'
    },
    tagline: {
      uk: 'Легендарна надійність для важких будівельних робіт',
      en: 'Legendary reliability for heavy construction utility trenching',
      pl: 'Legendarna niezawodność do ciężkich prac wykopowych'
    },
    specs: {
      digDepth: 'До 1,500 мм (60 in)',
      digWidth: '150 - 300 мм (6 - 12 in)',
      engine: 'Deutz 49 HP Diesel',
      drive: '4-Wheel Drive / 4-Wheel Steering',
      weight: '1,900 kg'
    },
    desc: {
      uk: 'Колісна самохідна установка для викопування глибоких траншей під магістральні газопроводи, водопроводи та силові кабелі з можливістю встановлення фрези або плуга.',
      en: 'Ride-on tractor utility trencher designed for deep pipe and cable installations with optional backhoe, vibratory plow, or rock saw attachments.',
      pl: 'Kołowa koparka samojezdna przeznaczona do głębokich wykopów pod rurociągi i kable z możliwością montażу frezu lub pługa.'
    }
  },

  // Vacuum Excavators (Вакуумні Екскаватори / Koparki Próżniowe)
  {
    id: 'hxt75',
    category: 'vacuums',
    categoryKey: 'vacuumExcavators',
    image: '/Risorse/Immagini/category_vacumexcavator.png',
    featured: true,
    title: {
      uk: 'Вакуумний Екскаватор HXT75-800',
      en: 'Ditch Witch HXT75-800 Vacuum Excavator',
      pl: 'Koparka Próżniowa HXT75-800'
    },
    tagline: {
      uk: 'Потужність безаварійного гідравлічного та сухого виймання ґрунту',
      en: 'High-volume non-destructive hydro and air vacuum excavation',
      pl: 'Wysokowydajny bezpieczny wykop hydro i pneumatyczny'
    },
    specs: {
      tankCapacity: '3,028 L (800 gal)',
      waterTank: '1,514 L (400 gal)',
      engine: 'Kubota 74 HP Turbo Diesel',
      blowerCFM: '1,000 CFM (28.3 m³/min)',
      waterPressure: '3,000 psi (207 bar)'
    },
    desc: {
      uk: 'Причіпний або автомобільний вакуумний екскаватор високої потужності для швидкого та безпечного точкового розкопування комунікацій без ризику їх пошкодження.',
      en: 'High-power truck or trailer-mounted vacuum excavator engineered for fast, non-destructive potholing and utility daylighting.',
      pl: 'Przyczepiana lub ciężarowa koparka próżniowa przeznaczona do szybkiego i bezpiecznego odsłaniania podziemnych sieci.'
    }
  },

  // Skid Steers (Міні-навантажувачі / Ładowarki Kompaktowe)
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

  // Fluid Management Systems (Приготування Розчину / Systemy Płuczkowe)
  {
    id: 'fm13v',
    category: 'fluids',
    categoryKey: 'fluidSystems',
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
  }
];
