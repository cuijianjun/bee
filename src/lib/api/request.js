import { REQUEST_HOST } from './address'
import wepy from 'wepy'
const hexmd5 = require('../MD5.js')
const JWTSECERT  = 'rainbow'


class base {
  constructor(baseurl) {
    this.HOSTURL = baseurl;
  }

  //登录
  async login(obj) {
    let token = creatToken(obj);
    let header = Object.assign({
      'content-type': 'application/json' // 默认值
    },token);
    let res = await wepy.request({
      url: this.HOSTURL+'login',
      data: obj,
      method: 'POST',
      header: header,
    });
    let data = res.data;
    return data;
  }

  //banner和类型
  async getBanner() {
    let res = await wepy.request({
      url: this.HOSTURL+'api/banner/get',
    });
    let data = res.data;
    // console.log('banner1',res);
    if (data.code == 200) {
      return data.data;
    }
  }

  //列表
  async getGoodsLists(para) {
    let res = await wepy.request({
      url: this.HOSTURL+'api/product_list/list',
      data: para,
      method: 'POST',
    });
    let data = res.data;
    console.log('列表数据',res);
    if (data.code == 200) {
      return data.data;
    }
  }


  //详情
  async getGoodsDetail( product_id,user_id) {
    let res = await wepy.request({
      url: this.HOSTURL+'api/product_list/detail',
      data: {
        product_id:product_id,
        user_id:user_id,
      },
      method: 'POST',
    });
    let data = res.data;
    console.log('详情数据',res);
    if (data.code == 200) {
      return data.data;
    }
  }

  //收藏
  async getCollectState(user_id, product_id,isCollect){
    let res = await wepy.request({
      url: this.HOSTURL+'api/collect/collect',
      data: {
        product_id:product_id,
        user_id:user_id,
        isCollect:isCollect,
      },
      method: 'POST',
    });
    let data = res.data;
    console.log('详情数据',res);
    if (data.code == 200) {
      return data.data;
    }
  }

  //发布信息
  async publishGoodsMsg(data) {
    let token = creatToken(data);
    // let header = Object.assign({
    //   'Content-Type':'multipart/form-data',
    // },token);

    let res = await wepy.request({
      url: this.HOSTURL+'api/product_list/create',
      data: data,
      method: 'POST',
      header:token
    })
    // let data = res.data;
    console.log('发布信息结果',res);
    // if (data.code == 0) {
    //   return data.data;
    // }
  }

  //删除图片
  async delPic(data) {
    let res = await wepy.request({
      url: this.HOSTURL+`api/image/delete/${data.id}`,
      method: 'GET',
    });
    console.log('删除结果',res);
    return res
  }


  /*------------我发布的------------------*/
  async getMyGoodsLists(data) {
    let res = await wepy.request({
      url: this.HOSTURL+'api/product_list/list',
      data: {
        limit:data.limit,
        page:data.page,
        user_id:data.user_id,
        label:data.label,
      },
      method: 'POST',
    });
    console.log('列表数据',res);
    if (res.data.code == 200) {
      return res.data.data.rows;
    }
  }

  async deletePublishInfo(id){
    console.log('删除发布信息id:',id);
    let header = creatToken({id});
    let res = await wepy.request({
      url: this.HOSTURL+`api/product_list/delete/${id}`,
      method: 'GET',
      header,
    });
    console.log('删除返回',res);
    return res
  }

  /*------支付类------*/
  /*
  * 发起商户支付请求
  * @para data{Object}
  * @para data.id{Number} 用户业务ID 查找openId
  *
  * */
  async sendPayReq(data){
    let header = creatToken(data);
    let res = await wepy.request({
      url: this.HOSTURL+`发起服务器支付`,
      method: 'GET',
      header,
      data
    });
  }

  //发起微信支付请求
  async reqPayment(){
    //先请求服务器接口获取五个参数
    let payPara = await sendPayReq();
    //再通过五个参数发起微信支付请求
    let res = await wepy.requestPayment({
      timeStamp: payPara.timeStamp,
      nonceStr: payPara.nonceStr,
      package: payPara.package,
      signType: 'MD5',
      paySign: payPara.paySign,
      success(res) { },
      fail(res) { }
    })

    return res
  }

}
/*
* 生成加密数据
* return Object mixtoHeader
* */
const creatToken = function(para){
  //加密规则 {secret}{JSON(para)}{timeStrap}
  let payLoad = JSON.stringify(para); // 转化所有的参数
  let timeStamp = new Date().getTime(); // 时间戳
  let signBuffer = `${JWTSECERT}${payLoad}${timeStamp}`;
  const MD5 = hexmd5.MD5(signBuffer);
  console.log('signBuffer：',signBuffer,'；MD5:',MD5);
  return {
    authorization:MD5,
    timestamp :timeStamp
  }
}

export default new base(REQUEST_HOST);
