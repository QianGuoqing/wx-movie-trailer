import { requestMovieList } from '../../common/js/request'
const app = getApp()

Page({
  data: {
    page: 1,
    size: 6,
    movies: [],
    loading: true
  },
  onLoad() {
    this.getMovieList()
  },
  getMovieList() {
    this.setData({ loading: true })
    const { page, size } = this.data
    requestMovieList(page, size).then(res => {
      res = res.data
      const data = res.data
      let movies = [...this.data.movies]
      data.forEach(item => {
        movies.push(item)
      })
      this.setData({
        movies,
        loading: false
      })
      // console.log(this.data.movies)
    }).catch(err => {
      console.log(err)
    })
  },
  getMoreMovies() {
    let page = this.data.page
    page = page + 1
    this.setData({ page })
    this.getMovieList()
  }
})
