const setitemsFilename = 'global\\excel\\setitems.txt';
const setitems = D2RMM.readTsv(setitemsFilename);

function DisUniItem(row, isDis, id)
{
    if (isDis && row[`*ID`] === id)
    {
        row['enabled'] = 0;
    }
}

setitems.rows.forEach((row) =>
{

    // 以下为屏蔽暗金物品(编号0-128均为非资料片中存在的暗金)
    DisUniItem(row, config.dis_0, 0);
    DisUniItem(row, config.dis_1, 1);
    DisUniItem(row, config.dis_2, 2);
    DisUniItem(row, config.dis_3, 3);

});

D2RMM.writeTsv(setitemsFilename, setitems);
