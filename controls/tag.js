const Tag = require('../models/HashTags');

const TagController = {
  getItem: async (req, res) => {
    try {
      if (req.params.id) {
        data = await Tag.getItem(req.params.id)
      } else {
        data = await Tag.getItems();
      }
      res.send({ data: data });

    } catch (err) {
      res.send(err);
    }
  },

  setItem: async (req, res) => {
    try {
      let newtag = req.body;
      let result = await Tag.createItem(newtag);
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

module.exports.Controller = TagController;
module.exports.controller = (app) => {
  app.post('/api/tags', TagController.setItem);
  app.get('/api/tags/:id', TagController.getItem);
  app.get('/api/tags/', TagController.getItem);
  app.put('/api/tags/:id', TagController.updateItem);
  app.delete('/api/tags/:id', TagController.deleteItem);
}
