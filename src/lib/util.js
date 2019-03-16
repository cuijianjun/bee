import {IMAGE_HOST} from './api/address';

//时间格式化 例:2018/11/11 10:10:10
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

// 把2018-10-10转化为2018年10月10日
const formatTime2 = date => {
  let arr=date.split('-');
  return `${arr[0]}年${arr[1]}月${arr[2]}日`;
}

//时间格式化 例:2018/11/11 10:10:10
const formatTime3 = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute].map(formatNumber).join(':')
}

//时间格式化 例: 10:10:10
const formatTime4 = date => {
  let hour = 0;
  let minite = 0;
  let second = 0;

  if(date>3600){
    hour =Math.floor(date/3600);
    minite=Math.floor((date-hour*3600)/60);
    second=Math.floor(date-hour*3600-minite*60);
    return `${hour}:${minite}:${second}`
  }

  if(date>60){
    minite=Math.floor(date/60);
    second=Math.floor(date-minite*60);
    return `${minite}:${second}`
  }
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

const checkStorageLogin = function(){
  let data= wx.getStorageSync('userData');
  return data || false
};



module.exports = {
  formatTime, //格式化时间 2018/11/11 10:10:10
  formatTime2, //格式化时间 2018年10月10日
  formatTime3, //格式化时间 2018年10月10日 10:10
  formatTime4,////格式化时间  10:10
  formatNum,  //格式化数字
  sitePic  ,   //格式化图片地址
  compareVersion,//比较小程序基带版本
  checkStorageLogin,//检查是否已登陆有用户ID
}
