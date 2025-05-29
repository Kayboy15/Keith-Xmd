const settings = require("../settings");
async function aliveCommand(sock, chatId) {
    try {
        const message = `╭─────『𝙺𝙴𝙸𝚃𝙷-𝚇𝙼𝙳』──────╮
┋ ʜᴇʟʟᴏ ᴍʏ ꜰʀɪᴇɴᴅ ɪ ᴀᴍ ᴋᴇɪᴛʜ-xᴍᴅ ʙᴏᴛ ᴅᴇᴠᴇʟᴏᴘᴇᴅ ʙʏ ᴋᴇɪᴛʜ-ᴛᴇᴄʜ ɪ ᴀᴍ ᴀʟɪᴠᴇ ᴀɴᴅ ʀᴜɴɴɪɴɢ ᴡᴇʟʟ
┋
┋  ᴘɪɴɢ       : ${ping}  *ᴍꜱ*
┋  ᴠᴇʀꜱɪᴏɴ : ᴠ${settings.version}
┋  ᴜᴘᴛɪᴍᴇ  : ${uptimeFormatted}
┋ ᴍʏ ᴄᴏᴜɴᴛʀʏ : ᴢɪᴍʙᴀʙᴡᴇ
╰─────────────────────╯`;

        await sock.sendMessage(chatId, {
            text: message,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363416998900907@newsletter',
                    newsletterName: 'KEITH XMD',
                    serverMessageId: -1
                }
            }
        });
    } catch (error) {
        console.error('Error in alive command:', error);
        await sock.sendMessage(chatId, { text: 'Bot is alive and running!' });
    }
}

module.exports = aliveCommand;