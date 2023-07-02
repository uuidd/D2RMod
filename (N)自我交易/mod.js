const cubemainFilename = 'global\\excel\\cubemain.txt';
const cubemain = D2RMM.readTsv(cubemainFilename);

const rune_el      = 'r01'; const rune_eld     = 'r02'; const rune_tir     = 'r03'; const rune_nef     = 'r04'; const rune_eth     = 'r05';
const rune_ith     = 'r06'; const rune_tal     = 'r07'; const rune_ral     = 'r08'; const rune_ort     = 'r09'; const rune_thul    = 'r10';
const rune_amn     = 'r11'; const rune_sol     = 'r12'; const rune_shael   = 'r13'; const rune_dol     = 'r14'; const rune_hel     = 'r15';
const rune_io      = 'r16'; const rune_lum     = 'r17'; const rune_ko      = 'r18'; const rune_fal     = 'r19'; const rune_lem     = 'r20'; 
const rune_pul     = 'r21'; const rune_um      = 'r22'; const rune_mal     = 'r23'; const rune_ist     = 'r24'; const rune_gul     = 'r25'; 
const rune_vex     = 'r26'; const rune_ohm     = 'r27'; const rune_Lo      = 'r28'; const rune_sur     = 'r29'; const rune_ber     = 'r30'; 
const rune_jah     = 'r31'; const rune_cham    = 'r32'; const rune_zod     = 'r33';

const Chpd_Amthst = 'gcv'; const Flwed_Amthst = 'gfv'; const normAmthst = 'gsv'; const Flawl_Amthst = 'gzv'; const Perf_Amthst = 'gpv'; 
const flawl_dmnd  = 'glw';
const flawl_emera = 'glg';
const Chpd_Ruby   = 'gcr'; const Flwed_Ruby  = 'gfr'; const normRuby   = 'gsr'; const Flawl_Ruby  = 'glr';  const Perf_Ruby   = 'gpr'; 
const flawl_sapph = 'glb';
const flawl_topaz = 'gly';
const Chpd_Skull ='skc'; const Flwed_Skull  ='skf'; const normSkull ='sku'; const Flawl_Skull  ='skl'; const Perf_Skull ='skz';

const nmFullRejuw = 'rvl'; const nmTPscr = 'tsc'; const nmIDscr = 'isc';

const nameArray = {};
nameArray[nmFullRejuw] = "Full Rejuvenation Potion";
 
function calcInput(ex_input) {
  if (ex_input) {
    if(ex_input.includes(",qty=")) {
      var asdf = ex_input.split(",qty=").pop();
      var round = Math.round;
      asdf = round(asdf);
      return asdf;
    }
    else return 1;
  } else return 0;
}

function addRecipeNew(ex_inputOne, ex_inputTwo, ex_inputThree, ex_inputFour, ex_outputOne, ex_outputTwo, ex_outputThree, ex_description) {
  const whatToPush = { description: ex_description, enabled: 1,  version: 100, "input 1": ex_inputOne, lvl: 100, ilvl: 1000, "*eol\r": 0 }
  if (ex_inputTwo) whatToPush["input 2"]      = ex_inputTwo;
  if (ex_inputThree) whatToPush["input 3"]    = ex_inputThree;
  if (ex_inputFour) whatToPush["input 4"]     = ex_inputFour;
  if (ex_outputOne.endsWith('sockets')) {
    var amountOfSockets = ex_outputOne.slice(-8);
    amountOfSockets = amountOfSockets[0];
    whatToPush.output = ex_outputOne.slice(0,-9);
    whatToPush['mod 1'] = 'sock';
    whatToPush['mod 1 min'] = amountOfSockets;
    whatToPush['mod 1 max'] = amountOfSockets;
  } else 
  if (ex_outputOne) whatToPush.output         = ex_outputOne;
  if (ex_outputTwo) whatToPush["output b"]    = ex_outputTwo;
  if (ex_outputThree) whatToPush["output c"]  = ex_outputThree;          
  
  var numberOfInputs = calcInput(ex_inputOne);
  numberOfInputs +=calcInput(ex_inputTwo);
  numberOfInputs +=calcInput(ex_inputThree);
  numberOfInputs +=calcInput(ex_inputFour);
  whatToPush.numinputs = numberOfInputs;

  cubemain.rows.push(whatToPush);
  //console.log(ex_description);
    
}
              //input 1          input 2        input 3   input 4      output 1       output 2     output 3        description
