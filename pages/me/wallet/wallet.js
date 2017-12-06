// pages/me/wallet/wallet.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    totalMoney:0,
    operableMoney:0,
    setMoney:0
  },
  /**
   * 获取用户钱包信息
   */
  getWalletMoney: function (type) {
    var that = this;
    wx.request({
      url:'https://www.easy-mock.com/mock/5a236208e27b936ea88bdb14/starsdata/getUserInfo#!method=get',
      method:'GET',
      data:{
         type: type
      },
      success: function(res){
        console.log(res);
       var data = res.data.data[app.data.currentUser];
        console.log(data);
      //   console.log(data.name);
        that.setData({
          totalMoney: data.money.totalMoney,
          operableMoney: data.money.operableMoney,
          setMoney: data.money.setMoney
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getWalletMoney('');
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