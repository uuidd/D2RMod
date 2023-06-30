const magicPrefixFilename = 'global\\excel\\magicprefix.txt';
const magic_prefixes = D2RMM.readTsv(magicPrefixFilename);

const magicSuffixFilename = 'global\\excel\\magicsuffix.txt';
const magic_suffixes = D2RMM.readTsv(magicSuffixFilename);

const autoMagicFilename = 'global\\excel\\automagic.txt';
const auto_magics = D2RMM.readTsv(autoMagicFilename);

const group_max = Math.max(...magic_prefixes.rows.map(x => x.group), ...magic_suffixes.rows.map(x => x.group), ...auto_magics.rows.map(x => x.group));
const auto_magic_group_bow = group_max + 1;
const auto_magic_group_arrow = group_max + 2;
const auto_magic_group_throwing = group_max + 3;
const auto_magic_group_throwing_ajav = group_max + 4;

auto_magics.rows.push({
    Name: 'Magic Arrow Everywhere',
    version: 100,
    spawnable: 1,
    rare: 1,
    level: 1,
    levelreq: 1,
    frequency: 1,
    group: auto_magic_group_bow,
    mod1code: 'magicarrow',
    mod1min: 1,
    mod1max: 1,
    itype1: 'bow',
    itype2: 'xbow',
    itype3: 'abow',
    multiply: 0,
    'add\r': 0
});

auto_magics.rows.push({
    Name: 'Infinite Arrow',
    version: 100,
    spawnable: 1,
    rare: 1,
    level: 1,
    levelreq: 1,
    frequency: 1,
    group: auto_magic_group_arrow,
    mod1code: 'noconsume',
    mod1min: 100,
    mod1max: 100,
    itype1: 'bowq',
    itype2: 'xboq',
    multiply: 0,
    'add\r': 0
});

auto_magics.rows.push({
    Name: 'Infinite Throwing',
    version: 100,
    spawnable: 1,
    rare: 1,
    level: 1,
    levelreq: 1,
    frequency: 1,
    group: auto_magic_group_throwing,
    mod1code: 'noconsume',
    mod1min: 100,
    mod1max: 100,
    itype1: 'tkni',
    itype2: 'taxe',
    itype3: 'jave',
    multiply: 0,
    'add\r': 0
});

D2RMM.writeTsv(autoMagicFilename, auto_magics);

const weaponsFilename = 'global\\excel\\weapons.txt';
const weapons = D2RMM.readTsv(weaponsFilename);

const bow_types = ['bow', 'xbow', 'abow'];
const throwing_types = ['tkni', 'taxe', 'jave', 'ajav'];
var original_auto_magic_arrow = 0;
var original_auto_magic_throwing = 0;

weapons.rows.forEach(weapon => {
    if(bow_types.includes(weapon.type) === true)
    {
        if(config.infinite_arrow === true)
        {
            if(weapon['auto prefix'] === '')
            {
                weapon['auto prefix'] = auto_magic_group_bow;
            }
            else
            {
                original_auto_magic_arrow = weapon['auto prefix'];
            }
        }
    }
    else if(throwing_types.includes(weapon.type) === true)
    {
        if(config.infinite_throwing === true)
        {
            if(weapon['auto prefix'] === '')
            {
                weapon['auto prefix'] = auto_magic_group_throwing;
            }
            else if(weapon.type === 'ajav')
            {
                original_auto_magic_throwing = weapon['auto prefix'];
                weapon['auto prefix'] = auto_magic_group_throwing_ajav;
            }
        }

        if(config.infinite_throwing === true || config.mod_unique_throwing === true)
        {
            weapon.minstack = weapon.maxstack;
            weapon.spawnstack = weapon.maxstack;
        }
    }
});

D2RMM.writeTsv(weaponsFilename, weapons);

