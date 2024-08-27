import { Module } from '@nestjs/common';
import { ProductService } from './services/product.service';
import { ProductsController } from './controllers/products.controller';
import { PrismaModule } from '../../core/infrastructure/prisma/prisma.module';

@Module({
    imports: [PrismaModule],
    controllers: [ProductsController],
    providers: [ProductService],
    exports: [ProductService],
})
export class ProductsModule { }