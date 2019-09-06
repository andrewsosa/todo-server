// inline'd from https://github.com/jamo/micro-method-router

module.exports = map => {
  const allowedVerbs = Object.keys(map)
    .map(v => v.toUpperCase())
    .join(", ");

  return (req, res, ...args) => {
    res.setHeader("Access-Control-Request-Method", allowedVerbs);
    const fn = map[req.method.toLowerCase()];
    if (!fn) {
      res.writeHead(405);
      return res.end("Method Not Allowed");
    }
    return fn(req, res, ...args);
  };
};