if(original_auto_magic_arrow !== 0 || original_auto_magic_throwing !== 0)
{
    const auto_magics = D2RMM.readTsv(autoMagicFilename);

    auto_magics.rows.every(auto_magic => {
        if(auto_magic.group > group_max)
        {
            return false;
        }

        if(auto_magic.group === original_auto_magic_arrow)
        {
            for(var i = 1; i <= 3; i++)
            {
                if(auto_magic['mod' + i + 'code'] === '')
                {
                    auto_magic['mod' + i + 'code'] = 'magicarrow';
                    auto_magic['mod' + i + 'min'] = 1;
                    auto_magic['mod' + i + 'max'] = 1;

                    break;
                }
            }
        }
        else if(auto_magic.group === original_auto_magic_throwing)
        {
            var new_auto_magic = {
                Name: 'Infinite Throwing',
                version: 100,
                spawnable: 1,
                rare: auto_magic.rare,
                level: auto_magic.level,
                levelreq: auto_magic.levelreq,
                frequency: auto_magic.frequency,
                group: auto_magic_group_throwing_ajav,
                itype1: 'ajav',
                multiply: 0,
                'add\r': 0
            };

            for(i = 1; i <= 3; i++)
            {
                if(auto_magic['mod' + i + 'code'] === '')
                {
                    new_auto_magic['mod' + i + 'code'] = 'noconsume';
                    new_auto_magic['mod' + i + 'min'] = 100;
                    new_auto_magic['mod' + i + 'max'] = 100;

                    break;
                }
                else
                {
                    new_auto_magic['mod' + i + 'code'] = auto_magic['mod' + i + 'code'];
                    new_auto_magic['mod' + i + 'param'] = auto_magic['mod' + i + 'param'];
                    new_auto_magic['mod' + i + 'min'] = auto_magic['mod' + i + 'min'];
                    new_auto_magic['mod' + i + 'max'] = auto_magic['mod' + i + 'max'];
                }
            }

            auto_magics.rows.push(new_auto_magic);
        }

        return true;
    });
    D2RMM.writeTsv(autoMagicFilename, auto_magics);
}

const miscFilename = 'global\\excel\\misc.txt';
const miscs = D2RMM.readTsv(miscFilename);

const arrow_types = ['bowq', 'xboq'];

var is_there_auto_prefix = false;
for(var i in miscs.headers)
{
    if(miscs.headers[i] === 'auto prefix')
    {
        is_there_auto_prefix = true;
    }
}

if(is_there_auto_prefix === false)
{
    var len = miscs.headers.length;
    miscs.headers[len] = miscs.headers[len - 1];
    miscs.headers[len - 1] = 'auto prefix';
}

miscs.rows.forEach(misc => {
    if(arrow_types.includes(misc.type) === true)
    {
        if(config.infinite_arrow === true)
        {
            misc['auto prefix'] = auto_magic_group_arrow;
        }

        if(config.infinite_arrow === true || config.mod_unique_bow)
        {
            misc.minstack = misc.maxstack;
            misc.spawnstack = misc.maxstack;
        }
    }
});

D2RMM.writeTsv(miscFilename, miscs);

const skillsFilename = 'global\\excel\\skills.txt';
const skills = D2RMM.readTsv(skillsFilename);

skills.rows.forEach(skill => {
    if(skill.decquant === 1 && skill.itypea1 === 'miss')
    {
        if(config.skill_noammo)
        {
            skill.decquant = '';
            skill.noammo = 1;
            skill.cltstfunc = '';
            skill.srvstfunc = '';
        }
    }
});

D2RMM.writeTsv(skillsFilename, skills);

