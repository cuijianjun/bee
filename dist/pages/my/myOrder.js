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

var MyOrder = function (_wepy$page) {
  _inherits(MyOrder, _wepy$page);

  function MyOrder() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MyOrder);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MyOrder.__proto__ || Object.getPrototypeOf(MyOrder)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '我的订单'
    }, _this.config = {}, _this.data = {
      currentTypeIndex: 0,
      //订单类型
      type: [{
        id: '0',
        name: '待付款'
      }, {
        id: '1',
        name: '已完成'
      }],
      msgList: [{}, {}]
    }, _this.methods = {
      //跳转详情页
      navigateTo: function navigateTo() {
        _wepy2.default.navigateTo({
          url: '/pages/my/myPublish/myPublish'
        });
      },


      //切换信息类型
      getCurrentType: function getCurrentType(idx) {
        this.currentTypeIndex = idx;
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MyOrder, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return MyOrder;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(MyOrder , 'pages/my/myOrder'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15T3JkZXIuanMiXSwibmFtZXMiOlsiTXlPcmRlciIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiY3VycmVudFR5cGVJbmRleCIsInR5cGUiLCJpZCIsIm5hbWUiLCJtc2dMaXN0IiwibWV0aG9kcyIsIm5hdmlnYXRlVG8iLCJ3ZXB5IiwidXJsIiwiZ2V0Q3VycmVudFR5cGUiLCJpZHgiLCJldmVudHMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxPOzs7Ozs7Ozs7Ozs7Ozt3TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdURCxNLEdBQVMsRSxRQUVURSxJLEdBQU87QUFDTEMsd0JBQWtCLENBRGI7QUFFTDtBQUNBQyxZQUFNLENBQ0o7QUFDRUMsWUFBSSxHQUROO0FBRUVDLGNBQU07QUFGUixPQURJLEVBS0o7QUFDRUQsWUFBSSxHQUROO0FBRUVDLGNBQU07QUFGUixPQUxJLENBSEQ7QUFhTEMsZUFBUyxDQUFDLEVBQUQsRUFDUCxFQURPO0FBYkosSyxRQWlCUEMsTyxHQUFVO0FBQ1I7QUFDQUMsZ0JBRlEsd0JBRUs7QUFDWEMsdUJBQUtELFVBQUwsQ0FBZ0I7QUFDZEUsZUFBSztBQURTLFNBQWhCO0FBR0QsT0FOTzs7O0FBUVI7QUFDQUMsb0JBVFEsMEJBU09DLEdBVFAsRUFTWTtBQUNsQixhQUFLVixnQkFBTCxHQUF3QlUsR0FBeEI7QUFDRDtBQVhPLEssUUFjVkMsTSxHQUFTLEU7Ozs7OzZCQUVBLENBQ1I7Ozs7RUF4Q2tDSixlQUFLSyxJOztrQkFBckJoQixPIiwiZmlsZSI6Im15T3JkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlPcmRlciBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahOiuouWNlSdcbiAgICB9O1xuICAgIGNvbmZpZyA9IHt9O1xuXG4gICAgZGF0YSA9IHtcbiAgICAgIGN1cnJlbnRUeXBlSW5kZXg6IDAsXG4gICAgICAvL+iuouWNleexu+Wei1xuICAgICAgdHlwZTogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6ICcwJyxcbiAgICAgICAgICBuYW1lOiAn5b6F5LuY5qy+J1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6ICcxJyxcbiAgICAgICAgICBuYW1lOiAn5bey5a6M5oiQJ1xuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgbXNnTGlzdDogW3t9LFxuICAgICAgICB7fVxuICAgICAgXSxcbiAgICB9O1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICAvL+i3s+i9rOivpuaDhemhtVxuICAgICAgbmF2aWdhdGVUbygpIHtcbiAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICcvcGFnZXMvbXkvbXlQdWJsaXNoL215UHVibGlzaCcsXG4gICAgICAgIH0pO1xuICAgICAgfSxcblxuICAgICAgLy/liIfmjaLkv6Hmga/nsbvlnotcbiAgICAgIGdldEN1cnJlbnRUeXBlKGlkeCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRUeXBlSW5kZXggPSBpZHg7XG4gICAgICB9LFxuICAgIH07XG5cbiAgICBldmVudHMgPSB7fTtcblxuICAgIG9uTG9hZCgpIHtcbiAgICB9XG4gIH1cbiJdfQ==