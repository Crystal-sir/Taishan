let fileid="";
let photoName="";//静态图片名称
let filepath="";//静态文件路径
let num;//点击图片中点的编号
let photo_array=new Array;//静态数组，保存用户查询到的所有图片信息
Page({

  /**
   * 页面的初始数据
   */
  data: {
    popup:true,
    userInfo:{},
    hasUserInfo:false,
    canIUseGetUserProfile: false,
    mapUrl:"cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/map.jpg",
    array:[],
    mx:"22",//图中有多少个点
    showdescribe:"",
    showFileId:"",
    location:"",
  },
  //点击图片后查看
  look(e){
    let that=this;
    wx.previewImage({
      urls: [that.data.showFileId],
    })
  },
  /*
    获得用户点击位置
    静态变量num
    上传图片或者更换图片逻辑处理
  */
 getWhere(e){
  console.log("点击了图中点的编号为:"+e.target.dataset.num);
  num=e.target.dataset.num;
  let loc=this.getLoc();
  this.setData({
    location:loc,
  })
  if(num==undefined) {
    wx.showToast({
      title:"请点击旁边的小花图标哦",
      icon:"none",
    })
  }
  else this.show();
},
//根据编号获取地点名称
getLoc(){
  let res="";
  switch(num)
  {
      case 0:res="岱庙";break;
      case 1:res="红门宫";break;
      case 2:res="岱宗坊";break;
      case 3:res="万仙楼";break;
      case 4:res="斗母宫";break;
      case 5:res="壶天阁";break;
      case 6:res="中天门";break;
      case 7:res="云步桥";break;
      case 8:res="五夫十松";break;
      case 9:res="十八盘";break;
      case 10:res="南天门";break;
      case 11:res="红雨川";break;
      case 12:res="彩石溪";break;
      case 13:res="碧霞寺";break;
      case 14:res="桃花峪";break;
      case 15:res="天街";break;
      case 16:res="碧霞祠";break;
      case 17:res="唐摩崖";break;
      case 18:res="五岳独尊";break;
      case 19:res="玉皇顶";break;
      case 20:res="天烛峰";break;
      case 21:res="天外村";break;
      //case 22:res="中天门";break;
  }
  return res;
},
//展示景点图片
show(){
  for(let i=0;i<photo_array.length;i++){
    if(photo_array[i].id==num){
      this.setData({
        showFileId:photo_array[i].fileID,
        showdescribe:photo_array[i].describe,
      });
      break;
    }
  }
  this.showPopup();
},
 /*
    用户点击一个景点时触发此事件
    已经知道num值,查找fileID
    在photo_array中查找点的编号，并将fileID返回，跳转入显示图片页面
  */
 user_query(e){
  for(let i=0;i<photo_arrar.length;i++){
    if(i==num){
      fileid=photo_array[i].fileID;
      describe=photo_array[i].describe;
      break;
    }
  }
},
/* 隐藏弹窗 */
hidePopup(flag = true) {
  this.setData({
      "popup": flag
  });
},
/* 显示弹窗 */
showPopup() {
  this.hidePopup(false);
},
/* 取出景点信息 */
query(e){
  let that=this;
  var arraypro = new Array;
  wx.cloud.database().collection("zpicture").get({
    success(res){
      photo_array=res.data;//保存图片信息至静态变量
      console.log(photo_array);
    },
    fail(err){
      console.log(err);
    }
  });
  wx.cloud.database().collection("zpicture").skip(20).get({
    success(res){
      for(let j=0;j<2;j++){
        photo_array[20+j]=res.data[j];//保存图片信息至静态变量
      }
      console.log(photo_array);
    },
    fail(err){
      console.log(err);
    }
  });
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
    let that=this;//存储this指针
    for(let i=0;i<this.data.mx;i++){
      //注意数组内对象为空时要给他初始化
      if(this.data.array[i]=="undefined"||this.data.array[i]==null) this.data.array[i]={};
      this.data.array[i].css="p"+i;//css样式
      this.data.array[i].id=i;//点的编号
      this.data.array[i].src="cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/icon.png";
    }
    that.setData({
      array:that.data.array,
    });
    this.query();
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
