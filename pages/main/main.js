const APIKEY = "5f160e5759e04f97abd9cc9534d68af8";// 填入你申请的KEY
Page({

  /**
   * 页面的初始数据
   */
  data: {
    location:"117.20,36.20"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //this.getLocation()
    this.getCityByLoaction();
    this.getWeather();
  },

  /**
   * 根据坐标获取城市信息
   */
  getCityByLoaction() {
    var that = this
    wx.request({
      url: 'https://geoapi.qweather.com/v2/city/lookup?key=' + APIKEY + "&location=" + that.data.location,
      success(result) {
        var res = result.data
        if (res.code == "200") {
          var data = res.location[0]
          that.setData({
            City: data.adm2,
            County: data.name
          })
        } else {
          wx.showToast({
            title: '获取城市信息失败',
            icon: 'none'
          })
        }

      }
    })
  },
  /**
   * 获取天气
   */
  getWeather() {
    var that = this
    wx.request({
      url: 'https://devapi.qweather.com/v7/weather/now?key=' + APIKEY + "&location=" + that.data.location,
      success(result) {
        var res = result.data
        //console.log(res)
        that.setData({
          now: res.now
        })
      }
    })
  },
  // 格式时间

  // 补零
  formatNumber(n) {
    n = n.toString()
    return n[1] ? n : '0' + n
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