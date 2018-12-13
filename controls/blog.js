const Blog = require('../models/Blog');

const BlogController = {

  getItem: async (req, res) => {
    let data;
    try {
      if (req.params.id) {
        data = await Blog.getItem(req.params.id)
      } else {
        data = await Blog.getItems();
      }
      res.send({ data: data });

    } catch (err) {
      res.send(err);
    }
  },

  getCategories: async (req, res) => {
    try {
      let cat = req.params.id;
      if (cat) {
        data = await Blog.getByCategories(req.params.id);
        res.status(200).send(data);
      } else {
        res.status(401).send('missing category type');
      }
    } catch (err) {
      res.send(err);
    }
  },

  setItem: async (req, res) => {
    try {
      let newpost = req.body;
      let result = await Blog.createItem(newpost);
      res.send(result);
    } catch (err) {
      res.send(err);
    }
  },

  updateItem: async (req, res) => {

  },

  deleteItem: async (req, res) => {

  }
}

module.exports.Controller = BlogController;
module.exports.controller = (app) => {
  app.post('/api/articles', BlogController.setItem);
  app.get('/api/categories/:id', BlogController.getCategories);
  app.get('/api/articles/:id', BlogController.getItem);
  app.get('/api/articles/', BlogController.getItem);
  app.put('/api/articles/:id', BlogController.updateItem);
  app.delete('/api/article/:id', BlogController.deleteItem);
}
