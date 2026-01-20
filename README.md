# caighdean-bearla

Probably not the best repo name, but we can always rename it later.

Another shot at an unofficial translation project of **Gramadach na Gaeilge - An Caighdeán Oifigiúil** (2017 edition)

- Source code tracked at https://github.com/calculuswhiz/caighdean-bearla.
- Current translation can be viewed at at https://calculuswhiz.github.io/caighdean-bearla/.

I found a translation effort [here](https://caighdean.home.blog/), but it seems to have not been updated since 2019. There was an attempt to put it on GitHub, but according to the blog author, it had to be taken down due to a security flaw.

This project will hopefully be a way to get the ball rolling again with multiple collaborators (if needed). The document is sourced from the [Oireachtas website](https://data.oireachtas.ie/ie/oireachtas/caighdeanOifigiul/2017/2017-08-03_an-caighdean-oifigiuil-2017_ga.pdf) (PDF).

# How it works

As rightfully noted by David there are a lot of tables in the _Caighdeán_, among other complex formatting. To facilitate the translation project, the translation aspect should be abstracted away from the formatting markup as much as possible.

When this was first started, I used React for layout, but quickly found that this was extremely cumbersome. There was just too much representational overhead for the amount of text being rendered. The learning curve may also be a deterrent for those coming in with no background in web programming.

The best compromise I have found for this purpose is using AsciiDoc (to html via [AsciiDoctor.js](https://docs.asciidoctor.org/)). While it does have certain shortcomings (tables are still somewhat inconvenient to work with), I have found that it does minimize the amount of work needed to do the majority of the layout tasks. It is also more powerful than standard markdown languages.

## Tech stack

For those interested, the following base will be used:

- Tailwind for CSS
- Vite for bundling
- AsciiDoctor.js for markup rendering.
- Various node.js scripts for quicker text processing (index+layout)
- If heavy-duty application development is required beyond document generation,
we will bring in React, but currently we are not actively using it, despite any project dependencies.

## Using AsciiDoc

In the **translation** folder, each chapter has a main **.adoc** file and an **attributes.adoc** file. Outside, there is also a **CommonAttributes.adoc** file that holds very common text. The attributes are referenced in the main file. The processing script merges the two files, so we don't have to worry about using AsciiDoctor's macro system. The rendered HTML is then loaded to the page.

Notes:
- The attributes names have an English and Irish version, suffixed with `_en` and `_ga` respectively.
- For attributes that reference other attributes, prefix the attribute with `nopass-`.
  - To reference another attributes, leave out the language suffix in the reference. The preprocessor scrubs these.

### Table standardization

The base Asciidoc language is incapable of rendering any of the more complex tables without significant infrastructure programming (techincal debt). As a result if a table is anything more complex than having a single header row, it should be rendered using direct html injection.

```adoc
[subs=attributes,replacements]
++++
<table class="chapter-7">
// etc.
++++
```

If a table has multiple sub-tables (e.g. 2A), it shall be grouped as one table. The tables will both be contained in the `tbody`, including the header:

```html
<table>
  <!-- ... -->
  <tbody>
    <tr>
      <td>
        <!-- Sub-table here -->
      </td>
    </tr>
  </tbody>
</table>
```

# Contributing

Please create a branch and submit a pull request to make changes, or a new [issue](https://github.com/calculuswhiz/caighdean-bearla/issues). Just make sure it's easy to extract text from.

- Translations are stored in **translation**.
  - Organized by Chapter
  - Structure held by ChapterXX.adoc
  - Translations held in attributes.adoc

# Roadmap

See the [project page](https://github.com/users/calculuswhiz/projects/2/views/1) for the roadmap.

### Testing your changes

If you have the repo cloned:

```bash
npm i
npm run dev
```

Visit the localhost link.

To update the documents:

```bash
npm run generate-docs
```

# Translation notes
- **US or UK spelling?** - I personally do not care which one the final product uses, but as I am from the US, I will be using spelling for the parts I do. Depending on what people may want, we can change this later. Some UK spellings from chapter 1 still remain to be reconciled.

- **"Case"** - The phrase "i gcás" literally means "in case." Normally, this is a fine translation. However, Irish is a language with several grammatical "cases" as well. In order to avoid ambiguity, I will elect to translate this as "when" or avoid the word "case" altogether if there is a perceived risk of ambiguity in a given context.

- **Machine Translation** - Machine translation (usually Google Translate) is used extensively to assist with the translation. These are to be vetted with caution.

- **Generative AI Assistance** - Generative AI is only permitted to translate words and idioms not found in available dictionaries, and even then, it is to be carefully scrutinized in relation to its context. It will not be used to translate very large amounts of text (more than one translation unit in the .adoc files.)

  - **Amendment 1** - GitHub Copilot (backed by GPT) has some surprisingly competent translations in its code completion, with comparable (slightly better on average) results to Google Translate. Like GT, it is prone to errors, so use with caution and QC every line.

- **Sample Boxes** - The gray boxes that show examples will generally be more literally translated to highlight Irish Grammar points (with some attempt to bold corresponding words). If the correspondence does not help, no words may be bolded. If the translation does not serve for this, it may be omitted.

- **"Pronominal"** - FGB distinguishes between "pronoun" (forainm) and "pronominal" (forainmneach). This translation will strive to keep this distinction.

## Abbreviations and sources
Some of these may appear in annotations and comments in the asciidoc code.
- GT - Google Translate
- FGB - Foclóir Gaeilge-Béarla, Ó Dónaill, 1977
- Other sources may be mentioned inline directly

# Team and Acknowledgements

- First, all credits of the advisory staff and publishers can be viewed in the document itself. It is a part of the translated document.
- **David C Walls** - for getting the ball rolling back in 2019
- **Zachary Bian** - current repository maintainer, translator, programmer
