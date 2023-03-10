export interface OrderItem {
    id: number,
    article_number: string,
    name: string,
    description: string,
    specifiers: string,
    stock: number,
    location: string,
    price: number,
}