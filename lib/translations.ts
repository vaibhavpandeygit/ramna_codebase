export type Language = "en" | "hi";

export type ServiceId = "intercity" | "group" | "private" | "assistance";

export type DestinationId =
  | "patna"
  | "bodh-gaya"
  | "nalanda"
  | "rajgir"
  | "vaishali"
  | "madhubani";

export type JourneyTypeId = "intercity" | "group" | "private" | "other";

export type Copy = {
  nav: {
    home: string;
    about: string;
    services: string;
    routes: string;
    contact: string;
    cta: string;
    menu: string;
    close: string;
    language: string;
  };
  hero: {
    eyebrow: string;
    region: string;
    title: string;
    body: string;
    primary: string;
    secondary: string;
    alt: string;
    strip: { title: string; note: string }[];
  };
  about: {
    eyebrow: string;
    title: string;
    body: string;
    body2: string;
    alt: string;
    principles: { title: string; body: string }[];
  };
  services: {
    eyebrow: string;
    title: string;
    intro: string;
    learnMore: string;
    items: { id: ServiceId; title: string; body: string; alt: string }[];
  };
  destinations: {
    eyebrow: string;
    title: string;
    body: string;
    enquire: string;
    note: string;
    other: string;
    items: {
      id: DestinationId;
      name: string;
      place: string;
      body: string;
      caption: string;
      alt: string;
    }[];
  };
  inspiration: {
    eyebrow: string;
    title: string;
    body: string;
    cta: string;
    alt: string;
  };
  why: {
    eyebrow: string;
    title: string;
    intro: string;
    steps: { title: string; body: string }[];
  };
  form: {
    eyebrow: string;
    title: string;
    intro: string;
    name: string;
    phone: string;
    startCity: string;
    destination: string;
    date: string;
    passengers: string;
    journeyType: string;
    notes: string;
    namePlaceholder: string;
    phonePlaceholder: string;
    startPlaceholder: string;
    destinationPlaceholder: string;
    journeyPlaceholder: string;
    otherPlaceholder: string;
    passengersPlaceholder: string;
    notesPlaceholder: string;
    journeyTypes: { id: JourneyTypeId; label: string }[];
    submit: string;
    call: string;
    errors: {
      name: string;
      phone: string;
      destination: string;
      destinationOther: string;
      journeyType: string;
      passengers: string;
      date: string;
    };
    notConfigured: string;
    draftLabel: string;
    opened: string;
    popup: string;
    openLink: string;
  };
  footer: {
    descriptionEn: string;
    descriptionHi: string;
    navigate: string;
    services: string;
    contact: string;
    closing: string;
    rights: string;
    phonePending: string;
    whatsappPending: string;
    addressPending: string;
    emailPending: string;
    whatsappHello: string;
  };
};

