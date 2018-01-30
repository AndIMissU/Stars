# 仿知识星球
###微信小程序 知识星球

> 发现一款好好看的app 名字叫做知识星球 (虽然整款app除了绿色就还是绿色 但是还是好看啊) 不多扯 我开始说我的项目吧

### 我的知乎文章有完整的演示视频和动图
  - [我的知乎传送门](https://zhuanlan.zhihu.com/p/31809511)

### 项目环境和资源需求网址：
1. [微信开发者工具](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html?t=201715)，这个可以去微信官网下载，根据自己的系统下载相应版本，下载后记得去微信公众平台登陆并在设置里面的开发设置找到自己的appID（微信公众平台），这个在开发小程序的时候会用到；
2. [Easy Mock](https://www.easy-mock.com/login)， 这是一款模拟数据的网站，在里面创建自己的数据，它会生成一个url，这个方便我们用request获取数据；
3. [Visual Studio Code](https://code.visualstudio.com)，这是写代码和看代码的编程软件，应该不陌生的（主要这款软件占用的内存小，需要用到什么可以下载安装，比一股脑儿全安装的方便实用吧）；
4. [iconfont](http://www.iconfont.cn)，这是一个拥有我们平时用的图标的图标库，里面超级多的图片（虽然都是相似的，但是应该会有你想要的那一款）。

###项目功能：

-  获取EasyMock的数据；
-  个人页面显示用户信息（用户信息，星球信息，钱包信息）；
-  创建星球页面的遮罩设置、scroll-view、弹窗以及本地存储；
-  首页星球的动态显示；
-  初始页面到主页面的自动跳转。

###具体功能解析：

1. 获取EasyMock的数据：

  这里是写了一个获取用户信息function，再在onLoad函数里面调用，这样能使一个函数只做一件事，看起来就方便和清楚一些。
  ```javascript
  /* 获取星球信息 */
  getStarsInfo: function() {
    var that = this;
    wx.request({
      url:'https://www.easy-mock.com/mock/5a236208e27b936ea88bdb14/starsdata/getUserInfo#!method=get',
      method:'GET',
      success: function(res){
        var data = res.data.data[app.data.currentUser];
        that.setData({
          stars: data.stars  // 这里的stars是一个数组，存放着每个星球的信息
        }); 
      }
    });
  },
  /* 生命周期函数--监听页面加载 */
  onLoad: function (options) {
    this.getStarsInfo();
  }
  ```
2. 个人页面显示用户信息：

  ```
  <view class="page-hd-info">
    <view class="page-hd-border">
      <view class="page-hd__pic">
          <image src="{{userPic}}"/>
      </view>
      </view> 
      <view class="page-hd__name">{{name}}</view>
      <view class="page-hd_mythings">
        <view class="mythings_push" bindtap="tomyPush">
          <view class="mythings_num">{{starslen}}</view>
          <view class="mythings_text">我的发表</view>
        </view>
        <view class="mythings_collect">
          <view class="mythings_num">{{collectLen}}</view> 
          <view class="mythings_text">我的收藏</view>
        </view>
      </view>
    </view>
  ```
3. 创建星球页面的遮罩设置、scroll-view、弹窗以及本地存储：
  - 遮罩层设置

    -  首先在wxml里面添加一个铺满整个页面的view

      **敲黑板的重点 1：（当有东西和遮罩层一起显示时，则需要将该东西放在遮罩层的view的外面，不然这个东西也会被遮罩层里设置的透明度所影响）**
      ```
        <view 
          wx:if="{{display}}" 
          class="hiddenBack" 
          bindtap="finishChoose" >
        </view>
      ```
    -  再写view的css样式，必须得设置这个view的透明度，不然就感觉像跳转到另外一个页面一样了

      **敲黑板的重点 2: （一定要设置遮罩层的z-index ，这个值要比要遮住的页面的z-index要大，这样才能完美的遮罩住）**

      以下是view的css样式：
        ```
        .hiddenBack {
          position: absolute;
          z-index: 7;
          background: black;
          width: 100%;
          height: 100vh;
          opacity: .7;
        }
      ```
    -  再在view里面加了一个wx: if="{{display}}"，当display为true时，遮罩层显示，反之则隐藏，所以同样的，view里面也加了一个点击事件，表示点击遮罩层时隐藏遮罩层，下面是js的代码：

      ```javascript
        /* 选择完成 关闭遮罩层 */
        finishChoose: function(event) {
          this.setData({
            display: false
          });
        }
      ```

  -  scroll-view 设置
        
    在遮罩层view外面添加一个scroll-view，这个也是同遮罩层一起显示的：

    **小细节1 : 要想scroll-view横向滑动，就应该在scroll-view里面添加一句 scroll-x，同样的，纵向滑动就是 scroll-y ，还有就是scroll-view阻止了页面回弹，就无法使用onPullDownRefresh了**
    ```
      <scroll-view scroll-x wx:if="{{display}}" class="chooseBack">
        ......     
      </scroll-view>
    ```
        
    scroll-view的css样式（由于我这个scroll-view是要显示在遮罩层的上方，所以z-index的值比遮罩层的值大）
    ```
      .chooseBack {
        position: absolute;
        margin-top: 1024rpx;
        z-index: 9;
        width: 100%;
        height: 183.3rpx;
        background: white;
        white-space: nowrap;
        display: inline-block;
      }
    ```
  -  弹窗设置

    当我们创建星球时，输入的名字为空或者星球的属性没有填入，这时候就需要一个弹窗来提示我们什么东西没有填入 .
    一开始我是想用icon提示的，然后写入了如下代码：
      ```javascript
        wx.showToast({
          title:'请输入星球名字',
          icon: 'warn',
          duration: 2000
        });
      ```
    然后发现icon一直都是success的那个图片我就换了另外一种方式

    **敲黑板的重点3 : 微信小程序showToast这个提供的只有success和loading这两个icon，想用其他的只能自己提供图片吧，这个是看API看出来的，一定要认真仔细的看API！！！**

    我换成了showModal 这样能让用户更清楚的知道自己哪些信息没有填写
    
    ```javascript
      wx.showModal({
        content: '请选择星球属性',
        showCancel: false,     //不显示取消按钮
        confirmText: '确定'
      });
    ```
  -  本地存储
    
    本地存储是一个很重要的也很方便的东西，比如说我们听歌时会缓存一些歌到自己的手机还有离线东西都是可以让我们更快的得到数据。

    创建星球是需要一些东西，比如星球名字、星球背景、星球所属的用户和星球的简介(选填)，这些可能都是要存到本地存储的，然后再在其他页面获取。

    **思路：**
    首先我想到的是传多个值到storage里面去，这样就可能设置多个key，然而每个key都只放一个数据就显得很繁琐和浪费空间，于是就想到了传一个对象过去，发现省了很多事，但是又出问题了，每次新建时都是改的同一个对象，也就是说只能创建一个对象，并且这个对象在下次创建时会被新的数据更改掉，最后想到了数组，可以用push的方法把每次新创建的星球信息push进原来的数组，于是就解决了本地存储出现的问题了。

    **实现过程：**
      -  写入setStorage方法，将新设的数组传入原有的数组

        **敲黑板的重点 4 ：微信小程序好像不支持push，用push的时候一直报错，于是我就用concat了。concat也是可以插入数据的，但是concat不能改变原数组，所以需要将concat后的数组赋值给原数组。push是属于另外一个派别的，它可以直接改变原数组**
        ```
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
        ```
      -  在setStroage之后就有一个getStorage方法，因为我创建星球时需要在原数组的基础上添加数据，所以我在onshow页面写了个storage方法：

        ```javascript
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
            }
        ```
      **敲黑板的重点 5 ：微信小程序页面加载函数的顺序：**
        -  首先是onLoad函数
        -  再是onReady函数
        -  最后是onShow函数              

4. 首页星球的动态显示：

  首页星球的显示是用了一个grid布局，方便又简单好用，就是很多手机都不支持，就有点麻烦，然后将每个星球都用同一个样式定义 .

  这里的第一个block是显示新创建的星球的，第二个bolck用了template来解决公用样式的问题，我觉得很方便：
  ```
    <view class="page__bd">
        <block wx:if="{{display}}" wx:for="{{newstars}}" wx:key="{{index}}">
              <view class="page_bd_stars">
                  <image src="{{item.starpic}}"></image>
                  <view class="page_bd_starsName">{{item.starName}}</view>
                  <view class="page_bd_starsUser">{{stars[0].userName}}</view>
              </view>
        </block>
        <block wx:for="{{stars}}" wx:key="{{index}}"><template is="stars_list" data="{{...item}}"/></block>
        <view class="page__bd-create" bindtap="toCreateStar">  
              <view class="page__bd-create-text">创建星球</view>
        </view>
    </view>
  ```
  上面的wx: for是一个循环循环我们的数组，并将key设置为index，这样可以不需要定义多个view来显示每一个星球，直接一个for循环解决了

  template 的样式需要在另外一个wxml定义，并且加一个name方便获取：
  ```
    <template name="stars_list">
        <view class="page_bd_stars">
              <image src="{{starpic}}"></image>
              <view class="page_bd_starsName">{{starname}}</view>
              <view class="page_bd_starsUser">{{userName}}</view>
        </view>
    </template>
  ```
  当我们没有创建星球时，上面的block是需要隐藏的，这就需要判断storage里面的newstars的数组长度是否大于0，大于0则显示，否则隐藏：
  ```javascript
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
  ```

5. 初始页面到主页面的自动跳转:

  其实这个很简单的 setInterval方法和clearInterval方法就能解决：
  ```javascript
    onLoad: function () {
        var count = setInterval(()=>{
          this.setData({
            time : this.data.time -1
          });
          if(this.data.time == 0) {
            wx.switchTab({
              url:'../main/main',
              complete:function(res) {
              }
            })
            clearInterval(count);
          }
        },1000);
      }
  ```

###项目总结：
  1. 写代码不要一口气的写，不要想到什么就写什么，要善于看API，很多我们平时用的方法微信小程序可能已经内置了或者不提供，多看API就能省时或者少走弯路吧；
  2. 代码虽然是自己写的，但还是要规范，细节处理要精致，也要加注释，不然出错了哪都找不到，数据建立也是一样；
  3. 自己抠图片的话费时间又费眼睛，而且还没有那么完美，iconfont是一个很好的图标库，要会利用资源。