const Blog = require('../models/Blog');

const BlogController = {
  
    getItem: async(req, res) => {
        try{
        let data = await Blog.load();

        res.send(data);
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
    }

}

module.exports.Controller = BlogController;
module.exports.controller = (app) => {
 app.get('/test/', BlogController.getItem);
 app.post('/test', BlogController.setItem);
}