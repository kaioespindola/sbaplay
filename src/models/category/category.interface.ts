export interface Category {
    id?: number,
    parent_id?: number,
    lft?: number,
    rght?: number,
    name?: string,
    slug?: string,
    description?: string,
    created?: string,
    modified?: string,
    _joinData?: {
        noticia_id?: number,
        category_id?: number
    }
}