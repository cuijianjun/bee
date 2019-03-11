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

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '首页'
    }, _this.components = {}, _this.data = {
      info: {
        avatar: '../../image/upload/photo.jpeg',
        weChatName: '用户名称',
        label: '家电',
        address: '地址',
        phoneNumber: '14311234567',
        description: '二手物品内容',
        productImage: ['https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=933099183,1061075383&fm=173&app=49&f=JPEG?w=218&h=146&s=8EBE518520024B51182C6DBE0300D013', 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2995808925,1874778432&fm=173&app=49&f=JPEG?w=218&h=146&s=9E9702CA688F0055066FAFBE0300500E', 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=452601273,754089038&fm=173&app=49&f=JPEG?w=218&h=146&s=4E9404C0BC417B475E2A844B030040DB', 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3517882432,2193665558&fm=173&app=25&f=JPEG?w=218&h=146&s=F59B1DD50C581AC24EB1113C03008073'],
        updated_at: '2018-11-24 10:40',
        pageView: '470',
        collect: { isCollect: false } //收藏状态
      },
      collectIcon: '../../image/bg/icon_collect1.png',
      collectTxt: '收藏'
    }, _this.computed = {}, _this.methods = {
      //点击拨打电话
      makePhone: function makePhone(tell) {
        _wepy2.default.makePhoneCall({
          phoneNumber: tell
        });
      },


      //跳转详情页
      reurnToIndex: function reurnToIndex() {
        _wepy2.default.switchTab({
          url: '/pages/index'
        });
      },


      //预览图片
      previewImg: function previewImg(current, urls) {
        _wepy2.default.previewImage({
          current: current,
          urls: urls
        });
      },


      //返回顶部
      returnToTop: function returnToTop() {
        _wepy2.default.pageScrollTo({
          scrollTop: 0,
          duration: 300
        });
      },


      //点击收藏
      collect: function collect() {
        this.info.collect = !this.info.collect;
        if (this.info.collect) {
          this.collectTxt = '已收藏';
          this.collectIcon = '../../image/bg/icon_collect2.png';
          _request2.default.getCollectState(2, product_id, isCollect).then(function () {
            _wepy2.default.showToast({
              title: '收藏成功',
              icon: 'none',
              duration: 1000,
              mask: true
            });
          });
        } else {
          this.collectTxt = '收藏';
          this.collectIcon = '../../image/bg/icon_collect1.png';
          _request2.default.getCollectState(2, product_id, isCollect).then(function () {
            _wepy2.default.showToast({
              title: '取消收藏',
              icon: 'none',
              duration: 1000,
              mask: true
            });
          });
        }
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  // mixins = [testMixin]

  _createClass(Index, [{
    key: 'onShareAppMessage',


    //分享
    value: function onShareAppMessage() {
      return {
        title: '标题',
        path: '/pages/detail?id=' + 123
      };
    }
  }, {
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.$parent.login();

              case 2:
                //获取用户信息
                this.getGoodsDetail(); //获取banner和类型

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLoad() {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()

    //获取信息

  }, {
    key: 'getGoodsDetail',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var list;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _request2.default.getGoodsLists(1, 1);

              case 2:
                list = _context2.sent;

                console.log('列表信息', list);
                if (list) {
                  // this.info=list;      
                  this.$apply();
                }

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getGoodsDetail() {
        return _ref3.apply(this, arguments);
      }

      return getGoodsDetail;
    }()
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/detail/detail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiZGF0YSIsImluZm8iLCJhdmF0YXIiLCJ3ZUNoYXROYW1lIiwibGFiZWwiLCJhZGRyZXNzIiwicGhvbmVOdW1iZXIiLCJkZXNjcmlwdGlvbiIsInByb2R1Y3RJbWFnZSIsInVwZGF0ZWRfYXQiLCJwYWdlVmlldyIsImNvbGxlY3QiLCJpc0NvbGxlY3QiLCJjb2xsZWN0SWNvbiIsImNvbGxlY3RUeHQiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJtYWtlUGhvbmUiLCJ0ZWxsIiwid2VweSIsIm1ha2VQaG9uZUNhbGwiLCJyZXVyblRvSW5kZXgiLCJzd2l0Y2hUYWIiLCJ1cmwiLCJwcmV2aWV3SW1nIiwiY3VycmVudCIsInVybHMiLCJwcmV2aWV3SW1hZ2UiLCJyZXR1cm5Ub1RvcCIsInBhZ2VTY3JvbGxUbyIsInNjcm9sbFRvcCIsImR1cmF0aW9uIiwicmVxdWVzdCIsImdldENvbGxlY3RTdGF0ZSIsInByb2R1Y3RfaWQiLCJ0aGVuIiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwibWFzayIsImV2ZW50cyIsInBhdGgiLCIkcGFyZW50IiwibG9naW4iLCJnZXRHb29kc0RldGFpbCIsImdldEdvb2RzTGlzdHMiLCJsaXN0IiwiY29uc29sZSIsImxvZyIsIiRhcHBseSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0Q7Ozs7Ozs7Ozs7Ozs7O0lBRXNCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWEsRSxRQU1iQyxJLEdBQU87QUFDTEMsWUFBTTtBQUNKQyxnQkFBUSwrQkFESjtBQUVKQyxvQkFBWSxNQUZSO0FBR0pDLGVBQU8sSUFISDtBQUlKQyxpQkFBUSxJQUpKO0FBS0pDLHFCQUFhLGFBTFQ7QUFNSkMscUJBQWEsUUFOVDtBQU9KQyxzQkFBYyxDQUNaLHdJQURZLEVBRVoseUlBRlksRUFHWix1SUFIWSxFQUlaLHlJQUpZLENBUFY7QUFhSkMsb0JBQVksa0JBYlI7QUFjSkMsa0JBQVUsS0FkTjtBQWVKQyxpQkFBUyxFQUFDQyxXQUFVLEtBQVgsRUFmTCxDQWV3QjtBQWZ4QixPQUREO0FBa0JMQyxtQkFBYSxrQ0FsQlI7QUFtQkxDLGtCQUFZO0FBbkJQLEssUUFzQlBDLFEsR0FBVyxFLFFBSVhDLE8sR0FBVTtBQUNSO0FBQ0FDLGVBRlEscUJBRUVDLElBRkYsRUFFUTtBQUNkQyx1QkFBS0MsYUFBTCxDQUFtQjtBQUNqQmQsdUJBQWFZO0FBREksU0FBbkI7QUFHRCxPQU5POzs7QUFRUjtBQUNBRyxrQkFUUSwwQkFTTztBQUNiRix1QkFBS0csU0FBTCxDQUFlO0FBQ2JDLGVBQUs7QUFEUSxTQUFmO0FBR0QsT0FiTzs7O0FBZVI7QUFDQUMsZ0JBaEJRLHNCQWdCR0MsT0FoQkgsRUFnQllDLElBaEJaLEVBZ0JrQjtBQUN4QlAsdUJBQUtRLFlBQUwsQ0FBa0I7QUFDaEJGLG1CQUFTQSxPQURPO0FBRWhCQyxnQkFBTUE7QUFGVSxTQUFsQjtBQUlELE9BckJPOzs7QUF1QlI7QUFDQUUsaUJBeEJRLHlCQXdCTTtBQUNaVCx1QkFBS1UsWUFBTCxDQUFrQjtBQUNoQkMscUJBQVcsQ0FESztBQUVoQkMsb0JBQVU7QUFGTSxTQUFsQjtBQUlELE9BN0JPOzs7QUErQlI7QUFDQXBCLGFBaENRLHFCQWdDRTtBQUNSLGFBQUtWLElBQUwsQ0FBVVUsT0FBVixHQUFvQixDQUFDLEtBQUtWLElBQUwsQ0FBVVUsT0FBL0I7QUFDQSxZQUFJLEtBQUtWLElBQUwsQ0FBVVUsT0FBZCxFQUF1QjtBQUNyQixlQUFLRyxVQUFMLEdBQWtCLEtBQWxCO0FBQ0EsZUFBS0QsV0FBTCxHQUFtQixrQ0FBbkI7QUFDQW1CLDRCQUFRQyxlQUFSLENBQXdCLENBQXhCLEVBQTJCQyxVQUEzQixFQUFzQ3RCLFNBQXRDLEVBQWlEdUIsSUFBakQsQ0FBc0QsWUFBSTtBQUN4RGhCLDJCQUFLaUIsU0FBTCxDQUFlO0FBQ2JDLHFCQUFPLE1BRE07QUFFYkMsb0JBQU0sTUFGTztBQUdiUCx3QkFBVSxJQUhHO0FBSWJRLG9CQUFNO0FBSk8sYUFBZjtBQU1ELFdBUEQ7QUFRRCxTQVhELE1BV087QUFDTCxlQUFLekIsVUFBTCxHQUFrQixJQUFsQjtBQUNBLGVBQUtELFdBQUwsR0FBbUIsa0NBQW5CO0FBQ0FtQiw0QkFBUUMsZUFBUixDQUF3QixDQUF4QixFQUEyQkMsVUFBM0IsRUFBc0N0QixTQUF0QyxFQUFpRHVCLElBQWpELENBQXNELFlBQUk7QUFDeERoQiwyQkFBS2lCLFNBQUwsQ0FBZTtBQUNiQyxxQkFBTyxNQURNO0FBRWJDLG9CQUFNLE1BRk87QUFHYlAsd0JBQVUsSUFIRztBQUliUSxvQkFBTTtBQUpPLGFBQWY7QUFNRCxXQVBEO0FBUUQ7QUFDRjtBQXpETyxLLFFBcUVWQyxNLEdBQVMsRTs7O0FBakdUOzs7Ozs7QUF5RkE7d0NBQ29CO0FBQ2xCLGFBQU87QUFDTEgsZUFBTyxJQURGO0FBRUxJLG9DQUEwQjtBQUZyQixPQUFQO0FBSUQ7Ozs7Ozs7Ozs7dUJBT08sS0FBS0MsT0FBTCxDQUFhQyxLQUFiLEU7OztBQUFzQjtBQUM1QixxQkFBS0MsY0FBTCxHLENBQXNCOzs7Ozs7Ozs7Ozs7Ozs7OztBQUd4Qjs7Ozs7Ozs7Ozs7O3VCQUVtQlosa0JBQVFhLGFBQVIsQ0FBc0IsQ0FBdEIsRUFBd0IsQ0FBeEIsQzs7O0FBQWJDLG9COztBQUNKQyx3QkFBUUMsR0FBUixDQUFZLE1BQVosRUFBbUJGLElBQW5CO0FBQ0Esb0JBQUdBLElBQUgsRUFBUTtBQUNOO0FBQ0EsdUJBQUtHLE1BQUw7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXpIOEI5QixlQUFLK0IsSTs7a0JBQW5CdEQsSyIsImZpbGUiOiJkZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiBpbXBvcnQgcmVxdWVzdCBmcm9tICcuLi8uLi9saWIvYXBpL3JlcXVlc3QnXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfpppbpobUnXG4gICAgfVxuICAgIGNvbXBvbmVudHMgPSB7XG5cbiAgICB9XG5cbiAgICAvLyBtaXhpbnMgPSBbdGVzdE1peGluXVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIGluZm86IHtcbiAgICAgICAgYXZhdGFyOiAnLi4vLi4vaW1hZ2UvdXBsb2FkL3Bob3RvLmpwZWcnLFxuICAgICAgICB3ZUNoYXROYW1lOiAn55So5oi35ZCN56ewJyxcbiAgICAgICAgbGFiZWw6ICflrrbnlLUnLFxuICAgICAgICBhZGRyZXNzOiflnLDlnYAnLFxuICAgICAgICBwaG9uZU51bWJlcjogJzE0MzExMjM0NTY3JyxcbiAgICAgICAgZGVzY3JpcHRpb246ICfkuozmiYvnianlk4HlhoXlrrknLFxuICAgICAgICBwcm9kdWN0SW1hZ2U6IFtcbiAgICAgICAgICAnaHR0cHM6Ly9zczAuYmFpZHUuY29tLzZPTldzamlwMFFJWjh0eWhucS9pdC91PTkzMzA5OTE4MywxMDYxMDc1MzgzJmZtPTE3MyZhcHA9NDkmZj1KUEVHP3c9MjE4Jmg9MTQ2JnM9OEVCRTUxODUyMDAyNEI1MTE4MkM2REJFMDMwMEQwMTMnLFxuICAgICAgICAgICdodHRwczovL3NzMC5iYWlkdS5jb20vNk9OV3NqaXAwUUlaOHR5aG5xL2l0L3U9Mjk5NTgwODkyNSwxODc0Nzc4NDMyJmZtPTE3MyZhcHA9NDkmZj1KUEVHP3c9MjE4Jmg9MTQ2JnM9OUU5NzAyQ0E2ODhGMDA1NTA2NkZBRkJFMDMwMDUwMEUnLFxuICAgICAgICAgICdodHRwczovL3NzMC5iYWlkdS5jb20vNk9OV3NqaXAwUUlaOHR5aG5xL2l0L3U9NDUyNjAxMjczLDc1NDA4OTAzOCZmbT0xNzMmYXBwPTQ5JmY9SlBFRz93PTIxOCZoPTE0NiZzPTRFOTQwNEMwQkM0MTdCNDc1RTJBODQ0QjAzMDA0MERCJyxcbiAgICAgICAgICAnaHR0cHM6Ly9zczEuYmFpZHUuY29tLzZPTlhzamlwMFFJWjh0eWhucS9pdC91PTM1MTc4ODI0MzIsMjE5MzY2NTU1OCZmbT0xNzMmYXBwPTI1JmY9SlBFRz93PTIxOCZoPTE0NiZzPUY1OUIxREQ1MEM1ODFBQzI0RUIxMTEzQzAzMDA4MDczJyxcbiAgICAgICAgXSxcbiAgICAgICAgdXBkYXRlZF9hdDogJzIwMTgtMTEtMjQgMTA6NDAnLFxuICAgICAgICBwYWdlVmlldzogJzQ3MCcsXG4gICAgICAgIGNvbGxlY3Q6IHtpc0NvbGxlY3Q6ZmFsc2V9LCAvL+aUtuiXj+eKtuaAgVxuICAgICAgfSxcbiAgICAgIGNvbGxlY3RJY29uOiAnLi4vLi4vaW1hZ2UvYmcvaWNvbl9jb2xsZWN0MS5wbmcnLFxuICAgICAgY29sbGVjdFR4dDogJ+aUtuiXjycsIFxuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIC8v54K55Ye75ouo5omT55S16K+dXG4gICAgICBtYWtlUGhvbmUodGVsbCkge1xuICAgICAgICB3ZXB5Lm1ha2VQaG9uZUNhbGwoe1xuICAgICAgICAgIHBob25lTnVtYmVyOiB0ZWxsXG4gICAgICAgIH0pO1xuICAgICAgfSxcblxuICAgICAgLy/ot7Povazor6bmg4XpobVcbiAgICAgIHJldXJuVG9JbmRleCgpIHtcbiAgICAgICAgd2VweS5zd2l0Y2hUYWIoe1xuICAgICAgICAgIHVybDogJy9wYWdlcy9pbmRleCdcbiAgICAgICAgfSk7XG4gICAgICB9LFxuXG4gICAgICAvL+mihOiniOWbvueJh1xuICAgICAgcHJldmlld0ltZyhjdXJyZW50LCB1cmxzKSB7XG4gICAgICAgIHdlcHkucHJldmlld0ltYWdlKHtcbiAgICAgICAgICBjdXJyZW50OiBjdXJyZW50LFxuICAgICAgICAgIHVybHM6IHVybHMsXG4gICAgICAgIH0pO1xuICAgICAgfSxcblxuICAgICAgLy/ov5Tlm57pobbpg6hcbiAgICAgIHJldHVyblRvVG9wKCkge1xuICAgICAgICB3ZXB5LnBhZ2VTY3JvbGxUbyh7XG4gICAgICAgICAgc2Nyb2xsVG9wOiAwLFxuICAgICAgICAgIGR1cmF0aW9uOiAzMDBcbiAgICAgICAgfSk7XG4gICAgICB9LFxuXG4gICAgICAvL+eCueWHu+aUtuiXj1xuICAgICAgY29sbGVjdCgpIHtcbiAgICAgICAgdGhpcy5pbmZvLmNvbGxlY3QgPSAhdGhpcy5pbmZvLmNvbGxlY3Q7XG4gICAgICAgIGlmICh0aGlzLmluZm8uY29sbGVjdCkge1xuICAgICAgICAgIHRoaXMuY29sbGVjdFR4dCA9ICflt7LmlLbol48nO1xuICAgICAgICAgIHRoaXMuY29sbGVjdEljb24gPSAnLi4vLi4vaW1hZ2UvYmcvaWNvbl9jb2xsZWN0Mi5wbmcnO1xuICAgICAgICAgIHJlcXVlc3QuZ2V0Q29sbGVjdFN0YXRlKDIsIHByb2R1Y3RfaWQsaXNDb2xsZWN0KS50aGVuKCgpPT57XG4gICAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgIHRpdGxlOiAn5pS26JeP5oiQ5YqfJyxcbiAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLCBcbiAgICAgICAgICAgICAgZHVyYXRpb246IDEwMDAsIFxuICAgICAgICAgICAgICBtYXNrOiB0cnVlLCBcbiAgICAgICAgICAgIH0pOyAgIFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY29sbGVjdFR4dCA9ICfmlLbol48nO1xuICAgICAgICAgIHRoaXMuY29sbGVjdEljb24gPSAnLi4vLi4vaW1hZ2UvYmcvaWNvbl9jb2xsZWN0MS5wbmcnO1xuICAgICAgICAgIHJlcXVlc3QuZ2V0Q29sbGVjdFN0YXRlKDIsIHByb2R1Y3RfaWQsaXNDb2xsZWN0KS50aGVuKCgpPT57XG4gICAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgIHRpdGxlOiAn5Y+W5raI5pS26JePJyxcbiAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLCBcbiAgICAgICAgICAgICAgZHVyYXRpb246IDEwMDAsIFxuICAgICAgICAgICAgICBtYXNrOiB0cnVlLCBcbiAgICAgICAgICAgIH0pOyAgIFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgfVxuXG4gICAgLy/liIbkuqtcbiAgICBvblNoYXJlQXBwTWVzc2FnZSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlOiAn5qCH6aKYJyxcbiAgICAgICAgcGF0aDogYC9wYWdlcy9kZXRhaWw/aWQ9JHsxMjN9YFxuICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcblxuICAgIH1cblxuICAgIGFzeW5jIG9uTG9hZCgpIHtcbiAgICAgIGF3YWl0IHRoaXMuJHBhcmVudC5sb2dpbigpOyAvL+iOt+WPlueUqOaIt+S/oeaBr1xuICAgICAgdGhpcy5nZXRHb29kc0RldGFpbCgpOy8v6I635Y+WYmFubmVy5ZKM57G75Z6LXG4gICAgfVxuXG4gICAgLy/ojrflj5bkv6Hmga9cbiAgICBhc3luYyBnZXRHb29kc0RldGFpbCgpe1xuICAgICAgbGV0IGxpc3QgPSBhd2FpdCByZXF1ZXN0LmdldEdvb2RzTGlzdHMoMSwxKTtcbiAgICAgIGNvbnNvbGUubG9nKCfliJfooajkv6Hmga8nLGxpc3QpO1xuICAgICAgaWYobGlzdCl7XG4gICAgICAgIC8vIHRoaXMuaW5mbz1saXN0OyAgICAgIFxuICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4iXX0=