//  常规
//
//     现在可以传送并使用狼/熊形式的战斗命令/战斗命令
//     腐尸藤和太阳爬行者现在是1个技能（现在补充生命/法力）
//     太阳爬行者被移除 -> 新技能：召唤精通
//     毒爬行者和腐尸藤可以同时召唤
//     灵魂是无法杀死的
//
// 召唤精通
//
//     增加藤蔓的生命和所有召唤物的伤害，并减少施加在它们身上的诅咒持续时间
//
// 毒爬行者
//
//     毒害增加400%（在普通时已经很强了，但下降很快，因此伤害增加，说实话很难平衡）
//     协同 效应：
//         狂犬病协同作用被召唤精通取代，从10%->提升至20%
//
// 灵狼
//
//     有机会在罢工时施放衰败
//
// 恐狼
//
//     最大狼群从3->5
//     有机会施放尸体爆炸
//
// 灰 熊
//
//     总是在打击时施放尸体爆炸
//
// Lycanthropy
//
//     当处于狼/熊形态时，您将获得：
//         基础等级10：无视目标防御
//         基础等级20：怪物物理免疫力被削弱
//
// 末日
//
//     基本持续时间增加 10 -> 300 秒
// skills.txt

const skillsFilename = 'global\\excel\\skills.txt';
const skills = D2RMM.readTsv(skillsFilename);

