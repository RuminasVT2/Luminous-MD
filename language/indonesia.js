exports.private = () =>{
	return`*Sumimasen, Fitur Hanya Bisa Di Gunakan Di Chat Pribadi><*`
	}
exports.wait = () => {
    return `*Chotto Matte Kudasai!!!*`
}
exports.ok = () => {
    return `*ðMou~*`
}

exports.err = () => {
    return `*Sumimasen, Fitur Sedang Error><*`
}
exports.erorLink = () => {
    return `*Sumimasen, Link Yang Anata Berikan Error><*`
}
exports.media = () => {
    return `*Douzo Pilih Media Yang Ingin Kamu Download*`
}
exports.replyImg = (prefix, command) => {
    return `*Chigee, Kirim/Reply Foto Dengan Caption ${prefix + command}*`
}

exports.wrongFormat = (prefix) => {
    return `Format Salah, Silakan Cek Cara Penggunaan Di *${prefix}allmenu*.`
}

exports.emptyMess = () => {
    return `*Sumimasen, Harap Masukkan Pesan Yang Ingin Disampaikan*`
}

exports.cmdNotFound = (cmd, prefix) => {
    return `Sumimasen, Command *${cmd}* Tidak Terdaftar Di *${prefix}allmenu*`
}

exports.ownerOnly = () => {
    return `*Sumimasen, Command Ini Khusus Owner><*`
}

exports.doneOwner = () => {
    return `*Sudah Selesai Sayang >\\\<*`
}

exports.groupOnly = () => {
    return `*Sumimasen, Command Ini Hanya Bisa Digunakan Di Dalam Grup><*`
}

exports.adminOnly = () => {
    return `*Sumimasen, Command Ini Hanya Bisa Digunakan Di Chat Pribadi><*`
}

exports.nhFalse = () => {
    return `*Sumimasen, Kode Tidak Valid*`
}

exports.listBlock = (blockNumber) => {
    return `*ââ ã HALL OF SHAME ã ââ*
    
Total Diblokir: *${blockNumber.length}* User\n`
}

exports.notAdmin = () => {
    return `*Baka, anata Bukan Admin*`
}

exports.adminAlready = () => {
    return `*Baka, Tidak  Dapat Mem-promote User Yang Merupakan Admin*`
}

exports.botNotAdmin = () => {
    return `*Jadikan Aku Admin Dulu>\\\<*`
}

exports.received = (pushname) => {
    return `
Halo ${pushname}!
Terima Kasih Telah Melapor, Laporanmu Akan Kami Segera Terima.`
}

exports.videoLimit = () => {
    return `*Baka, Ukuran File Terlalu Besar*`
}

