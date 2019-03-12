'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getApp = getApp;
exports.getAppVersion = getAppVersion;

var _api = require('./api.js');

// 获取app相关信息的函数
function getApp(version) {
  return _api.api.get('/api/v1/app/?version=' + version);
}

function getAppVersion() {
  return _api.api.get('/version_1_1_3.json');
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJnZXRBcHAiLCJnZXRBcHBWZXJzaW9uIiwidmVyc2lvbiIsImFwaSIsImdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFFZ0JBLE0sR0FBQUEsTTtRQUlBQyxhLEdBQUFBLGE7O0FBTmhCOztBQUNBO0FBQ08sU0FBU0QsTUFBVCxDQUFnQkUsT0FBaEIsRUFBeUI7QUFDOUIsU0FBT0MsU0FBSUMsR0FBSixDQUFRLDBCQUEwQkYsT0FBbEMsQ0FBUDtBQUNEOztBQUVNLFNBQVNELGFBQVQsR0FBeUI7QUFDOUIsU0FBT0UsU0FBSUMsR0FBSixDQUFRLHFCQUFSLENBQVA7QUFDRCIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknXG4vLyDojrflj5ZhcHDnm7jlhbPkv6Hmga/nmoTlh73mlbBcbmV4cG9ydCBmdW5jdGlvbiBnZXRBcHAodmVyc2lvbikge1xuICByZXR1cm4gYXBpLmdldCgnL2FwaS92MS9hcHAvP3ZlcnNpb249JyArIHZlcnNpb24pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBcHBWZXJzaW9uKCkge1xuICByZXR1cm4gYXBpLmdldCgnL3ZlcnNpb25fMV8xXzMuanNvbicpXG59XG4iXX0=