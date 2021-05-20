export const makeRange = (length: number): number[] =>
  Array.from({ length }, (_, i) => i);

export type MaybeGenerate<T, A> = T | ((args: A) => T);

export type GeneratorArgs<T> = T extends MaybeGenerate<unknown, infer A>
  ? A
  : never;

export type GeneratorType<T> = T extends MaybeGenerate<infer A, unknown>
  ? A
  : never;

export const resolveProp = <T extends MaybeGenerate<unknown, unknown>>(
  prop: T,
  args: GeneratorArgs<T>
): GeneratorType<T> => (typeof prop === "function" ? prop(args) : prop);
