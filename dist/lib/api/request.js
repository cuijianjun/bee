'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _address = require('./address.js');

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var base = function () {
  function base(baseurl) {
    _classCallCheck(this, base);

    this.HOSTURL = baseurl;
  }

  //登录


  _createClass(base, [{
    key: 'login',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(obj) {
        var res, data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _wepy2.default.request({
                  url: this.HOSTURL + 'login',
                  data: obj,
                  method: 'POST',
                  header: {
                    'content-type': 'application/json' // 默认值
                  }
                });

              case 2:
                res = _context.sent;
                data = res.data;
                return _context.abrupt('return', data);

              case 5:
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

    //banner和类型

  }, {
    key: 'getBanner',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var res, data;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _wepy2.default.request({
                  url: this.HOSTURL + 'api/banner/get'
                });

              case 2:
                res = _context2.sent;
                data = res.data;
                // console.log('banner1',res);

                if (!(data.code == 200)) {
                  _context2.next = 6;
                  break;
                }

                return _context2.abrupt('return', data.data);

              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getBanner() {
        return _ref2.apply(this, arguments);
      }

      return getBanner;
    }()

    //列表

  }, {
    key: 'getGoodsLists',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(page, type) {
        var res, data;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _wepy2.default.request({
                  url: this.HOSTURL + 'api/product_list/list',
                  data: {
                    // limit:'10',
                    page: page,
                    // user_id:'2',
                    label: type
                  },
                  method: 'POST'
                });

              case 2:
                res = _context3.sent;
                data = res.data;

                console.log('列表数据', res);

                if (!(data.code == 200)) {
                  _context3.next = 7;
                  break;
                }

                return _context3.abrupt('return', data.data);

              case 7:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getGoodsLists(_x2, _x3) {
        return _ref3.apply(this, arguments);
      }

      return getGoodsLists;
    }()

    //详情

  }, {
    key: 'getGoodsDetail',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(product_id, user_id) {
        var res, data;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _wepy2.default.request({
                  url: this.HOSTURL + 'api/product_list/detail',
                  data: {
                    product_id: product_id,
                    user_id: user_id
                  },
                  method: 'POST'
                });

              case 2:
                res = _context4.sent;
                data = res.data;

                console.log('详情数据', res);

                if (!(data.code == 200)) {
                  _context4.next = 7;
                  break;
                }

                return _context4.abrupt('return', data.data);

              case 7:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getGoodsDetail(_x4, _x5) {
        return _ref4.apply(this, arguments);
      }

      return getGoodsDetail;
    }()

    //收藏

  }, {
    key: 'getCollectState',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(user_id, product_id, isCollect) {
        var res, data;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _wepy2.default.request({
                  url: this.HOSTURL + 'api/collect/collect',
                  data: {
                    product_id: product_id,
                    user_id: user_id,
                    isCollect: isCollect
                  },
                  method: 'POST'
                });

              case 2:
                res = _context5.sent;
                data = res.data;

                console.log('详情数据', res);

                if (!(data.code == 200)) {
                  _context5.next = 7;
                  break;
                }

                return _context5.abrupt('return', data.data);

              case 7:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getCollectState(_x6, _x7, _x8) {
        return _ref5.apply(this, arguments);
      }

      return getCollectState;
    }()

    //发布信息

  }, {
    key: 'publishGoodsMsg',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(data) {
        var res;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return _wepy2.default.request({
                  url: this.HOSTURL + 'api/product_list/create',
                  data: data.info,
                  method: 'POST',
                  header: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: data.token
                  }

                });

              case 2:
                res = _context6.sent;

                // let data = res.data;
                console.log('发布信息', res);
                // if (data.code == 0) {
                //   return data.data;
                // }

              case 4:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function publishGoodsMsg(_x9) {
        return _ref6.apply(this, arguments);
      }

      return publishGoodsMsg;
    }()
  }]);

  return base;
}();

