module.exports = function(scope) {
  return new Promise((resolve, reject) => {
    wx.getSetting({
      success: res => {
        if (!res.authSetting[scope]) {
          wx.authorize({
            scope,
            success: res => {
              resolve(res);
            },
            fail: error => {
              reject(error);
            }
          });
        } else {
          // scope权限已经开启
          resolve();
        }
      },
      fail: () => {
        // getSetting 接口调用失败
        reject();
      }
    });
  });
};
