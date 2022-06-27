const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	alfa: 'https://api.zeeoneofc.xyz', //apabila link api eror, segera laporkan ke owner
}

// Free apikey
global.APIKeys = {
	'https://api.zeeoneofc.xyz': 'VE3yXpPC',  // login https://api.zeeoneofc.xyz to get apikey || https://api-alphabot.herokuapp.com
}

// setting 
//global.autoread = false // auto read pesan / message
global.autorecording = false //status auto merekam ( auto record )
//global.autoketik = false //status auto mengetik (auto typing)
//global.available = false //status online (online)

// Other
global.botname = "⌬ Hatsune-MD" //namabot kalian
global.ownername= "⌬ Clara-DV" //nama kalian
global.myweb ="https://chat.whatsapp.com/CXh8962GOxK6cwDwLjlABw" //bebas asal jan hapus
global.youtube = "https://chat.whatsapp.com/CXh8962GOxK6cwDwLjlABw" //bebas asal jan hapus
global.github = "https://chat.whatsapp.com/CXh8962GOxK6cwDwLjlABw" //bebas
global.email = "https://chat.whatsapp.com/CXh8962GOxK6cwDwLjlABw" //bebas
global.region = "Isekai" //bebas
global.ownernomer = "6281347927862" // nomor wa kalian
global.ownernomerr = "+6281347927862" //nmr wa kalian
global.thumbnail = "./image/lol.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.donasi = "./image/donasi.jpg" // foto donasi di folder image
global.background_welcome="https://telegra.ph/file/2fac76c84d61e4d1bb957.jpg" // maks size 30kb, agar welcome image nya tdk delay
global.owner = ["6281347927862","6282253479547"] //ganti agar fitur owner bisa di gunakan
global.packname = '⌬ Hatsune-MD' //sticker wm ubah
global.author = '+62 822-5347-9547' //sticker wm ganti nama kalian
global.sessionName = 'session'
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=blood&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=uprise-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=trance-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=stonehenge-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['','!','.','#',',','/']
global.sp = '⫹⫺'
global.mess = {
    sukses: '📝Mou~',
    admin: 'Sumimasen, Perintah Ini Hanya Dapat Digunakan Oleh Admin Group><',
    botAdmin: 'Sumimasen, Perintah Ini Hanya Dapat Digunakan Ketika Bot Menjadi Admin Group><',
    owner: 'Sumimasen, Perintah Ini Hanya Dapat Digunakan Oleh Owner Bot><',
    group: 'Sumimasen, Perintah Ini Hanya Dapat Digunakan Di Group><',
    private: 'Sumimasen, Perintah Ini Hanya Dapat Digunakan Di Chat Pribadi><',
	bot: 'Sumimasen, Fitur Khusus Pengguna Nomor Bot><',
    errtoimg: 'Sumimasen, Saat Ini Belum Support Sticker Gif><',
    wait: '*Chotto matte kudasai!!!*',
	lockCmd: 'Sumimasen, Fitur Tidak Diaktifkan Oleh Owner Bot><',
	example1: 'Irasshaimase @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})