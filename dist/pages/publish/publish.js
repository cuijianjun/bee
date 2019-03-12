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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1Ymxpc2guanMiXSwibmFtZXMiOlsiUHVibGlzaERldGFpbCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiZGF0YSIsIm5pY2tOYW1lIiwiYXZhdGFyVXJsIiwiYnJpZWYiLCJwaWNzIiwidGVsbCIsInByaWNlIiwidHlwZUFyciIsInR5cGVJbmRleCIsImxhYmVsIiwiYWRkcmVzcyIsImlzQWNjcmVkaXQiLCJ0b2tlbiIsInVzZXJfaWQiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJmb3JtU3VibWl0IiwiZSIsImNvbnNvbGUiLCJsb2ciLCJkZXRhaWwiLCJ2YWx1ZSIsImRlc2NyaXB0aW9uIiwid2VweSIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsInNob3dDYW5jZWwiLCJpbWFnZSIsInBob25lTnVtYmVyIiwidGVzdCIsInNob3dMb2FkaW5nIiwibWFzayIsIndlQ2hhdE5hbWUiLCJhdmF0YXIiLCJpbmZvIiwicmVzIiwicmVxdWVzdCIsInB1Ymxpc2hHb29kc01zZyIsImhpZGVMb2FkaW5nIiwiZ2V0VXNlckluZm8iLCJ1c2VySW5mbyIsIiRwYXJlbnQiLCJsb2dpbiIsImlkIiwiJGFwcGx5IiwiYWRkSW1nIiwic2VsZiIsInd4IiwiY2hvb3NlSW1hZ2UiLCJzdWNjZXNzIiwidGVtcEZpbGVQYXRocyIsImRlbGV0ZUltZyIsImlkeCIsInNwbGljZSIsInNlbGVjdFR5cGUiLCJnZXRMb2NhdGlvbiIsImNob29zZUxvY2F0aW9uIiwiZmFpbCIsImhhbmRsZVNldHRpbmciLCJhdXRoU2V0dGluZyIsImV2ZW50cyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxhOzs7Ozs7Ozs7Ozs7OztvTUFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWEsRSxRQU1iQyxJLEdBQU87QUFDTEMsZ0JBQVUsRUFETCxFQUNR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LGNBRkU7QUFHWEMsd0JBQVk7QUFIRCxXQUFiO0FBS0FvQixlQUFLcEMsVUFBTCxHQUFrQixLQUFsQjtBQUNBb0MsZUFBS0YsTUFBTDtBQUNEO0FBQ0Y7QUF0Sk8sSyxRQTBKVmdCLE0sR0FBUyxFOzs7QUFoTFQ7Ozs7Ozs7Ozs7QUFxTEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBS2hCLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFqTXVDdEIsZUFBS3VDLEk7O2tCQUEzQmxFLGEiLCJmaWxlIjoicHVibGlzaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgcmVxdWVzdCBmcm9tICcuLi8uLi9saWIvYXBpL3JlcXVlc3QnXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHVibGlzaERldGFpbCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WPkeW4g+S/oeaBr+mhtSdcbiAgICB9XG4gICAgY29tcG9uZW50cyA9IHtcblxuICAgIH1cblxuICAgIC8vIG1peGlucyA9IFt0ZXN0TWl4aW5dXG5cbiAgICBkYXRhID0ge1xuICAgICAgbmlja05hbWU6ICcnLC8v5pi156ewXG4gICAgICBhdmF0YXJVcmw6ICcnLC8v5aS05YOPXG4gICAgICBicmllZjogJycsLy/kuqflk4HnroDku4tcbiAgICAgIHBpY3M6IFtdLC8v5Lqn5ZOB5Zu+54mHXG4gICAgICB0ZWxsOiAnJywvL+iBlOezu+aWueW8j1xuICAgICAgcHJpY2U6bnVsbCwvL+S7t+agvFxuICAgICAgdHlwZUFycjogWyfor7fpgInmi6nnsbvlnosnLCAn5a625YW3JywgJ+eUteWZqCcsICfkuabmnKwnXSwvL+exu+Wei1xuICAgICAgdHlwZUluZGV4OiAwLC8v57G75Z6L57Si5byVXG4gICAgICBsYWJlbDonJywvL+exu+Wei1xuICAgICAgYWRkcmVzczonJywvL+WcsOWdgFxuICAgICAgaXNBY2NyZWRpdDogZmFsc2UsLy/ojrflj5bkvY3nva7mmK/lkKbmjojmnYNcbiAgICAgIHRva2VuOicnLC8vdG9rZW5cbiAgICAgIHVzZXJfaWQ6JycsXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG5cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuXG4gICAgICAvL+eCueWHu+aIkeimgeWPkeW4g+S/oeaBr1xuICAgICAgZm9ybVN1Ym1pdChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdmb3JtJyxlLmRldGFpbC52YWx1ZSk7XG4gICAgICAgIGxldCB2YWx1ZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICBpZiAoIXZhbHVlLmRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICAgICAgY29udGVudDogJ+S6p+WTgeeugOS7i+S4jeiDveS4uuepuicsXG4gICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcbiAgICAgICAgICB9KTtcblxuICAgICAgICB9IGVsc2UgaWYgKCF2YWx1ZS5pbWFnZSkge1xuICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICflm77niYfkuI3og73kuLrnqbonLFxuICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoIXZhbHVlLnBob25lTnVtYmVyKSB7XG4gICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICAgICAgY29udGVudDogJ+iBlOezu+aWueW8j+S4jeiDveS4uuepuicsXG4gICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfWVsc2UgaWYgKCEoL14xXFxkezEwfSQvLnRlc3QodmFsdWUucGhvbmVOdW1iZXIpKSkge1xuICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfogZTns7vmlrnlvI/mnInor68nLFxuICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1lbHNlIGlmICghdmFsdWUucHJpY2UpIHtcbiAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICAgICAgICBjb250ZW50OiAn5Lu35qC85LiN6IO95Li656m6JyxcbiAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9ZWxzZSBpZiAoIXZhbHVlLmxhYmVsKSB7XG4gICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICAgICAgY29udGVudDogJ+exu+Wei+S4jeiDveS4uuepuicsXG4gICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfWVsc2UgaWYgKCF2YWx1ZS5hZGRyZXNzKSB7XG4gICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICAgICAgY29udGVudDogJ+WcsOWdgOS4jeiDveS4uuepuicsXG4gICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3ZXB5LnNob3dMb2FkaW5nKHtcbiAgICAgICAgICB0aXRsZTogJ+WPkeW4g+S4rS4uLicsXG4gICAgICAgICAgbWFzazogdHJ1ZSxcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHZhbHVlLndlQ2hhdE5hbWU9dGhpcy5uaWNrTmFtZTtcbiAgICAgICAgICB2YWx1ZS5hdmF0YXI9dGhpcy5hdmF0YXJVcmw7XG4gICAgICAgICAgdmFsdWUudXNlcl9pZD10aGlzLnVzZXJfaWQ7XG4gICAgICAgICAgbGV0IGRhdGE9e307XG4gICAgICAgICAgZGF0YS5pbmZvPXZhbHVlO1xuICAgICAgICAgIGRhdGEudG9rZW49dGhpcy50b2tlbjtcbiAgICAgICAgICBjb25zb2xlLmxvZygn5LiK5Lyg5L+h5oGvJyxkYXRhKTtcbiAgICAgICAgICBsZXQgcmVzID0gcmVxdWVzdC5wdWJsaXNoR29vZHNNc2coZGF0YSk7IFxuICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgfSAgXG4gICAgICB9LFxuXG4gICAgICAvL+eCueWHu+aOiOadg+aMiemSru+8jOiOt+WPlueUqOaIt+S/oeaBr1xuICAgICBhc3luYyBnZXRVc2VySW5mbyhlKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCfnlKjmiLfkv6Hmga8nLGUpO1xuICAgICAgICBpZiAoZS5kZXRhaWwudXNlckluZm8pIHtcbiAgICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IHRoaXMuJHBhcmVudC5sb2dpbihlLmRldGFpbC51c2VySW5mbyk7IC8v6I635Y+W55So5oi35L+h5oGvXG4gICAgICAgICAgdGhpcy5uaWNrTmFtZSA9IGRhdGEudXNlckluZm8ubmlja05hbWU7XG4gICAgICAgICAgdGhpcy5hdmF0YXJVcmwgPSBkYXRhLnVzZXJJbmZvLmF2YXRhclVybDtcbiAgICAgICAgICB0aGlzLnRva2VuPWRhdGEudG9rZW47XG4gICAgICAgICAgdGhpcy51c2VyX2lkPWRhdGEudXNlckluZm8uaWQ7XG4gICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgICB0aXRsZTogJ+a4qemmqOaPkOekuicsIC8v5o+Q56S655qE5qCH6aKYLFxuICAgICAgICAgICAgY29udGVudDogJ+S4uuS6huabtOWlveeahOS4uuaCqOacjeWKoe+8jOmcgOimgeaCqOeahOaOiOadgycsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgfSAgXG4gICAgICB9LFxuXG4gICAgICAvL+eCueWHu+S4iuS8oOWbvueJh1xuICAgICAgYWRkSW1nKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHd4LmNob29zZUltYWdlKHtcbiAgICAgICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlcycsIHJlcyk7XG4gICAgICAgICAgICBsZXQgcGljcyA9IHJlcy50ZW1wRmlsZVBhdGhzO1xuICAgICAgICAgICAgc2VsZi5waWNzID0gcGljcztcbiAgICAgICAgICAgIHNlbGYuJGFwcGx5KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSxcblxuICAgICAgLy/liKDpmaTlm77niYdcbiAgICAgIGRlbGV0ZUltZyhpZHgpIHtcbiAgICAgICAgdGhpcy5waWNzID0gdGhpcy5waWNzLnNwbGljZSgxLCBpZHgpO1xuICAgICAgfSxcblxuICAgICAgLy/pgInmi6nkuqflk4HnsbvlnotcbiAgICAgIHNlbGVjdFR5cGUoZSl7XG4gICAgICAgIGNvbnNvbGUubG9nKCfkuqflk4HnsbvlnosnLGUuZGV0YWlsLnZhbHVlKTtcbiAgICAgICAgdGhpcy50eXBlSW5kZXg9ZS5kZXRhaWwudmFsdWU7XG4gICAgICB9LFxuXG4gICAgICAvLyDojrflj5blnLDlnYBcbiAgICAgIGdldExvY2F0aW9uKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHd4LmNob29zZUxvY2F0aW9uKHtcbiAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygn6I635Y+W5Zyw55CG5L2N572u5oiQ5YqfJywgcmVzKTtcbiAgICAgICAgICAgIHNlbGYuYWRkcmVzcz1yZXMuYWRkcmVzcztcbiAgICAgICAgICAgIHNlbGYuJGFwcGx5KCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWlsOiAocmVzKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygn6I635Y+W5Zyw55CG5L2N572u5aSx6LSlJywgcmVzKTtcbiAgICAgICAgICAgIHNlbGYuaXNBY2NyZWRpdCA9IHRydWU7XG4gICAgICAgICAgICBzZWxmLiRhcHBseSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0sXG5cbiAgICAgIC8vIOiuvue9ruaOiOadg+WIl+ihqFxuICAgICAgaGFuZGxlU2V0dGluZyhlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlJywgZSk7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgaWYgKCFlLmRldGFpbC5hdXRoU2V0dGluZ1snc2NvcGUudXNlckxvY2F0aW9uJ10pIHtcbiAgICAgICAgICB3eC5zaG93TW9kYWwoe1xuICAgICAgICAgICAgdGl0bGU6ICforablkYonLFxuICAgICAgICAgICAgY29udGVudDogJ+iLpeS4jeaJk+W8gOaOiOadg++8jOWImeaXoOazleiOt+WPluWumuS9je+8gScsXG4gICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZVxuICAgICAgICAgIH0pXG4gICAgICAgICAgc2VsZi5pc0FjY3JlZGl0ID0gdHJ1ZTtcbiAgICAgICAgICBzZWxmLiRhcHBseSgpO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfmgqjlt7LmjojmnYPvvIzlj6/ku6XpgInmi6nlrprkvY3vvIEnLFxuICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2VcbiAgICAgICAgICB9KVxuICAgICAgICAgIHNlbGYuaXNBY2NyZWRpdCA9IGZhbHNlO1xuICAgICAgICAgIHNlbGYuJGFwcGx5KCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG5cbiAgICB9XG5cbiAgICBhc3luYyBvbkxvYWQoKSB7XG4gICAgICAvLyBsZXQgdXNlckluZm8gPSBhd2FpdCB0aGlzLiRwYXJlbnQubG9naW4oKTsgLy/ojrflj5bnlKjmiLfkv6Hmga9cbiAgICAgIC8vIGNvbnNvbGUubG9nKCdvbmxvYWQtdXNlcmluZm8nLHVzZXJJbmZvKTtcbiAgICAgIC8vIHRoaXMubmlja05hbWUgPSB1c2VySW5mby5uaWNrTmFtZTtcbiAgICAgIC8vIHRoaXMuYXZhdGFyVXJsID0gdXNlckluZm8uYXZhdGFyVXJsO1xuICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICB9XG4gIH1cblxuIl19