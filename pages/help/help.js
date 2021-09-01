//index.js
//获取应用实例
const app = getApp()
var map= [
  {
    "fId":"1",
    "name": "景点",
    "scale": 12,
    "latitude": "36.239898854",
    "longitude": "117.114859427",
    "iconPath":"/image/allScene.png",
    "data": [
      {
        "name": "岱庙",
        id:0,
        "latitude": "36.19407",
        "longitude": "117.1313",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"岱庙",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/0.jpg"
        ],
        "description": ""
      },
      {
        "name": "红门",
        id: 1,
        "longitude": "117.12789",
        "latitude": "36.21103",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"红门",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/1.jpg"
        ],
        "description": ""
        },
      {
        "name": "岱宗坊",
        id: 2,
        "longitude": "117.13056945",
        "latitude": "36.200488899",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"岱宗坊",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/2.jpg"
        ],
        "description": ""
      },
      {
        "name": "万仙楼",
        id: 3,
        "longitude": "117.126215124",
        "latitude": "36.214258248",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"万仙楼",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/3.jpg"
        ],
        "description": ""
      },
      {
        "name": "斗母宫",
        id: 4,
        "longitude": "117.1226",
        "latitude": "36.22083",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"斗母宫",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/4.jpg"
        ],
        "description": ""
      },
      {
        "name": "壶天阁",
        id: 5,
        "longitude": "117.115279",
        "latitude": "36.234451",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"壶天阁",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/5.jpg"
        ],
        "description": ""
      },
      {
        "name": "中天门",
        id: 6,
        "longitude": "117.114859427",
        "latitude": "36.239898854",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"中天门",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/6.jpg"
        ],
        "description": ""
      },
      {
        "name": "云步桥",
        id: 7,
        "longitude": "117.112882349",
        "latitude": "36.246015698",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"云步桥",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/7.jpg"
        ],
        "description": ""
      },
      {
        "name": "五大夫松",
        id: 8,
        "longitude": "117.112700674",
        "latitude": "36.246531349",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"五大夫松",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/8.jpg"
        ],
        "description": ""
      },
      {
        "name": "十八盘",
        id: 9,
        "longitude": "117.10798",
        "latitude": "36.25125",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"十八盘",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/9.jpg"
        ],
        "description": ""
      },
      {
        "name": "南天门",
        id: 10,
        "longitude": "117.1044",
        "latitude": "36.25579",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"南天门",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/10.webp"
        ],
        "description": ""
      },
      {
        "name": "红雨川",
        id: 11,
        "longitude": "117.071533877",
        "latitude": "36.273183264",
        "showDialog": false,
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"红雨川",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12, 
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/11.jpg"
        ],
        "description": ""
      },
      {
        "name": "彩石溪",
        id: 12,
        "latitude": "36.27734",
        "longitude": "117.056756",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"彩石溪",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/12.jpg"
        ],
        "description": ""
      },
      {
        "name": "碧峰寺",
        id: 13,
        "latitude": "36.274981349",
        "longitude": "117.056756",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"碧峰寺",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/13.jpg"
        ],
        "description": ""
      },
      {
        "name": "桃花峪",
        id: 14,
        "latitude": "36.262203",
        "longitude": "117.028869",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"桃花峪",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg14/.jpg"
        ],
        "description": ""
      },
      {
        "name": "天街",
        id: 15,
        "latitude": "36.255950899",
        "longitude": "117.10479045",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"天街",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/15.jpg"
        ],
        "description": ""
      },
      {
        "name": "唐摩崖",
        id: 16,
        "latitude": "36.256271799",
        "longitude": "117.109560899",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"唐摩崖",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/16.jpg"
        ],
        "description": ""
      },
      {
        "name": "五岳独尊石",
        id: 17,
        "latitude": "36.257048698",
        "longitude": "117.109612349",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"五岳独尊石",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/17.jpg"
        ],
        "description": ""
      },
      {
        "name": "碧霞祠",
        id: 18,
        "latitude": "36.255734799",
        "longitude": "117.109345899",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"碧霞祠",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/18.jpg"
        ],
        "description": ""
      },
      {
        "name": "玉皇顶",
        id: 19,
        "latitude": "36.257532799",
        "longitude": "117.109192899",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"玉皇顶",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/19.jpg"
        ],
        "description": ""
      },
      {
        "name": "天烛峰",
        id: 20,
        "latitude": "36.257055248",
        "longitude": "117.105501124",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"天烛峰",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/20.jpg"
        ],
        "description": ""
      },
      {
        "name": "白龙池",
        id: 21,
        "longitude": "117.103661",
        "latitude": "36.215304",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"白龙池",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/21.jpg"
        ],
        "description": ""
        },
      {
        "name": "回马岭",
        id: 22,
        "longitude": "117.114280427",
        "latitude": "36.235350854",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"回马岭",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/22.jpg"
        ],
        "description": ""
      },
      {
        "name": "龙潭水库",
        id: 23,
        "longitude": "117.103325427",
        "latitude": "36.211242854",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"龙潭水库",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/23.jpg"
        ],
        "description": ""
      },
      {
        "name": "古刹竹林寺",
        id: 24,
        "longitude": "117.102401124",
        "latitude": "36.224392248",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"古刹竹林寺",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/24.jpg"
        ],
        "description": ""
      },
      {
        "name": "日观峰",
        id: 25,
        "longitude": "117.11055",
        "latitude": "36.25659",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"日观峰",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/25.jpg"
        ],
        "description": ""
      },
      {
        "name": "虎山公园",
        id: 26,
        "longitude": "117.132716349",
        "latitude": "36.208282698",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"虎山公园",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/26.jpg"
        ],
        "description": ""
      },
      {
        "name": "玉泉寺",
        id: 27,
        "longitude": "117.089807405",
        "latitude": "36.304513809",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"玉泉寺",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/27.jpg"
        ],
        "description": ""
      },
      {
        "name": "普照寺",
        id: 28,
        "longitude": "117.114647405",
        "latitude": "36.208909809",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"普照寺",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/28.jpg"
        ],
        "description": ""
      },
      {
        "name": "北天门",
        id: 29,
        "longitude": "117.107024549",
        "latitude": "36.260479429",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"北天门",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/29.jpg"
        ],
        "description": ""
      },
      {
        "name": "一天门",
        id: 30,
        "longitude": "117.12813",
        "latitude": "36.210478",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"一天门",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/30.jpg"
        ],
        "description": ""
      },
      {
        "name": "三阳观",
        id: 31,
        "longitude": "117.11215745",
        "latitude": "36.215275899",
        "showDialog": false,
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"三阳观",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12, 
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/31.jpg"
        ],
        "description": ""
      },
      {
        "name": "渐入佳境",
        id: 32,
        "latitude": "36.214821433",
        "longitude": "117.126085281",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"渐入佳境",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/32.jpg"
        ],
        "description": ""
      },
      {
        "name": "关帝庙",
        id: 33,
        "latitude": "36.209491349",
        "longitude": "117.128240674",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"关帝庙",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/33.jpg"
        ],
        "description": ""
      },
      {
        "name": "孔子登临处",
        id: 34,
        "latitude": "36.211071",
        "longitude": "117.128162",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"孔子登临处",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/34.jpg"
        ],
        "description": ""
      },
      {
        "name": "红门宫",
        id: 35,
        "latitude": "36.210691799",
        "longitude": "117.127740899",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"红门宫",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/35.jpg"
        ],
        "description": ""
      },
      {
        "name": "拱北石",
        id: 36,
        "latitude": "36.256650854",
        "longitude": "117.112070427",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"拱北石",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/36.jpg"
        ],
        "description": ""
      },
      {
        "name": "瞻鲁台",
        id: 37,
        "latitude": "36.255364",
        "longitude": "117.111768",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"瞻鲁台",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/37.jpg"
        ],
        "description": ""
      },
      {
        "name": "天烛胜境",
        id: 38,
        "latitude": "36.267330899",
        "longitude": "117.14079045",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"天烛胜境",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/38.jpg"
        ],
        "description": ""
      },
      {
        "name": "朝阳洞",
        id: 39,
        "latitude": "36.247318",
        "longitude": "117.110556",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"朝阳洞",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/39.jpg"
        ],
        "description": ""
      },
      {
        "name": "冯玉祥泰山纪念馆",
        id: 40,
        "latitude": "36.210641349",
        "longitude": "117.117820674",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"冯玉祥泰山纪念馆",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/40.jpg"
        ],
        "description": ""
      },
      {
        "name": "无极庙",
        id: 41,
        "longitude": "117.101949124",
        "latitude": "36.222610248",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"无极庙",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/41.jpg"
        ],
        "description": ""
        },
      {
        "name": "西神门",
        id: 42,
        "longitude": "117.109210427",
        "latitude": "36.255480854",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"西神门",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/42.jpg"
        ],
        "description": ""
      },
      {
        "name": "经石峪",
        id: 43,
        "longitude": "117.123610427",
        "latitude": "36.224820854",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"经石峪",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/43.jpg"
        ],
        "description": ""
      },
      {
        "name": "石海",
        id: 44,
        "longitude": "117.113129602",
        "latitude": "36.261516182",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"石海",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/44.jpg"
        ],
        "description": ""
      },
      {
        "name": "昇仙坊",
        id: 45,
        "longitude": "117.104839",
        "latitude": "36.255187",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"昇仙坊",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/45.jpg"
        ],
        "description": ""
      },
      {
        "name": "革命烈士纪念碑",
        id: 46,
        "longitude": "117.125560427",
        "latitude": "36.215270854",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"革命烈士纪念碑",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/46.jpg"
        ],
        "description": ""
      },
      {
        "name": "碧霞灵应宫",
        id: 47,
        "longitude": "117.120410427",
        "latitude": "36.226270854",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"碧霞灵应宫",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/47.jpg"
        ],
        "description": ""
      },
      {
        "name": "四槐树",
        id: 48,
        "longitude": "117.116311349",
        "latitude": "36.233562698",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"四槐树",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/48.jpg"
        ],
        "description": ""
      },
      {
        "name": "柏洞",
        id: 49,
        "longitude": "117.11771045",
        "latitude": "36.231490899",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"柏洞",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/49.jpg"
        ],
        "description": ""
      },
      {
        "name": "天下名山第一",
        id: 50,
        "longitude": "117.113342712",
        "latitude": "36.244587799",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"天下名山第一",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/50.jpg"
        ],
        "description": ""
      },
      {
        "name": "仙人桥",
        id: 51,
        "longitude": "117.111281124",
        "latitude": "36.255342248",
        "showDialog": false,
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"仙人桥",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12, 
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/51.jpg"
        ],
        "description": ""
      },
      {
        "name": "大天烛",
        id: 52,
        "latitude": "36.261044027",
        "longitude": "117.122263592",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"大天烛",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/52.jpg"
        ],
        "description": ""
      },
      {
        "name": "药王殿",
        id: 53,
        "latitude": "36.235852248",
        "longitude": "117.114911124",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"药王殿",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/53.jpg"
        ],
        "description": ""
      },
      {
        "name": "峻岭",
        id: 54,
        "latitude": "36.244398799",
        "longitude": "117.113458899",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"峻岭",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/54.jpg"
        ],
        "description": ""
      },
      {
        "name": "大观峰",
        id: 55,
        "latitude": "36.256271349",
        "longitude": "117.109560674",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"大观峰",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/55.jpg"
        ],
        "description": ""
      },
      {
        "name": "无字碑",
        id: 56,
        "latitude": "36.257052248",
        "longitude": "117.109251124",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"无字碑",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/56.jpg"
        ],
        "description": ""
      },
      {
        "name": "总理奉安纪念碑",
        id: 57,
        "latitude": "36.231070854",
        "longitude": "117.117880427",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"五岳独尊石",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/57.jpg"
        ],
        "description": ""
      },
      {
        "name": "玉液泉",
        id: 58,
        "latitude": "36.240232698",
        "longitude": "117.115361349",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"玉液泉",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/58.jpg"
        ],
        "description": ""
      },
      {
        "name": "青帝宫",
        id: 59,
        "latitude": "36.256380899",
        "longitude": "117.10915045",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"青帝宫",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/59.jpg"
        ],
        "description": ""
      },
      {
        "name": "五松亭",
        id: 60,
        "latitude": "36.246580899",
        "longitude": "117.11270045",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"五松亭",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/60.jpg"
        ],
        "description": ""
      },
      {
        "name": "未了轩",
        id: 61,
        "longitude": "117.104339278",
        "latitude": "36.255921919",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"未了轩",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/61.jpg"
        ],
        "description": ""
        },
      {
        "name": "山呼门",
        id: 62,
        "longitude": "117.127511461",
        "latitude": "36.260464121",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"山呼门",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/62.jpg"
        ],
        "description": ""
      },
      {
        "name": "丈人峰",
        id: 63,
        "longitude": "117.107660405",
        "latitude": "36.258260809",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"丈人峰",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/63.jpg"
        ],
        "description": ""
      },
      {
        "name": "步天桥",
        id: 64,
        "longitude": "117.114560499",
        "latitude": "36.236290199",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"步天桥",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/64.jpg"
        ],
        "description": ""
      },
      {
        "name": "过街阁",
        id: 65,
        "longitude": "117.105100427",
        "latitude": "36.255950854",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"过街阁",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/65.jpg"
        ],
        "description": ""
      },
      {
        "name": "高山流水亭",
        id: 66,
        "longitude": "117.124051124",
        "latitude": "36.224940248",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"高山流水亭",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/66.jpg"
        ],
        "description": ""
      },
      {
        "name": "斩云剑",
        id: 67,
        "longitude": "117.114350674",
        "latitude": "36.242471349",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"斩云剑",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/67.jpg"
        ],
        "description": ""
      },
      {
        "name": "云路先声",
        id: 68,
        "longitude": "117.113581913",
        "latitude": "36.246531349",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"云路先声",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/68.jpg"
        ],
        "description": ""
      },
      {
        "name": "天烛灵龟",
        id: 69,
        "longitude": "117.12154445",
        "latitude": "36.262133899",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"天烛灵龟",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/69.jpg"
        ],
        "description": ""
      },
      {
        "name": "万丈碑",
        id: 70,
        "longitude": "117.111161349",
        "latitude": "36.247482698",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"万丈碑",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/70.jpg"
        ],
        "description": ""
      },
      {
        "name": "王母池",
        id: 71,
        "longitude": "117.131650427",
        "latitude": "36.206840854",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"王母池",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/71.jpg"
        ],
        "description": ""
        },
      {
        "name": "元君庙",
        id: 72,
        "longitude": "117.11446919",
        "latitude": "36.263144184",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"元君庙",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/72.jpg"
        ],
        "description": ""
      },
      {
        "name": "歇马崖",
        id: 73,
        "longitude": "117.117591124",
        "latitude": "36.231381248",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"歇马崖",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/73.jpg"
        ],
        "description": ""
      },
      {
        "name": "大众桥",
        id: 74,
        "longitude": "117.107560899",
        "latitude": "36.206861799",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"大众桥",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/74.jpg"
        ],
        "description": ""
      },
      {
        "name": "白云亭",
        id: 75,
        "longitude": "117.105860427",
        "latitude": "36.255310854",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"白云亭",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/75.jpg"
        ],
        "description": ""
      },
      {
        "name": "天工开物",
        id: 76,
        "longitude": "117.122342822",
        "latitude": "36.261029442",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"天工开物",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/76.jpg"
        ],
        "description": ""
      },
      {
        "name": "水帘洞",
        id: 77,
        "longitude": "117.120521124",
        "latitude": "36.225922248",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"水帘洞",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/77.jpg"
        ],
        "description": ""
      },
      {
        "name": "醉心园",
        id: 78,
        "longitude": "117.126900899",
        "latitude": "36.213891799",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"醉心园",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/78.jpg"
        ],
        "description": ""
      },
      {
        "name": "峰回路转",
        id: 79,
        "longitude": "117.152384349",
        "latitude": "36.304906698",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"峰回路转",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/79.jpg"
        ],
        "description": ""
      },
      {
        "name": "青云洞",
        id: 80,
        "longitude": "117.106260899",
        "latitude": "36.255401799",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"青云洞",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/80.jpg"
        ],
        "description": ""
      },
      {
        "name": "醉心石",
        id: 81,
        "longitude": "117.086014427",
        "latitude": "36.263554854",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"醉心石",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/81.jpg"
        ],
        "description": ""
        },
      {
        "name": "元始天尊庙",
        id: 82,
        "longitude": "117.09205045",
        "latitude": "36.223257899",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"元始天尊庙",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/82.jpg"
        ],
        "description": ""
      },
      {
        "name": "姊妹松",
        id: 83,
        "longitude": "117.11338445",
        "latitude": "36.263186899",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"姊妹松",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/83.jpg"
        ],
        "description": ""
      },
      {
        "name": "对松亭",
        id: 84,
        "longitude": "117.108570427",
        "latitude": "36.250520854",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"对松亭",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/84.jpg"
        ],
        "description": ""
      },
      {
        "name": "尧观顶",
        id: 85,
        "longitude": "117.112339349",
        "latitude": "36.264682698",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"尧观顶",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/85.jpg"
        ],
        "description": ""
      },
      {
        "name": "卧龙槐",
        id: 86,
        "longitude": "117.122161349",
        "latitude": "36.221362698",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"卧龙槐",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/86.jpg"
        ],
        "description": ""
      },
      {
        "name": "仙鹤湾",
        id: 87,
        "longitude": "117.132615405",
        "latitude": "36.262969809",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"仙鹤湾",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/87.jpg"
        ],
        "description": ""
      },
      {
        "name": "小天烛峰",
        id: 88,
        "longitude": "117.116825427",
        "latitude": "36.261856854",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"小天烛峰",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/88.jpg"
        ],
        "description": ""
      },
      {
        "name": "王母池道观",
        id: 89,
        "longitude": "117.131650427",
        "latitude": "36.206840854",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"王母池道观",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/89.jpg"
        ],
        "description": ""
      },
      {
        "name": "拔地通天石刻",
        id: 90,
        "longitude": "117.110900427",
        "latitude": "36.256540854",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"拔地通天石刻",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/90.jpg"
        ],
        "description": ""
      },
      {
        "name": "孔子小天下处石刻",
        id: 91,
        "longitude": "117.110138124",
        "latitude": "36.256736248",
        "showDialog": false,
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"孔子小天下处石刻",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12, 
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/91.jpg"
        ],
        "description": ""
      },
      {
        "name": "三潭叠瀑",
        id: 92,
        "latitude": "36.222010854",
        "longitude": "117.122170427",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"三潭叠瀑",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/92.jpg"
        ],
        "description": ""
      },
      {
        "name": "阜虎石",
        id: 93,
        "latitude": "36.239066809",
        "longitude": "117.114465405",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"阜虎石",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/93.jpg"
        ],
        "description": ""
      },
      {
        "name": "古松园",
        id: 94,
        "latitude": "36.263537799",
        "longitude": "117.112963899",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"古松园",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/94.jpg"
        ],
        "description": ""
      },
      {
        "name": "鹦鹉崖",
        id: 95,
        "latitude": "36.258113799",
        "longitude": "117.079619899",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"鹦鹉崖",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/95.jpg"
        ],
        "description": ""
      },
      {
        "name": "天空山",
        id: 96,
        "latitude": "36.263296899",
        "longitude": "117.11430145",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"唐摩崖",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/96.jpg"
        ],
        "description": ""
      },
      {
        "name": "造化钟神秀",
        id: 97,
        "latitude": "36.244608899",
        "longitude": "117.11328645",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"造化钟神秀",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/97.jpg"
        ],
        "description": ""
      },
      {
        "name": "天外村",
        id: 98,
        "latitude": "36.21802",
        "longitude": "117.096544",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"天外村",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/98.jpg"
        ],
        "description": ""
      },
      {
        "name": "山东农业大学(本部)",
        id: 99,
        "latitude": "36.194584248",
        "longitude": "117.117766124",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"山东农业大学(本部)",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/99.jpg"
        ],
        "description": ""
      }
    ]
  },
  {
    "fId":"2",
    "name": "停车场",
    "scale": 11.5,
    "latitude": 36.239898854,
    "longitude": 117.098320899,
    "iconPath":"/image/allPark.png",
    "data": [
      {
        "name": "天外村停车场",
        id: 0,
        "latitude": "36.205472",
        "longitude": "117.107683",
        "iconPath": "/image/park.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"天外村停车场",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "东红门生态停车场门",
        id: 1,
        "latitude": "36.209642248",
        "longitude": "117.131081124",
        "iconPath": "/image/park.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"红门生态停车场",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "天烛峰停车场",
        id: 2,
        "latitude": "36.268027248",
        "longitude": "117.144569124",
        "iconPath": "/image/park.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"天烛峰停车场",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "桃花峪停车场",
        "latitude": "36.261541",
        "longitude": "117.023184",
        "iconPath": "/image/park.png",
        "width": "30",
        "height": "30",
        "img": [
          "cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/dialogimg/.jpg"
        ],
        "description": ""
      }
    ]
  },
  {
    "fId":"3",
    "scale": 12,
    "name": "售票处",
    "latitude": "36.266181799",
    "longitude": "117.098320899",
    "iconPath":"/image/allTicket.png",
    "data": [
      {
        "name": "泰山风景区售票处",
        id: 0,
        "latitude": "36.21415",
        "longitude": "117.12646",
        "iconPath": "/image/ticket.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"泰山风景区售票处",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "中天门索道售票处",
        id: 1,
        "latitude": "36.239018",
        "longitude": "117.114062",
        "iconPath": "/image/ticket.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"中天门索道售票处",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "后石坞索道售票处",
        id: 2,
        "latitude": "36.25962798",
        "longitude": "117.106804",
        "iconPath": "/image/ticket.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"后石坞索道售票处",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
          "img": [
            ""
          ],
          "description": ""
        },
        {
          "name": "桃花源索道售票处",
          id: 3,
          "latitude": "36.257880899",
          "longitude": "117.10444045",
          "iconPath": "/image/ticket.png",
          "width": "30",
          "height": "30",
          callout: {padding:2,
            content:"桃花源索道售票处",
            bgColor:"#FFFFFf",
            color:"#000000",
            fontSize: 12,
            borderRadius:30,
            display:"BYCLICK"},
            "img": [
              ""
            ],
            "description": ""
          },
          {
            "name": "桃花源索道售票处",
            id: 4,
            "latitude": "36.254798982",
            "longitude": "117.080873472",
            "iconPath": "/image/ticket.png",
            "width": "30",
            "height": "30",
            callout: {padding:2,
              content:"桃花源索道售票处",
              bgColor:"#FFFFFf",
              color:"#000000",
              fontSize: 12,
              borderRadius:30,
              display:"BYCLICK"},
              "img": [
                ""
              ],
              "description": ""
            },
            {
              "name": "天烛峰售票处",
              id: 5,
              "latitude": "36.265436799",
              "longitude": "117.139983899",
              "iconPath": "/image/ticket.png",
              "width": "30",
              "height": "30",
              callout: {padding:2,
                content:"天烛峰售票处",
                bgColor:"#FFFFFf",
                color:"#000000",
                fontSize: 12,
                borderRadius:30,
                display:"BYCLICK"},
                "img": [
                  ""
                ],
                "description": ""
              },
              {
                "name": "售票处(罗汉崖)",
                id: 6,
                "latitude": "36.212930521",
                "longitude": "117.128366734",
                "iconPath": "/image/ticket.png",
                "width": "30",
                "height": "30",
                callout: {padding:2,
                  content:"售票处(罗汉崖)",
                  bgColor:"#FFFFFf",
                  color:"#000000",
                  fontSize: 12,
                  borderRadius:30,
                  display:"BYCLICK"},
                  "img": [
                    ""
                  ],
                  "description": ""
                }
    ]
  },
  {
    "fId":"4",
    "name": "酒店",
    "scale": 13,
    "latitude": "36.25125",
    "longitude": "117.10798",
    "iconPath":"/image/allHotel.png",
    "data": [
      {
        "name": "玉液泉宾馆",
        id: 0,
        "latitude": "36.240620854",
        "longitude": "117.115830427",
        "iconPath": "/image/hotel.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"玉液泉宾馆",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "神憩宾馆",
        id: 1,
        "latitude": "36.256520899",
        "longitude": "117.10867345",
        "iconPath": "/image/hotel.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"神憩宾馆",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "云巢宾馆",
        id: 2,
        "latitude": "36.257254",
        "longitude": "117.104892",
        "iconPath": "/image/hotel.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"云巢宾馆",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "天街宾馆(顶天街店)",
        id: 3,
        "latitude": "36.25610496",
        "longitude": "117.104929377",
        "iconPath": "/image/hotel.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"天街宾馆(顶天街店)",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "桃源宾馆",
        id: 4,
        "latitude": "36.255650809",
        "longitude": "117.080670405",
        "iconPath": "/image/hotel.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"桃源宾馆",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
          "img": [
            ""
          ],
          "description": ""
        },
    ]
  },
  {
    "fId":"5",
    "scale": 13,
    "name": "购物点",
    "latitude": "36.210022854",
    "longitude": "117.128302427",
    "iconPath":"/image/allShop.png",
    "data": [
      {
        "name": "泰山-特产超市",
        id: 0,
        "latitude": "36.210022854",
        "longitude": "117.128302427",
        "iconPath": "/image/shop.png",
        "width": "30",
        "height": "40",
        callout: {padding:2,
          content:"泰山-特产超市",
          bgColor:"#1297DB",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "中溪商亭",
        id: 1,
        "latitude": "36.238980854",
        "longitude": "117.114380427",
        "iconPath": "/image/shop.png",
        "width": "30",
        "height": "40",
        callout: {padding:2,
          content:"中溪商亭",
          bgColor:"#1297DB",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "立春茶业",
        id: 2,
        "latitude": "36.248872",
        "longitude": "117.028889",
        "iconPath": "/image/shop.png",
        "width": "30",
        "height": "40",
        callout: {padding:2,
          content:"立春茶业",
          bgColor:"#F19EC2",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
          "img": [
            ""
          ],
          "description": ""
        }
    ]
  },
  {
    "fId":"6",
    "scale": 15.2,
    "name": "卫生间",
    "latitude": "36.206679034",
    "longitude": "117.106396483",
    "iconPath":"/image/allToilet.png",
    "data": [
      {
        "name": "公共厕所",
        "latitude": "36.206679034",
        "longitude": "117.106396483",
        "iconPath": "/image/toilet.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"公共厕所",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "公共厕所",
        "latitude": "36.257481349",
        "longitude": "117.10901067",
        "iconPath": "/image/toilet.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"公共厕所",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "后石坞索道售票处",
        id: 2,
        "latitude": "36.25962798",
        "longitude": "117.106804",
        "iconPath": "/image/ticket.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"后石坞索道售票处",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
          "img": [
            ""
          ],
          "description": ""
        },
        {
          "name": "桃花源索道售票处",
          id: 3,
          "latitude": "36.257880899",
          "longitude": "117.10444045",
          "iconPath": "/image/ticket.png",
          "width": "30",
          "height": "30",
          callout: {padding:2,
            content:"桃花源索道售票处",
            bgColor:"#FFFFFf",
            color:"#000000",
            fontSize: 12,
            borderRadius:30,
            display:"BYCLICK"},
            "img": [
              ""
            ],
            "description": ""
          },
          {
            "name": "桃花源索道售票处",
            id: 4,
            "latitude": "36.254798982",
            "longitude": "117.080873472",
            "iconPath": "/image/ticket.png",
            "width": "30",
            "height": "30",
            callout: {padding:2,
              content:"桃花源索道售票处",
              bgColor:"#FFFFFf",
              color:"#000000",
              fontSize: 12,
              borderRadius:30,
              display:"BYCLICK"},
              "img": [
                ""
              ],
              "description": ""
            },
            {
              "name": "天烛峰售票处",
              id: 5,
              "latitude": "36.265436799",
              "longitude": "117.139983899",
              "iconPath": "/image/ticket.png",
              "width": "30",
              "height": "30",
              callout: {padding:2,
                content:"天烛峰售票处",
                bgColor:"#FFFFFf",
                color:"#000000",
                fontSize: 12,
                borderRadius:30,
                display:"BYCLICK"},
                "img": [
                  ""
                ],
                "description": ""
              },
              {
                "name": "售票处(罗汉崖)",
                id: 6,
                "latitude": "36.212930521",
                "longitude": "117.128366734",
                "iconPath": "/image/ticket.png",
                "width": "30",
                "height": "30",
                callout: {padding:2,
                  content:"售票处(罗汉崖)",
                  bgColor:"#FFFFFf",
                  color:"#000000",
                  fontSize: 12,
                  borderRadius:30,
                  display:"BYCLICK"},
                  "img": [
                    ""
                  ],
                  "description": ""
                }
    ]
  },
]





Page({
  data: {
    //云开发数据
      // avatarUrl: './user-unlogin.png',
      // userInfo: {},
      // logged: false,
      // takeSession: false,
      // requestResult: '',

    latitude: 36.266181799,
    longitude: 117.098320899,
    scale:13,
    buildlData: map,
    isSelectedBuild:0,
    isSelectedBuildType: 0,
    islocation: true,
    focusPointId:"",
    isChecked:true ,
    currentItemId:"1"
    
  },

//定位
// 距离 
onLoad: function() { 
  var that = this; 
  wx.getLocation({ 
      type: "gcj02", 
      altitude:true,
      success: (res)=>  { 
              const latitude = res.latitude; 
            const longitude = res.longitude; 
            const altitude=res.altitude;
              const resKm = that.getDistance(latitude,longitude,36.15,117.06); 
              that.setData({ 
                  // latitude: res.latitude, 
        // longitude: res.longitude, 
        // markers: this.getLingyuanMarkers(), 
        disKm:resKm ,
        alt:altitude
        
          }) 
      } 
  }) 
}, 
  dingwei:function(){
    var that=this;
  wx.getLocation({
   type: 'gcj02',
   success: function(res) {
    that.setData({
     latitude:res.latitude,
     scale:16.4,
     longitude:res.longitude
    })
   //console.log(res.latitude)
   // console.log(res.longitude)
   }

  })
},
//展示标志点
  changePage: function (event) {
    
    this.setData({
      currentItemId:event.currentTarget.dataset.num,
      isSelectedBuildType: event.currentTarget.dataset.num-1,
      longitude:map[event.currentTarget.dataset.num-1].longitude,
      latitude:map[event.currentTarget.dataset.num-1].latitude,
      scale: 16,
    });
    
  },
//标记跳转
  markertap(res) {
   
  
    var mark=res.currentTarget.dataset.num;
    var markerId=res.detail.markerId;
    
    let temp=JSON.stringify(mark[markerId])//作用是把数组转变成可以在网页传递中的参数进行传递

        wx.navigateTo({
          url: "/pages/info/info?mar="+temp,
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
      distance_str = distance.toFixed(2) + "km";
    } else {
      distance_str = distance.toFixed(2) * 1000 + "m";
    }
    //s=s.toFixed(4);

    console.info('距离是', s);
    console.info('距离是', distance_str);
    return distance_str;
  },

//定位
  dingwei:function(){
    var that=this;
  wx.getLocation({
   type: 'wgs84',
   altitude: true,
   success: function(res) {
     console.log(res);
    that.setData({
     latitude:res.latitude,
     scale:16,
     longitude:res.longitude
    })
   //console.log(res.latitude)
   // console.log(res.longitude)
   }
  })
},
//展示标志点
  changePage: function (event) {
    
    this.setData({
      currentItemId:event.currentTarget.dataset.num,
      isSelectedBuildType: event.currentTarget.dataset.num-1,
      longitude:map[event.currentTarget.dataset.num-1].longitude,
      latitude:map[event.currentTarget.dataset.num-1].latitude,
      scale: 16,
    });
    
  },


// 点击标点获取数据 底部弹框
markertap: function(res) {
  var that = this;
  var mark=res.currentTarget.dataset.num;
  var markerId=res.detail.markerId;
  // let marknew=new(res);
  // const latitudenew;
  //    const longitudenew;
 
  let latitude;
  let longitude;
  let img;
  let description;
  let name;
  for(let i=0; i<mark.length; i++){
    if(mark[i].id==markerId){
      name=mark[i].name;
      latitude=mark[i].latitude;
      longitude=mark[i].longitude;
      img=mark[i].img;
      description=mark[i].description;
      break;
    }
  }
  wx.getLocation({
    type: 'gcj02',
    success: (res)=> {
      let latitudenew = res.latitude;
      let longitudenew = res.longitude;
      console.log(latitudenew)
      console.log(longitudenew)
      let resKm = that.getDistance(latitudenew,longitudenew,latitude,longitude);
     that.setData({
      markNew: resKm,
     })
    }
  })
  // console.log(mark)
  // console.log(latitude)
  // console.log(longitude)
  
  // console.log(description)
  // console.log(name)
  let resKm = that.getDistance(latitude,longitude,36.257532799,117.109192899);

  this.setData({
    markerName: name,
    markTop:resKm,
    image:img,
    markerdescription: description,
    showDialog: true,
  })
},
  toggleDialog: function () {
    this.setData({
      showDialog: false,
    })
  },

})