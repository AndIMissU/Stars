const app = getApp()
Page({
  data: {
    stars:[],
    newstars:[],
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
       var data = res.data.data[app.data.currentUser];
        that.setData({
          stars: data.stars
        });
        
      }
    });

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
    var that = this;
    wx.getStorage({
      key: 'info',
      success:function(res){
        that.setData({
          newstars:res.data
        });
      }
    });
    if(that.data.newstars.length>0){
      that.setData({
        display:true  
      });
    }
  
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
          newstars:res.data
        });
      }
    });
    if(this.data.newstars.length>0){
      this.setData({
        display:true  
      });
    }
  }
})