if(config.drop_magic === true)
{
    const itemTypesFilename = 'global\\excel\\itemtypes.txt';
    const item_types = D2RMM.readTsv(itemTypesFilename);

    var arrow = item_types.rows.find(x => x.Code === 'bowq');
    var bolt = item_types.rows.find(x => x.Code === 'xboq');

    arrow.Rare = 1;
    arrow.Normal = 0;
    bolt.Rare = 1;
    bolt.Normal = 0;

    D2RMM.writeTsv(itemTypesFilename, item_types);

    var new_rows = [];
    magic_prefixes.rows.forEach(magic_prefix => {
        var is_there_amul = false;
        for(var i = 1; i <= 7; i++)
        {
            if(magic_prefix['itype' + i] === '')
            {
                break;
            }
            if(magic_prefix['itype' + i] === 'amul')
            {
                is_there_amul = true;
                break;
            }
        }

        if(is_there_amul === true && Math.floor(magic_prefix.version) >= 1)
        {
            new_rows.push({
                Name: magic_prefix.Name,
                version: magic_prefix.version,
                spawnable: magic_prefix.spawnable,
                rare: magic_prefix.rare,
                level: magic_prefix.level,
                maxlevel: magic_prefix.maxlevel,
                levelreq: magic_prefix.levelreq,
                frequency: magic_prefix.frequency,
                group: magic_prefix.group,
                mod1code: magic_prefix.mod1code,
                mod1param: magic_prefix.mod1param,
                mod1min: magic_prefix.mod1min,
                mod1max: magic_prefix.mod1max,
                mod2code: magic_prefix.mod2code,
                mod2param: magic_prefix.mod2param,
                mod2min: magic_prefix.mod2min,
                mod2max: magic_prefix.mod2max,
                mod3code: magic_prefix.mod3code,
                mod3param: magic_prefix.mod3param,
                mod3min: magic_prefix.mod3min,
                mod3max: magic_prefix.mod3max,
                itype1: 'bowq',
                itype2: 'xboq',
                multiply: magic_prefix.multiply,
                'add\r': magic_prefix['add\r']
            });
        }
    });

    new_rows.forEach(row => {
        magic_prefixes.rows.push(row);
    });

    D2RMM.writeTsv(magicPrefixFilename, magic_prefixes);

    new_rows = [];
    magic_suffixes.rows.forEach(magic_suffix => {
        var is_there_amul = false;
        for(var i = 1; i <= 7; i++)
        {
            if(magic_suffix['itype' + i] === '')
            {
                break;
            }
            if(magic_suffix['itype' + i] === 'amul')
            {
                is_there_amul = true;
                break;
            }
        }

        if((is_there_amul === true && Math.floor(magic_suffix.version) >= 1 && magic_suffix.mod1code.indexOf('cast') === -1) ||
           (Math.floor(magic_suffix.version) >= 1 && magic_suffix.itype1 === 'weap' && magic_suffix.mod1code.indexOf('swing') !== -1))
        {
            new_rows.push({
                Name: magic_suffix.Name,
                version: magic_suffix.version,
                spawnable: magic_suffix.spawnable,
                rare: magic_suffix.rare,
                level: magic_suffix.level,
                maxlevel: magic_suffix.maxlevel,
                levelreq: magic_suffix.levelreq,
                frequency: magic_suffix.frequency,
                group: magic_suffix.group,
                mod1code: magic_suffix.mod1code,
                mod1param: magic_suffix.mod1param,
                mod1min: magic_suffix.mod1min,
                mod1max: magic_suffix.mod1max,
                mod2code: magic_suffix.mod2code,
                mod2param: magic_suffix.mod2param,
                mod2min: magic_suffix.mod2min,
                mod2max: magic_suffix.mod2max,
                mod3code: magic_suffix.mod3code,
                mod3param: magic_suffix.mod3param,
                mod3min: magic_suffix.mod3min,
                mod3max: magic_suffix.mod3max,
                itype1: 'bowq',
                itype2: 'xboq',
                multiply: magic_suffix.multiply,
                'add\r': magic_suffix['add\r']
            });
        }
        else if(Math.floor(magic_suffix.version) >= 1 && magic_suffix.itype1 === 'mele' && magic_suffix.mod1code.indexOf('swing') !== -1)
        {
            new_rows.push({
                Name: magic_suffix.Name,
                version: magic_suffix.version,
                spawnable: magic_suffix.spawnable,
                rare: magic_suffix.rare,
                level: magic_suffix.level,
                maxlevel: magic_suffix.maxlevel,
                levelreq: magic_suffix.levelreq,
                frequency: magic_suffix.frequency,
                group: magic_suffix.group,
                mod1code: magic_suffix.mod1code,
                mod1param: magic_suffix.mod1param,
                mod1min: magic_suffix.mod1min,
                mod1max: magic_suffix.mod1max,
                mod2code: magic_suffix.mod2code,
                mod2param: magic_suffix.mod2param,
                mod2min: magic_suffix.mod2min,
                mod2max: magic_suffix.mod2max,
                mod3code: magic_suffix.mod3code,
                mod3param: magic_suffix.mod3param,
                mod3min: magic_suffix.mod3min,
                mod3max: magic_suffix.mod3max,
                itype1: 'xboq',
                multiply: magic_suffix.multiply,
                'add\r': magic_suffix['add\r']
            });
        }
    });

    new_rows.forEach(row => {
        magic_suffixes.rows.push(row);
    });

    D2RMM.writeTsv(magicSuffixFilename, magic_suffixes);
}

