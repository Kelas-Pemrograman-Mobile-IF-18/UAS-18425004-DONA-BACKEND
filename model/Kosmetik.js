const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

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
    gambar: {
        type: String
    }

})

module.exports = mongoose.model('kosmetik', userSchema)