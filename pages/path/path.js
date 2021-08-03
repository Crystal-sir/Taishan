// pages/path/path.js
let fileid="cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/拒贿。.jpg";//静态文件id
let photoName="";//静态图片名称
let filepath="";//静态文件路径
let num;//点击图片中点的编号
let photo_array;//静态数组，保存用户查询到的所有图片信息
var util=require("../../utils/util.js");
let TIME=util.formatTime(new Date());
let time;//日期
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    hasUserInfo:false,
    canIUseGetUserProfile: false,
    mapUrl:"cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/拒贿。.jpg",
    list:[],
    mx:"10",//图中有多少个点
  },
  /*
    获得用户点击位置
    在此可通过判断x，y值来确定点击景点的编号并将其存入
    静态变量num
  */
  getWhere(e){
    console.log("x="+e.detail.x);
    console.log("y="+e.detail.y);
  },
  //处理上传图片逻辑
  do(){
    if(this.data.hasUserInfo){
      //若获得用户信息则直接进行选照片上传操作
      photoName=this.data.userInfo.nickName+"-"+num+".jpg";
      this.uploadImage();
    }
    else {//否则先授权
      this.getUser();
    }
  },
  //获取用户信息
  getUser(e){
    let that=this;
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        that.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  //添加数据库photo信息
  Add(){
    wx.cloud.database().collection("photo").add({
      data:{
        fileID:fileid,
        id:num,
        time:TIME,
      },
      success(res){
        console.log(fileid);
      }
    })
  },
  //封装上传文件API
  //将图片上传至云服务器
  uploadfile(){
    let that=this;
    wx.cloud.uploadFile({
      cloudPath:photoName,
      filePath:filepath,
      success(res){
        fileid=res.fileID;
        that.Add();
      },
      fail(err){
        console.log("失败");
      }
    })
  },
  //上传图片
  uploadImage(e){
    let that=this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        const tempFilePaths=res.tempFilePaths;//获得所有图片的路径信息，为数组值
        console.log(tempFilePaths[0]);//输出查看
        filepath=tempFilePaths[0];
        that.uploadfile();
      },
    })
  },
  //查看一个用户的所有图片
  query(e){
    wx.cloud.database().collection("photo").get({
      success(res){
        console.log(res);
        photo_array=res.data;//保存图片信息至静态变量
      },
      fail(err){
        console.log(err);
      }
    });
  },
  /*
    用户点击一个景点时触发此事件
    已经知道num值,查找fileID
    在photo_array中查找点的编号，并将fileID返回，跳转入显示图片页面
  */
  user_query(e){
    for(let i=0;i<photo_arrar.length;i++){
      if(photo_array[i].num==num){
        fileid=photo_array[i].fileID;
        time=photo_array[i].time;
        break;
      }
    }
  },
  //跳转至显示图片界面
  go(e){
    wx.navigateTo({
      url:"/pages/path/show/show?fileid="+fileid+"&time="+time,
    })
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
    const TIME=util.formatTime(new Date());
    console.log(TIME)
    for(let i=0;i<this.data.mx;i++){
      //注意数组内对象为空时要给他初始化
      if(this.data.list[i]=="undefined"||this.data.list[i]==null) this.data.list[i]={};
      this.data.list[i].css="p"+i;
      this.data.list[i].src="";//初始化为未点亮图片
    }
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