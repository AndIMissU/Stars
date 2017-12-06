// pages/main/creatStars/creatypears.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    starname:'',
    starpic:'',
    type:0,
    info:{
      starname:'',
      starpic:'',
      type:''
    },
    color1:'#f5f6f8',
    textcolor1:'#a2a3a7',
    color2:'#f5f6f8',
    textcolor2:'#a2a3a7',
    color3:'#f5f6f8',
    textcolor3:'#a2a3a7',
    color4:'#f5f6f8',
    textcolor4:'#a2a3a7',
    color5:'#f5f6f8',
    textcolor5:'#a2a3a7',
    color6:'#f5f6f8',
    textcolor6:'#a2a3a7',
    color7:'#f5f6f8',
    textcolor7:'#a2a3a7',
    color8:'#f5f6f8',
    textcolor8:'#a2a3a7'
  },
  /**
   * 选择图片
   */
  chooseImage: function(event){
    console.log("hahhhhh");
  },
  /**
   * 输入星球名字
   */
  bindStarNameInput:function(e) {
    this.setData({
      starname:e.detail.value,
    });
  },
  /**
   * 更改选择的按钮的样式
   */
  chooseBtn1: function(e) {
    // this.style.background=red;
    this.setData({
      type:'文艺',
      color1: '#14b392',
      textcolor1: '#fff',
      color2:'#f5f6f8',
      textcolor2:'#a2a3a7',
      color3:'#f5f6f8',
      textcolor3:'#a2a3a7',
      color4:'#f5f6f8',
      textcolor4:'#a2a3a7',
      color5:'#f5f6f8',
      textcolor5:'#a2a3a7',
      color6:'#f5f6f8',
      textcolor6:'#a2a3a7',
      color7:'#f5f6f8',
      textcolor7:'#a2a3a7',
      color8:'#f5f6f8',
      textcolor8:'#a2a3a7'
    })
  },
  chooseBtn2: function(e) {
    // this.style.background=red;
    this.setData({
      type:'科技',
      color2: '#14b392',
      textcolor2: '#fff',
      starName:'',
      color1:'#f5f6f8',
      textcolor1:'#a2a3a7',
      color3:'#f5f6f8',
      textcolor3:'#a2a3a7',
      color4:'#f5f6f8',
      textcolor4:'#a2a3a7',
      color5:'#f5f6f8',
      textcolor5:'#a2a3a7',
      color6:'#f5f6f8',
      textcolor6:'#a2a3a7',
      color7:'#f5f6f8',
      textcolor7:'#a2a3a7',
      color8:'#f5f6f8',
      textcolor8:'#a2a3a7'
    })
  },
  chooseBtn3: function(e) {
    // this.style.background=red;
    this.setData({
      type:'时尚',
      color3: '#14b392',
      textcolor3: '#fff',
      starName:'',
      color1:'#f5f6f8',
      textcolor1:'#a2a3a7',
      color2:'#f5f6f8',
      textcolor2:'#a2a3a7',
      color4:'#f5f6f8',
      textcolor4:'#a2a3a7',
      color5:'#f5f6f8',
      textcolor5:'#a2a3a7',
      color6:'#f5f6f8',
      textcolor6:'#a2a3a7',
      color7:'#f5f6f8',
      textcolor7:'#a2a3a7',
      color8:'#f5f6f8',
      textcolor8:'#a2a3a7'
    })
  },
  chooseBtn4: function(e) {
    // this.style.background=red;
    this.setData({
      type:'娱乐',
      color4: '#14b392',
      textcolor4: '#fff',
      starName:'',
      color1:'#f5f6f8',
      textcolor1:'#a2a3a7',
      color2:'#f5f6f8',
      textcolor2:'#a2a3a7',
      color3:'#f5f6f8',
      textcolor3:'#a2a3a7',
      color5:'#f5f6f8',
      textcolor5:'#a2a3a7',
      color6:'#f5f6f8',
      textcolor6:'#a2a3a7',
      color7:'#f5f6f8',
      textcolor7:'#a2a3a7',
      color8:'#f5f6f8',
      textcolor8:'#a2a3a7'
    })
  },
  chooseBtn5: function(e) {
    // this.style.background=red;
    this.setData({
      type:'经济',
      color5: '#14b392',
      textcolor5: '#fff',
      starName:'',
      color1:'#f5f6f8',
      textcolor1:'#a2a3a7',
      color2:'#f5f6f8',
      textcolor2:'#a2a3a7',
      color3:'#f5f6f8',
      textcolor3:'#a2a3a7',
      color4:'#f5f6f8',
      textcolor4:'#a2a3a7',
      color6:'#f5f6f8',
      textcolor6:'#a2a3a7',
      color7:'#f5f6f8',
      textcolor7:'#a2a3a7',
      color8:'#f5f6f8',
      textcolor8:'#a2a3a7'
    })
  },
  chooseBtn6: function(e) {
    // this.style.background=red;
    this.setData({
      type:'教育',
      color6: '#14b392',
      textcolor6: '#fff',
      starName:'',
      color1:'#f5f6f8',
      textcolor1:'#a2a3a7',
      color2:'#f5f6f8',
      textcolor2:'#a2a3a7',
      color3:'#f5f6f8',
      textcolor3:'#a2a3a7',
      color4:'#f5f6f8',
      textcolor4:'#a2a3a7',
      color5:'#f5f6f8',
      textcolor5:'#a2a3a7',
      color7:'#f5f6f8',
      textcolor7:'#a2a3a7',
      color8:'#f5f6f8',
      textcolor8:'#a2a3a7'
    })
  },
  chooseBtn7: function(e) {
    // this.style.background=red;
    this.setData({
      type:'健康',
      color7: '#14b392',
      textcolor7: '#fff',
      starName:'',
      color1:'#f5f6f8',
      textcolor1:'#a2a3a7',
      color2:'#f5f6f8',
      textcolor2:'#a2a3a7',
      color3:'#f5f6f8',
      textcolor3:'#a2a3a7',
      color4:'#f5f6f8',
      textcolor4:'#a2a3a7',
      color5:'#f5f6f8',
      textcolor5:'#a2a3a7',
      color6:'#f5f6f8',
      textcolor6:'#a2a3a7',
      color8:'#f5f6f8',
      textcolor8:'#a2a3a7'
    })
  },
  chooseBtn8: function(e) {
    // this.style.background=red;
    this.setData({
      type:'生活',
      color8: '#14b392',
      textcolor8: '#fff',
      starName:'',
      color1:'#f5f6f8',
      textcolor1:'#a2a3a7',
      color2:'#f5f6f8',
      textcolor2:'#a2a3a7',
      color3:'#f5f6f8',
      textcolor3:'#a2a3a7',
      color4:'#f5f6f8',
      textcolor4:'#a2a3a7',
      color5:'#f5f6f8',
      textcolor5:'#a2a3a7',
      color6:'#f5f6f8',
      textcolor6:'#a2a3a7',
      color7:'#f5f6f8',
      textcolor7:'#a2a3a7'
    })
  },
  /**
   * 完成创建 跳转到主页面
   */
  toMain: function(e) {
    
    if(this.data.starName === ''){
      wx.showModal({
        content: '请输入星球名字',
        showCancel: false, //不显示取消按钮
        confirmText: '确定'
      })
    } else if (this.data.type == 0){
      wx.showModal({
        content: '请选择星球属性',
        showCancel: false, //不显示取消按钮
        confirmText: '确定'
      })
    }else {
      this.data.info.starname = this.data.starname;
      this.data.info.starpic = "../../images/stars4.png";
      this.data.info.type = this.data.type;
      console.log(this.data.info);
      wx.setStorage({
        key: 'info',
        data: this.data.info,
        success:function(){
          wx.switchTab({
            url:'../main',
            complete: function(res) {
              console.log(res);
            }
          });
        }
    })
  }
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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