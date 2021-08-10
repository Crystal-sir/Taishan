const app = getApp()
Page({

	data: {
		longitude: '',
		latitude: '',
		disKm:'',
	},
	onLoad() {
		this.Location()
		
	},
	regionchange(e) {
		// 地图发生变化的时候，获取中间点，也就是用户选择的位置toFixed

		if (e.type == 'end' && (e.causedBy == 'scale' || e.causedBy == 'drag')) {
			var that = this;

			this.mapCtx = wx.createMapContext("map4select");

			this.mapCtx.getCenterLocation({

				type: 'gcj02',

				success: function(res) {

					console.log(res, 11111)   //移动后，新位置的经纬度

					that.setData({

						latitude: res.latitude,

						longitude: res.longitude

						//circles: [{

							//latitude: res.latitude,

							//longitude: res.longitude,

							// color: '#FF0000DD',

							// fillColor: '#d1edff88',

							// radius: 3000, //定位点半径

							// strokeWidth: 1
						//}]
					})
				}
			})
		}
	},
	//定位到自己的位置事件
	my_location: function(e) {
		var that = this;
		that.onLoad();
	},
	//在onload中事件
	Location: function() {
		var that = this;
		wx.getLocation({
			type: "gcj02",
			success: (res)=>  {
				const latitude = res.latitude;
	 	  	const longitude = res.longitude;
				const resKm = that.getDistance(latitude,longitude,36.15,117.06);
				that.setData({
					latitude: res.latitude,
					longitude: res.longitude,
					disKm:resKm
				})
			}
		})
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
      distance_str = distance.toFixed(1) + "km";
    } else {
      distance_str = distance * 1000 + "m";
    }
    //s=s.toFixed(4);

    console.info('距离是', s);
    console.info('距离是', distance_str);
    return s;
  },
})
