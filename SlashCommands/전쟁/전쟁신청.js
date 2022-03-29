const { Client, MessageComponentInteraction, MessageButton, MessageActionRow, MessageEmbed, Message, MessageSelectMenu } = require("discord.js");

module.exports = {
    name: "전쟁신청",
    description: "전쟁을 신청할 때 사용하는 명령어입니다.",
    options: [
        {
            name: "국가",
            description: "지역 이름을 입력해주세요.",
            type: "STRING"
        },{
            name: "지역",
            description: "공격할 지역의 이름을 입력해주세요",
            type: "STRING"
        },
    ],

    /**
     * 
     * @param {Client} client 
     * @param {*} interaction
     * @param {*} args 
     * @param {Message} message
     */

    run: async (client, interaction, args, message) => {
        if (!args[0]) return interaction.followUp({ content : "<a:no:888743684923863080> 국가, 지역을 입력하지 않으셨습니다. 다시 입력해주세요."})
        if (!args[1]) return interaction.followUp ({ content : '<a:no:888743684923863080> 지역을 입력하지 않으셨습니다. 다시 입력해주세요.' });
        const admin = client.users.cache.find(user => user.id === '391417643418255372')
        const adminalt = client.users.cache.find(user => user.id === '312182033101094913')
        const author = interaction.user.username

            const WARFIRST_FINISH = new MessageEmbed()
            .setColor("#e61e2b")
            .setAuthor("| 가상국가전쟁", client.user.displayAvatarURL())
            .setTitle("<a:yes:888745318357803008> [전쟁] 전쟁 최초신청")
            .setDescription(`정상적으로 신청이 완료되었습니다!\n관리자가 확인 후 전쟁을 진행할 예정입니다.`)
            .addField("> 전쟁을 신청한 지역",`> ${args[1]}(${args[0]} 소유)`)
            .setTimestamp()
            .setFooter(`${interaction.user.tag} 유저에 의해 요청됨`, interaction.user.displayAvatarURL());
            
            const warcountry = args[0]
            const locale = args[1]

            interaction.followUp({ embeds : [WARFIRST_FINISH] }).then(args => {
                const NEW_WAR = new MessageEmbed()
                .setColor("#e61e2b")
                .setAuthor("| 가상국가전쟁 전쟁신청", client.user.displayAvatarURL())
                .setTitle(`${author} 님의 전쟁신청`)
                .setDescription(`${warcountry} 국가의 ${locale} 지역에 전쟁을 선포했습니다.\n빠른 시일 내에 #전쟁 채널에서 전쟁을 시작하세요.`)
                .addField("> 전쟁신청 지역",`> ${locale}(${warcountry} 소유)`)
                .setTimestamp()
                .setFooter(`${interaction.user.tag} 유저에 의해 요청됨`, interaction.user.displayAvatarURL());
                admin.send({ embeds : [NEW_WAR] });
                adminalt.send({ embeds : [NEW_WAR] });
            })
        }
    }