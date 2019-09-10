import { Category } from '../category/category.interface';

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
    categories?: Array<Category>
}