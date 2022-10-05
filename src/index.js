const express = require('express')
const path = require('path')
const app = express()
const port = 3000
const user = require('./routes/users')
const loggedMiddleware = require('./middlewares/logged')

//* Middlewares
/** @param isLogged es el nombre del middleware que se encuentra en el archivo logged */
app.use(loggedMiddleware.isLogged)

/** @param static funciones integrada dentro de express */
app.use(express.static(path.join(__dirname, 'public')))


//* rutas
app.get('/', (req, res)=>{
    res.send('Bienvenidos')
})

app.use('/user', user)

app.listen(port, ()=>{
    console.log("Mi aplicación esta corriendo en el puerto 3000")
})
