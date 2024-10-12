
export type LinkListPropsT = {
    items: ListItemT[]
}

export type ListItemT = {
    title: string
    url?: string
    subLinks?: Omit<ListItemT, 'subLinks'>[]
}