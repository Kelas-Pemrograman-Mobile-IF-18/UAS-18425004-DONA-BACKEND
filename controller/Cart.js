const cart = require('../model/Cart')
const response = require('../config/response')
const ObjectID = require('mongoose').Types.ObjectId


exports.createCart = (data) =>
    new Promise((resolve, reject) => {
        console.log(JSON.stringify(data))
        cart.create(data)
            .then(() => {
                resolve(response.commonSuccessMsg("berhasil menambahkan kosmetik"))
            }).catch(() => {
                reject(response.commonErrorMsg("gagal menambahkan"))
            })
    })

exports.lihatDataCartPembeli = (userName) =>
    new Promise(async (resolve, reject) => {
        await cart.find({ userName: userName })
            .then(result => {
                resolve(response.commonResult(result))
            })
            .catch(() => reject(response.commonErrorMsg('Mohon Maaf Terjadi Kesalahan pada Server nih :(')))
    })

exports.lihatDataCart = () =>
    new Promise(async (resolve, reject) => {
        await cart.find({})
            .then(result => {
                resolve(response.commonResult(result))
            })
            .catch(() => reject(response.commonErrorMsg('Mohon Maaf Terjadi Kesalahan pada Server nih :(')))
    })

exports.hapuscart = (id) =>
    new Promise(async (resolve, reject) => {
        await cart.deleteOne({ _id: ObjectID(id) })
            .then(() => {
                resolve(response.commonSuccessMsg('Berhasil menghapus kosmetik'))
            }).catch(() => {
                reject(response.commonErrorMsg('Mohon Maaf Terjadi Kesalahan pada Server nih :('))
            })
    })