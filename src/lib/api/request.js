import { REQUEST_HOST } from './address'
import wepy from 'wepy'

class base {
  constructor(baseurl) {
    this.HOSTURL = baseurl;
  }

  //登录
  async login(code) {
    let res = await wepy.request({
      url: this.HOSTURL+'login',
      data: {
        code: code
      },
      method: 'POST',
      header: {
        'content-type': 'application/json' // 默认值
      },
    });
    // let data = res.data;
    console.log('res',res);
    // if (data.code == 0) {
    //   return data.datas;
    // }
  }

  //列表
  async getGoodsLists() {
    let res = await wepy.request({
      url: this.HOSTURL+'api/product_list/list',
      data: {
        limit:'10',
        page:'1',
        user_id:'3',
        label:'1',
      },
      method: 'POST',
    });
    // let data = res.data;
    console.log('列表数据',res);
    // if (data.code == 0) {
    //   return data.datas;
    // }
  }

  //发布信息
  async publishGoodsMsg(msg) {
    let res = await wepy.request({
      url: this.HOSTURL+'api/upload',
      data: msg,
      method: 'POST',
    });
    // let data = res.data;
    console.log('res',res);
    // if (data.code == 0) {
    //   return data.datas;
    // }
  }


  /*------------发布详情页------------------*/

  //上传图片
  async publishInfo(data) {
    let res = await wepy.request({
      header: {
        'content-type': 'multipart/form-data' // 默认值
      },
      url: this.HOSTURL+'27/api/upload',
      data: data
    });

    return res;
    console.log(res);
    // let data = res.data;
    // if (data.code == 0) {
    //   return data.datas;
    // }
  }


}

export default new base(REQUEST_HOST);
