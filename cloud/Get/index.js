// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({
  env: "yin-5g0cfopc68ce8576"
})
const db=cloud.database();
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const openid=wxContext.OPENID;
  return await db.collection("photo").where({
    _openid:openid,
  }).get({
    success(res){
      return res;
    }
  });
}