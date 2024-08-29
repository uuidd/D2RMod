const runesFilename = 'global\\excel\\runes.txt';
const runes = D2RMM.readTsv(runesFilename);

//unlock individual weapons
runes.rows.forEach((row) => {
    // enable ladder rune words
    if(config.enableLadder){
         row.firstLadderSeason = '';
         row.lastLadderSeason = '';
         //row['*Patch Release'] = '';
    }

    //unlock weapons
    if(config.weaponsUnlocked){
        if( ((row.itype1) === 'swor') || ((row.itype1) === 'axe') || ((row.itype1) === 'pole') || ((row.itype1) === 'mace') || ((row.itype1) === 'hamm') || ((row.itype1) === 'h2h') || ((row.itype1) === 'club') || ((row.itype1) === 'scep') || ((row.itype1) === 'miss') || ((row.itype1) === 'staf') || ((row.itype1) === 'mele') || ((row.itype1) === 'wand') || ((row.itype1) === 'spea') || ((row.itype1) === 'knif') ){
            row.itype1 = 'weap';
        }
        if( ((row.itype2) === 'swor') || ((row.itype2) === 'axe') || ((row.itype2) === 'pole') || ((row.itype2) === 'mace') || ((row.itype2) === 'hamm') || ((row.itype2) === 'h2h') || ((row.itype2) === 'club') || ((row.itype2) === 'scep') || ((row.itype2) === 'miss') || ((row.itype2) === 'staf') || ((row.itype1) === 'mele') || ((row.itype1) === 'wand') || ((row.itype1) === 'spea') || ((row.itype1) === 'knif') ){
            row.itype2 = 'weap';
        }
        if( ((row.itype3) === 'swor') || ((row.itype3) === 'axe') || ((row.itype3) === 'pole') || ((row.itype3) === 'mace') || ((row.itype3) === 'hamm') || ((row.itype3) === 'h2h') || ((row.itype3) === 'club') || ((row.itype3) === 'scep') || ((row.itype3) === 'miss') || ((row.itype3) === 'staf') || ((row.itype1) === 'mele') || ((row.itype1) === 'wand') || ((row.itype1) === 'spea') || ((row.itype1) === 'knif') ){
            row.itype3 = 'weap';
        }
    }

    //unlock shields
    if(config.shieldsUnlocked){
        if( (row.itype1) === 'pala' ){
            row.itype1 = 'shld';
        }
        if( (row.itype2) === 'pala' ){
            row.itype2 = 'shld';
        }
        if( (row.itype3) === 'pala' ){
            row.itype3 = 'shld';
        } 
    }

    //shields to armor
    if(config.shieldsToArmor){
        if( (row.itype1 === 'shld') && (row.itype2 !== 'tors') && (row.itype3 !== 'tors') && (row.itype4 !== 'tors') && (row.itype5 !== 'tors') && (row.itype6 !== 'tors') ){
            if( (row.itype2) === '' ){row.itype2 = 'tors';}
            else if( (row.itype3) === '' ){row.itype3 = 'tors';}
            else if( (row.itype4) === '' ){row.itype4 = 'tors';}
            else if( (row.itype5) === '' ){row.itype5 = 'tors';}
            else if( (row.itype6) === '' ){row.itype6 = 'tors';}
        }
        if( (row.itype2 === 'shld') && (row.itype1 !== 'tors') && (row.itype3 !== 'tors') && (row.itype4 !== 'tors') && (row.itype5 !== 'tors') && (row.itype6 !== 'tors') ){
            if( (row.itype3) === '' ){row.itype3 = 'tors';}
            else if( (row.itype4) === '' ){row.itype4 = 'tors';}
            else if( (row.itype5) === '' ){row.itype5 = 'tors';}
            else if( (row.itype6) === '' ){row.itype6 = 'tors';}
        }
        if( (row.itype3 === 'shld') && (row.itype1 !== 'tors') && (row.itype2 !== 'tors') && (row.itype4 !== 'tors') && (row.itype5 !== 'tors') && (row.itype6 !== 'tors') ){
            if( (row.itype4) === '' ){row.itype4 = 'tors';}
            else if( (row.itype5) === '' ){row.itype5 = 'tors';}
            else if( (row.itype6) === '' ){row.itype6 = 'tors';}
        } 
    }

    //armor to shields
    //now we have to actually check for new additions and changes
    if(config.armorToShields){
        if( (row.itype1 === 'tors') && (row.itype2 !== 'shld') && (row.itype3 !== 'shld') && (row.itype4 !== 'shld') && (row.itype5 !== 'shld') && (row.itype6 !== 'shld') ){
            if( (row.itype2) === '' ){row.itype2 = 'shld';}
            else if( (row.itype3) === '' ){row.itype3 = 'shld';}
            else if( (row.itype4) === '' ){row.itype4 = 'shld';}
            else if( (row.itype5) === '' ){row.itype5 = 'shld';}
            else if( (row.itype6) === '' ){row.itype6 = 'shld';}
        }
        if( (row.itype2 === 'tors') && (row.itype1 !== 'shld') && (row.itype3 !== 'shld') && (row.itype4 !== 'shld') && (row.itype5 !== 'shld') && (row.itype6 !== 'shld') ){
            if( (row.itype3) === '' ){row.itype3 = 'shld';}
            else if( (row.itype4) === '' ){row.itype4 = 'shld';}
            else if( (row.itype5) === '' ){row.itype5 = 'shld';}
            else if( (row.itype6) === '' ){row.itype6 = 'shld';}
        }
        if( (row.itype3 === 'tors') && (row.itype1 !== 'shld') && (row.itype2 !== 'shld') && (row.itype4 !== 'shld') && (row.itype5 !== 'shld') && (row.itype6 !== 'shld') ){
            if( (row.itype4) === '' ){row.itype4 = 'shld';}
            else if( (row.itype5) === '' ){row.itype5 = 'shld';}
            else if( (row.itype6) === '' ){row.itype6 = 'shld';}
        } 
    }

    //helms to shields
    //now we have to actually check for new additions and changes
    if(config.helmsToShields){
        if( (row.itype1 === 'helm') && (row.itype2 !== 'shld') && (row.itype3 !== 'shld') && (row.itype4 !== 'shld') && (row.itype5 !== 'shld') && (row.itype6 !== 'shld') ){
            if( (row.itype2) === '' ){row.itype2 = 'shld';}
            else if( (row.itype3) === '' ){row.itype3 = 'shld';}
            else if( (row.itype4) === '' ){row.itype4 = 'shld';}
            else if( (row.itype5) === '' ){row.itype5 = 'shld';}
            else if( (row.itype6) === '' ){row.itype6 = 'shld';}
        }
        if( (row.itype2 === 'helm') && (row.itype1 !== 'shld') && (row.itype3 !== 'shld') && (row.itype4 !== 'shld') && (row.itype5 !== 'shld') && (row.itype6 !== 'shld') ){
            if( (row.itype3) === '' ){row.itype3 = 'shld';}
            else if( (row.itype4) === '' ){row.itype4 = 'shld';}
            else if( (row.itype5) === '' ){row.itype5 = 'shld';}
            else if( (row.itype6) === '' ){row.itype6 = 'shld';}
        }
        if( (row.itype3 === 'helm') && (row.itype1 !== 'shld') && (row.itype2 !== 'shld') && (row.itype4 !== 'shld') && (row.itype5 !== 'shld') && (row.itype6 !== 'shld') ){
            if( (row.itype4) === '' ){row.itype4 = 'shld';}
            else if( (row.itype5) === '' ){row.itype5 = 'shld';}
            else if( (row.itype6) === '' ){row.itype6 = 'shld';}
        } 
    }

    //unlock armors - the last step
    if(config.armorUnlocked){
        if( (row.itype1 === 'tors') || (row.itype1 === 'helm') ){
            row.itype1 = 'armo';
        }
        if( (row.itype2 === 'tors') || (row.itype2 === 'helm') ){
            row.itype2 = 'armo';
        }
        if( (row.itype3 === 'tors') || (row.itype3 === 'helm') ){
            row.itype3 = 'armo';
        }
        if( (row.itype4 === 'tors') || (row.itype4 === 'helm') ){
            row.itype4 = 'armo';
        }
        if( (row.itype5 === 'tors') || (row.itype5 === 'helm') ){
            row.itype5 = 'armo';
        }
        if( (row.itype6 === 'tors') || (row.itype6 === 'helm') ){
            row.itype6 = 'armo';
        }
        
    }

    
});

// Save changes
D2RMM.writeTsv(runesFilename, runes);


//if enabling all, need to check for runes that have different effect for armor vs weapons - perhaps just go with the weapon version, disable armor version?

/* 
===Changes===
v1.4.2
- Added option for shield runewords to also work in armor.
- Added option for armor runewords to also work in shields.
- Added option for helm runewords to also work in shields.
- Added option for all torso & helm runewords to work in any armor
- Fixed unlocking all weapons to include 'mele' code item type. Some melee rune words were not unlocked for ranged weapons, but now all weapon rune words should work on all weapons.
- Fixed unlocking all weapons to include 'wand' code item type as it was still restricted to wand items, now wand rune words should work on all weapons.
 */