import Asciidoctor from "asciidoctor";
import path from "path";

const asciidoctor = Asciidoctor();

function convertAtPath(filePath, devMode, isGa = false) {
  return asciidoctor.convertFile(filePath, {
    base_dir: './translation/Chapter6/',
    safe: 'unsafe',
    attributes: {
      rootRef: devMode ? "/public/" : "/caighdean-i18n/",
      idprefix: "sec_",
      // If the isGa attribute is set, we are generating the Irish version
      isGa: isGa ? "1" : undefined,
    }
  });
}

(() => {
  const converted = convertAtPath(
    "./translation/Chapter6/Chapter6.adoc"
  , false, false);

  console.log(converted);
})();