import type { LanguageSelection } from "./translate";

export function joinIfPossible<T extends string>(a: Multipliable<T>): string {
    if (Array.isArray(a))
        return a.join(" ");
    else
        return a;
}

export function processAdocFileContents(contents: string, language: LanguageSelection) {
    return contents.replaceAll(new RegExp(`_${language}:`, 'g'), ':')
        // We want to pass by default as a lot of our text is marked up.
        // However, if we want to evaluate an attribute first, it cannot pass.
        // Allow cancelling by prefixing id with `nopass-`
        .replaceAll(/^:(?!nopass-)(.+?): (.*?)( \+ \\\s+.*$|$)/gm, ":$1: pass:q[$2$3]")
        .replaceAll('nopass-', '');
}