//const experienceFilename = 'global\\excel\\experience.txt';
//const experience = D2RMM.readTsv(experienceFilename);

//experience.rows.forEach((row) => {
//    // MaxLvl行是最高等级上限，千万别乱改，默认是99
//    // 发现了一个改经验的问题，千万不能改每级所需经验的最大值
//    // 不然当玩家先把经验倍数改小时又改大时，角色的等级会突然从高等级回退到低等级
//    // 并导致属性点和技能点又保留下来就不是一个合法的正常角色了
//    // 这个表的最后一列ExpRatio竟然用代码改不了无语了，其他列都能改
//    // 感觉就是最后一列直接被内部给忽略了，但是尴尬啊
//});

//D2RMM.writeTsv(experienceFilename, experience);

// 所以改experience.txt文件的方案废弃采用改Monstats.txt文件来实现增加怪物经验的倍数

// 注意:杀死1只怪物的经验是通过
// MonLvl.txt的L-XP列 * Monstats.txt的Exp列 / 100 公式来实现的
// 由于MonLvl.txt的L-XP列是为最后一列无法代码获取,所以修改Monstats.txt的Exp列就行了

// 杀死1只怪的经验倍数
if (config.exp_mul !== 1) {
  const monstatsFilename = 'global\\excel\\monstats.txt';
  const monstats = D2RMM.readTsv(monstatsFilename);
  monstats.rows.forEach((row) => {
    row['Exp'] *= config.exp_mul;
    row['Exp(N)'] *= config.exp_mul;
    row['Exp(H)'] *= config.exp_mul;
  });
  D2RMM.writeTsv(monstatsFilename, monstats);
}
const levelsFilename = 'global\\excel\\levels.txt';
const levels = D2RMM.readTsv(levelsFilename);

// *法BUG产生的原因原来是打了一个txt占用了系统内存,导致MOD管理器无法删除所以越*越多
// 关闭掉txt占用,MOD管理器重新INSTALL一下就行了

function SetData(row, colName) {
  if (row[colName] !== '') {
    row[colName] = Math.floor(row[colName] * config.monsterMultiplier);
  }
}

levels.rows.forEach((row) => {
  SetData(row, 'MonDen');
  SetData(row, 'MonDen(N)');
  SetData(row, 'MonDen(H)');

  SetData(row, 'MonUMin');
  SetData(row, 'MonUMax');

  SetData(row, 'MonUMin(N)');
  SetData(row, 'MonUMax(N)');

  SetData(row, 'MonUMin(H)');
  SetData(row, 'MonUMax(H)');
});

D2RMM.writeTsv(levelsFilename, levels);


