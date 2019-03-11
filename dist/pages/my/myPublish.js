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

var MyPublish = function (_wepy$page) {
  _inherits(MyPublish, _wepy$page);

  function MyPublish() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MyPublish);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MyPublish.__proto__ || Object.getPrototypeOf(MyPublish)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '我发布的'
    }, _this.config = {}, _this.data = {
      currentTypeIndex: 0,
      type: [//信息类型
      {
        id: '0',
        name: '全部'
      }, {
        id: '1',
        name: '审核中'
      }, {
        id: '2',
        name: '已通过'
      }, {
        id: '2',
        name: '已拒绝'
      }],
      msgList: [{ //列表信息
        photo: '../../image/upload/photo.jpeg',
        name: '用户名称用户名称',
        type: '家电',
        tell: '14311234567',
        content: '首先举个身边的例子，大致剧情是：开发团队因为某某原因，感觉测试人员“有些多余”，测试工作可以自己做。于是不再让测试团队跟，于是这么进行了两三次后，实在受不了线上“控制不住的”问题，于是又把测试人员请了回来。',
        pics: ['https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=933099183,1061075383&fm=173&app=49&f=JPEG?w=218&h=146&s=8EBE518520024B51182C6DBE0300D013', 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2995808925,1874778432&fm=173&app=49&f=JPEG?w=218&h=146&s=9E9702CA688F0055066FAFBE0300500E', 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=452601273,754089038&fm=173&app=49&f=JPEG?w=218&h=146&s=4E9404C0BC417B475E2A844B030040DB', 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3517882432,2193665558&fm=173&app=25&f=JPEG?w=218&h=146&s=F59B1DD50C581AC24EB1113C03008073'],
        time: '2018-11-24 10:40',
        see: '470'
      }, {
        photo: '../../image/upload/photo.jpeg',
        name: '用户名称',
        type: '家电',
        tell: '14311234567',
        content: '二手物品内容',
        pics: ['https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=933099183,1061075383&fm=173&app=49&f=JPEG?w=218&h=146&s=8EBE518520024B51182C6DBE0300D013', 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2995808925,1874778432&fm=173&app=49&f=JPEG?w=218&h=146&s=9E9702CA688F0055066FAFBE0300500E', 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=452601273,754089038&fm=173&app=49&f=JPEG?w=218&h=146&s=4E9404C0BC417B475E2A844B030040DB', 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3517882432,2193665558&fm=173&app=25&f=JPEG?w=218&h=146&s=F59B1DD50C581AC24EB1113C03008073'],
        time: '2018-11-24 10:40',
        see: '470'
      }]
    }, _this.methods = {
      //跳转详情页
      navigateTo: function navigateTo() {
        _wepy2.default.navigateTo({
          url: '/pages/my/myPublish/myPublish'
        });
      },
      removehandeler: function removehandeler(id) {

        wx.showModal({
          title: '温馨提示',
          content: '确认删除这条信息吗？',
          success: function success(res) {
            if (res.confirm) {
              _wepy2.default.request('http://yapi.pplu.vip/api/product_list/delete/:' + id).then(function (d) {
                return console.log(d);
              });
            } else if (res.cancel) {}
          }
        });
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MyPublish, [{
    key: 'onLoad',
    value: function onLoad() {}

    // Other properties

  }]);

  return MyPublish;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(MyPublish , 'pages/my/myPublish'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15UHVibGlzaC5qcyJdLCJuYW1lcyI6WyJNeVB1Ymxpc2giLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImN1cnJlbnRUeXBlSW5kZXgiLCJ0eXBlIiwiaWQiLCJuYW1lIiwibXNnTGlzdCIsInBob3RvIiwidGVsbCIsImNvbnRlbnQiLCJwaWNzIiwidGltZSIsInNlZSIsIm1ldGhvZHMiLCJuYXZpZ2F0ZVRvIiwid2VweSIsInVybCIsInJlbW92ZWhhbmRlbGVyIiwid3giLCJzaG93TW9kYWwiLCJ0aXRsZSIsInN1Y2Nlc3MiLCJyZXMiLCJjb25maXJtIiwicmVxdWVzdCIsInRoZW4iLCJkIiwiY29uc29sZSIsImxvZyIsImNhbmNlbCIsImV2ZW50cyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFFcUJBLFM7Ozs7Ozs7Ozs7Ozs7OzRMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RELE0sR0FBUyxFLFFBRVRFLEksR0FBTztBQUNMQyx3QkFBaUIsQ0FEWjtBQUVMQyxZQUFLLENBQUM7QUFDSjtBQUNFQyxZQUFHLEdBREw7QUFFRUMsY0FBSztBQUZQLE9BREcsRUFLSDtBQUNFRCxZQUFHLEdBREw7QUFFRUMsY0FBSztBQUZQLE9BTEcsRUFTSDtBQUNFRCxZQUFHLEdBREw7QUFFRUMsY0FBSztBQUZQLE9BVEcsRUFhSDtBQUNFRCxZQUFHLEdBREw7QUFFRUMsY0FBSztBQUZQLE9BYkcsQ0FGQTtBQW9CTEMsZUFBUyxDQUFDLEVBQUU7QUFDVkMsZUFBTywrQkFEQztBQUVSRixjQUFNLFVBRkU7QUFHUkYsY0FBTSxJQUhFO0FBSVJLLGNBQU0sYUFKRTtBQUtSQyxpQkFBUyx5R0FMRDtBQU1SQyxjQUFNLENBQ0osd0lBREksRUFFSix5SUFGSSxFQUdKLHVJQUhJLEVBSUoseUlBSkksQ0FORTtBQVlSQyxjQUFNLGtCQVpFO0FBYVJDLGFBQUs7QUFiRyxPQUFELEVBZVA7QUFDRUwsZUFBTywrQkFEVDtBQUVFRixjQUFNLE1BRlI7QUFHRUYsY0FBTSxJQUhSO0FBSUVLLGNBQU0sYUFKUjtBQUtFQyxpQkFBUyxRQUxYO0FBTUVDLGNBQU0sQ0FDSix3SUFESSxFQUVKLHlJQUZJLEVBR0osdUlBSEksRUFJSix5SUFKSSxDQU5SO0FBWUVDLGNBQU0sa0JBWlI7QUFhRUMsYUFBSztBQWJQLE9BZk87QUFwQkosSyxRQW9EUEMsTyxHQUFVO0FBQ1I7QUFDQUMsZ0JBRlEsd0JBRUs7QUFDWEMsdUJBQUtELFVBQUwsQ0FBZ0I7QUFDZEUsZUFBSztBQURTLFNBQWhCO0FBR0QsT0FOTztBQVFSQyxvQkFSUSwwQkFRT2IsRUFSUCxFQVFVOztBQUVoQmMsV0FBR0MsU0FBSCxDQUFhO0FBQ1hDLGlCQUFPLE1BREk7QUFFWFgsbUJBQVMsWUFGRTtBQUdYWSxpQkFIVyxtQkFHSEMsR0FIRyxFQUdFO0FBQ1gsZ0JBQUlBLElBQUlDLE9BQVIsRUFBaUI7QUFDZlIsNkJBQUtTLE9BQUwsb0RBQThEcEIsRUFBOUQsRUFBb0VxQixJQUFwRSxDQUF5RSxVQUFDQyxDQUFEO0FBQUEsdUJBQU9DLFFBQVFDLEdBQVIsQ0FBWUYsQ0FBWixDQUFQO0FBQUEsZUFBekU7QUFDRCxhQUZELE1BRU8sSUFBSUosSUFBSU8sTUFBUixFQUFnQixDQUV0QjtBQUNGO0FBVFUsU0FBYjtBQWFEO0FBdkJPLEssUUEwQlZDLE0sR0FBUyxFOzs7Ozs2QkFFQSxDQUNSOztBQUdEOzs7OztFQTFGcUNmLGVBQUtnQixJOztrQkFBdkJqQyxTIiwiZmlsZSI6Im15UHVibGlzaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBNeVB1Ymxpc2ggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmiJHlj5HluIPnmoQnXG4gICAgfTtcbiAgICBjb25maWcgPSB7fTtcblxuICAgIGRhdGEgPSB7XG4gICAgICBjdXJyZW50VHlwZUluZGV4OjAsXG4gICAgICB0eXBlOlsvL+S/oeaBr+exu+Wei1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6JzAnLFxuICAgICAgICAgIG5hbWU6J+WFqOmDqCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOicxJyxcbiAgICAgICAgICBuYW1lOiflrqHmoLjkuK0nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDonMicsXG4gICAgICAgICAgbmFtZTon5bey6YCa6L+HJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6JzInLFxuICAgICAgICAgIG5hbWU6J+W3suaLkue7nSdcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIG1zZ0xpc3Q6IFt7IC8v5YiX6KGo5L+h5oGvXG4gICAgICAgIHBob3RvOiAnLi4vLi4vaW1hZ2UvdXBsb2FkL3Bob3RvLmpwZWcnLFxuICAgICAgICBuYW1lOiAn55So5oi35ZCN56ew55So5oi35ZCN56ewJyxcbiAgICAgICAgdHlwZTogJ+WutueUtScsXG4gICAgICAgIHRlbGw6ICcxNDMxMTIzNDU2NycsXG4gICAgICAgIGNvbnRlbnQ6ICfpppblhYjkuL7kuKrouqvovrnnmoTkvovlrZDvvIzlpKfoh7Tliafmg4XmmK/vvJrlvIDlj5Hlm6LpmJ/lm6DkuLrmn5Dmn5Dljp/lm6DvvIzmhJ/op4nmtYvor5XkurrlkZjigJzmnInkupvlpJrkvZnigJ3vvIzmtYvor5Xlt6XkvZzlj6/ku6Xoh6rlt7HlgZrjgILkuo7mmK/kuI3lho3orqnmtYvor5Xlm6LpmJ/ot5/vvIzkuo7mmK/ov5nkuYjov5vooYzkuobkuKTkuInmrKHlkI7vvIzlrp7lnKjlj5fkuI3kuobnur/kuIrigJzmjqfliLbkuI3kvY/nmoTigJ3pl67popjvvIzkuo7mmK/lj4jmiormtYvor5XkurrlkZjor7fkuoblm57mnaXjgIInLFxuICAgICAgICBwaWNzOiBbXG4gICAgICAgICAgJ2h0dHBzOi8vc3MwLmJhaWR1LmNvbS82T05Xc2ppcDBRSVo4dHlobnEvaXQvdT05MzMwOTkxODMsMTA2MTA3NTM4MyZmbT0xNzMmYXBwPTQ5JmY9SlBFRz93PTIxOCZoPTE0NiZzPThFQkU1MTg1MjAwMjRCNTExODJDNkRCRTAzMDBEMDEzJyxcbiAgICAgICAgICAnaHR0cHM6Ly9zczAuYmFpZHUuY29tLzZPTldzamlwMFFJWjh0eWhucS9pdC91PTI5OTU4MDg5MjUsMTg3NDc3ODQzMiZmbT0xNzMmYXBwPTQ5JmY9SlBFRz93PTIxOCZoPTE0NiZzPTlFOTcwMkNBNjg4RjAwNTUwNjZGQUZCRTAzMDA1MDBFJyxcbiAgICAgICAgICAnaHR0cHM6Ly9zczAuYmFpZHUuY29tLzZPTldzamlwMFFJWjh0eWhucS9pdC91PTQ1MjYwMTI3Myw3NTQwODkwMzgmZm09MTczJmFwcD00OSZmPUpQRUc/dz0yMTgmaD0xNDYmcz00RTk0MDRDMEJDNDE3QjQ3NUUyQTg0NEIwMzAwNDBEQicsXG4gICAgICAgICAgJ2h0dHBzOi8vc3MxLmJhaWR1LmNvbS82T05Yc2ppcDBRSVo4dHlobnEvaXQvdT0zNTE3ODgyNDMyLDIxOTM2NjU1NTgmZm09MTczJmFwcD0yNSZmPUpQRUc/dz0yMTgmaD0xNDYmcz1GNTlCMURENTBDNTgxQUMyNEVCMTExM0MwMzAwODA3MycsXG4gICAgICAgIF0sXG4gICAgICAgIHRpbWU6ICcyMDE4LTExLTI0IDEwOjQwJyxcbiAgICAgICAgc2VlOiAnNDcwJ1xuICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBob3RvOiAnLi4vLi4vaW1hZ2UvdXBsb2FkL3Bob3RvLmpwZWcnLFxuICAgICAgICAgIG5hbWU6ICfnlKjmiLflkI3np7AnLFxuICAgICAgICAgIHR5cGU6ICflrrbnlLUnLFxuICAgICAgICAgIHRlbGw6ICcxNDMxMTIzNDU2NycsXG4gICAgICAgICAgY29udGVudDogJ+S6jOaJi+eJqeWTgeWGheWuuScsXG4gICAgICAgICAgcGljczogW1xuICAgICAgICAgICAgJ2h0dHBzOi8vc3MwLmJhaWR1LmNvbS82T05Xc2ppcDBRSVo4dHlobnEvaXQvdT05MzMwOTkxODMsMTA2MTA3NTM4MyZmbT0xNzMmYXBwPTQ5JmY9SlBFRz93PTIxOCZoPTE0NiZzPThFQkU1MTg1MjAwMjRCNTExODJDNkRCRTAzMDBEMDEzJyxcbiAgICAgICAgICAgICdodHRwczovL3NzMC5iYWlkdS5jb20vNk9OV3NqaXAwUUlaOHR5aG5xL2l0L3U9Mjk5NTgwODkyNSwxODc0Nzc4NDMyJmZtPTE3MyZhcHA9NDkmZj1KUEVHP3c9MjE4Jmg9MTQ2JnM9OUU5NzAyQ0E2ODhGMDA1NTA2NkZBRkJFMDMwMDUwMEUnLFxuICAgICAgICAgICAgJ2h0dHBzOi8vc3MwLmJhaWR1LmNvbS82T05Xc2ppcDBRSVo4dHlobnEvaXQvdT00NTI2MDEyNzMsNzU0MDg5MDM4JmZtPTE3MyZhcHA9NDkmZj1KUEVHP3c9MjE4Jmg9MTQ2JnM9NEU5NDA0QzBCQzQxN0I0NzVFMkE4NDRCMDMwMDQwREInLFxuICAgICAgICAgICAgJ2h0dHBzOi8vc3MxLmJhaWR1LmNvbS82T05Yc2ppcDBRSVo4dHlobnEvaXQvdT0zNTE3ODgyNDMyLDIxOTM2NjU1NTgmZm09MTczJmFwcD0yNSZmPUpQRUc/dz0yMTgmaD0xNDYmcz1GNTlCMURENTBDNTgxQUMyNEVCMTExM0MwMzAwODA3MycsXG4gICAgICAgICAgXSxcbiAgICAgICAgICB0aW1lOiAnMjAxOC0xMS0yNCAxMDo0MCcsXG4gICAgICAgICAgc2VlOiAnNDcwJ1xuICAgICAgICB9XG4gICAgICBdLFxuICAgIH07XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIC8v6Lez6L2s6K+m5oOF6aG1XG4gICAgICBuYXZpZ2F0ZVRvKCkge1xuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJy9wYWdlcy9teS9teVB1Ymxpc2gvbXlQdWJsaXNoJyxcbiAgICAgICAgfSk7XG4gICAgICB9LFxuXG4gICAgICByZW1vdmVoYW5kZWxlcihpZCl7XG5cbiAgICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgICB0aXRsZTogJ+a4qemmqOaPkOekuicsXG4gICAgICAgICAgY29udGVudDogJ+ehruiupOWIoOmZpOi/meadoeS/oeaBr+WQl++8nycsXG4gICAgICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xuICAgICAgICAgICAgICB3ZXB5LnJlcXVlc3QoYGh0dHA6Ly95YXBpLnBwbHUudmlwL2FwaS9wcm9kdWN0X2xpc3QvZGVsZXRlLzoke2lkfWApLnRoZW4oKGQpID0+IGNvbnNvbGUubG9nKGQpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzLmNhbmNlbCkge1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG5cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZXZlbnRzID0ge307XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgfVxuXG5cbiAgICAvLyBPdGhlciBwcm9wZXJ0aWVzXG4gIH1cbiJdfQ==