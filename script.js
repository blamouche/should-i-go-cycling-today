(() => {
  const translations = {
    en: { text: "YES", lang: "en" },
    zh: { text: "是", lang: "zh" },
    hi: { text: "हाँ", lang: "hi" },
    es: { text: "SÍ", lang: "es" },
    fr: {
      text: [
        "Oui. Ta flemme n’a pas besoin d’entraînement, tes jambes si ! 🚴‍♂️",
        "Oui ! Tes cuisses veulent du vent, pas du canapé.",
        "Oui. Le vélo n’attend pas, et la pizza sera meilleure après.",
        "Oui ! Ton futur toi te remerciera, ton canapé t’oubliera.",
        "Oui. Chaque coup de pédale éloigne la flemme.",
        "Oui ! Les watts ne se font pas tout seuls.",
        "Oui. Si tu hésites, c’est que tu sais déjà la réponse.",
        "Oui ! Plus tu transpires aujourd’hui, plus tu brilles demain.",
        "Oui. La pluie sèche, la fierté reste.",
        "Oui ! Un jour de flemme, c’est un jour de jambes perdues.",
        "Oui. Les KOM ne se gagnent pas dans le salon.",
        "Oui ! Même ton vélo s’ennuie quand tu ne le sors pas.",
        "Oui. Un café avant, une bière après.",
        "Oui ! Ta flemme est lourde, ton vélo est léger.",
        "Oui. Chaque sortie est une victoire sur ton canapé.",
        "Oui ! Tes mollets veulent voir du paysage.",
        "Oui. Le canapé ne t’apportera pas de Strava kudos.",
        "Oui ! Chaque sortie, c’est une flemme en moins.",
        "Oui. La sueur d’aujourd’hui, c’est la gloire de demain.",
        "Oui ! Ton vélo a déjà mis son casque, il t’attend.",
        "Oui. Plus tu roules, plus tu rigoles.",
        "Oui ! Tu ne regretteras jamais d’être sorti, mais souvent de ne pas l’avoir fait.",
        "Oui. Les watts, ça ne pousse pas dans le frigo.",
        "Oui ! C’est en roulant qu’on devient rouleur.",
        "Oui. Même tes cuissards veulent voir la lumière.",
        "Oui ! Les fesses sur la selle, c’est mieux que les fesses sur le canapé.",
        "Oui. La route est belle, elle t’appelle.",
        "Oui ! Tes jambes n’aiment pas Netflix.",
        "Oui. Un pédalage vaut mieux qu’un soupir.",
        "Oui ! Sors maintenant, les KOM ne vont pas t’attendre."
      ],
      lang: "fr"
    },
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

  const text = Array.isArray(chosenTranslation.text)
    ? chosenTranslation.text[Math.floor(Math.random() * chosenTranslation.text.length)]
    : chosenTranslation.text;

  message.textContent = text;
  message.lang = chosenTranslation.lang;
  document.documentElement.lang = chosenTranslation.lang;
})();
