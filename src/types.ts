export enum ProductsCategories {
    ALL = 'all',
    ELECTRONICS = 'electronics',
    JEWELERY = 'jewelery',
    MEN = 'men\'s clothing',
    WOMEN = 'women\'s clothing',
    MEN_ALIAS = 'men',
    WOMEN_ALIAS = 'women'
}

export interface IProductProperties {
    category: string,
    description: string,
    id: number,
    image: string,
    price: number,
    rating: {
        rate: number,
        count: number
    },
    title: string,
    count?: number,
}

export interface IProductsInitialState {
    products: IProductProperties[],
    downloadedCategories: ProductsCategories[],
    selectedCategory: ProductsCategories | null,
    loading: 'idle' | 'loading',
    error: string | null
}

export interface IProductsPayload {
    products: IProductProperties[],
    category: ProductsCategories,
}

export interface IProductPayload {
    product: IProductProperties
}

export interface ICartInitialState {
    cartProducts: IProductProperties[],
    totalCartProductsCount: number,
    totalCartProductsPrice: number,
}
