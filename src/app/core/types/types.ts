//Core é o global à aplicação
//Só interfaces serão colocadas aqui, mas poderia ser um arquivo cada

export interface Promocao{
    id:number,
    destino:string,
    imagem:string,
    preco:number
}

export interface UnidadeFederativa{
    id:number,
    nome:string,
    sigla:string
}