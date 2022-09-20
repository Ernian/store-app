export enum ProductsCategories {
    ALL = 'all',
    ELECTRONICS = 'electronics',
    JEWELERY = 'jewelery',
    MEN = 'men',
    WOMEN = 'women',
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
    title: string
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
