import {IMAGE_HOST} from './api/address';

//时间格式化 例:2018/11/11 10:10:10
const formatTime = date => {
  const time = new Date(date);
  const year = time.getFullYear()
  const month = time.getMonth() + 1
  const day = time.getDate()
  const hour = time.getHours()
  const minute = time.getMinutes()
  const second = time.getSeconds()

  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}


//小于10的数前面加1
const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// 数字格式化 大于1万小于1亿的展示为 例如1.2万, 大于1亿的展示为 例如1.2亿
const formatNum = function(num) {
  var str = num;

  if (10000 < num && num < 100000000) {
    num = (num / 10000);
    num = num.toFixed(1);
    str = num + '万';
  } else if (num > 100000000) {
    num = (num / 100000000);
    num = num.toFixed(1);
    str = num + '亿';
  }

  return str;
}

// 图片格式化
const sitePic = function(pic) {
  
  if (!pic) return '';
  if (pic.indexOf('http') == -1) {
    return IMAGE_HOST + pic;
  } else {
    return pic
  }
}

//比较版本
//比较版本
const compareVersion= function(v1, v2) {
  v1 = v1.split('.')
  v2 = v2.split('.')
  var len = Math.max(v1.length, v2.length)

  while (v1.length < len) {
    v1.push('0')
  }
  while (v2.length < len) {
    v2.push('0')
  }

  for (var i = 0; i < len; i++) {
    var num1 = parseInt(v1[i])
    var num2 = parseInt(v2[i])

    if (num1 > num2) {
      return 1
    } else if (num1 < num2) {
      return -1
    }
  }

  return 0
};

// const checkStorageLogin = function(){
//   let data= wx.getStorageSync('userData');
//   return data || false
// };

module.exports = {
  formatTime, //格式化时间 2018/11/11 10:10:10
  formatNum,  //格式化数字
  sitePic  ,   //格式化图片地址
  compareVersion,//比较小程序基带版本
  // checkStorageLogin,//检查是否已登陆有用户ID
}