exports.notNum = (q) => {
    return `"${q}", Bukan Angka!`
}
exports.menunya = (salam, pushname, botname) =>{
	return`Hai ${pushname} Selamat ${salam} , 

`
}
exports.listMenu = (time, salam, pushname, prefix) => {
    return `*Selamat ${salam} ${pushname}*
ââââââââââââââââââââ

 *ð¬Bot Name : â¬ Hatsune-Bot*
 *ðVersion : 3.0*
 *ðï¸Perfix : Multi*
 *ð·ï¸Total Features : 700+*
 *ðï¸Lib : Baileys-Md@4.0.0*
 *âTime Server : ${time}*

Bot Ke-1
wa.me/6282253479547

ââââââââââââââââââââ
     *ðAll Hatsune Bot Menu*

â­ââ ã Bot Info ã 
ââ ${prefix}owner
ââ ${prefix}rules
ââ ${prefix}sc
ââ ${prefix}speed
ââ ${prefix}runtime
ââ ${prefix}infobot
â°â ${prefix}donate


â­ââ ã Owner ã 
ââ < evaluate
ââ > evaluate
ââ $ exec
ââ => exec
ââ ${prefix}setmenu [query]
ââ ${prefix}setmenu templateLocation
ââ ${prefix}setmenu templateTenor
ââ ${prefix}setmenu katalog
ââ ${prefix}setmenu katalog2
ââ ${prefix}setmenu list
ââ ${prefix}setwm packname|author
ââ ${prefix}sendsesi
ââ ${prefix}listpc
ââ ${prefix}listgc
ââ ${prefix}broadcast [text]
ââ ${prefix}bc [text]
ââ ${prefix}bcgc [text]
ââ ${prefix}nsfw [on/off]
ââ ${prefix}mute [on/off]
ââ ${prefix}banchat
ââ ${prefix}unbanchat
ââ ${prefix}autorespond [on/off]
ââ ${prefix}antiviewonce [on/off]
ââ ${prefix}join [link]
ââ ${prefix}self
ââ ${prefix}public [only bot]
ââ ${prefix}del [reply pesan bot]
â°â ${prefix}setppbot [reply image]

â­ââ ã Store Menu ã
ââ ${prefix}list
ââ ${prefix}addlist [key|respond]
ââ ${prefix}dellist [key]
ââ ${prefix}update [key|respond]
ââ ${prefix}store
ââ ${prefix}kali
ââ ${prefix}bagi
ââ ${prefix}tambah
ââ ${prefix}kurang
ââ ${prefix}kalkulator
ââ ${prefix}proses
â°â ${prefix}done [surah|ayat]


â­ââ ã Database ã 
ââ ${prefix}setcmd [reply stiker]
ââ ${prefix}delcmd [reply stiker]
ââ ${prefix}listcmd
ââ ${prefix}absen
ââ ${prefix}cekabsen
ââ ${prefix}deleteabsen
ââ ${prefix}absenstart
ââ ${prefix}addmsg [nama file]
ââ ${prefix}getmsg [nama file]
ââ ${prefix}listmsg
â°â ${prefix}delmsg [nama file]


â­ââ ã Group ã 
ââ ${prefix}listonline
ââ ${prefix}sider
ââ ${prefix}wm packname|author
ââ ${prefix}infochat
ââ ${prefix}setdesk [text]
ââ ${prefix}setppgrup [reply image]
ââ ${prefix}antilink [on/off]
ââ ${prefix}revoke
ââ ${prefix}leave
ââ ${prefix}add [62***]
ââ ${prefix}kick @tag
ââ ${prefix}leave
ââ ${prefix}linkgc
ââ ${prefix}take packname|author
ââ ${prefix}group [open/close]
ââ ${prefix}tagall [text]
â°â ${prefix}hidetag [text]

â­ââ ã Anime ã 
ââ ${prefix}quotesanime
ââ ${prefix}wallanime
ââ ${prefix}anime [query]
ââ ${prefix}manga [query]
â°â ${prefix}character [query]

â­ââ ã Tag ã 
ââ ${prefix}stickertag
ââ ${prefix}videotag [query]
ââ ${prefix}vntag [query]
â°â ${prefix}imagetag [query]

â­ââ ã Stalking ã 
ââ ${prefix}igstalk [username]
ââ ${prefix}ghstalk [username]
â°â ${prefix}ytstalk [channel]


â­ââ ã Search ã 
ââ ${prefix}ytsearch [query]
ââ ${prefix}wallpaper [query]
ââ ${prefix}google [query]
ââ ${prefix}wikimedia [query]
ââ ${prefix}hentai
ââ ${prefix}wattpad [query]
ââ ${prefix}webtoons [query]
ââ ${prefix}drakor [query]
â°â ${prefix}pinterest [query]


â­ââ ã Converter ã
ââ ${prefix}toaudio [video]
ââ ${prefix}tomp3 [video]
ââ ${prefix}tovn [video]
ââ ${prefix}stiker [reply image]
ââ ${prefix}tourl [image/video/stiker]
ââ ${prefix}togif [sticker]
ââ ${prefix}tomp4 [sticker]
â°â${prefix}toimg [reply sticker]


â­ââ ã Image Effect ã 
ââ ${prefix}wanted [reply image/stiker]
ââ ${prefix}utatoo [reply image/stiker]
ââ ${prefix}unsharpen [reply image/stiker]
ââ ${prefix}thanos [reply image/stiker]
ââ ${prefix}sniper [reply image/stiker]
ââ ${prefix}sharpen [reply image/stiker]
ââ ${prefix}sepia [reply image/stiker]
ââ ${prefix}scary [reply image/stiker]
ââ ${prefix}rip [reply image/stiker]
ââ ${prefix}redple [reply image/stiker]
ââ ${prefix}rejected [reply image/stiker]
ââ ${prefix}posterize [reply image/stiker]
ââ ${prefix}ps4 [reply image/stiker]
ââ ${prefix}pixelize [reply image/stiker]
ââ ${prefix}missionpassed [reply image/stiker]
ââ ${prefix}moustache [reply image/stiker]
ââ ${prefix}lookwhatkarenhave [reply image/stiker]
ââ ${prefix}jail [reply image/stiker]
ââ ${prefix}invert [reply image/stiker]
ââ ${prefix}instagram [reply image/stiker]
ââ ${prefix}greyscale [reply image/stiker]
ââ ${prefix}glitch [reply image/stiker]
ââ ${prefix}gay [reply image/stiker]
ââ ${prefix}frame [reply image/stiker]
ââ ${prefix}fire [reply image/stiker]
ââ ${prefix}distort [reply image/stiker]
ââ ${prefix}dictator [reply image/stiker]
ââ ${prefix}deepfry [reply image/stiker]
ââ ${prefix}ddungeon [reply image/stiker]
ââ ${prefix}circle [reply image/stiker]
ââ ${prefix}challenger [reply image/stiker]
ââ ${prefix}burn [reply image/stiker]
ââ ${prefix}brazzers [reply image/stiker]
â°â ${prefix}beautiful [reply image/stiker]


â­ââ ã Sticker Effect ã 
ââ ${prefix}jail [reply image/stiker]
ââ ${prefix}red [reply image/stiker]
ââ ${prefix}gay [reply image/stiker]
ââ ${prefix}bloo [reply image/stiker]
ââ ${prefix}blue [reply image/stiker]
ââ ${prefix}sepia [reply image/stiker]
ââ ${prefix}green [reply image/stiker]
ââ ${prefix}glass [reply image/stiker]
ââ ${prefix}invert [reply image/stiker]
ââ ${prefix}blurple [reply image/stiker]
ââ ${prefix}blurple2 [reply image/stiker]
ââ ${prefix}wasted [reply image/stiker]
ââ ${prefix}passed [reply image/stiker]
ââ ${prefix}triggered [reply image/stiker]
ââ ${prefix}comrade [reply image/stiker]
ââ ${prefix}greyscale [reply image/stiker]
ââ ${prefix}threshold [reply image/stiker]
ââ ${prefix}brightness [reply image/stiker]
â°â ${prefix}invertgreyscale [reply image/stiker]


â­ââ ã Download ã 
ââ ${prefix}tiktok [link]
ââ ${prefix}tiktoknowm [link]
ââ ${prefix}tiktokwm [link]
ââ ${prefix}tiktokaudio [link]
ââ ${prefix}ytdl [link]
ââ ${prefix}play [query]
ââ ${prefix}ytmp3 [link]
ââ ${prefix}ytshortmp3 [link]
ââ ${prefix}ytmp4 [link]
ââ ${prefix}ytshorts [link]
ââ ${prefix}facebook [link]
ââ ${prefix}facebooksd [link]
ââ ${prefix}facebookhd [link]
ââ ${prefix}fbaudio [link]
ââ ${prefix}igstory [username]
ââ ${prefix}igdl [link]
ââ ${prefix}igphoto [link]
ââ ${prefix}igvideo [link]
ââ ${prefix}igreels [link]
ââ ${prefix}igtv [link]
ââ ${prefix}soundcloud [link]
ââ ${prefix}gitclone [link repo]
ââ ${prefix}gitrepo [username repo branch]
ââ ${prefix}mediafire [link]
â°â ${prefix}twitter link

â­ââ ã Primbon ã
ââ ${prefix}jodohku
ââ ${prefix}jadian
ââ ${prefix}apakah
ââ ${prefix}bisakah
ââ ${prefix}bagaimanakah
ââ ${prefix}rate
ââ ${prefix}gantengcek
ââ ${prefix}cantikcek
ââ ${prefix}sangecek
ââ ${prefix}gaycek
ââ ${prefix}lesbicek
ââ ${prefix}kapankah
ââ ${prefix}wangy
ââ ${prefix}cekmati
ââ ${prefix}halah
ââ ${prefix}hilih
ââ ${prefix}huluh
ââ ${prefix}heleh
ââ ${prefix}holoh
ââ ${prefix}nomorhoki 887435047326
ââ ${prefix}artimimpi [query]
ââ ${prefix}artinama [query]
ââ ${prefix}ramaljodoh
ââ ${prefix}ramaljodohbali
ââ ${prefix}suamiistri
ââ ${prefix}ramalcinta
ââ ${prefix}cocoknama
ââ ${prefix}pasangan
ââ ${prefix}jadiannikah
ââ ${prefix}sifatusaha
ââ ${prefix}rezeki
ââ ${prefix}pekerjaan
ââ ${prefix}nasib
ââ ${prefix}penyakit
ââ ${prefix}tarot
ââ ${prefix}fengshui
ââ ${prefix}haribaik
ââ ${prefix}harisangar
ââ ${prefix}harisial
ââ ${prefix}nagahari
ââ ${prefix}arahrezeki
ââ ${prefix}peruntungan
ââ ${prefix}weton
ââ ${prefix}karakter
ââ ${prefix}keberuntungan
ââ ${prefix}memancing
ââ ${prefix}masasubur
ââ ${prefix}zodiak 
â°â ${prefix}shio [query]

â­ââ ã Random Anime ã
ââ ${prefix}loli
ââ ${prefix}neko
ââ ${prefix}waifu
ââ ${prefix}shinobu
ââ ${prefix}megumin
ââ ${prefix}bully
ââ ${prefix}cuddle
ââ ${prefix}cry
ââ ${prefix}hug
ââ ${prefix}awoo
ââ ${prefix}kiss
ââ ${prefix}lick
ââ ${prefix}pat
ââ ${prefix}smug
ââ ${prefix}bonk
ââ ${prefix}yeet
ââ ${prefix}blush
ââ ${prefix}smile
ââ ${prefix}wave
ââ ${prefix}highfive
ââ ${prefix}handhold
ââ ${prefix}nom
ââ ${prefix}bite
ââ ${prefix}glomp
ââ ${prefix}slap
ââ ${prefix}kill
ââ ${prefix}happy
ââ ${prefix}wink
ââ ${prefix}poke
ââ ${prefix}dance
â°â ${prefix}cringe

â­ââ ã Nsfw & Sfw ã
ââ ${prefix}ahegao
ââ ${prefix}ass
ââ ${prefix}bdsm
ââ ${prefix}blowjob
ââ ${prefix}cuckold
ââ ${prefix}cum
ââ ${prefix}ero
ââ ${prefix}femdom
ââ ${prefix}foot
ââ ${prefix}gangbang
ââ ${prefix}glasses
ââ ${prefix}jahy
ââ ${prefix}manga
ââ ${prefix}masturbation
ââ ${prefix}neko
ââ ${prefix}orgy
ââ ${prefix}panties
ââ ${prefix}pussy
ââ ${prefix}tentacles
ââ ${prefix}thighs
ââ ${prefix}yuri
ââ ${prefix}feet
ââ ${prefix}lewdkemo
ââ ${prefix}woof
ââ ${prefix}gasm
ââ ${prefix}solo
ââ ${prefix}8ball
ââ ${prefix}goose
ââ ${prefix}avatar
ââ ${prefix}hololewd
ââ ${prefix}gecg
ââ ${prefix}holo
ââ ${prefix}fox_girl
ââ ${prefix}tits
ââ ${prefix}eroyuri
ââ ${prefix}holoyero
ââ ${prefix}lizard
ââ ${prefix}keta
ââ ${prefix}eron
ââ ${prefix}erok
ââ ${prefix}kemonomimi
ââ ${prefix}cum_jpg
ââ ${prefix}nsfw_avatar
ââ ${prefix}erofeet
ââ ${prefix}meow
ââ ${prefix}wallpaper
ââ ${prefix}waifu
ââ ${prefix}trap
ââ ${prefix}lewd
ââ ${prefix}pussy_jpg
ââ ${prefix}futanari
ââ ${prefix}lewdk
ââ ${prefix}solog
ââ ${prefix}smug
ââ ${prefix}cum
ââ ${prefix}slap
ââ ${prefix}les
ââ ${prefix}erokemo
ââ ${prefix}bj
ââ ${prefix}pwankg
ââ ${prefix}pat
ââ ${prefix}poke
ââ ${prefix}feed
ââ ${prefix}nsfw_neko_gif
ââ ${prefix}pussy
ââ ${prefix}feetg
ââ ${prefix}baka
ââ ${prefix}hug
ââ ${prefix}kiss
ââ ${prefix}tickle
ââ ${prefix}spank
ââ ${prefix}kuni
ââ ${prefix}classic
ââ ${prefix}boobs
ââ ${prefix}anal
ââ ${prefix}ngif
ââ ${prefix}cuddle
â°â ${prefix}zettai

â­ââ ã Ephoto360 Menu ã
ââ ${prefix}youtubegold
ââ ${prefix}youtubesilver
ââ ${prefix}facebookgold
ââ ${prefix}facebooksilver
ââ ${prefix}instagramgold
ââ ${prefix}instagramsilver
ââ ${prefix}twittergold
ââ ${prefix}twittersilver
ââ ${prefix}retrotext
ââ ${prefix}halloweenbats
ââ ${prefix}texthalloween
ââ ${prefix}cardhalloween
ââ ${prefix}birthdaycake
ââ ${prefix}thundertext
ââ ${prefix}icetext
ââ ${prefix}milkcake
ââ ${prefix}snowontext
ââ ${prefix}metalstar
ââ ${prefix}dragonfire
ââ ${prefix}zombie3d
ââ ${prefix}merrycard
ââ ${prefix}generalexam 
ââ ${prefix}viettel
ââ ${prefix}embroider
ââ ${prefix}graffititext
ââ ${prefix}graffititext2
ââ ${prefix}graffititext3
ââ ${prefix}covergraffiti
ââ ${prefix}moderngold
ââ ${prefix}capercut
ââ ${prefix}lovecard
ââ ${prefix}heartflashlight
ââ ${prefix}heartcup
ââ ${prefix}sunglightshadow
ââ ${prefix}graffiti3d
ââ ${prefix}moderngoldsilver
ââ ${prefix}moderngold2
ââ ${prefix}moderngold3
ââ ${prefix}fabrictext
ââ ${prefix}masteryavatar
ââ ${prefix}messagecoffee
ââ ${prefix}announofwin
ââ ${prefix}writeblood
ââ ${prefix}horrorletter
ââ ${prefix}writehorror
ââ ${prefix}shirtclub
ââ ${prefix}angelwing
ââ ${prefix}christmasseason
ââ ${prefix}projectyasuo
ââ ${prefix}lovelycute
ââ ${prefix}womansday
ââ ${prefix}covergamepubg
ââ ${prefix}nameonheart
ââ ${prefix}funnyhalloween
ââ ${prefix}lightningpubg
ââ ${prefix}greetingcardvideo 
ââ ${prefix}christmascard 
ââ ${prefix}galaxybat
ââ ${prefix}writegalaxy
ââ ${prefix}starsnight
ââ ${prefix}noeltext
ââ ${prefix}textcakes
ââ ${prefix}pubgbirthday
ââ ${prefix}galaxywallpaper
ââ ${prefix}pubgglicthvideo 
ââ ${prefix}pubgmascotlogo
ââ ${prefix}realembroidery
ââ ${prefix}vintagetelevision
ââ ${prefix}funnyanimations
ââ ${prefix}glowingtext
ââ ${prefix}textonglass
ââ ${prefix}cartoonstyle
ââ ${prefix}multicolor
ââ ${prefix}watercolor2
ââ ${prefix}textsky
ââ ${prefix}summerbeach
ââ ${prefix}1917text
ââ ${prefix}puppycute
â°â ${prefix}rosebirthday


â­ââ ã Textpro Menu ã
ââ ${prefix}halloween2 text|text2
ââ ${prefix}horror text|text2
ââ ${prefix}game8bit text|text2
ââ ${prefix}layered text|text2
ââ ${prefix}glitch2 text|text2
ââ ${prefix}coolg text|text2
ââ ${prefix}coolwg text|text2
ââ ${prefix}realistic text|text2
ââ ${prefix}space3d text|text2
ââ ${prefix}gtiktok text|text2
ââ ${prefix}stone text|text2
ââ ${prefix}marvel text|text2
ââ ${prefix}marvel2 text|text2
ââ ${prefix}pornhub text|text2
ââ ${prefix}avengers text|text2
ââ ${prefix}metalr text|text2
ââ ${prefix}metalg text|text2
ââ ${prefix}metalg2 text|text2
ââ ${prefix}halloween2 text|text2
ââ ${prefix}lion text|text2
ââ ${prefix}wolf_bw text|text2
ââ ${prefix}wolf_g text|text2
ââ ${prefix}ninja text|text2
ââ ${prefix}3dsteel text|text2
ââ ${prefix}horror2 text|text2
ââ ${prefix}lava text|text2
ââ ${prefix}bagel text|text2
ââ ${prefix}blackpink text
ââ ${prefix}rainbow2 text
ââ ${prefix}water_pipe text
ââ ${prefix}halloween text
ââ ${prefix}sketch text
ââ ${prefix}sircuit text
ââ ${prefix}discovery text
ââ ${prefix}metallic2 text
ââ ${prefix}fiction text
ââ ${prefix}demon text
ââ ${prefix}transformer text
ââ ${prefix}berry text
ââ ${prefix}thunder text
ââ ${prefix}magma text
ââ ${prefix}3dstone text
ââ ${prefix}neon text
ââ ${prefix}glitch text
ââ ${prefix}harry_potter text
ââ ${prefix}embossed text
ââ ${prefix}broken text
ââ ${prefix}papercut text
ââ ${prefix}gradient text
ââ ${prefix}glossy text
ââ ${prefix}watercolor text
ââ ${prefix}multicolor text
ââ ${prefix}neon_devil text
ââ ${prefix}underwater text
ââ ${prefix}bear text
ââ ${prefix}wonderfulg text
ââ ${prefix}christmas text
ââ ${prefix}neon_light text
ââ ${prefix}snow text
ââ ${prefix}cloudsky text
ââ ${prefix}luxury2 text
ââ ${prefix}gradient2 text
ââ ${prefix}summer text
ââ ${prefix}writing text
ââ ${prefix}engraved text
ââ ${prefix}summery text
ââ ${prefix}3dglue text
ââ ${prefix}metaldark text
ââ ${prefix}neonlight text
ââ ${prefix}oscar text
ââ ${prefix}minion text
ââ ${prefix}holographic text
ââ ${prefix}purple text
ââ ${prefix}glossyb text
ââ ${prefix}deluxe2 text
ââ ${prefix}glossyc text
ââ ${prefix}fabric text
ââ ${prefix}neonc text
ââ ${prefix}newyear text
ââ ${prefix}newyear2 text
ââ ${prefix}metals text
ââ ${prefix}xmas text
ââ ${prefix}blood text
ââ ${prefix}darkg text
ââ ${prefix}joker text
ââ ${prefix}wicker text
ââ ${prefix}natural text
ââ ${prefix}firework text
ââ ${prefix}skeleton text
ââ ${prefix}balloon text
ââ ${prefix}balloon2 text
ââ ${prefix}balloon3 text
ââ ${prefix}balloon4 text
ââ ${prefix}balloon5 text
ââ ${prefix}balloon6 text
ââ ${prefix}balloon7 text
ââ ${prefix}steel text
ââ ${prefix}gloss text
ââ ${prefix}denim text
ââ ${prefix}decorate text
ââ ${prefix}decorate2 text
ââ ${prefix}peridot text
ââ ${prefix}rock text
ââ ${prefix}glass text
ââ ${prefix}glass2 text
ââ ${prefix}glass3 text
ââ ${prefix}glass4 text
ââ ${prefix}glass5 text
ââ ${prefix}glass6 text
ââ ${prefix}glass7 text
ââ ${prefix}glass8 text
ââ ${prefix}captain_as2 text
ââ ${prefix}robot text
ââ ${prefix}equalizer text
ââ ${prefix}toxic text
ââ ${prefix}sparkling text
ââ ${prefix}sparkling2 text
ââ ${prefix}sparkling3 text
ââ ${prefix}sparkling4 text
ââ ${prefix}sparkling5 text
ââ ${prefix}sparkling6 text
ââ ${prefix}sparkling7 text
ââ ${prefix}decorative text
ââ ${prefix}chocolate text
ââ ${prefix}strawberry text
ââ ${prefix}koifish text
ââ ${prefix}bread text
ââ ${prefix}matrix text
ââ ${prefix}blood2 text
ââ ${prefix}neonligth2 text
ââ ${prefix}thunder2 text
ââ ${prefix}3dbox text
ââ ${prefix}neon2 text
ââ ${prefix}roadw text
ââ ${prefix}bokeh text
ââ ${prefix}gneon text
ââ ${prefix}advanced text
ââ ${prefix}dropwater text
ââ ${prefix}wall text
ââ ${prefix}chrismast text
ââ ${prefix}honey text
ââ ${prefix}drug text
ââ ${prefix}marble text
ââ ${prefix}marble2 text
ââ ${prefix}ice text
ââ ${prefix}juice text
ââ ${prefix}rusty text
ââ ${prefix}abstra text
ââ ${prefix}biscuit text
ââ ${prefix}wood text
ââ ${prefix}scifi text
ââ ${prefix}metalr text
ââ ${prefix}purpleg text
ââ ${prefix}shiny text 
ââ ${prefix}jewelry text
ââ ${prefix}jewelry2 text
ââ ${prefix}jewelry3 text
ââ ${prefix}jewelry4 text
ââ ${prefix}jewelry5 text
ââ ${prefix}jewelry6 text
ââ ${prefix}jewelry7 text
ââ ${prefix}jewelry8 text
ââ ${prefix}metalh text
ââ ${prefix}golden text
ââ ${prefix}glitter text
ââ ${prefix}glitter2 text
ââ ${prefix}glitter3 text
ââ ${prefix}glitter4 text
ââ ${prefix}glitter5 text
ââ ${prefix}glitter6 text
ââ ${prefix}glitter7 text
ââ ${prefix}metale text
ââ ${prefix}carbon text
ââ ${prefix}candy text
ââ ${prefix}metalb text
ââ ${prefix}gemb text
ââ ${prefix}3dchrome text
ââ ${prefix}metalb2 text
ââ ${prefix}metalg text
â°â ${prefix}metalg text


â­ââ ã Others ã
ââ ${prefix}attp
ââ ${prefix}ttp
ââ ${prefix}emojimix ð+ð¤£
ââ ${prefix}couple
ââ ${prefix}afk [reason]
ââ ${prefix}translate kode_bahasa text
ââ ${prefix}kalkulator [query]
ââ ${prefix}smeme [text]
ââ ${prefix}smeme2 [text|text]
ââ ${prefix}memegen [text|text]
â°â

â­ââ ã Game Menu ã
ââ ${prefix}kuismath
ââ ${prefix}family100
ââ ${prefix}tebakkata
ââ ${prefix}tebakgambar
ââ ${prefix}tebakbendera
ââ ${prefix}tebakkalimat
ââ ${prefix}tebaksiapa
ââ ${prefix}tebakkabupaten
ââ ${prefix}tebakkimia
ââ ${prefix}tebaklirik
ââ ${prefix}tebaktebakan
ââ ${prefix}tekateki
ââ ${prefix}susunkata
â°â ${prefix}caklontong


â­ââ ã Asupan Menu ã
ââ ${prefix}chika
ââ ${prefix}delvira
ââ ${prefix}ayu
ââ ${prefix}bunga
ââ ${prefix}aura
ââ ${prefix}nisa
ââ ${prefix}ziva
ââ ${prefix}yana
ââ ${prefix}viona
ââ ${prefix}syania
ââ ${prefix}riri
ââ ${prefix}syifa
ââ ${prefix}mama_gina
ââ ${prefix}alcakenya
ââ ${prefix}mangayutri
ââ ${prefix}rikagusriani
ââ ${prefix}asupan
ââ ${prefix}bocil
ââ ${prefix}geayubi
ââ ${prefix}santuy
ââ ${prefix}ukhty
â°â ${prefix}syifa

â­ââ ã Telegram Sticker ã
ââ ${prefix}awoawo
ââ ${prefix}benedict
ââ ${prefix}chat
ââ ${prefix}dbfly
ââ ${prefix}dino_kuning
ââ ${prefix}doge
ââ ${prefix}gojosatoru
ââ ${prefix}hope_boy
ââ ${prefix}jisoo
ââ ${prefix}kr_robot
ââ ${prefix}kucing
ââ ${prefix}lonte
ââ ${prefix}manusia_lidi
ââ ${prefix}menjamet
ââ ${prefix}meow
ââ ${prefix}nicholas
ââ ${prefix}patrick
ââ ${prefix}popoci
ââ ${prefix}sponsbob
ââ ${prefix}kawan_sponsbob
â°â ${prefix}tyni

â­ââ ã Random Cewe ã
ââ ${prefix}china 
ââ ${prefix}indonesia 
ââ ${prefix}malaysia 
ââ ${prefix}thailand 
ââ ${prefix}korea 
ââ ${prefix}japan 
ââ ${prefix}vietnam 
ââ ${prefix}jenni 
ââ ${prefix}jiso 
ââ ${prefix}lisa  
â°â ${prefix}rose

â­ââ ã TqTo ã 
ââ My God
ââ My Parents
ââ Fatih A.
ââ Ferdi
ââ DikaArdnt
ââ Mhankbarbar
ââ Nurutomo
ââ Rashid
ââ ZeeoneOfc
ââ Penyedia Module
â°â And All Support
    `
}

