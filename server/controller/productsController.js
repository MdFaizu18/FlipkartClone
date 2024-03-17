import Product from '../model/productSchema.js'



export const getProducts = async(res,req)=>{
   try {
    let products = await  Product.find({});
    res.status(200).json(products);
   } catch (error) {
    res.status(500).json({message:error})
   }
}