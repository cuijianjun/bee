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
    let res = await wepy.request({
      url: this.HOSTURL+'api/product_list/create',
      data: data.info,
      method: 'POST',
      header:{
        'Content-Type':'multipart/form-data',
        Authorization:data.token,
      }
      
    })
    // let data = res.data;
    console.log('发布信息',res);
    // if (data.code == 0) {
    //   return data.data;
    // }
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
    let res = await wepy.request({
      url: this.HOSTURL+`api/product_list/delete/${id}`,
      method: 'GET',
      header: {
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJpYXQiOjE1NTE1NDExMTMsImV4cCI6MTU1MjE0NTkxM30.TACfTKtcSXdd6C1l2ylo1_ZBaAvNRgsad7c4a7rwwTY',
      },
    });
    console.log('删除返回',res);
    return res
  }

}

const creatToken = function(para){
  //加密规则
  let payLoad = JSON.stringify(para) // 转化所有的参数
  // debugger;
  let timeStamp = new Date().getTime() // 时间戳
  let signBuffer = `${JWTSECERT}${payLoad}${timeStamp}`;
  console.log('signBuffer',signBuffer);
  const MD5 = hexmd5.MD5(signBuffer);

  return {
    authorization:MD5,
    timeStamp :timeStamp
  }
}

export default new base(REQUEST_HOST);
