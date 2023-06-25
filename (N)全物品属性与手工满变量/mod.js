const EXCLUDE_CODES = [
    // add skill points to class
    // value is class
    'randclassskill',
    // add skill points to specific skill
    // value is skill
    'skill-rand',
    // param = spell, min = charges, max = level
    // min/max can also be nagative: https://d2mods.info/forum/viewtopic.php?p=67042&highlight=magicsuffix+charged#67042
    'charged',
    // cast skill on action
    // param = spell, min = chance, max = level
    'att-skill',
    'death-skill',
    'gethit-skill',
    'hit-skill',
    'kill-skill',
    'levelup-skill',
    // variable damage affixes (e.g. +15-45 cold damage, randomized on each hit)
    // param = spell, min = min damage, max = max damage
    'dmg-fire',
    'dmg-ltng',
    'dmg-mag',
    'dmg-cold',
    'dmg-pois',
    'dmg-throw',
    'dmg-norm',
    'dmg-elem',
];

function UpdateRow(row, codeKey, minKey, maxKey)
{
    const code = row[codeKey];
    const minValue = +row[minKey];
    const maxValue = +row[maxKey];

    if (EXCLUDE_CODES.indexOf(code) === -1 && minValue < maxValue)
    {
        row[minKey] = row[maxKey];
    }
}

// ����֮��������޸�
const runesFilename = 'global\\excel\\runes.txt';
const runes = D2RMM.readTsv(runesFilename);
runes.rows.forEach((row) =>
{
    UpdateRow(row, 'T1Code1', 'T1Min1', 'T1Max1');
    UpdateRow(row, 'T1Code2', 'T1Min2', 'T1Max2');
    UpdateRow(row, 'T1Code3', 'T1Min3', 'T1Max3');
    UpdateRow(row, 'T1Code4', 'T1Min4', 'T1Max4');
    UpdateRow(row, 'T1Code5', 'T1Min5', 'T1Max5');
    UpdateRow(row, 'T1Code6', 'T1Min6', 'T1Max6');
    UpdateRow(row, 'T1Code7', 'T1Min7', 'T1Max7');
});
D2RMM.writeTsv(runesFilename, runes);

// ���automagic�ļ���Ӧ����automod��׺
// automod����
// ����ѷ�Ĺ�, ì, ��ǹ�����+3����(�������ֻ��+2)
// ��ʦ�����������+1~80����,+1~60����(�����ܳ�61~80����41~60��������ߵ�)
// ʥ��ʿ���Ƶ�+5~45ȫ��,+15~121������,+10%~65%�˺�(�����ܳ�35~45ȫ������ߵ�)
// ������Ƶ�+2~50����(�����ܳ�20~50���˵���ߵ�)(�ļ���ʾΪ128�����Ƕ��˻����ԭ��ʵ��Ӧ�þ���50)
function ModMaxlevel(row, group, mod1code, level, maxleve)
{
    if (row.group === group && row.level === level && row.mod1code === mod1code)
    {
        row['maxlevel'] = maxleve;
    }
}