exports.rules = (prefix) => {
    return `
*ââ ã RULES AND FAQ ã ââ*

1. Jangan Spam Bot
Sanksi: *WARN/SOFT BLOCK*

2. Jangan Telepon Bot
Sanksi: *SOFT BLOCK*

3. Jangan Mengeksploitasi Bot
Sanksi: *PERMANENT BLOCK*


ð¯ï¸ Bot Tidak Atau Lambat Merespon ?
âï¸ Mungkin Dipengaruhi Banyaknya Permintaan Command

ð¯ï¸ Dimana Saya Bisa Mendapatkan Script Dari Bot Ini ?
âï¸ Script Ini Masih Private Dan Tidak Pernah Diperjual Belikan

ð¯ï¸ Boleh Saya Menambah Ke Grup?
âï¸ Bot Dalam Status Free To Add Berbatas

ð¯ï¸ Prefixnya Apa Ya?
âï¸ Bot Ini Menggunakan Multi Prefix, Contohnya , . #

ð¯ï¸ Kok Saya Chat Owner Tidak Direspon?
âï¸ Owner Hanya Merespon Pertanyaan Seputar Bot Dan Kendala Eror, Tidak Untuk Kenalan Ataupun Mengemis Script.


Jika Sudah Dipahami Rules-nya, Silakan Ketik *${prefix}allmenu* untuk memulai!

â ï¸ Segala Kebijakan Dan Ketentuan Hatsune Di Pegang Oleh Owner Dan Segala Perubahan Kebijakan, Sewaktu Waktu Owner Berhak Mencabut, Memblokir User
`
}
exports.welcome = () =>{
	return`Welcome And Please Intro
	
â­ ð­ðºððº :
ââ ð´ððð :
ââ ð¦ð¾ðð½ð¾ð :
ââ ð ðððð :
â°â Please Obey Group Rules`
}
exports.leave = () =>{
	return`Mental Tidak Aman?
Goodbye`
}
exports.source = () =>{
return`*------ã SOURCE CODE ã ------*

Private ð`
}
exports.tos = (ownernomer) => {
    return `
*-------ã DONATE ã -------*

Hai
Kalian Bisa Mendukung Saya Agar Bot Ini Tetap Up To Date Dengan Cara Donasi

Berapapun Donasi Kalian Akan Sangat Berarti!!!

Thanks!

Contact Person Owner:
wa.me/${ownernomer}

    `
}

