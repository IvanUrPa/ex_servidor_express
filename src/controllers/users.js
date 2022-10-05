const path = require('path')
const root = path.join(__dirname, '../public')

const getUsers = (req, res)=>{
    /** Codigo antiguo se sustituye por sendFile
    res.send('Mostrando todos los usuarios')
    */

    /** @param sendFile sirve para enviar archivo ejemplo: un html*/
    res.sendFile('users.html', {root: root})
}

const createUser =(req, res)=>{
    res.sendFile('create-user.html', {root: root})
}

const updateUser = (req, res)=>{
    res.sendFile('update-user.html', {root: root})
}

const deleteUser = (req, res)=>{
    res.sendFile('delete-user.html', {root: root})
}

//* Exportar funciones para usar en otro archivo
module.exports = {getUsers, createUser, updateUser, deleteUser}