const levelsFilename = 'global\\excel\\levels.txt';
const levels = D2RMM.readTsv(levelsFilename);

// *��BUG������ԭ��ԭ���Ǵ���һ��txtռ����ϵͳ�ڴ�,����MOD�������޷�ɾ������Խ*Խ��
// �رյ�txtռ��,MOD����������INSTALLһ�¾�����

function SetData(row, colName) {
    if (row[colName] !== '') {
        row[colName] = Math.floor(row[colName] * config.multiplier);
    }
}

levels.rows.forEach((row) => {
    SetData(row, 'MonDen');
    SetData(row, 'MonDen(N)');
    SetData(row, 'MonDen(H)');

    SetData(row, 'MonUMin');
    SetData(row, 'MonUMax');

    SetData(row, 'MonUMin(N)');
    SetData(row, 'MonUMax(N)');

    SetData(row, 'MonUMin(H)');
    SetData(row, 'MonUMax(H)');        
});

D2RMM.writeTsv(levelsFilename, levels);
