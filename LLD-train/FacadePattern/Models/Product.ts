class Product   {
    getProduct(): Product {
        console.log('Product created');
        return new Product()
    }
}

export default Product;