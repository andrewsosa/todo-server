const { json, send } = require("micro");
const handlers = require("./method-helper");
const genid = require("./gen-id");

const toDos = [];

module.exports = handlers({
  get: async (req, res) => {
    return send(res, 200, toDos);
  },
  post: async (req, res) => {
    const { todo } = await json(req);
    if (todo && typeof todo === "string") {
      const obj = {
        id: genid(),
        done: false,
        todo,
      };
      const total = toDos.push(obj);
      return send(res, 201, {
        total,
        ...obj,
      });
    }
    return send(res, 400);
  },
  patch: async (req, res) => {
    const { id, done } = await json(req);
    const pos = toDos.findIndex(el => el.id === id);
    if (pos) {
      toDos[pos].done = done.toLowerCase() === "true";
      return send(res, 202, toDos[pos]);
    }
    return send(res, 400, { err: `${id} not found` });
  },
  delete: async (req, res) => {
    const { id } = await json(req);
    const pos = toDos.findIndex(el => el.id === id);
    if (pos) {
      toDos.splice(pos, 1);
      return send(res, 202);
    }
    return send(res, 400, { err: `${id} not found` });
  },
});
