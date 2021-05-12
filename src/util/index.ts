export const makeRange = (length: number): number[] => {
    return Array.from({length}, (_, i) => i );
};

export type MaybeGenerate<T, A> = T | ((args: A) => T)

export type GeneratorArgs<T extends MaybeGenerate<any, any>> = T extends MaybeGenerate<any, infer A> ? A : never

export type GeneratorType<T extends MaybeGenerate<any, any>> = T extends MaybeGenerate<infer A, any> ? A : never

export const resolveProp = <T extends MaybeGenerate<any, any>>(prop: T, args: GeneratorArgs<T>): GeneratorType<T> => {
    return typeof prop === "function" ? prop(args) : prop;
}