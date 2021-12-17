/*!
 * Mars2D地理信息平台
 * 版本信息：v3.0.2
 * 编译日期：2021-12-16 21:05:23
 * 版权所有：Copyright by 火星科技  http://mars2d.cn
 * 使用单位：免费公开版 ，2021-10-1
 */
let leaflet = window.L //通过index.html的head引入
if (!leaflet && typeof exports === 'object') {
    leaflet = require("leaflet")//使用npm安装内置的leaflet
		require('leaflet/dist/leaflet.css')
}
if (!leaflet) {
  console.error('请引入leaflet库')
}
window['leaflet'] = leaflet

if (typeof exports === 'object') {
  module.exports = mars2d //node环境下导出
}
