# caighdean-bearla

Probably not the best repo name, but we can always rename it later.

Another shot at an unofficial translation project of "Gramadach na Gaeilge - An Caighdeán Oifigiúil" (2017 edition)

- Tracked at https://github.com/calculuswhiz/caighdean-bearla.
- Webapp at https://calculuswhiz.github.io/caighdean-bearla/.

I found a translation effort [here](https://caighdean.home.blog/), but it seems to have not been updated since 2019. There was an attempt to put it on GitHub, but according to the blog author, it had to be taken down due to a security flaw.

This project will hopefully be a way to get the ball rolling again with multiple collaborators. The document is sourced from https://data.oireachtas.ie/ie/oireachtas/caighdeanOifigiul/2017/2017-08-03_an-caighdean-oifigiuil-2017_ga.pdf.

# How it works

As rightfully noted by David there are a lot of tables in the _Caighdeán_, among other complex formatting. To facilitate the translation project, the translation aspect should be abstracted away from the formatting markup as much as possible.

The best compromise I have found for this purpose is using AsciiDoc (to html via [AsciiDoctor.js](https://docs.asciidoctor.org/)). While it does have certain shortcomings (tables are still somewhat inconvenient to work with), I have found that it does minimize the amount of work needed to do the majority of the layout tasks. It is also more powerful than standard markdown languages.

When this was first started, I used React for layout, but quickly found that this was extremely cumbersome. There was just too much representational overhead for the amount of text being rendered. The learning curve may also be a deterrent for those coming in with no background in web programming.

## Using AsciiDoc

In the **translation** folder, each chapter has a main **.adoc** file and an **attributes.adoc** file. Outside, there is also a **CommonAttributes.adoc** file that holds very common text. The attributes are referenced in the main file. Each chapter has a preprocessor script that merges the two files, so we don't have to worry about using AsciiDoctor's macro system. The rendered HTML is then loaded to the page.

Notes:
- The attributes names have an English and Irish version, suffixed with `_en` and `_ga` respectively.
- For attributes that reference other attributes, prefix the attribute with `nopass-`.
- To reference another attributes, leave out the language suffix in the reference. The preprocessor scrubs these.

### Table standardization

This is still a work in progress, and we will have to revisit chapters 1 and 2 for consistency. However, going forward, we shall handle complex tables as follows:

- If a table has multiple sub-tables (e.g. 2A), it shall be grouped as one table. The tables will both be contained in the `tbody`, including the header
- Do not use the auto-header. It simply does not handle enough cases to be useful consistently. Instead, the add the class `.table-header` to one of the header cells for a primary header, and `.sub-header` to the secondary headers. More may be added later. In any case, a utility script will extract these at runtime and place them in the `thead`, where they belong.

## Tech stack

For those interested, the following base will be used:

- React (TSX) for web-app interaction
- Tailwind for CSS
- Vite for bundling
- AsciiDoctor.js for markup rendering.

## Contributing

Please create a branch and submit a pull request to make changes, or a new [issue](https://github.com/calculuswhiz/caighdean-bearla/issues). Just make sure it's easy to extract text from.

- Translations are stored in **translation**.
- UI components are found in **src/Components/**.
- Chapter layouts are stored in **src/Components/Chapters**.

### Roadmap

See the [project page](https://github.com/users/calculuswhiz/projects/2/views/1) for the roadmap. The general workflow is:

- Index
- Layout
- Translate

### Testing your changes

If you have the repo cloned:

```bash
npm i
npm run dev
```

Visit the localhost link.

## Translation notes
- **US or UK?** I personally do not care which one the final product uses, but as I am from the US, I will be using spelling for the parts I do. Depending on what people may want, we can change this later. Some UK spellings from chapter 1 still remain to be reconciled.
- **"Case"** The phrase "i gcás" literally means "in case." Normally, this is a fine translation. However, Irish is a language with several grammatical "cases" as well. In order to avoid ambiguity, I will elect to translate this "when" if there is a perceived risk of ambiguity in a given context.
- **Machine Translation** Machine translation (usually Google Translate) is used extensively to assist with the translation. These are to be vetted with caution.
- **Generative AI Assistance** Generative AI is only permitted to translate words and idioms not found in available dictionaries, and even then, it is to be carefully scrutinized in relation to its context. It is not to be used to translate anything at the sentence level or beyond.
- **Sample Boxes** The gray boxes that show examples will generally be more literally translated to highlight Irish Grammar points (with some attempt to bold corresponding words). If the correspondence does not help, no words may be bolded. If the translation does not serve for this, it may be omitted.

### Abbreviations and sources
Some of these may appear in annotations and comments in the asciidoc code.
- GT - Google Translate
- FGB - Foclóir Gaeilge-Béarla, Ó Dónaill, 1977
