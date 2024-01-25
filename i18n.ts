import de from "./i18n/de";
import en from "./i18n/en";
import fr from "./i18n/fr";

type I18nParams = {[key: string]: any};
type I18nFunction = {
  [K in keyof typeof en]: (params?: I18nParams) => string;
};

const i18n = Object.keys(en).reduce((acc, key) => {
  acc[key] = (params?: I18nParams) => {
    let translatedText = en[key].translate.german(de[key]).translate.french(fr[key]);
    if (params) {
      Object.keys(params).forEach((key) => translatedText = translatedText.replace(`{{${key}}}`, params[key]));
    }
    return translatedText;
  } 
  return acc;
}, {} as I18nFunction);

export default i18n;