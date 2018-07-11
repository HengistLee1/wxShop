Page({

  /**
   * 页面的初始数据
   */
  data: {
    image: [
          'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
          'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
          'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      ],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    iconArray: [
        {
                "iconUrl": '../../image/icon-qiandao.png',
                "iconText": '签到'
            },
            {
                "iconUrl": '../../image/icon-fujin.png',
                "iconText": '附近'
            },
            {
                "iconUrl": '../../image/icon-zhanhui.png',
                "iconText": '游展'
            },
            {
                "iconUrl": '../../image/icon-fuli.png',
                "iconText": '福利'
            },
            {
                "iconUrl": '../../image/icon-muma.png',
                "iconText": '玩乐'
            },
            {
                "iconUrl": '../../image/icon-xingxing.png',
                "iconText": '周边'
            },
            {
                "iconUrl": '../../image/icon-tiyu.png',
                "iconText": '体育'
            },
            {
                "iconUrl": '../../image/icon-qinzi.png',
                "iconText": '亲子'
            }
    ],
    movieList: [
        {
            "movieTitle": "11月20日话剧《风声》",
            "movieImage": "../../image/huaju.jpeg"
        },
        {
            "movieTitle": "11月20日话剧《风声》2",
            "movieImage": "../../image/huaju.jpeg"
        },
        {
            "movieTitle": "11月20日话剧《风声》3",
            "movieImage": "../../image/huaju.jpeg"
        },
    ],
    goodsList: [
        {
            goodsId: 1,
            goodsName: "木村耀司登山旅行大学生户外情侣双肩背包外带小背包",
            goodsImage: "../../image/test.jpg",
            goodsAddress: "广州",
            goodsPrice: "1111.00"
        },
        {
            goodsId: 1,
            goodsName: "木村耀司登山旅行大学生户外情侣双肩背包外带小背包2",
            goodsImage: "../../image/test.jpg",
            goodsAddress: "广州",
            goodsPrice: "1111.00"
        },
        {
            goodsId: 1,
            goodsName: "木村耀司登山旅行大学生户外情侣双肩背包外带小背包3",
            goodsImage: "../../image/test.jpg",
            goodsAddress: "广州",
            goodsPrice: "1111.00"
        }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://localhost/weiphp/index.php?s=/w17/ShopCms/ShopCms/getGoodsList', //仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        that.setData({
          goodsList: res.data.data
        });
        console.log(res.data.data);
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})