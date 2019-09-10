export interface Leiloeira {
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