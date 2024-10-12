export const getSize = (value: string) => {
    return value === 'auto' ? value : `${value}px`
}