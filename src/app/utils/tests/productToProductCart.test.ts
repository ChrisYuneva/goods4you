import {Product} from '../../store/services/products/types';
import {productToProductCart} from '../index.ts';

describe('productToProductCart', () => {
    const product: Product = {
        id: 1,
        stock: 18,
        sku: 'sku',
        title: 'title',
        discountPercentage: 20,
        price: 200,
        thumbnail: 'thumbnail.jpg',
        description: 'description',
        category: 'category',
        rating: 4,
        tags: [],
        brand: 'brand',
        weight: 30,
        images: []
    }

    test('should convert Product to ProductCart with default quantity', () => {
        const result = productToProductCart(product);

        expect(result.quantity).toEqual(0);
    });
    test('should convert Product to ProductCart with enter quantity', () => {
        const result = productToProductCart(product, 5);

        expect(result.quantity).toEqual(5);
    });
})