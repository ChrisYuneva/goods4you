interface Dimension {
    width: number,
    height: 14.43,
    depth: 28.01
}

interface Review {
    rating: number,
    comment: string,
    date: string,
    reviewerName: string,
    reviewerEmail: string
}

interface Meta {
    createdAt: string,
    updatedAt: string,
    barcode: string,
    qrCode: string
}

export interface Product {
    id: number,
    title: string,
    description: string,
    category: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    tags: string[],
    brand: string,
    sku: string,
    weight: number,
    dimensions: Dimension,
    warrantyInformation: string,
    shippingInformation: string,
    availabilityStatus: string,
    reviews: Review[],
    returnPolicy: string,
    minimumOrderQuantity: number,
    meta: Meta,
    thumbnail: string,
    images: string[]
}

interface ProductCart {
    id: number,
    title: string,
    price: number,
    quantity: number,
    total: number,
    discountPercentage: number,
    discountedTotal: number,
    thumbnail: string
}

interface Cart {
    id: number,
    products: ProductCart[],
    total: number,
    discountedTotal: number,
    userId: number,
    totalProducts: number,
    totalQuantity: number
}

export interface CartInfo {
    carts: Cart[],
    total: number,
    skip: number,
    limit: number
}

export interface Products {
    products: Product[],
    total: number,
    skip: number,
    limit: number
}

export interface GetSearchProductsParams {
    name: string,
    limit: number,
    skip: number,
}