// pages/look/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
         list: [{
           id: 'view',
           name: '红门浏览线——初登者推荐路线',
           open: false,
           describe:'红门游览线是古今最主要的登山旅游路线，是历朝皇帝的登山御道。沿途林荫夹道，石阶盘旋，峰峦竟秀，泉溪争流，自然景观雄奇秀美，古迹众多，传统文化韵味浓郁。又因为这条道路景色深幽，所以也被称为泰山的“幽区”。',
           path:'有岱宗坊、一天门、孔子登临处、红门宫、万仙楼、革命烈士纪念碑、斗母宫、元君庙、经石峪、回马岭、中天门、云步桥、五大夫松、朝阳洞、十八盘、升仙坊、南天门等',
           method:'1、该路线为徒步浏览路线，全程9.5公里，其间几无平路。\n2、在泰山火车站下车后，可乘坐3路公交车至红门；在泰安高铁站下车后，可乘坐37路公交车至红门，或乘坐61路“高铁泰安站-泰山景区”旅游专线直通车直达红门登山起点处。'
         }, {
          id: 'content',
          name: '天外村浏览线——便捷路线',
          open: false,
          describe:'天外村游览线，是登泰山的另一条主要线路，起点是天地广场。从天外村出发，乘坐旅游车可直接抵达中天门。沿途有很多自然景观和历史遗迹，游人乘车到此尤觉视野开阔，景色宜人，心旷神怡，因而这一景区又被称为泰山的“旷区”。',
          path:'包括龙潭水库、白龙池、黑龙潭、竹林寺、无极庙、天胜寨、扇子崖、龙角峰、傲徕峰、黄溪河水库等景点。',
          method:'1、此条线为乘坐旅游车浏览，虽然方便快捷，但牺牲了众多景点的浏览机会。\n2、泰山景区实行封闭运营，所有游客必须在天外村统一换乘景区专线旅游车。'
        }, {
          id: 'form',
          name: '桃花峪浏览线——赏景观光线',
          open: false,
          describe:'彩石溪景区位于泰山西麓，辖桃花峪、桃花源两个景区，森林覆盖率达85%以上，素有“泰山森林博物馆”、“泰山小江南”之美誉，是泰山休闲观光胜地。自然景观秀美奇绝，是泰山秀区。',
           path:'桃花峪游人中心→钓鱼台站点→碧峰寺站点→彩石溪站点→赤鳞溪站点→红雨川站点→终点桃花源',
           method:'1、彩石溪景区可免费游览。\n2、该条路线最适宜游览的季节为春夏两季，春天桃花开时尤其美。\n3、泰山火车站站前广场有16路专线旅游公交车往返，但下午5时便停止运行，请游客注意。'
        }, {
          id: 'nav',
          name: '天烛峰浏览线——探险自助游',
          open: false,
          describe:'',
           path:'',
           method:''
        },]
      },
    
      /**
       * 收缩核心代码
       */
      kindToggle(e) {
        const id = e.currentTarget.id
        const list = this.data.list
        for (let i = 0, len = list.length; i < len; ++i) {
          if (list[i].id === id) {
            list[i].open = !list[i].open
          } else {
            list[i].open = false
          }
        }
    
        /**
         * key和value名称一样时，可以省略
         * 
         * list:list=>list
         */
        this.setData({
          list
        })
      },
  gototest:function()
  {
    wx.navigateTo({
      url: '/pages/look/test/test',
    })
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