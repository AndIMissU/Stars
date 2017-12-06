// pages/main/main.js
const app = getApp()
Page({
  data: {
    stars:[],
    newstars:{
      starname:'',
      starpic:'',
      type:''
    },
    showView:0,
    display:false
  },
  /**
   * 获取星球信息
   */
  getStarsInfo: function(type) {
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
          stars: data.stars
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  this.getStarsInfo('');

  },

  /**
   * 跳转到 创建星球页面
   */
  toCreateStar: function(e) {
    wx.navigateTo({
      url:'createStars/createStars'
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
    var that = this;
    wx.getStorage({
      key: 'info',
      success:function(res){
        that.setData({
          newstars:{
            starname: res.data.starname,
            starpic: res.data.starpic,
            type:res.data.type
          }
        });
      }
    });
    console.log(this.data.newstars.starname);

    if(this.data.newstars.starname.length>0){
      this.setData({
        display:true  
      });
    }
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