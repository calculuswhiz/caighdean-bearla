import { makeToC } from "./tableOfContents";
import translations from "../translation/json/translations.json";
import { EasyDOM } from "./EasyDOM";

const docLang: keyof typeof translations["tableOfContents"]
  = location.href.match(/-(\w+)\.html/)?.[1] as keyof typeof translations["tableOfContents"]
  ?? 'en';

makeToC(docLang);

EasyDOM.querySelector("#menu-link")?.setText(translations.menu[docLang]);

// Ensures that the hash link works after the DOM is fully loaded and scripts have run
if (location.hash) {
  const targetElement = document.querySelector<HTMLElement>(location.hash);
  targetElement?.scrollIntoView();
}

// Insert footer disclaimer
const footer = EasyDOM.querySelector("footer");
if (footer) {
  const disclaimerText = translations.footerDisclaimer[docLang];
  footer.setText(disclaimerText);
}