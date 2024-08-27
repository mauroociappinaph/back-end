import { Product } from '../../../models/product.model';

export interface IProductService {
    getAllProducts(): Promise<Product[]>;
    createProduct(product: Product): Promise<Product>;
    getProductById(id: number): Promise<Product>;
    updateProduct(id: number, product: Product): Promise<Product>;
    deleteProduct(id: number): Promise<void>;
}