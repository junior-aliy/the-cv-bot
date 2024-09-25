const { bot } = require("../app/app");

const StartCommand = (msg) => {
    bot.sendMessage(msg.chat.id, `
        asSalamu alaykum va rahmatullah,
men sizga ish uchun hujjat tayyorlashga yordam berman.
iltimos pasdagi tugmalardan birin tanlang.
        `)
}

module.exports = {
    StartCommand
}