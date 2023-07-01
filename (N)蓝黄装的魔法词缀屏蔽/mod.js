// 前缀修改
// (1)修改maxlevel让物品低出低高出高但是游戏中实测无效,所以此方案只能放弃
// (2)屏蔽的低级词缀过多,在开荒中低等级场景打出的物品随机不到词缀时游戏会闪退,所以此方案也放弃
// (3)最后唯一能采用的方案就是屏蔽低等级的词缀,并让高等级的词缀level为1
// 虽然这会导致低等级物品出高等词缀但是需求等级还是不变的,所以只有此方案可行
const magicprefixFilename = 'global\\excel\\magicprefix.txt';
const magicprefix = D2RMM.readTsv(magicprefixFilename);

// 直接屏蔽整组词缀函数
function DisGroup(row, group)
{
    if (row.version !== '0' && row.group === ('' + group)) row.spawnable = 0;
}


function DisSkilltab(row, classspecific, mod1param)
{
    if (row.classspecific === classspecific && row.mod1code === 'skilltab' && row.mod1param === ('' + mod1param)) row.spawnable = 0;
}

magicprefix.rows.forEach((row) =>
{
    // 禁用前缀组
    if (config.dis_per101) DisGroup(row, 101);
    // 102魔法伤害降低,官方屏蔽
    // 103最小傷害
    if (config.dis_per103) DisGroup(row, 103);
    // 104+最大伤,只保留珠宝(黄)9max(蓝)15max,板子上的是被官方屏蔽的,610行以下面也有
    if (config.dis_per104)
    {
        if (row.version !== '0' && row.group === '104')
        {
            row.level = 1;
            if (row.itype1 === 'jewl' && row.mod1max < 9) row.spawnable = 0;
            if (row.itype1 !== 'jewl') row.spawnable = 0;
        }
    }
    // 105伤害增强,只保留武器300ed(按等级增加最大傷害(碾壓)),珠宝(黄)30ed(蓝)30~40ed,头环ed词缀会屏蔽,529~532,535行为官方屏蔽,533行为(碾壓)词缀官方保留,最后一行是蓝黄300ed
    if (config.dis_per105)
    {
        if (row.version !== '0' && row.group === '105')
        {
            row.level = 1;
            if (row.itype1 === 'weap' && row.mod1max < 300) row.spawnable = 0;
            if (row.itype1 === 'jewl' && row.mod1max < 30) row.spawnable = 0;
            if (row.itype1 === 'weap' && row.mod1param === '6') row.spawnable = 1;// 533行为(碾壓)词缀官方保留
        }
    }
    // 106无
    if (config.dis_per107) DisGroup(row, 107);
    if (config.dis_per108) DisGroup(row, 108);
    if (config.dis_per109) DisGroup(row, 109);
    if (config.dis_per110) DisGroup(row, 110);
    // 111命中+最大伤,保留小中大板3|6|10max+20|48|76ar,武器(黄)150+250ar(蓝)200+300ar,528行为愚人,539行为鹰眼,541行为幻影,
    if (config.dis_per111)
    {
        if (row.version !== '0' && row.group === '111')
        {
            row.level = 1;
            if (row.mod1code === 'att' && row.itype1 === 'lcha' && row.mod1max < 76) row.spawnable = 0;
            if (row.mod1code === 'att' && row.itype1 === 'mcha' && row.mod1max < 48) row.spawnable = 0;
            if (row.mod1code === 'att' && row.itype1 === 'weap' && row.mod1max < 250) row.spawnable = 0;
        }
    }
    if (config.dis_per112) DisGroup(row, 112);
    if (config.dis_per113) DisGroup(row, 113);
    if (config.dis_per114) DisGroup(row, 114);
    // 115+法力,保留小中大板17|34|59,戒指项链90~120,珠宝的法力被屏蔽
    if (config.dis_per115)
    {
        if (row.version !== '0' && row.group === '115')
        {
            row.level = 1;
            if (row.itype1 === 'lcha' && row.mod1max < 59) row.spawnable = 0;
            if (row.itype1 === 'mcha' && row.mod1max < 34) row.spawnable = 0;
            if (row.itype1 === 'scha' && row.mod1max < 17) row.spawnable = 0;
            if (row.itype1 !== 'scha' && row.itype1 !== 'mcha' && row.itype1 !== 'lcha' && row.mod1max < 90) row.spawnable = 0;
        }
    }
    // 116+全抗,保留小中大板5|8|15,项链头环20~30,戒指11~15,盾牌20~30,珠宝10~15
    if (config.dis_per116)
    {
        if (row.version !== '0' && row.group === '116')
        {
            row.level = 1;
            if (row.itype1 === 'lcha' && row.mod1max < 15) row.spawnable = 0;
            if (row.itype1 === 'mcha' && row.mod1max < 8) row.spawnable = 0;
            if (row.itype1 === 'shld' && row.mod1max < 20) row.spawnable = 0;
            if (row.itype1 === 'amul' && row.mod1max < 20) row.spawnable = 0;//项链头环在一起
            if (row.itype1 === 'ring' && row.mod1max < 11) row.spawnable = 0;
        }
    }
    // 117~120四元素单抗,保留小中大板11|15|30,项链头环鞋30~40,戒指30,珠宝30
    if (config.dis_per117)
    {
        if (row.version !== '0' && row.group === '117')
        {
            row.level = 1;
            if (row.itype1 === 'lcha' && row.mod1max < 30) row.spawnable = 0;
            if (row.itype1 === 'mcha' && row.mod1max < 15) row.spawnable = 0;
            if (row.itype1 === 'scha' && row.mod1max < 11) row.spawnable = 0;
            if (row.itype1 !== 'scha' && row.itype1 !== 'mcha' && row.itype1 !== 'lcha' && row.mod1max < 30) row.spawnable = 0;
        }
        if (row.version !== '0' && row.group === '118')
        {
            row.level = 1;
            if (row.itype1 === 'lcha' && row.mod1max < 30) row.spawnable = 0;
            if (row.itype1 === 'mcha' && row.mod1max < 15) row.spawnable = 0;
            if (row.itype1 === 'scha' && row.mod1max < 11) row.spawnable = 0;
            if (row.itype1 !== 'scha' && row.itype1 !== 'mcha' && row.itype1 !== 'lcha' && row.mod1max < 30) row.spawnable = 0;
        }
        if (row.version !== '0' && row.group === '119')
        {
            row.level = 1;
            if (row.itype1 === 'lcha' && row.mod1max < 30) row.spawnable = 0;
            if (row.itype1 === 'mcha' && row.mod1max < 15) row.spawnable = 0;
            if (row.itype1 === 'scha' && row.mod1max < 11) row.spawnable = 0;
            if (row.itype1 !== 'scha' && row.itype1 !== 'mcha' && row.itype1 !== 'lcha' && row.mod1max < 30) row.spawnable = 0;
        }
        if (row.version !== '0' && row.group === '120')
        {
            row.level = 1;
            if (row.itype1 === 'lcha' && row.mod1max < 30) row.spawnable = 0;
            if (row.itype1 === 'mcha' && row.mod1max < 15) row.spawnable = 0;
            if (row.itype1 === 'scha' && row.mod1max < 11) row.spawnable = 0;
            if (row.itype1 !== 'scha' && row.itype1 !== 'mcha' && row.itype1 !== 'lcha' && row.mod1max < 30) row.spawnable = 0;
        }
    }
    // 121击杀恢复法力,不屏蔽
    // 122鑲孔(珠宝匠),黄装2孔,蓝装2或4孔随机,屏蔽3孔,头还是会出3孔(珠宝匠)
    if (config.dis_per122)
    {
        if (row.version !== '0' && row.group === '122')
        {
            row.level = 1;
            if (row.mod1param === '3') row.spawnable = 0;
        }
    }
    if (config.dis_per123) DisGroup(row, 123);
    // 124无
    // 125单系技能前缀的禁用
    // ama skilltab  0=弓箭  1=被动  2=标枪
    if (config.dis_skilltab_0) DisSkilltab(row, 'ama', 0);
    if (config.dis_skilltab_1) DisSkilltab(row, 'ama', 1);
    if (config.dis_skilltab_2) DisSkilltab(row, 'ama', 2);
    // sor skilltab  3=火焰  4=闪电  5=冰霜
    if (config.dis_skilltab_3) DisSkilltab(row, 'sor', 3);
    if (config.dis_skilltab_4) DisSkilltab(row, 'sor', 4);
    if (config.dis_skilltab_5) DisSkilltab(row, 'sor', 5);
    // nec skilltab  6=诅咒  7=毒骨  8=召唤
    if (config.dis_skilltab_6) DisSkilltab(row, 'nec', 6);
    if (config.dis_skilltab_7) DisSkilltab(row, 'nec', 7);
    if (config.dis_skilltab_8) DisSkilltab(row, 'nec', 8);
    // pal skilltab  9=战斗 10=攻击 11=防御
    if (config.dis_skilltab_9) DisSkilltab(row, 'pal', 9);
    if (config.dis_skilltab_10) DisSkilltab(row, 'pal', 10);
    if (config.dis_skilltab_11) DisSkilltab(row, 'pal', 11);
    // bar skilltab 12=战斗 13=支配 14=呐喊
    if (config.dis_skilltab_12) DisSkilltab(row, 'bar', 12);
    if (config.dis_skilltab_13) DisSkilltab(row, 'bar', 13);
    if (config.dis_skilltab_14) DisSkilltab(row, 'bar', 14);
    // dru skilltab 15=召唤 16=变形 17=元素
    if (config.dis_skilltab_15) DisSkilltab(row, 'dru', 15);
    if (config.dis_skilltab_16) DisSkilltab(row, 'dru', 16);
    if (config.dis_skilltab_17) DisSkilltab(row, 'dru', 17);
    // ass skilltab 18=陷阱 19=影子 20=武学
    if (config.dis_skilltab_18) DisSkilltab(row, 'ass', 18);
    if (config.dis_skilltab_19) DisSkilltab(row, 'ass', 19);
    if (config.dis_skilltab_20) DisSkilltab(row, 'ass', 20);
    //125前缀<+技能>只出2或3,板子+1,黄+2,蓝+3(单系),全职业+2
    if (config.dis_allskill_max)
    {
        if (row.version !== '0' && row.group === '125')
        {
            row.level = 1;
            if (row.itype1 !== 'lcha' && row.mod1max === '1') row.spawnable = 0;
        }
    }
    // 126~136无
    if (config.dis_per137) DisGroup(row, 137);
    if (config.dis_per138) DisGroup(row, 138);
    if (config.dis_per139) DisGroup(row, 139);
    if (config.dis_per140) DisGroup(row, 140);
    if (config.dis_per141) DisGroup(row, 141);// 堆叠數量这词缀目前没什么用,因为亚马逊一般不玩黄标枪,而野蛮人的技能投掷又不怎么消耗数量
    if (config.dis_per142) DisGroup(row, 142);
});

