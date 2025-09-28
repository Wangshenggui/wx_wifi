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

    // 提示用户连接 Wi-Fi
    wx.showModal({
      title: '提示',
      content: '请连接 Wi-Fi 以获得更好体验',
      confirmText: '去连接',
      cancelText: '稍后',
      success: (res) => {
        if (res.confirm) {
          // 跳转到系统 Wi-Fi 设置界面
          this.openSystemWifi();
        } else {
          console.log('用户选择稍后连接 Wi-Fi');
        }
      }
    });
  },

  // 打开系统 Wi-Fi 设置界面
  openSystemWifi() {
    wx.startWifi({
      success: () => {
        wx.openSetting({
          success: (res) => {
            console.log('打开系统设置成功', res);
          },
          fail: (err) => {
            console.error('打开系统设置失败', err);
          }
        });
      },
      fail: (err) => {
        console.error('初始化 Wi-Fi 模块失败', err);
        wx.showToast({
          title: '无法开启 Wi-Fi，请检查权限',
          icon: 'none'
        });
      }
    });
  }
})