exports.info = (prefix) =>{
	return`â­ââ ã Bot Info ã 
ââ ${prefix}owner
ââ ${prefix}rules
ââ ${prefix}sc
ââ ${prefix}speed
ââ ${prefix}runtime
ââ ${prefix}infobot
â°â ${prefix}donate
`}

exports.ownermenu = (prefix) =>{
return`â­ââ ã Owner ã 
ââ < evaluate
ââ > evaluate
ââ $ exec
ââ => exec
ââ ${prefix}setmenu [query]
ââ ${prefix}setmenu templateLocation
ââ ${prefix}setmenu templateTenor
ââ ${prefix}setmenu katalog
ââ ${prefix}setmenu katalog2
ââ ${prefix}setmenu list
ââ ${prefix}setwm packname|author
ââ ${prefix}sendsesi
ââ ${prefix}listpc
ââ ${prefix}listgc
ââ ${prefix}broadcast [text]
ââ ${prefix}bc [text]
ââ ${prefix}bcgc [text]
ââ ${prefix}nsfw [on/off]
ââ ${prefix}mute [on/off]
ââ ${prefix}banchat
ââ ${prefix}unbanchat
ââ ${prefix}autorespond [on/off]
ââ ${prefix}antiviewonce [on/off]
ââ ${prefix}join [link]
ââ ${prefix}self
ââ ${prefix}public [only bot]
ââ ${prefix}del [pesan bot]
â°â ${prefix}setppbot [reply image]
`}

