const transaksi = require('../model/Transaksi')
const response = require('../config/response')
const mongoose = require('mongoose')
const ObjectID = mongoose.Types.ObjectId

exports.lihatDataTransaksi = () =>
    new Promise(async (resolve, reject) => {
        await transaksi.find({})
            .then(result => {
                resolve(response.commonResult(result))
            })
            .catch(() => reject(response.commonErrorMsg('Mohon Maaf Terjadi Kesalahan pada Server :(')))
    })

exports.updateTransaksi = (id, data) =>
    new Promise(async (resolve, reject) => {
        await transaksi.updateOne(
            { _id: ObjectID(id) },
            {
                $set: {
                    via: data.via
                }
            }
        ).then(transaksi => {
            resolve(response.commonSuccessMsg('Berhasil transaksi '))
        }).catch(err => {
            reject(response.commonErrorMsg('Mohon Maaf Terjadi Kesalahan pada Server :('))
        })
    })

exports.updateBuktiTF = (id, data) =>
    new Promise(async (resolve, reject) => {
        await transaksi.updateOne(
            { _id: ObjectID(id) },
            {
                $set: {
                    buktiTF: data.buktiTF
                }
            }
        ).then(transaksi => {
            resolve(response.commonSuccessMsg('Berhasil mengupload bukti transfer'))
        }).catch(err => {
            reject(response.commonErrorMsg('Mohon Maaf Terjadi Kesalahan pada Server :('))
        })
    })

exports.hapustransaksi = (id) =>
    new Promise(async (resolve, reject) => {
        await transaksi.remove({ _id: ObjectID(id) })
            .then(() => {
                resolve(response.commonSuccessMsg('Berhasil menghapus transaksi'))
            }).catch(() => {
                reject(response.commonErrorMsg('Mohon Maaf Terjadi Kesalahan pada Server :('))
            })
    })