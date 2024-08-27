import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ProductService } from '../services/product.service';
import { Product } from '../../../core/domain/models/product.model';

@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductService) { }

    @Get()
    async getAllProducts(): Promise<Product[]> {
        return this.productService.getAllProducts();
    }

    @Post()
    async createProduct(@Body() product: Product): Promise<Product> {
        return this.productService.createProduct(product);
    }

    @Get(':id')
    async getProductById(@Param('id') id: number): Promise<Product> {
        return this.productService.getProductById(id);
    }

    @Put(':id')
    async updateProduct(@Param('id') id: number, @Body() product: Product): Promise<Product> {
        return this.productService.updateProduct(id, product);
    }

    @Delete(':id')
    async deleteProduct(@Param('id') id: number): Promise<void> {
        return this.productService.deleteProduct(id);
    }
}