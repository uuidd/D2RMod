const soundsFilename = 'global\\excel\\sounds.txt';
const sounds = D2RMM.readTsv(soundsFilename);

let sound = {
  "IsLocal": 0,
  "IsMusic": 0,
  "IsAmbientScene": 0,
  "IsAmbientEvent": 0,
  "IsUI": 0,
  "Volume Min": 255,
  "Volume Max": 255,
  "Pitch Min": 100,
  "Pitch Max": 100,
  "Group Size": 0,
  "Group Weight": 0,
  "Loop": 0,
  "Fade In": 0,
  "Fade Out": 0,
  "Defer Inst": 0,
  "Stop Inst": 0,
  "Duration": 0,
  "Compound": 0,
  "LFEMix": 15,
  "Priority": 255,
  "Stream": 0,
  "Music Vol": 0,
  "Block 1": -1,
  "Block 2": -1,
  "Block 3": -1,
  "HDOptOut": 0,
  "Delay": 0
}

function sound_skill(buff_sound) {
  if (config[buff_sound]) {
    D2RMM.copyFile('buff\\' + buff_sound + '.flac', 'hd\\global\\sfx\\skill\\buff', true);
    sounds.rows.push({
      "Sound": buff_sound,
      "*Index": Math.max(...sounds.rows.map((row) => row['*Index'])) + 1,
      "Redirect": null,
      "Channel": "sfx/items_hd",
      "FileName": "skill\\buff\\" + buff_sound + ".flac",
      "Falloff": 0,
      "3dSpread": 90,
      "Is2D": 0,
      "Tracking": 1,
      "Solo": 1,
      ...sound
    })
  }
}

sound_skill("battlecommand_off"); // 战斗指挥
sound_skill("battleorders_off");  // 战斗命令
sound_skill("bladeshield_off");  // 利刃之盾
sound_skill("bonearmor_off");  // 骸骨护甲
sound_skill("burstofspeed_off");  // 速度爆发
sound_skill("chillingarmor_off");  // 寒冰甲
sound_skill("cyclonearmor_off");  // 气旋护甲
sound_skill("enchant_off");  // 附魔
sound_skill("energyshield_off");  // 能量护盾
sound_skill("fade_off");  // 影散
sound_skill("frozenarmor_off");  // 冰封甲
sound_skill("holyshield_off");  // 神圣之盾
sound_skill("morph_off");  // 变形术
sound_skill("shiverarmor_off");  // 碎冰甲
sound_skill("shout_off");  // 大吼
sound_skill("venom_off");  // 淬毒


if (config.big_runes) {
  D2RMM.copyFile('runes', 'hd\\global\\sfx\\item\\runes', true);
  for (let i = 24; i < 33; i++) {
    sounds.rows.push({
      "Sound": "rune_" + i,
      "*Index": Math.max(...sounds.rows.map((row) => row['*Index'])) + 1,
      "Redirect": null,
      "Channel": "sfx/items_hd",
      "FileName": "item\\runes\\" + i + ".flac",
      "Falloff": 2,
      "3dSpread": 120,
      "Is2D": 1,
      "Tracking": 0,
      "Solo": 0,
      ...sound
    })
  }
}
D2RMM.writeTsv(soundsFilename, sounds);