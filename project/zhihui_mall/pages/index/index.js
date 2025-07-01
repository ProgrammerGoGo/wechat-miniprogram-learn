// index.js
Page({
  data: {
    date: '',
    show: false,
    name: "张三"
  },
  onLoad(){
    const that=this;
    wx.request({
      url: 'http://127.0.0.1:8080/user',
      success(res){
        console.info("======="+res.data)
        that.setData({
          name:res.data.name
        })
      }
    })
  },
  onDisplay() {
    this.setData({ show: true });
  },
  onClose() {
    this.setData({ show: false });
  },
  formatDate(date) {
    date = new Date(date);
    return `${date.getMonth() + 1}/${date.getDate()}`;
  },
  onConfirm(event) {
    this.setData({
      show: false,
      date: this.formatDate(event.detail),
    });
  },
});
