import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ko from "./locales/ko/translate.json";
import jp from "./locales/jp/translate.json";

export default i18n
                .use(initReactI18next)
                .init({
                    resources: {
                        ko: { translation: ko },
                        jp: { translation: jp }
                    },
                    lng: "ko",
                    fallbackLng: "ko",
                    interpolation: { escapeValue: false }
                });