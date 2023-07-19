if (config.demoInfo) {
  const npcsFilename = 'local\\lng\\strings\\npcs.json';
  const npcs = D2RMM.readJson(npcsFilename);
  npcs.forEach((item) => {
    const itemKey = item.Key;
    let twName = null;
    let cnName = null;
    // 版本信息
    if (itemKey === "modsversion") {
      twName = "模組版本：v" + config.modsVersion + " (適配遊戲版本:2.7/2.6)";
      cnName = "模组版本：v" + config.modsVersion + " (适配游戏版本:2.7/2.6)"
    }
    if (itemKey === "jgmodversion") {
      twName = "Demo v" + config.modsVersion;
      cnName = "Demo v" + config.modsVersion;
    }
    if (itemKey === "modsupdatedate") {
      twName = "更新日期：" + config.modsUpdateDate
      cnName = "更新日期：" + config.modsUpdateDate
    }

    // 打孔，反镶嵌
    // 洗物品
    // 手工品

    if (cnName != null && twName != null) {
      item['zhTW'] = twName;
      item['zhCN'] = cnName;
    }
  });
  D2RMM.writeJson(npcsFilename, npcs);
}

// 查询 Demo 百科

// 暂停 退出并保存游戏界面
switch (config.demoSelect) {
  case "pause":
    const pauselayouthdFilename = 'global\\ui\\layouts\\pauselayouthd.json';
    const pauselayouthd = D2RMM.readJson(pauselayouthdFilename);
    pauselayouthd.children.forEach((item) => {
      if (item.name === 'PauseTable') {
        const demoMod = {
          "type": "TableRowWidget",
          "name": "Demo Select",
          "children": [
            {
              "type": "ButtonWidget",
              "name": "Settings",
              "fields": {
                "filename": "PauseMenu\\PauseButton",
                "hoveredFrame": 3,
                "textString": 'MOD说明', // 帮助页名称
                "onClickMessage": "PanelManager:OpenPanel:demopanel", // 点击动作开启的的页面，对应global\ui\layouts\{}hd.json
                "textColor": "$FontColorOrange", // 字体颜色
                "text/style": "$StyleFEButtonText",
                "acceptsReturnKey": true,
                "focusOnMouseOver": true,
                "sound": "select"
              }
            }
          ]
        }
        item.children.unshift(demoMod);
      }
    });
    D2RMM.writeJson(pauselayouthdFilename, pauselayouthd);
    break;
  case "horadriccube":
    const horadriccubelayouthdFileName = 'global\\ui\\layouts\\horadriccubelayouthd.json';
    const horadriccubelayouthd = D2RMM.readJson(horadriccubelayouthdFileName);
    const demoMod = {
      "type": "ButtonWidget", "name": "ModInfo2",
      "fields": {
        "anchor": {"x": 0.5},
        "rect": {"x": 100, "y": 1325},
        "filename": "FrontEnd/HD/Final/FrontEnd_ButtonSmall",
        "textString": 'MOD说明',
        "focusIndicatorFilename": "Controller/HoverImages/FrontEndButtonMain_Hover",
        "focusIndicatorOffset": {"x": 0, "y": 0},
        "onClickMessage": "PanelManager:OpenPanel:demopanel",
        "text/style": "$StyleFEButtonText",
        "pointSize": {"x": 220, "y": 120,},
        "pressedFrame": 1,
        "hoveredFrame": 3,
        "textColor": "$FontColorGoldYellow",
        "disabledTint": {"a": 1.0},
        "sound": "cursor_launch_game_hd",
      }
    }
    horadriccubelayouthd.children.splice(4, 0, demoMod);
    D2RMM.writeJson(horadriccubelayouthdFileName, horadriccubelayouthd);
    break;
}

