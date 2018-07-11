Page({

  /**
   * 页面的初始数据
   */
  data: {
    // carArray: [
    //     {
    //         goodsId: 1,
    //         carImage: '../../image/test.jpg',
    //         carName: '木村耀司登山旅行大学生户外情侣双肩背包外带小背包1',
    //         carPrice: '169.00',
    //         carNum: 1,
    //         carShow: true
    //     },
    //     {
    //         goodsId: 1,
    //         carImage: '../../image/test.jpg',
    //         carName: '木村耀司登山旅行大学生户外情侣双肩背包外带小背包2',
    //         carPrice: '169.00',
    //         carNum: 1,
    //         carShow: false
    //     },
    //     {
    //         goodsId: 1,
    //         carImage: '../../image/test.jpg',
    //         carName: '木村耀司登山旅行大学生户外情侣双肩背包外带小背包3',
    //         carPrice: '100.00',
    //         carNum: 1,
    //         carShow: true
    //     }
    // ]
  },

  /**
   * 生命周期函数--监听页面加载
   * 页面加载时拿到缓存数据
   */
  onLoad: function(options) {
    var getCarData = wx.getStorageSync('GoodsCarList');
    console.log(getCarData);

    var total = 0;
    for (var i = 0; i < getCarData.length; i++) {
      total = total + getCarData[i].carPrice * getCarData[i].carNum;
    }

    this.setData({
      carArray: getCarData,
      totalPrice: total
    });
  },

  /**
   * 更改商品数量
   */
  NumChange: function(options) {
    var that = this;
    let Index = options.target.dataset.index; //点击的商品下标值
    console.log("商品下标：" + Index);
    var shopCar = that.data.carArray;
    var types = options.target.dataset.types; //是加号还是减号
    //console.log(types);
    var total = 0;
    switch (types) {
      case 'add':
        shopCar[Index].carNum++; //对应商品的数量+1
        break;
      case 'reduce':
        shopCar[Index].carNum > 0 ? shopCar[Index].carNum-- : 0; //对应商品的数量-1
        break;
    }
    for (var i in shopCar) {
      total += parseInt(shopCar[i].carPrice) * shopCar[i].carNum;
    }
    wx.setStorageSync("GoodsCarList", shopCar);
    this.setData({
      carArray: shopCar,
      totalPrice: total
    });
  },


  /**
   * 删除功能
   */
  delProduct: function(options) {
    var that = this;
    let Index = options.target.dataset.index;
    var key = "carArray[" + Index + "].carShow";
    var obj = {};
    obj[key] = false;

    //修改存储器参数
    var getCardata = wx.getStorageSync("GoodsCarList");
    getCardata[Index].carShow = false;
    wx.setStorageSync("GoodsCarList", getCardata);

    that.setData(obj);
  },

  /**
   * 跳转到支付页面
   */
  getPay: function() {
    wx.navigateTo({
      url: '../pay/pay',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})