if(config.add_recipe === true)
{
    const cubeMainFilename = 'global\\excel\\cubemain.txt';
    const recipes = D2RMM.readTsv(cubeMainFilename);

    new_rows = [];
    recipes.rows.forEach(recipe => {
        if(recipe.enabled === '1' && recipe['input 1'] === '"amul,mag"' && recipe.output === '"usetype,crf"')
        {
            for(var i in arrow_types)
            {
                new_rows.push({
                    description: recipe.description.replaceAll('Amulet', i === 0 ? 'Arrow' : 'Bolt'),
                    enabled: 1,
                    version: recipe.version,
                    numinputs: recipe.numinputs,
                    'input 1': '"' + arrow_types[i] + ',mag"',
                    'input 2': recipe['input 2'],
                    'input 3': recipe['input 3'],
                    'input 4': recipe['input 4'],
                    'input 5': recipe['input 5'],
                    'input 6': recipe['input 6'],
                    'input 7': recipe['input 7'],
                    output: '"usetype,crf,qty=255"',
                    lvl: recipe.lvl,
                    plvl: recipe.plvl,
                    ilvl: recipe.ilvl,
                    'mod 1': recipe['mod 1'],
                    'mod 1 chance': recipe['mod 1 chance'],
                    'mod 1 param': recipe['mod 1 param'],
                    'mod 1 min': recipe['mod 1 min'],
                    'mod 1 max': recipe['mod 1 max'],
                    'mod 2': recipe['mod 2'],
                    'mod 2 chance': recipe['mod 2 chance'],
                    'mod 2 param': recipe['mod 2 param'],
                    'mod 2 min': recipe['mod 2 min'],
                    'mod 2 max': recipe['mod 2 max'],
                    'mod 3': recipe['mod 3'],
                    'mod 3 chance': recipe['mod 3 chance'],
                    'mod 3 param': recipe['mod 3 param'],
                    'mod 3 min': recipe['mod 3 min'],
                    'mod 3 max': recipe['mod 3 max'],
                    'mod 4': recipe['mod 4'],
                    'mod 4 chance': recipe['mod 4 chance'],
                    'mod 4 param': recipe['mod 4 param'],
                    'mod 4 min': recipe['mod 4 min'],
                    'mod 4 max': recipe['mod 4 max'],
                    'mod 5': recipe['mod 5'],
                    'mod 5 chance': recipe['mod 5 chance'],
                    'mod 5 param': recipe['mod 5 param'],
                    'mod 5 min': recipe['mod 5 min'],
                    'mod 5 max': recipe['mod 5 max'],
                    'b output': recipe['b output'],
                    'b lvl': recipe['b lvl'],
                    'b plvl': recipe['b plvl'],
                    'b ilvl': recipe['b ilvl'],
                    'b mod 1': recipe['b mod 1'],
                    'b mod 1 chance': recipe['b mod 1 chance'],
                    'b mod 1 param': recipe['b mod 1 param'],
                    'b mod 1 min': recipe['b mod 1 min'],
                    'b mod 1 max': recipe['b mod 1 max'],
                    'b mod 2': recipe['b mod 2'],
                    'b mod 2 chance': recipe['b mod 2 chance'],
                    'b mod 2 param': recipe['b mod 2 param'],
                    'b mod 2 min': recipe['b mod 2 min'],
                    'b mod 2 max': recipe['b mod 2 max'],
                    'b mod 3': recipe['b mod 3'],
                    'b mod 3 chance': recipe['b mod 3 chance'],
                    'b mod 3 param': recipe['b mod 3 param'],
                    'b mod 3 min': recipe['b mod 3 min'],
                    'b mod 3 max': recipe['b mod 3 max'],
                    'b mod 4': recipe['b mod 4'],
                    'b mod 4 chance': recipe['b mod 4 chance'],
                    'b mod 4 param': recipe['b mod 4 param'],
                    'b mod 4 min': recipe['b mod 4 min'],
                    'b mod 4 max': recipe['b mod 4 max'],
                    'b mod 5': recipe['b mod 5'],
                    'b mod 5 chance': recipe['b mod 5 chance'],
                    'b mod 5 param': recipe['b mod 5 param'],
                    'b mod 5 min': recipe['b mod 5 min'],
                    'b mod 5 max': recipe['b mod 5 max'],
                    'b output': recipe['b output'],
                    'c output': recipe['c output'],
                    'c lvl': recipe['c lvl'],
                    'c plvl': recipe['c plvl'],
                    'c ilvl': recipe['c ilvl'],
                    'c mod 1': recipe['c mod 1'],
                    'c mod 1 chance': recipe['c mod 1 chance'],
                    'c mod 1 param': recipe['c mod 1 param'],
                    'c mod 1 min': recipe['c mod 1 min'],
                    'c mod 1 max': recipe['c mod 1 max'],
                    'c mod 2': recipe['c mod 2'],
                    'c mod 2 chance': recipe['c mod 2 chance'],
                    'c mod 2 param': recipe['c mod 2 param'],
                    'c mod 2 min': recipe['c mod 2 min'],
                    'c mod 2 max': recipe['c mod 2 max'],
                    'c mod 3': recipe['c mod 3'],
                    'c mod 3 chance': recipe['c mod 3 chance'],
                    'c mod 3 param': recipe['c mod 3 param'],
                    'c mod 3 min': recipe['c mod 3 min'],
                    'c mod 3 max': recipe['c mod 3 max'],
                    'c mod 4': recipe['c mod 4'],
                    'c mod 4 chance': recipe['c mod 4 chance'],
                    'c mod 4 param': recipe['c mod 4 param'],
                    'c mod 4 min': recipe['c mod 4 min'],
                    'c mod 4 max': recipe['c mod 4 max'],
                    'c mod 5': recipe['c mod 5'],
                    'c mod 5 chance': recipe['c mod 5 chance'],
                    'c mod 5 param': recipe['c mod 5 param'],
                    'c mod 5 min': recipe['c mod 5 min'],
                    'c mod 5 max': recipe['c mod 5 max'],
                    'c output': recipe['c output'],
                    '*eol\r': 0
                });
            }
        }
    });

    new_rows.forEach(row => {
        recipes.rows.push(row);
    });

    D2RMM.writeTsv(cubeMainFilename, recipes);
}

