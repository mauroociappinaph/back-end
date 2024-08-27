import { Injectable } from '@nestjs/common';
import { IProductService } from '../../../core/domain/models/application/ports/product-service.interface';
import { PrismaService } from '../../../core/infrastructure/prisma/prisma.service';
import { Product } from '../../../core/domain/models/product.model';

@Injectable()
export class ProductService implements IProductService {
    constructor(private readonly prisma: PrismaService) { }

    async getAllProducts(): Promise<Product[]> {
        return this.prisma.product.findMany();
    }

    async createProduct(product: Product): Promise<Product> {
        return this.prisma.product.create({ data: product });
    }

    async getProductById(id: number): Promise<Product> {
        return this.prisma.product.findUnique({ where: { id } });
    }

    async updateProduct(id: number, product: Product): Promise<Product> {
        return this.prisma.product.update({
            where: { id },
            data: product,
        });
    }

    async deleteProduct(id: number): Promise<void> {
        await this.prisma.product.delete({ where: { id } });
    }
}