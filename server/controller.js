var todos = ['swim', 'eat', 'do a flip'];

const controller = {

  get: (req, res) => {
    res.status(200).send(todos);
  },

  post: (req, res) => {
    var todo = req.body.todo;
    todos.push(todo);
    res.status(201).send(todos);
  },

  update: (req, res) => {

  },

  delete: (req, res) => {
    var index = req.query.index;
    todos.splice(index, 1)
    res.status(200).send(todos);
  }
}

module.exports = controller;
