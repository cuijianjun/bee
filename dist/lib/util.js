'use strict';

var _address = require('./api/address.js');

//时间格式化 例:2018/11/11 10:10:10
var formatTime = function formatTime(date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':');
};

// 把2018-10-10转化为2018年10月10日
var formatTime2 = function formatTime2(date) {
  var arr = date.split('-');
  return arr[0] + '\u5E74' + arr[1] + '\u6708' + arr[2] + '\u65E5';
};

//时间格式化 例:2018/11/11 10:10:10
var formatTime3 = function formatTime3(date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute].map(formatNumber).join(':');
};

//时间格式化 例: 10:10:10
var formatTime4 = function formatTime4(date) {
  var hour = 0;
  var minite = 0;
  var second = 0;

  if (date > 3600) {
    hour = Math.floor(date / 3600);
    minite = Math.floor((date - hour * 3600) / 60);
    second = Math.floor(date - hour * 3600 - minite * 60);
    return hour + ':' + minite + ':' + second;
  }

  if (date > 60) {
    minite = Math.floor(date / 60);
    second = Math.floor(date - minite * 60);
    return minite + ':' + second;
  }
};

//小于10的数前面加1
var formatNumber = function formatNumber(n) {
  n = n.toString();
  return n[1] ? n : '0' + n;
};

// 数字格式化 大于1万小于1亿的展示为 例如1.2万, 大于1亿的展示为 例如1.2亿
var formatNum = function formatNum(num) {
  var str = num;

  if (10000 < num && num < 100000000) {
    num = num / 10000;
    num = num.toFixed(1);
    str = num + '万';
  } else if (num > 100000000) {
    num = num / 100000000;
    num = num.toFixed(1);
    str = num + '亿';
  }

  return str;
};

// 图片格式化
var sitePic = function sitePic(pic) {

  if (!pic) return '';
  if (pic.indexOf('http') == -1) {
    return _address.IMAGE_HOST + pic;
  } else {
    return pic;
  }
};

//比较版本
//比较版本
var compareVersion = function compareVersion(v1, v2) {
  v1 = v1.split('.');
  v2 = v2.split('.');
  var len = Math.max(v1.length, v2.length);

  while (v1.length < len) {
    v1.push('0');
  }
  while (v2.length < len) {
    v2.push('0');
  }

  for (var i = 0; i < len; i++) {
    var num1 = parseInt(v1[i]);
    var num2 = parseInt(v2[i]);

    if (num1 > num2) {
      return 1;
    } else if (num1 < num2) {
      return -1;
    }
  }

  return 0;
};

