const itemNamesPath = 'local\\lng\\strings\\item-names.json';
const itemNamesData = D2RMM.readJson(itemNamesPath);
const reGemKey = /^(gcv|gfv|gsv|gzv|gpv|gcy|gfy|gsy|gly|gpy|gcb|gfb|glb|gpb|gcg|gfg|glg|gpg|gcr|gfr|glr|gpr|gcw|gfw|glw|gpw|skc|skf|sku|skl|skz)$/;
const rePotKey = /^(hp|mp)\d$/;
const grayClr = 'ÿc6';
const hpClr = 'ÿc1';
const mpClr = 'ÿc3';
const gemClr = 'ÿcR';
const rpClr = 'ÿc;';

function filterMisc(){
    if(config.filterMiscItems){
        return grayClr;
    }
    return '';
}

function modifyName(node, newName, newColor, canRemoveNames = true){
    for (const key in node) {
        if (key !== 'id' && key !== 'Key') {
            let name = node[key];
            if(newName != null){
                name = newName;
            }
            if(newColor != ''){
                if(config.reduceFilteredNames && newColor === grayClr && canRemoveNames)
                {
                  name = `${newColor}`;
                } else {
                  name = `${newColor}${name}`;
                }
            }
            node[key] = name;
        }
    }
}

itemNamesData.forEach((child) => {
  let clrToApply = '';
  let newName = null;
  if (child.Key.match(reGemKey)) {
    
    if((child.enUS.includes('Chipped') && config.GemsChippedColor)
        || (child.enUS.includes('Flawed') && config.GemsFlawedColor)
        || (child.enUS.includes('Flawless') && config.GemsFlawlessColor)
        || (child.enUS.includes('Perfect') && config.GemsPerfectColor)
        || (!child.enUS.match(/(Chipped|Flawed|Flawless|Perfect)/) && config.GemsNormalColor)){
        clrToApply = gemClr;
    } else {
        clrToApply = filterMisc();
    }
  }
  
  if (child.Key.match(rePotKey)) {
    newName = child.Key.toUpperCase();
    if((child.Key === 'hp1' && config.HP1Color)
        || (child.Key === 'hp2' && config.HP2Color)
        || (child.Key === 'hp3' && config.HP3Color)
        || (child.Key === 'hp4' && config.HP4Color)
        || (child.Key === 'hp5' && config.HP5Color)){
      clrToApply = hpClr;
    } else if((child.Key === 'mp1' && config.MP1Color)
        || (child.Key === 'mp2' && config.MP2Color)
        || (child.Key === 'mp3' && config.MP3Color)
        || (child.Key === 'mp4' && config.MP4Color)
        || (child.Key === 'mp5' && config.MP5Color)){
      clrToApply = mpClr;
    } else if( config.filterLowPotions ){
        clrToApply = filterMisc();
    }
  }
  
  if (child.Key === 'yps') {
    newName = "Antidote";
    clrToApply = filterMisc();
  }
  
  if (child.Key === 'vps') {
    newName = "Stamina";
    clrToApply = filterMisc();
  }
  
  if (child.Key === 'rvs') {
    newName = "RP1";
    if(config.RP1Color){
        clrToApply = rpClr;
    } else if( config.filterLowPotions ){
        clrToApply = filterMisc();
    }
  }
  
  if (child.Key === 'rvl') {
    newName = "RP2";
    if(config.RP2Color){
        clrToApply = rpClr;
    } else {
        clrToApply = filterMisc();
    }
  }
  
  if (child.Key === 'wms') {
    newName = "Thawing";
    clrToApply = filterMisc();
  }
  
  if (child.Key === 'gpl') {
    newName = "Gas1";
    clrToApply = filterMisc();
  }
  
  if (child.Key === 'gpm') {
    newName = "Gas2";
    clrToApply = filterMisc();
  }
  
  if (child.Key === 'gps') {
    newName = "Gas3";
    clrToApply = filterMisc();
  }
  
  if (child.Key === 'opl') {
    newName = "Oil1";
    clrToApply = filterMisc();
  }
  
  if (child.Key === 'opm') {
    newName = "Oil2";
    clrToApply = filterMisc();
  }
  
  if (child.Key === 'ops') {
    newName = "Oil3";
    clrToApply = filterMisc();
  }
  
  if (child.Key === 'tsc') {
    newName = "TP";
    clrToApply = filterMisc();
  }
  
  if (child.Key === 'isc') {
    newName = "ID";
    clrToApply = filterMisc();
  }
  
  if(config.filterArrows && child.Key === 'aqv'){ //Arrows
    clrToApply = filterMisc();
  }  
  
  if(config.filterBolts && child.Key === 'cqv'){ //Bolts
    clrToApply = filterMisc();
  }
  
  if (child.Key.match(/^(Key|key)$/)) {
    clrToApply = filterMisc();
  }
  
  modifyName(child, newName, clrToApply);
});
D2RMM.writeJson(itemNamesPath,itemNamesData);

const nameaffixesPath = 'local\\lng\\strings\\item-nameaffixes.json';
const nameaffixesData = D2RMM.readJson(nameaffixesPath);
const reGemKey2 = /^(gsg|gsw|gsb|gsr)$/;
nameaffixesData.forEach((child) => {
  let clrToApply = '';
  let canRemoveNames = true;
  if (child.Key.match(reGemKey2)){
    if((child.enUS.includes('Chipped') && config.GemsChippedColor)
        || (child.enUS.includes('Flawed') && config.GemsFlawedColor)
        || (child.enUS.includes('Flawless') && config.GemsFlawlessColor)
        || (child.enUS.includes('Perfect') && config.GemsPerfectColor)
        || (!child.enUS.match(/(Chipped|Flawed|Flawless|Perfect)/) && config.GemsNormalColor)){
        clrToApply = gemClr;
    } else {
        clrToApply = filterMisc();
    }
  }
  
  if (child.Key === 'gld' && config.GoldColor) { //gold
    clrToApply = gemClr;
  }
  
  if (config.filterLowQualityItems && child.Key.match(/^(Low Quality|Damaged|Cracked|Crude)/)) {
    clrToApply = filterMisc();
    canRemoveNames = false;
  }
  
  modifyName(child, null, clrToApply, canRemoveNames);
});
D2RMM.writeJson(nameaffixesPath,nameaffixesData);