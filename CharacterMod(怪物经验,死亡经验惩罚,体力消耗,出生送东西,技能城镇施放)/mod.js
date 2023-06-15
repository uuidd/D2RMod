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
if (config.exp_mul != 1)
{
    const monstatsFilename = 'global\\excel\\monstats.txt';
    const monstats = D2RMM.readTsv(monstatsFilename);
    monstats.rows.forEach((row) =>
    {
        row['Exp'] *= config.exp_mul;
        row['Exp(N)'] *= config.exp_mul;
        row['Exp(H)'] *= config.exp_mul;
    });
    D2RMM.writeTsv(monstatsFilename, monstats);
}

// 去掉死亡时的经验惩罚
if (config.exp_noPunDeah)
{
    const difficultylevelsFilename = 'global\\excel\\difficultylevels.txt';
    const difficultylevels = D2RMM.readTsv(difficultylevelsFilename);
    difficultylevels.rows.forEach((row) =>
    {
        row['DeathExpPenalty'] = 0;
    });
    D2RMM.writeTsv(difficultylevelsFilename, difficultylevels);
}


const charstatsFilename = 'global\\excel\\charstats.txt';
const charstats = D2RMM.readTsv(charstatsFilename);

charstats.rows.forEach((row) =>
{
    // 跑步的体力消耗倍率
    // RunDrain官方默认值为20,刺客特殊点是15
    if (config.run_drain != 1)
    {
        if (row['class'] !== 'Expansion')
        {
            row['RunDrain'] *= config.run_drain;
        }
    }

    // 出生时送的东西
    // 不同职业的回城辨识卷轴位置有所不同
    // Ama tsc = item4 isc = item5
    // Sor tsc = item3 isc = item4...
    // item无物品时默认值为0，一共是item1~item10共10种物品
    // forEach不会受return影响
    // 找到回城辨识卷轴替换为书
    // 这里发现一个有意思的地方itemXcount是指的书总共的本数不是书里面的卷轴数
    // 并且有其他MOD修改过书的最大堆叠量时，这样也会直接塞满,所以书的count我根本不需要修改
    if (config.replace_tsc_isc)
    {
        for (let i = 1; i < 11; i++)
        {
            const itemKey = row['item' + i];
            if (itemKey.match('tsc') != null)
            {
                row['item' + i] = 'tbk';
            }
            if (itemKey.match('isc') != null)
            {
                row['item' + i] = 'ibk';
            }
        }
    }

    // 找到空位置添加盒子
    if (config.create_box)
    {
        for (let i = 1; i < 11; i++)
        {
            const itemKey = row['item' + i];
            if (itemKey === '0')
            {
                row['item' + i] = 'box';
                row['item' + i + 'count'] = 1;
                return;
            }
        }
    }
});

D2RMM.writeTsv(charstatsFilename, charstats);

// 所有技能都能在城镇中施放
const skillsFilename = 'global\\excel\\skills.txt';
const skills = D2RMM.readTsv(skillsFilename);

skills.rows.forEach((row) =>
{
    row.InTown = 1;
});

D2RMM.writeTsv(skillsFilename, skills);