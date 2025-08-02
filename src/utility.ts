export function joinIfPossible<T extends string>(a: Multipliable<T>): string {
    if (Array.isArray(a))
        return a.join(" ");
    else
        return a;
}