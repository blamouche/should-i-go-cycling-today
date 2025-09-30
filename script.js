(() => {
  const phrases = {
    fr: {
      lang: "fr",
      dir: "ltr",
      texts: [
        "Oui. Ta flemme n’a pas besoin d’entraînement, tes jambes si !",
        "Oui ! Tes cuisses veulent du vent, pas du canapé.",
        "Oui. Le vélo n’attend pas, et la pizza sera meilleure après.",
        "Oui ! Ton futur toi te remerciera, ton canapé t’oubliera.",
        "Oui ! Les watts ne se font pas tout seuls.",
        "Oui. Si tu hésites, c’est que tu sais déjà la réponse.",
        "Oui ! Plus tu transpires aujourd’hui, plus tu brilles demain.",
        "Oui. La pluie sèche, la fierté reste.",
        "Oui. Les KOM ne se gagnent pas dans le salon.",
        "Oui. Un café avant, une bière après.",
        "Oui ! Ta flemme est lourde, ton vélo est léger.",
        "Oui. Chaque sortie est une victoire sur ton canapé.",
        "Oui ! Tes mollets veulent voir du paysage.",
        "Oui. Le canapé ne t’apportera pas de Strava kudos.",
        "Oui. La sueur d’aujourd’hui, c’est la gloire de demain.",
        "Oui ! Tu ne regretteras jamais d’être sorti, mais souvent de ne pas l’avoir fait.",
        "Oui. Les watts, ça ne pousse pas dans le frigo.",
        "Oui ! C’est en roulant qu’on devient rouleur.",
        "Oui ! Les fesses sur la selle, c’est mieux que les fesses sur le canapé."
      ]
    },
    en: {
      lang: "en",
      dir: "ltr",
      texts: [
        "Yes. Your laziness doesn’t need training, your legs do!",
        "Yes! Your thighs want wind, not the couch.",
        "Yes. The bike won’t wait, and the pizza will taste better after.",
        "Yes! Your future self will thank you; your couch will forget you.",
        "Yes! Watts don’t make themselves.",
        "Yes. If you’re hesitating, you already know the answer.",
        "Yes! The more you sweat today, the more you shine tomorrow.",
        "Yes. Rain dries; pride stays.",
        "Yes. KOMs aren’t won in the living room.",
        "Yes. A coffee before, a beer after.",
        "Yes! Your laziness is heavy; your bike is light.",
        "Yes. Every ride is a victory over your couch.",
        "Yes! Your calves want to see the scenery.",
        "Yes. The couch won’t give you Strava kudos.",
        "Yes. Today’s sweat is tomorrow’s glory.",
        "Yes! You’ll never regret going out, but often regret not doing it.",
        "Yes. Watts don’t grow in the fridge.",
        "Yes! You become a rider by riding.",
        "Yes! Your butt belongs on the saddle, not the couch."
      ]
    },
    zh: {
      lang: "zh",
      dir: "ltr",
      texts: [
        "是的。懒惰不用训练，你的双腿需要！",
        "是的！让大腿去迎风，而不是粘在沙发上。",
        "是的。自行车不会等你，披萨之后会更香。",
        "是的！未来的你会感谢你，沙发会把你忘掉。",
        "是的！瓦特不会自己出现。",
        "是的。如果你犹豫，说明答案早就有了。",
        "是的！今天多流汗，明天更闪光。",
        "是的。雨会干，骄傲会留下。",
        "是的。KOM 不会在客厅里拿到。",
        "是的。先来一杯咖啡，再来一杯啤酒。",
        "是的！你的惰性很重，你的自行车很轻。",
        "是的。每一次骑行都是战胜沙发。",
        "是的！让小腿去看风景。",
        "是的。沙发给不了你 Strava 的赞。",
        "是的。今天的汗水就是明天的荣耀。",
        "是的！你从不后悔出门，却常后悔没出门。",
        "是的。瓦特不会在冰箱里长出来。",
        "是的！骑得越多越像骑手。",
        "是的！屁股应该在车座上，不该在沙发上。"
      ]
    },
    hi: {
      lang: "hi",
      dir: "ltr",
      texts: [
        "हाँ। आलस को अभ्यास की ज़रूरत नहीं, तुम्हारी टांगों को है!",
        "हाँ! तुम्हारी जाँघें हवा चाहती हैं, सोफ़ा नहीं।",
        "हाँ। साइकिल इंतज़ार नहीं करती, और पिज़्ज़ा बाद में ज़्यादा स्वादिष्ट लगेगा।",
        "हाँ! तुम्हारा भविष्य का रूप तुम्हें धन्यवाद देगा, तुम्हारा सोफ़ा तुम्हें भूल जाएगा।",
        "हाँ! वॉट्स खुद नहीं बनते।",
        "हाँ। अगर तुम हिचकिचा रहे हो, तो जवाब पहले से पता है।",
        "हाँ! आज जितना पसीना, कल उतनी चमक।",
        "हाँ। बारिश सूख जाती है, गर्व बना रहता है।",
        "हाँ। KOM लिविंग रूम में नहीं जीते जाते।",
        "हाँ। पहले कॉफ़ी, बाद में बीयर।",
        "हाँ! तुम्हारी सुस्ती भारी है, तुम्हारी साइकिल हल्की है।",
        "हाँ। हर सवारी सोफ़े पर जीत है।",
        "हाँ! तुम्हारी पिंडलियाँ नज़ारे देखना चाहती हैं।",
        "हाँ। सोफ़ा तुम्हें स्ट्रावा कूडोज़ नहीं देगा।",
        "हाँ। आज का पसीना, कल की महिमा है।",
        "हाँ! बाहर जाने का पछतावा नहीं होता, न जाने का ज़रूर होता है।",
        "हाँ। वॉट्स फ़्रिज में नहीं उगते।",
        "हाँ! सवार वही बनता है जो सवारी करता है।",
        "हाँ! काठी पर बैठना सोफ़े पर बैठने से बेहतर है।"
      ]
    },
    es: {
      lang: "es",
      dir: "ltr",
      texts: [
        "Sí. Tu pereza no necesita entrenamiento, ¡tus piernas sí!",
        "¡Sí! Tus muslos quieren viento, no sofá.",
        "Sí. La bici no espera, y la pizza sabrá mejor después.",
        "¡Sí! Tu yo del futuro te lo agradecerá; tu sofá te olvidará.",
        "¡Sí! Los vatios no se hacen solos.",
        "Sí. Si dudas, es que ya conoces la respuesta.",
        "¡Sí! Cuanto más sudas hoy, más brillas mañana.",
        "Sí. La lluvia se seca, el orgullo permanece.",
        "Sí. Los KOM no se ganan en el salón.",
        "Sí. Un café antes, una cerveza después.",
        "¡Sí! Tu pereza pesa, tu bici es ligera.",
        "Sí. Cada salida es una victoria sobre el sofá.",
        "¡Sí! Tus gemelos quieren ver paisaje.",
        "Sí. El sofá no te dará kudos en Strava.",
        "Sí. El sudor de hoy es la gloria de mañana.",
        "¡Sí! Nunca te arrepentirás de salir, pero sí de no hacerlo.",
        "Sí. Los vatios no crecen en el frigorífico.",
        "¡Sí! Solo rodando te haces rodador.",
        "¡Sí! El sillín es mejor asiento que el sofá."
      ]
    },
    ar: {
      lang: "ar",
      dir: "rtl",
      texts: [
        "نعم. كسلك لا يحتاج إلى تدريب، لكن ساقيك تحتاجان!",
        "نعم! فخذاك تريدان الهواء لا الأريكة.",
        "نعم. الدراجة لن تنتظر، والبيتزا ستكون أطيب بعد ذلك.",
        "نعم! ذاتك المستقبلية ستشكرك، وأريكتك ستنساك.",
        "نعم! الواطات لا تصنع نفسها.",
        "نعم. إن كنت مترددًا، فأنت تعرف الجواب مسبقًا.",
        "نعم! كلما تعرّقت اليوم أكثر، لمعْت غدًا أكثر.",
        "نعم. المطر يجف، والفخر يبقى.",
        "نعم. ألقاب KOM لا تُحصد في غرفة المعيشة.",
        "نعم. قهوة قبلًا، وبيرة بعدًا.",
        "نعم! كسلك ثقيل، ودراجتك خفيفة.",
        "نعم. كل خروجة انتصار على الأريكة.",
        "نعم! عضلات ساقيك تريد رؤية المناظر.",
        "نعم. الأريكة لن تمنحك إعجابات سترَافا.",
        "نعم. عرق اليوم هو مجد الغد.",
        "نعم! لن تندم على الخروج، لكنك ستندم كثيرًا على البقاء.",
        "نعم. الواطات لا تنمو في الثلاجة.",
        "نعم! لا تصبح دراجًا إلا بالركوب.",
        "نعم! الجلوس على السرج أفضل من الأريكة."
      ]
    },
    bn: {
      lang: "bn",
      dir: "ltr",
      texts: [
        "হ্যাঁ। আলস্যের প্রশিক্ষণ লাগে না, তোমার পায়ের লাগে!",
        "হ্যাঁ! তোমার উরু হাওয়া চায়, সোফা নয়।",
        "হ্যাঁ। সাইকেল অপেক্ষা করে না, আর পিৎজা পরে আরও মজা লাগবে।",
        "হ্যাঁ! ভবিষ্যতের তুমি ধন্যবাদ দেবে, তোমার সোফা তোমাকে ভুলে যাবে।",
        "হ্যাঁ! ওয়াট নিজে নিজে আসে না।",
        "হ্যাঁ। তুমি যদি দ্বিধায় থাকো, তবে উত্তর আগেই জানা।",
        "হ্যাঁ! আজ যত ঘাম, কাল তত জৌলুস।",
        "হ্যাঁ। বৃষ্টি শুকিয়ে যায়, গর্ব থেকে যায়।",
        "হ্যাঁ। KOM লিভিং রুমে জেতা যায় না।",
        "হ্যাঁ। আগে এক কাপ কফি, পরে এক গ্লাস বিয়ার।",
        "হ্যাঁ! তোমার আলস্য ভারী, তোমার সাইকেল হালকা।",
        "হ্যাঁ। প্রতিটি রাইড সোফার ওপর জয়।",
        "হ্যাঁ! তোমার পিণ্ডলি দৃশ্য দেখতে চায়।",
        "হ্যাঁ। সোফা তোমাকে স্ট্রাভার কুডোস দেবে না।",
        "হ্যাঁ। আজকের ঘামই আগামী দিনের গৌরব।",
        "হ্যাঁ! বেরিয়ে যাওয়ার জন্য কখনও অনুতাপ হবে না, না যাওয়ার জন্য হবে।",
        "হ্যাঁ। ওয়াট ফ্রিজে জন্মায় না।",
        "হ্যাঁ! চালালে তবেই রাইডার হওয়া যায়।",
        "হ্যাঁ! স্যাডলে বসা সোফায় বসার চেয়ে ভাল।"
      ]
    },
    pt: {
      lang: "pt",
      dir: "ltr",
      texts: [
        "Sim. A tua preguiça não precisa de treino, as tuas pernas sim!",
        "Sim! As tuas coxas querem vento, não sofá.",
        "Sim. A bicicleta não espera, e a pizza será melhor depois.",
        "Sim! O teu futuro vai agradecer, o teu sofá vai esquecer-te.",
        "Sim! Os watts não se fazem sozinhos.",
        "Sim. Se estás a hesitar, é porque já sabes a resposta.",
        "Sim! Quanto mais suares hoje, mais brilhas amanhã.",
        "Sim. A chuva seca, o orgulho fica.",
        "Sim. Os KOM não se ganham na sala.",
        "Sim. Um café antes, uma cerveja depois.",
        "Sim! A tua preguiça é pesada, a tua bicicleta é leve.",
        "Sim. Cada saída é uma vitória sobre o sofá.",
        "Sim! As tuas panturrilhas querem ver paisagem.",
        "Sim. O sofá não te dá kudos no Strava.",
        "Sim. O suor de hoje é a glória de amanhã.",
        "Sim! Nunca te vais arrepender de sair, mas muitas vezes de não o fazer.",
        "Sim. Os watts não crescem no frigorífico.",
        "Sim! É pedalando que se vira ciclista.",
        "Sim! Sela é melhor que sofá."
      ]
    },
    ru: {
      lang: "ru",
      dir: "ltr",
      texts: [
        "Да. Лени не нужно тренироваться, а твоим ногам нужно!",
        "Да! Твои бедра хотят ветра, а не дивана.",
        "Да. Велосипед ждать не будет, а пицца после будет вкуснее.",
        "Да! Будущий ты скажет спасибо, диван о тебе забудет.",
        "Да! Ватты сами не появляются.",
        "Да. Если сомневаешься, значит ответ уже знаешь.",
        "Да! Чем больше пота сегодня, тем больше сияния завтра.",
        "Да. Дождь высохнет, гордость останется.",
        "Да. KOM не выигрываются в гостиной.",
        "Да. Сначала кофе, потом пиво.",
        "Да! Твоя лень тяжела, твой велосипед легок.",
        "Да. Каждая поездка — победа над диваном.",
        "Да! Твои икры хотят увидеть пейзажи.",
        "Да. Диван не даст тебе kudos в Strava.",
        "Да. Сегодняшний пот — завтрашняя слава.",
        "Да! Ты никогда не пожалеешь, что вышел, но часто пожалеешь, что остался.",
        "Да. Ватты не растут в холодильнике.",
        "Да! Райдером становятся, когда крутят педали.",
        "Да! Седло лучше дивана."
      ]
    },
    ur: {
      lang: "ur",
      dir: "rtl",
      texts: [
        "ہاں۔ سستی کو مشق کی ضرورت نہیں، تمہاری ٹانگوں کو ہے!",
        "ہاں! تمہری رانیں ہوا چاہتی ہیں، صوفہ نہیں۔",
        "ہاں۔ سائیکل انتظار نہیں کرتی، اور پیزا بعد میں زیادہ لذیذ لگے گا۔",
        "ہاں! مستقبل کا تم تمہارا شکریہ ادا کرے گا، تمہارا صوفہ تمہیں بھول جائے گا۔",
        "ہاں! واٹ خود نہیں بنتے۔",
        "ہاں۔ اگر تم ہچکچا رہے ہو تو جواب پہلے سے معلوم ہے۔",
        "ہاں! آج جتنا پسینہ، کل اتنی چمک۔",
        "ہاں۔ بارش سوکھ جاتی ہے، فخر باقی رہتا ہے۔",
        "ہاں۔ KOM ڈرائنگ روم میں نہیں جیتے جاتے۔",
        "ہاں۔ پہلے کافی، بعد میں بیئر۔",
        "ہاں! تمہاری سستی بھاری ہے، تمہاری سائیکل ہلکی۔",
        "ہاں۔ ہر سواری صوفے پر فتح ہے۔",
        "ہاں! تمہاری پنڈلیاں منظر دیکھنا چاہتی ہیں۔",
        "ہاں۔ صوفہ تمہیں اسٹروا کے کڈوز نہیں دے گا۔",
        "ہاں۔ آج کا پسینہ، کل کی شان ہے۔",
        "ہاں! باہر جانے کا افسوس نہیں ہوتا، نہ جانے کا اکثر ہوتا ہے۔",
        "ہاں۔ واٹ فریج میں نہیں اگتے۔",
        "ہاں! سواری کر کے ہی سوار بنتے ہیں۔",
        "ہاں! زین پر بیٹھنا صوفے پر بیٹھنے سے بہتر ہے۔"
      ]
    }
  };

  const message = document.getElementById("message");
  if (!message) {
    return;
  }

  const preferredLocales = Array.isArray(navigator.languages) && navigator.languages.length
    ? navigator.languages
    : [navigator.language].filter(Boolean);

  let chosenKey = "en";

  for (const locale of preferredLocales) {
    if (!locale) {
      continue;
    }

    const normalized = locale.toLowerCase();
    const base = normalized.split("-")[0];

    if (phrases[normalized]) {
      chosenKey = normalized;
      break;
    }

    if (phrases[base]) {
      chosenKey = base;
      break;
    }
  }

  const chosen = phrases[chosenKey] ?? phrases.en;
  const index = Math.floor(Math.random() * chosen.texts.length);
  const text = chosen.texts[index];

  message.textContent = text;
  message.lang = chosen.lang;
  message.dir = chosen.dir;
  document.documentElement.lang = chosen.lang;
  document.documentElement.dir = chosen.dir;
})();
