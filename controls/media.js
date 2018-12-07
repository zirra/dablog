const MediaItem = require('../models/MediaItem');

const MediaController = {

  getItem: async (req, res) => {
    let data;

    try {
      if (req.params.id) {
        data = await MediaItem.getItem(req.params.id)
      } else {
        data = await MediaItem.getItems();
      }
      res.send({ data: data });

    } catch (err) {
      res.send(err);
    }
  },

  setItem: async (req, res) => {
    try {
      let newpost = req.body;
      let result = await MediaItem.createItem(newpost);
      res.send(result);
    } catch (err) {
      res.send(err);
    }
  }

}

module.exports.Controller = MediaController;
module.exports.controller = (app) => {
  app.get('/api/media/:id', MediaController.getItem);
  app.get('/api/media/', MediaController.getItem);
  app.post('/api/media', MediaController.setItem);
}
