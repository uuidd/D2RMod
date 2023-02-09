if(config.elite == true)
{
    const treasureclassexFilename = 'global\\excel\\treasureclassex.txt';
    const treasure_classes = D2RMM.readTsv(treasureclassexFilename);

    treasure_classes.rows.forEach(tc => {
        if(tc['Treasure Class'].match(/(^Act [2-5] (Equip|Melee) [A-C]$)|(^Act [1-5] \((N|H)\) (Equip|Melee|Bow) [A-C]$)|(^Act [4-5] Bow [A-C]$)/) != null)
        {
            tc.Prob9 = Math.floor(Math.max(tc.Prob9 / config.multiplier, 2 * Math.sqrt(config.multiplier)));
        }
    });

    D2RMM.writeTsv(treasureclassexFilename, treasure_classes);
}
