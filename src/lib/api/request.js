import { REQUEST_HOST } from './address'
import wepy from 'wepy'

class base {
  constructor(baseurl) {
    this.HOSTURL = baseurl;
  }

  //登录
  async login(obj) {
    let res = await wepy.request({
      url: this.HOSTURL+'login',
      data: obj,
      method: 'POST',
      header: {
        'content-type': 'application/json' // 默认值
      },
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
  async getGoodsLists(page,type) {
    let res = await wepy.request({
      url: this.HOSTURL+'api/product_list/list',
      data: {
        // limit:'10',
        page:page,
        // user_id:'2',
        label:type,
      },
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
  async publishGoodsMsg(value) {
    let res = await wepy.request({
      url: this.HOSTURL+'api/product_list/create',
      data: value,
      method: 'POST',
      'Content-Type':'application/x-www-form-urlencoded',
    })
    let data = res.data;
    console.log('res',res);
    if (data.code == 0) {
      return data.data;
    }
  }
}

export default new base(REQUEST_HOST);
