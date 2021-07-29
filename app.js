// app.js
App({
  onLaunch() {
    console.log("小程序开始启动");
    wx.cloud.init({
      env:"yin-5g0cfopc68ce8576"//云开发环境id
      
    });
  },
})
