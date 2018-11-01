const MediaItem = require('../models/MediaItem');

const MediaController = {
  
    getItem: async(req, res) => {
        let data;
        
        try{
            if(req.params.id){
                data = await MediaItem.getItem(req.params.id)
            } else {
                data = await MediaItem.getItems();
            }
            res.send(data);

        } catch (err) {
            res.send(err);
        }
    },
    
    setItem: async(req, res) => {
        try {
            let newpost = req.body;
            let result = await MediaItem.post(newpost);
            res.send(result);
        } catch(err) {
            res.send(err);
        }
    }

}

module.exports.Controller = MediaController;
module.exports.controller = (app) => {
    app.get('/media/:id', MediaController.getItem);
    app.get('/media/', MediaController.getItem);
    app.post('/media', MediaController.setItem);
}
