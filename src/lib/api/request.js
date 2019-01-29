import { REQUEST_HOST } from './address'
import wepy from 'wepy'

class base {
  constructor(baseurl) {
    this.HOSTURL = baseurl;
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