exports.database = (prefix) =>{
	return`â­ââ ã Database ã 
ââ ${prefix}setcmd [reply stiker]
ââ ${prefix}delcmd [reply stiker]
ââ ${prefix}listcmd
ââ ${prefix}absen
ââ ${prefix}cekabsen
ââ ${prefix}deleteabsen
ââ ${prefix}absenstart
ââ ${prefix}addmsg [nama file]
ââ ${prefix}getmsg [nama file]
ââ ${prefix}listmsg
â°â ${prefix}delmsg [nama file]
`}

exports.group = (prefix) =>{
	return`â­ââ ã Group ã 
ââ ${prefix}listonline
ââ ${prefix}sider
ââ ${prefix}wm packname|author
ââ ${prefix}infochat
ââ ${prefix}setdesk [text]
ââ ${prefix}setppgrup [reply image]
ââ ${prefix}antilink [on/off]
ââ ${prefix}revoke
ââ ${prefix}leave
ââ ${prefix}add [62***]
ââ ${prefix}kick @tag
ââ ${prefix}leave
ââ ${prefix}linkgc
ââ ${prefix}take packname|author
ââ ${prefix}group [open/close]
ââ ${prefix}tagall [text]
â°â ${prefix}hidetag [text]
`}

exports.anime = (prefix) =>{
	return`â­ââ ã Anime ã 
ââ ${prefix}quotesanime
ââ ${prefix}wallanime
ââ ${prefix}anime [query]
ââ ${prefix}manga [query]
â°â ${prefix}character [query]
`}

exports.tag = (prefix) =>{
	return`â­ââ ã Tag ã 
ââ ${prefix}stickertag
ââ ${prefix}videotag [query]
ââ ${prefix}vntag [query]
â°â ${prefix}imagetag [query]
`}

exports.stalk = (prefix) =>{
	return`â­ââ ã Stalking ã 
ââ ${prefix}igstalk [username]
ââ ${prefix}ghstalk [username]
â°â ${prefix}ytstalk [channel]
`}

exports.search = (prefix) =>{
	return`â­ââ ã Search ã 
ââ ${prefix}ytsearch [query]
ââ ${prefix}wallpaper [query]
ââ ${prefix}google [query]
ââ ${prefix}wikimedia [query]
ââ ${prefix}hentai
ââ ${prefix}wattpad [query]
ââ ${prefix}webtoons [query]
ââ ${prefix}drakor [query]
â°â ${prefix}pinterest [query]
`}

exports.converter = (prefix) =>{
	return`â­ââ ã Converter ã 
ââ ${prefix}toaudio [video]
ââ ${prefix}tomp3 [video]
ââ ${prefix}tovn [video]
ââ ${prefix}stiker [reply image]
ââ ${prefix}tourl [image/video]
ââ ${prefix}togif [sticker]
ââ ${prefix}tomp4 [sticker]
â°â${prefix}toimg [reply sticker]
`}

exports.effect = (prefix) =>{
	return`â­ââ ã Image Effect ã 
ââ ${prefix}wanted [reply image/stiker]
ââ ${prefix}utatoo [reply image/stiker]
ââ ${prefix}unsharpen [reply image/stiker]
ââ ${prefix}thanos [reply image/stiker]
ââ ${prefix}sniper [reply image/stiker]
ââ ${prefix}sharpen [reply image/stiker]
ââ ${prefix}sepia [reply image/stiker]
ââ ${prefix}scary [reply image/stiker]
ââ ${prefix}rip [reply image/stiker]
ââ ${prefix}redple [reply image/stiker]
ââ ${prefix}rejected [reply image/stiker]
ââ ${prefix}posterize [reply image/stiker]
ââ ${prefix}ps4 [reply image/stiker]
ââ ${prefix}pixelize [reply image/stiker]
ââ ${prefix}missionpassed [reply image/stiker]
ââ ${prefix}moustache [reply image/stiker]
ââ ${prefix}lookwhatkarenhave [reply image/stiker]
ââ ${prefix}jail [reply image/stiker]
ââ ${prefix}invert [reply image/stiker]
ââ ${prefix}instagram [reply image/stiker]
ââ ${prefix}greyscale [reply image/stiker]
ââ ${prefix}glitch [reply image/stiker]
ââ ${prefix}gay [reply image/stiker]
ââ ${prefix}frame [reply image/stiker]
ââ ${prefix}fire [reply image/stiker]
ââ ${prefix}distort [reply image/stiker]
ââ ${prefix}dictator [reply image/stiker]
ââ ${prefix}deepfry [reply image/stiker]
ââ ${prefix}ddungeon [reply image/stiker]
ââ ${prefix}circle [reply image/stiker]
ââ ${prefix}challenger [reply image/stiker]
ââ ${prefix}burn [reply image/stiker]
ââ ${prefix}brazzers [reply image/stiker]
â°â ${prefix}beautiful [reply image/stiker]
`}

//
exports.effect2 = (prefix) =>{
	return`â­ââ ã Sticker Effect ã 
ââ ${prefix}jail [reply image/stiker]
ââ ${prefix}red [reply image/stiker]
ââ ${prefix}gay [reply image/stiker]
ââ ${prefix}bloo [reply image/stiker]
ââ ${prefix}blue [reply image/stiker]
ââ ${prefix}sepia [reply image/stiker]
ââ ${prefix}green [reply image/stiker]
ââ ${prefix}glass [reply image/stiker]
ââ ${prefix}invert [reply image/stiker]
ââ ${prefix}blurple [reply image/stiker]
ââ ${prefix}blurple2 [reply image/stiker]
ââ ${prefix}wasted [reply image/stiker]
ââ ${prefix}passed [reply image/stiker]
ââ ${prefix}triggered [reply image/stiker]
ââ ${prefix}comrade [reply image/stiker]
ââ ${prefix}greyscale [reply image/stiker]
ââ ${prefix}threshold [reply image/stiker]
ââ ${prefix}brightness [reply image/stiker]
â°â ${prefix}invertgreyscale [reply image/stiker]
`
}

exports.download = (prefix) =>{
return`â­ââ ã Download ã 
ââ ${prefix}tiktok [link]
ââ ${prefix}tiktoknowm [link]
ââ ${prefix}tiktokwm [link]
ââ ${prefix}tiktokaudio [link]
ââ ${prefix}ytdl [link]
ââ ${prefix}play [query]
ââ ${prefix}ytmp3 [link]
ââ ${prefix}ytshortmp3 [link]
ââ ${prefix}ytmp4 [link]
ââ ${prefix}ytshorts [link]
ââ ${prefix}facebook [link]
ââ ${prefix}facebooksd [link]
ââ ${prefix}facebookhd [link]
ââ ${prefix}fbaudio [link]
ââ ${prefix}igstory [username]
ââ ${prefix}igdl [link]
ââ ${prefix}igphoto [link]
ââ ${prefix}igvideo [link]
ââ ${prefix}igreels [link]
ââ ${prefix}igtv [link]
ââ ${prefix}soundcloud [link]
ââ ${prefix}gitclone [link repo]
ââ ${prefix}gitrepo [username repo branch]
ââ ${prefix}mediafire [link]
â°â ${prefix}twitter link
`
}

exports.ranime = (prefix) =>{
	return`â­ââ ã Random Anime ã
ââ ${prefix}loli
ââ ${prefix}neko
ââ ${prefix}waifu
ââ ${prefix}shinobu
ââ ${prefix}megumin
ââ ${prefix}bully
ââ ${prefix}cuddle
ââ ${prefix}cry
ââ ${prefix}hug
ââ ${prefix}awoo
ââ ${prefix}kiss
ââ ${prefix}lick
ââ ${prefix}pat
ââ ${prefix}smug
ââ ${prefix}bonk
ââ ${prefix}yeet
ââ ${prefix}blush
ââ ${prefix}smile
ââ ${prefix}wave
ââ ${prefix}highfive
ââ ${prefix}handhold
ââ ${prefix}nom
ââ ${prefix}bite
ââ ${prefix}glomp
ââ ${prefix}slap
ââ ${prefix}kill
ââ ${prefix}happy
ââ ${prefix}wink
ââ ${prefix}poke
ââ ${prefix}dance
â°â ${prefix}cringe
`
}

