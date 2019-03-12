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
      brief: '',
      pics: [],
      name: '',
      tell: '',
      nickName: '',
      avatarUrl: '',
      typeArr: ['请选择类型', '家具', '电器', '书本'],
      typeIndex: 0,
      isAccredit: false
    }, _this.computed = {}, _this.methods = {

      //点击我要发布信息
      formSubmit: function formSubmit(e) {
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
        } else {
          var d1 = _request2.default.publishGoodsMsg(msg);
          var d2 = _request2.default.uploadImg(msg);
        }
        _wepy2.default.hideLoading();
      },


      //点击授权按钮也，获取用户信息
      getUserInfo: function getUserInfo(e) {
        if (e.detail.userInfo) {
          this.isShowBtn = false;
          this.$parent.globalData.userInfo = e.detail.userInfo;
          this.nickName = e.detail.userInfo.nickName;
          this.avatarUrl = e.detail.userInfo.avatarUrl;
        } else {
          this.isShowBtn = true;
          _wepy2.default.showModal({
            title: '温馨提示', //提示的标题,
            content: '为了更好的为您服务，需要您的授权', //提示的内容,
            showCancel: false
          });
        }
        this.$apply();
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


      // 获取地址
      getLocation: function getLocation() {
        var self = this;
        wx.chooseLocation({
          success: function success(res) {
            console.log('获取地理位置成功', res);
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
    key: 'uploadInfo',


    // 上传信息
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(msg) {
        var res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                res = _request2.default.publishGoodsMsg(msg);

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function uploadInfo(_x) {
        return _ref2.apply(this, arguments);
      }

      return uploadInfo;
    }()
  }, {
    key: 'onLoad',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var userInfo;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.$parent.login();

              case 2:
                userInfo = _context2.sent;
                //获取用户信息
                console.log(userInfo);
                this.nickName = userInfo.nickName;
                this.avatarUrl = userInfo.avatarUrl;
                this.$apply();

              case 7:
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


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(PublishDetail , 'pages/publish-detail/publish-detail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1Ymxpc2gtZGV0YWlsLmpzIl0sIm5hbWVzIjpbIlB1Ymxpc2hEZXRhaWwiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImRhdGEiLCJicmllZiIsInBpY3MiLCJuYW1lIiwidGVsbCIsIm5pY2tOYW1lIiwiYXZhdGFyVXJsIiwidHlwZUFyciIsInR5cGVJbmRleCIsImlzQWNjcmVkaXQiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJmb3JtU3VibWl0IiwiZSIsIndlcHkiLCJzaG93TG9hZGluZyIsInRpdGxlIiwibWFzayIsInZhbHVlIiwiZGV0YWlsIiwic2hvd01vZGFsIiwiY29udGVudCIsInNob3dDYW5jZWwiLCJkMSIsInJlcXVlc3QiLCJwdWJsaXNoR29vZHNNc2ciLCJtc2ciLCJkMiIsInVwbG9hZEltZyIsImhpZGVMb2FkaW5nIiwiZ2V0VXNlckluZm8iLCJ1c2VySW5mbyIsImlzU2hvd0J0biIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwiJGFwcGx5IiwiYWRkSW1nIiwic2VsZiIsInd4IiwiY2hvb3NlSW1hZ2UiLCJzdWNjZXNzIiwicmVzIiwiY29uc29sZSIsImxvZyIsInRlbXBGaWxlUGF0aHMiLCJkZWxldGVJbWciLCJpZHgiLCJzcGxpY2UiLCJnZXRMb2NhdGlvbiIsImNob29zZUxvY2F0aW9uIiwiZmFpbCIsImhhbmRsZVNldHRpbmciLCJhdXRoU2V0dGluZyIsImV2ZW50cyIsImxvZ2luIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGE7Ozs7Ozs7Ozs7Ozs7O29NQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYSxFLFFBTWJDLEksR0FBTztBQUNMQyxhQUFPLEVBREY7QUFFTEMsWUFBTSxFQUZEO0FBR0xDLFlBQU0sRUFIRDtBQUlMQyxZQUFNLEVBSkQ7QUFLTEMsZ0JBQVUsRUFMTDtBQU1MQyxp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ckIsZUFBS3lDLEk7O2tCQUEzQjNELGEiLCJmaWxlIjoicHVibGlzaC1kZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi4vLi4vbGliL2FwaS9yZXF1ZXN0J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFB1Ymxpc2hEZXRhaWwgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflj5HluIPkv6Hmga/pobUnXG4gICAgfVxuICAgIGNvbXBvbmVudHMgPSB7XG5cbiAgICB9XG5cbiAgICAvLyBtaXhpbnMgPSBbdGVzdE1peGluXVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIGJyaWVmOiAnJyxcbiAgICAgIHBpY3M6IFtdLFxuICAgICAgbmFtZTogJycsXG4gICAgICB0ZWxsOiAnJyxcbiAgICAgIG5pY2tOYW1lOiAnJyxcbiAgICAgIGF2YXRhclVybDogJycsXG4gICAgICB0eXBlQXJyOiBbJ+ivt+mAieaLqeexu+WeiycsICflrrblhbcnLCAn55S15ZmoJywgJ+S5puacrCddLFxuICAgICAgdHlwZUluZGV4OiAwLFxuICAgICAgaXNBY2NyZWRpdDogZmFsc2UsXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG5cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuXG4gICAgICAvL+eCueWHu+aIkeimgeWPkeW4g+S/oeaBr1xuICAgICAgZm9ybVN1Ym1pdChlKSB7XG4gICAgICAgIHdlcHkuc2hvd0xvYWRpbmcoe1xuICAgICAgICAgIHRpdGxlOiAn5Y+R5biD5LitLi4uJyxcbiAgICAgICAgICBtYXNrOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgICAgbGV0IHZhbHVlID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgIGlmICghdmFsdWUuYnJpZWYpIHtcbiAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICAgICAgICBjb250ZW50OiAn5Lqn5ZOB566A5LuL5LiN6IO95Li656m6JyxcbiAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlLFxuICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoIXZhbHVlLnBpY3MpIHtcbiAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICAgICAgICBjb250ZW50OiAn5Zu+54mH5LiN6IO95Li656m6JyxcbiAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKCF2YWx1ZS50ZWxsKSB7XG4gICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICAgICAgY29udGVudDogJ+iBlOezu+aWueW8j+S4jeiDveS4uuepuicsXG4gICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZXQgZDEgPSByZXF1ZXN0LnB1Ymxpc2hHb29kc01zZyhtc2cpO1xuICAgICAgICAgIGxldCBkMiA9IHJlcXVlc3QudXBsb2FkSW1nKG1zZyk7XG4gICAgICAgIH1cbiAgICAgICAgd2VweS5oaWRlTG9hZGluZygpO1xuICAgICAgfSxcblxuICAgICAgLy/ngrnlh7vmjojmnYPmjInpkq7kuZ/vvIzojrflj5bnlKjmiLfkv6Hmga9cbiAgICAgIGdldFVzZXJJbmZvKGUpIHtcbiAgICAgICAgaWYgKGUuZGV0YWlsLnVzZXJJbmZvKSB7XG4gICAgICAgICAgdGhpcy5pc1Nob3dCdG4gPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51c2VySW5mbyA9IGUuZGV0YWlsLnVzZXJJbmZvO1xuICAgICAgICAgIHRoaXMubmlja05hbWUgPSBlLmRldGFpbC51c2VySW5mby5uaWNrTmFtZTtcbiAgICAgICAgICB0aGlzLmF2YXRhclVybCA9IGUuZGV0YWlsLnVzZXJJbmZvLmF2YXRhclVybDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmlzU2hvd0J0biA9IHRydWU7XG4gICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgICAgdGl0bGU6ICfmuKnppqjmj5DnpLonLCAvL+aPkOekuueahOagh+mimCxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfkuLrkuobmm7Tlpb3nmoTkuLrmgqjmnI3liqHvvIzpnIDopoHmgqjnmoTmjojmnYMnLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlLFxuICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgIH0sXG5cbiAgICAgIC8v54K55Ye75LiK5Lyg5Zu+54mHXG4gICAgICBhZGRJbWcoKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgd3guY2hvb3NlSW1hZ2Uoe1xuICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVzJywgcmVzKTtcbiAgICAgICAgICAgIGxldCBwaWNzID0gcmVzLnRlbXBGaWxlUGF0aHM7XG4gICAgICAgICAgICBzZWxmLnBpY3MgPSBwaWNzO1xuICAgICAgICAgICAgc2VsZi4kYXBwbHkoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9LFxuXG4gICAgICAvL+WIoOmZpOWbvueJh1xuICAgICAgZGVsZXRlSW1nKGlkeCkge1xuICAgICAgICB0aGlzLnBpY3MgPSB0aGlzLnBpY3Muc3BsaWNlKDEsIGlkeCk7XG4gICAgICB9LFxuXG4gICAgICAvLyDojrflj5blnLDlnYBcbiAgICAgIGdldExvY2F0aW9uKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHd4LmNob29zZUxvY2F0aW9uKHtcbiAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygn6I635Y+W5Zyw55CG5L2N572u5oiQ5YqfJywgcmVzKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWw6IChyZXMpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfojrflj5blnLDnkIbkvY3nva7lpLHotKUnLCByZXMpO1xuICAgICAgICAgICAgc2VsZi5pc0FjY3JlZGl0ID0gdHJ1ZTtcbiAgICAgICAgICAgIHNlbGYuJGFwcGx5KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSxcblxuICAgICAgLy8g6K6+572u5o6I5p2D5YiX6KGoXG4gICAgICBoYW5kbGVTZXR0aW5nKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2UnLCBlKTtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBpZiAoIWUuZGV0YWlsLmF1dGhTZXR0aW5nWydzY29wZS51c2VyTG9jYXRpb24nXSkge1xuICAgICAgICAgIHd4LnNob3dNb2RhbCh7XG4gICAgICAgICAgICB0aXRsZTogJ+itpuWRiicsXG4gICAgICAgICAgICBjb250ZW50OiAn6Iul5LiN5omT5byA5o6I5p2D77yM5YiZ5peg5rOV6I635Y+W5a6a5L2N77yBJyxcbiAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlXG4gICAgICAgICAgfSlcbiAgICAgICAgICBzZWxmLmlzQWNjcmVkaXQgPSB0cnVlO1xuICAgICAgICAgIHNlbGYuJGFwcGx5KCk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3eC5zaG93TW9kYWwoe1xuICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICAgICAgY29udGVudDogJ+aCqOW3suaOiOadg++8jOWPr+S7pemAieaLqeWumuS9je+8gScsXG4gICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZVxuICAgICAgICAgIH0pXG4gICAgICAgICAgc2VsZi5pc0FjY3JlZGl0ID0gZmFsc2U7XG4gICAgICAgICAgc2VsZi4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgIH1cblxuICAgIC8vIOS4iuS8oOS/oeaBr1xuICAgIGFzeW5jIHVwbG9hZEluZm8obXNnKSB7XG4gICAgICBsZXQgcmVzID0gcmVxdWVzdC5wdWJsaXNoR29vZHNNc2cobXNnKTtcbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG5cbiAgICB9XG5cbiAgICBhc3luYyBvbkxvYWQoKSB7XG4gICAgICBsZXQgdXNlckluZm8gPSBhd2FpdCB0aGlzLiRwYXJlbnQubG9naW4oKTsgLy/ojrflj5bnlKjmiLfkv6Hmga9cbiAgICAgIGNvbnNvbGUubG9nKHVzZXJJbmZvKTtcbiAgICAgIHRoaXMubmlja05hbWUgPSB1c2VySW5mby5uaWNrTmFtZTtcbiAgICAgIHRoaXMuYXZhdGFyVXJsID0gdXNlckluZm8uYXZhdGFyVXJsO1xuICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICB9XG4gIH1cbiJdfQ==