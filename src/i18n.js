import i18n from "i18next";
import { initReactI18next } from 'react-i18next'
import global_en from './Languages/en/global.json'
import global_fa from './Languages/fa/global.json'


i18n.use(initReactI18next).init({
    interpolation: {escapeValue: false},
    lng: "en",
    resources:{
        en: {
            global: global_en
        },
        fa: {
            global: global_fa
        }
    }
})

export default i18n