exports.nsfw = (prefix) =>{
	return`â­ââ ã Nsfw & Sfw ã
ââ ${prefix}ahegao
ââ ${prefix}ass
ââ ${prefix}bdsm
ââ ${prefix}blowjob
ââ ${prefix}cuckold
ââ ${prefix}cum
ââ ${prefix}ero
ââ ${prefix}femdom
ââ ${prefix}foot
ââ ${prefix}gangbang
ââ ${prefix}glasses
ââ ${prefix}jahy
ââ ${prefix}manga
ââ ${prefix}masturbation
ââ ${prefix}neko
ââ ${prefix}orgy
ââ ${prefix}panties
ââ ${prefix}pussy
ââ ${prefix}tentacles
ââ ${prefix}thighs
ââ ${prefix}yuri
ââ ${prefix}feet
ââ ${prefix}lewdkemo
ââ ${prefix}woof
ââ ${prefix}gasm
ââ ${prefix}solo
ââ ${prefix}8ball
ââ ${prefix}goose
ââ ${prefix}avatar
ââ ${prefix}hololewd
ââ ${prefix}gecg
ââ ${prefix}holo
ââ ${prefix}fox_girl
ââ ${prefix}tits
ââ ${prefix}eroyuri
ââ ${prefix}holoyero
ââ ${prefix}lizard
ââ ${prefix}keta
ââ ${prefix}eron
ââ ${prefix}erok
ââ ${prefix}kemonomimi
ââ ${prefix}cum_jpg
ââ ${prefix}nsfw_avatar
ââ ${prefix}erofeet
ââ ${prefix}meow
ââ ${prefix}wallpaper
ââ ${prefix}waifu
ââ ${prefix}trap
ââ ${prefix}lewd
ââ ${prefix}pussy_jpg
ââ ${prefix}futanari
ââ ${prefix}lewdk
ââ ${prefix}solog
ââ ${prefix}smug
ââ ${prefix}cum
ââ ${prefix}slap
ââ ${prefix}les
ââ ${prefix}erokemo
ââ ${prefix}bj
ââ ${prefix}pwankg
ââ ${prefix}pat
ââ ${prefix}poke
ââ ${prefix}feed
ââ ${prefix}nsfw_neko_gif
ââ ${prefix}pussy
ââ ${prefix}feetg
ââ ${prefix}baka
ââ ${prefix}hug
ââ ${prefix}kiss
ââ ${prefix}tickle
ââ ${prefix}spank
ââ ${prefix}kuni
ââ ${prefix}classic
ââ ${prefix}boobs
ââ ${prefix}anal
ââ ${prefix}ngif
ââ ${prefix}cuddle
â°â ${prefix}zettai
`
}

exports.textpro = (prefix) =>{
	return`â­ââ ã Textpro Menu ã
ââ ${prefix}halloween2 text|text2
ââ ${prefix}horror text|text2
ââ ${prefix}game8bit text|text2
ââ ${prefix}layered text|text2
ââ ${prefix}glitch2 text|text2
ââ ${prefix}coolg text|text2
ââ ${prefix}coolwg text|text2
ââ ${prefix}realistic text|text2
ââ ${prefix}space3d text|text2
ââ ${prefix}gtiktok text|text2
ââ ${prefix}stone text|text2
ââ ${prefix}marvel text|text2
ââ ${prefix}marvel2 text|text2
ââ ${prefix}pornhub text|text2
ââ ${prefix}avengers text|text2
ââ ${prefix}metalr text|text2
ââ ${prefix}metalg text|text2
ââ ${prefix}metalg2 text|text2
ââ ${prefix}halloween2 text|text2
ââ ${prefix}lion text|text2
ââ ${prefix}wolf_bw text|text2
ââ ${prefix}wolf_g text|text2
ââ ${prefix}ninja text|text2
ââ ${prefix}3dsteel text|text2
ââ ${prefix}horror2 text|text2
ââ ${prefix}lava text|text2
ââ ${prefix}bagel text|text2
ââ ${prefix}blackpink text
ââ ${prefix}rainbow2 text
ââ ${prefix}water_pipe text
ââ ${prefix}halloween text
ââ ${prefix}sketch text
ââ ${prefix}sircuit text
ââ ${prefix}discovery text
ââ ${prefix}metallic2 text
ââ ${prefix}fiction text
ââ ${prefix}demon text
ââ ${prefix}transformer text
ââ ${prefix}berry text
ââ ${prefix}thunder text
ââ ${prefix}magma text
ââ ${prefix}3dstone text
ââ ${prefix}neon text
ââ ${prefix}glitch text
ââ ${prefix}harry_potter text
ââ ${prefix}embossed text
ââ ${prefix}broken text
ââ ${prefix}papercut text
ââ ${prefix}gradient text
ââ ${prefix}glossy text
ââ ${prefix}watercolor text
ââ ${prefix}multicolor text
ââ ${prefix}neon_devil text
ââ ${prefix}underwater text
ââ ${prefix}bear text
ââ ${prefix}wonderfulg text
ââ ${prefix}christmas text
ââ ${prefix}neon_light text
ââ ${prefix}snow text
ââ ${prefix}cloudsky text
ââ ${prefix}luxury2 text
ââ ${prefix}gradient2 text
ââ ${prefix}summer text
ââ ${prefix}writing text
ââ ${prefix}engraved text
ââ ${prefix}summery text
ââ ${prefix}3dglue text
ââ ${prefix}metaldark text
ââ ${prefix}neonlight text
ââ ${prefix}oscar text
ââ ${prefix}minion text
ââ ${prefix}holographic text
ââ ${prefix}purple text
ââ ${prefix}glossyb text
ââ ${prefix}deluxe2 text
ââ ${prefix}glossyc text
ââ ${prefix}fabric text
ââ ${prefix}neonc text
ââ ${prefix}newyear text
ââ ${prefix}newyear2 text
ââ ${prefix}metals text
ââ ${prefix}xmas text
ââ ${prefix}blood text
ââ ${prefix}darkg text
ââ ${prefix}joker text
ââ ${prefix}wicker text
ââ ${prefix}natural text
ââ ${prefix}firework text
ââ ${prefix}skeleton text
ââ ${prefix}balloon text
ââ ${prefix}balloon2 text
ââ ${prefix}balloon3 text
ââ ${prefix}balloon4 text
ââ ${prefix}balloon5 text
ââ ${prefix}balloon6 text
ââ ${prefix}balloon7 text
ââ ${prefix}steel text
ââ ${prefix}gloss text
ââ ${prefix}denim text
ââ ${prefix}decorate text
ââ ${prefix}decorate2 text
ââ ${prefix}peridot text
ââ ${prefix}rock text
ââ ${prefix}glass text
ââ ${prefix}glass2 text
ââ ${prefix}glass3 text
ââ ${prefix}glass4 text
ââ ${prefix}glass5 text
ââ ${prefix}glass6 text
ââ ${prefix}glass7 text
ââ ${prefix}glass8 text
ââ ${prefix}captain_as2 text
ââ ${prefix}robot text
ââ ${prefix}equalizer text
ââ ${prefix}toxic text
ââ ${prefix}sparkling text
ââ ${prefix}sparkling2 text
ââ ${prefix}sparkling3 text
ââ ${prefix}sparkling4 text
ââ ${prefix}sparkling5 text
ââ ${prefix}sparkling6 text
ââ ${prefix}sparkling7 text
ââ ${prefix}decorative text
ââ ${prefix}chocolate text
ââ ${prefix}strawberry text
ââ ${prefix}koifish text
ââ ${prefix}bread text
ââ ${prefix}matrix text
ââ ${prefix}blood2 text
ââ ${prefix}neonligth2 text
ââ ${prefix}thunder2 text
ââ ${prefix}3dbox text
ââ ${prefix}neon2 text
ââ ${prefix}roadw text
ââ ${prefix}bokeh text
ââ ${prefix}gneon text
ââ ${prefix}advanced text
ââ ${prefix}dropwater text
ââ ${prefix}wall text
ââ ${prefix}chrismast text
ââ ${prefix}honey text
ââ ${prefix}drug text
ââ ${prefix}marble text
ââ ${prefix}marble2 text
ââ ${prefix}ice text
ââ ${prefix}juice text
ââ ${prefix}rusty text
ââ ${prefix}abstra text
ââ ${prefix}biscuit text
ââ ${prefix}wood text
ââ ${prefix}scifi text
ââ ${prefix}metalr text
ââ ${prefix}purpleg text
ââ ${prefix}shiny text 
ââ ${prefix}jewelry text
ââ ${prefix}jewelry2 text
ââ ${prefix}jewelry3 text
ââ ${prefix}jewelry4 text
ââ ${prefix}jewelry5 text
ââ ${prefix}jewelry6 text
ââ ${prefix}jewelry7 text
ââ ${prefix}jewelry8 text
ââ ${prefix}metalh text
ââ ${prefix}golden text
ââ ${prefix}glitter text
ââ ${prefix}glitter2 text
ââ ${prefix}glitter3 text
ââ ${prefix}glitter4 text
ââ ${prefix}glitter5 text
ââ ${prefix}glitter6 text
ââ ${prefix}glitter7 text
ââ ${prefix}metale text
ââ ${prefix}carbon text
ââ ${prefix}candy text
ââ ${prefix}metalb text
ââ ${prefix}gemb text
ââ ${prefix}3dchrome text
ââ ${prefix}metalb2 text
ââ ${prefix}metalg text
â°â ${prefix}metalg text
`
}


