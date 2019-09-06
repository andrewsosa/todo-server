const crypto = require("crypto");

module.exports = len => crypto.randomBytes(len || 16).toString("hex");