addRecipeNew(`${nmFullRejuw},qty=10`, "gem0",       "",     "",       "gem4",           "gem3",       '', "Sell 10 full rejuw pots+chip.gem for 1pgem+1flawl.gem");
//   10 full rejuw pots = 1/15 ist = 0.0(6) ist       10 random pgems = 0.5 ist. So 1 pgem = 0.05 ist
addRecipeNew(`${rune_el}`,          "gem0",         "",     "",       `${rune_amn}`,     '',          '', "Sell el +chipped gem for amn");
addRecipeNew(`${rune_tir}`,`${Chpd_Skull}`,         "",     "",       `${rune_tal}`,     '',          '', "Sell tir+chipped skull for tal");
addRecipeNew(`${rune_tir}`, `${Chpd_Ruby}`,         "",     "",       `${rune_el}`,     "gem3",       '', "Sell tir+chipped ruby for el + any flawless gem ");
addRecipeNew(`${rune_eld}`,         "gem0",         "",     "",       `${rune_thul}`,    '',          '', "Sell eld+chipped gem for thul");
addRecipeNew(`${rune_ith},qty=5`,   "gem0",         "",     "",       `${rune_dol}`,     '',          '', "Sell 5xIth+chipped gem for Dol");
addRecipeNew(`${rune_dol}`,         "gem0",         "",     "", `${rune_ith}`, `${rune_ith}`, `${rune_shael}`, "Sell Dol+chipped gem for 2x ith + shael");
//sol
addRecipeNew(`${rune_ral},qty=2`, `${Chpd_Skull}`,  "",     "",       `${rune_sol}`,  `${rune_sol}`,  "", "Sell 2xRal & chpd skull for 2xSol");
addRecipeNew(`${rune_nef},qty=3`,   "gem1",         "",     "",       `${rune_sol}`,     '',          '', "Sell 3 nef + flawed gem for sol recipe");
addRecipeNew(`${rune_sol}`,       `${Flwed_Skull}`, "",     "", `${rune_nef}`, `${rune_nef}`,`${rune_nef}`, "Sell sol & flawed skull for 3xNef");
addRecipeNew(`${rune_sol}`,       `${Flwed_Ruby}`,  "",     "",        `${rune_eld}`,  `${rune_eld}`, '', "Sell sol & flawed ruby for 2xEld");
//shael
addRecipeNew("gem4,qty=2",          "gem3",         "rin",  "",    `${rune_shael}`, `${rune_shael}`,  '', "buy 2 shael for 2 pgems + flawl. gem + ring");
addRecipeNew(`${rune_el},qty=5`,    "rin",          "",     "",       `${rune_shael}`,   '',          '', "Sell 5xEl + ring for Shael");
addRecipeNew(`${rune_shael}`,     "flawl_topaz",    "rin",  "",    `${rune_tir}`,  `${rune_tir}`, `${rune_tir}`, "Sell Shael + flawl_topaz + ring for 3xTir");
//hel
addRecipeNew(`${rune_sol},qty=2`,   "gem1",         "",     "",       `${rune_hel}`,     '',          '', "Sell 2 sol + flawed gem for hel");
addRecipeNew(`${rune_hel}`,         "gem1",         "",     "",       "gem4",            "gem4",  "gem4", "Sell hel + flawed gem for 3x pgems");
addRecipeNew(`${rune_pul}`,         "gem1",         "",     "", `${rune_hel}`,`${rune_hel}`,`${rune_hel}`,"Sell pul + flawed gem for 3x hel");
addRecipeNew(`${rune_lem}`,         "gem1",         "",     "",       `${rune_hel}`,    "gem4",   "gem4", "Sell lem + flawed gem for hel + 2x pgems");
//io 
addRecipeNew(`${nmFullRejuw},qty=10`, `${flawl_topaz}`, "", "",       `${rune_io}`,      '',          '', "Sell 10 full rejuw pots+Flawl.Topaz for 1 io");
addRecipeNew(`${rune_pul}`, `${flawl_topaz}`,       "",     "",       `${rune_io}`,     `${rune_io}`, '', "Sell Pul + Flawl.Topaz for 2 io");
addRecipeNew(`${rune_io}`,  `${flawl_topaz}`,       "",     "",   `${Perf_Amthst}`,`${Perf_Amthst}`,`${Perf_Amthst}`, "Sell Io+Flawl.Topaz 4 3x Perf.Amethyst");
//lum   0,25 ist
addRecipeNew(`${rune_eth},qty=4`,`${normAmthst}`,   "",     "",       `${rune_lum}`,     '',          '', "Sell 4 eth & amethyst for Lum");
addRecipeNew(`${rune_lum}`,      `${normRuby}`,     "",     "",  `${rune_eth}`,`${rune_eth}`,`${rune_sol}`,"Sell Lum & ruby for eth eth sol");
addRecipeNew(`${rune_tal},qty=5`,`${normAmthst}`,   "",     "",       `${rune_lum}`,     '',          '', "Sell 5 tal & amethyst for Lum");
addRecipeNew(`${rune_lum}`,      `${normAmthst}`,   "",     "",  `${rune_amn}`,`${rune_ral}`,`${rune_ral}`,"Sell Lum & amethyst for amn ral ral");
addRecipeNew("jew,qty=10",         "",              "",     "",       `${rune_lum}`,     '',          '', "sell 10 random magic jewels for Lum");
addRecipeNew(`${rune_tal}`, `${rune_thul}`, `${rune_ort}`, `${rune_amn}`,`${rune_lum}`,  '',          '', "Sell spirit pack = tal thul ort amn for Lum");
//ko  0,3 ist        1 tir..ort/pgem = 0.05 ist       tal=0.05 thul=0.06 ort=0.04 amn=0.05
addRecipeNew(`${rune_lem}`,        "gem0",        "mpot",   "",       `${rune_ko}`,      "gem4",      '', "Sell Lem + chipped gem + mana pot for Ko + pgem");
addRecipeNew(`${rune_tir},qty=6`, `${nmFullRejuw},qty=2`,"","",       `${rune_ko}`,      "",          '', "sell 6 tir +2 full rejuw for Ko");
//fal 0,25 ist  
addRecipeNew(`${rune_tir},qty=5`,`${nmFullRejuw},qty=4`, "","",       `${rune_fal}`,     "",          '', "sell 5 tir + 4x full rejuw for Fal");
//lem  0,33 ist   1 jewel = 0.02    
addRecipeNew(`${rune_tir},qty=7`, `${nmFullRejuw}`, "amu",  "",       `${rune_lem}`,     "",          "", "sell 7 tir + full rejuv + amulet for Lem");
addRecipeNew("gem4,qty=7",          "gem3",         "amu",  "",       `${rune_lem}`,     "",          "", "Sell 7 random pgems + flawless gem + amulet for lem");
addRecipeNew(`${rune_pul}`,         "gem1",         "amu",  "",       `${rune_lem}`,    "gem4",       "", "Sell Pul + flawed gem + amulet for Lem");
addRecipeNew(`${rune_eld},qty=5`,   "amu",          "amu",  "",       `${rune_lem}`,     "",          "", "Sell 5xEld + amulet for Lem");
addRecipeNew("gem4,qty=2",       `${rune_ist}`,     "amu",  "",   `${rune_lem}`,`${rune_lem}`,`${rune_lem}`, "Sell 2 random pgems + ist + amulet for 3xLem");
//pul 0,5 ist (old - pul=2Lem = 1/6 ist  2pul=>Um;   3Pul=>Mal; 6pul=>Ist)
addRecipeNew(`${rune_io},qty=4`,    "gem3",          "",     "",       `${rune_pul}`,    '',          '', "sell 4 io + random flawless gem for 1 pul");//2 ist -> pul wtf
addRecipeNew(`${rune_lem}`,         "gem4",          "",     "",       `${rune_pul}`,    '',          '', "sell lem + random pGem for 1 pul");
addRecipeNew(`${rune_fal}`,         "gem4,qty=3",    "",     "",       `${rune_pul}`,    '',          '', "sell Fal + 3 random pGems for 1 pul");
addRecipeNew("gem4,qty=8",          "gem3",          "",     "",       `${rune_pul}`,    '',          '', "sell 8 rand. Pgems + rand. flawless gem for pul");
addRecipeNew(`${rune_ort},qty=10`, `${nmFullRejuw}`, "",     "",       `${rune_pul}`,    '',          '', "sell 10 ort + full rejuv for pul");
addRecipeNew(`${rune_shael},qty=2`, "gem3",    `${rune_ko}`, "",       `${rune_pul}`,    '',          '', "sell shael shael ko + random flawless gem for 1 pul");//2 ist -> pul wtf

