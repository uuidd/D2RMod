const weaponsFilename = 'global\\excel\\weapons.txt';
const weapons = D2RMM.readTsv(weaponsFilename);

//unlock for all individual weapons
weapons.rows.forEach((row) => {
    row.hasinv = 1;
    row.gemsockets = 6;
});

// Save changes
D2RMM.writeTsv(weaponsFilename, weapons);


const armorFilename = 'global\\excel\\armor.txt';
const armor = D2RMM.readTsv(armorFilename);

//unlock individual armors
armor.rows.forEach((row) => {

    // potentially limit helms to 3 sockets to better suit runewords phlm
    if( (!config.fourSocketHelms) && ((row.type == 'helm') || (row.type == 'helm') || (row.type == 'circ') || (row.type == 'phlm')) ){
        row.gemsockets = 3;
    }else if(row.hasinv == 1){
        //set socket limits to 6 for all remaining enabled gear
        row.gemsockets = 6;
    }

    //enable socketed gloves - set to 4 here as the limits will actually be controlled in itemtypes file
    if(config.socketGloves){
        if(row.type == 'glov'){
            row.hasinv = 1;
            row.gemsockets = 4;
            row.gemapplytype = config.glovesBehavior;
        }
    }

    //enable socketed boots - set to 4 here as the limits will actually be controlled in itemtypes file
    if(config.socketBoots){
        if(row.type == 'boot'){
            row.hasinv = 1;
            row.gemsockets = 4;
            row.gemapplytype = config.bootsBehavior;
        }
    }

    //enable socketed belts - set to 4 here as the limits will actually be controlled in itemtypes file
    if(config.socketBelts){
        if(row.type == 'belt'){
            row.hasinv = 1;
            row.gemsockets = 4;
            row.gemapplytype = config.beltsBehavior;
        }
    }
});

// Save changes
D2RMM.writeTsv(armorFilename, armor);

const miscFilename = 'global\\excel\\misc.txt';
const misc = D2RMM.readTsv(miscFilename);

misc.rows.forEach((row) => {
    //enable socketed rings & amulets - also need to change the in itemtypes file
    if(config.socketJewelry){
        if( (row.type == 'ring') || (row.type == 'amul') ){
            row.hasinv = 1;
            row.gemsockets = 1;
            row.gemapplytype = config.jewelryBehavior;
        }
    }
});

// Save changes
D2RMM.writeTsv(miscFilename, misc);

//itemtypes limits increase
const itemtypesFilename = 'global\\excel\\itemtypes.txt';
const itemtypes = D2RMM.readTsv(itemtypesFilename);

//max sockets of item types for existing enabled items
itemtypes.rows.forEach((row) => {
    if( (row.MaxSockets1 > 0) && (config.gearRank != 'elite') && (config.gearRank != 'exceptional') ){
        row.MaxSockets1 = 6;
    }
    if( (row.MaxSockets2 > 0) && (config.gearRank != 'elite') ) {
        row.MaxSockets2 = 6;
    }
    if( row.MaxSockets3 > 0 ){
        row.MaxSockets3 = 6;
    }
});

//enable sockets for throwing items
itemtypes.rows.forEach((row) => {
    if( (config.socketThrowing) && ((row.Code == 'jave') || (row.Code == 'tkni') || (row.Code == 'taxe') ) ){
        row.MaxSockets1 = 6;
        row.MaxSockets2 = 6;
        row.MaxSockets3 = 6;
    }
});

//enable sockets for gloves
itemtypes.rows.forEach((row) => {
    if( (config.socketGloves) && (row.Code == 'glov') ){
        if( config.glovesSockets == 'gearLevel'){
            row.MaxSockets1 = 2;
            row.MaxSockets2 = 3;
            row.MaxSockets3 = 4;
        }else{
            row.MaxSockets1 = config.glovesSockets;
            row.MaxSockets2 = config.glovesSockets;
            row.MaxSockets3 = config.glovesSockets;
        }
    }
});

//enable sockets for boots
itemtypes.rows.forEach((row) => {
    if( (config.socketBoots) && (row.Code == 'boot') ){
        if( config.bootsSockets == 'gearLevel'){
            row.MaxSockets1 = 2;
            row.MaxSockets2 = 3;
            row.MaxSockets3 = 4;
        }else{
            row.MaxSockets1 = config.bootsSockets;
            row.MaxSockets2 = config.bootsSockets;
            row.MaxSockets3 = config.bootsSockets;
        }
    }
});

//enable sockets for belts
itemtypes.rows.forEach((row) => {
    if( (config.socketBelts) && (row.Code == 'belt') ){
        if( config.beltsSockets == 'gearLevel'){
            row.MaxSockets1 = 1;
            row.MaxSockets2 = 2;
            row.MaxSockets3 = 2;
        }else{
            row.MaxSockets1 = config.beltsSockets;
            row.MaxSockets2 = config.beltsSockets;
            row.MaxSockets3 = config.beltsSockets;
        }
    }
});

//enable sockets for jewelry
itemtypes.rows.forEach((row) => {
    if( (config.socketJewelry) && ((row.Code == 'ring') || (row.Code == 'amul')) ){
        row.MaxSockets1 = 1;
        row.MaxSockets2 = 1;
        row.MaxSockets3 = 1;
    }
});

// Save changes
D2RMM.writeTsv(itemtypesFilename, itemtypes);


//TO DO
// add javelins and throwing stuff
/* 
===Changes===
- Changed defaults and updated config descriptions as white items seem to have low item level, even when upgraded to exceptional or elite
 */