exports.other = (prefix) =>{
return`â­ââ ã Others ã
ââ ${prefix}emojimix ð+ð¤£
ââ ${prefix}couple
ââ ${prefix}ttp [text]
ââ ${prefix}attp [text]
ââ ${prefix}afk [reason]
ââ ${prefix}translate kode_bahasa text
ââ ${prefix}kalkulator [query]
ââ ${prefix}smeme [text]
ââ ${prefix}smeme2 [text|text]
â°â ${prefix}memegen [text|text]
`
}
exports.game = (prefix) =>{
return`â­ââ ã Game Menu ã
ââ ${prefix}kuismath
ââ ${prefix}family100
ââ ${prefix}tebakkata
ââ ${prefix}tebakgambar
ââ ${prefix}tebakbendera
ââ ${prefix}tebakkalimat
ââ ${prefix}tebaksiapa
ââ ${prefix}tebakkabupaten
ââ ${prefix}tebakkimia
ââ ${prefix}tebaklirik
ââ ${prefix}tebaktebakan
ââ ${prefix}tekateki
ââ ${prefix}susunkata
â°â ${prefix}caklontong
`
}
exports.asupan = (prefix) =>{
return`â­ââ ã Asupan Menu ã
ââ ${prefix}chika
ââ ${prefix}delvira
ââ ${prefix}ayu
ââ ${prefix}bunga
ââ ${prefix}aura
ââ ${prefix}nisa
ââ ${prefix}ziva
ââ ${prefix}yana
ââ ${prefix}viona
ââ ${prefix}syania
ââ ${prefix}riri
ââ ${prefix}syifa
ââ ${prefix}mama_gina
ââ ${prefix}alcakenya
ââ ${prefix}mangayutri
ââ ${prefix}rikagusriani
ââ ${prefix}asupan
ââ ${prefix}bocil
ââ ${prefix}geayubi
ââ ${prefix}santuy
ââ ${prefix}ukhty
â°â ${prefix}syifa
`
}
exports.cecan = (prefix) =>{
return`â­ââ ã Random Cewe ã
ââ ${prefix}china 
ââ ${prefix}indonesia 
ââ ${prefix}malaysia 
ââ ${prefix}thailand 
ââ ${prefix}korea 
ââ ${prefix}japan 
ââ ${prefix}vietnam 
ââ ${prefix}jenni 
ââ ${prefix}jiso 
ââ ${prefix}lisa  
â°â ${prefix}rose
`
}

exports.tqto = () =>{
	return`â­ââ ã TqTo ã 
ââ My God
ââ My Parents
ââ Fatih A.
ââ Ferdi
ââ DikaArdnt
ââ Mhankbarbar
ââ Nurutomo
ââ Rashid
ââ ZeeoneOfc
ââ Penyedia Module
â°â And All Support
`
}

exports.primbonmenu = (prefix) =>{
	return`â­ââ ã Primbon ã
ââ ${prefix}jodohku
ââ ${prefix}jadian
ââ ${prefix}apakah
ââ ${prefix}bisakah
ââ ${prefix}bagaimanakah
ââ ${prefix}rate
ââ ${prefix}gantengcek
ââ ${prefix}cantikcek
ââ ${prefix}sangecek
ââ ${prefix}gaycek
ââ ${prefix}lesbicek
ââ ${prefix}kapankah
ââ ${prefix}wangy
ââ ${prefix}cekmati
ââ ${prefix}halah
ââ ${prefix}hilih
ââ ${prefix}huluh
ââ ${prefix}heleh
ââ ${prefix}holoh
ââ ${prefix}nomorhoki 887435047326
ââ ${prefix}artimimpi [query]
ââ ${prefix}artinama [query]
ââ ${prefix}ramaljodoh
ââ ${prefix}ramaljodohbali
ââ ${prefix}suamiistri
ââ ${prefix}ramalcinta
ââ ${prefix}cocoknama
ââ ${prefix}pasangan
ââ ${prefix}jadiannikah
ââ ${prefix}sifatusaha
ââ ${prefix}rezeki
ââ ${prefix}pekerjaan
ââ ${prefix}nasib
ââ ${prefix}penyakit
ââ ${prefix}tarot
ââ ${prefix}fengshui
ââ ${prefix}haribaik
ââ ${prefix}harisangar
ââ ${prefix}harisial
ââ ${prefix}nagahari
ââ ${prefix}arahrezeki
ââ ${prefix}peruntungan
ââ ${prefix}weton
ââ ${prefix}karakter
ââ ${prefix}keberuntungan
ââ ${prefix}memancing
ââ ${prefix}masasubur
ââ ${prefix}zodiak 
â°â ${prefix}shio [query]
`
}

exports.stcmenu = (prefix) =>{
	return`â­ââ ã Telegram Sticker ã
ââ ${prefix}awoawo
ââ ${prefix}benedict
ââ ${prefix}chat
ââ ${prefix}dbfly
ââ ${prefix}dino_kuning
ââ ${prefix}doge
ââ ${prefix}gojosatoru
ââ ${prefix}hope_boy
ââ ${prefix}jisoo
ââ ${prefix}kr_robot
ââ ${prefix}kucing
ââ ${prefix}lonte
ââ ${prefix}manusia_lidi
ââ ${prefix}menjamet
ââ ${prefix}meow
ââ ${prefix}nicholas
ââ ${prefix}patrick
ââ ${prefix}popoci
ââ ${prefix}sponsbob
ââ ${prefix}kawan_sponsbob
â°â ${prefix}tyni
`}

exports.ephotomenu = (prefix) =>{
	return`â­ââ ã Ephoto360 Menu ã
ââ ${prefix}youtubegold text
ââ ${prefix}youtubesilver text
ââ ${prefix}facebookgold text
ââ ${prefix}facebooksilver text
ââ ${prefix}instagramgold text
ââ ${prefix}instagramsilver text
ââ ${prefix}twittergold text
ââ ${prefix}twittersilver text
ââ ${prefix}retrotext text
ââ ${prefix}halloweenbats text
ââ ${prefix}texthalloween text
ââ ${prefix}cardhalloween text
ââ ${prefix}birthdaycake text
ââ ${prefix}thundertext text
ââ ${prefix}icetext text
ââ ${prefix}milkcake text
ââ ${prefix}snowontext text
ââ ${prefix}metalstar text
ââ ${prefix}dragonfire text
ââ ${prefix}zombie3d text
ââ ${prefix}merrycard text
ââ ${prefix}generalexam text 
ââ ${prefix}viettel text
ââ ${prefix}embroider text
ââ ${prefix}graffititext text
ââ ${prefix}graffititext2 text
ââ ${prefix}graffititext3 text
ââ ${prefix}covergraffiti text
ââ ${prefix}moderngold text
ââ ${prefix}capercut text
ââ ${prefix}lovecard text
ââ ${prefix}heartflashlight text
ââ ${prefix}heartcup text
ââ ${prefix}sunglightshadow text
ââ ${prefix}graffiti3d text
ââ ${prefix}moderngoldsilver text
ââ ${prefix}moderngold2 text
ââ ${prefix}moderngold3 text
ââ ${prefix}fabrictext text
ââ ${prefix}masteryavatar text
ââ ${prefix}messagecoffee text
ââ ${prefix}announofwin text
ââ ${prefix}writeblood text
ââ ${prefix}horrorletter text
ââ ${prefix}writehorror text
ââ ${prefix}shirtclub text
ââ ${prefix}angelwing text
ââ ${prefix}christmasseason text
ââ ${prefix}projectyasuo text
ââ ${prefix}lovelycute text
ââ ${prefix}womansday text
ââ ${prefix}covergamepubg text
ââ ${prefix}nameonheart text
ââ ${prefix}funnyhalloween text
ââ ${prefix}lightningpubg text
ââ ${prefix}greetingcardvideo text 
ââ ${prefix}christmascard text 
ââ ${prefix}galaxybat text
ââ ${prefix}writegalaxy text
ââ ${prefix}starsnight text
ââ ${prefix}noeltext text
ââ ${prefix}textcakes text
ââ ${prefix}pubgbirthday text
ââ ${prefix}galaxywallpaper text
ââ ${prefix}pubgglicthvideo text 
ââ ${prefix}pubgmascotlogo text
ââ ${prefix}realembroidery text
ââ ${prefix}vintagetelevision text
ââ ${prefix}funnyanimations text
ââ ${prefix}glowingtext text
ââ ${prefix}textonglass text
ââ ${prefix}cartoonstyle text
ââ ${prefix}multicolor text
ââ ${prefix}watercolor2 text
ââ ${prefix}textsky text
ââ ${prefix}summerbeach text
ââ ${prefix}1917text text
ââ ${prefix}puppycute text
ââ ${prefix}rosebirthday text
ââ ${prefix}steellettering text|text2
ââ ${prefix}letterstext text|text2
ââ ${prefix}barcashirt text|text2
ââ ${prefix}premiercup text|text2
ââ ${prefix}stylepoligon text|text2
ââ ${prefix}lifebuoys text|text2
â°â ${prefix}juventusshirt text|text2`
}

