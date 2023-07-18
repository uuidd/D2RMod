const skillsFileName = 'global\\excel\\skills.txt';
const skills = D2RMM.readTsv(skillsFileName);

// Param1默认值为750，25为1秒，因此750/25=30秒
// 540 25=13500是9分钟


skills.rows.forEach((row) => {

  // 野蛮人
  if (row.charclass === 'bar') {
    // 更改战斗命令和战斗指挥持续时间 750 默认30秒
    if (row.skilldesc === 'battle orders' || row.skilldesc === 'battle command') {
      row.Param1 = config.bo * 25;
    }
    // 大吼 持续时间 750 默认30秒
    if (row.skilldesc === 'shout'){
      row.Param3 = config.bo * 25;
    }
    if (row.skilldesc === 'battle cry') {
      // 战嗥 300 默认12秒
      row.Param1 = config.bc * 25;
    }
    if (row.skilldesc === 'frenzy') {
      // 狂乱 150 默认6秒
      row.Param7 = config.frenzy * 25;
    }
  }

  // 刺客
  if (row.charclass === 'ass') {
    // 刺客聚气持续时间
    if (row.Param3 === '375') {
      row.Param3 = config.gas * 25;
    }
    if (row.auralencalc === '375') {
      row.auralencalc = config.gas * 25;
    }
    if (config.calc1) {
      if (row.calc1 === 'lvl*3') {
        row.calc1 = 50;
      }
    }
    // 影散 基础3000 120秒
    if (row.skilldesc === 'fade') {
      row.Param5 = config.ass * 25;
    }
    // 速度爆发 基础3000 120秒
    if (row.skilldesc === 'quickness') {
      row.Param5 = config.ass * 25;
    }
    // 淬毒 基础3000 120秒
    if (row.skilldesc === 'venom') {
      row.Param1 = config.ass * 25;
    }
    // 利刃之盾 基础3000 120秒
    if (row.skilldesc === 'blade shield') {
      row.Param1 = config.ass * 25;
    }
  }
  // 法师
  // 基础都是3600 也就是144秒
  if (row.charclass === 'sor') {
    // 寒冰裝甲
    if (row.skilldesc === 'chilling armor') {
      row.Param3 = config.sor * 25;
    }
    // 碎冰甲
    if (row.skilldesc === 'shiver armor') {
      row.Param3 = config.sor * 25;
    }
    // 冰封甲
    if (row.skilldesc === 'frozen armor') {
      row.Param3 = config.sor * 25;
    }
    // 能量护盾
    if (row.skilldesc === 'energy shield') {
      row.Param1 = config.sor * 25;
    }
    // 附魔
    if (row.skilldesc === 'enchant') {
      row.Param1 = config.sor * 25;
    }
  }
  // 圣骑士
  if (row.charclass === 'pal') {
    // 神圣之盾 基础750 30秒
    if (row.skilldesc === 'holy shield') {
      row.Param1 = config.pal * 25;
    }
  }
  // 德鲁伊
  if (row.charclass === 'dru') {
    // 变形术(变熊) 变形术(变狼) 基础1000 40秒
    if (row.skilldesc === 'shape shifting') {
      row.Param1 = config.dru * 25;
    }
  }
  // 死灵法师
  if (row.charclass === 'nec') {
    // 默认值 16 则不修改数值
    if (config.necCurses !== 16 && config.necCurses) {
      // 伤害加深 200
      if (row.skilldesc === 'amplify damage') {
        row.Param3 = config.necCurses * 25;
      }
      // 微暗灵视 175
      if (row.skilldesc === 'dim vision') {
        row.Param3 = config.necCurses * 25;
      }
      // 铁处女 300
      if (row.skilldesc === 'iron maiden') {
        row.Param3 = config.necCurses * 25;
      }
      // 削弱 350
      if (row.skilldesc === 'weaken') {
        row.Param3 = config.necCurses * 25;
      }
      // 恐惧 200
      if (row.skilldesc === 'terror') {
        row.Param3 = config.necCurses * 25;
      }
      // 迷亂 250
      if (row.skilldesc === 'confuse') {
        row.Param3 = config.necCurses * 25;
      }
      // 偷取生命 400
      if (row.skilldesc === 'life tap') {
        row.Param3 = config.necCurses * 25;
      }
      // 吸引 300
      if (row.skilldesc === 'attract') {
        row.Param3 = config.necCurses * 25;
      }
      // 衰老 100
      if (row.skilldesc === 'decrepify') {
        row.Param3 = config.necCurses * 25;
      }
      // 降低抵抗 100
      if (row.skilldesc === 'lower resist') {
        row.Param3 = config.necCurses * 25;
      }
    }
    // 骨墙 600
    if (row.skilldesc === 'bone wall') {
      row.Param2 = config.necSkill * 25;
    }
    // 骨牢 600
    if (row.skilldesc === 'bone prison') {
      row.Param2 = config.necSkill * 25;
    }
    // 重生 4500 180秒
    if (row.skilldesc === 'revive') {
      row.Param3 = config.necRevive * 25;
    }
  }

});

D2RMM.writeTsv(skillsFileName, skills);
