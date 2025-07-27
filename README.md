# caighdean-bearla
Another shot at an unofficial translation project of "An Caighdeán Oifigiúil 2017"

I found a translation effort [here](https://caighdean.home.blog/), but it seems to have not been updated since 2019. There was an attempt to put it on GitHub, but according to the blog author, it had to be taken down due to a security flaw.

This project will hopefully be a way to get the ball rolling again with multiple collaborators. The document is sourced from https://data.oireachtas.ie/ie/oireachtas/caighdeanOifigiul/2017/2017-08-03_an-caighdean-oifigiuil-2017_ga.pdf.

# How it works

As rightfully noted by David there are a lot of tables in the *Caighdeán*, among other complex formatting. To facilitate the translation project, the translation aspect should be abstracted away from the formatting markup as much as possible. For now, the line is drawn at anything more advanced than simple **bold** and *italic* markdown as it even suffers with nested listing formats.

The translations will be stored in JSON format, divided by chapter. Here is the schema
```
{
    // ID of text. E.g. "[Chapter]_[Section]_[Index]"
    [id]: { 
        "comments": string, // Comments from the contributors
        "ga": string, // Text to be translated
        "en": string // Translation. If null, no translation exists yet. If empty, mark as none needed.
    }
}
```

## ID formats

| Type | Format |
| - | - |
| Chapter Title | `ChapterXTitle` |
| Chapter Sections | `[Chapter].[Section]` | 
| Chapter Subsections | `[Chapter].[Section].[Subsection]` |
| Elements under sections | `[...Parent Path].[Element name]` |

The webpage will retrieve the data, then de-reference the corresponding id. If the translation does not exist, it will show up on the page as a TODO item.

## Tech stack

For those interested, the following base will be used:
- React (TSX) for rendering
- Tailwind for CSS
- Vite for bundling

For now, no markdown rendering, but may change later as the project grows.

## Contributing

Please create a branch and submit a pull request to make changes.

- Translations are stored in **translation**.
- UI components are found in **src/Components/**.
- Chapter layouts are stored in **src/Components/Chapters**.

### Testing your changes

If you have the repo cloned:

```bash
npm i
npm run dev
```

Click the localhost link.