const automagicFilename = 'global\\excel\\automagic.txt';
const automagic = D2RMM.readTsv(automagicFilename);
automagic.rows.forEach((row) =>
{
    UpdateRow(row, 'mod1code', 'mod1min', 'mod1max');
    UpdateRow(row, 'mod2code', 'mod2min', 'mod2max');
    UpdateRow(row, 'mod3code', 'mod3min', 'mod3max');

    // N��ԭ���ߵ��޸���ϣ���ø��ֵ�λ�Ĵ�׺55�������ּ����������
    // �������޸�Ϊֻ��������ֵ�λ(Ϊ���չ�һ������ĺϷ���)
    if (config.equalchances) 
    {
        // make all variants of the mod equally likely rather than
        // low level variants appearing more frequently
        row.frequency = 1;

        // ����1������,automod�޸�spawnable��version���޷�ʵ�����ε��͵�λ��׺
        // �޸�frequencyΪ0ʱ����ʵ������,���ǿ��ܸ�maxlevel���Ӻ���
        // maxlevel������Ʒ�ȼ�������ֵʱ��������ִ˴�׺
        // Ҳ����˵�ߵ���Ʒ�ߴ�׺���͵���Ʒ�ʹ�׺
        ModMaxlevel(row, 300, 'skilltab', 1, 39);
        ModMaxlevel(row, 301, 'skilltab', 1, 39);
        ModMaxlevel(row, 302, 'skilltab', 1, 39);

        ModMaxlevel(row, 303, 'hp', 1,  10);
        ModMaxlevel(row, 303, 'hp', 11, 26);
        ModMaxlevel(row, 303, 'hp', 27, 42);
        ModMaxlevel(row, 303, 'hp', 43, 58);
        ModMaxlevel(row, 303, 'mana', 3, 11);
        ModMaxlevel(row, 303, 'mana', 12, 22);
        ModMaxlevel(row, 303, 'mana', 23, 33);
        ModMaxlevel(row, 303, 'mana', 34, 44);
        ModMaxlevel(row, 303, 'mana', 45, 55);

        ModMaxlevel(row, 304, 'res-all', 1, 17);
        ModMaxlevel(row, 304, 'res-all', 18, 27);
        ModMaxlevel(row, 304, 'res-all', 28, 38);
        ModMaxlevel(row, 304, 'att', 10, 17);
        ModMaxlevel(row, 304, 'att', 18, 29);
        ModMaxlevel(row, 304, 'att', 30, 41);
        ModMaxlevel(row, 304, 'att', 42, 49);

        ModMaxlevel(row, 305, 'pois-min', 1, 14);
        ModMaxlevel(row, 305, 'pois-min', 15, 24);
    }
});
D2RMM.writeTsv(automagicFilename, automagic);

// ���������޸�
if (config.uniitem)
{
    const uniqueitemsFilename = 'global\\excel\\uniqueitems.txt';
    const uniqueitems = D2RMM.readTsv(uniqueitemsFilename);
    uniqueitems.rows.forEach((row) =>
    {
        UpdateRow(row, 'prop1', 'min1', 'max1');
        UpdateRow(row, 'prop2', 'min2', 'max2');
        UpdateRow(row, 'prop3', 'min3', 'max3');
        UpdateRow(row, 'prop4', 'min4', 'max4');
        UpdateRow(row, 'prop5', 'min5', 'max5');
        UpdateRow(row, 'prop6', 'min6', 'max6');
        UpdateRow(row, 'prop7', 'min7', 'max7');
        UpdateRow(row, 'prop8', 'min8', 'max8');
        UpdateRow(row, 'prop9', 'min9', 'max9');
        UpdateRow(row, 'prop10', 'min10', 'max10');
        UpdateRow(row, 'prop11', 'min11', 'max11');
        UpdateRow(row, 'prop12', 'min12', 'max12');
    });
    D2RMM.writeTsv(uniqueitemsFilename, uniqueitems);
}

// ��װ�����޸�
if (config.setitem)
{
    const setitemsFilename = 'global\\excel\\setitems.txt';
    const setitems = D2RMM.readTsv(setitemsFilename);
    setitems.rows.forEach((row) =>
    {
        UpdateRow(row, 'prop1', 'min1', 'max1');
        UpdateRow(row, 'prop2', 'min2', 'max2');
        UpdateRow(row, 'prop3', 'min3', 'max3');
        UpdateRow(row, 'prop4', 'min4', 'max4');
        UpdateRow(row, 'prop5', 'min5', 'max5');
        UpdateRow(row, 'prop6', 'min6', 'max6');
        UpdateRow(row, 'prop7', 'min7', 'max7');
        UpdateRow(row, 'prop8', 'min8', 'max8');
        UpdateRow(row, 'prop9', 'min9', 'max9');

        // not sure if amin1a/amax1a/etc... should also be equalized
        // they seem to be for the set item affixes, which shouldn't vary
    });
    D2RMM.writeTsv(setitemsFilename, setitems);
}

