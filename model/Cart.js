const mongoose = require('mongoose');
// const ObjectID = mongoose.Types.ObjectId

const userSchema = mongoose.Schema({

    // _id:{
    //     type: String
    // },
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
    gambar: {
        type: String
    }

})

module.exports = mongoose.model('cart', userSchema)