exports.logomenu = (prefix) =>{
	return`â­ââ ã Logo Menu ã
ââ ${prefix}coverbannerlol text|heroes
ââ ${prefix}pubglogomaker text|style
ââ ${prefix}colorfulpubg text|color
ââ ${prefix}astronotspace text|style
ââ ${prefix}wallpaperaov text|heroes
ââ ${prefix}maketeamlogo text|style
ââ ${prefix}circlemarcotteam text|logo
ââ ${prefix}wallpaperml text|heroes
ââ ${prefix}dragonballfb text|character
ââ ${prefix}bannerofaov text|character
ââ ${prefix}effect3donbeach text|background
ââ ${prefix}cutegirlgamer text|logo
ââ ${prefix}footballteam text|logo
ââ ${prefix}beautifulshimmering text|champion
ââ ${prefix}pubgcutelogo text|logo
ââ ${prefix}elegantrotation text|logo
ââ ${prefix}logogamingassasin text|logo
ââ ${prefix}introvideomaker text|logo
ââ ${prefix}gaminglogo4fvs text|logo
ââ ${prefix}blueneon text|logo
ââ ${prefix}metalmascot text|logo
ââ ${prefix}anonymous text|style
ââ ${prefix}lolpentakill text|style
ââ ${prefix}avatarleagueofking text|style
ââ ${prefix}avatarff text|character
ââ ${prefix}overwatchwallpaper text|character
ââ ${prefix}rovwallpaperhd text|hero
ââ ${prefix}rovwallpaper text|avatar
ââ ${prefix}beautifulgalaxylol text|style
ââ ${prefix}crossfirecover text|character
ââ ${prefix}lolwallpaper text|wallpaper
ââ ${prefix}coverdota2 text|heroes
ââ ${prefix}coverleagueofking text|character
ââ ${prefix}avatar3q360 text|avatar
ââ ${prefix}coverofwarface text|character
ââ ${prefix}newlolavatar text|avatar
ââ ${prefix}csgocover text|background
ââ ${prefix}coverloknew text|hero
ââ ${prefix}coverfblol text|letters
ââ ${prefix}overwatchcover text|hero
ââ ${prefix}crossfirestyle text|avatar
ââ ${prefix}avatarlolbyname text|style
ââ ${prefix}lolcoverbyname text|avatar
ââ ${prefix}cyberhunterfb text|character
ââ ${prefix}coverfreefirefb text|character
ââ ${prefix}gamingmascot text|style
ââ ${prefix}coveronepiecefb text|character
ââ ${prefix}bannerytcsgo text|banner
ââ ${prefix}fbgamepubgcover text|template
ââ ${prefix}banneroflol text|text2|banner
ââ ${prefix}bannerofaov2 text|text2|banner
ââ ${prefix}teamlogo text|text2|background
ââ ${prefix}companylogo2 text|text2|background
ââ ${prefix}companylogo text|text2|background
ââ ${prefix}gradientlogo text|text2|background
ââ ${prefix}pencilsketch text|text2|icon
ââ ${prefix}gunlogogaming text|text2|background
ââ ${prefix}banneroffreefire text|text2|background
ââ ${prefix}letterlogos text|text2|thumb
ââ ${prefix}bannerofoverwatch text|text2|background
ââ ${prefix}bannerofapex text|text2|background
ââ ${prefix}bannerofpubg text|text2|background
ââ ${prefix}mascotstyle text|text2|thumb
ââ ${prefix}logoaccording text|text2|thumb
â°â ${prefix}avataroverwatch text|text2|thumb
`
}

exports.islammenu = (prefix) =>{
	return`â­ââ ã Islamic Menu ã
ââ ${prefix}asmaulhusna
ââ ${prefix}kisahnabi [nabi]
ââ ${prefix}jadwalshalat [daerah]
ââ ${prefix}randomquran
ââ ${prefix}randomquran2
ââ ${prefix}listsurah
ââ ${prefix}tafsirsurah [surah]
â°â ${prefix}alquranaudio [surah|ayat]
`
}

exports.storemenu = (prefix) =>{
	return`â­ââ ã Store Menu ã
ââ ${prefix}list
ââ ${prefix}addlist [key|respond]
ââ ${prefix}dellist [key]
ââ ${prefix}update [key|respond]
ââ ${prefix}store
ââ ${prefix}kali
ââ ${prefix}bagi
ââ ${prefix}tambah
ââ ${prefix}kurang
ââ ${prefix}kalkulator
ââ ${prefix}proses
â°â ${prefix}done
`
}


exports.soundmenu = (prefix) =>{
return`â­ââ ã Sound Menu ã
ââ ${prefix}sound1
ââ ${prefix}sound2
ââ ${prefix}sound3
ââ ${prefix}sound4
ââ ${prefix}sound5
ââ ${prefix}sound6
ââ ${prefix}sound7
ââ ${prefix}sound8
ââ ${prefix}sound9
ââ ${prefix}sound10
ââ ${prefix}sound11
ââ ${prefix}sound12
ââ ${prefix}sound13
ââ ${prefix}sound14
ââ ${prefix}sound15
ââ ${prefix}sound16
ââ ${prefix}sound17
ââ ${prefix}sound18 
ââ ${prefix}sound19
ââ ${prefix}sound20
ââ ${prefix}sound21
ââ ${prefix}sound22
ââ ${prefix}sound23
ââ ${prefix}sound24
ââ ${prefix}sound25
ââ ${prefix}sound26
ââ ${prefix}sound27
ââ ${prefix}sound28
ââ ${prefix}sound29
ââ ${prefix}sound30
ââ ${prefix}sound31
ââ ${prefix}sound32
ââ ${prefix}sound33
ââ ${prefix}sound34
ââ ${prefix}sound35
ââ ${prefix}sound36
ââ ${prefix}sound37
ââ ${prefix}sound38
ââ ${prefix}sound39
ââ ${prefix}sound40
ââ ${prefix}sound41
ââ ${prefix}sound42
ââ ${prefix}sound43
ââ ${prefix}sound44
ââ ${prefix}sound45
ââ ${prefix}sound46
ââ ${prefix}sound47
ââ ${prefix}sound48
ââ ${prefix}sound49
ââ ${prefix}sound50
ââ ${prefix}sound51
ââ ${prefix}sound52
ââ ${prefix}sound53
ââ ${prefix}sound54
ââ ${prefix}sound55
ââ ${prefix}sound56
ââ ${prefix}sound57
ââ ${prefix}sound58
ââ ${prefix}sound59
ââ ${prefix}sound60
ââ ${prefix}sound61
ââ ${prefix}sound62
ââ ${prefix}sound63
ââ ${prefix}sound64
ââ ${prefix}sound65
ââ ${prefix}sound66
ââ ${prefix}sound67
ââ ${prefix}sound68
ââ ${prefix}sound69
â°â ${prefix}sound70
`
}
