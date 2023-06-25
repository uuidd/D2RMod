// ǰ׺�޸�
// (1)�޸�maxlevel����Ʒ�ͳ��͸߳��ߵ�����Ϸ��ʵ����Ч,���Դ˷���ֻ�ܷ���
// (2)���εĵͼ���׺����,�ڿ����е͵ȼ������������Ʒ���������׺ʱ��Ϸ������,���Դ˷���Ҳ����
// (3)���Ψһ�ܲ��õķ����������ε͵ȼ��Ĵ�׺,���øߵȼ��Ĵ�׺levelΪ1
// ��Ȼ��ᵼ�µ͵ȼ���Ʒ���ߵȴ�׺��������ȼ����ǲ����,����ֻ�д˷�������
const magicprefixFilename = 'global\\excel\\magicprefix.txt';
const magicprefix = D2RMM.readTsv(magicprefixFilename);

// ֱ�����������׺����
function DisGroup(row, group)
{
    if (row.version !== '0' && row.group === ('' + group)) row.spawnable = 0;
}


function DisSkilltab(row, classspecific, mod1param)
{
    if (row.classspecific === classspecific && row.mod1code === 'skilltab' && row.mod1param === ('' + mod1param)) row.spawnable = 0;
}

magicprefix.rows.forEach((row) =>
{
    // ����ǰ׺��
    if (config.dis_per101) DisGroup(row, 101);
    // 102ħ���˺�����,�ٷ�����
    // 103��С����
    if (config.dis_per103) DisGroup(row, 103);
    // 104+�����,ֻ�����鱦(��)9max(��)15max,�����ϵ��Ǳ��ٷ����ε�,610��������Ҳ��
    if (config.dis_per104)
    {
        if (row.version !== '0' && row.group === '104')
        {
            row.level = 1;
            if (row.itype1 === 'jewl' && row.mod1max < 9) row.spawnable = 0;
            if (row.itype1 !== 'jewl') row.spawnable = 0;
        }
    }
    // 105�˺���ǿ,ֻ��������300ed(���ȼ�����������(�뉺)),�鱦(��)30ed(��)30~40ed,ͷ��ed��׺������,529~532,535��Ϊ�ٷ�����,533��Ϊ(�뉺)��׺�ٷ�����,���һ��������300ed
    if (config.dis_per105)
    {
        if (row.version !== '0' && row.group === '105')
        {
            row.level = 1;
            if (row.itype1 === 'weap' && row.mod1max < 300) row.spawnable = 0;
            if (row.itype1 === 'jewl' && row.mod1max < 30) row.spawnable = 0;
            if (row.itype1 === 'weap' && row.mod1param === '6') row.spawnable = 1;// 533��Ϊ(�뉺)��׺�ٷ�����
        }
    }
    // 106��
    if (config.dis_per107) DisGroup(row, 107);
    if (config.dis_per108) DisGroup(row, 108);
    if (config.dis_per109) DisGroup(row, 109);
    if (config.dis_per110) DisGroup(row, 110);
    // 111����+�����,����С�д��3|6|10max+20|48|76ar,����(��)150+250ar(��)200+300ar,528��Ϊ����,539��Ϊӥ��,541��Ϊ��Ӱ,
    if (config.dis_per111)
    {
        if (row.version !== '0' && row.group === '111')
        {
            row.level = 1;
            if (row.mod1code === 'att' && row.itype1 === 'lcha' && row.mod1max < 76) row.spawnable = 0;
            if (row.mod1code === 'att' && row.itype1 === 'mcha' && row.mod1max < 48) row.spawnable = 0;
            if (row.mod1code === 'att' && row.itype1 === 'weap' && row.mod1max < 250) row.spawnable = 0;
        }
    }
    if (config.dis_per112) DisGroup(row, 112);
    if (config.dis_per113) DisGroup(row, 113);
    if (config.dis_per114) DisGroup(row, 114);
    // 115+����,����С�д��17|34|59,��ָ����90~120,�鱦�ķ���������
    if (config.dis_per115)
    {
        if (row.version !== '0' && row.group === '115')
        {
            row.level = 1;
            if (row.itype1 === 'lcha' && row.mod1max < 59) row.spawnable = 0;
            if (row.itype1 === 'mcha' && row.mod1max < 34) row.spawnable = 0;
            if (row.itype1 === 'scha' && row.mod1max < 17) row.spawnable = 0;
            if (row.itype1 !== 'scha' && row.itype1 !== 'mcha' && row.itype1 !== 'lcha' && row.mod1max < 90) row.spawnable = 0;
        }
    }
    // 116+ȫ��,����С�д��5|8|15,����ͷ��20~30,��ָ11~15,����20~30,�鱦10~15
    if (config.dis_per116)
    {
        if (row.version !== '0' && row.group === '116')
        {
            row.level = 1;
            if (row.itype1 === 'lcha' && row.mod1max < 15) row.spawnable = 0;
            if (row.itype1 === 'mcha' && row.mod1max < 8) row.spawnable = 0;
            if (row.itype1 === 'shld' && row.mod1max < 20) row.spawnable = 0;
            if (row.itype1 === 'amul' && row.mod1max < 20) row.spawnable = 0;//����ͷ����һ��
            if (row.itype1 === 'ring' && row.mod1max < 11) row.spawnable = 0;
        }
    }
    // 117~120��Ԫ�ص���,����С�д��11|15|30,����ͷ��Ь30~40,��ָ30,�鱦30
    if (config.dis_per117)
    {
        if (row.version !== '0' && row.group === '117')
        {
            row.level = 1;
            if (row.itype1 === 'lcha' && row.mod1max < 30) row.spawnable = 0;
            if (row.itype1 === 'mcha' && row.mod1max < 15) row.spawnable = 0;
            if (row.itype1 === 'scha' && row.mod1max < 11) row.spawnable = 0;
            if (row.itype1 !== 'scha' && row.itype1 !== 'mcha' && row.itype1 !== 'lcha' && row.mod1max < 30) row.spawnable = 0;
        }
        if (row.version !== '0' && row.group === '118')
        {
            row.level = 1;
            if (row.itype1 === 'lcha' && row.mod1max < 30) row.spawnable = 0;
            if (row.itype1 === 'mcha' && row.mod1max < 15) row.spawnable = 0;
            if (row.itype1 === 'scha' && row.mod1max < 11) row.spawnable = 0;
            if (row.itype1 !== 'scha' && row.itype1 !== 'mcha' && row.itype1 !== 'lcha' && row.mod1max < 30) row.spawnable = 0;
        }
        if (row.version !== '0' && row.group === '119')
        {
            row.level = 1;
            if (row.itype1 === 'lcha' && row.mod1max < 30) row.spawnable = 0;
            if (row.itype1 === 'mcha' && row.mod1max < 15) row.spawnable = 0;
            if (row.itype1 === 'scha' && row.mod1max < 11) row.spawnable = 0;
            if (row.itype1 !== 'scha' && row.itype1 !== 'mcha' && row.itype1 !== 'lcha' && row.mod1max < 30) row.spawnable = 0;
        }
        if (row.version !== '0' && row.group === '120')
        {
            row.level = 1;
            if (row.itype1 === 'lcha' && row.mod1max < 30) row.spawnable = 0;
            if (row.itype1 === 'mcha' && row.mod1max < 15) row.spawnable = 0;
            if (row.itype1 === 'scha' && row.mod1max < 11) row.spawnable = 0;
            if (row.itype1 !== 'scha' && row.itype1 !== 'mcha' && row.itype1 !== 'lcha' && row.mod1max < 30) row.spawnable = 0;
        }
    }
    // 121��ɱ�ָ�����,������
    // 122肿�(�鱦��),��װ2��,��װ2��4�����,����3��,ͷ���ǻ��3��(�鱦��)
    if (config.dis_per122)
    {
        if (row.version !== '0' && row.group === '122')
        {
            row.level = 1;
            if (row.mod1param === '3') row.spawnable = 0;
        }
    }
    if (config.dis_per123) DisGroup(row, 123);
    // 124��
    // 125��ϵ����ǰ׺�Ľ���
    // ama skilltab  0=����  1=����  2=��ǹ
    if (config.dis_skilltab_0) DisSkilltab(row, 'ama', 0);
    if (config.dis_skilltab_1) DisSkilltab(row, 'ama', 1);
    if (config.dis_skilltab_2) DisSkilltab(row, 'ama', 2);
    // sor skilltab  3=����  4=����  5=��˪
    if (config.dis_skilltab_3) DisSkilltab(row, 'sor', 3);
    if (config.dis_skilltab_4) DisSkilltab(row, 'sor', 4);
    if (config.dis_skilltab_5) DisSkilltab(row, 'sor', 5);
    // nec skilltab  6=����  7=����  8=�ٻ�
    if (config.dis_skilltab_6) DisSkilltab(row, 'nec', 6);
    if (config.dis_skilltab_7) DisSkilltab(row, 'nec', 7);
    if (config.dis_skilltab_8) DisSkilltab(row, 'nec', 8);
    // pal skilltab  9=ս�� 10=���� 11=����
    if (config.dis_skilltab_9) DisSkilltab(row, 'pal', 9);
    if (config.dis_skilltab_10) DisSkilltab(row, 'pal', 10);
    if (config.dis_skilltab_11) DisSkilltab(row, 'pal', 11);
    // bar skilltab 12=ս�� 13=֧�� 14=�ź�
    if (config.dis_skilltab_12) DisSkilltab(row, 'bar', 12);
    if (config.dis_skilltab_13) DisSkilltab(row, 'bar', 13);
    if (config.dis_skilltab_14) DisSkilltab(row, 'bar', 14);
    // dru skilltab 15=�ٻ� 16=���� 17=Ԫ��
    if (config.dis_skilltab_15) DisSkilltab(row, 'dru', 15);
    if (config.dis_skilltab_16) DisSkilltab(row, 'dru', 16);
    if (config.dis_skilltab_17) DisSkilltab(row, 'dru', 17);
    // ass skilltab 18=���� 19=Ӱ�� 20=��ѧ
    if (config.dis_skilltab_18) DisSkilltab(row, 'ass', 18);
    if (config.dis_skilltab_19) DisSkilltab(row, 'ass', 19);
    if (config.dis_skilltab_20) DisSkilltab(row, 'ass', 20);
    //125ǰ׺<+����>ֻ��2��3,����+1,��+2,��+3(��ϵ),ȫְҵ+2
    if (config.dis_allskill_max)
    {
        if (row.version !== '0' && row.group === '125')
        {
            row.level = 1;
            if (row.itype1 !== 'lcha' && row.mod1max === '1') row.spawnable = 0;
        }
    }
    // 126~136��
    if (config.dis_per137) DisGroup(row, 137);
    if (config.dis_per138) DisGroup(row, 138);
    if (config.dis_per139) DisGroup(row, 139);
    if (config.dis_per140) DisGroup(row, 140);
    if (config.dis_per141) DisGroup(row, 141);// �ѵ��������׺Ŀǰûʲô��,��Ϊ����ѷһ�㲻��Ʊ�ǹ,��Ұ���˵ļ���Ͷ���ֲ���ô��������
    if (config.dis_per142) DisGroup(row, 142);
});

