// *法BUG产生的原因原来是打了一个txt占用了系统内存,导致MOD管理器无法删除所以越*越多
// 比如我在使用AFJ Sheet工具查看txt时,关闭掉工具才用消除占用,MOD管理器重新INSTALL一下就行了
// gheed 基德(A1赌博)
// charsi 恰西
// akara 阿卡拉
// lysander 雷山德
// drognan 卓格南
// elzix 艾吉斯(A2赌博)
// fara 法拉
// hratli 赫拉鐵力
// alkor 艾柯(A3赌博)
// ormus 奧瑪斯
// asheara 艾席拉
// jamella 賈梅拉(A4赌博)
// halbu 海爾布
// malah 瑪拉
// drehya 安亞(A5赌博)
// larzuk 拉蘇克
// nihlathak 尼拉塞克(A5赌博)

const miscFilename = 'global\\excel\\misc.txt';
const misc = D2RMM.readTsv(miscFilename);
// spawnable PermStoreItem
// A1阿卡拉 AkaraMin AkaraMax
// A2桌格南 DrognanMin DrognanMax
// A3奥玛斯 OrmusMin OrmusMax
// A4贾梅拉 JamellaMin JamellaMax
// A5瑪拉 MalahMin MalahMax
misc.rows.forEach((row) =>
{
    // 出售符文
    if (row.type.match(/rune/) != null)
    {
        // 因为表中code是r01, r02, r03....r32, r33这样的字符
        // 这个substring(1)要注意它支持2个参数或1个参数
        // 字符串索引从0开始，只写1个参数代表截取起点之后的所有字符串
        // 2个参数就可以指定截取字符串的起点和终点-1,比如"Hello world! str.substring(3,7) = "lo w"
        const lvl = row.code.substring(1);
        // 这里是玩家指定的符号编号
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
            row.PermStoreItem = 1; // 购买时不消失永远有货
        }
    }
    // 出售宝石,type2=gem4,代表最高级别的宝石就是完宝包含完美骷髅
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
            row.PermStoreItem = 1; // 购买时不消失永远有货
        }
    }

    // 出售大紫
    // 小紫code=rvs,大紫code=rvl
    // 我的思路本是让普通恶梦难度只卖小紫，到地狱难度才卖大紫,所以rvs的HellUpgrade=rvl
    // 但是发现一个BUG,就是当到达地狱难度后原来的小紫变大紫会只能在NPC处买到1瓶就消失了！所以干脆直接大紫算了
    if (config.allowRev)
    {
        if (row.code.match('rvl') != null)
        {
            row.spawnable = 1;
            row.AkaraMin = 1;
            row.AkaraMax = 1;
            row.LysanderMin = 1 // A2卖药专业户
            row.LysanderMax = 1 // A2卖药专业户
            row.DrognanMin = 1;
            row.DrognanMax = 1;
            row.AlkorMin = 1; // A3卖药专业户
            row.AlkorMax = 1; // A3卖药专业户
            row.OrmusMin = 1;
            row.OrmusMax = 1;
            row.MalahMin = 1;
            row.MalahMax = 1;
            row.JamellaMin = 1;
            row.JamellaMax = 1;
            row.PermStoreItem = 1; // 购买时不消失永远有货
            row.multibuy = 1; // 能批量装满腰带
        }
    }

    // 出售3种红门钥匙
    if (config.allowUKey)
    {
        for (let i = 1; i <= 3; i++)
        {
            if (row.code.match('pk' + i) != null)
            {
                row.spawnable = 1;
                row.type = 'key'; // 这里是修改钥匙能出售的关键
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

    // 出售洗点
    if (config.allowToken)
    {
        if (row.code.match('toa') != null)
        {
            row.spawnable = 1;
            row.type = 'key'; // 这里是修改洗点能出售的关键
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

    // 出售珠宝
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

// A5本来想改拉苏克但是发现了一个BUG, 拉苏克那里手柄不支持大紫的批量购买
// 玛拉的话由于最后一页卖太多的投掷标枪类武器导致格子不够只能修改清除一下了
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

// 维修降价
const npcFilename = 'global\\excel\\npc.txt';
const npc = D2RMM.readTsv(npcFilename);

// “rep-mult”默认值为128。128 1024给出12.5%。这就是repairMultiplier值的来源。
npc.rows.forEach((row) => {
    row['rep mult'] = Math.floor((config.repMult * 1024) / 100);
});

D2RMM.writeTsv(npcFilename, npc);
