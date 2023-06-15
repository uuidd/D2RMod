// 添加单机公式
const cubemainFileName = 'global\\excel\\cubemain.txt';
const cubemain = D2RMM.readTsv(cubemainFileName);

// 奶牛关=1本回城书tbk,op=28代表有条件限制
if (config.simple_cow) PushData(`tbk=Cow Portal`, 28, 1, 'tbk', '', '', '', `Cow Portal`, '', '', '', '', '');

// A2任务道具=辩识书+2#符文,op=28代表有条件限制
// 有个注意的地方,当你身上本身带有零件时比如蛇项链，直接简化合成会无效还会消耗掉(辩识书+2#符文)，和op没关系
if (config.a2task_item) PushData(`ibk+2rune=Horadric Staff`, 28, 2, 'ibk', 'r02', '', '', 'hst', '', '', '', '', '');

// A3任务道具=辩识书+3#符文,op=28代表有条件限制
// 有个注意的地方,当你身上本身带有零件时比如眼球，直接简化合成会无效还会消耗掉(辩识书+3#符文)，和op没关系
if (config.a3task_item) PushData(`ibk+3rune=Khalim's Will`, 28, 2, 'ibk', 'r03', '', '', 'qf2', '', '', '', '', '');

// 白装+溶解=亮金装备(模拟恰西任务)
// lvl = 直接生成的物品等级
// plvl = 与角色等级相乘的百分比(50就相当于角色等级*0.5)
// ilvl = 与物品等级相乘的百分比(50就相当于原物品等级*0.5)
// 最后生成的物品等级=lvl+(plvl*)+(ilvl*)(不太确定但是应该差不多这个意思)
// 此处还有个坑要注意!!!
// 如果写的"armo,nos"的话是对所有颜色的无孔装备都生效
// 如果写的"armo,nor,hiq,nos"的话是只对超强的白色生效等同于"armo,hiq,nos",普通的白色无效
// <恰西任务>官方设定支持超强,支持无形,超强15ED或+技能的镶材属性能被洗掉，无形的不会被洗成有形
// <恰西任务>官方设定为需要无孔的原因，因为(有孔)是一种词缀可能会被洗掉!
// <恰西任务>官方设定注入后生成的物品等级=角色等级+4(但是这里无法实现这种效果)
// 注意注入后的等级一定要以人物为准不能是以原物品等级为准,因为亮金头环需要90级以上才能出+2技能
// 而90级以上的白装是很难获得的,所以改为以人物等级为准就比较容易了
if (config.item_rar)
{
    PushData(`Nor Weapo To Rar`, '', 2, `"weap,nor,nos,noe"`, 'wms', '', '', `"usetype,rar"`, 100, '', '', '', '');
    PushData(`Sup Weapo To Rar`, '', 2, `"weap,hiq,nos,noe"`, 'wms', '', '', `"usetype,rar"`, 100, '', '', '', '');
    PushData(`Nor Armor To Rar`, '', 2, `"armo,nor,nos,noe"`, 'wms', '', '', `"usetype,rar"`, 100, '', '', '', '');
    PushData(`Sup Armor To Rar`, '', 2, `"armo,hiq,nos,noe"`, 'wms', '', '', `"usetype,rar"`, 100, '', '', '', '');

    PushData(`Nor Eth Weapo To Eth Rar`, '', 2, `"weap,nor,nos,eth"`, 'wms', '', '', `"usetype,rar,eth"`, 100, '', '', '', '');
    PushData(`Sup Eth Weapo To Eth Rar`, '', 2, `"weap,hiq,nos,eth"`, 'wms', '', '', `"usetype,rar,eth"`, 100, '', '', '', '');
    PushData(`Nor Eth Armor To Eth Rar`, '', 2, `"armo,nor,nos,eth"`, 'wms', '', '', `"usetype,rar,eth"`, 100, '', '', '', '');
    PushData(`Sup Eth Armor To Eth Rar`, '', 2, `"armo,hiq,nos,eth"`, 'wms', '', '', `"usetype,rar,eth"`, 100, '', '', '', '');
}

