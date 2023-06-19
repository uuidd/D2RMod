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

    // ����Ϊ���ΰ�����Ʒ(���0-128��Ϊ������Ƭ�д��ڵİ���)
    DisUniItem(row, config.dis_0, 0);
    DisUniItem(row, config.dis_1, 1);
    DisUniItem(row, config.dis_2, 2);
    DisUniItem(row, config.dis_3, 3);

});

D2RMM.writeTsv(setitemsFilename, setitems);
