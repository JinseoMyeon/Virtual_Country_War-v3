const { Client, MessageComponentInteraction, MessageButton, MessageActionRow, MessageEmbed, Message, MessageSelectMenu } = require("discord.js");

module.exports = {
    name: "영토신청",
    description: "영토를 신청할 때 사용하는 명령어입니다.",
    options: [
        {
            name: "지역",
            description: "지역 이름을 입력해주세요.",
            type: "STRING"
        }
    ],

    /**
     * 
     * @param {Client} client 
     * @param {*} interaction
     * @param {*} args 
     * @param {Message} message
     */

    run: async (client, interaction, args, message) => {
        if (!args[0]) return interaction.followUp ({ content : '<a:no:888743684923863080> 지역을 입력하지 않으셨습니다. 다시 입력해주세요.' });
        const admin = client.users.cache.find(user => user.id === '391417643418255372')
        const adminalt = client.users.cache.find(user => user.id === '312182033101094913')
        const author = interaction.user.username

            const LAND_FINISH = new MessageEmbed()
            .setColor("#17988E")
            .setAuthor("| 가상국가전쟁", client.user.displayAvatarURL())
            .setTitle("<a:yes:888745318357803008> [영토] 영토 신청")
            .setDescription(`정상적으로 신청이 완료되었습니다!\n관리자가 확인 후 지도에 처리할 예정입니다.`)
            .addField("ㅣ신청한 지역",args[0])
            .setThumbnail("https://i.imgur.com/e7PBcBy.png")
            .setTimestamp()
            .setFooter(`${interaction.user.tag} 유저에 의해 요청됨`, interaction.user.displayAvatarURL());
            const locale = args[0]
            interaction.followUp({ embeds : [LAND_FINISH] }).then(args => {
                const NEW_LAND = new MessageEmbed()
                .setColor("#17988E")
                .setAuthor("| 가상국가전쟁 영토신청", client.user.displayAvatarURL())
                .setTitle(`${author} 님의 영토신청`)
                .setDescription(`<a:yes:888745318357803008> - 영토신청을 지도에 반영\n<a:maybe:919486436548411463> - 영토 신청 확인, 지도에 미반영\n<a:no:888743684923863080> - 이미 획득한 지역이거나 거절`)
                .addField("> 신청한 지역",`> ${locale}`)
                .setThumbnail("https://i.imgur.com/e7PBcBy.png")
                .setTimestamp()
                .setFooter(`${interaction.user.tag} 유저에 의해 요청됨`, interaction.user.displayAvatarURL());
                admin.send({ embeds : [NEW_LAND] }).then(message => {
                    message.react("<a:yes:888745318357803008>").then(() => {
                        message.react("<a:maybe:919486436548411463>").then(() => {
                            message.react("<a:no:888743684923863080>")
                        })
                    })
                })
                adminalt.send({ embeds : [NEW_LAND] }).then(message => {
                    message.react("<a:yes:888745318357803008>").then(() => {
                        message.react("<a:maybe:919486436548411463>").then(() => {
                            message.react("<a:no:888743684923863080>")
                        })
                    })
                })
                
                
            })
        }
    }