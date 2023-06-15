const uniqueitemsFilename = 'global\\excel\\uniqueitems.txt';
const uniqueitems = D2RMM.readTsv(uniqueitemsFilename);

function DisUniItem(row, isDis, id)
{
    if (isDis && row[`*ID`] == id)
    {
        row['enabled'] = 0;
    }
}

uniqueitems.rows.forEach((row) =>
{
    // 卖任意暗金出黑毛
    if (config.sell_superdia)
    {
        row['diablocloneweight'] = 1;
    }

    // 基德板能带多个
    if (config.gheed_add)
    {
        if (row[`*ID`] == 359)
        {
            row['carry1'] = '';
        }
    }

    // 以下为屏蔽暗金物品(编号0-128均为非资料片中存在的暗金)
    DisUniItem(row, config.dis_0, 0);
    DisUniItem(row, config.dis_1, 1);
    DisUniItem(row, config.dis_2, 2);
    DisUniItem(row, config.dis_3, 3);
    DisUniItem(row, config.dis_4, 4);
    DisUniItem(row, config.dis_5, 5);
    DisUniItem(row, config.dis_6, 6);
    DisUniItem(row, config.dis_7, 7);
    DisUniItem(row, config.dis_8, 8);
    DisUniItem(row, config.dis_9, 9);
    DisUniItem(row, config.dis_10, 10);
    DisUniItem(row, config.dis_11, 11);
    DisUniItem(row, config.dis_12, 12);
    DisUniItem(row, config.dis_13, 13);
    DisUniItem(row, config.dis_14, 14);
    DisUniItem(row, config.dis_15, 15);
    DisUniItem(row, config.dis_16, 16);
    DisUniItem(row, config.dis_17, 17);
    DisUniItem(row, config.dis_18, 18);
    DisUniItem(row, config.dis_19, 19);
    DisUniItem(row, config.dis_20, 20);
    DisUniItem(row, config.dis_21, 21);
    DisUniItem(row, config.dis_22, 22);
    DisUniItem(row, config.dis_23, 23);
    DisUniItem(row, config.dis_24, 24);
    DisUniItem(row, config.dis_25, 25);
    DisUniItem(row, config.dis_26, 26);
    DisUniItem(row, config.dis_27, 27);
    DisUniItem(row, config.dis_28, 28);
    // ID:29 这是在游戏中被官方隐藏的1把武器(水晶剑版本的碧蓝怒火)
    DisUniItem(row, config.dis_30, 30);
    DisUniItem(row, config.dis_31, 31);
    DisUniItem(row, config.dis_32, 32);
    DisUniItem(row, config.dis_33, 33);
    DisUniItem(row, config.dis_34, 34);
    DisUniItem(row, config.dis_35, 35);
    DisUniItem(row, config.dis_36, 36);
    DisUniItem(row, config.dis_37, 37);
    DisUniItem(row, config.dis_38, 38);
    DisUniItem(row, config.dis_39, 39);
    DisUniItem(row, config.dis_40, 40);
    DisUniItem(row, config.dis_41, 41);
    DisUniItem(row, config.dis_42, 42);
    DisUniItem(row, config.dis_43, 43);
    DisUniItem(row, config.dis_44, 44);
    DisUniItem(row, config.dis_45, 45);
    DisUniItem(row, config.dis_46, 46);
    DisUniItem(row, config.dis_47, 47);
    DisUniItem(row, config.dis_48, 48);
    DisUniItem(row, config.dis_49, 49);
    DisUniItem(row, config.dis_50, 50);
    DisUniItem(row, config.dis_51, 51);
    DisUniItem(row, config.dis_52, 52);
    DisUniItem(row, config.dis_53, 53);
    DisUniItem(row, config.dis_54, 54);
    DisUniItem(row, config.dis_55, 55);
    DisUniItem(row, config.dis_56, 56);
    DisUniItem(row, config.dis_57, 57);
    DisUniItem(row, config.dis_58, 58);
    DisUniItem(row, config.dis_59, 59);
    DisUniItem(row, config.dis_60, 60);
    DisUniItem(row, config.dis_61, 61);
    DisUniItem(row, config.dis_62, 62);
    DisUniItem(row, config.dis_63, 63);
    DisUniItem(row, config.dis_64, 64);
    DisUniItem(row, config.dis_65, 65);
    DisUniItem(row, config.dis_66, 66);
    DisUniItem(row, config.dis_67, 67);
    DisUniItem(row, config.dis_68, 68);
    DisUniItem(row, config.dis_69, 69);
    DisUniItem(row, config.dis_70, 70);
    DisUniItem(row, config.dis_71, 71);
    DisUniItem(row, config.dis_72, 72);
    DisUniItem(row, config.dis_73, 73);
    DisUniItem(row, config.dis_74, 74);
    DisUniItem(row, config.dis_75, 75);
    DisUniItem(row, config.dis_76, 76);
    DisUniItem(row, config.dis_77, 77);
    DisUniItem(row, config.dis_78, 78);
    DisUniItem(row, config.dis_79, 79);
    DisUniItem(row, config.dis_80, 80);
    DisUniItem(row, config.dis_81, 81);
    DisUniItem(row, config.dis_82, 82);
    DisUniItem(row, config.dis_83, 83);
    DisUniItem(row, config.dis_84, 84);
    DisUniItem(row, config.dis_85, 85);
    DisUniItem(row, config.dis_86, 86);
    DisUniItem(row, config.dis_87, 87);
    DisUniItem(row, config.dis_88, 88);
    DisUniItem(row, config.dis_89, 89);
    DisUniItem(row, config.dis_90, 90);
    DisUniItem(row, config.dis_91, 91);
    DisUniItem(row, config.dis_92, 92);
    DisUniItem(row, config.dis_93, 93);
    DisUniItem(row, config.dis_94, 94);
    DisUniItem(row, config.dis_95, 95);
    DisUniItem(row, config.dis_96, 96);
    DisUniItem(row, config.dis_97, 97);
    DisUniItem(row, config.dis_98, 98);
    DisUniItem(row, config.dis_99, 99);
    DisUniItem(row, config.dis_100, 100);
    DisUniItem(row, config.dis_101, 101);
    DisUniItem(row, config.dis_102, 102);
    DisUniItem(row, config.dis_103, 103);
    DisUniItem(row, config.dis_104, 104);
    DisUniItem(row, config.dis_105, 105);
    DisUniItem(row, config.dis_106, 106);
    DisUniItem(row, config.dis_107, 107);
    DisUniItem(row, config.dis_108, 108);
    DisUniItem(row, config.dis_109, 109);
    DisUniItem(row, config.dis_110, 110);
    DisUniItem(row, config.dis_111, 111);
    DisUniItem(row, config.dis_112, 112);
    DisUniItem(row, config.dis_113, 113);
    DisUniItem(row, config.dis_114, 114);
    DisUniItem(row, config.dis_115, 115);
    DisUniItem(row, config.dis_116, 116);
    DisUniItem(row, config.dis_117, 117);
    DisUniItem(row, config.dis_118, 118);
    DisUniItem(row, config.dis_119, 119);
    DisUniItem(row, config.dis_120, 120);
    DisUniItem(row, config.dis_121, 121);
    // ID:122 乔丹之石(没有屏蔽的理由)
    // ID:123~128 为任务暗金道具不能屏蔽
    // ID:129~246 为扩展级暗金装备
    DisUniItem(row, config.dis_129, 129);
    DisUniItem(row, config.dis_130, 130);
    DisUniItem(row, config.dis_131, 131);
    DisUniItem(row, config.dis_132, 132);
    DisUniItem(row, config.dis_133, 133);
    DisUniItem(row, config.dis_134, 134);
    DisUniItem(row, config.dis_135, 135);
    DisUniItem(row, config.dis_136, 136);
    DisUniItem(row, config.dis_137, 137);
    DisUniItem(row, config.dis_138, 138);
    DisUniItem(row, config.dis_139, 139);
    DisUniItem(row, config.dis_140, 140);
    DisUniItem(row, config.dis_141, 141);
    DisUniItem(row, config.dis_142, 142);
    DisUniItem(row, config.dis_143, 143);
    DisUniItem(row, config.dis_144, 144);
    DisUniItem(row, config.dis_145, 145);
    DisUniItem(row, config.dis_146, 146);
    DisUniItem(row, config.dis_147, 147);
    DisUniItem(row, config.dis_148, 148);
    DisUniItem(row, config.dis_149, 149);
    DisUniItem(row, config.dis_150, 150);
    DisUniItem(row, config.dis_151, 151);
    DisUniItem(row, config.dis_152, 152);
    DisUniItem(row, config.dis_153, 153);
    DisUniItem(row, config.dis_154, 154);
    DisUniItem(row, config.dis_155, 155);
    DisUniItem(row, config.dis_156, 156);
    DisUniItem(row, config.dis_157, 157);
    DisUniItem(row, config.dis_158, 158);
    DisUniItem(row, config.dis_159, 159);
    DisUniItem(row, config.dis_160, 160);
    DisUniItem(row, config.dis_161, 161);
    DisUniItem(row, config.dis_162, 162);
    DisUniItem(row, config.dis_163, 163);
    DisUniItem(row, config.dis_164, 164);
    DisUniItem(row, config.dis_165, 165);
    DisUniItem(row, config.dis_166, 166);
    DisUniItem(row, config.dis_167, 167);
    DisUniItem(row, config.dis_168, 168);
    DisUniItem(row, config.dis_169, 169);
    DisUniItem(row, config.dis_170, 170);
    DisUniItem(row, config.dis_171, 171);
    DisUniItem(row, config.dis_172, 172);
    DisUniItem(row, config.dis_173, 173);
    DisUniItem(row, config.dis_174, 174);
    DisUniItem(row, config.dis_175, 175);
    DisUniItem(row, config.dis_176, 176);
    DisUniItem(row, config.dis_177, 177);
    DisUniItem(row, config.dis_178, 178);
    DisUniItem(row, config.dis_179, 179);
    DisUniItem(row, config.dis_180, 180);
    DisUniItem(row, config.dis_181, 181);
    DisUniItem(row, config.dis_182, 182);
    DisUniItem(row, config.dis_183, 183);
    DisUniItem(row, config.dis_184, 184);
    DisUniItem(row, config.dis_185, 185);
    DisUniItem(row, config.dis_186, 186);
    DisUniItem(row, config.dis_187, 187);
    DisUniItem(row, config.dis_188, 188);
    DisUniItem(row, config.dis_189, 189);
    DisUniItem(row, config.dis_190, 190);
    DisUniItem(row, config.dis_191, 191);
    DisUniItem(row, config.dis_192, 192);
    DisUniItem(row, config.dis_193, 193);
    DisUniItem(row, config.dis_194, 194);
    DisUniItem(row, config.dis_195, 195);
    DisUniItem(row, config.dis_196, 196);
    DisUniItem(row, config.dis_197, 197);
    DisUniItem(row, config.dis_198, 198);
    DisUniItem(row, config.dis_199, 199);
    //ID:200没有装备只是1个类型
    DisUniItem(row, config.dis_201, 201);
    DisUniItem(row, config.dis_202, 202);
    DisUniItem(row, config.dis_203, 203);
    DisUniItem(row, config.dis_204, 204);
    DisUniItem(row, config.dis_205, 205);
    DisUniItem(row, config.dis_206, 206);
    DisUniItem(row, config.dis_207, 207);
    DisUniItem(row, config.dis_208, 208);
    DisUniItem(row, config.dis_209, 209);
    DisUniItem(row, config.dis_210, 210);
    DisUniItem(row, config.dis_211, 211);
    DisUniItem(row, config.dis_212, 212);
    DisUniItem(row, config.dis_213, 213);
    DisUniItem(row, config.dis_214, 214);
    DisUniItem(row, config.dis_215, 215);
    DisUniItem(row, config.dis_216, 216);
    DisUniItem(row, config.dis_217, 217);
    DisUniItem(row, config.dis_218, 218);
    DisUniItem(row, config.dis_219, 219);
    DisUniItem(row, config.dis_220, 220);
    DisUniItem(row, config.dis_221, 221);
    DisUniItem(row, config.dis_222, 222);
    DisUniItem(row, config.dis_223, 223);
    DisUniItem(row, config.dis_224, 224);
    DisUniItem(row, config.dis_225, 225);
    DisUniItem(row, config.dis_226, 226);
    DisUniItem(row, config.dis_227, 227);
    DisUniItem(row, config.dis_228, 228);
    DisUniItem(row, config.dis_229, 229);
    DisUniItem(row, config.dis_230, 230);
    DisUniItem(row, config.dis_231, 231);
    DisUniItem(row, config.dis_232, 232);
    DisUniItem(row, config.dis_233, 233);
    DisUniItem(row, config.dis_234, 234);
    DisUniItem(row, config.dis_235, 235);
    DisUniItem(row, config.dis_236, 236);
    DisUniItem(row, config.dis_237, 237);
    DisUniItem(row, config.dis_238, 238);
    DisUniItem(row, config.dis_239, 239);
    DisUniItem(row, config.dis_240, 240);
    DisUniItem(row, config.dis_241, 241);
    DisUniItem(row, config.dis_242, 242);
    DisUniItem(row, config.dis_243, 243);
    DisUniItem(row, config.dis_244, 244);
    DisUniItem(row, config.dis_245, 245);
    DisUniItem(row, config.dis_246, 246);
    // 以下为共用底材的难出的暗金装备和部分暗金项链
    DisUniItem(row, config.dis_249, 249);//鋼鐵面紗
    DisUniItem(row, config.dis_259, 259);//光之軍刀
    DisUniItem(row, config.dis_270, 270);//旭日東升(暗金项链)
    DisUniItem(row, config.dis_271, 271);//新月(暗金项链)
    DisUniItem(row, config.dis_277, 277);//薩拉森的機會(暗金项链)
    DisUniItem(row, config.dis_306, 306);//地平線的龍捲風
    DisUniItem(row, config.dis_306, 307);//碎石者
    DisUniItem(row, config.dis_366, 366);//聖堂騎士之力
    DisUniItem(row, config.dis_375, 375);//金屬網格(暗金项链)
    DisUniItem(row, config.dis_385, 385);//撼地者
    DisUniItem(row, config.dis_389, 389);//懺悔者
    // 彩虹刻面暗金珠宝
    DisUniItem(row, config.dis_392396, 392);
    DisUniItem(row, config.dis_392396, 396);
    DisUniItem(row, config.dis_393397, 393);
    DisUniItem(row, config.dis_393397, 397);
    DisUniItem(row, config.dis_394398, 394);
    DisUniItem(row, config.dis_394398, 398);
    DisUniItem(row, config.dis_395399, 395);
    DisUniItem(row, config.dis_395399, 399);
    // 破免板子
    DisUniItem(row, config.dis_401, 401);
    DisUniItem(row, config.dis_402, 402);
    DisUniItem(row, config.dis_403, 403);
    DisUniItem(row, config.dis_404, 404);
    DisUniItem(row, config.dis_405, 405);
    DisUniItem(row, config.dis_406, 406);
});

D2RMM.writeTsv(uniqueitemsFilename, uniqueitems);
