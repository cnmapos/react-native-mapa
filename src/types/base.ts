/**
 * Make partial properties in T optional
 */
export type PartialPick<T, K extends keyof T> = {
    [P in K]?: T[P];
};
