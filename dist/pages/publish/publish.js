'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _request = require('./../../lib/api/request.js');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PublishDetail = function (_wepy$page) {
  _inherits(PublishDetail, _wepy$page);

  function PublishDetail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PublishDetail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PublishDetail.__proto__ || Object.getPrototypeOf(PublishDetail)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '发布信息页'
    }, _this.components = {}, _this.data = {
      nickName: '', //昵称
      avatarUrl: '', //头像
      brief: '', //产品简介
      pics: [], //产品图片
      tell: '', //联系方式
      price: null, //价格
      typeArr: ['请选择类型', '家具', '电器', '书本'], //类型
      typeIndex: 0, //类型索引
      type: '', //类型
      location: '', //地址
      isAccredit: false //获取位置是否授权
    }, _this.computed = {}, _this.methods = {

      //点击我要发布信息
      formSubmit: function formSubmit(e) {
        console.log('form', e.detail.value);
        _wepy2.default.showLoading({
          title: '发布中...',
          mask: true
        });
        var value = e.detail.value;
        if (!value.brief) {
          _wepy2.default.showModal({
            title: '提示',
            content: '产品简介不能为空',
            showCancel: false
          });
        } else if (!value.pics) {
          _wepy2.default.showModal({
            title: '提示',
            content: '图片不能为空',
            showCancel: false
          });
        } else if (!value.tell) {
          _wepy2.default.showModal({
            title: '提示',
            content: '联系方式不能为空',
            showCancel: false
          });
        } else if (!/^1\d{10}$/.test(value.tell)) {
          _wepy2.default.showModal({
            title: '提示',
            content: '联系方式有误',
            showCancel: false
          });
        } else if (!value.price) {
          _wepy2.default.showModal({
            title: '提示',
            content: '价格不能为空',
            showCancel: false
          });
        } else if (!value.type) {
          _wepy2.default.showModal({
            title: '提示',
            content: '类型不能为空',
            showCancel: false
          });
        } else if (!value.location) {
          _wepy2.default.showModal({
            title: '提示',
            content: '地址不能为空',
            showCancel: false
          });
        } else {
          value.nickName = this.nickName;
          value.avatarUrl = this.avatarUrl;
          console.log('上传信息', value);
          var res = _request2.default.publishGoodsMsg(value);
          _wepy2.default.hideLoading();
        }
      },


      //点击授权按钮，获取用户信息
      getUserInfo: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
          var userInfo;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!e.detail.userInfo) {
                    _context.next = 6;
                    break;
                  }

                  _context.next = 3;
                  return this.$parent.login(e.detail.userInfo);

                case 3:
                  userInfo = _context.sent;
                  _context.next = 7;
                  break;

                case 6:
                  _wepy2.default.showModal({
                    title: '温馨提示', //提示的标题,
                    content: '为了更好的为您服务，需要您的授权', //提示的内容,
                    showCancel: false
                  });

                case 7:
                  this.$apply();

                case 8:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function getUserInfo(_x) {
          return _ref2.apply(this, arguments);
        }

        return getUserInfo;
      }(),


      //点击上传图片
      addImg: function addImg() {
        var self = this;
        wx.chooseImage({
          success: function success(res) {
            console.log('res', res);
            var pics = res.tempFilePaths;
            self.pics = pics;
            self.$apply();
          }
        });
      },


      //删除图片
      deleteImg: function deleteImg(idx) {
        this.pics = this.pics.splice(1, idx);
      },


      //选择产品类型
      selectType: function selectType(e) {
        console.log('产品类型', e.detail.value);
        var idx = e.detail.value;
        if (idx == 0) {
          this.type = '';
        } else {
          this.type = this.typeArr[idx];
        }
        this.typeIndex = idx;
      },


      // 获取地址
      getLocation: function getLocation() {
        var self = this;
        wx.chooseLocation({
          success: function success(res) {
            console.log('获取地理位置成功', res);
            self.location = res.address;
            self.$apply();
          },
          fail: function fail(res) {
            console.log('获取地理位置失败', res);
            self.isAccredit = true;
            self.$apply();
          }
        });
      },


      // 设置授权列表
      handleSetting: function handleSetting(e) {
        console.log('e', e);
        var self = this;
        if (!e.detail.authSetting['scope.userLocation']) {
          wx.showModal({
            title: '警告',
            content: '若不打开授权，则无法获取定位！',
            showCancel: false
          });
          self.isAccredit = true;
          self.$apply();
        } else {
          wx.showModal({
            title: '提示',
            content: '您已授权，可以选择定位！',
            showCancel: false
          });
          self.isAccredit = false;
          self.$apply();
        }
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  // mixins = [testMixin]

  _createClass(PublishDetail, [{
    key: 'onLoad',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // let userInfo = await this.$parent.login(); //获取用户信息
                // console.log('onload-userinfo',userInfo);
                // this.nickName = userInfo.nickName;
                // this.avatarUrl = userInfo.avatarUrl;
                this.$apply();

              case 1:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onLoad() {
        return _ref3.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);

  return PublishDetail;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(PublishDetail , 'pages/publish/publish'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1Ymxpc2guanMiXSwibmFtZXMiOlsiUHVibGlzaERldGFpbCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiZGF0YSIsIm5pY2tOYW1lIiwiYXZhdGFyVXJsIiwiYnJpZWYiLCJwaWNzIiwidGVsbCIsInByaWNlIiwidHlwZUFyciIsInR5cGVJbmRleCIsInR5cGUiLCJsb2NhdGlvbiIsImlzQWNjcmVkaXQiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJmb3JtU3VibWl0IiwiZSIsImNvbnNvbGUiLCJsb2ciLCJkZXRhaWwiLCJ2YWx1ZSIsIndlcHkiLCJzaG93TG9hZGluZyIsInRpdGxlIiwibWFzayIsInNob3dNb2RhbCIsImNvbnRlbnQiLCJzaG93Q2FuY2VsIiwidGVzdCIsInJlcyIsInJlcXVlc3QiLCJwdWJsaXNoR29vZHNNc2ciLCJoaWRlTG9hZGluZyIsImdldFVzZXJJbmZvIiwidXNlckluZm8iLCIkcGFyZW50IiwibG9naW4iLCIkYXBwbHkiLCJhZGRJbWciLCJzZWxmIiwid3giLCJjaG9vc2VJbWFnZSIsInN1Y2Nlc3MiLCJ0ZW1wRmlsZVBhdGhzIiwiZGVsZXRlSW1nIiwiaWR4Iiwic3BsaWNlIiwic2VsZWN0VHlwZSIsImdldExvY2F0aW9uIiwiY2hvb3NlTG9jYXRpb24iLCJhZGRyZXNzIiwiZmFpbCIsImhhbmRsZVNldHRpbmciLCJhdXRoU2V0dGluZyIsImV2ZW50cyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxhOzs7Ozs7Ozs7Ozs7OztvTUFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWEsRSxRQU1iQyxJLEdBQU87QUFDTEMsZ0JBQVUsRUFETCxFQUNRO0FBQ2JDLGlCQUFXLEVBRk4sRUFFUztBQUNkQyxhQUFPLEVBSEYsRUFHSztBQUNWQyxZQUFNLEVBSkQsRUFJSTtBQUNUQyxZQUFNLEVB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ICBpbXBvcnQgcmVxdWVzdCBmcm9tICcuLi8uLi9saWIvYXBpL3JlcXVlc3QnXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHVibGlzaERldGFpbCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WPkeW4g+S/oeaBr+mhtSdcbiAgICB9XG4gICAgY29tcG9uZW50cyA9IHtcblxuICAgIH1cblxuICAgIC8vIG1peGlucyA9IFt0ZXN0TWl4aW5dXG5cbiAgICBkYXRhID0ge1xuICAgICAgbmlja05hbWU6ICcnLC8v5pi156ewXG4gICAgICBhdmF0YXJVcmw6ICcnLC8v5aS05YOPXG4gICAgICBicmllZjogJycsLy/kuqflk4HnroDku4tcbiAgICAgIHBpY3M6IFtdLC8v5Lqn5ZOB5Zu+54mHXG4gICAgICB0ZWxsOiAnJywvL+iBlOezu+aWueW8j1xuICAgICAgcHJpY2U6bnVsbCwvL+S7t+agvFxuICAgICAgdHlwZUFycjogWyfor7fpgInmi6nnsbvlnosnLCAn5a625YW3JywgJ+eUteWZqCcsICfkuabmnKwnXSwvL+exu+Wei1xuICAgICAgdHlwZUluZGV4OiAwLC8v57G75Z6L57Si5byVXG4gICAgICB0eXBlOicnLC8v57G75Z6LXG4gICAgICBsb2NhdGlvbjonJywvL+WcsOWdgFxuICAgICAgaXNBY2NyZWRpdDogZmFsc2UsLy/ojrflj5bkvY3nva7mmK/lkKbmjojmnYNcbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcblxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG5cbiAgICAgIC8v54K55Ye75oiR6KaB5Y+R5biD5L+h5oGvXG4gICAgICBmb3JtU3VibWl0KGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Zvcm0nLGUuZGV0YWlsLnZhbHVlKTtcbiAgICAgICAgd2VweS5zaG93TG9hZGluZyh7XG4gICAgICAgICAgdGl0bGU6ICflj5HluIPkuK0uLi4nLFxuICAgICAgICAgIG1hc2s6IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgdmFsdWUgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgaWYgKCF2YWx1ZS5icmllZikge1xuICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfkuqflk4HnroDku4vkuI3og73kuLrnqbonLFxuICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgfSBlbHNlIGlmICghdmFsdWUucGljcykge1xuICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICflm77niYfkuI3og73kuLrnqbonLFxuICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoIXZhbHVlLnRlbGwpIHtcbiAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICAgICAgICBjb250ZW50OiAn6IGU57O75pa55byP5LiN6IO95Li656m6JyxcbiAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9ZWxzZSBpZiAoISgvXjFcXGR7MTB9JC8udGVzdCh2YWx1ZS50ZWxsKSkpIHtcbiAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICAgICAgICBjb250ZW50OiAn6IGU57O75pa55byP5pyJ6K+vJyxcbiAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9ZWxzZSBpZiAoIXZhbHVlLnByaWNlKSB7XG4gICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICAgICAgY29udGVudDogJ+S7t+agvOS4jeiDveS4uuepuicsXG4gICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfWVsc2UgaWYgKCF2YWx1ZS50eXBlKSB7XG4gICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICAgICAgY29udGVudDogJ+exu+Wei+S4jeiDveS4uuepuicsXG4gICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfWVsc2UgaWYgKCF2YWx1ZS5sb2NhdGlvbikge1xuICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICflnLDlnYDkuI3og73kuLrnqbonLFxuICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsdWUubmlja05hbWU9dGhpcy5uaWNrTmFtZTtcbiAgICAgICAgICB2YWx1ZS5hdmF0YXJVcmw9dGhpcy5hdmF0YXJVcmw7XG4gICAgICAgICAgY29uc29sZS5sb2coJ+S4iuS8oOS/oeaBrycsdmFsdWUpO1xuICAgICAgICAgIGxldCByZXMgPSByZXF1ZXN0LnB1Ymxpc2hHb29kc01zZyh2YWx1ZSk7XG4gICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICAvL+eCueWHu+aOiOadg+aMiemSru+8jOiOt+WPlueUqOaIt+S/oeaBr1xuICAgICBhc3luYyBnZXRVc2VySW5mbyhlKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCfnlKjmiLfkv6Hmga8nLGUpO1xuICAgICAgICBpZiAoZS5kZXRhaWwudXNlckluZm8pIHtcbiAgICAgICAgICBsZXQgdXNlckluZm8gPSBhd2FpdCB0aGlzLiRwYXJlbnQubG9naW4oZS5kZXRhaWwudXNlckluZm8pOyAvL+iOt+WPlueUqOaIt+S/oeaBr1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdvbmxvYWQtdXNlcmluZm8nLHVzZXJJbmZvKTtcbiAgICAgICAgICAvLyB0aGlzLm5pY2tOYW1lID0gZS5kZXRhaWwudXNlckluZm8ubmlja05hbWU7XG4gICAgICAgICAgLy8gdGhpcy5hdmF0YXJVcmwgPSBlLmRldGFpbC51c2VySW5mby5hdmF0YXJVcmw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgICAgdGl0bGU6ICfmuKnppqjmj5DnpLonLCAvL+aPkOekuueahOagh+mimCxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfkuLrkuobmm7Tlpb3nmoTkuLrmgqjmnI3liqHvvIzpnIDopoHmgqjnmoTmjojmnYMnLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlLFxuICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgIH0sXG5cbiAgICAgIC8v54K55Ye75LiK5Lyg5Zu+54mHXG4gICAgICBhZGRJbWcoKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgd3guY2hvb3NlSW1hZ2Uoe1xuICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVzJywgcmVzKTtcbiAgICAgICAgICAgIGxldCBwaWNzID0gcmVzLnRlbXBGaWxlUGF0aHM7XG4gICAgICAgICAgICBzZWxmLnBpY3MgPSBwaWNzO1xuICAgICAgICAgICAgc2VsZi4kYXBwbHkoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9LFxuXG4gICAgICAvL+WIoOmZpOWbvueJh1xuICAgICAgZGVsZXRlSW1nKGlkeCkge1xuICAgICAgICB0aGlzLnBpY3MgPSB0aGlzLnBpY3Muc3BsaWNlKDEsIGlkeCk7XG4gICAgICB9LFxuXG4gICAgICAvL+mAieaLqeS6p+WTgeexu+Wei1xuICAgICAgc2VsZWN0VHlwZShlKXtcbiAgICAgICAgY29uc29sZS5sb2coJ+S6p+WTgeexu+WeiycsZS5kZXRhaWwudmFsdWUpO1xuICAgICAgICBsZXQgaWR4PWUuZGV0YWlsLnZhbHVlO1xuICAgICAgICBpZihpZHg9PTApe1xuICAgICAgICAgIHRoaXMudHlwZT0nJztcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgIHRoaXMudHlwZT10aGlzLnR5cGVBcnJbaWR4XTtcbiAgICAgICAgfSBcbiAgICAgICAgdGhpcy50eXBlSW5kZXg9aWR4O1xuICAgICAgfSxcblxuICAgICAgLy8g6I635Y+W5Zyw5Z2AXG4gICAgICBnZXRMb2NhdGlvbigpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICB3eC5jaG9vc2VMb2NhdGlvbih7XG4gICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ+iOt+WPluWcsOeQhuS9jee9ruaIkOWKnycsIHJlcyk7XG4gICAgICAgICAgICBzZWxmLmxvY2F0aW9uPXJlcy5hZGRyZXNzO1xuICAgICAgICAgICAgc2VsZi4kYXBwbHkoKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWw6IChyZXMpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfojrflj5blnLDnkIbkvY3nva7lpLHotKUnLCByZXMpO1xuICAgICAgICAgICAgc2VsZi5pc0FjY3JlZGl0ID0gdHJ1ZTtcbiAgICAgICAgICAgIHNlbGYuJGFwcGx5KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSxcblxuICAgICAgLy8g6K6+572u5o6I5p2D5YiX6KGoXG4gICAgICBoYW5kbGVTZXR0aW5nKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2UnLCBlKTtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBpZiAoIWUuZGV0YWlsLmF1dGhTZXR0aW5nWydzY29wZS51c2VyTG9jYXRpb24nXSkge1xuICAgICAgICAgIHd4LnNob3dNb2RhbCh7XG4gICAgICAgICAgICB0aXRsZTogJ+itpuWRiicsXG4gICAgICAgICAgICBjb250ZW50OiAn6Iul5LiN5omT5byA5o6I5p2D77yM5YiZ5peg5rOV6I635Y+W5a6a5L2N77yBJyxcbiAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlXG4gICAgICAgICAgfSlcbiAgICAgICAgICBzZWxmLmlzQWNjcmVkaXQgPSB0cnVlO1xuICAgICAgICAgIHNlbGYuJGFwcGx5KCk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3eC5zaG93TW9kYWwoe1xuICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICAgICAgY29udGVudDogJ+aCqOW3suaOiOadg++8jOWPr+S7pemAieaLqeWumuS9je+8gScsXG4gICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZVxuICAgICAgICAgIH0pXG4gICAgICAgICAgc2VsZi5pc0FjY3JlZGl0ID0gZmFsc2U7XG4gICAgICAgICAgc2VsZi4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcblxuICAgIH1cblxuICAgIGFzeW5jIG9uTG9hZCgpIHtcbiAgICAgIC8vIGxldCB1c2VySW5mbyA9IGF3YWl0IHRoaXMuJHBhcmVudC5sb2dpbigpOyAvL+iOt+WPlueUqOaIt+S/oeaBr1xuICAgICAgLy8gY29uc29sZS5sb2coJ29ubG9hZC11c2VyaW5mbycsdXNlckluZm8pO1xuICAgICAgLy8gdGhpcy5uaWNrTmFtZSA9IHVzZXJJbmZvLm5pY2tOYW1lO1xuICAgICAgLy8gdGhpcy5hdmF0YXJVcmwgPSB1c2VySW5mby5hdmF0YXJVcmw7XG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgIH1cbiAgfVxuXG4iXX0=