export const dictionary: Record<Language, Copy> = {
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      services: "Our Services",
      routes: "Destinations",
      contact: "Contact",
      cta: "Plan Your Journey",
      menu: "Menu",
      close: "Close",
      language: "Language",
    },
    hero: {
      eyebrow: "Ramna Travels · Your Travel Partner",
      region: "Bihar Roots. Journeys Beyond.",
      title: "Every Journey Begins With Trust.",
      body: "From the familiar roads of Bihar to destinations across India, Ramna Travels brings a thoughtful approach to every journey. Whether you are visiting family, travelling for work, or planning a group trip, let your next journey begin with confidence.",
      primary: "Plan Your Journey",
      secondary: "Explore Destinations",
      alt: "A coach bus travelling along a tree-lined highway",
      strip: [
        { title: "Family visits", note: "Homecomings and gatherings" },
        { title: "Work travel", note: "Journeys with a purpose" },
        { title: "Group plans", note: "Travel arranged together" },
      ],
    },
    about: {
      eyebrow: "About Ramna Travels",
      title: "Every Road Has a Story. Every Journey Matters.",
      body: "Travel is about more than reaching a destination. It is about meeting loved ones, returning home, discovering new places, and making time for the people who matter.",
      body2:
        "Inspired by the warmth, culture, and connections of Bihar, Ramna Travels aims to make planning your next journey feel simple and reassuring. From regional travel enquiries to journeys beyond Bihar, our focus is on clear communication, thoughtful assistance, and a better travel experience.",
      alt: "Leather seats inside a passenger coach as the roadside trees pass",
      principles: [
        {
          title: "Thoughtful Travel",
          body: "Plans that begin with where you are going, who is travelling, and why the journey matters.",
        },
        {
          title: "Clear Communication",
          body: "Plain answers about the journey, before you commit to anything.",
        },
        {
          title: "Journeys That Connect",
          body: "Travel that makes room for family, work, and the occasions that bring people together.",
        },
      ],
    },
    services: {
      eyebrow: "Our Services",
      title: "Tell us the journey you have in mind.",
      intro:
        "These are the kinds of travel you can ask us about. Nothing here is a published timetable. What can be arranged is discussed when you enquire.",
      learnMore: "Make an Enquiry",
      items: [
        {
          id: "intercity",
          title: "Intercity Journeys",
          body: "Planning a journey between cities? Get in touch with Ramna Travels to discuss your destination, travel requirements, and available options.",
          alt: "The front of a modern coach bus in daylight",
        },
        {
          id: "group",
          title: "Family & Group Travel",
          body: "From family visits to group outings, explore suitable travel arrangements for the people travelling with you.",
          alt: "Passengers riding a bus along a tree-covered hill road",
        },
        {
          id: "private",
          title: "Private Bus Enquiries",
          body: "Planning a group journey, an event, or a trip with friends? Enquire about private bus arrangements and share your travel requirements.",
          alt: "A coach bus with its lights on at dusk, mountains behind it",
        },
        {
          id: "assistance",
          title: "Travel Planning Assistance",
          body: "Need information before travelling? Contact us with your intended destination, preferred date, and passenger requirements.",
          alt: "Leather seats inside a passenger coach",
        },
      ],
    },
    destinations: {
      eyebrow: "Bihar, and beyond",
      title: "Discover Bihar. Travel Beyond.",
      body: "From the spiritual atmosphere of Bodh Gaya to the historic streets of Patna and the cultural heritage of Nalanda, Bihar offers journeys filled with history, devotion, learning, and memorable experiences.",
      enquire: "Enquire About Travel",
      note: "Shown for inspiration. Asking about a place does not mean a scheduled service is published here.",
      other: "Somewhere else",
      items: [
        {
          id: "patna",
          name: "Patna",
          place: "पटना",
          body: "Bihar's capital, with the Ganga riverfront and the pace of a busy city.",
          caption: "Evening at Gandhi Ghat",
          alt: "The Ganga and a long bridge at dusk, seen from Gandhi Ghat in Patna",
        },
        {
          id: "bodh-gaya",
          name: "Bodh Gaya",
          place: "बोधगया",
          body: "A Buddhist pilgrimage destination, known for the Mahabodhi Temple.",
          caption: "Mahabodhi Temple",
          alt: "The Mahabodhi Temple in Bodh Gaya, Bihar",
        },
        {
          id: "nalanda",
          name: "Nalanda",
          place: "नालंदा",
          body: "Archaeological ruins of an ancient centre of learning.",
          caption: "Nalanda Mahavihara",
          alt: "The brick ruins of the Nalanda Mahavihara stupa",
        },
        {
          id: "rajgir",
          name: "Rajgir",
          place: "राजगीर",
          body: "Hills, old shrines, and a landscape tied to spiritual history.",
          caption: "A shrine on the Vaibhar hills",
          alt: "Stone shrine ruins on the Vaibhar hills at Rajgir",
        },
        {
          id: "vaishali",
          name: "Vaishali",
          place: "वैशाली",
          body: "An ancient city remembered through its pillar and archaeological remains.",
          caption: "The pillar at Vaishali",
          alt: "The Ashokan pillar standing at Vaishali in Bihar",
        },
        {
          id: "madhubani",
          name: "Madhubani",
          place: "मधुबनी",
          body: "Known for Mithila painting and a living artistic tradition.",
          caption: "Mithila painting",
          alt: "A colourful Madhubani painting in the Mithila tradition",
        },
      ],
    },
    inspiration: {
      eyebrow: "Why people travel",
      title: "Some Journeys Bring Us Closer to Home.",
      body: "Festive visits, family gatherings, important occasions, and long-awaited reunions — every journey has a reason. Wherever your plans take you, start with the details that matter.",
      cta: "Plan Your Journey",
      alt: "Passengers riding a bus along a tree-covered road",
    },
    why: {
      eyebrow: "Plan a journey",
      title: "A Better Journey Starts With a Better Plan.",
      intro: "Share a few details and we can talk about the journey. This form does not check live seats or confirm a booking.",
      steps: [
        {
          title: "Share Your Destination",
          body: "Tell us where you want to travel.",
        },
        {
          title: "Tell Us Your Requirements",
          body: "Mention the date, passenger count, and type of journey.",
        },
        {
          title: "Discuss Available Options",
          body: "Get in touch to discuss arrangements.",
        },
        {
          title: "Plan With Clarity",
          body: "Confirm the details before making travel commitments.",
        },
      ],
    },
    form: {
      eyebrow: "Enquiry",
      title: "Tell us about the journey.",
      intro: "We will open WhatsApp with what you enter. Nothing is booked, and availability is not checked from this page.",
      name: "Full name",
      phone: "Phone number",
      startCity: "Starting city",
      destination: "Destination",
      date: "Travel date",
      passengers: "Number of passengers",
      journeyType: "Journey type",
      notes: "Additional requirements",
      namePlaceholder: "Your name",
      phonePlaceholder: "10-digit mobile number",
      startPlaceholder: "City you are leaving from",
      destinationPlaceholder: "Select a destination",
      journeyPlaceholder: "Select a journey type",
      otherPlaceholder: "Where you hope to go",
      passengersPlaceholder: "For example, 4",
      notesPlaceholder: "Timing, luggage, or anything else we should know",
      journeyTypes: [
        { id: "intercity", label: "Intercity travel" },
        { id: "group", label: "Family or group travel" },
        { id: "private", label: "Private bus enquiry" },
        { id: "other", label: "Other" },
      ],
      submit: "Send on WhatsApp",
      call: "Call",
      errors: {
        name: "Please enter your name.",
        phone: "Enter a valid 10-digit Indian mobile number.",
        destination: "Please choose a destination.",
        destinationOther: "Please write the destination.",
        journeyType: "Please choose a journey type.",
        passengers: "Enter a passenger count between 1 and 60.",
        date: "Choose a travel date that is today or later.",
      },
      notConfigured:
        "The WhatsApp business number is not configured yet, so this enquiry was not sent. Add the number in lib/site-config.ts. The draft below is what would be sent.",
      draftLabel: "Draft message",
      opened: "WhatsApp should open with your enquiry. Nothing is booked until the team replies.",
      popup: "If WhatsApp did not open, use the link below.",
      openLink: "Open WhatsApp",
    },
    footer: {
      descriptionEn: "Thoughtful bus travel, with roots in Bihar and journeys that can reach further.",
      descriptionHi: "बिहार से जुड़ाव, और सफ़र जो आगे तक जा सकते हैं।",
      navigate: "Navigate",
      services: "Services",
      contact: "Contact",
      closing: "Safe journeys. Lasting memories.",
      rights: "All rights reserved.",
      phonePending: "Phone number to be added",
      whatsappPending: "WhatsApp number to be added",
      addressPending: "Address to be added",
      emailPending: "Email to be added",
      whatsappHello: "Hello Ramna Travels, I would like to enquire about a journey.",
    },
  },
  hi: {
    nav: {
      home: "होम",
      about: "हमारे बारे में",
      services: "हमारी सेवाएँ",
      routes: "जगहें",
      contact: "संपर्क करें",
      cta: "अपने सफ़र की योजना बनाएँ",
      menu: "मेनू",
      close: "बंद करें",
      language: "भाषा",
    },
    hero: {
      eyebrow: "Ramna Travels · आपका सफ़र साथी",
      region: "बिहार से जुड़ाव, सफ़र देश भर में।",
      title: "हर सफ़र की शुरुआत भरोसे से।",
      body: "बिहार की जानी-पहचानी राहों से लेकर देश के दूसरे शहरों तक, Ramna Travels के साथ अपने अगले सफ़र की योजना बनाइए। परिवार से मिलने जाना हो, काम के लिए निकलना हो या समूह के साथ यात्रा करनी हो — सफ़र की शुरुआत भरोसे से करें।",
      primary: "अपने सफ़र की योजना बनाएँ",
      secondary: "जगहें देखें",
      alt: "पेड़ों से घिरे राजमार्ग पर चलती एक कोच बस",
      strip: [
        { title: "परिवार से मिलना", note: "घर लौटना और साथ आना" },
        { title: "काम के सफ़र", note: "किसी वजह से निकलना" },
        { title: "समूह की योजना", note: "साथ मिलकर यात्रा" },
      ],
    },
    about: {
      eyebrow: "Ramna Travels के बारे में",
      title: "हर रास्ते की एक कहानी, हर सफ़र ख़ास।",
      body: "सफ़र सिर्फ़ मंज़िल तक पहुँचने का नाम नहीं है। इसमें अपनों से मिलना, घर लौटना, नई जगहें देखना और यादगार पल बनाना भी शामिल है।",
      body2:
        "बिहार की संस्कृति, अपनापन और लोगों के बीच के रिश्तों से प्रेरित Ramna Travels का उद्देश्य आपकी अगली यात्रा की योजना को आसान बनाना है। बिहार के अलग-अलग क्षेत्रों से जुड़ी यात्रा संबंधी जानकारी हो या दूसरे शहरों के लिए सफ़र की योजना — हमारी प्राथमिकता स्पष्ट जानकारी, सहयोग और बेहतर यात्रा अनुभव है।",
      alt: "यात्री कोच के अंदर चमड़े की सीटें, खिड़की से गुज़रते पेड़",
      principles: [
        {
          title: "सोच-समझकर यात्रा",
          body: "योजना की शुरुआत वहाँ से, जहाँ जाना है, कौन जा रहा है, और सफ़र क्यों ज़रूरी है।",
        },
        {
          title: "स्पष्ट जानकारी",
          body: "कुछ तय करने से पहले, सफ़र के बारे में साफ़ बात।",
        },
        {
          title: "रिश्तों को जोड़ने वाले सफ़र",
          body: "परिवार, काम और उन मौकों के लिए यात्रा, जो लोगों को साथ लाते हैं।",
        },
      ],
    },
    services: {
      eyebrow: "हमारी सेवाएँ",
      title: "जो सफ़र मन में है, वह बताइए।",
      intro:
        "ये वे तरह के सफ़र हैं जिनके बारे में आप पूछ सकते हैं। यह कोई प्रकाशित समय-सारिणी नहीं है। क्या हो सकता है, यह पूछताछ पर बात होती है।",
      learnMore: "पूछताछ करें",
      items: [
        {
          id: "intercity",
          title: "शहरों के बीच सफ़र",
          body: "शहरों के बीच यात्रा की योजना है? अपनी मंज़िल, ज़रूरतें और उपलब्ध विकल्प Ramna Travels से पूछें।",
          alt: "दिन की रोशनी में एक आधुनिक कोच बस का अगला हिस्सा",
        },
        {
          id: "group",
          title: "परिवार और समूह के साथ यात्रा",
          body: "परिवार से मिलने जाना हो या समूह के साथ निकलना हो, साथ चलने वाले लोगों के लिए उपयुक्त व्यवस्था के बारे में बात करें।",
          alt: "पेड़ों से ढकी पहाड़ी सड़क पर सफ़र करते यात्री",
        },
        {
          id: "private",
          title: "निजी बस के लिए जानकारी",
          body: "समूह यात्रा, कोई कार्यक्रम, या दोस्तों के साथ सफ़र? निजी बस की व्यवस्था के बारे में पूछें और अपनी ज़रूरतें बताएँ।",
          alt: "शाम को पहाड़ों के सामने रोशनी जलाए एक कोच बस",
        },
        {
          id: "assistance",
          title: "यात्रा की योजना में सहयोग",
          body: "निकलने से पहले जानकारी चाहिए? अपनी मंज़िल, तारीख और यात्रियों की संख्या लिखकर संपर्क करें।",
          alt: "यात्री कोच के अंदर चमड़े की सीटें",
        },
      ],
    },
    destinations: {
      eyebrow: "बिहार, और आगे",
      title: "बिहार को जानें, आगे की राह चुनें।",
      body: "बोधगया की आध्यात्मिक शांति से लेकर पटना की रौनक और नालंदा की ऐतिहासिक विरासत तक, बिहार में घूमने और जानने के लिए बहुत कुछ है। अपनी अगली यात्रा की योजना बनाएँ और नए अनुभवों की ओर बढ़ें।",
      enquire: "यात्रा के बारे में पूछें",
      note: "ये जगहें प्रेरणा के लिए हैं। किसी जगह के बारे में पूछना यह नहीं कि यहाँ उसकी नियमित बस सेवा छपी है।",
      other: "कहीं और",
      items: [
        {
          id: "patna",
          name: "पटना",
          place: "Patna",
          body: "बिहार की राजधानी, गंगा का किनारा और एक जीवंत शहर।",
          caption: "शाम को गांधी घाट",
          alt: "पटना के गांधी घाट से शाम के समय गंगा और पुल",
        },
        {
          id: "bodh-gaya",
          name: "बोधगया",
          place: "Bodh Gaya",
          body: "बौद्ध तीर्थ, जो महाबोधि मंदिर के लिए जाना जाता है।",
          caption: "महाबोधि मंदिर",
          alt: "बोधगया, बिहार में महाबोधि मंदिर",
        },
        {
          id: "nalanda",
          name: "नालंदा",
          place: "Nalanda",
          body: "प्राचीन विद्याकेंद्र के पुरातात्विक अवशेष।",
          caption: "नालंदा महाविहार",
          alt: "नालंदा महाविहार के स्तूप के ईंटों के अवशेष",
        },
        {
          id: "rajgir",
          name: "राजगीर",
          place: "Rajgir",
          body: "पहाड़ियाँ, पुराने स्थल, और आध्यात्मिक इतिहास से जुड़ा नज़ारा।",
          caption: "वैभार पहाड़ी पर एक मंदिर",
          alt: "राजगीर की वैभार पहाड़ियों पर पत्थर के अवशेष",
        },
        {
          id: "vaishali",
          name: "वैशाली",
          place: "Vaishali",
          body: "प्राचीन नगर, जिसे उसके स्तंभ और पुरातात्विक अवशेष याद दिलाते हैं।",
          caption: "वैशाली का स्तंभ",
          alt: "बिहार के वैशाली में खड़ा अशोक स्तंभ",
        },
        {
          id: "madhubani",
          name: "मधुबनी",
          place: "Madhubani",
          body: "मिथिला चित्रकला और जीवंत कला परंपरा के लिए जाना जाता है।",
          caption: "मिथिला चित्रकला",
          alt: "मिथिला परंपरा की एक रंगीन मधुबनी पेंटिंग",
        },
      ],
    },
    inspiration: {
      eyebrow: "सफ़र की वजह",
      title: "कुछ सफ़र हमें अपनों के और क़रीब ले आते हैं।",
      body: "त्योहारों पर घर जाना हो, परिवार से मिलना हो या किसी ख़ास अवसर पर साथ आना हो — हर सफ़र की अपनी वजह होती है। अपनी यात्रा की ज़रूरतें साझा करें और आगे की योजना बनाएँ।",
      cta: "अपने सफ़र की योजना बनाएँ",
      alt: "पेड़ों से घिरी सड़क पर बस में सवार यात्री",
    },
    why: {
      eyebrow: "सफ़र की योजना",
      title: "बेहतर सफ़र की शुरुआत सही योजना से।",
      intro: "कुछ बातें बताइए, ताकि सफ़र पर बात हो सके। यह फ़ॉर्म सीट नहीं देखता और बुकिंग की पुष्टि नहीं करता।",
      steps: [
        {
          title: "अपनी मंज़िल बताएँ",
          body: "बताइए कहाँ जाना है।",
        },
        {
          title: "अपनी ज़रूरत बताएँ",
          body: "तारीख, यात्रियों की संख्या और सफ़र का प्रकार लिखें।",
        },
        {
          title: "विकल्पों पर बात करें",
          body: "व्यवस्था के बारे में बात करने के लिए संपर्क करें।",
        },
        {
          title: "स्पष्ट योजना",
          body: "यात्रा तय करने से पहले बातें पक्की करें।",
        },
      ],
    },
    form: {
      eyebrow: "पूछताछ",
      title: "अपने सफ़र के बारे में बताएँ।",
      intro: "आप जो लिखेंगे, उसे हम WhatsApp पर खोलेंगे। इस पेज से न तो सीट देखी जाती है, न बुकिंग होती है।",
      name: "पूरा नाम",
      phone: "फ़ोन नंबर",
      startCity: "शुरुआती शहर",
      destination: "मंज़िल",
      date: "यात्रा की तारीख",
      passengers: "यात्रियों की संख्या",
      journeyType: "सफ़र का प्रकार",
      notes: "अतिरिक्त बातें",
      namePlaceholder: "आपका नाम",
      phonePlaceholder: "10 अंकों का मोबाइल नंबर",
      startPlaceholder: "जहाँ से निकलना है",
      destinationPlaceholder: "मंज़िल चुनें",
      journeyPlaceholder: "सफ़र का प्रकार चुनें",
      otherPlaceholder: "कहाँ जाना है",
      passengersPlaceholder: "उदाहरण के लिए, 4",
      notesPlaceholder: "समय, सामान, या और कुछ जो हमें जानना चाहिए",
      journeyTypes: [
        { id: "intercity", label: "शहरों के बीच यात्रा" },
        { id: "group", label: "परिवार या समूह के साथ यात्रा" },
        { id: "private", label: "निजी बस के लिए पूछताछ" },
        { id: "other", label: "अन्य" },
      ],
      submit: "WhatsApp पर भेजें",
      call: "कॉल करें",
      errors: {
        name: "कृपया अपना नाम लिखें।",
        phone: "सही 10 अंकों का भारतीय मोबाइल नंबर लिखें।",
        destination: "कृपया मंज़िल चुनें।",
        destinationOther: "कृपया मंज़िल लिखें।",
        journeyType: "कृपया सफ़र का प्रकार चुनें।",
        passengers: "यात्रियों की संख्या 1 से 60 के बीच लिखें।",
        date: "आज या उसके बाद की तारीख चुनें।",
      },
      notConfigured:
        "WhatsApp का व्यावसायिक नंबर अभी सेट नहीं है, इसलिए यह पूछताछ नहीं भेजी गई। नंबर lib/site-config.ts में जोड़ें। नीचे वही संदेश है जो भेजा जाता।",
      draftLabel: "तैयार संदेश",
      opened: "WhatsApp आपकी पूछताछ के साथ खुलना चाहिए। टीम के जवाब तक कोई बुकिंग नहीं होती।",
      popup: "अगर WhatsApp नहीं खुला, तो नीचे दिए लिंक का उपयोग करें।",
      openLink: "WhatsApp खोलें",
    },
    footer: {
      descriptionEn: "Thoughtful bus travel, with roots in Bihar and journeys that can reach further.",
      descriptionHi: "बिहार से जुड़ाव, और सफ़र जो आगे तक जा सकते हैं।",
      navigate: "नेविगेशन",
      services: "सेवाएँ",
      contact: "संपर्क",
      closing: "सुरक्षित सफ़र, यादगार पल।",
      rights: "सर्वाधिकार सुरक्षित।",
      phonePending: "फ़ोन नंबर जोड़ा जाएगा",
      whatsappPending: "WhatsApp नंबर जोड़ा जाएगा",
      addressPending: "पता जोड़ा जाएगा",
      emailPending: "ईमेल जोड़ा जाएगा",
      whatsappHello: "नमस्ते Ramna Travels, मैं एक सफ़र के बारे में पूछताछ करना चाहता/चाहती हूँ।",
    },
  },
};
