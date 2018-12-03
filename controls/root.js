const RootController = {
  
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

  updateItem: async (req, res) => {

  },

  deleteItem: async (req, res) => {

  },

  test: async (req, res) => {
    res.send('test');
  }
}

module.exports.Controller = RootController;
module.exports.controller = (app) => { 
  app.get('/', RootController.test);
}
