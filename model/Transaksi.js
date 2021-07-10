const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    userName: {
        type: String
    },
    kodeKosmetik: {
        type: String
    },
    namaKosmetik: {
        type: String
    },
    deskripsiKosmetik: {
        type: String
    },
    jenisKosmetik: {
        type: String
    },
    hargaKosmetik: {
        type: Number
    },
    jumlahKosmetik: {
        type: Number
    },
    jumlahHarga: {
        type: Number
    },
    via: {
        type: String
    },
    gambar: {
        type: String
    },
    buktiTF: {
        type: String
    }

})

module.exports = mongoose.model('transaksi', userSchema)