/*
七牛云配置
*/
const qiniu = require('qiniu')

// 创建上传凭证
const accessKey = '0JgdTAjMeXTK6qVjekB3mgpP5kvv-OH0FW94Dl8M'
const secretKey = 'nD8_fsLPPCaX5nyVYocyaMqhPuVfM5_Uz9eGb8MH'
const mac = new qiniu.auth.digest.Mac(accessKey, secretKey)
const options = {
  scope: 'bighero',
  expires: 7200
}
const putPolicy = new qiniu.rs.PutPolicy(options)
const uploadToken = putPolicy.uploadToken(mac)

module.exports = {
  uploadToken
}
