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

// import testMixin from '../mixins/test'

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
      navigationBarTitleText: '搜索页'

    }, _this.components = {}, _this.data = {
      resultList: [], //搜索结果
      hotSearch: ['家具', '家电', '互联网', '家具', '家电', '互联网', '家具', '家电', '互联网', '家具', '家电', '互联网'], //搜索热词
      isShowSearchHinit: true, //是否显示热搜
      keyword: '', //搜索关键词,
      location: [], //地址
      noResultHinit: false //没有搜索结果时显示
    }, _this.computed = {}, _this.methods = {
      //点击搜索
      search: function search(keyword) {
        console.log('点击搜索');
        console.log('keyword', keyword);
        _wepy2.default.showLoading({
          title: '搜索中',
          mask: true
        });

        if (!keyword) {
          this.resultList = [];
          this.isShowSearchHinit = true;
          _wepy2.default.showModal({
            title: '提示',
            content: '搜索关键词不能为空',
            showCancel: false
          });
        } else {
          this.keyword = keyword;
          this.resultList = [{ //列表信息
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
          }];
          this.isShowSearchHinit = false;
        }
        _wepy2.default.hideLoading();
      },


      // 获取搜索关键词
      getSearchKeyword: function getSearchKeyword(e) {
        console.log(e);
        this.keyword = e.detail.value;
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  // mixins = [testMixin]

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(options) {
      console.log('onload', options);
      this.location = options.location;
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/search/search'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiZGF0YSIsInJlc3VsdExpc3QiLCJob3RTZWFyY2giLCJpc1Nob3dTZWFyY2hIaW5pdCIsImtleXdvcmQiLCJsb2NhdGlvbiIsIm5vUmVzdWx0SGluaXQiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJzZWFyY2giLCJjb25zb2xlIiwibG9nIiwid2VweSIsInNob3dMb2FkaW5nIiwidGl0bGUiLCJtYXNrIiwic2hvd01vZGFsIiwiY29udGVudCIsInNob3dDYW5jZWwiLCJwaG90byIsIm5hbWUiLCJ0eXBlIiwidGVsbCIsInBpY3MiLCJ0aW1lIiwic2VlIiwiaGlkZUxvYWRpbmciLCJnZXRTZWFyY2hLZXl3b3JkIiwiZSIsImRldGFpbCIsInZhbHVlIiwiZXZlbnRzIiwib3B0aW9ucyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7QUFDQTs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3Qjs7QUFEakIsSyxRQUlUQyxVLEdBQWEsRSxRQU1iQyxJLEdBQU87QUFDTEMsa0JBQVksRUFEUCxFQUNXO0FBQ2hCQyxpQkFBVyxDQUNULElBRFMsRUFDSCxJQURHLEVBQ0csS0FESCxFQUNVLElBRFYsRUFDZ0IsSUFEaEIsRUFDc0IsS0FEdEIsRUFDNkIsSUFEN0IsRUFDbUMsSUFEbkMsRUFDeUMsS0FEekMsRUFDZ0QsSUFEaEQsRUFDc0QsSUFEdEQsRUFDNEQsS0FENUQsQ0FGTixFQUlGO0FBQ0hDLHlCQUFtQixJQUxkLEVBS29CO0FBQ3pCQyxlQUFTLEVBTkosRUFNUTtBQUNiQyxnQkFBUyxFQVBKLEVBT087QUFDWkMscUJBQWMsS0FSVCxDQVFlO0FBUmYsSyxRQVdQQyxRLEdBQVcsRSxRQUlYQyxPLEdBQVU7QUFDUjtBQUNBQyxZQUZRLGtCQUVETCxPQUZDLEVBRVE7QUFDZE0sZ0JBQVFDLEdBQVIsQ0FBWSxNQUFaO0FBQ0FELGdCQUFRQyxHQUFSLENBQVksU0FBWixFQUF1QlAsT0FBdkI7QUFDQVEsdUJBQUtDLFdBQUwsQ0FBaUI7QUFDZkMsaUJBQU8sS0FEUTtBQUVmQyxnQkFBTTtBQUZTLFNBQWpCOztBQUtBLFlBQUksQ0FBQ1gsT0FBTCxFQUFjO0FBQ1osZUFBS0gsVUFBTCxHQUFnQixFQUFoQjtBQUNBLGVBQUtFLGlCQUFMLEdBQXVCLElBQXZCO0FBQ0FTLHlCQUFLSSxTQUFMLENBQWU7QUFDYkYsbUJBQU8sSUFETTtBQUViRyxxQkFBUyxXQUZJO0FBR2JDLHdCQUFZO0FBSEMsV0FBZjtBQUtELFNBUkQsTUFRTztBQUNMLGVBQUtkLE9BQUwsR0FBYUEsT0FBYjtBQUNBLGVBQUtILFVBQUwsR0FBa0IsQ0FBQyxFQUFFO0FBQ2pCa0IsbUJBQU8sK0JBRFE7QUFFZkMsa0JBQU0sVUFGUztBQUdmQyxrQkFBTSxJQUhTO0FBSWZDLGtCQUFNLGFBSlM7QUFLZkwscUJBQVMseUdBTE07QUFNZk0sa0JBQU0sQ0FDSix3SUFESSxFQUVKLHlJQUZJLEVBR0osdUlBSEksRUFJSix5SUFKSSxDQU5TO0FBWWZDLGtCQUFNLGtCQVpTO0FBYWZDLGlCQUFLO0FBYlUsV0FBRCxFQWVoQjtBQUNFTixtQkFBTywrQkFEVDtBQUVFQyxrQkFBTSxNQUZSO0FBR0VDLGtCQUFNLElBSFI7QUFJRUMsa0JBQU0sYUFKUjtBQUtFTCxxQkFBUyxRQUxYO0FBTUVNLGtCQUFNLENBQ0osd0lBREksRUFFSix5SUFGSSxFQUdKLHVJQUhJLEVBSUoseUlBSkksQ0FOUjtBQVlFQyxrQkFBTSxrQkFaUjtBQWFFQyxpQkFBSztBQWJQLFdBZmdCLENBQWxCO0FBK0JBLGVBQUt0QixpQkFBTCxHQUF5QixLQUF6QjtBQUNEO0FBQ0RTLHVCQUFLYyxXQUFMO0FBQ0QsT0F0RE87OztBQXdEUjtBQUNBQyxzQkF6RFEsNEJBeURTQyxDQXpEVCxFQXlEWTtBQUNsQmxCLGdCQUFRQyxHQUFSLENBQVlpQixDQUFaO0FBQ0EsYUFBS3hCLE9BQUwsR0FBZXdCLEVBQUVDLE1BQUYsQ0FBU0MsS0FBeEI7QUFDRDtBQTVETyxLLFFBK0RWQyxNLEdBQVMsRTs7O0FBaEZUOzs7OzJCQW9GT0MsTyxFQUFTO0FBQ2R0QixjQUFRQyxHQUFSLENBQVksUUFBWixFQUFxQnFCLE9BQXJCO0FBQ0EsV0FBSzNCLFFBQUwsR0FBZ0IyQixRQUFRM0IsUUFBeEI7QUFDRDs7OztFQWhHZ0NPLGVBQUtxQixJOztrQkFBbkJyQyxLIiwiZmlsZSI6InNlYXJjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAvLyBpbXBvcnQgdGVzdE1peGluIGZyb20gJy4uL21peGlucy90ZXN0J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5pCc57Si6aG1JyxcblxuICAgIH1cbiAgICBjb21wb25lbnRzID0ge1xuXG4gICAgfVxuXG4gICAgLy8gbWl4aW5zID0gW3Rlc3RNaXhpbl1cblxuICAgIGRhdGEgPSB7XG4gICAgICByZXN1bHRMaXN0OiBbXSwgLy/mkJzntKLnu5PmnpxcbiAgICAgIGhvdFNlYXJjaDogW1xuICAgICAgICAn5a625YW3JywgJ+WutueUtScsICfkupLogZTnvZEnLCAn5a625YW3JywgJ+WutueUtScsICfkupLogZTnvZEnLCAn5a625YW3JywgJ+WutueUtScsICfkupLogZTnvZEnLCAn5a625YW3JywgJ+WutueUtScsICfkupLogZTnvZEnLFxuICAgICAgXSwgLy/mkJzntKLng63or41cbiAgICAgIGlzU2hvd1NlYXJjaEhpbml0OiB0cnVlLCAvL+aYr+WQpuaYvuekuueDreaQnFxuICAgICAga2V5d29yZDogJycsIC8v5pCc57Si5YWz6ZSu6K+NLFxuICAgICAgbG9jYXRpb246W10sLy/lnLDlnYBcbiAgICAgIG5vUmVzdWx0SGluaXQ6ZmFsc2UsLy/msqHmnInmkJzntKLnu5Pmnpzml7bmmL7npLpcbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcblxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICAvL+eCueWHu+aQnOe0olxuICAgICAgc2VhcmNoKGtleXdvcmQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ+eCueWHu+aQnOe0oicpO1xuICAgICAgICBjb25zb2xlLmxvZygna2V5d29yZCcsIGtleXdvcmQpO1xuICAgICAgICB3ZXB5LnNob3dMb2FkaW5nKHtcbiAgICAgICAgICB0aXRsZTogJ+aQnOe0ouS4rScsXG4gICAgICAgICAgbWFzazogdHJ1ZSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFrZXl3b3JkKSB7XG4gICAgICAgICAgdGhpcy5yZXN1bHRMaXN0PVtdO1xuICAgICAgICAgIHRoaXMuaXNTaG93U2VhcmNoSGluaXQ9dHJ1ZTtcbiAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICAgICAgICBjb250ZW50OiAn5pCc57Si5YWz6ZSu6K+N5LiN6IO95Li656m6JyxcbiAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMua2V5d29yZD1rZXl3b3JkO1xuICAgICAgICAgIHRoaXMucmVzdWx0TGlzdCA9IFt7IC8v5YiX6KGo5L+h5oGvXG4gICAgICAgICAgICAgIHBob3RvOiAnLi4vLi4vaW1hZ2UvdXBsb2FkL3Bob3RvLmpwZWcnLFxuICAgICAgICAgICAgICBuYW1lOiAn55So5oi35ZCN56ew55So5oi35ZCN56ewJyxcbiAgICAgICAgICAgICAgdHlwZTogJ+WutueUtScsXG4gICAgICAgICAgICAgIHRlbGw6ICcxNDMxMTIzNDU2NycsXG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICfpppblhYjkuL7kuKrouqvovrnnmoTkvovlrZDvvIzlpKfoh7Tliafmg4XmmK/vvJrlvIDlj5Hlm6LpmJ/lm6DkuLrmn5Dmn5Dljp/lm6DvvIzmhJ/op4nmtYvor5XkurrlkZjigJzmnInkupvlpJrkvZnigJ3vvIzmtYvor5Xlt6XkvZzlj6/ku6Xoh6rlt7HlgZrjgILkuo7mmK/kuI3lho3orqnmtYvor5Xlm6LpmJ/ot5/vvIzkuo7mmK/ov5nkuYjov5vooYzkuobkuKTkuInmrKHlkI7vvIzlrp7lnKjlj5fkuI3kuobnur/kuIrigJzmjqfliLbkuI3kvY/nmoTigJ3pl67popjvvIzkuo7mmK/lj4jmiormtYvor5XkurrlkZjor7fkuoblm57mnaXjgIInLFxuICAgICAgICAgICAgICBwaWNzOiBbXG4gICAgICAgICAgICAgICAgJ2h0dHBzOi8vc3MwLmJhaWR1LmNvbS82T05Xc2ppcDBRSVo4dHlobnEvaXQvdT05MzMwOTkxODMsMTA2MTA3NTM4MyZmbT0xNzMmYXBwPTQ5JmY9SlBFRz93PTIxOCZoPTE0NiZzPThFQkU1MTg1MjAwMjRCNTExODJDNkRCRTAzMDBEMDEzJyxcbiAgICAgICAgICAgICAgICAnaHR0cHM6Ly9zczAuYmFpZHUuY29tLzZPTldzamlwMFFJWjh0eWhucS9pdC91PTI5OTU4MDg5MjUsMTg3NDc3ODQzMiZmbT0xNzMmYXBwPTQ5JmY9SlBFRz93PTIxOCZoPTE0NiZzPTlFOTcwMkNBNjg4RjAwNTUwNjZGQUZCRTAzMDA1MDBFJyxcbiAgICAgICAgICAgICAgICAnaHR0cHM6Ly9zczAuYmFpZHUuY29tLzZPTldzamlwMFFJWjh0eWhucS9pdC91PTQ1MjYwMTI3Myw3NTQwODkwMzgmZm09MTczJmFwcD00OSZmPUpQRUc/dz0yMTgmaD0xNDYmcz00RTk0MDRDMEJDNDE3QjQ3NUUyQTg0NEIwMzAwNDBEQicsXG4gICAgICAgICAgICAgICAgJ2h0dHBzOi8vc3MxLmJhaWR1LmNvbS82T05Yc2ppcDBRSVo4dHlobnEvaXQvdT0zNTE3ODgyNDMyLDIxOTM2NjU1NTgmZm09MTczJmFwcD0yNSZmPUpQRUc/dz0yMTgmaD0xNDYmcz1GNTlCMURENTBDNTgxQUMyNEVCMTExM0MwMzAwODA3MycsXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHRpbWU6ICcyMDE4LTExLTI0IDEwOjQwJyxcbiAgICAgICAgICAgICAgc2VlOiAnNDcwJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcGhvdG86ICcuLi8uLi9pbWFnZS91cGxvYWQvcGhvdG8uanBlZycsXG4gICAgICAgICAgICAgIG5hbWU6ICfnlKjmiLflkI3np7AnLFxuICAgICAgICAgICAgICB0eXBlOiAn5a6255S1JyxcbiAgICAgICAgICAgICAgdGVsbDogJzE0MzExMjM0NTY3JyxcbiAgICAgICAgICAgICAgY29udGVudDogJ+S6jOaJi+eJqeWTgeWGheWuuScsXG4gICAgICAgICAgICAgIHBpY3M6IFtcbiAgICAgICAgICAgICAgICAnaHR0cHM6Ly9zczAuYmFpZHUuY29tLzZPTldzamlwMFFJWjh0eWhucS9pdC91PTkzMzA5OTE4MywxMDYxMDc1MzgzJmZtPTE3MyZhcHA9NDkmZj1KUEVHP3c9MjE4Jmg9MTQ2JnM9OEVCRTUxODUyMDAyNEI1MTE4MkM2REJFMDMwMEQwMTMnLFxuICAgICAgICAgICAgICAgICdodHRwczovL3NzMC5iYWlkdS5jb20vNk9OV3NqaXAwUUlaOHR5aG5xL2l0L3U9Mjk5NTgwODkyNSwxODc0Nzc4NDMyJmZtPTE3MyZhcHA9NDkmZj1KUEVHP3c9MjE4Jmg9MTQ2JnM9OUU5NzAyQ0E2ODhGMDA1NTA2NkZBRkJFMDMwMDUwMEUnLFxuICAgICAgICAgICAgICAgICdodHRwczovL3NzMC5iYWlkdS5jb20vNk9OV3NqaXAwUUlaOHR5aG5xL2l0L3U9NDUyNjAxMjczLDc1NDA4OTAzOCZmbT0xNzMmYXBwPTQ5JmY9SlBFRz93PTIxOCZoPTE0NiZzPTRFOTQwNEMwQkM0MTdCNDc1RTJBODQ0QjAzMDA0MERCJyxcbiAgICAgICAgICAgICAgICAnaHR0cHM6Ly9zczEuYmFpZHUuY29tLzZPTlhzamlwMFFJWjh0eWhucS9pdC91PTM1MTc4ODI0MzIsMjE5MzY2NTU1OCZmbT0xNzMmYXBwPTI1JmY9SlBFRz93PTIxOCZoPTE0NiZzPUY1OUIxREQ1MEM1ODFBQzI0RUIxMTEzQzAzMDA4MDczJyxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgdGltZTogJzIwMTgtMTEtMjQgMTA6NDAnLFxuICAgICAgICAgICAgICBzZWU6ICc0NzAnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICAgIHRoaXMuaXNTaG93U2VhcmNoSGluaXQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKCk7XG4gICAgICB9LFxuXG4gICAgICAvLyDojrflj5bmkJzntKLlhbPplK7or41cbiAgICAgIGdldFNlYXJjaEtleXdvcmQoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgdGhpcy5rZXl3b3JkID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICB9LFxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcblxuICAgIH1cblxuICAgIG9uTG9hZChvcHRpb25zKSB7XG4gICAgICBjb25zb2xlLmxvZygnb25sb2FkJyxvcHRpb25zKTtcbiAgICAgIHRoaXMubG9jYXRpb24gPSBvcHRpb25zLmxvY2F0aW9uXG4gICAgfVxuICB9XG5cbiJdfQ==