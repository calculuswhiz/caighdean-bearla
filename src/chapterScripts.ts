import { generateTableOfContents } from "./tableOfContents";
import translations from "../translation/MainPage/translations.json";
import { EasyDOM } from "./EasyDOM";

const docLang: keyof typeof translations["tableOfContents"]
  = location.href.match(/-(.*)\.html/)?.[1] as keyof typeof translations["tableOfContents"]
  ?? 'en';

generateTableOfContents();

EasyDOM.querySelector("#menu-link")?.setText(translations.menu[docLang]);