# caighdean-i18n

Web-reflow and internationalization of **Gramadach na Gaeilge - An Caighdeán Oifigiúil** (2017 edition)

- Source code tracked at https://github.com/calculuswhiz/caighdean-i18n.
- Current translation can be viewed at at https://calculuswhiz.github.io/caighdean-i18n/.

This project started life as an English translation, but it was extended into a framework for making the document web-accessible and translatable into other languages.

Early translations were based on [this effort](https://caighdean.home.blog/) to translate into English, but it seems to have not been updated since 2019. There was an attempt to put it on GitHub, but according to the blog author, it had to be taken down due to a security flaw.

This project will hopefully be a way to get the ball rolling again with multiple collaborators (if needed). The document is sourced from the [Oireachtas website](https://data.oireachtas.ie/ie/oireachtas/caighdeanOifigiul/2017/2017-08-03_an-caighdean-oifigiuil-2017_ga.pdf) (PDF).

# Why web?

- HTML is much easier to process as data and rich text than PDF. The translation files were painstakingly copied into a text file, line by line, with manual formatting applied. HTML should not have this issue.
- HTML allows for better semantics for people using screen readers (accessibility).
- Internal linking and navigation is much easier to do.

# Why translate?

Often the foreign learners of languages will start their journey into the language by using language learning software. This software very often does not explain any grammar rules and elects instead to just show examples. While this approach may work for eventually, for people with a working understanding of grammar, it is much more efficient to learn the rules explicitly rather than to learn by failure. For Irish, this is especially frustrating.

For example, Duolingo Irish:
- Does not mention noun gender and declension
- Does not explain initial mutations and when they're used
- Fails to drill prepositional pronouns in a systematic way, hindering memorization
- Does not explain compass/direction adverbs (to/from/at)
- Contains pronunciation/audio inconsistencies
- Has a small vocabulary pool even by the end
- Does not signpost irregular verb conjugations

The translation project's goal is to serve as a reference for foreign learners of Irish to understand how the language works, as standardized by the Irish government. It is not the project's goal to serve as a comprehensive Irish learner's textbook as that was never the goal of the original Standard.

# How it works

As rightfully noted by David there are a lot of tables in the _Caighdeán_, among other complex formatting. To facilitate the translation project, the translation aspect should be abstracted away from the formatting markup as much as possible.

## Tech stack

For those interested, the following base will be used:

- Tailwind for CSS
- Vite for bundling
- AsciiDoctor.js for markup rendering.
- Various node.js scripts for quicker text processing (index+layout)
- If heavy-duty application development is required beyond document generation, we will bring in React, but currently we are not actively using it, despite any project dependencies.

## Using AsciiDoc

In the **translation** folder, each chapter has a main **.adoc** file and an **attributes.adoc** file. Outside, there is also a **CommonAttributes.adoc** file that holds very common text. The attributes are referenced in the main file. The processing script merges the two files, so we don't have to worry about using AsciiDoctor's macro system. The rendered HTML is then loaded to the page.

Notes:
- The attributes names have a version for each language, suffixed with `_en` and `_ga` respectively.
- For attributes that reference other attributes, prefix the attribute with `nopass-`.
  - To reference another attributes, leave out the language suffix in the reference. The preprocessor scrubs these.

### Table standardization

The base Asciidoc language is incapable of rendering any of the more complex tables without significant infrastructure programming (technical debt). As a result if a table is anything more complex than having a single header row, it should be rendered using direct html injection.

```adoc
[subs="attributes,replacements,macros"]
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

Please create a branch and submit a pull request to make changes, or a new [issue](https://github.com/calculuswhiz/caighdean-i18n/issues). Just make sure it's easy to extract text from.

- Translations are stored in **translation**.
  - Organized by Chapter
  - Structure held by ChapterXX.adoc. This contains the master layout for the chapter. Control the language with the `isGa` attribute passed in with node script.
  - Translations held in attributes.adoc.

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
- **US or UK spelling?** - Currently, the English translation uses US spelling as I am from the US. If this project gains any traction, a separate translation set shall be created for en_GB.

- **Machine Translation** - Machine translation (usually Google Translate/Copilot GPT autocomplete) is used extensively to assist with the translation. These are to be vetted with caution due to hallucination potential.

- **Generative AI Assistance** - After much trial, Copilot/GPT autocmplete has proven to get fairly decent results on average, if for no other reason than it generates easy translations quickly. Of course, it will make hallucinatory mistakes, especially on specific grammar terms, so it is not to be used without caution.

- **Sample Boxes** - The gray boxes that show examples will generally be more literally translated to highlight Irish Grammar points (with some attempt to bold corresponding words). If the correspondence does not help, no words may be bolded. If the translation does not serve for this, it may be omitted.

## Specific terms

- **"Case"** - The phrase "i gcás" literally means "in case." Normally, this is a fine translation. However, Irish is a language with several grammatical "cases" as well. In order to avoid ambiguity, the translation will elect to avoid the word "case" altogether unless the grammatical case is meant.

- **"Pronominal"** - FGB distinguishes between "pronoun" (forainm) and "pronominal" (forainmneach). This translation will strive to keep this distinction.

- **Grammatical Numbers** - It is usually not necessary in English to include the word "number" after "singular" or "plural" to denote the grammatical number. It can be omitted.

- **Déantar cumasc** - Lit. "Mixture/merge/fusion is done" will be translated as "composed", based on the [linguistic compound](https://en.wikipedia.org/wiki/Compound_(linguistics)). See https://www.tearma.ie/id/3473189/.

- **Caol** - Slender (letter)

- **maoluimir** - A cardinal number with no noun following it. This is too long, so we term it "bare number."

- **Names**
  - Names of people, if given in Irish, shall be preserved with accents, but initial mutations dropped.
  - Names of places, if they have a common English name, shall be translated
  - Abbreviations shall be translated if a common English translation for the noun exists. E.g. RTÉ will not be translated, but **SAM** becomes **USA**.

- **athrú an ghinidigh**
  - This describes what happens when a nominative is changed to a genitive, for example, in a verbal noun. This will be translated as **genitive change**. Discussed further in ch 3.

## Abbreviations and sources
Some of these may appear in annotations and comments in the Asciidoc code.
- GT - Google Translate
- FGB - Foclóir Gaeilge-Béarla, Ó Dónaill, 1977
- Other sources may be mentioned inline directly

# Team and Acknowledgements

- First, all credits of the advisory staff and publishers can be viewed in the document itself. It is a part of the translated document.
- **David C Walls** - for getting the ball rolling back in 2019
- **Zachary Bian** - current repository maintainer, translator, programmer.
