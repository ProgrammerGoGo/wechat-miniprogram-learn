// pages/welcome/welcome.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    second:10,
    img:"/images/bg/welcome.jpeg"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const that = this;
    wx.request({
      url: 'http://127.0.0.1:8080/getWelcomePic',
      success(res){
        that.setData({
          img:res.data
        })
        console.info("-------------"+that.data.img)
      }
    })

    // 启动定时器倒计时，每隔一秒
    var interval=setInterval(() => {
      if(this.data.second<=0){
        // 清除定时器
        clearInterval(interval)
        // 跳转到首页
        wx.switchTab({
          url: '/pages/index/index',
        })
      }else{
        this.setData({
          second:this.data.second-1
        })
      }
    }, 1000);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  doJump(){
    wx.switchTab({
      url: '/pages/index/index',
    })
  }
})