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
    },

    buildContests: async(req, res) => {
        console.log('caled')
        let dates = req.body.dates;
        let collection = [];
        try{
            for(let i = 0; i < dates.length; i++){
                let obj = {};
                obj.startDate = new Date(dates[i].startDate).getTime();
                obj.endDate = new Date(dates[i].endDate).getTime();
                obj.title = req.body.title;
                obj.prize = req.body.prize;
                obj.global = true;
                
                collection.push(obj);
            }
            await res.send(collection);
        } catch(err){
            res.send(err);
        }
    }

}

module.exports.Controller = ProductController;
module.exports.controller = (app) => {
    app.get('/api/products/:id', ProductController.getItem);
    app.get('/api/products/', ProductController.getItem);
    app.post('/api/products', ProductController.setItem);
    app.post('/api/buildContests', ProductController.buildContests);
}
