const { Client, MessageComponentInteraction, MessageButton, MessageActionRow, MessageEmbed, Message, MessageSelectMenu } = require("discord.js");
module.exports = {
    name: "전쟁시작",
    description: "전쟁을 시작할 때 사용하는 명령어입니다.",
    options: [
        {
            name: "국가1",
            description: "첫번째 국가의 이름을 입력해주세요.",
            type: "STRING"
        },{
            name: "국가2",
            description: "두번째 국가의 이름을 입력해주세요.",
            type: "STRING"
        }, {
            name: "지역",
            description: "전쟁할 지역의 이름을 입력해주세요.",
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
        function delay (delay) {
         var start = new Date().getTime();
         while (new Date().getTime() < start + delay);
                }
        function getRandom(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min; //최댓값도 포함, 최솟값도 포함
     }

        if (!interaction.member.permissions.has("MANAGE_MESSAGES")) return interaction.followUp({content : "<a:no:888743684923863080> 관리자 권한이 필요합니다."});
        if (!args[0]) return interaction.followUp({ content : "<a:no:888743684923863080> 국가1을 입력하지 않으셨습니다. 다시 입력해주세요."})
        if (!args[1]) return interaction.followUp ({ content : '<a:no:888743684923863080> 국가2를 입력하지 않으셨습니다. 다시 입력해주세요.' });

            const WARFIRST_FINISH = new MessageEmbed()
            .setColor("#17988E")
            .setAuthor("| 가상국가전쟁 전쟁시스템", client.user.displayAvatarURL())
            .setTitle("<a:yes:888745318357803008> [전쟁] 전쟁시작")
            .setDescription(`전쟁이 곧 시작됩니다! 3초 후 전쟁이 진행됩니다.`)
            .addField("ㅣ전쟁하는 국가",`${args[0]} vs ${args[1]}`)
            .setTimestamp()
            .setFooter(`${interaction.user.tag} 유저에 의해 요청됨`, interaction.user.displayAvatarURL());
            interaction.followUp({ embeds : [WARFIRST_FINISH] }).then(() => {
                delay(3000);
            })
            const c1 = args[0]
            const c2 = args[1]

            let win1 = 0;
            let win2 = 0;
            let win3 = 0;
            let win4 = 0;
            let win5 = 0;
            let win6 = 0;
            let win7 = 0;
            let win8 = 0;
            let win9 = 0;
            let win10 = 0;
            let numdiff = 0;
            let numdiff0 = 0;
            let numdiff00 = 0;
            let numdiff000 = 0;
            let numdiff0000 = 0;
            let numdiff00000 = 0;
            let numdiff000000 = 0;
            let numdiff0000000 = 0;
            let numdiff00000000 = 0;
            let numdiff000000000 = 0;
            let number1 = getRandom(40, 60); // args[0]에 대한 1차 난수
            let number2 = getRandom(40, 60); // args[1]에 대한 1차 난수
            if(number1>number2) {
              numdiff = number1-number2;
              win1 = c1;
            } if(number2>number1) {
              numdiff = number2-number1;
              win1 = c2;
            }

            let number01 = getRandom(number1-10, number1+10) // args[0]에 대한 2차 난수
            let number02 = getRandom(number2-10, number2+10) // [args[1]에 대한 2차 난수
            if(number01>number02) {
              numdiff0 = number01-number02;
              win2 = c1;
            } if(number02>number01) {
              numdiff0 = number02-number01;
              win2 = c2; }

            let number001 = getRandom(number01-10, number01+10) // args[0]에 대한 3차 난수
            let number002 = getRandom(number02-10, number02+10) // [args[1]에 대한 3차 난수
            if(number001>number002) {
              numdiff00 = number001-number002;
              win3 = c1; }
            if(number002>number001) {
              numdiff00 = number002-number001;
              win3 = c2; }

            let number0001 = getRandom(number001-10, number001+10) // args[0]에 대한 4차 난수
            let number0002 = getRandom(number002-10, number002+10) // [args[1]에 대한 4차 난수
            if(number0001>number0002) {
              numdiff000 = number0001-number0002;
              win4 = c1;
            } if(number0002>number0001) {
              numdiff000 = number0002-number0001;
              win4 = c2; }

            let number00001 = getRandom(number0001-10, number0001+10) // args[0]에 대한 5차 난수
            let number00002 = getRandom(number0002-10, number0002+10) // [args[1]에 대한 5차 난수
            if(number00001>number00002) {
              numdiff0000 = number00001-number00002;
              win5 = c1;
            } if(number00002>number00001) {
              numdiff0000 = number00002-number00001;
              win5 = c2; }

            let number000001 = getRandom(number00001-10, number00001+10) // args[0]에 대한 6차 난수
            let number000002 = getRandom(number00002-10, number00002+10) // [args[1]에 대한 6차 난수
            if(number000001 > 100) number000001 = 100; if(number000002 > 100) number000002 = 100;
            if(number000001 < 0) number000001 = 0; if(number000002 < 0) number000002 = 0;
            if(number000001>number000002) {
              numdiff00000 = number000001-number000002;
               win6 = c1;
            } if(number000002>number000001) {
              numdiff00000 = number000002-number000001;
              win6 = c2; }

            let number0000001 = getRandom(number000001-10, number000001+10) // args[0]에 대한 7차 난수
            let number0000002 = getRandom(number000002-10, number000002+10) // [args[1]에 대한 7차 난수
            if(number0000001 > 100) number0000001 = 100; if(number0000002 > 100) number0000002 = 100;
            if(number0000001 < 0) number0000001 = 0; if(number0000002 < 0) number0000002 = 0;
            if(number0000001>number0000002) {
            numdiff000000 = number0000001-number0000002;
            win7 = c1;
            } if(number0000002>number0000001) {
            numdiff000000 = number0000002-number0000001;
            win7 = c2; }

            let number00000001 = getRandom(number0000001-10, number0000001+10) // args[0]에 대한 8차 난수
            let number00000002 = getRandom(number0000002-10, number0000002+10) // [args[1]에 대한 8차 난수
            if(number00000001 > 100) number00000001 = 100; if(number00000002 > 100) number00000002 = 100;
            if(number00000001 < 0) number00000001 = 0; if(number00000002 < 0) number00000002 = 0;
            if(number00000001>number00000002) {
            numdiff0000000 = number00000001-number00000002;
            win8 = c1;
            } if(number00000002>number00000001) {
            numdiff0000000 = number00000002-number00000001;
            win8 = c2 }

            let number000000001 = getRandom(number00000001-10, number00000001+10) // args[0]에 대한 9차 난수
            let number000000002 = getRandom(number00000002-10, number00000002+10) // [args[1]에 대한 9차 난수
            if(number000000001 > 100) number000000001 = 100; if(number000000002 > 100) number000000002 = 100;
            if(number000000001 < 0) number000000001 = 0; if(number000000002 < 0) number000000002 = 0;
            if(number000000001>number000000002) {
            numdiff00000000 = number000000001-number000000002;
            win9 = c1;
            } if(number000000002>number000000001) {
            numdiff00000000 = number000000002-number000000001;
            win9 = c2 }

            let number0000000001 = getRandom(number000000001-10, number000000001+10) // args[0]에 대한 10차 난수
            let number0000000002 = getRandom(number000000002-10, number000000002+10) // [args[1]에 대한 10차 난수
            if(number0000000001 > 100) number0000000001 = 100; if(number0000000002 > 100) number0000000002 = 100;
            if(number0000000001 < 0) number0000000001 = 0; if(number0000000002 < 0) number0000000002 = 0;
            if(number0000000001>number0000000002) {
              numdiff000000000 = number0000000001-number0000000002;
              win10 = c1;
            } if(number0000000002>number0000000001) {
              numdiff000000000 = number0000000002-number0000000001;
              win10 = c2 }
              const war1 = new MessageEmbed()
                    .setColor("#238195")
                    .setAuthor("가상국가전쟁 전쟁관리시스템", client.user.displayAvatarURL())
                    .setThumbnail(client.user.displayAvatarURL())
                    .setTitle(`전쟁 진행상황`)
                    .addField(`전쟁 우세`, `${win1}`)
                    .addField('\u200B', '\u200B')
                    .addField(`${args[0]}`, `${number1}`, true)
                    .addField(`${args[1]}`, `${number2}`, true)
                    .addField(`격차`, `${numdiff}`, true)
                    .addField(`전쟁 지역`, `${args[2]}`, true)
                    .addField(`진행 횟수`, `1/10(1회차)`, true)
                    .setTimestamp()
                    .setFooter("3초마다 업데이트됩니다. 마지막 수정", client.user.displayAvatarURL());
      
                    const war2 = new MessageEmbed()
                    .setColor("#238195")
                    .setAuthor("가상국가전쟁 전쟁관리시스템", client.user.displayAvatarURL())
                    .setThumbnail(client.user.displayAvatarURL())
                    .setTitle(`전쟁 진행상황`)
                    .addField(`전쟁 우세`, `${win2}`)
                    .addField('\u200B', '\u200B')
                    .addField(`${args[0]}`, `${number01}`, true)
                    .addField(`${args[1]}`, `${number02}`, true)
                    .addField(`격차`, `${numdiff0}`, true)
                    .addField(`전쟁 지역`, `${args[2]}`, true)
                    .addField(`진행 횟수`, `2/10(2회차)`, true)
                    .setTimestamp()
                    .setFooter("3초마다 업데이트됩니다. 마지막 수정", client.user.displayAvatarURL());
      
                    const war3 = new MessageEmbed()
                    .setColor("#238195")
                    .setAuthor("가상국가전쟁 전쟁관리시스템", client.user.displayAvatarURL())
                    .setThumbnail(client.user.displayAvatarURL())
                    .setTitle(`전쟁 진행상황`)
                    .addField(`전쟁 우세`, `${win3}`)
                    .addField('\u200B', '\u200B')
                    .addField(`${args[0]}`, `${number001}`, true)
                    .addField(`${args[1]}`, `${number002}`, true)
                    .addField(`격차`, `${numdiff00}`, true)
                    .addField(`전쟁 지역`, `${args[2]}`, true)
                    .addField(`진행 횟수`, `3/10(3회차)`, true)
                    .setTimestamp()
                    .setFooter("3초마다 업데이트됩니다. 마지막 수정", client.user.displayAvatarURL());
      
                    const war4 = new MessageEmbed()
                    .setColor("#238195")
                    .setAuthor("가상국가전쟁 전쟁관리시스템", client.user.displayAvatarURL())
                    .setThumbnail(client.user.displayAvatarURL())
                    .setTitle(`전쟁 진행상황`)
                    .addField(`전쟁 우세`, `${win4}`)
                    .addField('\u200B', '\u200B')
                    .addField(`${args[0]}`, `${number0001}`, true)
                    .addField(`${args[1]}`, `${number0002}`, true)
                    .addField(`격차`, `${numdiff000}`, true)
                    .addField(`전쟁 지역`, `${args[2]}`, true)
                    .addField(`진행 횟수`, `4/10(4회차)`, true)
                    .setTimestamp()
                    .setFooter("3초마다 업데이트됩니다. 마지막 수정", client.user.displayAvatarURL());
      
                    const war5 = new MessageEmbed()
                    .setColor("#238195")
                    .setAuthor("가상국가전쟁 전쟁관리시스템", client.user.displayAvatarURL())
                    .setThumbnail(client.user.displayAvatarURL())
                    .setTitle(`전쟁 진행상황`)
                    .addField(`전쟁 우세`, `${win5}`)
                    .addField('\u200B', '\u200B')
                    .addField(`${args[0]}`, `${number00001}`, true)
                    .addField(`${args[1]}`, `${number00002}`, true)
                    .addField(`격차`, `${numdiff0000}`, true)
                    .addField(`전쟁 지역`, `${args[2]}`, true)
                    .addField(`진행 횟수`, `5/10(5회차)`, true)
                    .setTimestamp()
                    .setFooter("3초마다 업데이트됩니다. 마지막 수정", client.user.displayAvatarURL());
      
                    const war6 = new MessageEmbed()
                    .setColor("#238195")
                    .setAuthor("가상국가전쟁 전쟁관리시스템", client.user.displayAvatarURL())
                    .setThumbnail(client.user.displayAvatarURL())
                    .setTitle(`전쟁 진행상황`)
                    .addField(`전쟁 우세`, `${win6}`)
                    .addField('\u200B', '\u200B')
                    .addField(`${args[0]}`, `${number000001}`, true)
                    .addField(`${args[1]}`, `${number000002}`, true)
                    .addField(`격차`, `${numdiff00000}`, true)
                    .addField(`전쟁 지역`, `${args[2]}`, true)
                    .addField(`진행 횟수`, `6/10(6회차)`, true)
                    .setTimestamp()
                    .setFooter("3초마다 업데이트됩니다. 마지막 수정", client.user.displayAvatarURL());
      
                    const war7 = new MessageEmbed()
                    .setColor("#238195")
                    .setAuthor("가상국가전쟁 전쟁관리시스템", client.user.displayAvatarURL())
                    .setThumbnail(client.user.displayAvatarURL())
                    .setTitle(`전쟁 진행상황`)
                    .addField(`전쟁 우세`, `${win7}`)
                    .addField('\u200B', '\u200B')
                    .addField(`${args[0]}`, `${number0000001}`, true)
                    .addField(`${args[1]}`, `${number0000002}`, true)
                    .addField(`격차`, `${numdiff000000}`, true)
                    .addField(`전쟁 지역`, `${args[2]}`, true)
                    .addField(`진행 횟수`, `7/10(7회차)`, true)
                    .setTimestamp()
                    .setFooter("3초마다 업데이트됩니다. 마지막 수정", client.user.displayAvatarURL());
      
                    const war8 = new MessageEmbed()
                    .setColor("#238195")
                    .setAuthor("가상국가전쟁 전쟁관리시스템", client.user.displayAvatarURL())
                    .setThumbnail(client.user.displayAvatarURL())
                    .setTitle(`전쟁 진행상황`)
                    .addField(`전쟁 우세`, `${win8}`)
                    .addField('\u200B', '\u200B')
                    .addField(`${args[0]}`, `${number00000001}`, true)
                    .addField(`${args[1]}`, `${number00000002}`, true)
                    .addField(`격차`, `${numdiff0000000}`, true)
                    .addField(`전쟁 지역`, `${args[2]}`, true)
                    .addField(`진행 횟수`, `8/10(8회차)`, true)
                    .setTimestamp()
                    .setFooter("3초마다 업데이트됩니다. 마지막 수정", client.user.displayAvatarURL());
      
                    const war9 = new MessageEmbed()
                    .setColor("#238195")
                    .setAuthor("가상국가전쟁 전쟁관리시스템", client.user.displayAvatarURL())
                    .setThumbnail(client.user.displayAvatarURL())
                    .setTitle(`전쟁 진행상황`)
                    .addField(`전쟁 우세`, `${win9}`)
                    .addField('\u200B', '\u200B')
                    .addField(`${args[0]}`, `${number000000001}`, true)
                    .addField(`${args[1]}`, `${number000000002}`, true)
                    .addField(`격차`, `${numdiff00000000}`, true)
                    .addField(`전쟁 지역`, `${args[2]}`, true)
                    .addField(`진행 횟수`, `9/10(9회차)`, true)
                    .setTimestamp()
                    .setFooter("3초마다 업데이트됩니다. 마지막 수정", client.user.displayAvatarURL());
      
                    const war10 = new MessageEmbed()
                    .setColor("#238195")
                    .setAuthor("가상국가전쟁 전쟁관리시스템", client.user.displayAvatarURL())
                    .setThumbnail(client.user.displayAvatarURL())
                    .setTitle(`전쟁 진행상황`)
                    .addField(`전쟁 우세`, `${win10}`)
                    .addField('\u200B', '\u200B')
                    .addField(`${args[0]}`, `${number0000000001}`, true)
                    .addField(`${args[1]}`, `${number0000000002}`, true)
                    .addField(`격차`, `${numdiff000000000}`, true)
                    .addField(`전쟁 지역`, `${args[2]}`, true)
                    .addField(`진행 횟수`, `10/10(10회차)`, true)
                    .setTimestamp()
                    .setFooter("3초마다 업데이트됩니다. 마지막 수정", client.user.displayAvatarURL());
      
                    const warresult = new MessageEmbed()
                    .setColor("#238195")
                    .setAuthor("가상국가전쟁 전쟁관리시스템")
                    .setThumbnail(client.user.displayAvatarURL())
                    .setTitle(`${args[2]} 지역의 전쟁 결과`)
                    .addField('\u200B', '\u200B')
                    .addField(`${args[0]}`, `${number1} (1회차)\n${number01} (2회차)\n${number001} (3회차)\n${number0001} (4회차)\n${number00001} (5회차)\n${number000001} (6회차)\n${number0000001} (7회차)\n${number00000001} (8회차)\n${number000000001} (9회차)\n\n**${number0000000001}** (10회차/최종)`, true)
                    .addField(`${args[1]}`, `${number2} (1회차)\n${number02} (2회차)\n${number002} (3회차)\n${number0002} (4회차)\n${number00002} (5회차)\n${number000002} (6회차)\n${number0000002} (7회차)\n${number00000002} (8회차)\n${number000000002} (9회차)\n\n**${number0000000002}** (10회차/최종)`, true)
                    .addField(`격차`, `${numdiff} (1회차)\n${numdiff0} (2회차)\n${numdiff00} (3회차)\n${numdiff000} (4회차)\n${numdiff0000} (5회차)\n${numdiff00000} (6회차)\n${numdiff000000} (7회차)\n${numdiff0000000} (8회차)\n${numdiff00000000} (9회차)\n\n**${numdiff000000000}** (10회차/최종)`, true)
                    .addField(`전쟁 결과`, `**${win10}** 승리`, true)
                    .addField(`전쟁 지역`, `${args[2]}`, true);
      
                    interaction.followUp({ embeds : [war1] }).then(interaction => {
                    delay(3000);
                    interaction.edit({ embeds : [war2] }).catch().then(interaction => {
                      delay(3000);
                      interaction.edit({ embeds : [war3] }).catch().then(interaction => {
                        delay(3000);
                        interaction.edit({ embeds : [war4] }).catch().then(interaction => {
                          delay(3000);
                          interaction.edit({ embeds : [war5] }).catch().then(interaction => {
                            delay(3000);
                            interaction.edit({ embeds : [war6] }).catch().then(interaction => {
                              delay(3000);
                              interaction.edit({ embeds : [war7] }).catch().then(interaction => {
                                delay(3000);
                                interaction.edit({ embeds : [war8] }).catch().then(interaction => {
                                  delay(3000);
                                  interaction.edit({ embeds : [war9] }).catch().then(interaction => {
                                    delay(3000);
                                    interaction.edit({ embeds : [war10] }).catch().then(interaction => {
                                      delay(3000);
                                      interaction.edit({ embeds : [warresult] });
                                    })
                                  })
                                })
                              })
                            })
                          })
                        })
                      })
                    })
                  })
                    
                }}