skills.rows.forEach((row) => {

    // Allow teleport and BOs in every form
    if (row["skill"] === "Teleport") {
        row["restrict"] = 1;
    }

    if (row["skill"] === "Battle Orders" || row["skill"] === "Battle Command") {
        row["restrict"] = 1;
    }

    // add passive bonuses
    if (row["skill"] === "Plague Poppy") {
        row["passivestat2"] = "maxhp";
        row["passivecalc2"] = "skill('Summon Mastery'.lvl) * skill('Summon Mastery'.par1) * 256";
        row["EDmgSymPerCalc"] = "skill('Summon Mastery'.blvl)*skill('Summon Mastery'.par2)";
        row["EMinLev3"] = row["EMinLev3"] * 4;
        row["EMinLev4"] = row["EMinLev4"] * 4;
        row["EMinLev5"] = row["EMinLev5"] * 4;
        row["EMaxLev3"] = row["EMaxLev3"] * 4;
        row["EMaxLev4"] = row["EMaxLev4"] * 4;
        row["EMaxLev5"] = row["EMaxLev5"] * 4;
        row["HitShift"] = 4;
    }

    // add passive bonuses
    if (row["skill"] === "Raven") {
        row["DmgSymPerCalc"] = "skill('Summon Mastery'.blvl)*skill('Summon Mastery'.par4)";
    }

    // add passive bonuses
    if (row["skill"] === "Cycle of Life") {
        row["passivestat1"] = "maxhp";
        row["passivecalc1"] = "skill('Summon Mastery'.lvl) * skill('Summon Mastery'.par1) * 256";
    }

    // add passive bonuses
    if (row["skill"] === "Summon Grizzly") {
        row["DmgSymPerCalc"] = "skill('Summon Mastery'.blvl)*skill('Summon Mastery'.par4)";
    }

    // add passive bonuses
    if (row["skill"] === "Summon Fenris") {
        row["DmgSymPerCalc"] = "skill('Summon Mastery'.blvl)*skill('Summon Mastery'.par4)";
        // maximum pet
        row["Param3"] = 5;
    }

    // add passive bonuses
    if (row["skill"] === "Summon Spirit Wolf") {
        row["EDmgSymPerCalc"] = "skill('Summon Grizzly'.ln12) + (skill('Summon Mastery'.blvl)*skill('Summon Mastery'.par4))";
    }

    if (row["skill"] === "Cycle of Life") {
        row["pettype"] = "vine2";
    }

    // Add manasteal to carrion vine
    if (row["skill"] === "CorpseCycler") {
        row["Param3"] = 4;
        row["Param4"] = 1;
        row["calc2"] = "ln34";
        row["*Param3 Description"] = "Manasteal % baseline";
        row["*Param4 Description"] = "Manasteal % per level";
    }

    // Make 3rd vine as passive
    if (row["skill"] === "Vines") {
        row['skill'] = 'Summon Mastery';
        row['*Id'] = 241;
        row['charclass'] = 'dru';
        row['skilldesc'] = 'vines';
        row['srvstfunc'] = '';
        row['srvdofunc'] = '';
        row['srvstopfunc'] = '';
        row['prgstack'] = '';
        row['srvprgfunc1'] = '';
        row['srvprgfunc2'] = '';
        row['srvprgfunc3'] = '';
        row['prgcalc1'] = '';
        row['prgcalc2'] = '';
        row['prgcalc3'] = '';
        row['prgdam'] = '';
        row['srvmissile'] = '';
        row['decquant'] = '';
        row['lob'] = '';
        row['srvmissilea'] = '';
        row['srvmissileb'] = '';
        row['srvmissilec'] = '';
        row['useServerMissilesOnRemoteClients'] = '';
        row['srvoverlay'] = '';
        row['aurafilter'] = '';
        row['aurastate'] = '';
        row['auratargetstate'] = '';
        row['auralencalc'] = '';
        row['aurarangecalc'] = '';
        row['aurastat1'] = '';
        row['aurastatcalc1'] = '';
        row['aurastat2'] = '';
        row['aurastatcalc2'] = '';
        row['aurastat3'] = '';
        row['aurastatcalc3'] = '';
        row['aurastat4'] = '';
        row['aurastatcalc4'] = '';
        row['aurastat5'] = '';
        row['aurastatcalc5'] = '';
        row['aurastat6'] = '';
        row['aurastatcalc6'] = '';
        row['auraevent1'] = '';
        row['auraeventfunc1'] = '';
        row['auraevent2'] = '';
        row['auraeventfunc2'] = '';
        row['auraevent3'] = '';
        row['auraeventfunc3'] = '';
        row['passivestate'] = '';
        row['passiveitype'] = '';
        row['passivereqweaponcount'] = '';
        row['passivestat1'] = '';
        row['passivecalc1'] = '';
        row['passivestat2'] = '';
        row['passivecalc2'] = '';
        row['passivestat3'] = '';
        row['passivecalc3'] = '';
        row['passivestat4'] = '';
        row['passivecalc4'] = '';
        row['passivestat5'] = '';
        row['passivecalc5'] = '';
        row['passivestat6'] = '';
        row['passivecalc6'] = '';
        row['passivestat7'] = '';
        row['passivecalc7'] = '';
        row['passivestat8'] = '';
        row['passivecalc8'] = '';
        row['passivestat9'] = '';
        row['passivecalc9'] = '';
        row['passivestat10'] = '';
        row['passivecalc10'] = '';
        row['summon'] = '';
        row['pettype'] = '';
        row['petmax'] = '';
        row['summode'] = '';
        row['sumskill1'] = '';
        row['sumsk1calc'] = '';
        row['sumskill2'] = '';
        row['sumsk2calc'] = '';
        row['sumskill3'] = '';
        row['sumsk3calc'] = '';
        row['sumskill4'] = '';
        row['sumsk4calc'] = '';
        row['sumskill5'] = '';
        row['sumsk5calc'] = '';
        row['sumumod'] = '';
        row['sumoverlay'] = '';
        row['stsuccessonly'] = '';
        row['stsound'] = '';
        row['stsoundclass'] = '';
        row['stsounddelay'] = '';
        row['weaponsnd'] = '';
        row['dosound'] = '';
        row['dosound a'] = '';
        row['dosound b'] = '';
        row['tgtoverlay'] = '';
        row['tgtsound'] = '';
        row['prgoverlay'] = '';
        row['prgsound'] = '';
        row['castoverlay'] = '';
        row['cltoverlaya'] = '';
        row['cltoverlayb'] = '';
        row['cltstfunc'] = '';
        row['cltdofunc'] = '';
        row['cltstopfunc'] = '';
        row['cltprgfunc1'] = '';
        row['cltprgfunc2'] = '';
        row['cltprgfunc3'] = '';
        row['cltmissile'] = '';
        row['cltmissilea'] = '';
        row['cltmissileb'] = '';
        row['cltmissilec'] = '';
        row['cltmissiled'] = '';
        row['cltcalc1'] = '';
        row['*cltcalc1 desc'] = '';
        row['cltcalc2'] = '';
        row['*cltcalc2 desc'] = '';
        row['cltcalc3'] = '';
        row['*cltcalc3 desc'] = '';
        row['warp'] = '';
        row['immediate'] = '';
        row['enhanceable'] = 1;
        row['attackrank'] = 0;
        row['noammo'] = '';
        row['range'] = 'none';
        row['weapsel'] = '';
        row['itypea1'] = '';
        row['itypea2'] = '';
        row['itypea3'] = '';
        row['etypea1'] = '';
        row['etypea2'] = '';
        row['itypeb1'] = '';
        row['itypeb2'] = '';
        row['itypeb3'] = '';
        row['etypeb1'] = '';
        row['etypeb2'] = '';
        row['anim'] = 'SC';
        row['seqtrans'] = 'SC';
        row['monanim'] = 'xx';
        row['seqnum'] = '';
        row['seqinput'] = '';
        row['durability'] = '';
        row['UseAttackRate'] = '';
        row['LineOfSight'] = '';
        row['TargetableOnly'] = '';
        row['SearchEnemyXY'] = '';
        row['SearchEnemyNear'] = '';
        row['SearchOpenXY'] = '';
        row['SelectProc'] = '';
        row['TargetCorpse'] = '';
        row['TargetPet'] = '';
        row['TargetAlly'] = '';
        row['TargetItem'] = '';
        row['AttackNoMana'] = '';
        row['TgtPlaceCheck'] = '';
        row['KeepCursorStateOnKill'] = '';
        row['ContinueCastUnselected'] = '';
        row['ClearSelectedOnHold'] = '';
        row['ItemEffect'] = '';
        row['ItemCltEffect'] = '';
        row['ItemTgtDo'] = '';
        row['ItemTarget'] = '';
        row['ItemCheckStart'] = '';
        row['ItemCltCheckStart'] = '';
        row['ItemCastSound'] = '';
        row['ItemCastOverlay'] = '';
        row['skpoints'] = '';
        row['reqlevel'] = 24;
        row['maxlvl'] = 20;
        row['reqstr'] = '';
        row['reqdex'] = '';
        row['reqint'] = '';
        row['reqvit'] = '';
        row['reqskill1'] = '';
        row['reqskill2'] = '';
        row['reqskill3'] = '';
        row['restrict'] = '';
        row['State1'] = '';
        row['State2'] = '';
        row['State3'] = '';
        row['localdelay'] = '';
        row['globaldelay'] = '';
        row['leftskill'] = 0;
        row['rightskill'] = 0;
        row['repeat'] = '';
        row['alwayshit'] = '';
        row['usemanaondo'] = '';
        row['startmana'] = '';
        row['minmana'] = 0;
        row['manashift'] = 8;
        row['mana'] = 0;
        row['lvlmana'] = 0;
        row['interrupt'] = 1;
        row['InTown'] = '';
        row['aura'] = '';
        row['periodic'] = '';
        row['perdelay'] = '';
        row['finishing'] = '';
        row['prgchargestocast'] = '';
        row['prgchargesconsumed'] = '';
        row['passive'] = 1;
        row['progressive'] = '';
        row['scroll'] = '';
        row['calc1'] = '';
        row['*calc1 desc'] = '';
        row['calc2'] = '';
        row['*calc2 desc'] = '';
        row['calc3'] = '';
        row['*calc3 desc'] = '';
        row['calc4'] = '';
        row['*calc4 desc'] = '';
        row['calc5'] = '';
        row['*calc5 desc'] = '';
        row['calc6'] = '';
        row['*calc6 desc'] = '';
        row['Param1'] = 120;
        row['*Param1 Description'] = 'HP per level';
        row['Param2'] = 20;
        row['*Param2 Description'] = 'Poison Creeper: Poison Damage per level';
        row['Param3'] = 2;
        row['*Param3 Description'] = 'Carrion Vine Heal Mana %';
        row['Param4'] = 10;
        row['*Param4 Description'] = 'Summon Synergy Damage % Bonus';
        row['Param5'] = '';
        row['*Param5 Description'] = '';
        row['Param6'] = '';
        row['*Param6 Description'] = '';
        row['Param7'] = '';
        row['*Param7 Description'] = '';
        row['Param8'] = '';
        row['*Param8 Description'] = '';
        row['Param9'] = '';
        row['*Param9 Description'] = '';
        row['Param10'] = '';
        row['*Param10 Description2'] = '';
        row['Param11'] = '';
        row['*Param11 Description'] = '';
        row['Param12'] = '';
        row['*Param12 Description'] = '';
        row['InGame'] = 1;
        row['ToHit'] = '';
        row['LevToHit'] = '';
        row['ToHitCalc'] = '';
        row['ResultFlags'] = '';
        row['HitFlags'] = '';
        row['HitClass'] = '';
        row['Kick'] = '';
        row['HitShift'] = '';
        row['SrcDam'] = '';
        row['MinDam'] = '';
        row['MinLevDam1'] = '';
        row['MinLevDam2'] = '';
        row['MinLevDam3'] = '';
        row['MinLevDam4'] = '';
        row['MinLevDam5'] = '';
        row['MaxDam'] = '';
        row['MaxLevDam1'] = '';
        row['MaxLevDam2'] = '';
        row['MaxLevDam3'] = '';
        row['MaxLevDam4'] = '';
        row['MaxLevDam5'] = '';
        row['DmgSymPerCalc'] = '';
        row['EType'] = '';
        row['EMin'] = '';
        row['EMinLev1'] = '';
        row['EMinLev2'] = '';
        row['EMinLev3'] = '';
        row['EMinLev4'] = '';
        row['EMinLev5'] = '';
        row['EMax'] = '';
        row['EMaxLev1'] = '';
        row['EMaxLev2'] = '';
        row['EMaxLev3'] = '';
        row['EMaxLev4'] = '';
        row['EMaxLev5'] = '';
        row['EDmgSymPerCalc'] = '';
        row['ELen'] = '';
        row['ELevLen1'] = '';
        row['ELevLen2'] = '';
        row['ELevLen3'] = '';
        row['ELenSymPerCalc'] = '';
        row['aitype'] = '';
        row['aibonus'] = '';
        row['cost mult'] = '';
        row['cost add'] = '';
        row['*eol\r'] = 0;
    }

    // Make Armageddon last longer
    if (row["skill"] === "Armageddon") {
        row["Param1"] = 7500;
    }

    // Add curse resistance to monsters
    if (
        row["skill"] === "Plague Poppy" ||
        row["skill"] === "Cycle of Life" ||
        row["skill"] === "Summon Spirit Wolf" ||
        row["skill"] === "Summon Fenris" ||
        row["skill"] === "Summon Grizzly" ||
        row["skill"] === "Oak Sage" ||
        row["skill"] === "Heart of Wolverine" ||
        row["skill"] === "Spirit of Barbs"
    ) {
        for (i = 1; i < 7; i++) {
            if (row["aurastat" + i] === "") {
                row["aurastat" + i] = "curse_resistance";
                row["aurastatcalc" + i] = "min(100, skill('Summon Mastery'.lvl) * 4)";
                break;

            }
        }
    }

    // Shape Shift buffs
    if (row["skill"] === "Wearwolf" || row["skill"] === "Wearbear") {
        // ITD at base level 10
        row["aurastat5"] = "item_ignoretargetac";
        row["aurastatcalc5"] = "(skill('Shape Shifting'.blvl) < 10) ? 0 : 1";
        // Phys sunder at base level 20
        row["aurastat6"] = "item_pierce_damage_immunity";
        row["aurastatcalc6"] = "(skill('Shape Shifting'.blvl) < 20) ? 0 : 1";
    }

});