// ��ǿ���Ե������޸�,+15ed,+3ar,+15�;�
if (config.super)
{
    const qualityitemsFilename = 'global\\excel\\qualityitems.txt';
    const qualityitems = D2RMM.readTsv(qualityitemsFilename);
    qualityitems.rows.forEach((row) =>
    {
        row.mod1min = row.mod1max;
        row.mod2min = row.mod2max;
    });
    D2RMM.writeTsv(qualityitemsFilename, qualityitems);
}


// ħ����׺(ǰ׺+��׺)���޸�
const adjustAffixRow = (row) =>
{
    if (config.blue)
    {
        UpdateRow(row, 'mod1code', 'mod1min', 'mod1max');
        UpdateRow(row, 'mod2code', 'mod2min', 'mod2max');
        UpdateRow(row, 'mod3code', 'mod3min', 'mod3max');

        if (config.equalchances && row.frequency !== '' && row.frequency !== '0')
        {
            // make all variants of the mod equally likely rather than
            // low level variants appearing more frequently
            row.frequency = 1;
        }
    }

    // it would be nice to also be able to modify staffmods (+skill to single skill on class items)
    // but that seems to be hardcoded into D2 without any way to override it from /data/
    // N��ԭ���ߴ˴��޸Ĳ�����1��BUG�ᵼ�¼��ܰ�Ҳ�����+3���ܵķǷ�װ��
    // ԭ����û�ж�itype1==lcha�Ĵ�׺�����ų���,�Ҷ���������׺MOD���������������
    //if (config.skilltab3)
    //{
    //    //if (row.mod1code === 'skilltab')
    //    //{
    //    //    row.mod1min = 3;
    //    //    row.mod1max = 3;
    //    //}
    //    //if (row.mod2code === 'skilltab')
    //    //{
    //    //    row.mod2min = 3;
    //    //    row.mod2max = 3;
    //    //}
    //    //if (row.mod3code === 'skilltab')
    //    //{
    //    //    row.mod3min = 3;
    //    //    row.mod3max = 3;
    //    //}
    //}
};

// �������ļ���Ӧ��ħ����׺(ǰ׺+��׺)���޸�
if (config.blue)
{
    const magicprefixFilename = 'global\\excel\\magicprefix.txt';
    const magicprefix = D2RMM.readTsv(magicprefixFilename);
    magicprefix.rows.forEach(adjustAffixRow);
    D2RMM.writeTsv(magicprefixFilename, magicprefix);

    const magicsuffixFilename = 'global\\excel\\magicsuffix.txt';
    const magicsuffix = D2RMM.readTsv(magicsuffixFilename);
    magicsuffix.rows.forEach(adjustAffixRow);
    D2RMM.writeTsv(magicsuffixFilename, magicsuffix);
}

// �޸Ļ��׵ķ���ֵΪ���ֵ
if (config.defense)
{
    const armorFilename = 'global\\excel\\armor.txt';
    const armor = D2RMM.readTsv(armorFilename);
    armor.rows.forEach((row) =>
    {
        if (+row.maxac > +row.minac)
        {
            row.minac = row.maxac;
        }
    });
    D2RMM.writeTsv(armorFilename, armor);
}

// �޸��ֹ�Ʒ�Ĺ̶���׺Ϊ����
if (config.crafted)
{
    const cubemainFilename = 'global\\excel\\cubemain.txt';
    const cubemain = D2RMM.readTsv(cubemainFilename);
    cubemain.rows.forEach((row) =>
    {
        if (row.output === '"usetype,crf"')
        {
            UpdateRow(row, 'mod 1', 'mod 1 min', 'mod 1 max');
            UpdateRow(row, 'mod 2', 'mod 2 min', 'mod 2 max');
            UpdateRow(row, 'mod 3', 'mod 3 min', 'mod 3 max');
            UpdateRow(row, 'mod 4', 'mod 4 min', 'mod 4 max');
            UpdateRow(row, 'mod 5', 'mod 5 min', 'mod 5 max');
        }
    });
    D2RMM.writeTsv(cubemainFilename, cubemain);
}
