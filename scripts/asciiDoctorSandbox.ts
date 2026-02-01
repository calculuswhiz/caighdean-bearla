import Asciidoctor from "asciidoctor";
import fs from "fs/promises";
import path from "path";

const asciidoctor = Asciidoctor();

const doc = asciidoctor.loadFile("./translation/Chapter1/attributes.adoc");

console.log(doc.getAttributes());
