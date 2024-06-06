const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./Users");
db.role = require("./Role");
db.refreshToken = require("./RefreshToken");

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;