//const experienceFilename = 'global\\excel\\experience.txt';
//const experience = D2RMM.readTsv(experienceFilename);

//experience.rows.forEach((row) => {
//    // MaxLvl������ߵȼ����ޣ�ǧ����Ҹģ�Ĭ����99
//    // ������һ���ľ�������⣬ǧ���ܸ�ÿ�����辭������ֵ
//    // ��Ȼ������ȰѾ��鱶����Сʱ�ָĴ�ʱ����ɫ�ĵȼ���ͻȻ�Ӹߵȼ����˵��͵ȼ�
//    // ���������Ե�ͼ��ܵ��ֱ��������Ͳ���һ���Ϸ���������ɫ��
//    // ���������һ��ExpRatio��Ȼ�ô���Ĳ��������ˣ������ж��ܸ�
//    // �о��������һ��ֱ�ӱ��ڲ��������ˣ��������ΰ�
//});

//D2RMM.writeTsv(experienceFilename, experience);

// ���Ը�experience.txt�ļ��ķ����������ø�Monstats.txt�ļ���ʵ�����ӹ��ﾭ��ı���

// ע��:ɱ��1ֻ����ľ�����ͨ��
// MonLvl.txt��L-XP�� * Monstats.txt��Exp�� / 100 ��ʽ��ʵ�ֵ�
// ����MonLvl.txt��L-XP����Ϊ���һ���޷������ȡ,�����޸�Monstats.txt��Exp�о�����

// ɱ��1ֻ�ֵľ��鱶��
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

// *��BUG������ԭ��ԭ���Ǵ���һ��txtռ����ϵͳ�ڴ�,����MOD�������޷�ɾ������Խ*Խ��
// �رյ�txtռ��,MOD����������INSTALLһ�¾�����

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


