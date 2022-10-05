//* Creación de Middleware
const isLogged = (req, res, next)=> {
    let logged = true
    if (logged) {
        next()
    } else {
        res.send('No puedes acceder deber loggearte')
    }
}

//! exportar archivo para poder integrarlo dentro de los require
exports.isLogged = isLogged