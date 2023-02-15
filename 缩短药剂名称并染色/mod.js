// 改过
const COLOR_PREFIX = 'ÿc';
const COLOR_ANTIDOTE = `${COLOR_PREFIX}0`;
const COLOR_GAS = `${COLOR_PREFIX}0`;
const COLOR_HEALTH = `${COLOR_PREFIX}1`;
const COLOR_MANA = `${COLOR_PREFIX}3`;
const COLOR_OIL = `${COLOR_PREFIX}0`;
const COLOR_REJUVENATION = `${COLOR_PREFIX};`;
const COLOR_STAMINA = `${COLOR_PREFIX}0`;
const COLOR_THAWING = `${COLOR_PREFIX}0`;

// ÿc0 - white
// ÿc1 - red
// ÿc2 - green
// ÿc3 - blue
// ÿc4 - gold
// ÿc5 - gray
// ÿc6 - black
// ÿc7 - tan
// ÿc8 - orange
// ÿc9 - yellow
// ÿc; - purple
// ÿc= - white1
// ÿcK - gray1
// ÿcI - gray2
// ÿcM - black1
// ÿcE - lightred
// ÿcU - red1
// ÿcS - darkred
// ÿc@ - orange1
// ÿcJ - orange2
// ÿcL - orange3
// ÿcH - lightgold1
// ÿcD - gold1
// ÿcR - yellow1
// ÿcQ - green1
// ÿcC - green2
// ÿc< - green3
// ÿcA - darkgreen1
// ÿc: - darkgreen2
// ÿcN - turquoise
// ÿcT - skyblue
// ÿcF - lightblue1
// ÿcP - lightblue2
// ÿcB - blue1
// ÿcG - lightpink
// ÿcO - pink

const itemNamesFilename = 'local\\lng\\strings\\item-names.json';
const itemNames = D2RMM.readJson(itemNamesFilename);
itemNames.forEach((item) => {
    const itemtype = item.Key;
    let newName = null;

    // health
    if (['hp1', 'hp2', 'hp3', 'hp4', 'hp5'].indexOf(itemtype) !== -1) {
        let hpArray = {'hp1': '微红', 'hp2': '小红', 'hp3': '中红', 'hp4': '大红', 'hp5': '超红'}
        newName = `${COLOR_HEALTH}${hpArray[itemtype]}`;
    }

    // mana
    if (['mp1', 'mp2', 'mp3', 'mp4', 'mp5'].indexOf(itemtype) !== -1) {
        let mpArray = {'mp1': '微蓝', 'mp2': '小蓝', 'mp3': '中蓝', 'mp4': '大蓝', 'mp5': '超蓝'}
        newName = `${COLOR_MANA}${mpArray[itemtype]}`;
    }

    // rejuvenation
    if (['rvl', 'rvs'].indexOf(itemtype) !== -1) {
        const suffix = itemtype.endsWith('l') ? '大紫' : '小紫';
        newName = `${COLOR_REJUVENATION}${suffix}`;
    }

    // strangling gas / choking gas / rancid
    if (['gpl', 'gpm', 'gps'].indexOf(itemtype) !== -1) {
        // these are backwards for some reason... "l" is the weakest one, "s" is the strongest one
        const suffix = itemtype.endsWith('l')
            ? '小'
            : itemtype.endsWith('m')
                ? '中'
                : '大';
        newName = `${COLOR_GAS}${suffix}毒瓶`;
    }

    // fulmigating / exploding / oil
    if (['opl', 'opm', 'ops'].indexOf(itemtype) !== -1) {
        // these are backwards for some reason... "l" is the weakest one, "s" is the strongest one
        const suffix = itemtype.endsWith('l')
            ? '小'
            : itemtype.endsWith('m')
                ? '中'
                : '大';
        newName = `${COLOR_OIL}${suffix}炸瓶`;
    }

    // antidote
    if (itemtype === 'yps') {
        newName = `${COLOR_ANTIDOTE}解毒药剂`;
    }

    // thawing
    if (itemtype === 'wms') {
        newName = `${COLOR_THAWING}溶冰药剂`;
    }

    // stamina
    if (itemtype === 'vps') {
        newName = `${COLOR_STAMINA}体力药剂`;
    }

    if (newName != null) {
        // update all localizations
        for (const key in item) {
            if (key !== 'id' && key !== 'Key') {
                item[key] = newName;
            }
        }
    }
});
D2RMM.writeJson(itemNamesFilename, itemNames);
