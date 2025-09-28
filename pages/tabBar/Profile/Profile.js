// pages/Profile/Profile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
      nickName: '用户'
    },
    devices: [
      {
        id: 1,
        name: '手机',
        image: '/images/device-phone.png'
      },
      {
        id: 2,
        name: '平板',
        image: '/images/device-tablet.png'
      },
      {
        id: 3,
        name: '电脑',
        image: '/images/device-pc.png'
      },
      {
        id: 4,
        name: '手表',
        image: '/images/device-watch.png'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getUserInfo();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.getUserInfo();
  },

  // 获取用户信息
  getUserInfo: function() {
    const that = this;
    wx.getSetting({
      success: (res) => {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: (res) => {
              that.setData({
                'userInfo.nickName': res.userInfo.nickName
              });
            }
          });
        }
      }
    });
  },

  // 跳转到账号与安全
  goAccountSecurity: function() {
    wx.navigateTo({
      url: '/pages/AccountSecurity/AccountSecurity'
    });
  },

  // 跳转到帮助中心
  goHelpCenter: function() {
    wx.navigateTo({
      url: '/pages/HelpCenter/HelpCenter'
    });
  },

  // 联系客服
  contactCustomerService: function() {
    wx.navigateTo({
      url: '/pages/CustomerService/CustomerService'
    });
  },

  // 跳转到关于页面
  goAbout: function() {
    wx.navigateTo({
      url: '/pages/About/About'
    });
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    this.getUserInfo();
    wx.stopPullDownRefresh();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
    return {
      title: '个人中心',
      path: '/pages/Profile/Profile'
    }
  }
})