D2RMM.writeTsv(magicprefixFilename, magicprefix);

// 后缀修改
const magicsuffixFilename = 'global\\excel\\magicsuffix.txt';
const magicsuffix = D2RMM.readTsv(magicsuffixFilename);

magicsuffix.rows.forEach((row) =>
{
    // 禁用后缀组
    // 1傷害降低,保留蓝项链+头环的25dr
    if (config.dis_suf1)
    {
        if (row.version !== '0' && row.group === '1')
        {
            row.level = 1;
            if (row.mod1max <25) row.spawnable = 0;
        }
    }
    // 2魔法傷害降低
    if (config.dis_suf2) DisGroup(row, 2);
    // 3四种元素吸收,官方屏蔽
    // 4無視目標防禦
    if (config.dis_suf4) DisGroup(row, 4);
    // 5击中怪物减防御,官方屏蔽
    // 6攻擊者反傷,736行也有
    if (config.dis_suf6) DisGroup(row, 6);
    // 7攻击速度,禁用10攻速,保留手套20,武器20~40,珠宝15,677行也有
    if (config.dis_suf7)
    {
        if (row.version !== '0' && row.group === '7')
        {
            row.level = 1;
            if (row.mod1max < 15) row.spawnable = 0;
        }
    }
    // 8格擋機率+格擋速度,保留20+30偏折之(偏向盾)
    if (config.dis_suf8)
    {
        if (row.version !== '0' && row.group === '8')
        {
            row.level = 1;
            if (row.mod1max < 20) row.spawnable = 0;
        }
    }
    // 9FCR快速施法,不屏蔽
    if (config.dis_suf10) DisGroup(row, 10);// 664行及后面也有
    if (config.dis_suf11) DisGroup(row, 11);
    if (config.dis_suf12) DisGroup(row, 12);// 667行及后面也有
    if (config.dis_suf13) DisGroup(row, 13);// 669行及后面也有
    // 14+最大伤,保留武器(黄)20max,盾戒指项链头环屏蔽,珠宝9~15max,小中大板1|2|4,678行及后面也有
    if (config.dis_suf14)
    {
        if (row.version !== '0' && row.group === '14')
        {
            row.level = 1;
            if (row.itype1 === 'weap' && row.mod1max < 20) row.spawnable = 0;
            if (row.itype1 === 'jewl' && row.mod1max < 9) row.spawnable = 0;
            if (row.itype1 === 'lcha' && row.mod1max < 4) row.spawnable = 0;
            if (row.itype1 === 'mcha' && row.mod1max < 2) row.spawnable = 0;
            if (row.itype1 !== 'weap' && row.itype1 !== 'jewl' && row.itype1 !== 'lcha' && row.itype1 !== 'mcha' && row.itype1 !== 'scha') row.spawnable = 0;
        }
    }
    if (config.dis_suf15) DisGroup(row, 15);
    if (config.dis_suf16) DisGroup(row, 16);// 684行及后面也有
    // 17+敏捷,保留项链远程头环20~30,戒指手套15~20,衣服鞋子9~15,珠宝9,671行及后面也有
    if (config.dis_suf17)
    {
        if (row.version !== '0' && row.group === '17')
        {
            row.level = 1;
            if (row.itype1 === 'amul' && row.mod1max < 20) row.spawnable = 0;
            if (row.itype1 === 'ring' && row.mod1max < 15) row.spawnable = 0;
            if (row.itype1 === 'tors' && row.mod1max < 9) row.spawnable = 0;
            if (row.itype1 === 'boot' && row.mod1max < 9) row.spawnable = 0;// 隐藏在732行
            if (row.itype1 === 'jewl' && row.mod1max < 9) row.spawnable = 0;
        }
    }
    // 18快速打击恢复,不屏蔽
    if (config.dis_suf19) DisGroup(row, 19);// 741行也有
    if (config.dis_suf20) DisGroup(row, 20);
    if (config.dis_suf21) DisGroup(row, 21);
    if (config.dis_suf22) DisGroup(row, 22);
    if (config.dis_suf22) DisGroup(row, 23);// 673行及后面也有
    if (config.dis_suf24) DisGroup(row, 24);
    if (config.dis_suf25) DisGroup(row, 25);// 743行也有
    // 26+生命,保留衣服项链头环60~100,盾牌屏蔽,戒指40,小中大板20|35|45,珠宝屏蔽
    if (config.dis_suf26)
    {
        if (row.version !== '0' && row.group === '26')
        {
            row.level = 1;
            if (row.itype1 === 'tors' && row.mod1max < 60) row.spawnable = 0;
            if (row.itype1 === 'club' && row.mod1max < 40) row.spawnable = 0;
            if (row.itype1 === 'lcha' && row.mod1max < 45) row.spawnable = 0;
            if (row.itype1 === 'lcha' && row.mod1max === '50') row.level = 110;//50血的板子别让它出来了,目前游戏中是打不到的,只是存在而已
            if (row.itype1 === 'mcha' && row.mod1max < 35) row.spawnable = 0;
            if (row.itype1 === 'scha' && row.mod1max < 20) row.spawnable = 0;
            if (row.itype1 !== 'tors' && row.itype1 !== 'club' && row.itype1 !== 'lcha' && row.itype1 !== 'mcha' && row.itype1 !== 'scha') row.spawnable = 0;
        }
    }
    // 27吸血,保留武器5或9,戒指头环8,手套3,项链6,744行及后面也有
    if (config.dis_suf27)
    {
        if (row.version !== '0' && row.group === '27')
        {
            row.level = 1;
            if (row.itype1 === 'mele' && row.mod1max < 9) row.spawnable = 0;
            if (row.itype1 === 'ring' && row.mod1max < 8) row.spawnable = 0;
            if (row.itype1 === 'amul' && row.mod1max < 6) row.spawnable = 0;
        }
    }
    // 28吸蓝,保留武器5或9,项链头环8,手套3,戒指6,747行及后面也有
    if (config.dis_suf28)
    {
        if (row.version !== '0' && row.group === '28')
        {
            row.level = 1;
            if (row.itype1 === 'mele' && row.mod1max < 9) row.spawnable = 0;
            if (row.itype1 === 'amul' && row.mod1max < 8) row.spawnable = 0;
            if (row.itype1 === 'ring' && row.mod1max < 6) row.spawnable = 0;
        }
    }
    // 29中毒时间缩短,
    if (config.dis_suf29)
    {
        if (row.version !== '0' && row.group === '29')
        {
            row.level = 1;
            if (row.mod1max === '50') row.spawnable = 0;
        }
    }
    if (config.dis_suf30) DisGroup(row, 30);
    // 31力量,保留项链头环30,戒指20,近战武器手套15,盾屏蔽,小中大板2|5|6,珠宝9,675行,764行及后面也有
    // 注意隐藏在675~676行的6~9珠宝,734~735行的1力手套与戒指
    if (config.dis_suf31)
    {
        if (row.version !== '0' && row.group === '31')
        {
            row.level = 1;
            if (row.itype1 === 'amul' && row.mod1max < 30) row.spawnable = 0;
            if (row.itype1 === 'ring' && row.mod1max < 20) row.spawnable = 0;
            if (row.itype1 === 'mele' && row.mod1max < 15) row.spawnable = 0;
            if (row.itype1 === 'lcha' && row.mod1max < 6) row.spawnable = 0;
            if (row.itype1 === 'mcha' && row.mod1max < 5) row.spawnable = 0;
            if (row.itype1 === 'scha' && row.mod1max < 2) row.spawnable = 0;
            if (row.itype1 === 'jewl' && row.mod1max < 9) row.spawnable = 0
            if (row.mod1max === '1') row.spawnable = 0;
        }
    }
    // 32~34无
    // 35跑速,保留鞋头环(黄)30,鞋(蓝)40,板子不变
    if (config.dis_suf35)
    {
        if (row.version !== '0' && row.group === '35')
        {
            row.level = 1;
            if (row.itype1 === 'boot' && row.mod1max < 30) row.spawnable = 0;
        }
    }
    // 36无
    // 37耐久修复(配合无形用),保留每20秒修復1點耐久度,33秒的屏蔽
    if (config.dis_suf37)
    {
        if (row.version !== '0' && row.group === '37')
        {
            row.level = 1;
            if (row.itype1 === 'weap' && row.mod1param < 5) row.spawnable = 0;
        }
    }
    // 38无
    // 39无法破坏与回复数量(配合无形用),保留永不毀損,回復數量1在10秒,20秒回复1的屏蔽
    if (config.dis_suf39)
    {
        if (row.version !== '0' && row.group === '39')
        {
            row.level = 1;
            if (row.mod1param === '5') row.spawnable = 0;
        }
    }
    // 40无
    if (config.dis_suf41) DisGroup(row, 41);
    // 42按等级增加力量与敏捷,官方屏蔽
    // 43按等级增加四元素抗性,官方屏蔽
    // 44触发技能+聚气
    if (config.dis_suf44)//保留武器上的擊中時有5%機率施展等級1傷害加深
    {
        DisGroup(row, 44);
        if (row.group === '44' && row.level === '3') row.spawnable = 1;
    }
    // 45+防御(在[白天/黄昏/夜晚/黎明]附近增加)?,官方屏蔽
});

D2RMM.writeTsv(magicsuffixFilename, magicsuffix);
