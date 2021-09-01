// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: "yin-5g0cfopc68ce8576"
})

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  return await cloud.database().collection('zpicture').get({
    success(res) {
        return res;
    },
    fail(err) {
        return err;
    }
})
}