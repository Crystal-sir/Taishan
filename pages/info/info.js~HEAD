// pages/info/info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      market:JSON.parse(options.mar)
     })
     console.log(market);
    //  wx.chooseLocation({
		// 	type: "gcj02",
		// 	success: (res)=>  {
		// 		console.log("地图点击事件：" + JSON.stringify(res));
    //     var user_longitude = res.longitude;
    //     var user_lagitude = res.latitude;

    // console.log(user_longitude);
    // console.log(user_lagitude);
         
		// 		const resKm = this.getDistance(latitude,longitude,36.15,117.06);
		// 		this.setData({
    //       lagitude: user_lagitude,
    //       longitude: user_longitude,
    //       market:JSON.parse(options.mar),
    //       disKm:resKm
		// 		})
		// 	}
		// })
  },
  
	rad (d) {//弧度转化
    return d * Math.PI / 180.0;
	},
	//计算当前位置与山顶距离，其中山顶位置为玉皇极的位置.
  getDistance(lat1, lng1, lat2, lng2) {
    var radLat1 = this.rad(lat1);
    var radLat2 = this.rad(lat2);
    var a = radLat1 - radLat2;
    var b = this.rad(lng1) - this.rad(lng2);
    var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) +
    Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
    s = s * 6378.137; // EARTH_RADIUS;
    s = Math.round(s * 10000) / 10000; //输出为公里

    var distance = s;
    var distance_str = "";

    if (parseInt(distance) >= 1) {
      distance_str = distance.toFixed(2) + "km";
    } else {
      distance_str = distance * 1000 + "m";
    }
    //s=s.toFixed(4);

    console.info('距离是', s);
    console.info('距离是', distance_str);
    return distance_str;
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