D2RMM.writeTsv(skillsFilename, skills);

// pettype.txt
const pettypeFilename = 'global\\excel\\pettype.txt';
const pettype = D2RMM.readTsv(pettypeFilename);

pettype.rows.forEach((row) => {
    if (row["pet type"] === "vine") {
        pettype.rows.push({
            ...row,
            "pet type": "vine2"
        });
    }
});

D2RMM.writeTsv(pettypeFilename, pettype);

// Modify Skill descriptions
const skilldescFilename = 'global\\excel\\skilldesc.txt';
const skilldesc = D2RMM.readTsv(skilldescFilename);

skilldesc.rows.forEach((row) => {

    if (row["skilldesc"] === "plague poppy") {
        row["desccalcb3"] = "skill('Summon Mastery'.lvl) * skill('Summon Mastery'.par1)";
        row["dsc3textb2"] = "Skillname242";
        row["dsc3calca2"] = "skill('Summon Mastery'.par2)";
        row["dsc3line5"] = 18;
        row["dsc3texta5"] = "Skillname242";
    }

    if (row["skilldesc"] === "raven") {
        row["dsc3line5"] = 18;
        row["dsc3texta5"] = "Skillname242";
    }

    if (row["skilldesc"] === "summon spirit wolf") {
        row["dsc3line5"] = 18;
        row["dsc3texta5"] = "Skillname242";
    }

    if (row["skilldesc"] === "summon fenris") {
        row["dsc3line5"] = 18;
        row["dsc3texta5"] = "Skillname242";
    }

    if (row["skilldesc"] === "summon grizzly") {
        row["dsc3line5"] = 18;
        row["dsc3texta5"] = "Skillname242";
    }

    if (row["skilldesc"] === "cycle of life") {
        row["dsc3line1"] = 40;
        row["dsc3texta1"] = "Sksyn";
        row["dsc3textb1"] = "Skillname232";
        row["dsc3calca1"] = 2;
        row["dsc3line5"] = 18;
        row["dsc3texta5"] = "Skillname242";
    }

    if (row["skilldesc"] === "vines") {
        row["descline1"] = 74;
        row["desctexta1"] = "DruidSummonMastery";
        row["desccalca1"] = "lvl * par1";
        row["desccalcb1"] = "";
        row["descline2"] = 74;
        row["desctexta2"] = "DruidSummonMasteryDamagePercent";
        row["desccalca2"] = "lvl * par4";
        row["descline3"] = 74;
        row["desctexta3"] = "SummonCurseResist";
        row["desccalca3"] = "min(100, lvl * 4)";
    }
});

