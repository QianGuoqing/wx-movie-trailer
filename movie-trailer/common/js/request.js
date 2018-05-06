export function requestMovieList(page, size) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `https://db.miaov.com/doubanapi/v0/movie/list`,
      data: {
        page: page,
        size: size
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: (res) => {
        // success
        resolve(res)
      },
      fail: () => {
        // fail
        reject()
      }
    })
  })
}

export function requestMovieDetail(id) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: 'https://db.miaov.com/doubanapi/v0/movie/detail',
      data: {
        id: id
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: (res) => {
        // success
        resolve(res)
      },
      fail: () => {
        reject()
      }
    })
  })
}