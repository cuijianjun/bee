'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyIndex = function (_wepy$page) {
  _inherits(MyIndex, _wepy$page);

  function MyIndex() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MyIndex);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MyIndex.__proto__ || Object.getPrototypeOf(MyIndex)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '我的'
    }, _this.config = {}, _this.data = {
      userInfo: {
        nickName: '加载中...',
        avatarUrl: ''
      }
    }, _this.methods = {
      navigateTo: function navigateTo(url) {
        _wepy2.default.navigateTo({
          url: url
        });
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MyIndex, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      console.log('his.$parent', this.$parent);
      self.userInfo = this.$parent.globalData.userData.userInfo;
      self.$apply();
    }
    // Other properties

  }]);

  return MyIndex;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(MyIndex , 'pages/my/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk15SW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInVzZXJJbmZvIiwibmlja05hbWUiLCJhdmF0YXJVcmwiLCJtZXRob2RzIiwibmF2aWdhdGVUbyIsInVybCIsIndlcHkiLCJldmVudHMiLCJzZWxmIiwiY29uc29sZSIsImxvZyIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwidXNlckRhdGEiLCIkYXBwbHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxPOzs7Ozs7Ozs7Ozs7Ozt3TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdURCxNLEdBQVMsRSxRQUVURSxJLEdBQU87QUFDTEMsZ0JBQVU7QUFDUkMsa0JBQVUsUUFERjtBQUVSQyxtQkFBVztBQUZIO0FBREwsSyxRQU1QQyxPLEdBQVU7QUFDUkMsZ0JBRFEsc0JBQ0dDLEdBREgsRUFDUTtBQUNkQyx1QkFBS0YsVUFBTCxDQUFnQjtBQUNkQyxlQUFLQTtBQURTLFNBQWhCO0FBR0Q7QUFMTyxLLFFBU1ZFLE0sR0FBUyxFOzs7Ozs2QkFDQTtBQUNQLFVBQUlDLE9BQU8sSUFBWDtBQUNBQyxjQUFRQyxHQUFSLENBQVksYUFBWixFQUEwQixLQUFLQyxPQUEvQjtBQUNBSCxXQUFLUixRQUFMLEdBQWdCLEtBQUtXLE9BQUwsQ0FBYUMsVUFBYixDQUF3QkMsUUFBeEIsQ0FBaUNiLFFBQWpEO0FBQ0FRLFdBQUtNLE1BQUw7QUFFRDtBQUNEOzs7OztFQTdCbUNSLGVBQUtTLEk7O2tCQUFyQm5CLE8iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeUluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmiJHnmoQnXG4gIH07XG4gIGNvbmZpZyA9IHt9O1xuXG4gIGRhdGEgPSB7XG4gICAgdXNlckluZm86IHtcbiAgICAgIG5pY2tOYW1lOiAn5Yqg6L295LitLi4uJyxcbiAgICAgIGF2YXRhclVybDogJydcbiAgICB9XG4gIH07XG4gIG1ldGhvZHMgPSB7XG4gICAgbmF2aWdhdGVUbyh1cmwpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogdXJsLFxuICAgICAgfSk7XG4gICAgfSxcblxuICB9O1xuXG4gIGV2ZW50cyA9IHt9O1xuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIGNvbnNvbGUubG9nKCdoaXMuJHBhcmVudCcsdGhpcy4kcGFyZW50KVxuICAgIHNlbGYudXNlckluZm8gPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51c2VyRGF0YS51c2VySW5mbztcbiAgICBzZWxmLiRhcHBseSgpO1xuXG4gIH1cbiAgLy8gT3RoZXIgcHJvcGVydGllc1xufVxuIl19