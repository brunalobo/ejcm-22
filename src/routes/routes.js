const { Router }= require('express');
const router = Router();
const ProductController = require('../controllers/ProductController');
const StoreController = require('../controllers/StoreController');

router.post('/product', ProductController.create);
router.get('/product', ProductController.index);
router.get('/product/:id', ProductController.show);
router.put('/product/:id', ProductController.update);
router.delete('/product/:id', ProductController.destroy);
router.put('/productToStorage/:id', ProductController.addToStorage);
router.delete('/productRemoveStorage/:id', ProductController.removeToStorage);

router.post('/store', StoreController.create);
router.get('/store', StoreController.index);
router.get('/store/:id', StoreController.show);
router.put('/store/:id', StoreController.update);
router.delete('/store/:id', StoreController.destroy);

module.exports = router;