//um  0,66 ist 2/3 ist
addRecipeNew(`${Perf_Skull},qty=10`,"gem0",       "mpot",    "",       `${rune_um}`,     '',          '', "sell 10 perf.skulls + chip.gem + mana pot for Um");
addRecipeNew(`${rune_hel},qty=5`,  "gem0",        "mpot",    "",       `${rune_um}`,     '',          '', "sell 5  hel + chip.gem + mana pot  for Um");
addRecipeNew(`${rune_ral},qty=10`, "gem0",        "mpot",    "",       `${rune_um}`,     '',          '', "sell 10 ral + chip.gem + mana pot  for Um");
addRecipeNew(`${rune_amn},qty=10`, "gem0",        "mpot",    "",       `${rune_um}`,     '',          '', "sell 10 amn + chip.gem + mana pot  for Um");
addRecipeNew(`${rune_ith},qty=10`, "gem0",        "mpot",    "",       `${rune_um}`,     '',          '', "sell 10 ith + chip.gem + mana pot  for Um");
addRecipeNew(`${rune_eth},qty=10`, "gem0",        "mpot",    "",       `${rune_um}`,     '',          '', "sell 10 Eth + chip.gem + mana pot  for Um");
addRecipeNew(`${rune_shael},qty=10`,"gem0",       "mpot",    "",       `${rune_um}`,     '',          '', "sell 10 shael + chip.gem + mana pot  for Um");
addRecipeNew(`${rune_gul}`,        "gem3",        "mpot",    "",       `${rune_um}`,    `${rune_um}`, '', "sell gul+ flawless gem + mana pot for 2x Um");
//mal 0,75 ist  (old - 3 pul / um + pul /  2mal=>ist;   mal=>um+pul)
addRecipeNew(`${Perf_Ruby},qty=10`,"gem0",          "",     "",       `${rune_mal}`,      '',          '', "sell 10 perf.ruby + chip.gem for mal");
addRecipeNew(`${rune_sol},qty=10`, "",              "",     "",       `${rune_mal}`,      '',          '', "sell 10 sol for Mal");
addRecipeNew(`${rune_pul}`,   `${rune_ko}`,        "mpot",   "",       `${rune_mal}`,      '',          '', "buy Mal for pul ko and mana pot");
addRecipeNew(`${rune_pul}`,   `${rune_lem}`,       "mpot",   "",       `${rune_mal}`,      '',          '', "buy mal for pul lem and mana pot");
addRecipeNew(`${rune_lum},qty=3`,  "gem3",         "mpot",   "",       `${rune_mal}`,      '',          '', "buy mal for 3 lum, flawless gem and mana pot");
//ist
addRecipeNew(`${Perf_Amthst},qty=10`,"gem0",         "",     "",       `${rune_ist}`,      '',          '', "sell 10 perf.amethyst + chip.gem for Ist");
addRecipeNew(`${rune_lem},qty=3`,   "gem4",          "",     "",       `${rune_ist}`,      '',          '', "sell 3 lem + pgem for ist");
addRecipeNew(`${rune_lum},qty=4`,   "",              "",     "",       `${rune_ist}`,      '',          '', "sell 4 Lum for ist");
addRecipeNew(`${rune_pul},qty=2`,   `${rune_fal}`,   "",     "",       `${rune_ist}`,      '',          '', "buy ist for pul pul fal");
addRecipeNew(`${rune_um}`,          `${rune_pul}`,   "gem3", "",       `${rune_ist}`,      '',          '', "buy ist for um pul flawless gem");
addRecipeNew(`${rune_mal}`,         `${rune_ko}`,    "gem3", "",       `${rune_ist}`,      '',          '', "buy ist for mal ko flawless gem");
addRecipeNew(`${rune_lem}`,  `${rune_ko}`,    `${rune_fal}`, "gem4",   `${rune_ist}`,      '',          '', "buy ist for Lem Ko Fal Pgem");

