const difficulties_filename = 'global\\excel\\difficultylevels.txt';
const difficulties = D2RMM.readTsv(difficulties_filename);

difficulties.rows.forEach(difficulty => {
    if(config.gamble === true)
    {
        difficulty.GambleRare = config.rare * 1000;
        difficulty.GambleSet = config.set * 1000;
        difficulty.GambleUnique = config.unique * 1000;
    }

    if(config.normal === true && difficulty.Name === 'Normal')
    {
        difficulty.GambleUber = 0;
        difficulty['GambleUltra\r'] = 0;
    }
    if(config.nightmare === true && difficulty.Name === 'Nightmare')
    {
        difficulty.GambleUber = 10000;
        difficulty['GambleUltra\r'] = 0;
    }
    if(config.hell === true && difficulty.Name === 'Hell')
    {
        difficulty.GambleUber = 0;
        difficulty['GambleUltra\r'] = 10000;
    }
});

D2RMM.writeTsv(difficulties_filename, difficulties);

if(config.add_missing_item === true)
{
    const weapons = D2RMM.readTsv('global\\excel\\weapons.txt');
    const armors = D2RMM.readTsv('global\\excel\\armor.txt');

    var missing_types = ['scep', 'staf', 'wand', 'abow', 'ajav', 'aspe', 'head', 'phlm', 'ashd', 'orb', 'pelt'];
    var missing_items = {};

    weapons.rows.forEach(weapon => {
        if(missing_types.includes(weapon.type) === true && weapon.code === weapon.normcode && weapon.spawnable === '1')
        {
            if(missing_items[weapon.code] === undefined)
            {
                missing_items[weapon.code] = weapon.name;
            }
        }
    });

    armors.rows.forEach(armor => {
        if(missing_types.includes(armor.type) === true && armor.code === armor.normcode && armor.spawnable === '1')
        {
            if(missing_items[armor.code] === undefined)
            {
                missing_items[armor.code] = armor.name;
            }
        }
    });

    const gamble_filename = 'global\\excel\\gamble.txt';
    const gamble_items = D2RMM.readTsv(gamble_filename);

    for(var code in missing_items)
    {
        gamble_items.rows.push({
            name: missing_items[code],
            'code\r': code
        });
    }

    D2RMM.writeTsv(gamble_filename, gamble_items);
}

if(config.nolimit === true)
{
    const uniques_filename = 'global\\excel\\uniqueitems.txt';
    const uniques = D2RMM.readTsv(uniques_filename);

    uniques.rows.forEach(unique => {
        unique.nolimit = 1;
    });

    D2RMM.writeTsv(uniques_filename, uniques);
}