module.exports = {
  formatTime: formatTime, //格式化时间 2018/11/11 10:10:10
  formatTime2: formatTime2, //格式化时间 2018年10月10日
  formatTime3: formatTime3, //格式化时间 2018年10月10日 10:10
  formatTime4: formatTime4, ////格式化时间  10:10
  formatNum: formatNum, //格式化数字
  sitePic: sitePic, //格式化图片地址
  compareVersion: compareVersion //比较小程序基带版本
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwuanMiXSwibmFtZXMiOlsiZm9ybWF0VGltZSIsInllYXIiLCJkYXRlIiwiZ2V0RnVsbFllYXIiLCJtb250aCIsImdldE1vbnRoIiwiZGF5IiwiZ2V0RGF0ZSIsImhvdXIiLCJnZXRIb3VycyIsIm1pbnV0ZSIsImdldE1pbnV0ZXMiLCJzZWNvbmQiLCJnZXRTZWNvbmRzIiwibWFwIiwiZm9ybWF0TnVtYmVyIiwiam9pbiIsImZvcm1hdFRpbWUyIiwiYXJyIiwic3BsaXQiLCJmb3JtYXRUaW1lMyIsImZvcm1hdFRpbWU0IiwibWluaXRlIiwiTWF0aCIsImZsb29yIiwibiIsInRvU3RyaW5nIiwiZm9ybWF0TnVtIiwibnVtIiwic3RyIiwidG9GaXhlZCIsInNpdGVQaWMiLCJwaWMiLCJpbmRleE9mIiwiSU1BR0VfSE9TVCIsImNvbXBhcmVWZXJzaW9uIiwidjEiLCJ2MiIsImxlbiIsIm1heCIsImxlbmd0aCIsInB1c2giLCJpIiwibnVtMSIsInBhcnNlSW50IiwibnVtMiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBRUE7QUFDQSxJQUFNQSxhQUFhLFNBQWJBLFVBQWEsT0FBUTtBQUN6QixNQUFNQyxPQUFPQyxLQUFLQyxXQUFMLEVBQWI7QUFDQSxNQUFNQyxRQUFRRixLQUFLRyxRQUFMLEtBQWtCLENBQWhDO0FBQ0EsTUFBTUMsTUFBTUosS0FBS0ssT0FBTCxFQUFaO0FBQ0EsTUFBTUMsT0FBT04sS0FBS08sUUFBTCxFQUFiO0FBQ0EsTUFBTUMsU0FBU1IsS0FBS1MsVUFBTCxFQUFmO0FBQ0EsTUFBTUMsU0FBU1YsS0FBS1csVUFBTCxFQUFmOztBQUVBLFNBQU8sQ0FBQ1osSUFBRCxFQUFPRyxLQUFQLEVBQWNFLEdBQWQsRUFBbUJRLEdBQW5CLENBQXVCQyxZQUF2QixFQUFxQ0MsSUFBckMsQ0FBMEMsR0FBMUMsSUFBaUQsR0FBakQsR0FBdUQsQ0FBQ1IsSUFBRCxFQUFPRSxNQUFQLEVBQWVFLE1BQWYsRUFBdUJFLEdBQXZCLENBQTJCQyxZQUEzQixFQUF5Q0MsSUFBekMsQ0FBOEMsR0FBOUMsQ0FBOUQ7QUFDRCxDQVREOztBQVdBO0FBQ0EsSUFBTUMsY0FBYyxTQUFkQSxXQUFjLE9BQVE7QUFDMUIsTUFBSUMsTUFBSWhCLEtBQUtpQixLQUFMLENBQVcsR0FBWCxDQUFSO0FBQ0EsU0FBVUQsSUFBSSxDQUFKLENBQVYsY0FBb0JBLElBQUksQ0FBSixDQUFwQixjQUE4QkEsSUFBSSxDQUFKLENBQTlCO0FBQ0QsQ0FIRDs7QUFLQTtBQUNBLElBQU1FLGNBQWMsU0FBZEEsV0FBYyxPQUFRO0FBQzFCLE1BQU1uQixPQUFPQyxLQUFLQyxXQUFMLEVBQWI7QUFDQSxNQUFNQyxRQUFRRixLQUFLRyxRQUFMLEtBQWtCLENBQWhDO0FBQ0EsTUFBTUMsTUFBTUosS0FBS0ssT0FBTCxFQUFaO0FBQ0EsTUFBTUMsT0FBT04sS0FBS08sUUFBTCxFQUFiO0FBQ0EsTUFBTUMsU0FBU1IsS0FBS1MsVUFBTCxFQUFmOztBQUVBLFNBQU8sQ0FBQ1YsSUFBRCxFQUFPRyxLQUFQLEVBQWNFLEdBQWQsRUFBbUJRLEdBQW5CLENBQXVCQyxZQUF2QixFQUFxQ0MsSUFBckMsQ0FBMEMsR0FBMUMsSUFBaUQsR0FBakQsR0FBdUQsQ0FBQ1IsSUFBRCxFQUFPRSxNQUFQLEVBQWVJLEdBQWYsQ0FBbUJDLFlBQW5CLEVBQWlDQyxJQUFqQyxDQUFzQyxHQUF0QyxDQUE5RDtBQUNELENBUkQ7O0FBVUE7QUFDQSxJQUFNSyxjQUFjLFNBQWRBLFdBQWMsT0FBUTtBQUMxQixNQUFJYixPQUFPLENBQVg7QUFDQSxNQUFJYyxTQUFTLENBQWI7QUFDQSxNQUFJVixTQUFTLENBQWI7O0FBRUEsTUFBR1YsT0FBSyxJQUFSLEVBQWE7QUFDWE0sV0FBTWUsS0FBS0MsS0FBTCxDQUFXdEIsT0FBSyxJQUFoQixDQUFOO0FBQ0FvQixhQUFPQyxLQUFLQyxLQUFMLENBQVcsQ0FBQ3RCLE9BQUtNLE9BQUssSUFBWCxJQUFpQixFQUE1QixDQUFQO0FBQ0FJLGFBQU9XLEtBQUtDLEtBQUwsQ0FBV3RCLE9BQUtNLE9BQUssSUFBVixHQUFlYyxTQUFPLEVBQWpDLENBQVA7QUFDQSxXQUFVZCxJQUFWLFNBQWtCYyxNQUFsQixTQUE0QlYsTUFBNUI7QUFDRDs7QUFFRCxNQUFHVixPQUFLLEVBQVIsRUFBVztBQUNUb0IsYUFBT0MsS0FBS0MsS0FBTCxDQUFXdEIsT0FBSyxFQUFoQixDQUFQO0FBQ0FVLGFBQU9XLEtBQUtDLEtBQUwsQ0FBV3RCLE9BQUtvQixTQUFPLEVBQXZCLENBQVA7QUFDQSxXQUFVQSxNQUFWLFNBQW9CVixNQUFwQjtBQUNEO0FBQ0YsQ0FqQkQ7O0FBbUJBO0FBQ0EsSUFBTUcsZUFBZSxTQUFmQSxZQUFlLElBQUs7QUFDeEJVLE1BQUlBLEVBQUVDLFFBQUYsRUFBSjtBQUNBLFNBQU9ELEVBQUUsQ0FBRixJQUFPQSxDQUFQLEdBQVcsTUFBTUEsQ0FBeEI7QUFDRCxDQUhEOztBQUtBO0FBQ0EsSUFBTUUsWUFBWSxTQUFaQSxTQUFZLENBQVNDLEdBQVQsRUFBYztBQUM5QixNQUFJQyxNQUFNRCxHQUFWOztBQUVBLE1BQUksUUFBUUEsR0FBUixJQUFlQSxNQUFNLFNBQXpCLEVBQW9DO0FBQ2xDQSxVQUFPQSxNQUFNLEtBQWI7QUFDQUEsVUFBTUEsSUFBSUUsT0FBSixDQUFZLENBQVosQ0FBTjtBQUNBRCxVQUFNRCxNQUFNLEdBQVo7QUFDRCxHQUpELE1BSU8sSUFBSUEsTUFBTSxTQUFWLEVBQXFCO0FBQzFCQSxVQUFPQSxNQUFNLFNBQWI7QUFDQUEsVUFBTUEsSUFBSUUsT0FBSixDQUFZLENBQVosQ0FBTjtBQUNBRCxVQUFNRCxNQUFNLEdBQVo7QUFDRDs7QUFFRCxTQUFPQyxHQUFQO0FBQ0QsQ0FkRDs7QUFnQkE7QUFDQSxJQUFNRSxVQUFVLFNBQVZBLE9BQVUsQ0FBU0MsR0FBVCxFQUFjOztBQUU1QixNQUFJLENBQUNBLEdBQUwsRUFBVSxPQUFPLEVBQVA7QUFDVixNQUFJQSxJQUFJQyxPQUFKLENBQVksTUFBWixLQUF1QixDQUFDLENBQTVCLEVBQStCO0FBQzdCLFdBQU9DLHNCQUFhRixHQUFwQjtBQUNELEdBRkQsTUFFTztBQUNMLFdBQU9BLEdBQVA7QUFDRDtBQUNGLENBUkQ7O0FBVUE7QUFDQTtBQUNBLElBQU1HLGlCQUFnQixTQUFoQkEsY0FBZ0IsQ0FBU0MsRUFBVCxFQUFhQyxFQUFiLEVBQWlCO0FBQ3JDRCxPQUFLQSxHQUFHakIsS0FBSCxDQUFTLEdBQVQsQ0FBTDtBQUNBa0IsT0FBS0EsR0FBR2xCLEtBQUgsQ0FBUyxHQUFULENBQUw7QUFDQSxNQUFJbUIsTUFBTWYsS0FBS2dCLEdBQUwsQ0FBU0gsR0FBR0ksTUFBWixFQUFvQkgsR0FBR0csTUFBdkIsQ0FBVjs7QUFFQSxTQUFPSixHQUFHSSxNQUFILEdBQVlGLEdBQW5CLEVBQXdCO0FBQ3RCRixPQUFHSyxJQUFILENBQVEsR0FBUjtBQUNEO0FBQ0QsU0FBT0osR0FBR0csTUFBSCxHQUFZRixHQUFuQixFQUF3QjtBQUN0QkQsT0FBR0ksSUFBSCxDQUFRLEdBQVI7QUFDRDs7QUFFRCxPQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSUosR0FBcEIsRUFBeUJJLEdBQXpCLEVBQThCO0FBQzVCLFFBQUlDLE9BQU9DLFNBQVNSLEdBQUdNLENBQUgsQ0FBVCxDQUFYO0FBQ0EsUUFBSUcsT0FBT0QsU0FBU1AsR0FBR0ssQ0FBSCxDQUFULENBQVg7O0FBRUEsUUFBSUMsT0FBT0UsSUFBWCxFQUFpQjtBQUNmLGFBQU8sQ0FBUDtBQUNELEtBRkQsTUFFTyxJQUFJRixPQUFPRSxJQUFYLEVBQWlCO0FBQ3RCLGFBQU8sQ0FBQyxDQUFSO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPLENBQVA7QUFDRCxDQXhCRDs7QUEwQkFDLE9BQU9DLE9BQVAsR0FBaUI7QUFDZi9DLHdCQURlLEVBQ0g7QUFDWmlCLDBCQUZlLEVBRUY7QUFDYkcsMEJBSGUsRUFHRjtBQUNiQywwQkFKZSxFQUlIO0FBQ1pNLHNCQUxlLEVBS0g7QUFDWkksa0JBTmUsRUFNRjtBQUNiSSxnQ0FQZSxDQU9BO0FBUEEsQ0FBakIiLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SU1BR0VfSE9TVH0gZnJvbSAnLi9hcGkvYWRkcmVzcyc7XG5cbi8v5pe26Ze05qC85byP5YyWIOS+izoyMDE4LzExLzExIDEwOjEwOjEwXG5jb25zdCBmb3JtYXRUaW1lID0gZGF0ZSA9PiB7XG4gIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKClcbiAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxXG4gIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpXG4gIGNvbnN0IGhvdXIgPSBkYXRlLmdldEhvdXJzKClcbiAgY29uc3QgbWludXRlID0gZGF0ZS5nZXRNaW51dGVzKClcbiAgY29uc3Qgc2Vjb25kID0gZGF0ZS5nZXRTZWNvbmRzKClcblxuICByZXR1cm4gW3llYXIsIG1vbnRoLCBkYXldLm1hcChmb3JtYXROdW1iZXIpLmpvaW4oJy8nKSArICcgJyArIFtob3VyLCBtaW51dGUsIHNlY29uZF0ubWFwKGZvcm1hdE51bWJlcikuam9pbignOicpXG59XG5cbi8vIOaKijIwMTgtMTAtMTDovazljJbkuLoyMDE45bm0MTDmnIgxMOaXpVxuY29uc3QgZm9ybWF0VGltZTIgPSBkYXRlID0+IHtcbiAgbGV0IGFycj1kYXRlLnNwbGl0KCctJyk7XG4gIHJldHVybiBgJHthcnJbMF195bm0JHthcnJbMV195pyIJHthcnJbMl195pelYDtcbn1cblxuLy/ml7bpl7TmoLzlvI/ljJYg5L6LOjIwMTgvMTEvMTEgMTA6MTA6MTBcbmNvbnN0IGZvcm1hdFRpbWUzID0gZGF0ZSA9PiB7XG4gIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKClcbiAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxXG4gIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpXG4gIGNvbnN0IGhvdXIgPSBkYXRlLmdldEhvdXJzKClcbiAgY29uc3QgbWludXRlID0gZGF0ZS5nZXRNaW51dGVzKClcblxuICByZXR1cm4gW3llYXIsIG1vbnRoLCBkYXldLm1hcChmb3JtYXROdW1iZXIpLmpvaW4oJy8nKSArICcgJyArIFtob3VyLCBtaW51dGVdLm1hcChmb3JtYXROdW1iZXIpLmpvaW4oJzonKVxufVxuXG4vL+aXtumXtOagvOW8j+WMliDkvos6IDEwOjEwOjEwXG5jb25zdCBmb3JtYXRUaW1lNCA9IGRhdGUgPT4ge1xuICBsZXQgaG91ciA9IDA7XG4gIGxldCBtaW5pdGUgPSAwO1xuICBsZXQgc2Vjb25kID0gMDtcblxuICBpZihkYXRlPjM2MDApe1xuICAgIGhvdXIgPU1hdGguZmxvb3IoZGF0ZS8zNjAwKTtcbiAgICBtaW5pdGU9TWF0aC5mbG9vcigoZGF0ZS1ob3VyKjM2MDApLzYwKTtcbiAgICBzZWNvbmQ9TWF0aC5mbG9vcihkYXRlLWhvdXIqMzYwMC1taW5pdGUqNjApO1xuICAgIHJldHVybiBgJHtob3VyfToke21pbml0ZX06JHtzZWNvbmR9YFxuICB9XG5cbiAgaWYoZGF0ZT42MCl7XG4gICAgbWluaXRlPU1hdGguZmxvb3IoZGF0ZS82MCk7XG4gICAgc2Vjb25kPU1hdGguZmxvb3IoZGF0ZS1taW5pdGUqNjApO1xuICAgIHJldHVybiBgJHttaW5pdGV9OiR7c2Vjb25kfWBcbiAgfVxufVxuXG4vL+Wwj+S6jjEw55qE5pWw5YmN6Z2i5YqgMVxuY29uc3QgZm9ybWF0TnVtYmVyID0gbiA9PiB7XG4gIG4gPSBuLnRvU3RyaW5nKClcbiAgcmV0dXJuIG5bMV0gPyBuIDogJzAnICsgblxufVxuXG4vLyDmlbDlrZfmoLzlvI/ljJYg5aSn5LqOMeS4h+Wwj+S6jjHkur/nmoTlsZXnpLrkuLog5L6L5aaCMS4y5LiHLCDlpKfkuo4x5Lq/55qE5bGV56S65Li6IOS+i+WmgjEuMuS6v1xuY29uc3QgZm9ybWF0TnVtID0gZnVuY3Rpb24obnVtKSB7XG4gIHZhciBzdHIgPSBudW07XG5cbiAgaWYgKDEwMDAwIDwgbnVtICYmIG51bSA8IDEwMDAwMDAwMCkge1xuICAgIG51bSA9IChudW0gLyAxMDAwMCk7XG4gICAgbnVtID0gbnVtLnRvRml4ZWQoMSk7XG4gICAgc3RyID0gbnVtICsgJ+S4hyc7XG4gIH0gZWxzZSBpZiAobnVtID4gMTAwMDAwMDAwKSB7XG4gICAgbnVtID0gKG51bSAvIDEwMDAwMDAwMCk7XG4gICAgbnVtID0gbnVtLnRvRml4ZWQoMSk7XG4gICAgc3RyID0gbnVtICsgJ+S6vyc7XG4gIH1cblxuICByZXR1cm4gc3RyO1xufVxuXG4vLyDlm77niYfmoLzlvI/ljJZcbmNvbnN0IHNpdGVQaWMgPSBmdW5jdGlvbihwaWMpIHtcbiAgXG4gIGlmICghcGljKSByZXR1cm4gJyc7XG4gIGlmIChwaWMuaW5kZXhPZignaHR0cCcpID09IC0xKSB7XG4gICAgcmV0dXJuIElNQUdFX0hPU1QgKyBwaWM7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHBpY1xuICB9XG59XG5cbi8v5q+U6L6D54mI5pysXG4vL+avlOi+g+eJiOacrFxuY29uc3QgY29tcGFyZVZlcnNpb249IGZ1bmN0aW9uKHYxLCB2Mikge1xuICB2MSA9IHYxLnNwbGl0KCcuJylcbiAgdjIgPSB2Mi5zcGxpdCgnLicpXG4gIHZhciBsZW4gPSBNYXRoLm1heCh2MS5sZW5ndGgsIHYyLmxlbmd0aClcblxuICB3aGlsZSAodjEubGVuZ3RoIDwgbGVuKSB7XG4gICAgdjEucHVzaCgnMCcpXG4gIH1cbiAgd2hpbGUgKHYyLmxlbmd0aCA8IGxlbikge1xuICAgIHYyLnB1c2goJzAnKVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIHZhciBudW0xID0gcGFyc2VJbnQodjFbaV0pXG4gICAgdmFyIG51bTIgPSBwYXJzZUludCh2MltpXSlcblxuICAgIGlmIChudW0xID4gbnVtMikge1xuICAgICAgcmV0dXJuIDFcbiAgICB9IGVsc2UgaWYgKG51bTEgPCBudW0yKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG4gIH1cblxuICByZXR1cm4gMFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZm9ybWF0VGltZSwgLy/moLzlvI/ljJbml7bpl7QgMjAxOC8xMS8xMSAxMDoxMDoxMFxuICBmb3JtYXRUaW1lMiwgLy/moLzlvI/ljJbml7bpl7QgMjAxOOW5tDEw5pyIMTDml6VcbiAgZm9ybWF0VGltZTMsIC8v5qC85byP5YyW5pe26Ze0IDIwMTjlubQxMOaciDEw5pelIDEwOjEwXG4gIGZvcm1hdFRpbWU0LC8vLy/moLzlvI/ljJbml7bpl7QgIDEwOjEwXG4gIGZvcm1hdE51bSwgIC8v5qC85byP5YyW5pWw5a2XXG4gIHNpdGVQaWMgICwgICAvL+agvOW8j+WMluWbvueJh+WcsOWdgFxuICBjb21wYXJlVmVyc2lvbiwvL+avlOi+g+Wwj+eoi+W6j+WfuuW4pueJiOacrFxufVxuIl19