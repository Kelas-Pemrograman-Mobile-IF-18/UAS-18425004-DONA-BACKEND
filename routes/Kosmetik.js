const multer = require('multer')
const fs = require('fs')
const router = require('express').Router()
const kosmetik = require('../controller/kosmetik')


var storage = multer.diskStorage({
    filename: function (req, file, cb) {
        let ext = file.originalname.substring(
            file.originalname.lastIndexOf("."),
            file.originalname.length
        )
        cb(null, Date.now() + ext);
    },
    destination: function (req, file, cb) {
        cb(null, './gambar')
    }

})

const cekNull = (fileUpload) => {
    if (fileUpload === undefined || fileUpload === null) {
        return null
    } else {
        return fileUpload[0].filename
    }
}



var upload = multer({ storage: storage }).single("gambar")

router.post("/input", upload, (req, res) => {

    kosmetik.inputPemesananKosmetik(req.body, req.file.filename)
        .then((result) => res.json(result))
        .catch((err) => res.json(err))
})

router.get("/datakosmetik", (req, res) => {
    kosmetik.lihatDataKosmetik()
        .then((result) => res.json(result))
        .catch((err) => res.json(err))
})

router.get("/datakosmetik/:id", (req, res) => {
    kosmetik.lihatDetailDataKosmetik(req.params.id)
        .then((result) => res.json(result))
        .catch((err) => res.json(err))
})

router.delete("/hapus/:id", (req, res) => {
    kosmetik.hapusKosmetik(req.params.id)
        .then((result) => res.json(result))
        .catch((err) => res.json(err))
})

router.put("/ubah/:id", (req, res) => {
    kosmetik.updateKosmetik(req.params.id, req.body)
        .then((result) => res.json(result))
        .catch((err) => res.json(err))
})

router.put("/ubahgambar/:id", upload, (req, res) => {
    let data = req.body
    data.gambar = req.file.filename
    kosmetik.updateKosmetikGambar(req.params.id, data)
        .then((result) => res.json(result))
        .catch((err) => res.json(err))
})

module.exports = router