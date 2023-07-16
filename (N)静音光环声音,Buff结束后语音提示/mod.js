const statesFilename = 'global\\excel\\states.txt';
const states = D2RMM.readTsv(statesFilename);
const soundsFilename = 'global\\excel\\sounds.txt';
const sounds = D2RMM.readTsv(soundsFilename);
// 任何发现&取消光环的声音。。。
if (config.notHaloSound) {
  states.rows.forEach((row) => {
    if (row.onsound.includes('aura')) {
      row.onsound = '';
    }
  });
}


// Buff技能结束后的语音提示
function SoundsPushData(sounds, Sound, index, Channel, FileName) {
  sounds.rows.push({
    'Sound': Sound,
    '*Index': index,
    'Redirect': '',
    'Channel': Channel,
    'FileName': FileName,
    'IsLocal': 0,
    'IsMusic': 0,
    'IsAmbientScene': 0,
    'IsAmbientEvent': 0,
    'IsUI': 0,
    'Volume Min': 255,
    'Volume Max': 255,
    'Pitch Min': 100,
    'Pitch Max': 100,
    'Group Size': 0,
    'Group Weight': 0,
    'Loop': 0,
    'Fade In': 0,
    'Fade Out': 0,
    'Defer Inst': 0,
    'Stop Inst': 0,
    'Duration': 0,
    'Compound': 0,
    'Falloff': 0,
    'LFEMix': 15,
    '3dSpread': 90,
    'Priority': 255,
    'Stream': 0,
    'Is2D': 0,
    'Tracking': 1,
    'Solo': 1,
    'Music Vol': 0,
    'Block 1': -1,
    'Block 2': -1,
    'Block 3': -1,
    'HDOptOut': 0,
    'Delay': 0,
    '4737': ''
  });
}

function StatesMod(row, id, offsound) {
  if (row['*ID'] === ('' + id)) row.offsound = offsound;
}

if (config.skillOff_sound) {
  // 16个语音文件复制
  D2RMM.copyFile('skill', 'hd\\global\\sfx\\skill', true);

  // sounds文件新增16行,来自jgmod

  SoundsPushData(sounds, 'chillingarmor_off', 11399, 'sfx/items_hd', 'skill\\jg\\chillingarmor_off.flac');
  SoundsPushData(sounds, 'battleorders_off', 11400, 'sfx/items_hd', 'skill\\jg\\battleorders_off.flac');
  SoundsPushData(sounds, 'venom_off', 11401, 'sfx/items_hd', 'skill\\jg\\venom_off.flac');
  SoundsPushData(sounds, 'energyshield_off', 11402, 'sfx/items_hd', 'skill\\jg\\energyshield_off.flac');
  SoundsPushData(sounds, 'frozenarmor_off', 11403, 'sfx/items_hd', 'skill\\jg\\frozenarmor_off.flac');
  SoundsPushData(sounds, 'enchant_off', 11404, 'sfx/items_hd', 'skill\\jg\\enchant_off.flac');
  SoundsPushData(sounds, 'holyshield_off', 11405, 'sfx/items_hd', 'skill\\jg\\holyshield_off.flac');
  SoundsPushData(sounds, 'morph_off', 11406, 'sfx/items_hd', 'skill\\jg\\morph_off.flac');
  SoundsPushData(sounds, 'shout_off', 11407, 'sfx/items_hd', 'skill\\jg\\shout_off.flac');
  SoundsPushData(sounds, 'battlecommand_off', 11408, 'sfx/items_hd', 'skill\\jg\\battlecommand_off.flac');
  SoundsPushData(sounds, 'bonearmor_off', 11409, 'sfx/items_hd', 'skill\\jg\\bonearmor_off.flac');
  SoundsPushData(sounds, 'cyclonearmor_off', 11410, 'sfx/items_hd', 'skill\\jg\\cyclonearmor_off.flac');
  SoundsPushData(sounds, 'shiverarmor_off', 11411, 'sfx/items_hd', 'skill\\jg\\shiverarmor_off.flac');
  SoundsPushData(sounds, 'fade_off', 11412, 'sfx/items_hd', 'skill\\jg\\fade_off.flac');
  SoundsPushData(sounds, 'burstofspeed_off', 11413, 'sfx/items_hd', 'skill\\jg\\burstofspeed_off.flac');
  SoundsPushData(sounds, 'bladeshield_off', 11414, 'sfx/items_hd', 'skill\\jg\\bladeshield_off.flac');


  // states.txt文件16个效果修改让声音生效
  states.rows.forEach((row) => {
    StatesMod(row, 20, 'chillingarmor_off');//寒冰甲
    StatesMod(row, 32, 'battleorders_off'); //战斗命令
    // StatesMod(row, 31, 'venom_off');        //淬毒
    StatesMod(row, 30, 'energyshield_off'); //能量护盾
    StatesMod(row, 10, 'frozenarmor_off');  //冰封甲
    StatesMod(row, 16, 'enchant_off');      //附魔
    StatesMod(row, 101, 'holyshield_off');  //神圣之盾
    StatesMod(row, 139, 'morph_off');       //变形术(变狼)
    StatesMod(row, 140, 'morph_off');       //变形术(变熊)
    StatesMod(row, 26, 'shout_off');        //大吼
    StatesMod(row, 51, 'battlecommand_off');//战斗指挥
    // StatesMod(row, 14, 'bonearmor_off');    //骸骨护甲
    StatesMod(row, 151, 'cyclonearmor_off');//气旋护甲
    StatesMod(row, 88, 'shiverarmor_off');  //碎冰甲
    StatesMod(row, 159, 'fade_off');        //影散
    StatesMod(row, 157, 'burstofspeed_off');//速度爆发
    StatesMod(row, 158, 'bladeshield_off'); //利刃之盾
  });
}

// Save changes
D2RMM.writeTsv(statesFilename, states);
D2RMM.writeTsv(soundsFilename, sounds);