// armo 就包含了头衣盾
// 此处还有个坑要注意!!!
// 如果写的"armo,nos"的话是对所有颜色的无孔装备都生效
// 如果写的"armo,nor,hiq,nos"的话是只对超强的白色生效等同于"armo,hiq,nos",普通的白色无效
// 公式=(白)普通装备+完美钻,直接最大孔,仿拉苏克任务 (想打随机孔可以用原公式)
// 公式=(蓝)魔法装备+完美钻,孔2
// 公式=(黄)稀有装备+完美钻,孔1
// 公式=(暗金)独特装备+完美钻,孔1
// 公式=(绿)套装装备+完美钻,孔1
// 公式=(橙)手工装备+完美钻,孔1
// 注意了洗板子的公式改为1颗完美宝石时会和蓝装打孔公式冲突导致蓝开不了孔！
// 统一使用`"useitem,sock=6"`可以固定一种颜色宝石开孔就行了,蓝装固定为2孔就行了没必要肝
if (config.socket_item) 
{
    PushData(`Weap Sock Nor`, '', 2, `"weap,nor,nos"`, 'gpw', '', '', `"useitem,sock=6"`, '', '', '', '', '');
    PushData(`Weap Sock Hiq`, '', 2, `"weap,hiq,nos"`, 'gpw', '', '', `"useitem,sock=6"`, '', '', '', '', '');
    PushData(`Weap Sock Mag`, '', 2, `"weap,mag,nos"`, 'gpw', '', '', `"useitem,sock=2"`, '', '', '', '', '');
    PushData(`Weap Sock Rar`, '', 2, `"weap,rar,nos"`, 'gpw', '', '', `"useitem,sock=1"`, '', '', '', '', '');
    PushData(`Weap Sock Uni`, '', 2, `"weap,uni,nos"`, 'gpw', '', '', `"useitem,sock=1"`, '', '', '', '', '');
    PushData(`Weap Sock Set`, '', 2, `"weap,set,nos"`, 'gpw', '', '', `"useitem,sock=1"`, '', '', '', '', '');
    PushData(`Weap Sock Crf`, '', 2, `"weap,crf,nos"`, 'gpw', '', '', `"useitem,sock=1"`, '', '', '', '', '');

    PushData(`Armo Sock Nor`, '', 2, `"armo,nor,nos"`, 'gpw', '', '', `"useitem,sock=4"`, '', '', '', '', '');
    PushData(`Armo Sock Hiq`, '', 2, `"armo,hiq,nos"`, 'gpw', '', '', `"useitem,sock=4"`, '', '', '', '', '');
    PushData(`Armo Sock Mag`, '', 2, `"armo,mag,nos"`, 'gpw', '', '', `"useitem,sock=2"`, '', '', '', '', '');
    PushData(`Armo Sock Rar`, '', 2, `"armo,rar,nos"`, 'gpw', '', '', `"useitem,sock=1"`, '', '', '', '', '');
    PushData(`Armo Sock Uni`, '', 2, `"armo,uni,nos"`, 'gpw', '', '', `"useitem,sock=1"`, '', '', '', '', '');
    PushData(`Armo Sock Set`, '', 2, `"armo,set,nos"`, 'gpw', '', '', `"useitem,sock=1"`, '', '', '', '', '');
    PushData(`Armo Sock Crf`, '', 2, `"armo,crf,nos"`, 'gpw', '', '', `"useitem,sock=1"`, '', '', '', '', '');
}

// 白色装备+解毒药剂=(无形)白色装备
// useitem代表装备部位和属性都不变(但是测试无形时会出BUG装备被洗成斧头并且不是无形)
// usetype代表只有装备部位不变
// 因为测试中发现各种问题,比如超强的15ed等属性会被随机掉,黄装的属性也会被洗掉,带孔也是属性所以会被洗掉
// 所以最后只能支持不带孔的非超强白装
if (config.eth_norItem)
{
    PushData(`Eth Weap Nor Item`, '', 2, `"weap,nor,nos,noe"`, 'yps', '', '', `"usetype,nor,eth"`, '', 100, '', '', '');
    PushData(`Eth Armo Nor Item`, '', 2, `"armo,nor,nos,noe"`, 'yps', '', '', `"usetype,nor,eth"`, '', 100, '', '', '');
}