//gul 1.5 ist
addRecipeNew(`${rune_ist}`,     `${rune_pul}`,     "hpot",   "",       `${rune_gul}`,      '',          '', "sell ist+pul+hpot for gul");
addRecipeNew(`${rune_mal},qty=2`,   "hpot",          "",     "",       `${rune_gul}`,      '',          '', "buy gul for 2 mal + hp pot");
addRecipeNew(`${rune_pul},qty=3`,   "hpot",          "",     "",       `${rune_gul}`,      '',          '', "buy gul for 3 pul+ hp pot");
addRecipeNew( "any,uni,nos",    `${rune_gul}`,        "",    "",       "useitem,sock=1",   '',          '', "larzuk's quest for gul");

//vex 3 ist
addRecipeNew(`${rune_ist},qty=3`,   "wms",           "",     "",       `${rune_vex}`,      '',          '', "buy vex for 3 ist+ thawing potion");
addRecipeNew(`${rune_gul}`,     `${rune_ist}`, `${rune_pul}`,"wms",     `${rune_vex}`,      '',          '', "buy vex for gul ist pul + thawing potion");

//ohm = 6 / at least half a Lo
addRecipeNew(`${rune_cham}`,  `${rune_gul}`,   `${rune_ist}`, "tbk",    `${rune_ohm}`,      '',          '', "buy ohm for cham gul ist + tp book");
addRecipeNew(`${rune_ist},qty=6`,"gem4",             "tbk",  "",       `${rune_ohm}`,      '',          '', "buy ohm for 6 ist + pgem + tp book");
//Lo = 10
addRecipeNew(`${rune_ist},qty=10`,"tbk",              "",    "",       `${rune_Lo}`,       '',          '', "buy Lo for 10 ist + tp book");
addRecipeNew(`${rune_ohm}`,  `${rune_vex}`,  `${rune_ist}`,"tbk",      `${rune_Lo}`,       '',          '', "buy Lo for ohm vex ist + tp book");
addRecipeNew(`${rune_mal},qty=8`,  `${rune_ist},qty=4`,"",   "",       `${rune_Lo}`,       '',          '', "buy Lo for 8 mal 4 ist ");

