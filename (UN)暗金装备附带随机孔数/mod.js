const uniqueitemsFilename = 'global\\excel\\uniqueitems.txt';
const uniqueitems = D2RMM.readTsv(uniqueitemsFilename);
uniqueitems.rows.forEach((row) => {
    if (config.addSocket) {
        row['prop12'] = 'sock';
        row['min12'] = 1;
        row['max12'] = 6;
    }
})
D2RMM.writeTsv(uniqueitemsFilename, uniqueitems);
