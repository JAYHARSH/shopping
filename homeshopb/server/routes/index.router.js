const express= require('express');
const router=express.Router();
const ctrlUser= require('../controllers/user.controller');
const jwtHelper=require('../config/jwthelper');

/*router.get('/shoppingcart',ctrlUser.findcart);*/
router.post('/register',ctrlUser.register);
router.post('/authenticate',ctrlUser.authenticate);
router.post('/product',ctrlUser.product);
router.get('/shoppingcart/:id',ctrlUser.findcart);
router.get('/userProfile', jwtHelper.verifyJwtToken , ctrlUser.userProfile);
router.get('/catalog',ctrlUser.catalog);
router.put('/shoppingcart/:id',ctrlUser.insertcart);
module.exports=router;