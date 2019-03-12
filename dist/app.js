'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

var _request = require('./lib/api/request.js');

var _request2 = _interopRequireDefault(_request);

var _util = require('./lib/util.js');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import {
//   setStore
// } from 'wepy-redux'
// import configStore from './store'

// const store = configStore();
// setStore(store);

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/index/index', 'pages/search/search', 'pages/detail/detail', 'pages/publish/publish', 'pages/publish-detail/publish-detail', 'pages/my/index', 'pages/my/myPublish', 'pages/my/myOrder', 'pages/infoList/index', 'pages/business/index'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: 'white',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black'
      },
      tabBar: {
        color: '#7F8389',
        selectedColor: '#F94545',
        backgroundColor: '#fff',
        borderStyle: 'white',
        list: [{
          pagePath: 'pages/index/index',
          text: '首页',
          iconPath: 'static/images/navigationBar/homepage.png',
          selectedIconPath: 'static/images/navigationBar/homepage_active.png'
        }, {
          iconPath: 'static/images/navigationBar/add.png',
          selectedIconPath: 'static/images/navigationBar/add_active.png',
          pagePath: 'pages/publish/publish',
          text: '发布'
        }, {
          iconPath: 'static/images/navigationBar/people.png',
          selectedIconPath: 'static/images/navigationBar/people_active.png',
          pagePath: 'pages/my/index',
          text: '我的'
        }]
      }
    };
    _this.globalData = {
      userInfo: {}
    };

    _this.use('promisify');
    _this.use('requestfix');
    _this.intercept('request', {
      // 发出请求时的回调函数
      config: function config(p) {

        var publicParams = this.globalData.public_params;
        for (var k in publicParams) {
          p.data[k] = publicParams[k];
        }
        // console.log("p", p);
        return p;
      },


      // 请求成功后的回调函数
      success: function success(p) {
        // if (p.data.code != 0) { //请求数据失败
        //   if (p.data && p.data.msg) {
        //     wx.showToast({
        //       title: p.data.msg || "请求失败",
        //       icon: 'none',
        //       duration: 2000
        //     });
        //   }
        // }
        // console.log('请求成功');
        return p;
      },


      // 请求失败后的回调函数
      fail: function fail(p) {
        _wepy2.default.showToast({
          title: "网络异常，请稍后再试",
          icon: 'none'
        });
        // console.log('请求失败');
        return p;
      },


      // 请求完成时的回调函数(请求成功或失败都会被执行)
      complete: function complete(p) {
        // console.log("请求完成");
      }
    });
    return _this;
  }

  //更新小程序


  _createClass(_default, [{
    key: 'uploadApp',
    value: function uploadApp() {
      var updateManager = wx.getUpdateManager ? wx.getUpdateManager() : null;

      if (updateManager) {
        updateManager.onCheckForUpdate(function (res) {
          // 请求完新版本信息的回调
          console.log("hasUpdate", res.hasUpdate);
        });

        updateManager.onUpdateReady(function () {
          wx.showToast({
            title: '检测到新版本，正在更新...',
            icon: 'none'
          });

          setTimeout(function () {
            updateManager.applyUpdate();
          }, 2000);
        });
      }
    }

    //执行login方法获取用户登录信息

  }, {
    key: 'login',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(userInfo) {
        var self, data, code, d;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                self = this;
                data = {};

                if (!self.globalData.loginInfo) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt('return', self.globalData.loginInfo);

              case 4:
                _context.next = 6;
                return _wepy2.default.login();

              case 6:
                code = _context.sent;

                // console.log('code',code);
                data.code = code.code;
                if (userInfo) {
                  data.nickName = userInfo.nickName;
                  data.avatarUrl = userInfo.avatarUrl;
                  data.gender = userInfo.nickName;
                  data.country = userInfo.country;
                  data.city = userInfo.city;
                  console.log('用户信息', userInfo);
                }
                _context.next = 11;
                return _request2.default.login(data);

              case 11:
                d = _context.sent;

                console.log('执行登录', d);

                if (!d) {
                  _context.next = 20;
                  break;
                }

                d.userInfo.avatarUrl = _util2.default.sitePic(d.userInfo.avatarUrl) || '';
                self.globalData.userInfo.openid = d.userInfo.openid;
                self.globalData.userInfo.token = d.token;
                return _context.abrupt('return', d);

              case 20:
                console.log('登录失败');

              case 21:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function login(_x) {
        return _ref.apply(this, arguments);
      }

      return login;
    }()

    //获取设备信息

  }, {
    key: 'getSystemInfo',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var self, sysinfo, system_info;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                self = this;

                if (self.globalData.system_info) {
                  _context2.next = 6;
                  break;
                }

                _context2.next = 4;
                return _wepy2.default.getSystemInfo();

              case 4:
                sysinfo = _context2.sent;

                if (sysinfo) {
                  self.globalData.system_info = sysinfo;
                }

              case 6:
                system_info = self.globalData.system_info;
                return _context2.abrupt('return', system_info);

              case 8:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getSystemInfo() {
        return _ref2.apply(this, arguments);
      }

      return getSystemInfo;
    }()

    // async onLoad() {
    //   await wepy.login();
    //   this.globalData.userData = await wepy.getUserInfo();
    //   console.log('用户信息'，this.globalData.userData);
    // }

  }, {
    key: 'onLaunch',
    value: function onLaunch(options) {
      var self = this;
      self.globalData.scene = options.scene; //保存场景值
      self.uploadApp(); //更新小程序
      self.getSystemInfo(); //获取设备信息

      // self.onLoad()  //登陆，获取用户信息
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));
require('./_wepylogs.js')

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJ0YWJCYXIiLCJjb2xvciIsInNlbGVjdGVkQ29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJTdHlsZSIsImxpc3QiLCJwYWdlUGF0aCIsInRleHQiLCJpY29uUGF0aCIsInNlbGVjdGVkSWNvblBhdGgiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJ1c2UiLCJpbnRlcmNlcHQiLCJwIiwicHVibGljUGFyYW1zIiwicHVibGljX3BhcmFtcyIsImsiLCJkYXRhIiwic3VjY2VzcyIsImZhaWwiLCJ3ZXB5Iiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwiY29tcGxldGUiLCJ1cGRhdGVNYW5hZ2VyIiwid3giLCJnZXRVcGRhdGVNYW5hZ2VyIiwib25DaGVja0ZvclVwZGF0ZSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJoYXNVcGRhdGUiLCJvblVwZGF0ZVJlYWR5Iiwic2V0VGltZW91dCIsImFwcGx5VXBkYXRlIiwic2VsZiIsImxvZ2luSW5mbyIsImxvZ2luIiwiY29kZSIsIm5pY2tOYW1lIiwiYXZhdGFyVXJsIiwiZ2VuZGVyIiwiY291bnRyeSIsImNpdHkiLCJyZXF1ZXN0IiwiZCIsInV0aWwiLCJzaXRlUGljIiwib3BlbmlkIiwidG9rZW4iLCJzeXN0ZW1faW5mbyIsImdldFN5c3RlbUluZm8iLCJzeXNpbmZvIiwib3B0aW9ucyIsInNjZW5lIiwidXBsb2FkQXBwIiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7QUFxREUsc0JBQWM7QUFBQTs7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MkIsR0FBY2YsS0FBSzNCLFVBQUwsQ0FBZ0IwQyxXO2tEQUMzQkEsVzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OzZCQUVTRyxPLEVBQVM7QUFDaEIsVUFBSWxCLE9BQU8sSUFBWDtBQUNBQSxXQUFLM0IsVUFBTCxDQUFnQjhDLEtBQWhCLEdBQXdCRCxRQUFRQyxLQUFoQyxDQUZnQixDQUVzQjtBQUN0Q25CLFdBQUtvQixTQUFMLEdBSGdCLENBR0M7QUFDakJwQixXQUFLZ0IsYUFBTCxHQUpnQixDQUlLOztBQUVyQjtBQUNEOzs7O0VBbkwwQmhDLGVBQUtxQyxHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXG4gIGltcG9ydCByZXF1ZXN0IGZyb20gJy4vbGliL2FwaS9yZXF1ZXN0J1xuICBpbXBvcnQgdXRpbCBmcm9tICcuL2xpYi91dGlsLmpzJ1xuXG4gIC8vIGltcG9ydCB7XG4gIC8vICAgc2V0U3RvcmVcbiAgLy8gfSBmcm9tICd3ZXB5LXJlZHV4J1xuICAvLyBpbXBvcnQgY29uZmlnU3RvcmUgZnJvbSAnLi9zdG9yZSdcblxuICAvLyBjb25zdCBzdG9yZSA9IGNvbmZpZ1N0b3JlKCk7XG4gIC8vIHNldFN0b3JlKHN0b3JlKTtcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBwYWdlczogW1xuICAgICAgICAncGFnZXMvaW5kZXgvaW5kZXgnLFxuICAgICAgICAncGFnZXMvc2VhcmNoL3NlYXJjaCcsXG4gICAgICAgICdwYWdlcy9kZXRhaWwvZGV0YWlsJyxcbiAgICAgICAgJ3BhZ2VzL3B1Ymxpc2gvcHVibGlzaCcsXG4gICAgICAgICdwYWdlcy9wdWJsaXNoLWRldGFpbC9wdWJsaXNoLWRldGFpbCcsXG4gICAgICAgICdwYWdlcy9teS9pbmRleCcsXG4gICAgICAgICdwYWdlcy9teS9teVB1Ymxpc2gnLFxuICAgICAgICAncGFnZXMvbXkvbXlPcmRlcicsXG4gICAgICAgICdwYWdlcy9pbmZvTGlzdC9pbmRleCcsXG4gICAgICAgICdwYWdlcy9idXNpbmVzcy9pbmRleCcsXG4gICAgICBdLFxuICAgICAgd2luZG93OiB7XG4gICAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdsaWdodCcsXG4gICAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdXZUNoYXQnLFxuICAgICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnYmxhY2snXG4gICAgICB9LFxuICAgICAgdGFiQmFyOiB7XG4gICAgICAgIGNvbG9yOiAnIzdGODM4OScsXG4gICAgICAgIHNlbGVjdGVkQ29sb3I6ICcjRjk0NTQ1JyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICAgIGJvcmRlclN0eWxlOiAnd2hpdGUnLFxuICAgICAgICBsaXN0OiBbe1xuICAgICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvaW5kZXgvaW5kZXgnLFxuICAgICAgICAgIHRleHQ6ICfpppbpobUnLFxuICAgICAgICAgIGljb25QYXRoOiAnc3RhdGljL2ltYWdlcy9uYXZpZ2F0aW9uQmFyL2hvbWVwYWdlLnBuZycsXG4gICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJ3N0YXRpYy9pbWFnZXMvbmF2aWdhdGlvbkJhci9ob21lcGFnZV9hY3RpdmUucG5nJ1xuICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGljb25QYXRoOiAnc3RhdGljL2ltYWdlcy9uYXZpZ2F0aW9uQmFyL2FkZC5wbmcnLFxuICAgICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJ3N0YXRpYy9pbWFnZXMvbmF2aWdhdGlvbkJhci9hZGRfYWN0aXZlLnBuZycsXG4gICAgICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL3B1Ymxpc2gvcHVibGlzaCcsXG4gICAgICAgICAgICB0ZXh0OiAn5Y+R5biDJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWNvblBhdGg6ICdzdGF0aWMvaW1hZ2VzL25hdmlnYXRpb25CYXIvcGVvcGxlLnBuZycsXG4gICAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnc3RhdGljL2ltYWdlcy9uYXZpZ2F0aW9uQmFyL3Blb3BsZV9hY3RpdmUucG5nJyxcbiAgICAgICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvbXkvaW5kZXgnLFxuICAgICAgICAgICAgdGV4dDogJ+aIkeeahCdcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgfVxuXG4gICAgZ2xvYmFsRGF0YSA9IHtcbiAgICAgIHVzZXJJbmZvOnt9LFxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKVxuICAgICAgdGhpcy51c2UoJ3Byb21pc2lmeScpO1xuICAgICAgdGhpcy51c2UoJ3JlcXVlc3RmaXgnKTtcbiAgICAgIHRoaXMuaW50ZXJjZXB0KCdyZXF1ZXN0Jywge1xuICAgICAgICAvLyDlj5Hlh7ror7fmsYLml7bnmoTlm57osIPlh73mlbBcbiAgICAgICAgY29uZmlnKHApIHtcblxuICAgICAgICAgIGxldCBwdWJsaWNQYXJhbXMgPSB0aGlzLmdsb2JhbERhdGEucHVibGljX3BhcmFtcztcbiAgICAgICAgICBmb3IgKGxldCBrIGluIHB1YmxpY1BhcmFtcykge1xuICAgICAgICAgICAgcC5kYXRhW2tdID0gcHVibGljUGFyYW1zW2tdO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInBcIiwgcCk7XG4gICAgICAgICAgcmV0dXJuIHBcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDor7fmsYLmiJDlip/lkI7nmoTlm57osIPlh73mlbBcbiAgICAgICAgc3VjY2VzcyhwKSB7XG4gICAgICAgICAgLy8gaWYgKHAuZGF0YS5jb2RlICE9IDApIHsgLy/or7fmsYLmlbDmja7lpLHotKVcbiAgICAgICAgICAvLyAgIGlmIChwLmRhdGEgJiYgcC5kYXRhLm1zZykge1xuICAgICAgICAgIC8vICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgIC8vICAgICAgIHRpdGxlOiBwLmRhdGEubXNnIHx8IFwi6K+35rGC5aSx6LSlXCIsXG4gICAgICAgICAgLy8gICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgIC8vICAgICAgIGR1cmF0aW9uOiAyMDAwXG4gICAgICAgICAgLy8gICAgIH0pO1xuICAgICAgICAgIC8vICAgfVxuICAgICAgICAgIC8vIH1cbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygn6K+35rGC5oiQ5YqfJyk7XG4gICAgICAgICAgcmV0dXJuIHBcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDor7fmsYLlpLHotKXlkI7nmoTlm57osIPlh73mlbBcbiAgICAgICAgZmFpbChwKSB7XG4gICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgdGl0bGU6IFwi572R57uc5byC5bi477yM6K+356iN5ZCO5YaN6K+VXCIsXG4gICAgICAgICAgICBpY29uOiAnbm9uZSdcbiAgICAgICAgICB9KTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygn6K+35rGC5aSx6LSlJyk7XG4gICAgICAgICAgcmV0dXJuIHBcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDor7fmsYLlrozmiJDml7bnmoTlm57osIPlh73mlbAo6K+35rGC5oiQ5Yqf5oiW5aSx6LSl6YO95Lya6KKr5omn6KGMKVxuICAgICAgICBjb21wbGV0ZShwKSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coXCLor7fmsYLlrozmiJBcIik7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLy/mm7TmlrDlsI/nqIvluo9cbiAgICB1cGxvYWRBcHAoKSB7XG4gICAgICBjb25zdCB1cGRhdGVNYW5hZ2VyID0gd3guZ2V0VXBkYXRlTWFuYWdlciA/IHd4LmdldFVwZGF0ZU1hbmFnZXIoKSA6IG51bGw7XG5cbiAgICAgIGlmICh1cGRhdGVNYW5hZ2VyKSB7XG4gICAgICAgIHVwZGF0ZU1hbmFnZXIub25DaGVja0ZvclVwZGF0ZShmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgLy8g6K+35rGC5a6M5paw54mI5pys5L+h5oGv55qE5Zue6LCDXG4gICAgICAgICAgY29uc29sZS5sb2coXCJoYXNVcGRhdGVcIiwgcmVzLmhhc1VwZGF0ZSk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgdXBkYXRlTWFuYWdlci5vblVwZGF0ZVJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgdGl0bGU6ICfmo4DmtYvliLDmlrDniYjmnKzvvIzmraPlnKjmm7TmlrAuLi4nLFxuICAgICAgICAgICAgaWNvbjogJ25vbmUnXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHVwZGF0ZU1hbmFnZXIuYXBwbHlVcGRhdGUoKTtcbiAgICAgICAgICB9LCAyMDAwKVxuXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy/miafooYxsb2dpbuaWueazleiOt+WPlueUqOaIt+eZu+W9leS/oeaBr1xuICAgIGFzeW5jIGxvZ2luKHVzZXJJbmZvKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICBsZXQgZGF0YT17fTtcbiAgICAgIGlmIChzZWxmLmdsb2JhbERhdGEubG9naW5JbmZvKSB7XG4gICAgICAgIHJldHVybiBzZWxmLmdsb2JhbERhdGEubG9naW5JbmZvO1xuICAgICAgfVxuICAgICAgdmFyIGNvZGUgPSBhd2FpdCB3ZXB5LmxvZ2luKCk7XG4gICAgICAvLyBjb25zb2xlLmxvZygnY29kZScsY29kZSk7XG4gICAgICBkYXRhLmNvZGU9Y29kZS5jb2RlO1xuICAgICAgaWYodXNlckluZm8pe1xuICAgICAgICBkYXRhLm5pY2tOYW1lPXVzZXJJbmZvLm5pY2tOYW1lO1xuICAgICAgICBkYXRhLmF2YXRhclVybD11c2VySW5mby5hdmF0YXJVcmw7XG4gICAgICAgIGRhdGEuZ2VuZGVyPXVzZXJJbmZvLm5pY2tOYW1lO1xuICAgICAgICBkYXRhLmNvdW50cnk9dXNlckluZm8uY291bnRyeTtcbiAgICAgICAgZGF0YS5jaXR5PXVzZXJJbmZvLmNpdHk7XG4gICAgICAgIGNvbnNvbGUubG9nKCfnlKjmiLfkv6Hmga8nLHVzZXJJbmZvKTtcbiAgICAgIH1cbiAgICAgIGxldCBkID0gYXdhaXQgcmVxdWVzdC5sb2dpbihkYXRhKTtcbiAgICAgICBjb25zb2xlLmxvZygn5omn6KGM55m75b2VJyxkKTtcbiAgICAgIGlmIChkKSB7XG4gICAgICAgIGQudXNlckluZm8uYXZhdGFyVXJsID0gdXRpbC5zaXRlUGljKCBkLnVzZXJJbmZvLmF2YXRhclVybCkgfHwgJyc7XG4gICAgICAgIHNlbGYuZ2xvYmFsRGF0YS51c2VySW5mby5vcGVuaWQgPSBkLnVzZXJJbmZvLm9wZW5pZDtcbiAgICAgICAgc2VsZi5nbG9iYWxEYXRhLnVzZXJJbmZvLnRva2VuID0gZC50b2tlbjtcbiAgICAgICAgcmV0dXJuIGQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygn55m75b2V5aSx6LSlJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy/ojrflj5borr7lpIfkv6Hmga9cbiAgICBhc3luYyBnZXRTeXN0ZW1JbmZvKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgaWYgKCFzZWxmLmdsb2JhbERhdGEuc3lzdGVtX2luZm8pIHtcbiAgICAgICAgbGV0IHN5c2luZm8gPSBhd2FpdCB3ZXB5LmdldFN5c3RlbUluZm8oKTtcbiAgICAgICAgaWYgKHN5c2luZm8pIHtcbiAgICAgICAgICBzZWxmLmdsb2JhbERhdGEuc3lzdGVtX2luZm8gPSBzeXNpbmZvO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsZXQgc3lzdGVtX2luZm8gPSBzZWxmLmdsb2JhbERhdGEuc3lzdGVtX2luZm87XG4gICAgICByZXR1cm4gc3lzdGVtX2luZm87XG4gICAgfVxuXG4gICAgLy8gYXN5bmMgb25Mb2FkKCkge1xuICAgIC8vICAgYXdhaXQgd2VweS5sb2dpbigpO1xuICAgIC8vICAgdGhpcy5nbG9iYWxEYXRhLnVzZXJEYXRhID0gYXdhaXQgd2VweS5nZXRVc2VySW5mbygpO1xuICAgIC8vICAgY29uc29sZS5sb2coJ+eUqOaIt+S/oeaBryfvvIx0aGlzLmdsb2JhbERhdGEudXNlckRhdGEpO1xuICAgIC8vIH1cblxuICAgIG9uTGF1bmNoKG9wdGlvbnMpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgIHNlbGYuZ2xvYmFsRGF0YS5zY2VuZSA9IG9wdGlvbnMuc2NlbmU7Ly/kv53lrZjlnLrmma/lgLxcbiAgICAgIHNlbGYudXBsb2FkQXBwKCkgLy/mm7TmlrDlsI/nqIvluo9cbiAgICAgIHNlbGYuZ2V0U3lzdGVtSW5mbygpIC8v6I635Y+W6K6+5aSH5L+h5oGvXG5cbiAgICAgIC8vIHNlbGYub25Mb2FkKCkgIC8v55m76ZmG77yM6I635Y+W55So5oi35L+h5oGvXG4gICAgfVxuXG4gIH1cblxuIl19