const kosmetik = require('../model/Kosmetik.js')
const response = require('../config/response')
const mongoose = require('mongoose')
const ObjectID = mongoose.Types.ObjectId

exports.inputPemesananKosmetik = (data, gambar) =>
    new Promise(async (resolve, reject) => {

        const pemesananBaru = new kosmetik({
            kodeKosmetik: data.kodeKosmetik,
            namaKosmetik: data.namaKosmetik,
            deskripsiKosmetik: data.deskripsiKosmetik,
            jenisKosmetik: data.jenisKosmetik,
            hargaKosmetik: data.hargaKosmetik,
            gambar: gambar
        })

        await kosmetik.findOne({ kodeKosmetik: data.kodeKosmetik })
            .then(kosmetik => {
                if (kosmetik) {
                    reject(response.commonErrorMsg('Kode kosmetik sudah digunakan'))
                } else {
                    pemesananBaru.save()
                        .then(r => {
                            resolve(response.commonSuccessMsg('Berhasil menginput data kosmetik'))
                        }).catch(err => {
                            console.log(err)
                            reject(response.commonErrorMsg('Mohon Maaf Input Pemesanan Gagal nih :('))
                        })
                }
            }).catch(err => {
                reject(response.commonErrorMsg('Mohon Maaf Terjadi Kesalahan pada Server nih :('))
            })
    })

exports.lihatDataKosmetik = () =>
    new Promise(async (resolve, reject) => {
        await kosmetik.find({})
            .then(result => {
                resolve(response.commonResult(result))
            })
            .catch(() => reject(response.commonErrorMsg('Mohon Maaf Terjadi Kesalahan pada Server nih :(')))
    })

exports.lihatDetailDataKosmetik = (kodeKosmetik) =>
    new Promise(async (resolve, reject) => {
        await kosmetik.findOne({ kodeKosmetik: kodeKosmetik })
            .then(result => {
                resolve(response.commonResult(result))
            })
            .catch(() => reject(response.commonErrorMsg('Mohon Maaf Terjadi Kesalahan pada Server nih :(')))
    })

exports.updateKosmetik = (id, data) =>
    new Promise(async (resolve, reject) => {
        await kosmetik.updateOne(
            { _id: ObjectID(id) },
            {
                $set: {
                    kodeKosmetik: data.kodeKosmetik,
                    namaKosmetik: data.namaKosmetik,
                    deskripsiKosmetik: data.deskripsiKosmetik,
                    jenisKosmetik: data.jenisKosmetik,
                    haraganaKosmetik: data.haraganaKosmet,
                }
            }
        ).then(kosmetik => {
            resolve(response.commonSuccessMsg('Berhasil mengubah data kosmetik'))
        }).catch(err => {
            reject(response.commonErrorMsg('Mohon Maaf Terjadi Kesalahan pada Server nih :('))
        })
    })

exports.updateKosmetikGambar = (id, data) =>
    new Promise(async (resolve, reject) => {
        await kosmetik.updateOne(
            { _id: ObjectID(id) },
            {
                $set: {
                    gambar: data.gambar
                }
            }
        ).then(kosmetik => {
            resolve(response.commonSuccessMsg('Berhasil mengubah gambar nih'))
        }).catch(err => {
            reject(response.commonErrorMsg('Mohon Maaf Terjadi Kesalahan pada Server nih :('))
        })
    })

exports.hapusKosmetik = (id) =>
    new Promise(async (resolve, reject) => {
        await kosmetik.remove({ _id: ObjectID(id) })
            .then(() => {
                resolve(response.commonSuccessMsg('Berhasil menghapus data nih'))
            }).catch(() => {
                reject(response.commonErrorMsg('Mohon Maaf Terjadi Kesalahan pada Server nih :('))
            })
    })