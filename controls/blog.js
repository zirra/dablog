const Blog = require('../models/Blog');

const BlogController = {
  
    getItem: async(req, res) => {
        try{
            if(req.params.id){
                data = await Blog.getItem(req.params.id)
            } else {
                data = await Blog.getItems();
            }
            res.send({data: data});

        } catch (err) {
            res.send(err);
        }
    },
    
    setItem: async(req, res) => {
        try {
            let newpost = req.body;
            let result = await Blog.post(newpost);
            res.send(result);
        } catch(err) {
            res.send(err);
        }
    },

    helloWorld: (req, res) => {
        res.send('hello world');
    }

}

module.exports.Controller = BlogController;
module.exports.controller = (app) => {
    app.get('/', BlogController.helloWorld);
    app.get('/api/articlea/:id', BlogController.getItem);
    app.get('/api/articlea/', BlogController.getItem);
    app.post('/api/articles', BlogController.setItem);
}
