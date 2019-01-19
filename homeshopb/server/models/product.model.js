var mongoose=require('mongoose');
 
var productSchema = new mongoose.Schema({
    productname: String,
    productprice: String,
    imageurl: String
   
}); 
mongoose.model('Product',productSchema);