import { Language } from "../../types/language";

interface UrlByLangInput {
  url: string;
  lang?: Language;
}

export const getUrlByLanguage = ({ url, lang = "en" }: UrlByLangInput) => {
  if (lang === "en") {
    return url;
  }
  return `/${lang}${url}`;
};
