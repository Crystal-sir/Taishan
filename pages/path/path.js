// pages/path/path.js
//由于函数异步执行的缘故，故云函数内嵌套过多
let fileid="";
let photoName="";//静态图片名称
let filepath="";//静态文件路径
let num;//点击图片中点的编号
let photo_array=new Array;//静态数组，保存用户查询到的所有图片信息
var util=require("../../utils/util.js");
let TIME=util.formatTime(new Date());
let time;//日期
let vis=new Array;//静态数组，判断该点是否被点亮
Page({

  /**
   * 页面的初始数据
   */
  data: {
    popup:true,
    userInfo:{},
    hasUserInfo:false,
    canIUseGetUserProfile: false,
    /*mapUrl:"cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/map.jpg",*/
    mapUrl:"cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/map2.jpg",
    array:[],
    mx:"22",//图中有多少个点
    upTime:"",
    showFileId:"",
    location:"",
    showHelp:false,
    jin:0,
    done:0,
    
  },
  //检查一下是否全部点亮，以备显示点亮后地图
  check(){
    let str="";
    if(photo_array.length==22) str="cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/map.jpg";
    else str="cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/map2.jpg";
    this.setData({
      mapUrl:str,
    });
    this.get_jin();
  },
  //得到点亮进度
  get_jin(){
    let val=photo_array.length/22;
    this.setData({
      jin:val*100,
      done:photo_array.length,
    })
  },
  //隐藏帮助菜单
  hidethis(){
    this.setData({
      showHelp:false,
    })
  },
  //显示帮助菜单
  help(){
    this.setData({
      showHelp:true,
    })
  },
  //点击图片后查看
  look(e){
    let that=this;
    wx.previewImage({
      urls: [that.data.showFileId],
    })
  },
  /* 隐藏弹窗 */
  hidePopup(flag = true) {
    this.setData({
        "popup": flag,
        showHelp:false,
        
    });
  },
  /* 显示弹窗 */
  showPopup() {
    this.hidePopup(false);
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
        title:"请点击旁边的小花或景点图标哦",
        icon:"none",
      })
    }
    else if(vis[num]==0) this.do();//如果当前未点亮，则上传图片处理
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
  //此函数为用户点击已经点亮的景点时触发，弹出对话框
  show(){
    for(let i=0;i<photo_array.length;i++){
      if(photo_array[i].id==num){
        this.setData({
          upTime:photo_array[i].time,
          showFileId:photo_array[i].fileID,
        });
        break;
      }
    }
    this.showPopup();
  },
  //删除指定编号num的信息
  Delete(){
    let that=this;
    wx.cloud.database().collection("photo").where({
      id:num,
    }).remove({
      success(res){
        console.log("删除成功");
        //that.uploadImage();
      },
      fail(err){
        console.log("删除失败");
      }
    })
  },
  //用来处理删除当前图片
  NewDelete(){
    let that=this;
    wx.cloud.database().collection("photo").where({
      id:num,
    }).remove({
      success(res){
        console.log("删除成功");
        that.query();
        that.hidePopup();
        that.guan();
        that.print("删除成功");
      },
      fail(err){
        console.log("删除失败");
      }
    })
  },
  //关闭编号为num的灯
  guan(){
    let that=this;
    vis[num]=0;
    that.data.array[num].src="cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/icon_no.jpg";
    //切换图片点亮状态
    this.setData({
      array:that.data.array,
    })
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
    let that=this;
    
    wx.cloud.database().collection("photo").add({
      data:{
        fileID:fileid,
        id:num,
        time:TIME,
      },
      success(res){
        console.log(fileid);
        that.query();//更新photo_array数组
        that.print("上传成功");
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
        that.lightUp();
      },
      fail(err){
        console.log("失败");
      }
    })
  },
  //点亮编号为num的点
  lightUp(){
    let that=this;
    vis[num]=1;
    that.data.array[num].src="cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/icon.png";
    //切换图片点亮状态
    this.setData({
      array:that.data.array,
    })
  },
  //上传图片
  uploadImage(e){
    let that=this;
    //选择图片
    wx.chooseImage({
      count: 1,//选择图片的数量上限
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        const tempFilePaths=res.tempFilePaths;//获得所有图片的路径信息，为数组值
        console.log(tempFilePaths[0]);//输出查看
        filepath=tempFilePaths[0];
        that.Delete();//成功选择图片之后删除所有编号为num的图片
        that.uploadfile();//上传图片文件
      },
    })
  },
  //查看一个用户的所有图片
  //并将该用户信息更新至静态数组内
  query(e){
    let that=this;
    //云函数
    wx.cloud.callFunction({
      name:"Get",
      success(res){
        photo_array=res.result.data;//保存图片信息至静态变量
        console.log(photo_array);
        //读取用户全部图片信息，并相应修改array数组
        for(let i=0;i<photo_array.length;i++){
          let v=photo_array[i].id;
          vis[v]=1;
          that.data.array[v].src="cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/icon.png";
          //切换图片点亮状态
          console.log(photo_array[i]._openid);
          console.log(photo_array[i].id);

        }
        //判断用户是否是第一次登录本页面
        let flag=true;
        if(photo_array.length!=0) flag=false;
        //将修改后的array重置回array
        that.setData({
          array:that.data.array,
          showHelp:flag,
        });
        that.check();//检查是否可以显示点亮后的地图

      },
      fail(err){
        console.log(err);
      }
    })
  },
  print(op){
    wx.showToast({
      title:op,
      icon: 'success',
      duration: 2000
    })
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
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
    let that=this;//存储this指针

    const TIME=util.formatTime(new Date());
    console.log(TIME)
    for(let i=0;i<this.data.mx;i++){
      //注意数组内对象为空时要给他初始化
      vis[i]=0;
      if(this.data.array[i]=="undefined"||this.data.array[i]==null) this.data.array[i]={};
      this.data.array[i].css="p"+i;//css样式
      this.data.array[i].zcss="zp"+i;//遮罩层css
      this.data.array[i].id=i;//点的编号
      this.data.array[i].src="cloud://yin-5g0cfopc68ce8576.7969-yin-5g0cfopc68ce8576-1306543725/icon_no.jpg";//初始化为未点亮图片
    }
    
    this.query();
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
