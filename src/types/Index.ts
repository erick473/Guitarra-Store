
export type Guitar = {
    id : number
    name : string
    image: string
    description: string
    price: number
}


//para heredar propiedades del type Guitar y agregar quantity
//export type GuitarItem = Pick<Guitar,'id' | 'name' | 'price'> & {
//    quantity : number
//}

export type GuitarItem = Guitar & {
    quantity: number
}