exports.default = new base(_address.REQUEST_HOST);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcXVlc3QuanMiXSwibmFtZXMiOlsiYmFzZSIsImJhc2V1cmwiLCJIT1NUVVJMIiwib2JqIiwid2VweSIsInJlcXVlc3QiLCJ1cmwiLCJkYXRhIiwibWV0aG9kIiwiaGVhZGVyIiwicmVzIiwiY29kZSIsInBhZ2UiLCJ0eXBlIiwibGFiZWwiLCJjb25zb2xlIiwibG9nIiwicHJvZHVjdF9pZCIsInVzZXJfaWQiLCJpc0NvbGxlY3QiLCJpbmZvIiwiQXV0aG9yaXphdGlvbiIsInRva2VuIiwiUkVRVUVTVF9IT1NUIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7O0lBRU1BLEk7QUFDSixnQkFBWUMsT0FBWixFQUFxQjtBQUFBOztBQUNuQixTQUFLQyxPQUFMLEdBQWVELE9BQWY7QUFDRDs7QUFFRDs7Ozs7OzBGQUNZRSxHOzs7Ozs7O3VCQUNNQyxlQUFLQyxPQUFMLENBQWE7QUFDM0JDLHVCQUFLLEtBQUtKLE9BQUwsR0FBYSxPQURTO0FBRTNCSyx3QkFBTUosR0FGcUI7QUFHM0JLLDBCQUFRLE1BSG1CO0FBSTNCQywwQkFBUTtBQUNOLG9DQUFnQixrQkFEVixDQUM2QjtBQUQ3QjtBQUptQixpQkFBYixDOzs7QUFBWkMsbUI7QUFRQUgsb0IsR0FBT0csSUFBSUgsSTtpREFDUkEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHVDs7Ozs7Ozs7Ozs7O3VCQUVrQkgsZUFBS0MsT0FBTCxDQUFhO0FBQzNCQyx1QkFBSyxLQUFLSixPQUFMLEdBQWE7QUFEUyxpQkFBYixDOzs7QUFBWlEsbUI7QUFHQUgsb0IsR0FBT0csSUFBSUgsSTtBQUNmOztzQkFDSUEsS0FBS0ksSUFBTCxJQUFhLEc7Ozs7O2tEQUNSSixLQUFLQSxJOzs7Ozs7Ozs7Ozs7Ozs7OztBQUloQjs7Ozs7NEZBQ29CSyxJLEVBQUtDLEk7Ozs7Ozs7dUJBQ1BULGVBQUtDLE9BQUwsQ0FBYTtBQUMzQkMsdUJBQUssS0FBS0osT0FBTCxHQUFhLHVCQURTO0FBRTNCSyx3QkFBTTtBQUNKO0FBQ0FLLDBCQUFLQSxJQUZEO0FBR0o7QUFDQUUsMkJBQU1EO0FBSkYsbUJBRnFCO0FBUTNCTCwwQkFBUTtBQVJtQixpQkFBYixDOzs7QUFBWkUsbUI7QUFVQUgsb0IsR0FBT0csSUFBSUgsSTs7QUFDZlEsd0JBQVFDLEdBQVIsQ0FBWSxNQUFaLEVBQW1CTixHQUFuQjs7c0JBQ0lILEtBQUtJLElBQUwsSUFBYSxHOzs7OztrREFDUkosS0FBS0EsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEI7Ozs7OzRGQUNzQlUsVSxFQUFXQyxPOzs7Ozs7O3VCQUNmZCxlQUFLQyxPQUFMLENBQWE7QUFDM0JDLHVCQUFLLEtBQUtKLE9BQUwsR0FBYSx5QkFEUztBQUUzQkssd0JBQU07QUFDSlUsZ0NBQVdBLFVBRFA7QUFFSkMsNkJBQVFBO0FBRkosbUJBRnFCO0FBTTNCViwwQkFBUTtBQU5tQixpQkFBYixDOzs7QUFBWkUsbUI7QUFRQUgsb0IsR0FBT0csSUFBSUgsSTs7QUFDZlEsd0JBQVFDLEdBQVIsQ0FBWSxNQUFaLEVBQW1CTixHQUFuQjs7c0JBQ0lILEtBQUtJLElBQUwsSUFBYSxHOzs7OztrREFDUkosS0FBS0EsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEI7Ozs7OzRGQUNzQlcsTyxFQUFTRCxVLEVBQVdFLFM7Ozs7Ozs7dUJBQ3hCZixlQUFLQyxPQUFMLENBQWE7QUFDM0JDLHVCQUFLLEtBQUtKLE9BQUwsR0FBYSxxQkFEUztBQUUzQkssd0JBQU07QUFDSlUsZ0NBQVdBLFVBRFA7QUFFSkMsNkJBQVFBLE9BRko7QUFHSkMsK0JBQVVBO0FBSE4sbUJBRnFCO0FBTzNCWCwwQkFBUTtBQVBtQixpQkFBYixDOzs7QUFBWkUsbUI7QUFTQUgsb0IsR0FBT0csSUFBSUgsSTs7QUFDZlEsd0JBQVFDLEdBQVIsQ0FBWSxNQUFaLEVBQW1CTixHQUFuQjs7c0JBQ0lILEtBQUtJLElBQUwsSUFBYSxHOzs7OztrREFDUkosS0FBS0EsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEI7Ozs7OzRGQUNzQkEsSTs7Ozs7Ozt1QkFDSkgsZUFBS0MsT0FBTCxDQUFhO0FBQzNCQyx1QkFBSyxLQUFLSixPQUFMLEdBQWEseUJBRFM7QUFFM0JLLHdCQUFNQSxLQUFLYSxJQUZnQjtBQUczQlosMEJBQVEsTUFIbUI7QUFJM0JDLDBCQUFPO0FBQ0wsb0NBQWUscUJBRFY7QUFFTFksbUNBQWNkLEtBQUtlO0FBRmQ7O0FBSm9CLGlCQUFiLEM7OztBQUFaWixtQjs7QUFVSjtBQUNBSyx3QkFBUUMsR0FBUixDQUFZLE1BQVosRUFBbUJOLEdBQW5CO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBSVcsSUFBSVYsSUFBSixDQUFTdUIscUJBQVQsQyIsImZpbGUiOiJyZXF1ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUkVRVUVTVF9IT1NUIH0gZnJvbSAnLi9hZGRyZXNzJ1xuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuY2xhc3MgYmFzZSB7XG4gIGNvbnN0cnVjdG9yKGJhc2V1cmwpIHtcbiAgICB0aGlzLkhPU1RVUkwgPSBiYXNldXJsO1xuICB9XG5cbiAgLy/nmbvlvZVcbiAgYXN5bmMgbG9naW4ob2JqKSB7XG4gICAgbGV0IHJlcyA9IGF3YWl0IHdlcHkucmVxdWVzdCh7XG4gICAgICB1cmw6IHRoaXMuSE9TVFVSTCsnbG9naW4nLFxuICAgICAgZGF0YTogb2JqLFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXI6IHtcbiAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyAvLyDpu5jorqTlgLxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgbGV0IGRhdGEgPSByZXMuZGF0YTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIC8vYmFubmVy5ZKM57G75Z6LXG4gIGFzeW5jIGdldEJhbm5lcigpIHtcbiAgICBsZXQgcmVzID0gYXdhaXQgd2VweS5yZXF1ZXN0KHtcbiAgICAgIHVybDogdGhpcy5IT1NUVVJMKydhcGkvYmFubmVyL2dldCcsXG4gICAgfSk7XG4gICAgbGV0IGRhdGEgPSByZXMuZGF0YTtcbiAgICAvLyBjb25zb2xlLmxvZygnYmFubmVyMScscmVzKTtcbiAgICBpZiAoZGF0YS5jb2RlID09IDIwMCkge1xuICAgICAgcmV0dXJuIGRhdGEuZGF0YTtcbiAgICB9XG4gIH1cblxuICAvL+WIl+ihqFxuICBhc3luYyBnZXRHb29kc0xpc3RzKHBhZ2UsdHlwZSkge1xuICAgIGxldCByZXMgPSBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgdXJsOiB0aGlzLkhPU1RVUkwrJ2FwaS9wcm9kdWN0X2xpc3QvbGlzdCcsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIC8vIGxpbWl0OicxMCcsXG4gICAgICAgIHBhZ2U6cGFnZSxcbiAgICAgICAgLy8gdXNlcl9pZDonMicsXG4gICAgICAgIGxhYmVsOnR5cGUsXG4gICAgICB9LFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgfSk7XG4gICAgbGV0IGRhdGEgPSByZXMuZGF0YTtcbiAgICBjb25zb2xlLmxvZygn5YiX6KGo5pWw5o2uJyxyZXMpO1xuICAgIGlmIChkYXRhLmNvZGUgPT0gMjAwKSB7XG4gICAgICByZXR1cm4gZGF0YS5kYXRhO1xuICAgIH1cbiAgfVxuXG4gIC8v6K+m5oOFXG4gIGFzeW5jIGdldEdvb2RzRGV0YWlsKCBwcm9kdWN0X2lkLHVzZXJfaWQpIHtcbiAgICBsZXQgcmVzID0gYXdhaXQgd2VweS5yZXF1ZXN0KHtcbiAgICAgIHVybDogdGhpcy5IT1NUVVJMKydhcGkvcHJvZHVjdF9saXN0L2RldGFpbCcsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHByb2R1Y3RfaWQ6cHJvZHVjdF9pZCxcbiAgICAgICAgdXNlcl9pZDp1c2VyX2lkLFxuICAgICAgfSxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIH0pO1xuICAgIGxldCBkYXRhID0gcmVzLmRhdGE7XG4gICAgY29uc29sZS5sb2coJ+ivpuaDheaVsOaNricscmVzKTtcbiAgICBpZiAoZGF0YS5jb2RlID09IDIwMCkge1xuICAgICAgcmV0dXJuIGRhdGEuZGF0YTtcbiAgICB9XG4gIH1cblxuICAvL+aUtuiXj1xuICBhc3luYyBnZXRDb2xsZWN0U3RhdGUodXNlcl9pZCwgcHJvZHVjdF9pZCxpc0NvbGxlY3Qpe1xuICAgIGxldCByZXMgPSBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgdXJsOiB0aGlzLkhPU1RVUkwrJ2FwaS9jb2xsZWN0L2NvbGxlY3QnLFxuICAgICAgZGF0YToge1xuICAgICAgICBwcm9kdWN0X2lkOnByb2R1Y3RfaWQsXG4gICAgICAgIHVzZXJfaWQ6dXNlcl9pZCxcbiAgICAgICAgaXNDb2xsZWN0OmlzQ29sbGVjdCxcbiAgICAgIH0sXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICB9KTtcbiAgICBsZXQgZGF0YSA9IHJlcy5kYXRhO1xuICAgIGNvbnNvbGUubG9nKCfor6bmg4XmlbDmja4nLHJlcyk7XG4gICAgaWYgKGRhdGEuY29kZSA9PSAyMDApIHtcbiAgICAgIHJldHVybiBkYXRhLmRhdGE7XG4gICAgfVxuICB9XG5cbiAgLy/lj5HluIPkv6Hmga9cbiAgYXN5bmMgcHVibGlzaEdvb2RzTXNnKGRhdGEpIHtcbiAgICBsZXQgcmVzID0gYXdhaXQgd2VweS5yZXF1ZXN0KHtcbiAgICAgIHVybDogdGhpcy5IT1NUVVJMKydhcGkvcHJvZHVjdF9saXN0L2NyZWF0ZScsXG4gICAgICBkYXRhOiBkYXRhLmluZm8sXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcjp7XG4gICAgICAgICdDb250ZW50LVR5cGUnOidtdWx0aXBhcnQvZm9ybS1kYXRhJyxcbiAgICAgICAgQXV0aG9yaXphdGlvbjpkYXRhLnRva2VuLFxuICAgICAgfVxuICAgICAgXG4gICAgfSlcbiAgICAvLyBsZXQgZGF0YSA9IHJlcy5kYXRhO1xuICAgIGNvbnNvbGUubG9nKCflj5HluIPkv6Hmga8nLHJlcyk7XG4gICAgLy8gaWYgKGRhdGEuY29kZSA9PSAwKSB7XG4gICAgLy8gICByZXR1cm4gZGF0YS5kYXRhO1xuICAgIC8vIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgYmFzZShSRVFVRVNUX0hPU1QpO1xuIl19