D2RMM.writeTsv(skilldescFilename, skilldesc);

// Modify Skill descriptions
const skillsJsonFilename = 'local\\lng\\strings\\skills.json';
const skillsJson = D2RMM.readJson(skillsJsonFilename);

skillsJson.forEach((row) => {

    // Rename skill Summon Mastery
    if (row["Key"] === "Skillname242") {
        row["enUS"] = "Summon Mastery";
    }

    // Change description Summon Mastery
    if (row["Key"] === "Skillld242") {
        row["enUS"] = "passive - increases life of vines and damage\nof all summoned creatures";
    }

    // Summon Spirit Wolf description
    if (row["Key"] === "Skillld228") {
        row["enUS"] = "summon a wolf with teleporting ability\nto fight by your side\nHas a chance to cast decrepify";
    }

    // Summon Dire Wolf description
    if (row["Key"] === "Skillld238") {
        row["enUS"] = "summon a wolf that becomes enraged,\neating corpses to increase damage\nit does to enemies\nHas a chance to dismember enemies\ndealing area damage";
    }

    // Summon Grizzly description
    if (row["Key"] === "Skillld248") {
        row["enUS"] = "summon a ferocious grizzly bear that\ndismembers every enemy dealing area damage.";
    }

    // Lycantrophy description
    if (row["Key"] === "Skillld225") {
        row["enUS"] = "passive - when in werewolf or werebear form you gain:\nEach lvl: improved duration and life\nBase lvl 10: Ignore Target's Defense\nBase lvl 20: Monster Physical Immunity is Sundered";
    }

    // Carrion Vine description
    if (row["Key"] === "Skillld232") {
        row["enUS"] = "summon a vine that eats corpses\nand replenishes your life and mana";
    }
});

