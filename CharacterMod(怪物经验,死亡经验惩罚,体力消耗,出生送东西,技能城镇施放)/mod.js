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

// ȥ������ʱ�ľ���ͷ�
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
    // �ܲ����������ı���
    // RunDrain�ٷ�Ĭ��ֵΪ20,�̿��������15
    if (config.run_drain != 1)
    {
        if (row['class'] !== 'Expansion')
        {
            row['RunDrain'] *= config.run_drain;
        }
    }

    // ����ʱ�͵Ķ���
    // ��ְͬҵ�ĻسǱ�ʶ����λ��������ͬ
    // Ama tsc = item4 isc = item5
    // Sor tsc = item3 isc = item4...
    // item����ƷʱĬ��ֵΪ0��һ����item1~item10��10����Ʒ
    // forEach������returnӰ��
    // �ҵ��سǱ�ʶ�����滻Ϊ��
    // ���﷢��һ������˼�ĵط�itemXcount��ָ�����ܹ��ı�������������ľ�����
    // ����������MOD�޸Ĺ�������ѵ���ʱ������Ҳ��ֱ������,�������count�Ҹ�������Ҫ�޸�
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

    // �ҵ���λ����Ӻ���
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

// ���м��ܶ����ڳ�����ʩ��
const skillsFilename = 'global\\excel\\skills.txt';
const skills = D2RMM.readTsv(skillsFilename);

skills.rows.forEach((row) =>
{
    row.InTown = 1;
});

D2RMM.writeTsv(skillsFilename, skills);