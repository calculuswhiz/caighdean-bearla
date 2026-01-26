import { cleanHeadersAndMakeToC } from "./tableOfContents";
import translations from "../translation/json/translations.json";
import { EasyDOM } from "./EasyDOM";

const docLang: keyof typeof translations["tableOfContents"]
  = location.href.match(/-(\w+)\.html/)?.[1] as keyof typeof translations["tableOfContents"]
  ?? 'en';

cleanHeadersAndMakeToC(docLang);

EasyDOM.querySelector("#menu-link")?.setText(translations.menu[docLang]);

// Give tables ids
const allTables = document.querySelectorAll<HTMLTableElement>("table");
for (const table of allTables) {
  const captionId = table.querySelector("caption > strong");
  if (captionId)
    table.id = captionId.textContent?.replace(" ", "").toLowerCase() ?? "";
}

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