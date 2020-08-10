import chroma from "chroma-js";
import {ComponentType, Dispatch, SetStateAction} from "react";

export const isOdd = (n: number): boolean => n % 2 === 1;
export const isEven = (n: number): boolean => n % 2 === 0;

export const makeArray = <T>(length: number, value: T | ((i: number) => T)): T[] => {
    return [...new Array(length)].map((_, i) => resolveProp(value, i));
};

export const makeRange = (length: number): number[] => {
    return makeArray(length, i => i );
};

export const randomHexes = (count: number): string[] => {
    return makeArray(count, () => chroma.random().hex());
}

export type Unpack<T> = T extends Array<infer U> ? U : T;

export const replaceIndex = <T extends any[]>(array: T, i: number, value: Unpack<T>): T => {
    return Object.assign([...array], {[i]: value}) as T;
};

export const ifNotNull = <T, R>(value: T | null, replacement: R): T | R => {
    return value === null ? replacement : value;
}

export const ifDefined = <T, R>(value: T | undefined, replacement: R): T | R => {
    return value === undefined ? replacement : value;
}

export type Generate<T, A> = ((args: A) => T)

export type MaybeGenerate<T, A> = T | ((args: A) => T)

export type GeneratorArgs<T extends MaybeGenerate<any, any>> = T extends MaybeGenerate<any, infer A> ? A : never

export type GeneratorType<T extends MaybeGenerate<any, any>> = T extends MaybeGenerate<infer A, any> ? A : never

export const resolveProp = <T extends MaybeGenerate<any, any>>(prop: T, args: GeneratorArgs<T>): GeneratorType<T> => {
    return typeof prop === "function" ? prop(args) : prop;
}

export type PropsType<T> = T extends ComponentType<infer P> ? P : never;

export type UseStateTuple<S> = [S, Dispatch<SetStateAction<S>>];

export const randomInt = (max: number, min: number = 0): number => {
    return Math.floor( Math.random() * (max - min) ) + min;
}

/**
 * discard the remainder to return a whole number
 */
export const intDivision = (numerator: number, denominator: number): number => {
    return  Math.floor(numerator / denominator)
}

export const last = <T extends any[]>( array: T ): Unpack<T> => {
    return array[array.length - 1];
}
