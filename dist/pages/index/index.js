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
      region: ['北京', '北京市', '海淀区'],
      customItem: '全部',
      swiperData: { //轮播数据
        indicatorDots: true,
        autoplay: true,
        interval: 3000,
        duration: 500,
        circular: true,
        arr: [{
          'imageUrl': 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3001514975,3770592348&fm=173&app=49&f=JPEG?w=218&h=146&s=1FE6C704423B242529A9E1C30300E092',
          "description": '开发微信全家桶项目Vue/Node/MongoDB高级技术栈全覆盖'
        }]
      },
      msgList: [{ //列表信息
        avatar: '../../image/upload/photo.jpeg',
        weChatName: '用户名称用户名称',
        label: '家电',
        phoneNumber: '14311234567',
        description: '首先举个身边的例子，大致剧情是：开发团队因为某某原因，感觉测试人员“有些多余”，测试工作可以自己做。于是不再让测试团队跟，于是这么进行了两三次后，实在受不了线上“控制不住的”问题，于是又把测试人员请了回来。',
        productImage: ['https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=933099183,1061075383&fm=173&app=49&f=JPEG?w=218&h=146&s=8EBE518520024B51182C6DBE0300D013', 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2995808925,1874778432&fm=173&app=49&f=JPEG?w=218&h=146&s=9E9702CA688F0055066FAFBE0300500E', 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=452601273,754089038&fm=173&app=49&f=JPEG?w=218&h=146&s=4E9404C0BC417B475E2A844B030040DB', 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3517882432,2193665558&fm=173&app=25&f=JPEG?w=218&h=146&s=F59B1DD50C581AC24EB1113C03008073'],
        updated_at: '2018-11-24 10:40',
        pageView: '470',
        address: '地址'
      }],

      type: [//信息类型
      {
        id: '0',
        name: '家电'
      }, {
        id: '1',
        name: '家具'
      }, {
        id: '2',
        name: '手机'
      }, {
        id: '2',
        name: '自行车'
      }, {
        id: '3',
        name: '互联网'
      }, {
        id: '4',
        name: '母婴玩具'
      }, {
        id: '5',
        name: '展柜'
      }],
      currentTypeIndex: 0, //当前信息类型
      page: 1
    }, _this.computed = {}, _this.methods = {
      //点击拨打电话
      makePhone: function makePhone(tell) {
        _wepy2.default.makePhoneCall({
          phoneNumber: tell
        });
      },


      //跳转详情页
      returnToDetail: function returnToDetail() {
        _wepy2.default.navigateTo({
          url: '/pages/detail/detail'
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


      //切换信息类型
      getCurrentType: function getCurrentType(idx) {
        this.currentTypeIndex = idx;
        this.page = 1;
        this.getListMsg(1, idx);
      },


      //跳转搜索页面
      returnToSeach: function returnToSeach() {
        _wepy2.default.navigateTo({
          url: '/pages/search/search?location=' + this.region
        });
      },


      //选择地址
      regionChange: function regionChange(e) {
        console.log('选择地址', e.detail.value);
        this.region = e.detail.value;
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onShow',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.$parent.login();

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onShow() {
        return _ref2.apply(this, arguments);
      }

      return onShow;
    }()

    // 获取banner和类型

  }, {
    key: 'getBanner',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var res;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _request2.default.getBanner();

              case 2:
                res = _context2.sent;

                if (res) {
                  console.log('banner', res);
                  this.swiperData.arr = res.rows;
                  this.type = res.type;
                  this.$apply();
                }

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getBanner() {
        return _ref3.apply(this, arguments);
      }

      return getBanner;
    }()

    // 获取列表信息

  }, {
    key: 'getListMsg',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(page, type) {
        var list;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _request2.default.getGoodsLists(page, type);

              case 2:
                list = _context3.sent;

                console.log('列表信息', list);

                if (!(list && list.length > 0)) {
                  _context3.next = 8;
                  break;
                }

                this.msgList = list;
                _context3.next = 10;
                break;

              case 8:
                _wepy2.default.hideLoading();
                return _context3.abrupt('return');

              case 10:

                if (this.page == 1) {
                  this.msgList = list;
                } else {
                  this.msgList = this.msgList.concat(list);
                }
                this.$apply();
                _wepy2.default.hideLoading();

              case 13:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getListMsg(_x, _x2) {
        return _ref4.apply(this, arguments);
      }

      return getListMsg;
    }()

    //滑动到底部加载更多

  }, {
    key: 'onReachBottom',
    value: function onReachBottom() {
      this.page++;
      _wepy2.default.showLoading({
        title: '加载中...',
        mask: true
      });

      this.getListMsg(this.page).then(function () {
        _wepy2.default.hideLoading();
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwicmVnaW9uIiwiY3VzdG9tSXRlbSIsInN3aXBlckRhdGEiLCJpbmRpY2F0b3JEb3RzIiwiYXV0b3BsYXkiLCJpbnRlcnZhbCIsImR1cmF0aW9uIiwiY2lyY3VsYXIiLCJhcnIiLCJtc2dMaXN0IiwiYXZhdGFyIiwid2VDaGF0TmFtZSIsImxhYmVsIiwicGhvbmVOdW1iZXIiLCJkZXNjcmlwdGlvbiIsInByb2R1Y3RJbWFnZSIsInVwZGF0ZWRfYXQiLCJwYWdlVmlldyIsImFkZHJlc3MiLCJ0eXBlIiwiaWQiLCJuYW1lIiwiY3VycmVudFR5cGVJbmRleCIsInBhZ2UiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJtYWtlUGhvbmUiLCJ0ZWxsIiwid2VweSIsIm1ha2VQaG9uZUNhbGwiLCJyZXR1cm5Ub0RldGFpbCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJwcmV2aWV3SW1nIiwiY3VycmVudCIsInVybHMiLCJwcmV2aWV3SW1hZ2UiLCJyZXR1cm5Ub1RvcCIsInBhZ2VTY3JvbGxUbyIsInNjcm9sbFRvcCIsImdldEN1cnJlbnRUeXBlIiwiaWR4IiwiZ2V0TGlzdE1zZyIsInJldHVyblRvU2VhY2giLCJyZWdpb25DaGFuZ2UiLCJlIiwiY29uc29sZSIsImxvZyIsImRldGFpbCIsInZhbHVlIiwiZXZlbnRzIiwiJHBhcmVudCIsImxvZ2luIiwicmVxdWVzdCIsImdldEJhbm5lciIsInJlcyIsInJvd3MiLCIkYXBwbHkiLCJnZXRHb29kc0xpc3RzIiwibGlzdCIsImxlbmd0aCIsImhpZGVMb2FkaW5nIiwiY29uY2F0Iiwic2hvd0xvYWRpbmciLCJ0aXRsZSIsIm1hc2siLCJ0aGVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhLEUsUUFJYkMsSSxHQUFPO0FBQ0xDLGNBQVEsQ0FBQyxJQUFELEVBQU8sS0FBUCxFQUFjLEtBQWQsQ0FESDtBQUVMQyxrQkFBVyxJQUZOO0FBR0xDLGtCQUFZLEVBQUU7QUFDWkMsdUJBQWUsSUFETDtBQUVWQyxrQkFBVSxJQUZBO0FBR1ZDLGtCQUFVLElBSEE7QUFJVkMsa0JBQVUsR0FKQTtBQUtWQyxrQkFBVSxJQUxBO0FBTVZDLGFBQUssQ0FBQztBQUNKLHNCQUFZLHlJQURSO0FBRUoseUJBQWU7QUFGWCxTQUFEO0FBTkssT0FIUDtBQWNMQyxlQUFTLENBQUMsRUFBRTtBQUNWQyxnQkFBUSwrQkFEQTtBQUVSQyxvQkFBWSxVQUZKO0FBR1JDLGVBQU8sSUFIQztBQUlSQyxxQkFBYSxhQUpMO0FBS1JDLHFCQUFhLHlHQUxMO0FBTVJDLHNCQUFjLENBQ1osd0lBRFksRUFFWix5SUFGWSxFQUdaLHVJQUhZLEVBSVoseUlBSlksQ0FOTjtBQVlSQyxvQkFBWSxrQkFaSjtBQWFSQyxrQkFBVSxLQWJGO0FBY1JDLGlCQUFTO0FBZEQsT0FBRCxDQWRKOztBQStCTEMsWUFBTSxDQUFFO0FBQ047QUFDRUMsWUFBSSxHQUROO0FBRUVDLGNBQU07QUFGUixPQURJLEVBS0o7QUFDRUQsWUFBSSxHQUROO0FBRUVDLGNBQU07QUFGUixPQUxJLEVBU0o7QUFDRUQsWUFBSSxHQUROO0FBRUVDLGNBQU07QUFGUixPQVRJLEVBYUo7QUFDRUQsWUFBSSxHQUROO0FBRUVDLGNBQU07QUFGUixPQWJJLEVBaUJKO0FBQ0VELFlBQUksR0FETjtBQUVFQyxjQUFNO0FBRlIsT0FqQkksRUFxQko7QUFDRUQsWUFBSSxHQUROO0FBRUVDLGNBQU07QUFGUixPQXJCSSxFQXlCSjtBQUNFRCxZQUFJLEdBRE47QUFFRUMsY0FBTTtBQUZSLE9BekJJLENBL0JEO0FBNkRMQyx3QkFBa0IsQ0E3RGIsRUE2RGdCO0FBQ3JCQyxZQUFNO0FBOURELEssUUFpRVBDLFEsR0FBVyxFLFFBSVhDLE8sR0FBVTtBQUNSO0FBQ0FDLGVBRlEscUJBRUVDLElBRkYsRUFFUTtBQUNkQyx1QkFBS0MsYUFBTCxDQUFtQjtBQUNqQmhCLHVCQUFhYztBQURJLFNBQW5CO0FBR0QsT0FOTzs7O0FBUVI7QUFDQUcsb0JBVFEsNEJBU1M7QUFDZkYsdUJBQUtHLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0FiTzs7O0FBZVI7QUFDQUMsZ0JBaEJRLHNCQWdCR0MsT0FoQkgsRUFnQllDLElBaEJaLEVBZ0JrQjtBQUN4QlAsdUJBQUtRLFlBQUwsQ0FBa0I7QUFDaEJGLG1CQUFTQSxPQURPO0FBRWhCQyxnQkFBTUE7QUFGVSxTQUFsQjtBQUlELE9BckJPOzs7QUF1QlI7QUFDQUUsaUJBeEJRLHlCQXdCTTtBQUNaVCx1QkFBS1UsWUFBTCxDQUFrQjtBQUNoQkMscUJBQVcsQ0FESztBQUVoQmpDLG9CQUFVO0FBRk0sU0FBbEI7QUFJRCxPQTdCTzs7O0FBK0JSO0FBQ0FrQyxvQkFoQ1EsMEJBZ0NPQyxHQWhDUCxFQWdDWTtBQUNsQixhQUFLbkIsZ0JBQUwsR0FBd0JtQixHQUF4QjtBQUNBLGFBQUtsQixJQUFMLEdBQVksQ0FBWjtBQUNBLGFBQUttQixVQUFMLENBQWdCLENBQWhCLEVBQW1CRCxHQUFuQjtBQUNELE9BcENPOzs7QUFzQ1I7QUFDQUUsbUJBdkNRLDJCQXVDUTtBQUNkZix1QkFBS0csVUFBTCxDQUFnQjtBQUNkQyxrREFBc0MsS0FBS2hDO0FBRDdCLFNBQWhCO0FBSUQsT0E1Q087OztBQThDUjtBQUNBNEMsa0JBL0NRLHdCQStDS0MsQ0EvQ0wsRUErQ1E7QUFDZEMsZ0JBQVFDLEdBQVIsQ0FBWSxNQUFaLEVBQW9CRixFQUFFRyxNQUFGLENBQVNDLEtBQTdCO0FBQ0EsYUFBS2pELE1BQUwsR0FBYzZDLEVBQUVHLE1BQUYsQ0FBU0MsS0FBdkI7QUFDRDtBQWxETyxLLFFBc0RWQyxNLEdBQVMsRTs7Ozs7Ozs7Ozs7O3VCQVVELEtBQUtDLE9BQUwsQ0FBYUMsS0FBYixFOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtSOzs7Ozs7Ozs7Ozs7dUJBRWtCQyxrQkFBUUMsU0FBUixFOzs7QUFBWkMsbUI7O0FBQ0osb0JBQUlBLEdBQUosRUFBUztBQUNQVCwwQkFBUUMsR0FBUixDQUFZLFFBQVosRUFBc0JRLEdBQXRCO0FBQ0EsdUJBQUtyRCxVQUFMLENBQWdCTSxHQUFoQixHQUFzQitDLElBQUlDLElBQTFCO0FBQ0EsdUJBQUtyQyxJQUFMLEdBQVlvQyxJQUFJcEMsSUFBaEI7QUFDQSx1QkFBS3NDLE1BQUw7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHSDs7Ozs7NEZBQ2lCbEMsSSxFQUFNSixJOzs7Ozs7O3VCQUNKa0Msa0JBQVFLLGFBQVIsQ0FBc0JuQyxJQUF0QixFQUE0QkosSUFBNUIsQzs7O0FBQWJ3QyxvQjs7QUFDSmIsd0JBQVFDLEdBQVIsQ0FBWSxNQUFaLEVBQW9CWSxJQUFwQjs7c0JBRUlBLFFBQVFBLEtBQUtDLE1BQUwsR0FBYyxDOzs7OztBQUN4QixxQkFBS25ELE9BQUwsR0FBZWtELElBQWY7Ozs7O0FBRUEvQiwrQkFBS2lDLFdBQUw7Ozs7O0FBSUYsb0JBQUksS0FBS3RDLElBQUwsSUFBYSxDQUFqQixFQUFvQjtBQUNsQix1QkFBS2QsT0FBTCxHQUFla0QsSUFBZjtBQUNELGlCQUZELE1BRU87QUFDTCx1QkFBS2xELE9BQUwsR0FBZSxLQUFLQSxPQUFMLENBQWFxRCxNQUFiLENBQW9CSCxJQUFwQixDQUFmO0FBQ0Q7QUFDRCxxQkFBS0YsTUFBTDtBQUNBN0IsK0JBQUtpQyxXQUFMOzs7Ozs7Ozs7Ozs7Ozs7OztBQUdGOzs7O29DQUNnQjtBQUNkLFdBQUt0QyxJQUFMO0FBQ0FLLHFCQUFLbUMsV0FBTCxDQUFpQjtBQUNmQyxlQUFPLFFBRFE7QUFFZkMsY0FBTTtBQUZTLE9BQWpCOztBQUtBLFdBQUt2QixVQUFMLENBQWdCLEtBQUtuQixJQUFyQixFQUEyQjJDLElBQTNCLENBQWdDLFlBQU07QUFDcEN0Qyx1QkFBS2lDLFdBQUw7QUFDRCxPQUZEO0FBR0Q7Ozs7RUE3TGdDakMsZUFBS0wsSTs7a0JBQW5CNUIsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgcmVxdWVzdCBmcm9tICcuLi8uLi9saWIvYXBpL3JlcXVlc3QnXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfpppbpobUnXG4gICAgfVxuICAgIGNvbXBvbmVudHMgPSB7XG5cbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgcmVnaW9uOiBbJ+WMl+S6rCcsICfljJfkuqzluIInLCAn5rW35reA5Yy6J10sXG4gICAgICBjdXN0b21JdGVtOiflhajpg6gnLFxuICAgICAgc3dpcGVyRGF0YTogeyAvL+i9ruaSreaVsOaNrlxuICAgICAgICBpbmRpY2F0b3JEb3RzOiB0cnVlLFxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgaW50ZXJ2YWw6IDMwMDAsXG4gICAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICAgIGNpcmN1bGFyOiB0cnVlLFxuICAgICAgICBhcnI6IFt7XG4gICAgICAgICAgJ2ltYWdlVXJsJzogJ2h0dHBzOi8vc3MyLmJhaWR1LmNvbS82T05Zc2ppcDBRSVo4dHlobnEvaXQvdT0zMDAxNTE0OTc1LDM3NzA1OTIzNDgmZm09MTczJmFwcD00OSZmPUpQRUc/dz0yMTgmaD0xNDYmcz0xRkU2QzcwNDQyM0IyNDI1MjlBOUUxQzMwMzAwRTA5MicsXG4gICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiAn5byA5Y+R5b6u5L+h5YWo5a625qG26aG555uuVnVlL05vZGUvTW9uZ29EQumrmOe6p+aKgOacr+agiOWFqOimhueblidcbiAgICAgICAgfV0sXG4gICAgICB9LFxuICAgICAgbXNnTGlzdDogW3sgLy/liJfooajkv6Hmga9cbiAgICAgICAgYXZhdGFyOiAnLi4vLi4vaW1hZ2UvdXBsb2FkL3Bob3RvLmpwZWcnLFxuICAgICAgICB3ZUNoYXROYW1lOiAn55So5oi35ZCN56ew55So5oi35ZCN56ewJyxcbiAgICAgICAgbGFiZWw6ICflrrbnlLUnLFxuICAgICAgICBwaG9uZU51bWJlcjogJzE0MzExMjM0NTY3JyxcbiAgICAgICAgZGVzY3JpcHRpb246ICfpppblhYjkuL7kuKrouqvovrnnmoTkvovlrZDvvIzlpKfoh7Tliafmg4XmmK/vvJrlvIDlj5Hlm6LpmJ/lm6DkuLrmn5Dmn5Dljp/lm6DvvIzmhJ/op4nmtYvor5XkurrlkZjigJzmnInkupvlpJrkvZnigJ3vvIzmtYvor5Xlt6XkvZzlj6/ku6Xoh6rlt7HlgZrjgILkuo7mmK/kuI3lho3orqnmtYvor5Xlm6LpmJ/ot5/vvIzkuo7mmK/ov5nkuYjov5vooYzkuobkuKTkuInmrKHlkI7vvIzlrp7lnKjlj5fkuI3kuobnur/kuIrigJzmjqfliLbkuI3kvY/nmoTigJ3pl67popjvvIzkuo7mmK/lj4jmiormtYvor5XkurrlkZjor7fkuoblm57mnaXjgIInLFxuICAgICAgICBwcm9kdWN0SW1hZ2U6IFtcbiAgICAgICAgICAnaHR0cHM6Ly9zczAuYmFpZHUuY29tLzZPTldzamlwMFFJWjh0eWhucS9pdC91PTkzMzA5OTE4MywxMDYxMDc1MzgzJmZtPTE3MyZhcHA9NDkmZj1KUEVHP3c9MjE4Jmg9MTQ2JnM9OEVCRTUxODUyMDAyNEI1MTE4MkM2REJFMDMwMEQwMTMnLFxuICAgICAgICAgICdodHRwczovL3NzMC5iYWlkdS5jb20vNk9OV3NqaXAwUUlaOHR5aG5xL2l0L3U9Mjk5NTgwODkyNSwxODc0Nzc4NDMyJmZtPTE3MyZhcHA9NDkmZj1KUEVHP3c9MjE4Jmg9MTQ2JnM9OUU5NzAyQ0E2ODhGMDA1NTA2NkZBRkJFMDMwMDUwMEUnLFxuICAgICAgICAgICdodHRwczovL3NzMC5iYWlkdS5jb20vNk9OV3NqaXAwUUlaOHR5aG5xL2l0L3U9NDUyNjAxMjczLDc1NDA4OTAzOCZmbT0xNzMmYXBwPTQ5JmY9SlBFRz93PTIxOCZoPTE0NiZzPTRFOTQwNEMwQkM0MTdCNDc1RTJBODQ0QjAzMDA0MERCJyxcbiAgICAgICAgICAnaHR0cHM6Ly9zczEuYmFpZHUuY29tLzZPTlhzamlwMFFJWjh0eWhucS9pdC91PTM1MTc4ODI0MzIsMjE5MzY2NTU1OCZmbT0xNzMmYXBwPTI1JmY9SlBFRz93PTIxOCZoPTE0NiZzPUY1OUIxREQ1MEM1ODFBQzI0RUIxMTEzQzAzMDA4MDczJyxcbiAgICAgICAgXSxcbiAgICAgICAgdXBkYXRlZF9hdDogJzIwMTgtMTEtMjQgMTA6NDAnLFxuICAgICAgICBwYWdlVmlldzogJzQ3MCcsXG4gICAgICAgIGFkZHJlc3M6ICflnLDlnYAnXG4gICAgICB9XSxcblxuICAgICAgdHlwZTogWyAvL+S/oeaBr+exu+Wei1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6ICcwJyxcbiAgICAgICAgICBuYW1lOiAn5a6255S1J1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6ICcxJyxcbiAgICAgICAgICBuYW1lOiAn5a625YW3J1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6ICcyJyxcbiAgICAgICAgICBuYW1lOiAn5omL5py6J1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6ICcyJyxcbiAgICAgICAgICBuYW1lOiAn6Ieq6KGM6L2mJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6ICczJyxcbiAgICAgICAgICBuYW1lOiAn5LqS6IGU572RJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6ICc0JyxcbiAgICAgICAgICBuYW1lOiAn5q+N5am0546p5YW3J1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6ICc1JyxcbiAgICAgICAgICBuYW1lOiAn5bGV5p+cJ1xuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgY3VycmVudFR5cGVJbmRleDogMCwgLy/lvZPliY3kv6Hmga/nsbvlnotcbiAgICAgIHBhZ2U6IDEsXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG5cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgLy/ngrnlh7vmi6jmiZPnlLXor51cbiAgICAgIG1ha2VQaG9uZSh0ZWxsKSB7XG4gICAgICAgIHdlcHkubWFrZVBob25lQ2FsbCh7XG4gICAgICAgICAgcGhvbmVOdW1iZXI6IHRlbGxcbiAgICAgICAgfSk7XG4gICAgICB9LFxuXG4gICAgICAvL+i3s+i9rOivpuaDhemhtVxuICAgICAgcmV0dXJuVG9EZXRhaWwoKSB7XG4gICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAnL3BhZ2VzL2RldGFpbC9kZXRhaWwnXG4gICAgICAgIH0pO1xuICAgICAgfSxcblxuICAgICAgLy/pooTop4jlm77niYdcbiAgICAgIHByZXZpZXdJbWcoY3VycmVudCwgdXJscykge1xuICAgICAgICB3ZXB5LnByZXZpZXdJbWFnZSh7XG4gICAgICAgICAgY3VycmVudDogY3VycmVudCxcbiAgICAgICAgICB1cmxzOiB1cmxzLFxuICAgICAgICB9KTtcbiAgICAgIH0sXG5cbiAgICAgIC8v6L+U5Zue6aG26YOoXG4gICAgICByZXR1cm5Ub1RvcCgpIHtcbiAgICAgICAgd2VweS5wYWdlU2Nyb2xsVG8oe1xuICAgICAgICAgIHNjcm9sbFRvcDogMCxcbiAgICAgICAgICBkdXJhdGlvbjogMzAwXG4gICAgICAgIH0pO1xuICAgICAgfSxcblxuICAgICAgLy/liIfmjaLkv6Hmga/nsbvlnotcbiAgICAgIGdldEN1cnJlbnRUeXBlKGlkeCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRUeXBlSW5kZXggPSBpZHg7XG4gICAgICAgIHRoaXMucGFnZSA9IDE7XG4gICAgICAgIHRoaXMuZ2V0TGlzdE1zZygxLCBpZHgpXG4gICAgICB9LFxuXG4gICAgICAvL+i3s+i9rOaQnOe0oumhtemdolxuICAgICAgcmV0dXJuVG9TZWFjaCgpIHtcbiAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6IGAvcGFnZXMvc2VhcmNoL3NlYXJjaD9sb2NhdGlvbj0ke3RoaXMucmVnaW9ufWBcbiAgICAgICAgfSk7XG5cbiAgICAgIH0sXG5cbiAgICAgIC8v6YCJ5oup5Zyw5Z2AXG4gICAgICByZWdpb25DaGFuZ2UoZSkge1xuICAgICAgICBjb25zb2xlLmxvZygn6YCJ5oup5Zyw5Z2AJywgZS5kZXRhaWwudmFsdWUpXG4gICAgICAgIHRoaXMucmVnaW9uID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG5cbiAgICB9XG5cbiAgICBhc3luYyBvblNob3coKSB7XG4gICAgICAvLyB3ZXB5LnNob3dMb2FkaW5nKHtcbiAgICAgIC8vICAgdGl0bGU6ICfliqDovb3kuK0nLCBcbiAgICAgIC8vICAgbWFzazogdHJ1ZSwgXG4gICAgICAvLyB9KTtcblxuICAgICAgYXdhaXQgdGhpcy4kcGFyZW50LmxvZ2luKCk7IC8v6I635Y+W55So5oi35L+h5oGvXG4gICAgICAvLyB0aGlzLmdldEJhbm5lcigpOy8v6I635Y+WYmFubmVy5ZKM57G75Z6LXG4gICAgICAvLyB0aGlzLmdldExpc3RNc2coMSwxKTsvL+iOt+WPluWIl+ihqOS/oeaBr1xuICAgIH1cblxuICAgIC8vIOiOt+WPlmJhbm5lcuWSjOexu+Wei1xuICAgIGFzeW5jIGdldEJhbm5lcigpIHtcbiAgICAgIGxldCByZXMgPSBhd2FpdCByZXF1ZXN0LmdldEJhbm5lcigpO1xuICAgICAgaWYgKHJlcykge1xuICAgICAgICBjb25zb2xlLmxvZygnYmFubmVyJywgcmVzKTtcbiAgICAgICAgdGhpcy5zd2lwZXJEYXRhLmFyciA9IHJlcy5yb3dzO1xuICAgICAgICB0aGlzLnR5cGUgPSByZXMudHlwZTtcbiAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDojrflj5bliJfooajkv6Hmga9cbiAgICBhc3luYyBnZXRMaXN0TXNnKHBhZ2UsIHR5cGUpIHtcbiAgICAgIGxldCBsaXN0ID0gYXdhaXQgcmVxdWVzdC5nZXRHb29kc0xpc3RzKHBhZ2UsIHR5cGUpO1xuICAgICAgY29uc29sZS5sb2coJ+WIl+ihqOS/oeaBrycsIGxpc3QpO1xuXG4gICAgICBpZiAobGlzdCAmJiBsaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5tc2dMaXN0ID0gbGlzdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5wYWdlID09IDEpIHtcbiAgICAgICAgdGhpcy5tc2dMaXN0ID0gbGlzdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubXNnTGlzdCA9IHRoaXMubXNnTGlzdC5jb25jYXQobGlzdCk7XG4gICAgICB9XG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgd2VweS5oaWRlTG9hZGluZygpO1xuICAgIH1cblxuICAgIC8v5ruR5Yqo5Yiw5bqV6YOo5Yqg6L295pu05aSaXG4gICAgb25SZWFjaEJvdHRvbSgpIHtcbiAgICAgIHRoaXMucGFnZSsrO1xuICAgICAgd2VweS5zaG93TG9hZGluZyh7XG4gICAgICAgIHRpdGxlOiAn5Yqg6L295LitLi4uJyxcbiAgICAgICAgbWFzazogdHJ1ZSxcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmdldExpc3RNc2codGhpcy5wYWdlKS50aGVuKCgpID0+IHtcbiAgICAgICAgd2VweS5oaWRlTG9hZGluZygpO1xuICAgICAgfSlcbiAgICB9XG5cbiAgfVxuXG4iXX0=