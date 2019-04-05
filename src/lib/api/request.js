import {
  REQUEST_HOST
} from './address'
import wepy from 'wepy'
const hexmd5 = require('../MD5.js')
const JWTSECERT = 'rainbow'


class base {
  constructor(baseurl) {
    this.HOSTURL = baseurl;
  }

  //登录
  async login(data) {
    let token = creatToken(data);
    let header = Object.assign({
      'content-type': 'application/json' // 默认值
    }, token);

    let res = await wepy.request({
      url: this.HOSTURL + 'login',
      data: data || {},
      method: 'POST',
      header: header,
    });
    console.log('登录接口',res.data);
    let msg = res.data;
    if(msg){
      return msg;
    }else {
      return false;
    }  
  }

  //更新用户信息
  async updataUserInfo(data) {
    let token = creatToken(data);
    let header = Object.assign({
      'content-type': 'application/x-www-form-urlencoded' // 默认值
    }, token);

    let res = await wepy.request({
      url: this.HOSTURL + 'api/user/update',
      data: data || {},
      method: 'POST',
      header: header,
    });
    console.log('更新用户信息',res.data);
    let msg = res.data;
    if(msg.code==201){
      return msg.data;
    }else {
      return false;
    }  
  }

  //列表
  async getGoodsLists(data) {
    let token = creatToken(data);
    let header = Object.assign({
      'content-type': 'application/json' // 默认值
    }, token);

    let res = await wepy.request({
      url: this.HOSTURL + 'api/product_list/list',
      data: data || {},
      method: 'POST',
      header: header,
    });
    let msg = res.data;
    console.log('列表数据', msg);
    if (msg.code == 201) {
      return msg.data;
    }
  }

  //获取热词
  async getHotWord(data) {
    let token = creatToken(data);
    let header = Object.assign({
      'content-type': 'application/json' // 默认值
    }, token);

    let res = await wepy.request({
      url: this.HOSTURL + 'api/hot_search/list',
      data: data || {},
      header: header,
    });
    let msg = res.data;
    console.log('获取热词', msg);
    if (msg.code == 200) {
      return msg.data;
    }
  }



  //详情
  async getGoodsDetail(data) {
    let token = creatToken(data);
    let header = Object.assign({
      'content-type': 'application/json' // 默认值
    }, token);

    let res = await wepy.request({
      url: this.HOSTURL + `api/product_list/detail/${data.product_id}/${data.user_id}`,
      data:data || {},
      header: header,
    });
    let msg = res.data;
    console.log('详情数据', res);
    if (msg.code == 200) {
      return msg.data;
    }else {
      return false;
    }
  }

  //收藏
  async getCollectState(data) {
    let token = creatToken(data);
    let header = Object.assign({
      'content-type': 'application/json' // 默认值
    }, token);

    let res = await wepy.request({
      url: this.HOSTURL + 'api/collect/collect',
      data: data,
      method: 'POST',
    });
    
    let msg = res.data;
    if (msg.code == 201 || msg.code == 200) {
      return true;
    }else {
      return false;
    }
  }

  //发布信息
  async publishGoodsMsg(data) {
    let token = creatToken(data);
    let header = Object.assign({
      'Content-Type':'application/json',
    },token);

    let res = await wepy.request({
      url: this.HOSTURL + 'api/product_list/create',
      data: data,
      method: 'POST',
      header: header,
    })
    let msg = res.data;
    console.log('发布信息结果', msg);
    if (msg.code == 201) {
      return true;
    }else {
      return false;
    }
  }

  //上传图片
  async uploadImg(data) {
    let token = creatToken(data);
    let header = Object.assign({
      'Content-Type':'multipart/form-data',
    },token);

    let res = await wepy.uploadFile({
      url: this.HOSTURL + 'api/image/upload',
      filePath: data,
      name: 'uploadFile',
      method: 'POST',
      header: header,
    })
    let msg = JSON.parse(res.data);
    if(msg.code==201){
      // console.log('上传图片返回值', msg.data[0]);
      return msg.data[0]
    }else {
      return false;
    }
    
  }

  //删除图片
  async delPic(data) {
    let token = creatToken(data);
    let header = Object.assign({
      'Content-Type':'application/x-www-form-urlencoded',
    },token);

    let res = await wepy.request({
      url: this.HOSTURL + `api/image/delete/${data}`,
      header: header,
    });
    // console.log('删除结果', res.data);
    let msg=res.data;
    if(msg.code==201){
      return true;
    }else{
      return false;
    }
  }

  //获取类型
  async getTypeList(data) {
    let token = creatToken(data);
    let header = Object.assign({
      'Content-Type':'application/json',
    },token);
    console.log('调用获取类型函数');
    let res = await wepy.request({
      url: this.HOSTURL + 'api/banner/get',
      header: header,
    });

    let msg=res.data;

    if(msg.code==200){
      return msg.data
    }else {
      return false;
    }
  }

  /*------------我发布的------------------*/
  async getMyGoodsLists(data) {
    let res = await wepy.request({
      url: this.HOSTURL + 'api/product_list/list',
      data: {
        limit: data.limit,
        page: data.page,
        user_id: data.user_id,
        label: data.label,
      },
      method: 'POST',
    });
    console.log('列表数据', res);
    if (res.data.code == 200) {
      return res.data.data.rows;
    }
  }

  async deletePublishInfo(id) {
    console.log('删除发布信息id:', id);
    let header = creatToken({
      id
    });
    let res = await wepy.request({
      url: this.HOSTURL + `api/product_list/delete/${id}`,
      method: 'GET',
      header,
    });
    console.log('删除返回', res);
    return res
  }

  /*------支付类------*/
  /*
   * 发起商户支付请求
   * @para data{Object}
   * @para data.id{Number} 用户业务ID 查找openId
   *
   * */
  async sendPayReq(data) {
    let header = creatToken(data);
    let res = await wepy.request({
      url: this.HOSTURL + `发起服务器支付`,
      method: 'GET',
      header,
      data
    });
  }

  //发起微信支付请求
  async reqPayment() {
    //先请求服务器接口获取五个参数
    let payPara = await this.sendPayReq();
    //再通过五个参数发起微信支付请求
    let res = await wepy.requestPayment({
      timeStamp: payPara.timeStamp,
      nonceStr: payPara.nonceStr,
      package: payPara.package,
      signType: 'MD5',
      paySign: payPara.paySign,
      success(res) {},
      fail(res) {}
    })

    return res
  }

}
/*
 * 生成加密数据
 * return Object mixtoHeader
 * */
const creatToken = function (para) {
  //加密规则 {secret}{JSON(para)}{timeStrap}
  let payLoad = JSON.stringify(para); // 转化所有的参数
  let timeStamp = new Date().getTime(); // 时间戳
  let signBuffer = `${JWTSECERT}${payLoad}${timeStamp}`;
  const MD5 = hexmd5.MD5(signBuffer);
  // console.log('signBuffer：', signBuffer, '；MD5:', MD5);
  return {
    authorization: MD5,
    timestamp: timeStamp
  }
}

export default new base(REQUEST_HOST);
