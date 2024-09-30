// uniqueitems.txt
const uniqueitemsFilename = 'global\\excel\\uniqueitems.txt';
const uniqueitems = D2RMM.readTsv(uniqueitemsFilename);

uniqueitems.rows.forEach((row) => {

  // SHIELDS 

  // Pelta Lunata
  if (row["index"] === "Pelta Lunata") {

    // 
    row["prop1"] = "ac";
    row["par1"] = "";
    row["min1"] = 50;
    row["max1"] = 50;

    // 
    row["prop2"] = "vit";
    row["par2"] = "";
    row["min2"] = 0;
    row["max2"] = 0;

    // 
    row["prop3"] = "str";
    row["par3"] = "";
    row["min3"] = 0;
    row["max3"] = 0;

    // 
    row["prop4"] = "enr";
    row["par4"] = "";
    row["min4"] = 20;
    row["max4"] = 20;

    // 
    row["prop5"] = "ac%";
    row["par5"] = "";
    row["min5"] = 150;
    row["max5"] = 200;

    // 
    row["prop6"] = "block";
    row["par6"] = "";
    row["min6"] = 50;
    row["max6"] = 50;

    // 
    row["prop7"] = "block2";
    row["par7"] = "";
    row["min7"] = 50;
    row["max7"] = 50;

    // 
    row["prop8"] = "skill";
    row["par8"] = 104;
    row["min8"] = 1;
    row["max8"] = 4;

    // 
    row["prop9"] = "skill";
    row["par9"] = 98;
    row["min9"] = 1;
    row["max9"] = 4;
  }

  // Umbral Disk
  if (row["index"] === "Umbral Disk") {

    // 
    row["prop1"] = "ac";
    row["par1"] = "";
    row["min1"] = 100;
    row["max1"] = 150;

    // 
    row["prop2"] = "ac%";
    row["par2"] = "";
    row["min2"] = 150;
    row["max2"] = 300;

    // 
    row["prop3"] = "hp";
    row["par3"] = "";
    row["min3"] = 0;
    row["max3"] = 0;

    // 
    row["prop4"] = "dex";
    row["par4"] = "";
    row["min4"] = 20;
    row["max4"] = 50;

    // 
    row["prop5"] = "stupidity";
    row["par5"] = "";
    row["min5"] = 1;
    row["max5"] = 1;

    // 
    row["prop6"] = "block";
    row["par6"] = "";
    row["min6"] = 40;
    row["max6"] = 50;

    // 
    row["prop7"] = "block2";
    row["par7"] = "";
    row["min7"] = 10;
    row["max7"] = 20;

    // 
    row["prop8"] = "skill";
    row["par8"] = 124;
    row["min8"] = 1;
    row["max8"] = 5;

    // 
    row["prop9"] = "skill";
    row["par9"] = 101;
    row["min9"] = 4;
    row["max9"] = 10;

    // 
    row["prop10"] = "hit-skill";
    row["par10"] = "Holy Bolt";
    row["min10"] = 50;
    row["max10"] = 20;

  }

  // Stormguild
  if (row["index"] === "Stormguild") {

    // 
    row["prop1"] = "ac/lvl";
    row["par1"] = "";
    row["min1"] = 30;
    row["max1"] = 30;

    // 
    row["prop2"] = "ac%";
    row["par2"] = "";
    row["min2"] = 150;
    row["max2"] = 300;

    // 
    row["prop3"] = "red-dmg";
    row["par3"] = "";
    row["min3"] = 5;
    row["max3"] = 15;

    // 
    row["prop4"] = "red-mag";
    row["par4"] = "";
    row["min4"] = 5;
    row["max4"] = 15;

    // 
    row["prop5"] = "hit-skill";
    row["par5"] = "Nova";
    row["min5"] = 40;
    row["max5"] = 20;

    // 
    row["prop6"] = "skill";
    row["par6"] = 106;
    row["min6"] = 4;
    row["max6"] = 10;

    // 
    row["prop7"] = "block";
    row["par7"] = "";
    row["min7"] = 20;
    row["max7"] = 40;

    // 
    row["prop8"] = "block2";
    row["par8"] = "";
    row["min8"] = 10;
    row["max8"] = 20;

    // 
    row["prop9"] = "skill";
    row["par9"] = 118;
    row["min9"] = 4;
    row["max9"] = 10;

    // 
    row["prop10"] = "skill";
    row["par10"] = 111;
    row["min10"] = 4;
    row["max10"] = 10;

    // 
    row["prop11"] = "thorns/lvl";
    row["par11"] = "";
    row["min11"] = 20;
    row["max11"] = 20;

    // 
    row["prop12"] = "abs-ltng";
    row["par12"] = "";
    row["min12"] = 5;
    row["max12"] = 15;

  }

  // Swordback Hold
  if (row["index"] === "Swordback Hold") {

    // 
    row["prop1"] = "ac/lvl";
    row["par1"] = "";
    row["min1"] = 20;
    row["max1"] = 20;

    // 
    row["prop2"] = "ac%/lvl";
    row["par2"] = "";
    row["min2"] = 20;
    row["max2"] = 20;

    // 
    row["prop3"] = "red-dmg";
    row["par3"] = "";
    row["min3"] = 5;
    row["max3"] = 15;

    // 
    row["prop4"] = "block";
    row["par4"] = "";
    row["min4"] = 40;
    row["max4"] = 40;

    // 
    row["prop5"] = "openwounds";
    row["par5"] = "";
    row["min5"] = 100;
    row["max5"] = 100;

    // 
    row["prop6"] = "thorns/lvl";
    row["par6"] = "";
    row["min6"] = 25;
    row["max6"] = 25;

    // 
    row["prop7"] = "block2";
    row["par7"] = "";
    row["min7"] = 25;
    row["max7"] = 25;

    // 
    row["prop8"] = "dmg%";
    row["par8"] = "";
    row["min8"] = 10;
    row["max8"] = 15;

    // 
    row["prop9"] = "skill";
    row["par9"] = 97;
    row["min9"] = 4;
    row["max9"] = 10;

    // 
    row["prop10"] = "skill";
    row["par10"] = 117;
    row["min10"] = 4;
    row["max10"] = 10;

  }

  // Steelclash
  if (row["index"] === "Steelclash") {

    // 
    row["prop1"] = "ac/lvl";
    row["par1"] = "";
    row["min1"] = 30;
    row["max1"] = 30;

    // 
    row["prop2"] = "ac%/lvl";
    row["par2"] = "";
    row["min2"] = 15;
    row["max2"] = 15;

    // 
    row["prop3"] = "block2";
    row["par3"] = "";
    row["min3"] = 50;
    row["max3"] = 50;

    // 
    row["prop4"] = "block";
    row["par4"] = "";
    row["min4"] = 20;
    row["max4"] = 20;

    // 
    row["prop5"] = "pal";
    row["par5"] = "";
    row["min5"] = 2;
    row["max5"] = 3;

    // 
    row["prop6"] = "light";
    row["par6"] = "";
    row["min6"] = 2;
    row["max6"] = 3;

    // 
    row["prop7"] = "red-mag";
    row["par7"] = "";
    row["min7"] = 10;
    row["max7"] = 25;

    // 
    row["prop8"] = "red-dmg%";
    row["par8"] = "";
    row["min8"] = 15;
    row["max8"] = 30;

    // 
    row["prop9"] = "skill";
    row["par9"] = 112;
    row["min9"] = 2;
    row["max9"] = 10;

    // 
    row["prop10"] = "skill";
    row["par10"] = 113;
    row["min10"] = 2;
    row["max10"] = 10;

  }

  // Bverrit Keep
  if (row["index"] === "Bverrit Keep") {

    // 
    row["prop1"] = "ac/lvl";
    row["par1"] = "";
    row["min1"] = 40;
    row["max1"] = 40;

    // 
    row["prop2"] = "ac%/lvl";
    row["par2"] = "";
    row["min2"] = 25;
    row["max2"] = 25;

    // 
    row["prop3"] = "block2";
    row["par3"] = "";
    row["min3"] = 10;
    row["max3"] = 10;

    // 
    row["prop4"] = "block";
    row["par4"] = "";
    row["min4"] = 40;
    row["max4"] = 40;

    // 
    row["prop5"] = "res-fire";
    row["par5"] = "";
    row["min5"] = 75;
    row["max5"] = 150;

    // 
    row["prop6"] = "res-all";
    row["par6"] = "";
    row["min6"] = -10;
    row["max6"] = -40;

    // 
    row["prop7"] = "red-mag";
    row["par7"] = "";
    row["min7"] = 5;
    row["max7"] = 15;

    // 
    row["prop8"] = "red-dmg";
    row["par8"] = "";
    row["min8"] = 5;
    row["max8"] = 15;

    // 
    row["prop9"] = "skill";
    row["par9"] = 107;
    row["min9"] = 2;
    row["max9"] = 10;

    // 
    row["prop10"] = "skill";
    row["par10"] = 122;
    row["min10"] = 2;
    row["max10"] = 10;

    // 
    row["prop11"] = "ac-miss";
    row["par11"] = "";
    row["min11"] = 300;
    row["max11"] = 500;

    // 
    row["prop12"] = "gethit-skill";
    row["par12"] = "Eruption";
    row["min12"] = 50;
    row["max12"] = 30;

  }

  // Wall of the Eyeless
  if (row["index"] === "Wall of the Eyeless") {

    // 
    row["prop1"] = "ac/lvl";
    row["par1"] = "";
    row["min1"] = 20;
    row["max1"] = 20;

    // 
    row["prop2"] = "ac%/lvl";
    row["par2"] = "";
    row["min2"] = 40;
    row["max2"] = 40;

    // 
    row["prop3"] = "cast2";
    row["par3"] = "";
    row["min3"] = 40;
    row["max3"] = 40;

    // 
    row["prop4"] = "manasteal";
    row["par4"] = "";
    row["min4"] = 4;
    row["max4"] = 5;

    // 
    row["prop5"] = "res-pois";
    row["par5"] = "";
    row["min5"] = 40;
    row["max5"] = 90;

    // 
    row["prop6"] = "res-all";
    row["par6"] = "";
    row["min6"] = -10;
    row["max6"] = -30;

    // 
    row["prop7"] = "red-mag";
    row["par7"] = "";
    row["min7"] = 5;
    row["max7"] = 15;

    // 
    row["prop8"] = "mana-kill";
    row["par8"] = "";
    row["min8"] = 5;
    row["max8"] = 10;

    // 
    row["prop9"] = "nec";
    row["par9"] = "";
    row["min9"] = 2;
    row["max9"] = 3;

    // 
    row["prop10"] = "skill";
    row["par10"] = 68;
    row["min10"] = 4;
    row["max10"] = 10;

    // 
    row["prop11"] = "ac-miss";
    row["par11"] = "";
    row["min11"] = 300;
    row["max11"] = 500;

  }

  // The Ward
  if (row["index"] === "The Ward") {

    // 
    row["prop1"] = "ac/lvl";
    row["par1"] = "";
    row["min1"] = 40;
    row["max1"] = 40;

    // 
    row["prop2"] = "ac%/lvl";
    row["par2"] = "";
    row["min2"] = 35;
    row["max2"] = 35;

    // 
    row["prop3"] = "block";
    row["par3"] = "";
    row["min3"] = 20;
    row["max3"] = 20;

    // 
    row["prop4"] = "red-mag";
    row["par4"] = "";
    row["min4"] = 5;
    row["max4"] = 15;

    // 
    row["prop5"] = "red-dmg%";
    row["par5"] = "";
    row["min5"] = 5;
    row["max5"] = 20;

    // 
    row["prop6"] = "str";
    row["par6"] = "";
    row["min6"] = 50;
    row["max6"] = 50;

    // 
    row["prop7"] = "block2";
    row["par7"] = "";
    row["min7"] = 20;
    row["max7"] = 20;

    // 
    row["prop8"] = "ac-miss";
    row["par8"] = "";
    row["min8"] = 250;
    row["max8"] = 500;

    // 
    row["prop9"] = "pal";
    row["par9"] = "";
    row["min9"] = 2;
    row["max9"] = 3;

    // 
    row["prop10"] = "aura";
    row["par10"] = "Resist Fire";
    row["min10"] = 1;
    row["max10"] = 4;

    // 
    row["prop11"] = "gethit-skill";
    row["par11"] = "Iron Maiden";
    row["min11"] = 40;
    row["max11"] = 30;

  }

  // Blackoak Shield
  if (row["index"] === "Blackoak Shield") {

    // 
    row["prop1"] = "ac";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 500;

    // 
    row["prop2"] = "ac%/lvl";
    row["par2"] = "";
    row["min2"] = 35;
    row["max2"] = 35;

    // 
    row["prop3"] = "abs-cold/lvl";
    row["par3"] = "";
    row["min3"] = 5;
    row["max3"] = 5;

    // 
    row["prop4"] = "dex/lvl";
    row["par4"] = "";
    row["min4"] = 4;
    row["max4"] = 4;

    // 
    row["prop5"] = "gethit-skill";
    row["par5"] = "Weaken";
    row["min5"] = 40;
    row["max5"] = 8;

    // 
    row["prop6"] = "nofreeze";
    row["par6"] = "";
    row["min6"] = 1;
    row["max6"] = 1;

    // 
    row["prop7"] = "block2";
    row["par7"] = "";
    row["min7"] = 50;
    row["max7"] = 50;

    // 
    row["prop8"] = "ac-hth";
    row["par8"] = "";
    row["min8"] = 250;
    row["max8"] = 500;

    // 
    row["prop9"] = "ama";
    row["par9"] = "";
    row["min9"] = 2;
    row["max9"] = 3;

    // 
    row["prop10"] = "aura";
    row["par10"] = "Resist Cold";
    row["min10"] = 1;
    row["max10"] = 4;

  }

  // Darkforce Spawn
  if (row["index"] === "Darkforge Spawn") {

    // 
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 500;

    // 
    row["prop2"] = "ac/lvl";
    row["par2"] = "";
    row["min2"] = 25;
    row["max2"] = 25;

    // 
    row["prop3"] = "cast3";
    row["par3"] = "";
    row["min3"] = 40;
    row["max3"] = 40;

    // 
    row["prop4"] = "mana%";
    row["par4"] = "";
    row["min4"] = 15;
    row["max4"] = 25;

    // 
    row["prop5"] = "gethit-skill";
    row["par5"] = "Decrepify";
    row["min5"] = 40;
    row["max5"] = 1;

    // 
    row["prop6"] = "nec";
    row["par6"] = "";
    row["min6"] = 2;
    row["max6"] = 3;

    // 
    row["prop17"] = "aura";
    row["par7"] = "Thorns";
    row["min7"] = 25;
    row["max7"] = 40;

  }

  // Spirit Ward
  if (row["index"] === "Spirit Ward") {

    // 
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 500;

    // 
    row["prop2"] = "block2";
    row["par2"] = "";
    row["min2"] = 40;
    row["max2"] = 40;

    // 
    row["prop3"] = "block";
    row["par3"] = "";
    row["min3"] = 25;
    row["max3"] = 40;

    // 
    row["prop4"] = "abs-cold";
    row["par4"] = "";
    row["min4"] = 50;
    row["max4"] = 100;

    // 
    row["prop5"] = "gethit-skill";
    row["par5"] = "Fade";
    row["min5"] = 40;
    row["max5"] = 8;

    // 
    row["prop6"] = "ac-miss";
    row["par6"] = "";
    row["min6"] = 350;
    row["max6"] = 500;

    // 
    row["prop7"] = "red-mag";
    row["par7"] = "";
    row["min7"] = 5;
    row["max7"] = 15;

  }

  // Spike Thorn
  if (row["index"] === "Spike Thorn") {

    // 
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 500;

    // 
    row["prop2"] = "balance2";
    row["par2"] = "";
    row["min2"] = 40;
    row["max2"] = 40;

    // 
    row["prop3"] = "red-dmg%";
    row["par3"] = "";
    row["min3"] = 25;
    row["max3"] = 40;

    // 
    row["prop4"] = "thorns/lvl";
    row["par4"] = "";
    row["min4"] = 35;
    row["max4"] = 35;

    // 
    row["prop5"] = "sock";
    row["par5"] = "";
    row["min5"] = 1;
    row["max5"] = 1;

    // 
    row["prop6"] = "ac-hth";
    row["par6"] = "";
    row["min6"] = 350;
    row["max6"] = 500;

    // 
    row["prop7"] = "thorns";
    row["par7"] = "";
    row["min7"] = 150;
    row["max7"] = 300;

    // 
    row["prop8"] = "aura";
    row["par8"] = "Thorns";
    row["min8"] = 10;
    row["max8"] = 30;

  }

  // Boneflame
  if (row["index"] === "Boneflame") {

    // 
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 500;

    // 
    row["prop2"] = "move2";
    row["par2"] = "";
    row["min2"] = 25;
    row["max2"] = 25;

    // 
    row["prop3"] = "nec";
    row["par3"] = "";
    row["min3"] = 2;
    row["max3"] = 3;

    // 
    row["prop4"] = "gethit-skill";
    row["par4"] = "Terror";
    row["min4"] = 50;
    row["max4"] = 1;

    // 
    row["prop5"] = "res-fire";
    row["par5"] = "";
    row["min5"] = 40;
    row["max5"] = 90;

    // 
    row["prop6"] = "res-pois";
    row["par6"] = "";
    row["min6"] = 40;
    row["max6"] = 90;

    // 
    row["prop7"] = "res-all";
    row["par7"] = "";
    row["min7"] = -10;
    row["max7"] = -30;

  }

  // Stormshield
  if (row["index"] === "Stormshield") {

    // 
    row["prop1"] = "ac/lvl";
    row["par1"] = "";
    row["min1"] = 40;
    row["max1"] = 40;

    // 
    row["prop2"] = "ac%/lvl";
    row["par2"] = "";
    row["min2"] = 30;
    row["max2"] = 30;

    // 
    row["prop3"] = "block";
    row["par3"] = "";
    row["min3"] = 25;
    row["max3"] = 25;

    // 
    row["prop4"] = "block2";
    row["par4"] = "";
    row["min4"] = 40;
    row["max4"] = 40;

    // 
    row["prop5"] = "gethit-skill";
    row["par5"] = "Cyclone Armor";
    row["min5"] = 40;
    row["max5"] = 10;

    // 
    row["prop6"] = "red-dmg%";
    row["par6"] = "";
    row["min6"] = 35;
    row["max6"] = 50;

    // 
    row["prop7"] = "str/lvl";
    row["par7"] = "";
    row["min7"] = 4;
    row["max7"] = 4;

    // 
    row["prop8"] = "dmg-ltng";
    row["par8"] = "";
    row["min8"] = 1;
    row["max8"] = 200;

    // 
    row["prop9"] = "aura";
    row["par9"] = "Resist Lightning";
    row["min9"] = 1;
    row["max9"] = 4;

  }

  // Head Hunter's Glory
  if (row["index"] === "Headhunter's Glory") {

    // 
    row["prop1"] = "ac";
    row["par1"] = "";
    row["min1"] = 500;
    row["max1"] = 500;

    // 
    row["prop2"] = "ac-miss";
    row["par2"] = "";
    row["min2"] = 500;
    row["max2"] = 500;

    // 
    row["prop3"] = "heal-kill";
    row["par3"] = "";
    row["min3"] = 20;
    row["max3"] = 40;

    // 
    row["prop4"] = "sock";
    row["par4"] = "";
    row["min4"] = 1;
    row["max4"] = 3;

    // 
    row["prop5"] = "kill-skill";
    row["par5"] = 258;
    row["min5"] = 40;
    row["max5"] = 3;

  }

  // Medusa's Gaze
  if (row["index"] === "Medusa's Gaze") {

    // 
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    // 
    row["prop2"] = "lifesteal";
    row["par2"] = "";
    row["min2"] = 5;
    row["max2"] = 15;

    // 
    row["prop3"] = "slow";
    row["par3"] = "";
    row["min3"] = 50;
    row["max3"] = 50;

    // 
    row["prop4"] = "res-cold";
    row["par4"] = "";
    row["min4"] = 40;
    row["max4"] = 90;

    // 
    row["prop5"] = "gethit-skill";
    row["par5"] = "Lower Resist";
    row["min5"] = 40;
    row["max5"] = 10;

    // 
    row["prop6"] = "kill-skill";
    row["par6"] = 48;
    row["min6"] = 40;
    row["max6"] = 60;

    // 
    row["prop7"] = "res-all";
    row["par7"] = "";
    row["min7"] = -10;
    row["max7"] = -30;

    // 
    row["prop8"] = "ac-hth";
    row["par8"] = "";
    row["min8"] = 250;
    row["max8"] = 500;

  }

  // Alma Negra
  if (row["index"] === "Alma Negra") {

    // 
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 500;

    // 
    row["prop2"] = "pal";
    row["par2"] = "";
    row["min2"] = 2;
    row["max2"] = 3;

    // 
    row["prop3"] = "block";
    row["par3"] = "";
    row["min3"] = 20;
    row["max3"] = 20;

    // 
    row["prop4"] = "block2";
    row["par4"] = "";
    row["min4"] = 30;
    row["max4"] = 30;

    // 
    row["prop5"] = "att%";
    row["par5"] = "";
    row["min5"] = 100;
    row["max5"] = 250;

    // 
    row["prop6"] = "dmg%";
    row["par6"] = "";
    row["min6"] = 100;
    row["max6"] = 250;

    // 
    row["prop7"] = "red-mag";
    row["par7"] = "";
    row["min7"] = 5;
    row["max7"] = 15;

    // 
    row["prop8"] = "red-dmg";
    row["par8"] = "";
    row["min8"] = 5;
    row["max8"] = 15;

    // 
    row["prop9"] = "aura";
    row["par9"] = "Concentration";
    row["min9"] = 4;
    row["max9"] = 11;

  }

  // Dragonscale
  if (row["index"] === "Dragonscale") {

    // 
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 500;

    // 
    row["prop2"] = "dmg-fire";
    row["par2"] = "";
    row["min2"] = 250;
    row["max2"] = 500;

    // 
    row["prop3"] = "extra-fire";
    row["par3"] = "";
    row["min3"] = 15;
    row["max3"] = 25;

    // 
    row["prop4"] = "pierce-fire";
    row["par4"] = "";
    row["min4"] = 15;
    row["max4"] = 25;

    // 
    row["prop5"] = "res-fire-max";
    row["par5"] = "";
    row["min5"] = 15;
    row["max5"] = 25;

    // 
    row["prop6"] = "str/lvl";
    row["par6"] = "";
    row["min6"] = 4;
    row["max6"] = 4;

    // 
    row["prop7"] = "oskill";
    row["par7"] = "Hydra";
    row["min7"] = 50;
    row["max7"] = 50;

    // 
    row["prop8"] = "aura";
    row["par8"] = "Resist Fire";
    row["min8"] = 1;
    row["max8"] = 4;

  }

  // Radament's Sphere
  if (row["index"] === "Radimant's Sphere") {

    // 
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 500;

    // 
    row["prop2"] = "block";
    row["par2"] = "";
    row["min2"] = 25;
    row["max2"] = 25;

    // 
    row["prop3"] = "block2";
    row["par3"] = "";
    row["min3"] = 25;
    row["max3"] = 25;

    // 
    row["prop4"] = "res-pois";
    row["par4"] = "";
    row["min4"] = 40;
    row["max4"] = 90;

    // 
    row["prop5"] = "res-all";
    row["par5"] = "";
    row["min5"] = -10;
    row["max5"] = -30;

    // 
    row["prop6"] = "dmg-pois";
    row["par6"] = "";
    row["min6"] = 200;
    row["max6"] = 400;

    // 
    row["prop7"] = "gethit-skill";
    row["par7"] = "Poison Nova";
    row["min7"] = 40;
    row["max7"] = 50;

  }

  // Gerke's Sanctuary
  if (row["index"] === "Kerke's Sanctuary") {

    // 
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 500;

    // 
    row["prop2"] = "block";
    row["par2"] = "";
    row["min2"] = 40;
    row["max2"] = 40;

    // 
    row["prop3"] = "regen";
    row["par3"] = "";
    row["min3"] = 15;
    row["max3"] = 30;

    // 
    row["prop4"] = "red-dmg";
    row["par4"] = "";
    row["min4"] = 15;
    row["max4"] = 30;

    // 
    row["prop5"] = "red-mag";
    row["par5"] = "";
    row["min5"] = 15;
    row["max5"] = 30;

    // 
    row["prop6"] = "ac-miss";
    row["par6"] = "";
    row["min6"] = 250;
    row["max6"] = 500;

    // 
    row["prop7"] = "res-all";
    row["par7"] = "";
    row["min7"] = 0;
    row["max7"] = 0;

    // 
    row["prop8"] = "res-all";
    row["par8"] = "";
    row["min8"] = 0;
    row["max8"] = 0;

  }

  // Homunculus
  if (row["index"] === "Homunculus") {

    // 
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 500;

    // 
    row["prop2"] = "mana-kill";
    row["par2"] = "";
    row["min2"] = 5;
    row["max2"] = 15;

    // 
    row["prop3"] = "block";
    row["par3"] = "";
    row["min3"] = 40;
    row["max3"] = 40;

    // 
    row["prop4"] = "block2";
    row["par4"] = "";
    row["min4"] = 30;
    row["max4"] = 30;

    // 
    row["prop5"] = "nec";
    row["par5"] = "";
    row["min5"] = 2;
    row["max5"] = 3;

    // 
    row["prop6"] = "enr/lvl";
    row["par6"] = "";
    row["min6"] = 4;
    row["max6"] = 4;

    // 
    row["prop7"] = "regen-mana";
    row["par7"] = "";
    row["min7"] = 100;
    row["max7"] = 150;

    // 
    row["prop8"] = "skilltab";
    row["par8"] = 6;
    row["min8"] = 4;
    row["max8"] = 10;

    // 
    row["prop9"] = "res-all";
    row["par9"] = "";
    row["min9"] = 0;
    row["max9"] = 0;

    // 
    row["prop10"] = "res-all";
    row["par10"] = "";
    row["min10"] = 0;
    row["max10"] = 0;

  }

  // Herald of Zakarum
  if (row["index"] === "Herald of Zakarum") {

    // 
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 500;

    // 
    row["prop2"] = "block";
    row["par2"] = "";
    row["min2"] = 30;
    row["max2"] = 30;

    // 
    row["prop3"] = "block2";
    row["par3"] = "";
    row["min3"] = 30;
    row["max3"] = 30;

    // 
    row["prop4"] = "att%";
    row["par4"] = "";
    row["min4"] = 20;
    row["max4"] = 20;

    // 
    row["prop5"] = "str/lvl";
    row["par5"] = "";
    row["min5"] = 4;
    row["max5"] = 4;

    // 
    row["prop6"] = "pal";
    row["par6"] = "";
    row["min6"] = 2;
    row["max6"] = 3;

    // 
    row["prop7"] = "skilltab";
    row["par7"] = 9;
    row["min7"] = 4;
    row["max7"] = 10;

    // 
    row["prop8"] = "res-all";
    row["par8"] = "";
    row["min8"] = 0;
    row["max8"] = 0;

    // 
    row["prop9"] = "res-all";
    row["par9"] = "";
    row["min9"] = 0;
    row["max9"] = 0;

  }

  // Lidless Wall
  if (row["index"] === "Lidless Wall") {

    // 
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 500;

    // 
    row["prop2"] = "mana%";
    row["par2"] = "";
    row["min2"] = 15;
    row["max2"] = 25;

    // 
    row["prop3"] = "cast2";
    row["par3"] = "";
    row["min3"] = 20;
    row["max3"] = 20;

    // 
    row["prop4"] = "mana-kill";
    row["par4"] = "";
    row["min4"] = 5;
    row["max4"] = 15;

    // 
    row["prop5"] = "enr/lvl";
    row["par5"] = "";
    row["min5"] = 4;
    row["max5"] = 4;

    // 
    row["prop6"] = "light";
    row["par6"] = "";
    row["min6"] = 1;
    row["max6"] = 1;

    // 
    row["prop7"] = "oskill";
    row["par7"] = "Attract";
    row["min7"] = 3;
    row["max7"] = 3;

  }

  // Tiamat's Rebuke
  if (row["index"] === "Tiamat's Rebuke") {

    // 
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 500;

    // 
    row["prop2"] = "dmg-cold";
    row["par2"] = "";
    row["min2"] = 1;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg-fire";
    row["par3"] = "";
    row["min3"] = 1;
    row["max3"] = 100;

    // 
    row["prop4"] = "dmg-ltng";
    row["par4"] = "";
    row["min4"] = 1;
    row["max4"] = 100;

    // 
    row["prop5"] = "gethit-skill";
    row["par5"] = "Nova";
    row["min5"] = 40;
    row["max5"] = 34;

    // 
    row["prop6"] = "gethit-skill";
    row["par6"] = "Frost Nova";
    row["min6"] = 40;
    row["max6"] = 58;

    // 
    row["prop7"] = "gethit-skill";
    row["par7"] = 62;
    row["min7"] = 0;
    row["max7"] = 0;

    // 
    row["prop8"] = "gethit-skill";
    row["par8"] = 62;
    row["min8"] = 0;
    row["max8"] = 0;

  }

  // Lance Guard
  if (row["index"] === "Lance Guard") {

    // 
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 500;

    // 
    row["prop2"] = "dmg-to-mana";
    row["par2"] = "";
    row["min2"] = 15;
    row["max2"] = 30;

    // 
    row["prop3"] = "balance2";
    row["par3"] = "";
    row["min3"] = 30;
    row["max3"] = 30;

    // 
    row["prop4"] = "deadly";
    row["par4"] = "";
    row["min4"] = 50;
    row["max4"] = 50;

    // 
    row["prop5"] = "thorns/lvl";
    row["par5"] = "";
    row["min5"] = 35;
    row["max5"] = 35;

    // 
    row["prop5"] = "dmg-norm";
    row["par5"] = "";
    row["min5"] = 1;
    row["max5"] = 100;

  }

  // Stormchaser
  if (row["index"] === "Stormchaser") {

    // 
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 500;

    // 
    row["prop2"] = "block";
    row["par2"] = "";
    row["min2"] = 25;
    row["max2"] = 25;

    // 
    row["prop3"] = "block2";
    row["par3"] = "";
    row["min3"] = 20;
    row["max3"] = 20;

    // 
    row["prop4"] = "att";
    row["par4"] = "";
    row["min4"] = 250;
    row["max4"] = 500;

    // 
    row["prop5"] = "res-ltng";
    row["par5"] = "";
    row["min5"] = 40;
    row["max5"] = 90;

    // 
    row["prop6"] = "res-all";
    row["par6"] = "";
    row["min6"] = -10;
    row["max6"] = -30;

    // 
    row["prop7"] = "nofreeze";
    row["par7"] = "";
    row["min7"] = 1;
    row["max7"] = 1;

    // 
    row["prop8"] = "dmg-ltng";
    row["par8"] = "";
    row["min8"] = 1;
    row["max8"] = 1000;

    // 
    row["prop9"] = "gethit-skill";
    row["par9"] = "Tornado";
    row["min9"] = 40;
    row["max9"] = 40;

    // 
    row["prop10"] = "gethit-skill";
    row["par10"] = "Blizzard";
    row["min10"] = 40;
    row["max10"] = 40;

  }

  // Mosers Blessed Circle
  if (row["index"] === "Mosers Blessed Circle") {

    // 
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 500;

    // 
    row["prop2"] = "block";
    row["par2"] = "";
    row["min2"] = 25;
    row["max2"] = 25;

    // 
    row["prop3"] = "block2";
    row["par3"] = "";
    row["min3"] = 50;
    row["max3"] = 50;

    // 
    row["prop4"] = "sock";
    row["par4"] = "";
    row["min4"] = 2;
    row["max4"] = 2;

    // 
    row["prop5"] = "res-all-max";
    row["par5"] = "";
    row["min5"] = 5;
    row["max5"] = 15;

  }

  // Visceratuant
  if (row["index"] === "Visceratuant") {

    // 
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 500;

    // 
    row["prop2"] = "block";
    row["par2"] = "";
    row["min2"] = 30;
    row["max2"] = 30;

    // 
    row["prop3"] = "block2";
    row["par3"] = "";
    row["min3"] = 30;
    row["max3"] = 30;

    // 
    row["prop4"] = "sor";
    row["par4"] = "";
    row["min4"] = 1;
    row["max4"] = 2;

    // 
    row["prop5"] = "thorns/lvl";
    row["par5"] = "";
    row["min5"] = 30;
    row["max5"] = 30;

  }

  // HELMETS

  // Biggins Bonnet
  if (row["index"] === "War Bonnet") {

    // 
    row["prop1"] = "hp";
    row["par1"] = "";
    row["min1"] = 0;
    row["max1"] = 0;

    // 
    row["prop2"] = "att";
    row["par2"] = "";
    row["min2"] = 30;
    row["max2"] = 130;

    // 
    row["prop3"] = "dmg%";
    row["par3"] = "";
    row["min3"] = 50;
    row["max3"] = 50;

    // 
    row["prop4"] = "mana";
    row["par4"] = "";
    row["min4"] = 30;
    row["max4"] = 30;

    // 
    row["prop5"] = "ac";
    row["par5"] = "";
    row["min5"] = 14;
    row["max5"] = 140;

    // 
    row["prop6"] = "skill";
    row["par6"] = 226;
    row["min6"] = 1;
    row["max6"] = 4;

  }

  // Coif of Glory
  if (row["index"] === "Coif of Glory") {

    // 
    row["prop1"] = "ac/lvl";
    row["par1"] = "";
    row["min1"] = 25;
    row["max1"] = 25;

    // 
    row["prop2"] = "thorns/lvl";
    row["par2"] = "";
    row["min2"] = 15;
    row["max2"] = 15;

    // 
    row["prop3"] = "stupidity";
    row["par3"] = "";
    row["min3"] = 1;
    row["max3"] = 1;

    // 
    row["prop4"] = "ac-miss";
    row["par4"] = "";
    row["min4"] = 300;
    row["max4"] = 500;

    // 
    row["prop5"] = "res-ltng";
    row["par5"] = "";
    row["min5"] = 40;
    row["max5"] = 90;

    // 
    row["prop6"] = "res-all";
    row["par6"] = "";
    row["min6"] = -10;
    row["max6"] = -30;

    // 
    row["prop7"] = "dmg-ltng";
    row["par7"] = "";
    row["min7"] = 1;
    row["max7"] = 50;

    // 
    row["prop8"] = "slow";
    row["par8"] = "";
    row["min8"] = 25;
    row["max8"] = 25;

  }

  // Tarnhelm
  if (row["index"] === "Tarnhelm") {

    // 
    row["prop1"] = "ac/lvl";
    row["par1"] = "";
    row["min1"] = 20;
    row["max1"] = 20;

    // 
    row["prop2"] = "thorns/lvl";
    row["par2"] = "";
    row["min2"] = 25;
    row["max2"] = 25;

    // 
    row["prop3"] = "ac%/lvl";
    row["par3"] = "";
    row["min3"] = 15;
    row["max3"] = 15;

    // 
    row["prop4"] = "mag%/lvl";
    row["par4"] = "";
    row["min4"] = 7;
    row["max4"] = 7;

    // 
    row["prop5"] = "gold%/lvl";
    row["par5"] = "";
    row["min5"] = 10;
    row["max5"] = 10;

    // 
    row["prop6"] = "res-all";
    row["par6"] = "";
    row["min6"] = -1;
    row["max6"] = -20;

  }

  // Duskdeep
  if (row["index"] === "Duskdeep") {

    // 
    row["prop1"] = "ac%/lvl";
    row["par1"] = "";
    row["min1"] = 20;
    row["max1"] = 20;

    // 
    row["prop2"] = "ac/lvl";
    row["par2"] = "";
    row["min2"] = 25;
    row["max2"] = 25;

    // 
    row["prop3"] = "red-dmg";
    row["par3"] = "";
    row["min3"] = 5;
    row["max3"] = 15;

    // 
    row["prop4"] = "dmg-mag";
    row["par4"] = "";
    row["min4"] = 1;
    row["max4"] = 20;

    // 
    row["prop5"] = "light";
    row["par5"] = "";
    row["min5"] = -1;
    row["max5"] = -2;

    // 
    row["prop6"] = "regen";
    row["par6"] = "";
    row["min6"] = 15;
    row["max6"] = 20;

    // 
    row["prop7"] = "dmg-max";
    row["par7"] = "";
    row["min7"] = 10;
    row["max7"] = 20;

  }

  // The Face of Horror
  if (row["index"] === "The Face of Horror") {

    // 
    row["prop1"] = "ac/lvl";
    row["par1"] = "";
    row["min1"] = 20;
    row["max1"] = 20;

    // 
    row["prop2"] = "ac%/lvl";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 50;

    // 
    row["prop3"] = "dmg-undead";
    row["par3"] = "";
    row["min3"] = 100;
    row["max3"] = 100;

    // 
    row["prop4"] = "dmg-demon";
    row["par4"] = "";
    row["min4"] = 100;
    row["max4"] = 100;

    // 
    row["prop5"] = "str";
    row["par5"] = "";
    row["min5"] = 100;
    row["max5"] = 100;

    // 
    row["prop6"] = "gold%/lvl";
    row["par6"] = "";
    row["min6"] = 3;
    row["max6"] = 3;

    // 
    row["prop7"] = "att/lvl";
    row["par7"] = "";
    row["min7"] = 20;
    row["max7"] = 20;

    // 
    row["prop8"] = "howl";
    row["par8"] = "";
    row["min8"] = 96;
    row["max8"] = 96;

  }

  // Wormskull
  if (row["index"] === "Wormskull") {

    // 
    row["prop1"] = "nec";
    row["par1"] = "";
    row["min1"] = 2;
    row["max1"] = 2;

    // 
    row["prop2"] = "dmg-pois";
    row["par2"] = "";
    row["min2"] = 200;
    row["max2"] = 400;

    // 
    row["prop3"] = "lifesteal";
    row["par3"] = "";
    row["min3"] = 5;
    row["max3"] = 10;

    // 
    row["prop4"] = "res-pois";
    row["par4"] = "";
    row["min4"] = 40;
    row["max4"] = 90;

    // 
    row["prop5"] = "res-all";
    row["par5"] = "";
    row["min5"] = -10;
    row["max5"] = -30;

    // 
    row["prop6"] = "mana";
    row["par6"] = "";
    row["min6"] = 100;
    row["max6"] = 100;

    // 
    row["prop7"] = "mana-kill";
    row["par7"] = "";
    row["min7"] = 4;
    row["max7"] = 10;

    // 
    row["prop8"] = "heal-kill";
    row["par8"] = "";
    row["min8"] = 4;
    row["max8"] = 10;

    // 
    row["prop9"] = "extra-pois";
    row["par9"] = "";
    row["min9"] = 5;
    row["max9"] = 10;

  }

  // Howltusk
  if (row["index"] === "Howltusk") {

    // 
    row["prop1"] = "dmg-to-mana";
    row["par1"] = "";
    row["min1"] = 50;
    row["max1"] = 50;

    // 
    row["prop2"] = "ac%";
    row["par2"] = "";
    row["min2"] = 210;
    row["max2"] = 420;

    // 
    row["prop3"] = "red-mag";
    row["par3"] = "";
    row["min3"] = 5;
    row["max3"] = 15;

    // 
    row["prop4"] = "thorns/lvl";
    row["par4"] = "";
    row["min4"] = 30;
    row["max4"] = 30;

    // 
    row["prop5"] = "gethit-skill";
    row["par5"] = "Decrepify";
    row["min5"] = 40;
    row["max5"] = 1;

    // 
    row["prop6"] = "hit-skill";
    row["par6"] = "Taunt";
    row["min6"] = 30;
    row["max6"] = 11;

    // 
    row["prop7"] = "heal-kill";
    row["par7"] = "";
    row["min7"] = 4;
    row["max7"] = 10;

  }

  // Undead Crown
  if (row["index"] === "Undead Crown") {

    // 
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 150;
    row["max1"] = 450;

    // 
    row["prop2"] = "ac/lvl";
    row["par2"] = "";
    row["min2"] = 20;
    row["max2"] = 20;

    // 
    row["prop3"] = "lifesteal";
    row["par3"] = "";
    row["min3"] = 5;
    row["max3"] = 10;

    // 
    row["prop4"] = "res-pois";
    row["par4"] = "";
    row["min4"] = 40;
    row["max4"] = 90;

    // 
    row["prop5"] = "gethit-skill";
    row["par5"] = "Bone Armor";
    row["min5"] = 50;
    row["max5"] = 10;

    // 
    row["prop6"] = "att-undead";
    row["par6"] = "";
    row["min6"] = 250;
    row["max6"] = 500;

    // 
    row["prop7"] = "res-all";
    row["par7"] = "";
    row["min7"] = -10;
    row["max7"] = -30;

    // 
    row["prop8"] = "dmg-undead";
    row["par8"] = "";
    row["min8"] = 100;
    row["max8"] = 100;

    // 
    row["prop9"] = "nofreeze";
    row["par9"] = "";
    row["min9"] = 1;
    row["max9"] = 1;

    // 
    row["prop10"] = "skill";
    row["par10"] = 69;
    row["min10"] = 4;
    row["max10"] = 10;

    // 
    row["prop11"] = "skill";
    row["par11"] = 70;
    row["min11"] = 4;
    row["max11"] = 10;

  }


  // Demonhorn's Edge
  if (row["index"] === "Demonhorn's Edge") {

    // 
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 500;

    // 
    row["prop2"] = "ac/lvl";
    row["par2"] = "";
    row["min2"] = 15;
    row["max2"] = 15;

    // 
    row["prop3"] = "lifesteal";
    row["par3"] = "";
    row["min3"] = 5;
    row["max3"] = 10;

    // 
    row["prop4"] = "swing3";
    row["par4"] = "";
    row["min4"] = 40;
    row["max4"] = 40;

    // 
    row["prop5"] = "gethit-skill";
    row["par5"] = "Life Tap";
    row["min5"] = 50;
    row["max5"] = 12;

    // 
    row["prop6"] = "att-demon";
    row["par6"] = "";
    row["min6"] = 250;
    row["max6"] = 500;

    // 
    row["prop7"] = "bar";
    row["par7"] = "";
    row["min7"] = 2;
    row["max7"] = 3;

    // 
    row["prop8"] = "dmg-demon";
    row["par8"] = "";
    row["min8"] = 100;
    row["max8"] = 100;

    // 
    row["prop9"] = "skilltab";
    row["par9"] = 13;
    row["min9"] = 10;
    row["max9"] = 15;

  }

  // Steel Shade
  if (row["index"] === "Steelshade") {

    // 
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 500;

    // 
    row["prop2"] = "ac/lvl";
    row["par2"] = "";
    row["min2"] = 10;
    row["max2"] = 10;

    // 
    row["prop3"] = "manasteal";
    row["par3"] = "";
    row["min3"] = 4;
    row["max3"] = 10;

    // 
    row["prop4"] = "regen";
    row["par4"] = "";
    row["min4"] = 20;
    row["max4"] = 40;

    // 
    row["prop5"] = "abs-cold%";
    row["par5"] = "";
    row["min5"] = 5;
    row["max5"] = 15;

    // 
    row["prop6"] = "abs-fire%";
    row["par6"] = "";
    row["min6"] = 5;
    row["max6"] = 15;

    // 
    row["prop7"] = "dmg-cold";
    row["par7"] = "";
    row["min7"] = 1;
    row["max7"] = 20;

    // 
    row["prop8"] = "dmg-fire";
    row["par8"] = "";
    row["min8"] = 1;
    row["max8"] = 20;

  }

  // Harlequin Crest
  if (row["index"] === "Harlequin Crest") {

    // 
    row["prop1"] = "mana/lvl";
    row["par1"] = "";
    row["min1"] = 40;
    row["max1"] = 40;

    // 
    row["prop2"] = "red-dmg%";
    row["par2"] = "";
    row["min2"] = 15;
    row["max2"] = 15;

    // 
    row["prop3"] = "mag%";
    row["par3"] = "";
    row["min3"] = 50;
    row["max3"] = 100;

    // 
    row["prop4"] = "str";
    row["par4"] = "";
    row["min4"] = 1;
    row["max4"] = 1;

    // 
    row["prop5"] = "dex";
    row["par5"] = "";
    row["min5"] = 1;
    row["max5"] = 1;

    // 
    row["prop6"] = "cheap";
    row["par6"] = "";
    row["min6"] = 10;
    row["max6"] = 25;

    // 
    row["prop7"] = "red-mag";
    row["par7"] = "";
    row["min7"] = 5;
    row["max7"] = 15;

    // 
    row["prop8"] = "aura";
    row["par8"] = "Vigor";
    row["min8"] = 30;
    row["max8"] = 30;

    // 
    row["prop9"] = "enr";
    row["par9"] = "";
    row["min9"] = 0;
    row["max9"] = 0;

  }

  // Cerebus' Bite
  if (row["index"] === "Cerebus") {

    // 
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    // 
    row["prop2"] = "att%";
    row["par2"] = "";
    row["min2"] = 100;
    row["max2"] = 150;

    // 
    row["prop3"] = "lifesteal";
    row["par3"] = "";
    row["min3"] = 10;
    row["max3"] = 15;

    // 
    row["prop4"] = "openwounds";
    row["par4"] = "";
    row["min4"] = 100;
    row["max4"] = 100;

    // 
    row["prop5"] = "skilltab";
    row["par5"] = 16;
    row["min5"] = 4;
    row["max5"] = 10;

    // 
    row["prop6"] = "charged";
    row["par6"] = "Valkyrie";
    row["min6"] = 80;
    row["max6"] = 40;

    // 
    row["prop7"] = "abs-cold%";
    row["par7"] = "";
    row["min7"] = 5;
    row["max7"] = 15;

    // 
    row["prop8"] = "aura";
    row["par8"] = "Might";
    row["min8"] = 1;
    row["max8"] = 7;

  }

  // Giant Skull
  if (row["index"] === "Giantskull") {

    // 
    row["prop1"] = "ac";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    // 
    row["prop2"] = "crush";
    row["par2"] = "";
    row["min2"] = 40;
    row["max2"] = 40;

    // 
    row["prop3"] = "str/lvl";
    row["par3"] = "";
    row["min3"] = 35;
    row["max3"] = 35;

    // 
    row["prop4"] = "sock";
    row["par4"] = "";
    row["min4"] = 1;
    row["max4"] = 2;

    // 
    row["prop5"] = "knock";
    row["par5"] = "";
    row["min5"] = 1;
    row["max5"] = 1;

    // 
    row["prop6"] = "deadly";
    row["par6"] = "";
    row["min6"] = 20;
    row["max6"] = 20;

    // 
    row["prop7"] = "heal-kill";
    row["par7"] = "";
    row["min7"] = 5;
    row["max7"] = 15;

    // 
    row["prop8"] = "aura";
    row["par8"] = "Resist Fire";
    row["min8"] = 1;
    row["max8"] = 7;

  }

  // Nightwing's Veil
  if (row["index"] === "Nightwing's Veil") {

    // 
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    // 
    row["prop2"] = "crush";
    row["par2"] = "";
    row["min2"] = 15;
    row["max2"] = 25;

    // 
    row["prop3"] = "extra-cold";
    row["par3"] = "";
    row["min3"] = 15;
    row["max3"] = 25;

    // 
    row["prop4"] = "ease";
    row["par4"] = "";
    row["min4"] = -50;
    row["max4"] = -50;

    // 
    row["prop5"] = "nofreeze";
    row["par5"] = "";
    row["min5"] = 1;
    row["max5"] = 1;

    // 
    row["prop6"] = "abs-cold/lvl";
    row["par6"] = "";
    row["min6"] = 5;
    row["max6"] = 5;

    // 
    row["prop7"] = "dex/lvl";
    row["par7"] = "";
    row["min7"] = 4;
    row["max7"] = 4;

    // 
    row["prop8"] = "aura";
    row["par8"] = "Holy Freeze";
    row["min8"] = 12;
    row["max8"] = 20;

  }

  // Spirit Keeper
  if (row["index"] === "Spiritkeeper") {

    // 
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    // 
    row["prop2"] = "dru";
    row["par2"] = "";
    row["min2"] = 1;
    row["max2"] = 2;

    // 
    row["prop3"] = "balance3";
    row["par3"] = "";
    row["min3"] = 35;
    row["max3"] = 35;

    // 
    row["prop4"] = "res-pois-max";
    row["par4"] = "";
    row["min4"] = 10;
    row["max4"] = 20;

    // 
    row["prop5"] = "res-fire";
    row["par5"] = "";
    row["min5"] = 40;
    row["max5"] = 90;

    // 
    row["prop6"] = "abs-ltng%";
    row["par6"] = "";
    row["min6"] = 5;
    row["max6"] = 10;

    // 
    row["prop7"] = "abs-cold%";
    row["par7"] = "";
    row["min7"] = 5;
    row["max7"] = 10;

    // 
    row["prop8"] = "res-all";
    row["par8"] = "";
    row["min8"] = -10;
    row["max8"] = -30;

    // 
    row["prop9"] = "gethit-skill";
    row["par9"] = "Cyclone Armor";
    row["min9"] = 40;
    row["max9"] = 10;

  }

  // Veil of Steel
  if (row["index"] === "Veil of Steel") {

    // 
    row["prop1"] = "ac";
    row["par1"] = "";
    row["min1"] = 500;
    row["max1"] = 500;

    // 
    row["prop2"] = "ac%";
    row["par2"] = "";
    row["min2"] = 250;
    row["max2"] = 500;

    // 
    row["prop3"] = "str/lvl";
    row["par3"] = "";
    row["min3"] = 4;
    row["max3"] = 4;

    // 
    row["prop4"] = "enr/lvl";
    row["par4"] = "";
    row["min4"] = 4;
    row["max4"] = 4;

    // 
    row["prop5"] = "light";
    row["par5"] = "";
    row["min5"] = -1;
    row["max5"] = -2;

    // 
    row["prop6"] = "deadly";
    row["par6"] = "";
    row["min6"] = 50;
    row["max6"] = 50;

    // 
    row["prop7"] = "ac-miss";
    row["par7"] = "";
    row["min7"] = 500;
    row["max7"] = 500;

    // 
    row["prop8"] = "aura";
    row["par8"] = "Defiance";
    row["min8"] = 4;
    row["max8"] = 14;

  }

  // Ravenlore
  if (row["index"] === "Ravenlore") {

    // 
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    // 
    row["prop2"] = "skill";
    row["par2"] = 221;
    row["min2"] = 10;
    row["max2"] = 10;

    // 
    row["prop3"] = "dru";
    row["par3"] = "";
    row["min3"] = 2;
    row["max3"] = 3;

    // 
    row["prop4"] = "enr";
    row["par4"] = "";
    row["min4"] = 40;
    row["max4"] = 100;

    // 
    row["prop5"] = "pierce-fire";
    row["par5"] = "";
    row["min5"] = 20;
    row["max5"] = 30;

    // 
    row["prop6"] = "pierce-cold";
    row["par6"] = "";
    row["min6"] = 20;
    row["max6"] = 30;

    // 
    row["prop7"] = "mana-kill";
    row["par7"] = "";
    row["min7"] = 5;
    row["max7"] = 15;

  }

  // Griffon's Eye
  if (row["index"] === "Griffon's Eye") {

    // 
    row["prop1"] = "ac";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    // 
    row["prop2"] = "cast2";
    row["par2"] = "";
    row["min2"] = 40;
    row["max2"] = 40;

    // 
    row["prop3"] = "pierce-ltng";
    row["par3"] = "";
    row["min3"] = 15;
    row["max3"] = 25;

    // 
    row["prop4"] = "extra-ltng";
    row["par4"] = "";
    row["min4"] = 15;
    row["max4"] = 25;

    // 
    row["prop8"] = "aura";
    row["par8"] = "Resist Lightning";
    row["min8"] = 1;
    row["max8"] = 7;

  }

  // Kira's Guardian
  if (row["index"] === "Kira's Guardian") {

    // 
    row["prop1"] = "ac";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    // 
    row["prop2"] = "balance2";
    row["par2"] = "";
    row["min2"] = 40;
    row["max2"] = 40;

    // 
    row["prop3"] = "nofreeze";
    row["par3"] = "";
    row["min3"] = 1;
    row["max3"] = 1;

    // 
    row["prop4"] = "aura";
    row["par4"] = "Salvation";
    row["min4"] = 1;
    row["max4"] = 4;

  }

  // Halaberd's Reign
  if (row["index"] === "Halaberd's Reign") {

    // 
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    // 
    row["prop2"] = "regen";
    row["par2"] = "";
    row["min2"] = 15;
    row["max2"] = 30;

    // 
    row["prop3"] = "balance2";
    row["par3"] = "";
    row["min3"] = 20;
    row["max3"] = 20;

    // 
    row["prop4"] = "bar";
    row["par4"] = "";
    row["min4"] = 2;
    row["max4"] = 3;

    // 
    row["prop5"] = "skilltab";
    row["par5"] = 13;
    row["min5"] = 4;
    row["max5"] = 10;

    // 
    row["prop6"] = "gethit-skill";
    row["par6"] = "Volcano";
    row["min6"] = 40;
    row["max6"] = 35;

    // 
    row["prop7"] = "skill";
    row["par7"] = 155;
    row["min7"] = 0;
    row["max7"] = 0;

  }

  // Wolfhowl
  if (row["index"] === "Wolfhowl") {

    // 
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    // 
    row["prop2"] = "str/lvl";
    row["par2"] = "";
    row["min2"] = 4;
    row["max2"] = 4;

    // 
    row["prop3"] = "dex/lvl";
    row["par3"] = "";
    row["min3"] = 4;
    row["max3"] = 4;

    // 
    row["prop4"] = "enr/lvl";
    row["par4"] = "";
    row["min4"] = 4;
    row["max4"] = 4;

    // 
    row["prop5"] = "bar";
    row["par5"] = "";
    row["min5"] = 2;
    row["max5"] = 3;

    // 
    row["prop6"] = "oskill";
    row["par6"] = "Wearwolf";
    row["min6"] = 10;
    row["max6"] = 20;

    // 
    row["prop7"] = "oskill";
    row["par7"] = "Shape Shifting";
    row["min7"] = 10;
    row["max7"] = 20;

    // 
    row["prop8"] = "oskill";
    row["par8"] = "Fury";
    row["min8"] = 10;
    row["max8"] = 20;

    // 
    row["prop9"] = "openwounds";
    row["par9"] = "";
    row["min9"] = 40;
    row["max9"] = 40;

  }

  // Crown of Ages
  if (row["index"] === "Crown of Ages") {

    // 
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    // 
    row["prop2"] = "ac/lvl";
    row["par2"] = "";
    row["min2"] = 35;
    row["max2"] = 35;

    // 
    row["prop3"] = "balance2";
    row["par3"] = "";
    row["min3"] = 30;
    row["max3"] = 30;

    // 
    row["prop4"] = "sock";
    row["par4"] = "";
    row["min4"] = 1;
    row["max4"] = 2;

    // 
    row["prop5"] = "industruc";
    row["par5"] = "";
    row["min5"] = 1;
    row["max5"] = 1;

    // 
    row["prop6"] = "red-dmg%";
    row["par6"] = "";
    row["min6"] = 15;
    row["max6"] = 30;

    // 
    row["prop7"] = "gethit-skill";
    row["par7"] = "Cyclone Armor";
    row["min7"] = 40;
    row["max7"] = 10;

  }

  // Andariel's Visage
  if (row["index"] === "Andariel's Visage") {

    // 
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    // 
    row["prop2"] = "swing2";
    row["par2"] = "";
    row["min2"] = 20;
    row["max2"] = 20;

    // 
    row["prop3"] = "str/lvl";
    row["par3"] = "";
    row["min3"] = 4;
    row["max3"] = 4;

    // 
    row["prop4"] = "lifesteal";
    row["par4"] = "";
    row["min4"] = 5;
    row["max4"] = 15;

    // 
    row["prop5"] = "res-pois-max";
    row["par5"] = "";
    row["min5"] = 15;
    row["max5"] = 25;

    // 
    row["prop6"] = "res-cold";
    row["par6"] = "";
    row["min6"] = -10;
    row["max6"] = -30;

    // 
    row["prop7"] = "res-pois";
    row["par7"] = "";
    row["min7"] = 40;
    row["max7"] = 90;

    // 
    row["prop8"] = "att-skill";
    row["par8"] = 92;
    row["min8"] = 35;
    row["max8"] = 35;

    // 
    row["prop9"] = "gethit-skill";
    row["par9"] = "Lower Resist";
    row["min9"] = 40;
    row["max9"] = 10;

    // 
    row["prop10"] = "res-ltng";
    row["par10"] = "";
    row["min10"] = -10;
    row["max10"] = -30;

    // 
    row["prop11"] = "res-fire";
    row["par11"] = "";
    row["min11"] = -10;
    row["max11"] = -20;

  }

  // Crown of Thieves
  if (row["index"] === "Crown of Thieves") {

    // 
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    // 
    row["prop2"] = "lifesteal";
    row["par2"] = "";
    row["min2"] = 5;
    row["max2"] = 15;

    // 
    row["prop3"] = "mana";
    row["par3"] = "";
    row["min3"] = 100;
    row["max3"] = 250;

    // 
    row["prop4"] = "dex/lvl";
    row["par4"] = "";
    row["min4"] = 4;
    row["max4"] = 4;

    // 
    row["prop5"] = "gold%";
    row["par5"] = "";
    row["min5"] = 100;
    row["max5"] = 250;

    // 
    row["prop6"] = "res-fire";
    row["par6"] = "";
    row["min6"] = 40;
    row["max6"] = 90;

    // 
    row["prop7"] = "res-all";
    row["par7"] = "";
    row["min7"] = -10;
    row["max7"] = -30;

  }

  // Valkyrie Wing
  if (row["index"] === "Valkiry Wing") {

    // 
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    // 
    row["prop2"] = "ama";
    row["par2"] = "";
    row["min2"] = 1;
    row["max2"] = 2;

    // 
    row["prop3"] = "move2";
    row["par3"] = "";
    row["min3"] = 20;
    row["max3"] = 20;

    // 
    row["prop4"] = "balance2";
    row["par4"] = "";
    row["min4"] = 20;
    row["max4"] = 20;

    // 
    row["prop5"] = "mana-kill";
    row["par5"] = "";
    row["min5"] = 5;
    row["max5"] = 15;

    // 
    row["prop6"] = "res-cold";
    row["par6"] = "";
    row["min6"] = 40;
    row["max6"] = 90;

    // 
    row["prop7"] = "res-all";
    row["par7"] = "";
    row["min7"] = -10;
    row["max7"] = -30;

    // 
    row["prop8"] = "ac";
    row["par8"] = "";
    row["min8"] = 150;
    row["max8"] = 350;

  }

  // Jalal's Mane
  if (row["index"] === "Jalal's Mane") {

    // 
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    // 
    row["prop2"] = "balance2";
    row["par2"] = "";
    row["min2"] = 30;
    row["max2"] = 30;

    // 
    row["prop3"] = "att%";
    row["par3"] = "";
    row["min3"] = 20;
    row["max3"] = 20;

    // 
    row["prop4"] = "dru";
    row["par4"] = "";
    row["min4"] = 2;
    row["max4"] = 3;

    // 
    row["prop5"] = "mana-kill";
    row["par5"] = "";
    row["min5"] = 5;
    row["max5"] = 15;

    // 
    row["prop6"] = "str/lvl";
    row["par6"] = "";
    row["min6"] = 4;
    row["max6"] = 4;

    // 
    row["prop7"] = "enr/lvl";
    row["par7"] = "";
    row["min7"] = 4;
    row["max7"] = 4;

    // 
    row["prop8"] = "skilltab";
    row["par8"] = 16;
    row["min8"] = 4;
    row["max8"] = 10;

    // 
    row["prop9"] = "res-all";
    row["par9"] = "";
    row["min9"] = 0;
    row["max9"] = 0;

    // 
    row["prop10"] = "res-all";
    row["par10"] = "";
    row["min10"] = 0;
    row["max10"] = 0;

  }

  // Arreat's Face
  if (row["index"] === "Arreat's Face") {

    // 
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    // 
    row["prop2"] = "balance2";
    row["par2"] = "";
    row["min2"] = 30;
    row["max2"] = 30;

    // 
    row["prop3"] = "att%";
    row["par3"] = "";
    row["min3"] = 20;
    row["max3"] = 20;

    // 
    row["prop4"] = "bar";
    row["par4"] = "";
    row["min4"] = 2;
    row["max4"] = 3;

    // 
    row["prop5"] = "lifesteal";
    row["par5"] = "";
    row["min5"] = 5;
    row["max5"] = 15;

    // 
    row["prop6"] = "str/lvl";
    row["par6"] = "";
    row["min6"] = 4;
    row["max6"] = 4;

    // 
    row["prop7"] = "dex/lvl";
    row["par7"] = "";
    row["min7"] = 4;
    row["max7"] = 4;

    // 
    row["prop8"] = "skilltab";
    row["par8"] = 12;
    row["min8"] = 4;
    row["max8"] = 10;

    // 
    row["prop9"] = "res-all";
    row["par9"] = "";
    row["min9"] = 0;
    row["max9"] = 0;

    // 
    row["prop10"] = "res-all";
    row["par10"] = "";
    row["min10"] = 0;
    row["max10"] = 0;

  }

  // Vampire Gaze
  if (row["index"] === "Vampiregaze") {

    // 
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    // 
    row["prop2"] = "dmg-cold";
    row["par2"] = "";
    row["min2"] = 4;
    row["max2"] = 128;

    // 
    row["prop3"] = "lifesteal";
    row["par3"] = "";
    row["min3"] = 5;
    row["max3"] = 15;

    // 
    row["prop4"] = "manasteal";
    row["par4"] = "";
    row["min4"] = 5;
    row["max4"] = 15;

    // 
    row["prop5"] = "red-dmg%";
    row["par5"] = "";
    row["min5"] = 15;
    row["max5"] = 20;

    // 
    row["prop6"] = "red-mag";
    row["par6"] = "";
    row["min6"] = 10;
    row["max6"] = 15;

  }

  // Blackhorn's Face
  if (row["index"] === "Blackhorn's Face") {

    // 
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    // 
    row["prop2"] = "noheal";
    row["par2"] = "";
    row["min2"] = 1;
    row["max2"] = 1;

    // 
    row["prop3"] = "abs-ltng%";
    row["par3"] = "";
    row["min3"] = 5;
    row["max3"] = 15;

    // 
    row["prop4"] = "thorns/lvl";
    row["par4"] = "";
    row["min4"] = 35;
    row["max4"] = 35;

    // 
    row["prop5"] = "res-ltng";
    row["par5"] = "";
    row["min5"] = 40;
    row["max5"] = 90;

    // 
    row["prop6"] = "res-all";
    row["par6"] = "";
    row["min6"] = -10;
    row["max6"] = -30;

  }

  // Darksight Helm
  if (row["index"] === "Darksight Helm") {

    // 
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    // 
    row["prop2"] = "nofreeze";
    row["par2"] = "";
    row["min2"] = 1;
    row["max2"] = 1;

    // 
    row["prop3"] = "ac/lvl";
    row["par3"] = "";
    row["min3"] = 15;
    row["max3"] = 15;

    // 
    row["prop4"] = "manasteal";
    row["par4"] = "";
    row["min4"] = 5;
    row["max4"] = 15;

    // 
    row["prop5"] = "light";
    row["par5"] = "";
    row["min5"] = -4;
    row["max5"] = -4;

    // 
    row["prop6"] = "res-fire";
    row["par6"] = "";
    row["min6"] = 40;
    row["max6"] = 90;

    // 
    row["prop7"] = "res-all";
    row["par7"] = "";
    row["min7"] = -10;
    row["max7"] = -30;

    // 
    row["prop8"] = "gethit-skill";
    row["par8"] = "Dim Vision";
    row["min8"] = 40;
    row["max8"] = 12;

  }

  // Stealskull
  if (row["index"] === "Stealskull") {

    // 
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    // 
    row["prop2"] = "swing2";
    row["par2"] = "";
    row["min2"] = 20;
    row["max2"] = 20;

    // 
    row["prop3"] = "balance2";
    row["par3"] = "";
    row["min3"] = 20;
    row["max3"] = 20;

    // 
    row["prop4"] = "lifesteal";
    row["par4"] = "";
    row["min4"] = 5;
    row["max4"] = 15;

    // 
    row["prop5"] = "manasteal";
    row["par5"] = "";
    row["min5"] = 5;
    row["max5"] = 15;

    // 
    row["prop6"] = "mag%";
    row["par6"] = "";
    row["min6"] = 40;
    row["max6"] = 60;

  }

  // Rockstopper
  if (row["index"] === "Rockstopper") {

    // 
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    // 
    row["prop2"] = "red-dmg%";
    row["par2"] = "";
    row["min2"] = 15;
    row["max2"] = 20;

    // 
    row["prop3"] = "balance2";
    row["par3"] = "";
    row["min3"] = 30;
    row["max3"] = 30;

    // 
    row["prop4"] = "res-cold";
    row["par4"] = "";
    row["min4"] = 40;
    row["max4"] = 90;

    // 
    row["prop5"] = "res-fire";
    row["par5"] = "";
    row["min5"] = 40;
    row["max5"] = 90;

    // 
    row["prop6"] = "res-all";
    row["par6"] = "";
    row["min6"] = -10;
    row["max6"] = -24;

    // 
    row["prop7"] = "vit";
    row["par7"] = "";
    row["min7"] = 0;
    row["max7"] = 0;

    // 
    row["prop8"] = "vit";
    row["par8"] = "";
    row["min8"] = 0;
    row["max8"] = 0;

  }

  // Peasent Crown
  if (row["index"] === "Peasent Crown") {

    // 
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    // 
    row["prop2"] = "move2";
    row["par2"] = "";
    row["min2"] = 20;
    row["max2"] = 20;

    // 
    row["prop3"] = "enr/lvl";
    row["par3"] = "";
    row["min3"] = 4;
    row["max3"] = 4;

    // 
    row["prop4"] = "regen";
    row["par4"] = "";
    row["min4"] = 15;
    row["max4"] = 30;

    // 
    row["prop5"] = "oskill";
    row["par5"] = "Oak Sage";
    row["min5"] = 40;
    row["max5"] = 40;

  }

  // WEAPONS

  // Rixots Keen
  if (row["index"] === "Rixots Keen") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 150;
    row["max1"] = 250;

    // 
    row["prop2"] = "dmg-min";
    row["par2"] = "";
    row["min2"] = 5;
    row["max2"] = 25;

    // 
    row["prop3"] = "crush";
    row["par3"] = "";
    row["min3"] = 50;
    row["max3"] = 50;

    // 
    row["prop4"] = "att%";
    row["par4"] = "";
    row["min4"] = 40;
    row["max4"] = 40;

    // 
    row["prop5"] = "skill";
    row["par5"] = 253;
    row["min5"] = 4;
    row["max5"] = 10;

    // 
    row["prop6"] = "light";
    row["par6"] = "";
    row["min6"] = 2;
    row["max6"] = 3;

    // 
    row["prop7"] = "skill";
    row["par7"] = 258;
    row["min7"] = 4;
    row["max7"] = 10;

  }

  // Felloak
  if (row["index"] === "Felloak") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 210;
    row["max1"] = 420;

    // 
    row["prop2"] = "dmg-fire";
    row["par2"] = "";
    row["min2"] = 1;
    row["max2"] = 25;

    // 
    row["prop3"] = "hit-skill";
    row["par3"] = "Frost Nova";
    row["min3"] = 40;
    row["max3"] = 15;

    // 
    row["prop4"] = "heal-kill";
    row["par4"] = "";
    row["min4"] = 1;
    row["max4"] = 5;

    // 
    row["prop5"] = "res-cold";
    row["par5"] = "";
    row["min5"] = 50;
    row["max5"] = 100;

    // 
    row["prop6"] = "res-fire";
    row["par6"] = "";
    row["min6"] = 50;
    row["max6"] = 100;

    // 
    row["prop7"] = "skill";
    row["par7"] = 236;
    row["min7"] = 1;
    row["max7"] = 4;

    // 
    row["prop8"] = "dmg-cold";
    row["par8"] = "";
    row["min8"] = 1;
    row["max8"] = 25;

    // 
    row["prop9"] = "res-all";
    row["par9"] = "";
    row["min9"] = -10;
    row["max9"] = -30;

  }

  // Gull
  if (row["index"] === "Gull") {

    //
    row["prop1"] = "dmg-min";
    row["par1"] = "";
    row["min1"] = 50;
    row["max1"] = 50;

    // 
    row["prop2"] = "mag%";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 50;

    // 
    row["prop3"] = "gold%";
    row["par3"] = "";
    row["min3"] = 150;
    row["max3"] = 150;

    // 
    row["prop4"] = "res-all";
    row["par4"] = "";
    row["min4"] = -10;
    row["max4"] = -40;

  }


  // Bane Ash
  if (row["index"] === "Bane Ash") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    // 
    row["prop2"] = "swing2";
    row["par2"] = "";
    row["min2"] = 40;
    row["max2"] = 40;

    // 
    row["prop3"] = "mana";
    row["par3"] = "";
    row["min3"] = 100;
    row["max3"] = 100;

    // 
    row["prop4"] = "fire-min";
    row["par4"] = "";
    row["min4"] = 10;
    row["max4"] = 15;

    // 
    row["prop5"] = "fire-max";
    row["par5"] = "";
    row["min5"] = 25;
    row["max5"] = 30;

    // 
    row["prop6"] = "res-fire";
    row["par6"] = "";
    row["min6"] = 10;
    row["max6"] = 50;

    // 
    row["prop7"] = "skill";
    row["par7"] = 52;
    row["min7"] = 5;
    row["max7"] = 10;

    // 
    row["prop8"] = "skill";
    row["par8"] = 37;
    row["min8"] = 2;
    row["max8"] = 10;

    // 
    row["prop9"] = "skill";
    row["par9"] = 47;
    row["min9"] = 4;
    row["max9"] = 10;

  }

  // Stoutnail
  if (row["index"] === "Stoutnail") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    // 
    row["prop2"] = "swing2";
    row["par2"] = "";
    row["min2"] = 20;
    row["max2"] = 20;

    // 
    row["prop3"] = "vit";
    row["par3"] = "";
    row["min3"] = 0;
    row["max3"] = 0;

    // 
    row["prop4"] = "thorns/lvl";
    row["par4"] = "";
    row["min4"] = 35;
    row["max4"] = 35;

    // 
    row["prop5"] = "red-mag";
    row["par5"] = "";
    row["min5"] = 20;
    row["max5"] = 20;

    // 
    row["prop6"] = "skill";
    row["par6"] = 246;
    row["min6"] = 4;
    row["max6"] = 20;

    // 
    row["prop7"] = "skill";
    row["par7"] = 233;
    row["min7"] = 4;
    row["max7"] = 14;

    // 
    row["prop8"] = "dmg-norm";
    row["par8"] = "";
    row["min8"] = 1;
    row["max8"] = 50;

    // 
    row["prop9"] = "dmg-cold";
    row["par9"] = "";
    row["min9"] = 1;
    row["max9"] = 50;

    // 
    row["prop10"] = "dmg-fire";
    row["par10"] = "";
    row["min10"] = 1;
    row["max10"] = 50;

  }

  // Torch of Iro
  if (row["index"] === "Iros Torch") {

    //
    row["prop1"] = "dmg-min";
    row["par1"] = "";
    row["min1"] = 10;
    row["max1"] = 20;

    //
    row["prop2"] = "dmg-max";
    row["par2"] = "";
    row["min2"] = 30;
    row["max2"] = 40;

    // 
    row["prop3"] = "nec";
    row["par3"] = "";
    row["min3"] = 1;
    row["max3"] = 3;

    // 
    row["prop4"] = "lifesteal";
    row["par4"] = "";
    row["min4"] = 8;
    row["max4"] = 12;

    // 
    row["prop5"] = "regen-mana";
    row["par5"] = "";
    row["min5"] = 50;
    row["max5"] = 50;

    // 
    row["prop6"] = "enr";
    row["par6"] = "";
    row["min6"] = 20;
    row["max6"] = 20;

    // 
    row["prop7"] = "skill";
    row["par7"] = 74;
    row["min7"] = 5;
    row["max7"] = 10;

    // 
    row["prop8"] = "light";
    row["par8"] = "";
    row["min8"] = 2;
    row["max8"] = 3;

  }


  // The Gnasher
  if (row["index"] === "The Gnasher") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 210;
    row["max1"] = 420;

    //
    row["prop2"] = "openwounds";
    row["par2"] = "";
    row["min2"] = 100;
    row["max2"] = 100;

    // 
    row["prop3"] = "crush";
    row["par3"] = "";
    row["min3"] = 40;
    row["max3"] = 40;

    // 
    row["prop4"] = "lifesteal";
    row["par4"] = "";
    row["min4"] = 4;
    row["max4"] = 5;

    // 
    row["prop5"] = "str";
    row["par5"] = "";
    row["min5"] = 40;
    row["max5"] = 50;

    // 
    row["prop6"] = "skill";
    row["par6"] = 126;
    row["min6"] = 10;
    row["max6"] = 20;

    // 
    row["prop7"] = "skill";
    row["par7"] = 130;
    row["min7"] = 5;
    row["max7"] = 10;

  }

  // Knell Striker
  if (row["index"] === "Knell Striker") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 280;
    row["max1"] = 480;

    //
    row["prop2"] = "crush";
    row["par2"] = "";
    row["min2"] = 100;
    row["max2"] = 100;

    // 
    row["prop3"] = "att";
    row["par3"] = "";
    row["min3"] = 150;
    row["max3"] = 150;

    // 
    row["prop4"] = "res-all";
    row["par4"] = "";
    row["min4"] = -10;
    row["max4"] = -40;

    // 
    row["prop5"] = "res-pois";
    row["par5"] = "";
    row["min5"] = 50;
    row["max5"] = 90;

    // 
    row["prop6"] = "res-fire";
    row["par6"] = "";
    row["min6"] = 50;
    row["max6"] = 90;

    // 
    row["prop7"] = "skill";
    row["par7"] = 102;
    row["min7"] = 1;
    row["max7"] = 4;

    // 
    row["prop8"] = "skill";
    row["par8"] = 103;
    row["min8"] = 1;
    row["max8"] = 4;


    // 
    row["prop9"] = "mana";
    row["par9"] = "";
    row["min9"] = 0;
    row["max9"] = 0;

  }

  // Pluckeye
  if (row["index"] === "Pluckeye") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 210;
    row["max1"] = 420;

    //
    row["prop2"] = "dmg-ltng";
    row["par2"] = "";
    row["min2"] = 1;
    row["max2"] = 50;

    // 
    row["prop3"] = "manasteal";
    row["par3"] = "";
    row["min3"] = 8;
    row["max3"] = 12;

    // 
    row["prop4"] = "hp";
    row["par4"] = "";
    row["min4"] = 0;
    row["max4"] = 0;

    // 
    row["prop5"] = "mana-kill";
    row["par5"] = "";
    row["min5"] = 3;
    row["max5"] = 7;

    // 
    row["prop6"] = "swing2";
    row["par6"] = "";
    row["min6"] = 20;
    row["max6"] = 20;

    // 
    row["prop7"] = "skill";
    row["par7"] = 7;
    row["min7"] = 4;
    row["max7"] = 10;

    // 
    row["prop8"] = "skill";
    row["par8"] = 9;
    row["min8"] = 1;
    row["max8"] = 10;

    // 
    row["prop9"] = "dmg-norm";
    row["par9"] = "";
    row["min9"] = 1;
    row["max9"] = 50;

    // 
    row["prop10"] = "skill";
    row["par10"] = 11;
    row["min10"] = 4;
    row["max10"] = 10;

    // 
    row["prop11"] = "skill";
    row["par11"] = 23;
    row["min11"] = 1;
    row["max11"] = 10;

    // 
    row["prop12"] = "dmg-undead";
    row["par12"] = "";
    row["min12"] = 100;
    row["max12"] = 150;

  }

  // Blood Crescent
  if (row["index"] === "Blood Crescent") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 300;
    row["max1"] = 500;

    //
    row["prop2"] = "openwounds";
    row["par2"] = "";
    row["min2"] = 100;
    row["max2"] = 100;

    // 
    row["prop3"] = "lifesteal";
    row["par3"] = "";
    row["min3"] = 10;
    row["max3"] = 15;

    // 
    row["prop4"] = "hp";
    row["par4"] = "";
    row["min4"] = 0;
    row["max4"] = 0;

    // 
    row["prop5"] = "mana-kill";
    row["par5"] = "";
    row["min5"] = 2;
    row["max5"] = 5;

    // 
    row["prop6"] = "swing2";
    row["par6"] = "";
    row["min6"] = 20;
    row["max6"] = 20;

    // 
    row["prop7"] = "res-all";
    row["par7"] = "";
    row["min7"] = -5;
    row["max7"] = -10;

    // 
    row["prop8"] = "res-fire";
    row["par8"] = "";
    row["min8"] = 10;
    row["max8"] = 20;

    // 
    row["prop9"] = "res-pois";
    row["par9"] = "";
    row["min9"] = 10;
    row["max9"] = 20;

    // 
    row["prop10"] = "dmg-min";
    row["par10"] = "";
    row["min10"] = 10;
    row["max10"] = 15;

    // 
    row["prop11"] = "skill";
    row["par11"] = 254;
    row["min11"] = 4;
    row["max11"] = 10;

    // 
    row["prop12"] = "dmg-max";
    row["par12"] = "";
    row["min12"] = 15;
    row["max12"] = 20;

  }

  // Axe of Fechmars
  if (row["index"] === "Fechmars Axe") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 300;
    row["max1"] = 500;

    //
    row["prop2"] = "freeze";
    row["par2"] = "";
    row["min2"] = 5;
    row["max2"] = 10;

    // 
    row["prop3"] = "manasteal";
    row["par3"] = "";
    row["min3"] = 10;
    row["max3"] = 15;

    // 
    row["prop4"] = "crush";
    row["par4"] = "";
    row["min4"] = 50;
    row["max4"] = 100;

    // 
    row["prop5"] = "att";
    row["par5"] = "";
    row["min5"] = 150;
    row["max5"] = 300;

    // 
    row["prop6"] = "swing2";
    row["par6"] = "";
    row["min6"] = 10;
    row["max6"] = 15;

    // 
    row["prop7"] = "res-all";
    row["par7"] = "";
    row["min7"] = -5;
    row["max7"] = -10;

    // 
    row["prop8"] = "res-cold";
    row["par8"] = "";
    row["min8"] = 20;
    row["max8"] = 30;

    // 
    row["prop9"] = "res-cold-max";
    row["par9"] = "";
    row["min9"] = 10;
    row["max9"] = 15;

    // 
    row["prop10"] = "dmg-min";
    row["par10"] = "";
    row["min10"] = 10;
    row["max10"] = 20;

    // 
    row["prop11"] = "skill";
    row["par11"] = 151;
    row["min11"] = 4;
    row["max11"] = 10;

    // 
    row["prop12"] = "dmg-max";
    row["par12"] = "";
    row["min12"] = 20;
    row["max12"] = 25;

  }

  // Dimoaks Hew
  if (row["index"] === "Dimoaks Hew") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dex";
    row["par2"] = "";
    row["min2"] = 25;
    row["max2"] = 50;

    // 
    row["prop3"] = "mana-kill";
    row["par3"] = "";
    row["min3"] = 4;
    row["max3"] = 10;

    // 
    row["prop4"] = "deadly";
    row["par4"] = "";
    row["min4"] = 50;
    row["max4"] = 50;

    // 
    row["prop5"] = "att";
    row["par5"] = "";
    row["min5"] = 250;
    row["max5"] = 500;

    // 
    row["prop6"] = "swing3";
    row["par6"] = "";
    row["min6"] = 40;
    row["max6"] = 40;

    // 
    row["prop7"] = "skill";
    row["par7"] = 130;
    row["min7"] = 4;
    row["max7"] = 10;

    // 
    row["prop8"] = "hit-skill";
    row["par8"] = "Ice Bolt";
    row["min8"] = 40;
    row["max8"] = 20;

    // 
    row["prop9"] = "dmg-norm";
    row["par9"] = "";
    row["min9"] = 1;
    row["max9"] = 50;

    // 
    row["prop10"] = "hit-skill";
    row["par10"] = "Fire Bolt";
    row["min10"] = 40;
    row["max10"] = 20;

    // 
    row["prop11"] = "skill";
    row["par11"] = 152;
    row["min11"] = 4;
    row["max11"] = 10;

    // 
    row["prop12"] = "skill";
    row["par12"] = 148;
    row["min12"] = 4;
    row["max12"] = 10;

  }

  // Crushflange
  if (row["index"] === "Crushflange") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 210;
    row["max1"] = 420;

    //
    row["prop2"] = "crush";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 50;

    // 
    row["prop3"] = "deadly";
    row["par3"] = "";
    row["min3"] = 25;
    row["max3"] = 25;

    // 
    row["prop4"] = "res-fire";
    row["par4"] = "";
    row["min4"] = 50;
    row["max4"] = 90;

    // 
    row["prop5"] = "res-all";
    row["par5"] = "";
    row["min5"] = -10;
    row["max5"] = -30;

    // 
    row["prop6"] = "swing2";
    row["par6"] = "";
    row["min6"] = 50;
    row["max6"] = 50;

    // 
    row["prop7"] = "skill";
    row["par7"] = 96;
    row["min7"] = 4;
    row["max7"] = 10;

    // 
    row["prop8"] = "str";
    row["par8"] = "";
    row["min8"] = 30;
    row["max8"] = 50;

    // 
    row["prop9"] = "dmg-norm";
    row["par9"] = "";
    row["min9"] = 1;
    row["max9"] = 50;

    // 
    row["prop10"] = "skill";
    row["par10"] = 122;
    row["min10"] = 4;
    row["max10"] = 10;

    // 
    row["prop11"] = "skill";
    row["par11"] = 104;
    row["min11"] = 4;
    row["max11"] = 10;

  }

  // The Dragon Chang
  if (row["index"] === "The Dragon Chang") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-undead";
    row["par2"] = "";
    row["min2"] = 250;
    row["max2"] = 500;

    // 
    row["prop3"] = "deadly";
    row["par3"] = "";
    row["min3"] = 20;
    row["max3"] = 20;

    // 
    row["prop4"] = "att";
    row["par4"] = "";
    row["min4"] = 150;
    row["max4"] = 300;

    // 
    row["prop5"] = "dmg-fire";
    row["par5"] = "";
    row["min5"] = 1;
    row["max5"] = 50;

    // 
    row["prop6"] = "swing2";
    row["par6"] = "";
    row["min6"] = 10;
    row["max6"] = 15;

    // 
    row["prop7"] = "skill";
    row["par7"] = 10;
    row["min7"] = 4;
    row["max7"] = 10;

    // 
    row["prop8"] = "light";
    row["par8"] = "";
    row["min8"] = 2;
    row["max8"] = 3;

    // 
    row["prop9"] = "dmg-norm";
    row["par9"] = "";
    row["min9"] = 1;
    row["max9"] = 50;

    // 
    row["prop10"] = "skill";
    row["par10"] = 19;
    row["min10"] = 4;
    row["max10"] = 10;

    // 
    row["prop11"] = "skill";
    row["par11"] = 30;
    row["min11"] = 4;
    row["max11"] = 10;

  }

  // Deathspade
  if (row["index"] === "Deathspade") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 210;
    row["max1"] = 420;

    //
    row["prop2"] = "dmg-demon";
    row["par2"] = "";
    row["min2"] = 210;
    row["max2"] = 420;

    // 
    row["prop3"] = "att-demon";
    row["par3"] = "";
    row["min3"] = 210;
    row["max3"] = 420;

    // 
    row["prop4"] = "att";
    row["par4"] = "";
    row["min4"] = 100;
    row["max4"] = 150;

    // 
    row["prop5"] = "att%";
    row["par5"] = "";
    row["min5"] = 15;
    row["max5"] = 30;

    // 
    row["prop6"] = "swing2";
    row["par6"] = "";
    row["min6"] = 20;
    row["max6"] = 20;

    // 
    row["prop7"] = "stupidity";
    row["par7"] = "";
    row["min7"] = 1;
    row["max7"] = 1;

    // 
    row["prop8"] = "mana-kill";
    row["par8"] = "";
    row["min8"] = 5;
    row["max8"] = 7;

    // 
    row["prop9"] = "dmg-min";
    row["par9"] = "";
    row["min9"] = 8;
    row["max9"] = 18;

    // 
    row["prop10"] = "dmg-max";
    row["par10"] = "";
    row["min10"] = 18;
    row["max10"] = 36;

    // 
    row["prop11"] = "skill";
    row["par11"] = 126;
    row["min11"] = 4;
    row["max11"] = 10;

    // 
    row["prop12"] = "skill";
    row["par12"] = 133;
    row["min12"] = 4;
    row["max12"] = 10;

  }

  // Serpent Lord
  if (row["index"] === "Serpent Lord") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 20;
    row["max2"] = 40;

    // 
    row["prop3"] = "dmg-undead";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "manasteal";
    row["par4"] = "";
    row["min4"] = 100;
    row["max4"] = 100;

    // 
    row["prop5"] = "reduce-ac";
    row["par5"] = "";
    row["min5"] = 100;
    row["max5"] = 100;

    // 
    row["prop6"] = "dmg-pois";
    row["par6"] = "";
    row["min6"] = 200;
    row["max6"] = 400;

    // 
    row["prop7"] = "res-pois";
    row["par7"] = "";
    row["min7"] = 50;
    row["max7"] = 90;

    // 
    row["prop8"] = "res-all";
    row["par8"] = "";
    row["min8"] = -10;
    row["max8"] = -30;

    // 
    row["prop9"] = "mana";
    row["par9"] = "";
    row["min9"] = 50;
    row["max9"] = 100;

    // 
    row["prop10"] = "light";
    row["par10"] = "";
    row["min10"] = -1;
    row["max10"] = -2;

    // 
    row["prop11"] = "skill";
    row["par11"] = 226;
    row["min11"] = 4;
    row["max11"] = 10;

    // 
    row["prop12"] = "skill";
    row["par12"] = 233;
    row["min12"] = 4;
    row["max12"] = 10;

  }

  // Skewer of Krintiz
  if (row["index"] === "Krintizs Skewer") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 210;
    row["max1"] = 420;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 15;
    row["max2"] = 30;

    // 
    row["prop3"] = "ignore-ac";
    row["par3"] = "";
    row["min3"] = 1;
    row["max3"] = 1;

    // 
    row["prop4"] = "manasteal";
    row["par4"] = "";
    row["min4"] = 7;
    row["max4"] = 14;

    // 
    row["prop5"] = "dex/lvl";
    row["par5"] = "";
    row["min5"] = 4;
    row["max5"] = 4;

    // 
    row["prop6"] = "str/lvl";
    row["par6"] = "";
    row["min6"] = 4;
    row["max6"] = 4;

    // 
    row["prop7"] = "deadly/lvl";
    row["par7"] = "";
    row["min7"] = 4;
    row["max7"] = 4;

  }

  // Leadcrow
  if (row["index"] === "Leadcrow") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-mag";
    row["par2"] = "";
    row["min2"] = 10;
    row["max2"] = 20;

    // 
    row["prop3"] = "res-pois";
    row["par3"] = "";
    row["min3"] = 40;
    row["max3"] = 90;

    // 
    row["prop4"] = "res-all";
    row["par4"] = "";
    row["min4"] = -10;
    row["max4"] = -30;

    // 
    row["prop5"] = "dex/lvl";
    row["par5"] = "";
    row["min5"] = 4;
    row["max5"] = 4;

    // 
    row["prop6"] = "att/lvl";
    row["par6"] = "";
    row["min6"] = 15;
    row["max6"] = 15;

    // 
    row["prop7"] = "deadly";
    row["par7"] = "";
    row["min7"] = 40;
    row["max7"] = 40;

    //
    row["prop8"] = "dmg-ltng";
    row["par8"] = "";
    row["min8"] = 10;
    row["max8"] = 20;

    //
    row["prop9"] = "skill";
    row["par9"] = 6;
    row["min9"] = 4;
    row["max9"] = 10;

    //
    row["prop10"] = "skill";
    row["par10"] = 8;
    row["min10"] = 4;
    row["max10"] = 10;

    //
    row["prop11"] = "dmg-demon";
    row["par11"] = "";
    row["min11"] = 100;
    row["max11"] = 150;

  }

  // The Diggler
  if (row["index"] === "The Diggler") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 210;
    row["max1"] = 420;

    //
    row["prop2"] = "dmg/lvl";
    row["par2"] = "";
    row["min2"] = 5;
    row["max2"] = 5;

    // 
    row["prop3"] = "ignore-ac";
    row["par3"] = "";
    row["min3"] = 1;
    row["max3"] = 1;

    // 
    row["prop4"] = "swing2";
    row["par4"] = "";
    row["min4"] = 50;
    row["max4"] = 50;

    // 
    row["prop5"] = "dex/lvl";
    row["par5"] = "";
    row["min5"] = 4;
    row["max5"] = 4;

    // 
    row["prop6"] = "res-fire";
    row["par6"] = "";
    row["min6"] = 40;
    row["max6"] = 90;

    // 
    row["prop7"] = "res-cold";
    row["par7"] = "";
    row["min7"] = 40;
    row["max7"] = 90;

    //
    row["prop8"] = "res-all";
    row["par8"] = "";
    row["min8"] = -10;
    row["max8"] = -30;

    //
    row["prop9"] = "dmg-dem/lvl";
    row["par9"] = "";
    row["min9"] = 20;
    row["max9"] = 20;

    //
    row["prop10"] = "skill";
    row["par10"] = 268;
    row["min10"] = 4;
    row["max10"] = 10;

  }

  // Razortine
  if (row["index"] === "Razortine") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 300;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 10;
    row["max2"] = 20;

    // 
    row["prop3"] = "ignore-ac";
    row["par3"] = "";
    row["min3"] = 100;
    row["max3"] = 100;

    // 
    row["prop4"] = "swing2";
    row["par4"] = "";
    row["min4"] = 50;
    row["max4"] = 50;

    // 
    row["prop5"] = "slow";
    row["par5"] = "";
    row["min5"] = 50;
    row["max5"] = 50;

    // 
    row["prop6"] = "dex";
    row["par6"] = "";
    row["min6"] = 15;
    row["max6"] = 30;

    // 
    row["prop7"] = "str";
    row["par7"] = "";
    row["min7"] = 15;
    row["max7"] = 30;

    //
    row["prop8"] = "dmg-und/lvl";
    row["par8"] = "";
    row["min8"] = 15;
    row["max8"] = 15;

    //
    row["prop9"] = "dmg-dem/lvl";
    row["par9"] = "";
    row["min9"] = 15;
    row["max9"] = 15;

    //
    row["prop10"] = "skill";
    row["par10"] = 24;
    row["min10"] = 4;
    row["max10"] = 10;

    //
    row["prop11"] = "skill";
    row["par11"] = 34;
    row["min11"] = 4;
    row["max11"] = 10;

  }

  // Shadowfang
  if (row["index"] === "Shadowfang") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 210;
    row["max1"] = 420;

    //
    row["prop2"] = "dmg-cold";
    row["par2"] = "";
    row["min2"] = 1;
    row["max2"] = 50;

    // 
    row["prop3"] = "manasteal";
    row["par3"] = "";
    row["min3"] = 10;
    row["max3"] = 15;

    // 
    row["prop4"] = "lifesteal";
    row["par4"] = "";
    row["min4"] = 10;
    row["max4"] = 15;

    // 
    row["prop5"] = "res-cold";
    row["par5"] = "";
    row["min5"] = 40;
    row["max5"] = 90;

    // 
    row["prop6"] = "res-all";
    row["par6"] = "";
    row["min6"] = -10;
    row["max6"] = -30;

    // 
    row["prop7"] = "light";
    row["par7"] = "";
    row["min7"] = -2;
    row["max7"] = -3;

    //
    row["prop8"] = "att/lvl";
    row["par8"] = "";
    row["min8"] = 25;
    row["max8"] = 25;

    //
    row["prop9"] = "str/lvl";
    row["par9"] = "";
    row["min9"] = 10;
    row["max9"] = 10;

    //
    row["prop10"] = "skill";
    row["par10"] = 150;
    row["min10"] = 4;
    row["max10"] = 10;

    //
    row["prop11"] = "skill";
    row["par11"] = 151;
    row["min11"] = 4;
    row["max11"] = 10;

    //
    row["prop12"] = "dmg-norm";
    row["par12"] = "";
    row["min12"] = 1;
    row["max12"] = 50;

  }

  // Gleamscythe
  if (row["index"] === "Gleamscythe") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 100;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-cold";
    row["par2"] = "";
    row["min2"] = 1;
    row["max2"] = 50;

    // 
    row["prop3"] = "mana-kill";
    row["par3"] = "";
    row["min3"] = 4;
    row["max3"] = 10;

    // 
    row["prop4"] = "swing2";
    row["par4"] = "";
    row["min4"] = 40;
    row["max4"] = 40;

    // 
    row["prop5"] = "att/lvl";
    row["par5"] = "";
    row["min5"] = 15;
    row["max5"] = 15;

    //
    row["prop6"] = "dmg-norm";
    row["par6"] = "";
    row["min6"] = 1;
    row["max6"] = 50;

    // 
    row["prop7"] = "light";
    row["par7"] = "";
    row["min7"] = 2;
    row["max7"] = 3;

    //
    row["prop8"] = "skill";
    row["par8"] = 138;
    row["min8"] = 4;
    row["max8"] = 10;

    //
    row["prop9"] = "dex/lvl";
    row["par9"] = "";
    row["min9"] = 10;
    row["max9"] = 10;

    //
    row["prop10"] = "skill";
    row["par10"] = 147;
    row["min10"] = 4;
    row["max10"] = 10;

  }

  // Witherstring
  if (row["index"] === "Witherstring") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 150;
    row["max1"] = 500;

    //
    row["prop2"] = "swing3";
    row["par2"] = "";
    row["min2"] = 40;
    row["max2"] = 40;

    // 
    row["prop3"] = "att";
    row["par3"] = "";
    row["min3"] = 150;
    row["max3"] = 300;

    // 
    row["prop4"] = "dmg-norm";
    row["par4"] = "";
    row["min4"] = 1;
    row["max4"] = 50;

    // 
    row["prop5"] = "magicarrow";
    row["par5"] = "";
    row["min5"] = 10;
    row["max5"] = 10;

    // 
    row["prop6"] = "pierce";
    row["par6"] = "";
    row["min6"] = 40;
    row["max6"] = 40;

    // 
    row["prop7"] = "light";
    row["par7"] = "";
    row["min7"] = 2;
    row["max7"] = 3;

    //
    row["prop8"] = "knock";
    row["par8"] = "";
    row["min8"] = 1;
    row["max8"] = 1;

    //
    row["prop9"] = "dex/lvl";
    row["par9"] = "";
    row["min9"] = 4;
    row["max9"] = 4;

    //
    row["prop10"] = "skill";
    row["par10"] = 9;
    row["min10"] = 4;
    row["max10"] = 10;

    //
    row["prop11"] = "skill";
    row["par11"] = 17;
    row["min11"] = 4;
    row["max11"] = 10;

    //
    row["prop12"] = "dmg-ltng";
    row["par12"] = "";
    row["min12"] = 1;
    row["max12"] = 50;

  }

  // Goreshovel
  if (row["index"] === "Goreshovel") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 500;

    //
    row["prop2"] = "deadly";
    row["par2"] = "";
    row["min2"] = 25;
    row["max2"] = 25;

    // 
    row["prop3"] = "openwounds";
    row["par3"] = "";
    row["min3"] = 100;
    row["max3"] = 100;

    // 
    row["prop4"] = "dmg-max";
    row["par4"] = "";
    row["min4"] = 25;
    row["max4"] = 50;

    // 
    row["prop5"] = "str/lvl";
    row["par5"] = "";
    row["min5"] = 15;
    row["max5"] = 15;

    // 
    row["prop6"] = "lifesteal";
    row["par6"] = "";
    row["min6"] = 10;
    row["max6"] = 15;

    // 
    row["prop7"] = "att";
    row["par7"] = "";
    row["min7"] = 100;
    row["max7"] = 400;

    //
    row["prop8"] = "slow";
    row["par8"] = "";
    row["min8"] = 25;
    row["max8"] = 25;

    //
    row["prop9"] = "skill";
    row["par9"] = 232;
    row["min9"] = 4;
    row["max9"] = 10;

    //
    row["prop10"] = "skill";
    row["par10"] = 242;
    row["min10"] = 4;
    row["max10"] = 10;

  }

  // Steelgoad
  if (row["index"] === "Steelgoad") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 500;

    //
    row["prop2"] = "deadly";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 50;

    // 
    row["prop3"] = "att/lvl";
    row["par3"] = "";
    row["min3"] = 25;
    row["max3"] = 25;

    // 
    row["prop4"] = "dmg-max";
    row["par4"] = "";
    row["min4"] = 25;
    row["max4"] = 50;

    // 
    row["prop5"] = "howl";
    row["par5"] = "";
    row["min5"] = 96;
    row["max5"] = 96;

    // 
    row["prop6"] = "ac-hth";
    row["par6"] = "";
    row["min6"] = 250;
    row["max6"] = 500;

    // 
    row["prop7"] = "balance2";
    row["par7"] = "";
    row["min7"] = 20;
    row["max7"] = 20;

    //
    row["prop8"] = "skill";
    row["par8"] = 134;
    row["min8"] = 4;
    row["max8"] = 10;

    //
    row["prop9"] = "skill";
    row["par9"] = 143;
    row["min9"] = 4;
    row["max9"] = 10;

  }

  // Maelstrom
  if (row["index"] === "Maelstromwrath") {

    //
    row["prop1"] = "ltng-max";
    row["par1"] = "";
    row["min1"] = 50;
    row["max1"] = 100;

    //
    row["prop2"] = "cast2";
    row["par2"] = "";
    row["min2"] = 40;
    row["max2"] = 40;

    // 
    row["prop3"] = "mana/lvl";
    row["par3"] = "";
    row["min3"] = 20;
    row["max3"] = 20;

    // 
    row["prop4"] = "res-ltng";
    row["par4"] = "";
    row["min4"] = 40;
    row["max4"] = 90;

    // 
    row["prop5"] = "howl";
    row["par5"] = "";
    row["min5"] = 96;
    row["max5"] = 96;

    // 
    row["prop6"] = "res-all";
    row["par6"] = "";
    row["min6"] = -10;
    row["max6"] = -30;

    // 
    row["prop7"] = "skill";
    row["par7"] = 250;
    row["min7"] = 4;
    row["max7"] = 10;

    //
    row["prop8"] = "skill";
    row["par8"] = 245;
    row["min8"] = 4;
    row["max8"] = 10;

    //
    row["prop9"] = "skill";
    row["par9"] = 240;
    row["min9"] = 4;
    row["max9"] = 10;

    //
    row["prop10"] = "skill";
    row["par10"] = 235;
    row["min10"] = 4;
    row["max10"] = 10;

    //
    row["prop11"] = "abs-ltng";
    row["par11"] = "";
    row["min11"] = 15;
    row["max11"] = 30;

  }

  // Bloodrise
  if (row["index"] === "Bloodrise") {

    //
    row["prop1"] = "dmg%/lvl";
    row["par1"] = "";
    row["min1"] = 35;
    row["max1"] = 35;

    //
    row["prop2"] = "dmg-undead";
    row["par2"] = "";
    row["min2"] = 200;
    row["max2"] = 200;

    // 
    row["prop3"] = "openwounds";
    row["par3"] = "";
    row["min3"] = 50;
    row["max3"] = 50;

    // 
    row["prop4"] = "dmg-norm";
    row["par4"] = "";
    row["min4"] = 1;
    row["max4"] = 50;

    // 
    row["prop5"] = "lifesteal";
    row["par5"] = "";
    row["min5"] = 5;
    row["max5"] = 15;

    // 
    row["prop6"] = "att%/lvl";
    row["par6"] = "";
    row["min6"] = 2;
    row["max6"] = 2;

    // 
    row["prop7"] = "skill";
    row["par7"] = 96;
    row["min7"] = 4;
    row["max7"] = 10;

    //
    row["prop8"] = "skill";
    row["par8"] = 98;
    row["min8"] = 4;
    row["max8"] = 10;

    //
    row["prop9"] = "skill";
    row["par9"] = 124;
    row["min9"] = 4;
    row["max9"] = 10;

    //
    row["prop10"] = "deadly";
    row["par10"] = 74;
    row["min10"] = 40;
    row["max10"] = 40;

  }

  // Bladebone
  if (row["index"] === "Bladebone") {

    //
    row["prop1"] = "dmg%/lvl";
    row["par1"] = "";
    row["min1"] = 35;
    row["max1"] = 35;

    //
    row["prop2"] = "dmg-undead";
    row["par2"] = "";
    row["min2"] = 200;
    row["max2"] = 200;

    // 
    row["prop3"] = "att-undead";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "dmg-fire";
    row["par4"] = "";
    row["min4"] = 1;
    row["max4"] = 50;

    // 
    row["prop5"] = "ac-hth";
    row["par5"] = "";
    row["min5"] = 250;
    row["max5"] = 500;

    // 
    row["prop6"] = "att/lvl";
    row["par6"] = "";
    row["min6"] = 5;
    row["max6"] = 5;

    // 
    row["prop7"] = "skill";
    row["par7"] = 133;
    row["min7"] = 4;
    row["max7"] = 10;

    //
    row["prop8"] = "skill";
    row["par8"] = 128;
    row["min8"] = 4;
    row["max8"] = 10;

    //
    row["prop9"] = "skill";
    row["par9"] = 138;
    row["min9"] = 4;
    row["max9"] = 10;

    //
    row["prop10"] = "swing3";
    row["par10"] = "";
    row["min10"] = 30;
    row["max10"] = 30;

    // 
    row["prop11"] = "dmg-mag";
    row["par11"] = "";
    row["min11"] = 1;
    row["max11"] = 50;

  }

  // Raven Claw
  if (row["index"] === "Rimeraven") {

    //
    row["prop1"] = "dmg%/lvl";
    row["par1"] = "";
    row["min1"] = 50;
    row["max1"] = 50;

    //
    row["prop2"] = "explosivearrow";
    row["par2"] = "";
    row["min2"] = 10;
    row["max2"] = 10;

    // 
    row["prop3"] = "att%";
    row["par3"] = "";
    row["min3"] = 50;
    row["max3"] = 50;

    // 
    row["prop4"] = "dmg-fire";
    row["par4"] = "";
    row["min4"] = 1;
    row["max4"] = 50;

    // 
    row["prop5"] = "dex";
    row["par5"] = "";
    row["min5"] = 15;
    row["max5"] = 30;

    // 
    row["prop6"] = "str";
    row["par6"] = "";
    row["min6"] = 15;
    row["max6"] = 30;

    // 
    row["prop7"] = "skill";
    row["par7"] = 52;
    row["min7"] = 4;
    row["max7"] = 10;

    //
    row["prop8"] = "skill";
    row["par8"] = 61;
    row["min8"] = 4;
    row["max8"] = 10;

    //
    row["prop9"] = "skill";
    row["par9"] = 37;
    row["min9"] = 4;
    row["max9"] = 10;

    //
    row["prop10"] = "slow";
    row["par10"] = "";
    row["min10"] = 25;
    row["max10"] = 25;

    // 
    row["prop11"] = "dmg-norm";
    row["par11"] = "";
    row["min11"] = 1;
    row["max11"] = 50;

    // 
    row["prop12"] = "dmg-undead";
    row["par12"] = "";
    row["min12"] = 100;
    row["max12"] = 150;

  }

  // Griswolds Edge
  if (row["index"] === "Griswolds Edge") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 210;
    row["max1"] = 420;

    //
    row["prop2"] = "dmg-fire";
    row["par2"] = "";
    row["min2"] = 10;
    row["max2"] = 20;

    // 
    row["prop3"] = "swing2";
    row["par3"] = "";
    row["min3"] = 20;
    row["max3"] = 20;

    // 
    row["prop4"] = "dmg-norm";
    row["par4"] = "";
    row["min4"] = 10;
    row["max4"] = 20;

    // 
    row["prop5"] = "att";
    row["par5"] = "";
    row["min5"] = 250;
    row["max5"] = 500;

    // 
    row["prop6"] = "str/lvl";
    row["par6"] = "";
    row["min6"] = 35;
    row["max6"] = 35;

    // 
    row["prop7"] = "skill";
    row["par7"] = 138;
    row["min7"] = 4;
    row["max7"] = 10;

    //
    row["prop8"] = "skill";
    row["par8"] = 127;
    row["min8"] = 4;
    row["max8"] = 10;

    //
    row["prop9"] = "skill";
    row["par9"] = 130;
    row["min9"] = 4;
    row["max9"] = 10;

    //
    row["prop10"] = "deadly";
    row["par10"] = "";
    row["min10"] = 50;
    row["max10"] = 50;

  }

  // Ichorsting
  if (row["index"] === "Ichorsting") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-pois";
    row["par2"] = "";
    row["min2"] = 300;
    row["max2"] = 500;

    // 
    row["prop3"] = "swing3";
    row["par3"] = "";
    row["min3"] = 30;
    row["max3"] = 30;

    // 
    row["prop4"] = "pierce";
    row["par4"] = "";
    row["min4"] = 100;
    row["max4"] = 100;

    // 
    row["prop5"] = "att";
    row["par5"] = "";
    row["min5"] = 300;
    row["max5"] = 500;

    // 
    row["prop6"] = "dex/lvl";
    row["par6"] = "";
    row["min6"] = 20;
    row["max6"] = 20;

    // 
    row["prop7"] = "skill";
    row["par7"] = 16;
    row["min7"] = 4;
    row["max7"] = 10;

    //
    row["prop8"] = "skill";
    row["par8"] = 32;
    row["min8"] = 4;
    row["max8"] = 10;

    //
    row["prop9"] = "skill";
    row["par9"] = 9;
    row["min9"] = 4;
    row["max9"] = 10;

    //
    row["prop10"] = "openwounds";
    row["par10"] = "";
    row["min10"] = 50;
    row["max10"] = 50;

    //
    row["prop11"] = "dmg-fire";
    row["par11"] = "";
    row["min11"] = 1;
    row["max11"] = 50;

    //
    row["prop12"] = "dmg-norm";
    row["par12"] = "";
    row["min12"] = 1;
    row["max12"] = 50;

  }

  // Bloodthief
  if (row["index"] === "Bloodthief") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 500;

    //
    row["prop2"] = "openwounds";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 50;

    // 
    row["prop3"] = "lifesteal";
    row["par3"] = "";
    row["min3"] = 8;
    row["max3"] = 12;

    // 
    row["prop4"] = "str";
    row["par4"] = "";
    row["min4"] = 100;
    row["max4"] = 100;

    // 
    row["prop5"] = "att";
    row["par5"] = "";
    row["min5"] = 250;
    row["max5"] = 300;

    // 
    row["prop6"] = "mana-kill";
    row["par6"] = "";
    row["min6"] = 4;
    row["max6"] = 10;

    // 
    row["prop7"] = "skill";
    row["par7"] = 30;
    row["min7"] = 4;
    row["max7"] = 10;

    //
    row["prop8"] = "skill";
    row["par8"] = 14;
    row["min8"] = 4;
    row["max8"] = 10;

    //
    row["prop9"] = "skill";
    row["par9"] = 19;
    row["min9"] = 4;
    row["max9"] = 10;

    //
    row["prop10"] = "dmg-max";
    row["par10"] = "";
    row["min10"] = 50;
    row["max10"] = 100;

  }

  // Spire of Lazarus
  if (row["index"] === "Lazarus Spire") {

    //
    row["prop1"] = "dmg-ltng";
    row["par1"] = "";
    row["min1"] = 1;
    row["max1"] = 100;

    //
    row["prop2"] = "sor";
    row["par2"] = "";
    row["min2"] = 2;
    row["max2"] = 3;

    // 
    row["prop3"] = "regen-mana";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 250;

    // 
    row["prop4"] = "enr/lvl";
    row["par4"] = "";
    row["min4"] = 25;
    row["max4"] = 25;

    // 
    row["prop5"] = "res-ltng-max";
    row["par5"] = "";
    row["min5"] = 15;
    row["max5"] = 25;

    // 
    row["prop6"] = "res-ltng";
    row["par6"] = "";
    row["min6"] = 75;
    row["max6"] = 150;

    // 
    row["prop7"] = "res-all";
    row["par7"] = "";
    row["min7"] = -10;
    row["max7"] = -30;

    //
    row["prop8"] = "skill";
    row["par8"] = 49;
    row["min8"] = 4;
    row["max8"] = 10;

    //
    row["prop9"] = "skill";
    row["par9"] = 53;
    row["min9"] = 4;
    row["max9"] = 10;

    //
    row["prop10"] = "skill";
    row["par10"] = 42;
    row["min10"] = 4;
    row["max10"] = 10;

    //
    row["prop11"] = "regen";
    row["par11"] = "";
    row["min11"] = 20;
    row["max11"] = 40;

  }

  // Rusthandle
  if (row["index"] === "Rusthandle") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 210;
    row["max1"] = 420;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 1;
    row["max2"] = 50;

    // 
    row["prop3"] = "dmg-undead";
    row["par3"] = "";
    row["min3"] = 200;
    row["max3"] = 200;

    // 
    row["prop4"] = "pal";
    row["par4"] = "";
    row["min4"] = 2;
    row["max4"] = 3;

    // 
    row["prop5"] = "att%";
    row["par5"] = "";
    row["min5"] = 25;
    row["max5"] = 25;

    // 
    row["prop6"] = "thorns/lvl";
    row["par6"] = "";
    row["min6"] = 35;
    row["max6"] = 35;

    // 
    row["prop7"] = "lifesteal";
    row["par7"] = "";
    row["min7"] = 8;
    row["max7"] = 16;

    //
    row["prop8"] = "skill";
    row["par8"] = 111;
    row["min8"] = 4;
    row["max8"] = 10;

    //
    row["prop9"] = "skill";
    row["par9"] = 106;
    row["min9"] = 4;
    row["max9"] = 10;

    //
    row["prop10"] = "skill";
    row["par10"] = 120;
    row["min10"] = 4;
    row["max10"] = 10;

    //
    row["prop11"] = "dmg-demon";
    row["par11"] = "";
    row["min11"] = 250;
    row["max11"] = 250;

    //
    row["prop12"] = "crush";
    row["par12"] = "";
    row["min12"] = 40;
    row["max12"] = 40;

  }

  // Soulflay
  if (row["index"] === "Soulflay") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 1;
    row["max2"] = 50;

    // 
    row["prop3"] = "swing2";
    row["par3"] = "";
    row["min3"] = 20;
    row["max3"] = 20;

    // 
    row["prop4"] = "lifesteal";
    row["par4"] = "";
    row["min4"] = 4;
    row["max4"] = 10;

    // 
    row["prop5"] = "manasteal";
    row["par5"] = "";
    row["min5"] = 4;
    row["max5"] = 10;

    // 
    row["prop6"] = "ac-hth";
    row["par6"] = "";
    row["min6"] = 300;
    row["max6"] = 500;

    // 
    row["prop7"] = "skill";
    row["par7"] = 127;
    row["min7"] = 4;
    row["max7"] = 10;

    //
    row["prop8"] = "skill";
    row["par8"] = 151;
    row["min8"] = 4;
    row["max8"] = 10;

    //
    row["prop9"] = "skill";
    row["par9"] = 149;
    row["min9"] = 4;
    row["max9"] = 10;

  }

  // The Chieftan
  if (row["index"] === "The Chieftan") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-ltng";
    row["par2"] = "";
    row["min2"] = 1;
    row["max2"] = 50;

    // 
    row["prop3"] = "swing2";
    row["par3"] = "";
    row["min3"] = 20;
    row["max3"] = 20;

    // 
    row["prop4"] = "mana-kill";
    row["par4"] = "";
    row["min4"] = 4;
    row["max4"] = 10;

    // 
    row["prop5"] = "res-all-max";
    row["par5"] = "";
    row["min5"] = 5;
    row["max5"] = 10;

    // 
    row["prop6"] = "ac-miss";
    row["par6"] = "";
    row["min6"] = 250;
    row["max6"] = 500;

    // 
    row["prop7"] = "skill";
    row["par7"] = 143;
    row["min7"] = 4;
    row["max7"] = 10;

    //
    row["prop8"] = "skill";
    row["par8"] = 151;
    row["min8"] = 4;
    row["max8"] = 10;

    //
    row["prop9"] = "skill";
    row["par9"] = 150;
    row["min9"] = 4;
    row["max9"] = 10;

    //
    row["prop10"] = "slow";
    row["par10"] = "";
    row["min10"] = 25;
    row["max10"] = 25;

  }

  // Soul Harvest
  if (row["index"] === "Soul Harvest") {

    //
    row["prop1"] = "dmg%/lvl";
    row["par1"] = "";
    row["min1"] = 50;
    row["max1"] = 50;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 1;
    row["max2"] = 50;

    // 
    row["prop3"] = "openwounds";
    row["par3"] = "";
    row["min3"] = 50;
    row["max3"] = 50;

    // 
    row["prop4"] = "manasteal";
    row["par4"] = "";
    row["min4"] = 10;
    row["max4"] = 10;

    // 
    row["prop5"] = "att%";
    row["par5"] = "";
    row["min5"] = 50;
    row["max5"] = 50;

    // 
    row["prop6"] = "enr/lvl";
    row["par6"] = "";
    row["min6"] = 25;
    row["max6"] = 25;

    // 
    row["prop7"] = "skill";
    row["par7"] = 82;
    row["min7"] = 4;
    row["max7"] = 10;

    //
    row["prop8"] = "skill";
    row["par8"] = 66;
    row["min8"] = 4;
    row["max8"] = 10;

    //
    row["prop9"] = "skill";
    row["par9"] = 68;
    row["min9"] = 4;
    row["max9"] = 10;

  }

  // The Jade Tan Do
  if (row["index"] === "The Jade Tan Do") {

    //
    row["prop1"] = "slow";
    row["par1"] = "";
    row["min1"] = 50;
    row["max1"] = 50;

    //
    row["prop2"] = "dmg-pois";
    row["par2"] = "";
    row["min2"] = 300;
    row["max2"] = 500;

    // 
    row["prop3"] = "regen";
    row["par3"] = "";
    row["min3"] = 20;
    row["max3"] = 40;

    // 
    row["prop4"] = "res-pois";
    row["par4"] = "";
    row["min4"] = 95;
    row["max4"] = 190;

    // 
    row["prop5"] = "res-all";
    row["par5"] = "";
    row["min5"] = -10;
    row["max5"] = -40;

    // 
    row["prop6"] = "nofreeze";
    row["par6"] = "";
    row["min6"] = 1;
    row["max6"] = 1;

    // 
    row["prop7"] = "skill";
    row["par7"] = 73;
    row["min7"] = 4;
    row["max7"] = 10;

    //
    row["prop8"] = "skill";
    row["par8"] = 81;
    row["min8"] = 4;
    row["max8"] = 10;

    //
    row["prop9"] = "skill";
    row["par9"] = 91;
    row["min9"] = 4;
    row["max9"] = 10;

    //
    row["prop10"] = "nec";
    row["par10"] = "";
    row["min10"] = 1;
    row["max10"] = 2;

  }

  // Rogue's Bow
  if (row["index"] === "Piercerib") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 300;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-undead";
    row["par2"] = "";
    row["min2"] = 250;
    row["max2"] = 250;

    // 
    row["prop3"] = "deadly";
    row["par3"] = "";
    row["min3"] = 50;
    row["max3"] = 50;

    // 
    row["prop4"] = "swing2";
    row["par4"] = "";
    row["min4"] = 100;
    row["max4"] = 100;

    // 
    row["prop5"] = "att";
    row["par5"] = "";
    row["min5"] = 300;
    row["max5"] = 500;

    // 
    row["prop6"] = "pierce";
    row["par6"] = "";
    row["min6"] = 40;
    row["max6"] = 40;

    // 
    row["prop7"] = "dmg-norm";
    row["par7"] = "";
    row["min7"] = 1;
    row["max7"] = 50;

    //
    row["prop8"] = "skill";
    row["par8"] = 22;
    row["min8"] = 4;
    row["max8"] = 10;

    //
    row["prop9"] = "skill";
    row["par9"] = 26;
    row["min9"] = 4;
    row["max9"] = 10;

    //
    row["prop10"] = "skill";
    row["par10"] = 12;
    row["min10"] = 4;
    row["max10"] = 10;

    //
    row["prop11"] = "dmg-ltng";
    row["par11"] = "";
    row["min11"] = 1;
    row["max11"] = 50;

  }

  // The Salamander
  if (row["index"] === "The Salamander") {

    //
    row["prop1"] = "skill";
    row["par1"] = 61;
    row["min1"] = 4;
    row["max1"] = 10;

    //
    row["prop2"] = "dmg-undead";
    row["par2"] = "";
    row["min2"] = 200;
    row["max2"] = 200;

    // 
    row["prop3"] = "fireskill";
    row["par3"] = "";
    row["min3"] = 3;
    row["max3"] = 4;

    // 
    row["prop4"] = "res-fire";
    row["par4"] = "";
    row["min4"] = 50;
    row["max4"] = 120;

    // 
    row["prop5"] = "res-all";
    row["par5"] = "";
    row["min5"] = -10;
    row["max5"] = -30;

    // 
    row["prop6"] = "mana-kill";
    row["par6"] = "";
    row["min6"] = 4;
    row["max6"] = 5;

    // 
    row["prop7"] = "res-fire-max";
    row["par7"] = "";
    row["min7"] = 5;
    row["max7"] = 15;

    //
    row["prop8"] = "skill";
    row["par8"] = 37;
    row["min8"] = 4;
    row["max8"] = 10;

    //
    row["prop9"] = "skill";
    row["par9"] = 47;
    row["min9"] = 4;
    row["max9"] = 10;

    //
    row["prop10"] = "skill";
    row["par10"] = 51;
    row["min10"] = 4;
    row["max10"] = 10;

  }

  // Gravenspine
  if (row["index"] === "Gravenspine") {

    //
    row["prop1"] = "nec";
    row["par1"] = "";
    row["min1"] = 2;
    row["max1"] = 3;

    //
    row["prop2"] = "dmg-undead";
    row["par2"] = "";
    row["min2"] = 100;
    row["max2"] = 100;

    // 
    row["prop3"] = "heal-kill";
    row["par3"] = "";
    row["min3"] = 5;
    row["max3"] = 15;

    // 
    row["prop4"] = "mana-kill";
    row["par4"] = "";
    row["min4"] = 5;
    row["max4"] = 15;

    // 
    row["prop5"] = "dmg-demon";
    row["par5"] = "";
    row["min5"] = 150;
    row["max5"] = 150;

    // 
    row["prop6"] = "mana";
    row["par6"] = "";
    row["min6"] = 100;
    row["max6"] = 100;

    // 
    row["prop7"] = "dex";
    row["par7"] = "";
    row["min7"] = 15;
    row["max7"] = 30;

    //
    row["prop8"] = "str";
    row["par8"] = "";
    row["min8"] = 15;
    row["max8"] = 30;

    //
    row["prop9"] = "skill";
    row["par9"] = 67;
    row["min9"] = 4;
    row["max9"] = 10;

    //
    row["prop10"] = "skill";
    row["par10"] = 95;
    row["min10"] = 4;
    row["max10"] = 10;

  }

  // The Generals Tan Do Li Ga
  if (row["index"] === "The Generals Tan Do Li Ga") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 210;
    row["max1"] = 420;

    //
    row["prop2"] = "dmg-undead";
    row["par2"] = "";
    row["min2"] = 100;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg-norm";
    row["par3"] = "";
    row["min3"] = 1;
    row["max3"] = 50;

    // 
    row["prop4"] = "manasteal";
    row["par4"] = "";
    row["min4"] = 5;
    row["max4"] = 10;

    // 
    row["prop5"] = "swing2";
    row["par5"] = "";
    row["min5"] = 50;
    row["max5"] = 50;

    // 
    row["prop6"] = "slow";
    row["par6"] = "";
    row["min6"] = 50;
    row["max6"] = 50;

    // 
    row["prop7"] = "ac-hth";
    row["par7"] = "";
    row["min7"] = 300;
    row["max7"] = 500;

    //
    row["prop8"] = "att";
    row["par8"] = "";
    row["min8"] = 150;
    row["max8"] = 300;

    //
    row["prop9"] = "skill";
    row["par9"] = 133;
    row["min9"] = 4;
    row["max9"] = 10;

    //
    row["prop10"] = "skill";
    row["par10"] = 129;
    row["min10"] = 4;
    row["max10"] = 10;

    //
    row["prop11"] = "skill";
    row["par11"] = 147;
    row["min11"] = 4;
    row["max11"] = 10;

  }

  // Skull Splitter
  if (row["index"] === "Mindrend") {

    //
    row["prop1"] = "stupidity";
    row["par1"] = "";
    row["min1"] = 2;
    row["max1"] = 2;

    //
    row["prop2"] = "dmg%";
    row["par2"] = "";
    row["min2"] = 210;
    row["max2"] = 420;

    // 
    row["prop3"] = "dmg-norm";
    row["par3"] = "";
    row["min3"] = 1;
    row["max3"] = 50;

    // 
    row["prop4"] = "openwounds";
    row["par4"] = "";
    row["min4"] = 40;
    row["max4"] = 40;

    // 
    row["prop5"] = "att";
    row["par5"] = "";
    row["min5"] = 250;
    row["max5"] = 500;

    // 
    row["prop6"] = "regen-mana";
    row["par6"] = "";
    row["min6"] = 50;
    row["max6"] = 50;

    // 
    row["prop7"] = "deadly";
    row["par7"] = "";
    row["min7"] = 40;
    row["max7"] = 40;

    //
    row["prop8"] = "skill";
    row["par8"] = 144;
    row["min8"] = 4;
    row["max8"] = 10;

    //
    row["prop9"] = "skill";
    row["par9"] = 146;
    row["min9"] = 4;
    row["max9"] = 10;

    //
    row["prop10"] = "skill";
    row["par10"] = 139;
    row["min10"] = 4;
    row["max10"] = 10;

  }

  // Hellplague
  if (row["index"] === "Hellplague") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 210;
    row["max1"] = 420;

    //
    row["prop2"] = "dmg-fire";
    row["par2"] = "";
    row["min2"] = 1;
    row["max2"] = 50;

    // 
    row["prop3"] = "dmg-pois";
    row["par3"] = "";
    row["min3"] = 200;
    row["max3"] = 400;

    // 
    row["prop4"] = "fireskill";
    row["par4"] = "";
    row["min4"] = 2;
    row["max4"] = 3;

    // 
    row["prop5"] = "att";
    row["par5"] = "";
    row["min5"] = 250;
    row["max5"] = 500;

    // 
    row["prop6"] = "heal-kill";
    row["par6"] = "";
    row["min6"] = 5;
    row["max6"] = 10;

    // 
    row["prop7"] = "manasteal";
    row["par7"] = "";
    row["min7"] = 5;
    row["max7"] = 10;

    //
    row["prop8"] = "kill-skill";
    row["par8"] = "Fire Wall";
    row["min8"] = 40;
    row["max8"] = 15;

  }

  // Lance of Yaggai
  if (row["index"] === "Lance of Yaggai") {

    //
    row["prop1"] = "dmg-ltng";
    row["par1"] = "";
    row["min1"] = 1;
    row["max1"] = 300;

    //
    row["prop2"] = "swing3";
    row["par2"] = "";
    row["min2"] = 30;
    row["max2"] = 30;

    // 
    row["prop3"] = "thorns/lvl";
    row["par3"] = "";
    row["min3"] = 35;
    row["max3"] = 35;

    // 
    row["prop4"] = "abs-ltng";
    row["par4"] = "";
    row["min4"] = 4;
    row["max4"] = 10;

    // 
    row["prop5"] = "att";
    row["par5"] = "";
    row["min5"] = 250;
    row["max5"] = 500;

    // 
    row["prop6"] = "hit-skill";
    row["par6"] = "Fist of the Heavens";
    row["min6"] = 30;
    row["max6"] = 10;

    // 
    row["prop7"] = "charged";
    row["par7"] = "Static Field";
    row["min7"] = 50;
    row["max7"] = 11;

  }

  // Kinemils Awl
  if (row["index"] === "Kinemils Awl") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-fire";
    row["par2"] = "";
    row["min2"] = 1;
    row["max2"] = 50;

    // 
    row["prop3"] = "mana%";
    row["par3"] = "";
    row["min3"] = 10;
    row["max3"] = 10;

    // 
    row["prop4"] = "aura";
    row["par4"] = "Holy Fire";
    row["min4"] = 10;
    row["max4"] = 13;

    // 
    row["prop5"] = "att";
    row["par5"] = "";
    row["min5"] = 250;
    row["max5"] = 500;

    // 
    row["prop6"] = "hit-skill";
    row["par6"] = "Firestorm";
    row["min6"] = 30;
    row["max6"] = 20;

    // 
    row["prop7"] = "charged";
    row["par7"] = "Enchant";
    row["min7"] = 80;
    row["max7"] = 10;

  }


  // Bonesnap
  if (row["index"] === "Bonesob") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-undead";
    row["par2"] = "";
    row["min2"] = 250;
    row["max2"] = 500;

    // 
    row["prop3"] = "crush";
    row["par3"] = "";
    row["min3"] = 50;
    row["max3"] = 50;

    // 
    row["prop4"] = "aura";
    row["par4"] = "Might";
    row["min4"] = 2;
    row["max4"] = 7;

    // 
    row["prop5"] = "att";
    row["par5"] = "";
    row["min5"] = 250;
    row["max5"] = 500;

    // 
    row["prop6"] = "hit-skill";
    row["par6"] = "Bone Armor";
    row["min6"] = 30;
    row["max6"] = 10;

    // 
    row["prop7"] = "charged";
    row["par7"] = "Amplify Damage";
    row["min7"] = 40;
    row["max7"] = 10;

    // 
    row["prop8"] = "dmg-norm";
    row["par8"] = "";
    row["min8"] = 1;
    row["max8"] = 100;

  }

  // Spectral Shard
  if (row["index"] === "Irices Shard") {

    //
    row["prop1"] = "cast3";
    row["par1"] = "";
    row["min1"] = 50;
    row["max1"] = 50;

    //
    row["prop2"] = "mana%";
    row["par2"] = "";
    row["min2"] = 20;
    row["max2"] = 20;

    // 
    row["prop3"] = "balance2";
    row["par3"] = "";
    row["min3"] = 40;
    row["max3"] = 40;

    // 
    row["prop4"] = "aura";
    row["par4"] = "Resist Lightning";
    row["min4"] = 1;
    row["max4"] = 4;

    // 
    row["prop5"] = "gethit-skill";
    row["par5"] = "Dim Vision";
    row["min5"] = 40;
    row["max5"] = 18;

    // 
    row["prop6"] = "charged";
    row["par6"] = "Lower Resist";
    row["min6"] = 40;
    row["max6"] = 10;

  }

  // Stormstrike
  if (row["index"] === "Pullspite") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-ltng";
    row["par2"] = "";
    row["min2"] = 1;
    row["max2"] = 50;

    // 
    row["prop3"] = "pierce";
    row["par3"] = "";
    row["min3"] = 50;
    row["max3"] = 50;

    // 
    row["prop4"] = "aura";
    row["par4"] = "Blessed Aim";
    row["min4"] = 6;
    row["max4"] = 16;

    // 
    row["prop5"] = "hit-skill";
    row["par5"] = "Lightning";
    row["min5"] = 40;
    row["max5"] = 20;

    // 
    row["prop6"] = "swing3";
    row["par6"] = "";
    row["min6"] = 50;
    row["max6"] = 50;

    //
    row["prop7"] = "dmg-norm";
    row["par7"] = "";
    row["min7"] = 1;
    row["max7"] = 50;

  }

  // Brainhew
  if (row["index"] === "Brainhew") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-min";
    row["par2"] = "";
    row["min2"] = 35;
    row["max2"] = 50;

    // 
    row["prop3"] = "dmg-fire";
    row["par3"] = "";
    row["min3"] = 1;
    row["max3"] = 50;

    // 
    row["prop4"] = "manasteal";
    row["par4"] = "";
    row["min4"] = 10;
    row["max4"] = 15;

    // 
    row["prop5"] = "hit-skill";
    row["par5"] = "Teeth";
    row["min5"] = 40;
    row["max5"] = 35;

    // 
    row["prop6"] = "mana%";
    row["par6"] = "";
    row["min6"] = 25;
    row["max6"] = 25;

    // 
    row["prop7"] = "att";
    row["par7"] = "";
    row["min7"] = 250;
    row["max7"] = 500;

  }

  // The Battlebranch
  if (row["index"] === "The Battlebranch") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-max";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "swing3";
    row["par3"] = "";
    row["min3"] = 40;
    row["max3"] = 40;

    // 
    row["prop4"] = "aura";
    row["par4"] = "Concentration";
    row["min4"] = 1;
    row["max4"] = 4;

    // 
    row["prop5"] = "hit-skill";
    row["par5"] = "Molten Boulder";
    row["min5"] = 50;
    row["max5"] = 25;

    // 
    row["prop6"] = "att";
    row["par6"] = "";
    row["min6"] = 250;
    row["max6"] = 500;

  }

  // Blacktongue
  if (row["index"] === "Blacktongue") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-pois";
    row["par2"] = "";
    row["min2"] = 250;
    row["max2"] = 500;

    // 
    row["prop3"] = "noheal";
    row["par3"] = "";
    row["min3"] = 1;
    row["max3"] = 1;

    // 
    row["prop4"] = "extra-pois";
    row["par4"] = "";
    row["min4"] = 5;
    row["max4"] = 15;

    // 
    row["prop5"] = "hit-skill";
    row["par5"] = "Poison Nova";
    row["min5"] = 40;
    row["max5"] = 20;

    // 
    row["prop6"] = "att";
    row["par6"] = "";
    row["min6"] = 250;
    row["max6"] = 500;

  }

  // Ripsaw
  if (row["index"] === "Ripsaw") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-max";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "openwounds";
    row["par3"] = "";
    row["min3"] = 100;
    row["max3"] = 100;

    // 
    row["prop4"] = "heal-kill";
    row["par4"] = "";
    row["min4"] = 4;
    row["max4"] = 10;

    // 
    row["prop5"] = "hit-skill";
    row["par5"] = "Charged Bolt";
    row["min5"] = 40;
    row["max5"] = 30;

    // 
    row["prop6"] = "att";
    row["par6"] = "";
    row["min6"] = 250;
    row["max6"] = 500;

  }

  // The Tannr Gorerod
  if (row["index"] === "The Tannr Gorerod") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-fire";
    row["par2"] = "";
    row["min2"] = 1;
    row["max2"] = 50;

    // 
    row["prop3"] = "att";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "heal-kill";
    row["par4"] = "";
    row["min4"] = 4;
    row["max4"] = 10;

    // 
    row["prop5"] = "hit-skill";
    row["par5"] = "Fire Wall";
    row["min5"] = 50;
    row["max5"] = 30;

    // 
    row["prop6"] = "res-fire";
    row["par6"] = "";
    row["min6"] = 40;
    row["max6"] = 90;

    // 
    row["prop7"] = "res-all";
    row["par7"] = "";
    row["min7"] = -10;
    row["max7"] = -30;

    // 
    row["prop8"] = "res-fire-max";
    row["par8"] = "";
    row["min8"] = 15;
    row["max8"] = 20;

    // 
    row["prop9"] = "light";
    row["par9"] = "";
    row["min9"] = 2;
    row["max9"] = 3;

  }

  // Ironstone
  if (row["index"] === "Ironstone") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 210;
    row["max1"] = 420;

    //
    row["prop2"] = "dmg-ltng";
    row["par2"] = "";
    row["min2"] = 1;
    row["max2"] = 50;

    // 
    row["prop3"] = "att";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "str/lvl";
    row["par4"] = "";
    row["min4"] = 30;
    row["max4"] = 30;

    // 
    row["prop5"] = "hit-skill";
    row["par5"] = "Nova";
    row["min5"] = 50;
    row["max5"] = 20;

    // 
    row["prop6"] = "dmg-undead";
    row["par6"] = "";
    row["min6"] = 200;
    row["max6"] = 200;

  }

  // Wizendraw
  if (row["index"] === "Wizendraw") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-cold";
    row["par2"] = "";
    row["min2"] = 1;
    row["max2"] = 50;

    // 
    row["prop3"] = "att";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "swing3";
    row["par4"] = "";
    row["min4"] = 50;
    row["max4"] = 50;

    // 
    row["prop5"] = "hit-skill";
    row["par5"] = "Frozen Orb";
    row["min5"] = 40;
    row["max5"] = 20;

    // 
    row["prop6"] = "magicarrow";
    row["par6"] = "";
    row["min6"] = 15;
    row["max6"] = 15;

    // 
    row["prop7"] = "pierce-cold";
    row["par7"] = "";
    row["min7"] = 25;
    row["max7"] = 50;

    // 
    row["prop8"] = "enr/lvl";
    row["par8"] = "";
    row["min8"] = 25;
    row["max8"] = 25;

    //
    row["prop9"] = "dmg-norm";
    row["par9"] = "";
    row["min9"] = 1;
    row["max9"] = 50;

  }

  // Hellclap
  if (row["index"] === "Hellclap") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-fire";
    row["par2"] = "";
    row["min2"] = 1;
    row["max2"] = 50;

    // 
    row["prop3"] = "att";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "swing2";
    row["par4"] = "";
    row["min4"] = 20;
    row["max4"] = 20;

    // 
    row["prop5"] = "hit-skill";
    row["par5"] = "Meteor";
    row["min5"] = 50;
    row["max5"] = 25;

    // 
    row["prop6"] = "fireskill";
    row["par6"] = "";
    row["min6"] = 2;
    row["max6"] = 3;

    // 
    row["prop7"] = "pierce-fire";
    row["par7"] = "";
    row["min7"] = 15;
    row["max7"] = 30;

    // 
    row["prop8"] = "dex/lvl";
    row["par8"] = "";
    row["min8"] = 15;
    row["max8"] = 15;

    // 
    row["prop9"] = "dmg-norm";
    row["par9"] = "";
    row["min9"] = 1;
    row["max9"] = 50;

  }

  // Rakescar
  if (row["index"] === "Rakescar") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 210;
    row["max1"] = 420;

    //
    row["prop2"] = "dmg-pois";
    row["par2"] = "";
    row["min2"] = 250;
    row["max2"] = 500;

    // 
    row["prop3"] = "att";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "swing3";
    row["par4"] = "";
    row["min4"] = 50;
    row["max4"] = 50;

    // 
    row["prop5"] = "hit-skill";
    row["par5"] = "Confuse";
    row["min5"] = 40;
    row["max5"] = 10;

    // 
    row["prop6"] = "res-pois";
    row["par6"] = "";
    row["min6"] = 40;
    row["max6"] = 90;

    // 
    row["prop7"] = "res-all";
    row["par7"] = "";
    row["min7"] = -10;
    row["max7"] = -30;

    // 
    row["prop8"] = "heal-kill";
    row["par8"] = "";
    row["min8"] = 4;
    row["max8"] = 10;

  }

  // Hellcast
  if (row["index"] === "Hellcast") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-fire";
    row["par2"] = "";
    row["min2"] = 1;
    row["max2"] = 50;

    // 
    row["prop3"] = "att";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "swing3";
    row["par4"] = "";
    row["min4"] = 40;
    row["max4"] = 40;

    // 
    row["prop5"] = "hit-skill";
    row["par5"] = "Lower Resist";
    row["min5"] = 40;
    row["max5"] = 10;

    // 
    row["prop6"] = "explosivearrow";
    row["par6"] = "";
    row["min6"] = 15;
    row["max6"] = 15;

    // 
    row["prop7"] = "pierce";
    row["par7"] = "";
    row["min7"] = 40;
    row["max7"] = 40;

    // 
    row["prop8"] = "res-fire-max";
    row["par8"] = "";
    row["min8"] = 15;
    row["max8"] = 25;

    // 
    row["prop9"] = "res-fire";
    row["par9"] = "";
    row["min9"] = 40;
    row["max9"] = 90;

    // 
    row["prop10"] = "res-all";
    row["par10"] = "";
    row["min10"] = -10;
    row["max10"] = -30;

  }

  // Hellcast
  if (row["index"] === "Umes Lament") {

    //
    row["prop1"] = "nec";
    row["par1"] = "";
    row["min1"] = 2;
    row["max1"] = 3;

    //
    row["prop2"] = "cast3";
    row["par2"] = "";
    row["min2"] = 25;
    row["max2"] = 25;

    // 
    row["prop3"] = "mana";
    row["par3"] = "";
    row["min3"] = 150;
    row["max3"] = 300;

    // 
    row["prop4"] = "howl";
    row["par4"] = "";
    row["min4"] = 64;
    row["max4"] = 64;

    // 
    row["prop5"] = "gethit-skill";
    row["par5"] = "Decrepify";
    row["min5"] = 40;
    row["max5"] = 1;

    // 
    row["prop6"] = "skill";
    row["par6"] = 74;
    row["min6"] = 4;
    row["max6"] = 10;

    // 
    row["prop7"] = "skill";
    row["par7"] = 92;
    row["min7"] = 4;
    row["max7"] = 10;

  }

  // The Iron Jang Bong
  if (row["index"] === "The Iron Jang Bong") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-mag";
    row["par2"] = "";
    row["min2"] = 1;
    row["max2"] = 50;

    // 
    row["prop3"] = "att%";
    row["par3"] = "";
    row["min3"] = 50;
    row["max3"] = 50;

    // 
    row["prop4"] = "cast3";
    row["par4"] = "";
    row["min4"] = 25;
    row["max4"] = 25;

    // 
    row["prop5"] = "hit-skill";
    row["par5"] = "Hydra";
    row["min5"] = 50;
    row["max5"] = 35;

    // 
    row["prop6"] = "sor";
    row["par6"] = "";
    row["min6"] = 2;
    row["max6"] = 4;

    // 
    row["prop7"] = "skill";
    row["par7"] = 48;
    row["min7"] = 4;
    row["max7"] = 10;

    // 
    row["prop8"] = "skill";
    row["par8"] = 59;
    row["min8"] = 4;
    row["max8"] = 10;

    // 
    row["prop9"] = "skill";
    row["par9"] = 47;
    row["min9"] = 4;
    row["max9"] = 10;

    // 
    row["prop10"] = "ac-miss";
    row["par10"] = "";
    row["min10"] = 250;
    row["max10"] = 500;

  }

  // Doomslinger
  if (row["index"] === "Doomspittle") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 1;
    row["max2"] = 50;

    // 
    row["prop3"] = "att";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "swing3";
    row["par4"] = "";
    row["min4"] = 50;
    row["max4"] = 50;

    // 
    row["prop5"] = "hit-skill";
    row["par5"] = "Bone Spirit";
    row["min5"] = 40;
    row["max5"] = 25;

    // 
    row["prop6"] = "pierce";
    row["par6"] = "";
    row["min6"] = 50;
    row["max6"] = 50;

    // 
    row["prop7"] = "ama";
    row["par7"] = "";
    row["min7"] = 2;
    row["max7"] = 4;

    // 
    row["prop8"] = "skill";
    row["par8"] = 9;
    row["min8"] = 4;
    row["max8"] = 10;

    // 
    row["prop9"] = "skill";
    row["par9"] = 13;
    row["min9"] = 4;
    row["max9"] = 10;

    // 
    row["prop10"] = "skill";
    row["par10"] = 18;
    row["min10"] = 4;
    row["max10"] = 10;

  }

  // Woestave
  if (row["index"] === "Woestave") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 1;
    row["max2"] = 50;

    // 
    row["prop3"] = "att";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "openwounds";
    row["par4"] = "";
    row["min4"] = 100;
    row["max4"] = 100;

    // 
    row["prop5"] = "hit-skill";
    row["par5"] = "Weaken";
    row["min5"] = 40;
    row["max5"] = 8;

    // 
    row["prop6"] = "slow";
    row["par6"] = "";
    row["min6"] = 50;
    row["max6"] = 50;

    // 
    row["prop7"] = "noheal";
    row["par7"] = "";
    row["min7"] = 1;
    row["max7"] = 1;

    // 
    row["prop8"] = "stupidity";
    row["par8"] = "";
    row["min8"] = 3;
    row["max8"] = 3;

    // 
    row["prop9"] = "dmg-ac";
    row["par9"] = "";
    row["min9"] = -100;
    row["max9"] = -100;

    // 
    row["prop10"] = "light";
    row["par10"] = "";
    row["min10"] = -1;
    row["max10"] = -2;

  }

  // Blastbark
  if (row["index"] === "Blastbark") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 1;
    row["max2"] = 50;

    // 
    row["prop3"] = "att";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "ama";
    row["par4"] = "";
    row["min4"] = 2;
    row["max4"] = 3;

    // 
    row["prop5"] = "hit-skill";
    row["par5"] = "Twister";
    row["min5"] = 40;
    row["max5"] = 40;

    // 
    row["prop6"] = "mana-kill";
    row["par6"] = "";
    row["min6"] = 4;
    row["max6"] = 10;

    // 
    row["prop7"] = "str";
    row["par7"] = "";
    row["min7"] = 15;
    row["max7"] = 50;

    // 
    row["prop8"] = "skill";
    row["par8"] = 16;
    row["min8"] = 4;
    row["max8"] = 10;

    // 
    row["prop9"] = "dmg-ac";
    row["par9"] = "";
    row["min9"] = -100;
    row["max9"] = -100;

    // 
    row["prop10"] = "skill";
    row["par10"] = 27;
    row["min10"] = 4;
    row["max10"] = 10;

    // 
    row["prop11"] = "dmg-fire";
    row["par11"] = "";
    row["min11"] = 1;
    row["max11"] = 50;

  }

  // Culwens Point
  if (row["index"] === "Culwens Point") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 210;
    row["max1"] = 420;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 1;
    row["max2"] = 50;

    // 
    row["prop3"] = "att";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "ass";
    row["par4"] = "";
    row["min4"] = 1;
    row["max4"] = 2;

    // 
    row["prop5"] = "balance2";
    row["par5"] = "";
    row["min5"] = 20;
    row["max5"] = 20;

    // 
    row["prop6"] = "swing3";
    row["par6"] = "";
    row["min6"] = 30;
    row["max6"] = 30;

    // 
    row["prop7"] = "res-pois-len";
    row["par7"] = "";
    row["min7"] = 75;
    row["max7"] = 75;

    // 
    row["prop8"] = "hit-skill";
    row["par8"] = "Charged Bolt";
    row["min8"] = 50;
    row["max8"] = 30;

    // 
    row["prop9"] = "skill";
    row["par9"] = 268;
    row["min9"] = 4;
    row["max9"] = 10;

    // 
    row["prop10"] = "skill";
    row["par10"] = 264;
    row["min10"] = 4;
    row["max10"] = 10;

    // 
    row["prop11"] = "hit-skill";
    row["par11"] = "Static Field";
    row["min11"] = 25;
    row["max11"] = 11;

  }

  // Steeldriver
  if (row["index"] === "Steeldriver") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 500;

    //
    row["prop2"] = "skill";
    row["par2"] = 144;
    row["min2"] = 4;
    row["max2"] = 10;

    // 
    row["prop3"] = "skill";
    row["par3"] = 149;
    row["min3"] = 4;
    row["max3"] = 10;

    // 
    row["prop4"] = "bar";
    row["par4"] = "";
    row["min4"] = 2;
    row["max4"] = 4;

    // 
    row["prop5"] = "skill";
    row["par5"] = 126;
    row["min5"] = 4;
    row["max5"] = 10;

    // 
    row["prop6"] = "hit-skill";
    row["par6"] = "Eruption";
    row["min6"] = 40;
    row["max6"] = 30;

    // 
    row["prop7"] = "swing3";
    row["par7"] = "";
    row["min7"] = 100;
    row["max7"] = 100;

    // 
    row["prop8"] = "str/lvl";
    row["par8"] = "";
    row["min8"] = 15;
    row["max8"] = 15;

    // 
    row["prop9"] = "ease";
    row["par9"] = "";
    row["min9"] = -50;
    row["max9"] = -50;

  }

  // Humongous
  if (row["index"] === "The Humongous") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 1;
    row["max2"] = 50;

    // 
    row["prop3"] = "att";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "dru";
    row["par4"] = "";
    row["min4"] = 2;
    row["max4"] = 4;

    // 
    row["prop5"] = "hit-skill";
    row["par5"] = "Molten Boulder";
    row["min5"] = 50;
    row["max5"] = 25;

    // 
    row["prop6"] = "crush";
    row["par6"] = "";
    row["min6"] = 50;
    row["max6"] = 50;

    // 
    row["prop7"] = "ease";
    row["par7"] = "";
    row["min7"] = 20;
    row["max7"] = 20;

    // 
    row["prop8"] = "str";
    row["par8"] = "";
    row["min8"] = 20;
    row["max8"] = 50;

    // 
    row["prop9"] = "skill";
    row["par9"] = 226;
    row["min9"] = 4;
    row["max9"] = 10;

    // 
    row["prop10"] = "skill";
    row["par10"] = 247;
    row["min10"] = 4;
    row["max10"] = 10;

  }

  // The Patriarch
  if (row["index"] === "The Patriarch") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 1;
    row["max2"] = 50;

    // 
    row["prop3"] = "att";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "bar";
    row["par4"] = "";
    row["min4"] = 2;
    row["max4"] = 4;

    // 
    row["prop5"] = "hit-skill";
    row["par5"] = "Life Tap";
    row["min5"] = 25;
    row["max5"] = 1;

    // 
    row["prop6"] = "stupidity";
    row["par6"] = "";
    row["min6"] = 1;
    row["max6"] = 1;

    // 
    row["prop7"] = "str";
    row["par7"] = "";
    row["min7"] = 15;
    row["max7"] = 30;

    // 
    row["prop8"] = "gold%";
    row["par8"] = 16;
    row["min8"] = 300;
    row["max8"] = 300;

    // 
    row["prop9"] = "red-mag";
    row["par9"] = "";
    row["min9"] = 5;
    row["max9"] = 15;

    // 
    row["prop10"] = "red-dmg";
    row["par10"] = "";
    row["min10"] = 5;
    row["max10"] = 15;

  }

  // The Grim Reaper
  if (row["index"] === "The Grim Reaper") {

    //
    row["prop1"] = "dmg-min";
    row["par1"] = "";
    row["min1"] = 50;
    row["max1"] = 50;

    //
    row["prop2"] = "deadly";
    row["par2"] = "";
    row["min2"] = 100;
    row["max2"] = 100;

    // 
    row["prop3"] = "att";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "mana-kill";
    row["par4"] = "";
    row["min4"] = 4;
    row["max4"] = 10;

    // 
    row["prop5"] = "hit-skill";
    row["par5"] = "Decrepify";
    row["min5"] = 40;
    row["max5"] = 1;

    // 
    row["prop6"] = "heal-kill";
    row["par6"] = "";
    row["min6"] = 4;
    row["max6"] = 10;

    // 
    row["prop7"] = "noheal";
    row["par7"] = "";
    row["min7"] = 1;
    row["max7"] = 1;

    // 
    row["prop8"] = "skill";
    row["par8"] = 95;
    row["min8"] = 4;
    row["max8"] = 10;

    // 
    row["prop9"] = "dmg-ac";
    row["par9"] = "";
    row["min9"] = -100;
    row["max9"] = -100;

    // 
    row["prop10"] = "skill";
    row["par10"] = 75;
    row["min10"] = 4;
    row["max10"] = 10;

    // 
    row["prop11"] = "dmg-max";
    row["par11"] = "";
    row["min11"] = 100;
    row["max11"] = 150;

  }

  // Stormeye
  if (row["index"] === "Stormeye") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-cold";
    row["par2"] = "";
    row["min2"] = 1;
    row["max2"] = 25;

    // 
    row["prop3"] = "dmg-ltng";
    row["par3"] = "";
    row["min3"] = 1;
    row["max3"] = 25;

    // 
    row["prop4"] = "pal";
    row["par4"] = "";
    row["min4"] = 1;
    row["max4"] = 2;

    // 
    row["prop5"] = "aura";
    row["par5"] = "Holy Shock";
    row["min5"] = 8;
    row["max5"] = 14;

    // 
    row["prop6"] = "regen";
    row["par6"] = "";
    row["min6"] = 10;
    row["max6"] = 20;

    // 
    row["prop7"] = "skill";
    row["par7"] = 121;
    row["min7"] = 4;
    row["max7"] = 10;

    // 
    row["prop8"] = "skill";
    row["par8"] = 111;
    row["min8"] = 4;
    row["max8"] = 10;

    // 
    row["prop9"] = "att";
    row["par9"] = "";
    row["min9"] = 250;
    row["max9"] = 500;

    // 
    row["prop10"] = "skill";
    row["par10"] = 106;
    row["min10"] = 4;
    row["max10"] = 10;

  }

  // Lightsabre
  if (row["index"] === "Lightsabre") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 210;
    row["max1"] = 420;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg-mag";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "dmg-ltng";
    row["par4"] = "";
    row["min4"] = 1;
    row["max4"] = 1000;

    // 
    row["prop5"] = "manasteal";
    row["par5"] = "";
    row["min5"] = 4;
    row["max5"] = 10;

    // 
    row["prop6"] = "att-skill";
    row["par6"] = 53;
    row["min6"] = 35;
    row["max6"] = 30;

    // 
    row["prop7"] = "swing3";
    row["par7"] = "";
    row["min7"] = 30;
    row["max7"] = 30;

    // 
    row["prop8"] = "ignore-ac";
    row["par8"] = "";
    row["min8"] = 1;
    row["max8"] = 1;

    // 
    row["prop9"] = "abs-ltng%";
    row["par9"] = "";
    row["min9"] = 15;
    row["max9"] = 25;

    // 
    row["prop10"] = "light";
    row["par10"] = 106;
    row["min10"] = 7;
    row["max10"] = 7;

  }

  // Heaven's Light
  if (row["index"] === "Heaven's Light") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 300;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "swing3";
    row["par3"] = "";
    row["min3"] = 30;
    row["max3"] = 30;

    // 
    row["prop4"] = "crush";
    row["par4"] = "";
    row["min4"] = 50;
    row["max4"] = 50;

    // 
    row["prop5"] = "heal-kill";
    row["par5"] = "";
    row["min5"] = 15;
    row["max5"] = 30;

    // 
    row["prop6"] = "att-skill";
    row["par6"] = 112;
    row["min6"] = 35;
    row["max6"] = 35;

    // 
    row["prop7"] = "pal";
    row["par7"] = "";
    row["min7"] = 2;
    row["max7"] = 3;

    // 
    row["prop8"] = "reduce-ac";
    row["par8"] = "";
    row["min8"] = 50;
    row["max8"] = 50;

    // 
    row["prop9"] = "sock";
    row["par9"] = "";
    row["min9"] = 1;
    row["max9"] = 3;

    // 
    row["prop10"] = "light";
    row["par10"] = 106;
    row["min10"] = 2;
    row["max10"] = 3;

    // 
    row["prop11"] = "dmg-ltng";
    row["par11"] = "";
    row["min11"] = 1;
    row["max11"] = 1000;

  }

  // Bloodmoon
  if (row["index"] === "Bloodmoon") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 300;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "lifesteal";
    row["par3"] = "";
    row["min3"] = 10;
    row["max3"] = 15;

    // 
    row["prop4"] = "openwounds";
    row["par4"] = "";
    row["min4"] = 100;
    row["max4"] = 100;

    // 
    row["prop5"] = "heal-kill";
    row["par5"] = "";
    row["min5"] = 5;
    row["max5"] = 15;

    // 
    row["prop6"] = "att-skill";
    row["par6"] = 67;
    row["min6"] = 35;
    row["max6"] = 35;

    // 
    row["prop7"] = "charged";
    row["par7"] = "BloodGolem";
    row["min7"] = 80;
    row["max7"] = 40;

    // 
    row["prop8"] = "dmg-fire";
    row["par8"] = "";
    row["min8"] = 250;
    row["max8"] = 500;

  }

  // Wizardspike
  if (row["index"] === "Wizardspike") {

    //
    row["prop1"] = "mana/lvl";
    row["par1"] = "";
    row["min1"] = 30;
    row["max1"] = 30;

    //
    row["prop2"] = "cast3";
    row["par2"] = "";
    row["min2"] = 100;
    row["max2"] = 100;

    // 
    row["prop3"] = "regen-mana";
    row["par3"] = "";
    row["min3"] = 40;
    row["max3"] = 40;

    // 
    row["prop4"] = "mana%";
    row["par4"] = "";
    row["min4"] = 20;
    row["max4"] = 20;

    // 
    row["prop5"] = "gethit-skill";
    row["par5"] = "Frozen Orb";
    row["min5"] = 50;
    row["max5"] = 40;

    // 
    row["prop6"] = "charged";
    row["par6"] = "Lower Resist";
    row["min6"] = 50;
    row["max6"] = 10;

    // 
    row["prop7"] = "indestruct";
    row["par7"] = "";
    row["min7"] = 1;
    row["max7"] = 1;

  }

  // Demon Limb
  if (row["index"] === "Demonlimb") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 300;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-demon";
    row["par2"] = "";
    row["min2"] = 150;
    row["max2"] = 150;

    // 
    row["prop3"] = "dmg-fire";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "lifesteal";
    row["par4"] = "";
    row["min4"] = 10;
    row["max4"] = 15;

    // 
    row["prop5"] = "att-skill";
    row["par5"] = 244;
    row["min5"] = 35;
    row["max5"] = 35;

    // 
    row["prop6"] = "charged";
    row["par6"] = "Enchant";
    row["min6"] = 50;
    row["max6"] = 50;

    // 
    row["prop7"] = "rep-dur";
    row["par7"] = "";
    row["min7"] = 5;
    row["max7"] = 5;

  }

  // Cranebeak
  if (row["index"] === "Cranebeak") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 300;
    row["max1"] = 500;

    //
    row["prop2"] = "swing3";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 50;

    // 
    row["prop3"] = "dmg-ltng";
    row["par3"] = "";
    row["min3"] = 1;
    row["max3"] = 1000;

    // 
    row["prop4"] = "mag%";
    row["par4"] = "";
    row["min4"] = 40;
    row["max4"] = 80;

    // 
    row["prop5"] = "att-skill";
    row["par5"] = 245;
    row["min5"] = 35;
    row["max5"] = 35;

    // 
    row["prop6"] = "charged";
    row["par6"] = "Heart of Wolverine";
    row["min6"] = 150;
    row["max6"] = 40;

  }

  // Stoneraven
  if (row["index"] === "Stoneraven") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-mag";
    row["par2"] = "";
    row["min2"] = 250;
    row["max2"] = 500;

    // 
    row["prop3"] = "ac";
    row["par3"] = "";
    row["min3"] = 500;
    row["max3"] = 600;

    // 
    row["prop4"] = "ac-hth";
    row["par4"] = "";
    row["min4"] = 200;
    row["max4"] = 500;

    // 
    row["prop5"] = "kill-skill";
    row["par5"] = 51;
    row["min5"] = 50;
    row["max5"] = 60;

    // 
    row["prop6"] = "skilltab";
    row["par6"] = 2;
    row["min6"] = 4;
    row["max6"] = 10;

  }

  // Bonehew
  if (row["index"] === "Bonehew") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "swing3";
    row["par2"] = "";
    row["min2"] = 40;
    row["max2"] = 40;

    // 
    row["prop3"] = "dmg-cold";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "noheal";
    row["par4"] = "";
    row["min4"] = 1;
    row["max4"] = 1;

    // 
    row["prop5"] = "att-skill";
    row["par5"] = 84;
    row["min5"] = 35;
    row["max5"] = 50;

    // 
    row["prop6"] = "att";
    row["par6"] = "";
    row["min6"] = 250;
    row["max6"] = 500;

  }

  // Horizon's Tornado
  if (row["index"] === "Horizon's Tornado") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 300;
    row["max1"] = 500;

    //
    row["prop2"] = "swing3";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 50;

    // 
    row["prop3"] = "dmg-ltng";
    row["par3"] = "";
    row["min3"] = 1;
    row["max3"] = 1000;

    // 
    row["prop4"] = "slow";
    row["par4"] = "";
    row["min4"] = 40;
    row["max4"] = 40;

    // 
    row["prop5"] = "att-skill";
    row["par5"] = 240;
    row["min5"] = 35;
    row["max5"] = 40;

    // 
    row["prop6"] = "att";
    row["par6"] = "";
    row["min6"] = 250;
    row["max6"] = 500;

  }

// Deaths's Web
if (row["index"] === "Deaths's Web") {

  //
  row["prop1"] = "pierce-pois";
  row["par1"] = "";
  row["min1"] = 50;
  row["max1"] = 50;

  //
  row["prop2"] = "mana-kill";
  row["par2"] = "";
  row["min2"] = 5;
  row["max2"] = 15;

  // 
  row["prop3"] = "heal-kill";
  row["par3"] = "";
  row["min3"] = 5;
  row["max3"] = 15;

  // 
  row["prop4"] = "skilltab";
  row["par4"] = 7;
  row["min4"] = 4;
  row["max4"] = 10;

  // 
  row["prop5"] = "extra-pois";
  row["par5"] = "";
  row["min5"] = 15;
  row["max5"] = 30;

}

// Ghostflame
if (row["index"] === "Ghostflame") {

  //
  row["prop1"] = "dmg%";
  row["par1"] = "";
  row["min1"] = 300;
  row["max1"] = 500;

  //
  row["prop2"] = "dmg-mag";
  row["par2"] = "";
  row["min2"] = 250;
  row["max2"] = 500;

  // 
  row["prop3"] = "manasteal";
  row["par3"] = "";
  row["min3"] = 10;
  row["max3"] = 15;

  // 
  row["prop4"] = "light";
  row["par4"] = "";
  row["min4"] = 2;
  row["max4"] = 3;

  // 
  row["prop5"] = "ignore-ac";
  row["par5"] = "";
  row["min5"] = 1;
  row["max5"] = 1;

  // 
  row["prop6"] = "ethereal";
  row["par6"] = "";
  row["min6"] = 1;
  row["max6"] = 1;

  // 
  row["prop7"] = "indestruct";
  row["par7"] = "";
  row["min7"] = 1;
  row["max7"] = 1;

  // 
  row["prop8"] = "att-skill";
  row["par8"] = 93;
  row["min8"] = 35;
  row["max8"] = 35;

  // 
  row["prop9"] = "att-skill";
  row["par9"] = 51;
  row["min9"] = 35;
  row["max9"] = 35;

}

// Ondal's Wisdom
if (row["index"] === "Ondal's Wisdom") {

  //
  row["prop1"] = "cast3";
  row["par1"] = "";
  row["min1"] = 50;
  row["max1"] = 50;

  //
  row["prop2"] = "ac";
  row["par2"] = "";
  row["min2"] = 500;
  row["max2"] = 600;

  // 
  row["prop3"] = "enr/lvl";
  row["par3"] = "";
  row["min3"] = 35;
  row["max3"] = 35;

  // 
  row["prop4"] = "ac-miss";
  row["par4"] = "";
  row["min4"] = 350;
  row["max4"] = 500;

  // 
  row["prop5"] = "addxp";
  row["par5"] = "";
  row["min5"] = 10;
  row["max5"] = 25;

  // 
  row["prop6"] = "aura";
  row["par6"] = "Meditation";
  row["min6"] = 7;
  row["max6"] = 20;

  // 
  row["prop7"] = "gethit-skill";
  row["par7"] = "Nova";
  row["min7"] = 40;
  row["max7"] = 40;

}

// Jade Talon
if (row["index"] === "Jadetalon") {

  //
  row["prop1"] = "dmg%";
  row["par1"] = "";
  row["min1"] = 300;
  row["max1"] = 500;

  //
  row["prop2"] = "skilltab";
  row["par2"] = 19;
  row["min2"] = 4;
  row["max2"] = 10;

  // 
  row["prop3"] = "skilltab";
  row["par3"] = 20;
  row["min3"] = 4;
  row["max3"] = 10;

  // 
  row["prop4"] = "slow";
  row["par4"] = "";
  row["min4"] = 25;
  row["max4"] = 25;

  // 
  row["prop5"] = "att-skill";
  row["par5"] = 47;
  row["min5"] = 35;
  row["max5"] = 50;

  // 
  row["prop7"] = "balance2";
  row["par7"] = "";
  row["min7"] = 50;
  row["max7"] = 50;

  // 
  row["prop8"] = "manasteal";
  row["par8"] = "";
  row["min8"] = 10;
  row["max8"] = 15;

  // 
  row["prop9"] = "dmg-norm";
  row["par9"] = "";
  row["min9"] = 1;
  row["max9"] = 500;


  // 
  row["prop10"] = "att-skill";
  row["par10"] = 64;
  row["min10"] = 35;
  row["max10"] = 40;

}

// Astreon's Iron Ward
if (row["index"] === "Ironward") {

  //
  row["prop1"] = "dmg%";
  row["par1"] = "";
  row["min1"] = 350;
  row["max1"] = 500;

  //
  row["prop2"] = "swing2";
  row["par2"] = "";
  row["min2"] = 20;
  row["max2"] = 20;

  // 
  row["prop3"] = "dmg-mag";
  row["par3"] = "";
  row["min3"] = 250;
  row["max3"] = 500;

  // 
  row["prop4"] = "slow";
  row["par4"] = "";
  row["min4"] = 25;
  row["max4"] = 25;

  // 
  row["prop5"] = "crush";
  row["par5"] = "";
  row["min5"] = 50;
  row["max5"] = 50;

  // 
  row["prop6"] = "red-dmg";
  row["par6"] = "";
  row["min6"] = 15;
  row["max6"] = 30;

  // 
  row["prop7"] = "att%";
  row["par7"] = "";
  row["min7"] = 200;
  row["max7"] = 250;

  // 
  row["prop8"] = "skilltab";
  row["par8"] = 9;
  row["min8"] = 4;
  row["max8"] = 10;

  // 
  row["prop9"] = "att-skill";
  row["par9"] = 101;
  row["min9"] = 35;
  row["max9"] = 50;

  // 
  row["prop10"] = "att-skill";
  row["par10"] = 36;
  row["min10"] = 35;
  row["max10"] = 50;

  // 
  row["prop11"] = "att-skill";
  row["par11"] = 39;
  row["min11"] = 35;
  row["max11"] = 50;

}

// Hellslayer
if (row["index"] === "Hellslayer") {

  //
  row["prop1"] = "dmg%";
  row["par1"] = "";
  row["min1"] = 350;
  row["max1"] = 500;

  //
  row["prop2"] = "dmg%/lvl";
  row["par2"] = "";
  row["min2"] = 30;
  row["max2"] = 30;

  // 
  row["prop3"] = "dmg-fire";
  row["par3"] = "";
  row["min3"] = 250;
  row["max3"] = 500;

  // 
  row["prop4"] = "str/lvl";
  row["par4"] = "";
  row["min4"] = 4;
  row["max4"] = 4;

  // 
  row["prop5"] = "att-skill";
  row["par5"] = 56;
  row["min5"] = 35;
  row["max5"] = 50;

  // 
  row["prop6"] = "att-skill";
  row["par6"] = 91;
  row["min6"] = 35;
  row["max6"] = 10;

  // 
  row["prop7"] = "att-skill";
  row["par7"] = 47;
  row["min7"] = 100;
  row["max7"] = 20;

}

// Baranar's Star
if (row["index"] === "Baranar's Star") {

  //
  row["prop1"] = "dmg%";
  row["par1"] = "";
  row["min1"] = 300;
  row["max1"] = 500;

  //
  row["prop2"] = "swing3";
  row["par2"] = "";
  row["min2"] = 100;
  row["max2"] = 100;

  // 
  row["prop3"] = "dmg-ltng";
  row["par3"] = "";
  row["min3"] = 1;
  row["max3"] = 200;

  // 
  row["prop4"] = "dmg-fire";
  row["par4"] = "";
  row["min4"] = 1;
  row["max4"] = 200;

  // 
  row["prop5"] = "dmg-mag";
  row["par5"] = "";
  row["min5"] = 1;
  row["max5"] = 200;

  // 
  row["prop6"] = "att%";
  row["par6"] = "";
  row["min6"] = 200;
  row["max6"] = 300;

  // 
  row["prop7"] = "dex/lvl";
  row["par7"] = "";
  row["min7"] = 4;
  row["max7"] = 4;

  // 
  row["prop8"] = "str/lvl";
  row["par8"] = "";
  row["min8"] = 4;
  row["max8"] = 4;

}

// Widowmaker
if (row["index"] === "Widowmaker") {

  //
  row["prop1"] = "dmg%";
  row["par1"] = "";
  row["min1"] = 450;
  row["max1"] = 500;

  //
  row["prop2"] = "ignore-ac";
  row["par2"] = "";
  row["min2"] = 1;
  row["max2"] = 1;

  // 
  row["prop3"] = "magicarrow";
  row["par3"] = "";
  row["min3"] = 15;
  row["max3"] = 15;

  // 
  row["prop4"] = "dmg-norm";
  row["par4"] = "";
  row["min4"] = 50;
  row["max4"] = 100;

  // 
  row["prop5"] = "skilltab";
  row["par5"] = 0;
  row["min5"] = 4;
  row["max5"] = 10;

  // 
  row["prop6"] = "deadly";
  row["par6"] = "";
  row["min6"] = 50;
  row["max6"] = 50;

  // 
  row["prop7"] = "hit-skill";
  row["par7"] = "Amplify Damage";
  row["min7"] = 100;
  row["max7"] = 1;

  // 
  row["prop8"] = "dmg-ltng";
  row["par8"] = "";
  row["min8"] = 1;
  row["max8"] = 1000;

}

  // Djinn Slayer
  if (row["index"] === "Djinnslayer") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 300;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-demon";
    row["par2"] = "";
    row["min2"] = 300;
    row["max2"] = 500;

    // 
    row["prop3"] = "dmg-fire";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "manasteal";
    row["par4"] = "";
    row["min4"] = 10;
    row["max4"] = 15;

    // 
    row["prop5"] = "abs-ltng%";
    row["par5"] = "";
    row["min5"] = 15;
    row["max5"] = 30;

    // 
    row["prop6"] = "att-demon";
    row["par6"] = "";
    row["min6"] = 350;
    row["max6"] = 500;

    // 
    row["prop7"] = "sock";
    row["par7"] = "";
    row["min7"] = 1;
    row["max7"] = 2;

    // 
    row["prop8"] = "att-skill";
    row["par8"] = 62;
    row["min8"] = 35;
    row["max8"] = 50;

    // 
    row["prop9"] = "att-skill";
    row["par9"] = 64;
    row["min9"] = 35;
    row["max9"] = 40;

  }

  // Razor's Edge
  if (row["index"] === "Razoredge") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 300;
    row["max1"] = 500;

    //
    row["prop2"] = "swing3";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 50;

    // 
    row["prop3"] = "deadly";
    row["par3"] = "";
    row["min3"] = 50;
    row["max3"] = 50;

    // 
    row["prop4"] = "openwounds";
    row["par4"] = "";
    row["min4"] = 50;
    row["max4"] = 50;

    // 
    row["prop5"] = "dmg-norm";
    row["par5"] = "";
    row["min5"] = 50;
    row["max5"] = 100;

    // 
    row["prop6"] = "dmg-mag";
    row["par6"] = "";
    row["min6"] = 250;
    row["max6"] = 500;

    // 
    row["prop7"] = "reduce-ac";
    row["par7"] = "";
    row["min7"] = 100;
    row["max7"] = 100;

    // 
    row["prop8"] = "lifesteal";
    row["par8"] = "";
    row["min8"] = 5;
    row["max8"] = 15;

    // 
    row["prop9"] = "heal-kill";
    row["par9"] = "";
    row["min9"] = 5;
    row["max9"] = 15;

  }

  // Firelizard's Talons
  if (row["index"] === "Firelizard's Talons") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 300;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-fire";
    row["par2"] = "";
    row["min2"] = 250;
    row["max2"] = 500;

    // 
    row["prop3"] = "swing2";
    row["par3"] = "";
    row["min3"] = 20;
    row["max3"] = 20;

    // 
    row["prop4"] = "ass";
    row["par4"] = "";
    row["min4"] = 2;
    row["max4"] = 3;

    // 
    row["prop5"] = "abs-fire%";
    row["par5"] = "";
    row["min5"] = 5;
    row["max5"] = 15;

    // 
    row["prop6"] = "att-skill";
    row["par6"] = 62;
    row["min6"] = 35;
    row["max6"] = 45;

    // 
    row["prop7"] = "dmg-mag";
    row["par7"] = "";
    row["min7"] = 250;
    row["max7"] = 500;

  }

  // Lacerator
  if (row["index"] === "Lacerator") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 300;
    row["max1"] = 500;

    //
    row["prop2"] = "swing3";
    row["par2"] = "";
    row["min2"] = 40;
    row["max2"] = 40;

    // 
    row["prop3"] = "openwounds";
    row["par3"] = "";
    row["min3"] = 50;
    row["max3"] = 50;

    // 
    row["prop4"] = "noheal";
    row["par4"] = "";
    row["min4"] = 1;
    row["max4"] = 1;

    // 
    row["prop5"] = "howl";
    row["par5"] = "";
    row["min5"] = 64;
    row["max5"] = 64;

    // 
    row["prop6"] = "hit-skill";
    row["par6"] = "Amplify Damage";
    row["min6"] = 100;
    row["max6"] = 1;

    // 
    row["prop7"] = "dmg-norm";
    row["par7"] = "";
    row["min7"] = 50;
    row["max7"] = 100;

    // 
    row["prop8"] = "dmg-mag";
    row["par8"] = "";
    row["min8"] = 250;
    row["max8"] = 500;

  }

  // Stone Crusher
  if (row["index"] === "Stone Crusher") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 300;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg-mag";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "reduce-ac";
    row["par4"] = "";
    row["min4"] = 50;
    row["max4"] = 50;

    // 
    row["prop5"] = "crush";
    row["par5"] = "";
    row["min5"] = 50;
    row["max5"] = 50;

    // 
    row["prop6"] = "dmg-ac";
    row["par6"] = "";
    row["min6"] = -100;
    row["max6"] = -100;

    // 
    row["prop7"] = "str/lvl";
    row["par7"] = "";
    row["min7"] = 25;
    row["max7"] = 25;

    // 
    row["prop8"] = "dmg-demon";
    row["par8"] = "";
    row["min8"] = 150;
    row["max8"] = 150;

    // 
    row["prop9"] = "dmg-undead";
    row["par9"] = "";
    row["min9"] = 100;
    row["max9"] = 100;

  }

  // Windhammer
  if (row["index"] === "Windhammer") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "crush";
    row["par2"] = "";
    row["min2"] = 100;
    row["max2"] = 100;

    // 
    row["prop3"] = "swing3";
    row["par3"] = "";
    row["min3"] = 100;
    row["max3"] = 100;

    // 
    row["prop4"] = "dmg-norm";
    row["par4"] = "";
    row["min4"] = 50;
    row["max4"] = 100;

    // 
    row["prop5"] = "dmg-mag";
    row["par5"] = "";
    row["min5"] = 250;
    row["max5"] = 500;

    // 
    row["prop6"] = "att-skill";
    row["par6"] = 240;
    row["min6"] = 35;
    row["max6"] = 40;

  }

  // Demon's Arch
  if (row["index"] === "Demon's Arch") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 300;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-fire";
    row["par2"] = "";
    row["min2"] = 250;
    row["max2"] = 500;

    // 
    row["prop3"] = "dmg-lightning";
    row["par3"] = "";
    row["min3"] = 1;
    row["max3"] = 1000;

    // 
    row["prop4"] = "swing3";
    row["par4"] = "";
    row["min4"] = 30;
    row["max4"] = 30;

    // 
    row["prop5"] = "lifesteal";
    row["par5"] = "";
    row["min5"] = 5;
    row["max5"] = 15;

    // 
    row["prop6"] = "dmg-demon";
    row["par6"] = "";
    row["min6"] = 500;
    row["max6"] = 500;

    // 
    row["prop7"] = "att-demon";
    row["par7"] = "";
    row["min7"] = 500;
    row["max7"] = 500;

    // 
    row["prop8"] = "hit-skill";
    row["par8"] = "Firestorm";
    row["min8"] = 35;
    row["max8"] = 50;

  }

  // Nord's Tenderizer
  if (row["index"] === "Nord's Tenderizer") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-cold";
    row["par2"] = "";
    row["min2"] = 250;
    row["max2"] = 500;

    // 
    row["prop3"] = "dmg-norm";
    row["par3"] = "";
    row["min3"] = 50;
    row["max3"] = 100;

    // 
    row["prop4"] = "abs-cold%";
    row["par4"] = "";
    row["min4"] = 15;
    row["max4"] = 25;

    // 
    row["prop5"] = "att%";
    row["par5"] = "";
    row["min5"] = 200;
    row["max5"] = 300;

    // 
    row["prop6"] = "freeze";
    row["par6"] = "";
    row["min6"] = 2;
    row["max6"] = 4;

    // 
    row["prop7"] = "dmg-undead";
    row["par7"] = "";
    row["min7"] = 100;
    row["max7"] = 100;

    // 
    row["prop8"] = "att-skill";
    row["par8"] = 64;
    row["min8"] = 35;
    row["max8"] = 40;

  }

  // Fleshripper
  if (row["index"] === "Fleshripper") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 300;
    row["max1"] = 500;

    //
    row["prop2"] = "reduce-ac";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 50;

    // 
    row["prop3"] = "dmg-norm";
    row["par3"] = "";
    row["min3"] = 50;
    row["max3"] = 100;

    // 
    row["prop4"] = "dmg-ltng";
    row["par4"] = "";
    row["min4"] = 1;
    row["max4"] = 1000;

    // 
    row["prop5"] = "crush";
    row["par5"] = "";
    row["min5"] = 50;
    row["max5"] = 50;

    // 
    row["prop6"] = "deadly";
    row["par6"] = "";
    row["min6"] = 50;
    row["max6"] = 50;

    // 
    row["prop7"] = "openwounds";
    row["par7"] = "";
    row["min7"] = 100;
    row["max7"] = 100;

    // 
    row["prop8"] = "noheal";
    row["par8"] = "";
    row["min8"] = 1;
    row["max8"] = 1;

    // 
    row["prop9"] = "slow";
    row["par9"] = "";
    row["min9"] = 50;
    row["max9"] = 50;

    // 
    row["prop10"] = "thorns/lvl";
    row["par10"] = "";
    row["min10"] = 30;
    row["max10"] = 30;

  }

  // Eaglehorn
  if (row["index"] === "Eaglehorn") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg%/lvl";
    row["par2"] = "";
    row["min2"] = 35;
    row["max2"] = 35;

    // 
    row["prop3"] = "ama";
    row["par3"] = "";
    row["min3"] = 2;
    row["max3"] = 3;

    // 
    row["prop4"] = "att";
    row["par4"] = "";
    row["min4"] = 500;
    row["max4"] = 500;

    // 
    row["prop5"] = "dex/lvl";
    row["par5"] = "";
    row["min5"] = 4;
    row["max5"] = 4;

    // 
    row["prop6"] = "ignore-ac";
    row["par6"] = "";
    row["min6"] = 1;
    row["max6"] = 1;

    // 
    row["prop7"] = "dmg-ltng";
    row["par7"] = "";
    row["min7"] = 1;
    row["max7"] = 1000;

    // 
    row["prop8"] = "dmg-norm";
    row["par8"] = "";
    row["min8"] = 50;
    row["max8"] = 100;

    // 
    row["prop9"] = "pierce";
    row["par9"] = "";
    row["min9"] = 50;
    row["max9"] = 50;

    // 
    row["prop10"] = "deadly";
    row["par10"] = "";
    row["min10"] = 40;
    row["max10"] = 40;

  }

  // Earthshifter
  if (row["index"] === "Earthshifter") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 300;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg-fire";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "skilltab";
    row["par4"] = 17;
    row["min4"] = 7;
    row["max4"] = 7;

    // 
    row["prop5"] = "swing2";
    row["par5"] = "";
    row["min5"] = 20;
    row["max5"] = 20;

    // 
    row["prop6"] = "crush";
    row["par6"] = "";
    row["min6"] = 50;
    row["max6"] = 50;

    // 
    row["prop7"] = "balance2";
    row["par7"] = "";
    row["min7"] = 40;
    row["max7"] = 40;

    // 
    row["prop8"] = "att-skill";
    row["par8"] = 234;
    row["min8"] = 35;
    row["max8"] = 40;

  }

  // Doombringer
  if (row["index"] === "Doombringer") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 300;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg-mag";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "lifesteal";
    row["par4"] = "";
    row["min4"] = 5;
    row["max4"] = 15;

    // 
    row["prop5"] = "att%";
    row["par5"] = "";
    row["min5"] = 40;
    row["max5"] = 40;

    // 
    row["prop6"] = "indestruct";
    row["par6"] = "";
    row["min6"] = 1;
    row["max6"] = 1;

    // 
    row["prop7"] = "dmg%/lvl";
    row["par7"] = "";
    row["min7"] = 35;
    row["max7"] = 35;

    // 
    row["prop8"] = "att-skill";
    row["par8"] = 72;
    row["min8"] = 35;
    row["max8"] = 50;

  }

  // Thunderstroke
  if (row["index"] === "Thunderstroke") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 300;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-ltng";
    row["par2"] = "";
    row["min2"] = 1;
    row["max2"] = 1000;

    // 
    row["prop3"] = "dmg-mag";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "swing2";
    row["par4"] = "";
    row["min4"] = 20;
    row["max4"] = 20;

    // 
    row["prop5"] = "pierce-ltng";
    row["par5"] = "";
    row["min5"] = 15;
    row["max5"] = 30;

    // 
    row["prop6"] = "skilltab";
    row["par6"] = 2;
    row["min6"] = 4;
    row["max6"] = 7;

    // 
    row["prop7"] = "extra-ltng";
    row["par7"] = "";
    row["min7"] = 10;
    row["max7"] = 15;

    // 
    row["prop8"] = "hit-skill";
    row["par8"] = "Lightning";
    row["min8"] = 35;
    row["max8"] = 50;

  }

  // Steel Pillar
  if (row["index"] === "Steelpillar") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 300;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg-mag";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "crush";
    row["par4"] = "";
    row["min4"] = 50;
    row["max4"] = 50;

    // 
    row["prop5"] = "reduce-ac";
    row["par5"] = "";
    row["min5"] = 50;
    row["max5"] = 50;

    // 
    row["prop6"] = "swing3";
    row["par6"] = "";
    row["min6"] = 40;
    row["max6"] = 40;

    // 
    row["prop7"] = "ac/lvl";
    row["par7"] = "";
    row["min7"] = 50;
    row["max7"] = 50;

    // 
    row["prop8"] = "ac-hth";
    row["par8"] = "";
    row["min8"] = 500;
    row["max8"] = 500;

    // 
    row["prop9"] = "indestruct";
    row["par9"] = 64;
    row["min9"] = 35;
    row["max9"] = 40;

    // 
    row["prop10"] = "red-dmg";
    row["par10"] = "";
    row["min10"] = 15;
    row["max10"] = 30;

    // 
    row["prop11"] = "red-mag";
    row["par11"] = "";
    row["min11"] = 15;
    row["max11"] = 30;

  }

  // Messerschmidt's Reaver
  if (row["index"] === "Messerschmidt's Reaver") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 300;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg%/lvl";
    row["par2"] = "";
    row["min2"] = 40;
    row["max2"] = 40;

    // 
    row["prop3"] = "dmg-fire";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "dmg-mag";
    row["par4"] = "";
    row["min4"] = 250;
    row["max4"] = 500;

    // 
    row["prop5"] = "att%";
    row["par5"] = "";
    row["min5"] = 100;
    row["max5"] = 100;

    // 
    row["prop6"] = "dmg-demon";
    row["par6"] = "";
    row["min6"] = 350;
    row["max6"] = 500;

    // 
    row["prop7"] = "str/lvl";
    row["par7"] = "";
    row["min7"] = 15;
    row["max7"] = 15;

    // 
    row["prop8"] = "dex/lvl";
    row["par8"] = "";
    row["min8"] = 15;
    row["max8"] = 15;

  }

  // Frostwind
  if (row["index"] === "Frostwind") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 300;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-cold";
    row["par2"] = "";
    row["min2"] = 250;
    row["max2"] = 500;

    // 
    row["prop3"] = "dmg-mag";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "freeze";
    row["par4"] = "";
    row["min4"] = 4;
    row["max4"] = 4;

    // 
    row["prop5"] = "abs-cold%";
    row["par5"] = 240;
    row["min5"] = 15;
    row["max5"] = 30;

    // 
    row["prop6"] = "nofreeze";
    row["par6"] = "";
    row["min6"] = 1;
    row["max6"] = 1;

    // 
    row["prop7"] = "swing3";
    row["par7"] = "";
    row["min7"] = 40;
    row["max7"] = 40;

    // 
    row["prop8"] = "att-skill";
    row["par8"] = 44;
    row["min8"] = 35;
    row["max8"] = 60;

  }

  // Gimmershred
  if (row["index"] === "Gimmershred") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 300;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-fire";
    row["par2"] = "";
    row["min2"] = 250;
    row["max2"] = 500;

    // 
    row["prop3"] = "dmg-cold";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "dmg-ltng";
    row["par4"] = "";
    row["min4"] = 1;
    row["max4"] = 1000;

    // 
    row["prop5"] = "swing3";
    row["par5"] = "";
    row["min5"] = 40;
    row["max5"] = 40;

    // 
    row["prop6"] = "att";
    row["par6"] = "";
    row["min6"] = 350;
    row["max6"] = 500;

    // 
    row["prop7"] = "hit-skill";
    row["par7"] = "Lower Resist";
    row["min7"] = 35;
    row["max7"] = 10;

  } 

  // Stormspire
  if (row["index"] === "Stormspire") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 300;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-ltng";
    row["par2"] = "";
    row["min2"] = 1;
    row["max2"] = 1000;

    // 
    row["prop3"] = "gethit-skill";
    row["par3"] = "Charged Bolt";
    row["min3"] = 40;
    row["max3"] = 40;

    // 
    row["prop4"] = "gethit-skill";
    row["par4"] = "Chain Lightning";
    row["min4"] = 40;
    row["max4"] = 40;

    // 
    row["prop5"] = "swing3";
    row["par5"] = 240;
    row["min5"] = 30;
    row["max5"] = 30;

    // 
    row["prop6"] = "res-ltng";
    row["par6"] = "";
    row["min6"] = 40;
    row["max6"] = 90;

    // 
    row["prop7"] = "str/lvl";
    row["par7"] = "";
    row["min7"] = 4;
    row["max7"] = 4;

    // 
    row["prop8"] = "thorns/lvl";
    row["par8"] = "";
    row["min8"] = 35;
    row["max8"] = 35;

    // 
    row["prop9"] = "indestruct";
    row["par9"] = "";
    row["min9"] = 1;
    row["max9"] = 1;

    // 
    row["prop10"] = "res-all";
    row["par10"] = "";
    row["min10"] = -10;
    row["max10"] = -30;

  }

  // Gargoyle's Bite
  if (row["index"] === "Gargoyle's Bite") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 300;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-pois";
    row["par2"] = "";
    row["min2"] = 300;
    row["max2"] = 500;

    // 
    row["prop3"] = "dmg-fire";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "lifesteal";
    row["par4"] = "";
    row["min4"] = 10;
    row["max4"] = 15;

    // 
    row["prop5"] = "dmg%/lvl";
    row["par5"] = "";
    row["min5"] = 35;
    row["max5"] = 35;

    // 
    row["prop6"] = "dmg-demon";
    row["par6"] = "";
    row["min6"] = 350;
    row["max6"] = 500;

    // 
    row["prop7"] = "att";
    row["par7"] = "";
    row["min7"] = 250;
    row["max7"] = 500;

    // 
    row["prop8"] = "hit-skill";
    row["par8"] = "Poison Nova";
    row["min8"] = 35;
    row["max8"] = 40;

  }

  // Flamebellow
  if (row["index"] === "Flamebellow") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 300;
    row["max1"] = 500;

    //
    row["prop2"] = "fireskill";
    row["par2"] = "";
    row["min2"] = 3;
    row["max2"] = 4;

    // 
    row["prop3"] = "dmg-fire";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "extra-fire";
    row["par4"] = "";
    row["min4"] = 15;
    row["max4"] = 25;

    // 
    row["prop5"] = "oskill";
    row["par5"] = "Armageddon";
    row["min5"] = 40;
    row["max5"] = 40;

    // 
    row["prop6"] = "aura";
    row["par6"] = "Holy Fire";
    row["min6"] = 14;
    row["max6"] = 14;

    // 
    row["prop7"] = "vit";
    row["par7"] = "";
    row["min7"] = 0;
    row["max7"] = 0;

    // 
    row["prop8"] = "oskill";
    row["par8"] = "Inferno";
    row["min8"] = 0;
    row["max8"] = 0;

  }

  // Death Cleaver
  if (row["index"] === "Deathcleaver") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 300;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-demon";
    row["par2"] = "";
    row["min2"] = 300;
    row["max2"] = 500;

    // 
    row["prop3"] = "dmg-fire";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "dmg-mag";
    row["par4"] = "";
    row["min4"] = 250;
    row["max4"] = 500;

    // 
    row["prop5"] = "swing3";
    row["par5"] = "";
    row["min5"] = 40;
    row["max5"] = 40;

    // 
    row["prop6"] = "reduce-ac";
    row["par6"] = "";
    row["min6"] = 50;
    row["max6"] = 50;

    // 
    row["prop7"] = "deadly";
    row["par7"] = "";
    row["min7"] = 100;
    row["max7"] = 100;

    // 
    row["prop8"] = "heal-kill";
    row["par8"] = "";
    row["min8"] = 5;
    row["max8"] = 15;

    // 
    row["prop9"] = "dmg%/lvl";
    row["par9"] = "";
    row["min9"] = 30;
    row["max9"] = 30;

  }

  // Gut Siphon
  if (row["index"] === "Gutsiphon") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 300;
    row["max1"] = 500;

    //
    row["prop2"] = "pierce";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 50;

    // 
    row["prop3"] = "dmg-norm";
    row["par3"] = "";
    row["min3"] = 50;
    row["max3"] = 100;

    // 
    row["prop4"] = "dmg-ltng";
    row["par4"] = "";
    row["min4"] = 1;
    row["max4"] = 1000;

    // 
    row["prop5"] = "lifesteal";
    row["par5"] = "";
    row["min5"] = 15;
    row["max5"] = 30;

    // 
    row["prop6"] = "openwounds";
    row["par6"] = "";
    row["min6"] = 100;
    row["max6"] = 100;

    // 
    row["prop7"] = "slow";
    row["par7"] = "";
    row["min7"] = 40;
    row["max7"] = 40;

    // 
    row["prop8"] = "dmg%/lvl";
    row["par8"] = "";
    row["min8"] = 30;
    row["max8"] = 50;


    // 
    row["prop9"] = "dmg-mag";
    row["par9"] = "";
    row["min9"] = 250;
    row["max9"] = 500;

  }

  // Blood Raven's Charge
  if (row["index"] === "Bloodraven's Charge") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 300;
    row["max1"] = 500;

    //
    row["prop2"] = "att%";
    row["par2"] = "";
    row["min2"] = 200;
    row["max2"] = 300;

    // 
    row["prop3"] = "dmg-fire";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "explosivearrow";
    row["par4"] = "";
    row["min4"] = 13;
    row["max4"] = 13;

    // 
    row["prop5"] = "skilltab";
    row["par5"] = 0;
    row["min5"] = 4;
    row["max5"] = 7;

    // 
    row["prop6"] = "charged";
    row["par6"] = "Revive";
    row["min6"] = 100;
    row["max6"] = 50;

    // 
    row["prop7"] = "dmg-mag";
    row["par7"] = "";
    row["min7"] = 250;
    row["max7"] = 500;

    // 
    row["prop8"] = "dmg-undead";
    row["par8"] = "";
    row["min8"] = 250;
    row["max8"] = 250;

    // 
    row["prop9"] = "dmg-norm";
    row["par9"] = "";
    row["min9"] = 250;
    row["max9"] = 500;

  }

  // Viperfork
  if (row["index"] === "Viperfork") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 300;
    row["max1"] = 500;

    //
    row["prop2"] = "att";
    row["par2"] = "";
    row["min2"] = 300;
    row["max2"] = 500;

    // 
    row["prop3"] = "dmg-pois";
    row["par3"] = "";
    row["min3"] = 300;
    row["max3"] = 500;

    // 
    row["prop4"] = "swing3";
    row["par4"] = "";
    row["min4"] = 50;
    row["max4"] = 50;

    // 
    row["prop5"] = "res-pois-len";
    row["par5"] = "";
    row["min5"] = 100;
    row["max5"] = 100;

    // 
    row["prop6"] = "att-skill";
    row["par6"] = 92;
    row["min6"] = 35;
    row["max6"] = 40;

    // 
    row["prop7"] = "dmg-norm";
    row["par7"] = "";
    row["min7"] = 50;
    row["max7"] = 100;

  }

  // Rune Master
  if (row["index"] === "Runemaster") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "nofreeze";
    row["par2"] = "";
    row["min2"] = 1;
    row["max2"] = 1;

    // 
    row["prop3"] = "sock";
    row["par3"] = "";
    row["min3"] = 3;
    row["max3"] = 5;

    // 
    row["prop4"] = "res-all-max";
    row["par4"] = "";
    row["min4"] = 5;
    row["max4"] = 10;

    // 
    row["prop5"] = "dmg-norm";
    row["par5"] = "";
    row["min5"] = 50;
    row["max5"] = 100;

    // 
    row["prop6"] = "dmg-mag";
    row["par6"] = "";
    row["min6"] = 250;
    row["max6"] = 500;

  }

  // Eschuta's temper
  if (row["index"] === "Eschuta's temper") {

    //
    row["prop1"] = "sor";
    row["par1"] = "";
    row["min1"] = 2;
    row["max1"] = 3;

    //
    row["prop2"] = "cast3";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 50;

    // 
    row["prop3"] = "extra-fire";
    row["par3"] = "";
    row["min3"] = 20;
    row["max3"] = 30;

    // 
    row["prop4"] = "extra-ltng";
    row["par4"] = "";
    row["min4"] = 20;
    row["max4"] = 30;

    // 
    row["prop5"] = "enr/lvl";
    row["par5"] = "";
    row["min5"] = 4;
    row["max5"] = 4;

  }

  // The Redeemer
  if (row["index"] === "The Reedeemer") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 300;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-demon";
    row["par2"] = "";
    row["min2"] = 350;
    row["max2"] = 500;

    // 
    row["prop3"] = "dmg-max";
    row["par3"] = "";
    row["min3"] = 0;
    row["max3"] = 0;

    // 
    row["prop4"] = "pal";
    row["par4"] = "";
    row["min4"] = 2;
    row["max4"] = 2;

    // 
    row["prop5"] = "reduce-ac";
    row["par5"] = "";
    row["min5"] = 50;
    row["max5"] = 50;

    // 
    row["prop6"] = "aura";
    row["par6"] = "Redemption";
    row["min6"] = 5;
    row["max6"] = 15;

    // 
    row["prop7"] = "dmg-mag";
    row["par7"] = "";
    row["min7"] = 250;
    row["max7"] = 500;

    // 
    row["prop8"] = "dmg-min";
    row["par8"] = "";
    row["min8"] = 0;
    row["max8"] = 0;

  }

  // Windforce
  if (row["index"] === "Windforce") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 400;

    //
    row["prop2"] = "dmg%/lvl";
    row["par2"] = "";
    row["min2"] = 40;
    row["max2"] = 40;

    // 
    row["prop3"] = "dmg-ltng";
    row["par3"] = "";
    row["min3"] = 1;
    row["max3"] = 1000;

    // 
    row["prop4"] = "manasteal";
    row["par4"] = "";
    row["min4"] = 5;
    row["max4"] = 15;

    // 
    row["prop5"] = "dmg-mag";
    row["par5"] = "";
    row["min5"] = 250;
    row["max5"] = 500;

    // 
    row["prop6"] = "swing3";
    row["par6"] = "";
    row["min6"] = 40;
    row["max6"] = 40;

    // 
    row["prop7"] = "str/lvl";
    row["par7"] = "";
    row["min7"] = 4;
    row["max7"] = 4;

    // 
    row["prop8"] = "dex/lvl";
    row["par8"] = "";
    row["min8"] = 4;
    row["max8"] = 4;

    // 
    row["prop9"] = "knock";
    row["par9"] = "";
    row["min9"] = 1;
    row["max9"] = 1;

    // 
    row["prop10"] = "move2";
    row["par10"] = "";
    row["min10"] = 20;
    row["max10"] = 20;

    // 
    row["prop11"] = "dmg-norm";
    row["par11"] = "";
    row["min11"] = 50;
    row["max11"] = 100;

  }

  // Death's Fathom
  if (row["index"] === "Fathom") {

    //
    row["prop1"] = "sor";
    row["par1"] = "";
    row["min1"] = 3;
    row["max1"] = 3;

    //
    row["prop2"] = "cast3";
    row["par2"] = "";
    row["min2"] = 40;
    row["max2"] = 40;

    // 
    row["prop3"] = "extra-cold";
    row["par3"] = "";
    row["min3"] = 25;
    row["max3"] = 50;

    // 
    row["prop4"] = "res-ltng";
    row["par4"] = "";
    row["min4"] = 40;
    row["max4"] = 90;

    // 
    row["prop5"] = "res-fire";
    row["par5"] = "";
    row["min5"] = 40;
    row["max5"] = 90;

    // 
    row["prop6"] = "abs-cold%";
    row["par6"] = "";
    row["min6"] = 5;
    row["max6"] = 15;

    // 
    row["prop7"] = "res-all";
    row["par7"] = "";
    row["min7"] = -10;
    row["max7"] = -30;

  }

  // Ethereal Edge
  if (row["index"] === "Ethereal Edge") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-demon";
    row["par2"] = "";
    row["min2"] = 350;
    row["max2"] = 500;

    // 
    row["prop3"] = "dmg-norm";
    row["par3"] = "";
    row["min3"] = 50;
    row["max3"] = 100;

    // 
    row["prop4"] = "att";
    row["par4"] = "";
    row["min4"] = 300;
    row["max4"] = 500;

    // 
    row["prop5"] = "swing3";
    row["par5"] = "";
    row["min5"] = 25;
    row["max5"] = 25;

    // 
    row["prop6"] = "abs-fire%";
    row["par6"] = "";
    row["min6"] = 5;
    row["max6"] = 15;

    // 
    row["prop7"] = "heal-kill";
    row["par7"] = "";
    row["min7"] = 5;
    row["max7"] = 15;

    // 
    row["prop8"] = "ethereal";
    row["par8"] = "";
    row["min8"] = 1;
    row["max8"] = 1;

    // 
    row["prop9"] = "indestruct";
    row["par9"] = "";
    row["min9"] = 1;
    row["max9"] = 1;

    // 
    row["prop10"] = "dmg%/lvl";
    row["par10"] = "";
    row["min10"] = 25;
    row["max10"] = 25;

  }

  // Executioner's Justice
  if (row["index"] === "Executioner's Justice") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg-fire";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "swing3";
    row["par4"] = "";
    row["min4"] = 40;
    row["max4"] = 40;

    // 
    row["prop5"] = "reduce-ac";
    row["par5"] = "";
    row["min5"] = 50;
    row["max5"] = 50;

    // 
    row["prop6"] = "att-skill";
    row["par6"] = 87;
    row["min6"] = 35;
    row["max6"] = 1;

    // 
    row["prop7"] = "crush";
    row["par7"] = "";
    row["min7"] = 40;
    row["max7"] = 40;

    // 
    row["prop8"] = "deadly";
    row["par8"] = "";
    row["min8"] = 50;
    row["max8"] = 50;

  }

  // Warshrike
  if (row["index"] === "Warshrike") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 300;
    row["max1"] = 500;

    //
    row["prop2"] = "deadly";
    row["par2"] = "";
    row["min2"] = 100;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg-mag";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "swing3";
    row["par4"] = "";
    row["min4"] = 40;
    row["max4"] = 40;

    // 
    row["prop5"] = "pierce";
    row["par5"] = "";
    row["min5"] = 100;
    row["max5"] = 100;

    // 
    row["prop6"] = "hit-skill";
    row["par6"] = "Nova";
    row["min6"] = 35;
    row["max6"] = 40;

  }

  // The Reaper's Toll
  if (row["index"] === "The Reaper's Toll") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 500;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-demon";
    row["par2"] = "";
    row["min2"] = 500;
    row["max2"] = 500;

    // 
    row["prop3"] = "dmg-norm";
    row["par3"] = "";
    row["min3"] = 50;
    row["max3"] = 100;

    // 
    row["prop4"] = "ignore-ac";
    row["par4"] = "";
    row["min4"] = 1;
    row["max4"] = 1;

    // 
    row["prop5"] = "dmg-cold";
    row["par5"] = "";
    row["min5"] = 250;
    row["max5"] = 500;

    // 
    row["prop6"] = "deadly";
    row["par6"] = "";
    row["min6"] = 50;
    row["max6"] = 50;

    // 
    row["prop7"] = "att-skill";
    row["par7"] = 87;
    row["min7"] = 35;
    row["max7"] = 1;

    // 
    row["prop8"] = "lifesteal";
    row["par8"] = "";
    row["min8"] = 15;
    row["max8"] = 50;

    // 
    row["prop9"] = "ease";
    row["par9"] = "";
    row["min9"] = -25;
    row["max9"] = -25;

  }

  // Hellrack
  if (row["index"] === "Hellrack") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 300;
    row["max1"] = 500;

    //
    row["prop2"] = "att%";
    row["par2"] = "";
    row["min2"] = 200;
    row["max2"] = 300;

    // 
    row["prop3"] = "dmg-fire";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "dmg-cold";
    row["par4"] = "";
    row["min4"] = 250;
    row["max4"] = 500;

    // 
    row["prop5"] = "dmg-ltng";
    row["par5"] = "";
    row["min5"] = 1;
    row["max5"] = 1000;

    // 
    row["prop6"] = "swing2";
    row["par6"] = "";
    row["min6"] = 25;
    row["max6"] = 25;

    // 
    row["prop7"] = "sock";
    row["par7"] = "";
    row["min7"] = 2;
    row["max7"] = 3;

  }

  // Wraith Flight
  if (row["index"] === "Wraithflight") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 300;
    row["max1"] = 500;

    //
    row["prop2"] = "lifesteal";
    row["par2"] = "";
    row["min2"] = 10;
    row["max2"] = 15;

    // 
    row["prop3"] = "dmg-fire";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "mana-kill";
    row["par4"] = "";
    row["min4"] = 15;
    row["max4"] = 20;

    // 
    row["prop5"] = "dmg-cold";
    row["par5"] = "";
    row["min5"] = 250;
    row["max5"] = 500;

    // 
    row["prop6"] = "ethereal";
    row["par6"] = "";
    row["min6"] = 1;
    row["max6"] = 1;

    // 
    row["prop7"] = "sock";
    row["par7"] = "";
    row["min7"] = 1;
    row["max7"] = 1;

    // 
    row["prop8"] = "hit-skill";
    row["par8"] = "Bone Spirit";
    row["min8"] = 35;
    row["max8"] = 40;

  }

  // Shadowkiller
  if (row["index"] === "Shadowkiller") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 300;
    row["max1"] = 500;

    //
    row["prop2"] = "reduce-ac";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 50;

    // 
    row["prop3"] = "dmg-mag";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "freeze";
    row["par4"] = "";
    row["min4"] = 2;
    row["max4"] = 3;

    // 
    row["prop5"] = "dmg-cold";
    row["par5"] = "";
    row["min5"] = 250;
    row["max5"] = 300;

    // 
    row["prop6"] = "mana-kill";
    row["par6"] = "";
    row["min6"] = 15;
    row["max6"] = 20;

    // 
    row["prop7"] = "ethereal";
    row["par7"] = "";
    row["min7"] = 1;
    row["max7"] = 1;

    // 
    row["prop8"] = "indestruct";
    row["par8"] = "";
    row["min8"] = 1;
    row["max8"] = 1;

    // 
    row["prop9"] = "att-skill";
    row["par9"] = 44;
    row["min9"] = 35;
    row["max9"] = 50;

  }

  // Schaefer's Hammer
  if (row["index"] === "Schaefer's Hammer") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 300;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg%/lvl";
    row["par2"] = "";
    row["min2"] = 35;
    row["max2"] = 35;

    // 
    row["prop3"] = "dmg-ltng";
    row["par3"] = "";
    row["min3"] = 1;
    row["max3"] = 1000;

    // 
    row["prop4"] = "att/lvl";
    row["par4"] = "";
    row["min4"] = 20;
    row["max4"] = 20;

    // 
    row["prop5"] = "res-ltng";
    row["par5"] = "";
    row["min5"] = 70;
    row["max5"] = 140;

    // 
    row["prop6"] = "res-all";
    row["par6"] = "";
    row["min6"] = -10;
    row["max6"] = -30;

    // 
    row["prop7"] = "light";
    row["par7"] = "";
    row["min7"] = 1;
    row["max7"] = 1;

    // 
    row["prop8"] = "indestruct";
    row["par8"] = "";
    row["min8"] = 1;
    row["max8"] = 1;

    // 
    row["prop9"] = "swing2";
    row["par9"] = "";
    row["min9"] = 20;
    row["max9"] = 20;

    // 
    row["prop10"] = "att-skill";
    row["par10"] = 42;
    row["min10"] = 50;
    row["max10"] = 11;

  } 

  // Boneshade
  if (row["index"] === "Boneshade") {

    //
    row["prop1"] = "nec";
    row["par1"] = "";
    row["min1"] = 2;
    row["max1"] = 3;

    //
    row["prop2"] = "cast2";
    row["par2"] = "";
    row["min2"] = 25;
    row["max2"] = 25;

    // 
    row["prop3"] = "red-dmg";
    row["par3"] = "";
    row["min3"] = 15;
    row["max3"] = 30;

    // 
    row["prop4"] = "gethit-skill";
    row["par4"] = "Bone Armor";
    row["min4"] = 40;
    row["max4"] = 10;

    // 
    row["prop5"] = "skilltab";
    row["par5"] = 7;
    row["min5"] = 4;
    row["max5"] = 7;

    // 
    row["prop6"] = "skill";
    row["par6"] = 93;
    row["min6"] = 0;
    row["max6"] = 0;

    // 
    row["prop7"] = "skill";
    row["par7"] = 78;
    row["min7"] = 0;
    row["max7"] = 0;

  }

  // The Grandfather
  if (row["index"] === "The Grandfather") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg%/lvl";
    row["par2"] = "";
    row["min2"] = 35;
    row["max2"] = 35;

    // 
    row["prop3"] = "dmg-norm";
    row["par3"] = "";
    row["min3"] = 50;
    row["max3"] = 100;

    // 
    row["prop4"] = "att%";
    row["par4"] = "";
    row["min4"] = 100;
    row["max4"] = 100;

    // 
    row["prop5"] = "indestruct";
    row["par5"] = "";
    row["min5"] = 1;
    row["max5"] = 1;

    // 
    row["prop6"] = "str/lvl";
    row["par6"] = "";
    row["min6"] = 4;
    row["max6"] = 4;

    // 
    row["prop7"] = "dex/lvl";
    row["par7"] = "";
    row["min7"] = 4;
    row["max7"] = 4;

    // 
    row["prop8"] = "enr/lvl";
    row["par8"] = "";
    row["min8"] = 4;
    row["max8"] = 4;

    // 
    row["prop9"] = "att-skill";
    row["par9"] = 112;
    row["min9"] = 35;
    row["max9"] = 50;

  }

  // Arioc's Needle
  if (row["index"] === "Arioc's Needle") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 300;
    row["max1"] = 500;

    //
    row["prop2"] = "deadly";
    row["par2"] = "";
    row["min2"] = 100;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg-pois";
    row["par3"] = "";
    row["min3"] = 300;
    row["max3"] = 500;

    // 
    row["prop4"] = "swing3";
    row["par4"] = "";
    row["min4"] = 40;
    row["max4"] = 40;

    // 
    row["prop5"] = "ignore-ac";
    row["par5"] = "";
    row["min5"] = 1;
    row["max5"] = 1;

    // 
    row["prop6"] = "dmg-ltng";
    row["par6"] = "";
    row["min6"] = 1;
    row["max6"] = 1000;

  }

  // Mang Song's Lesson
  if (row["index"] === "Mang Song's Lesson") {

    //
    row["prop1"] = "extra-fire";
    row["par1"] = "";
    row["min1"] = 20;
    row["max1"] = 30;

    //
    row["prop2"] = "extra-ltng";
    row["par2"] = "";
    row["min2"] = 20;
    row["max2"] = 30;

    // 
    row["prop3"] = "extra-cold";
    row["par3"] = "";
    row["min3"] = 20;
    row["max3"] = 30;

    // 
    row["prop4"] = "pierce-fire";
    row["par4"] = "";
    row["min4"] = 15;
    row["max4"] = 20;

    // 
    row["prop5"] = "pierce-ltng";
    row["par5"] = "";
    row["min5"] = 15;
    row["max5"] = 20;

    // 
    row["prop6"] = "pierce-cold";
    row["par6"] = "";
    row["min6"] = 15;
    row["max6"] = 20;

    // 
    row["prop7"] = "regen-mana";
    row["par7"] = "";
    row["min7"] = 100;
    row["max7"] = 100;

  }

  // Stormlash
  if (row["index"] === "Stormlash") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 300;
    row["max1"] = 500;

    //
    row["prop2"] = "swing3";
    row["par2"] = "";
    row["min2"] = 40;
    row["max2"] = 40;

    // 
    row["prop3"] = "dmg-ltng";
    row["par3"] = "";
    row["min3"] = 1;
    row["max3"] = 1000;

    // 
    row["prop4"] = "crush";
    row["par4"] = "";
    row["min4"] = 50;
    row["max4"] = 50;

    // 
    row["prop5"] = "abs-ltng%";
    row["par5"] = "";
    row["min5"] = 10;
    row["max5"] = 15;

    // 
    row["prop6"] = "att-skill";
    row["par6"] = 245;
    row["min6"] = 35;
    row["max6"] = 50;

    // 
    row["prop7"] = "att-skill";
    row["par7"] = 42;
    row["min7"] = 35;
    row["max7"] = 10;

    // 
    row["prop8"] = "thorns/lvl";
    row["par8"] = "";
    row["min8"] = 35;
    row["max8"] = 35;

  }

  // Tomb Reaver
  if (row["index"] === "Tomb Reaver") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-undead";
    row["par2"] = "";
    row["min2"] = 350;
    row["max2"] = 500;

    // 
    row["prop3"] = "dmg-fire";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "dmg-norm";
    row["par4"] = "";
    row["min4"] = 50;
    row["max4"] = 100;

    // 
    row["prop5"] = "swing3";
    row["par5"] = "";
    row["min5"] = 60;
    row["max5"] = 60;

    // 
    row["prop6"] = "att-undead";
    row["par6"] = "";
    row["min6"] = 350;
    row["max6"] = 500;

    // 
    row["prop7"] = "sock";
    row["par7"] = "";
    row["min7"] = 1;
    row["max7"] = 3;

    // 
    row["prop8"] = "heal-kill";
    row["par8"] = "";
    row["min8"] = 15;
    row["max8"] = 20;

    // 
    row["prop9"] = "mag%";
    row["par9"] = "";
    row["min9"] = 100;
    row["max9"] = 100;

    // 
    row["prop10"] = "reanimate";
    row["par10"] = 1;
    row["min10"] = 10;
    row["max10"] = 10;

    // 
    row["prop11"] = "light";
    row["par11"] = 1;
    row["min11"] = 4;
    row["max11"] = 4;

    // 
    row["prop12"] = "aura";
    row["par12"] = "Sanctuary";
    row["min12"] = 10;
    row["max12"] = 20;

  }

  // Azurewrath
  if (row["index"] === "Azurewrath") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 300;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-mag";
    row["par2"] = "";
    row["min2"] = 250;
    row["max2"] = 500;

    // 
    row["prop3"] = "dmg-cold";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "light";
    row["par4"] = "";
    row["min4"] = 3;
    row["max4"] = 3;

    // 
    row["prop5"] = "swing3";
    row["par5"] = "";
    row["min5"] = 40;
    row["max5"] = 40;

    // 
    row["prop6"] = "aura";
    row["par6"] = 122;
    row["min6"] = 10;
    row["max6"] = 14;

    // 
    row["prop7"] = "allskills";
    row["par7"] = "";
    row["min7"] = 0;
    row["max7"] = 0;

    // 
    row["prop8"] = "allskills";
    row["par8"] = "";
    row["min8"] = 0;
    row["max8"] = 0;

    // 
    row["prop9"] = "allskills";
    row["par9"] = "";
    row["min9"] = 0;
    row["max9"] = 0;

    // 
    row["prop10"] = "allskills";
    row["par10"] = "";
    row["min10"] = 0;
    row["max10"] = 0;

  }

  // The Cranium Basher
  if (row["index"] === "The Cranium Basher") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg-mag";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "crush";
    row["par4"] = "";
    row["min4"] = 100;
    row["max4"] = 100;

    // 
    row["prop5"] = "att-skill";
    row["par5"] = 66;
    row["min5"] = 35;
    row["max5"] = 1;

    // 
    row["prop6"] = "swing2";
    row["par6"] = "";
    row["min6"] = 25;
    row["max6"] = 25;

    // 
    row["prop7"] = "str/lvl";
    row["par7"] = "";
    row["min7"] = 4;
    row["max7"] = 4;

    // 
    row["prop8"] = "indestruct";
    row["par8"] = "";
    row["min8"] = 1;
    row["max8"] = 1;

  }

  // The Scalper
  if (row["index"] === "The Scalper") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg%/lvl";
    row["par3"] = "";
    row["min3"] = 45;
    row["max3"] = 45;

    // 
    row["prop4"] = "openwounds";
    row["par4"] = "";
    row["min4"] = 60;
    row["max4"] = 60;

    // 
    row["prop5"] = "att-skill";
    row["par5"] = 87;
    row["min5"] = 35;
    row["max5"] = 1;

    // 
    row["prop6"] = "swing2";
    row["par6"] = "";
    row["min6"] = 25;
    row["max6"] = 25;

    // 
    row["prop7"] = "lifesteal";
    row["par7"] = "";
    row["min7"] = 5;
    row["max7"] = 15;

    // 
    row["prop8"] = "mana-kill";
    row["par8"] = "";
    row["min8"] = 5;
    row["max8"] = 15;

    //
    row["prop9"] = "dmg-mag";
    row["par9"] = "";
    row["min9"] = 250;
    row["max9"] = 500;

    //
    row["prop10"] = "dmg-ltng";
    row["par10"] = "";
    row["min10"] = 1;
    row["max10"] = 1000;

  }

  // Demon Machine
  if (row["index"] === "Demon Machine") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg%/lvl";
    row["par3"] = "";
    row["min3"] = 40;
    row["max3"] = 40;

    // 
    row["prop4"] = "pierce";
    row["par4"] = "";
    row["min4"] = 70;
    row["max4"] = 70;

    // 
    row["prop5"] = "dmg-demon";
    row["par5"] = "";
    row["min5"] = 350;
    row["max5"] = 500;

    // 
    row["prop6"] = "swing2";
    row["par6"] = "";
    row["min6"] = 40;
    row["max6"] = 40;

    // 
    row["prop7"] = "explosivearrow";
    row["par7"] = "";
    row["min7"] = 10;
    row["max7"] = 10;

    // 
    row["prop8"] = "att";
    row["par8"] = "";
    row["min8"] = 250;
    row["max8"] = 500;


    // 
    row["prop9"] = "ac";
    row["par9"] = "";
    row["min9"] = 250;
    row["max9"] = 500;

    // 
    row["prop10"] = "mana";
    row["par10"] = "";
    row["min10"] = 100;
    row["max10"] = 150;

    //
    row["prop11"] = "dmg-fire";
    row["par11"] = "";
    row["min11"] = 250;
    row["max11"] = 500;

    //
    row["prop12"] = "dmg-ltng";
    row["par12"] = "";
    row["min12"] = 1;
    row["max12"] = 1000;


  }

  // Guardian Naga
  if (row["index"] === "Guardian Naga") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg%/lvl";
    row["par3"] = "";
    row["min3"] = 25;
    row["max3"] = 25;

    // 
    row["prop4"] = "dmg-pois";
    row["par4"] = "";
    row["min4"] = 150;
    row["max4"] = 400;

    // 
    row["prop5"] = "att-skill";
    row["par5"] = 92;
    row["min5"] = 35;
    row["max5"] = 45;

    // 
    row["prop6"] = "res-pois";
    row["par6"] = "";
    row["min6"] = 40;
    row["max6"] = 90;

    // 
    row["prop7"] = "res-all";
    row["par7"] = "";
    row["min7"] = -10;
    row["max7"] = -30;

    // 
    row["prop8"] = "thorns/lvl";
    row["par8"] = "";
    row["min8"] = 35;
    row["max8"] = 35;

    //
    row["prop9"] = "dmg-ltng";
    row["par9"] = "";
    row["min9"] = 1;
    row["max9"] = 1000;

  }

  // Swordguard
  if (row["index"] === "Swordguard") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg%/lvl";
    row["par3"] = "";
    row["min3"] = 25;
    row["max3"] = 25;

    // 
    row["prop4"] = "ac/lvl";
    row["par4"] = "";
    row["min4"] = 45;
    row["max4"] = 45;

    // 
    row["prop5"] = "ease";
    row["par5"] = "";
    row["min5"] = -50;
    row["max5"] = -50;

    // 
    row["prop6"] = "balance2";
    row["par6"] = "";
    row["min6"] = 20;
    row["max6"] = 20;

    // 
    row["prop7"] = "block";
    row["par7"] = "";
    row["min7"] = 50;
    row["max7"] = 50;

    // 
    row["prop8"] = "ac-hth";
    row["par8"] = "";
    row["min8"] = 200;
    row["max8"] = 250;

    // 
    row["prop9"] = "ac-miss";
    row["par9"] = "";
    row["min9"] = 150;
    row["max9"] = 500;

  }

  // Bloodtree Stump
  if (row["index"] === "Bloodtree Stump") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg%/lvl";
    row["par3"] = "";
    row["min3"] = 35;
    row["max3"] = 35;

    // 
    row["prop4"] = "crush";
    row["par4"] = "";
    row["min4"] = 60;
    row["max4"] = 60;

    // 
    row["prop5"] = "str/lvl";
    row["par5"] = "";
    row["min5"] = 4;
    row["max5"] = 4;

    // 
    row["prop6"] = "skilltab";
    row["par6"] = 13;
    row["min6"] = 4;
    row["max6"] = 10;

  }

  // Todesfaelle Flamme
  if (row["index"] === "Todesfaelle Flamme") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg-fire";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "abs-fire%";
    row["par4"] = "";
    row["min4"] = 5;
    row["max4"] = 15;

    // 
    row["prop5"] = "att-skill";
    row["par5"] = 47;
    row["min5"] = 50;
    row["max5"] = 50;

    // 
    row["prop6"] = "res-fire";
    row["par6"] = "";
    row["min6"] = 40;
    row["max6"] = 90;

    // 
    row["prop7"] = "res-all";
    row["par7"] = "";
    row["min7"] = -10;
    row["max7"] = -30;

    // 
    row["prop8"] = "charged";
    row["par8"] = "Enchant";
    row["min8"] = 75;
    row["max8"] = 50;

    //
    row["prop9"] = "dmg%/lvl";
    row["par9"] = "";
    row["min9"] = 35;
    row["max9"] = 35;

  }

  // Goldstrike Arch
  if (row["index"] === "Godstrike Arch") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg-mag";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "dmg-demon";
    row["par4"] = "";
    row["min4"] = 150;
    row["max4"] = 500;

    // 
    row["prop5"] = "hit-skill";
    row["par5"] = 121;
    row["min5"] = 35;
    row["max5"] = 50;

    // 
    row["prop6"] = "dmg-undead";
    row["par6"] = "";
    row["min6"] = 150;
    row["max6"] = 500;

    // 
    row["prop7"] = "regen";
    row["par7"] = "";
    row["min7"] = 15;
    row["max7"] = 30;

    // 
    row["prop8"] = "att%/lvl";
    row["par8"] = "";
    row["min8"] = 10;
    row["max8"] = 10;

    // 
    row["prop9"] = "dmg%/lvl";
    row["par9"] = "";
    row["min9"] = 20;
    row["max9"] = 20;

    //
    row["prop10"] = "dmg-ltng";
    row["par10"] = "";
    row["min10"] = 1;
    row["max10"] = 1000;

  }

  // Baezil's Vortex
  if (row["index"] === "Baezil's Vortex") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg-ltng";
    row["par3"] = "";
    row["min3"] = 1;
    row["max3"] = 1000;

    // 
    row["prop4"] = "mana";
    row["par4"] = "";
    row["min4"] = 100;
    row["max4"] = 150;

    // 
    row["prop5"] = "att-skill";
    row["par5"] = 48;
    row["min5"] = 35;
    row["max5"] = 50;

    // 
    row["prop6"] = "swing2";
    row["par6"] = "";
    row["min6"] = 25;
    row["max6"] = 25;

    // 
    row["prop7"] = "res-ltng";
    row["par7"] = "";
    row["min7"] = 40;
    row["max7"] = 90;

    // 
    row["prop8"] = "res-all";
    row["par8"] = "";
    row["min8"] = -10;
    row["max8"] = -30;

    // 
    row["prop9"] = "charged";
    row["par9"] = "Static Field";
    row["min9"] = 50;
    row["max9"] = 10;

    //
    row["prop10"] = "dmg%/lvl";
    row["par10"] = "";
    row["min10"] = 35;
    row["max10"] = 35;

  }

  // Grim's Burning Dead
  if (row["index"] === "Grim's Burning Dead") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg-fire";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "nec";
    row["par4"] = "";
    row["min4"] = 3;
    row["max4"] = 4;

    // 
    row["prop5"] = "reduce-ac";
    row["par5"] = 66;
    row["min5"] = 50;
    row["max5"] = 50;

    // 
    row["prop6"] = "ac";
    row["par6"] = "";
    row["min6"] = 250;
    row["max6"] = 500;

    // 
    row["prop7"] = "att";
    row["par7"] = "";
    row["min7"] = 250;
    row["max7"] = 500;

    // 
    row["prop8"] = "ease";
    row["par8"] = "";
    row["min8"] = -50;
    row["max8"] = -50;

    // 
    row["prop9"] = "thorns/lvl";
    row["par9"] = "";
    row["min9"] = 35;
    row["max9"] = 35;

    // 
    row["prop10"] = "res-fire";
    row["par10"] = "";
    row["min10"] = 40;
    row["max10"] = 90;

    // 
    row["prop11"] = "res-all";
    row["par11"] = "";
    row["min11"] = -10;
    row["max11"] = -30;

    //
    row["prop12"] = "dmg%/lvl";
    row["par12"] = "";
    row["min12"] = 35;
    row["max12"] = 35;

  }

  // The Minotaur
  if (row["index"] === "The Minataur") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg-mag";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "crush";
    row["par4"] = "";
    row["min4"] = 60;
    row["max4"] = 60;

    // 
    row["prop5"] = "dmg%/lvl";
    row["par5"] = "";
    row["min5"] = 25;
    row["max5"] = 25;

    // 
    row["prop6"] = "nofreeze";
    row["par6"] = "";
    row["min6"] = 1;
    row["max6"] = 1;

    // 
    row["prop7"] = "stupidity";
    row["par7"] = "";
    row["min7"] = 2;
    row["max7"] = 2;

    // 
    row["prop8"] = "slow";
    row["par8"] = "";
    row["min8"] = 50;
    row["max8"] = 50;

    // 
    row["prop9"] = "str/lvl";
    row["par9"] = "";
    row["min9"] = 4;
    row["max9"] = 4;

  }

  // Cloudcrack
  if (row["index"] === "Cloudcrack") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg-ltng";
    row["par3"] = "";
    row["min3"] = 1;
    row["max3"] = 1000;

    // 
    row["prop4"] = "dmg%/lvl";
    row["par4"] = "";
    row["min4"] = 20;
    row["max4"] = 20;

    // 
    row["prop5"] = "att-skill";
    row["par5"] = 121;
    row["min5"] = 35;
    row["max5"] = 50;

    // 
    row["prop6"] = "res-ltng-max";
    row["par6"] = "";
    row["min6"] = 10;
    row["max6"] = 15;

    // 
    row["prop7"] = "ac";
    row["par7"] = "";
    row["min7"] = 150;
    row["max7"] = 500;

    // 
    row["prop8"] = "thorns/lvl";
    row["par8"] = "";
    row["min8"] = 30;
    row["max8"] = 30;

    // 
    row["prop9"] = "nec";
    row["par9"] = "";
    row["min9"] = 2;
    row["max9"] = 3;

    // 
    row["prop10"] = "light";
    row["par10"] = "";
    row["min10"] = 2;
    row["max10"] = 3;

  }

  // The Gavel of Pain
  if (row["index"] === "The Gavel of Pain") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg-mag";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "dmg%/lvl";
    row["par4"] = "";
    row["min4"] = 25;
    row["max4"] = 25;

    // 
    row["prop5"] = "att-skill";
    row["par5"] = 66;
    row["min5"] = 35;
    row["max5"] = 1;

    // 
    row["prop6"] = "gethit-skill";
    row["par6"] = "Iron Maiden";
    row["min6"] = 40;
    row["max6"] = 50;

    // 
    row["prop7"] = "thorns/lvl";
    row["par7"] = "";
    row["min7"] = 30;
    row["max7"] = 30;

    // 
    row["prop8"] = "indestruct";
    row["par8"] = "";
    row["min8"] = 1;
    row["max8"] = 1;

    // 
    row["prop9"] = "charged";
    row["par9"] = "Bone Wall";
    row["min9"] = 100;
    row["max9"] = 35;

  }

  // Pompeii's Wrath
  if (row["index"] === "Pompe's Wrath") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg-fire";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "slow";
    row["par4"] = "";
    row["min4"] = 50;
    row["max4"] = 50;

    // 
    row["prop5"] = "att-skill";
    row["par5"] = 244;
    row["min5"] = 35;
    row["max5"] = 50;

    // 
    row["prop6"] = "knock";
    row["par6"] = "";
    row["min6"] = 1;
    row["max6"] = 1;

    // 
    row["prop7"] = "dmg%/lvl";
    row["par7"] = "";
    row["min7"] = 35;
    row["max7"] = 35;

    //
    row["prop8"] = "dmg-ltng";
    row["par8"] = "";
    row["min8"] = 1;
    row["max8"] = 1000;

  }

  // Deathbit
  if (row["index"] === "Deathbit") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg-mag";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "deadly";
    row["par4"] = "";
    row["min4"] = 60;
    row["max4"] = 60;

    // 
    row["prop5"] = "att";
    row["par5"] = "";
    row["min5"] = 250;
    row["max5"] = 500;

    // 
    row["prop6"] = "swing2";
    row["par6"] = "";
    row["min6"] = 20;
    row["max6"] = 20;

    // 
    row["prop7"] = "lifesteal";
    row["par7"] = "";
    row["min7"] = 5;
    row["max7"] = 15;

    // 
    row["prop8"] = "manasteal";
    row["par8"] = "";
    row["min8"] = 5;
    row["max8"] = 15;

    // 
    row["prop9"] = "dmg%/lvl";
    row["par9"] = "";
    row["min9"] = 35;
    row["max9"] = 35;

    //
    row["prop10"] = "dmg-ltng";
    row["par10"] = "";
    row["min10"] = 1;
    row["max10"] = 1000;

  }

  // Husoldal Evo
  if (row["index"] === "Husoldal Evo") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg-mag";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "dmg%/lvl";
    row["par4"] = "";
    row["min4"] = 45;
    row["max4"] = 45;

    // 
    row["prop5"] = "att";
    row["par5"] = "";
    row["min5"] = 250;
    row["max5"] = 500;

    // 
    row["prop6"] = "swing2";
    row["par6"] = "";
    row["min6"] = 25;
    row["max6"] = 25;

    // 
    row["prop7"] = "regen";
    row["par7"] = "";
    row["min7"] = 20;
    row["max7"] = 40;

    // 
    row["prop8"] = "noheal";
    row["par8"] = "";
    row["min8"] = 1;
    row["max8"] = 1;

  }

  // The Vile Husk
  if (row["index"] === "The Vile Husk") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg%/lvl";
    row["par3"] = "";
    row["min3"] = 20;
    row["max3"] = 20;

    // 
    row["prop4"] = "dmg-und/lvl";
    row["par4"] = 60;

    // 
    row["prop5"] = "att-und/lvl";
    row["par5"] = 20;

    // 
    row["prop6"] = "dmg-pois";
    row["par6"] = "";
    row["min6"] = 250;
    row["max6"] = 500;

    // 
    row["prop7"] = "res-pois";
    row["par7"] = "";
    row["min7"] = 40;
    row["max7"] = 90;

    // 
    row["prop8"] = "res-all";
    row["par8"] = "";
    row["min8"] = -10;
    row["max8"] = -30;

    // 
    row["prop9"] = "att-skill";
    row["par9"] = 66;
    row["min9"] = 35;
    row["max9"] = 1;

  }

  // Bing Sz Wang
  if (row["index"] === "Bing Sz Wang") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg-cold";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "ease";
    row["par4"] = "";
    row["min4"] = -30;
    row["max4"] = -30;

    // 
    row["prop5"] = "att-skill";
    row["par5"] = 64;
    row["min5"] = 35;
    row["max5"] = 50;

    // 
    row["prop6"] = "freeze";
    row["par6"] = "";
    row["min6"] = 2;
    row["max6"] = 2;

    // 
    row["prop7"] = "str/lvl";
    row["par7"] = "";
    row["min7"] = 4;
    row["max7"] = 4;

    //
    row["prop8"] = "dmg%/lvl";
    row["par8"] = "";
    row["min8"] = 35;
    row["max8"] = 35;

  }

  // Magewrath
  if (row["index"] === "Magewrath") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg-mag";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "ama";
    row["par4"] = "";
    row["min4"] = 2;
    row["max4"] = 3;

    // 
    row["prop5"] = "stupidity";
    row["par5"] = "";
    row["min5"] = 1;
    row["max5"] = 1;

    // 
    row["prop6"] = "manasteal";
    row["par6"] = "";
    row["min6"] = 15;
    row["max6"] = 15;

    // 
    row["prop7"] = "red-dmg";
    row["par7"] = "";
    row["min7"] = 5;
    row["max7"] = 15;

    // 
    row["prop8"] = "dex/lvl";
    row["par8"] = "";
    row["min8"] = 4;
    row["max8"] = 4;

    // 
    row["prop9"] = "skill";
    row["par9"] = 22;
    row["min9"] = 4;
    row["max9"] = 10;

    // 
    row["prop10"] = "att";
    row["par10"] = "";
    row["min10"] = 250;
    row["max10"] = 500;

    //
    row["prop11"] = "dmg-ltng";
    row["par11"] = "";
    row["min11"] = 1;
    row["max11"] = 1000;

    //
    row["prop12"] = "dmg%/lvl";
    row["par12"] = "";
    row["min12"] = 25;
    row["max12"] = 25;

  }

  // Islestrike
  if (row["index"] === "Islestrike") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg-fire";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "crush";
    row["par4"] = "";
    row["min4"] = 60;
    row["max4"] = 60;

    // 
    row["prop5"] = "dru";
    row["par5"] = "";
    row["min5"] = 2;
    row["max5"] = 3;

    // 
    row["prop6"] = "ac-miss";
    row["par6"] = "";
    row["min6"] = 250;
    row["max6"] = 500;

    // 
    row["prop7"] = "str";
    row["par7"] = "";
    row["min7"] = 15;
    row["max7"] = 30;

    // 
    row["prop8"] = "dex";
    row["par8"] = "";
    row["min8"] = 15;
    row["max8"] = 30;

    // 
    row["prop9"] = "dmg%/lvl";
    row["par9"] = "";
    row["min9"] = 25;
    row["max9"] = 25;


    // 
    row["prop10"] = "skill";
    row["par10"] = 248;
    row["min10"] = 0;
    row["max10"] = 0;

    // 
    row["prop11"] = "skill";
    row["par11"] = 248;
    row["min11"] = 0;
    row["max11"] = 0;

    //
    row["prop12"] = "dmg-ltng";
    row["par12"] = "";
    row["min12"] = 1;
    row["max12"] = 1000;

  }

  // Earthshaker
  if (row["index"] === "Earthshaker") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg-fire";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "dmg%/lvl";
    row["par4"] = "";
    row["min4"] = 25;
    row["max4"] = 25;

    // 
    row["prop5"] = "att-skill";
    row["par5"] = 234;
    row["min5"] = 35;
    row["max5"] = 40;

    // 
    row["prop6"] = "swing2";
    row["par6"] = "";
    row["min6"] = 40;
    row["max6"] = 40;

    // 
    row["prop7"] = "knock";
    row["par7"] = "";
    row["min7"] = 1;
    row["max7"] = 1;

    // 
    row["prop8"] = "stupidity";
    row["par8"] = "";
    row["min8"] = 1;
    row["max8"] = 1;

    // 
    row["prop9"] = "skilltab";
    row["par9"] = 17;
    row["min9"] = 4;
    row["max9"] = 10;

  }

  // Pierre Tombale Couant
  if (row["index"] === "Pierre Tombale Couant") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg-mag";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "deadly";
    row["par4"] = "";
    row["min4"] = 60;
    row["max4"] = 60;

    // 
    row["prop5"] = "dmg%/lvl";
    row["par5"] = "";
    row["min5"] = 25;
    row["max5"] = 25;

    // 
    row["prop6"] = "bar";
    row["par6"] = "";
    row["min6"] = 3;
    row["max6"] = 4;

    // 
    row["prop7"] = "manasteal";
    row["par7"] = "";
    row["min7"] = 5;
    row["max7"] = 15;

    // 
    row["prop8"] = "balance";
    row["par8"] = "";
    row["min8"] = 40;
    row["max8"] = 40;

  }

  // Boneslayer Blade
  if (row["index"] === "Boneslayer Blade") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg-mag";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "dmg-und/lvl";
    row["par4"] = 60;

    // 
    row["prop5"] = "att-und/lvl";
    row["par5"] = 20;

    // 
    row["prop6"] = "swing2";
    row["par6"] = "";
    row["min6"] = 25;
    row["max6"] = 25;

    // 
    row["prop7"] = "gethit-skill";
    row["par7"] = "Holy Bolt";
    row["min7"] = 50;
    row["max7"] = 50;

    // 
    row["prop8"] = "att%";
    row["par8"] = "";
    row["min8"] = 50;
    row["max8"] = 50;

    // 
    row["prop9"] = "str/lvl";
    row["par9"] = "";
    row["min9"] = 4;
    row["max9"] = 4;

  }

  // Lycander's Flank
  if (row["index"] === "Lycander's Flank") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg-ltng";
    row["par3"] = "";
    row["min3"] = 1;
    row["max3"] = 1000;

    // 
    row["prop4"] = "dmg%/lvl";
    row["par4"] = "";
    row["min4"] = 25;
    row["max4"] = 25;

    // 
    row["prop5"] = "ama";
    row["par5"] = "";
    row["min5"] = 3;
    row["max5"] = 4;

    // 
    row["prop6"] = "swing2";
    row["par6"] = "";
    row["min6"] = 40;
    row["max6"] = 40;

    // 
    row["prop7"] = "str/lvl";
    row["par7"] = "";
    row["min7"] = 4;
    row["max7"] = 4;

    // 
    row["prop8"] = "lifesteal";
    row["par8"] = "";
    row["min8"] = 5;
    row["max8"] = 15;

    // 
    row["prop9"] = "ac";
    row["par9"] = "";
    row["min9"] = 250;
    row["max9"] = 500;

  }

  // Athena's Wrath
  if (row["index"] === "Athena's Wrath") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg-mag";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "dru";
    row["par4"] = "";
    row["min4"] = 2;
    row["max4"] = 3;

    // 
    row["prop5"] = "dmg%/lvl";
    row["par5"] = "";
    row["min5"] = 25;
    row["max5"] = 25;

    // 
    row["prop6"] = "swing2";
    row["par6"] = "";
    row["min6"] = 40;
    row["max6"] = 40;

    // 
    row["prop7"] = "dex/lvl";
    row["par7"] = "";
    row["min7"] = 4;
    row["max7"] = 4;

    // 
    row["prop8"] = "heal-kill";
    row["par8"] = "";
    row["min8"] = 5;
    row["max8"] = 15;

  }

  // The Atlantean
  if (row["index"] === "The Atlantian") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg-mag";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "pal";
    row["par4"] = "";
    row["min4"] = 2;
    row["max4"] = 3;

    // 
    row["prop5"] = "att%";
    row["par5"] = "";
    row["min5"] = 100;
    row["max5"] = 250;

    // 
    row["prop6"] = "ac";
    row["par6"] = "";
    row["min6"] = 250;
    row["max6"] = 500;

    // 
    row["prop7"] = "str/lvl";
    row["par7"] = "";
    row["min7"] = 4;
    row["max7"] = 4;

    // 
    row["prop8"] = "dex/lvl";
    row["par8"] = "";
    row["min8"] = 4;
    row["max8"] = 4;

    // 
    row["prop9"] = "dmg-ltng";
    row["par9"] = "";
    row["min9"] = 1;
    row["max9"] = 1000;

    // 
    row["prop10"] = "dmg%/lvl";
    row["par10"] = "";
    row["min10"] = 25;
    row["max10"] = 25;

  }

  // Crainte Vomir
  if (row["index"] === "Crainte Vomir") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg-ltng";
    row["par3"] = "";
    row["min3"] = 1;
    row["max3"] = 1000;

    // 
    row["prop4"] = "dmg%/lvl";
    row["par4"] = "";
    row["min4"] = 25;
    row["max4"] = 25;

    // 
    row["prop5"] = "slow";
    row["par5"] = "";
    row["min5"] = 40;
    row["max5"] = 40;

    // 
    row["prop6"] = "swing2";
    row["par6"] = "";
    row["min6"] = 75;
    row["max6"] = 75;

    // 
    row["prop7"] = "move2";
    row["par7"] = "";
    row["min7"] = 20;
    row["max7"] = 20;

    // 
    row["prop8"] = "red-dmg%";
    row["par8"] = "";
    row["min8"] = 10;
    row["max8"] = 15;

    // 
    row["prop9"] = "dmg-ac";
    row["par9"] = "";
    row["min9"] = -100;
    row["max9"] = -100;

  }

  // Blackleach Blade
  if (row["index"] === "Blackleach Blade") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg-mag";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "dmg%/lvl";
    row["par4"] = "";
    row["min4"] = 25;
    row["max4"] = 25;

    // 
    row["prop5"] = "att-skill";
    row["par5"] = 72;
    row["min5"] = 35;
    row["max5"] = 8;

    // 
    row["prop6"] = "light";
    row["par6"] = "";
    row["min6"] = -2;
    row["max6"] = -2;

    // 
    row["prop7"] = "lifesteal";
    row["par7"] = "";
    row["min7"] = 5;
    row["max7"] = 15;

    // 
    row["prop8"] = "ease";
    row["par8"] = "";
    row["min8"] = -20;
    row["max8"] = -20;

  }

  // Bartucs Cut-Throat
  if (row["index"] === "Cutthroat1") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg-fire";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "dmg-ltng";
    row["par4"] = "";
    row["min4"] = 1;
    row["max4"] = 1000;

    // 
    row["prop5"] = "balance2";
    row["par5"] = "";
    row["min5"] = 30;
    row["max5"] = 30;

    // 
    row["prop6"] = "att%";
    row["par6"] = "";
    row["min6"] = 25;
    row["max6"] = 25;

    // 
    row["prop7"] = "str/lvl";
    row["par7"] = "";
    row["min7"] = 4;
    row["max7"] = 4;

    // 
    row["prop8"] = "dex/lvl";
    row["par8"] = "";
    row["min8"] = 4;
    row["max8"] = 4;

    // 
    row["prop9"] = "lifesteal";
    row["par9"] = "";
    row["min9"] = 5;
    row["max9"] = 15;

    // 
    row["prop10"] = "ass";
    row["par10"] = "";
    row["min10"] = 2;
    row["max10"] = 3;

    //
    row["prop11"] = "dmg%/lvl";
    row["par11"] = "";
    row["min11"] = 35;
    row["max11"] = 35;

  }

  // Lycander's Aim
  if (row["index"] === "Lycander's Aim") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg-ltng";
    row["par3"] = "";
    row["min3"] = 1;
    row["max3"] = 1000;

    // 
    row["prop4"] = "ama";
    row["par4"] = "";
    row["min4"] = 2;
    row["max4"] = 3;

    // 
    row["prop5"] = "manasteal";
    row["par5"] = "";
    row["min5"] = 5;
    row["max5"] = 15;

    // 
    row["prop6"] = "swing2";
    row["par6"] = "";
    row["min6"] = 25;
    row["max6"] = 25;

    // 
    row["prop7"] = "enr/lvl";
    row["par7"] = "";
    row["min7"] = 4;
    row["max7"] = 4;

    // 
    row["prop8"] = "dex/lvl";
    row["par8"] = "";
    row["min8"] = 4;
    row["max8"] = 4;

    // 
    row["prop9"] = "ac";
    row["par9"] = "";
    row["min9"] = 250;
    row["max9"] = 500;

    // 
    row["prop10"] = "skilltab";
    row["par10"] = 0;
    row["min10"] = 4;
    row["max10"] = 10;

    //
    row["prop11"] = "dmg%/lvl";
    row["par11"] = "";
    row["min11"] = 40;
    row["max11"] = 40;

  }

  // The Oculus
  if (row["index"] === "The Oculus") {

    //
    row["prop1"] = "sor";
    row["par1"] = "";
    row["min1"] = 3;
    row["max1"] = 3;

    //
    row["prop2"] = "mana-kill";
    row["par2"] = "";
    row["min2"] = 5;
    row["max2"] = 15;

    // 
    row["prop3"] = "gethit-skill";
    row["par3"] = "Teleport";
    row["min3"] = 40;
    row["max3"] = 1;

    // 
    row["prop4"] = "cast3";
    row["par4"] = "";
    row["min4"] = 40;
    row["max4"] = 40;

    // 
    row["prop5"] = "enr/lvl";
    row["par5"] = "";
    row["min5"] = 4;
    row["max5"] = 4;

    // 
    row["prop6"] = "ac";
    row["par6"] = "";
    row["min6"] = 250;
    row["max6"] = 500;

    // 
    row["prop7"] = "mag%";
    row["par7"] = "";
    row["min7"] = 50;
    row["max7"] = 50;

  }

  // Hand of Blessed Light
  if (row["index"] === "Hand of Blessed Light") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg-mag";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "pal";
    row["par4"] = "";
    row["min4"] = 2;
    row["max4"] = 3;

    // 
    row["prop5"] = "att%";
    row["par5"] = "";
    row["min5"] = 100;
    row["max5"] = 100;

    // 
    row["prop6"] = "regen-mana";
    row["par6"] = "";
    row["min6"] = 100;
    row["max6"] = 100;

    // 
    row["prop7"] = "ac";
    row["par7"] = "";
    row["min7"] = 250;
    row["max7"] = 500;

    // 
    row["prop8"] = "hit-skill";
    row["par8"] = 121;
    row["min8"] = 0;
    row["max8"] = 0;

    // 
    row["prop9"] = "skill";
    row["par9"] = 121;
    row["min9"] = 0;
    row["max9"] = 0;

    // 
    row["prop10"] = "dmg%/lvl";
    row["par10"] = "";
    row["min10"] = 45;
    row["max10"] = 45;

    // 
    row["prop11"] = "hit-skill";
    row["par11"] = "Fist of the Heavens";
    row["min11"] = 0;
    row["max11"] = 0;

  }

  // Moonfall
  if (row["index"] === "Moonfall") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg-fire";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "red-mag";
    row["par4"] = "";
    row["min4"] = 15;
    row["max4"] = 30;

    // 
    row["prop5"] = "att-skill";
    row["par5"] = 56;
    row["min5"] = 35;
    row["max5"] = 50;

    // 
    row["prop6"] = "light";
    row["par6"] = "";
    row["min6"] = 2;
    row["max6"] = 3;

    // 
    row["prop7"] = "dmg%/lvl";
    row["par7"] = "";
    row["min7"] = 25;
    row["max7"] = 25;

    //
    row["prop8"] = "dmg-ltng";
    row["par8"] = "";
    row["min8"] = 1;
    row["max8"] = 1000;

  }

  // Titan's Revenge
  if (row["index"] === "Titan's Revenge") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg-ltng";
    row["par3"] = "";
    row["min3"] = 1;
    row["max3"] = 1000;

    // 
    row["prop4"] = "ama";
    row["par4"] = "";
    row["min4"] = 2;
    row["max4"] = 3;

    // 
    row["prop5"] = "lifesteal";
    row["par5"] = "";
    row["min5"] = 5;
    row["max5"] = 15;

    // 
    row["prop6"] = "move2";
    row["par6"] = "";
    row["min6"] = 40;
    row["max6"] = 40;

    // 
    row["prop7"] = "str/lvl";
    row["par7"] = "";
    row["min7"] = 4;
    row["max7"] = 4;

    // 
    row["prop8"] = "dex/lvl";
    row["par8"] = "";
    row["min8"] = 4;
    row["max8"] = 4;

    // 
    row["prop9"] = "skilltab";
    row["par9"] = 2;
    row["min9"] = 4;
    row["max9"] = 10;

    // 
    row["prop10"] = "dmg%/lvl";
    row["par10"] = "";
    row["min10"] = 35;
    row["max10"] = 35;

  }

  // Blackhand Key
  if (row["index"] === "Blackhand Key") {

    //
    row["prop1"] = "nec";
    row["par1"] = "";
    row["min1"] = 2;
    row["max1"] = 3;

    //
    row["prop2"] = "dmg-to-mana";
    row["par2"] = "";
    row["min2"] = 40;
    row["max2"] = 40;

    // 
    row["prop3"] = "cast3";
    row["par3"] = "";
    row["min3"] = 40;
    row["max3"] = 40;

    // 
    row["prop4"] = "res-fire";
    row["par4"] = "";
    row["min4"] = 40;
    row["max4"] = 90;

    // 
    row["prop5"] = "res-all";
    row["par5"] = "";
    row["min5"] = -10;
    row["max5"] = -30;

    // 
    row["prop6"] = "light";
    row["par6"] = "";
    row["min6"] = -2;
    row["max6"] = -2;

    // 
    row["prop7"] = "mana/lvl";
    row["par7"] = "";
    row["min7"] = 15;
    row["max7"] = 15;

    // 
    row["prop8"] = "charged";
    row["par8"] = "Grim Ward";
    row["min8"] = 50;
    row["max8"] = 18;

  }

  // Cliffkiller
  if (row["index"] === "Cliffkiller") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg-mag";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "ama";
    row["par4"] = "";
    row["min4"] = 2;
    row["max4"] = 3;

    // 
    row["prop5"] = "ac-miss";
    row["par5"] = "";
    row["min5"] = 250;
    row["max5"] = 500;

    // 
    row["prop6"] = "knock";
    row["par6"] = "";
    row["min6"] = 1;
    row["max6"] = 1;

    // 
    row["prop7"] = "dmg-ltng";
    row["par7"] = "";
    row["min7"] = 1;
    row["max7"] = 1000;

    // 
    row["prop8"] = "dmg%/lvl";
    row["par8"] = "";
    row["min8"] = 35;
    row["max8"] = 35;

  }

  // Plague Bearer
  if (row["index"] === "Plague Bearer") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg-pois";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "oskill";
    row["par4"] = "Rabies";
    row["min4"] = 25;
    row["max4"] = 25;

    // 
    row["prop5"] = "att-skill";
    row["par5"] = 92;
    row["min5"] = 35;
    row["max5"] = 40;

    // 
    row["prop6"] = "dmg%/lvl";
    row["par6"] = "";
    row["min6"] = 25;
    row["max6"] = 25;

  }

  // Stormspike
  if (row["index"] === "Stormspike") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg-ltng";
    row["par3"] = "";
    row["min3"] = 1;
    row["max3"] = 1000;

    // 
    row["prop4"] = "gethit-skill";
    row["par4"] = "Charged Bolt";
    row["min4"] = 40;
    row["max4"] = 50;

    // 
    row["prop5"] = "res-ltng/lvl";
    row["par5"] = 8;

    // 
    row["prop6"] = "thorns/lvl";
    row["par6"] = "";
    row["min6"] = 30;
    row["max6"] = 30;

  }

  // The Meat Scraper
  if (row["index"] === "The Meat Scraper") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg%/lvl";
    row["par3"] = "";
    row["min3"] = 40;
    row["max3"] = 40;

    // 
    row["prop4"] = "openwounds";
    row["par4"] = "";
    row["min4"] = 100;
    row["max4"] = 100;

    // 
    row["prop5"] = "lifesteal";
    row["par5"] = "";
    row["min5"] = 10;
    row["max5"] = 15;

    // 
    row["prop6"] = "mag%";
    row["par6"] = "";
    row["min6"] = 40;
    row["max6"] = 40;

    // 
    row["prop7"] = "bar";
    row["par7"] = "";
    row["min7"] = 3;
    row["max7"] = 4;

    // 
    row["prop8"] = "skilltab";
    row["par8"] = 13;
    row["min8"] = 4;
    row["max8"] = 10;

  }

  // Stormrider
  if (row["index"] === "Stormrider") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg-ltng";
    row["par3"] = "";
    row["min3"] = 1;
    row["max3"] = 1000;

    // 
    row["prop4"] = "gethit-skill";
    row["par4"] = 38;
    row["min4"] = 40;
    row["max4"] = 50;

    // 
    row["prop5"] = "att-skill";
    row["par5"] = 38;
    row["min5"] = 35;
    row["max5"] = 50;

    // 
    row["prop6"] = "att-skill";
    row["par6"] = 53;
    row["min6"] = 35;
    row["max6"] = 40;

    // 
    row["prop7"] = "thorns/lvl";
    row["par7"] = "";
    row["min7"] = 20;
    row["max7"] = 20;

    // 
    row["prop8"] = "dmg%/lvl";
    row["par8"] = "";
    row["min8"] = 25;
    row["max8"] = 25;

  }

  // Buriza-Do Kyanon
  if (row["index"] === "Buriza-Do Kyanon") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg-cold";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "dmg%/lvl";
    row["par4"] = "";
    row["min4"] = 40;
    row["max4"] = 40;

    // 
    row["prop5"] = "pierce";
    row["par5"] = "";
    row["min5"] = 100;
    row["max5"] = 100;

    // 
    row["prop6"] = "freeze";
    row["par6"] = "";
    row["min6"] = 3;
    row["max6"] = 3;

    // 
    row["prop7"] = "ac";
    row["par7"] = "";
    row["min7"] = 250;
    row["max7"] = 500;

    // 
    row["prop8"] = "dex/lvl";
    row["par8"] = "";
    row["min8"] = 4;
    row["max8"] = 4;

    // 
    row["prop9"] = "swing3";
    row["par9"] = "";
    row["min9"] = 100;
    row["max9"] = 100;

  }

  // Skull collector
  if (row["index"] === "Skullcollector") {

    //
    row["prop1"] = "oskill";
    row["par1"] = "Bone Spear";
    row["min1"] = 60;
    row["max1"] = 60;

    //
    row["prop2"] = "mana-kill";
    row["par2"] = "";
    row["min2"] = 20;
    row["max2"] = 30;

    // 
    row["prop3"] = "mana%";
    row["par3"] = "";
    row["min3"] = 20;
    row["max3"] = 40;

    // 
    row["prop4"] = "mag%/lvl";
    row["par4"] = 8;

  }

  // Headstriker
  if (row["index"] === "Headstriker") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg-mag";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "dmg%/lvl";
    row["par4"] = "";
    row["min4"] = 25;
    row["max4"] = 25;

    // 
    row["prop5"] = "deadly";
    row["par5"] = "";
    row["min5"] = 100;
    row["max5"] = 100;

    // 
    row["prop6"] = "noheal";
    row["par6"] = "";
    row["min6"] = 1;
    row["max6"] = 1;

    // 
    row["prop7"] = "str/lvl";
    row["par7"] = "";
    row["min7"] = 4;
    row["max7"] = 4;

  }

  // Spellsteel
  if (row["index"] === "Spellsteel") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg-mag";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "cast2";
    row["par4"] = "";
    row["min4"] = 40;
    row["max4"] = 40;

    // 
    row["prop5"] = "ease";
    row["par5"] = "";
    row["min5"] = -60;
    row["max5"] = -60;

    // 
    row["prop6"] = "mana-regen";
    row["par6"] = "";
    row["min6"] = 100;
    row["max6"] = 100;

    // 
    row["prop7"] = "mana";
    row["par7"] = "";
    row["min7"] = 100;
    row["max7"] = 100;

    //
    row["prop8"] = "dmg-ltng";
    row["par8"] = "";
    row["min8"] = 1;
    row["max8"] = 1000;

    // 
    row["prop9"] = "oskill";
    row["par9"] = "Tornado";
    row["min9"] = 50;
    row["max9"] = 50;

    // 
    row["prop10"] = "charged";
    row["par10"] = 225;
    row["min10"] = 40;
    row["max10"] = 0;

    // 
    row["prop11"] = "charged";
    row["par11"] = 101;
    row["min11"] = 40;
    row["max11"] = 0;

    //
    row["prop12"] = "dmg%/lvl";
    row["par12"] = "";
    row["min12"] = 30;
    row["max12"] = 30;

  }

  // Sureshrill Frost
  if (row["index"] === "Sureshrill Frost") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg-cold";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "freeze";
    row["par4"] = "";
    row["min4"] = 3;
    row["max4"] = 3;

    // 
    row["prop5"] = "nofreeze";
    row["par5"] = "";
    row["min5"] = 1;
    row["max5"] = 1;

    // 
    row["prop6"] = "oskill";
    row["par6"] = "Frozen Orb";
    row["min6"] = 50;
    row["max6"] = 50;

    //
    row["prop7"] = "dmg%/lvl";
    row["par7"] = "";
    row["min7"] = 35;
    row["max7"] = 35;

    //
    row["prop8"] = "dmg-ltng";
    row["par8"] = "";
    row["min8"] = 1;
    row["max8"] = 1000;

  }

  // Warpspear
  if (row["index"] === "Warpspear") {

    //
    row["prop1"] = "sor";
    row["par1"] = "";
    row["min1"] = 3;
    row["max1"] = 3;

    //
    row["prop2"] = "ac-miss";
    row["par2"] = "";
    row["min2"] = 250;
    row["max2"] = 500;

    // 
    row["prop3"] = "ignore-ac";
    row["par3"] = "";
    row["min3"] = 1;
    row["max3"] = 1;

    // 
    row["prop4"] = "skill";
    row["par4"] = 58;
    row["min4"] = 4;
    row["max4"] = 10;

    // 
    row["prop5"] = "skill";
    row["par5"] = 43;
    row["min5"] = 4;
    row["max5"] = 10;

    // 
    row["prop6"] = "skill";
    row["par6"] = 54;
    row["min6"] = 4;
    row["max6"] = 10;

    // 
    row["prop7"] = "mana/lvl";
    row["par7"] = "";
    row["min7"] = 15;
    row["max7"] = 15;

  }

  // Spire of Honor
  if (row["index"] === "Spire of Honor") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg-mag";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "dmg-dem/lvl";
    row["par4"] = 25;

    // 
    row["prop5"] = "balance2";
    row["par5"] = "";
    row["min5"] = 35;
    row["max5"] = 35;

    // 
    row["prop6"] = "regen";
    row["par6"] = "";
    row["min6"] = 20;
    row["max6"] = 40;

    // 
    row["prop7"] = "att%";
    row["par7"] = "";
    row["min7"] = 50;
    row["max7"] = 50;

    // 
    row["prop8"] = "ac";
    row["par8"] = "";
    row["min8"] = 250;
    row["max8"] = 500;

    // 
    row["prop9"] = "light";
    row["par9"] = "";
    row["min9"] = 3;
    row["max9"] = 3;

    // 
    row["prop8"] = "pal";
    row["par8"] = "";
    row["min8"] = 3;
    row["max8"] = 4;

  }

  // Butcher's Pupil
  if (row["index"] === "Butcher's Pupil") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg-mag";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "openwounds";
    row["par4"] = "";
    row["min4"] = 60;
    row["max4"] = 60;

    // 
    row["prop5"] = "deadly";
    row["par5"] = "";
    row["min5"] = 50;
    row["max5"] = 50;

    // 
    row["prop6"] = "swing3";
    row["par6"] = "";
    row["min6"] = 40;
    row["max6"] = 40;

    // 
    row["prop7"] = "dmg%/lvl";
    row["par7"] = "";
    row["min7"] = 25;
    row["max7"] = 25;

    // 
    row["prop8"] = "indestruct";
    row["par8"] = "";
    row["min8"] = 1;
    row["max8"] = 1;

    //
    row["prop9"] = "dmg-ltng";
    row["par9"] = "";
    row["min9"] = 1;
    row["max9"] = 1000;

  }

  // Witchwild String
  if (row["index"] === "Whichwild String") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg-mag";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "magicarrow";
    row["par4"] = "";
    row["min4"] = 20;
    row["max4"] = 20;

    // 
    row["prop5"] = "hit-skill";
    row["par5"] = 66;
    row["min5"] = 35;
    row["max5"] = 1;

    // 
    row["prop6"] = "deadly/lvl";
    row["par6"] = 8;

    // 
    row["prop7"] = "sock";
    row["par7"] = "";
    row["min7"] = 2;
    row["max7"] = 2;

    // 
    row["prop8"] = "dmg%/lvl";
    row["par8"] = "";
    row["min8"] = 30;
    row["max8"] = 30;

    //
    row["prop9"] = "dmg-ltng";
    row["par9"] = "";
    row["min9"] = 1;
    row["max9"] = 1000;

  }

  // Blackbog's Sharp
  if (row["index"] === "Blackbog's Sharp") {

    //
    row["prop1"] = "dmg-pois";
    row["par1"] = "";
    row["min1"] = 300;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg-mag";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "slow";
    row["par4"] = "";
    row["min4"] = 50;
    row["max4"] = 50;

    // 
    row["prop5"] = "ac";
    row["par5"] = "";
    row["min5"] = 250;
    row["max5"] = 500;

    // 
    row["prop6"] = "swing3";
    row["par6"] = "";
    row["min6"] = 40;
    row["max6"] = 40;

    // 
    row["prop7"] = "nec";
    row["par7"] = "";
    row["min7"] = 2;
    row["max7"] = 3;

    // 
    row["prop8"] = "skill";
    row["par8"] = 92;
    row["min8"] = 4;
    row["max8"] = 10;

    // 
    row["prop8"] = "skill";
    row["par8"] = 73;
    row["min8"] = 4;
    row["max8"] = 10;

  }

  // Fleshrender
  if (row["index"] === "Fleshrender") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg-fire";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "crush";
    row["par4"] = "";
    row["min4"] = 40;
    row["max4"] = 40;

    // 
    row["prop5"] = "deadly";
    row["par5"] = "";
    row["min5"] = 50;
    row["max5"] = 50;

    // 
    row["prop6"] = "openwounds";
    row["par6"] = "";
    row["min6"] = 60;
    row["max6"] = 60;

    // 
    row["prop7"] = "dru";
    row["par7"] = "";
    row["min7"] = 2;
    row["max7"] = 3;

    // 
    row["prop8"] = "noheal";
    row["par8"] = "";
    row["min8"] = 1;
    row["max8"] = 1;

    // 
    row["prop9"] = "dmg%/lvl";
    row["par9"] = "";
    row["min9"] = 25;
    row["max9"] = 25;

    //
    row["prop10"] = "dmg-ltng";
    row["par10"] = "";
    row["min10"] = 1;
    row["max10"] = 1000;

  }

  // Hone Sundan
  if (row["index"] === "Hone Sundan") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg%/lvl";
    row["par3"] = "";
    row["min3"] = 25;
    row["max3"] = 25;

    // 
    row["prop4"] = "crush";
    row["par4"] = "";
    row["min4"] = 50;
    row["max4"] = 50;

    // 
    row["prop5"] = "sock";
    row["par5"] = "";
    row["min5"] = 3;
    row["max5"] = 3;

    // 
    row["prop6"] = "rep-dur";
    row["par6"] = "";
    row["min6"] = 10;
    row["max6"] = 10;

    //
    row["prop7"] = "dmg-ltng";
    row["par7"] = "";
    row["min7"] = 1;
    row["max7"] = 1000;

  }

  // The Fetid Sprinkler
  if (row["index"] === "The Fetid Sprinkler") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg%/lvl";
    row["par3"] = "";
    row["min3"] = 25;
    row["max3"] = 25;

    // 
    row["prop4"] = "pal";
    row["par4"] = "";
    row["min4"] = 2;
    row["max4"] = 2;

    // 
    row["prop5"] = "hit-skill";
    row["par5"] = "Confuse";
    row["min5"] = 40;
    row["max5"] = 1;

    // 
    row["prop6"] = "hit-skill";
    row["par6"] = "Decrepify";
    row["min6"] = 40;
    row["max6"] = 1;

    // 
    row["prop7"] = "dmg-pois";
    row["par7"] = "";
    row["min7"] = 150;
    row["max7"] = 300;

    // 
    row["prop8"] = "att";
    row["par8"] = "";
    row["min8"] = 150;
    row["max8"] = 300;

    //
    row["prop9"] = "dmg-ltng";
    row["par9"] = "";
    row["min9"] = 1;
    row["max9"] = 1000;

  }

  // Ginther's Rift
  if (row["index"] === "Ginther's Rift") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg-mag";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "red-mag";
    row["par4"] = "";
    row["min4"] = 5;
    row["max4"] = 15;

    // 
    row["prop5"] = "rep-dur";
    row["par5"] = "";
    row["min5"] = 5;
    row["max5"] = 5;

    // 
    row["prop6"] = "swing3";
    row["par6"] = "";
    row["min6"] = 40;
    row["max6"] = 40;

    // 
    row["prop7"] = "dmg%/lvl";
    row["par7"] = "";
    row["min7"] = 25;
    row["max7"] = 25;

    //
    row["prop8"] = "dmg-ltng";
    row["par8"] = "";
    row["min8"] = 1;
    row["max8"] = 1000;

  }

  // Zakarum's Hand
  if (row["index"] === "Zakarum's Hand") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-ltng";
    row["par2"] = "";
    row["min2"] = 1;
    row["max2"] = 1000;

    // 
    row["prop3"] = "dmg-cold";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "dmg%/lvl";
    row["par4"] = "";
    row["min4"] = 25;
    row["max4"] = 25;

    // 
    row["prop5"] = "hit-skill";
    row["par5"] = "Blizzard";
    row["min5"] = 50;
    row["max5"] = 40;

    // 
    row["prop6"] = "manasteal";
    row["par6"] = "";
    row["min6"] = 5;
    row["max6"] = 15;

    // 
    row["prop7"] = "ignore-ac";
    row["par7"] = "";
    row["min7"] = 1;
    row["max7"] = 1;

    // 
    row["prop8"] = "regen-mana";
    row["par8"] = "";
    row["min8"] = 50;
    row["max8"] = 50;

    // 
    row["prop9"] = "pal";
    row["par9"] = "";
    row["min9"] = 2;
    row["max9"] = 2;

  }

  // Coldkill
  if (row["index"] === "Coldkill") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg-cold";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "gethit-skill";
    row["par4"] = "Frost Nova";
    row["min4"] = 40;
    row["max4"] = 40;

    // 
    row["prop5"] = "hit-skill";
    row["par5"] = "Ice Blast";
    row["min5"] = 50;
    row["max5"] = 40;

    // 
    row["prop6"] = "swing3";
    row["par6"] = "";
    row["min6"] = 40;
    row["max6"] = 40;

    // 
    row["prop7"] = "res-cold-max";
    row["par7"] = "";
    row["min7"] = 15;
    row["max7"] = 20;

    // 
    row["prop8"] = "res-cold";
    row["par8"] = "";
    row["min8"] = 40;
    row["max8"] = 90;

    // 
    row["prop9"] = "res-all";
    row["par9"] = "";
    row["min9"] = -10;
    row["max9"] = -30;

    //
    row["prop10"] = "dmg%/lvl";
    row["par10"] = "";
    row["min10"] = 25;
    row["max10"] = 25;

  }

  // Endlesshail
  if (row["index"] === "Endlesshail") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg-cold";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "ac-miss";
    row["par4"] = "";
    row["min4"] = 250;
    row["max4"] = 500;

    // 
    row["prop5"] = "res-cold";
    row["par5"] = "";
    row["min5"] = 40;
    row["max5"] = 90;

    // 
    row["prop6"] = "mana";
    row["par6"] = "";
    row["min6"] = 100;
    row["max6"] = 150;

    // 
    row["prop7"] = "ama";
    row["par7"] = "";
    row["min7"] = 2;
    row["max7"] = 3;

    // 
    row["prop8"] = "dmg%/lvl";
    row["par8"] = "";
    row["min8"] = 30;
    row["max8"] = 30;

    // 
    row["prop9"] = "res-all";
    row["par9"] = "";
    row["min9"] = -10;
    row["max9"] = -30;

  }

  // Pus Spitter
  if (row["index"] === "Pus Spiter") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg-pois";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "ease";
    row["par4"] = "";
    row["min4"] = -60;
    row["max4"] = -60;

    // 
    row["prop5"] = "gethit-skill";
    row["par5"] = "Poison Nova";
    row["min5"] = 40;
    row["max5"] = 40;

    // 
    row["prop6"] = "swing2";
    row["par6"] = "";
    row["min6"] = 25;
    row["max6"] = 25;

    // 
    row["prop7"] = "hit-skill";
    row["par7"] = "Lower Resist";
    row["min7"] = 40;
    row["max7"] = 10;

    // 
    row["prop8"] = "nec";
    row["par8"] = "";
    row["min8"] = 2;
    row["max8"] = 3;

    // 
    row["prop9"] = "dmg%/lvl";
    row["par9"] = "";
    row["min9"] = 25;
    row["max9"] = 25;

  }

  // Arm of King Leoric
  if (row["index"] === "Arm of King Leoric") {

    //
    row["prop1"] = "cast2";
    row["par1"] = "";
    row["min1"] = 20;
    row["max1"] = 20;

    //
    row["prop2"] = "nec";
    row["par2"] = "";
    row["min2"] = 2;
    row["max2"] = 3;

    // 
    row["prop3"] = "mana/lvl";
    row["par3"] = "";
    row["min3"] = 25;
    row["max3"] = 25;

    // 
    row["prop4"] = "gethit-skill";
    row["par4"] = "Bone Prison";
    row["min4"] = 40;
    row["max4"] = 2;

    // 
    row["prop5"] = "gethit-skill";
    row["par5"] = "Bone Spirit";
    row["min5"] = 50;
    row["max5"] = 40;

    // 
    row["prop6"] = "mana-kill";
    row["par6"] = "";
    row["min6"] = 4;
    row["max6"] = 15;

  }

  // Heart Carver
  if (row["index"] === "Heart Carver") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg%/lvl";
    row["par3"] = "";
    row["min3"] = 25;
    row["max3"] = 25;

    // 
    row["prop4"] = "deadly";
    row["par4"] = "";
    row["min4"] = 100;
    row["max4"] = 100;

    // 
    row["prop5"] = "ignore-ac";
    row["par5"] = "";
    row["min5"] = 1;
    row["max5"] = 1;

    // 
    row["prop6"] = "mag%/lvl";
    row["par6"] = "";
    row["min6"] = 7;
    row["max6"] = 7;

    // 
    row["prop7"] = "oskill";
    row["par7"] = "Find Item";
    row["min7"] = 30;
    row["max7"] = 30;

    //
    row["prop8"] = "dmg-ltng";
    row["par8"] = "";
    row["min8"] = 1;
    row["max8"] = 1000;

    //
    row["prop9"] = "dmg-mag";
    row["par9"] = "";
    row["min9"] = 250;
    row["max9"] = 500;

  }

  // Soulfeast Tine
  if (row["index"] === "Soulfeast Tine") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg%/lvl";
    row["par3"] = "";
    row["min3"] = 30;
    row["max3"] = 30;

    // 
    row["prop4"] = "att";
    row["par4"] = "";
    row["min4"] = 250;
    row["max4"] = 500;

    // 
    row["prop5"] = "ease";
    row["par5"] = "";
    row["min5"] = -20;
    row["max5"] = -20;

    // 
    row["prop6"] = "lifesteal";
    row["par6"] = "";
    row["min6"] = 5;
    row["max6"] = 15;

    // 
    row["prop7"] = "manasteal";
    row["par7"] = "";
    row["min7"] = 5;
    row["max7"] = 15;

    // 
    row["prop8"] = "move2";
    row["par8"] = "";
    row["min8"] = 40;
    row["max8"] = 40;

    //
    row["prop9"] = "dmg-mag";
    row["par9"] = "";
    row["min9"] = 250;
    row["max9"] = 500;

    //
    row["prop10"] = "dmg-ltng";
    row["par10"] = "";
    row["min10"] = 1;
    row["max10"] = 1000;

  }

  // Carin Shard
  if (row["index"] === "Carin Shard") {

    //
    row["prop1"] = "mana/lvl";
    row["par1"] = "";
    row["min1"] = 25;
    row["max1"] = 25;

    //
    row["prop2"] = "nec";
    row["par2"] = "";
    row["min2"] = 2;
    row["max2"] = 3;

    // 
    row["prop3"] = "cast2";
    row["par3"] = "";
    row["min3"] = 20;
    row["max3"] = 20;

    // 
    row["prop4"] = "balance2";
    row["par4"] = "";
    row["min4"] = 40;
    row["max4"] = 40;

    // 
    row["prop5"] = "regen";
    row["par5"] = "";
    row["min5"] = 5;
    row["max5"] = 15;

    // 
    row["prop6"] = "red-dmg";
    row["par6"] = "";
    row["min6"] = 5;
    row["max6"] = 15;

    // 
    row["prop7"] = "enr/lvl";
    row["par7"] = "";
    row["min7"] = 4;
    row["max7"] = 4;

  }

  // Warlord's Trust
  if (row["index"] === "Warlord's Trust") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg%/lvl";
    row["par3"] = "";
    row["min3"] = 30;
    row["max3"] = 30;

    // 
    row["prop4"] = "regen";
    row["par4"] = "";
    row["min4"] = 20;
    row["max4"] = 40;

    // 
    row["prop5"] = "ac";
    row["par5"] = "";
    row["min5"] = 250;
    row["max5"] = 500;

    // 
    row["prop6"] = "rep-dur";
    row["par6"] = "";
    row["min6"] = 5;
    row["max6"] = 5;

    // 
    row["prop7"] = "str/lvl";
    row["par7"] = "";
    row["min7"] = 4;
    row["max7"] = 4;

    //
    row["prop8"] = "dmg-ltng";
    row["par8"] = "";
    row["min8"] = 1;
    row["max8"] = 1000;

    //
    row["prop9"] = "dmg-mag";
    row["par9"] = "";
    row["min9"] = 250;
    row["max9"] = 500;

  }

  // Chromatic Ire
  if (row["index"] === "Chromatic Ire") {

    //
    row["prop1"] = "sor";
    row["par1"] = "";
    row["min1"] = 3;
    row["max1"] = 3;

    //
    row["prop2"] = "cast2";
    row["par2"] = "";
    row["min2"] = 40;
    row["max2"] = 40;

    // 
    row["prop3"] = "thorns/lvl";
    row["par3"] = "";
    row["min3"] = 35;
    row["max3"] = 35;

    // 
    row["prop4"] = "skill";
    row["par4"] = 65;
    row["min4"] = 1;
    row["max4"] = 4;

    // 
    row["prop5"] = "skill";
    row["par5"] = 63;
    row["min5"] = 1;
    row["max5"] = 4;

    // 
    row["prop6"] = "skill";
    row["par6"] = 61;
    row["min6"] = 1;
    row["max6"] = 4;

  }

  // Blade of Ali Baba
  if (row["index"] === "Blade of Ali Baba") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg%/lvl";
    row["par3"] = "";
    row["min3"] = 35;
    row["max3"] = 35;

    // 
    row["prop4"] = "gold%/lvl";
    row["par4"] = 20;

    // 
    row["prop5"] = "mag%/lvl";
    row["par5"] = 8;

    // 
    row["prop6"] = "mana";
    row["par6"] = "";
    row["min6"] = 15;
    row["max6"] = 50;

    // 
    row["prop7"] = "dex/lvl";
    row["par7"] = "";
    row["min7"] = 4;
    row["max7"] = 4;

    // 
    row["prop8"] = "sock";
    row["par8"] = "";
    row["min8"] = 2;
    row["max8"] = 2;

    //
    row["prop9"] = "dmg-fire";
    row["par9"] = "";
    row["min9"] = 250;
    row["max9"] = 500;

    //
    row["prop10"] = "dmg-cold";
    row["par10"] = "";
    row["min10"] = 250;
    row["max10"] = 500;

  }

  // Dark Clan Crusher
  if (row["index"] === "Dark Clan Crusher") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg-demon";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "att-demon";
    row["par4"] = "";
    row["min4"] = 250;
    row["max4"] = 500;

    // 
    row["prop5"] = "att%";
    row["par5"] = "";
    row["min5"] = 25;
    row["max5"] = 50;

    // 
    row["prop6"] = "heal-kill";
    row["par6"] = "";
    row["min6"] = 15;
    row["max6"] = 30;

    // 
    row["prop7"] = "dru";
    row["par7"] = "";
    row["min7"] = 2;
    row["max7"] = 3;

    // 
    row["prop8"] = "dmg%/lvl";
    row["par8"] = "";
    row["min8"] = 25;
    row["max8"] = 25;

    //
    row["prop9"] = "dmg-ltng";
    row["par9"] = "";
    row["min9"] = 1;
    row["max9"] = 1000;

    //
    row["prop10"] = "dmg-mag";
    row["par10"] = "";
    row["min10"] = 250;
    row["max10"] = 500;

  }

  // Suicide Branch
  if (row["index"] === "Suicide Branch") {

    //
    row["prop1"] = "cast2";
    row["par1"] = "";
    row["min1"] = 50;
    row["max1"] = 50;

    //
    row["prop2"] = "mana%";
    row["par2"] = "";
    row["min2"] = 25;
    row["max2"] = 25;

    // 
    row["prop3"] = "thorns/lvl";
    row["par3"] = "";
    row["min3"] = 30;
    row["max3"] = 30;

    // 
    row["prop4"] = "gethit-skill";
    row["par4"] = "Lower Resist";
    row["min4"] = 40;
    row["max4"] = 10;

    // 
    row["prop5"] = "hp";
    row["par5"] = "";
    row["min5"] = 0;
    row["max5"] = 0;

    // 
    row["prop6"] = "allskills";
    row["par6"] = "";
    row["min6"] = 0;
    row["max6"] = 0;

    // 
    row["prop7"] = "hp";
    row["par7"] = "";
    row["min7"] = 0;
    row["max7"] = 0;

    // 
    row["prop8"] = "allskills";
    row["par8"] = "";
    row["min8"] = 0;
    row["max8"] = 0;

  }

  // Kuko Shakaku
  if (row["index"] === "Kuko Shakaku") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg-fire";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "explosivearrow";
    row["par4"] = "";
    row["min4"] = 10;
    row["max4"] = 10;

    // 
    row["prop5"] = "pierce";
    row["par5"] = "";
    row["min5"] = 50;
    row["max5"] = 50;

    // 
    row["prop6"] = "ama";
    row["par6"] = "";
    row["min6"] = 2;
    row["max6"] = 3;

    // 
    row["prop7"] = "skilltab";
    row["par7"] = 0;
    row["min7"] = 4;
    row["max7"] = 10;

    // 
    row["prop8"] = "dmg%/lvl";
    row["par8"] = "";
    row["min8"] = 40;
    row["max8"] = 40;

  }

  // Hexfire
  if (row["index"] === "Hexfire") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-fire";
    row["par2"] = "";
    row["min2"] = 250;
    row["max2"] = 500;

    // 
    row["prop3"] = "fireskill";
    row["par3"] = "";
    row["min3"] = 3;
    row["max3"] = 3;

    // 
    row["prop4"] = "oskill";
    row["par4"] = "Hydra";
    row["min4"] = 40;
    row["max4"] = 40;

    // 
    row["prop5"] = "ignore-ac";
    row["par5"] = "";
    row["min5"] = 1;
    row["max5"] = 1;

    // 
    row["prop6"] = "res-fire";
    row["par6"] = "";
    row["min6"] = 40;
    row["max6"] = 90;

    // 
    row["prop7"] = "res-fire-max";
    row["par7"] = "";
    row["min7"] = 10;
    row["max7"] = 15;

    // 
    row["prop8"] = "res-all";
    row["par8"] = "";
    row["min8"] = -10;
    row["max8"] = -30;

    //
    row["prop9"] = "dmg%/lvl";
    row["par9"] = "";
    row["min9"] = 30;
    row["max9"] = 30;

    //
    row["prop10"] = "dmg-ltng";
    row["par10"] = "";
    row["min10"] = 1;
    row["max10"] = 1000;

    //
    row["prop11"] = "dmg-mag";
    row["par11"] = "";
    row["min11"] = 250;
    row["max11"] = 500;
  }

  // Kelpie Snare
  if (row["index"] === "Kelpie Snare") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg-cold";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "slow";
    row["par4"] = "";
    row["min4"] = 75;
    row["max4"] = 75;

    // 
    row["prop5"] = "res-fire";
    row["par5"] = "";
    row["min5"] = 40;
    row["max5"] = 90;

    // 
    row["prop6"] = "res-all";
    row["par6"] = "";
    row["min6"] = -10;
    row["max6"] = -30;

    // 
    row["prop7"] = "str/lvl";
    row["par7"] = "";
    row["min7"] = 4;
    row["max7"] = 4;

    // 
    row["prop8"] = "dmg%/lvl";
    row["par8"] = "";
    row["min8"] = 25;
    row["max8"] = 25;

  }

  // Langer Briser
  if (row["index"] === "Langer Briser") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg%/lvl";
    row["par3"] = "";
    row["min3"] = 50;
    row["max3"] = 50;

    // 
    row["prop4"] = "openwounds";
    row["par4"] = "";
    row["min4"] = 60;
    row["max4"] = 60;

    // 
    row["prop5"] = "dmg-ltng";
    row["par5"] = "";
    row["min5"] = 1;
    row["max5"] = 1000;

    // 
    row["prop6"] = "knock";
    row["par6"] = "";
    row["min6"] = 1;
    row["max6"] = 1;

    // 
    row["prop7"] = "mag%/lvl";
    row["par7"] = "";
    row["min7"] = 7;
    row["max7"] = 7;

  }

  // Spineripper
  if (row["index"] === "Spineripper") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg%/lvl";
    row["par3"] = "";
    row["min3"] = 25;
    row["max3"] = 25;

    // 
    row["prop4"] = "nec";
    row["par4"] = "";
    row["min4"] = 1;
    row["max4"] = 2;

    // 
    row["prop5"] = "noheal";
    row["par5"] = "";
    row["min5"] = 1;
    row["max5"] = 1;

    // 
    row["prop6"] = "swing2";
    row["par6"] = "";
    row["min6"] = 25;
    row["max6"] = 25;

    // 
    row["prop7"] = "ignore-ac";
    row["par7"] = "";
    row["min7"] = 1;
    row["max7"] = 1;

    // 
    row["prop8"] = "lifesteal";
    row["par8"] = "";
    row["min8"] = 5;
    row["max8"] = 15;

    // 
    row["prop9"] = "dex/lvl";
    row["par9"] = "";
    row["min9"] = 4;
    row["max9"] = 4;

    //
    row["prop10"] = "dmg-ltng";
    row["par10"] = "";
    row["min10"] = 1;
    row["max10"] = 1000;

    //
    row["prop11"] = "dmg-mag";
    row["par11"] = "";
    row["min11"] = 250;
    row["max11"] = 500;

  }

  // Riphook
  if (row["index"] === "Riphook") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg%/lvl";
    row["par3"] = "";
    row["min3"] = 40;
    row["max3"] = 40;

    // 
    row["prop4"] = "slow";
    row["par4"] = "";
    row["min4"] = 40;
    row["max4"] = 40;

    // 
    row["prop5"] = "openwounds";
    row["par5"] = "";
    row["min5"] = 50;
    row["max5"] = 50;

    // 
    row["prop6"] = "swing3";
    row["par6"] = "";
    row["min6"] = 50;
    row["max6"] = 50;

    // 
    row["prop7"] = "lifesteal";
    row["par7"] = "";
    row["min7"] = 5;
    row["max7"] = 15;

    // 
    row["prop8"] = "mana";
    row["par8"] = "";
    row["min8"] = 50;
    row["max8"] = 150;

  }

  // Coldsteel Eye
  if (row["index"] === "Coldsteel Eye") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg%/lvl";
    row["par3"] = "";
    row["min3"] = 25;
    row["max3"] = 25;

    // 
    row["prop4"] = "slow";
    row["par4"] = "";
    row["min4"] = 40;
    row["max4"] = 40;

    // 
    row["prop5"] = "stupidity";
    row["par5"] = "";
    row["min5"] = 1;
    row["max5"] = 1;

    // 
    row["prop6"] = "swing2";
    row["par6"] = "";
    row["min6"] = 40;
    row["max6"] = 40;

    // 
    row["prop7"] = "manasteal";
    row["par7"] = "";
    row["min7"] = 5;
    row["max7"] = 15;

    // 
    row["prop8"] = "deadly";
    row["par8"] = "";
    row["min8"] = 60;
    row["max8"] = 60;

    //
    row["prop9"] = "dmg-ltng";
    row["par9"] = "";
    row["min9"] = 1;
    row["max9"] = 1000;

    //
    row["prop10"] = "dmg-mag";
    row["par10"] = "";
    row["min10"] = 250;
    row["max10"] = 500;

  }

  // The Impaler
  if (row["index"] === "The Impaler") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg%/lvl";
    row["par3"] = "";
    row["min3"] = 50;
    row["max3"] = 50;

    // 
    row["prop4"] = "openwounds";
    row["par4"] = "";
    row["min4"] = 100;
    row["max4"] = 100;

    // 
    row["prop5"] = "ignore-ac";
    row["par5"] = "";
    row["min5"] = 1;
    row["max5"] = 1;

    // 
    row["prop6"] = "swing3";
    row["par6"] = "";
    row["min6"] = 40;
    row["max6"] = 40;

    // 
    row["prop7"] = "att";
    row["par7"] = "";
    row["min7"] = 150;
    row["max7"] = 500;

    // 
    row["prop8"] = "noheal";
    row["par8"] = "";
    row["min8"] = 1;
    row["max8"] = 1;

    // 
    row["prop9"] = "ama";
    row["par9"] = "";
    row["min9"] = 2;
    row["max9"] = 3;

    //
    row["prop10"] = "dmg-ltng";
    row["par10"] = "";
    row["min10"] = 1;
    row["max10"] = 1000;

  }

  // Ribcracker
  if (row["index"] === "Ribcracker") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg%/lvl";
    row["par3"] = "";
    row["min3"] = 50;
    row["max3"] = 50;

    // 
    row["prop4"] = "crush";
    row["par4"] = "";
    row["min4"] = 100;
    row["max4"] = 100;

    // 
    row["prop5"] = "balance2";
    row["par5"] = "";
    row["min5"] = 50;
    row["max5"] = 50;

    // 
    row["prop6"] = "swing3";
    row["par6"] = "";
    row["min6"] = 50;
    row["max6"] = 50;

    // 
    row["prop7"] = "ac";
    row["par7"] = "";
    row["min7"] = 250;
    row["max7"] = 500;

    // 
    row["prop8"] = "ac-hth";
    row["par8"] = "";
    row["min8"] = 150;
    row["max8"] = 300;

    // 
    row["prop9"] = "dex/lvl";
    row["par9"] = "";
    row["min9"] = 4;
    row["max9"] = 4;

    //
    row["prop10"] = "dmg-ltng";
    row["par10"] = "";
    row["min10"] = 1;
    row["max10"] = 1000;

    //
    row["prop11"] = "dmg-mag";
    row["par11"] = "";
    row["min11"] = 250;
    row["max11"] = 500;

  }

  // Bloodletter
  if (row["index"] === "Bloodletter") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 100;

    // 
    row["prop3"] = "dmg%/lvl";
    row["par3"] = "";
    row["min3"] = 30;
    row["max3"] = 30;

    // 
    row["prop4"] = "att";
    row["par4"] = "";
    row["min4"] = 150;
    row["max4"] = 500;

    // 
    row["prop5"] = "lifesteal";
    row["par5"] = "";
    row["min5"] = 5;
    row["max5"] = 15;

    // 
    row["prop6"] = "swing2";
    row["par6"] = "";
    row["min6"] = 25;
    row["max6"] = 25;

    // 
    row["prop7"] = "bar";
    row["par7"] = "";
    row["min7"] = 2;
    row["max7"] = 3;

    // 
    row["prop8"] = "skilltab";
    row["par8"] = 13;
    row["min8"] = 4;
    row["max8"] = 10;

    //
    row["prop9"] = "dmg-mag";
    row["par9"] = "";
    row["min9"] = 250;
    row["max9"] = 500;

    //
    row["prop10"] = "dmg-ltng";
    row["par10"] = "";
    row["min10"] = 1;
    row["max10"] = 1000;

  }

  // Razorswitch
  if (row["index"] === "Razorswitch") {

    //
    row["prop1"] = "cast3";
    row["par1"] = "";
    row["min1"] = 40;
    row["max1"] = 40;

    //
    row["prop2"] = "red-mag";
    row["par2"] = "";
    row["min2"] = 15;
    row["max2"] = 30;

    // 
    row["prop3"] = "mana";
    row["par3"] = "";
    row["min3"] = 175;
    row["max3"] = 350;

    // 
    row["prop4"] = "thorns/lvl";
    row["par4"] = "";
    row["min4"] = 35;
    row["max4"] = 35;

    // 
    row["prop5"] = "regen-mana";
    row["par5"] = "";
    row["min5"] = 350;
    row["max5"] = 800;

    // 
    row["prop6"] = "heal-kill";
    row["par6"] = "";
    row["min6"] = 5;
    row["max6"] = 15;

    // 
    row["prop7"] = "allskills";
    row["par7"] = "";
    row["min7"] = 0;
    row["max7"] = 0;

    // 
    row["prop8"] = "allskills";
    row["par8"] = "";
    row["min8"] = 0;
    row["max8"] = 0;

  }

  // Skystrike
  if (row["index"] === "Skystrike") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    //
    row["prop2"] = "dmg%/lvl";
    row["par2"] = "";
    row["min2"] = 40;
    row["max2"] = 40;

    // 
    row["prop3"] = "dmg-ltng";
    row["par3"] = "";
    row["min3"] = 1;
    row["max3"] = 1000;

    // 
    row["prop4"] = "att";
    row["par4"] = "";
    row["min4"] = 150;
    row["max4"] = 500;

    // 
    row["prop5"] = "ama";
    row["par5"] = "";
    row["min5"] = 2;
    row["max5"] = 3;

    // 
    row["prop6"] = "swing3";
    row["par6"] = "";
    row["min6"] = 40;
    row["max6"] = 40;

    // 
    row["prop7"] = "enr/lvl";
    row["par7"] = "";
    row["min7"] = 4;
    row["max7"] = 4;

    // 
    row["prop8"] = "hit-skill";
    row["par8"] = "Meteor";
    row["min8"] = 50;
    row["max8"] = 35;

  }

  // GLOVES

  // The Hand of Broc
  if (row["index"] === "The Hand of Broc") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 10;
    row["max1"] = 20;

    // 
    row["prop2"] = "ac%";
    row["par2"] = "";
    row["min2"] = 20;
    row["max2"] = 120;

    // 
    row["prop3"] = "ac";
    row["par3"] = "";
    row["min3"] = 10;
    row["max3"] = 20;

    // 
    row["prop4"] = "lifesteal";
    row["par4"] = "";
    row["min4"] = 3;
    row["max4"] = 4;

    // 
    row["prop5"] = "manasteal";
    row["par5"] = "";
    row["min5"] = 3;
    row["max5"] = 4;

    // 
    row["prop6"] = "res-pois";
    row["par6"] = "";
    row["min6"] = 30;
    row["max6"] = 50;

    // 
    row["prop7"] = "res-all";
    row["par7"] = "";
    row["min7"] = -10;
    row["max7"] = -20;

    // 
    row["prop8"] = "mana";
    row["par8"] = "";
    row["min8"] = 20;
    row["max8"] = 50;

  }

  // Bloodfist
  if (row["index"] === "Bloodfist") {

    //
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 20;
    row["max1"] = 25;

    // 
    row["prop2"] = "ac%";
    row["par2"] = "";
    row["min2"] = 20;
    row["max2"] = 120;

    // 
    row["prop3"] = "ac";
    row["par3"] = "";
    row["min3"] = 10;
    row["max3"] = 20;

    // 
    row["prop4"] = "swing2";
    row["par4"] = "";
    row["min4"] = 30;
    row["max4"] = 30;

    // 
    row["prop5"] = "balance2";
    row["par5"] = "";
    row["min5"] = 30;
    row["max5"] = 60;

    // 
    row["prop6"] = "str";
    row["par6"] = "";
    row["min6"] = 10;
    row["max6"] = 20;

    // 
    row["prop7"] = "dmg-min";
    row["par7"] = "";
    row["min7"] = 5;
    row["max7"] = 10;

    // 
    row["prop8"] = "dmg-max";
    row["par8"] = "";
    row["min8"] = 10;
    row["max8"] = 15;

  }

  // Chance Guards
  if (row["index"] === "Chance Guards") {

    //
    row["prop1"] = "gold%";
    row["par1"] = "";
    row["min1"] = 300;
    row["max1"] = 300;

    // 
    row["prop2"] = "mag%/lvl";
    row["par2"] = "";
    row["min2"] = 3;
    row["max2"] = 3;

    // 
    row["prop3"] = "ac%";
    row["par3"] = "";
    row["min3"] = 20;
    row["max3"] = 120;

    // 
    row["prop4"] = "ac";
    row["par4"] = "";
    row["min4"] = 20;
    row["max4"] = 120;

    // 
    row["prop5"] = "att%/lvl";
    row["par5"] = "";
    row["min5"] = 1;
    row["max5"] = 1;

    // 
    row["prop6"] = "light";
    row["par6"] = "";
    row["min6"] = 2;
    row["max6"] = 3;

    // 
    row["prop7"] = "block";
    row["par7"] = "";
    row["min7"] = 2;
    row["max7"] = 5;

  }

  // Magefist
  if (row["index"] === "Magefist") {

    //
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 210;
    row["max1"] = 420;

    // 
    row["prop2"] = "ac/lvl";
    row["par2"] = "";
    row["min2"] = 15;
    row["max2"] = 15;

    // 
    row["prop3"] = "fireskill";
    row["par3"] = "";
    row["min3"] = 1;
    row["max3"] = 2;

    // 
    row["prop4"] = "regen-mana";
    row["par4"] = "";
    row["min4"] = 120;
    row["max4"] = 120;

    // 
    row["prop5"] = "dmg-fire";
    row["par5"] = "";
    row["min5"] = 1;
    row["max5"] = 20;

    // 
    row["prop6"] = "res-fire-max";
    row["par6"] = "";
    row["min6"] = 5;
    row["max6"] = 10;

    // 
    row["prop7"] = "cast3";
    row["par7"] = "";
    row["min7"] = 20;
    row["max7"] = 20;

  }

  // Frostburn
  if (row["index"] === "Frostburn") {

    //
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 210;
    row["max1"] = 420;

    // 
    row["prop2"] = "ac/lvl";
    row["par2"] = "";
    row["min2"] = 15;
    row["max2"] = 15;

    // 
    row["prop3"] = "dmg%";
    row["par3"] = "";
    row["min3"] = 5;
    row["max3"] = 15;

    // 
    row["prop4"] = "mana%";
    row["par4"] = "";
    row["min4"] = 50;
    row["max4"] = 50;

    // 
    row["prop5"] = "dmg-cold";
    row["par5"] = "";
    row["min5"] = 1;
    row["max5"] = 20;

    // 
    row["prop6"] = "res-cold-max";
    row["par6"] = "";
    row["min6"] = 5;
    row["max6"] = 10;

    // 
    row["prop7"] = "enr/lvl";
    row["par7"] = "";
    row["min7"] = 7;
    row["max7"] = 7;

  }

  // Steelrend
  if (row["index"] === "Steelrend") {

    //
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 210;
    row["max1"] = 420;

    // 
    row["prop2"] = "dmg%";
    row["par2"] = "";
    row["min2"] = 100;
    row["max2"] = 150;

    // 
    row["prop3"] = "crush";
    row["par3"] = "";
    row["min3"] = 20;
    row["max3"] = 30;

    // 
    row["prop4"] = "str/lvl";
    row["par4"] = "";
    row["min4"] = 4;
    row["max4"] = 4;

    // 
    row["prop5"] = "dmg-norm";
    row["par5"] = "";
    row["min5"] = 1;
    row["max5"] = 20;

  }

  // Soul Drainer
  if (row["index"] === "Souldrain") {

    //
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 210;
    row["max1"] = 420;

    // 
    row["prop2"] = "manasteal";
    row["par2"] = "";
    row["min2"] = 5;
    row["max2"] = 15;

    // 
    row["prop3"] = "dmg%";
    row["par3"] = "";
    row["min3"] = 5;
    row["max3"] = 15;

    // 
    row["prop4"] = "lifesteal";
    row["par4"] = "";
    row["min4"] = 5;
    row["max4"] = 15;

    // 
    row["prop5"] = "dmg-ac";
    row["par5"] = "";
    row["min5"] = -100;
    row["max5"] = -100;

    // 
    row["prop6"] = "hit-skill";
    row["par6"] = "Weaken";
    row["min6"] = 40;
    row["max6"] = 8;

  }

  // Dracul's Grasp
  if (row["index"] === "Dracul's Grasp") {

    //
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 210;
    row["max1"] = 420;

    // 
    row["prop2"] = "str/lvl";
    row["par2"] = "";
    row["min2"] = 4;
    row["max2"] = 4;

    // 
    row["prop3"] = "heal-kill";
    row["par3"] = "";
    row["min3"] = 5;
    row["max3"] = 15;

    // 
    row["prop4"] = "lifesteal";
    row["par4"] = "";
    row["min4"] = 5;
    row["max4"] = 15;

    // 
    row["prop5"] = "openwounds";
    row["par5"] = "";
    row["min5"] = 40;
    row["max5"] = 40;

    // 
    row["prop6"] = "hit-skill";
    row["par6"] = "Life Tap";
    row["min6"] = 40;
    row["max6"] = 10;

  }

  // Hellmouth
  if (row["index"] === "Hellmouth") {

    //
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 210;
    row["max1"] = 420;

    // 
    row["prop2"] = "dmg-fire";
    row["par2"] = "";
    row["min2"] = 1;
    row["max2"] = 100;

    // 
    row["prop3"] = "abs-fire%";
    row["par3"] = "";
    row["min3"] = 5;
    row["max3"] = 15;

    // 
    row["prop4"] = "hit-skill";
    row["par4"] = "Meteor";
    row["min4"] = 40;
    row["max4"] = 50;

    // 
    row["prop5"] = "hit-skill";
    row["par5"] = "Firestorm";
    row["min5"] = 0;
    row["max5"] = 0;

    // 
    row["prop6"] = "hit-skill";
    row["par6"] = 225;
    row["min6"] = 0;
    row["max6"] = 0;

  }

  // Lava gout
  if (row["index"] === "Lavagout") {

    //
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 210;
    row["max1"] = 420;

    // 
    row["prop2"] = "nofreeze";
    row["par2"] = "";
    row["min2"] = 1;
    row["max2"] = 1;

    // 
    row["prop3"] = "hit-skill";
    row["par3"] = "Enchant";
    row["min3"] = 40;
    row["max3"] = 40;

    // 
    row["prop4"] = "dmg-fire";
    row["par4"] = "";
    row["min4"] = 1;
    row["max4"] = 100;

    // 
    row["prop5"] = "swing2";
    row["par5"] = "";
    row["min5"] = 20;
    row["max5"] = 20;

    // 
    row["prop6"] = "res-fire";
    row["par6"] = "";
    row["min6"] = 40;
    row["max6"] = 90;

    // 
    row["prop7"] = "res-all";
    row["par7"] = "";
    row["min7"] = -10;
    row["max7"] = -30;

  }

  // Ghoulhide
  if (row["index"] === "Ghoulhide") {

    //
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 210;
    row["max1"] = 420;

    // 
    row["prop2"] = "dmg-und/lvl";
    row["par2"] = 16;

    // 
    row["prop3"] = "att-und/lvl";
    row["par3"] = 16;

    // 
    row["prop4"] = "manasteal";
    row["par4"] = "";
    row["min4"] = 5;
    row["max4"] = 15;

    // 
    row["prop5"] = "enr/lvl";
    row["par5"] = "";
    row["min5"] = 4;
    row["max5"] = 4;

  }

  // Gravepalm
  if (row["index"] === "Gravepalm") {

    //
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 210;
    row["max1"] = 420;

    // 
    row["prop2"] = "dmg-undead";
    row["par2"] = "";
    row["min2"] = 100;
    row["max2"] = 250;

    // 
    row["prop3"] = "att-undead";
    row["par3"] = "";
    row["min3"] = 100;
    row["max3"] = 250;

    // 
    row["prop4"] = "enr/lvl";
    row["par4"] = "";
    row["min4"] = 4;
    row["max4"] = 4;

    // 
    row["prop5"] = "str/lvl";
    row["par5"] = "";
    row["min5"] = 4;
    row["max5"] = 4;

  }

  // Venom Grip
  if (row["index"] === "Venom Grip") {

    //
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 210;
    row["max1"] = 420;

    // 
    row["prop2"] = "ac/lvl";
    row["par2"] = "";
    row["min2"] = 15;
    row["max2"] = 15;

    // 
    row["prop3"] = "crush";
    row["par3"] = "";
    row["min3"] = 5;
    row["max3"] = 15;

    // 
    row["prop4"] = "dmg-pois";
    row["par4"] = "";
    row["min4"] = 100;
    row["max4"] = 300;

    // 
    row["prop5"] = "lifesteal";
    row["par5"] = "";
    row["min5"] = 5;
    row["max5"] = 15;

    // 
    row["prop6"] = "res-pois-max";
    row["par6"] = "";
    row["min6"] = 5;
    row["max6"] = 15;

    // 
    row["prop7"] = "res-pois";
    row["par7"] = "";
    row["min7"] = 40;
    row["max7"] = 90;

    // 
    row["prop8"] = "res-all";
    row["par8"] = "";
    row["min8"] = -10;
    row["max8"] = -30;
  }

  // BOOTS

  // Hotspur
  if (row["index"] === "Hotspur") {

    //
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 20;
    row["max1"] = 120;

    // 
    row["prop2"] = "ac";
    row["par2"] = "";
    row["min2"] = 10;
    row["max2"] = 20;

    // 
    row["prop3"] = "hp";
    row["par3"] = "";
    row["min3"] = 0;
    row["max3"] = 0;

    // 
    row["prop4"] = "dmg-fire";
    row["par4"] = "";
    row["min4"] = 10;
    row["max4"] = 20;

    // 
    row["prop5"] = "res-fire-max";
    row["par5"] = "";
    row["min5"] = 15;
    row["max5"] = 20;

    // 
    row["prop6"] = "res-fire";
    row["par6"] = "";
    row["min6"] = 50;
    row["max6"] = 80;

    // 
    row["prop7"] = "res-all";
    row["par7"] = "";
    row["min7"] = -15;
    row["max7"] = -30;

    // 
    row["prop8"] = "mana";
    row["par8"] = "";
    row["min8"] = 100;
    row["max8"] = 150;

  }

  // Gorefoot
  if (row["index"] === "Gorefoot") {

    //
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 20;
    row["max1"] = 120;

    // 
    row["prop2"] = "ac";
    row["par2"] = "";
    row["min2"] = 20;
    row["max2"] = 100;

    // 
    row["prop3"] = "move2";
    row["par3"] = "";
    row["min3"] = 40;
    row["max3"] = 40;

    // 
    row["prop4"] = "manasteal";
    row["par4"] = "";
    row["min4"] = 2;
    row["max4"] = 4;

    // 
    row["prop5"] = "thorns/lvl";
    row["par5"] = "";
    row["min5"] = 15;
    row["max5"] = 15;

    // 
    row["prop6"] = "balance2";
    row["par6"] = "";
    row["min6"] = 20;
    row["max6"] = 20;

    // 
    row["prop7"] = "res-all";
    row["par7"] = "";
    row["min7"] = -1;
    row["max7"] = -5;

    // 
    row["prop8"] = "mana/lvl";
    row["par8"] = "";
    row["min8"] = 25;
    row["max8"] = 25;

  }

  // Treads of Cthon
  if (row["index"] === "Treads of Cthon") {

    //
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 30;
    row["max1"] = 120;

    // 
    row["prop2"] = "ac/lvl";
    row["par2"] = "";
    row["min2"] = 20;
    row["max2"] = 20;

    // 
    row["prop3"] = "move2";
    row["par3"] = "";
    row["min3"] = 40;
    row["max3"] = 40;

    // 
    row["prop4"] = "ac-miss";
    row["par4"] = "";
    row["min4"] = 250;
    row["max4"] = 500;

    // 
    row["prop5"] = "balance2";
    row["par5"] = "";
    row["min5"] = 40;
    row["max5"] = 40;

    // 
    row["prop6"] = "block";
    row["par6"] = "";
    row["min6"] = 2;
    row["max6"] = 5;

    // 
    row["prop7"] = "dex/lvl";
    row["par7"] = "";
    row["min7"] = 10;
    row["max7"] = 10;

  }

  // Goblin Toe
  if (row["index"] === "Goblin Toe") {

    //
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 500;

    // 
    row["prop2"] = "ac/lvl";
    row["par2"] = "";
    row["min2"] = 15;
    row["max2"] = 15;

    // 
    row["prop3"] = "move2";
    row["par3"] = "";
    row["min3"] = 20;
    row["max3"] = 20;

    // 
    row["prop4"] = "ac-hth";
    row["par4"] = "";
    row["min4"] = 250;
    row["max4"] = 500;

    // 
    row["prop5"] = "crush";
    row["par5"] = "";
    row["min5"] = 40;
    row["max5"] = 40;

    // 
    row["prop6"] = "red-dmg%";
    row["par6"] = "";
    row["min6"] = 5;
    row["max6"] = 10;

    // 
    row["prop7"] = "thorns/lvl";
    row["par7"] = "";
    row["min7"] = 25;
    row["max7"] = 25;

    // 
    row["prop8"] = "red-mag";
    row["par8"] = "";
    row["min8"] = 5;
    row["max8"] = 15;

  }

  // Tearhaunch
  if (row["index"] === "Tearhaunch") {

    //
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 500;

    // 
    row["prop2"] = "ac/lvl";
    row["par2"] = "";
    row["min2"] = 45;
    row["max2"] = 45;

    // 
    row["prop3"] = "move2";
    row["par3"] = "";
    row["min3"] = 40;
    row["max3"] = 40;

    // 
    row["prop4"] = "dex/lvl";
    row["par4"] = "";
    row["min4"] = 4;
    row["max4"] = 4;

    // 
    row["prop5"] = "str/lvl";
    row["par5"] = "";
    row["min5"] = 4;
    row["max5"] = 4;

    // 
    row["prop6"] = "aura";
    row["par6"] = "Resist Cold";
    row["min6"] = 1;
    row["max6"] = 4;

    // 
    row["prop7"] = "swing2";
    row["par7"] = "";
    row["min7"] = 20;
    row["max7"] = 20;

    // 
    row["prop8"] = "red-dmg";
    row["par8"] = "";
    row["min8"] = 5;
    row["max8"] = 15;

  }

  // Sandstorm Trek
  if (row["index"] === "Sandstorm Trek") {

    //
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 500;

    // 
    row["prop2"] = "balance2";
    row["par2"] = "";
    row["min2"] = 20;
    row["max2"] = 20;

    // 
    row["prop3"] = "move2";
    row["par3"] = "";
    row["min3"] = 30;
    row["max3"] = 30;

    // 
    row["prop4"] = "dex/lvl";
    row["par4"] = "";
    row["min4"] = 4;
    row["max4"] = 4;

    // 
    row["prop5"] = "str/lvl";
    row["par5"] = "";
    row["min5"] = 4;
    row["max5"] = 4;

    // 
    row["prop6"] = "res-pois";
    row["par6"] = "";
    row["min6"] = 70;
    row["max6"] = 140;

    // 
    row["prop7"] = "res-all";
    row["par7"] = "";
    row["min7"] = -10;
    row["max7"] = -30;

    // 
    row["prop8"] = "mana-kill";
    row["par8"] = "";
    row["min8"] = 5;
    row["max8"] = 15;

    // 
    row["prop9"] = "rep-dur";
    row["par9"] = "";
    row["min9"] = 5;
    row["max9"] = 5;

  }

  // Marrowwalk
  if (row["index"] === "Marrowwalk") {

    //
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 500;

    // 
    row["prop2"] = "move2";
    row["par2"] = "";
    row["min2"] = 30;
    row["max2"] = 30;

    // 
    row["prop3"] = "nec";
    row["par3"] = "";
    row["min3"] = 1;
    row["max3"] = 2;

    // 
    row["prop4"] = "dex";
    row["par4"] = "";
    row["min4"] = 15;
    row["max4"] = 30;

    // 
    row["prop5"] = "str";
    row["par5"] = "";
    row["min5"] = 15;
    row["max5"] = 30;

    // 
    row["prop6"] = "regen-mana";
    row["par6"] = "";
    row["min6"] = 120;
    row["max6"] = 120;

    // 
    row["prop7"] = "nofreeze";
    row["par7"] = "";
    row["min7"] = 1;
    row["max7"] = 1;

    // 
    row["prop8"] = "heal-kill";
    row["par8"] = "";
    row["min8"] = 5;
    row["max8"] = 15;

    // 
    row["prop9"] = "charged";
    row["par9"] = "Life Tap";
    row["min9"] = 100;
    row["max9"] = 12;

    // 
    row["prop10"] = "gethit-skill";
    row["par10"] = "Bone Armor";
    row["min10"] = 40;
    row["max10"] = 10;

  }

  // Shadow Dancer
  if (row["index"] === "Shadowdancer") {

    //
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 500;

    // 
    row["prop2"] = "balance2";
    row["par2"] = "";
    row["min2"] = 40;
    row["max2"] = 40;

    // 
    row["prop3"] = "move2";
    row["par3"] = "";
    row["min3"] = 40;
    row["max3"] = 40;

    // 
    row["prop4"] = "dex/lvl";
    row["par4"] = "";
    row["min4"] = 4;
    row["max4"] = 4;

    // 
    row["prop5"] = "ease";
    row["par5"] = "";
    row["min5"] = -20;
    row["max5"] = -20;

    // 
    row["prop6"] = "skilltab";
    row["par6"] = 19;
    row["min6"] = 4;
    row["max6"] = 10;

    // 
    row["prop7"] = "att";
    row["par7"] = "";
    row["min7"] = 350;
    row["max7"] = 500;

    // 
    row["prop8"] = "lifesteal";
    row["par8"] = "";
    row["min8"] = 5;
    row["max8"] = 15;

  }

  // Gore rider
  if (row["index"] === "Gorerider") {

    //
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 500;

    // 
    row["prop2"] = "move2";
    row["par2"] = "";
    row["min2"] = 30;
    row["max2"] = 30;

    // 
    row["prop3"] = "openwounds";
    row["par3"] = "";
    row["min3"] = 40;
    row["max3"] = 40;

    // 
    row["prop4"] = "crush";
    row["par4"] = "";
    row["min4"] = 30;
    row["max4"] = 30;

    // 
    row["prop5"] = "ease";
    row["par5"] = "";
    row["min5"] = -25;
    row["max5"] = -25;

    // 
    row["prop6"] = "deadly";
    row["par6"] = "";
    row["min6"] = 30;
    row["max6"] = 30;

    // 
    row["prop7"] = "att";
    row["par7"] = "";
    row["min7"] = 250;
    row["max7"] = 500;

    // 
    row["prop8"] = "stam";
    row["par8"] = "";
    row["min8"] = 0;
    row["max8"] = 0;

    // 
    row["prop9"] = "stam";
    row["par9"] = "";
    row["min9"] = 0;
    row["max9"] = 0;

  }

  // War traveler
  if (row["index"] === "Wartraveler") {

    //
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 500;

    // 
    row["prop2"] = "str/lvl";
    row["par2"] = "";
    row["min2"] = 4;
    row["max2"] = 4;

    // 
    row["prop3"] = "move2";
    row["par3"] = "";
    row["min3"] = 30;
    row["max3"] = 30;

    // 
    row["prop4"] = "enr/lvl";
    row["par4"] = "";
    row["min4"] = 4;
    row["max4"] = 4;

    // 
    row["prop5"] = "dmg-norm";
    row["par5"] = "";
    row["min5"] = 1;
    row["max5"] = 100;

    // 
    row["prop6"] = "thorns/lvl";
    row["par6"] = "";
    row["min6"] = 30;
    row["max6"] = 30;

    // 
    row["prop7"] = "mag%";
    row["par7"] = "";
    row["min7"] = 50;
    row["max7"] = 70;

    // 
    row["prop8"] = "stamdrain";
    row["par8"] = "";
    row["min8"] = 0;
    row["max8"] = 0;

    // 
    row["prop9"] = "thorns";
    row["par9"] = "";
    row["min9"] = 0;
    row["max9"] = 0;

    // 
    row["prop10"] = "stamdrain";
    row["par10"] = "";
    row["min10"] = 0;
    row["max10"] = 0;

    // 
    row["prop11"] = "thorns";
    row["par11"] = "";
    row["min11"] = 0;
    row["max11"] = 0;

  }

  // Silkweave
  if (row["index"] === "Silkweave") {

    //
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 500;

    // 
    row["prop2"] = "mana-kill";
    row["par2"] = "";
    row["min2"] = 5;
    row["max2"] = 15;

    // 
    row["prop3"] = "move2";
    row["par3"] = "";
    row["min3"] = 30;
    row["max3"] = 30;

    // 
    row["prop4"] = "mana%";
    row["par4"] = "";
    row["min4"] = 15;
    row["max4"] = 25;

    // 
    row["prop5"] = "ac-miss";
    row["par5"] = "";
    row["min5"] = 250;
    row["max5"] = 500;

    // 
    row["prop6"] = "red-mag";
    row["par6"] = "";
    row["min6"] = 5;
    row["max6"] = 15;

  }

  // Waterwalk
  if (row["index"] === "Waterwalk") {

    //
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 500;

    // 
    row["prop2"] = "ac-miss";
    row["par2"] = "";
    row["min2"] = 250;
    row["max2"] = 500;

    // 
    row["prop3"] = "move2";
    row["par3"] = "";
    row["min3"] = 25;
    row["max3"] = 25;

    // 
    row["prop4"] = "dex/lvl";
    row["par4"] = "";
    row["min4"] = 4;
    row["max4"] = 4;

    // 
    row["prop5"] = "res-fire-max";
    row["par5"] = "";
    row["min5"] = 5;
    row["max5"] = 15;

    // 
    row["prop6"] = "enr/lvl";
    row["par6"] = "";
    row["min6"] = 4;
    row["max6"] = 4;

    // 
    row["prop7"] = "regen-stam";
    row["par7"] = "";
    row["min7"] = 0;
    row["max7"] = 0;

    // 
    row["prop8"] = "regen-stam";
    row["par8"] = "";
    row["min8"] = 0;
    row["max8"] = 0;

  }

  // Infernostride
  if (row["index"] === "Infernostride") {

    //
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 500;

    // 
    row["prop2"] = "gethit-skill";
    row["par2"] = "Blaze";
    row["min2"] = 40;
    row["max2"] = 50;

    // 
    row["prop3"] = "move2";
    row["par3"] = "";
    row["min3"] = 25;
    row["max3"] = 25;

    // 
    row["prop4"] = "ac/lvl";
    row["par4"] = "";
    row["min4"] = 15;
    row["max4"] = 15;

    // 
    row["prop5"] = "res-fire-max";
    row["par5"] = "";
    row["min5"] = 5;
    row["max5"] = 15;

    // 
    row["prop6"] = "res-fire";
    row["par6"] = "";
    row["min6"] = 40;
    row["max6"] = 90;

    // 
    row["prop7"] = "res-all";
    row["par7"] = "";
    row["min7"] = -10;
    row["max7"] = -30;

    // 
    row["prop8"] = "gold%";
    row["par8"] = "";
    row["min8"] = 70;
    row["max8"] = 150;

    // 
    row["prop9"] = "light";
    row["par9"] = "";
    row["min9"] = 2;
    row["max9"] = 3;

  }

  // ARMOR

  // Greyform
  if (row["index"] === "Greyform") {

    //
    row["prop1"] = "ac";
    row["par1"] = "";
    row["min1"] = 20;
    row["max1"] = 240;

    // 
    row["prop2"] = "att%";
    row["par2"] = "";
    row["min2"] = 10;
    row["max2"] = 20;

    // 
    row["prop3"] = "red-mag";
    row["par3"] = "";
    row["min3"] = 5;
    row["max3"] = 20;

    // 
    row["prop4"] = "red-dmg";
    row["par4"] = "";
    row["min4"] = 5;
    row["max4"] = 20;

    // 
    row["prop5"] = "res-cold";
    row["par5"] = "";
    row["min5"] = 50;
    row["max5"] = 90;

    // 
    row["prop6"] = "res-fire";
    row["par6"] = "";
    row["min6"] = 50;
    row["max6"] = 90;

    // 
    row["prop7"] = "res-all";
    row["par7"] = "";
    row["min7"] = -10;
    row["max7"] = -40;

    // 
    row["prop8"] = "gethit-skill";
    row["par8"] = "Bone Armor";
    row["min8"] = 50;
    row["max8"] = 10;

    // 
    row["prop9"] = "skill";
    row["par9"] = 153;
    row["min9"] = 1;
    row["max9"] = 5;

    // 
    row["prop10"] = "skill";
    row["par10"] = 154;
    row["min10"] = 1;
    row["max10"] = 5;

    // 
    row["prop11"] = "skill";
    row["par11"] = 155;
    row["min11"] = 1;
    row["max11"] = 5;

  }

  // Blinkbats Form
  if (row["index"] === "Blinkbats Form") {

    //
    row["prop1"] = "ac/lvl";
    row["par1"] = "";
    row["min1"] = 25;
    row["max1"] = 25;

    // 
    row["prop2"] = "ac-miss";
    row["par2"] = "";
    row["min2"] = 250;
    row["max2"] = 500;

    // 
    row["prop3"] = "move2";
    row["par3"] = "";
    row["min3"] = 10;
    row["max3"] = 20;

    // 
    row["prop4"] = "balance2";
    row["par4"] = "";
    row["min4"] = 40;
    row["max4"] = 40;

    // 
    row["prop5"] = "dmg-fire";
    row["par5"] = "";
    row["min5"] = 1;
    row["max5"] = 40;

    // 
    row["prop6"] = "abs-fire%";
    row["par6"] = "";
    row["min6"] = 5;
    row["max6"] = 10;

    // 
    row["prop7"] = "res-all";
    row["par7"] = "";
    row["min7"] = -10;
    row["max7"] = -20;

    // 
    row["prop8"] = "str";
    row["par8"] = "";
    row["min8"] = -1;
    row["max8"] = -40;

    // 
    row["prop9"] = "skill";
    row["par9"] = 46;
    row["min9"] = 4;
    row["max9"] = 10;

    // 
    row["prop10"] = "skill";
    row["par10"] = 37;
    row["min10"] = 4;
    row["max10"] = 10;

    // 
    row["prop11"] = "sor";
    row["par11"] = "";
    row["min11"] = 1;
    row["max11"] = 2;

  }

  // Darkglow
  if (row["index"] === "Darkglow") {

    //
    row["prop1"] = "res-all-max";
    row["par1"] = "";
    row["min1"] = 5;
    row["max1"] = 15;

    // 
    row["prop2"] = "ac/lvl";
    row["par2"] = "";
    row["min2"] = 10;
    row["max2"] = 10;

    // 
    row["prop3"] = "ac%";
    row["par3"] = "";
    row["min3"] = 100;
    row["max3"] = 200;

    // 
    row["prop4"] = "att%";
    row["par4"] = "";
    row["min4"] = 5;
    row["max4"] = 15;

    // 
    row["prop5"] = "ac-hth";
    row["par5"] = "";
    row["min5"] = 210;
    row["max5"] = 420;

    // 
    row["prop6"] = "light";
    row["par6"] = "";
    row["min6"] = 1;
    row["max6"] = 3;

    // 
    row["prop7"] = "skill";
    row["par7"] = 110;
    row["min7"] = 4;
    row["max7"] = 10;

    // 
    row["prop8"] = "skill";
    row["par8"] = 105;
    row["min8"] = 4;
    row["max8"] = 10;

    // 
    row["prop9"] = "skill";
    row["par9"] = 100;
    row["min9"] = 4;
    row["max9"] = 10;

  }

  // The Centurion
  if (row["index"] === "The Centurion") {

    //
    row["prop1"] = "ac";
    row["par1"] = "";
    row["min1"] = 100;
    row["max1"] = 250;

    // 
    row["prop2"] = "regen";
    row["par2"] = "";
    row["min2"] = 15;
    row["max2"] = 25;

    // 
    row["prop3"] = "att/lvl";
    row["par3"] = "";
    row["min3"] = 20;
    row["max3"] = 20;

    // 
    row["prop4"] = "mana/lvl";
    row["par4"] = "";
    row["min4"] = 20;
    row["max4"] = 20;

    // 
    row["prop5"] = "ac-hth";
    row["par5"] = "";
    row["min5"] = 210;
    row["max5"] = 420;

    // 
    row["prop6"] = "red-dmg";
    row["par6"] = "";
    row["min6"] = 5;
    row["max6"] = 15;

    // 
    row["prop7"] = "ac%";
    row["par7"] = "";
    row["min7"] = 150;
    row["max7"] = 300;

    // 
    row["prop8"] = "skill";
    row["par8"] = 13;
    row["min8"] = 4;
    row["max8"] = 10;

    // 
    row["prop9"] = "skill";
    row["par9"] = 18;
    row["min9"] = 4;
    row["max9"] = 10;

    // 
    row["prop10"] = "skill";
    row["par10"] = 29;
    row["min10"] = 4;
    row["max10"] = 10;

  }

  // Hawkmail
  if (row["index"] === "Hawkmail") {

    //
    row["prop1"] = "ac%/lvl";
    row["par1"] = "";
    row["min1"] = 35;
    row["max1"] = 35;

    // 
    row["prop2"] = "move2";
    row["par2"] = "";
    row["min2"] = 20;
    row["max2"] = 20;

    // 
    row["prop3"] = "nofreeze";
    row["par3"] = "";
    row["min3"] = 1;
    row["max3"] = 1;

    // 
    row["prop4"] = "res-cold-max";
    row["par4"] = "";
    row["min4"] = 15;
    row["max4"] = 25;

    // 
    row["prop5"] = "res-cold";
    row["par5"] = "";
    row["min5"] = 40;
    row["max5"] = 90;

    // 
    row["prop6"] = "red-mag";
    row["par6"] = "";
    row["min6"] = 5;
    row["max6"] = 15;

    // 
    row["prop7"] = "res-all";
    row["par7"] = "";
    row["min7"] = -10;
    row["max7"] = -30;

    // 
    row["prop8"] = "skill";
    row["par8"] = 115;
    row["min8"] = 4;
    row["max8"] = 10;

    // 
    row["prop9"] = "skill";
    row["par9"] = 98;
    row["min9"] = 4;
    row["max9"] = 10;

    // 
    row["prop10"] = "skill";
    row["par10"] = 108;
    row["min10"] = 4;
    row["max10"] = 10;

    // 
    row["prop11"] = "ac-miss";
    row["par11"] = "";
    row["min11"] = 250;
    row["max11"] = 500;

  }

  // Twitchthroe
  if (row["index"] === "Twitchthroe") {

    //
    row["prop1"] = "ac/lvl";
    row["par1"] = "";
    row["min1"] = 35;
    row["max1"] = 35;

    // 
    row["prop2"] = "swing2";
    row["par2"] = "";
    row["min2"] = 20;
    row["max2"] = 20;

    // 
    row["prop3"] = "balance2";
    row["par3"] = "";
    row["min3"] = 20;
    row["max3"] = 20;

    // 
    row["prop4"] = "move2";
    row["par4"] = "";
    row["min4"] = 20;
    row["max4"] = 20;

    // 
    row["prop5"] = "block";
    row["par5"] = "";
    row["min5"] = 40;
    row["max5"] = 40;

    // 
    row["prop6"] = "dex/lvl";
    row["par6"] = "";
    row["min6"] = 4;
    row["max6"] = 4;

    // 
    row["prop7"] = "str/lvl";
    row["par7"] = "";
    row["min7"] = 4;
    row["max7"] = 4;

    // 
    row["prop8"] = "skill";
    row["par8"] = 153;
    row["min8"] = 4;
    row["max8"] = 10;

    // 
    row["prop9"] = "skill";
    row["par9"] = 149;
    row["min9"] = 4;
    row["max9"] = 10;

    // 
    row["prop10"] = "skill";
    row["par10"] = 145;
    row["min10"] = 4;
    row["max10"] = 10;

    // 
    row["prop11"] = "ac-miss";
    row["par11"] = "";
    row["min11"] = 100;
    row["max11"] = 250;

  }

  // Sparking Mail
  if (row["index"] === "Sparking Mail") {

    //
    row["prop1"] = "ac";
    row["par1"] = "";
    row["min1"] = 400;
    row["max1"] = 750;

    // 
    row["prop2"] = "res-ltng";
    row["par2"] = "";
    row["min2"] = 40;
    row["max2"] = 90;

    // 
    row["prop3"] = "res-all";
    row["par3"] = "";
    row["min3"] = -10;
    row["max3"] = -30;

    // 
    row["prop4"] = "abs-ltng";
    row["par4"] = "";
    row["min4"] = 20;
    row["max4"] = 20;

    // 
    row["prop5"] = "dmg-ltng";
    row["par5"] = "";
    row["min5"] = 1;
    row["max5"] = 40;

    // 
    row["prop6"] = "att";
    row["par6"] = "";
    row["min6"] = 250;
    row["max6"] = 500;

    // 
    row["prop7"] = "ac-miss";
    row["par7"] = "";
    row["min7"] = 100;
    row["max7"] = 250;

    // 
    row["prop8"] = "skill";
    row["par8"] = 118;
    row["min8"] = 4;
    row["max8"] = 10;

    // 
    row["prop9"] = "skill";
    row["par9"] = 106;
    row["min9"] = 4;
    row["max9"] = 10;

    // 
    row["prop10"] = "skill";
    row["par10"] = 125;
    row["min10"] = 4;
    row["max10"] = 10;

    // 
    row["prop11"] = "gethit-skill";
    row["par11"] = "Charged Bolt";
    row["min11"] = 40;
    row["max11"] = 30;

  }

  // Venom Ward
  if (row["index"] === "Venomsward") {

    //
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 300;
    row["max1"] = 500;

    // 
    row["prop2"] = "res-pois-max";
    row["par2"] = "";
    row["min2"] = 15;
    row["max2"] = 20;

    // 
    row["prop3"] = "res-all";
    row["par3"] = "";
    row["min3"] = -10;
    row["max3"] = -40;

    // 
    row["prop4"] = "res-pois";
    row["par4"] = "";
    row["min4"] = 90;
    row["max4"] = 180;

    // 
    row["prop5"] = "res-pois-len";
    row["par5"] = "";
    row["min5"] = 100;
    row["max5"] = 100;

    // 
    row["prop6"] = "light";
    row["par6"] = "";
    row["min6"] = 2;
    row["max6"] = 3;

    // 
    row["prop7"] = "regen";
    row["par7"] = "";
    row["min7"] = 10;
    row["max7"] = 25;

    // 
    row["prop8"] = "mana-regen";
    row["par8"] = "";
    row["min8"] = 100;
    row["max8"] = 100;

    // 
    row["prop9"] = "skill";
    row["par9"] = 222;
    row["min9"] = 4;
    row["max9"] = 10;

    // 
    row["prop10"] = "skill";
    row["par10"] = 238;
    row["min10"] = 4;
    row["max10"] = 10;

    // 
    row["prop11"] = "skill";
    row["par11"] = 223;
    row["min11"] = 4;
    row["max11"] = 10;

  }

  // Iceblink
  if (row["index"] === "Iceblink") {

    //
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 300;
    row["max1"] = 500;

    // 
    row["prop2"] = "freeze";
    row["par2"] = "";
    row["min2"] = 1;
    row["max2"] = 1;

    // 
    row["prop3"] = "res-all";
    row["par3"] = "";
    row["min3"] = -10;
    row["max3"] = -30;

    // 
    row["prop4"] = "res-cold";
    row["par4"] = "";
    row["min4"] = 40;
    row["max4"] = 90;

    // 
    row["prop5"] = "red-mag";
    row["par5"] = "";
    row["min5"] = 25;
    row["max5"] = 50;

    // 
    row["prop6"] = "light";
    row["par6"] = "";
    row["min6"] = 2;
    row["max6"] = 3;

    // 
    row["prop7"] = "gethit-skill";
    row["par7"] = "Teleport";
    row["min7"] = 50;
    row["max7"] = 1;

    // 
    row["prop8"] = "gethit-skill";
    row["par8"] = "Static Field";
    row["min8"] = 40;
    row["max8"] = 5;

    //
    row["prop9"] = "ac/lvl";
    row["par9"] = "";
    row["min9"] = 20;
    row["max9"] = 20;

  }

  // Boneflesh
  if (row["index"] === "Boneflesh") {

    //
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 300;
    row["max1"] = 500;

    // 
    row["prop2"] = "lifesteal";
    row["par2"] = "";
    row["min2"] = 5;
    row["max2"] = 10;

    // 
    row["prop3"] = "openwounds";
    row["par3"] = "";
    row["min3"] = 40;
    row["max3"] = 40;

    // 
    row["prop4"] = "heal-kill";
    row["par4"] = "";
    row["min4"] = 4;
    row["max4"] = 10;

    // 
    row["prop5"] = "swing2";
    row["par5"] = "";
    row["min5"] = 10;
    row["max5"] = 10;

    // 
    row["prop6"] = "att";
    row["par6"] = "";
    row["min6"] = 250;
    row["max6"] = 500;

    // 
    row["prop7"] = "gethit-skill";
    row["par7"] = "Weaken";
    row["min7"] = 40;
    row["max7"] = 8;

    // 
    row["prop8"] = "hit-skill";
    row["par8"] = "Bone Spear";
    row["min8"] = 20;
    row["max8"] = 35;

    //
    row["prop9"] = "ac/lvl";
    row["par9"] = "";
    row["min9"] = 25;
    row["max9"] = 25;

  }

  // Rockfleece
  if (row["index"] === "Rockfleece") {

    //
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    // 
    row["prop2"] = "ease";
    row["par2"] = "";
    row["min2"] = -15;
    row["max2"] = -15;

    // 
    row["prop3"] = "red-dmg%";
    row["par3"] = "";
    row["min3"] = 35;
    row["max3"] = 35;

    // 
    row["prop4"] = "red-dmg";
    row["par4"] = "";
    row["min4"] = 1;
    row["max4"] = 10;

    // 
    row["prop5"] = "str";
    row["par5"] = "";
    row["min5"] = 40;
    row["max5"] = 40;

    // 
    row["prop6"] = "ac-hth";
    row["par6"] = "";
    row["min6"] = 250;
    row["max6"] = 500;

    // 
    row["prop7"] = "charged";
    row["par7"] = "Battle Command";
    row["min7"] = 100;
    row["max7"] = 1;

    // 
    row["prop8"] =  "ac/lvl";
    row["par8"] = "";
    row["min8"] = 25;
    row["max8"] = 25;

  }

  // Goldskin
  if (row["index"] === "Goldskin") {

    //
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 500;

    // 
    row["prop2"] = "light";
    row["par2"] = "";
    row["min2"] = 2;
    row["max2"] = 3;

    // 
    row["prop3"] = "thorns/lvl";
    row["par3"] = "";
    row["min3"] = 30;
    row["max3"] = 30;

    // 
    row["prop4"] = "res-all-max";
    row["par4"] = "";
    row["min4"] = 5;
    row["max4"] = 10;

    // 
    row["prop5"] = "gold%/lvl";
    row["par5"] = "";
    row["min5"] = 50;
    row["max5"] = 50;

    //
    row["prop6"] = "ac/lvl";
    row["par6"] = "";
    row["min6"] = 15;
    row["max6"] = 15;

    // 
    row["prop7"] = "gethit-skill";
    row["par7"] = "Quickness";
    row["min7"] = 50;
    row["max7"] = 3;

  }

  // The Spirit Shroud
  if (row["index"] === "The Spirit Shroud") {

    //
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 100;
    row["max1"] = 450;

    // 
    row["prop2"] = "nofreeze";
    row["par2"] = "";
    row["min2"] = 1;
    row["max2"] = 1;

    // 
    row["prop3"] = "regen";
    row["par3"] = "";
    row["min3"] = 20;
    row["max3"] = 40;

    // 
    row["prop4"] = "red-mag";
    row["par4"] = "";
    row["min4"] = 5;
    row["max4"] = 15;

    // 
    row["prop5"] = "aura";
    row["par5"] = "Cleansing";
    row["min5"] = 1;
    row["max5"] = 5;

    // 
    row["prop6"] = "ac/lvl";
    row["par6"] = "";
    row["min6"] = 25;
    row["max6"] = 25;

    // 
    row["prop7"] = "gethit-skill";
    row["par7"] = "Dim Vision";
    row["min7"] = 40;
    row["max7"] = 12;

  }

  // Rattlecage
  if (row["index"] === "Rattlecage") {

    //
    row["prop1"] = "ac";
    row["par1"] = "";
    row["min1"] = 500;
    row["max1"] = 500;

    // 
    row["prop2"] = "crush";
    row["par2"] = "";
    row["min2"] = 40;
    row["max2"] = 40;

    // 
    row["prop3"] = "howl";
    row["par3"] = "";
    row["min3"] = 52;
    row["max3"] = 52;

    // 
    row["prop4"] = "att";
    row["par4"] = "";
    row["min4"] = 500;
    row["max4"] = 500;

    // 
    row["prop5"] = "aura";
    row["par5"] = "Vigor";
    row["min5"] = 6;
    row["max5"] = 14;

    // 
    row["prop6"] = "hit-skill";
    row["par6"] = "Amplify Damage";
    row["min6"] = 50;
    row["max6"] = 1;

  }

  // Silks of the Victor
  if (row["index"] === "Victors Silk") {

    //
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 500;

    // 
    row["prop2"] = "light";
    row["par2"] = "";
    row["min2"] = 2;
    row["max2"] = 3;

    // 
    row["prop3"] = "heal-kill";
    row["par3"] = "";
    row["min3"] = 20;
    row["max3"] = 40;

    // 
    row["prop4"] = "mana-kill";
    row["par4"] = "";
    row["min4"] = 15;
    row["max4"] = 30;

    // 
    row["prop5"] = "aura";
    row["par5"] = "Sanctuary";
    row["min5"] = 10;
    row["max5"] = 14;

    // 
    row["prop6"] = "ac/lvl";
    row["par6"] = "";
    row["min6"] = 25;
    row["max6"] = 25;

    // 
    row["prop7"] = "gethit-skill";
    row["par7"] = "Fade";
    row["min7"] = 40;
    row["max7"] = 1;

  }

  // Heavenly Garb
  if (row["index"] === "Heavenly Garb") {

    //
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 500;

    // 
    row["prop2"] = "regen-mana";
    row["par2"] = "";
    row["min2"] = 250;
    row["max2"] = 250;

    // 
    row["prop3"] = "enr";
    row["par3"] = "";
    row["min3"] = 100;
    row["max3"] = 100;

    // 
    row["prop4"] = "dmg-undead";
    row["par4"] = "";
    row["min4"] = 150;
    row["max4"] = 150;

    // 
    row["prop5"] = "aura";
    row["par5"] = "Redemption";
    row["min5"] = 5;
    row["max5"] = 12;

    // 
    row["prop6"] = "att-undead";
    row["par6"] = "";
    row["min6"] = 250;
    row["max6"] = 500;

    // 
    row["prop7"] = "gethit-skill";
    row["par7"] = "Cyclone Armor";
    row["min7"] = 50;
    row["max7"] = 10;

  }

  // Leviathan
  if (row["index"] === "Leviathan") {

    //
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    // 
    row["prop2"] = "ac/lvl";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 50;

    // 
    row["prop3"] = "str";
    row["par3"] = "";
    row["min3"] = 100;
    row["max3"] = 100;

    // 
    row["prop4"] = "red-dmg%";
    row["par4"] = "";
    row["min4"] = 20;
    row["max4"] = 35;

    // 
    row["prop5"] = "aura";
    row["par5"] = "Defiance";
    row["min5"] = 4;
    row["max5"] = 14;

    // 
    row["prop6"] = "ac-hth";
    row["par6"] = "";
    row["min6"] = 250;
    row["max6"] = 500;

    // 
    row["prop6"] = "ease";
    row["par6"] = "";
    row["min6"] = 40;
    row["max6"] = 40;

  }

  // Steel Carapace
  if (row["index"] === "Steel Carapice") {

    //
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    // 
    row["prop2"] = "regen-mana";
    row["par2"] = "";
    row["min2"] = 100;
    row["max2"] = 100;

    // 
    row["prop3"] = "balance2";
    row["par3"] = "";
    row["min3"] = 40;
    row["max3"] = 40;

    // 
    row["prop4"] = "red-dmg";
    row["par4"] = "";
    row["min4"] = 25;
    row["max4"] = 50;

    // 
    row["prop5"] = "aura";
    row["par5"] = "Resist Cold";
    row["min5"] = 1;
    row["max5"] = 5;

    // 
    row["prop6"] = "ac/lvl";
    row["par6"] = "";
    row["min6"] = 25;
    row["max6"] = 25;

    // 
    row["prop7"] = "gethit-skill";
    row["par7"] = "Iron Maiden";
    row["min7"] = 40;
    row["max7"] = 60;

  }

  // Templar's Might
  if (row["index"] === "Templar's Might") {

    //
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    // 
    row["prop2"] = "ac-miss";
    row["par2"] = "";
    row["min2"] = 350;
    row["max2"] = 500;

    // 
    row["prop3"] = "str/lvl";
    row["par3"] = "";
    row["min3"] = 4;
    row["max3"] = 4;

    // 
    row["prop4"] = "enr/lvl";
    row["par4"] = "";
    row["min4"] = 4;
    row["max4"] = 4;

    // 
    row["prop5"] = "balance2";
    row["par5"] = "";
    row["min5"] = 20;
    row["max5"] = 20;

    // 
    row["prop6"] = "skilltab";
    row["par6"] = 10;
    row["min6"] = 4;
    row["max6"] = 10;

    // 
    row["prop7"] = "gethit-skill";
    row["par7"] = "Fist of the Heavens";
    row["min7"] = 40;
    row["max7"] = 35;

  }

  // Ormus' Robes
  if (row["index"] === "Ormus' Robes") {

    //
    row["prop1"] = "ac";
    row["par1"] = "";
    row["min1"] = 10;
    row["max1"] = 20;

    // 
    row["prop2"] = "cast2";
    row["par2"] = "";
    row["min2"] = 40;
    row["max2"] = 40;

    // 
    row["prop3"] = "extra-cold";
    row["par3"] = "";
    row["min3"] = 15;
    row["max3"] = 25;

    // 
    row["prop4"] = "extra-fire";
    row["par4"] = "";
    row["min4"] = 15;
    row["max4"] = 25;

    // 
    row["prop5"] = "extra-ltng";
    row["par5"] = "";
    row["min5"] = 15;
    row["max5"] = 25;

    // 
    row["prop6"] = "sor";
    row["par6"] = "";
    row["min6"] = 2;
    row["max6"] = 3;

    // 
    row["prop7"] = "regen-mana";
    row["par7"] = "";
    row["min7"] = 40;
    row["max7"] = 40;

  }

  // Tyrael's Might
  if (row["index"] === "Tyrael's Might") {

    //
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 500;
    row["max1"] = 500;

    // 
    row["prop2"] = "dmg-demon";
    row["par2"] = "";
    row["min2"] = 500;
    row["max2"] = 500;

    // 
    row["prop3"] = "move2";
    row["par3"] = "";
    row["min3"] = 40;
    row["max3"] = 40;

    // 
    row["prop4"] = "str/lvl";
    row["par4"] = "";
    row["min4"] = 4;
    row["max4"] = 4;

    // 
    row["prop5"] = "nofreeze";
    row["par5"] = "";
    row["min5"] = 1;
    row["max5"] = 1;

    // 
    row["prop6"] = "ease";
    row["par6"] = "";
    row["min6"] = -100;
    row["max6"] = -100;

    // 
    row["prop7"] = "indestruct";
    row["par7"] = "";
    row["min7"] = 1;
    row["max7"] = 1;

    // 
    row["prop8"] = "indestruct";
    row["par8"] = "";
    row["min8"] = 1;
    row["max8"] = 1;

    // 
    row["prop9"] = "rip";
    row["par9"] = "";
    row["min9"] = 1;
    row["max9"] = 1;

    // 
    row["prop10"] = "aura";
    row["par10"] = "Might";
    row["min10"] = 7;
    row["max10"] = 20;

  }

  // The Gladiator's Bane
  if (row["index"] === "The Gladiator's Bane") {

    //
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    // 
    row["prop2"] = "ac/lvl";
    row["par2"] = "";
    row["min2"] = 40;
    row["max2"] = 40;

    // 
    row["prop3"] = "balance2";
    row["par3"] = "";
    row["min3"] = 40;
    row["max3"] = 40;

    // 
    row["prop4"] = "nofreeze";
    row["par4"] = "";
    row["min4"] = 1;
    row["max4"] = 1;

    // 
    row["prop5"] = "ac-miss";
    row["par5"] = "";
    row["min5"] = 500;
    row["max5"] = 500;

    // 
    row["prop6"] = "res-pois-len";
    row["par6"] = "";
    row["min6"] = 100;
    row["max6"] = 100;

    // 
    row["prop7"] = "thorns/lvl";
    row["par7"] = "";
    row["min7"] = 35;
    row["max7"] = 35;

    // 
    row["prop8"] = "red-mag";
    row["par8"] = "";
    row["min8"] = 15;
    row["max8"] = 30;

    // 
    row["prop9"] = "red-dmg";
    row["par9"] = "";
    row["min9"] = 15;
    row["max9"] = 30;

    // 
    row["prop10"] = "aura";
    row["par10"] = "Redemption";
    row["min10"] = 5;
    row["max10"] = 12;

  }

  // Arkaine's Valor
  if (row["index"] === "Arkaine's Valor") {

    //
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    // 
    row["prop2"] = "red-dmg%";
    row["par2"] = "";
    row["min2"] = 15;
    row["max2"] = 30;

    // 
    row["prop3"] = "red-dmg";
    row["par3"] = "";
    row["min3"] = 5;
    row["max3"] = 15;

    // 
    row["prop4"] = "balance2";
    row["par4"] = "";
    row["min4"] = 50;
    row["max4"] = 50;

    // 
    row["prop5"] = "enr/lvl";
    row["par5"] = "";
    row["min5"] = 4;
    row["max5"] = 4;

    // 
    row["prop6"] = "ac/lvl";
    row["par6"] = "";
    row["min6"] = 50;
    row["max6"] = 50;

    // 
    row["prop7"] = "gethit-skill";
    row["par7"] = "Weaken";
    row["min7"] = 40;
    row["max7"] = 18;

    // 
    row["prop8"] = "gethit-skill";
    row["par8"] = "Bone Armor";
    row["min8"] = 40;
    row["max8"] = 10;

  }

  // Corpsemourn
  if (row["index"] === "Corpsemourn") {

    //
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    // 
    row["prop2"] = "dmg-fire";
    row["par2"] = "";
    row["min2"] = 250;
    row["max2"] = 500;

    // 
    row["prop3"] = "gethit-skill";
    row["par3"] = "Iron Maiden";
    row["min3"] = 40;
    row["max3"] = 50;

    // 
    row["prop4"] = "res-cold";
    row["par4"] = "";
    row["min4"] = 40;
    row["max4"] = 90;

    // 
    row["prop5"] = "res-all";
    row["par5"] = "";
    row["min5"] = -10;
    row["max5"] = -30;

    // 
    row["prop6"] = "str/lvl";
    row["par6"] = "";
    row["min6"] = 4;
    row["max6"] = 4;

    // 
    row["prop7"] = "oskill";
    row["par7"] = "Corpse Explosion";
    row["min7"] = 14;
    row["max7"] = 14;

  }

  // Black Hades
  if (row["index"] === "Black Hades") {

    //
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    // 
    row["prop2"] = "dmg-demon";
    row["par2"] = "";
    row["min2"] = 150;
    row["max2"] = 300;

    // 
    row["prop3"] = "att-demon";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "nofreeze";
    row["par4"] = "";
    row["min4"] = 1;
    row["max4"] = 1;

    // 
    row["prop5"] = "sock";
    row["par5"] = "";
    row["min5"] = 3;
    row["max5"] = 3;

    // 
    row["prop6"] = "light";
    row["par6"] = "";
    row["min6"] = -2;
    row["max6"] = -2;

  }

  // Atma's Wail
  if (row["index"] === "Atma's Wail") {

    //
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    // 
    row["prop2"] = "ac/lvl";
    row["par2"] = "";
    row["min2"] = 35;
    row["max2"] = 35;

    // 
    row["prop3"] = "balance2";
    row["par3"] = "";
    row["min3"] = 35;
    row["max3"] = 35;

    // 
    row["prop4"] = "regen";
    row["par4"] = "";
    row["min4"] = 15;
    row["max4"] = 30;

    // 
    row["prop5"] = "mana%";
    row["par5"] = "";
    row["min5"] = 15;
    row["max5"] = 20;

    // 
    row["prop6"] = "dex/lvl";
    row["par6"] = "";
    row["min6"] = 4;
    row["max6"] = 4;

    // 
    row["prop7"] = "mag%";
    row["par7"] = "";
    row["min7"] = 40;
    row["max7"] = 40;

    // 
    row["prop8"] = "oskill";
    row["par8"] = "Shout";
    row["min8"] = 30;
    row["max8"] = 30;

  }

  // Que-Hegan's Wisdom
  if (row["index"] === "Que-Hegan's Wisdon") {

    //
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    // 
    row["prop2"] = "mana-kill";
    row["par2"] = "";
    row["min2"] = 5;
    row["max2"] = 15;

    // 
    row["prop3"] = "cast2";
    row["par3"] = "";
    row["min3"] = 20;
    row["max3"] = 20;

    // 
    row["prop4"] = "balance2";
    row["par4"] = "";
    row["min4"] = 20;
    row["max4"] = 20;

    // 
    row["prop5"] = "enr/lvl";
    row["par5"] = "";
    row["min5"] = 4;
    row["max5"] = 4;

    // 
    row["prop6"] = "ac/lvl";
    row["par6"] = "";
    row["min6"] = 25;
    row["max6"] = 25;

    // 
    row["prop7"] = "red-mag";
    row["par7"] = "";
    row["min7"] = 5;
    row["max7"] = 15;

    // 
    row["prop8"] = "oskill";
    row["par8"] = "Chilling Armor";
    row["min8"] = 30;
    row["max8"] = 30;

  }

  // Toothrow
  if (row["index"] === "Toothrow") {

    //
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    // 
    row["prop2"] = "ac";
    row["par2"] = "";
    row["min2"] = 250;
    row["max2"] = 500;

    // 
    row["prop3"] = "openwounds";
    row["par3"] = "";
    row["min3"] = 100;
    row["max3"] = 100;

    // 
    row["prop4"] = "res-fire";
    row["par4"] = "";
    row["min4"] = 40;
    row["max4"] = 90;

    // 
    row["prop5"] = "res-all";
    row["par5"] = "";
    row["min5"] = -10;
    row["max5"] = -30;

    // 
    row["prop6"] = "str/lvl";
    row["par6"] = "";
    row["min6"] = 4;
    row["max6"] = 4;

    // 
    row["prop7"] = "thorns/lvl";
    row["par7"] = "";
    row["min7"] = 35;
    row["max7"] = 35;

  }

  // Guardian Angel
  if (row["index"] === "Guardian Angel") {

    //
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    // 
    row["prop2"] = "block";
    row["par2"] = "";
    row["min2"] = 40;
    row["max2"] = 40;

    // 
    row["prop3"] = "block2";
    row["par3"] = "";
    row["min3"] = 40;
    row["max3"] = 40;

    // 
    row["prop4"] = "att-dem/lvl";
    row["par4"] = 5;

    // 
    row["prop5"] = "pal";
    row["par5"] = "";
    row["min5"] = 1;
    row["max5"] = 2;

    // 
    row["prop6"] = "ac/lvl";
    row["par6"] = "";
    row["min6"] = 25;
    row["max6"] = 25;

    // 
    row["prop7"] = "light";
    row["par7"] = "";
    row["min7"] = 3;
    row["max7"] = 4;

    // 
    row["prop8"] = "res-all-max";
    row["par8"] = "";
    row["min8"] = 15;
    row["max8"] = 20;

  }

  // Skullder's Ire
  if (row["index"] === "Skullder's Ire") {

    //
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    // 
    row["prop2"] = "mag%/lvl";
    row["par2"] = 10;

    // 
    row["prop3"] = "red-mag";
    row["par3"] = "";
    row["min3"] = 5;
    row["max3"] = 15;

    // 
    row["prop4"] = "oskill";
    row["par4"] = "Clay Golem";
    row["min4"] = 50;
    row["max4"] = 50;

    // 
    row["prop5"] = "rep-dur";
    row["par5"] = "";
    row["min5"] = 5;
    row["max5"] = 5;

    // 
    row["prop6"] = "ac/lvl";
    row["par6"] = "";
    row["min6"] = 25;
    row["max6"] = 25;

  }

  // Duriel's Shell
  if (row["index"] === "Duriel's Shell") {

    //
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    // 
    row["prop2"] = "ac/lvl";
    row["par2"] = "";
    row["min2"] = 35;
    row["max2"] = 35;

    // 
    row["prop3"] = "nofreeze";
    row["par3"] = "";
    row["min3"] = 1;
    row["max3"] = 1;

    // 
    row["prop4"] = "res-cold";
    row["par4"] = "";
    row["min4"] = 40;
    row["max4"] = 90;

    // 
    row["prop5"] = "str/lvl";
    row["par5"] = "";
    row["min5"] = 10;
    row["max5"] = 10;

    // 
    row["prop6"] = "res-all";
    row["par6"] = "";
    row["min6"] = -10;
    row["max6"] = -30;

    // 
    row["prop7"] = "res-cold-max";
    row["par7"] = "";
    row["min7"] = 10;
    row["max7"] = 15;

  }

  // Shaftstop
  if (row["index"] === "Shaftstop") {

    //
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    // 
    row["prop2"] = "red-dmg%";
    row["par2"] = "";
    row["min2"] = 30;
    row["max2"] = 50;

    // 
    row["prop3"] = "ac-miss";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "balance2";
    row["par4"] = "";
    row["min4"] = 20;
    row["max4"] = 20;

  }

  // Crow Caw
  if (row["index"] === "Crow Caw") {

    //
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    // 
    row["prop2"] = "swing2";
    row["par2"] = "";
    row["min2"] = 20;
    row["max2"] = 20;

    // 
    row["prop3"] = "openwounds";
    row["par3"] = "";
    row["min3"] = 50;
    row["max3"] = 50;

    // 
    row["prop4"] = "balance2";
    row["par4"] = "";
    row["min4"] = 20;
    row["max4"] = 20;

    // 
    row["prop5"] = "dex/lvl";
    row["par5"] = "";
    row["min5"] = 4;
    row["max5"] = 4;

    // 
    row["prop6"] = "deadly";
    row["par6"] = "";
    row["min6"] = 25;
    row["max6"] = 25;

  }

  // Spirit Forge
  if (row["index"] === "Spiritforge") {

    //
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    // 
    row["prop2"] = "dmg-fire";
    row["par2"] = "";
    row["min2"] = 1;
    row["max2"] = 100;

    // 
    row["prop3"] = "str/lvl";
    row["par3"] = "";
    row["min3"] = 4;
    row["max3"] = 4;

    // 
    row["prop4"] = "sock";
    row["par4"] = "";
    row["min4"] = 2;
    row["max4"] = 2;

    // 
    row["prop5"] = "light";
    row["par5"] = "";
    row["min5"] = 4;
    row["max5"] = 4;

    // 
    row["prop6"] = "res-fire";
    row["par6"] = "";
    row["min6"] = 40;
    row["max6"] = 90;

    // 
    row["prop7"] = "res-all";
    row["par7"] = "";
    row["min7"] = -10;
    row["max7"] = -30;

    // 
    row["prop8"] = "oskill";
    row["par8"] = "Blaze";
    row["min8"] = 60;
    row["max8"] = 60;

  }

  // Iron Pelt
  if (row["index"] === "Ironpelt") {

    //
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    // 
    row["prop2"] = "ac/lvl";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 50;

    // 
    row["prop3"] = "red-dmg";
    row["par3"] = "";
    row["min3"] = 15;
    row["max3"] = 30;

    // 
    row["prop4"] = "red-mag";
    row["par4"] = "";
    row["min4"] = 15;
    row["max4"] = 30;

    // 
    row["prop5"] = "dex/lvl";
    row["par5"] = "";
    row["min5"] = 4;
    row["max5"] = 4;

    // 
    row["prop6"] = "oskill";
    row["par6"] = "Battle Cry";
    row["min6"] = 20;
    row["max6"] = 20;

  }

  // Skin of the Flayed One
  if (row["index"] === "Skin of the Flayerd One") {

    //
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    // 
    row["prop2"] = "rep-dur";
    row["par2"] = "";
    row["min2"] = 10;
    row["max2"] = 10;

    // 
    row["prop3"] = "lifesteal";
    row["par3"] = "";
    row["min3"] = 5;
    row["max3"] = 15;

    // 
    row["prop4"] = "regen";
    row["par4"] = "";
    row["min4"] = 15;
    row["max4"] = 30;

    // 
    row["prop5"] = "thorns/lvl";
    row["par5"] = "";
    row["min5"] = 35;
    row["max5"] = 35;

    // 
    row["prop6"] = "ac/lvl";
    row["par6"] = "";
    row["min6"] = 25;
    row["max6"] = 25;

    // 
    row["prop7"] = "oskill";
    row["par7"] = "Spirit of Barbs";
    row["min7"] = 50;
    row["max7"] = 50;

  }

  // Skin of the Vipermagi
  if (row["index"] === "Skin of the Vipermagi") {

    //
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 350;
    row["max1"] = 500;

    // 
    row["prop2"] = "cast3";
    row["par2"] = "";
    row["min2"] = 40;
    row["max2"] = 40;

    // 
    row["prop3"] = "red-dmg";
    row["par3"] = "";
    row["min3"] = 5;
    row["max3"] = 15;

    // 
    row["prop4"] = "red-mag";
    row["par4"] = "";
    row["min4"] = 5;
    row["max4"] = 15;

    // 
    row["prop5"] = "enr/lvl";
    row["par5"] = "";
    row["min5"] = 4;
    row["max5"] = 4;

    // 
    row["prop6"] = "oskill";
    row["par6"] = "Lower Resist";
    row["min6"] = 10;
    row["max6"] = 10;

    // 
    row["prop7"] = "oskill";
    row["par7"] = "Life Tap";
    row["min7"] = 3;
    row["max7"] = 3;

  }

  // JEWELRY

  // Nagelring
  if (row["index"] === "Nagelring") {

    //
    row["prop1"] = "mag%/lvl";
    row["par1"] = "";
    row["min1"] = 7;
    row["max1"] = 7;

    // 
    row["prop2"] = "att";
    row["par2"] = "";
    row["min2"] = 150;
    row["max2"] = 500;

    // 
    row["prop3"] = "red-mag";
    row["par3"] = "";
    row["min3"] = 5;
    row["max3"] = 15;

    // 
    row["prop4"] = "red-dmg";
    row["par4"] = "";
    row["min4"] = 5;
    row["max4"] = 10;

    // 
    row["prop5"] = "thorns";
    row["par5"] = "";
    row["min5"] = 20;
    row["max5"] = 100;

    // 
    row["prop6"] = "gold%/lvl";
    row["par6"] = "";
    row["min6"] = 5;
    row["max6"] = 5;

  }

  // Nokozan Relic
  if (row["index"] === "Nokozan Relic") {

    //
    row["prop1"] = "dmg-fire/lvl";
    row["par1"] = "";
    row["min1"] = 2;
    row["max1"] = 2;

    // 
    row["prop2"] = "res-fire-max";
    row["par2"] = "";
    row["min2"] = 10;
    row["max2"] = 15;

    // 
    row["prop3"] = "balance2";
    row["par3"] = "";
    row["min3"] = 20;
    row["max3"] = 20;

    // 
    row["prop4"] = "red-mag";
    row["par4"] = "";
    row["min4"] = 5;
    row["max4"] = 20;

    // 
    row["prop5"] = "res-fire/lvl";
    row["par5"] = "";
    row["min5"] = 10;
    row["max5"] = 10;

    // 
    row["prop6"] = "light";
    row["par6"] = "";
    row["min6"] = 2;
    row["max6"] = 3;

  }

  // The Eye of Etlich
  if (row["index"] === "The Eye of Etlich") {

    //
    row["prop1"] = "light";
    row["par1"] = "";
    row["min1"] = 2;
    row["max1"] = 3;

    // 
    row["prop2"] = "lifesteal";
    row["par2"] = "";
    row["min2"] = 7;
    row["max2"] = 14;

    // 
    row["prop3"] = "dmg-cold";
    row["par3"] = "";
    row["min3"] = 10;
    row["max3"] = 15;

    // 
    row["prop4"] = "ac-miss";
    row["par4"] = "";
    row["min4"] = 250;
    row["max4"] = 500;

    // 
    row["prop5"] = "red-dmg";
    row["par5"] = "";
    row["min5"] = 5;
    row["max5"] = 15;

    // 
    row["prop6"] = "abs-cold%";
    row["par6"] = "";
    row["min6"] = 5;
    row["max6"] = 7;

    // 
    row["prop7"] = "dmg-norm";
    row["par7"] = "";
    row["min7"] = 10;
    row["max7"] = 15;

    // 
    row["prop8"] = "att/lvl";
    row["par8"] = "";
    row["min8"] = 20;
    row["max8"] = 20;

  }

  // Manald Heal
  if (row["index"] === "Manald Heal") {

    //
    row["prop1"] = "manasteal";
    row["par1"] = "";
    row["min1"] = 7;
    row["max1"] = 14;

    // 
    row["prop2"] = "regen";
    row["par2"] = "";
    row["min2"] = 20;
    row["max2"] = 40;

    // 
    row["prop3"] = "regen-mana";
    row["par3"] = "";
    row["min3"] = 40;
    row["max3"] = 40;

    // 
    row["prop4"] = "red-mag";
    row["par4"] = "";
    row["min4"] = 1;
    row["max4"] = 5;

    // 
    row["prop5"] = "red-dmg";
    row["par5"] = "";
    row["min5"] = 1;
    row["max5"] = 5;

    // 
    row["prop6"] = "dmg-mag";
    row["par6"] = "";
    row["min6"] = 1;
    row["max6"] = 20;

  }

  // The Mahim-Oak Curio
  if (row["index"] === "The Mahim-Oak Curio") {

    //
    row["prop1"] = "red-dmg";
    row["par1"] = "";
    row["min1"] = 5;
    row["max1"] = 15;

    // 
    row["prop2"] = "red-mag";
    row["par2"] = "";
    row["min2"] = 5;
    row["max2"] = 15;

    // 
    row["prop3"] = "att%";
    row["par3"] = "";
    row["min3"] = 10;
    row["max3"] = 40;

    // 
    row["prop4"] = "enr/lvl";
    row["par4"] = "";
    row["min4"] = 4;
    row["max4"] = 4;

    // 
    row["prop5"] = "dex/lvl";
    row["par5"] = "";
    row["min5"] = 4;
    row["max5"] = 4;

    // 
    row["prop6"] = "str/lvl";
    row["par6"] = "";
    row["min6"] = 4;
    row["max6"] = 4;

    // 
    row["prop7"] = "gethit-skill";
    row["par7"] = "Inner Sight";
    row["min7"] = 40;
    row["max7"] = 30;

    // 
    row["prop8"] = "res-all";
    row["par8"] = "";
    row["min8"] = 0;
    row["max8"] = 0;


  }

  // The Stone of Jordan
  if (row["index"] === "The Stone of Jordan") {

    //
    row["prop1"] = "aura";
    row["par1"] = "Conviction";
    row["min1"] = 1;
    row["max1"] = 5;

    // 
    row["prop2"] = "mana%";
    row["par2"] = "";
    row["min2"] = 40;
    row["max2"] = 40;

    // 
    row["prop3"] = "dmg-norm";
    row["par3"] = "";
    row["min3"] = 1;
    row["max3"] = 20;

    // 
    row["prop4"] = "mana";
    row["par4"] = "";
    row["min4"] = 20;
    row["max4"] = 40;

    // 
    row["prop5"] = "dex/lvl";
    row["par5"] = "";
    row["min5"] = 2;
    row["max5"] = 2;

    // 
    row["prop6"] = "str/lvl";
    row["par6"] = "";
    row["min6"] = 2;
    row["max6"] = 2;

    // 
    row["prop7"] = "gethit-skill";
    row["par7"] = "Inner Sight";
    row["min7"] = 40;
    row["max7"] = 30;

  }

  // Bul Katho's Wedding Band
  if (row["index"] === "Bul Katho's Wedding Band") {

    //
    row["prop1"] = "allskills";
    row["par1"] = "";
    row["min1"] = 0;
    row["max1"] = 0;

    // 
    row["prop2"] = "lifesteal";
    row["par2"] = "";
    row["min2"] = 15;
    row["max2"] = 20;

    // 
    row["prop3"] = "dmg-norm";
    row["par3"] = "";
    row["min3"] = 1;
    row["max3"] = 20;

    // 
    row["prop4"] = "dmg-mag";
    row["par4"] = "";
    row["min4"] = 1;
    row["max4"] = 20;

    // 
    row["prop5"] = "dex/lvl";
    row["par5"] = "";
    row["min5"] = 2;
    row["max5"] = 2;

    // 
    row["prop6"] = "str/lvl";
    row["par6"] = "";
    row["min6"] = 2;
    row["max6"] = 2;

    // 
    row["prop7"] = "enr/lvl";
    row["par7"] = "";
    row["min7"] = 2;
    row["max7"] = 2;

    // 
    row["prop8"] = "att";
    row["par8"] = "";
    row["min8"] = 500;
    row["max8"] = 500;

    // 
    row["prop9"] = "mana-kill";
    row["par9"] = "";
    row["min9"] = 15;
    row["max9"] = 20;

  }

  // Carrion Wind
  if (row["index"] === "Carrion Wind") {

    //
    row["prop1"] = "gethit-skill";
    row["par1"] = "Poison Nova";
    row["min1"] = 35;
    row["max1"] = 35;

    // 
    row["prop2"] = "hit-skill";
    row["par2"] = "Twister";
    row["min2"] = 35;
    row["max2"] = 40;

    // 
    row["prop3"] = "lifesteal";
    row["par3"] = "";
    row["min3"] = 5;
    row["max3"] = 15;

    // 
    row["prop4"] = "ac-miss";
    row["par4"] = "";
    row["min4"] = 500;
    row["max4"] = 500;

    // 
    row["prop5"] = "res-pois";
    row["par5"] = "";
    row["min5"] = 40;
    row["max5"] = 90;

    // 
    row["prop6"] = "res-all";
    row["par6"] = "";
    row["min6"] = -10;
    row["max6"] = -30;

    // 
    row["prop7"] = "dmg-to-mana";
    row["par7"] = "";
    row["min7"] = 50;
    row["max7"] = 50;

    // 
    row["prop8"] = "charged";
    row["par8"] = "Plague Poppy";
    row["min8"] = 80;
    row["max8"] = 60;

  }

  // Atma's Scarab
  if (row["index"] === "Atma's Scarab") {

    //
    row["prop1"] = "hit-skill";
    row["par1"] = "Amplify Damage";
    row["min1"] = 40;
    row["max1"] = 1;

    // 
    row["prop2"] = "att%";
    row["par2"] = "";
    row["min2"] = 20;
    row["max2"] = 20;

    // 
    row["prop3"] = "dmg-pois";
    row["par3"] = "";
    row["min3"] = 300;
    row["max3"] = 500;

    // 
    row["prop4"] = "res-pois";
    row["par4"] = "";
    row["min4"] = 40;
    row["max4"] = 90;

    // 
    row["prop5"] = "res-all";
    row["par5"] = "";
    row["min5"] = -10;
    row["max5"] = -30;

    // 
    row["prop6"] = "light";
    row["par6"] = "";
    row["min6"] = 3;
    row["max6"] = 3;

    // 
    row["prop7"] = "thorns/lvl";
    row["par7"] = "";
    row["min7"] = 35;
    row["max7"] = 35;

  }

  // The Rising Sun
  if (row["index"] === "The Rising Sun") {

    //
    row["prop1"] = "fireskill";
    row["par1"] = "";
    row["min1"] = 2;
    row["max1"] = 3;

    // 
    row["prop2"] = "gethit-skill";
    row["par2"] = "Meteor";
    row["min2"] = 35;
    row["max2"] = 50;

    // 
    row["prop3"] = "abs-fire/lvl";
    row["par3"] = "";
    row["min3"] = 7;
    row["max3"] = 7;

    // 
    row["prop4"] = "dmg-fire";
    row["par4"] = "";
    row["min4"] = 1;
    row["max4"] = 50;

    // 
    row["prop5"] = "regen";
    row["par5"] = "";
    row["min5"] = 20;
    row["max5"] = 40;

    // 
    row["prop6"] = "light";
    row["par6"] = "";
    row["min6"] = 3;
    row["max6"] = 4;

  }

  // Highlord's Wrath
  if (row["index"] === "Highlord's Wrath") {

    //
    row["prop1"] = "allskills";
    row["par1"] = "";
    row["min1"] = 0;
    row["max1"] = 0;

    // 
    row["prop2"] = "swing2";
    row["par2"] = "";
    row["min2"] = 20;
    row["max2"] = 20;

    // 
    row["prop3"] = "deadly/lvl";
    row["par3"] = "";
    row["min3"] = 4;
    row["max3"] = 4;

    // 
    row["prop4"] = "res-ltng";
    row["par4"] = "";
    row["min4"] = 40;
    row["max4"] = 90;

    // 
    row["prop5"] = "res-all";
    row["par5"] = "";
    row["min5"] = -10;
    row["max5"] = -30;

    // 
    row["prop6"] = "thorns/lvl";
    row["par6"] = "";
    row["min6"] = 35;
    row["max6"] = 35;

    // 
    row["prop7"] = "dmg-ltng";
    row["par7"] = "";
    row["min7"] = 1;
    row["max7"] = 1000;

  }

  // Seraph's Hymn
  if (row["index"] === "Seraph's Hymn") {

    //
    row["prop1"] = "allskills";
    row["par1"] = "";
    row["min1"] = 0;
    row["max1"] = 0;

    // 
    row["prop2"] = "pal";
    row["par2"] = "";
    row["min2"] = 2;
    row["max2"] = 3;

    // 
    row["prop3"] = "dmg-demon";
    row["par3"] = "";
    row["min3"] = 50;
    row["max3"] = 100;

    // 
    row["prop4"] = "att-demon";
    row["par4"] = "";
    row["min4"] = 250;
    row["max4"] = 500;

    // 
    row["prop5"] = "dmg-undead";
    row["par5"] = "";
    row["min5"] = 50;
    row["max5"] = 100;

    // 
    row["prop6"] = "att-undead";
    row["par6"] = "";
    row["min6"] = 250;
    row["max6"] = 500;

    // 
    row["prop7"] = "light";
    row["par7"] = "";
    row["min7"] = 2;
    row["max7"] = 2;

  }

  // Mara's Kaleidoscope
  if (row["index"] === "Mara's Kaleidoscope") {

    //
    row["prop1"] = "aura";
    row["par1"] = "Salvation";
    row["min1"] = 1;
    row["max1"] = 1;

    // 
    row["prop2"] = "oskill";
    row["par2"] = "Shadow Master";
    row["min2"] = 63;
    row["max2"] = 63;

    // 
    row["prop3"] = "str";
    row["par3"] = "";
    row["min3"] = 1;
    row["max3"] = 1;

    // 
    row["prop4"] = "dex";
    row["par4"] = "";
    row["min4"] = 1;
    row["max4"] = 1;

    // 
    row["prop5"] = "enr";
    row["par5"] = "";
    row["min5"] = 1;
    row["max5"] = 1;

    // 
    row["prop6"] = "red-mag";
    row["par6"] = "";
    row["min6"] = 1;
    row["max6"] = 1;

    // 
    row["prop7"] = "red-dmg";
    row["par7"] = "";
    row["min7"] = 1;
    row["max7"] = 1;

  }

  // Nature's Peace
  if (row["index"] === "Nature's Peace") {

    //
    row["prop1"] = "rip";
    row["par1"] = "";
    row["min1"] = 1;
    row["max1"] = 1;

    // 
    row["prop2"] = "noheal";
    row["par2"] = "";
    row["min2"] = 1;
    row["max2"] = 1;

    // 
    row["prop3"] = "res-pois";
    row["par3"] = "";
    row["min3"] = 40;
    row["max3"] = 90;

    // 
    row["prop4"] = "res-all";
    row["par4"] = "";
    row["min4"] = -10;
    row["max4"] = -20;

    // 
    row["prop5"] = "red-dmg%";
    row["par5"] = "";
    row["min5"] = 5;
    row["max5"] = 15;

    // 
    row["prop6"] = "red-mag";
    row["par6"] = "";
    row["min6"] = 5;
    row["max6"] = 15;

    // 
    row["prop7"] = "charged";
    row["par7"] = "Oak Sage";
    row["min7"] = 80;
    row["max7"] = 40;

  }

  // Wisp
  if (row["index"] === "Wisp") {

    //
    row["prop1"] = "hit-skill";
    row["par1"] = "Lightning";
    row["min1"] = 35;
    row["max1"] = 40;

    // 
    row["prop2"] = "abs-ltng";
    row["par2"] = "";
    row["min2"] = 15;
    row["max2"] = 20;

    // 
    row["prop3"] = "mag%";
    row["par3"] = "";
    row["min3"] = 20;
    row["max3"] = 40;

    // 
    row["prop4"] = "dru";
    row["par4"] = "";
    row["min4"] = 1;
    row["max4"] = 2;

    // 
    row["prop5"] = "charged";
    row["par5"] = "Vines";
    row["min5"] = 100;
    row["max5"] = 40;

    // 
    row["prop6"] = "charged";
    row["par6"] = "Cycle of Life";
    row["min6"] = 100;
    row["max6"] = 40;

  }

  // Metalgrid
  if (row["index"] === "Metalgrid") {

    //
    row["prop1"] = "att";
    row["par1"] = "";
    row["min1"] = 500;
    row["max1"] = 500;

    // 
    row["prop2"] = "gethit-skill";
    row["par2"] = "Iron Maiden";
    row["min2"] = 40;
    row["max2"] = 50;

    // 
    row["prop3"] = "charged";
    row["par3"] = "Iron Golem";
    row["min3"] = 100;
    row["max3"] = 60;

    // 
    row["prop4"] = "ac";
    row["par4"] = "";
    row["min4"] = 500;
    row["max4"] = 500;

    // 
    row["prop5"] = "ac-hth";
    row["par5"] = "";
    row["min5"] = 500;
    row["max5"] = 500;

  }

  // Crescent Moon
  if (row["index"] === "Crescent Moon") {

    //
    row["prop1"] = "dmg-to-mana";
    row["par1"] = "";
    row["min1"] = 25;
    row["max1"] = 25;

    // 
    row["prop2"] = "mana";
    row["par2"] = "";
    row["min2"] = 100;
    row["max2"] = 150;

    // 
    row["prop3"] = "lifesteal";
    row["par3"] = "";
    row["min3"] = 5;
    row["max3"] = 15;

    // 
    row["prop4"] = "manasteal";
    row["par4"] = "";
    row["min4"] = 5;
    row["max4"] = 15;

    // 
    row["prop5"] = "red-mag";
    row["par5"] = "";
    row["min5"] = 5;
    row["max5"] = 15;

    // 
    row["prop6"] = "light";
    row["par6"] = "";
    row["min6"] = -2;
    row["max6"] = -2;

  }

  // The Cat's Eye
  if (row["index"] === "The Cat's Eye") {

    //
    row["prop1"] = "move2";
    row["par1"] = "";
    row["min1"] = 30;
    row["max1"] = 30;

    // 
    row["prop2"] = "swing2";
    row["par2"] = "";
    row["min2"] = 20;
    row["max2"] = 20;

    // 
    row["prop3"] = "ac-miss";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 500;

    // 
    row["prop4"] = "ac";
    row["par4"] = "";
    row["min4"] = 250;
    row["max4"] = 500;

    // 
    row["prop5"] = "dex/lvl";
    row["par5"] = "";
    row["min5"] = 4;
    row["max5"] = 4;

  }

  // Saracen's Chance
  if (row["index"] === "Saracen's Chance") {

    //
    row["prop1"] = "att";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 500;

    // 
    row["prop2"] = "gethit-skill";
    row["par2"] = "Iron Maiden";
    row["min2"] = 40;
    row["max2"] = 50;

    // 
    row["prop3"] = "str/lvl";
    row["par3"] = "";
    row["min3"] = 4;
    row["max3"] = 4;

    // 
    row["prop4"] = "enr/lvl";
    row["par4"] = "";
    row["min4"] = 4;
    row["max4"] = 4;

    // 
    row["prop5"] = "dex/lvl";
    row["par5"] = "";
    row["min5"] = 4;
    row["max5"] = 4;

    // 
    row["prop6"] = "vit";
    row["par6"] = "";
    row["min6"] = 0;
    row["max6"] = 0;

    // 
    row["prop7"] = "vit";
    row["par7"] = "";
    row["min7"] = 0;
    row["max7"] = 0;

  }

  // Dwarf Star
  if (row["index"] === "Dwarf Star") {

    //
    row["prop1"] = "abs-fire%";
    row["par1"] = "";
    row["min1"] = 15;
    row["max1"] = 30;

    // 
    row["prop2"] = "red-mag";
    row["par2"] = "";
    row["min2"] = 15;
    row["max2"] = 30;

    // 
    row["prop3"] = "red-dmg";
    row["par3"] = "";
    row["min3"] = 15;
    row["max3"] = 30;

    // 
    row["prop4"] = "gold%";
    row["par4"] = "";
    row["min4"] = 100;
    row["max4"] = 100;

  }

  // Raven Frost
  if (row["index"] === "Raven Frost") {

    //
    row["prop1"] = "att";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 500;

    // 
    row["prop2"] = "dmg-cold";
    row["par2"] = "";
    row["min2"] = 1;
    row["max2"] = 100;

    // 
    row["prop3"] = "nofreeze";
    row["par3"] = "";
    row["min3"] = 1;
    row["max3"] = 1;

    // 
    row["prop4"] = "mana";
    row["par4"] = "";
    row["min4"] = 50;
    row["max4"] = 100;

    // 
    row["prop5"] = "abs-cold%";
    row["par5"] = "";
    row["min5"] = 15;
    row["max5"] = 30;

    // 
    row["prop6"] = "dex/lvl";
    row["par6"] = "";
    row["min6"] = 4;
    row["max6"] = 4;

  }

  // BELT

  // Lenymo
  if (row["index"] === "Lenyms Cord") {

    //
    row["prop1"] = "regen-mana";
    row["par1"] = "";
    row["min1"] = 150;
    row["max1"] = 300;

    // 
    row["prop2"] = "mana";
    row["par2"] = "";
    row["min2"] = 40;
    row["max2"] = 100;

    // 
    row["prop3"] = "res-all";
    row["par3"] = "";
    row["min3"] = -10;
    row["max3"] = -40;

    // 
    row["prop4"] = "res-cold";
    row["par4"] = "";
    row["min4"] = 50;
    row["max4"] = 90;

    // 
    row["prop5"] = "res-ltng";
    row["par5"] = "";
    row["min5"] = 50;
    row["max5"] = 90;

    // 
    row["prop6"] = "light";
    row["par6"] = "";
    row["min6"] = 1;
    row["max6"] = 3;

    // 
    row["prop7"] = "skill";
    row["par7"] = 58;
    row["min7"] = 1;
    row["max7"] = 5;

    // 
    row["prop8"] = "sor";
    row["par8"] = "";
    row["min8"] = 1;
    row["max8"] = 2;

  }

  // Snakecord
  if (row["index"] === "Snakecord") {

    //
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 100;
    row["max1"] = 250;

    // 
    row["prop2"] = "ac/lvl";
    row["par2"] = "";
    row["min2"] = 25;
    row["max2"] = 25;

    // 
    row["prop3"] = "res-all";
    row["par3"] = "";
    row["min3"] = -10;
    row["max3"] = -30;

    // 
    row["prop4"] = "res-pois";
    row["par4"] = "";
    row["min4"] = 40;
    row["max4"] = 90;

    // 
    row["prop5"] = "regen";
    row["par5"] = "";
    row["min5"] = 15;
    row["max5"] = 25;

    // 
    row["prop6"] = "res-pois-len";
    row["par6"] = "";
    row["min6"] = 100;
    row["max6"] = 100;

    // 
    row["prop7"] = "dmg-pois";
    row["par7"] = "";
    row["min7"] = 100;
    row["max7"] = 400;

    // 
    row["prop8"] = "skill";
    row["par8"] = 265;
    row["min8"] = 4;
    row["max8"] = 10;

    // 
    row["prop9"] = "skill";
    row["par9"] = 278;
    row["min9"] = 4;
    row["max9"] = 10;

  }

  // Nightsmoke
  if (row["index"] === "Nightsmoke") {

    //
    row["prop1"] = "ac%/lvl";
    row["par1"] = "";
    row["min1"] = 20;
    row["max1"] = 20;

    // 
    row["prop2"] = "ac/lvl";
    row["par2"] = "";
    row["min2"] = 15;
    row["max2"] = 15;

    // 
    row["prop3"] = "res-all";
    row["par3"] = "";
    row["min3"] = -10;
    row["max3"] = -30;

    // 
    row["prop4"] = "res-fire";
    row["par4"] = "";
    row["min4"] = 40;
    row["max4"] = 90;

    // 
    row["prop5"] = "res-cold";
    row["par5"] = "";
    row["min5"] = 40;
    row["max5"] = 90;

    // 
    row["prop6"] = "dmg-to-mana";
    row["par6"] = "";
    row["min6"] = 50;
    row["max6"] = 50;

    // 
    row["prop7"] = "balance2";
    row["par7"] = "";
    row["min7"] = 50;
    row["max7"] = 50;

    // 
    row["prop8"] = "mana";
    row["par8"] = "";
    row["min8"] = 100;
    row["max8"] = 100;

    // 
    row["prop9"] = "skill";
    row["par9"] = 37;
    row["min9"] = 4;
    row["max9"] = 10;

    // 
    row["prop10"] = "sor";
    row["par10"] = "";
    row["min10"] = 1;
    row["max10"] = 2;

  }

  // Goldwrap
  if (row["index"] === "Goldwrap") {

    //
    row["prop1"] = "ac%/lvl";
    row["par1"] = "";
    row["min1"] = 40;
    row["max1"] = 40;

    // 
    row["prop2"] = "ac/lvl";
    row["par2"] = "";
    row["min2"] = 25;
    row["max2"] = 25;

    // 
    row["prop3"] = "swing2";
    row["par3"] = "";
    row["min3"] = 20;
    row["max3"] = 20;

    // 
    row["prop4"] = "mag%";
    row["par4"] = "";
    row["min4"] = 40;
    row["max4"] = 40;

    // 
    row["prop5"] = "gold%/lvl";
    row["par5"] = "";
    row["min5"] = 45;
    row["max5"] = 45;

    // 
    row["prop6"] = "light";
    row["par6"] = "";
    row["min6"] = 2;
    row["max6"] = 3;

    // 
    row["prop7"] = "cast2";
    row["par7"] = "";
    row["min7"] = 20;
    row["max7"] = 20;

    // 
    row["prop8"] = "mana%";
    row["par8"] = "";
    row["min8"] = 15;
    row["max8"] = 15;

    // 
    row["prop9"] = "charged";
    row["par9"] = "Find Item";
    row["min9"] = 100;
    row["max9"] = 30;

    // 
    row["prop10"] = "bar";
    row["par10"] = "";
    row["min10"] = 1;
    row["max10"] = 2;

  }

  // Bladebuckle
  if (row["index"] === "Bladebuckle") {

    //
    row["prop1"] = "ac%/lvl";
    row["par1"] = "";
    row["min1"] = 35;
    row["max1"] = 35;

    // 
    row["prop2"] = "ac/lvl";
    row["par2"] = "";
    row["min2"] = 20;
    row["max2"] = 20;

    // 
    row["prop3"] = "balance2";
    row["par3"] = "";
    row["min3"] = 40;
    row["max3"] = 40;

    // 
    row["prop4"] = "dex";
    row["par4"] = "";
    row["min4"] = 15;
    row["max4"] = 30;

    // 
    row["prop5"] = "str";
    row["par5"] = "";
    row["min5"] = 15;
    row["max5"] = 30;

    // 
    row["prop6"] = "red-dmg";
    row["par6"] = "";
    row["min6"] = 5;
    row["max6"] = 15;

    // 
    row["prop7"] = "thorns/lvl";
    row["par7"] = "";
    row["min7"] = 30;
    row["max7"] = 30;

    // 
    row["prop8"] = "dmg%";
    row["par8"] = "";
    row["min8"] = 10;
    row["max8"] = 25;

    // 
    row["prop9"] = "charged";
    row["par9"] = "Heart of Wolverine";
    row["min9"] = 100;
    row["max9"] = 30;

    // 
    row["prop10"] = "ass";
    row["par10"] = "";
    row["min10"] = 1;
    row["max10"] = 2;

  }

  // Nosferatu's Coil
  if (row["index"] === "Nosferatu's Coil") {

    //
    row["prop1"] = "slow";
    row["par1"] = "";
    row["min1"] = 40;
    row["max1"] = 40;

    // 
    row["prop2"] = "mana-kill";
    row["par2"] = "";
    row["min2"] = 4;
    row["max2"] = 10;

    // 
    row["prop3"] = "lifesteal";
    row["par3"] = "";
    row["min3"] = 5;
    row["max3"] = 15;

    // 
    row["prop4"] = "str";
    row["par4"] = "";
    row["min4"] = 15;
    row["max4"] = 30;

    // 
    row["prop5"] = "swing2";
    row["par5"] = "";
    row["min5"] = 20;
    row["max5"] = 20;

    // 
    row["prop6"] = "ac";
    row["par6"] = "";
    row["min6"] = 150;
    row["max6"] = 300;

    // 
    row["prop7"] = "ac%/lvl";
    row["par7"] = "";
    row["min7"] = 25;
    row["max7"] = 25;

    // 
    row["prop8"] = "dmg-mag";
    row["par8"] = "";
    row["min8"] = 1;
    row["max8"] = 20;

    // 
    row["prop9"] = "charged";
    row["par9"] = "Life Tap";
    row["min9"] = 100;
    row["max9"] = 12;

    // 
    row["prop10"] = "ac-miss";
    row["par10"] = "";
    row["min10"] = 250;
    row["max10"] = 500;

  }

  // Verdungo's Hearty Cord
  if (row["index"] === "Verdugo's Hearty Cord") {

    //
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 500;

    // 
    row["prop2"] = "balance2";
    row["par2"] = "";
    row["min2"] = 20;
    row["max2"] = 20;

    // 
    row["prop3"] = "regen";
    row["par3"] = "";
    row["min3"] = 25;
    row["max3"] = 50;

    // 
    row["prop4"] = "red-dmg%";
    row["par4"] = "";
    row["min4"] = 15;
    row["max4"] = 30;

    // 
    row["prop5"] = "ac-miss";
    row["par5"] = "";
    row["min5"] = 300;
    row["max5"] = 500;

    // 
    row["prop6"] = "ac/lvl";
    row["par6"] = "";
    row["min6"] = 35;
    row["max6"] = 35;

    // 
    row["prop7"] = "red-mag";
    row["par7"] = "";
    row["min7"] = 5;
    row["max7"] = 15;

  }

  // Arachnid Mesh
  if (row["index"] === "Arachnid Mesh") {

    //
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 500;

    // 
    row["prop2"] = "slow";
    row["par2"] = "";
    row["min2"] = 20;
    row["max2"] = 20;

    // 
    row["prop3"] = "cast3";
    row["par3"] = "";
    row["min3"] = 30;
    row["max3"] = 30;

    // 
    row["prop4"] = "mana%";
    row["par4"] = "";
    row["min4"] = 15;
    row["max4"] = 30;

    // 
    row["prop5"] = "hit-skill";
    row["par5"] = "Poison Nova";
    row["min5"] = 40;
    row["max5"] = 35;

    // 
    row["prop6"] = "charged";
    row["par6"] = "Venom";
    row["min6"] = 80;
    row["max6"] = 50;

  }

  // Arachnid Mesh
  if (row["index"] === "Arachnid Mesh") {

    //
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 500;

    // 
    row["prop2"] = "slow";
    row["par2"] = "";
    row["min2"] = 20;
    row["max2"] = 20;

    // 
    row["prop3"] = "cast3";
    row["par3"] = "";
    row["min3"] = 30;
    row["max3"] = 30;

    // 
    row["prop4"] = "mana%";
    row["par4"] = "";
    row["min4"] = 15;
    row["max4"] = 30;

    // 
    row["prop5"] = "hit-skill";
    row["par5"] = "Poison Nova";
    row["min5"] = 40;
    row["max5"] = 35;

    // 
    row["prop6"] = "charged";
    row["par6"] = "Venom";
    row["min6"] = 80;
    row["max6"] = 50;

  }

  // Thundergod's Vigor
  if (row["index"] === "Thudergod's Vigor") {

    //
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 500;

    // 
    row["prop2"] = "dmg-ltng";
    row["par2"] = "";
    row["min2"] = 1;
    row["max2"] = 1000;

    // 
    row["prop3"] = "gethit-skill";
    row["par3"] = "Fist of the Heavens";
    row["min3"] = 40;
    row["max3"] = 50;

    // 
    row["prop4"] = "abs-ltng%";
    row["par4"] = "";
    row["min4"] = 5;
    row["max4"] = 15;

    // 
    row["prop5"] = "res-ltng-max";
    row["par5"] = "";
    row["min5"] = 15;
    row["max5"] = 25;

    // 
    row["prop6"] = "str/lvl";
    row["par6"] = "";
    row["min6"] = 4;
    row["max6"] = 4;

    // 
    row["prop7"] = "enr/lvl";
    row["par7"] = "";
    row["min7"] = 4;
    row["max7"] = 4;

    // 
    row["prop8"] = "ama";
    row["par8"] = "";
    row["min8"] = 2;
    row["max8"] = 3;

    // 
    row["prop9"] = "skill";
    row["par9"] = 35;
    row["min9"] = 0;
    row["max9"] = 0;

    // 
    row["prop10"] = "skill";
    row["par10"] = 35;
    row["min10"] = 0;
    row["max10"] = 0;

  }

  // Snowclash
  if (row["index"] === "Snowclash") {

    //
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 500;

    // 
    row["prop2"] = "gethit-skill";
    row["par2"] = "Blizzard";
    row["min2"] = 40;
    row["max2"] = 50;

    // 
    row["prop3"] = "abs-cold%";
    row["par3"] = "";
    row["min3"] = 5;
    row["max3"] = 15;

    // 
    row["prop4"] = "res-cold-max";
    row["par4"] = "";
    row["min4"] = 15;
    row["max4"] = 25;

    // 
    row["prop5"] = "dmg-cold";
    row["par5"] = "";
    row["min5"] = 100;
    row["max5"] = 250;

    // 
    row["prop6"] = "sor";
    row["par6"] = "";
    row["min6"] = 2;
    row["max6"] = 3;

    // 
    row["prop7"] = "skill";
    row["par7"] = 60;
    row["min7"] = 0;
    row["max7"] = 0;

    // 
    row["prop8"] = "skill";
    row["par8"] = 55;
    row["min8"] = 0;
    row["max8"] = 0;
    // 
    row["prop9"] = "skill";
    row["par9"] = 60;
    row["min9"] = 0;
    row["max9"] = 0;

    // 
    row["prop10"] = "skill";
    row["par10"] = 55;
    row["min10"] = 0;
    row["max10"] = 0;

  }

  // Gloomstrap
  if (row["index"] === "Gloomstrap") {

    //
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 500;

    // 
    row["prop2"] = "manasteal";
    row["par2"] = "";
    row["min2"] = 5;
    row["max2"] = 15;

    // 
    row["prop3"] = "mana%";
    row["par3"] = "";
    row["min3"] = 15;
    row["max3"] = 25;

    // 
    row["prop4"] = "regen-mana";
    row["par4"] = "";
    row["min4"] = 100;
    row["max4"] = 250;

    // 
    row["prop5"] = "light";
    row["par5"] = "";
    row["min5"] = -3;
    row["max5"] = -3;

    // 
    row["prop6"] = "heal-kill";
    row["par6"] = "";
    row["min6"] = 5;
    row["max6"] = 15;

  }

  // Razortail
  if (row["index"] === "Razortail") {

    //
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 500;

    // 
    row["prop2"] = "ac/lvl";
    row["par2"] = "";
    row["min2"] = 20;
    row["max2"] = 20;

    // 
    row["prop3"] = "dmg-norm";
    row["par3"] = "";
    row["min3"] = 1;
    row["max3"] = 100;

    // 
    row["prop4"] = "pierce";
    row["par4"] = "";
    row["min4"] = 50;
    row["max4"] = 50;

    // 
    row["prop5"] = "dex/lvl";
    row["par5"] = "";
    row["min5"] = 4;
    row["max5"] = 4;

    // 
    row["prop6"] = "thorns/lvl";
    row["par6"] = "";
    row["min6"] = 35;
    row["max6"] = 35;

  }

  // String of Ears
  if (row["index"] === "String of Ears") {

    //
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 500;

    // 
    row["prop2"] = "ac/lvl";
    row["par2"] = "";
    row["min2"] = 40;
    row["max2"] = 40;

    // 
    row["prop3"] = "lifesteal";
    row["par3"] = "";
    row["min3"] = 5;
    row["max3"] = 15;

    // 
    row["prop4"] = "red-dmg%";
    row["par4"] = "";
    row["min4"] = 15;
    row["max4"] = 25;

    // 
    row["prop5"] = "red-mag";
    row["par5"] = "";
    row["min5"] = 15;
    row["max5"] = 25;

  }


//// CHARMS

  // Gheed's Fortune
  if (row["index"] === "Gheed's Fortune") {

    //
    row["prop1"] = "mag%";
    row["par1"] = "";
    row["min1"] = 40;
    row["max1"] = 100;

    // 
    row["prop2"] = "gold%";
    row["par2"] = "";
    row["min2"] = 150;
    row["max2"] = 300;

    // 
    row["prop3"] = "cheap";
    row["par3"] = "";
    row["min3"] = 15;
    row["max3"] = 50;

  }

  // Annihilus
  if (row["index"] === "Annihilus") {

    //
    row["prop1"] = "allskills";
    row["par1"] = "";
    row["min1"] = 0;
    row["max1"] = 0;

    // 
    row["prop2"] = "hp%";
    row["par2"] = "";
    row["min2"] = 10;
    row["max2"] = 20;

    // 
    row["prop3"] = "res-all";
    row["par3"] = "";
    row["min3"] = 0;
    row["max3"] = 0;

    // 
    row["prop4"] = "att%";
    row["par4"] = "";
    row["min4"] = 10;
    row["max4"] = 20;

    // 
    row["prop5"] = "addxp";
    row["par5"] = "";
    row["min5"] = 5;
    row["max5"] = 10;


  }

  // Hellfire Torch
  if (row["index"] === "Hellfire Torch") {

    //
    row["prop1"] = "randclassskill";
    row["par1"] = "";
    row["min1"] = 0;
    row["max1"] = 6;

    // 
    row["prop2"] = "all-stats";
    row["par2"] = "";
    row["min2"] = 0;
    row["max2"] = 0;

    // 
    row["prop3"] = "str";
    row["par3"] = "";
    row["min3"] = 10;
    row["max3"] = 25;

    // 
    row["prop4"] = "dex";
    row["par4"] = "";
    row["min4"] = 10;
    row["max4"] = 25;

    // 
    row["prop5"] = "res-all";
    row["par5"] = "";
    row["min5"] = 0;
    row["max5"] = 0;

    // 
    row["prop6"] = "res-fire";
    row["par6"] = "";
    row["min6"] = 10;
    row["max6"] = 20;

    // 
    row["prop7"] = "light";
    row["par7"] = "";
    row["min7"] = 8;
    row["max7"] = 8;

    // 
    row["prop8"] = "hit-skill";
    row["par8"] = 0;
    row["min8"] = 0;
    row["max8"] = 0;

    // 
    row["prop9"] = "charged";
    row["par9"] = "Find Item";
    row["min9"] = 40;
    row["max9"] = 40;

  }

});

D2RMM.writeTsv(uniqueitemsFilename, uniqueitems); 