D2RMM.writeTsv(magicprefixFilename, magicprefix);

// ��׺�޸�
const magicsuffixFilename = 'global\\excel\\magicsuffix.txt';
const magicsuffix = D2RMM.readTsv(magicsuffixFilename);

magicsuffix.rows.forEach((row) =>
{
    // ���ú�׺��
    // 1��������,����������+ͷ����25dr
    if (config.dis_suf1)
    {
        if (row.version !== '0' && row.group === '1')
        {
            row.level = 1;
            if (row.mod1max <25) row.spawnable = 0;
        }
    }
    // 2ħ����������
    if (config.dis_suf2) DisGroup(row, 2);
    // 3����Ԫ������,�ٷ�����
    // 4�oҕĿ�˷��R
    if (config.dis_suf4) DisGroup(row, 4);
    // 5���й��������,�ٷ�����
    // 6�����߷���,736��Ҳ��
    if (config.dis_suf6) DisGroup(row, 6);
    // 7�����ٶ�,����10����,��������20,����20~40,�鱦15,677��Ҳ��
    if (config.dis_suf7)
    {
        if (row.version !== '0' && row.group === '7')
        {
            row.level = 1;
            if (row.mod1max < 15) row.spawnable = 0;
        }
    }
    // 8����C��+����ٶ�,����20+30ƫ��֮(ƫ���)
    if (config.dis_suf8)
    {
        if (row.version !== '0' && row.group === '8')
        {
            row.level = 1;
            if (row.mod1max < 20) row.spawnable = 0;
        }
    }
    // 9FCR����ʩ��,������
    if (config.dis_suf10) DisGroup(row, 10);// 664�м�����Ҳ��
    if (config.dis_suf11) DisGroup(row, 11);
    if (config.dis_suf12) DisGroup(row, 12);// 667�м�����Ҳ��
    if (config.dis_suf13) DisGroup(row, 13);// 669�м�����Ҳ��
    // 14+�����,��������(��)20max,�ܽ�ָ����ͷ������,�鱦9~15max,С�д��1|2|4,678�м�����Ҳ��
    if (config.dis_suf14)
    {
        if (row.version !== '0' && row.group === '14')
        {
            row.level = 1;
            if (row.itype1 === 'weap' && row.mod1max < 20) row.spawnable = 0;
            if (row.itype1 === 'jewl' && row.mod1max < 9) row.spawnable = 0;
            if (row.itype1 === 'lcha' && row.mod1max < 4) row.spawnable = 0;
            if (row.itype1 === 'mcha' && row.mod1max < 2) row.spawnable = 0;
            if (row.itype1 !== 'weap' && row.itype1 !== 'jewl' && row.itype1 !== 'lcha' && row.itype1 !== 'mcha' && row.itype1 !== 'scha') row.spawnable = 0;
        }
    }
    if (config.dis_suf15) DisGroup(row, 15);
    if (config.dis_suf16) DisGroup(row, 16);// 684�м�����Ҳ��
    // 17+����,��������Զ��ͷ��20~30,��ָ����15~20,�·�Ь��9~15,�鱦9,671�м�����Ҳ��
    if (config.dis_suf17)
    {
        if (row.version !== '0' && row.group === '17')
        {
            row.level = 1;
            if (row.itype1 === 'amul' && row.mod1max < 20) row.spawnable = 0;
            if (row.itype1 === 'ring' && row.mod1max < 15) row.spawnable = 0;
            if (row.itype1 === 'tors' && row.mod1max < 9) row.spawnable = 0;
            if (row.itype1 === 'boot' && row.mod1max < 9) row.spawnable = 0;// ������732��
            if (row.itype1 === 'jewl' && row.mod1max < 9) row.spawnable = 0;
        }
    }
    // 18���ٴ���ָ�,������
    if (config.dis_suf19) DisGroup(row, 19);// 741��Ҳ��
    if (config.dis_suf20) DisGroup(row, 20);
    if (config.dis_suf21) DisGroup(row, 21);
    if (config.dis_suf22) DisGroup(row, 22);
    if (config.dis_suf22) DisGroup(row, 23);// 673�м�����Ҳ��
    if (config.dis_suf24) DisGroup(row, 24);
    if (config.dis_suf25) DisGroup(row, 25);// 743��Ҳ��
    // 26+����,�����·�����ͷ��60~100,��������,��ָ40,С�д��20|35|45,�鱦����
    if (config.dis_suf26)
    {
        if (row.version !== '0' && row.group === '26')
        {
            row.level = 1;
            if (row.itype1 === 'tors' && row.mod1max < 60) row.spawnable = 0;
            if (row.itype1 === 'club' && row.mod1max < 40) row.spawnable = 0;
            if (row.itype1 === 'lcha' && row.mod1max < 45) row.spawnable = 0;
            if (row.itype1 === 'lcha' && row.mod1max === '50') row.level = 110;//50Ѫ�İ��ӱ�����������,Ŀǰ��Ϸ���Ǵ򲻵���,ֻ�Ǵ��ڶ���
            if (row.itype1 === 'mcha' && row.mod1max < 35) row.spawnable = 0;
            if (row.itype1 === 'scha' && row.mod1max < 20) row.spawnable = 0;
            if (row.itype1 !== 'tors' && row.itype1 !== 'club' && row.itype1 !== 'lcha' && row.itype1 !== 'mcha' && row.itype1 !== 'scha') row.spawnable = 0;
        }
    }
    // 27��Ѫ,��������5��9,��ָͷ��8,����3,����6,744�м�����Ҳ��
    if (config.dis_suf27)
    {
        if (row.version !== '0' && row.group === '27')
        {
            row.level = 1;
            if (row.itype1 === 'mele' && row.mod1max < 9) row.spawnable = 0;
            if (row.itype1 === 'ring' && row.mod1max < 8) row.spawnable = 0;
            if (row.itype1 === 'amul' && row.mod1max < 6) row.spawnable = 0;
        }
    }
    // 28����,��������5��9,����ͷ��8,����3,��ָ6,747�м�����Ҳ��
    if (config.dis_suf28)
    {
        if (row.version !== '0' && row.group === '28')
        {
            row.level = 1;
            if (row.itype1 === 'mele' && row.mod1max < 9) row.spawnable = 0;
            if (row.itype1 === 'amul' && row.mod1max < 8) row.spawnable = 0;
            if (row.itype1 === 'ring' && row.mod1max < 6) row.spawnable = 0;
        }
    }
    // 29�ж�ʱ������,
    if (config.dis_suf29)
    {
        if (row.version !== '0' && row.group === '29')
        {
            row.level = 1;
            if (row.mod1max === '50') row.spawnable = 0;
        }
    }
    if (config.dis_suf30) DisGroup(row, 30);
    // 31����,��������ͷ��30,��ָ20,��ս��������15,������,С�д��2|5|6,�鱦9,675��,764�м�����Ҳ��
    // ע��������675~676�е�6~9�鱦,734~735�е�1���������ָ
    if (config.dis_suf31)
    {
        if (row.version !== '0' && row.group === '31')
        {
            row.level = 1;
            if (row.itype1 === 'amul' && row.mod1max < 30) row.spawnable = 0;
            if (row.itype1 === 'ring' && row.mod1max < 20) row.spawnable = 0;
            if (row.itype1 === 'mele' && row.mod1max < 15) row.spawnable = 0;
            if (row.itype1 === 'lcha' && row.mod1max < 6) row.spawnable = 0;
            if (row.itype1 === 'mcha' && row.mod1max < 5) row.spawnable = 0;
            if (row.itype1 === 'scha' && row.mod1max < 2) row.spawnable = 0;
            if (row.itype1 === 'jewl' && row.mod1max < 9) row.spawnable = 0
            if (row.mod1max === '1') row.spawnable = 0;
        }
    }
    // 32~34��
    // 35����,����Ьͷ��(��)30,Ь(��)40,���Ӳ���
    if (config.dis_suf35)
    {
        if (row.version !== '0' && row.group === '35')
        {
            row.level = 1;
            if (row.itype1 === 'boot' && row.mod1max < 30) row.spawnable = 0;
        }
    }
    // 36��
    // 37�;��޸�(���������),����ÿ20���ޏ�1�c�;ö�,33�������
    if (config.dis_suf37)
    {
        if (row.version !== '0' && row.group === '37')
        {
            row.level = 1;
            if (row.itype1 === 'weap' && row.mod1param < 5) row.spawnable = 0;
        }
    }
    // 38��
    // 39�޷��ƻ���ظ�����(���������),�����������p,�؏͔���1��10��,20��ظ�1������
    if (config.dis_suf39)
    {
        if (row.version !== '0' && row.group === '39')
        {
            row.level = 1;
            if (row.mod1param === '5') row.spawnable = 0;
        }
    }
    // 40��
    if (config.dis_suf41) DisGroup(row, 41);
    // 42���ȼ���������������,�ٷ�����
    // 43���ȼ�������Ԫ�ؿ���,�ٷ�����
    // 44��������+����
    if (config.dis_suf44)//���������ϵē��Еr��5%�C��ʩչ�ȼ�1��������
    {
        DisGroup(row, 44);
        if (row.group === '44' && row.level === '3') row.spawnable = 1;
    }
    // 45+����(��[����/�ƻ�/ҹ��/����]��������)?,�ٷ�����
});

D2RMM.writeTsv(magicsuffixFilename, magicsuffix);
