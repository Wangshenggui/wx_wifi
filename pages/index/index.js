Page({
  data: {
    userInfo: {
      avatarUrl: 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0',  // 头像
      nickName: ''    // 昵称
    },
    hasUserInfo: false
  },

  // 用户点击选择头像
  onChooseAvatar(e) {
    const { avatarUrl } = e.detail
    const { nickName } = this.data.userInfo
    this.setData({
      "userInfo.avatarUrl": avatarUrl,
      hasUserInfo: nickName && avatarUrl
    })
  },

  // 用户输入昵称
  onInputChange(e) {
    const nickName = e.detail.value
    const { avatarUrl } = this.data.userInfo
    this.setData({
      "userInfo.nickName": nickName,
      hasUserInfo: nickName && avatarUrl
    })
  },

  // 登录
  onLogin() {
    wx.showToast({
      title: '登录成功',
      icon: 'success',
      duration: 2000
    });

    console.log('用户信息：', this.data.userInfo);

    // 跳转到普通页面
    wx.switchTab({
      url: '/pages/tabBar/AI/AI' // 替换为你想跳转的页面路径
    });
  }
})