//sur = 12.5 / should be at least half a ber
addRecipeNew(`${rune_ist},qty=9`,"gem3",      `${rune_cham}`,"",       `${rune_sur}`,      '',          '', "buy sur for 9 ist + cham + flawless gem");
addRecipeNew(`${rune_Lo}`, `${rune_ist},qty=2`,`${rune_pul}`,"",       `${rune_sur}`,      '',          "", "buy sur for Lo ist ist pul");
addRecipeNew(`${rune_ohm},qty=2`,`${rune_lem}`, "gem3",      "",       `${rune_sur}`,      '',          '', "buy sur for ohm ohm lem+ flawless gem");

//ber = 25
addRecipeNew(`${rune_Lo},qty=2`,`${rune_cham}`,`${rune_gul}`,"",       `${rune_ber}`,      '',          '', "buy ber for Lo Lo cham gul");
addRecipeNew(`${rune_sur}`, `${rune_Lo}`, `${rune_gul}`,`${rune_ist}`, `${rune_ber}`,      '',          '', "buy ber for sur Lo gul ist");
addRecipeNew(`${rune_jah}`,   `${rune_ist},qty=3`,  "",     "",        `${rune_ber}`,      '',          '', "buy ber for jah + 3x ist");

//jah = 22
addRecipeNew(`${rune_sur}`,  `${rune_Lo}`,           "tbk",  "hpot",   `${rune_jah}`,  `${rune_pul}`,   '', "buy jah pul for sur Lo + tp book + hp pot");
addRecipeNew(`${rune_ber}`,       "tbk",             "hpot", "",       `${rune_jah}`, `${rune_vex}`,   '', "buy jah vex for ber + tp book + hp pot");
addRecipeNew(`${rune_ist},qty=8`, `${rune_Lo}`, `${rune_zod}`,"hpot", `${rune_jah}`,      '',          '', "buy jah for 8 ist Lo zod + hp pot");

