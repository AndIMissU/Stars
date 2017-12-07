// pages/me/myPush/myPush.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    pic:''
  },
  getUserInfo:function(type) {
    var that = this;
    wx.request({
      url:'https://www.easy-mock.com/mock/5a236208e27b936ea88bdb14/starsdata/getUserInfo#!method=get',
      method:'GET',
      data:{
         type: type
      },
      success: function(res){
       var data = res.data.data[app.data.currentUser];
        that.setData({
          name: data.user.name,
          pic: `../../${data.user.pic}`
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getUserInfo('');
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