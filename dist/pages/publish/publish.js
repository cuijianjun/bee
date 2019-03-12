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
      label: '', //类型
      address: '', //地址
      isAccredit: false, //获取位置是否授权
      token: '', //token
      user_id: ''
    }, _this.computed = {}, _this.methods = {

      //点击我要发布信息
      formSubmit: function formSubmit(e) {
        console.log('form', e.detail.value);
        var value = e.detail.value;
        if (!value.description) {
          _wepy2.default.showModal({
            title: '提示',
            content: '产品简介不能为空',
            showCancel: false
          });
        } else if (!value.image) {
          _wepy2.default.showModal({
            title: '提示',
            content: '图片不能为空',
            showCancel: false
          });
        } else if (!value.phoneNumber) {
          _wepy2.default.showModal({
            title: '提示',
            content: '联系方式不能为空',
            showCancel: false
          });
        } else if (!/^1\d{10}$/.test(value.phoneNumber)) {
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
        } else if (!value.label) {
          _wepy2.default.showModal({
            title: '提示',
            content: '类型不能为空',
            showCancel: false
          });
        } else if (!value.address) {
          _wepy2.default.showModal({
            title: '提示',
            content: '地址不能为空',
            showCancel: false
          });
        } else {
          _wepy2.default.showLoading({
            title: '发布中...',
            mask: true
          });

          value.weChatName = this.nickName;
          value.avatar = this.avatarUrl;
          value.user_id = this.user_id;
          var data = {};
          data.info = value;
          data.token = this.token;
          console.log('上传信息', data);
          var res = _request2.default.publishGoodsMsg(data);
          _wepy2.default.hideLoading();
        }
      },


      //点击授权按钮，获取用户信息
      getUserInfo: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
          var data;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!e.detail.userInfo) {
                    _context.next = 11;
                    break;
                  }

                  _context.next = 3;
                  return this.$parent.login(e.detail.userInfo);

                case 3:
                  data = _context.sent;
                  //获取用户信息
                  this.nickName = data.userInfo.nickName;
                  this.avatarUrl = data.userInfo.avatarUrl;
                  this.token = data.token;
                  this.user_id = data.userInfo.id;
                  this.$apply();
                  _context.next = 12;
                  break;

                case 11:
                  _wepy2.default.showModal({
                    title: '温馨提示', //提示的标题,
                    content: '为了更好的为您服务，需要您的授权', //提示的内容,
                    showCancel: false
                  });

                case 12:
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


      //选择图片
      chooseImg: function chooseImg() {
        wx.chooseImage({
          success: function success(res) {
            var tempFilePaths = res.tempFilePaths;
            console.log(tempFilePaths);
            wx.uploadFile({
              url: 'https://example.weixin.qq.com/upload', // 仅为示例，非真实的接口地址
              filePath: tempFilePaths[0],
              name: 'file',
              formData: {
                user: 'test'
              },
              success: function success(res) {
                var data = res.data;
                // do something
              }
            });
          }
        });
      },


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
        this.typeIndex = e.detail.value;
      },


      // 获取地址
      getLocation: function getLocation() {
        var self = this;
        wx.chooseLocation({
          success: function success(res) {
            console.log('获取地理位置成功', res);
            self.address = res.address;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1Ymxpc2guanMiXSwibmFtZXMiOlsiUHVibGlzaERldGFpbCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiZGF0YSIsIm5pY2tOYW1lIiwiYXZhdGFyVXJsIiwiYnJpZWYiLCJwaWNzIiwidGVsbCIsInByaWNlIiwidHlwZUFyciIsInR5cGVJbmRleCIsImxhYmVsIiwiYWRkcmVzcyIsImlzQWNjcmVkaXQiLCJ0b2tlbiIsInVzZXJfaWQiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJmb3JtU3VibWl0IiwiZSIsImNvbnNvbGUiLCJsb2ciLCJkZXRhaWwiLCJ2YWx1ZSIsImRlc2NyaXB0aW9uIiwid2VweSIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsInNob3dDYW5jZWwiLCJpbWFnZSIsInBob25lTnVtYmVyIiwidGVzdCIsInNob3dMb2FkaW5nIiwibWFzayIsIndlQ2hhdE5hbWUiLCJhdmF0YXIiLCJpbmZvIiwicmVzIiwicmVxdWVzdCIsInB1Ymxpc2hHb29kc01zZyIsImhpZGVMb2FkaW5nIiwiZ2V0VXNlckluZm8iLCJ1c2VySW5mbyIsIiRwYXJlbnQiLCJsb2dpbiIsImlkIiwiJGFwcGx5IiwiY2hvb3NlSW1nIiwid3giLCJjaG9vc2VJbWFnZSIsInN1Y2Nlc3MiLCJ0ZW1wRmlsZVBhdGhzIiwidXBsb2FkRmlsZSIsInVybCIsImZpbGVQYXRoIiwibmFtZSIsImZvcm1EYXRhIiwidXNlciIsImFkZEltZyIsInNlbGYiLCJkZWxldGVJbWciLCJpZHgiLCJzcGxpY2UiLCJzZWxlY3RUeXBlIiwiZ2V0TG9jYXRpb24iLCJjaG9vc2VMb2NhdGlvbiIsImZhaWwiLCJoYW5kbGVTZXR0aW5nIiwiYXV0aFNldHRpbmciLCJldmVudHMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsYTs7Ozs7Ozs7Ozs7Ozs7b01BQ25CQyxNLEdBQVM7QUFD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R0FBeEI7QUFDQXNCLGlCQUFLL0MsVUFBTCxHQUFrQixJQUFsQjtBQUNBK0MsaUJBQUtiLE1BQUw7QUFDRDtBQVZlLFNBQWxCO0FBWUQsT0FwSk87OztBQXNKUjtBQUNBcUIsbUJBdkpRLHlCQXVKTWpELENBdkpOLEVBdUpTO0FBQ2ZDLGdCQUFRQyxHQUFSLENBQVksR0FBWixFQUFpQkYsQ0FBakI7QUFDQSxZQUFJeUMsT0FBTyxJQUFYO0FBQ0EsWUFBSSxDQUFDekMsRUFBRUcsTUFBRixDQUFTK0MsV0FBVCxDQUFxQixvQkFBckIsQ0FBTCxFQUFpRDtBQUMvQ3BCLGFBQUd2QixTQUFILENBQWE7QUFDWEMsbUJBQU8sSUFESTtBQUVYQyxxQkFBUyxpQkFGRTtBQUdYQyx3QkFBWTtBQUhELFdBQWI7QUFLQStCLGVBQUsvQyxVQUFMLEdBQWtCLElBQWxCO0FBQ0ErQyxlQUFLYixNQUFMO0FBRUQsU0FURCxNQVNPO0FBQ0xFLGFBQUd2QixTQUFILENBQWE7QUFDWEMsbUJBQU8sSUFESTtBQUVYQyxxQkFBUyxjQUZFO0FBR1hDLHdCQUFZO0FBSEQsV0FBYjtBQUtBK0IsZUFBSy9DLFVBQUwsR0FBa0IsS0FBbEI7QUFDQStDLGVBQUtiLE1BQUw7QUFDRDtBQUNGO0FBNUtPLEssUUFnTFZ1QixNLEdBQVMsRTs7O0FBdE1UOzs7Ozs7Ozs7O0FBMk1FO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQUt2QixNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBdk51Q3RCLGVBQUs4QyxJOztrQkFBM0J6RSxhIiwiZmlsZSI6InB1Ymxpc2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi4vLi4vbGliL2FwaS9yZXF1ZXN0J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFB1Ymxpc2hEZXRhaWwgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflj5HluIPkv6Hmga/pobUnXG4gICAgfVxuICAgIGNvbXBvbmVudHMgPSB7XG5cbiAgICB9XG5cbiAgICAvLyBtaXhpbnMgPSBbdGVzdE1peGluXVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIG5pY2tOYW1lOiAnJywvL+aYteensFxuICAgICAgYXZhdGFyVXJsOiAnJywvL+WktOWDj1xuICAgICAgYnJpZWY6ICcnLC8v5Lqn5ZOB566A5LuLXG4gICAgICBwaWNzOiBbXSwvL+S6p+WTgeWbvueJh1xuICAgICAgdGVsbDogJycsLy/ogZTns7vmlrnlvI9cbiAgICAgIHByaWNlOm51bGwsLy/ku7fmoLxcbiAgICAgIHR5cGVBcnI6IFsn6K+36YCJ5oup57G75Z6LJywgJ+WutuWFtycsICfnlLXlmagnLCAn5Lmm5pysJ10sLy/nsbvlnotcbiAgICAgIHR5cGVJbmRleDogMCwvL+exu+Wei+e0ouW8lVxuICAgICAgbGFiZWw6JycsLy/nsbvlnotcbiAgICAgIGFkZHJlc3M6JycsLy/lnLDlnYBcbiAgICAgIGlzQWNjcmVkaXQ6IGZhbHNlLC8v6I635Y+W5L2N572u5piv5ZCm5o6I5p2DXG4gICAgICB0b2tlbjonJywvL3Rva2VuXG4gICAgICB1c2VyX2lkOicnLFxuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcblxuICAgICAgLy/ngrnlh7vmiJHopoHlj5HluIPkv6Hmga9cbiAgICAgIGZvcm1TdWJtaXQoZSkge1xuICAgICAgICBjb25zb2xlLmxvZygnZm9ybScsZS5kZXRhaWwudmFsdWUpO1xuICAgICAgICBsZXQgdmFsdWUgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgaWYgKCF2YWx1ZS5kZXNjcmlwdGlvbikge1xuICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfkuqflk4HnroDku4vkuI3og73kuLrnqbonLFxuICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgfSBlbHNlIGlmICghdmFsdWUuaW1hZ2UpIHtcbiAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICAgICAgICBjb250ZW50OiAn5Zu+54mH5LiN6IO95Li656m6JyxcbiAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKCF2YWx1ZS5waG9uZU51bWJlcikge1xuICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfogZTns7vmlrnlvI/kuI3og73kuLrnqbonLFxuICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1lbHNlIGlmICghKC9eMVxcZHsxMH0kLy50ZXN0KHZhbHVlLnBob25lTnVtYmVyKSkpIHtcbiAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICAgICAgICBjb250ZW50OiAn6IGU57O75pa55byP5pyJ6K+vJyxcbiAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9ZWxzZSBpZiAoIXZhbHVlLnByaWNlKSB7XG4gICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICAgICAgY29udGVudDogJ+S7t+agvOS4jeiDveS4uuepuicsXG4gICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfWVsc2UgaWYgKCF2YWx1ZS5sYWJlbCkge1xuICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfnsbvlnovkuI3og73kuLrnqbonLFxuICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1lbHNlIGlmICghdmFsdWUuYWRkcmVzcykge1xuICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICflnLDlnYDkuI3og73kuLrnqbonLFxuICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2VweS5zaG93TG9hZGluZyh7XG4gICAgICAgICAgdGl0bGU6ICflj5HluIPkuK0uLi4nLFxuICAgICAgICAgIG1hc2s6IHRydWUsXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB2YWx1ZS53ZUNoYXROYW1lPXRoaXMubmlja05hbWU7XG4gICAgICAgICAgdmFsdWUuYXZhdGFyPXRoaXMuYXZhdGFyVXJsO1xuICAgICAgICAgIHZhbHVlLnVzZXJfaWQ9dGhpcy51c2VyX2lkO1xuICAgICAgICAgIGxldCBkYXRhPXt9O1xuICAgICAgICAgIGRhdGEuaW5mbz12YWx1ZTtcbiAgICAgICAgICBkYXRhLnRva2VuPXRoaXMudG9rZW47XG4gICAgICAgICAgY29uc29sZS5sb2coJ+S4iuS8oOS/oeaBrycsZGF0YSk7XG4gICAgICAgICAgbGV0IHJlcyA9IHJlcXVlc3QucHVibGlzaEdvb2RzTXNnKGRhdGEpOyBcbiAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKCk7XG4gICAgICAgIH0gIFxuICAgICAgfSxcblxuICAgICAgLy/ngrnlh7vmjojmnYPmjInpkq7vvIzojrflj5bnlKjmiLfkv6Hmga9cbiAgICAgYXN5bmMgZ2V0VXNlckluZm8oZSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygn55So5oi35L+h5oGvJyxlKTtcbiAgICAgICAgaWYgKGUuZGV0YWlsLnVzZXJJbmZvKSB7XG4gICAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCB0aGlzLiRwYXJlbnQubG9naW4oZS5kZXRhaWwudXNlckluZm8pOyAvL+iOt+WPlueUqOaIt+S/oeaBr1xuICAgICAgICAgIHRoaXMubmlja05hbWUgPSBkYXRhLnVzZXJJbmZvLm5pY2tOYW1lO1xuICAgICAgICAgIHRoaXMuYXZhdGFyVXJsID0gZGF0YS51c2VySW5mby5hdmF0YXJVcmw7XG4gICAgICAgICAgdGhpcy50b2tlbj1kYXRhLnRva2VuO1xuICAgICAgICAgIHRoaXMudXNlcl9pZD1kYXRhLnVzZXJJbmZvLmlkO1xuICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgICAgdGl0bGU6ICfmuKnppqjmj5DnpLonLCAvL+aPkOekuueahOagh+mimCxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfkuLrkuobmm7Tlpb3nmoTkuLrmgqjmnI3liqHvvIzpnIDopoHmgqjnmoTmjojmnYMnLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlLFxuICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0gIFxuICAgICAgfSxcblxuICAgICAgLy/pgInmi6nlm77niYdcbiAgICAgIGNob29zZUltZygpe1xuICAgICAgICB3eC5jaG9vc2VJbWFnZSh7XG4gICAgICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHRlbXBGaWxlUGF0aHMgPSByZXMudGVtcEZpbGVQYXRoc1xuICAgICAgICAgICAgY29uc29sZS5sb2codGVtcEZpbGVQYXRocyk7XG4gICAgICAgICAgICB3eC51cGxvYWRGaWxlKHtcbiAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9leGFtcGxlLndlaXhpbi5xcS5jb20vdXBsb2FkJywgLy8g5LuF5Li656S65L6L77yM6Z2e55yf5a6e55qE5o6l5Y+j5Zyw5Z2AXG4gICAgICAgICAgICAgIGZpbGVQYXRoOiB0ZW1wRmlsZVBhdGhzWzBdLFxuICAgICAgICAgICAgICBuYW1lOiAnZmlsZScsXG4gICAgICAgICAgICAgIGZvcm1EYXRhOiB7XG4gICAgICAgICAgICAgICAgdXNlcjogJ3Rlc3QnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlcy5kYXRhXG4gICAgICAgICAgICAgICAgLy8gZG8gc29tZXRoaW5nXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSxcblxuICAgICAgLy/ngrnlh7vkuIrkvKDlm77niYdcbiAgICAgIGFkZEltZygpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICB3eC5jaG9vc2VJbWFnZSh7XG4gICAgICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXMnLCByZXMpO1xuICAgICAgICAgICAgbGV0IHBpY3MgPSByZXMudGVtcEZpbGVQYXRocztcbiAgICAgICAgICAgIHNlbGYucGljcyA9IHBpY3M7XG4gICAgICAgICAgICBzZWxmLiRhcHBseSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0sXG5cbiAgICAgIC8v5Yig6Zmk5Zu+54mHXG4gICAgICBkZWxldGVJbWcoaWR4KSB7XG4gICAgICAgIHRoaXMucGljcyA9IHRoaXMucGljcy5zcGxpY2UoMSwgaWR4KTtcbiAgICAgIH0sXG5cbiAgICAgIC8v6YCJ5oup5Lqn5ZOB57G75Z6LXG4gICAgICBzZWxlY3RUeXBlKGUpe1xuICAgICAgICBjb25zb2xlLmxvZygn5Lqn5ZOB57G75Z6LJyxlLmRldGFpbC52YWx1ZSk7XG4gICAgICAgIHRoaXMudHlwZUluZGV4PWUuZGV0YWlsLnZhbHVlO1xuICAgICAgfSxcblxuICAgICAgLy8g6I635Y+W5Zyw5Z2AXG4gICAgICBnZXRMb2NhdGlvbigpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICB3eC5jaG9vc2VMb2NhdGlvbih7XG4gICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ+iOt+WPluWcsOeQhuS9jee9ruaIkOWKnycsIHJlcyk7XG4gICAgICAgICAgICBzZWxmLmFkZHJlc3M9cmVzLmFkZHJlc3M7XG4gICAgICAgICAgICBzZWxmLiRhcHBseSgpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbDogKHJlcykgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ+iOt+WPluWcsOeQhuS9jee9ruWksei0pScsIHJlcyk7XG4gICAgICAgICAgICBzZWxmLmlzQWNjcmVkaXQgPSB0cnVlO1xuICAgICAgICAgICAgc2VsZi4kYXBwbHkoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9LFxuXG4gICAgICAvLyDorr7nva7mjojmnYPliJfooahcbiAgICAgIGhhbmRsZVNldHRpbmcoZSkge1xuICAgICAgICBjb25zb2xlLmxvZygnZScsIGUpO1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmICghZS5kZXRhaWwuYXV0aFNldHRpbmdbJ3Njb3BlLnVzZXJMb2NhdGlvbiddKSB7XG4gICAgICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgICAgIHRpdGxlOiAn6K2m5ZGKJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfoi6XkuI3miZPlvIDmjojmnYPvvIzliJnml6Dms5Xojrflj5blrprkvY3vvIEnLFxuICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2VcbiAgICAgICAgICB9KVxuICAgICAgICAgIHNlbGYuaXNBY2NyZWRpdCA9IHRydWU7XG4gICAgICAgICAgc2VsZi4kYXBwbHkoKTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHd4LnNob3dNb2RhbCh7XG4gICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICAgICAgICBjb250ZW50OiAn5oKo5bey5o6I5p2D77yM5Y+v5Lul6YCJ5oup5a6a5L2N77yBJyxcbiAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlXG4gICAgICAgICAgfSlcbiAgICAgICAgICBzZWxmLmlzQWNjcmVkaXQgPSBmYWxzZTtcbiAgICAgICAgICBzZWxmLiRhcHBseSgpO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuXG4gICAgfVxuXG4gICAgYXN5bmMgb25Mb2FkKCkge1xuICAgICAgLy8gbGV0IHVzZXJJbmZvID0gYXdhaXQgdGhpcy4kcGFyZW50LmxvZ2luKCk7IC8v6I635Y+W55So5oi35L+h5oGvXG4gICAgICAvLyBjb25zb2xlLmxvZygnb25sb2FkLXVzZXJpbmZvJyx1c2VySW5mbyk7XG4gICAgICAvLyB0aGlzLm5pY2tOYW1lID0gdXNlckluZm8ubmlja05hbWU7XG4gICAgICAvLyB0aGlzLmF2YXRhclVybCA9IHVzZXJJbmZvLmF2YXRhclVybDtcbiAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgfVxuICB9XG5cbiJdfQ==