// 宝石转换颜色
// 3个字母含意
// 1 g = gem 固定不变
// 2 c 碎裂的 f 瑕疵的 s 普通的 l 无暇的 p 完美的
// 3 v 紫 y 黄 b 蓝 g 绿 r 红 w 白
// Chipped 碎裂的
if (config.gem_switch)
{
    PushData(`Chipped Amet -> Chipped Topa`, '', 1, 'gcv', '', '', '', 'gcy', '', '', '', '', '');
    PushData(`Chipped Topa -> Chipped Sapp`, '', 1, 'gcy', '', '', '', 'gcb', '', '', '', '', '');
    PushData(`Chipped Sapp -> Chipped Emer`, '', 1, 'gcb', '', '', '', 'gcg', '', '', '', '', '');
    PushData(`Chipped Emer -> Chipped Ruby`, '', 1, 'gcg', '', '', '', 'gcr', '', '', '', '', '');
    PushData(`Chipped Ruby -> Chipped Diam`, '', 1, 'gcr', '', '', '', 'gcw', '', '', '', '', '');
    PushData(`Chipped Diam -> Chipped Amet`, '', 1, 'gcw', '', '', '', 'gcv', '', '', '', '', '');

    // Flawed 瑕疵的
    PushData(`Flawed Amet -> Flawed Topa`, '', 1, 'gfv', '', '', '', 'gfy', '', '', '', '', '');
    PushData(`Flawed Topa -> Flawed Sapp`, '', 1, 'gfy', '', '', '', 'gfb', '', '', '', '', '');
    PushData(`Flawed Sapp -> Flawed Emer`, '', 1, 'gfb', '', '', '', 'gfg', '', '', '', '', '');
    PushData(`Flawed Emer -> Flawed Ruby`, '', 1, 'gfg', '', '', '', 'gfr', '', '', '', '', '');
    PushData(`Flawed Ruby -> Flawed Diam`, '', 1, 'gfr', '', '', '', 'gfw', '', '', '', '', '');
    PushData(`Flawed Diam -> Flawed Amet`, '', 1, 'gfw', '', '', '', 'gfv', '', '', '', '', '');

    // 普通的
    PushData(`Amet -> Topa`, '', 1, 'gsv', '', '', '', 'gsy', '', '', '', '', '');
    PushData(`Topa -> Sapp`, '', 1, 'gsy', '', '', '', 'gsb', '', '', '', '', '');
    PushData(`Sapp -> Emer`, '', 1, 'gsb', '', '', '', 'gsg', '', '', '', '', '');
    PushData(`Emer -> Ruby`, '', 1, 'gsg', '', '', '', 'gsr', '', '', '', '', '');
    PushData(`Ruby -> Diam`, '', 1, 'gsr', '', '', '', 'gsw', '', '', '', '', '');
    PushData(`Diam -> Amet`, '', 1, 'gsw', '', '', '', 'gsv', '', '', '', '', '');

    // Flawless 无暇的
    PushData(`Flawless Amet -> Flawless Topa`, '', 1, 'glv', '', '', '', 'gly', '', '', '', '', '');
    PushData(`Flawless Topa -> Flawless Sapp`, '', 1, 'gly', '', '', '', 'glb', '', '', '', '', '');
    PushData(`Flawless Sapp -> Flawless Emer`, '', 1, 'glb', '', '', '', 'glg', '', '', '', '', '');
    PushData(`Flawless Emer -> Flawless Ruby`, '', 1, 'glg', '', '', '', 'glr', '', '', '', '', '');
    PushData(`Flawless Ruby -> Flawless Diam`, '', 1, 'glr', '', '', '', 'glw', '', '', '', '', '');
    PushData(`Flawless Diam -> Flawless Amet`, '', 1, 'glw', '', '', '', 'glv', '', '', '', '', '');

    // Perfect 完美的
    PushData(`Perfect Amet -> Perfect Topa`, '', 1, 'gpv', '', '', '', 'gpy', '', '', '', '', '');
    PushData(`Perfect Topa -> Perfect Sapp`, '', 1, 'gpy', '', '', '', 'gpb', '', '', '', '', '');
    PushData(`Perfect Sapp -> Perfect Emer`, '', 1, 'gpb', '', '', '', 'gpg', '', '', '', '', '');
    PushData(`Perfect Emer -> Perfect Ruby`, '', 1, 'gpg', '', '', '', 'gpr', '', '', '', '', '');
    PushData(`Perfect Ruby -> Perfect Diam`, '', 1, 'gpr', '', '', '', 'gpw', '', '', '', '', '');
    PushData(`Perfect Diam -> Perfect Amet`, '', 1, 'gpw', '', '', '', 'gpv', '', '', '', '', '');
}

// 洗板子只需要1瓶大紫
if (config.roll_mag)
{
    cubemain.rows.forEach((row) =>
    {
        if (row['input 2'] === `"gem4,qty=3"`)
        {
            row['numinputs'] = 2;
            row['input 2'] = 'rvl';
        }
    });
}

// 洗板子只需要1瓶大紫
if (config.roll_rar)
{
    PushData('Re-rolled Rare Item', '', 2, `"any,rar"`, 'rvl', '', '', `"usetype,rar"`, '', 100, '', '', '');
}

// 添加数据函数
function PushData(des, op, numinputs, input1, input2, input3, input4, output, plvl, ilvl, mod1, mod1min, mod1max)
{
    cubemain.rows.push({
        'description': des,
        'enabled': 1,
        'version': 100,
        'op': op,
        'numinputs': numinputs,
        'input 1': input1,
        'input 2': input2,
        'input 3': input3,
        'input 4': input4,
        'output': output,
        'plvl': plvl,
        'ilvl': ilvl,
        'mod 1': mod1,
        'mod 1 min': mod1min,
        'mod 1 max': mod1max,
        '*eol\r': 0
    });
}

D2RMM.writeTsv(cubemainFileName, cubemain);
