export interface Noticias {
    id: number,
    user_id: number,
    chapeu: string,
    name: string,
    fina: string,
    slug: string,
    date: string,
    text: string,
    privacidade: number,
    destaque: number,
    thumbnail: string,
    usarthumb: number,
    created: string,
    modified: string,
    jornalista: string,
    local: string,
    categories?: [
        {
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
    ]
}