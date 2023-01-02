"use strict";

var _express = _interopRequireDefault(require("express"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _path = _interopRequireDefault(require("path"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var port = 5000;
var app = (0, _express["default"])();
app.use(_bodyParser["default"].json());
app.use('/static', _express["default"]["static"]('public'));
app.get('/', function (req, res) {
  res.sendFile(_path["default"].join(__dirname, '/index.html'));
});
app.get('/pitagora', function (req, res) {
  res.sendFile(_path["default"].join(__dirname, '/static/pages/pitagora.html'));
});
app.listen(port, function () {
  console.log("L'app \xE8 stata avviata alla porta http://localhost:" + port);
});

//static files css
app.get('/icss', function (req, res) {
  res.sendFile(_path["default"].join(__dirname, '/static/style/index.css'));
});
app.get('/navbar', function (req, res) {
  res.sendFile(_path["default"].join(__dirname, '/static/component/nav.html'));
});
app.get('/navJS', function (req, res) {
  res.sendFile(_path["default"].join(__dirname, '/static/script/includeHtml.js'));
});
