/* Imported with modifications from https://stackoverflow.com/a/79585386/ */

export type IfEquals<X, Y, A=X, B=never> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? A : B;

export type ShouldRecurse<T> =
  T extends (...args: unknown[]) => unknown ? false
  : T extends object ? true : false;

/** Select writable keys only. */
export type SelectWritable<T> = {
  [P in keyof T as (
    IfEquals<{ [Q in P]: T[P] }, { -readonly [Q in P]: T[P] }, P>
  )]: IfEquals<ShouldRecurse<T[P]>, true, SelectWritable<T[P]>, T[P]>
};

/** Select readonly keys only. */
export type SelectReadonly<T> = {
  [P in keyof T as (
    IfEquals<{ [Q in P]: T[P] }, { -readonly [Q in P]: T[P] }, never, P>
  )]: IfEquals<ShouldRecurse<T[P]>, true, SelectReadonly<T[P]>, T[P]>
};