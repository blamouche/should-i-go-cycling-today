(() => {
  const translations = {
    en: { text: "YES", lang: "en" },
    zh: { text: "是", lang: "zh" },
    hi: { text: "हाँ", lang: "hi" },
    es: { text: "SÍ", lang: "es" },
    fr: { text: "OUI", lang: "fr" },
    ar: { text: "نعم", lang: "ar" },
    bn: { text: "হ্যাঁ", lang: "bn" },
    pt: { text: "SIM", lang: "pt" },
    ru: { text: "ДА", lang: "ru" },
    ur: { text: "جی ہاں", lang: "ur" }
  };

  const message = document.getElementById("message");
  if (!message) {
    return;
  }

  const preferredLocales = Array.isArray(navigator.languages) && navigator.languages.length
    ? navigator.languages
    : [navigator.language].filter(Boolean);

  const defaultTranslation = translations.en;
  let chosenTranslation = defaultTranslation;

  for (const locale of preferredLocales) {
    if (!locale) {
      continue;
    }

    const normalized = locale.toLowerCase();
    const base = normalized.split("-")[0];

    if (translations[normalized]) {
      chosenTranslation = translations[normalized];
      break;
    }

    if (translations[base]) {
      chosenTranslation = translations[base];
      break;
    }
  }

  message.textContent = chosenTranslation.text;
  message.lang = chosenTranslation.lang;
  document.documentElement.lang = chosenTranslation.lang;
})();
