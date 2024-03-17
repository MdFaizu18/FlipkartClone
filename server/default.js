
// to insert the data which where stored in the js files 

import Product from './model/productSchema.js';
import { products } from './constant/products.js';

const DefaultData = async () => {
    try {
        // await Product.deleteMany({})
        await Product.insertMany(products);
        console.log('Data imported Successfully !!');

    } catch (error) {
        console.log('Error: duplicate ');
    }
}

export default DefaultData;