// Add new text for + life
skillsJson.push({
    "id": 96675,
    "Key": "DruidSummonMastery",
    "enUS": "Life: %+d",
    "zhTW": "Life: %+d",
    "deDE": "Life: %+d",
    "esES": "Life: %+d",
    "frFR": "Life: %+d",
    "itIT": "Life: %+d",
    "koKR": "Life: %+d",
    "plPL": "Life: %+d",
    "esMX": "Life: %+d",
    "jaJP": "Life: %+d",
    "ptBR": "Life: %+d",
    "ruRU": "Life: %+d",
    "zhCN": "Life: %+d"
});

// Add new text for Damage %
skillsJson.push({
    "id": 96676,
    "Key": "DruidSummonMasteryDamagePercent",
    "enUS": "Damage: %+d%%",
    "zhTW": "Damage: %+d%%",
    "deDE": "Damage: %+d%%",
    "esES": "Damage: %+d%%",
    "frFR": "Damage: %+d%%",
    "itIT": "Damage: %+d%%",
    "koKR": "Damage: %+d%%",
    "plPL": "Damage: %+d%%",
    "esMX": "Damage: %+d%%",
    "jaJP": "Damage: %+d%%",
    "ptBR": "Damage: %+d%%",
    "ruRU": "Damage: %+d%%",
    "zhCN": "Damage: %+d%%"
});