if (config.demoSelect !== '' || config.demoSelect !== 'def') {
  // 复制组件global下的json文件到mod目录
  //
  D2RMM.copyFile('global', 'global', true);
  const demopanelhdFilename = 'global\\ui\\layouts\\demopanelhd.json'
  const demopanelhd = D2RMM.readJson(demopanelhdFilename);
  demopanelhd.children[0].children[1].children[1].fields.text = `···『 ${config.modHelpText} 』···` // 帮助页面大标题
  demopanelhd.children[2].fields.textStrings = ['常用公式', '模拟交易', '模组功能', '可选功能']
  D2RMM.writeJson(demopanelhdFilename, demopanelhd);

  function bigTitle(text) {
    return {
      "type": "TableRowWidget", "name": "d",
      "fields": {"rect": {"width": 1700, "height": 120}},
      "children": [
        {
          "type": "TextBoxWidget", "name": "dd",
          "fields": {"text": `【${text}】`, "style": "$StyleSettingsTitle"},
          "children": [
            {
              "type": "ImageWidget", "name": "Divider",
              "fields": {"rect": {"x": 0, "y": 100}, "filename": "PauseMenu\\Divider"}
            }
          ]
        }
      ]
    }
  }

  function smallTitle(text) {
    return {
      "type": "TableRowWidget", "name": "s",
      "children": [
        {
          "type": "TextBoxWidget", "name": "ss",
          "fields": {
            "text": `·${text}·`,
            "style": {
              "fontColor": "$FontColorGold",
              "pointSize": "$XMediumLargeFontSize",
              "spacing": "$ReducedSpacing",
              "alignment": {"h": "left", "v": "center"}
            }
          }
        },
      ]
    }
  }

  // Gold White Blue Yellow Green Red Orange
  function normalText(text, color, fontSize) {
    if (!color) {
      color = '$FontColorWhite'
    } else {
      color = '$FontColor' + color
    }
    if (!fontSize || fontSize === 1) {
      fontSize = '$MediumFontSize'
    } else if (fontSize === 2) {
      fontSize = '$XMediumLargeFontSize'
    }
    return {
      "type": "TableRowWidget",
      "name": 't',
      "children": [{
        "type": "TextBoxWidget", "name": 'tt',
        "fields": {
          "text": "★ " + text,
          "style": {"fontColor": color, "pointSize": fontSize, "alignment": {"h": "left", "v": "center"}}
        }
      }]
    }
  }

  function normalText2(text1, text2, color, fontSize) {
    const text = text1 + " ==▶ " + text2;
    return normalText(text, color, fontSize);
  }

  function normalText22(text1, text2, color, fontSize) {
    const text = text1 + " ◀==▶ " + text2;
    return normalText(text, color, fontSize);
  }


  function space() {
    return {"type": "TableRowWidget", "name": "Row Spacer"}
  }

  function dr() {
    return {
      "type": "TableRowWidget", "name": "RowRune",
      "children": [
        {
          "type": "ImageWidget", "name": "Divider",
          "fields": {"rect": {"x": 0, "y": 20}, "filename": "PauseMenu\\Divider"}
        }
      ]
    }
  }

  // demo1 常用公式
  const demo1panelhdFilename = 'global\\ui\\layouts\\demo1panelhd.json'
  const demo1panelhd = D2RMM.readJson(demo1panelhdFilename);
  demo1panelhd.children[1].children[0].children = [];
  const demo1 = demo1panelhd.children[1].children[0].children;
  demo1.push(bigTitle('备注'));
  demo1.push(normalText('如果没有指定数量，默认为一个', 'Yellow'));
  demo1.push(normalText('如果只有一个的物品，直接合成即可', 'Yellow'));
  demo1.push(normalText('合成暗金一场游戏只能用一次，第二次将变为亮金，需要小退后重建游戏', 'Yellow'));
  demo1.push(normalText('小退是角色退出游戏再重进就是新的一场游戏，大退是退出暗黑2重置版游戏', 'Yellow'));
  demo1.push(normalText('切换难度刷地图可避免出现重复彩虹刻面暗金珠或变成亮金', 'Yellow'));
  demo1.push(normalText('所有红门配方都会返还前两个物品，方便下次开门，相当于消耗最后一个物品', 'Red'));
  demo1.push(normalText('红门只能在同一幕场景内使用，例如第一幕红门无法在第二幕使用', 'Red'));
  demo1.push(space());
  demo1.push(bigTitle('快速红门配方'));
  demo1.push(normalText2('回城书 + 辨识书', '奶牛关', 'Red'));
  demo1.push(normalText2('回城书 + 解毒药剂 + 红药', '女伯爵闺房/刷符文', 'Red'));
  demo1.push(normalText2('回城书 + 解毒药剂 + 蓝药', '地穴第一层', 'Red'));
  demo1.push(normalText2('回城书 + 解毒药剂 + 2瓶红药', '安达利尔房间/安姐', 'Red'));
  demo1.push(normalText2('回城书 + 解冻药剂 + 红药', '石制古墓一层', 'Red'));
  demo1.push(normalText2('回城书 + 解冻药剂 + 蓝药', '古代通道', 'Red'));
  demo1.push(normalText2('回城书 + 解冻药剂 + 2瓶红药', '督瑞尔房间/督瑞雨', 'Red'));
  demo1.push(normalText2('回城书 + 精力药剂 + 红药', '墨菲斯托房间/憎恨的囚牢第三层/劳模', 'Red'));
  demo1.push(normalText2('回城书 + 钥匙 + 红药', '混沌避难所/迪亚波罗/超市', 'Red'));
  demo1.push(normalText2('回城书 + 钥匙 + 蓝药', '毀滅王座/五小队/巴尔', 'Red'));
  demo1.push(bigTitle('常用合成公式'));
  demo1.push(normalText2('回城卷轴 + 辨识卷轴', '赦免徽章(洗点)'));
  demo1.push(normalText2('3个箭矢', '有一定几率不消耗且自恢复的箭矢'));
  demo1.push(normalText2('3个弩矢', '有一定几率不消耗且自恢复的弩矢'));
  demo1.push(normalText2('镶嵌物 + 珠宝', '分离镶嵌物', '镶嵌物不会消失'));
  demo1.push(normalText2('普通/无形/超强装备 + 1-6个珠宝', '1-6孔的普通/无形/超强装备'));
  demo1.push(normalText2('蓝色魔法装备 + 1-4个珠宝', '1-4孔的蓝色魔法装备(珠宝匠最多4孔)', 'Blue'));
  demo1.push(normalText2('金色稀有装备 + 1-2个珠宝', '1-2孔的金色稀有装备(亮金词缀最多2孔)', 'Yellow'));
  demo1.push(normalText2('绿色套装装备 + 珠宝', '1孔的绿色套装装备(任务打孔最大1孔)', 'Green'));
  demo1.push(normalText2('暗金唯一装备 + 珠宝', '1孔的暗金唯一装备(任务打孔最大1孔)', 'Gold'));
  demo1.push(normalText2('蓝色物品 + 大紫/任意宝石(不分品质)', '刷新蓝色物品属性(洗板子,洗偏向盾,洗电棒火棒)', 'Blue'));
  demo1.push(normalText2('金色物品 + 大紫/任意宝石(不分品质)', '刷新金色物品属性(洗头环，洗百抗鞋，洗手套)', 'Yellow'));
  demo1.push(normalText2('武器/防具 + 英雄旗帜(火炬副产物)', '无形武器/防具 '));

  demo1.push(bigTitle('其他合成公式'));
  demo1.push(normalText('合成暗金一场游戏只能用一次，第二次将变为亮金，需要小退后重建游戏', 'Yellow'));
  demo1.push(normalText('小退是角色退出游戏再重进就是新的一场游戏，大退是退出暗黑2重置版游戏', 'Yellow'));
  demo1.push(normalText('切换难度刷地图可避免出现重复彩虹刻面暗金珠，或变成亮金', 'Yellow'));
  demo1.push(normalText2('完美宝石', '3个同颜色无暇宝石(宝石还原)'));
  demo1.push(normalText2('6个暗金戒指 ', '乔丹之石', 'Gold'));
  demo1.push(normalText2('6个暗金项链 ', '马拉的项链', 'Gold'));
  demo1.push(normalText2('15#符文 + 22#号符文 + 32#符文 + 3个亮金珠宝', '15攻速11-15全抗蓝色珠宝', 'Blue'));
  demo1.push(normalText2('15#符文 + 8#号符文 + 32#符文 + 3个亮金珠宝', '15攻速16-30火炕蓝色珠宝(安头珠)', 'Blue'));
  demo1.push(normalText2('15#符文 + 27#号符文 + 32#符文 + 3个亮金珠宝', '15攻速31-40ed蓝色珠宝(红白珠)', 'Blue'));
  demo1.push(normalText2('回城书 + 6个大紫', '国王之杖(第二幕任务道具，需在A2场景合成)'));
  demo1.push(normalText2('回城书 + 3个大紫', '克林姆的遗愿(第三幕任务道具，需在A3场景合成)'));
  demo1.push(normalText2('火炬 + 3个小型神符', '1 全抗生命 + 1 法力生命 + 1 最大伤害准确生命极品小板子'));
  demo1.push(normalText2('A1钥匙(恐惧之钥)', 'A2钥匙(憎恨之钥)'));
  demo1.push(normalText2('A2钥匙(憎恨之钥)', 'A5钥匙(毁灭之钥)'));
  demo1.push(normalText2('A5钥匙(毁灭之钥)', 'A1钥匙(恐惧之钥)'));
  demo1.push(normalText2('A1/A2 + A3 + A4 + A5精华 + 蓝戒指', '恐怖之石(向商店出售恐怖之石召唤超级暗黑破坏神)'));
  demo1.push(normalText2('A1/A2 + A3 + A4精华', 'A5精华'));
  demo1.push(normalText2('2 完美宝石', '随机珠宝'));
  demo1.push(normalText2('暗金大板子(破冰/电/毒/火/魔/物及基德大板子)+ 珠宝', '随机暗金珠宝(一场游戏只能用一次)', 'Gold'));
  demo1.push(normalText2('暗金珠宝 + 3个完美宝石', '随机暗金珠宝(一场游戏只能用一次)', 'Gold'));
  demo1.push(bigTitle('橙装小知识'));
  demo1.push(normalText('橙装合成与珠宝的等级无关'));
  demo1.push(normalText('被合成物品都要求是蓝色(无形的也可以合成,合成后转为有形)'));
  demo1.push(normalText('建议用90多级的人物去地狱找商人赌博(带上基德板和边缘弓可以减少赌博成本)'));
  demo1.push(normalText('项链：物品等级 + 角色等级 >= 180，93级人物赌博，90级恐怖地带掉落项链合成)'));
  demo1.push(normalText('项链的2角色技能词缀等级要求90级'));
  demo1.push(normalText('戒指：物品等级 + 角色等级 >= 172，88级人物赌博，86级恐怖地带掉落戒指合成)'));
  demo1.push(normalText('戒指的6%吸蓝词缀等级要求86级'));
  demo1.push(normalText('手套：物品等级 + 角色等级 >= 86，手套非等级越高越好，最好大于42级小于60级)'));
  demo1.push(normalText('手套2技能词缀等级40，攻速词缀等级43，59级后都是垃圾词缀'));
  demo1.push(bigTitle('常用手工配方'));
  demo1.push(normalText2('蓝色项链 + 蓝药 + 无暇宝石(不分颜色) + 任意符文或珠宝', '施法项链', 'Orange'));
  demo1.push(normalText2('蓝色项链 + 红药 + 无暇宝石(不分颜色) + 任意符文或珠宝', '吸血项链', 'Orange'));
  demo1.push(normalText2('蓝色戒指 + 蓝药 + 无暇宝石(不分颜色) + 任意符文或珠宝', '施法戒指', 'Orange'));
  demo1.push(normalText2('蓝色戒指 + 红药 + 无暇宝石(不分颜色) + 任意符文或珠宝', '吸血戒指', 'Orange'));
  demo1.push(normalText2('蓝色重/鲨皮/吸血鬼骸骨手套 + 红药 + 无暇宝石(不分颜色) + 任意符文或珠宝', '吸血手套', 'Orange'));
  demo1.push(normalText2('蓝色皮/魔皮/荆棘连指手套 + 蓝药 + 无暇宝石(不分颜色) + 任意符文或珠宝', '施法手套', 'Orange'));
  demo1.push(bigTitle('其他手工配方'));
  demo1.push(normalText('合成效果参考经验条中间的参考暗黑2百科书替换规则如下', 'Orange'));
  demo1.push(normalText('1. 无暇宝石替换各种符文要求', 'Orange'));
  demo1.push(normalText('2. 珠宝可换成符文', 'Orange'));
  demo1.push(normalText('3. 蓝药替换掉完美紫宝石',"LightPurple"));
  demo1.push(normalText('4. 红药替换掉完美红宝石', 'Red'));
  demo1.push(normalText('5. 融冰替换掉完美蓝宝石', 'Blue'));
  demo1.push(normalText('6. 解毒替换掉完美绿宝石', 'Green'));
  demo1.push(dr());
  demo1.push(smallTitle('例如'));
  demo1.push(normalText('原版配方：蓝色项链 + 拉尔 8# + 完美的紫宝石 + 任何珠宝 => 施法项链'));
  demo1.push(normalText('拉尔 8#(符文) 替换为 无暇宝石(不分颜色)'));
  demo1.push(normalText('完美的紫宝石(完美宝石) 替换为 蓝药(各种药剂)'));
  demo1.push(normalText('最后变为：蓝色项链 + 蓝药 + 无暇宝石(不分颜色) + 任意符文或珠宝 => 施法项链'));
  demo1.push(normalText('按照这样的规则 mod 新增所有手工品的替代配方，不用频繁合宝石操作，也能较低成本合成手工品'));
  demo1.push(normalText('主要是解决手工品难出的问题，希望我这个例子你能比较清晰的理解这些手工品配方'));


  D2RMM.writeJson(demo1panelhdFilename, demo1panelhd);

// demo2 模拟交易
  const demo2panelhdFilename = 'global\\ui\\layouts\\demo2panelhd.json';
  const demo2panelhd = D2RMM.readJson(demo2panelhdFilename);
  demo2panelhd.children[1].children[0].children = [];
  const demo2 = demo2panelhd.children[1].children[0].children;
  demo2.push(bigTitle('备注'));
  demo2.push(normalText('合成装备等级取决你角色等级，用低级角色合成会出现合出错误的东西', 'Red', 2));
  demo2.push(normalText('99级角色能合成出99级装备，99级加满变才是真正满变，我喜欢这种设定', 'Red', 2));
  demo2.push(bigTitle('符文和常用暗金/绿色物品互换'));
  demo2.push(smallTitle('戒指'));
  demo2.push(normalText22('28#符文 + 戒指', '乔丹之石 乔丹', 'Gold'));
  demo2.push(normalText22('26#符文 + 戒指', '布爾凱索的婚戒 婚戒', 'Gold'));
  demo2.push(normalText22('24#符文 + 戒指', '乌鸦之霜', 'Gold'));
  demo2.push(normalText22('22#符文 + 戒指', '大自然的和平', 'Gold'));
  demo2.push(normalText22('21#符文 + 戒指', '拿各的戒指 拿各', 'Gold'));
  demo2.push(dr());
  demo2.push(smallTitle('项链'));
  demo2.push(normalText22('27#符文 + 项链', '馬拉的萬花筒 马拉', 'Gold'));
  demo2.push(normalText22('26#符文 + 项链', '塔拉夏的判決 塔链', 'Green'));
  demo2.push(normalText22('25#符文 + 项链', '大君之怒', 'Gold'));
  demo2.push(normalText22('24#符文 + 项链', '金屬網格', 'Gold'));
  demo2.push(normalText22('22#符文 + 项链', '亞特瑪的聖甲蟲', 'Gold'));
  demo2.push(normalText22('20#符文 + 项链', '猫眼', 'Gold'));
  demo2.push(dr());
  demo2.push(smallTitle('头'));
  demo2.push(normalText22('31#符文 + 权冠', '格里芬之眼 格里芬 glf 四神器之一', 'Gold'));
  demo2.push(normalText22('29#符文 + 头盔', '歲月之冠 年纪 四神器之一', 'Gold'));
  demo2.push(normalText22('27#符文 + 头盔', '安达利尔的面容 安头', 'Gold'));
  demo2.push(normalText22('26#符文 + 头盔', '夜翼面紗 冰头', 'Gold'));
  demo2.push(normalText22('25#符文 + 野蛮人头盔', '亞瑞特的面容 飞机头', 'Gold'));
  demo2.push(normalText22('23#符文 + 头盔', '諧角之冠 军帽', 'Gold'));
  demo2.push(normalText22('22#符文 + 头盔', '奇拉的守護', 'Gold'));
  demo2.push(normalText22('21#符文 + 头盔', '吉永之臉 cb头', 'Green'));
  demo2.push(normalText22('20#符文 + 头盔', '塔拉夏的赫拉迪姆之冠 塔头', 'Green'));
  demo2.push(dr());
  demo2.push(smallTitle('法珠'));
  demo2.push(normalText22('30#符文 + 法珠', '死亡深度 四神器之一', 'Gold'));
  demo2.push(normalText22('26#符文 + 法珠', '脾气 艾斯屈塔的憤怒', 'Gold'));
  demo2.push(normalText22('23#符文 + 法珠', '核瞳 眼球', 'Gold'));
  demo2.push(normalText22('20#符文 + 法珠', '塔拉夏的警惕之眼 塔棒', 'Green'));
  demo2.push(dr());
  demo2.push(smallTitle('亚马逊'));
  demo2.push(normalText22('27#符文 + 弓', '风之力', 'Gold'));
  demo2.push(normalText22('24#符文 + 亚马逊标枪', '泰坦 tt', 'Gold'));
  demo2.push(normalText22('23#符文 + 亚马逊标枪', '雷霆之击', 'Gold'));
  demo2.push(dr());
  demo2.push(smallTitle('其他武器'));
  demo2.push(normalText22('25#符文 + 长柄武器', '死神喪鐘 丧钟', 'Gold'));
  demo2.push(normalText22('22#符文 + 长柄武器', '盜墓者 大妹子', 'Gold'));
  demo2.push(normalText22('24#符文 + 剑', '碧藍怒火', 'Gold'));
  demo2.push(normalText22('21#符文 + 剑', '阿里巴巴之刃 阿里巴巴', 'Gold'));
  demo2.push(normalText22('23#符文 + 权杖', '天堂之光', 'Gold'));
  demo2.push(dr());
  demo2.push(smallTitle('死灵法师'));
  demo2.push(normalText22('29#符文 + 魔杖', '破隐 四神器之一', 'Gold'));
  demo2.push(normalText22('22#符文 + 死灵头', '魔胎 侏儒 尿壶', 'Gold'));
  demo2.push(dr());
  demo2.push(smallTitle('护甲'));
  demo2.push(normalText22('26#符文 + 护甲', '塔拉夏的守護 7+ 漆甲', 'Green'));
  demo2.push(normalText22('24#符文 + 护甲', '蛇魔法師之皮 海蛇皮', 'Gold'));
  demo2.push(normalText22('22#符文 + 护甲', '都瑞爾之殼 督壳', 'Gold'));
  demo2.push(normalText22('21#符文 + 护甲', '斯寇德的憤怒 ire', 'Gold'));
  demo2.push(normalText22('20#符文 + 护甲', '守護天使', 'Gold'));
  demo2.push(dr());
  demo2.push(smallTitle('盾牌'));
  demo2.push(normalText22('24#符文 + 圣骑士盾牌', '撒卡蘭姆使者 饰金盾', 'Gold'));
  demo2.push(normalText22('23#符文 + 盾牌', '暴風之盾 物免盾', 'Gold'));
  demo2.push(normalText22('22#符文 + 盾牌', '警戒之墙', 'Gold'));
  demo2.push(dr());
  demo2.push(smallTitle('手套'));
  demo2.push(normalText22('23#符文 + 手套', '德古拉之握 卓古拉手套', 'Gold'));
  demo2.push(normalText22('22#符文 + 手套', '法師之拳 法拳', 'Gold'));
  demo2.push(normalText22('21#符文 + 手套', '塔格奧之爪', 'Green'));
  demo2.push(normalText22('20#符文 + 手套', '運氣守護 运气手', 'Gold'));
  demo2.push(dr());
  demo2.push(smallTitle('腰带'));
  demo2.push(normalText22('27#符文 + 腰带', '蜘蛛之网 技能腰', 'Gold'));
  demo2.push(normalText22('23#符文 + 腰带', '雷神之力 雷神腰', 'Gold'));
  demo2.push(normalText22('22#符文 + 腰带', '黃金裹腰 黄金腰带', 'Gold'));
  demo2.push(normalText22('21#符文 + 腰带', '塔拉夏腰带', 'Green'));
  demo2.push(normalText22('20#符文 + 腰带', '剃刀之尾 穿刺腰带', 'Gold'));
  demo2.push(dr());
  demo2.push(smallTitle('鞋子'));
  demo2.push(normalText22('27#符文 + 鞋子', '影武者 鹦鹉鞋', 'Gold'));
  demo2.push(normalText22('25#符文 + 鞋子', '戰爭旅者 战旅', 'Gold'));
  demo2.push(normalText22('24#符文 + 鞋子', '蝕肉騎士 cb 鞋', 'Gold'));
  demo2.push(normalText22('23#符文 + 鞋子', '沙暴之旅 沙暴', 'Gold'));
  demo2.push(normalText22('20#符文 + 鞋子', '紗織鞋 纱织', 'Gold'));
  demo2.push(bigTitle('合成专属装备'));
  demo2.push(normalText('上面的有些合成材料是专属装备，防止买不到想要的，所以又做了个配方'));
  demo2.push(normalText2('解毒药剂 + 弓', '亚马逊专用弓'));
  demo2.push(normalText2('解毒药剂 + 标枪', '亚马逊标枪'));
  demo2.push(normalText2('解毒药剂 + 矛', '亚马逊矛'));
  demo2.push(normalText2('解毒药剂 + 任意头盔', '野蛮人头盔'));
  demo2.push(normalText2('解毒药剂 + 木棒', '德鲁伊头盔'));
  demo2.push(normalText2('解毒药剂 + 双手法杖', '女巫法珠'));
  demo2.push(normalText2('解毒药剂 + 死灵魔杖', '死灵法师盾牌'));
  demo2.push(normalText2('解毒药剂 + 盾牌', '圣骑士盾牌'));
  demo2.push(bigTitle('小号符文换取大号符文'));
  demo2.push(normalText('统一为8个换取，8个比较好计算刚好两列背包', 'Yellow', 2));
  demo2.push(normalText2('8个1#符文', '20#符文', '', 2));
  demo2.push(normalText2('8个2#符文', '20#符文', '', 2));
  demo2.push(normalText2('8个3#符文', '20#符文', '', 2));
  demo2.push(normalText2('8个4#符文', '20#符文', '', 2));
  demo2.push(normalText2('8个5#符文', '20#符文', '', 2));
  demo2.push(normalText2('8个6#符文', '20#符文', '', 2));
  demo2.push(normalText2('8个7#符文', '20#符文', '', 2));
  demo2.push(normalText2('8个8#符文', '22#符文', '', 2));
  demo2.push(normalText2('8个9#符文', '20#符文', '', 2));
  demo2.push(normalText2('8个10#符文', '20#符文', '', 2));
  demo2.push(normalText2('8个11#符文', '22#符文', '', 2));
  demo2.push(normalText2('8个12#符文', '20#符文', '', 2));
  demo2.push(normalText2('8个13#符文', '20#符文', '', 2));
  demo2.push(normalText2('8个14#符文', '20#符文', '', 2));
  demo2.push(normalText2('8个15#符文', '25#符文', '', 2));
  demo2.push(normalText2('8个16#符文', '22#符文', '', 2));
  demo2.push(normalText2('8个17#符文', '23#符文', '', 2));
  demo2.push(normalText2('8个18#符文', '24#符文', '', 2));
  demo2.push(normalText2('8个19#符文', '24#符文', '', 2));
  demo2.push(normalText2('3个19#符文', '20#符文', '', 2));
  demo2.push(bigTitle('小符文升/降级'));
  demo2.push(normalText('T网上小号符文几乎都是一换一，添加珠宝作为手续费', 'Red', 2));
  demo2.push(normalText('所有符文升降级都不需要宝石，原升级配方保留。', 'Red', 2));
  demo2.push(normalText('符文降级一个珠宝，符文升级两个珠宝', 'Red', 2));
  demo2.push(normalText2('1个19#符文-2#符文 + 1 珠宝', '1个18#符文-1#符文', '', 2));
  demo2.push(normalText2('1个1#符文-18#符文 + 2 珠宝', '1个2#符文-19#符文', '', 2));
  demo2.push(bigTitle('大符文升/降级，T网比例'));
  demo2.push(normalText('注意两边符文可以左右互换，可升级可降级', 'Red', 2));
  demo2.push(normalText('商店买不到的珠宝作为系统手续费', 'Red', 2));
  demo2.push(normalText22('20#符文 + 珠宝', '18#符文 + 18#符文', '', 2));
  demo2.push(normalText22('21#符文 + 珠宝', '20#符文 + 18#符文', '', 2));
  demo2.push(normalText22('22#符文 + 珠宝', '21#符文 + 20#符文', '', 2));
  demo2.push(normalText22('23#符文 + 珠宝', '22#符文 + 20#符文', '', 2));
  demo2.push(normalText22('24#符文 + 珠宝', '23#符文 + 21#符文', '', 2));
  demo2.push(normalText22('25#符文 + 珠宝', '2 23#符文', '', 2));
  demo2.push(normalText22('26#符文 + 珠宝', '25#符文 23#符文', '', 2));
  demo2.push(normalText22('27#符文 + 珠宝', '3 24#符文', '', 2));
  demo2.push(normalText22('28#符文 + 珠宝', '2 26#符文', '', 2));
  demo2.push(normalText22('29#符文 + 珠宝', '28#符文 + 27#符文', '', 2));
  demo2.push(normalText22('30#符文 + 珠宝', '2 28#符文', '', 2));
  demo2.push(normalText22('31#符文 + 珠宝', '30#符文 + 28#符文', '', 2));
  demo2.push(normalText22('32#符文 + 珠宝', '26#符文 + 15#符文', '', 2));
  demo2.push(normalText22('33#符文 + 珠宝', '28#符文 + 15#符文', '', 2));
  demo2.push(bigTitle('宝石与符文'));
  demo2.push(normalText22('20#符文 + 无暇紫宝石 ', ' 3 完美紫宝石'));
  demo2.push(normalText22('8#符文 + 钥匙 ', ' 1 完美紫宝石 + 钥匙'));
  demo2.push(normalText2('20#符文 + 钥匙 ', ' 3个8#符文(结合上下公式可实现所有宝石与符文互换)'));
  demo2.push(normalText2('6 完美骷髅宝石 ', ' 3 完美紫宝石'));
  demo2.push(normalText2('6 完美红宝石 ', ' 3 完美紫宝石', 'Red'));
  demo2.push(normalText2('6 完美黄宝石 ', ' 2 完美紫宝石', 'Yellow'));
  demo2.push(normalText2('6 完美绿宝石 ', ' 2 完美紫宝石', 'Green'));
  demo2.push(normalText2('6 完美蓝宝石 ', ' 2 完美紫宝石', 'Blue'));
  demo2.push(normalText2('6 完美白宝石 ', ' 2 完美紫宝石'));
  demo2.push(bigTitle('符文与珠宝'));
  demo2.push(normalText2('20#符文 + 解冻药剂(商店黄色的药剂) ', ' 3 亮金珠宝', 'Yellow'));
  demo2.push(normalText2('1 亮金珠宝 ', ' 3 蓝色珠宝', 'Blue'));
  demo2.push(normalText2('9 珠宝 ', ' 20#符文'));
  demo2.push(bigTitle('符文与底材'));
  demo2.push(normalText2('20#符文 + 盾牌 ', ' 4孔君主盾'));
  demo2.push(normalText2('8#符文 + 剑 ', ' 4孔水晶剑'));
  D2RMM.writeJson(demo2panelhdFilename, demo2panelhd);
// demo3 模组说明
  const demo3panelhdFilename = 'global\\ui\\layouts\\demo3panelhd.json';
  const demo3panelhd = D2RMM.readJson(demo3panelhdFilename);
  demo3panelhd.children[1].children[0].children = [];
  const demo3 = demo3panelhd.children[1].children[0].children;
  demo3.push(bigTitle('DEMOMOD功能'));
  demo3.push(normalText('不包括前面两页说明的功能', 'Yellow'));
  demo3.push(normalText('MOD说明百科，就是你现在看的这个，笑'));
  demo3.push(normalText('7页无缩放大箱子16X16，比需缩放的大箱子略小但更美观'));
  demo3.push(normalText('中盒子10X10，跟初始箱子一样大，同样无缩放且方方正正，百科可由此右侧点击弹出'));
  demo3.push(normalText('手工品的词条全满，20fcr项链更好做了'));
  demo3.push(normalText('大幅增加 6boss 钥匙爆率，适配邪恶区域'));
  demo3.push(normalText('单机要打所有职业火炬，爆率要适度调高些，火炬没法刷新属性(经试验无法增加刷新配方)'));
  demo3.push(normalText('超强白装一定是15ed，非超强白装全是满防御和攻击力，但超强白装掉率没改'));
  demo3.push(normalText('死灵法师的召唤物可以穿过彼此，不再卡位，a2洞窟没那么遭罪了，纯招死灵增强'));
  demo3.push(normalText('符文之语满变量，蓝色金色绿色暗金词缀不做更改，保留暗黑2装备精华的部分'));
  demo3.push(normalText('增加赌博几率，避免金币后期没用，各职业的专属武器也能赌了，比如法师的次元，飞机头等，'));
  demo3.push(normalText('普通模式只出普通级装备，噩梦只出扩展级装备，地狱只出精华级装备，'));
  demo3.push(normalText('一直刷不到日用品暗金可以赌博试试，概率控制得还可以'));
  demo3.push(normalText('关底boss bug杀适配2.6/2.7 邪恶区域，原有 bug 杀文件已经过时不适配邪恶区域'));
  demo3.push(normalText('扩大邪恶区域出现场景数量，邪恶区域将一次性循环很多张地图'));
  demo3.push(normalText('战斗指挥，战斗命令，大吼延长基础时间从30至300秒，不更改其加血量尽量不影响游戏平衡'));
  demo3.push(normalText('野蛮人战嗥基础持续时间从12延长至120秒'));
  demo3.push(normalText('野蛮人狂乱基础持续时间从6延长至30秒'));
  demo3.push(normalText('刺客聚气时间从原来15秒增加到30秒'));
  demo3.push(normalText('刺客影散、速度爆发、淬毒、利刃之盾基础持续时间从120延长至360秒'));
  demo3.push(normalText('法师寒冰甲、冰封甲，碎冰甲、能量护盾、附魔基础持续时间从144延长至432秒'));
  demo3.push(normalText('圣骑士圣盾从30延长至300秒'));
  demo3.push(normalText('德鲁伊变狼变熊基础持续时间从40延长至400秒'));
  demo3.push(normalText('死灵法师诅咒基础持续时间延长'));
  demo3.push(normalText('死灵法师骨墙骨牢基础持续时间从24延长至72秒'));
  demo3.push(normalText('死灵法师重生怪物基础持续时间从180延长至540秒，加强死灵'));
  demo3.push(normalText('修理装备降价为原有1/4，适度降低，尽量避免后期超强底材做符文之语导致的修复不起'));
  demo3.push(normalText('禁用战网，防止将 mod 在战网环境下使用导致被封，正版如果出现30天未提示'));
  demo3.push(normalText('请先用原版登录到人物选择界面退出即可，离线版请点击【Offline】程序'));
  demo3.push(normalText('钥匙/书籍堆叠数量提升至100，省得频繁购买，太多开荒角色购买花费太多也不好'));
  demo3.push(normalText('修改城镇人物出现位置，A2人物出生点在镇中间，A3在出生点在凯恩附近'));
  demo3.push(normalText('A5凯恩移动到储物箱附近，城镇里可以找凯恩和出口距离变短了'));
  demo3.push(normalText('城镇里可以传送，冲锋，跳跃等'));
  demo3.push(normalText('删除技能的强制冷却时间，冰法加强'));
  demo3.push(normalText('战争指挥，战争命令在城里使用只作用于角色本身，在城外使用小弟才会被作用到'));
  demo3.push(normalText('新增一键点击角色进入地狱难度功能，退出游戏鼠标不用移动点击就能快速刷刷刷'));
  demo3.push(normalText('无法进入地狱的角色点击有提示且不会闪退，注意此功能无文本提示（文本太丑了）'));
  demo3.push(normalText('添加彩色词条（源于 jgmod），集中关注重点词条'));
  demo3.push(normalText('静音光环声音，不会那么吵了'));
  demo3.push(bigTitle('YTEMOD的功能'));
  demo3.push(normalText('刺客聚气图标以及刺客瞎眼特效优化'));
  demo3.push(normalText('物品名称前添加图标（通过字体实现）'));
  demo3.push(normalText('所有符文添加编号'));
  demo3.push(normalText('暗金、套装、符文之语装备添加吐槽及变量信息'));
  demo3.push(normalText('装备属性栏添加辅助信息'));
  demo3.push(normalText('如防具的防御变量范围值、负重信息、最大孔数，武器的攻击范围、攻速、最大孔数，'));
  demo3.push(normalText('如涉及有拾取价值则另加一行用于提示拾取价值信息，如底材孔数、手工底材、暗金套装物品等'));
  demo3.push(normalText('高价值物品在底材名称前加“★”提示。'));
  demo3.push(normalText('底材词缀（“特等”、“劣等”等）后置，“特等”红色突显'));
  demo3.push(normalText('四大垃圾词缀后置，统一改成“劣等”，淡青色显示，并默认屏蔽地面显示（拾取后可见）'));
  demo3.push(normalText('带孔（含带孔无形）底材地面显示为淡粉紫色，纯无形底材地面显示为淡青色'));
  demo3.push(normalText('井、祭坛添加效果辅助信息。'));
  demo3.push(normalText('不重要的物品灰色显示，并精简一些物品名称'));
  demo3.push(normalText('内置两种屏蔽模式（默认无屏蔽），模式一（标准屏蔽）：屏蔽低级药水等杂物及低价值基础物品'));
  demo3.push(normalText('启用屏蔽后此类物品地面物品名称完全不显示，'));
  demo3.push(normalText('可切换怀旧模式后拾取或按ALT切换成点击物品模型拾取模式拾取，拾取后物品名称可见'));
  demo3.push(normalText('模式二（屏蔽项保留小图标）：低级药水、低级宝石等杂物及低价值基础物品屏蔽地面物品名称显示，'));
  demo3.push(normalText('但保留小图标显示，拾取后可显示完整物品名称。'));
  demo3.push(normalText('两种屏蔽模式都默认完全屏蔽四大垃圾词缀物品的物品名称地面显示'));
  demo3.push(normalText('地图场景名称后添加场景等级信息'));
  demo3.push(normalText('任务记录界面任务详情栏添加任务奖励信息'));
  demo3.push(normalText('角色进阶属性界面右上角增加FCR/FHR/FBR查询按钮，点击开启查询界面'));
  demo3.push(normalText('字体采用励字准圆，英文采用经典暗黑风格英文字体'));
  demo3.push(normalText('小站、入口添加指引光柱'));
  demo3.push(normalText('高号符文、大小咒符、珠宝、完美宝石、红门钥匙添加掉落光柱'));
  demo3.push(normalText('箱子、武器架、可破坏物品等加光效标注提示'));
  demo3.push(normalText('凯恩增加发光效果、危险怪物、部分超级金怪加光效标记提示'));
  demo3.push(normalText('更改战斗指挥、战斗命令、大叫技能光效，方便查看状态'));
  demo3.push(normalText('部分地牢类型的小地图立柱黄色小点标注，方便第五幕沃特之廳快速识别尼拉塞克的正确方位'));
  demo3.push(normalText('加长怪物血条'));
  demo3.push(normalText('前面板经验条增加刻度'));
  demo3.push(normalText('更换符文、红门钥匙贴图'));
  demo3.push(normalText('暗黑2百科全书，有符文之语，所有盒子配方，有价值物品等等'));
  D2RMM.writeJson(demo3panelhdFilename, demo3panelhd);

// demo4 可选功能
  const demo4panelhdFilename = 'global\\ui\\layouts\\demo4panelhd.json';
  const demo4panelhd = D2RMM.readJson(demo4panelhdFilename);
  demo4panelhd.children[1].children[0].children = [];
  const demo4 = demo4panelhd.children[1].children[0].children;
  demo4.push(bigTitle('组件下载方式'));
  demo4.push(normalText('DemoMod 组件下载和反馈群【661975153】', 'Yellow', 2));
  demo4.push(normalText('DemoMod 组件下载和反馈群【661975153】', 'Yellow', 2));
  demo4.push(normalText('DemoMod 组件下载和反馈群【661975153】', 'Yellow', 2));
  demo4.push(normalText('【大背包版本】和【各种组件】及【(A)DemoMod-D2RMM组件】于Q群下载', 'Yellow'));
  demo4.push(normalText('但其实原版 DemoMod 就是我的自用版，我喜欢原版，所以不提倡修改', 'Yellow'));
  demo4.push(normalText('不过如果你刚好会D2RMM，我也已经提供专门的 DemoMod 组件供你们自由修改', 'Yellow'));
  demo4.push(normalText('还是那句话，不建议修改，DemoMod 每项设置都是经过深思熟虑的，可玩性很高', 'Yellow'));
  demo4.push(normalText('但毕竟萝卜青菜各有所爱~', 'Yellow'));
  demo4.push(bigTitle('可选组件'));
  demo4.push(normalText('大背包可放太多神符破坏游戏平衡，所有有大背包和无大背包(自用版)两个版本'));
  demo4.push(normalText('邪恶区域可固定王座，超市，劳模3c、古墓，牛场，石质古墓，古代通道，地穴等'));
  demo4.push(normalText('不修改刺客聚气和战斗指挥和战斗命令时间'));
  demo4.push(normalText('多倍怪-1倍'));
  demo4.push(normalText('多倍怪-3倍'));
  demo4.push(normalText('多倍怪-5倍'));
  demo4.push(normalText('禁止无用暗金掉落-屏蔽小部分暗金戒指项链手套增加乔丹马拉亮金手套出现概率'));
  demo4.push(normalText('提高染色率-暗金X2'));
  demo4.push(normalText('提高染色率-暗金X3'));
  demo4.push(normalText('提高染色率-暗金X3-绿装X3'));
  demo4.push(normalText('提高染色率-暗金X5'));
  demo4.push(normalText('提高染色率-暗金X5-绿装X5'));
  demo4.push(normalText('提高染色率-蓝金绿暗金X3-超强X3'));
  demo4.push(normalText('提高染色率-蓝金绿暗金X5-超强X5'));
  demo4.push(normalText('首杀bug+6boss钥匙概率增加+高级符文掉率小幅增加+精华物品掉率小幅增加'));
  demo4.push(normalText('首杀bug+6boss钥匙概率增加+高级符文掉率增加+精华物品掉率增加'));
  demo4.push(normalText('首杀bug+怪物不掉杂物和药剂+6boss钥匙概率增加'));
  demo4.push(normalText('首杀bug+怪物不掉杂物和药剂+6boss钥匙概率增加+高级符文掉率增加+精华物品掉率增加'));
  demo4.push(normalText('邪恶区域-6boss钥匙场景(A1女伯爵,A2召唤者,A5尼拉塞克)'));
  demo4.push(normalText('邪恶区域-大范围轮刷，来自yte离线版(DemoMod默认)'));
  demo4.push(normalText('邪恶区域-MF场景(地穴+安姐+石质古墓+古代通道+劳模)'));
  demo4.push(normalText('邪恶区域-热门4图同时出现(牛场,塔墓,魔殿,王座)'));
  D2RMM.writeJson(demo4panelhdFilename, demo4panelhd);
}