if(config.mod_unique_bow === true || config.mod_unique_throwing === true)
{
    const weaponsFilename = 'global\\excel\\weapons.txt';
    const weapons = D2RMM.readTsv(weaponsFilename);

    const uniqueItemsFilename = 'global\\excel\\uniqueitems.txt';
    const uniques = D2RMM.readTsv(uniqueItemsFilename);

    uniques.rows.forEach(unique => {
        var weap = weapons.rows.find(x => x.code === unique.code);
        var type = weap !== undefined ? weap.type : undefined;

        if(config.mod_unique_bow === true && bow_types.includes(type) === true)
        {
            for(var i = 1; i <= 12; i++)
            {
                if(unique['prop' + i] === '')
                {
                    unique['prop' + i] = 'magicarrow';
                    unique['min' + i] = 1;
                    unique['max' + i] = 1;
                    break;
                }
                if(unique['prop' + i] === 'magicarrow' || unique['prop' + i] === 'explosivearrow')
                {
                    break;
                }
            }
        }
        else if(config.mod_unique_throwing === true && throwing_types.includes(type) === true)
        {
            for(i = 1; i <= 12; i++)
            {
                if(unique['prop' + i] === '')
                {
                    unique['prop' + i] = 'noconsume';
                    unique['min' + i] = 100;
                    unique['max' + i] = 100;
                    break;
                }
                if(unique['prop' + i] === 'rep-quant')
                {
                    unique['prop' + i] = 'noconsume';
                    unique['par' + i] = '';
                    unique['min' + i] = 100;
                    unique['max' + i] = 100;
                    break;
                }
            }
        }
    });

    D2RMM.writeTsv(uniqueItemsFilename, uniques);

    const setItemsFilename = 'global\\excel\\setitems.txt';
    const sets = D2RMM.readTsv(setItemsFilename);

    sets.rows.forEach(set => {
        var weap = weapons.rows.find(x => x.code === set.item);
        var type = weap !== undefined ? weap.type : undefined;

        if(config.mod_unique_bow === true && bow_types.includes(type) === true)
        {
            for(var i = 1; i <= 9; i++)
            {
                if(set['prop' + i] === '')
                {
                    set['prop' + i] = 'magicarrow';
                    set['min' + i] = 1;
                    set['max' + i] = 1;
                    break;
                }
                if(set['prop' + i] === 'magicarrow' || set['prop' + i] === 'explosivearrow')
                {
                    break;
                }
            }
        }
        else if(config.mod_unique_throwing === true && throwing_types.includes(type) === true)
        {
            for(i = 1; i <= 9; i++)
            {
                if(set['prop' + i] === '')
                {
                    set['prop' + i] = 'noconsume';
                    set['min' + i] = 100;
                    set['max' + i] = 100;
                    break;
                }
                if(set['prop' + i] === 'rep-quant')
                {
                    set['prop' + i] = 'noconsume';
                    set['par' + i] = '';
                    set['min' + i] = 100;
                    set['max' + i] = 100;
                    break;
                }
            }
        }
    });

    D2RMM.writeTsv(setItemsFilename, sets);
}
