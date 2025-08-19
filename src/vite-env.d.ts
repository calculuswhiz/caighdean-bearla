/// <reference types="vite/client" />

declare type Multipliable<T> = T | T[];

declare type Nullable<T> = T | null;

declare module '*.adoc' {
    const content: string;
    export default content;
}
