// map.js
let schoolData = require('../../Data/data')
Page({
  data: {
    markers: [
      // {
      //   latitude:36.266181799,
      //   longitude:117.098320899,
      //   title:"泰山风景区",
      //   iconPath:"../../image/location.png",
      //   width:30,
      //   height:30,
      //   callout:{
      //      content:"泰山风景区",
      //      fontSize:13,
      //      borderRadius:5,
      //      borderWidth:2,
      //      borderColor:'#ccc',
      //      padding:2,
      //      display:'BYCLICK'
      //    }
      // },
    ],
    controls: [{
      id: 1,
      iconPath: '/images/location.png',
      position: {
        left: 0,
        top:10,
        width: 40,
        height: 40
      },
      clickable: true
    }],
  },
  onReady: function (e) {
    // 使用 wx.createMapContext 获取 map 上下文 
    this.mapCtx = wx.createMapContext('myMap')
  },
  onLoad: function () {
    console.log('地图定位！')
    let that = this
    wx.getLocation({
        type: 'gcj02', //返回可以用于wx.openLocation的经纬度
        success:(res)=>{
          console.log(res)
            let latitude = res.latitude; 
            let longitude = res.longitude; 
            let marker=this.createMarker(res);
            this.setData({
                centerX:longitude,
                centerY:latitude,
                markers:this.getSchoolMarkers()
            })
        }
    });
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e)
  },
  controltap(e) {
    console.log(e.controlId)
    this.moveToLocation()
  },
  getSchoolMarkers(){
    let markers=[];
    for(let item of schoolData){
      let marker=this.createMarker(item);
      markers.push(marker)
    }
    return markers;
  },
  moveToLocation: function () {
    this.mapCtx.moveToLocation()
  },
  createMarker(point){
    let latitude = point.latitude; 
    let longitude = point.longitude; 
    let marker= {
      iconPath: "/images/location.png",
      id:point.id || 0,
      name:point.name || '',
      latitude: latitude,
      longitude: longitude,
      width: 25,
      height: 48
    };
    return marker;
  }
})