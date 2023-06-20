// *��BUG������ԭ��ԭ���Ǵ���һ��txtռ����ϵͳ�ڴ�,����MOD�������޷�ɾ������Խ*Խ��
// ��������ʹ��AFJ Sheet���߲鿴txtʱ,�رյ����߲�������ռ��,MOD����������INSTALLһ�¾�����
// gheed ����(A1�Ĳ�)
// charsi ǡ��
// akara ������
// lysander ��ɽ��
// drognan ׿����
// elzix ����˹(A2�Ĳ�)
// fara ����
// hratli �����F��
// alkor ����(A3�Ĳ�)
// ormus �W��˹
// asheara ��ϯ��
// jamella �Z÷��(A4�Ĳ�)
// halbu ������
// malah ����
// drehya ����(A5�Ĳ�)
// larzuk ���K��
// nihlathak ��������(A5�Ĳ�)

const miscFilename = 'global\\excel\\misc.txt';
const misc = D2RMM.readTsv(miscFilename);
// spawnable PermStoreItem
// A1������ AkaraMin AkaraMax
// A2������ DrognanMin DrognanMax
// A3����˹ OrmusMin OrmusMax
// A4��÷�� JamellaMin JamellaMax
// A5���� MalahMin MalahMax
misc.rows.forEach((row) =>
{
    // ���۷���
    if (row.type.match(/rune/) != null)
    {
        // ��Ϊ����code��r01, r02, r03....r32, r33�������ַ�
        // ���substring(1)Ҫע����֧��2��������1������
        // �ַ���������0��ʼ��ֻд1�����������ȡ���֮��������ַ���
        // 2�������Ϳ���ָ����ȡ�ַ����������յ�-1,����"Hello world! str.substring(3,7) = "lo w"
        const lvl = row.code.substring(1);
        // ���������ָ���ķ��ű��
        if (lvl <= config.runesUpTo)
        {
            row.AkaraMin = 1;
            row.AkaraMax = 1;
            row.DrognanMin = 1;
            row.DrognanMax = 1;
            row.OrmusMin = 1;
            row.OrmusMax = 1;
            row.JamellaMin = 1;
            row.JamellaMax = 1;
            row.MalahMin = 1;
            row.MalahMax = 1;
            row.PermStoreItem = 1; // ����ʱ����ʧ��Զ�л�
        }
    }
    // ���۱�ʯ,type2=gem4,������߼���ı�ʯ�����걦������������
    if (config.allowGem)
    {
        if (row.type2.match(/gem4/) != null)
        {
            row.AkaraMin = 1;
            row.AkaraMax = 1;
            row.DrognanMin = 1;
            row.DrognanMax = 1;
            row.OrmusMin = 1;
            row.OrmusMax = 1;
            row.JamellaMin = 1;
            row.JamellaMax = 1;
            row.MalahMin = 1;
            row.MalahMax = 1;
            row.PermStoreItem = 1; // ����ʱ����ʧ��Զ�л�
        }
    }

    // ���۴���
    // С��code=rvs,����code=rvl
    // �ҵ�˼·��������ͨ�����Ѷ�ֻ��С�ϣ��������ѶȲ�������,����rvs��HellUpgrade=rvl
    // ���Ƿ���һ��BUG,���ǵ���������ѶȺ�ԭ����С�ϱ���ϻ�ֻ����NPC����1ƿ����ʧ�ˣ����Ըɴ�ֱ�Ӵ�������
    if (config.allowRev)
    {
        if (row.code.match('rvl') != null)
        {
            row.spawnable = 1;
            row.AkaraMin = 1;
            row.AkaraMax = 1;
            row.LysanderMin = 1 // A2��ҩרҵ��
            row.LysanderMax = 1 // A2��ҩרҵ��
            row.DrognanMin = 1;
            row.DrognanMax = 1;
            row.AlkorMin = 1; // A3��ҩרҵ��
            row.AlkorMax = 1; // A3��ҩרҵ��
            row.OrmusMin = 1;
            row.OrmusMax = 1;
            row.MalahMin = 1;
            row.MalahMax = 1;
            row.JamellaMin = 1;
            row.JamellaMax = 1;
            row.PermStoreItem = 1; // ����ʱ����ʧ��Զ�л�
            row.multibuy = 1; // ������װ������
        }
    }

    // ����3�ֺ���Կ��
    if (config.allowUKey)
    {
        for (let i = 1; i <= 3; i++)
        {
            if (row.code.match('pk' + i) != null)
            {
                row.spawnable = 1;
                row.type = 'key'; // �������޸�Կ���ܳ��۵Ĺؼ�
                row.AkaraMin = 1;
                row.AkaraMax = 1;
                row.DrognanMin = 1;
                row.DrognanMax = 1;
                row.OrmusMin = 1;
                row.OrmusMax = 1;
                row.JamellaMin = 1;
                row.JamellaMax = 1;
                row.MalahMin = 1;
                row.MalahMax = 1;
                row.PermStoreItem = 1;
            }
        }
    }

    // ����ϴ��
    if (config.allowToken)
    {
        if (row.code.match('toa') != null)
        {
            row.spawnable = 1;
            row.type = 'key'; // �������޸�ϴ���ܳ��۵Ĺؼ�
            row.AkaraMin = 1;
            row.AkaraMax = 1;
            row.DrognanMin = 1;
            row.DrognanMax = 1;
            row.OrmusMin = 1;
            row.OrmusMax = 1;
            row.JamellaMin = 1;
            row.JamellaMax = 1;
            row.MalahMin = 1;
            row.MalahMax = 1;
            row.PermStoreItem = 1;
        }
    }

    // �����鱦
    if (config.allowJewel)
    {
        if (row.code.match('jew') != null)
        {
            row.spawnable = 1;
            row.AkaraMin = 1;
            row.AkaraMax = 1;
            row.DrognanMin = 1;
            row.DrognanMax = 1;
            row.OrmusMin = 1;
            row.OrmusMax = 1;
            row.JamellaMin = 1;
            row.JamellaMax = 1;
            row.MalahMin = 1;
            row.MalahMax = 1;
            row.PermStoreItem = 1;
        }
    }
});
D2RMM.writeTsv(miscFilename, misc);

// A5����������տ˵��Ƿ�����һ��BUG, ���տ������ֱ���֧�ִ��ϵ���������
// �����Ļ��������һҳ��̫���Ͷ����ǹ���������¸��Ӳ���ֻ���޸����һ����
const weaponsFilename = 'global\\excel\\weapons.txt';
const weapons = D2RMM.readTsv(weaponsFilename);

weapons.rows.forEach((row) =>
{
    const type = row['type'];
    if (type === 'jave' || type === 'taxe' || type === 'tkni')
    {
        row['MalahMin'] = 0;
        row['MalahMax'] = 0;
        row['MalahMagicMin'] = '';
        row['MalahMagicMax'] = '';
    }
});

D2RMM.writeTsv(weaponsFilename, weapons);

// ά�޽���
const npcFilename = 'global\\excel\\npc.txt';
const npc = D2RMM.readTsv(npcFilename);

// ��rep-mult��Ĭ��ֵΪ128��128 1024����12.5%�������repairMultiplierֵ����Դ��
npc.rows.forEach((row) => {
    row['rep mult'] = Math.floor((config.repMult * 1024) / 100);
});

D2RMM.writeTsv(npcFilename, npc);
