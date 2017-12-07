const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    starname:'',
    starpic: '../../../images/stars1.png',
    type:0,
    info:[],
    activeIndex: 1,
    display: false,
    show1:true,
    show2:false,
    show3:false,
    show4:false,
    show5:false,
    show6:false,
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
    this.setData({
      display: true
    });
  },
  /**
   * 选择完成 关闭遮罩层
   */
  finishChoose: function(event) {
    this.setData({
      display: false
    });
  },
  /**
   * 输入星球名字
   */
  bindStarNameInput:function(e) {
    this.setData({
      starname: e.detail.value,
    });
  },
  /**
   * 选择要的背景图片
   */
  pic1: function(e) {
    this.setData({
      show1:true,
      show2:false,
      show3:false,
      show4:false,
      show5:false,
      show6:false,
      activeIndex: 1,
      starpic: '../../../images/stars1.png'
    })
  },
  pic2: function(e) {
    this.setData({
      show2:true,
      show1:false,
      show3:false,
      show4:false,
      show5:false,
      show6:false,
      activeIndex:2,
      starpic: '../../../images/stars2.png'
    })
  },
  pic3: function(e) {
    this.setData({
      show3:true,
      show2:false,
      show1:false,
      show4:false,
      show5:false,
      show6:false,
      activeIndex:3,
      starpic: '../../../images/stars3.png'
    })
  },
  pic4: function(e) {
    this.setData({
      show4:true,
      show2:false,
      show3:false,
      show1:false,
      show5:false,
      show6:false,
      activeIndex:4,
      starpic: '../../../images/stars4.png'
    })
  },
  pic5: function(e) {
    this.setData({
      show5:true,
      show2:false,
      show3:false,
      show4:false,
      show1:false,
      show6:false,
      activeIndex:5,
      starpic: '../../../images/stars5.png'
    })
  },
  pic6: function(e) {
    this.setData({
      show6:true,
      show2:false,
      show3:false,
      show4:false,
      show5:false,
      show1:false,
      activeIndex:6,
      starpic: '../../../images/stars6.png'
    })
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
    
    if(this.data.starName === " "){
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
      var newinfo = [{}];
      newinfo[0].starName = this.data.starname;
      newinfo[0].starpic = this.data.starpic;
      newinfo[0].type = this.data.type;
      this.data.info = newinfo.concat(this.data.info);
      wx.setStorage({
        key: 'info',
        data: this.data.info,
        success:function(){
          wx.switchTab({
            url:'../main'
          });
        }
    });
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
    var that = this;
    wx.getStorage({
      key: 'info',
      success:function(res){
        that.setData({
          info:res.data
        });
      }
    });
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