
// 1. express을 실행하기 위해서는 require로 하고
// 2. app안에 express()을 해서 사용할 수 있게 한다.
// 3. PORT를 연결해서 5000, 7000 포트가 사용하기 좋다.
// 4. express안에 listen이 있어서 PORT를 실행할 수 있게 하고 console로 test를 해본다.
const express = require('express')
const bodyParser = require("body-parser")
const morgan = require("morgan")
const cors = require("cors")
const app = express()

const productRouter = require("./router/product")
const orderRouter = require('./router/order')

// middleware
app.use(cors())
app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))



app.use("/product", productRouter)
app.use("/order", orderRouter)

const PORT = 5000

app.listen(PORT, console.log('server started'))