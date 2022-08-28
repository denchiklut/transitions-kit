export const isNumber = (value: unknown): value is number => !isNaN(parseFloat(value as string))
