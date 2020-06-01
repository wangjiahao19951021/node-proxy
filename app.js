const express = require('express') //需要cnpm i express -S
const axios = require('axios').default  //需要cnpm i axios -S
var cors = require('cors')  //需要cnpm i cors -S

const app = express()
app.use(cors())  // 允许跨域调用
app.use(express.urlencoded({
  extended: false
}))
app.use(express.json())

// 请求对应路径
app.get('/toutiao', async (req, res) => {
   const result = await axios.get('https://www.toutiao.com/stream/widget/local_weather/city/')
   res.send(result.data)
})

// 对所有代理请求进行封装
app.post('/proxy', async(req, res) => {
  const url = req.body.url
  const result = await axios.get(url)
  res.send(result.data)
})

app.listen(3000, () => {
  console.log(`服务器运行在3000端口`)
})