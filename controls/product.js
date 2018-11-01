const Product = require('../models/Product');

const ProductController = {
  
    getItem: async(req, res) => {
        let data;
        
        try{
            if(req.params.id){
                data = await Product.getItem(req.params.id)
            } else {
                data = await Product.getItems();
            }
            res.send({data: data});

        } catch (err) {
            res.send(err);
        }
    },
    
    setItem: async(req, res) => {
        try {
            let newpost = req.body;
            let result = await Product.post(newpost);
            res.send(result);
        } catch(err) {
            res.send(err);
        }
    }

}

module.exports.Controller = ProductController;
module.exports.controller = (app) => {
    app.get('/api/products/:id', ProductController.getItem);
    app.get('/api/products/', ProductController.getItem);
    app.post('/api/products', ProductController.setItem);
}
