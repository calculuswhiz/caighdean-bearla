import type { SelectWritable } from "./metaTypes";

/**
* JQuery-free DOM manipulation with chaining.
* - Use the constructor when you already have an element bound to a variable.
* - Use {@link createElement} when you are creating a new Element.
* - Use {@link querySelector} or {@link querySelectorAll} when the element is created externally (e.g. HTML)
* - Use {@link fromHtml} when you are loading raw HTML string in (e.g. with fetch API)
*/
export class EasyDOM<TElement extends HTMLElement> {
  /** Lets you override this for JSDOM instead of browser environment */
  static document = globalThis.document;
  static HTMLElement = globalThis.HTMLElement;

  /** Provides access to the underlying element */
  element: TElement;

  /** Use this when constructing from an existing typed HTML element. */
  constructor(element: TElement) {
    this.element = element;

    if (EasyDOM.document == null)
      throw new Error("EasyDOM.document is not set. Are you in NodeJS without JSDOM?");
  }

  /** Analagous to {@link document.createElement} */
  static createElement<TElementName extends keyof HTMLElementTagNameMap>(tagName: TElementName) {
    return new EasyDOM(EasyDOM.document.createElement(tagName));
  }

  /** 
   * Analagous to {@link document.querySelector}.
   * @returns null if {@link document.querySelector} would return null
   */
  static querySelector<TElement extends HTMLElement>(selector: string) {
    const element = EasyDOM.document.querySelector<TElement>(selector);
    return element == null
      ? null
      : new EasyDOM(element);
  }

  /**
   * Analogous to {@link document.querySelectorAll}, except it returs the entire array.
   * @param selector DOM selector
   * @returns Array of elements that match against the query selectors.
   */
  static querySelectorAll<TElement extends HTMLElement>(selector: string) {
    const elements = EasyDOM.document.querySelectorAll<TElement>(selector);
    return [...elements].map(el => new EasyDOM(el));
  }

  /** Create a node defined by given string. If more than one child is contained, throws an error. */
  static fromHtml<TElement extends HTMLElement>(html: string) {
    const template = EasyDOM.document.createElement('template');
    // Removes UTF-8 BOM charactter
    template.innerHTML = html.trim();

    const numNodes = template.content.childNodes.length;
    if (numNodes !== 1)
      throw new Error(`Expected 1 child node, got ${numNodes}`);

    return new EasyDOM(template.content.firstChild as TElement);
  }

  /** 
   * Apply inline CSS
   * @param styles CSS styles in object format
   */
  style(styles: Partial<CSSStyleDeclaration>) {
    Object.assign(this.element.style, styles);
    return this;
  }

  /**
   * Apply HTML properties (this does not work for readonly properties).
   * In general this is better for type safety, but some attributes must be set via {@link setAttributes}
   * @param properties Attributes in object format
   */
  setProperties(properties: Partial<SelectWritable<TElement>>) {
    Object.assign(this.element, properties);
    return this;
  }

  /**
   * Apply HTML attributes. Not required to be readonly, but be aware. 
   * All attributes are strings, so type saety is less robust.
   * @param properties Attributes in object format
   */
  setAttributes(attributes: Partial<Record<keyof TElement, string>>) {
    for (const [key, value] of Object.entries(attributes))
      this.element.setAttribute(key, value);
    return this;
  }

  /**
   * Add to classList of element. Note: you must pass space-separated classes as individual arguments.
   * @param names New classes to add. Empty string will add nothing.
   */
  addClasses(...names: string[]) {
    if (names.length > 0 && names[0] !== '')
      this.element.classList.add(...names);
    return this;
  }

  /**
   * Remove from classList of element. Note: you must pass space-separated classes as individual arguments.
   * @param names Classes to remove (if they exist). Empty string and non-existent classes will add nothing.
   */
  removeClasses(...names: string[]) {
    // TODO Is this necessary to prevent errors?
    if (names.length > 0 && names[0] !== '')
      this.element.classList.add(...names);
    this.element.classList.remove(...names);
    return this;
  }

  /**
   * Append either a list of EasyDOM or a list of HTMLElement
   */
  append(...children: (HTMLElement | EasyDOM<HTMLElement>)[]) {
    for (const child of children) {
      this.element.append(
        child instanceof EasyDOM.HTMLElement
          ? child
          : child.element
      )
    }

    return this;
  }

  /** Prepend either a list of EasyDOM or a list of HTMLElement */
  prepend(...children: (HTMLElement | EasyDOM<HTMLElement>)[]) {
    for (const child of children) {
      this.element.prepend(
        child instanceof EasyDOM.HTMLElement
          ? child
          : child.element
      )
    }

    return this;
  }

  /**
   * Set textContent of element
   */
  setText(text: string) {
    this.element.textContent = text;
    return this;
  }

  /**
   * This lets you set whatever HTML you want. This is meant for loading raw HTML files.
   * If you're passing a string literal here, you're doing it wrong.
   */
  setHtml(htmlText: string) {
    this.element.innerHTML = htmlText;
    return this;
  }

  /**
   * Set the dataset key-value pairs specified. Use sparingly as this leads to bad type-safety.
   */
  setDataAttributes(o: Record<string, string>) {
    for (const [key, value] of Object.entries(o))
      this.element.dataset[key] = value;
    return this;
  }
}
