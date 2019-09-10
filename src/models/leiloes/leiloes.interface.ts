import { Leiloeira } from '../leiloeira/leiloeira.interface';

export interface Leiloes {
    id: number,
    name: string,
    slug: string,
    oferta: string,
    date: string,
    local: string,
    endereco: string,
    link?: string,
    canal_id: number,
    canal_alternativo?: string,
    antiga_id: number,
    picture: string,
    catalogo: string,
    vt?: string,
    vt2?: string,
    grandescriatorios?: string,
    grandescriatorios2?: string,
    leiloeiras: Array<Leiloeira>
}