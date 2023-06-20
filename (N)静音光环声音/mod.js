const statesFilename = 'global\\excel\\states.txt';
const states = D2RMM.readTsv(statesFilename);

//any find & nullify the aura sounds...
states.rows.forEach((row) => {
    if (row.onsound.includes('aura')){
        row.onsound = '';
    }
});


// Buff���ܽ������������ʾ
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
  if (row['*ID'] === id) row.offsound = offsound;
}

if (config.skillOff_sound) {
  // 16�������ļ�����
  D2RMM.copyFile('skill', 'hd\\global\\sfx\\skill', true);

  // sounds�ļ�����16��,����jgmod
  const soundsFilename = 'global\\excel\\sounds.txt';
  const sounds = D2RMM.readTsv(soundsFilename);
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
  D2RMM.writeTsv(soundsFilename, sounds);

  // states.txt�ļ�16��Ч���޸���������Ч
  states.rows.forEach((row) => {
    StatesMod(row, 20, 'chillingarmor_off');//������
    StatesMod(row, 32, 'battleorders_off'); //ս������
    StatesMod(row, 31, 'venom_off');        //�㶾
    StatesMod(row, 30, 'energyshield_off'); //��������
    StatesMod(row, 10, 'frozenarmor_off');  //�����
    StatesMod(row, 16, 'enchant_off');      //��ħ
    StatesMod(row, 101, 'holyshield_off');  //��ʥ֮��
    StatesMod(row, 139, 'morph_off');       //������(����)
    StatesMod(row, 140, 'morph_off');       //������(����)
    StatesMod(row, 26, 'shout_off');        //���
    StatesMod(row, 51, 'battlecommand_off');//ս��ָ��
    StatesMod(row, 14, 'bonearmor_off');    //���ǻ���
    StatesMod(row, 151, 'cyclonearmor_off');//��������
    StatesMod(row, 88, 'shiverarmor_off');  //�����
    StatesMod(row, 159, 'fade_off');        //Ӱɢ
    StatesMod(row, 157, 'burstofspeed_off');//�ٶȱ���
    StatesMod(row, 158, 'bladeshield_off'); //����֮��
  });
  D2RMM.writeTsv(statesFilename, states);
}

// Save changes
D2RMM.writeTsv(statesFilename, states);
