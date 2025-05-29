async function githubCommand(sock, chatId) {
    const repoInfo = `*KEITH XMD*

*📂 GitHub Repository:*
https://github.com/Kayboy15/Keith-Xmd

*📢 Official Channel:*
https://youtube.com/@Kayboy15

_Star ⭐ the repository if you like the bot!_`;

    try {
        await sock.sendMessage(chatId, {
            text: repoInfo,
            contextInfo: {
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '+120363416998900907@newsletter',
                    newsletterName: 'KEITH XMD',
                    serverMessageId: -1
                }
            }
        });
    } catch (error) {
        console.error('Error in github command:', error);
        await sock.sendMessage(chatId, { 
            text: '❌ Error fetching repository information.' 
        });
    }
}

module.exports = githubCommand; 