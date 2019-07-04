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
    leiloeiras: [
        {
            id: number,
            name: string,
            email: string,
            telefone: string,
            link: string,
            cep: string,
            endereco: string,
            numero: string,
            bairro: string,
            complemento?: string,
            cidade: string,
            estado: string
            picture: string,
            _joinData: {
                leiloeira_id: number,
                leilao_id: number
            }
        }
    ]
}