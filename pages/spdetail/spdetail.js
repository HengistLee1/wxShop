// pages/spdetail/spdetail.js
var WxAutoImage = require("../../js/detailImage.js");
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
        goods: [
            {
                goodsId: 1,
                goodsName: "木村耀司登山旅行大学生户外情侣双肩背包外带小背包",
                goodsImage: "../../image/test.jpg",
                goodsImgs: [
                    'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
                    'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
                    'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
                ],
                goodsAddress: "广州",
                goodsPrice: "169.00",
                goodsOldPrice: "269.00",
                iscollect: false,
                goodsContent: "蜜蜂从植物的花中采取含水量约为75%的花蜜或分泌物，存入自己第二个胃中，在体内多种转化的作用下，经过15天左右反复酝酿各种维生素、矿物质和氨基酸丰富到一定的数值时，同时把花蜜中的多糖转变成人体可直接吸收的单糖葡萄糖、果糖，水分含量少于23%存贮到巢洞中，用蜂蜡密封。",
                brand: "蜂之堂",
                yieldly: "湖南长沙",
                size: "300g/罐",
                times: "12月",
                production: "2016/11/23",
                savings: "低温避光存储",
                apply: "老少皆宜",
                eat: "直接食用或兑水",
                cozy: "请使用60度一下温水",
                goodsDetails: "../../image/IMG_0466.JPG"
            }
        ],
        carTotalNum: 0
    },

    /**
     * 点击“加入购物车”时，会在左边的购物车响应
     */
    addToCar: function(){
        var newNum = this.data.carTotalNum + 1;
        this.setData({
            carTotalNum: newNum
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(options.goods_id);
    },

    /**
     * 控制图片大小缩放
     */
    cusImageLoad: function (e) {
        var that = this;
        that.setData(WxAutoImage.wxAutoImageCal(e));
    },

    /**
     * 收藏功能
     */
    collect: function () {
        // console.log(this.data.goods[0].iscollect);
        this.setData({
            "goods[0].iscollect": !this.data.goods[0].iscollect
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