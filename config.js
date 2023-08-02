/*
    Created & Base By ArxzyDev
    Jual Sc? Neraka Paling Bawah
    My Contact https://wa.me/6289513081052
    
   Notes:
   Jika Ingin Recode Silakan Tapi Ingat Creditnya
   Sc Adrian-MD Akan Terus Di Update.
   Jika Ingin Beli Apikey Chat Owner Lolhuman
   
   Script Ini Di Modifikasi / Di Tulis Ulang Oleh YoriMikuXD/Yori Hosting Dan Script Ini 89% No Enc

    Jika Tidak Ada Alat Untuk Run Script Bot Silahkan Beli Panel Di Owner Yori Hosting Minat Hubungi : wa.me/6282332208755
   
*/

const fs = require('fs')
const chalk = require('chalk')

global.apikey = '_' /3d27cc6592c983dd253f642f/ LOLHUMAN
global.rosekey = '_' // ROSE

//—————「 Set Nama Bot & Own 」—————//
global.namabot = 'YoriMiku Botz'
global.namaowner = 'haris'

//—————「 Setting Owner 」—————//
global.owner = ['6285936162097']
global.nomerowner = '6285936162097'
global.premium = ['6288216922399']

//—————「 Set Wm 」—————//
global.packname = 'By haris\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'
global.author = 'YoriMiku Bot By haris'
global.prefa = ['', '.']
global.sp = '•'

//—————「 Set Message 」—————//
global.mess = {
    success: '🤗Done, Oke Desu~',
    admin: '❗Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !',
    botAdmin: '❗Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !',
    owner: '❗Perintah Ini Hanya Bisa Digunakan Oleh Owner !',
    group: '❗Perintah Ini Hanya Bisa Digunakan Di Group Chat !',
    private: '❗Perintah Ini Hanya Bisa Digunakan Di Private Chat !',
    bot: '🤖 Fitur Khusus Pengguna Nomor Bot !',
    wait: '⏳ Sedang Di Proses !',
    endLimit: '🕊️ Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12 !',
    error: '🚫 Fitur Sedang Error !',
}

//—————「 Set Limit 」—————//
global.limitawal = {
    premium: "Infinity",
    free: 30
}

//—————「 Set Image 」—————//
global.imageurl = 'https://telegra.ph/file/17c8e34c33011d418b13c.jpg'
global.link = 'https://www.youtube.com/@Haris.m'
global.thumb = fs.readFileSync('./media/thumb.jpg')

//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