//cham = 3.4
addRecipeNew(`${rune_ist},qty=3`,`${rune_lem}`,      "wms",     "",       `${rune_cham}`,     '',       '', "buy cham for 3 ist + lem + thawing potion");

//zod = 4 ist
addRecipeNew(`${rune_ist},qty=4`,"gem3",             "",     "",       `${rune_zod}`,      '',          '', "buy zod for 4 ist + flawless gem");
addRecipeNew(`${rune_cham}`,     "gem3",     `${rune_pul}`,  "",       `${rune_zod}`,      '',          '', "buy zod for cham pul + flawless gem");
//uniques
addRecipeNew("xap",              `${rune_um}`,       "",     "",       "Peasent Crown",    '',          '', "buy peasants crown for um+war hat");
addRecipeNew("Peasent Crown",       "gps",           "",     "",       `${rune_pul}`,      '',          '', "sell peasants crown + rancid gas potion for pul ");
addRecipeNew(`${rune_mal}`,     `${rune_pul}`,       "uap",  "",    "Harlequin Crest,uni", '',          '', "buy unique shako for mal+pul + any shako");
addRecipeNew("Harlequin Crest,uni", "gps",           "",     "",       `${rune_um}`,       '',          '', "sell unique shako + rancid gas potion for um");
addRecipeNew(`${rune_mal}`,     `${rune_pul}`,       "baa",  "",     "Arreat's Face,uni",  '',          '', "buy arreats mal pul + any slayer guard");
addRecipeNew("Arreat's Face,uni",   "gps",           "",     "",       `${rune_um}`,       '',          '', "sell arreats + rancid gas potion for um");

addRecipeNew("fla,nor,noe,sock=4",  "gps",           "",     "",        `${rune_ko}`,      '',          '', "sell non eth flail 4 sock + rgp for ko");

//2h polearm bases
addRecipeNew(`${rune_pul}`,         "gps",        "pole,any","",       "7pa,nor,nos",      '',          '', "buy normal CA for pul+rgp+any polearm");
addRecipeNew(`${rune_ist}`,         "gps",        "pole,any","",       "7pa,nor,eth,nos",  '',          '', "buy eth CA 0os for ist+rgp+any polearm");
addRecipeNew("7pa,nor,nos",     `${rune_ohm}`,    "hpot",    "",       "7pa,nor,eth_4sockets", '',      '', "buy eth CA 4 sock for ohm+Normal CA");
addRecipeNew("7pa,nor,nos",     `${rune_mal}`,    "hpot",    "",       "7pa,nor_4sockets",     '',      '', "buy 4 sock CA for mal");
addRecipeNew("7pa,nor,nos",     `${rune_vex}`,    "mpot",    "",       "7pa,nor,eth_5sockets", '',      '', "buy eth CA 5 sock for vex+Normal CA");//100fg
addRecipeNew("7pa,nor,nos",     `${rune_um}`,     "mpot",    "",       "7pa,nor_5sockets",     '',      '', "buy 5 sock CA for um");

addRecipeNew("7pa,nor,noe,nos",     "gps",           "",     "",        `${rune_lum}`,    '',            '', "sell non eth CA no sock +rgp for lum");
addRecipeNew("7pa,nor,eth,sock=4",  "gps",           "",     "",        `${rune_zod}`,    '',            '', "sell eth CA 4 sock + rgp for zod");
addRecipeNew("7pa,nor,noe,sock=4",  "gps",           "",     "",        `${rune_um}`,     '',            '', "sell non eth CA 4 sock +rgp for um");
addRecipeNew("7pa,nor,eth,sock=5",  "gps",           "",     "",        `${rune_ist}`,    '',            '', "sell eth CA 5 sock + rgp for ist");
addRecipeNew("7pa,nor,noe,sock=5",  "gps",           "",     "",        `${rune_lem}`,    '',            '', "sell non eth CA 5 sock +rgp for lem");



D2RMM.writeTsv(cubemainFilename, cubemain);