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


// 凸显冰寒强化文本

if (config.coldText) {
  const monstersFilename = 'local\\lng\\strings\\monsters.json';
  const monsters = D2RMM.readJson(monstersFilename);
  monsters.forEach((item) => {
    if (item.Key === 'monsteruniqueprop1') {
      item['zhTW'] = 'ÿcN╪冰寒強化';
      item['zhCN'] = 'ÿcN╪冰霜强化';
    }
  });
  D2RMM.writeJson(monstersFilename, monsters);
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
  demopanelhd.children[2].fields.textStrings = ['常用公式', '模拟交易', '模组功能', '暂留未定']
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
  demo1.push(normalText('如果没有指定数量，默认为一个', 'Red', 2));
  demo1.push(normalText('如果只有一个的物品，直接合成即可', 'Red', 2));
  demo1.push(normalText('合成暗金一场游戏只能用一次，第二次将变为亮金，需要小退后重建游戏', 'Red', 2));
  demo1.push(normalText('小退是角色退出游戏再重进就是新的一场游戏，大退是退出暗黑2重置版游戏', 'Red', 2));
  demo1.push(normalText('切换难度刷地图可避免出现重复彩虹刻面暗金珠或变成亮金', 'Red', 2));
  demo1.push(space());
  demo1.push(bigTitle('常用合成公式'));
  demo1.push(normalText2('回城书 + 辨识书', '牛场红门', 'Red'));
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
  demo1.push(normalText2('火炬 + 3个小型神符', '全抗生命 + 法力生命 + 最大伤害准确生命小板子'));
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
  demo1.push(normalText('参考经验条中间的暗黑2百科书具体替换规则如下', 'Orange'));
  demo1.push(normalText('1. 无暇宝石替换各种符文要求', 'Orange'));
  demo1.push(normalText('2. 珠宝可换成符文', 'Orange'));
  demo1.push(normalText('3. 蓝药替换掉完美紫宝石'));
  demo1.push(normalText('4. 红药替换掉完美红宝石', 'Red'));
  demo1.push(normalText('5. 融冰替换掉完美蓝宝石', 'Blue'));
  demo1.push(normalText('6. 解毒替换掉完美绿宝石', 'Green'));
  demo1.push(dr());
  demo1.push(smallTitle('例如'));
  demo1.push(normalText('蓝色项链 + 拉尔 8# + 完美的紫宝石 + 任何珠宝 => 施法项链'));
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
  demo2.push(dr());
  demo2.push(bigTitle('合成专属装备'));
  demo2.push(normalText('上面的有些合成材料是专属装备，防止买不到想要的，所以又做了个配方'));
  demo2.push(normalText2('珠宝 + 弓', '亚马逊专用弓'));
  demo2.push(normalText2('珠宝 + 标枪', '亚马逊标枪'));
  demo2.push(normalText2('珠宝 + 矛', '亚马逊矛'));
  demo2.push(normalText2('珠宝 + 任意头盔', '野蛮人头盔'));
  demo2.push(normalText2('珠宝 + 木棒', '德鲁伊头盔'));
  demo2.push(normalText2('珠宝 + 双手法杖', '女巫法珠'));
  demo2.push(normalText2('珠宝 + 死灵魔杖', '死灵法师盾牌'));
  demo2.push(normalText2('珠宝 + 盾牌', '圣骑士盾牌'));
  demo2.push(dr());
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
  demo2.push(dr());
  demo2.push(bigTitle('小符文升/降级'));
  demo2.push(normalText('T网上小号符文几乎都是一换一，添加珠宝作为手续费', 'Red', 2));
  demo2.push(normalText('所有符文升降级都不需要宝石，原升级配方保留。', 'Red', 2));
  demo2.push(normalText('符文降级一个珠宝，符文升级两个珠宝', 'Red', 2));
  demo2.push(normalText2('1个19#符文-2#符文 + 1 珠宝', '1个18#符文-1#符文', '', 2));
  demo2.push(normalText2('1个1#符文-18#符文 + 2 珠宝', '1个2#符文-19#符文', '', 2));
  demo2.push(dr());
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
  demo2.push(dr());
  demo2.push(bigTitle('宝石与符文'));
  demo2.push(normalText22('20#符文 + 无暇紫宝石 ', ' 3 完美紫宝石'));
  demo2.push(normalText22('8#符文 + 钥匙 ', ' 1 完美紫宝石 + 钥匙'));
  demo2.push(normalText2('20#符文 + 钥匙 ', ' 3个8#符文(结合上下公式可实现所有符文与宝石互换)'));
  demo2.push(normalText2('2 完美骷髅宝石 ', ' 1 完美紫宝石'));
  demo2.push(normalText2('2 完美红宝石 ', ' 1 完美紫宝石', 'Red'));
  demo2.push(normalText2('3 完美黄宝石 ', ' 1 完美紫宝石', 'Yellow'));
  demo2.push(normalText2('3 完美绿宝石 ', ' 1 完美紫宝石', 'Green'));
  demo2.push(normalText2('3 完美蓝宝石 ', ' 1 完美紫宝石', 'Blue'));
  demo2.push(normalText2('3 完美白宝石 ', ' 1 完美紫宝石'));
  demo2.push(dr());
  demo2.push(bigTitle('符文与珠宝'));
  demo2.push(normalText2('20#符文 + 解冻药剂(商店黄色的药剂) ', ' 3 亮金珠宝', 'Yellow'));
  demo2.push(normalText2('1 亮金珠宝 ', ' 3 蓝色珠宝', 'Blue'));
  demo2.push(normalText2('9 珠宝 ', ' 20#符文'));
  demo2.push(dr());
  demo2.push(bigTitle('符文与底材'));
  demo2.push(normalText2('20#符文 + 盾牌 ', ' 4孔君主盾'));
  demo2.push(normalText2('8#符文 + 剑 ', ' 4孔水晶剑'));
  D2RMM.writeJson(demo2panelhdFilename, demo2panelhd);
// demo3 橙装合成
  const demo3panelhdFilename = 'global\\ui\\layouts\\demo3panelhd.json';
  const demo3panelhd = D2RMM.readJson(demo3panelhdFilename);
  demo3panelhd.children[1].children[0].children = [];
  const demo3 = demo3panelhd.children[1].children[0].children;
  demo3.push(normalText('Demo Mod 组件下载和反馈群【661975153】', 'Yellow', 2));
  D2RMM.writeJson(demo3panelhdFilename, demo3panelhd);

// demo4 模组说明
  const demo4panelhdFilename = 'global\\ui\\layouts\\demo4panelhd.json';
  const demo4panelhd = D2RMM.readJson(demo4panelhdFilename);
  demo4panelhd.children[1].children[0].children = [];
  const demo4 = demo3panelhd.children[1].children[0].children;
  D2RMM.writeJson(demo4panelhdFilename, demo4panelhd);
}