// Add new text for Damage %
skillsJson.push({
    "id": 96677,
    "Key": "SummonCurseResist",
    "enUS": "Reduces curse duration of summons by %d%%",
    "zhTW": "Reduces curse duration of summons by %d%%",
    "deDE": "Reduces curse duration of summons by %d%%",
    "esES": "Reduces curse duration of summons by %d%%",
    "frFR": "Reduces curse duration of summons by %d%%",
    "itIT": "Reduces curse duration of summons by %d%%",
    "koKR": "Reduces curse duration of summons by %d%%",
    "plPL": "Reduces curse duration of summons by %d%%",
    "esMX": "Reduces curse duration of summons by %d%%",
    "jaJP": "Reduces curse duration of summons by %d%%",
    "ptBR": "Reduces curse duration of summons by %d%%",
    "ruRU": "Reduces curse duration of summons by %d%%",
    "zhCN": "Reduces curse duration of summons by %d%%"
});
/*
// Add new text for ITD and phys sunder
skillsJson.push({
    "id": 92031,
    "Key": "ShapeShiftItd",
    "enUS": "Ignore target's defense",
    "zhTW": "Ignore target's defense",
    "deDE": "Ignore target's defense",
    "esES": "Ignore target's defense",
    "frFR": "Ignore target's defense",
    "itIT": "Ignore target's defense",
    "koKR": "Ignore target's defense",
    "plPL": "Ignore target's defense",
    "esMX": "Ignore target's defense",
    "jaJP": "Ignore target's defense",
    "ptBR": "Ignore target's defense",
    "ruRU": "Ignore target's defense",
    "zhCN": "Ignore target's defense"
});

skillsJson.push({
    "id": 92032,
    "Key": "ShapeShiftSunder",
    "enUS": "Monster Physical Immunity is Sundered",
    "zhTW": "Monster Physical Immunity is Sundered",
    "deDE": "Monster Physical Immunity is Sundered",
    "esES": "Monster Physical Immunity is Sundered",
    "frFR": "Monster Physical Immunity is Sundered",
    "itIT": "Monster Physical Immunity is Sundered",
    "koKR": "Monster Physical Immunity is Sundered",
    "plPL": "Monster Physical Immunity is Sundered",
    "esMX": "Monster Physical Immunity is Sundered",
    "jaJP": "Monster Physical Immunity is Sundered",
    "ptBR": "Monster Physical Immunity is Sundered",
    "ruRU": "Monster Physical Immunity is Sundered",
    "zhCN": "Monster Physical Immunity is Sundered"
});
*/
D2RMM.writeJson(skillsJsonFilename, skillsJson);

// monstats.txt
const monstatsFilename = 'global\\excel\\monstats.txt';
const monstats = D2RMM.readTsv(monstatsFilename);


monstats.rows.forEach((row) => {
    // Make spirits unkillable
    if (row["AI"] === "Totem") {
        row["killable"] = "";
    }

    if (row["Id"] === "druidbear") {
        row["MonProp"] = "druidbear";
    }

    if (row["Id"] === "spiritwolf") {
        row["MonProp"] = "spiritwolf";
    }

    if (row["Id"] === "fenris") {
        row["MonProp"] = "fenris";
    }
});



D2RMM.writeTsv(monstatsFilename, monstats);

// monprop.txt
const monpropFilename = 'global\\excel\\monprop.txt';
const monprop = D2RMM.readTsv(monpropFilename);

// Add wolves / bear CE + Decrepify
monprop.rows.push(
    {
        "Id": "spiritwolf",
        "prop1": "hit-skill",
        "par1": 87,
        "min1": 50,
        "max1": 10,

        "prop1 (N)": "hit-skill",
        "par1 (N)": 87,
        "min1 (N)": 50,
        "max1 (N)": 10,

        "prop1 (H)": "hit-skill",
        "par1 (H)": 87,
        "min1 (H)": 50,
        "max1 (H)": 10,

        "*eol\r": 0
    });

monprop.rows.push(
    {
        "Id": "fenris",
        "prop1": "hit-skill",
        "par1": 74,
        "min1": 80,
        "max1": 25,

        "prop1 (N)": "hit-skill",
        "par1 (N)": 74,
        "min1 (N)": 80,
        "max1 (N)": 25,

        "prop1 (H)": "hit-skill",
        "par1 (H)": 74,
        "min1 (H)": 80,
        "max1 (H)": 25,

        "*eol\r": 0
    });

monprop.rows.push(
    {
        "Id": "druidbear",
        "prop1": "hit-skill",
        "par1": 74,
        "min1": 100,
        "max1": 25,

        "prop1 (N)": "hit-skill",
        "par1 (N)": 74,
        "min1 (N)": 100,
        "max1 (N)": 25,

        "prop1 (H)": "hit-skill",
        "par1 (H)": 74,
        "min1 (H)": 100,
        "max1 (H)": 25,

        "*eol\r": 0
    });

D2RMM.writeTsv(monpropFilename, monprop);