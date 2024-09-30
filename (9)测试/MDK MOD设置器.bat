@set ver=MDK.2024.09.01������
@set FOR_MOD_VER=240706
@set VER_CHECK=NOCHECK
@set SETTER_NAME=MDK MOD������.bat
@set MFD=MDK
@set MOD_FOLDER=%MFD%\%MFD%.mpq
chcp 936
@ECHO OFF&PUSHD %~DP0 &TITLE D2R MDK MOD %FOR_MOD_VER%������ By ZhangMDKRU#2129  �������汾%Ver%
mode con cols=122 lines=120
:: 0 �ڡ�1 ����2 �̡�3 ���ࡢ4 �졢5 �ϡ�6���ػơ�7 ���ҡ�8 ���ҡ�9 ��
:: A ���̡�B ���ࡢC ǳ�졢D ���ϡ�E ǳ�ơ�F ��ɫ
:: color E0
color E0
setlocal enabledelayedexpansion

mode con cols=75 lines=25
REM ===�ж��Ƿ����Թ���Աģʽ����===
bcdedit>nul
if errorlevel 1 (
@ECHO. ��⵽��ǰ��δ ���Թ���Ա������С� ������������
@ECHO. ��ʹ�ù���Ա�������MOD�����������޷�������ʾ
@ECHO. ���ֶ��Ҽ�����������ļ�ѡ���Թ���Ա������С���
@ECHO. 
@ECHO. ���Թ���Աģʽ�����������������޷�������ʾ���뽫������������ݷ�ʽ
@ECHO. Ȼ���Ҽ������ݷ�ʽѡ�����ԡ�����ѡ�����й�ѡ��ʹ�þɰ����̨��
@ECHO. 
@ECHO. �������������������������
PAUSE
)

REM ===���������ʹ��set===

set DEBUG_FILE=mdk_mod.debug
set SETUP_FOLDER_FILE=mdk_mod.setup

@ echo.	 ��ⲹ������MOD���·����...
set d2r_path=UNKNOW
if exist %SETUP_FOLDER_FILE% ( set d2r_path=.
) else if exist .\D2R.exe ( set d2r_path=.
) else if exist ..\D2R.exe ( set d2r_path=..
) else if exist ..\..\D2R.exe ( set d2r_path=..\..
) else if exist ..\..\..\D2R.exe ( set d2r_path=..\..\..)

@ echo.	 d2r_path=!d2r_path!
	if "!d2r_path!"=="UNKNOW" (
		@ echo.	 ***����δ��⵽D2R�ļ��У��븴��MOD�ļ���D2R��װ�ļ�����***
		@ echo.	 ***����δ��⵽D2R�ļ��У��븴��MOD�ļ���D2R��װ�ļ�����***
		@ echo.	 ***����δ��⵽D2R�ļ��У��븴��MOD�ļ���D2R��װ�ļ�����***
		call :color E4 "***����δ��⵽D2R�ļ��У��븴��MOD�ļ���D2R��װ�ļ�����***"
		@echo.
		@echo.
		@echo.	 �Ƿ���Ҫ���Լ����Ϸ��װ�ļ��У�ֱ�Ӷ�mod�ļ��������ã���Y/N��
		set  obj=""
		set /p obj= ���� Y ���� N ���س�ִ�У�
		if /i "%obj%"=="Y" Goto check_setup_correct

		@echo.
		@echo	  ����ֱ�����ã���������˳���
		@echo.
		pause
		goto exit
	)

REM �������Լ�MOD��װ���������Ŀ¼�Ƿ���ȷ

:check_setup_correct
@ echo.	 *�������Լ�MOD��װ�����Ŀ¼�Ƿ���ȷ
	REM ���Լ����������D2R�����λ��
	set dot_path=UNKNOW
	set dot_path2=UNKNOW
	set dot_path3=UNKNOW
	set dot_path4=UNKNOW
	@ echo.	 ��ⲹ������MOD���·����...
	if exist %d2r_path%\D2R.exe ( set dot_path=OK)
	if exist %d2r_path%\mods ( set dot_path2=OK)
	if exist %d2r_path%\mods\%MOD_FOLDER%\data ( set dot_path3=OK)
	if exist .\mods\%MOD_FOLDER%\data ( set dot_path4=OK)

	@ echo.	
	@ echo.	 D2R�ļ�·���������dot_path=!dot_path!
	@ echo.	 MODS�ļ���·���������dot_path2=!dot_path2!
	@ echo.	 MDK MOD�ļ���·���������dot_path3=!dot_path3!
	
	@ echo.	
	@ echo.	 ���D2R.exe�ļ��Ƿ���ڡ���
	set FILE_CHECK_WRONG=0
	if "!dot_path!"=="UNKNOW" ( 
		if exist %SETUP_FOLDER_FILE% (
			@ echo.	 ***��⵽��װģʽ�����������ü��***
		) else (set FILE_CHECK_WRONG=1)
	)
	if "!dot_path2!"=="UNKNOW" (set FILE_CHECK_WRONG=1)
	if "!dot_path3!"=="UNKNOW" (set FILE_CHECK_WRONG=1)
		@ echo.	 !dot_path! !dot_path2! !dot_path3! !dot_path4!
		@ echo.	 FILE_CHECK_WRONG=%FILE_CHECK_WRONG%
	
	if "%FILE_CHECK_WRONG%"=="1" (
		@ echo.	 ***����δ��⵽D2R�ļ��У��븴��MOD�ļ���D2R��װ�ļ�����***
		@ echo.	 ***����δ��⵽D2R�ļ��У��븴��MOD�ļ���D2R��װ�ļ�����***
		@ echo.	 ***����δ��⵽D2R�ļ��У��븴��MOD�ļ���D2R��װ�ļ�����***
		
		if "!dot_path!"=="UNKNOW" ( 
			call :color E4 "   ***����δ��⵽D2R�ļ��У��븴��MOD�ļ���D2R��װ�ļ�����***"
			@echo. 
		)
		if "!dot_path2!"=="UNKNOW" ( 
			call :color E4 "   ***����δ��⵽D2R�ļ��У��븴��MOD�ļ���D2R��װ�ļ�����***"
			@echo. 
			@echo. ����D2R�ļ����´���mods�ļ��а�װMOD�����߽�MDK MODѹ����ֱ�ӽ�ѹ��D2R�ļ�����
		)
		if "!dot_path3!"=="UNKNOW" ( 
			call :color E4 "   ***����δ��⵽MOD�ļ��У�����D2R�ļ����½���MODS�ļ���***"
			@echo. 
			@echo. ����D2R�ļ����´���mods�ļ��а�װMOD�����߽�MDK MODѹ����ֱ�ӽ�ѹ��D2R�ļ�����
		)
		@echo.
		@echo.
		if "!dot_path4!"=="OK" ( 
			@echo. ��ȻMOD�ļ���δ��ȷ��װ��D2R�ļ����У�
			@echo. ����⵽��������MOD�ļ������λ����ȷ��
			@echo. 
			@echo. �Ƿ���Ҫֱ�������������������ã���Y/N��
			set  obj=""
			set /p obj= ���� Y ���� N ���س�ִ�У�
			@echo.obj=!obj!

			if /i "!obj!"=="Y" (
				set d2r_path=.
				Goto continue_do_setup
			)
		) 
		@echo.
		call :color E4 "��������˳�..."
		@echo.
		@echo.
		pause
		goto exit
	)

:continue_do_setup

REM ===���ó����ļ���===
for /f "tokens=*" %%i in ('cd') do (
	set SetterCurrentFolder=%%i
)
set MODS=!d2r_path!\mods
set MDKMOD=%MODS%\%MOD_FOLDER%
set MDKMOD_FOLDER=%MDKMOD%
set BAT_FOLDER=%MODS%\%MFD%\BAT
set EXE_FOLDER=%MODS%\%MFD%\EXE
set setter_file="!d2r_path!\%SETTER_NAME%"
set setter_ver_check=%MDKMOD%\%Ver%
set d2r_layouts=%MDKMOD%\data\global\ui\layouts
set controller_layouts=%MDKMOD%\data\global\ui\layouts\controller
set d2r_overlays=%MDKMOD%\data\hd\overlays
set d2r_lng=%MDKMOD%\data\local\lng
set d2r_strings=%MDKMOD%\data\local\lng\strings
set d2r_strings_mdk=%MDKMOD%\data\local\lng\strings_mdk
set d2r_strings_ready=%MDKMOD%\data\local\lng\strings_ready
set d2r_items=%MDKMOD%\data\hd\items
set d2r_items_pic=%MDKMOD%\data\hd\global\ui\items
set d2r_ui=%MDKMOD%\data\hd\ui
set d2r_global_ui=%MDKMOD%\data\hd\global\ui
set d2r_excel=%MDKMOD%\data\global\excel
set d2r_sfx=%MDKMOD%\data\hd\global\sfx
set d2r_missiles=%MDKMOD%\data\hd\missiles
set d2r_char=%MDKMOD%\data\hd\\character
set d2r_env=%MDKMOD%\data\hd\env
set objects_folder=%MDKMOD%\data\hd\objects
set global_image_folder=%MDKMOD%\data\hd\global

REM ===���ó����ļ�===
set Misc_FILE=%d2r_excel%\misc.txt
set TC_FILE=%d2r_excel%\TreasureClassEx.txt
set ItemTypes_FILE=%d2r_excel%\itemtypes.txt

@echo. MDKMOD=%MDKMOD%

REM ��ѡ����
set AutorunCheckOn=%d2r_global_ui%\QucikSwitchButton\CheckIcon\ON.sprite
set AutorunCheckOnLow=%d2r_global_ui%\QucikSwitchButton\CheckIcon\ON.lowend.sprite
set AutorunCheckOff=%d2r_global_ui%\QucikSwitchButton\CheckIcon\OFF.sprite
set AutorunCheckOffLow=%d2r_global_ui%\QucikSwitchButton\CheckIcon\OFF.lowend.sprite
REM �����˳���ѡ��
set QuiskEscExit=%d2r_global_ui%\QucikSwitchButton\QuickEsc\CHECK.sprite
set QuiskEscExitLow=%d2r_global_ui%\QucikSwitchButton\QuickEsc\CHECK.lowend.sprite

REM ������������ͬ����
set setter_lang_cht=!d2r_path!\setter_lang_cht
set setter_lang_chs=!d2r_path!\setter_lang_chs
set setter_lang_ok=!d2r_path!\setter_lang_ok
set setter_lang_cht_file=%MDKMOD%\MDKMOD_SETTER_CHT.bat
set setter_lang_chs_file=%MDKMOD%\MDKMOD_SETTER_CHS.bat

REM ���ó����ļ�
set item-names=%d2r_strings%\item-names.json
set item-runes=%d2r_strings%\item-runes.json
set item-gems=%d2r_strings%\item-gems.json
set item-nameaffixes=%d2r_strings%\item-nameaffixes.json
set mercenaries=%d2r_strings%\mercenaries.json

set del_travincal_hall=%d2r_env%\preset\act3\travincal\travn.json
set del_chaos_door=%d2r_env%\preset\act4\diab\entry1.json
set del_act4_lava=%d2r_env%\model\act4\lava
set del_ballair_pillars=%d2r_env%\preset\expansion\baallair\wthrone.json

set  ver_sign=%d2r_strings%\json_db
set mod_folder=%MDKMOD%
set install_folder=.\D2R.exe
set string_folder=%d2r_strings%

REM ����Ӷ��ָʾͼ��
set hire_nickname=%MDKMOD%\data\hd\nickname\particles\hire.particles
set hire_nickname_off=%MDKMOD%\data\hd\nickname\particles\hire_off.particles

REM ����Ӷ��ȫװ�����
set enemy_folder=%MDKMOD%\data\hd\character\enemy
set hire_newtype_sign=%MDKMOD%\data\hd\character\hire_newtype_on.sign
set hire_normal=%MDKMOD%\data\hd\character\hire_normal
set hire_newtype=%MDKMOD%\data\hd\character\hire_newtype
set hire_newtype_file1=%hire_newtype%\roguehire
set hire_newtype_file2=%hire_newtype%\roguehire.json
set hire_newtype_file3=%hire_newtype%\act2hire
set hire_newtype_file4=%hire_newtype%\act2hire.json
set hire_newtype_file5=%hire_newtype%\act3hire
set hire_newtype_file6=%hire_newtype%\act3hire.json
set hire_newtype_file7=%hire_newtype%\act5hire1
set hire_newtype_file8=%hire_newtype%\act5hire1.json

set hire_file1=%enemy_folder%\roguehire
set hire_file2=%enemy_folder%\roguehire.json
set hire_file3=%enemy_folder%\act2hire
set hire_file4=%enemy_folder%\act2hire.json
set hire_file5=%enemy_folder%\act3hire
set hire_file6=%enemy_folder%\act3hire.json
set hire_file7=%enemy_folder%\act5hire1
set hire_file8=%enemy_folder%\act5hire1.json

REM ����DLC1�ı�־Ŀ¼
set dlc1_sign=%MDKMOD%\data\hd\character\DLC1\dlc1_on.sign
set dlc1_file1=%MDKMOD%\data\hd\character\DLC1\corruptrogue1
set dlc1_file2=%MDKMOD%\data\hd\character\DLC1\lancer
set dlc1_file3=%MDKMOD%\data\hd\character\DLC1\cr_lancer1
set dlc1_file4=%MDKMOD%\data\hd\character\DLC1\act2hire.json
set dlc1_t_file1=%MDKMOD%\data\hd\character\enemy\corruptrogue1
set dlc1_t_file2=%MDKMOD%\data\hd\character\enemy\lancer
set dlc1_t_file3=%MDKMOD%\data\hd\character\enemy\cr_lancer1
set dlc1_t_file4=%MDKMOD%\data\hd\character\enemy\act2hire.json

set pause_file=%d2r_layouts%\pauselayouthd.json
set esc_quick_save_pause_file=%d2r_layouts%\pauselayouthd_QuickExit.json
set esc_quick_save_sign=%d2r_layouts%\json_db\esc_quick_save.sign

set font_size=%d2r_layouts%\_profileasian.json
set rune_style=%MDKMOD%\data\hd\global\ui\items\misc\rune\zod_rune.sprite
set sc_light=%d2r_items%\misc\charm\charm_small.json
set lc_light=%d2r_items%\misc\charm\charm_medium.json
set ring_light=%d2r_items%\misc\ring\ring.json
set amulet_light=%d2r_items%\misc\amulet\amulet.json
set all_gem=%d2r_items%\misc\gem_all
set high_gem=%d2r_items%\misc\gem_high
set all_rune_light=%d2r_items%\misc\rune_all

set items_rune_folder=%d2r_items%\misc\rune
set high_rune_all_effects=%d2r_items%\misc\rune_all
set high_rune_arrow_light=%d2r_items%\misc\rune_arrow
set high_rune_light=%d2r_items%\misc\rune_onlylight
set high_rune_star_light=%d2r_items%\misc\rune_starlight
set craft_rune_light=%d2r_items%\misc\rune\ral_rune.json
set rune_light_setup=%d2r_items%\misc\rune_light.setup

set horadic=%d2r_layouts%\horadriccubelayouthd_mdk.json

REM �������������岿��
set font_name=%d2r_ui%\fonts\blizzardglobal-v5_81.ttf
set font_name_zhTW=blizzardglobal-v5_81.ttf
set font_libian=%d2r_ui%\fonts\LiziLibian.ttf
set font_zhunyuan=%d2r_ui%\fonts\LiziZhunyuan.ttf
set font_fangxing=%d2r_ui%\fonts\ARFangxin.ttf
set font_baoxue=%d2r_ui%\fonts\BlizzardGlobal.ttf
set font_heiti=%d2r_ui%\fonts\LiziHeiti.ttf
set font_dahei=%d2r_ui%\fonts\LiziDahei.ttf

REM ����ģʽ���岿��
set hj_font_fangsong=%MDKMOD%\data\local\font\chi_fangsong
set hj_font_qingyuan=%MDKMOD%\data\local\font\chi_qingyuan
set hj_font_ruixiantong=%MDKMOD%\data\local\font\chi_ruixiantong
set hj_font_youyuan=%MDKMOD%\data\local\font\chi_youyuan
set hj_font_currently=%MDKMOD%\data\local\font\chi

set hp_bar=%d2r_layouts%\hudmonsterhealthhd_mdk2nd.json
set hp_bar2=%d2r_layouts%\hudmonsterhealthhd_mdk1st.json
set color_spell=%MDKMOD%\data\hd\global\ui\color_spells
set potion_style=%MDKMOD%\data\hd\global\ui\items\misc\potion
set no_cap=%d2r_items%\armor\helmet\cap_hat.json
set no_all_cap=%d2r_items%\armor\helmet\helm.json
set hireables_down=%d2r_layouts%\hireablespanelhd_up.json

set color_word=%d2r_strings%\json_db\modifiers_color.mcsign
set less_color_word=%d2r_strings%\json_db\modifiers_less_color.mcsign

set ui_n=%d2r_layouts%\hudpanelhd_normal.json
set ui_mini=%d2r_layouts%\hudpanelhd_0.01.json
set ui_6=%d2r_layouts%\hudpanelhd_0.65.json
set ui_7=%d2r_layouts%\hudpanelhd_0.75.json
set ui_8=%d2r_layouts%\hudpanelhd_0.85.json
set ui_file=%d2r_layouts%\hudpanelCurrenthd.json
set ui_nc=%d2r_layouts%\controller\hudpanelhd_normal.json
set ui_minic=%d2r_layouts%\controller\hudpanelhd_0.01.json
set ui_6c=%d2r_layouts%\controller\hudpanelhd_0.65.json
set ui_7c=%d2r_layouts%\controller\hudpanelhd_0.75.json
set ui_8c=%d2r_layouts%\controller\hudpanelhd_0.85.json
set ui_filec=%d2r_layouts%\controller\hudpanelCurrenthd.json

set potion_vo=%d2r_sfx%\item\item_potion_hd.flac
set tucao_sign=%d2r_strings%\json_db\tucao.tucaosign
set no_tucao_sign=%d2r_strings%\json_db\no_tucao.tucaosign
set text_color_sign=%d2r_strings%\json_db\DyeWeaponName.colorsign


REM �ײ���Ϣ��ʾģʽ����
set keybinds_fullinfo=%d2r_strings%\json_db\keybinds_fullinfo.json
set keybinds_lessinfo=%d2r_strings%\json_db\keybinds_lessinfo.json
set keybinds_lessinfo_rare=%d2r_strings%\json_db\keybinds_lessinfo_rare.json
set keybinds_lessinfo_rare_base=%d2r_strings%\json_db\keybinds_lessinfo_rare_base.json
set keybinds_setup=%d2r_strings%\json_db\keybinds_sign.setup

REM ��ָ�ȱ�����ʾ����
set amulet_info_setup=%d2r_strings%\json_db\amulet_info_sign.setup
set amulet_info_show=%d2r_strings%\json_db\npcs_show.json
set amulet_info_hide=%d2r_strings%\json_db\npcs_hide.json

REM ����ϸ����Ϸ���ܵ����ı�־����

REM ===�����̵�����ļ�===
set rune_shop_sign=%d2r_excel%\offline\misc\rune_shop.ini

set rune_default_sock=%d2r_excel%\offline\misc\misc_default_sock.txt
set rune_default_nosock=%d2r_excel%\offline\misc\misc_default_nosock.txt
set rune_normal_sock=%d2r_excel%\offline\misc\misc_normal_sock.txt
set rune_normal_nosock=%d2r_excel%\offline\misc\misc_normal_nosock.txt
set rune_shop_sock=%d2r_excel%\offline\misc\misc_shop_sock.txt
set rune_shop_nosock=%d2r_excel%\offline\misc\misc_shop_nosock.txt
set misc_quest_shop_sock=%d2r_excel%\offline\misc\misc_quest_shop_sock.txt
set misc_quest_shop_nosock=%d2r_excel%\offline\misc\misc_quest_shop_nosock.txt

REM ===��Ʒ��������ļ�===
set itemtypes_allsock=%d2r_excel%\offline\itemtypes_allsock.txt


set all_sockets=%d2r_excel%\armor_allsock.txt
set rw_nolimit=%d2r_excel%\runes_nolimit.txt


set convic_off=%MDKMOD%\data\hd\overlays\common\convictionback_mdk.json
set convic_on=%MDKMOD%\data\hd\overlays\common\convictionback.json
set blessedhammer_effect=%d2r_missiles%\blessedhammer.json

REM ���ͳһ��ʽ���
set unify_gc_eye_dark_sign=%MDKMOD%\data\hd\global\ui\items\misc\charm_db\gc_eye_dark.unifygcsign
set unify_gc_eye_sign=%MDKMOD%\data\hd\global\ui\items\misc\charm_db\gc_eye.unifygcsign
set unify_gc_mahua_sign=%MDKMOD%\data\hd\global\ui\items\misc\charm_db\gc_mahua.unifygcsign
set unify_gc_guilian_sign=%MDKMOD%\data\hd\global\ui\items\misc\charm_db\gc_guilian.unifygcsign

set unify_lc_lingpai_sign=%MDKMOD%\data\hd\global\ui\items\misc\charm_db\lc_lingpai.unifylcsign
set unify_lc_niujiao_sign=%MDKMOD%\data\hd\global\ui\items\misc\charm_db\lc_niujiao.unifylcsign
set unify_lc_fangta_sign=%MDKMOD%\data\hd\global\ui\items\misc\charm_db\lc_fangta.unifylcsign

set unify_sc_tuoyuan_dark_sign=%MDKMOD%\data\hd\global\ui\items\misc\charm_db\sc_tuoyuan_dark.unifylcsign
set unify_sc_tuoyuan_sign=%MDKMOD%\data\hd\global\ui\items\misc\charm_db\sc_tuoyuan.unifylcsign
set unify_sc_xuanwo_sign=%MDKMOD%\data\hd\global\ui\items\misc\charm_db\sc_xuanwo.unifylcsign
set unify_sc_yuanfu_sign=%MDKMOD%\data\hd\global\ui\items\misc\charm_db\sc_yuanfu.unifylcsign

REM �����ʽ�ļ�
set gc_eye_dark=%MDKMOD%\data\hd\global\ui\items\misc\charm_db\charm_large_eye_dark
set gc_eye=%MDKMOD%\data\hd\global\ui\items\misc\charm_db\charm_large1_eye
set gc_mahua=%MDKMOD%\data\hd\global\ui\items\misc\charm_db\charm_large2_mahua
set gc_guilian=%MDKMOD%\data\hd\global\ui\items\misc\charm_db\charm_large3_guilian

set lc_lingpai=%MDKMOD%\data\hd\global\ui\items\misc\charm_db\charm_medium1_lingpai
set lc_niujiao=%MDKMOD%\data\hd\global\ui\items\misc\charm_db\charm_medium2_niujiao
set lc_fangta=%MDKMOD%\data\hd\global\ui\items\misc\charm_db\charm_medium3_fangta

set sc_tuoyuan_dark=%MDKMOD%\data\hd\global\ui\items\misc\charm_db\charm_small1_tuoyuan_dark
set sc_tuoyuan=%MDKMOD%\data\hd\global\ui\items\misc\charm_db\charm_small_tuoyuan
set sc_xuanwo=%MDKMOD%\data\hd\global\ui\items\misc\charm_db\charm_small2_xuanwo
set sc_yuanfu=%MDKMOD%\data\hd\global\ui\items\misc\charm_db\charm_small3_yuanfu

REM ��ͼ��ʾ������
set automap_monster_mdk_sign=%d2r_excel%\mdk.monsgin
set automap_monster_mdkchaos_sign=%d2r_excel%\mdkchaos.monsgin
set automap_monster_all_sign=%d2r_excel%\all.monsgin
set automap_chest_sign=%d2r_excel%\objects.txt.mdk

REM �ײ���Ϣ�л��ļ�
set old_baseinfo_txt_sign=%d2r_strings%\json_db\old_baseinfo.baseInfoVersign
set old_baseinfo_ver_file=%d2r_strings%\json_db\bnet_old_baseinfo.json
set new_baseinfo_ver_file=%d2r_strings%\json_db\bnet.json
set baseinfo_txt_sign=%d2r_excel%\weapons.txt
set base_with_english_sign=%d2r_strings%\json_db\base_with_english.ensign
set base_with_english_sign_sgline=%d2r_strings%\json_db\base_with_english_sgline.ensign
set base_no_baseinfo_sign=%d2r_strings%\json_db\base_with_nobase.ensign
set base_with_english=%d2r_strings%\json_db\item-nameaffixes_with_english.json
set base_with_english_sgline=%d2r_strings%\json_db\item-nameaffixes_with_english_sgline.json
set base_without_english=%d2r_strings%\json_db\item-nameaffixes_without_english.json
set base_no_baseinfo=%d2r_strings%\json_db\item-nameaffixes_no_baseinfo.json
set sgline_with_english_sign=%d2r_strings%\json_db\sgline_with_english_sign.sgensign

set entry_guider_sign=%MDKMOD%\data\hd\roomtiles.ini
set entry_guider_folder=%MDKMOD%\data\hd\roomtiles
set entry_guider_l=%MDKMOD%\data\hd\roomtiles_light
set entry_guider_c=%MDKMOD%\data\hd\roomtiles_c
set objects_aura=%objects_folder%\chests
set dest_aura=%objects_folder%\destructibles\barrel.json
set manmade_aura=%objects_folder%\env_manmade\gibbet.json
set show_arrow=%d2r_strings%\json_db\show_arrow.arrowsign
set player_light=%MDKMOD%\data\hd\character\player\barbarian.json
set vis_light=%d2r_env%\vis
set cain_light=%MDKMOD%\data\hd\character\npc\cain1.json
set shrines_light=%objects_folder%\shrines_other

set guangyuan_u=%MDKMOD%\data\hd\character\guangyuan_u.lightsign
set guangyuan_d=%MDKMOD%\data\hd\character\guangyuan_d.lightsign
set guangyuan_n=%MDKMOD%\data\hd\character\guangyuan_n.lightsign
set wp_guider=%objects_folder%\waypoint_portals
set anya_shop=%d2r_excel%\anya.shop_mode
set base_shop=%d2r_excel%\base.shop_mode
set color_shop=%d2r_excel%\color.shop_mode
set BO_time=%MDKMOD%\data\hd\overlays\common\shield_bo\battleorders.json
set BO_time_charge=%MDKMOD%\data\hd\overlays\common\charge_bo\battleorders.json
set ass_charge_large=%MDKMOD%\data\hd\overlays\common\charge_ass_large\progressive_other_1.json
set ass_charge_large_down=%MDKMOD%\data\hd\overlays\common\charge_ass_large_down\progressive_other_1.json
set ass_charge_small=%MDKMOD%\data\hd\overlays\common\charge_ass_small\progressive_other_1.json
set ass_charge_default=%MDKMOD%\data\hd\overlays\common\progressive_other_1.json

REM===����ŵ׹�Դ===
set enemy_nolight=%MDKMOD%\data\hd\character\nolight.enemysign
set enemy_light_1=%MDKMOD%\data\hd\character\light_1.enemysign
set enemy_light_2=%MDKMOD%\data\hd\character\light_2.enemysign
set enemy_light_3=%MDKMOD%\data\hd\character\light_3.enemysign
set enemy_nosign=%MDKMOD%\data\hd\character\nosign.enemysign
set monster_json_file=%MDKMOD%\data\hd\character\monsters.json
set monster_json_file_backup=%MDKMOD%\data\hd\character\monsters_mdk.json

REM===����ʶ��ϵͳʹ�ò���===
set lang_strings=%d2r_strings%
set lang_strings_backup=%d2r_strings%_backup

set lang_zhTW_cht_strings=%d2r_strings%_zhTW_cht
set lang_zhTW_chs_strings=%d2r_strings%_zhTW_chs
set lang_zhCN_strings=%d2r_strings%_zhCN
set lang_zhTW_cht_OLD_strings=%d2r_strings%_zhTW_cht_OLD

set lang_zhTW_cht=%d2r_strings%\zhTW_cht
set lang_zhTW_chs=%d2r_strings%\zhTW_chs
set lang_zhCN=%d2r_strings%\zhCN
set lang_zhTW_cht_OLD=%d2r_strings%\zhTW_cht_OLD

REM===Ͷ������Ч===
set magic_arrow=%d2r_missiles%\arrow.json
set light_javelin=%d2r_missiles%\javelin.json
set monster_res=%d2r_excel%\monstats.txt
set function_btn=%MDKMOD%\data\hd\global\ui\mdk\mdk
set map_nolv=%d2r_strings%\levels_nolv.json
set map_tips=%d2r_strings%\levels_tips.json
set map_lv=%d2r_strings%\levels_lv.json

set diff_btn_tip=%d2r_layouts%\characterdifficultymodalhd.json

set TC_mode_on=%d2r_excel%\offline\TC\TC_mode.ini
set TC_default=%d2r_excel%\offline\TC\TreasureClassEx_default.txt
set TC_normal=%d2r_excel%\offline\TC\TreasureClassEx_normal.txt
set TC_tcup=%d2r_excel%\offline\TC\TreasureClassEx_tcup.txt
set TC_nomisc=%d2r_excel%\offline\TC\TreasureClassEx_nomisc.txt
set TC_allup=%d2r_excel%\offline\TC\TreasureClassEx_nomisc_tcup.txt


set itemratio_up=%d2r_excel%\itemratio.txt
set monster_level=%d2r_excel%\levels.txt
set monster_1x=%d2r_excel%\levels_1.txt
set monster_2x=%d2r_excel%\levels_2.txt
set monster_3x=%d2r_excel%\levels_3.txt
set monster_10x=%d2r_excel%\levels_10.txt
set monster_20x=%d2r_excel%\levels_20.txt
set ntag=0

set sp_effects=%d2r_missiles%\ice_orb.json
set poison_nova_effects=%d2r_missiles%\poison_nova.json
set magicarrow_effects=%d2r_missiles%\arrow.json
set light_javelin_effects=%d2r_missiles%\javelin.json
set light_axe_effects=%d2r_missiles%\balanced_axe_missile.json
set light_a3mon_effects=%d2r_missiles%\blowdart.json
set nova_effects_no_storm=%d2r_missiles%\nova_effects\nova_effects_no_storm.sign
set nova_effects_no_nova_storm=%d2r_missiles%\nova_effects\nova_effects_no_nova_storm.sign

set thunder_storm_effects=%d2r_missiles%\lightningbolt_big.json
set chain_light_shield_effects=%d2r_missiles%\chainlightningbolt.json
set diablo_light_nova_effects=%d2r_missiles%\red_lighting\red_nova.sign
set d2eng_fonts=%d2r_ui%\D2ENG_Fonts
set torch_fire=%d2r_missiles%\diabwall.json
set sor_es_aura=%MDKMOD%\data\hd\overlays\sorceress\energyshield.json
set blood_mana_red_aura=%d2r_overlays%\common\blood_mana.json

set mdk_minicube_bigfont_mode_sign=%d2r_layouts%\json_db\bigfont_mode.minicube
set mdk_minicube_normal_mode_sign=%d2r_layouts%\json_db\normal_mode.minicube
set mdk_minicube_normal_old_mode_sign=%d2r_layouts%\json_db\normal_old_mode.minicube
set mdk_minicube_allsign=%d2r_layouts%\json_db\*.minicube

REM ��Ʒ��ݲ�ѯͼ��
set inven_top=%global_image_folder%\ui\mdk\inventory_icon_top
set inven_bottom=%global_image_folder%\ui\mdk\inventory_icon_bottom

REM �ɰ����㷽���ļ�
REM set mdk_minicube_pi_old_normal		=%d2r_layouts%\playerinventoryexpansionlayouthd_old_normal.json
set mdk_minicube_hc_old_normal=%d2r_layouts%\json_db\horadriccubelayoutminihd_normal_mode_old.json
set mdk_minicube_pi_old_expfile=%d2r_layouts%\json_db\playerinventoryexpansionlayouthd_mdkminicube_old.json
set mdk_minicube_pi_old_origfile=%d2r_layouts%\json_db\playerinventoryoriginallayouthd_mdkminicube_old.json
REM �������
set mdk_minicube_hc_bigfont_mode=%d2r_layouts%\json_db\horadriccubelayoutminihd_bigfont_mode.json
REM �°����㷽���ļ�
set mdk_minicube_hc_new_normal=%d2r_layouts%\json_db\horadriccubelayoutminihd_normal_mode_new.json
set mdk_minicube_pi_new_expfile=%d2r_layouts%\json_db\playerinventoryexpansionlayouthd_mdkminicube_new.json
REM �����㷽��
set mdk_minicube_pi_no_minicube=%d2r_layouts%\json_db\playerinventoryexpansionlayouthd_nominicube_mode.json
REM Ŀ���ļ�
set mdk_minicube_expfile=%d2r_layouts%\playerinventoryexpansionlayouthd.json
set mdk_minicube_origfile=%d2r_layouts%\playerinventoryoriginallayouthd.json
set mdk_minicube_cube_file=%d2r_layouts%\horadriccubelayoutminihd.json

set mini_map_unit=%MDKMOD%\data\hd\global\ui\automap\units.sprite
set mini_map_unit_mdk=%MDKMOD%\data\hd\global\ui\automap\units_mdk.sprite
set mini_map_unit_low=%MDKMOD%\data\hd\global\ui\automap\units.lowend.sprite
set mini_map_unit_low_mdk=%MDKMOD%\data\hd\global\ui\automap\units_mdk.lowend.sprite

REM �л��������Ӵ浵��
set d2r_save=%USERPROFILE%\Saved Games\Diablo II Resurrected
set c_save_sign=%MDKMOD%\current_sharebox.shareboxsign
set c_save_sharebox_num=0
set box_current=%d2r_save%\SharedStashSoftCoreV2.d2i
set box_current_backup=%d2r_save%\SharedStashSoftCoreV2_backup.d2i

REM �̿;���ͼ��
set ass_charge_up=%MDKMOD%\data\hd\overlays\common\progressive_damage_3.json
set ass_charge_missiles=%MDKMOD%\data\hd\missiles\assassin_charge\ass_charge_1.chargesign
set ass_charge_missiles_2=%MDKMOD%\data\hd\missiles\assassin_charge\ass_charge_2.chargesign
set ass_charge_missiles_3=%MDKMOD%\data\hd\missiles\assassin_charge\ass_charge_3.chargesign

set ass_kick_voice_chunli=%MDKMOD%\data\hd\global\sfx\skill\assassin\chunli
set ass_kick_voice_chunli_sign=%MDKMOD%\data\hd\global\sfx\skill\assassin\chunli\chunli.vosign
set ass_kick_no_voice=%MDKMOD%\data\hd\global\sfx\skill\assassin\novoice
set ass_kick_no_voice_sign=%MDKMOD%\data\hd\global\sfx\skill\assassin\novoice\novoice.vosign

REM ===�Զ������ļ����ֶ���===
set autorun_sign_100=%d2r_layouts%\json_db\autorun_sign_100.autorunsign
set autorun_sign_010=%d2r_layouts%\json_db\autorun_sign_010.autorunsign
set autorun_sign_001=%d2r_layouts%\json_db\autorun_sign_001.autorunsign
set autorun_sign_110=%d2r_layouts%\json_db\autorun_sign_110.autorunsign
set autorun_sign_101=%d2r_layouts%\json_db\autorun_sign_101.autorunsign
set autorun_sign_011=%d2r_layouts%\json_db\autorun_sign_011.autorunsign
set autorun_sign_111=%d2r_layouts%\json_db\autorun_sign_111.autorunsign
set autorun_sign_000=%d2r_layouts%\json_db\autorun_sign_000.autorunsign

set autorun_sign_000_file=%d2r_layouts%\json_db\hudwarningshd_hp0_name0_cube0.json
set autorun_sign_111_file=%d2r_layouts%\json_db\hudwarningshd_hp1_name1_cube1.json
set autorun_sign_100_file=%d2r_layouts%\json_db\hudwarningshd_hp1_name0_cube0.json
set autorun_sign_010_file=%d2r_layouts%\json_db\hudwarningshd_hp0_name1_cube0.json
set autorun_sign_001_file=%d2r_layouts%\json_db\hudwarningshd_hp0_name0_cube1.json
set autorun_sign_110_file=%d2r_layouts%\json_db\hudwarningshd_hp1_name1_cube0.json
set autorun_sign_101_file=%d2r_layouts%\json_db\hudwarningshd_hp1_name0_cube1.json
set autorun_sign_011_file=%d2r_layouts%\json_db\hudwarningshd_hp0_name1_cube1.json

set autorun_file=%d2r_layouts%\hudwarningshd.json
set autorun_file_2nd=%d2r_layouts%\hudwarnings2ndhd.json

set AutorunCheck=%d2r_strings%\json_db\AutorunCheck

set AutorunShowRes_sign=%d2r_layouts%\json_db\autorun_showres.autorunsign
set AutorunShowRes_on_file=%d2r_layouts%\json_db\HudWarnings2ndhd_res1.json
set AutorunShowRes_off_file=%d2r_layouts%\json_db\HudWarnings2ndhd_res0.json

REM ===�������ý���ʹ��set===
set rule_addr=%d2r_strings%\json_db\rule

REM ===�����ļ���ɲ��ֶ���===
set NoDropCheck=%d2r_strings%\json_db\DropFilter

REM ===�����ļ��жϱ�־�ļ����壬��־�ļ�Ϊ����ļ�ǰ��s_===
set gem_head=%rule_addr%\head.json
set gem_end=%rule_addr%\end.json
set format=%rule_addr%\format.json
set rewrite=%rule_addr%\rewrite.json
set drop_fz_no=%rule_addr%\nodrop_fz.json
set drop_no=%rule_addr%\nodrop.json
set drop_show=%rule_addr%\showdrop.json
set arrow_no=%rule_addr%\arrow_hide.json
set arrow_icon=%rule_addr%\arrow_icon.json
set arrow_text=%rule_addr%\arrow_text.json
set arrow_texticon=%rule_addr%\arrow_text_icon.json
set gem_icon=%rule_addr%\gem_icon.json
set gem_text=%rule_addr%\gem_text.json
set gem_texticon=%rule_addr%\gem_text_icon.json
set gem_icon_tip=%rule_addr%\gem_icon_tip.json
set gem_text_tip=%rule_addr%\gem_text_tip.json
set gem_texticon_tip=%rule_addr%\gem_text_icon_tip.json
set ring_icon=%rule_addr%\ring_icon.json
set ring_text=%rule_addr%\ring_text.json
set ring_texticon=%rule_addr%\ring_text_icon.json
set ring_hide=%rule_addr%\ring_hide.json
set rune_notip=%rule_addr%\blank.json
set rune_tip=%rule_addr%\rune_tip.json
set scroll_icon=%rule_addr%\scroll_icon.json
set scroll_text=%rule_addr%\scroll_text.json
set scroll_texticon=%rule_addr%\scroll_text_icon.json
set pole_show=%rule_addr%\blank.json
set pole_nodrop=%rule_addr%\nodrop_4s_polearm.json
set low_red=%rule_addr%\low_red.json
set low_black=%rule_addr%\low_black.json
set low_hide=%rule_addr%\low_hide.json

set potion_show=%rule_addr%\blank.json
set potion_nodrop=%rule_addr%\nodrop_potion.json
set rvs_show=%rule_addr%\blank.json
set rvs_nodrop=%rule_addr%\nodrop_rvs.json

set s_drop_fz_no=%rule_addr%\a_fz_no.drop
set s_drop_no=%rule_addr%\a_no.drop
set s_drop_show=%rule_addr%\a_show.drop
set all_drop_sign=%rule_addr%\*.drop

set s_arrow_icon=%rule_addr%\a_icon.arrow
set s_arrow_text=%rule_addr%\a_text.arrow
set s_arrow_texticon=%rule_addr%\a_texticon.arrow
set s_arrow_no=%rule_addr%\a_no.arrow
set all_arrow_sign=%rule_addr%\*.arrow

set s_gem_icon=%rule_addr%\a_icon.gem
set s_gem_text=%rule_addr%\a_text.gem
set s_gem_texticon=%rule_addr%\a_texticon.gem
set s_gem_icon_tip=%rule_addr%\a_icon_tip.gem
set s_gem_text_tip=%rule_addr%\a_text_tip.gem
set s_gem_texticon_tip=%rule_addr%\a_texticon_tip.gem
set all_gem_sign=%rule_addr%\*.gem

set s_rune_notip=%rule_addr%\a_notip.rune
set s_rune_tip=%rule_addr%\a_tip.rune
set all_rune_sign=%rule_addr%\*.rune

set s_ring_icon=%rule_addr%\a_icon.ring
set s_ring_text=%rule_addr%\a_text.ring
set s_ring_texticon=%rule_addr%\a_texticon.ring
set s_ring_hide=%rule_addr%\a_hide.ring
set all_ring_sign=%rule_addr%\*.ring

set s_scroll_icon=%rule_addr%\a_icon.scroll
set s_scroll_text=%rule_addr%\a_text.scroll
set s_scroll_texticon=%rule_addr%\a_texticon.scroll
set all_scroll_sign=%rule_addr%\*.scroll

set s_pole_show=%rule_addr%\a_show.pole
set s_pole_nodrop=%rule_addr%\a_nodrop.pole
set all_pole_sign=%rule_addr%\*.pole

set s_low_red=%rule_addr%\a_red.low
set s_low_black=%rule_addr%\a_black.low
set s_low_hide=%rule_addr%\a_hide.low
set all_low_sign=%rule_addr%\*.low

set s_potion_show=%rule_addr%\a_show.potion
set s_potion_nodrop=%rule_addr%\a_nodrop.potion
set all_potion_sign=%rule_addr%\*.potion

set s_rvs_show=%rule_addr%\a_show.rvs
set s_rvs_nodrop=%rule_addr%\a_nodrop.rvs
set all_rvs_sign=%rule_addr%\*.rvs

set gem_file=%item-gems%

set huaijiu_nodrop=%d2r_strings%-legacy\item-gems.json
set huaijiu_nodrop2=%d2r_strings%-legacy\mercenaries.json
set huaijiu_idkey=%d2r_strings%-legacy\item-modifiers.json

REM ===������ϸ�������õĲ��ֶ���===
set s_drop=%drop_show%
set s_arrow=%arrow_texticon%
set s_scroll=%scroll_texticon%
set s_gem=%gem_texticon%
set s_rune=%rune_notip%
set s_ring=%ring_texticon%
set s_pole=%pole_show%
set s_low=%low_hide%
set s_potion=%potion_show%
set s_rvs=%rvs_show%

REM===���߸��ֹ���===
set exp_file=%d2r_excel%\experience.txt
set charstats_file=%d2r_excel%\charstats.txt

set exp_mode_on=%d2r_excel%\offline\exp\exp_mode.ini
set exp_mode_20=%d2r_excel%\offline\exp\experience_20.txt
set exp_mode_99=%d2r_excel%\offline\exp\experience_99.txt
set exp_mode_default=%d2r_excel%\offline\exp\experience_default.txt

set charstats_mode_on=%d2r_excel%\offline\charstat\charstats_mode.ini
set charstats_plus=%d2r_excel%\offline\charstat\charstats_plus.txt
set charstats_pro=%d2r_excel%\offline\charstat\charstats_pro.txt
set charstats_ultra=%d2r_excel%\offline\charstat\charstats_ultra.txt
set charstats_default=%d2r_excel%\offline\charstat\charstats_default.txt

set all_dc=%d2r_excel%\uniqueitems_dc.txt
set caidan_unique_mode_on=%d2r_excel%\offline\uniqueitems\caidan_unique_mode.ini
set caidan_unique_mode_default=%d2r_excel%\offline\uniqueitems\uniqueitems_default.txt
set caidan_unique_mode_caidan=%d2r_excel%\offline\uniqueitems\uniqueitems_caidan.txt
set caidan_unique_mode_normal=%d2r_excel%\offline\uniqueitems\uniqueitems_normal.txt
set uniqueitems_file=%d2r_excel%\uniqueitems.txt

set skills_mode_on=%d2r_excel%\offline\skill_plus\skills_mode.ini
set skills_default=%d2r_excel%\offline\skill_plus\skills_default.txt
set skills_normal=%d2r_excel%\offline\skill_plus\skills_normal.txt
set skills_plus=%d2r_excel%\offline\skill_plus\skills_plus.txt
set skills_file=%d2r_excel%\skills.txt
set missiles_default=%d2r_excel%\offline\skill_plus\missiles_default.txt
set missiles_normal=%d2r_excel%\offline\skill_plus\missiles_normal.txt
set missiles_plus=%d2r_excel%\offline\skill_plus\missiles_plus.txt
set missiles_file=%d2r_excel%\missiles.txt

set nowtime=%date:~0,4%%date:~5,2%%date:~8,2%_%time:~0,2%_%time:~3,2%_%time:~6,2%

REM===���ߴ�����===
set offline_bigbox=%d2r_layouts%\json_db\bank_bigbox.sign
set offline_fullhire_on=%d2r_layouts%\set_sign\fullhire.ini
set layouts_folder=%d2r_layouts%

REM===������������ʹ��===
set high_rune_num=24 25 26 27 28 29 30 31 32 33
set high_rune_file_part=%d2r_sfx%\item\high_rune
set high_rune=%d2r_sfx%\item\high_rune.flac
set high_rune24=%d2r_sfx%\item\high_rune_24.flac
set high_rune25=%d2r_sfx%\item\high_rune_25.flac
set high_rune26=%d2r_sfx%\item\high_rune_26.flac
set high_rune27=%d2r_sfx%\item\high_rune_27.flac
set high_rune28=%d2r_sfx%\item\high_rune_28.flac
set high_rune29=%d2r_sfx%\item\high_rune_29.flac
set high_rune30=%d2r_sfx%\item\high_rune_30.flac
set high_rune31=%d2r_sfx%\item\high_rune_31.flac
set high_rune32=%d2r_sfx%\item\high_rune_32.flac
set high_rune33=%d2r_sfx%\item\high_rune_33.flac
set d3drop=%d2r_sfx%\item\high_rune_D3Legend.flac
set d3dropandmusic=%d2r_sfx%\item\high_rune_D3Legend_music.flac
set jinse=%d2r_sfx%\item\HEARTHSTONE.flac
set item_rune=%d2r_sfx%\item\item_rune_hd(D2_ORIGINAL).flac
set states_end_sound_folder=%d2r_sfx%\states_end_sound
set states_end_sound=%d2r_excel%\states.txt
set zhongli_sound=%d2r_sfx%\skill\barbarian\circle1_hd.flac

set hp_style=default
set target_profile=%d2r_layouts%\_profilehd.json
set target_hp_color=%MDKMOD%\data\hd\global\ui\panel\hud_02\healthmanaanimation\healthidle\4k\globe_color_hp.sprite
set target_mp_color=%MDKMOD%\data\hd\global\ui\panel\hud_02\healthmanaanimation\healthidle\4k\globe_color_mp.sprite
set profile_dir=%d2r_layouts%\json_db\_profilehd_

set battlecommand_end_sign=%d2r_sfx%\states_end_sound\mdk\battlecommand_end.sesign
set battleorders_end_sign=%d2r_sfx%\states_end_sound\mdk\battleorders_end.sesign
set shout_end_sign=%d2r_sfx%\states_end_sound\mdk\shout_end.sesign

set bonearmor_end_sign=%d2r_sfx%\states_end_sound\mdk\bonearmor_end.sesign
set holyshield_end_sign=%d2r_sfx%\states_end_sound\mdk\holyshield_end.sesign

set cyclonearmor_end_sign=%d2r_sfx%\states_end_sound\mdk\cyclonearmor_end.sesign
set morph_end_sign=%d2r_sfx%\states_end_sound\mdk\morph_end.sesign
set markwolf_end_sign=%d2r_sfx%\states_end_sound\mdk\markwolf_end.sesign
set markbear_end_sign=%d2r_sfx%\states_end_sound\mdk\markbear_end.sesign

set venom_end_sign=%d2r_sfx%\states_end_sound\mdk\venom_end.sesign
set bladeshield_end_sign=%d2r_sfx%\states_end_sound\mdk\bladeshield_end.sesign
set burstofspeed_end_sign=%d2r_sfx%\states_end_sound\mdk\burstofspeed_end.sesign
set fade_end_sign=%d2r_sfx%\states_end_sound\mdk\fade_end.sesign

set frozenarmor_end_sign=%d2r_sfx%\states_end_sound\mdk\frozenarmor_end.sesign
set shiverarmor_end_sign=%d2r_sfx%\states_end_sound\mdk\shiverarmor_end.sesign
set chillingarmor_end_sign=%d2r_sfx%\states_end_sound\mdk\chillingarmor_end.sesign
set enchant_end_sign=%d2r_sfx%\states_end_sound\mdk\enchant_end.sesign
set energyshield_end_sign=%d2r_sfx%\states_end_sound\mdk\energyshield_end.sesign
set states_end_sound_folder=%d2r_sfx%\states_end_sound

set quest_point_ci_folder=%objects_folder%\json_db\quest_point_circle
set quest_point_line_folder=%objects_folder%\json_db\quest_point_line
set quest_point_common_folder=%objects_folder%\json_db\common
	
set cubemain_ex=%d2r_excel%\cubemain.txt

set no_panelborder=%d2r_layouts%\panelborderspanelhd.json.mdk
set no_onekey_newgame=%d2r_layouts%\hubQuickJoinGameButtonhd_onekey.json

set no_loading_anime=%d2r_layouts%\loadscreenpanelhd.json
set loading_panel_hd=%d2r_layouts%\loadscreenpanelhd.json
set loading_panel=%d2r_layouts%\loadscreenpanel.json

set monster_randtransforms_on=%MDKMOD%\data\hd\global\palette\randtransforms.json
set monster_randtransforms_off=%MDKMOD%\data\hd\global\palette\randtransforms.json.mdk

set deadbody_sor=%d2r_char%\player\sorceress\animation\combined.timelines
set deadbody_pal=%d2r_char%\player\paladin\animation\combined.timelines
set deadbody_bar=%d2r_char%\player\barbarian\animation\combined.timelines
set deadbody_nec=%d2r_char%\player\necromancer\animation\combined.timelines
set deadbody_ama=%d2r_char%\player\amazon\animation\combined.timelines
set deadbody_dru=%d2r_char%\player\druid\animation\combined.timelines
set deadbody_asn=%d2r_char%\player\assassin\animation\combined.timelines

set tz_mode_setup=%MDKMOD%\data\hd\global\excel\json_db\tz_mode.setup
set tz_mode_normal=%MDKMOD%\data\hd\global\excel\json_db\desecratedzones_normal.json
set tz_mode_more=%MDKMOD%\data\hd\global\excel\json_db\desecratedzones_more.json
set tz_mode_best=%MDKMOD%\data\hd\global\excel\json_db\desecratedzones_best.json
set tz_mode_file=%MDKMOD%\data\hd\global\excel\desecratedzones.json

set quick_friendlist=%d2r_layouts%\MDKMODShowFriendListhd.json

set vo_file_sign=%d2r_strings%\json_db\vo\vo_sign.ini
set vo_file=%d2r_strings%\vo.json
set vo_full=%d2r_strings%\json_db\vo\vo_FULL.json
set vo_less=%d2r_strings%\json_db\vo\vo_LESS.json
set vo_null=%d2r_strings%\json_db\vo\vo_NULL.json

set modinfo_sign=%MOD_FOLDER%\modinfo.ini
set modinfo_file=%MOD_FOLDER%\modinfo.json
set modinfo_d2r=%MOD_FOLDER%\modinfo_d2r.json
set modinfo_mdkmod=%MOD_FOLDER%\modinfo_mdkmod.json

REM ==���ٹ���==
set click_quick_buy=%d2r_layouts%\vendorpanellayouthd.json
set click_quick_buy_off=%d2r_layouts%\vendorpanellayouthd.json.mdk

REM ====Bnet�ļ��������������־====
set TFo=%d2r_strings%
set TFile=bnet.json

set Bnet_DB=%TFo%\bnet_db
REM %TFo%\%TFile%

set bnet_text=%Bnet_DB%\bnetText.json
set head=%Bnet_DB%\head.json
set foot=%Bnet_DB%\foot.json
set NullFile=%Bnet_DB%\null.json

set TBnet_file=%TFo%\%TFile%

REM ===���������ö�Ӧ��Ŀ����Ƭ�ļ�===
REM ===������Ƭ����Ĭ��Ϊ��Ƭ�ļ�·��===
set SendEquipmentToChatFile=%Bnet_DB%\SendEquipmentToChat.json
set set0=%SendEquipmentToChatFile%

set ExpandDialogSelectFile=%Bnet_DB%\ExpandDialogSelect.json
set set1=%ExpandDialogSelectFile%

set NewEquipmentFile=%Bnet_DB%\NewEquipment.json
set set2=%NewEquipmentFile%

REM ====Bnet�ļ��������������־END====


REM ĳ�汾�״�����ʱ�Զ���Ⲣ�л�����, CHECKΪ��
if "%VER_CHECK%"=="CHECK" (
	if not exist %setter_ver_check% (
	REM	@echo. file=%setter_ver_check%
		@echo. %Ver%>%setter_ver_check%
		if exist %setter_lang_cht% (
			Goto set_setter_cht
		) else (
			Goto set_setter_chs
		)
	)
)
REM ĳ�汾�״�����ʱ�Զ���Ⲣ�л�����END

:SetupMain
@ECHO OFF
mode con cols=120 lines=52
@Cls
@set CurrentMenu=SetupMain

REM ====��ȡ�����жϱ�־����====
	REM @echo.��ȡ�����С���
	set CheckSign=%Bnet_DB%\bnet_sign.ini
	for /f "delims=, tokens=1,2,3,4,5,6,7,8,9,10,11,12" %%i in (%CheckSign%) do (
		set arr[0]=%%i
		set arr[1]=%%j
		set arr[2]=%%k
		set arr[3]=%%l
		set arr[4]=%%m
		set arr[5]=%%n
		set arr[6]=%%o
		set arr[7]=%%p
		set arr[8]=%%q
		set arr[9]=%%r
		set arr[10]=%%s
		set arr[11]=%%t
		set arr[12]=%%u
		set arr[13]=%%w
		set arr[14]=%%x
	) 
	REM ===�ڴ˴������ñ�־�ļ���ֵ��ֵ����Ӧ����������===
	set SendEquipmentToChat=%arr[0]%
	set ExpandDialogSelect=%arr[1]%
	set NewEquipment=%arr[2]%
	
	REM ===�����ã���ʾһ������ֵ�������Ŵ�===
	REM @echo. 0=%arr[0]%  1=%arr[1]%  2=%arr[2]%  3=%arr[3]%  4=%arr[4]%  5=%arr[5]%
	
	
@CLS
@ echo.	
REM @ echo.                   ����������������������������������������������������������������������������������������������������������������������������
REM @ echo.����               ��         D2R MDK MOD �Զ��������� By ZhangMDKRU#2129        ��
REM @ echo.����               ��                 Ver.%Ver%        ��
REM @ echo.                   ����������������������������������������������������������������������������������������������������������������������������

:: ��ɫ 0 �ڡ�1 ����2 �̡�3 ���ࡢ4 �졢5 �ϡ�6���ػơ�7 ���ҡ�8 ���ҡ�9 ��
:: ��ɫ A ���̡�B ���ࡢC ǳ�졢D ���ϡ�E ǳ�ơ�F ��ɫ
:: color E0     color D0      ����+����

:: 0 �ڡ�1 ����2 �̡�3 ���ࡢ4 �졢5 �ϡ�6���ػơ�7 ���ҡ�8 ���ҡ�9 ��
:: A ���̡�B ���ࡢC ǳ�졢D ���ϡ�E ǳ�ơ�F ��ɫ
:: call :color E2 "text"
:: 72������ɫ+����ɫ��7Ϊ����ɫ 2Ϊ����ɫ������󲻻ỻ�У���Ҫ��echo.�����л���

@ echo.	���������������� D2R MDK MOD ������ %Ver% ����%FOR_MOD_VER%��  By ZhangMDKRU#2129����������������

if exist %DEBUG_FILE% (
	call :color CF "		DEBUGģʽON		"
)
if exist %SETUP_FOLDER_FILE% (
	call :color DF "		��װģʽON		"
)
if not "%MFD%"=="MDK" (
	call :color 3F "	MOD�ļ��У�%MFD%	"
)

@echo.  
@echo.  	���밴��ѡ���Ӧ����ҳ�桿��
call :color E0 "	"
call :color DF "��Z����Ϸ�������� "
@echo. ��X�����߸������� ��C�����ε������� ��V��Ѫ����Ч���� ��B��UI������� ��N����������
@ echo. 

@ echo.��	�������� MDK MOD ��ɫ�������ò��� ��������


@set clang=0
@set /p clang=<%d2r_strings%\lang
@ echo.	�������������԰汾���������ļ��໥�������л��������������������ã����޷��л����������ļ���ռ�á�����

if "%clang%"=="zhTW_cht" (
	@ echo.	�����԰汾�����롾=�� ��=?���л�����1 ���ư深�塿�� 2 �ɰ淭�뷱�� �� 3 ���ư���� �� 4 �����������
	) else if "%clang%"=="zhTW_cht_OLD" (
	@ echo.	�����԰汾�����롾=�� ��=?���л���1 ���ư深��� ��2 �ɰ淭�뷱�� ���� 3 ���ư���� �� 4 �����������
	) else if "%clang%"=="zhTW_chs" (
	@ echo.	�����԰汾�����롾=�� ��=?���л���1 ���ư深��� 2 �ɰ淭�뷱�� �� ��3 ���ư���� ���� 4 �����������
	) else if "%clang%"=="zhCN" (
	@ echo.	�����԰汾�����롾=�� ��=?���л���1 ���ư深��� 2 �ɰ淭�뷱�� �� 3 ���ư���� �� ��4 ����������塿
	) else (
	call :color E4 "	��δ֪���ԡ� ���롾=�� ����ǿ���л��������ð深�塿"
	@ echo.	 
) 
@ echo.	 

if not exist %font_fangxing% (
	@ echo.	 ����ͨģʽ�������塿	���롾CN�� �л�˳��׼Բ��������������ԭ�淽�Ρ������ִ�ڡ���ѩ����	
	) else if not exist %font_dahei% (
	@ echo.	 ����ͨģʽ�������塿	���롾CN�� �л�˳��׼Բ������������ԭ�淽�Ρ������ִ�ڡ�����ѩ����	
	) else if not exist %font_baoxue% (
	@ echo.	 ����ͨģʽ�������塿	���롾CN�� �л�˳��׼Բ������������ԭ�淽�Ρ����ִ�ڡ�����ѩ���ʡ�	
	) else if not exist %font_zhunyuan% (
	@ echo.	 ����ͨģʽ�������塿	���롾CN�� �л�˳�򣺡�׼Բ��������������ԭ�淽�Ρ����ִ�ڡ���ѩ����	
	) else if not exist %font_heiti% (
	@ echo.	 ����ͨģʽ�������塿	���롾CN�� �л�˳��׼Բ�������塿�������ԭ�淽�Ρ����ִ�ڡ���ѩ����	
	) else if not exist %font_libian% (
	@ echo.	 ����ͨģʽ�������塿	���롾CN�� �л�˳��׼Բ������������䡿��ԭ�淽�Ρ����ִ�ڡ���ѩ����	
	) else ( 
	@ echo.	 ����ȡ������ʧ�ܡ�	���롾CN�� ���� ������ǿ����Ϊԭ�淽�����塿
)
if not exist %d2eng_fonts% (
	@ echo.	 ����ͨģʽӢ�����塿	���롾EN�� �л�˳�򣺡�����2ԭ��Ӣ�����塿��������������ͬ�����ú����������壩
	) else (
	@ echo.	 ����ͨģʽӢ�����塿	���롾EN�� �л�˳�򣺰���2ԭ��Ӣ���������������������ͬ�������ú����������壩
)

if not exist %hj_font_fangsong% (
	@ echo.	 *������ģʽ���塿	���롾HJ�� �л�˳�򣺡��������塿����Բ���������ͳ���������Բ����
	) else if not exist %hj_font_qingyuan% (
	@ echo.	 *������ģʽ���塿	���롾HJ�� �л�˳�򣺷������������Բ���塿������ͳ���������Բ����
	) else if not exist %hj_font_ruixiantong% ( 
	@ echo.	 *������ģʽ���塿	���롾HJ�� �л�˳�򣺷����������Բ�����������ͳ�����塿����Բ����
	) else if not exist %hj_font_youyuan% ( 
	@ echo.	 *������ģʽ���塿	���롾HJ�� �л�˳�򣺷����������Բ���������ͳ�����������Բ���塿
	) else (
	@ echo.	 *������ģʽ���塿	���롾HJ�� �л�˳�򣺷����������Բ���������ͳ�����Բ����
)
@ echo.	
if exist %autorun_sign_100% (
	@ echo.	 ��*�Զ������������á�	���롾AU�� �л� ������Ѫ���̡�+����ʾ�����������+�����㷽�С���
	) else if exist %autorun_sign_010% (
	@ echo.	 ��*�Զ������������á�	���롾AU�� �л� ������Ѫ������+����ʾ��������̡�+�����㷽�С���
	) else if exist %autorun_sign_001% (
	@ echo.	 ��*�Զ������������á�	���롾AU�� �л� ������Ѫ������+����ʾ�����������+�����㷽�С̡�
	) else if exist %autorun_sign_110% (
	@ echo.	 ��*�Զ������������á�	���롾AU�� �л� ������Ѫ���̡�+����ʾ��������̡�+�����㷽�С���
	) else if exist %autorun_sign_101% (
	@ echo.	 ��*�Զ������������á�	���롾AU�� �л� ������Ѫ���̡�+����ʾ�����������+�����㷽�С̡�
	) else if exist %autorun_sign_011% (
	@ echo.	 ��*�Զ������������á�	���롾AU�� �л� ������Ѫ������+����ʾ��������̡�+�����㷽�С̡�
	) else if exist %autorun_sign_111% (
	@ echo.	 ��*�Զ������������á�	���롾AU�� �л� ������Ѫ���̡�+����ʾ��������̡�+�����㷽�С̡�
	) else if exist %autorun_sign_000% (
	@ echo.	 ��*�Զ������������á�	���롾AU�� �л� ������Ѫ������+����ʾ�����������+�����㷽�С���
	) else (
	@ echo.	 ��*�Զ������������á�	δ֪״̬���볢�����롾AU111�� ǿ���л�״̬
)
@ echo.	 		�������롾AU��ѭ���л������롾AU111��ָ�����л���0Ϊ��1Ϊ�������롾AUE���ֶ��༭���ã�

@ echo.


REM call :color ED "	  ����������������װ����Ϣ�������� ��CHAT�� �����ı����á��"
REM @ echo.
if "%ExpandDialogSelect%"=="ON" (
	@ echo.	 ������NPCѡȡ��	���롾1�� �л� ��ԭ�桽��������̡�
) else (
	@ echo.	 ������NPCѡȡ��	���롾1�� �л� ��ԭ��̡���������
	set set1=%NullFile%
)

if "%NewEquipment%"=="ON" (
	@ echo.	 ����ʾ�ʵ�װ���İ���	���롾2�� �л� ��ԭ�桽������ϸ�����̡�
) else (
	@ echo.	 ����ʾ�ʵ�װ���İ���	���롾2�� �л� ��ԭ��̡�������ϸ������
	set set2=%NullFile%
)
@ echo.

if "%SendEquipmentToChat%"=="ON" (
	@ echo.	 ������װ���������	���롾3�� �л� ������ ���Է��̡͡��������� ���ܷ��͡�
) else (
	@ echo.	 ������װ���������	���롾3�� �л� ������ �ɷ��͡��������� ���ܷ��̡͡�
	set set0=%NullFile%
)

if exist %tucao_sign%  (
	@ echo.	 ��װ���������²�ģʽ��	���롾Q�� �л� �����²̡ۡ����������²ۡ�
) else (
	@ echo.	 ��װ���������²�ģʽ��	���롾Q�� �л� �����²ۡ����������²̡ۡ�
)   

if exist %base_with_english_sign%  (
	@ echo.	 ���ײ������Ƿ��Ӣ�ġ�	���롾W�� �л����ײ���Ӣ�����̡������ײ���Ӣ������
) else (
	@ echo.	 ���ײ������Ƿ��Ӣ�ġ�	���롾W�� �л����ײ���Ӣ�����������ײ���Ӣ�����̡�
)
if exist %old_baseinfo_txt_sign%  (
	@ echo.	  �� ��ȫ���ְ�ײ���ʾ�����롾W1�� �л���ͼƬ�͵ײ���ʾ�����������ڰ汾��ȫ���ְ�ײ���ʾ�̡�
) else (
	@ echo.	  �� ��ȫ���ְ�ײ���ʾ�����롾W1�� �л���ͼƬ�͵ײ���ʾ�̡����������ڰ汾��ȫ���ְ�ײ���ʾ��
)

@ echo.	   

if exist %baseinfo_txt_sign%  (
	@ echo.	 ���ײ���Ϣ��ʾģʽ��	���롾E�� ���á�����ʾ�ײ���Ϣ��������ʾ�ײĸ�����Ϣ�̡�

		CALL :READINI %keybinds_setup%
		if "!READ_VALUE!"=="lessinfo"  (
			@ echo.	  �� ���ײ���Ϣģʽ��	���롾R�� ���á�����̡�������+�𡽡�����+��+�ײġ�����ȫ��Ϣ��
		) else if "!READ_VALUE!"=="lessinfo_rare"  (
			@ echo.	  �� ���ײ���Ϣģʽ��	���롾R�� ���á����򡽡�����+��̡�������+��+�ײġ�����ȫ��Ϣ��
		) else if "!READ_VALUE!"=="lessinfo_rare_base"  (
			@ echo.	  �� ���ײ���Ϣģʽ��	���롾R�� ���á����򡽡�����+�𡽡�����+��+�ײġ̡�����ȫ��Ϣ��
		) else if "!READ_VALUE!"=="fullinfo"  (
			@ echo.	  �� ���ײ���Ϣģʽ��	���롾R�� ���á����򡽡�����+�𡽡�����+��+�ײġ�����ȫ��Ϣ�̡�
		) else (
			@ echo.	  �� ���ײ���Ϣģʽ��	���롾R�� ���á�δ֪���ã���������+��+�ײġ�
		)
		
		CALL :READINI %amulet_info_setup%
		if "!READ_VALUE!"=="show_amulet_info"  (
			@ echo.	  �� ����Ʒ������ʾ��	���롾T�� ���� ������ʾ������������ʾ�����̡�����������ָ/����/�鱦/�����
		) else (
			@ echo.	  �� ����Ʒ������ʾ��	���롾T�� ���� ������ʾ�����̡�������ʾ����������������ָ/����/�鱦/�����
		)
) else (
	@ echo.	 ���ײ���Ϣ��ʾģʽ��	���롾E�� ���á�����ʾ�ײ���Ϣ�̡�������ʾ�ײĸ�����Ϣ��
)


@ echo.	
CALL :READINI %vo_file_sign%
if "!READ_VALUE!"=="LESS" (
	@ echo.	 ��*ɾ���԰��ı��������ṩ�����ı����������롾VO�� ���á������ı������������ı��̡�����ȫ���ı���
) else if "!READ_VALUE!"=="NULL" (
	@ echo.	 ��*ɾ���԰��ı��������ṩ�����ı����������롾VO�� ���á������ı������������ı�������ȫ���ı��̡�
) else if "!READ_VALUE!"=="FULL" (
	@ echo.	 ��*ɾ���԰��ı��������ṩ�����ı����������롾VO�� ���á������ı��̡����������ı�������ȫ���ı���
) else (
	@ echo.	 ʶ�������*ɾ���԰��ı��������ṩ�����ı����������롾VO�� ���á������ı������������ı�������ȫ���ı���
)

CALL :READINI %modinfo_sign%
if "!READ_VALUE!"=="D2R" (
	@ echo.	 ��*�浵�ļ���λ�ã�����ɴ浵��ͻ���� 	���롾SA�� ���á���ϷĬ�ϴ浵λ�á̡�����ʹ��MOD�����浵λ��
) else if "!READ_VALUE!"=="MDKMOD" (
	@ echo.	 ��*�浵�ļ���λ�ã�����ɴ浵��ͻ����	 ���롾SA�� ���á���ϷĬ�ϴ浵λ�á�����ʹ��MOD�����浵λ�̡�
) else (
	@ echo.	 ʶ�������*�浵�ļ���λ�ã�����ɴ浵��ͻ���� 	���롾SA�� ���á���ϷĬ�ϴ浵λ�á�����ʹ��MOD�����浵λ��
)

@ echo.

if exist %esc_quick_save_sign% (
	@ echo.	 ��*��ESCֱ�ӱ�����Ϸ�� ���롾ESC�����á�ԭ��ESC���桽����˫��ESCֱ�ӱ�����Ϸ�̡���������٣�
) else (
	@ echo.	 ��*��ESCֱ�ӱ�����Ϸ�� ���롾ESC�����á�ԭ��ESC����̡�����˫��ESCֱ�ӱ�����Ϸ��
)
if exist %no_loading_anime% (
@ echo.	 ��*���μ��ؿ��Ŷ�����	���롾A�� ���á�ԭ��״̬��������������ʱ�Ŀ��Ŷ����̡��������������ع��̣�
) else (
@ echo.	 ��*���μ��ؿ��Ŷ�����	���롾A�� ���á�ԭ��״̬�̡�������������ʱ�Ŀ��Ŷ�����
)

if exist %function_btn% (
@ echo.	 ����հ������ܡ�	���롾F�� ���á�ԭ��״̬������UI��ʾ��հ����̡�
) else (
@ echo.	 ����հ������ܡ�	���롾F�� ���á�ԭ��״̬�̡�����UI��ʾ��հ�����
)

if exist %anya_shop% (
	@ echo.	 ���̵�ˢװ��ģʽ��	���롾Y�� ���á�ԭ��״̬������Ⱦɫ����ģʽ������ˢ�ض�����ģʽ�̡�����ˢ�ײ�ģʽ��
) else if exist %base_shop% (
	@ echo.	 ���̵�ˢװ��ģʽ��	���롾Y�� ���á�ԭ��״̬������Ⱦɫ����ģʽ������ˢ�ض�����ģʽ������ˢ�ײ�ģʽ�̡�
) else if exist %color_shop% (
	@ echo.	 ���̵�ˢװ��ģʽ��	���롾Y�� ���á�ԭ��״̬������Ⱦɫ����ģʽ�̡�����ˢ�ض�����ģʽ������ˢ�ײ�ģʽ��
) else (
	@ echo.	 ���̵�ˢװ��ģʽ��	���롾Y�� ���á�ԭ��״̬�̡�����Ⱦɫ����ģʽ������ˢ����ģʽ������ˢ�ײ�ģʽ��
)
@ echo.	  �� ���̵�ˢװ��ģʽ��	���롾Y1���򿪡��༭ˢ�̵�����ļ���

if exist %click_quick_buy% (
@ echo.	 ��*�̵���ٹ���	���롾U�� ���á�ԭ��״̬�������������ٹ���̡�
) else (
@ echo.	 ��*�̵���ٹ���	���롾U�� ���á�ԭ��״̬�̡������������ٹ���
)

@ echo.	 
@ echo.	 ������Ϸ���ڵ����ߵ�ģ�ͣ�
if exist %del_travincal_hall% (
@ echo.		 ��  ���롾H�� �л������δ޷�����������ǽ������Χ���� �̡�
) else (
@ echo.		 ��  ���롾H�� �л������δ޷�����������ǽ������Χ���� ����
)
if exist %del_chaos_door% (
@ echo.		 ��  ���롾J�� �л������λ������������ �̡�
) else (
@ echo.		 ��  ���롾J�� �л������λ������������ ����
)
if exist %del_act4_lava% (
@ echo.		 ��  ���롾K�� �л������λ���֮�ӵ��ҽ� �̡�
) else (
@ echo.		 ��  ���롾K�� �л������λ���֮�ӵ��ҽ� ����
)
if exist %del_ballair_pillars% (
@ echo.		 ��  ���롾L�� �л������ΰͶ������е����������� �̡�
) else (
@ echo.		 ��  ���롾L�� �л������ΰͶ������е����������� ����
) 

@ echo.
@ echo.	 ���롾M1�� ����DIY�޸Ľ�ҡ��������п�װ����ɫ����ϵͳ������ɫ�����ļ���profilehd.json��
@ echo.	 ���롾M2�� ����DIY�޸ķ��ġ�BUFF������Ч��	����Ч�ļ��У�sfxĿ¼��
REM @ echo.	 ���롾N�� ����DIY�޸ĵ�����ʾ�����		�򿪵�������Զ����ļ���item-gems.json��
@ echo.	 ���롾M3�� ����DIY�޸ĵײ���Ϣ��		�򿪵ײ���Ϣ�Զ����ļ���item-nameaffixes.json��
@ echo.	 ���롾M4�� ����DIY�޸�������Ϣ��		���ı���Ϣ�Զ����ļ���mercenaries.json��
@ echo.	 ���롾M5�� �����򿪴浵�ļ��С�����%d2r_save%��
@ echo.
set  obj=""
set /p obj= �������ֻ���ĸ���س�ִ�У�

if /i "%obj%"=="Z" Goto SetupMain
if /i "%obj%"=="X" Goto LightSetupMain
if /i "%obj%"=="C" Goto RuleSetup_Main
if /i "%obj%"=="V" Goto RuneSound_Main
if /i "%obj%"=="B" Goto GameStyle_Main
if /i "%obj%"=="N" Goto OfflineGame_Main

if /i "%obj%"=="COPYME" Goto copy_setter_to_db
if /i "%obj%"=="CLEANME" Goto clean_setter_lang_sign_file
if /i "%obj%"=="DEBUG" Goto set_debug_file
if /i "%obj%"=="SETUP" Goto set_setup_folder_file
REM if /i "%obj%"=="MOD" Goto set_mod_folder

if /i "%obj%"=="D2R" Goto run_d2r_game
if /i "%obj%"=="excel" (explorer.exe %d2r_excel%)
if /i "%obj%"=="layouts" (explorer.exe %d2r_layouts%)
if /i "%obj%"=="strings" (explorer.exe %d2r_strings%)

if /i "%obj%"=="=" Goto set_lang_ver
if /i "%obj%"=="=1" Goto set_lang_zhTW_cht
if /i "%obj%"=="=2" Goto set_lang_zhTW_cht_OLD
if /i "%obj%"=="=3" Goto set_lang_zhTW_chs
if /i "%obj%"=="=4" Goto set_lang_zhCN

if /i "%obj%"=="CN" Goto set_font_file
if /i "%obj%"=="EN" Goto set_d2_oringnal_english_font
if /i "%obj%"=="-" Goto show_font_picture
if /i "%obj%"=="HJ" Goto set_hj_font_file

if /i "%obj%"=="AU" Goto set_autorun_roll
if /i "%obj%"=="AUE" Goto set_edit_autorun_file
if /i "%obj%"=="AU000" Goto set_autorun_000
if /i "%obj%"=="AU111" Goto set_autorun_111
if /i "%obj%"=="AU100" Goto set_autorun_100
if /i "%obj%"=="AU010" Goto set_autorun_010
if /i "%obj%"=="AU001" Goto set_autorun_001
if /i "%obj%"=="AU110" Goto set_autorun_110
if /i "%obj%"=="AU101" Goto set_autorun_101
if /i "%obj%"=="AU011" Goto set_autorun_011

REM if /i "%obj%"=="CHAT" Goto set_GameTextFile
if /i "%obj%"=="1" Goto set_ExpandDialogSelect
if /i "%obj%"=="2" Goto set_NewEquipment
if /i "%obj%"=="3" Goto set_SendEquipmentToChat

if /i "%obj%"=="Q" Goto set_equipment_with_tucao
if /i "%obj%"=="W" Goto set_base_with_english
if /i "%obj%"=="W1" Goto set_old_baseinfo_ver

if /i "%obj%"=="E" Goto set_show_baseinfo
if /i "%obj%"=="R" Goto set_baseinfo_version
if /i "%obj%"=="T" Goto set_amulet_info

if /i "%obj%"=="VO" Goto set_vo_file
if /i "%obj%"=="SA" Goto set_modinfo_file

if /i "%obj%"=="ESC" Goto set_pause_file

if /i "%obj%"=="A" Goto set_no_loading_anime
REM if /i "%obj%"=="S" Goto set_no_panelborder
if /i "%obj%"=="F" Goto set_hollow_function

if /i "%obj%"=="Y" Goto set_roll_shop_mode
if /i "%obj%"=="Y1" Goto open_roll_shop_file
if /i "%obj%"=="U" Goto set_click_quick_buy

if /i "%obj%"=="H" Goto set_del_travincal_hall
if /i "%obj%"=="J" Goto set_del_chaos_door
if /i "%obj%"=="K" Goto set_del_act4_lava
if /i "%obj%"=="L" Goto set_del_ballair_pillars

if /i "%obj%"=="M1" Goto open_sys_base_color_folder
if /i "%obj%"=="M2" Goto open_game_sound_folder
if /i "%obj%"=="M3" Goto open_item_nameaffixes_file
if /i "%obj%"=="M4" Goto open_mercenaries_file
if /i "%obj%"=="M5" Goto func_open_savepath

@echo.
@echo	  ��Ч���룬�뿴����� �����е���ĸ�������룡
@echo.
pause
ping -n 1 127.1>nul 
goto SetupMain


REM ====================================================================
REM ====================================================================
REM ====================================================================
REM ====================================================================
REM ====================================================================


:LightSetupMain
mode con cols=120 lines=30
@Cls
@set CurrentMenu=LightSetupMain

@ECHO OFF
@ echo.	
REM @ echo.                   ����������������������������������������������������������������������������������������������������������������������������
REM @ echo.����               ��         D2R MDK MOD �Զ��������� By ZhangMDKRU#2129        ��
REM @ echo.����               ��                 Ver.%Ver%        ��
REM @ echo.                   ����������������������������������������������������������������������������������������������������������������������������

:: ��ɫ 0 �ڡ�1 ����2 �̡�3 ���ࡢ4 �졢5 �ϡ�6���ػơ�7 ���ҡ�8 ���ҡ�9 ��
:: ��ɫ A ���̡�B ���ࡢC ǳ�졢D ���ϡ�E ǳ�ơ�F ��ɫ
:: color E0     color D0      ����+����

:: 0 �ڡ�1 ����2 �̡�3 ���ࡢ4 �졢5 �ϡ�6���ػơ�7 ���ҡ�8 ���ҡ�9 ��
:: A ���̡�B ���ࡢC ǳ�졢D ���ϡ�E ǳ�ơ�F ��ɫ
:: call :color E2 "text"
:: 72������ɫ+����ɫ��7Ϊ����ɫ 2Ϊ����ɫ������󲻻ỻ�У���Ҫ��echo.�����л���

@ echo.	���������������� D2R MDK MOD ������ %Ver% ����%FOR_MOD_VER%��  By ZhangMDKRU#2129����������������

if exist %DEBUG_FILE% (
	call :color CF "		DEBUGģʽON		"
)
if exist %SETUP_FOLDER_FILE% (
	call :color DF "		��װģʽON		"
)
if not "%MFD%"=="MDK" (
	call :color 3F "	MOD�ļ��У�%MFD%	"
)

@echo.  
@echo.  	���밴��ѡ���Ӧ����ҳ�桿��
call :color E0 "	��Z����Ϸ�������� "
call :color DF "��X�����߸������� "
@echo. ��C�����ε������� ��V��Ѫ����Ч���� ��B��UI������� ��N����������
@ echo.
@ echo.��	�������� MDK MOD ���߸�����ع������� ��������

set /p entry_guider_mode=<%entry_guider_sign%
if "%entry_guider_mode%"=="light" (
@ echo.	 ���ص��������������	���롾1�� �л���ԭ��״̬��������ɫ�����̡�������Ȧָ����
) else if "%entry_guider_mode%"=="circle" (
@ echo.	 ���ص��������������	���롾1�� �л���ԭ��״̬��������ɫ������������Ȧָ���̡�
) else (
@ echo.	 ���ص��������������	���롾1�� �л���ԭ��״̬�̡�������ɫ������������Ȧָ����
)
if exist %wp_guider% (
@ echo.	 �����͵����������	���롾2�� �л���ԭ��״̬��������ɫ�����̡�
) else (
@ echo.	 �����͵����������	���롾2�� �л���ԭ��״̬�̡�������ɫ������
)
if exist %lc_light% (
@ echo.	 ���������������	���롾3�� �л���ԭ��״̬���������������LC���ӣ��������̡�
) else (
@ echo.	 ���������������	���롾3�� �л���ԭ��״̬�̡��������������LC���ӣ���������
)

if exist %sc_light% (
@ echo.	 ��С��/�������������	���롾4�� ���á�ԭ��״̬������С��/���������SC/GC���ӣ��������̡�
) else (
@ echo.	 ��С��/�������������	���롾4�� ���á�ԭ��״̬�̡�����С��/���������SC/GC���ӣ���������
)

if exist %amulet_light% (
@ echo.	 ������������Ч��	���롾5�� ���á�ԭ��״̬������������������Ч�̡�
) else (
@ echo.	 ������������Ч��	���롾5�� ���á�ԭ��״̬�̡�����������������Ч��
)

if exist %ring_light% (
@ echo.	 ����ָ������Ч��	���롾6�� ���á�ԭ��״̬��������ָ��������Ч�̡�
) else (
@ echo.	 ����ָ������Ч��	���롾6�� ���á�ԭ��״̬�̡�������ָ��������Ч��
)
@ echo. 

if not exist %all_gem% (
@ echo.	 ����ʯ������Ч��	���롾7�� ���á�ԭ��״̬������ȫ����ʯ�̡��������/�鱦��
) else if not exist %high_gem% (
@ echo.	 ����ʯ������Ч��	���롾7�� ���á�ԭ��״̬������ȫ����ʯ���������/�鱦�̡�
) else (
@ echo.	 ����ʯ������Ч��	���롾7�� ���á�ԭ��״̬�̡�����ȫ����ʯ���������/�鱦��
)


set /p rune_light_setup_setting=<%rune_light_setup%
if "%rune_light_setup_setting%"=="all_effects" (
@ echo.	 ���ߵȷ��ĵ�����Ч��	���롾8�� ���á�ԭ��״̬����������Ч������������+�ǹ�Ч�������Ӹ��ɣ��̡�
) else if "%rune_light_setup_setting%"=="light_arrow" (
@ echo.	 ���ߵȷ��ĵ�����Ч��	���롾8�� ���á�ԭ��״̬����������Ч���̡���������+�ǹ�Ч�������Ӹ��ɣ���
) else (
@ echo.	 ���ߵȷ��ĵ�����Ч��	���롾8�� ���á�ԭ��״̬�̡���������Ч������������+�ǹ�Ч�������Ӹ��ɣ���
)

if exist %craft_rune_light% (
@ echo.	 ���ֹ����Ĺ�����	���롾9�� ���á�ԭ��״̬�������ֹ����ģ�4/8/11/12#����������Ч�̡�
) else (
@ echo.	 ���ֹ����Ĺ�����	���롾9�� ���á�ԭ��״̬�̡������ֹ����ģ�4/8/11/12#����������Ч��
)

@ echo. 
if exist %objects_aura% (
@ echo.	 ����������Ʒ���⡿	���롾U�� ���á�ԭ��״̬��������������Ʒ����̡�
) else (
@ echo.	 ����������Ʒ���⡿	���롾U�� ���á�ԭ��״̬�̡�������������Ʒ���⡽
)
if exist %dest_aura% (
@ echo.	 �����߻���Ʒ���⡿	���롾I�� ���á�ԭ��״̬���������߻���Ʒ����̡�
) else (
@ echo.	 �����߻���Ʒ���⡿	���롾I�� ���á�ԭ��״̬�̡��������߻���Ʒ���⡽
)
if exist %shrines_light% (
@ echo.	 ����̳��ˮ���ӹ�����	���롾O�� ���á�ԭ��״̬��������̳��ˮ�����������̡�
) else (
@ echo.	 ����̳��ˮ���ӹ�����	���롾O�� ���á�ԭ��״̬�̡�������̳��ˮ������������
)
@ echo.
if exist %player_light% (
@ echo.	 ��*ȫ��Ļ��Դ������	���롾P�� ���á�ԭ��״̬������ȫͼ��Դ�������ù�Դ���̡�
) else (
@ echo.	 ��*ȫ��Ļ��Դ������	���롾P�� ���á�ԭ��״̬�̡�����ȫͼ��Դ�������ù�Դ����
)
if exist %vis_light% (
@ echo.	 ��*ȫ��Ļ��Դ������	���롾F�� ���á�ԭ�滷����״̬������ȫͼ��Դ��ʹ�û�����Դ���̡�
) else (
@ echo.	 ��*ȫ��Ļ��Դ������	���롾F�� ���á�ԭ�滷����״̬�̡�����ȫͼ��Դ��ʹ�û�����Դ����
)
@ echo.

if exist %monster_randtransforms_on% (
@ echo.	 ��*����ɫ͹�Ծ�Ӣ�֡�	���롾Y�� ���á�ԭ��״̬����������ɫ͹�Ծ�Ӣ�̡֡������־�Ӣ����ɫ��
) else (
@ echo.	 ��*����ɫ͹�Ծ�Ӣ�֡�	���롾Y�� ���á�ԭ��״̬�̡���������ɫ͹�Ծ�Ӣ�֡�
)

@ echo.	 ��*���︨������뷢��ģʽ��
if exist %enemy_nosign% (
	@ echo.		 ��  ���롾A�� �л���ԭ��״̬ �̡�����Σ�չ����з��ı�ǡ���������ŵ׹�Դ+Σ�չ����ǡ�
) else if exist %enemy_nolight% (
	@ echo.		 ��  ���롾A�� �л���ԭ��״̬������Σ�չ����з��ı�� �̡���������ŵ׹�Դ+Σ�չ����ǡ�
) else if exist %enemy_light_2% (
	@ echo.		 ��  ���롾A�� �л���ԭ��״̬������Σ�չ����з��ı�ǡ���������ŵ׹�Դ+Σ�չ����� �̡�
) else (
	@ echo.		 ��  ���롾A�� �л���δ֪״̬����������ŵ׹�Դ+Σ�չ����ǡ�
)


@ echo.
set  obj=""
set /p obj= �������ֻ���ĸ���س�ִ�У�

if /i "%obj%"=="Z" Goto SetupMain
if /i "%obj%"=="X" Goto LightSetupMain
if /i "%obj%"=="C" Goto RuleSetup_Main
if /i "%obj%"=="V" Goto RuneSound_Main
if /i "%obj%"=="B" Goto GameStyle_Main
if /i "%obj%"=="N" Goto OfflineGame_Main

if /i "%obj%"=="1" Goto set_enter_lightbeam_guider
if /i "%obj%"=="2" Goto set_waypoint_lightbeam_guider
if /i "%obj%"=="3" Goto set_large_charm_lightbeam_sign
if /i "%obj%"=="4" Goto set_small_charm_lightbeam_sign
if /i "%obj%"=="5" Goto set_amulet_lightbeam_sign
if /i "%obj%"=="6" Goto set_ring_lightbeam_sign
if /i "%obj%"=="7" Goto set_gems_lightbeam_sign
if /i "%obj%"=="8" Goto set_runes_lightbeam_sign
if /i "%obj%"=="9" Goto set_craft_runes_lightbeam_sign

if /i "%obj%"=="U" Goto set_chests_with_light
if /i "%obj%"=="I" Goto set_destructibles_with_light
if /i "%obj%"=="N" Goto set_eli_monster_highlight
if /i "%obj%"=="O" Goto set_shrines_light
if /i "%obj%"=="P" Goto set_player_light
if /i "%obj%"=="F" Goto set_vis_light

if /i "%obj%"=="Y" Goto set_eli_monster_highlight

if /i "%obj%"=="A" Goto change_monster_light_mode
if /i "%obj%"=="S" Goto set_deadbody_light

@echo.
@echo	  ��Ч���룬�뿴����� �����е���ĸ�������룡
@echo.
pause
ping -n 1 127.1>nul 
goto LightSetupMain


REM ===Bnet�ļ������ĳ��򲿷�===
	REM ====ִ�г���====
	:set_SendEquipmentToChat
		if "%SendEquipmentToChat%"=="ON" (
		@ echo.	�� ��0�����ã�װ����ʾ���͵������	������ ���Է��̡͡��������� ���ܷ��͡�
			REM ==�޸�Ŀ���ļ�==
			set set0=%NullFile%
			REM ==�޸ı�־�ļ�==
			set arr[0]=OFF
		) else (
		@ echo.	�� ��0�����ã��ʵ�װ���İ�˵����	������ �ɷ��͡��������� ���ܷ��̡͡�
			REM ==�޸�Ŀ���ļ�==
			set set0=%SendEquipmentToChatFile%
			REM ==�޸ı�־�ļ�==
			set arr[0]=ON
		)
		REM ==ִ���޸�==
	goto CreateBnetFile

	:set_ExpandDialogSelect
		if "%ExpandDialogSelect%"=="ON" (
			@ echo.		�� ��1�����ã�����NPC�Ի�ѡȡ��	��ԭ�桽��������̡�
			REM ==�޸�Ŀ���ļ�==
			set set1=%NullFile%
			REM ==�޸ı�־�ļ�==
			set arr[1]=OFF
		) else (
			@ echo.		�� ��2�����ã�����NPC�Ի�ѡȡ��	��ԭ��̡���������
			REM ==�޸�Ŀ���ļ�==
			set set1=%ExpandDialogSelectFile%
			REM ==�޸ı�־�ļ�==
			set arr[1]=ON
		)
		REM ==ִ���޸�==
	goto CreateBnetFile

	:set_NewEquipment
		if "%NewEquipment%"=="ON" (
			@ echo.	�� ��2�����ã��ʵ�װ���İ�˵����	��ԭ�桽������ϸ�����̡�
			REM ==�޸�Ŀ���ļ�==
			set set2=%NullFile%
			REM ==�޸ı�־�ļ�==
			set arr[2]=OFF
		) else (
			@ echo.	�� ��2�����ã��ʵ�װ���İ�˵����	��ԭ��̡�������ϸ������
			REM ==�޸�Ŀ���ļ�==
			set set2=%NewEquipmentFile%
			REM ==�޸ı�־�ļ�==
			set arr[2]=ON
		)
		REM ==ִ���޸�==
	goto CreateBnetFile

	REM ==ִ���޸ĳ���==
	:CreateBnetFile
		REM ==ִ���޸�Ŀ���ļ�==
		REM ==�м������������Ҫ���Ӽ���������Ƭ==
		set rule_file=%head%+%bnet_text%+%set0%+%set1%+%set2%+%foot%
		rem set rule_file=%head%+%foot%
		if exist %TBnet_file% (del %TBnet_file%)
		@echo.rule_file=%rule_file%
		@echo. 
		@echo.TBnet_file=%TBnet_file%
		@echo. 
		REM pause
		@echo.  COPY����ʼ
		copy /Y /b %rule_file% %TBnet_file%
		@echo.  COPY�������
		
		REM ==ִ���޸ı�־�ļ�==
		@echo.  ���ɱ�־��ʼ��%arr[0]%,%arr[1]%,%arr[2]%,%arr[3]%,%arr[4]%,%arr[5]%
		@echo.%arr[0]%,%arr[1]%,%arr[2]%,%arr[3]%,%arr[4]%,%arr[5]%>%CheckSign%
		
		@echo.  ����ִ�н���
		REM pause
	goto FunctionEnd
REM ===Bnet�ļ���������END===


REM ===��������������ָ���===
:set_mod_folder
	cls
	@ echo.		 �޸�MOD�ļ��У����������������Ϊ���ø��ļ��е�MOD��������Ĭ�ϵ�MDK�ļ��С�
	set  newmod=""
	set /p newmod= ��������Ҫ�޸ĵ�MOD�ļ�������
	
	if /i "%newmod%"=="" Goto set_mod_folder
	
	if exist %MODS%\!newmod!\!newmod!.mpq (
		@ echo.		 ��⵽�µ�MOD�ļ��У����������л�Ϊ���ļ��С�
		set MDKMOD=%MODS%\%MOD_FOLDER%
	) else (
		@ echo.		 �޷���⵽MOD�ļ��У�
		set MDKMOD=%MODS%\%MOD_FOLDER%
	)

Goto FunctionEnd

:set_debug_file
if exist %DEBUG_FILE% (
	@echo	  ��ǰDEBUGģʽ�����������������رա�DEBUGģʽ
	del %DEBUG_FILE%
) else (
	@echo	  ��ǰDEBUGģʽ���رա���������������DEBUGģʽ
	@echo."x">%DEBUG_FILE%
)
Goto FunctionEnd

:set_setup_folder_file
if exist %SETUP_FOLDER_FILE% (
	@echo	  ��ǰ��װģʽ�����������������رա���װģʽ
	del %SETUP_FOLDER_FILE%
) else (
	@echo	  ��ǰ��װģʽ���رա�����������������װģʽ
	@echo."x">%SETUP_FOLDER_FILE%
)
Goto FunctionEnd

:run_d2r_game
@ echo.	 �����г���ָ��: !d2r_path!\D2R.exe -mod MDK -txt -w
!d2r_path!\D2R.exe -mod MDK -txt -w
Goto FunctionEnd


REM =============================================================
REM =============================================================
REM =============================================================
REM =============================================================
REM =============================================================
:set_click_quick_buy
	if exist %click_quick_buy% (
		@ echo.	 ���̵���ٹ���	���롾U�� ���á�ԭ��״̬�������������ٹ���̡�
		del %click_quick_buy%
	) else (
		@ echo.	 ���̵���ٹ���	���롾U�� ���á�ԭ��״̬�̡������������ٹ���
		COPY /Y %click_quick_buy_off% %click_quick_buy%
	)
Goto FunctionEnd


:set_modinfo_file
	CALL :READINI %modinfo_sign%
	if "!READ_VALUE!"=="D2R" (
		@ echo.	 ��*�浵�ļ���λ�ã�����ɴ浵��ͻ���� ���롾SA�� ���á���ϷĬ�ϴ浵λ�á̡�����ʹ��MOD�����浵λ��
		COPY /Y %modinfo_mdkmod% %modinfo_file%
		@echo.MDKMOD>!READ_FILE!
	) else if "!READ_VALUE!"=="NULL" (
		@ echo.	 ��*�浵�ļ���λ�ã�����ɴ浵��ͻ���� ���롾SA�� ���á���ϷĬ�ϴ浵λ�á�����ʹ��MOD�����浵λ�̡�
		COPY /Y %modinfo_d2r% %modinfo_file%
		@echo.D2R>!READ_FILE!
	) else (
		@ echo.	 ʶ�������*�浵�ļ���λ�ã�����ɴ浵��ͻ���� ���롾SA�� ���á���ϷĬ�ϴ浵λ�á�����ʹ��MOD�����浵λ��
		COPY /Y %modinfo_d2r% %modinfo_file%
		@echo.D2R>!READ_FILE!
	)
Goto FunctionEnd

:set_vo_file
	CALL :READINI %vo_file_sign%
	if "!READ_VALUE!"=="LESS" (
		@ echo.	 ��ɾ���԰��ı��������ṩ�����ı������� 	���롾VO�� ���á������ı������������ı��̡�����ȫ���ı���
		COPY /Y %vo_null% %vo_file%
		@echo.NULL>!READ_FILE!
	) else if "!READ_VALUE!"=="NULL" (
		@ echo.	 ��ɾ���԰��ı��������ṩ�����ı������� 	���롾VO�� ���á������ı������������ı�������ȫ���ı��̡�
		COPY /Y %vo_full% %vo_file%
		@echo.FULL>!READ_FILE!
	) else (
		@ echo.	 ��ɾ���԰��ı��������ṩ�����ı������� 	���롾VO�� ���á������ı��̡����������ı�������ȫ���ı���
		COPY /Y %vo_less% %vo_file%
		@echo.LESS>!READ_FILE!
	)
Goto FunctionEnd


:set_eli_monster_highlight
if exist %monster_randtransforms_on% (
	@ echo.	 ��*����ɫ͹�Ծ�Ӣ�֡�	���롾N�� ���á�ԭ��״̬����������ɫ͹�Ծ�Ӣ�̡֡������־�Ӣ����ɫ��
	ren %monster_randtransforms_on% randtransforms.json.mdk
) else (
	@ echo.	 ��*����ɫ͹�Ծ�Ӣ�֡�	���롾N�� ���á�ԭ��״̬�̡���������ɫ͹�Ծ�Ӣ�֡�
	ren %monster_randtransforms_off% randtransforms.json
)
Goto FunctionEnd

:set_no_panelborder

	if not exist %no_panelborder% (
		@ echo.	 ��ǰ���ޱ߿򣬸ĳ��б߿�
		ren %d2r_layouts%\panelborderspanelhd.json panelborderspanelhd.json.mdk
	) else (
		@ echo.	 ��ǰ���б߿򣬸ĳ��ޱ߿�
		ren %d2r_layouts%\panelborderspanelhd.json.mdk panelborderspanelhd.json
	)

Goto FunctionEnd

:set_no_onekey_newgame

	if not exist %no_onekey_newgame% (
		@ echo.	 ��ǰ���ް������ĳ��а���
		ren %d2r_layouts%\hubQuickJoinGameButtonhd.json hubQuickJoinGameButtonhd_onekey.json
		ren %d2r_layouts%\hubQuickJoinGameButtonhd_normal.json hubQuickJoinGameButtonhd.json
	) else (
		@ echo.	 ��ǰ���а������ĳ��ް���
		ren %d2r_layouts%\hubQuickJoinGameButtonhd.json hubQuickJoinGameButtonhd_normal.json
		ren %d2r_layouts%\hubQuickJoinGameButtonhd_onekey.json hubQuickJoinGameButtonhd.json
	)

Goto FunctionEnd

:set_no_loading_anime

	if exist %no_loading_anime% (
		@ echo.	 ��*��������ʱ�Ŀ��Ŷ����� ���롾E�� ���á�ԭ��״̬��������������ʱ�Ŀ��Ŷ����̡��������������ع��̣�
		ren %loading_panel_hd% loadscreenpanelhd.json.mdk
		ren %loading_panel% loadscreenpanel.json.mdk
	) else (
		@ echo.	 ��*��������ʱ�Ŀ��Ŷ����� ���롾E�� ���á�ԭ��״̬�̡�������������ʱ�Ŀ��Ŷ�����
		ren %loading_panel_hd%.mdk loadscreenpanelhd.json
		ren %loading_panel%.mdk loadscreenpanel.json
	)

Goto FunctionEnd

:clean_setter_lang_sign_file
	if "!d2r_path!"=="." (
		@ echo.	 ����������������뱾��ļǺ��ļ���������MOD����ļ���...
		DEL %setter_lang_cht%
		DEL %setter_lang_chs%
		DEL %setter_lang_ok%
		DEL %setter_ver_check%
		DEL %MDKMOD%\data\MDK*
		@ echo.	 �����ɡ�
	) else (
		@ echo.	 �������󣬵�ǰ�������ļ�δ����D2RĿ¼�С�
		@ echo.	 �뽫�������ŵ�D2R��Ϸ�ļ�����֮�������и�ָ�
	)
	pause
Goto FunctionEnd

:copy_setter_to_db
	if "!d2r_path!"=="." (
		@ echo.	 ����ǰ������ǿ�Ƹ��ǵ����������ݿ�...
		COPY /Y %setter_file% %setter_lang_cht_file%
		COPY /Y %setter_file% %setter_lang_chs_file%
		@ echo.	 ������ɣ����Լ�ת��һ�·�����������ķ��庺��
	) else (
		@ echo.	 �������󣬵�ǰ�������ļ�δ����D2RĿ¼�С�
		@ echo.	 �뽫�������ŵ�D2R��Ϸ�ļ�����֮�������и�ָ�
	)
	pause
Goto FunctionEnd

:set_setter_ok
	@echo. x>%setter_lang_ok%
Goto FunctionEnd

:set_setter_cht
	@ echo.	 ���������ԡ��������ġ���ݔ�롾CHT���O�Þ顾���w��MDK MOD�O�����������롾ISOK��������ʾ��
	COPY /Y %setter_lang_cht_file% %setter_file%
	del %setter_lang_chs%
	@echo. x>%setter_lang_cht%
	%setter_file%
	goto eof
Goto FunctionEnd

:set_setter_chs
	@ echo.	 �O�����Z�ԡ����w���ġ������롾CHS������Ϊ�������MDK MOD�������������롾ISOK��������ʾ��
	COPY /Y %setter_lang_chs_file% %setter_file%
	del %setter_lang_cht%
	@echo. x>%setter_lang_chs%
	%setter_file%
	goto eof
Goto FunctionEnd

REM ===��������������ָ���END===

:set_quick_friendlist
	if exist %quick_friendlist% (
		@ echo.	 ��*�����ʾ�����б�	���롾FL�� ���á�ԭ��״̬������ѡ��ҳ����ʾ�����б�̡�
		ren %d2r_layouts%\MDKMODShowFriendListhd.json MDKMODShowFriendListhd.json.mdk
	) else (
		@ echo.	 ��*�����ʾ�����б�	���롾FL�� ���á�ԭ��״̬�̡�����ѡ��ҳ����ʾ�����б�
		ren %d2r_layouts%\MDKMODShowFriendListhd.json.mdk MDKMODShowFriendListhd.json
	)
Goto FunctionEnd

:set_deadbody_light
if exist %deadbody_sor% (
	@ echo.	 ��*ʬ�帽�ӹ⻷��Ч��	���롾S�� ���á�ԭ��״̬������ʬ�帽�ӹ���+�Ͷ�����Ч�̡�������Ϸʱż��Ҳ����ʾ��
	ren %deadbody_sor% combined.timelines.mdk
	ren %deadbody_pal% combined.timelines.mdk
	ren %deadbody_bar% combined.timelines.mdk
	ren %deadbody_ama% combined.timelines.mdk
	ren %deadbody_nec% combined.timelines.mdk
	ren %deadbody_dru% combined.timelines.mdk
	ren %deadbody_asn% combined.timelines.mdk
) else (
	@ echo.	 ��*ʬ�帽�ӹ⻷��Ч��	���롾S�� ���á�ԭ��״̬�̡�����ʬ�帽�ӹ���+�Ͷ�����Ч��
	ren %deadbody_sor%.mdk combined.timelines
	ren %deadbody_pal%.mdk combined.timelines
	ren %deadbody_bar%.mdk combined.timelines
	ren %deadbody_ama%.mdk combined.timelines
	ren %deadbody_nec%.mdk combined.timelines
	ren %deadbody_dru%.mdk combined.timelines
	ren %deadbody_asn%.mdk combined.timelines
)

Goto FunctionEnd

:change_monster_light_mode
	@ echo.	 �����︨�����״̬ģʽ��������ѡ������һ��ģʽ��
	if exist %enemy_nosign% (
		@ echo.		 ��  ���롾A�� �л���ԭ��״̬ �̡�����Σ�չ����з��ı�ǡ���������ŵ׹�Դ+Σ�չ����ǡ�
		Goto set_only_rune_mark_mode
	) else if exist %enemy_nolight% (
		@ echo.		 ��  ���롾A�� �л���ԭ��״̬������Σ�չ����з��ı�� �̡���������ŵ׹�Դ+Σ�չ����ǡ�
		Goto set_light_mark_mode
	) else if exist %enemy_light_2% (
		@ echo.		 ��  ���롾A�� �л���ԭ��״̬������Σ�չ����з��ı�ǡ���������ŵ׹�Դ+Σ�չ����� �̡�
		Goto set_no_mark_mode
	) else (
		@ echo.		 ��  ���롾A�� �л���δ֪״̬����������ŵ׹�Դ+Σ�չ����ǡ�
		Goto set_light_mark_mode
	)
Goto FunctionEnd

:set_old_baseinfo_ver

if exist %old_baseinfo_txt_sign%  (
	@ echo.	  ��  *���롾Y2�� �л��ײ���Ϣ��ʾ�汾�����ɰ�������͵ײ���ʾ�̡������°�ͼƬ�͵ײ���ʾ����
	del %old_baseinfo_txt_sign%
	copy /Y %new_baseinfo_ver_file% %d2r_strings%\bnet.json
) else (
	@ echo.	  ��  *���롾Y1�� �л��ײ���Ϣ��ʾ�汾�����ɰ�������͵ײ���ʾ���������°�ͼƬ�͵ײ���ʾ�̡�
	@ECHO.  "x">%old_baseinfo_txt_sign%
	copy /Y %old_baseinfo_ver_file% %d2r_strings%\bnet.json
)

Goto FunctionEnd

:set_pause_file
if exist %esc_quick_save_sign% (
	@ echo.	 ��*��ESCֱ�ӱ�����Ϸ�� ���롾ESC�� ���á�ԭ��ESC���桽������ESCֱ�ӱ�����Ϸ�̡���������٣�
	del %pause_file%
	copy /Y %AutorunCheckOff% %QuiskEscExit%
	copy /Y %AutorunCheckOffLow% %QuiskEscExitLow%
	del %esc_quick_save_sign%
) else (
	@ echo.	 ��*��ESCֱ�ӱ�����Ϸ�� ���롾ESC�� ���á�ԭ��ESC����̡�������ESCֱ�ӱ�����Ϸ��
	copy /Y %esc_quick_save_pause_file% %pause_file%
	copy /Y %AutorunCheckOn% %QuiskEscExit%
	copy /Y %AutorunCheckOnLow% %QuiskEscExitLow%
	@echo."x">%esc_quick_save_sign%
)
Goto FunctionEnd

:set_autorun_2nd
	if exist %AutorunShowRes_sign% (
		@ echo.	 ��*�Զ�������������2��	���롾AU20�� �л� ���Զ���ʾ�����뼼���˺��̡�
		copy /Y %AutorunShowRes_off_file% %autorun_file_2nd%
		del %AutorunShowRes_sign%
		
	) else (
		@ echo.	 ��*�Զ�������������2��	���롾AU21�� �л� ���Զ���ʾ�����뼼���˺�����
		copy /Y %AutorunShowRes_on_file% %autorun_file_2nd%
		@echo. "x" > %AutorunShowRes_sign%
		
	)

Goto FunctionEnd

:set_edit_autorun_file
%autorun_file%
Goto FunctionEnd

:set_autorun_000
	del %d2r_layouts%\json_db\*.autorunsign
	copy /Y %autorun_sign_000_file% %autorun_file%
	@echo. "x" > %autorun_sign_000%
	copy /Y %AutorunCheck%\CLOSE.sprite %AutorunCheck%\CHECK.sprite
	copy /Y %AutorunCheck%\CLOSE.lowend.sprite %AutorunCheck%\CHECK.lowend.sprite
Goto FunctionEnd
:set_autorun_111
	del %d2r_layouts%\json_db\*.autorunsign
	copy /Y %autorun_sign_111_file% %autorun_file%
	@echo. "x" > %autorun_sign_111%
	copy /Y %AutorunCheck%\OK.sprite %AutorunCheck%\CHECK.sprite
	copy /Y %AutorunCheck%\OK.lowend.sprite %AutorunCheck%\CHECK.lowend.sprite
Goto FunctionEnd
:set_autorun_100
	del %d2r_layouts%\json_db\*.autorunsign
	copy /Y %autorun_sign_100_file% %autorun_file%
	@echo. "x" > %autorun_sign_100%
	copy /Y %AutorunCheck%\OK.sprite %AutorunCheck%\CHECK.sprite
	copy /Y %AutorunCheck%\OK.lowend.sprite %AutorunCheck%\CHECK.lowend.sprite
Goto FunctionEnd
:set_autorun_010
	del %d2r_layouts%\json_db\*.autorunsign
	copy /Y %autorun_sign_010_file% %autorun_file%
	@echo. "x" > %autorun_sign_010%
	copy /Y %AutorunCheck%\OK.sprite %AutorunCheck%\CHECK.sprite
	copy /Y %AutorunCheck%\OK.lowend.sprite %AutorunCheck%\CHECK.lowend.sprite
Goto FunctionEnd
:set_autorun_001
	del %d2r_layouts%\json_db\*.autorunsign
	copy /Y %autorun_sign_001_file% %autorun_file%
	@echo. "x" > %autorun_sign_001%
	copy /Y %AutorunCheck%\OK.sprite %AutorunCheck%\CHECK.sprite
	copy /Y %AutorunCheck%\OK.lowend.sprite %AutorunCheck%\CHECK.lowend.sprite
Goto FunctionEnd
:set_autorun_110
	del %d2r_layouts%\json_db\*.autorunsign
	copy /Y %autorun_sign_110_file% %autorun_file%
	@echo. "x" > %autorun_sign_110%
	copy /Y %AutorunCheck%\OK.sprite %AutorunCheck%\CHECK.sprite
	copy /Y %AutorunCheck%\OK.lowend.sprite %AutorunCheck%\CHECK.lowend.sprite
Goto FunctionEnd
:set_autorun_101
	del %d2r_layouts%\json_db\*.autorunsign
	copy /Y %autorun_sign_101_file% %autorun_file%
	@echo. "x" > %autorun_sign_101%
	copy /Y %AutorunCheck%\OK.sprite %AutorunCheck%\CHECK.sprite
	copy /Y %AutorunCheck%\OK.lowend.sprite %AutorunCheck%\CHECK.lowend.sprite
Goto FunctionEnd
:set_autorun_011
	del %d2r_layouts%\json_db\*.autorunsign
	copy /Y %autorun_sign_011_file% %autorun_file%
	@echo. "x" > %autorun_sign_011%
	copy /Y %AutorunCheck%\OK.sprite %AutorunCheck%\CHECK.sprite
	copy /Y %AutorunCheck%\OK.lowend.sprite %AutorunCheck%\CHECK.lowend.sprite
Goto FunctionEnd


:set_autorun_roll
	copy /Y %AutorunCheck%\OK.sprite %AutorunCheck%\CHECK.sprite
	copy /Y %AutorunCheck%\OK.lowend.sprite %AutorunCheck%\CHECK.lowend.sprite
	if exist %autorun_sign_100% (
		@ echo.	  ��  ���롾AU�� �л� �����㷽�С̡���������Ѫ������������ʾ�����������
		copy /Y %autorun_sign_010_file% %autorun_file%
		del %d2r_layouts%\json_db\*.autorunsign
		@echo. "x" > %autorun_sign_010%
	) else if exist %autorun_sign_010% (
		@ echo.	  ��  ���롾AU�� �л� �����㷽�С�����������Ѫ���̡�������ʾ�����������
		copy /Y %autorun_sign_001_file% %autorun_file%
		del %d2r_layouts%\json_db\*.autorunsign
		@echo. "x" > %autorun_sign_001%
	) else if exist %autorun_sign_001% (
		@ echo.	  ��  ���롾AU�� �л� �����㷽�С�����������Ѫ������������ʾ��������̡�
		copy /Y %autorun_sign_110_file% %autorun_file%
		del %d2r_layouts%\json_db\*.autorunsign
		@echo. "x" > %autorun_sign_110%
	) else if exist %autorun_sign_110% (
		@ echo.	  ��  ���롾AU�� �л� �����㷽�С̡���������Ѫ���̡�������ʾ�����������
		copy /Y %autorun_sign_101_file% %autorun_file%
		del %d2r_layouts%\json_db\*.autorunsign
		@echo. "x" > %autorun_sign_101%
	) else if exist %autorun_sign_101% (
		@ echo.	  ��  ���롾AU�� �л� �����㷽�С̡���������Ѫ������������ʾ��������̡�
		copy /Y %autorun_sign_011_file% %autorun_file%
		del %d2r_layouts%\json_db\*.autorunsign
		@echo. "x" > %autorun_sign_011%
	) else if exist %autorun_sign_011% (
		@ echo.	  ��  ���롾AU�� �л� �����㷽�С�����������Ѫ���̡�������ʾ��������̡�
		copy /Y %autorun_sign_111_file% %autorun_file%
		del %d2r_layouts%\json_db\*.autorunsign
		@echo. "x" > %autorun_sign_111%
	) else if exist %autorun_sign_111% (
		@ echo.	  ��  ���롾AU�� �л� �����㷽�С̡���������Ѫ���̡�������ʾ��������̡�
		copy /Y %autorun_sign_000_file% %autorun_file%
		del %d2r_layouts%\json_db\*.autorunsign
		@echo. "x" > %autorun_sign_000%
		copy /Y %AutorunCheck%\CLOSE.sprite %AutorunCheck%\CHECK.sprite
		copy /Y %AutorunCheck%\CLOSE.lowend.sprite %AutorunCheck%\CHECK.lowend.sprite
	) else if exist %autorun_sign_000% (
		@ echo.	  ��  ���롾AU�� �л� �����㷽�С�����������Ѫ������������ʾ�����������
		copy /Y %autorun_sign_100_file% %autorun_file%
		del %d2r_layouts%\json_db\*.autorunsign
		@echo. "x" > %autorun_sign_100%
	) else (
		@ echo.	  ��  δ֪״̬���볢�����롾AU111�� ǿ���л�״̬
		copy /Y %autorun_sign_111_file% %autorun_file%
		del %d2r_layouts%\json_db\*.autorunsign
		@echo. "x" > %autorun_sign_111%
	)
Goto FunctionEnd

:set_del_travincal_hall
	if exist %del_travincal_hall% (
	@ echo.		 ��  ���롾H�� ѡ�����δ޷�����������ǽ������Χ���� �̡�
	ren %d2r_env%\preset\act3\travincal\travn.json travn_mdk.json
	ren %d2r_env%\preset\act3\travincal\travsw.json travsw_mdk.json
	) else (
	@ echo.		 ��  ���롾H�� ѡ�����δ޷�����������ǽ������Χ���� ����
	ren %d2r_env%\preset\act3\travincal\travn_mdk.json travn.json
	ren %d2r_env%\preset\act3\travincal\travsw_mdk.json travsw.json
	)
Goto FunctionEnd
:set_del_chaos_door
	if exist %del_chaos_door% (
	@ echo.		 ��  ���롾J�� ѡ�����λ������������ �̡�
	ren %d2r_env%\preset\act4\diab\entry1.json entry1_mdk.json
	) else (
	@ echo.		 ��  ���롾J�� ѡ�����λ������������ ����
	ren %d2r_env%\preset\act4\diab\entry1_mdk.json entry1.json
	)
Goto FunctionEnd
:set_del_act4_lava
	if exist %del_act4_lava% (
		@ echo.		 ��  ���롾K�� ѡ�����λ���֮�ӵ��ҽ� �̡�
		ren %d2r_env%\model\act4\lava lava_mdk
		del %MDKMOD%\data\hd\objects\vfx_only\hell_smoke.json
		del %MDKMOD%\data\hd\objects\vfx_only\hellfire_1.json
		del %MDKMOD%\data\hd\objects\vfx_only\hellfire_2.json
		del %MDKMOD%\data\hd\objects\vfx_only\hellfire_3.json
	) else (
	@ echo.		 ��  ���롾K�� ѡ�����λ���֮�ӵ��ҽ� ����
		ren %d2r_env%\model\act4\lava_mdk lava
		copy /Y %MDKMOD%\data\hd\objects\vfx_only\mdk\hell_smoke.json %MDKMOD%\data\hd\objects\vfx_only
		copy /Y %MDKMOD%\data\hd\objects\vfx_only\mdk\hellfire_1.json %MDKMOD%\data\hd\objects\vfx_only
		copy /Y %MDKMOD%\data\hd\objects\vfx_only\mdk\hellfire_2.json %MDKMOD%\data\hd\objects\vfx_only
		copy /Y %MDKMOD%\data\hd\objects\vfx_only\mdk\hellfire_3.json %MDKMOD%\data\hd\objects\vfx_only
	)
Goto FunctionEnd
:set_del_ballair_pillars
	if exist %del_ballair_pillars% (
	@ echo.		 ��  ���롾L�� ѡ�����ΰͶ������е����������� �̡�
	ren %d2r_env%\preset\expansion\baallair\wthrone.json wthrone_mdk.json
	) else (
	@ echo.		 ��  ���롾L�� ѡ�����ΰͶ������е����������� ����
	ren %d2r_env%\preset\expansion\baallair\wthrone_mdk.json wthrone.json
	) 
Goto FunctionEnd

:set_show_baseinfo
	if exist %baseinfo_txt_sign%  (
		@ echo.	 ���� ���رյײĸ�����Ϣ��
		ren %d2r_excel%\armor.txt armor.txt.mdk
		ren %d2r_excel%\weapons.txt weapons.txt.mdk
	) else (
		@ echo.	 ���� ����ʾ�ײ���ϸ��Ϣ��
		ren %d2r_excel%\armor.txt.mdk armor.txt
		ren %d2r_excel%\weapons.txt.mdk weapons.txt
	)
Goto FunctionEnd
:set_amulet_info
	CALL :READINI %amulet_info_setup%
	if "!READ_VALUE!"=="show_amulet_info"  (
		@ echo.	  �� ����ָ/����/�鱦/���������ʾ��	���롾T2�� ���á�����ʾ������������ʾ�����̡�
		COPY /Y %amulet_info_hide% %d2r_strings%\npcs.json
		@echo hide_amulet_info>!READ_FILE!
	) else (
		@ echo.	  �� ����ָ/����/�鱦/���������ʾ��	���롾T2�� ���á�����ʾ�����̡�������ʾ������
		COPY /Y %amulet_info_show% %d2r_strings%\npcs.json
		@echo show_amulet_info>!READ_FILE!
	)
Goto FunctionEnd
:set_baseinfo_version
	CALL :READINI %keybinds_setup%
	if "!READ_VALUE!"=="lessinfo"  (
		@ echo.	  �� ���ײ���Ϣģʽ��	���롾T�� ���á�����̡�������+�𡽡�����+��+�ײġ�����ȫ��Ϣ��
		COPY /Y %keybinds_lessinfo_rare% %d2r_strings%\keybinds.json
		@echo lessinfo_rare>!READ_FILE!
	) else if "!READ_VALUE!"=="lessinfo_rare"  (
		@ echo.	  �� ���ײ���Ϣģʽ��	���롾T�� ���á����򡽡�����+��̡�������+��+�ײġ�����ȫ��Ϣ��
		COPY /Y %keybinds_lessinfo_rare_base% %d2r_strings%\keybinds.json
		@echo lessinfo_rare_base>!READ_FILE!
	) else if "!READ_VALUE!"=="lessinfo_rare_base"  (
		@ echo.	  �� ���ײ���Ϣģʽ��	���롾T�� ���á����򡽡�����+�𡽡�����+��+�ײġ̡�����ȫ��Ϣ��
		COPY /Y %keybinds_fullinfo% %d2r_strings%\keybinds.json
		@echo fullinfo>!READ_FILE!
	) else if "!READ_VALUE!"=="fullinfo"  (
		@ echo.	  �� ���ײ���Ϣģʽ��	���롾T�� ���á����򡽡�����+�𡽡�����+��+�ײġ�����ȫ��Ϣ�̡�
		COPY /Y %keybinds_lessinfo% %d2r_strings%\keybinds.json
		@echo lessinfo>!READ_FILE!
	) else (
		@ echo.	  �� ���ײ���Ϣģʽ��	���롾T�� ���á����򡽡�����+��̡�������+��+�ײġ�����ȫ��Ϣ��
		COPY /Y %keybinds_lessinfo_rare_base% %d2r_strings%\keybinds.json
		@echo lessinfo_rare_base>!READ_FILE!
	)
Goto FunctionEnd

:set_base_with_english
	REM ���ײ���Ϣģʽ��	���롾Y�� �л����ײ���Ӣ�����̡������ײ���Ӣ��������������ģʽ���ɷ�����򣩡�
	if exist %base_with_english_sign%  (
		@ echo.	 ��ǰ��Ӣ�ģ����� ���ر�Ӣ������
		copy /Y %base_without_english% %item-nameaffixes%
		del %base_with_english_sign%
		del %base_with_english_sign_sgline%
		del %base_no_baseinfo_sign%
	) else (
		@ echo.	 ��ǰ����ģʽ������ ������Ӣ������
		copy /Y %base_with_english% %item-nameaffixes%
		del %base_with_english_sign_sgline%
		del %base_no_baseinfo_sign%
		@ECHO.  "x">%base_with_english_sign%
	)
Goto FunctionEnd

:set_shrines_light

if exist %shrines_light% (
	@ echo.	 ���� ���ر���̳��ˮ������������
	ren %objects_folder%\shrines_healthmana shrines_healthmana_mdk
	ren %objects_folder%\shrines_other shrines_other_mdk
	ren %objects_folder%\wells wells_mdk
) else (
	@ echo.	 ���� ��������̳��ˮ������������
	ren %objects_folder%\shrines_healthmana_mdk shrines_healthmana
	ren %objects_folder%\shrines_other_mdk shrines_other
	ren %objects_folder%\wells_mdk wells
)
Goto FunctionEnd

:set_vis_light
if exist %vis_light% (
	@ echo.	 ���� �رա�������Դ��
	ren %d2r_env%\vis vis_mdk
) else (
	@ echo.	 ���� �򿪡�������Դ��
	ren %d2r_env%\vis_mdk vis
)

Goto FunctionEnd

:set_player_light
if exist %player_light% (
@ echo.	 ����  �رա���ɫ��Դ���򿪡�������Դ��
del %MDKMOD%\data\hd\character\player\amazon.json
del %MDKMOD%\data\hd\character\player\assassin.json 
del %MDKMOD%\data\hd\character\player\barbarian.json
del %MDKMOD%\data\hd\character\player\druid.json
del %MDKMOD%\data\hd\character\player\necromancer.json
del %MDKMOD%\data\hd\character\player\paladin.json
del %MDKMOD%\data\hd\character\player\sorceress.json

del %MDKMOD%\data\hd\character\enemy\bear.json
del %MDKMOD%\data\hd\character\enemy\wolf.json
ren 
) else (
@ echo.	 ���� �򿪡���ɫ��Դ���رա�������Դ��
COPY /Y %MDKMOD%\data\hd\character\player\player_light\*.json %MDKMOD%\data\hd\character\player
COPY /Y %MDKMOD%\data\hd\character\player\player_light\dru\*.json %MDKMOD%\data\hd\character\enemy
) 
Goto FunctionEnd



:set_mini_horadric_cube
	@ echo. ��������
	if exist %offline_bigbox%  (
		@cls
		@ echo. ���ȹرա�������Ϸ * �����ӡ������ٵ����������á�
		pause
		Goto FunctionEnd
	)
if exist %mdk_minicube_normal_mode_sign% (
	@ echo.	 ���� �����㷽�� ������ģʽ��
	copy /Y %mdk_minicube_hc_bigfont_mode% %mdk_minicube_cube_file%
	copy /Y %mdk_minicube_pi_old_expfile% %mdk_minicube_expfile%
	copy /Y %mdk_minicube_pi_old_origfile% %mdk_minicube_origfile%
	del %mdk_minicube_allsign%
	@echo. "x"> %mdk_minicube_bigfont_mode_sign%
) else if exist %mdk_minicube_bigfont_mode_sign% (
	@ echo.	 ���� ���ر����㷽�С�
	copy /Y %mdk_minicube_pi_no_minicube% %mdk_minicube_expfile%
	del %mdk_minicube_origfile%
	del %mdk_minicube_allsign%
) else (
	@ echo.	 ���� ���������㷽����ģʽ��
	@echo. %mdk_minicube_hc_new_normal%
	@echo. %mdk_minicube_pi_new_expfile%
	copy /Y %mdk_minicube_hc_new_normal% %mdk_minicube_cube_file%
	copy /Y %mdk_minicube_pi_new_expfile% %mdk_minicube_expfile%
	del %mdk_minicube_origfile%
	del %mdk_minicube_allsign%
	@echo. "x"> %mdk_minicube_normal_mode_sign%
)
Goto FunctionEnd


:set_d2_oringnal_english_font
if not exist %d2eng_fonts% (
@ echo.	 ���� ����ʹ��ԭ��Ӣ�����壨���������壩��
ren %d2r_ui%\fonts D2ENG_Fonts
ren %d2r_ui%\HA_fonts fonts
) else (
@ echo.	 ���� ��ʹ��ԭ��Ӣ�����壨���������壩��
ren %d2r_ui%\fonts HA_fonts
ren %d2r_ui%\D2ENG_Fonts fonts
)
Goto FunctionEnd


:set_hollow_function
if exist %function_btn% (
@ echo.	 ���� ���ر���հ������ܡ�
ren %MDKMOD%\data\hd\global\ui\mdk\mdk mdk_btn
) else (
@ echo.	 ���� ��������հ������ܡ�
ren %MDKMOD%\data\hd\global\ui\mdk\mdk_btn mdk
)
goto FunctionEnd


:show_font_picture
����չʾ.jpg
goto SetupMain


set monster_json_file=%MDKMOD%\data\hd\character\monsters.json
set monster_json_file_backup=%MDKMOD%\data\hd\character\monsters_mdk.json
:set_no_mark_mode
del %MDKMOD%\data\hd\character\enemy\*.json
del %MDKMOD%\data\hd\character\*.enemysign
copy /Y %MDKMOD%\data\hd\character\hire_nickname\*.json %MDKMOD%\data\hd\character\enemy
del %monster_json_file%
@ECHO.  "x">%enemy_nosign%
goto FunctionEnd

:set_only_rune_mark_mode
del %MDKMOD%\data\hd\character\enemy\*.json
copy /Y %MDKMOD%\data\hd\character\enemy_nolight\*.json %MDKMOD%\data\hd\character\enemy
copy /Y %MDKMOD%\data\hd\character\hire_nickname\*.json %MDKMOD%\data\hd\character\enemy
del %MDKMOD%\data\hd\character\*.enemysign
copy /Y %monster_json_file_backup% %monster_json_file%
@ECHO.  "x">%enemy_nolight%
goto FunctionEnd

:set_light_mark_mode
del %MDKMOD%\data\hd\character\enemy\*.json
copy /Y %MDKMOD%\data\hd\character\enemy_light_2\*.json %MDKMOD%\data\hd\character\enemy
copy /Y %MDKMOD%\data\hd\character\hire_nickname\*.json %MDKMOD%\data\hd\character\enemy
del %MDKMOD%\data\hd\character\*.enemysign
copy /Y %monster_json_file_backup% %monster_json_file%
@ECHO.  "x">%enemy_light_2%
goto FunctionEnd


:set_destructibles_with_light
if exist %dest_aura% (
@ echo.	 ���� ���رտ��߻���Ʒ�ķ����׷�ӹ�Դ��
move /Y %MDKMOD%\data\hd\objects\destructibles\*.json %MDKMOD%\data\hd\objects\destructibles\mdk
move /Y %MDKMOD%\data\hd\objects\destructibles\mdk\barrel_exploding.json %MDKMOD%\data\hd\objects\destructibles
move /Y %MDKMOD%\data\hd\objects\destructibles\mdk\exploding_chest_100.json %MDKMOD%\data\hd\objects\destructibles
move /Y %MDKMOD%\data\hd\objects\destructibles\mdk\ice_cave_evil_urn.json %MDKMOD%\data\hd\objects\destructibles

) else (
@ echo.	 ���� ���������߻���Ʒ���Ⲣ׷�ӹ�Դ��
move /Y %MDKMOD%\data\hd\objects\destructibles\mdk\*.json %MDKMOD%\data\hd\objects\destructibles
)

goto FunctionEnd


:set_manmade_with_light
if exist %manmade_aura% (
@ echo.	 ���� ���ر���̳��������Ʒ���ŵ�׷�ӹ�Դ��
ren %objects_folder%\env_manmade\soul_stone_forge.json soul_stone_forge.mdkjson
move /Y %MDKMOD%\data\hd\objects\env_manmade\*.json %MDKMOD%\data\hd\objects\env_manmade\mdk
ren %objects_folder%\env_manmade\soul_stone_forge.mdkjson soul_stone_forge.json
ren %objects_folder%\doors doors_mdk
ren %objects_folder%\shrines_healthmana shrines_healthmana_mdk
ren %objects_folder%\shrines_other shrines_other_mdk
ren %objects_folder%\wells wells_mdk
del %MDKMOD%\data\hd\character\enemy\act2hire.json
del %MDKMOD%\data\hd\character\enemy\act3hire.json
del %MDKMOD%\data\hd\character\enemy\act5hire1.json
del %MDKMOD%\data\hd\character\enemy\roguehire.json
) else (
@ echo.	 ���� ��������̳��������Ʒ���ŵ�׷�ӹ�Դ��
move /Y %MDKMOD%\data\hd\objects\env_manmade\mdk\*.json %MDKMOD%\data\hd\objects\env_manmade
ren %objects_folder%\doors_mdk doors
ren %objects_folder%\shrines_healthmana_mdk shrines_healthmana
ren %objects_folder%\shrines_other_mdk shrines_other
ren %objects_folder%\wells_mdk wells
copy /Y %MDKMOD%\data\hd\character\hirelight_mu\*.json %MDKMOD%\data\hd\character\enemy
)
goto FunctionEnd

:set_current_lang_folder_to_default
	@ echo.	 ���� �����ư����汾��
	@echo on
	if not exist %d2r_strings% (
		@echo. ��ǰStrings�ļ���ȱʧ�����Խ�zhTW_cht�ļ��и�����strings
		ren %lang_zhTW_cht_strings% strings
		if exist %DEBUG_FILE% ( pause )
	) else (
		@echo. ��ǰStrings�ļ��д��ڣ����Ը���Ϊstrings_mdk
		ren %d2r_strings% strings_mdk
		if !errorlevel! == 1 (
			@echo. %d2r_strings%����Ϊstrings_mdkʧ�ܣ�����
			@echo. ׼��ǿ�Ƹ���Ϊstrings_mdkʧ�ܣ�����
			xcopy "%d2r_strings%" "%d2r_lng%\strings_mdk\" /Y /S /E
			rd /s /q "%d2r_strings%"
		)
		set /p clang=<%d2r_strings_mdk%\lang
		rd /s /q %d2r_strings%_%clang%
		@echo. ��ǰ���԰汾��%clang%
		@echo. ׼��ת���%~1
		@echo. ren "%~1" strings_ready
		ren "%~1" strings_ready
		if !errorlevel! == 0 (
			@echo. %~1����Ϊstrings_ready�ɹ�
			if "%clang%" == "zhTW_cht_OLD" (
				ren %d2r_strings_mdk% strings_zhTW_cht_OLD
			) else if "%clang%" ==  "zhTW_chs" (
				ren %d2r_strings_mdk% strings_zhTW_chs
			) else if "%clang%" ==  "zhCN" (
				ren %d2r_strings_mdk% strings_zhCN
			) else  if "%clang%" ==  "zhTW_cht" (
				ren %d2r_strings_mdk% strings_zhTW_cht
			)
			ren "%d2r_strings_ready%" strings
		) else (
			@echo. %~1����Ϊstrings_readyʧ�ܣ�����
			@echo. ׼��ǿ�Ƹ���Ϊstrings_readyʧ�ܣ�����
			xcopy "%~1" "%d2r_lng%\strings_ready\" /Y /S /E
			rd /s /q "%~1"
			if !errorlevel! == 0 (
				if "%clang%" == "zhTW_cht_OLD" (
					ren %d2r_strings_mdk% strings_zhTW_cht_OLD
				) else if "%clang%" ==  "zhTW_chs" (
					ren %d2r_strings_mdk% strings_zhTW_chs
				) else if "%clang%" ==  "zhCN" (
					ren %d2r_strings_mdk% strings_zhCN
				) else  if "%clang%" ==  "zhTW_cht" (
					ren %d2r_strings_mdk% strings_zhTW_cht
				)
				ren "%d2r_strings_ready%" strings
			) else (
				@echo. �����ı��ļ��б�ռ�ã��޷��л����԰汾
				@echo. �ļ��У�%~1
				rd /s /q "%d2r_lng%\strings_ready\"
			)
		)
		ren %d2r_strings%_mdk strings
		if exist %DEBUG_FILE% ( pause )
	)
Goto :eof

:set_lang_zhTW_cht
	@echo.set_lang_zhTW_cht
	Call :set_current_lang_folder_to_default %lang_zhTW_cht_strings%
goto FunctionEnd

:set_lang_zhTW_cht_OLD
	@echo.set_lang_zhTW_cht_OLD
	Call :set_current_lang_folder_to_default %lang_zhTW_cht_OLD_strings%
goto FunctionEnd

:set_lang_zhTW_chs
	@echo.set_lang_zhTW_chs
	Call :set_current_lang_folder_to_default %lang_zhTW_chs_strings%
goto FunctionEnd

:set_lang_zhCN
	@echo.set_lang_zhCN
	Call :set_current_lang_folder_to_default %lang_zhCN_strings%
goto FunctionEnd

:set_lang_ver
	set /p clang=<%d2r_strings%\lang
	if "%clang%" == "zhTW_cht_OLD" (
		goto set_lang_zhTW_chs
	) else if "%clang%" ==  "zhTW_chs" (
		goto set_lang_zhCN
	) else if "%clang%" ==  "zhCN" (
		goto set_lang_zhTW_cht
	) else  if "%clang%" ==  "zhTW_cht" (
		goto set_lang_zhTW_cht_OLD
	) else (
		goto set_lang_zhTW_cht
	)

REM ���ڸ�����ҳ״̬����ͼ��
if exist %s_drop_show% (
	@ echo.		 ��  ����ʾ���е�����Ʒ�̡������εͼ�������Ʒ��
		copy /Y %NoDropCheck%\CLOSE.sprite %NoDropCheck%\CHECK.sprite
		copy /Y %NoDropCheck%\CLOSE.lowend.sprite %NoDropCheck%\CHECK.lowend.sprite
) else (
	@ echo.		 ��  ����ʾ���е�����Ʒ���������εͼ�������Ʒ�̡�
		copy /Y %NoDropCheck%\OK.sprite %NoDropCheck%\CHECK.sprite
		copy /Y %NoDropCheck%\OK.lowend.sprite %NoDropCheck%\CHECK.lowend.sprite
)

goto FunctionEnd

:open_roll_shop_file
%d2r_excel%\magicprefix.txt
%d2r_excel%\magicsuffix.txt

goto FunctionEnd


:set_roll_shop_mode
if exist %color_shop% (
	@ echo.	 ���� ��ˢװ����
	copy /Y %d2r_excel%\offline\magicprefix.txt.mdk %d2r_excel%\magicprefix.txt
	copy /Y %d2r_excel%\offline\magicsuffix.txt.mdk %d2r_excel%\magicsuffix.txt
	copy /Y %d2r_layouts%\globaldatahd_shopcolor.json %d2r_layouts%\globaldatahd.json
	del %base_shop%
	del %color_shop%
	@echo. "x">%anya_shop%
) else if exist %anya_shop% (
	@ echo.	 ���� ��ˢ�ײġ�
	copy /Y %d2r_excel%\offline\magicprefix.txt.mdk_base %d2r_excel%\magicprefix.txt
	copy /Y %d2r_excel%\offline\magicsuffix.txt.mdk_base %d2r_excel%\magicsuffix.txt
	copy /Y %d2r_layouts%\globaldatahd_mdk_base.json %d2r_layouts%\globaldatahd.json
	del %anya_shop%
	del %color_shop%
	@echo. "x">%base_shop%
) else if exist %base_shop% (
	@ echo.	 ���� ���رա�
	copy /Y %d2r_layouts%\globaldatahd_default.json %d2r_layouts%\globaldatahd.json
	del %d2r_excel%\magicprefix.txt
	del %d2r_excel%\magicsuffix.txt
	del %anya_shop%
	del %base_shop%
	del %color_shop%
) else (
	@ echo.	 ���� �����桿
	copy /Y %d2r_excel%\offline\magicprefix.txt.color %d2r_excel%\magicprefix.txt
	copy /Y %d2r_excel%\offline\magicsuffix.txt.color %d2r_excel%\magicsuffix.txt
	copy /Y %d2r_layouts%\globaldatahd_color.json %d2r_layouts%\globaldatahd.json
	del %anya_shop%
	del %base_shop%
	@echo. "x">%color_shop%
)

goto FunctionEnd


:set_addl_light_mode

if exist %guangyuan_d% (
@ echo.	 ���� ���رչ�Դ��
del %MDKMOD%\data\hd\character\*.lightsign
del %MDKMOD%\data\hd\character\player\*.json
@ECHO.  "x">%guangyuan_n%
) else if exist %guangyuan_n% (
@ echo.	 ���� ���Ϸ���Դ��
cls
@ echo.	 ע�����
@ echo.	 ������Դʹ��ħ����Ч���������򣬿���Ӱ�����ܣ�Ҳ����Ӱ����Ϸ�ȶ��ԣ�
@ echo.	 ���Ż���Ĺ�Դ��Դռ�ñȾɰ汾ҪС�ܶ࣬��ʱδ���ֱ����������
@ echo.	 �ڸߵͲ����Ե�λ�ÿ��ܻ���ֵ͵���������˸���㣬������������
@ echo.	 �ù����ǲ��Թ��ܣ��ȶ���û�б�֤�����ʿ��á�
@ echo.	 �ش˸�֪��
pause
@ echo.	 ���� �������Ϸ���Դ��
del %MDKMOD%\data\hd\character\*.lightsign
del %MDKMOD%\data\hd\character\player\*.json
copy /Y %MDKMOD%\data\hd\character\player_mu\*.json %MDKMOD%\data\hd\character\player
@ECHO.  "x">%guangyuan_u%
) else if exist %guangyuan_u% (
@ echo.	 ���� �����¹�Դ��
cls
@ echo.	 ע�����
@ echo.	 ������Դʹ��ħ����Ч���������򣬿���Ӱ�����ܣ�Ҳ����Ӱ����Ϸ�ȶ��ԣ�
@ echo.	 ���Ż���Ĺ�Դ��Դռ�ñȾɰ汾ҪС�ܶ࣬��ʱδ���ֱ����������
@ echo.	 �ڸߵͲ����Ե�λ�ÿ��ܻ���ֵ͵���������˸���㣬������������
@ echo.	 �ù����ǲ��Թ��ܣ��ȶ���û�б�֤�����ʿ��á�
@ echo.	 �ش˸�֪��
pause
@ echo.	 ���� ���������¹�Դ��
del %MDKMOD%\data\hd\character\*.lightsign
del %MDKMOD%\data\hd\character\player\*.json
copy /Y %MDKMOD%\data\hd\character\player_md\*.json %MDKMOD%\data\hd\character\player
copy /Y %MDKMOD%\data\hd\character\player_md\*.json %MDKMOD%\data\hd\character\player
@ECHO.  "x">%guangyuan_d%
) else (
del %MDKMOD%\data\hd\character\*.lightsign
del %MDKMOD%\data\hd\character\player\*.json
@ECHO.  "x">%guangyuan_n%
)
goto FunctionEnd

:set_waypoint_lightbeam_guider
if exist %wp_guider% (
@ echo.	 ���� ���رմ��͵����������
move /Y %MDKMOD%\data\hd\objects\waypoint_portals %MDKMOD%\data\hd\objects\waypoint_portals_mdk
ren %d2r_env%\mdkmod_waypoint_light\mdkmod_waypoint_light.json mdkmod_waypoint_light.json.mdk
) else (
@ echo.	 ���� ���򿪴��͵����������
move /Y %MDKMOD%\data\hd\objects\waypoint_portals_mdk %MDKMOD%\data\hd\objects\waypoint_portals
ren %d2r_env%\mdkmod_waypoint_light\mdkmod_waypoint_light.json.mdk mdkmod_waypoint_light.json
)
goto FunctionEnd

:set_enter_lightbeam_guider
	set /p entry_guider_mode=<%entry_guider_sign%
	if "%entry_guider_mode%"=="light" (
		@ echo.	 ���ص��������������	���롾1�� �л���ԭ��״̬��������ɫ�����̡�������Ȧָ����
		DEL /F /S /Q %entry_guider_folder%\*.*
		xcopy %entry_guider_c% %entry_guider_folder% /Y /S /E
		
		REM ��һĻ�����ָ��
		copy /Y %quest_point_ci_folder%\stone_alpha.json	%objects_folder%\env_stone\stone_alpha.json
		copy /Y %quest_point_ci_folder%\inifuss_tree.json		%objects_folder%\env_wood\inifuss_tree.json
		copy /Y %quest_point_ci_folder%\malus.json			%objects_folder%\armor_weapons\malus.json
		REM �ڶ�Ļ�����ָ��
		copy /Y %quest_point_ci_folder%\seven_tombs_receptacle.json %objects_folder%\env_pillars\seven_tombs_receptacle.json
		copy /Y %quest_point_ci_folder%\horadric_cube_chest.json		%objects_folder%\chests\horadric_cube_chest.json
		copy /Y %quest_point_ci_folder%\horadric_scroll_chest.json	%objects_folder%\chests\horadric_scroll_chest.json
		REM ����Ļ�����ָ��
		copy /Y %quest_point_ci_folder%\gid_b_inn_decoy.json	%objects_folder%\env_organic\gid_b_inn_decoy.json
		copy /Y %quest_point_ci_folder%\khalim_brain_chest.json	%objects_folder%\chests\khalim_brain_chest.json
		copy /Y %quest_point_ci_folder%\khalim_eye_chest.json	%objects_folder%\chests\khalim_eye_chest.json
		copy /Y %quest_point_ci_folder%\khalim_heart_chest.json	%objects_folder%\chests\khalim_heart_chest.json
		REM ����Ļ�����ָ��
		copy /Y %quest_point_ci_folder%\soul_stone_forge.json	%objects_folder%\env_manmade\soul_stone_forge.json
		REM ����Ļ�����ָ��
		copy /Y %quest_point_ci_folder%\anya_yet_again.json		%objects_folder%\characters\anya_yet_again.json
		REM ����Ļ����ָ��
		copy /Y  %quest_point_common_folder%\pf_hell_portal_n01.json	%d2r_env%\model\expansion\siege\expansion_siege_hellportals\pf_hell_portal_n01.json
		copy /Y  %quest_point_common_folder%\pf_hell_portal_w01.json	%d2r_env%\model\expansion\siege\expansion_siege_hellportals\pf_hell_portal_w01.json
		REM �����ӵ�����ָ��
		copy /Y %quest_point_common_folder%\caged_wussie_1.json				%objects_folder%\dummy\caged_wussie_1.json
		copy /Y %quest_point_common_folder%\arcane_tome.json					%objects_folder%\env_pillars\arcane_tome.json
		copy /Y %quest_point_common_folder%\wirt.json							%objects_folder%\characters\wirt.json
		copy /Y %quest_point_common_folder%\consolation_chest.json			%objects_folder%\chests\consolation_chest.json
		copy /Y %quest_point_common_folder%\special_chest_100.json			%objects_folder%\chests\special_chest_100.json
		copy /Y %quest_point_common_folder%\town_act_3_gid_b_inn_altar.json	%objects_folder%\env_pillars\town_act_3_gid_b_inn_altar.json
		copy /Y %quest_point_common_folder%\pf_jungle_totem_d_foliage01.json	%d2r_env%\model\act3\jungle\prefab\pf_jungle_totem_d_foliage01.json
		REM �ָ���Ȧָ���ļ�
		copy /Y %d2r_env%\porory\beacon\json_db\*.json	%d2r_env%\porory\beacon
		
		@echo.circle>%entry_guider_sign%
		
	) else if "%entry_guider_mode%"=="circle" (
		@ echo.	 ���ص��������������	���롾1�� �л���ԭ��״̬��������ɫ������������Ȧָ���̡�
			
		DEL /F /S /Q %entry_guider_folder%\*.*
		
		del %objects_folder%\characters\anya_yet_again.json
		del %objects_folder%\env_organic\gid_b_inn_decoy.json
		del %objects_folder%\env_wood\inifuss_tree.json
		del %objects_folder%\armor_weapons\malus.json
		del %objects_folder%\env_pillars\seven_tombs_receptacle.json
		del %objects_folder%\env_manmade\soul_stone_forge.json
		del %objects_folder%\env_stone\stone_alpha.json
		
		del %objects_folder%\chests\horadric_cube_chest.json
		del %objects_folder%\chests\horadric_scroll_chest.json
		del %objects_folder%\chests\khalim_brain_chest.json
		del %objects_folder%\chests\khalim_eye_chest.json
		del %objects_folder%\chests\khalim_heart_chest.json
		
		del %d2r_env%\model\expansion\siege\expansion_siege_hellportals\pf_hell_portal_n01.json
		del %d2r_env%\model\expansion\siege\expansion_siege_hellportals\pf_hell_portal_w01.json
		
		del %objects_folder%\chests\consolation_chest.json
		del %objects_folder%\chests\special_chest_100.json
		del %d2r_env%\model\act3\jungle\prefab\pf_jungle_totem_d_foliage01.json
		del %objects_folder%\env_pillars\arcane_tome.json
		del %objects_folder%\env_pillars\town_act_3_gid_b_inn_altar.json
		del %objects_folder%\dummy\caged_wussie_1.json
		del %objects_folder%\characters\wirt.json
		
		copy /Y %d2r_env%\porory\beacon\*.json %d2r_env%\porory\beacon\json_db
		del /Q %d2r_env%\porory\beacon\*.json
		
		@echo.default>%entry_guider_sign%
		
	) else (
		@ echo.	 ���ص��������������	���롾1�� �л���ԭ��״̬�̡�������ɫ������������Ȧָ����
		DEL /F /S /Q %entry_guider_folder%\*.*
		xcopy %entry_guider_l% %entry_guider_folder%\ /Y /S /E
		
		REM ��һĻ�����ָ��
		copy /Y %quest_point_line_folder%\stone_alpha.json	%objects_folder%\env_stone\stone_alpha.json
		copy /Y %quest_point_line_folder%\inifuss_tree.json		%objects_folder%\env_wood\inifuss_tree.json
		copy /Y %quest_point_line_folder%\malus.json			%objects_folder%\armor_weapons\malus.json
		REM �ڶ�Ļ�����ָ��
		copy /Y %quest_point_line_folder%\seven_tombs_receptacle.json %objects_folder%\env_pillars\seven_tombs_receptacle.json
		copy /Y %quest_point_line_folder%\horadric_cube_chest.json		%objects_folder%\chests\horadric_cube_chest.json
		copy /Y %quest_point_line_folder%\horadric_scroll_chest.json	%objects_folder%\chests\horadric_scroll_chest.json
		REM ����Ļ�����ָ��
		copy /Y %quest_point_line_folder%\gid_b_inn_decoy.json	%objects_folder%\env_organic\gid_b_inn_decoy.json
		copy /Y %quest_point_line_folder%\khalim_brain_chest.json	%objects_folder%\chests\khalim_brain_chest.json
		copy /Y %quest_point_line_folder%\khalim_eye_chest.json	%objects_folder%\chests\khalim_eye_chest.json
		copy /Y %quest_point_line_folder%\khalim_heart_chest.json	%objects_folder%\chests\khalim_heart_chest.json
		REM ����Ļ�����ָ��
		copy /Y %quest_point_line_folder%\soul_stone_forge.json	%objects_folder%\env_manmade\soul_stone_forge.json
		REM ����Ļ�����ָ��
		copy /Y %quest_point_line_folder%\anya_yet_again.json		%objects_folder%\characters\anya_yet_again.json
		REM ����Ļ����ָ��
		copy /Y  %quest_point_common_folder%\pf_hell_portal_n01.json	%d2r_env%\model\expansion\siege\expansion_siege_hellportals\pf_hell_portal_n01.json
		copy /Y  %quest_point_common_folder%\pf_hell_portal_w01.json	%d2r_env%\model\expansion\siege\expansion_siege_hellportals\pf_hell_portal_w01.json
		REM �����ӵ�����ָ��
		copy /Y %quest_point_common_folder%\caged_wussie_1.json				%objects_folder%\dummy\caged_wussie_1.json
		copy /Y %quest_point_common_folder%\arcane_tome.json					%objects_folder%\env_pillars\arcane_tome.json
		copy /Y %quest_point_common_folder%\wirt.json							%objects_folder%\characters\wirt.json
		copy /Y %quest_point_common_folder%\consolation_chest.json			%objects_folder%\chests\consolation_chest.json
		copy /Y %quest_point_common_folder%\special_chest_100.json			%objects_folder%\chests\special_chest_100.json
		copy /Y %quest_point_common_folder%\town_act_3_gid_b_inn_altar.json	%objects_folder%\env_pillars\town_act_3_gid_b_inn_altar.json
		copy /Y %quest_point_common_folder%\pf_jungle_totem_d_foliage01.json	%d2r_env%\model\act3\jungle\prefab\pf_jungle_totem_d_foliage01.json
		
		copy /Y %d2r_env%\porory\beacon\*.json %d2r_env%\porory\beacon\json_db
		del /Q %d2r_env%\porory\beacon\*.json
		
		@echo.light>%entry_guider_sign%
	)
goto FunctionEnd


:set_chests_with_light
if exist %objects_aura% (
@ echo.	 ���� ���رձ���Ƚ�����Ʒ������ʾ��
if exist "%objects_folder%\characters\anya_yet_again.json" (
	move  %objects_folder%\characters\*.* %objects_folder%\characters\mdk
	move  %objects_folder%\characters\mdk\anya_yet_again.json %objects_folder%\characters
) else (
	move  %objects_folder%\characters\*.* %objects_folder%\characters\mdk
)
ren %objects_folder%\armor_weapons\malus.json malus.mdkjson
move /Y %MDKMOD%\data\hd\objects\armor_weapons\*.json %MDKMOD%\data\hd\objects\armor_weapons\mdk
ren %objects_folder%\armor_weapons\malus.mdkjson malus.json

ren  %objects_folder%\caskets caskets_mdk
ren  %objects_folder%\chests chests_mdk
ren  %objects_folder%\env_wood env_wood_mdk
ren  %objects_folder%\env_organic env_organic_mdk
ren  %objects_folder%\env_skeletons env_skeletons_mdk
ren  %objects_folder%\env_stone\rock.json rock_mdk.json
ren  %objects_folder%\env_stone\rock_c.json rock_c_mdk.json
ren  %objects_folder%\env_stone\rock_d.json rock_d_mdk.json
ren %objects_folder%\env_pillars\ancients_altar.json ancients_altar_mdk.json
ren %objects_folder%\env_pillars\ice_cave_object_1.json ice_cave_object_1_mdk.json
ren %objects_folder%\env_pillars\inside_altar.json inside_altar_mdk.json
ren %objects_folder%\env_pillars\jungle_pillar_0.json jungle_pillar_0_mdk.json
ren %objects_folder%\env_pillars\jungle_pillar_1.json jungle_pillar_1_mdk.json
ren %objects_folder%\env_pillars\jungle_pillar_2.json jungle_pillar_2_mdk.json
ren %objects_folder%\env_pillars\jungle_pillar_3.json jungle_pillar_3_mdk.json
ren %objects_folder%\env_pillars\lam_esens_tome.json lam_esens_tome_mdk.json
ren %objects_folder%\env_pillars\mephisto_pillar_1.json mephisto_pillar_1_mdk.json
ren %objects_folder%\env_pillars\mephisto_pillar_2.json mephisto_pillar_2_mdk.json
ren %objects_folder%\env_pillars\mephisto_pillar_3.json mephisto_pillar_3_mdk.json
ren %objects_folder%\env_pillars\obelisk_1.json obelisk_1_mdk.json
ren %objects_folder%\env_pillars\obelisk_2.json obelisk_2_mdk.json
ren %objects_folder%\env_pillars\steeg_stone.json steeg_stone_mdk.json
ren %objects_folder%\env_pillars\stone_stash.json stone_stash_mdk.json
ren %objects_folder%\env_pillars\tower_tome.json tower_tome_mdk.json
) else (
@ echo.	 ���� ����������Ƚ�����Ʒ������ʾ��
move /Y %MDKMOD%\data\hd\objects\characters\mdk\*.* %MDKMOD%\data\hd\objects\characters
move /Y %MDKMOD%\data\hd\objects\armor_weapons\mdk\*.json %MDKMOD%\data\hd\objects\armor_weapons
ren  %objects_folder%\caskets_mdk caskets
ren  %objects_folder%\chests_mdk chests
ren  %objects_folder%\env_wood_mdk env_wood
ren  %objects_folder%\env_organic_mdk env_organic
ren  %objects_folder%\env_skeletons_mdk env_skeletons
ren  %objects_folder%\env_stone\rock_mdk.json rock.json
ren  %objects_folder%\env_stone\rock_c_mdk.json rock_c.json
ren  %objects_folder%\env_stone\rock_d_mdk.json rock_d.json
ren %objects_folder%\env_pillars\ancients_altar_mdk.json ancients_altar.json
ren %objects_folder%\env_pillars\ice_cave_object_1_mdk.json ice_cave_object_1.json
ren %objects_folder%\env_pillars\inside_altar_mdk.json inside_altar.json
ren %objects_folder%\env_pillars\jungle_pillar_0_mdk.json jungle_pillar_0.json
ren %objects_folder%\env_pillars\jungle_pillar_1_mdk.json jungle_pillar_1.json
ren %objects_folder%\env_pillars\jungle_pillar_2_mdk.json jungle_pillar_2.json
ren %objects_folder%\env_pillars\jungle_pillar_3_mdk.json jungle_pillar_3.json
ren %objects_folder%\env_pillars\lam_esens_tome_mdk.json lam_esens_tome.json
ren %objects_folder%\env_pillars\mephisto_pillar_1_mdk.json mephisto_pillar_1.json
ren %objects_folder%\env_pillars\mephisto_pillar_2_mdk.json mephisto_pillar_2.json
ren %objects_folder%\env_pillars\mephisto_pillar_3_mdk.json mephisto_pillar_3.json
ren %objects_folder%\env_pillars\obelisk_1_mdk.json obelisk_1.json
ren %objects_folder%\env_pillars\obelisk_2_mdk.json obelisk_2.json
ren %objects_folder%\env_pillars\steeg_stone_mdk.json steeg_stone.json
ren %objects_folder%\env_pillars\stone_stash_mdk.json stone_stash.json
ren %objects_folder%\env_pillars\tower_tome_mdk.json tower_tome.json
)
goto FunctionEnd

:switch_sgline_with_english
if exist %base_with_english_sign_sgline% (
	if exist %sgline_with_english_sign% (
		copy /Y %d2r_strings%\json_db\item-names_sgline.json %item-names%
		del %sgline_with_english_sign%
	) else (
		copy /Y %d2r_strings%\json_db\item-names_sgline_with_english.json %item-names%
		@echo. "x">%sgline_with_english_sign% 
	)
)
goto FunctionEnd

:set_equipment_with_tucao
if exist %tucao_sign%  (
@ echo.		 ���� ��װ�������֮�ﲻ���²�  �� ���ڴ�����...���Ե�...
	copy /Y %d2r_strings%\json_db\item-runes_NoTucao.json %item-runes%
	copy /Y %d2r_strings%\json_db\item-names_NoTucao_EliteDye.json %item-names%
	del %tucao_sign%
	del %base_with_english_sign_sgline% 
	@ECHO.  "x">%no_tucao_sign%
) else (
	@ echo.		 ���� ��װ�������֮����²� ��  ���ڴ�����...���Ե�...
	copy /Y %d2r_strings%\json_db\item-runes_ShowTucao.json %item-runes%
	copy /Y %d2r_strings%\json_db\item-names_ShowTucao_EliteDye.json %item-names%
	
	del %base_with_english_sign_sgline%
	if exist %item-nameaffixes%.backupfile (
		copy /Y %item-nameaffixes%.backupfile %item-nameaffixes%
		del copy /Y %item-nameaffixes%.backupfile
	)
	if exist %base_with_english_sign%.backupfile  (
		copy /Y %base_with_english_sign%.backupfile %base_with_english_sign%
	) else if exist %base_no_baseinfo_sign%.backupfile  (
		copy /Y %base_no_baseinfo_sign%.backupfile %base_no_baseinfo_sign%
	) else if exist %base_with_english_sign_sgline%.backupfile  (
		copy /Y %base_with_english_sign_sgline%.backupfile %base_with_english_sign_sgline%
	)
		del %base_with_english_sign_sgline%.backupfile
		del %base_no_baseinfo_sign%.backupfile
		del %base_with_english_sign%.backupfile

	del %no_tucao_sign%
	del %base_with_english_sign_sgline% 
	@ECHO.  "x">%tucao_sign%
) 
goto FunctionEnd


:open_sys_base_color_folder
cls
@ echo.	 �� ��������ɫ�����ļ���
@ echo.	 �� �޸�ǰ���������Ǻ�ϰ�ߣ����ļ�����Ϸ���������ɫ���壬���߼��Ķ��嶼��
@ echo.	 profilehd�ļ���71�У�"FontColorGoldColor": �ǽ�ҵ���ɫ
@ echo.	 profilehd�ļ���77�У�"FontColorEtherealColor"������װ������ɫ
@ echo.	 profilehd�ļ���78�У�"FontColorEtherealColor"�Ǵ���װ������ɫ
@ echo.	  ��"r": 255, "g": 222, "b": 169, "a": 255����ɫ���������ɺ��������ֻ�ɫֵ��ALPHA͸���ȹ���
@ echo.	 �ô�����ɫ��_profilehd.json�ļ�ͳһ���壬���ж���Ŀ�����$�Ӷ����������á�
@ echo.	 �������ļ�...
pause
notepad %d2r_layouts%\_profilehd.json
pause
goto FunctionEnd

:open_game_sound_folder
cls
@ echo.	 �� ����Ч�ļ��С�
@ echo.	 high_rune.flac �Ǹߵȷ��ĵ�������
@ echo.	 torch_key.flac ��6BOSSԿ�׵�������
@ echo.	 item_potion_hd.flac ��ҩˮ�ĵ�������
@ echo.	 �ļ������м������滻���ļ���ѡ��ҩˮ�����ļ���������ɾ����ָ�ҩˮ������
@ echo.	 �������ļ���...
pause
explorer %d2r_sfx%\item\
pause
goto FunctionEnd

:set_large_charm_lightbeam_sign
@ echo.
if exist %lc_light% (
@ echo. ��ȥ�����ͻ���������/LC���ӣ��Ĺ���Ч���� ���ڴ�����...���Ե�...
ren %d2r_items%\misc\charm\charm_medium.json charm_medium_mdk.json
) else (
@ echo. �����Ӵ��ͻ���������/LC���ӣ��Ĺ���Ч���� ���ڴ�����...���Ե�...
ren %d2r_items%\misc\charm\charm_medium_mdk.json charm_medium.json
)
goto FunctionEnd

:set_small_charm_lightbeam_sign
@ echo.
if exist %sc_light% (
@ echo.   ��ȥ��С��/���������SC/GC���ӣ��Ĺ���Ч�������ڴ�����...���Ե�...
ren %d2r_items%\misc\charm\charm_small.json charm_small_mdk.json
ren %d2r_items%\misc\charm\charm_large.json charm_large_mdk.json
) else (
@ echo.   �����Ӵ��������SC/GC���ӣ��Ĺ���Ч�������ڴ�����...���Ե�...
ren %d2r_items%\misc\charm\charm_small_mdk.json charm_small.json
ren %d2r_items%\misc\charm\charm_large_mdk.json charm_large.json
)
goto FunctionEnd


:set_amulet_lightbeam_sign
@ echo.
if exist %amulet_light% (
@ echo.   ��ȥ�������Ĺ���Ч���� ���ڴ�����...���Ե�...
ren %d2r_items%\misc\amulet\amulet.json amulet_mdk.json
) else (
@ echo.   �����������Ĺ���Ч���� ���ڴ�����...���Ե�...
ren %d2r_items%\misc\amulet\amulet_mdk.json amulet.json
)
goto FunctionEnd


:set_ring_lightbeam_sign
@ echo.
if exist %ring_light% (
@ echo.   ��ȥ����ָ�Ĺ���Ч���� ���ڴ�����...���Ե�...
ren %d2r_items%\misc\ring\ring.json ring_mdk.json
) else (
@ echo.   �����ӽ�ָ�Ĺ���Ч���� ���ڴ�����...���Ե�...
ren %d2r_items%\misc\ring\ring_mdk.json ring.json
)
goto FunctionEnd


:set_gems_lightbeam_sign
@ echo.
if not exist %all_gem% (
@ echo.   ������Ͼ/��������ʯ�й���Ч���� ���ڴ�����...���Ե�...
move /Y %MDKMOD%\data\hd\items\misc\gem %MDKMOD%\data\hd\items\misc\gem_all
move /Y %MDKMOD%\data\hd\items\misc\gem_high %MDKMOD%\data\hd\items\misc\gem
) else if not exist %high_gem% (
@ echo.   ���رձ�ʯ����Ч���� ���ڴ�����...���Ե�...
move /Y %MDKMOD%\data\hd\items\misc\gem %MDKMOD%\data\hd\items\misc\gem_high
move /Y %MDKMOD%\data\hd\items\misc\gem_nolight %MDKMOD%\data\hd\items\misc\gem
) else (
@ echo.   ���������еȼ���ʯ����Ч���� ���ڴ�����...���Ե�...
move /Y %MDKMOD%\data\hd\items\misc\gem %MDKMOD%\data\hd\items\misc\gem_nolight
move /Y %MDKMOD%\data\hd\items\misc\gem_all %MDKMOD%\data\hd\items\misc\gem
)
goto FunctionEnd


:set_craft_runes_lightbeam_sign
@ echo.
if exist %craft_rune_light% (
@ echo.  ���ر��ֹ����Ĺ����� ���ڴ�����...���Ե�...
del %d2r_items%\misc\rune\nef_rune.json
del %d2r_items%\misc\rune\ral_rune.json
del %d2r_items%\misc\rune\amn_rune.json
del %d2r_items%\misc\rune\sol_rune.json
) else (
@ echo.  �������ֹ����Ĺ����� ���ڴ�����...���Ե�...
copy /Y %d2r_items%\misc\rune_craft\nef_rune.json %d2r_items%\misc\rune
copy /Y %d2r_items%\misc\rune_craft\ral_rune.json %d2r_items%\misc\rune
copy /Y %d2r_items%\misc\rune_craft\amn_rune.json %d2r_items%\misc\rune
copy /Y %d2r_items%\misc\rune_craft\sol_rune.json %d2r_items%\misc\rune
)
goto FunctionEnd

:set_runes_lightbeam_sign
set /p rune_light_setup_setting=<%rune_light_setup%
if "%rune_light_setup_setting%"=="light_arrow" (
	@ echo.	 ���ߵȷ��ĵ�����Ч��	���롾8�� ���á�ԭ��״̬������������Ч�̡���������+��ͷЧ����
	xcopy %high_rune_star_light% %items_rune_folder% /Y /S /E
	echo all_effects>%rune_light_setup%
	
) else if "%rune_light_setup_setting%"=="all_effects" (
	@ echo.	 ���ߵȷ��ĵ�����Ч��	���롾8�� ���á�ԭ��״̬������������Ч����������+�ǹ�Ч���̡�
	del /Q %items_rune_folder%
	echo original>%rune_light_setup%

) else (
	@ echo.	 ���ߵȷ��ĵ�����Ч��	���롾8�� ���á�ԭ��״̬�̡�����������Ч����������+��ͷЧ����
	xcopy %high_rune_arrow_light% %items_rune_folder% /Y /S /E
	echo light_arrow>%rune_light_setup%

)

goto FunctionEnd

:set_hj_font_file
@ echo.	 ������ģʽ���塿�л�˳�򣺷��Ρ���Բ������ͳ��
if not exist %hj_font_fangsong% (
	@ echo.	 ����ģʽ����״̬���������塿			���롾HJZT�� ���� ����Բ���塿
	ren %hj_font_currently% chi_fangsong
	ren %hj_font_qingyuan% chi
) else if not exist %hj_font_qingyuan% (
	@ echo.	 ����ģʽ����״̬����Բ���塿			���롾HJZT�� ���� ������ͳ�����塿
	ren %hj_font_currently% chi_qingyuan
	ren %hj_font_ruixiantong% chi
) else if not exist %hj_font_ruixiantong% (
	@ echo.	 ����ģʽ����״̬������ͳ�����塿			���롾HJZT�� ���� ���������塿
	ren %hj_font_currently% chi_ruixiantong
	ren %hj_font_youyuan% chi
) else if not exist %hj_font_youyuan% ( 
	@ echo.	 *������ģʽ���塿	���롾HJ�� �л�˳�򣺷����������Բ���������ͳ�����������Բ���塿
	ren %hj_font_currently% chi_youyuan
	ren %hj_font_fangsong% chi
) else (
	@ echo.	 ����ģʽ����״̬����ȡ������ʧ�ܡ�			���롾HJZT�� ���� ���������塿
	ren %hj_font_currently% chi_backup
	ren %hj_font_fangsong% chi
	)
goto FunctionEnd


:set_font_file
@ echo.  
if not exist %font_dahei% (
@ echo.   ������Ϊ��ѩ�������塿  ���ڴ�����...���Ե�...
ren %font_name% LiziDahei.ttf
ren %font_baoxue% %font_name_zhTW%
) else if not exist %font_baoxue% (
@ echo.   ������Ϊ����׼Բ�������塿  ���ڴ�����...���Ե�...
ren %font_name% BlizzardGlobal.ttf
ren %font_zhunyuan% %font_name_zhTW%
) else if not exist %font_zhunyuan% (
@ echo.   ������Ϊ����׼Բ�������塿  ���ڴ�����...���Ե�...
ren %font_name% LiziZhunyuan.ttf
ren %font_heiti% %font_name_zhTW%
) else if not exist %font_heiti% (
@ echo.   ������Ϊ�����������塿  ���ڴ�����...���Ե�...
ren %font_name% LiziHeiti.ttf
ren %font_libian% %font_name_zhTW%
) else if not exist %font_libian% (
@ echo.   ������Ϊԭ�淽�����塿  ���ڴ�����...���Ե�...
ren %font_name% LiziLibian.ttf
ren %font_fangxing% %font_name_zhTW%
) else if not exist %font_fangxing% (
@ echo.   ������Ϊ���ִ�����塿  ���ڴ�����...���Ե�...
ren %font_name% ARFangxin.ttf
ren %font_dahei% %font_name_zhTW%
) else (
ren %font_fangxing% %font_name_zhTW%
)
goto FunctionEnd

:open_item_nameaffixes_file
	cls
	@ echo.
	@ echo.   �������򿪵ײ��ı����ײ���Ϣ�����������
	@ echo.   1�����ı��еĵײ����ݻḲ��names�е�����
	@ echo.   2����������ʾ����ɾ���ײ�ֻ��Ҫ�ڴ��ļ����ҵ���Ӧidȥ�޸�zhTW���е����֣�ɾ����ǲ���ʾ
	@ echo.   3������Ҫ�ĵײ���ϸ��ϢҲ�����������������ҵ���ɾ������ֱ�Ӹĵ�key����������Ϸ��ȡ��������
	@ echo.   ���������Լ�����...
	pause
	notepad %item-nameaffixes%
	@ echo.   ���༭�������Ǳ��档����Զ����ı�����BUG��������װMOD�ָ�����
	pause
goto FunctionEnd

:open_mercenaries_file
	cls
	@ echo.
	@ echo.   ����������Ϸ�����¶�����ʾ���ı����󲿷ֺ�ԭ�治ͬ���ı���Ϣ�����������
	@ echo.   1�����������޸ĵ����֣�Ȼ���Ϊ����Ҫ��ʾ������
	@ echo.   2�����´���Ϸ������Ч
	@ echo.   3�������б����ļ����ĳ������˻ָ����ɣ�Ҳ���Դ�mod�������½�ѹ
	@ echo.   ���������Լ�����...
	pause
	notepad %mercenaries%
	@ echo.   ���༭�������Ǳ��档����Զ����ı�����BUG��������װMOD�ָ�����
	pause
goto FunctionEnd

:open_item_gems_file
cls
@ echo.
@ echo.   ���������Զ����ı�����ೣ���ı������������
@ echo.   1���Զ��������ɫ�ȣ����ڴ򿪵��ı���������Ʒ����������ɫ��ͼ����ɫ�����޸ġ�yc��������Ǹ��ַ�
@ echo.   2����Ҫ�޸ĵ������������ص��ߣ����ڴ򿪵��ı���������Ʒ�����޸����ֻ���ɾ�����֣���Ҫɾ��˫����
@ echo.   3���޸ġ����ʡ�����ǿ���ȣ����ı��ʼ��һ�����ݾ�����Щ���Լ��޸�����
@ echo.   4���޸���ʾ�������֪������˵ʲô����ȥ�޸ģ���֪���ĵ���û˵��
@ echo.   ����������һЩϸ���޸�����Լ�����...
pause
notepad %item-gems%
@ echo.   ���༭�������Ǳ��档����Զ����ı�����BUG��������װMOD�ָ�����
pause
goto FunctionEnd

REM ===���ι�����沿��===

:RuleSetup_Main
set CurrentMenu=RuleSetup_Main
mode con cols=120 lines=50
Cls
@ECHO OFF
@ echo.	
REM @ echo.         ����������������������������������������������������������������������������������������������������������������������������
REM @ echo.����     ��       D2R MDK MOD ������ʾ���������� By ZhangMDKRU#2129    ��
REM @ echo.         ����������������������������������������������������������������������������������������������������������������������������
@ echo.	����������MDK MOD ������ʾ�������� %Ver% ����%FOR_MOD_VER%��  By ZhangMDKRU#2129����������

@echo.  
@echo.  	���밴��ѡ���Ӧ����ҳ�桿��
call :color E0 "	��Z����Ϸ�������� ��X�����߸������� "
call :color DF "��C�����ε�������"
@echo. ��V��Ѫ����Ч���� ��B��UI������� ��N����������

if exist %DEBUG_FILE% (
	call :color CF "		DEBUGģʽON		"
)
if exist %SETUP_FOLDER_FILE% (
	call :color DF "		��װģʽON		"
)
if not "%MFD%"=="MDK" (
	call :color 3F "	MOD�ļ��У�%MFD%	"
)
@ echo. 

@set clang=0
@set /p clang=<%d2r_strings%\lang
echo.	�������������԰汾���������ļ��໥�������л��������������������á�����
if "%clang%"=="zhTW_cht" (
@ echo.	�����԰汾�����롾=�� ��=?���л�����1 ���ư深�塿�� 2 �ɰ淭�뷱�� �� 3 ���ư���� �� 4 �����������
) else if "%clang%"=="zhTW_cht_OLD" (
@ echo.	�����԰汾�����롾=�� ��=?���л���1 ���ư深��� ��2 �ɰ淭�뷱�� ���� 3 ���ư���� �� 4 �����������
) else if "%clang%"=="zhTW_chs" (
@ echo.	�����԰汾�����롾=�� ��=?���л���1 ���ư深��� 2 �ɰ淭�뷱�� �� ��3 ���ư���� ���� 4 �����������
) else if "%clang%"=="zhCN" (
@ echo.	�����԰汾�����롾=�� ��=?���л���1 ���ư深��� 2 �ɰ淭�뷱�� �� 3 ���ư���� �� ��4 ����������塿
) else (
call :color E4 "	��δ֪���ԡ� ���롾=�� ����ǿ���л��������ð深�塿"
@ echo.	 
) 
@ echo.	 


@ echo.	 �����롾1���л����Ƿ����εͼ����䡶����ҩˮ��ҩ�����޼�ֵ����ͨ/��չװ����
@ echo.	������*ע�����κ�����ֻ��ʾ����ǿ�����ֵ�װ�������Ǳ����εĳ�ǿ�ͼ�װ��
if exist %s_drop_fz_no% (
	@ echo.		 ��  ����ʾ���е�����Ʒ���������εͼ�������Ʒ��������������Ƭ�����εͼ�������Ʒ�̡�
) else if exist %s_drop_no% (
	@ echo.		 ��  ����ʾ���е�����Ʒ���������εͼ�������Ʒ�̡�������������Ƭ�����εͼ�������Ʒ��
) else (
	@ echo.		 ��  ����ʾ���е�����Ʒ�̡��������εͼ�������Ʒ��������������Ƭ�����εͼ�������Ʒ��
)
@ echo.		


@ echo.	 �����롾2���л������ƣ����𣯳¾ɣ����ʵġ����֡���Ʒ�ʡ�װ������ʾ����
if exist %s_low_red% (
@ echo.		 ��  ��Ʒ��װ�� ����ʾΪ��ɫ�� �̡���ʾΪ��ɫ�������������Ρ�
set s_low=%low_red%
) else if exist %s_low_black% (
@ echo.		 ��  ��Ʒ��װ�� ����ʾΪ��ɫ��������ʾΪ��ɫ�̡������������Ρ�
set s_low=%low_black%
) else if exist %s_low_hide% (
@ echo.		 ��  ��Ʒ��װ�� ����ʾΪ��ɫ��������ʾΪ��ɫ�������������Ρ̡�
set s_low=%low_hide%
) else (
@ echo.		 ��  ������ʶ�����
)
@ echo.		


@ echo.	 �����롾3���л�����ҩƿ�����졢����������ƿ������ʾ����
@ echo.	������*ע����������ָ�̶���ʾΪͼ��+���ֵķ�ʽ
if exist %s_ring_texticon% (
@ echo.		 ��  ��ҩƿ��ʾΪ��ͼ��+���̡֡����������֡�������ͼ�꡽�������غ���ƿ��
set s_ring=%ring_texticon%
) else if exist %s_ring_text% (
@ echo.		 ��  ��ҩƿ��ʾΪ��ͼ��+���֡����������̡֡�������ͼ�꡽�������غ���ƿ��
set s_ring=%ring_text%
) else if exist %s_ring_icon% (
@ echo.		 ��  ��ҩƿ��ʾΪ��ͼ��+���֡����������֡�������ͼ��̡��������غ���ƿ��
set s_ring=%ring_icon%
) else if exist %s_ring_hide% (
@ echo.		 ��  ��ҩƿ��ʾΪ��ͼ��+���֡����������֡�������ͼ�꡽�������غ���ƿ�̡�
set s_ring=%ring_hide%
) else (
@ echo.		 ��  ������ʶ�����
)
@ echo.		


@ echo.	 �����롾4���л���С��ƿ��1-4������ҩˮ����ʾ����
if exist %s_potion_show% (
@ echo.		 ��  С��ƿ��1-4������ҩˮ����ʾ�̡��������Ρ�
set s_potion=%potion_show%
) else if exist %s_potion_nodrop% (
@ echo.		 ��  С��ƿ��1-4������ҩˮ����ʾ���������Ρ̡�
set s_potion=%potion_nodrop%
) else (
@ echo.		 ��  ������ʶ�����
)
@ echo.		


@ echo.	 �����롾5���л����ⶾҩˮ����ʾ����
if exist %s_rvs_show% (
@ echo.		 ��  �ⶾҩˮ����ʾ�̡��������Ρ�
set s_rvs=%rvs_show%
) else if exist %s_rvs_nodrop% (
@ echo.		 ��  �ⶾҩˮ����ʾ���������Ρ̡�
set s_rvs=%rvs_nodrop%
) else (
@ echo.		 ��  ������ʶ�����
)
@ echo.		


@ echo.	 �����롾6���л�����ʯ����ʾ����
if exist %s_gem_texticon% (
	@ echo.		 ��  ��ʾΪ��ͼ��+���̡֡��������֡�����ͼ�꡽����ͼ+��+��ʾ��������+��ʾ������ͼ+��ʾ��
	set s_gem=%gem_texticon%
) else if exist %s_gem_text% (
	@ echo.		 ��  ��ʾΪ��ͼ��+���֡��������̡֡�����ͼ�꡽����ͼ+��+��ʾ��������+��ʾ������ͼ+��ʾ��
	set s_gem=%gem_text%
) else if exist %s_gem_icon% (
	@ echo.		 ��  ��ʾΪ��ͼ��+���֡��������֡�����ͼ��̡�����ͼ+��+��ʾ��������+��ʾ������ͼ+��ʾ��
	set s_gem=%gem_icon%
) else if exist %s_gem_texticon_tip% (
	@ echo.		 ��  ��ʾΪ��ͼ��+���֡��������֡�����ͼ�꡽����ͼ+��+��ʾ�̡�������+��ʾ������ͼ+��ʾ��
	set s_gem=%gem_texticon_tip%
) else if exist %s_gem_text_tip% (
	@ echo.		 ��  ��ʾΪ��ͼ��+���֡��������֡�����ͼ�꡽����ͼ+��+��ʾ��������+��ʾ�̡�����ͼ+��ʾ��
	set s_gem=%gem_text_tip%
) else if exist %s_gem_icon_tip% (
	@ echo.		 ��  ��ʾΪ��ͼ��+���֡��������֡�����ͼ�꡽����ͼ+��+��ʾ��������+��ʾ������ͼ+��ʾ�̡�
	set s_gem=%gem_icon_tip%
) else (
	@ echo.		 ��  ������ʶ�����
)
@ echo.		


@ echo.	 �����롾7���л������ĵ���ʾ����
if exist %s_rune_tip% (
@ echo.		 ��  ������ʾΪ��ͼ��+����+��;��ϳ���ʾ�̡�����ͼ��+���֡�
set s_rune=%rune_tip%
) else if exist %s_rune_notip% (
@ echo.		 ��  ������ʾΪ��ͼ��+����+��;��ϳ���ʾ������ͼ��+���̡֡�
set s_rune=%rune_notip%
) else (
@ echo.		 ��  ������ʶ�����
)
@ echo.		


@ echo.	 �����롾8���л�������ʸ���루�󵯣� ����ʾ����
if exist %s_arrow_texticon% (
@ echo.		 ��  ��ʸ��ʾΪ��ͼ��+���̡֡����������֡�������ͼ�꡽��������ʾ��
set s_arrow=%arrow_texticon%
) else if exist %s_arrow_text% (
@ echo.		 ��  ��ʸ��ʾΪ��ͼ��+���֡����������̡֡�������ͼ�꡽��������ʾ��
set s_arrow=%arrow_text%
) else if exist %s_arrow_icon% (
@ echo.		 ��  ��ʸ��ʾΪ��ͼ��+���֡����������֡�������ͼ��̡���������ʾ��
set s_arrow=%arrow_icon%
) else if exist %s_arrow_no% (
@ echo.		 ��  ��ʸ��ʾΪ��ͼ��+���֡����������֡�������ͼ�꡽��������ʾ�̡�
set s_arrow=%arrow_no%
) else (
@ echo.		 ��  ������ʶ�����
)
@ echo.		


@ echo.	 �����롾9���л��������ᣩ�루Կ�ף� ����ʾ����
if exist %s_scroll_texticon% (
@ echo.		 ��  ������ʾΪ��ͼ��+���̡֡����������֡�������ͼ�꡽
set s_scroll=%scroll_texticon%
) else if exist %s_scroll_text% (
@ echo.		 ��  ������ʾΪ��ͼ��+���֡����������̡֡�������ͼ�꡽
set s_scroll=%scroll_text%
) else if exist %s_scroll_icon% (
@ echo.		 ��  ������ʾΪ��ͼ��+���֡����������֡�������ͼ��̡�
set s_scroll=%scroll_icon%
) else (
@ echo.		 ��  ������ʶ�����
)
@ echo.		


@ echo.	 �����롾0���л�����ͨ����չ���Ŀ׳�����������ħ���ϣ�����ʾ����
@ echo.	������*ע����ͨ������ǿ����ʾ�����������ã��볤ꪣ�����ʫ����
if exist %s_pole_show% (
@ echo.		 ��  ��/�� �����������ϡ���ʾ�̡��������Ρ�
set s_pole=%pole_show%
) else if exist %s_pole_nodrop% (
@ echo.		 ��  ��/�� �����������ϡ���ʾ���������Ρ̡�
set s_pole=%pole_nodrop%
) else (
@ echo.		 ��  ������ʶ�����
)


@ echo.		
@ echo.	 �����롾K����item-gems�ļ����С��Զ����޸ġ�
if exist %huaijiu_nodrop% (
@ echo.	 �����롾L���л����ڡ�����ģʽ���µ��������Ƿ���Ч����ǰ״̬����Ч����������Ч��
) else (
@ echo.	 �����롾L���л����ڡ�����ģʽ���µ��������Ƿ���Ч����ǰ״̬����Ч����������Ч��
)
if exist %huaijiu_idkey% (
@ echo.	 �����롾L2���л����ڡ�����ģʽ���ɲ�ѯ��Ʒ��ID��Keyֵ����ǰ״̬����Ч����������Ч��
) else (
@ echo.	 �����롾L2���л����ڡ�����ģʽ���ɲ�ѯ��Ʒ��ID��Keyֵ����ǰ״̬����Ч����������Ч��
)

@ echo.	
@ echo.
set  obj=""
set /p obj= �������ֻ���ĸ���س�ִ�У�

if /i "%obj%"=="1" Goto change_drop_filter
if /i "%obj%"=="2" Goto change_low_rule
if /i "%obj%"=="3" Goto change_ring_rule
if /i "%obj%"=="4" Goto change_potion_rule
if /i "%obj%"=="5" Goto change_rvs_rule
if /i "%obj%"=="6" Goto change_gem_rule
if /i "%obj%"=="7" Goto change_rune_rule
if /i "%obj%"=="8" Goto change_arrow_rule
if /i "%obj%"=="9" Goto change_scroll_rule
if /i "%obj%"=="0" Goto change_pole_rule

if /i "%obj%"=="K" Goto open_gem_file
if /i "%obj%"=="L" Goto set_huaijiu_nodrop
if /i "%obj%"=="L2" Goto set_huaijiu_idkey
if /i "%obj%"=="=" Goto set_lang_ver
if /i "%obj%"=="=1" Goto set_lang_zhTW_cht
if /i "%obj%"=="=2" Goto set_lang_zhTW_cht_OLD
if /i "%obj%"=="=3" Goto set_lang_zhTW_chs
if /i "%obj%"=="=4" Goto set_lang_zhCN

if /i "%obj%"=="Z" Goto SetupMain
if /i "%obj%"=="X" Goto LightSetupMain
if /i "%obj%"=="C" Goto RuleSetup_Main
if /i "%obj%"=="V" Goto RuneSound_Main
if /i "%obj%"=="B" Goto GameStyle_Main
if /i "%obj%"=="N" Goto OfflineGame_Main

@echo.
@echo	  ��Ч���룬�뿴����� �����е������������룡
@echo.
pause
ping -n 1 127.1>nul 
goto RuleSetup_Main


:set_huaijiu_idkey
if exist %huaijiu_idkey% (
	@ echo.	 �����롾L2���л����ڡ�����ģʽ���ɲ�ѯ��Ʒ��ID��Keyֵ����ǰ״̬����Ч����������Ч��
	DEL %d2r_strings%-legacy\item-modifiers.json
) else (
	@ echo.	 �����롾L2���л����ڡ�����ģʽ���ɲ�ѯ��Ʒ��ID��Keyֵ����ǰ״̬����Ч����������Ч��
	COPY /Y %d2r_strings%-legacy\json_db\item-modifiers_idkey.json %d2r_strings%-legacy\item-modifiers.json
)
PAUSE
Goto RuleSetup_Main

:set_huaijiu_nodrop
	if exist %huaijiu_nodrop% (
		@ echo.	 ��ǰ״̬����Ч��
		del %huaijiu_nodrop%
		REM ren %huaijiu_nodrop2% mercenaries.json.mdk
	) else (
		@ echo.	 ��ǰ״̬������Ч��
		cls
		copy /Y %item-gems%.legacy %huaijiu_nodrop%
		@ echo.	
		@ echo.	  ����ģʽ�޷���ȷ��ʾ���δ����е�Unicodeռλ��
		@ echo.	  ����ֱ��ʹ�����ļ��ᵼ�����ε���Ʒ��ʾһ���ʺų�����
		@ echo.	  �������ڵ�ǰ���ֿ���ʾ�ַ�λ123λ��������ģʽֻ��ʹ����ɫ������ռλ��
		@ echo.	  ��ɫ����ռλ��4λ����123��������������������ζ����ж���Ŀո�
		@ echo.	  �������ֻ��������ɾ���������֣������������ģʽ����ռλ���ء�
		@ echo.	  �������ص�װ�������������Ҳ�ǿ��������ֵģ�������ֻ��ͨ��������ϵ�ģ�ͼ�������
		@ echo.	  
		@ echo.	  �����Ƿ�Ҫʹ�����������Ҫ���Լ�Ȩ�⡣
		@ echo.	  
		
		pause
		
	)
Goto RuleSetup_Main

:TestFile
	if exist %~1 (
		@echo OK! %~1 
	) else (
		@echo WRONG! %~1
	)
Goto :eof

:CreateGemFile
	Call :TestFile %gem_head%
	Call :TestFile %format%
	Call :TestFile %rewrite%
	Call :TestFile %s_arrow%
	Call :TestFile %s_potion%
	Call :TestFile %s_rvs%
	Call :TestFile %s_scroll%
	Call :TestFile %s_gem%
	Call :TestFile %s_rune%
	Call :TestFile %s_ring%
	Call :TestFile %s_drop%
	Call :TestFile %s_pole%
	Call :TestFile %s_low%
	Call :TestFile %gem_end%
	@echo. ��ʼ����gem�ļ�
	if exist %DEBUG_FILE% ( pause )
	set rule_file=%gem_head%+%format%+%s_low%+%rewrite%+%s_arrow%+%s_potion%+%s_rvs%+%s_scroll%+%s_gem%+%s_rune%+%s_ring%+%s_drop%+%s_pole%+%gem_end%
	set rule_file2=%gem_head%+%format%+%s_low%+%rewrite%+%s_arrow%+%s_potion%+%s_rvs%+%s_scroll%+%s_gem%+%s_rune%+%s_ring%+%s_drop%2+%s_pole%2+%gem_end%
	@echo. rule_file Ϊ %rule_file%
	@echo. gem_file Ϊ %gem_file%
	pause
	if exist %DEBUG_FILE% ( pause )
	del %gem_file%
	copy /Y /b %rule_file% %gem_file%
	copy /Y /b %rule_file2% %gem_file%.legacy
	
	@echo. del_file=%rule_del_file%
	@echo. cre_file=%rule_create_file%
	if exist %DEBUG_FILE% ( pause )
	del %rule_del_file%
	@echo. x>%rule_create_file%
	
	ping -n 1 127.1>nul
	@ECHO ������ɣ�
Goto RuleSetup_Main


:change_low_rule
	@ echo.	 �š����롾0���л������ƣ����𣯳¾ɣ����ʵġ����֡���Ʒ�ʡ�װ������ʾ����
	if exist %s_low_red% (
	@ echo.		 ��  ��Ʒ��װ�� ����ʾΪ��ɫ�� ��
		set s_low=%low_black%
		set rule_create_file=%s_low_black%
	) else if exist %s_low_black% (
	@ echo.		 ��  ��Ʒ��װ������ʾΪ��ɫ�̡�
		set s_low=%low_hide%
		set rule_create_file=%s_low_hide%
	) else if exist %s_low_hide% (
	@ echo.		 ��  ��Ʒ��װ�� ���������Ρ̡�
		set s_low=%low_red%
		set rule_create_file=%s_low_red%
	) else (
	@ echo.		 ��  ʶ�����
		set s_low=%low_hide%
		set rule_create_file=%s_low_hide%
	)
	set rule_del_file=%all_low_sign%
Goto CreateGemFile


:change_rune_rule
	if exist %s_rune_tip% (
		@echo. ��ǰ��ʾtip���л��ɲ���ʾ
		set rule_del_file=%all_rune_sign%
		set s_rune=%rune_notip%
		set rule_create_file=%s_rune_notip%
	) else (
		@echo. ��ǰ����ʾtip���л�����ʾ
		set rule_del_file=%all_rune_sign%
		set s_rune=%rune_tip%
		set rule_create_file=%s_rune_tip%
	)
Goto CreateGemFile

:change_rvs_rule
	if exist %s_rvs_show% (
		@echo. ��ǰ��ʾrvs���л��ɲ���ʾ
		set rule_del_file=%all_rvs_sign%
		set s_rvs=%rvs_nodrop%
		set rule_create_file=%s_rvs_nodrop%
	) else (
		@echo. ��ǰ����ʾrvs���л�����ʾ
		set rule_del_file=%all_rvs_sign%
		set s_rvs=%rvs_show%
		set rule_create_file=%s_rvs_show%
	)
Goto CreateGemFile

:change_potion_rule
	if exist %s_potion_show% (
		@echo. ��ǰ��ʾ1-4hp���л��ɲ���ʾ
		set rule_del_file=%all_potion_sign%
		set s_potion=%potion_nodrop%
		set rule_create_file=%s_potion_nodrop%
	) else (
		@echo. ��ǰ����ʾ1-4hp���л�����ʾ
		set rule_del_file=%all_potion_sign%
		set s_potion=%potion_show%
		set rule_create_file=%s_potion_show%
	)
Goto CreateGemFile

:change_pole_rule
	if exist %s_pole_show% (
		@echo. ��ǰ��ʾ��ͨ�������л��ɲ���ʾ
		set rule_del_file=%all_pole_sign%
		set s_pole=%pole_nodrop%
		set rule_create_file=%s_pole_nodrop%
	) else (
		@echo. ��ǰ����ʾ��ͨ�������л�����ʾ
		set rule_del_file=%all_pole_sign%
		set s_pole=%pole_show%
		set rule_create_file=%s_pole_show%
	)
Goto CreateGemFile

:change_drop_filter
	if exist %s_drop_fz_no% (
		@echo. ��ǰ״̬�ǡ��������Ρ������ɡ������Ρ�
		::����rule_del_file=��Ҫɾ���ı�־�ļ�
		set rule_del_file=%all_drop_sign%
		::����s_drop=��Ҫ�ϳɵ�gems��������ļ�
		set s_drop=%drop_show%
		::����rule_create_file=��Ҫ���´����ı�־�ļ�
		set rule_create_file=%s_drop_show%
		copy /Y %NoDropCheck%\CLOSE.sprite %NoDropCheck%\CHECK.sprite
		copy /Y %NoDropCheck%\CLOSE.lowend.sprite %NoDropCheck%\CHECK.lowend.sprite
	) else if exist %s_drop_no% (
		@echo. ��ǰ�����Ρ������ɡ��������Ρ�
		set rule_del_file=%all_drop_sign%
		set s_drop=%drop_fz_no%
		set rule_create_file=%s_drop_fz_no%
		copy /Y %NoDropCheck%\OK.sprite %NoDropCheck%\CHECK.sprite
		copy /Y %NoDropCheck%\OK.lowend.sprite %NoDropCheck%\CHECK.lowend.sprite
	) else (
		@echo. ��ǰ�������Ρ������ɡ����Ρ�
		set rule_del_file=%all_drop_sign%
		set s_drop=%drop_no%
		set rule_create_file=%s_drop_no%
		copy /Y %NoDropCheck%\OK.sprite %NoDropCheck%\CHECK.sprite
		copy /Y %NoDropCheck%\OK.lowend.sprite %NoDropCheck%\CHECK.lowend.sprite
	)
Goto CreateGemFile


:change_arrow_rule
	if exist %s_arrow_texticon% (
		@ echo.		 ��  ��ʸ��ʾΪ��ͼ��+���֡�
		set rule_del_file=%all_arrow_sign%
		set s_arrow=%arrow_text%
		set rule_create_file=%s_arrow_text%
	) else if exist %s_arrow_text% (
		@ echo.		 ��  ��ʸ��ʾΪ�������֡�
		set rule_del_file=%all_arrow_sign%
		set s_arrow=%arrow_icon%
		set rule_create_file=%s_arrow_icon%
	) else if exist %s_arrow_icon% (
		@ echo.		 ��  ��ʸ��ʾΪ����ͼ�꡿
		set rule_del_file=%all_arrow_sign%
		set s_arrow=%arrow_no%
		set rule_create_file=%s_arrow_no%
	) else (
		@ echo.		 ��  ��ʸ��ʾΪ������ʾ�̡�
		set rule_del_file=%all_arrow_sign%
		set s_arrow=%arrow_texticon%
		set rule_create_file=%s_arrow_texticon%
	)
Goto CreateGemFile

:change_ring_rule
	if exist %s_ring_texticon% (
		@ echo.		 ��  ������ʾΪ��ͼ��+���̡֡�
		set rule_del_file=%all_ring_sign%
		set s_ring=%ring_text%
		set rule_create_file=%s_ring_text%
	) else if exist %s_ring_text% (
		@ echo.		 ��  ������ʾΪ�������̡֡�
		set rule_del_file=%all_ring_sign%
		set s_ring=%ring_icon%
		set rule_create_file=%s_ring_icon%
	) else if exist %s_ring_icon% (
		@ echo.		 ��  ������ʾΪ����ͼ��̡�
		set rule_del_file=%all_ring_sign%
		set s_ring=%ring_hide%
		set rule_create_file=%s_ring_hide%
	) else (
		@ echo.		 ��  ������ʾΪ�����غ���ƿ�̡�
		set rule_del_file=%all_ring_sign%
		set s_ring=%ring_texticon%
		set rule_create_file=%s_ring_texticon%
	) 
Goto CreateGemFile

:change_gem_rule
	if exist %s_gem_texticon% (
		@ echo.		 ��  ��ʯ��ʾΪ��ͼ��+���̡֡�
		set rule_del_file=%all_gem_sign%
		set s_gem=%gem_text%
		set rule_create_file=%s_gem_text%
	) else if exist %s_gem_text% (
		@ echo.		 ��  ��ʯ��ʾΪ�������̡֡�
		set rule_del_file=%all_gem_sign%
		set s_gem=%gem_icon%
		set rule_create_file=%s_gem_icon%
	) else if exist %s_gem_icon%  (
		@ echo.		 ��  ��ʯ��ʾΪ����ͼ��̡�
		set rule_del_file=%all_gem_sign%
		set s_gem=%gem_texticon_tip%
		set rule_create_file=%s_gem_texticon_tip%
	) else if exist %s_gem_texticon_tip% (
		@ echo.		 ��  ��ʯ��ʾΪ��ͼ��+����+tip�̡�
		set rule_del_file=%all_gem_sign%
		set s_gem=%gem_text_tip%
		set rule_create_file=%s_gem_text_tip%
	) else if exist %s_gem_text_tip% (
		@ echo.		 ��  ��ʯ��ʾΪ��������+tip�̡�
		set rule_del_file=%all_gem_sign%
		set s_gem=%gem_icon_tip%
		set rule_create_file=%s_gem_icon_tip%
	) else (
		@ echo.		 ��  ��ʯ��ʾΪ����ͼ��+tip�̡�
		set rule_del_file=%all_gem_sign%
		set s_gem=%gem_texticon%
		set rule_create_file=%s_gem_texticon%
	) 
Goto CreateGemFile

:change_scroll_rule
	echo on
	pause
	if exist %s_scroll_texticon% (
		@ echo.		 ��  ������ʾΪ��ͼ��+���̡֡�
		set rule_del_file=%all_scroll_sign%
		set s_scroll=%scroll_text%
		set rule_create_file=%s_scroll_text%
	) else if exist %s_scroll_text% (
		@ echo.		 ��  ������ʾΪ�������̡֡�
		set rule_del_file=%all_scroll_sign%
		set s_scroll=%scroll_icon%
		set rule_create_file=%s_scroll_icon%
	) else (
		@ echo.		 ��  ������ʾΪ����ͼ��̡�
		set rule_del_file=%all_scroll_sign%
		set s_scroll=%scroll_texticon%
		set rule_create_file=%s_scroll_texticon%
	) 
	pause
Goto CreateGemFile

:open_gem_file
notepad.exe %gem_file%
Goto RuleSetup_Main

REM===���ι������� END===

REM===Ѫ����ɫ���������ѡ�񲿷�===
:RuneSound_Main
mode con cols=120 lines=57
Cls
set CurrentMenu=RuneSound_Main
@ECHO OFF
@ echo.	

@ echo.	����������MDK MOD ��Ϸ��Ч���� %Ver% ����%FOR_MOD_VER%��  By ZhangMDKRU#2129����������

if exist %DEBUG_FILE% (
	call :color CF "		DEBUGģʽON		"
)
if exist %SETUP_FOLDER_FILE% (
	call :color DF "		��װģʽON		"
)
if not "%MFD%"=="MDK" (
	call :color 3F "	MOD�ļ��У�%MFD%	"
)

@echo.  
@echo.  	���밴��ѡ���Ӧ����ҳ�桿��
call :color E0 "	��Z����Ϸ�������� ��X�����߸������� ��C�����ε������� "
call :color DF "��V��Ѫ����Ч���� "
@echo. ��B��UI������� ��N����������

@echo.  
@ echo.	 ��ѡ�����治ͬ�ĸߵȷ�����Ч�������Լ����ļ����Լ��ġ��ļ�����high_rune.flac			 
@ echo.	 ���÷��ĵ���������Set drop sound of high level rune��
@ echo.		 �� �ͻ���1��������Ҫ��D3����������� �� һ�μ��������֡�D3+MUSIC
@ echo.		 �� �ͻ���2��������Ҫ��ֻ��D3�������������Only D3
@ echo.	 	 �� �ͻ���3��������Ҫ���ۣ���ɫ��˵��Hearthstone Golden Legend
@ echo.		 �� �ͻ���4��������Ҫ��D2ԭ����Ч��D2 Original
@ echo.		 �� �ͻ���5��������Ҫ���Լ��滻�ļ������ļ��о��С�DIY
@ echo.	 
if exist %zhongli_sound% (
@ echo.	 ��ǰBC/BO/BCry����������Ч����������
@ echo.		 �� �ͻ���6��������Ҫ���رա�����������Ч CLOSE BC/BO ZHONGLI SOUNDS
) else (
@ echo.	 ��ǰBC/BO/BCry����������Ч�����رա�
@ echo.		 �� �ͻ���6��������Ҫ������������������Ч OPEN BC/BO ZHONGLI SOUNDS
)
@ echo.	 
if exist %states_end_sound% (
@ echo.	 ��ǰBUFF״̬������Ч��������������֧���ÿ���Ч��
@ echo.	  �� �ͻ���7��������Ҫ���رա�BUFF״̬������Ч���� BUFF END SOUNDS OFF
) else (
@ echo.	 ��ǰBUFF״̬������Ч�����رա�����֧���þ���Ч��
@ echo.	  �� �ͻ���7��������Ҫ��������BUFF״̬������Ч���� BUFF END SOUNDS ON
)
@ echo.		 ��
@ echo.		 ��  ���롾777�����������з�֧�����������롾888���رա����з�֧������

if exist %battlecommand_end_sign% (
@ echo.		 ��  ���롾71���رա�Ұ���ˡ����̡���ս��ָ�ӣ�CTA/BC/�Ӽ��ܵȼ��� ������
) else (
@ echo.		 ��  ���롾71��������Ұ���ˡ���������ս��ָ�ӣ�CTA/BC/�Ӽ��ܵȼ��� ������
)

if exist %battleorders_end_sign% (
@ echo.		 ��  ���롾72���رա�Ұ���ˡ����̡���ս�����BO/��Ѫ��ħ���� ������
) else (
@ echo.		 ��  ���롾72��������Ұ���ˡ���������ս�����BO/��Ѫ��ħ���� ������
)

if exist %shout_end_sign% (
@ echo.		 ��  ���롾73���رա�Ұ���ˡ����̡�����𣨼ӷ����� ������
) else (
@ echo.		 ��  ���롾73��������Ұ���ˡ�����������𣨼ӷ����� ������
)

if exist %venom_end_sign% (
@ echo.		 ��  ���롾74���رա��̡��͡����̡����㶾���ںޣ� ������
) else (
@ echo.		 ��  ���롾74���������̡��͡����������㶾���ںޣ� ������
)

if exist %bladeshield_end_sign% (
@ echo.		 ��  ���롾75���رա��̡��͡����̡�������֮�� ������
) else (
@ echo.		 ��  ���롾75���������̡��͡�������������֮��  ������
)

if exist %burstofspeed_end_sign% (
@ echo.		 ��  ���롾76���رա��̡��͡����̡����ٶȱ��� ������
) else (
@ echo.		 ��  ���롾76���������̡��͡����������ٶȱ��� ������
)

if exist %fade_end_sign% (
@ echo.		 ��  ���롾77���رա��̡��͡����̡���Ӱɢ�����ţ� ������
) else (
@ echo.		 ��  ���롾77���������̡��͡���������Ӱɢ�����ţ� ������
)

if exist %frozenarmor_end_sign% (
@ echo.		 ��  ���롾78���رա�ħ��ʦ�����̡�������ף�1���ף� ������
) else (
@ echo.		 ��  ���롾78��������ħ��ʦ��������������ף�1���ף� ������
)
if exist %shiverarmor_end_sign% (
@ echo.		 ��  ���롾79���رա�ħ��ʦ�����̡�������ף�2���ף� ������
) else (
@ echo.		 ��  ���롾79��������ħ��ʦ��������������ף�2���ף� ������
)
if exist %chillingarmor_end_sign% (
@ echo.		 ��  ���롾80���رա�ħ��ʦ�����̡��������ף�����/3���ף� ������
) else (
@ echo.		 ��  ���롾80��������ħ��ʦ���������������ף�����/3���ף� ������
)
if exist %enchant_end_sign% (
@ echo.		 ��  ���롾81���رա�ħ��ʦ�����̡������渽ħǿ�������/�����֣� ������
) else (
@ echo.		 ��  ���롾81��������ħ��ʦ�������������渽ħǿ�������/�����֣� ������
)
if exist %energyshield_end_sign% (
@ echo.		 ��  ���롾82���رա�ħ��ʦ�����̡����������ܣ����� ������
) else (
@ echo.		 ��  ���롾82��������ħ��ʦ�����������������ܣ����� ������
)

if exist %cyclonearmor_end_sign% (
@ echo.		 ��  ���롾83���رա���³�������̡����������� ������
) else (
@ echo.		 ��  ���롾83����������³��������������������  ������
)

if exist %morph_end_sign% (
@ echo.		 ��  ���롾84���رա���³�������̡�����³������ ������
) else (
@ echo.		 ��  ���롾84����������³��������������³������ ������
)

if exist %holyshield_end_sign% (
@ echo.		 ��  ���롾85���رա�ʥ��ʿ�����̡�����ʥ֮�� ������
) else (
@ echo.		 ��  ���롾85��������ʥ��ʿ������������ʥ֮�� ������
)

if exist %bonearmor_end_sign% (
@ echo.		 ��  ���롾86���رա����鷨ʦ�����̡������ǻ��ף�������ʿҲ���ã� ������
) else (
@ echo.		 ��  ���롾86�����������鷨ʦ�������������ǻ��ף�������ʿҲ���ã� ������
)

if exist %markwolf_end_sign% (
@ echo.		 ��  ���롾87���رա���³�������̡�����֮ӡ�� ������
) else (
@ echo.		 ��  ���롾87����������³��������������֮ӡ�� ������
)

if exist %markbear_end_sign% (
@ echo.		 ��  ���롾88���رա���³�������̡�����֮ӡ�� ������
) else (
@ echo.		 ��  ���롾88����������³��������������֮ӡ�� ������
)
@ echo.	 �ͻ���8�������򿪡�BUFF״̬������ЧĿ¼������Ҫ�Լ��滻�ļ� OPEN END SOUNDS FOLDER


@ echo.	 
@ echo.	 �����������뷨�������ɫ��� Set HP/MP Ball Color
@ echo.	 �ͻ���Q��������Ҫ������ѷ���Ѫ������ AMA
@ echo.	 �ͻ���W��������Ҫ���̿ͷ��Ѫ������ ASS
@ echo.	 �ͻ���E��������Ҫ�����鷨ʦ���Ѫ������ NEC
@ echo.	 �ͻ���R��������Ҫ��Ұ���˷��Ѫ������ BAR
@ echo.	 �ͻ���T��������Ҫ��ʥ��ʿ���Ѫ������ PAL
@ echo.	 �ͻ���Y��������Ҫ��Ů�׷��Ѫ������ SOR
@ echo.	 �ͻ���U��������Ҫ����³�����Ѫ������ DRU
@ echo.	 �ͻ���I��������Ҫ��Ĭ�Ϻ�����Ѫ������ Default
REM @ echo.	 �ͻ���O��������Ҫ���Զ�����Ѫ������ Custom��not used��
@ echo.

if exist %dlc1_sign% (
@ echo.	 *���롾DLC1���л���DLC 1����ɫ�����ܸ���ɳĮ��Ӷ���� ״̬���Ѽ���
) else (
@ echo.	 *���롾DLC1���л���DLC 1����ɫ�����ܸ���ɳĮ��Ӷ���� ״̬��δ����
)
if exist %hire_newtype_sign% (
@ echo.	 *���롾DLC2���л���DLC 2��ȫ����װ����Ӷ������ر�DLC1���� ״̬���Ѽ���
) else (
@ echo.	 *���롾DLC2���л���DLC 2��ȫ����װ����Ӷ������ر�DLC1���� ״̬��δ����
)
@ echo.
set  obj=""
set /p obj= �������ֻ���ĸ���س�ִ�У�

if /i "%obj%"=="Z" Goto SetupMain
if /i "%obj%"=="X" Goto LightSetupMain
if /i "%obj%"=="C" Goto RuleSetup_Main
if /i "%obj%"=="V" Goto RuneSound_Main
if /i "%obj%"=="B" Goto GameStyle_Main
if /i "%obj%"=="N" Goto OfflineGame_Main

if /i "%obj%"=="1" Goto D3+MUSIC
if /i "%obj%"=="2" Goto ONLY_D3
if /i "%obj%"=="3" Goto HEARTHSTONE
if /i "%obj%"=="4" Goto D2_ORIGINAL
if /i "%obj%"=="5" Goto OPEN_SOUND_FOLDER
if /i "%obj%"=="6" Goto SET_ZHONGLI_SOUND
if /i "%obj%"=="7" Goto SET_BUFF_END_SOUND
if /i "%obj%"=="8" Goto OPEN_BUFF_END_SOUND_FOLDER

if /i "%obj%"=="777" Goto SET_OPEN_ALL_BUFF_SE
if /i "%obj%"=="888" Goto SET_CLOSE_ALL_BUFF_SE
if /i "%obj%"=="71" Goto SET_BC_SE
if /i "%obj%"=="72" Goto SET_BO_SE
if /i "%obj%"=="73" Goto SET_SHOUT_SE
if /i "%obj%"=="74" Goto SET_VENOM_SE
if /i "%obj%"=="75" Goto SET_BLADE_SHIELD_SE
if /i "%obj%"=="76" Goto SET_BURST_OF_SPEED_SE
if /i "%obj%"=="77" Goto SET_FADE_SE
if /i "%obj%"=="78" Goto SET_FROZEN_ARMOR_SE
if /i "%obj%"=="79" Goto SET_SHIVER_ARMOR_SE
if /i "%obj%"=="80" Goto SET_CHILLING_ARMOR_SE
if /i "%obj%"=="81" Goto SET_ENCHANT_SE
if /i "%obj%"=="82" Goto SET_ENERGY_SHIELD_SE
if /i "%obj%"=="83" Goto SET_CYCLONE_ARMOR_SE
if /i "%obj%"=="84" Goto SET_MORPH_SE
if /i "%obj%"=="85" Goto SET_HOLY_SHIELD_SE
if /i "%obj%"=="86" Goto SET_BONE_ARMOR_SE
if /i "%obj%"=="87" Goto SET_MARKWOLF_SE
if /i "%obj%"=="88" Goto SET_MARKBEAR_SE


if /i "%obj%"=="Q" Goto AMA_STYLE
if /i "%obj%"=="W" Goto ASS_STYLE
if /i "%obj%"=="E" Goto NEC_STYLE
if /i "%obj%"=="R" Goto BAR_STYLE
if /i "%obj%"=="T" Goto PAL_STYLE
if /i "%obj%"=="Y" Goto SOR_STYLE
if /i "%obj%"=="U" Goto DRU_STYLE
if /i "%obj%"=="I" Goto DEFAULT_STYLE
if /i "%obj%"=="O" Goto CUSTOMIZED_STYLE

if /i "%obj%"=="DLC1" Goto set_dlc1
if /i "%obj%"=="DLC2" Goto set_dlc2

@echo.
@echo	  ��Ч���룬�뿴����� �����е������������룡
@echo.
pause
ping -n 1 127.1>nul 
goto RuneSound_Main

:set_dlc2
	if exist %hire_newtype_sign% (
		@ echo.	 ���롾DLC1���л���DLC 1����ɫ�����ܸ���ɳĮ��Ӷ���� ״̬���Ѽ���
		cls
		@ echo.	 
		@ echo.	 
		@ echo.	 
		@ echo.	 
		@ echo.	 ��ѯ���ļ����������ļ����������ļ������밴��D��ѡ�����ļ���������
		@ echo.	 
		REM  �ȹر� DLC1
		rd /S /Q %dlc1_t_file1%
		rd /S /Q %dlc1_t_file2%
		rd /S /Q %dlc1_t_file3%
		xcopy %dlc1_t_file1%.mdk %dlc1_t_file1% /Y /S /E
		xcopy %dlc1_t_file2%.mdk %dlc1_t_file2% /Y /S /E

		del %dlc1_t_file4%
		COPY /Y  %MDKMOD%\data\hd\character\hire_nickname\act2hire.json %MDKMOD%\data\hd\character\enemy

		del %dlc1_sign%
		
		REM �ر�DLC2
		rd /S /Q %hire_file1%
		rd /S /Q %hire_file3%
		rd /S /Q %hire_file5%
		rd /S /Q %hire_file7%
		COPY /Y  %MDKMOD%\data\hd\character\hire_nickname\roguehire.json %enemy_folder%
		COPY /Y  %MDKMOD%\data\hd\character\hire_nickname\act2hire.json %enemy_folder%
		COPY /Y  %MDKMOD%\data\hd\character\hire_nickname\act3hire.json %enemy_folder%
		COPY /Y  %MDKMOD%\data\hd\character\hire_nickname\act5hire1.json %enemy_folder%

		del %hire_newtype_sign%
	) else (
	@ echo.	 ���롾DLC1���л���DLC 1����ɫ�����ܸ���ɳĮ��Ӷ���� ״̬��δ����
		REM  �ȹر� DLC1
		rd /S /Q %dlc1_t_file1%
		rd /S /Q %dlc1_t_file2%
		rd /S /Q %dlc1_t_file3%
		xcopy %dlc1_t_file1%.mdk %dlc1_t_file1% /Y /S /E
		xcopy %dlc1_t_file2%.mdk %dlc1_t_file2% /Y /S /E

		del %dlc1_t_file4%
		COPY /Y  %MDKMOD%\data\hd\character\hire_nickname\act2hire.json %MDKMOD%\data\hd\character\enemy

		del %dlc1_sign%
		
		REM ����DLC2
		xcopy %hire_newtype% %MDKMOD%\data\hd\character\enemy /Y /S /E
		echo. "x">"%hire_newtype_sign%"
		
	)
goto RuneSound_Main

:set_dlc1
	if exist %dlc1_sign% (
		@ echo.	 ���롾DLC1���л���DLC 1����ɫ�����ܸ���ɳĮ��Ӷ���� ״̬���Ѽ���
		cls
		@ echo.	 
		@ echo.	 
		@ echo.	 
		@ echo.	 
		@ echo.	 ��ѯ���ļ����������ļ����������ļ������밴��D��ѡ�����ļ���������
		@ echo.	 
		rd /S /Q %dlc1_t_file1%
		rd /S /Q %dlc1_t_file2%
		rd /S /Q %dlc1_t_file3%
		xcopy %dlc1_t_file1%.mdk %dlc1_t_file1% /Y /S /E
		xcopy %dlc1_t_file2%.mdk %dlc1_t_file2% /Y /S /E

		del %dlc1_t_file4%
		COPY /Y  %MDKMOD%\data\hd\character\hire_nickname\act2hire.json %MDKMOD%\data\hd\character\enemy

		del %dlc1_sign%
	) else (
	@ echo.	 ���롾DLC1���л���DLC 1����ɫ�����ܸ���ɳĮ��Ӷ���� ״̬��δ����
		REM �ȹر�DLC2��A2 PET
		rd /S /Q %hire_file3%
		COPY /Y  %MDKMOD%\data\hd\character\hire_nickname\act2hire.json %enemy_folder%
		REM ����DLC1
		xcopy %MDKMOD%\data\hd\character\DLC1 %MDKMOD%\data\hd\character\enemy /Y /S /E
		echo. "x">"%dlc1_sign%"
		
	)
goto RuneSound_Main

:SET_CLOSE_ALL_BUFF_SE
copy /Y %states_end_sound_folder%\se_novoice\*.flac %states_end_sound_folder%
del %states_end_sound_folder%\mdk\*.sesign
goto RuneSound_Main

:SET_OPEN_ALL_BUFF_SE
copy /Y %states_end_sound_folder%\se_backup\*.flac %states_end_sound_folder%
	@ECHO.  "x">%battlecommand_end_sign%
	@ECHO.  "x">%battleorders_end_sign%
	@ECHO.  "x">%shout_end_sign%
	@ECHO.  "x">%venom_end_sign%
	@ECHO.  "x">%bladeshield_end_sign%
	@ECHO.  "x">%burstofspeed_end_sign%
	@ECHO.  "x">%fade_end_sign%
	@ECHO.  "x">%frozenarmor_end_sign%
	@ECHO.  "x">%shiverarmor_end_sign%
	@ECHO.  "x">%chillingarmor_end_sign%
	@ECHO.  "x">%enchant_end_sign%
	@ECHO.  "x">%energyshield_end_sign%
	@ECHO.  "x">%cyclonearmor_end_sign%
	@ECHO.  "x">%morph_end_sign%
	@ECHO.  "x">%holyshield_end_sign%
	@ECHO.  "x">%bonearmor_end_sign%
	@ECHO.  "x">%markwolf_end_sign%
	@ECHO.  "x">%markbear_end_sign%
goto RuneSound_Main

:SET_BC_SE
set se_sound=battlecommand_end
goto SET_SE_ON_OFF

:SET_BO_SE
set se_sound=battleorders_end
goto SET_SE_ON_OFF

:SET_SHOUT_SE
set se_sound=shout_end
goto SET_SE_ON_OFF

:SET_VENOM_SE
set se_sound=venom_end
goto SET_SE_ON_OFF

:SET_BLADE_SHIELD_SE
set se_sound=bladeshield_end
goto SET_SE_ON_OFF

:SET_BURST_OF_SPEED_SE
set se_sound=burstofspeed_end
goto SET_SE_ON_OFF

:SET_FADE_SE
set se_sound=fade_end
goto SET_SE_ON_OFF

:SET_FROZEN_ARMOR_SE
set se_sound=frozenarmor_end
goto SET_SE_ON_OFF

:SET_SHIVER_ARMOR_SE
set se_sound=shiverarmor_end
goto SET_SE_ON_OFF

:SET_CHILLING_ARMOR_SE
set se_sound=chillingarmor_end
goto SET_SE_ON_OFF

:SET_ENCHANT_SE
set se_sound=enchant_end
goto SET_SE_ON_OFF

:SET_ENERGY_SHIELD_SE
set se_sound=energyshield_end
goto SET_SE_ON_OFF

:SET_CYCLONE_ARMOR_SE
set se_sound=cyclonearmor_end
goto SET_SE_ON_OFF

:SET_MORPH_SE
set se_sound=morph_end
goto SET_SE_ON_OFF

:SET_HOLY_SHIELD_SE
set se_sound=holyshield_end
goto SET_SE_ON_OFF

:SET_BONE_ARMOR_SE
set se_sound=bonearmor_end
goto SET_SE_ON_OFF

:SET_MARKWOLF_SE
set se_sound=markwolf_end
goto SET_SE_ON_OFF

:SET_MARKBEAR_SE
set se_sound=markbear_end
goto SET_SE_ON_OFF

:SET_SE_ON_OFF
set test_sound_sign=%states_end_sound_folder%\mdk\!se_sound!.sesign
@echo. test_sound_sign=!test_sound_sign!
if exist !test_sound_sign! (
	@ echo.	�ر�������
	copy /Y %states_end_sound_folder%\se_novoice\!se_sound!.flac %states_end_sound_folder%
	del !test_sound_sign!
) else (
	@ echo.	����������
	copy /Y %states_end_sound_folder%\se_backup\!se_sound!.flac %states_end_sound_folder%
	@ECHO.  "x">!test_sound_sign!
)
@ echo.	���
pause
goto RuneSound_Main


:OPEN_BUFF_END_SOUND_FOLDER
explorer.exe %states_end_sound_folder%
goto RuneSound_Main

:SET_ZHONGLI_SOUND

if exist %zhongli_sound% (
@ echo.	CLOSE BC/BO ZHONGLI SOUND
copy /Y %d2r_sfx%\skill\barbarian\*.flac %d2r_sfx%\skill\barbarian\mdk
del  %d2r_sfx%\skill\barbarian\*.flac
) else (
@ echo.	 OPEN BC/BO ZHONGLI SOUND
copy /Y %d2r_sfx%\skill\barbarian\mdk\*.flac %d2r_sfx%\skill\barbarian
)

goto RuneSound_Main


:SET_BUFF_END_SOUND

if exist %states_end_sound% (
@ echo.	 ��Ҫ���ر�BUFF״̬������Ч��ʾ����ǰ�Ѵ򿪣���CLOSE BUFF END SOUND
move /Y %states_end_sound_folder%\mdk\*.flac %states_end_sound_folder%
ren %d2r_excel%\states.txt states.txt.mdk
) else (
@ echo.	 ��Ҫ����BUFF״̬������Ч��ʾ����ǰ�ѹرգ���CLOSE BUFF END SOUND
move /Y %states_end_sound_folder%\mdk\*.flac %states_end_sound_folder%
ren %d2r_excel%\states.txt.mdk states.txt
)

goto RuneSound_Main

:OPEN_BUFF_END_SOUND_FOLDER
goto RuneSound_Main

:AMA_STYLE
set hp_style=ama
goto CHANGE_HPMP_STYLE

:ASS_STYLE
set hp_style=ass
goto CHANGE_HPMP_STYLE

:NEC_STYLE
set hp_style=nec
goto CHANGE_HPMP_STYLE

:BAR_STYLE
set hp_style=bar
goto CHANGE_HPMP_STYLE

:PAL_STYLE
set hp_style=pal
goto CHANGE_HPMP_STYLE

:SOR_STYLE
set hp_style=sor
goto CHANGE_HPMP_STYLE

:DRU_STYLE
set hp_style=dru
goto CHANGE_HPMP_STYLE

:DEFAULT_STYLE
set hp_style=default
goto CHANGE_HPMP_STYLE

:CUSTOMIZED_STYLE
set hp_style=customized
goto CHANGE_HPMP_STYLE

:CHANGE_HPMP_STYLE
del %target_profile%
if %hp_style%=="customized" (
	@echo. ��ʼ�Զ����ļ��жϣ�
	if not exist %profile_dir%%hp_style%.json (
		cls
		@echo. ����
		@echo. δ�����Զ������ļ�����ѡ�����еļ�������ļ���
		Goto RuneSound_Main
	) 
)
@echo. ����%hp_style%����ļ���
copy /Y %profile_dir%%hp_style%.json %target_profile%
goto RuneSoundChangeOver

:ONLY_D3
set drop_sound=%d3drop%
goto ChangeSoundFunction

:D3+MUSIC
set drop_sound=%d3dropandmusic%
goto ChangeSoundFunction

:HEARTHSTONE
set drop_sound=%jinse%
goto ChangeSoundFunction

:D2_ORIGINAL
set drop_sound=%item_rune%
goto ChangeSoundFunction

:ChangeSoundFunction
FOR %%i IN (%high_rune_num%) DO copy /Y %drop_sound% %d2r_sfx%\item\high_rune_%%~i.flac
goto RuneSoundChangeOver

:OPEN_SOUND_FOLDER
cls
@ echo.	 �� ����Ч�ļ��С�
@ echo.	 high_rune_����.flac �Ƕ�Ӧ��ŵĸߵȷ��ĵ�������������high_rune_30.flac����30#���ĵ�������
@ echo.	 torch_key.flac ��6BOSSԿ�׵�������
@ echo.	 item_potion_hd.flac ��ҩˮ�ĵ�������
@ echo.	 �ļ������м������滻���ļ���ѡ��ҩˮ�����ļ���������ɾ����ָ�ҩˮ������
@ echo.	 �������ļ���...
pause
explorer %d2r_sfx%\item\
pause
goto RuneSound_Main

:RuneSoundChangeOver
ping -n 1 127.1>nul
@ echo.
@ECHO ������ɣ���������...
@ echo.
pause
if exist %DEBUG_FILE% ( pause )
goto RuneSound_Main

REM===Ѫ����ɫ���������ѡ�� END===



REM===��Ϸ��񲿷�===
:GameStyle_Main
mode con cols=120 lines=48
Cls
set CurrentMenu=GameStyle_Main
@ECHO OFF
@ echo.	

@ echo.	����������MDK MOD ��Ϸ����뵥���������� %Ver% ����%FOR_MOD_VER%��  By ZhangMDKRU#2129����������

if exist %DEBUG_FILE% (
	call :color CF "		DEBUGģʽON		"
)
if exist %SETUP_FOLDER_FILE% (
	call :color DF "		��װģʽON		"
)
if not "%MFD%"=="MDK" (
	call :color 3F "	MOD�ļ��У�%MFD%	"
)

@echo.  
@echo.  	���밴��ѡ���Ӧ����ҳ�桿��
call :color E0 "	��Z����Ϸ�������� ��X�����߸������� ��C�����ε������� ��V��Ѫ����Ч���� "
call :color DF "��B��UI������� "
@echo. ��N����������

@ echo.


if not exist %ui_mini% (
@ echo.	 ���� �� �� С��	���롾1��  �л���100%%��Ĭ�ϣ��������������̡�����65%%������75%%������85%%��
) else if not exist %ui_6% (
@ echo.	 ���� �� �� С��	���롾1��  �л���100%%��Ĭ�ϣ�������������桽����65%%�̡�����75%%������85%%��
) else if not exist %ui_7% (
@ echo.	 ���� �� �� С��	���롾1��  �л���100%%��Ĭ�ϣ�������������桽����65%%������75%%�̡�����85%%��
) else if not exist %ui_8% (
@ echo.	 ���� �� �� С��	���롾1��  �л���100%%��Ĭ�ϣ�������������桽����65%%������75%%������85%%�̡�
) else (
@ echo.	 ���� �� �� С��	���롾1��  �л���100%%��Ĭ�ϣ��̡�����������桽����65%%������75%%������85%%��
)
if exist %font_size% (
@ echo.	 ���� �� �� С��	���롾2��  �л���Ĭ�ϳߴ硽�����Ӵ�ߴ�̡�
) else (
@ echo.	 ���� �� �� С��	���롾2��  �л���Ĭ�ϳߴ�̡������Ӵ�ߴ硽	
)
@ echo.	
if exist %poison_nova_effects% (
@ echo.	 ���綾������Ч��	���롾3��  �л���ԭ�桽�����綾���ǽ������ȡ̡����������ߵ�װ��Ҳ��Ч��
) else (
@ echo.	 ���綾������Ч��	���롾3��  �л���ԭ��̡������綾���ǽ������ȡ�
)
if exist %magicarrow_effects% (
@ echo.	 ���� ʸ �� Ч��	���롾4��  �л���ԭ�桽��������ħ������Ч�̡�
) else (
@ echo.	 ���� ʸ �� Ч��	���롾4��  �л���ԭ��̡���������ħ������Ч��
)
if exist %light_javelin_effects% (
@ echo.	 ���� ǹ �� Ч��	���롾5��  �л���ԭ�桽������������ǹ��Ч�̡�
) else (
@ echo.	 ���� ǹ �� Ч��	���롾5��  �л���ԭ��̡�������������ǹ��Ч��
)
if exist %light_axe_effects% (
@ echo.	 ���� �� �� Ч��	���롾6��  �л���ԭ�桽�����ɸ����ɵ��ӵ�β��Ч�̡�
) else (
@ echo.	 ���� �� �� Ч��	���롾6��  �л���ԭ��̡������ɸ����ɵ��ӵ�β��Ч��
)
if exist %light_a3mon_effects% (
@ echo.	 �����������Ч��	���롾7��  �л���ԭ�桽��������ӵ�β��Ч�̡�
) else (
@ echo.	 �����������Ч��	���롾7��  �л���ԭ��̡���������ӵ�β��Ч��
)
if exist %nova_effects_no_nova_storm% (
@ echo.	 ���� �� �� Ч��	���롾8��  �л���ԭ�桽�������Ʒ籩 �����ȡ�������������+���Ʒ籩 �����ȡ̡�
) else if exist %nova_effects_no_storm% (
@ echo.	 ���� �� �� Ч��	���롾8��  �л���ԭ�桽�������Ʒ籩 �����ȡ̡�������������+���Ʒ籩 �����ȡ�
) else (
@ echo.	 ���� �� �� Ч��	���롾8��  �л���ԭ��̡��������Ʒ籩 �����ȡ�������������+���Ʒ籩 �����ȡ�
)
if exist %chain_light_shield_effects% (
@ echo.	 �������ɶ���Ч��	���롾9��  �л���ԭ�桽���������ɶ���Ч�̡�
) else (
@ echo.	 �������ɶ���Ч��	���롾9��  �л���ԭ��̡����������ɶ���Ч��
)
if exist %diablo_light_nova_effects% (
@ echo.	 ����ɫ������Ч��	���롾10�� �л���ԭ�桽������ɫ������Ч�̡�
) else (
@ echo.	 ����ɫ������Ч��	���롾10�� �л���ԭ��̡�������ɫ������Ч��
)

if exist %blood_mana_red_aura% (
@ echo.	 ����Ѫħ��Debuff��⡿	���롾11�� �л���ԭ�桽������Ѫħ��Debuff�����ʾ�̡�
) else (
@ echo.	 ����Ѫħ��Debuff��⡿	���롾11�� �л���ԭ��̡�������Ѫħ��Debuff�����ʾ��
)

REM if exist %torch_fire% (
REM @ echo.	 ������籩��Ч��	���롾6��  �л���ԭ�桽�������λ�����籩��Ч�̡���*���ǲ��޵Ļ�籩Ҳ�ᱻ���Σ�
REM ) else (
REM @ echo.	 ������籩��Ч��	���롾6��  �л���ԭ��̡��������λ�����籩��Ч��
REM )
if not exist %BO_time% (
@ echo.	 ��BO/BC �� Ч��	���롾12�� �л���ԭ�桽�����Ͷ���/������Ч�̡������̿;�������Ч��
) else if not exist %BO_time_charge% (
@ echo.	 ��BO/BC �� Ч��	���롾12�� �л���ԭ�桽�����Ͷ���/������Ч�������̿;�������Ч�̡�
) else (
@ echo.	 ��BO/BC �� Ч��	���롾12�� �л���ԭ��̡������Ͷ���/������Ч�������̿;�������Ч��
)
if not exist %convic_off% (
@ echo.	 �����й⻷��Ч��	���롾13�� �л���ԭ�桽������Чʱ��ʾ��̾����ʾ �̡�
) else (
@ echo.	 �����й⻷��Ч��	���롾13�� �л���ԭ��̡�������Чʱ��ʾ��̾����ʾ��
)
if exist %blessedhammer_effect% (
@ echo.	 ��ף��֮����β��Ч��	���롾14�� �л���ԭ�桽����ף��֮������β��Ч �̡�
) else (
@ echo.	 ��ף��֮����β��Ч��	���롾14�� �л���ԭ��̡�����ף��֮������β��Ч��
)
if exist %sor_es_aura% (
@ echo.	 ������������Ч��	���롾15�� �л���ԭ�桽��������Ч����������̡�
) else (
@ echo.	 ������������Ч��	���롾15�� �л���ԭ��̡���������Ч���������⡽
)
@ echo.	

if not exist %ass_charge_default% (
@ echo.	 ��*�̿;���ͼ�꡿	���롾20�� �л���ԭ��̡��������Χ�ƴ�ͼ�꡽�������½Ǵ�ͼ�꡽�����ŵ�Сͼ�꡽
) else if not exist %ass_charge_large% (
@ echo.	 ��*�̿;���ͼ�꡿	���롾20�� �л���ԭ�桽�������Χ�ƴ�ͼ��̡��������½Ǵ�ͼ�꡽�����ŵ�Сͼ�꡽
) else if not exist %ass_charge_large_down% (
@ echo.	 ��*�̿;���ͼ�꡿	���롾20�� �л���ԭ�桽�������Χ�ƴ�ͼ�꡽�������½Ǵ�ͼ��̡������ŵ�Сͼ�꡽
) else (
@ echo.	 ��*�̿;���ͼ�꡿	���롾20�� �л���ԭ�桽�������Χ�ƴ�ͼ�꡽�������½Ǵ�ͼ�꡽�����ŵ�Сͼ��̡�
)
if exist %ass_charge_missiles_3% (
@ echo.	 ��*�̿;�����Ч��	���롾21�� �л���ԭ�桽�����Զ���̡���������Ч�񡽡�������Ч��
) else if exist %ass_charge_missiles% (
@ echo.	 ��*�̿;�����Ч��	���롾21�� �л���ԭ�桽��������Ч��̡���������Ч��
) else if exist %ass_charge_missiles_2% (
@ echo.	 ��*�̿;�����Ч��	���롾21�� �л���ԭ�桽��������Ч�񡽡�������Ч��̡�
) else (
@ echo.	 ��*�̿;�����Ч��	���롾21�� �л���ԭ��̡���������Ч�񡽡�������Ч��
)
@ echo.	 ��*�Զ���̿;�����Ч�����롾22�� ���б༭��Ч�����ļ�

if exist %ass_kick_voice_chunli_sign% (
@ echo.	 ��*�̿�����������	���롾23�� �л���ԭ�桽�����ְ�3�����̡�������������
) else if exist %ass_kick_no_voice_sign% (
@ echo.	 ��*�̿�����������	���롾23�� �л���ԭ�桽�����ְ�3�����������������̡�
) else (
@ echo.	 ��*�̿�����������	���롾23�� �л���ԭ��̡������ְ�3������������������
)
@ echo.

if exist %rune_style% (
@ echo.	 ������ͼ����	���롾Q��  �л���ԭ�桽������ɫ����š̡�
) else (
@ echo.	 ������ͼ����	���롾Q��  �л���ԭ��̡�������ɫ����š�
)
if not exist %hp_bar% (
@ echo.	 ������Ѫ�����	���롾W��  �л���ԭ�桽�������ط��̡����������
) else if not exist %hp_bar2% (
@ echo.	 ������Ѫ�����	���롾W��  �л���ԭ�桽�������ط�񡽡��������̡�
) else (
@ echo.	 ������Ѫ�����	���롾W��  �л���ԭ��̡��������ط�񡽡��������
)
if exist %mini_map_unit% (
@ echo.	 ����ͼͼ����	���롾E��  �л���ԭ�桽����MDKʵ�ķ��̡�
) else (
@ echo.	 ����ͼͼ����	���롾E��  �л���ԭ��̡�����MDKʵ�ķ��
)
if exist %color_word% (
@ echo.	 ��װ���������	���롾R��  �л���ԭ�桽����MDKȫ��ɫ�����̡�����MDK�ص������ɫ��
) else if exist %less_color_word% (
@ echo.	 ��װ���������	���롾R��  �л���ԭ�桽����MDK��ɫ���Դ���������MDK�ص������ɫ�̡�
) else (
@ echo.	 ��װ���������	���롾R��  �л���ԭ��̡�����MDK��ɫ���Դ���������MDK�ص������ɫ��
)
if exist %color_spell% (
@ echo.	 ������ͼ����	���롾T��  �л���ԭ��̡�������ɫ����ͼ�꡽
) else (
@ echo.	 ������ͼ����	���롾T��  �л���ԭ�桽������ɫ����ͼ��̡�
)
if exist %potion_style% (
@ echo.	 ��ҩƿ��״���	���롾Y��  �л���ԭ�桽����Բƿ��ҩƿ�̡�
) else (
@ echo.	 ��ҩƿ��״���	���롾Y��  �л���ԭ��̡�����Բƿ��ҩƿ��
)
if exist %potion_vo% (
@ echo.	 ��ҩˮ������Ч��	���롾U��  �л���ԭ�桽��������Ч�̡�
) else (
@ echo.	 ��ҩˮ������Ч��	���롾U��  �л���ԭ��̡���������Ч��
)
if exist %cain_light% (
@ echo.	 ��NPCͷ����Ч��	���롾I��  �л���ԭ�桽����NPC��ͷ�Ρ̡�
) else (
@ echo.	 ��NPCͷ����Ч��	���롾I��  �л���ԭ��̡�����NPC��ͷ�Ρ�
)
if exist %hire_nickname% (
@ echo.	 ��Ӷ�������Ч��	���롾O��  �л���ԭ�桽����Ӷ����ͷ�α�ǡ̡�
) else (
@ echo.	 ��Ӷ�������Ч��	���롾O��  �л���ԭ��̡�����Ӷ����ͷ�α�ǡ�
)
if exist %hireables_down% (
@ echo.	 ��Ӷ��ͼ��λ�á�	���롾P��  �л�����Ļ�·��̡�������Ļ�Ϸ���
) else (
@ echo.	 ��Ӷ��ͼ��λ�á�	���롾P��  �л�����Ļ�·���������Ļ�Ϸ��̡�
)

@ echo.	
set SwapCheckSign=%d2r_layouts%\MDKMODWeaponSwapTiphd.json
if exist %SwapCheckSign% (
@ echo.	 ������������ʾ��	���롾A��  �л���ԭ��״̬��������ʾ����������ʾ�̡�
) else (
@ echo.	 ������������ʾ��	���롾A��  �л���ԭ��״̬�̡�������ʾ����������ʾ��	
)
if exist %automap_monster_mdk_sign% (
	@ echo.	 ����ͼ��ǹ��	���롾S��  �л����ޱ�ǡ�����ţ��+Σ�չ���̡��������������+ţ+Σ���������й��
) else if exist %automap_monster_mdkchaos_sign% (
	@ echo.	 ����ͼ��ǹ��	���롾S��  �л����ޱ�ǡ�����ţ��+Σ�չ���������������+ţ+Σ�̡��������й��
) else if exist %automap_monster_all_sign% (
	@ echo.	 ����ͼ��ǹ��	���롾S��  �л����ޱ�ǡ�����ţ��+Σ�չ���������������+ţ+Σ���������й���̡�
) else (
	@ echo.	 ����ͼ��ǹ��	���롾S��  �л����ޱ�ǡ̡�����ţ��+Σ�չ���������������+ţ+Σ���������й��
)
if not exist %automap_chest_sign% (
@ echo.	 ����ͼ������ӡ�	���롾D��  �л����ޱ�ǡ������������λ�á̡�
) else (
@ echo.	 ����ͼ������ӡ�	���롾D��  �л����ޱ�ǡ̡������������λ�á�
)
if exist %monster_res% (
@ echo.	 �����˿�����ʾ��	���롾F��  �л�������ʾ���������ֺ���ʾ�������ѶȵĿ��ԡ��̡�
) else (
@ echo.	 �����˿�����ʾ��	���롾F��  �л�������ʾ�̡��������ֺ���ʾ�������ѶȵĿ��ԡ���
)
if not exist %map_tips% (
@ echo.	 ����ͼ��Ϣ��ʾ��	���롾G��  �л�������ʾ��������ʾ����ͼ�ȼ�/���ߡ��̡�������ʾ����ͼ�ȼ����� 
) else if not exist %map_lv% (
@ echo.	 ����ͼ��Ϣ��ʾ��	���롾G��  �л�������ʾ��������ʾ����ͼ�ȼ�/���ߡ��� ������ʾ����ͼ�ȼ����̡�
) else (
@ echo.	 ����ͼ��Ϣ��ʾ��	���롾G��  �л�������ʾ�̡�������ʾ����ͼ�ȼ�/���ߡ��� ������ʾ����ͼ�ȼ����� 
)
if not exist %no_all_cap% (
	if not exist %no_cap% (
		@ echo.	 ��ͷ����ʾ״̬��	���롾H��  �л���ԭ��̡���������ʾ��ñ����ñ����������ʾ����ͷ����
	) else (
		@ echo.	 ��ͷ����ʾ״̬��	���롾H��  �л���ԭ�桽��������ʾ��ñ����ñ�̡���������ʾ����ͷ����
	)
) else (
		@ echo.	 ��ͷ����ʾ״̬��	���롾H��  �л���ԭ�桽��������ʾ��ñ����ñ����������ʾ����ͷ���̡�
)


@ echo.
set  obj=""
set /p obj= �������ֻ���ĸ���س�ִ�У�

if /i "%obj%"=="Z" Goto SetupMain
if /i "%obj%"=="X" Goto LightSetupMain
if /i "%obj%"=="C" Goto RuleSetup_Main
if /i "%obj%"=="V" Goto RuneSound_Main
if /i "%obj%"=="B" Goto GameStyle_Main
if /i "%obj%"=="N" Goto OfflineGame_Main

if /i "%obj%"=="1" Goto set_ui_zoom_size
if /i "%obj%"=="2" Goto set_font_display_size
if /i "%obj%"=="3" Goto set_poison_nova_effects
if /i "%obj%"=="4" Goto set_magicarrow_effects
if /i "%obj%"=="5" Goto set_lightjavelin_effects
if /i "%obj%"=="6" Goto set_axe_effects
if /i "%obj%"=="7" Goto set_a3mon_effects
if /i "%obj%"=="8" Goto set_nova_effects
if /i "%obj%"=="9" Goto set_chain_light_effects
if /i "%obj%"=="10" Goto set_diablo_light_nova_effects
if /i "%obj%"=="11" Goto set_blood_mana_arua
REM if /i "%obj%"=="6" Goto set_torch_fire_effect
if /i "%obj%"=="12" Goto set_BO_effects
if /i "%obj%"=="13" Goto func_convic_sign
if /i "%obj%"=="14" Goto set_blessedhammer_effect
if /i "%obj%"=="15" Goto set_sor_es_aura

if /i "%obj%"=="20" Goto set_ass_charge_up
if /i "%obj%"=="21" Goto set_ass_charge_missiles
if /i "%obj%"=="22" Goto open_ass_charge_missiles_file
if /i "%obj%"=="23" Goto set_ass_kick_voice


REM if /i "%obj%"=="S" Goto set_GameTextFile

if /i "%obj%"=="Q" Goto set_rune_style
if /i "%obj%"=="W" Goto set_hp_bar_style
if /i "%obj%"=="E" Goto set_minimap_units_style
if /i "%obj%"=="R" Goto set_color_modifiers
if /i "%obj%"=="T" Goto set_skill_icons_style
if /i "%obj%"=="Y" Goto set_potion_style
if /i "%obj%"=="U" Goto set_potion_sound
if /i "%obj%"=="I" Goto set_cain_light
if /i "%obj%"=="O" Goto set_hire_nickname
if /i "%obj%"=="P" Goto set_mercenary_portrait_location

if /i "%obj%"=="A" Goto set_SwapCheckSign
if /i "%obj%"=="S" Goto set_automap_monster_sign
if /i "%obj%"=="D" Goto set_automap_chest_sign
if /i "%obj%"=="F" Goto set_show_monster_resistance
if /i "%obj%"=="G" Goto set_map_tips
if /i "%obj%"=="H" Goto set_show_helmet

@echo.
@echo	  ��Ч���룬�뿴����� �����е������������룡
@echo.
pause
ping -n 1 127.1>nul 
goto GameStyle_Main



REM =========������Ϸ���ý���==========

REM===��Ϸ��񲿷�===
:OfflineGame_Main
mode con cols=120 lines=43
Cls
set CurrentMenu=OfflineGame_Main
REM===��ȡ����===

REM===��ʾ����===

@ECHO OFF
@ echo.	

@ echo.	����������MDK MOD ��Ϸ����뵥���������� %Ver% ����%FOR_MOD_VER%��  By ZhangMDKRU#2129����������

if exist %DEBUG_FILE% (
	call :color CF "		DEBUGģʽON		"
)
if exist %SETUP_FOLDER_FILE% (
	call :color DF "		��װģʽON		"
)
if not "%MFD%"=="MDK" (
	call :color 3F "	MOD�ļ��У�%MFD%	"
)

@echo.  
@echo.  	���밴��ѡ���Ӧ����ҳ�桿��
call :color E0 "	��Z����Ϸ�������� ��X�����߸������� ��C�����ε������� ��V��Ѫ����Ч���� ��B��UI������� "
call :color DF "��N����������"

@ echo.	   
@ echo.	   
@ echo.	 �� ������ �� �� �� Ϸ �� ǿ �� �� �� �� ������ ��
@ echo.	   

set /p tz_mode=<%tz_mode_setup%
if "%tz_mode%"=="normal" (
	@ echo.	 ��*а��ش���չģʽ��	���롾TZ�� ���� ��ԭ��״̬�̡�������������Χ��������ѡа������
) else if "%tz_mode%"=="more" (
	@ echo.	 ��*а��ش���չģʽ��	���롾TZ�� ���� ��ԭ��״̬��������������Χ�̡�������ѡа������
) else if "%tz_mode%"=="best" (
	@ echo.	 ��*а��ش���չģʽ��	���롾TZ�� ���� ��ԭ��״̬��������������Χ��������ѡа������̡�
) else (
	@ echo.	 ��*а��ش���չģʽ��	���롾TZ�� ���� ��δ֪״̬��������������������Χ��
)

set /p caidan_unique_mode=<%caidan_unique_mode_on%
if "%caidan_unique_mode%"=="normal" (
	@ echo.	 ��*��ë�ٻ���ʵ�װ��	���롾CD�� ���� ��ԭ��״̬��������������Ʒ�ٺ�ë�̡������ٺ�ë+���Ųʵ�װ����
) else if "%caidan_unique_mode%"=="caidan" (
	@ echo.	 ��*��ë�ٻ���ʵ�װ��	���롾CD�� ���� ��ԭ��״̬��������������Ʒ�ٺ�ë�������ٺ�ë+���Ųʵ�װ���̡�
) else (
	@ echo.	 ��*��ë�ٻ���ʵ�װ��	���롾CD�� ���� ��ԭ��״̬�̡�������������Ʒ�ٺ�ë�������ٺ�ë+���Ųʵ�װ����
)

@ echo.	 
if exist %offline_fullhire_on% (
	@ echo.	 ��Ӷ �� ȫ �� �� װ��	���롾H��  �л� ��ԭ��״̬������Ӷ��ȫ��װ�̡�
) else (
	@ echo.	 ��Ӷ �� ȫ �� �� װ��	���롾H��  �л� ��ԭ��״̬�̡�����Ӷ��ȫ��װ��
)

set /p bigbox_mode=<%offline_bigbox%
if "%bigbox_mode%"=="all"  (
	@ echo.	 �������䱳�����С�	���롾G��  �л� ��ԭ��״̬������������+��+�����̡�����������+�С������������ӡ�
) else if "%bigbox_mode%"=="stash+box"  (
	@ echo.	 �������䱳�����С�	���롾G��  �л� ��ԭ��״̬������������+��+����������������+�С̡������������ӡ�
) else if "%bigbox_mode%"=="stash"  (
	@ echo.	 �������䱳�����С�	���롾G��  �л� ��ԭ��״̬������������+��+����������������+�С������������ӡ̡�
) else (
	@ echo.	 �������䱳�����С�	���롾G��  �л� ��ԭ��״̬�̡�����������+��+����������������+�С������������ӡ�
)

@ echo.	 


@set /p rune_shop_mode=<%rune_shop_sign%
if "%rune_shop_mode%"=="rev"  (
	@ echo.	 ���� ʯ �� �� �� �꡿	���롾Q��  �л� ��ԭ���̵�+����ƿ�̡�����+���ı�ʯ������+������ߡ�
) else if "%rune_shop_mode%"=="rune"  (
	@ echo.	 ���� ʯ �� �� �� �꡿	���롾Q��  �л� ��ԭ���̵�+����ƿ+���ı�ʯ�̡�����+������ߡ�
) else if "%rune_shop_mode%"=="quest"  (
	@ echo.	 ���� ʯ �� �� �� �꡿	���롾Q��  �л� ��ԭ���̵�+����ƿ+���ı�ʯ+������ߡ̡������ָ�ԭ�桽
) else (
	@ echo.	 ���� ʯ �� �� �� �꡿	���롾Q��  �л� ��ԭ���̵�̡�����+����ƿ������+���ı�ʯ������+������ߡ�
)

if not exist %monster_2x% (
	@ echo.	 ���� �� �� �� �� ����	���롾W��  �л� ��ԭ���ܶȡ�����1.5���̡�����3��������10��������������20����
) else if not exist %monster_3x% (
	@ echo.	 ���� �� �� �� �� ����	���롾W��  �л� ��ԭ���ܶȡ�����1.5��������3���̡�����10��������������20����
) else if not exist %monster_10x% (
	@ echo.	 ���� �� �� �� �� ����	���롾W��  �л� ��ԭ���ܶȡ�����1.5��������3��������10���̡�����������20����
) else if not exist %monster_20x% (
	@ echo.	 ���� �� �� �� �� ����	���롾W��  �л� ��ԭ���ܶȡ�����1.5��������3��������10��������������20���̡�
) else (
	@ echo.	 ���� �� �� �� �� ����	���롾W��  �л� ��ԭ���ܶȡ̡�����1.5��������3��������10��������������20����
)

set /p charstats_mode=<%charstats_mode_on%
if "%charstats_mode%"=="plus"  (
	@ echo.	 ���� ɫ ǿ �� ģ ʽ��	���롾E��  �л� ��ԭ��״̬����������ʼװ���̡������ӱ�����������ȫ��ǿ����
) else if "%charstats_mode%"=="pro"  (
	@ echo.	 ���� ɫ ǿ �� ģ ʽ��	���롾E��  �л� ��ԭ��״̬����������ʼװ���������ӱ������̡�����ȫ��ǿ����
) else if "%charstats_mode%"=="ultra"  (
	@ echo.	 ���� ɫ ǿ �� ģ ʽ��	���롾E��  �л� ��ԭ��״̬����������ʼװ���������ӱ�����������ȫ��ǿ���̡�
) else (
	@ echo.	 ���� ɫ ǿ �� ģ ʽ��	���롾E��  �л� ��ԭ��״̬�̡���������ʼװ���������ӱ�����������ȫ��ǿ����
)

set /p exp_mode=<%exp_mode_on%
if "%exp_mode%"=="20"  (
	@ echo.	 ���� �� ǿ �� ģ ʽ��	���롾R��  �л� ��ԭ��״̬������20������̡�����һ��99��ģʽ��
) else if "%exp_mode%"=="99"  (
	@ echo.	 ���� �� ǿ �� ģ ʽ��	���롾R��  �л� ��ԭ��״̬������20�����顽����һ��99��ģʽ�̡�
) else (
	@ echo.	 ���� �� ǿ �� ģ ʽ��	���롾R��  �л� ��ԭ��״̬�̡�����20�����顽����һ��99��ģʽ��
)

if exist %cubemain_ex%  (
	@ echo.	 ���� �� �� �� �� ʽ��	���롾T��  �л� ��ԭ��״̬���������ӵ����úϳɹ�ʽ�̡�
) else (
	@ echo.	 ���� �� �� �� �� ʽ��	���롾T��  �л� ��ԭ��״̬�̡��������ӵ����úϳɹ�ʽ��
)

if not exist %rw_nolimit%  (
	@ echo.	 ������֮�������ơ�	���롾Y��  �л� ��ԭ��״̬�������������֮��װ���������ơ̡�
) else (
	@ echo.	 ������֮�������ơ�	���롾Y��  �л� ��ԭ��״̬�̡������������֮��װ���������ơ�
)

set /p skill_mode=<%skills_mode_on%
if "%skill_mode%"=="normal"  (
	@ echo.	 ����  ��  ��  ǿ��	���롾U��  �л� ��ԭ�漼�ܡ��������޼�ʸ��ǹ+�̿�3���Ӿ����̡������������ܼ�ǿ��
) else if "%skill_mode%"=="plus"  (
	@ echo.	 ����  ��  ��  ǿ��	���롾U��  �л� ��ԭ�漼�ܡ��������޼�ʸ��ǹ+�̿�3���Ӿ����������������ܼ�ǿ�̡�
) else (
	@ echo.	 ����  ��  ��  ǿ��	���롾U��  �л� ��ԭ�漼�ܡ̡��������޼�ʸ��ǹ+�̿�3���Ӿ����������������ܼ�ǿ��
)
@ echo.	

set /p tc_mode=<%TC_mode_on%
if "%tc_mode%"=="modup"  (
	@ echo.	 ����  ��  ��  �ӡ�	���롾1��  �л� ��ԭ��״̬�������������̡������������������UP����������+�����
) else if "%tc_mode%"=="nomisc"  (
	@ echo.	 ����  ��  ��  �ӡ�	���롾1��  �л� ��ԭ��״̬������������䡽����������̡���������UP����������+�����
) else if "%tc_mode%"=="tcup"  (
	@ echo.	 ����  ��  ��  �ӡ�	���롾1��  �л� ��ԭ��״̬������������䡽�����������������UP�̡���������+�����
) else if "%tc_mode%"=="allup"  (
	@ echo.	 ����  ��  ��  �ӡ�	���롾1��  �л� ��ԭ��״̬������������䡽�����������������UP����������+������̡�
) else (
	@ echo.	 ����  ��  ��  �ӡ�	���롾1��  �л� ��ԭ��״̬�̡�����������䡽�����������������UP����������+�����
)

if exist %itemratio_up%  (
	@ echo.	 ��Ⱦ ɫ �� �� �ӡ�	���롾2��  �л� ��ԭ��״̬������ȫ�����Ⱦɫ�ʡ̡�
) else (
	@ echo.	 ��Ⱦ ɫ �� �� �ӡ�	���롾2��  �л� ��ԭ��״̬�̡�����ȫ�����Ⱦɫ�ʡ�
)



@ echo.	 
if not exist %all_sockets%  (
	@ echo.	 ��ȫ װ �� �� �ס�	���롾3��  �л� ��ԭ��״̬��������������װ����ס̡�
) else (
	@ echo.	 ��ȫ װ �� �� �ס�	���롾3��  �л� ��ԭ��״̬�̡�������������װ����ס�
)

@ echo.	 ������˵����������1-3�ס�ͷ�� ��Ь��1-4�ס����� �����1-3�ס����� ������2�ס�ȫ���� ����ָ����1��
@ echo.	 �������������֮�����ʹ�á���ɫ��������رա�ȫװ����ס��󲻺Ϲ�װ�����Զ�ɾ��������
@ echo.	 

if exist %unify_gc_mahua_sign% (
	@ echo.	 �������Լ���Ч��ͳһ�ش����ͼ�������롾J1�� �л����ָ�Ĭ�ϡ����黨�̡������������۾������۾���������
) else if exist %unify_gc_guilian_sign% (
	@ echo.	 �������Լ���Ч��ͳһ�ش����ͼ�������롾J1���л����ָ�Ĭ�ϡ����黨���������̡����۾������۾���������
) else if exist %unify_gc_eye_sign% (
	@ echo.	 �������Լ���Ч��ͳһ�ش����ͼ�������롾J1���л����ָ�Ĭ�ϡ����黨�������������۾��̡����۾���������
) else if exist %unify_gc_eye_dark_sign% (
	@ echo.	 �������Լ���Ч��ͳһ�ش����ͼ�������롾J1���л����ָ�Ĭ�ϡ����黨�������������۾������۾���������
) else (
	@ echo.	 �������Լ���Ч��ͳһ�ش����ͼ�������롾J1���л����ָ�Ĭ�ϡ̡����黨�������������۾������۾���������
)
if exist %unify_lc_lingpai_sign% (
	@ echo.	 �������Լ���Ч��ͳһ �����ͼ���� ���롾J2���л����ָ�Ĭ�ϡ������ơ̡���ţ�ǡ���������
) else if exist %unify_lc_niujiao_sign% (
	@ echo.	 �������Լ���Ч��ͳһ �����ͼ���� ���롾J2���л����ָ�Ĭ�ϡ������ơ���ţ�ǡ̡���������
) else if exist %unify_lc_fangta_sign% (
	@ echo.	 �������Լ���Ч��ͳһ �����ͼ���� ���롾J2���л����ָ�Ĭ�ϡ������ơ���ţ�ǡ��������̡�
) else (
	@ echo.	 �������Լ���Ч��ͳһ �����ͼ���� ���롾J2���л����ָ�Ĭ�ϡ̡������ơ���ţ�ǡ���������
)
if exist %unify_sc_xuanwo_sign% (
	@ echo.	 �������Լ���Ч��ͳһ С���ͼ���� ���롾J3���л����ָ�Ĭ�ϡ������С̡���Բ��������Բ������Բ��������
) else if exist %unify_sc_yuanfu_sign% (
	@ echo.	 �������Լ���Ч��ͳһ С���ͼ���� ���롾J3���л����ָ�Ĭ�ϡ������С���Բ���̡�����Բ������Բ��������
) else if exist %unify_sc_tuoyuan_sign% (
	@ echo.	 �������Լ���Ч��ͳһ С���ͼ���� ���롾J3���л����ָ�Ĭ�ϡ������С���Բ��������Բ�̡�����Բ��������
) else if exist %unify_sc_tuoyuan_dark_sign% (
	@ echo.	 �������Լ���Ч��ͳһ С���ͼ���� ���롾J3���л����ָ�Ĭ�ϡ������С���Բ��������Բ������Բ�������̡�
) else (
	@ echo.	 �������Լ���Ч��ͳһ С���ͼ���� ���롾J3���л����ָ�Ĭ�ϡ̡������С���Բ��������Բ������Բ��������
)

@ echo.

	@ echo.	 ���롾D1���򿪡���ɫ�浵���޸�����Halbu Editor���� 
	@ echo.	 ���롾D2���򿪡���ɫװ���޸�����DoZerg Diablo Edit 3.0 �� v0.32���� 
	@ echo.	 ���롾D3���򿪡�ս���ֲ��ش�Ԥ����ʾ�� 
	
@ echo.
call :color E1 "	 "
call :color CF "�����л��������Ӵ浵��1-9����"
@echo. ���롾BOX�� ���� ���������Ӵ浵�л�����7ҳ�����ӱ�������һ�Σ�
REM @ echo.	 �����л��������Ӵ浵��1-9����	���롾BOX�� ���� ���������Ӵ浵�л�����7ҳ�����ӱ�������һ�Σ�

call :color E1 "	 ���롾 M �� �� ����Ϸ�浵Ŀ¼��"
@ echo.
@ echo.
set  obj=""
set /p obj= �������ֻ���ĸ���س�ִ�У�

if /i "%obj%"=="Z" Goto SetupMain
if /i "%obj%"=="X" Goto LightSetupMain
if /i "%obj%"=="C" Goto RuleSetup_Main
if /i "%obj%"=="V" Goto RuneSound_Main
if /i "%obj%"=="B" Goto GameStyle_Main
if /i "%obj%"=="N" Goto OfflineGame_Main

if /i "%obj%"=="TZ" Goto set_tz_mode
if /i "%obj%"=="CD" Goto set_all_caidan_unique

if /i "%obj%"=="H" Goto set_offline_fullhire
if /i "%obj%"=="G" Goto set_offline_bigbox

if /i "%obj%"=="Q" Goto func_rune_shop
if /i "%obj%"=="W" Goto set_offline_monster_magnification
if /i "%obj%"=="E" Goto set_charstats_mode
if /i "%obj%"=="R" Goto set_exp_mode
if /i "%obj%"=="T" Goto set_cubemain_ex
if /i "%obj%"=="Y" Goto set_rw_nolimit
if /i "%obj%"=="U" Goto set_offline_exskill

if /i "%obj%"=="1" Goto set_offline_drop_up
if /i "%obj%"=="2" Goto set_offline_itemratio_up

if /i "%obj%"=="3" Goto set_all_sockets

if /i "%obj%"=="D1" Goto open_halbu_editor
if /i "%obj%"=="D2" Goto open_diablo_edit
if /i "%obj%"=="D3" Goto open_TZ_exe

if /i "%obj%"=="J1" Goto set_unify_gc_style
if /i "%obj%"=="J2" Goto set_unify_lc_style
if /i "%obj%"=="J3" Goto set_unify_sc_style

if /i "%obj%"=="BOX" Goto GameSelectShareBoxNumberMain
if /i "%obj%"=="M" Goto func_open_savepath


@echo.
@echo	  ��Ч���룬�뿴����� �����е������������룡
@echo.
pause
ping -n 1 127.1>nul 
goto OfflineGame_Main




REM ==============
REM ====���򲿷�====
REM ==============
:set_charstats_mode

set /p charstats_mode=<%charstats_mode_on%
if "%charstats_mode%"=="plus"  (
	@ echo.	 ���� ɫ ǿ �� ģ ʽ��	���롾E2��  �л� ��ԭ��״̬����������ʼװ���̡������ӱ����� �̡�����ȫ��ǿ����
	COPY /Y %charstats_pro% %charstats_file%
	@echo.pro>%charstats_mode_on%
	
) else if "%charstats_mode%"=="pro"  (
	@ echo.	 ���� ɫ ǿ �� ģ ʽ��	���롾E2��  �л� ��ԭ��״̬����������ʼװ���������ӱ����� �̡�����ȫ��ǿ����
	COPY /Y %charstats_ultra% %charstats_file%
	@echo.ultra>%charstats_mode_on%
	
) else if "%charstats_mode%"=="ultra"  (
	@ echo.	 ���� ɫ ǿ �� ģ ʽ��	���롾E2��  �л� ��ԭ��״̬����������ʼװ���������ӱ����� �̡�����ȫ��ǿ���̡�
	COPY /Y %charstats_default% %charstats_file%
	@echo.default>%charstats_mode_on%
	
) else (
	@ echo.	 ���� ɫ ǿ �� ģ ʽ��	���롾E2��  �л� ��ԭ��״̬�̡���������ʼװ���������ӱ����� �̡�����ȫ��ǿ����
	COPY /Y %charstats_plus% %charstats_file%
	@echo.plus>%charstats_mode_on%
	
)
goto GameStyleFunctionEnd

:set_SwapCheckSign
	if exist %SwapCheckSign% (
		del %d2r_layouts%\MDKMODWeaponSwapTiphd.json
		del %controller_layouts%\MDKMODWeaponSwapTiphd.json
	) else (
		@ echo.   ��%FuncName%�� OFF �� ON
		COPY /Y %d2r_layouts%\json_db\MDKMODWeaponSwapTiphd.json %SwapCheckSign%
		COPY /Y %controller_layouts%\MDKMODWeaponSwapTiphd.json.mdk %controller_layouts%\MDKMODWeaponSwapTiphd.json
	)
goto GameStyleFunctionEnd

:set_GameTextFile
	Call %BAT_FOLDER%\SetBnetFile.bat
	cd %SetterCurrentFolder%
goto GameStyleFunctionEnd

:GameSelectShareBoxNumberMain
Cls
@call :get_sharebox_num
@ echo.
@ echo.	 ��MDK MOD ���������л�ϵͳ�������ͣ� ver 20220925��
@ echo.  
@ echo.	 �ͻ� �� Z �� �������ء�MDK MOD��������������
@ echo.	 �ͻ� �� X �� �������ء�������ʾ���ι������ý���
@ echo.	 �ͻ� �� C �� �������ء�Ѫ����ɫ����Ϸ��Ч�����ý���
@ echo.	 �ͻ� �� V �� �������ء���ϷUI����빦�ܡ����ý���
@ echo.	 �ͻ� �� B �� �������ء��������ܡ����ý���
@ echo.  
call :color E4 "	 ͨ������£�D2R�Ĵ浵Ŀ¼Ϊ%%USERPROFILE%%\Saved Games\Diablo II Resurrected֮��"
@ echo.  
call :color E4 "	 �����Ŀ¼�����ڻ���������û�ж�дȨ��ʱ�����л�ϵͳ������ִ���"
@ echo.  
call :color E4 "	 �浵�в����ڹ��������ļ�ʱ���������Զ����ɹ�������Ӵ浵."
@ echo.  
@ echo.  
@ echo.	 ��ȡ�浵Ŀ¼Ϊ��%USERPROFILE%\Saved Games\Diablo II Resurrected
call :color EC "	 ��ǰʹ�õ��ǡ��� %c_save_sharebox_num% �š���������"
@ echo.
@ echo.	 ���л����Ӵ浵��1-9����	�����롾1-9�� �л� ���������Ӵ浵��
@ echo.	 ��ʾ���빲�����Ӵ浵����Ϊ[ SharedStashSoftCoreV2.d2i ]�������ֶ������л��򱸷���ο���

@ echo.
@ echo.
@ echo.	 �ͻ� �� M �� ����������Ϸ�浵Ŀ¼��
@ echo.	 �ͻ� �� Q �� �������˻���һ������ҳ�桿
@ echo.
@ echo.
set  obj=""
set /p obj= �������ֻ���ĸ���س�ִ�У�

if /i "%obj%"=="M" Goto func_open_savepath
if /i "%obj%"=="Z" Goto SetupMain
if /i "%obj%"=="X" Goto RuleSetup_Main
if /i "%obj%"=="C" Goto RuneSound_Main
if /i "%obj%"=="V" Goto GameStyle_Main
if /i "%obj%"=="B" Goto OfflineGame_Main
if /i "%obj%"=="Q" Goto GameStyle_Main
if /i "%obj%"=="0" set sharebox_choose_num=0& Goto func_change_sharebox
if /i "%obj%"=="1" set sharebox_choose_num=1& Goto func_change_sharebox
if /i "%obj%"=="2" set sharebox_choose_num=2& Goto func_change_sharebox
if /i "%obj%"=="3" set sharebox_choose_num=3& Goto func_change_sharebox
if /i "%obj%"=="4" set sharebox_choose_num=4& Goto func_change_sharebox
if /i "%obj%"=="5" set sharebox_choose_num=5& Goto func_change_sharebox
if /i "%obj%"=="6" set sharebox_choose_num=6& Goto func_change_sharebox
if /i "%obj%"=="7" set sharebox_choose_num=7& Goto func_change_sharebox
if /i "%obj%"=="8" set sharebox_choose_num=8& Goto func_change_sharebox
if /i "%obj%"=="9" set sharebox_choose_num=9& Goto func_change_sharebox
if /i "%obj%"=="0" set sharebox_choose_num=0& Goto func_change_sharebox
if /i "%obj%"=="B1" set sharebox_choose_num=1& Goto func_change_sharebox
if /i "%obj%"=="B2" set sharebox_choose_num=2& Goto func_change_sharebox
if /i "%obj%"=="B3" set sharebox_choose_num=3& Goto func_change_sharebox
if /i "%obj%"=="B4" set sharebox_choose_num=4& Goto func_change_sharebox
if /i "%obj%"=="B5" set sharebox_choose_num=5& Goto func_change_sharebox
if /i "%obj%"=="B6" set sharebox_choose_num=6& Goto func_change_sharebox
if /i "%obj%"=="B7" set sharebox_choose_num=7& Goto func_change_sharebox
if /i "%obj%"=="B8" set sharebox_choose_num=8& Goto func_change_sharebox
if /i "%obj%"=="B9" set sharebox_choose_num=9& Goto func_change_sharebox
@echo.
@echo	  ��Ч���룬�뿴����� �����е������������룡
@echo.
pause
ping -n 1 127.1>nul 
goto GameSelectShareBoxNumberMain

:open_halbu_editor
	%EXE_FOLDER%\HalbuEditor.exe
goto OfflineGame_Main
:open_diablo_edit
	%EXE_FOLDER%\DiabloEditV3.0.32.exe
goto OfflineGame_Main
:open_TZ_exe
	start http://www.d2tz.info/?l=zh-cn
goto OfflineGame_Main

:set_blood_mana_arua

if exist %blood_mana_red_aura% (
	@ echo.	 ����Ѫħ��Debuff��⡿���롾52�� �л���ԭ�桽������Ѫħ��Debuff�����ʾ�̡�
	ren %d2r_overlays%\common\blood_mana.json blood_mana_mdk.json
) else (
	@ echo.	 ����Ѫħ��Debuff��⡿���롾52�� �л���ԭ��̡�������Ѫħ��Debuff�����ʾ��
	ren %d2r_overlays%\common\blood_mana_mdk.json blood_mana.json
)

goto GameStyleFunctionEnd

:set_ass_kick_voice
if exist %ass_kick_voice_chunli_sign% (
	@ echo.	 ��*�̿�����������	���롾03�� �л���ԭ�桽�����ְ�3�����̡�������������
	copy /Y %ass_kick_no_voice%\kick*.flac %MDKMOD%\data\hd\global\sfx\skill\assassin
	@echo "x">%ass_kick_no_voice_sign%
	del %ass_kick_voice_chunli_sign%
	
) else if exist %ass_kick_no_voice_sign% (
	@ echo.	 ��*�̿�����������	���롾03�� �л���ԭ�桽�����ְ�3�����������������̡�
	del /Q %MDKMOD%\data\hd\global\sfx\skill\assassin\kick*.flac
	del %ass_kick_voice_chunli_sign%
	del %ass_kick_no_voice_sign%
	
) else (
	@ echo.	 ��*�̿�����������	���롾03�� �л���ԭ��̡������ְ�3������������������
	copy /Y %ass_kick_voice_chunli%\kick*.flac %MDKMOD%\data\hd\global\sfx\skill\assassin
	@echo "x">%ass_kick_voice_chunli_sign%
	del %ass_kick_no_voice_sign%
)
goto GameStyleFunctionEnd


:set_chain_light_effects
if exist %chain_light_shield_effects% (
@ echo.	 �������ɶ���Ч��	���롾51�� �л���ԭ�桽���������ɶ���Ч�̡�
ren %d2r_missiles%\chainlightningbolt.json chainlightningbolt_mdk.json
) else (
@ echo.	 �������ɶ���Ч��	���롾51�� �л���ԭ��̡����������ɶ���Ч��
ren %d2r_missiles%\chainlightningbolt_mdk.json chainlightningbolt.json
)

goto GameStyleFunctionEnd

:set_diablo_light_nova_effects
	if exist %diablo_light_nova_effects% (
	@ echo.	 ����ɫ��Ȧ��	���롾51�� �л���ԭ�桽������ɫ��Ȧ�̡�
	del %d2r_missiles%\electric_nova.json
	del %d2r_missiles%\lightningbolt.json
	del %d2r_missiles%\chainlightningbolt.json
	del %d2r_overlays%\common\lightning.json
	del %diablo_light_nova_effects%
	) else (
	@ echo.	 ����ɫ��Ȧ��	���롾51�� �л���ԭ��̡�������ɫ��Ȧ��
	copy /Y "%d2r_missiles%\red_lighting\electric_nova.json" "%d2r_missiles%\electric_nova.json"
	copy /Y "%d2r_missiles%\red_lighting\lightningbolt.json" "%d2r_missiles%\lightningbolt.json"
	copy /Y "%d2r_missiles%\red_lighting\chainlightningbolt.json" "%d2r_missiles%\chainlightningbolt.json"
	copy /Y "%d2r_missiles%\red_lighting\lightning.json" "%d2r_overlays%\common\lightning.json"
	@echo. "x">%diablo_light_nova_effects%
	)
goto GameStyleFunctionEnd

:set_blessedhammer_effect
	if exist %blessedhammer_effect% (
	@ echo.	 ��ף��֮����β��Ч��	���롾81��  �л���ԭ�桽����ף��֮������β��Ч �̡�
	ren %d2r_missiles%\blessedhammer.json blessedhammer_mdk.json
	) else (
	@ echo.	 ��ף��֮����β��Ч��	���롾81��  �л���ԭ��̡�����ף��֮������β��Ч��
	ren %d2r_missiles%\blessedhammer_mdk.json blessedhammer.json
	
	)
goto GameStyleFunctionEnd

:set_all_caidan_unique

	set /p caidan_unique_mode=<%caidan_unique_mode_on%
	if "%caidan_unique_mode%"=="normal" (
		@ echo.	 ��*���Ųʵ�װ�����䡿	���롾CD�� ���� ��ԭ��״̬�����������Ųʵ�װ������̡��������Ųʵ�װ�����䡽
		COPY /Y %caidan_unique_mode_caidan% %uniqueitems_file%
		@echo.caidan>%caidan_unique_mode_on%
		
	) else if "%caidan_unique_mode%"=="caidan" (
		@ echo.	 ��*���Ųʵ�װ�����䡿	���롾CD�� ���� ��ԭ��״̬�����������Ųʵ�װ�����䡽�������Ųʵ�װ������̡�
		COPY /Y %caidan_unique_mode_default% %uniqueitems_file%
		@echo.default>%caidan_unique_mode_on%
		
	) else (
		@ echo.	 ��*���Ųʵ�װ�����䡿	���롾CD�� ���� ��ԭ��״̬�̡����������Ųʵ�װ�����䡽�������Ųʵ�װ�����䡽
		COPY /Y %caidan_unique_mode_normal% %uniqueitems_file%
		@echo.normal>%caidan_unique_mode_on%
		
	)
goto GameStyleFunctionEnd


:set_cubemain_ex
	if exist %cubemain_ex%  (
	@ echo.	 ���� ���ָ�Ĭ�Ϻϳɹ�ʽ��
	ren %d2r_excel%\cubemain.txt cubemain_mdk.txt
	) else (
	@ echo.	 ���� �����ӵ����úϳɹ�ʽ��
	ren %d2r_excel%\cubemain_mdk.txt cubemain.txt
	)
goto GameStyleFunctionEnd

:set_automap_chest_sign
if not exist %automap_chest_sign% (
	@ echo.	 ���� ���ر�������ʾ��
	ren %d2r_excel%\objects.txt objects.txt.mdk
	ren %d2r_excel%\objects.txt.normal objects.txt
) else (
	@ echo.	  ���� ������������ʾ��
	ren %d2r_excel%\objects.txt objects.txt.normal
	ren %d2r_excel%\objects.txt.mdk objects.txt
)
goto GameStyleFunctionEnd

:set_automap_monster_sign
@ echo.	 ���� �����������ǡ�
if exist %automap_monster_mdk_sign% (
	@ echo.	  ��  ���롾Q���л�Ϊ����ţ��+Σ�չ���̡��������������+ţ+Σ�����������й��������������ʾ����
	copy /Y %d2r_excel%\monstats2.txt.mdkchaos %d2r_excel%\monstats2.txt
	del %automap_monster_mdk_sign%
	@echo. "">%automap_monster_mdkchaos_sign%
) else if exist %automap_monster_mdkchaos_sign% (
	@ echo.	  ��  ���롾Q���л�Ϊ����ţ��+Σ�չ�������������������+ţ+Σ�̡��������й��������������ʾ����
	copy /Y %d2r_excel%\monstats2.txt.all %d2r_excel%\monstats2.txt
	del %automap_monster_mdkchaos_sign%
	@echo. "">%automap_monster_all_sign%
) else if exist %automap_monster_all_sign% (
	@ echo.	  ��  ���롾Q���л�Ϊ����ţ��+Σ�չ�������������������+ţ+Σ�����������й���̡���������ʾ����
	del %d2r_excel%\monstats2.txt
	del %automap_monster_all_sign%
) else (
	@ echo.	  ��  ���롾Q���л�Ϊ����ţ��+Σ�չ�������������������+ţ+Σ�����������й��������������ʾ�̡�
	copy /Y %d2r_excel%\monstats2.txt.mdk %d2r_excel%\monstats2.txt
	@echo. "">%automap_monster_mdk_sign%
)
goto GameStyleFunctionEnd

:set_inven_top_icon
if exist %inven_top% (
	@ echo.	 ���� ���ر���Ʒ���Ϸ�ͼ�꡿
	ren %inven_top% inventory_icon_top_mdk
) else (
	@ echo.	 ���� ��������Ʒ���Ϸ�ͼ�꡿
	ren %global_image_folder%\ui\mdk\inventory_icon_top_mdk inventory_icon_top
)
goto GameStyleFunctionEnd

:set_inven_bottom_icon
if exist %inven_bottom% (
	@ echo.	 ���� ���ر���Ʒ���·�ͼ�꡿
	ren %inven_bottom% inventory_icon_bottom_mdk
) else (
	@ echo.	 ���� ��������Ʒ���·�ͼ�꡿
	ren %global_image_folder%\ui\mdk\inventory_icon_bottom_mdk inventory_icon_bottom
)
goto GameStyleFunctionEnd



:set_unify_gc_style
if exist %unify_gc_mahua_sign% (
	@ echo.	  ��  ���롾J1���л����ش����ͳһΪ��	����ͳһͼ���������黨�̡��������������۾��������۾�����������
	copy /Y %gc_guilian%.sprite %d2r_items_pic%\misc\charm\charm_large.sprite
	copy /Y %gc_guilian%.sprite %d2r_items_pic%\misc\charm\charm_large1.sprite
	copy /Y %gc_guilian%.sprite %d2r_items_pic%\misc\charm\charm_large2.sprite
	copy /Y %gc_guilian%.sprite %d2r_items_pic%\misc\charm\charm_large3.sprite
	copy /Y %gc_guilian%.lowend.sprite %d2r_items_pic%\misc\charm\charm_large.lowend.sprite
	copy /Y %gc_guilian%.lowend.sprite %d2r_items_pic%\misc\charm\charm_large1.lowend.sprite
	copy /Y %gc_guilian%.lowend.sprite %d2r_items_pic%\misc\charm\charm_large2.lowend.sprite
	copy /Y %gc_guilian%.lowend.sprite %d2r_items_pic%\misc\charm\charm_large3.lowend.sprite
	
	del %unify_gc_mahua_sign%
	del %unify_gc_eye_sign%
	del %unify_gc_eye_dark_sign%
	@ECHO.  "x">%unify_gc_guilian_sign%
) else if exist %unify_gc_guilian_sign% (
	@ echo.	  ��  ���롾J1���л����ش����ͳһΪ��	����ͳһͼ���������黨�����������̡����۾��������۾�����������
	copy /Y %gc_eye%.sprite %d2r_items_pic%\misc\charm\charm_large.sprite
	copy /Y %gc_eye%.sprite %d2r_items_pic%\misc\charm\charm_large1.sprite
	copy /Y %gc_eye%.sprite %d2r_items_pic%\misc\charm\charm_large2.sprite
	copy /Y %gc_eye%.sprite %d2r_items_pic%\misc\charm\charm_large3.sprite
	copy /Y %gc_eye%.lowend.sprite %d2r_items_pic%\misc\charm\charm_large.lowend.sprite
	copy /Y %gc_eye%.lowend.sprite %d2r_items_pic%\misc\charm\charm_large1.lowend.sprite
	copy /Y %gc_eye%.lowend.sprite %d2r_items_pic%\misc\charm\charm_large2.lowend.sprite
	copy /Y %gc_eye%.lowend.sprite %d2r_items_pic%\misc\charm\charm_large3.lowend.sprite
	
	del %unify_gc_mahua_sign%
	del %unify_gc_guilian_sign%
	del %unify_gc_eye_dark_sign%
	@ECHO.  "x">%unify_gc_eye_sign%
) else if exist %unify_gc_eye_sign% (
	@ echo.	  ��  ���롾J1���л����ش����ͳһΪ��	����ͳһͼ���������黨�����������������۾��̡����۾�����������
	copy /Y %gc_eye_dark%.sprite %d2r_items_pic%\misc\charm\charm_large.sprite
	copy /Y %gc_eye_dark%.sprite %d2r_items_pic%\misc\charm\charm_large1.sprite
	copy /Y %gc_eye_dark%.sprite %d2r_items_pic%\misc\charm\charm_large2.sprite
	copy /Y %gc_eye_dark%.sprite %d2r_items_pic%\misc\charm\charm_large3.sprite
	copy /Y %gc_eye_dark%.lowend.sprite %d2r_items_pic%\misc\charm\charm_large.lowend.sprite
	copy /Y %gc_eye_dark%.lowend.sprite %d2r_items_pic%\misc\charm\charm_large1.lowend.sprite
	copy /Y %gc_eye_dark%.lowend.sprite %d2r_items_pic%\misc\charm\charm_large2.lowend.sprite
	copy /Y %gc_eye_dark%.lowend.sprite %d2r_items_pic%\misc\charm\charm_large3.lowend.sprite
	
	del %unify_gc_mahua_sign%
	del %unify_gc_guilian_sign%
	del %unify_gc_eye_sign%
	@ECHO.  "x">%unify_gc_eye_dark_sign%
) else if exist %unify_gc_eye_dark_sign% (
	@ echo.	  ��  ���롾J1���л����ش����ͳһΪ��	����ͳһͼ���������黨�����������������۾��������۾��������̡�
	del %d2r_items_pic%\misc\charm\charm_large.sprite
	del %d2r_items_pic%\misc\charm\charm_large1.sprite
	del %d2r_items_pic%\misc\charm\charm_large2.sprite
	del %d2r_items_pic%\misc\charm\charm_large3.sprite
	del %d2r_items_pic%\misc\charm\charm_large.lowend.sprite
	del %d2r_items_pic%\misc\charm\charm_large1.lowend.sprite
	del %d2r_items_pic%\misc\charm\charm_large2.lowend.sprite
	del %d2r_items_pic%\misc\charm\charm_large3.lowend.sprite
	
	del %unify_gc_mahua_sign%
	del %unify_gc_guilian_sign%
	del %unify_gc_eye_dark_sign%
	del %unify_gc_guilian_sign%
) else (
	@ echo.	  ��  ���롾J1���л����ش����ͳһΪ��	����ͳһͼ���̡����黨�����������������۾��������۾�����������
	copy /Y %gc_mahua%.sprite %d2r_items_pic%\misc\charm\charm_large.sprite
	copy /Y %gc_mahua%.sprite %d2r_items_pic%\misc\charm\charm_large1.sprite
	copy /Y %gc_mahua%.sprite %d2r_items_pic%\misc\charm\charm_large2.sprite
	copy /Y %gc_mahua%.sprite %d2r_items_pic%\misc\charm\charm_large3.sprite
	copy /Y %gc_mahua%.lowend.sprite %d2r_items_pic%\misc\charm\charm_large.lowend.sprite
	copy /Y %gc_mahua%.lowend.sprite %d2r_items_pic%\misc\charm\charm_large1.lowend.sprite
	copy /Y %gc_mahua%.lowend.sprite %d2r_items_pic%\misc\charm\charm_large2.lowend.sprite
	copy /Y %gc_mahua%.lowend.sprite %d2r_items_pic%\misc\charm\charm_large3.lowend.sprite
	
	del %unify_gc_eye_sign%
	del %unify_gc_guilian_sign%
	del %unify_gc_eye_dark_sign%
	@ECHO.  "x">%unify_gc_mahua_sign%
)
goto GameStyleFunctionEnd

:set_unify_lc_style
if exist %unify_lc_lingpai_sign% (
	@ echo.	  ��  ���롾J2���л��������ͳһΪ��	����ͳһͼ�����������ơ̡���ţ�ǡ�������������
	copy /Y %lc_niujiao%.sprite %d2r_items_pic%\misc\charm\charm_medium.sprite
	copy /Y %lc_niujiao%.sprite %d2r_items_pic%\misc\charm\charm_medium1.sprite
	copy /Y %lc_niujiao%.sprite %d2r_items_pic%\misc\charm\charm_medium2.sprite
	copy /Y %lc_niujiao%.sprite %d2r_items_pic%\misc\charm\charm_medium3.sprite
	copy /Y %lc_niujiao%.lowend.sprite %d2r_items_pic%\misc\charm\charm_medium.lowend.sprite
	copy /Y %lc_niujiao%.lowend.sprite %d2r_items_pic%\misc\charm\charm_medium1.lowend.sprite
	copy /Y %lc_niujiao%.lowend.sprite %d2r_items_pic%\misc\charm\charm_medium2.lowend.sprite
	copy /Y %lc_niujiao%.lowend.sprite %d2r_items_pic%\misc\charm\charm_medium3.lowend.sprite
	
	del %unify_lc_lingpai_sign%
	del %unify_lc_fangta_sign%
	@ECHO.  "x">%unify_lc_niujiao_sign%
) else if exist %unify_lc_niujiao_sign% (
	@ echo.	  ��  ���롾J2���л��������ͳһΪ��	����ͳһͼ�����������ơ�����ţ�ǡ̡�����������
	copy /Y %lc_fangta%.sprite %d2r_items_pic%\misc\charm\charm_medium.sprite
	copy /Y %lc_fangta%.sprite %d2r_items_pic%\misc\charm\charm_medium1.sprite
	copy /Y %lc_fangta%.sprite %d2r_items_pic%\misc\charm\charm_medium2.sprite
	copy /Y %lc_fangta%.sprite %d2r_items_pic%\misc\charm\charm_medium3.sprite
	copy /Y %lc_fangta%.lowend.sprite %d2r_items_pic%\misc\charm\charm_medium.lowend.sprite
	copy /Y %lc_fangta%.lowend.sprite %d2r_items_pic%\misc\charm\charm_medium1.lowend.sprite
	copy /Y %lc_fangta%.lowend.sprite %d2r_items_pic%\misc\charm\charm_medium2.lowend.sprite
	copy /Y %lc_fangta%.lowend.sprite %d2r_items_pic%\misc\charm\charm_medium3.lowend.sprite
	
	del %unify_lc_lingpai_sign%
	del %unify_lc_niujiao_sign%
	@ECHO.  "x">%unify_lc_fangta_sign%
) else if exist %unify_lc_fangta_sign% (
	@ echo.	  ��  ���롾J2���л��������ͳһΪ��	����ͳһͼ�����������ơ�����ţ�ǡ����������̡�
	del %d2r_items_pic%\misc\charm\charm_medium.sprite
	del %d2r_items_pic%\misc\charm\charm_medium1.sprite
	del %d2r_items_pic%\misc\charm\charm_medium2.sprite
	del %d2r_items_pic%\misc\charm\charm_medium3.sprite
	del %d2r_items_pic%\misc\charm\charm_medium.lowend.sprite
	del %d2r_items_pic%\misc\charm\charm_medium1.lowend.sprite
	del %d2r_items_pic%\misc\charm\charm_medium2.lowend.sprite
	del %d2r_items_pic%\misc\charm\charm_medium3.lowend.sprite
	
	del %unify_lc_lingpai_sign%
	del %unify_lc_niujiao_sign%
	del %unify_lc_fangta_sign%
) else (
	@ echo.	  ��  ���롾J2���л��������ͳһΪ��	����ͳһͼ���̡������ơ�����ţ�ǡ�������������
	copy /Y %lc_lingpai%.sprite %d2r_items_pic%\misc\charm\charm_medium.sprite
	copy /Y %lc_lingpai%.sprite %d2r_items_pic%\misc\charm\charm_medium1.sprite
	copy /Y %lc_lingpai%.sprite %d2r_items_pic%\misc\charm\charm_medium2.sprite
	copy /Y %lc_lingpai%.sprite %d2r_items_pic%\misc\charm\charm_medium3.sprite
	copy /Y %lc_lingpai%.lowend.sprite %d2r_items_pic%\misc\charm\charm_medium.lowend.sprite
	copy /Y %lc_lingpai%.lowend.sprite %d2r_items_pic%\misc\charm\charm_medium1.lowend.sprite
	copy /Y %lc_lingpai%.lowend.sprite %d2r_items_pic%\misc\charm\charm_medium2.lowend.sprite
	copy /Y %lc_lingpai%.lowend.sprite %d2r_items_pic%\misc\charm\charm_medium3.lowend.sprite
	
	del %unify_lc_fangta_sign%
	del %unify_lc_niujiao_sign%
	@ECHO.  "x">%unify_lc_lingpai_sign%
)
goto GameStyleFunctionEnd

:set_unify_sc_style
if exist %unify_sc_xuanwo_sign% (
	@ echo.	  ��  ���롾J3���л���С���ͳһΪ��	����ͳһͼ�����������С̡���Բ����������Բ��������Բ����������
	copy /Y %sc_yuanfu%.sprite %d2r_items_pic%\misc\charm\charm_small.sprite
	copy /Y %sc_yuanfu%.sprite %d2r_items_pic%\misc\charm\charm_small1.sprite
	copy /Y %sc_yuanfu%.sprite %d2r_items_pic%\misc\charm\charm_small2.sprite
	copy /Y %sc_yuanfu%.sprite %d2r_items_pic%\misc\charm\charm_small3.sprite
	copy /Y %sc_yuanfu%.lowend.sprite %d2r_items_pic%\misc\charm\charm_small.lowend.sprite
	copy /Y %sc_yuanfu%.lowend.sprite %d2r_items_pic%\misc\charm\charm_small1.lowend.sprite
	copy /Y %sc_yuanfu%.lowend.sprite %d2r_items_pic%\misc\charm\charm_small2.lowend.sprite
	copy /Y %sc_yuanfu%.lowend.sprite %d2r_items_pic%\misc\charm\charm_small3.lowend.sprite
	
	del %unify_sc_xuanwo_sign%
	del %unify_sc_tuoyuan_sign%
	del %unify_sc_tuoyuan_dark_sign%
	@ECHO.  "x">%unify_sc_yuanfu_sign%
) else if exist %unify_sc_yuanfu_sign% (
	@ echo.	  ��  ���롾J3���л���С���ͳһΪ��	����ͳһͼ�����������С�����Բ���̡�����Բ��������Բ����������
	copy /Y %sc_tuoyuan%.sprite %d2r_items_pic%\misc\charm\charm_small.sprite
	copy /Y %sc_tuoyuan%.sprite %d2r_items_pic%\misc\charm\charm_small1.sprite
	copy /Y %sc_tuoyuan%.sprite %d2r_items_pic%\misc\charm\charm_small2.sprite
	copy /Y %sc_tuoyuan%.sprite %d2r_items_pic%\misc\charm\charm_small3.sprite
	copy /Y %sc_tuoyuan%.lowend.sprite %d2r_items_pic%\misc\charm\charm_small.lowend.sprite
	copy /Y %sc_tuoyuan%.lowend.sprite %d2r_items_pic%\misc\charm\charm_small1.lowend.sprite
	copy /Y %sc_tuoyuan%.lowend.sprite %d2r_items_pic%\misc\charm\charm_small2.lowend.sprite
	copy /Y %sc_tuoyuan%.lowend.sprite %d2r_items_pic%\misc\charm\charm_small3.lowend.sprite
	
	del %unify_sc_xuanwo_sign%
	del %unify_sc_yuanfu_sign%
	del %unify_sc_tuoyuan_dark_sign%
	@ECHO.  "x">%unify_sc_tuoyuan_sign%
) else if exist %unify_sc_tuoyuan_sign% (
	@ echo.	  ��  ���롾J3���л���С���ͳһΪ��	����ͳһͼ�����������С�����Բ����������Բ�̡�����Բ����������
	copy /Y %sc_tuoyuan_dark%.sprite %d2r_items_pic%\misc\charm\charm_small.sprite
	copy /Y %sc_tuoyuan_dark%.sprite %d2r_items_pic%\misc\charm\charm_small1.sprite
	copy /Y %sc_tuoyuan_dark%.sprite %d2r_items_pic%\misc\charm\charm_small2.sprite
	copy /Y %sc_tuoyuan_dark%.sprite %d2r_items_pic%\misc\charm\charm_small3.sprite
	copy /Y %sc_tuoyuan_dark%.lowend.sprite %d2r_items_pic%\misc\charm\charm_small.lowend.sprite
	copy /Y %sc_tuoyuan_dark%.lowend.sprite %d2r_items_pic%\misc\charm\charm_small1.lowend.sprite
	copy /Y %sc_tuoyuan_dark%.lowend.sprite %d2r_items_pic%\misc\charm\charm_small2.lowend.sprite
	copy /Y %sc_tuoyuan_dark%.lowend.sprite %d2r_items_pic%\misc\charm\charm_small3.lowend.sprite
	
	del %unify_sc_xuanwo_sign%
	del %unify_sc_tuoyuan_sign%
	del %unify_sc_yuanfu_sign%
	@ECHO.  "x">%unify_sc_tuoyuan_dark_sign%
) else if exist %unify_sc_tuoyuan_dark_sign% (
	@ echo.	  ��  ���롾J3���л���С���ͳһΪ��	����ͳһͼ�����������С�����Բ����������Բ��������Բ�������̡�
	del %d2r_items_pic%\misc\charm\charm_small.sprite
	del %d2r_items_pic%\misc\charm\charm_small1.sprite
	del %d2r_items_pic%\misc\charm\charm_small2.sprite
	del %d2r_items_pic%\misc\charm\charm_small3.sprite
	del %d2r_items_pic%\misc\charm\charm_small.lowend.sprite
	del %d2r_items_pic%\misc\charm\charm_small1.lowend.sprite
	del %d2r_items_pic%\misc\charm\charm_small2.lowend.sprite
	del %d2r_items_pic%\misc\charm\charm_small3.lowend.sprite
	
	del %unify_sc_xuanwo_sign%
	del %unify_sc_tuoyuan_sign%
	del %unify_sc_tuoyuan_dark_sign%
	del %unify_sc_yuanfu_sign%
) else (
	@ echo.	  ��  ���롾J3���л���С���ͳһΪ��	����ͳһͼ���̡������С�����Բ����������Բ��������Բ����������
	copy /Y %sc_xuanwo%.sprite %d2r_items_pic%\misc\charm\charm_small.sprite
	copy /Y %sc_xuanwo%.sprite %d2r_items_pic%\misc\charm\charm_small1.sprite
	copy /Y %sc_xuanwo%.sprite %d2r_items_pic%\misc\charm\charm_small2.sprite
	copy /Y %sc_xuanwo%.sprite %d2r_items_pic%\misc\charm\charm_small3.sprite
	copy /Y %sc_xuanwo%.lowend.sprite %d2r_items_pic%\misc\charm\charm_small.lowend.sprite
	copy /Y %sc_xuanwo%.lowend.sprite %d2r_items_pic%\misc\charm\charm_small1.lowend.sprite
	copy /Y %sc_xuanwo%.lowend.sprite %d2r_items_pic%\misc\charm\charm_small2.lowend.sprite
	copy /Y %sc_xuanwo%.lowend.sprite %d2r_items_pic%\misc\charm\charm_small3.lowend.sprite
	
	del %unify_sc_yuanfu_sign%
	del %unify_sc_tuoyuan_sign%
	del %unify_sc_tuoyuan_dark_sign%
	@ECHO.  "x">%unify_sc_xuanwo_sign%
)
goto GameStyleFunctionEnd

:set_tz_mode
	set /p tz_mode=<%tz_mode_setup%
	if "%tz_mode%"=="normal" (
		@ echo.	 ��*а��ش���չģʽ��	���롾TZ�� ���á�ԭ��״̬�̡�������������Χ��������ѡа������
		COPY /Y %tz_mode_more% %tz_mode_file%
		@echo.more>%tz_mode_setup%
	) else if "%tz_mode%"=="more" (
		@ echo.	 ��*а��ش���չģʽ��	���롾TZ�� ���á�ԭ��״̬��������������Χ�̡�������ѡа������
		COPY /Y %tz_mode_best% %tz_mode_file%
		@echo.best>%tz_mode_setup%
	) else if "%tz_mode%"=="best" (
		@ echo.	 ��*а��ش���չģʽ��	���롾TZ�� ���á�ԭ��״̬��������������Χ��������ѡа������̡�
		DEL %tz_mode_file%
		@echo.normal>%tz_mode_setup%
	) else (
		@ echo.	 ��*а��ش���չģʽ��	���롾TZ�� ���á�δ֪״̬��������������������Χ��
		COPY /Y %tz_mode_more% %tz_mode_file%
		@echo.more>%tz_mode_setup%
	)
Goto GameStyleFunctionEnd

:set_a3mon_effects
if exist %light_a3mon_effects% (
	@ echo.	 ���� ���رչ��޴���ħ����Ч��
	ren %d2r_missiles%\blowdart.json blowdart_mdk.json
	ren %d2r_missiles%\spike_fiend_missle.json spike_fiend_missle_mdk.json
) else (
@ echo.	 ���� ���������޴���ħ����Ч��
	ren %d2r_missiles%\blowdart_mdk.json blowdart.json
	ren %d2r_missiles%\spike_fiend_missle_mdk.json spike_fiend_missle.json
)
goto GameStyleFunctionEnd

:set_axe_effects
if exist %light_axe_effects% (
	@ echo.	 ���� ���رշɸ����ɵ���ħ����Ч��
	ren %d2r_missiles%\balanced_axe_missile.json balanced_axe_missile_mdk.json
	ren %d2r_missiles%\balanced_knife_missile.json balanced_knife_missile_mdk.json
	ren %d2r_missiles%\missile_dagger.json missile_dagger_mdk.json
	ren %d2r_missiles%\missile_hand_axe.json missile_hand_axe_mdk.json
) else (
@ echo.	 ���� �������ɸ����ɵ���ħ����Ч��
	ren %d2r_missiles%\balanced_axe_missile_mdk.json balanced_axe_missile.json
	ren %d2r_missiles%\balanced_knife_missile_mdk.json balanced_knife_missile.json
	ren %d2r_missiles%\missile_dagger_mdk.json missile_dagger.json
	ren %d2r_missiles%\missile_hand_axe_mdk.json missile_hand_axe.json
)
goto GameStyleFunctionEnd

:set_lightjavelin_effects
if exist %light_javelin_effects% (
	@ echo.	 ���� ���ر�Ͷ����ǹ��ħ����Ч��
	ren %d2r_missiles%\javelin.json javelin_mdk.json
	ren %d2r_missiles%\glaive.json glaive_mdk.json
	ren %d2r_missiles%\maiden_javelin_missile.json maiden_javelin_missile_mdk.json
	ren %d2r_missiles%\short_spear_missile.json short_spear_missile_mdk.json
	ren %d2r_missiles%\throwing_spear_missile.json throwing_spear_missile_mdk.json
) else (
	@ echo.	 ���� ������Ͷ����ǹ��ħ����Ч��
	ren %d2r_missiles%\javelin_mdk.json javelin.json
	ren %d2r_missiles%\glaive_mdk.json glaive.json
	ren %d2r_missiles%\maiden_javelin_missile_mdk.json maiden_javelin_missile.json
	ren %d2r_missiles%\short_spear_missile_mdk.json short_spear_missile.json
	ren %d2r_missiles%\throwing_spear_missile_mdk.json throwing_spear_missile.json 
)
goto GameStyleFunctionEnd


:set_diff_btn_tip
if exist %diff_btn_tip% (
@ echo.	 ��ǰ״̬��ѡ����Ϸ�Ѷ�ʱ��ʾ����ݼ���ʾ�� �̡�	���롾K�� ���� ���رտ�ݼ���ʾ��
ren %d2r_layouts%\characterdifficultymodalhd.json characterdifficultymodalhd_mdk.json
) else (
@ echo.	 ��ǰ״̬��ѡ����Ϸ�Ѷ�ʱ��ʾ����ݼ���ʾ�� ����	���롾K�� ���� ��������ݼ���ʾ��
ren %d2r_layouts%\characterdifficultymodalhd_mdk.json characterdifficultymodalhd.json
)
goto GameStyleFunctionEnd

:set_offline_drop_up

	set /p tc_mode=<%TC_mode_on%
	if "%tc_mode%"=="normal"  (
		@ echo.	 ����  ��  ��  �ӡ�	���롾Y��  �л� ��ԭ��״̬�������������̡������������������UP����������+�����
		COPY /Y %TC_nomisc% %TC_FILE%
		@echo.nomisc>%TC_mode_on%
		
	) else if "%tc_mode%"=="nomisc"  (
		@ echo.	 ����  ��  ��  �ӡ�	���롾Y��  �л� ��ԭ��״̬������������䡽����������̡���������UP����������+�����
		COPY /Y %TC_tcup% %TC_FILE%
		@echo.tcup>%TC_mode_on%
		
	) else if "%tc_mode%"=="tcup"  (
		@ echo.	 ����  ��  ��  �ӡ�	���롾Y��  �л� ��ԭ��״̬������������䡽�����������������UP�̡���������+�����
		COPY /Y %TC_allup% %TC_FILE%
		@echo.allup>%TC_mode_on%
		
	) else if "%tc_mode%"=="allup"  (
		@ echo.	 ����  ��  ��  �ӡ�	���롾Y��  �л� ��ԭ��״̬������������䡽�����������������UP����������+������̡�
		COPY /Y %TC_default% %TC_FILE%
		@echo.default>%TC_mode_on%
		
	) else (
		@ echo.	 ����  ��  ��  �ӡ�	���롾Y��  �л� ��ԭ��״̬�̡�����������䡽�����������������UP����������+�����
		COPY /Y %TC_normal% %TC_FILE%
		@echo.normal>%TC_mode_on%
		
	)

goto GameStyleFunctionEnd

:set_offline_itemratio_up
if exist %itemratio_up%  (
@ echo.	 ��Ⱦɫ������ �� ��	���롾H�� ���� ���ر�Ⱦɫ�����ӡ�
ren %d2r_excel%\itemratio.txt itemratio.txt.mdk
) else (
@ echo.	 ��Ⱦɫ������ �� ��	���롾H�� ���� ������Ⱦɫ�����ӡ�
ren %d2r_excel%\itemratio.txt.mdk itemratio.txt
)

goto GameStyleFunctionEnd


:set_map_tips
if not exist %map_tips% (
@ echo.	 ��ǰ״̬����ͼ������ʾ����ͼ�ȼ���������������ʾ���� ���� ������ʾ��ͼ�ȼ���
ren %d2r_strings%\levels.json levels_tips.json
ren %d2r_strings%\levels_lv.json levels.json
) else if not exist %map_lv% (
@ echo.	 ��ǰ״̬����ͼ������ʾ����ͼ�ȼ��������� ���رյ�ͼ��Ϣ��ʾ��
ren %d2r_strings%\levels.json levels_lv.json
ren %d2r_strings%\levels_nolv.json levels.json
) else (
@ echo.	 ��ǰ״̬����ͼ������ʾ������ʾ�κ���Ϣ�������� ��������ͼ��Ϣ��ʾ��
ren %d2r_strings%\levels.json levels_nolv.json
ren %d2r_strings%\levels_tips.json levels.json
)
goto GameStyleFunctionEnd


:set_hire_nickname
	if exist %hire_nickname% (
		@ echo.	 ��ǰ״̬���Ͽ������й⻷�������ʾ �̡�	���롾O�� ���� ���رչ�����ʾ��
		del %hire_nickname%
	) else (
		@ echo.	 ��ǰ״̬���Ͽ������й⻷�������ʾ ����	���롾O�� ���� ������������ʾ��
		copy /Y %hire_nickname%.on %hire_nickname%
	)
goto GameStyleFunctionEnd

:set_cain_light
if exist %cain_light% (
@ echo.	 ��ǰ״̬���Ͽ������й⻷�������ʾ �̡�	���롾O�� ���� ���رչ�����ʾ��

ren %MDKMOD%\data\hd\character\npc npc_mdk

) else (
@ echo.	 ��ǰ״̬���Ͽ������й⻷�������ʾ ����	���롾O�� ���� ������������ʾ��

ren %MDKMOD%\data\hd\character\npc_mdk npc

)
goto GameStyleFunctionEnd


:set_sor_es_aura
if exist %sor_es_aura% (
@ echo.	 ���� ���ָ�ԭ����ʽ��
ren %sor_es_aura% energyshield_mdk.json
) else (
@ echo.	 ���� ��������Ч��ʾ��
ren %MDKMOD%\data\hd\overlays\sorceress\energyshield_mdk.json energyshield.json
)

goto GameStyleFunctionEnd

:set_torch_fire_effect

if exist %torch_fire% (
@ echo.	 ���� ���ָ�ԭ����Ч��
del %d2r_missiles%\diabwall.json
del %d2r_missiles%\diabwallmaker.json
) else (
@ echo.	 ���� ���رջ�����Ч��
del %d2r_missiles%\diabwall.json
del %d2r_missiles%\diabwallmaker.json
copy /Y %d2r_missiles%\torchfire\diabwall.json %d2r_missiles%\diabwall.json
copy /Y %d2r_missiles%\torchfire\diabwallmaker.json %d2r_missiles%\diabwallmaker.json
)

goto GameStyleFunctionEnd

:input_sharebox_num
@ECHO.  
@ECHO.  ����ѡ��Ĺ���浵���
set  sharebox_choose_num=""
set /p sharebox_choose_num= ������Ҫ��ȡ�Ĵ湲�����ӵ���ţ�0-9����
if /i "%sharebox_choose_num%"=="0" Goto func_change_sharebox
if /i "%sharebox_choose_num%"=="1" Goto func_change_sharebox
if /i "%sharebox_choose_num%"=="2" Goto func_change_sharebox
if /i "%sharebox_choose_num%"=="3" Goto func_change_sharebox
if /i "%sharebox_choose_num%"=="4" Goto func_change_sharebox
if /i "%sharebox_choose_num%"=="5" Goto func_change_sharebox
if /i "%sharebox_choose_num%"=="6" Goto func_change_sharebox
if /i "%sharebox_choose_num%"=="7" Goto func_change_sharebox
if /i "%sharebox_choose_num%"=="8" Goto func_change_sharebox
if /i "%sharebox_choose_num%"=="9" Goto func_change_sharebox
@echo.
@echo	  ��Ч���룬�����빲�����ӵĴ浵��ţ�0 - 9����
@echo	  �������ع���ѡ����档
@echo.
pause
ping -n 1 127.1>nul 
goto GameSelectShareBoxNumberMain

:get_sharebox_num
	REM �ж��Ƿ���ڱ���ļ�
	if not exist "%c_save_sign%" (
		copy /Y "%box_current%" "%d2r_save%\SharedStashSoftCoreV2_0.d2i"
		@ECHO.0>"%c_save_sign%"
	)
	REM ����1-9�ж��Ƿ���ڱ������Ӵ浵
	for /L %%i in (1,1,9) do (
		if not exist "%d2r_save%\SharedStashSoftCoreV2_%%~i.d2i" (
			copy /Y %MDKMOD%\SharedStashSoftCoreV2_7box.d2i "%d2r_save%\SharedStashSoftCoreV2_%%~i.d2i"
		)
	)
	REM ��ȡ��־�ļ���һ�����ݸ�ֵ
	for /f %%i in (%c_save_sign%) do (
		set c_save_sharebox_num=%%i
		Goto :eof
	)
Goto :eof

:func_change_sharebox

CLS
@echo.
@echo.���л��������Ӵ浵����ǿ�ƹر�D2R��Ϸ�����ᶪʧδ�������Ϸ���ȡ���
@echo.��������ֶ��浵���ٽ����л���
@echo.
@echo.˵�����������Ӵ浵����Ϸ�����п��Խ����滻������Ϸֻ����������ʱ���ع������Ӵ浵��
@echo.���������Ա���ǿ�ƹر���Ϸ����ʹ���л���Ч��
@echo.
@echo.�����رհ���2���ư����Ϸ���̣�������ر���Ϸ��������ֱ�ӹر���������
@echo.
pause

@echo.���ݵ�ǰ�浵
copy /Y "%box_current%" "%box_current_backup%"
@echo.��ȡ�浵���
set c_save_sharebox_num=NULL
call :get_sharebox_num
set choose_sharebox=%d2r_save%\SharedStashSoftCoreV2_%sharebox_choose_num%.d2i
set current_sharebox=%d2r_save%\SharedStashSoftCoreV2_%c_save_sharebox_num%.d2i
@echo.��ǰ�浵���c_save_sharebox_num=%c_save_sharebox_num%
@echo.ѡ��Ĵ浵���sharebox_choose_num=%sharebox_choose_num%
@echo.��ǰ�浵box_current=%box_current%
@echo.�浵���ݵ�ַbox_current_backup=%box_current_backup%
@echo.ѡ��Ĵ浵��ַchoose_sharebox=%choose_sharebox%
@echo.��ǰ�浵�����ַcurrent_sharebox=%current_sharebox%
@echo.

REM echo on
@echo.�رհ�����Ϸ
taskkill /f /t /im D2R.exe
@echo.��ǰ�浵������λ
REM @echo.copy /Y "%box_current%" "%box_current_backup%"
copy /Y "%box_current%" "%box_current_backup%"
@echo.��ǰ�浵������λ
REM @echo.copy /Y "%box_current%" "%current_sharebox%"
copy /Y "%box_current%" "%current_sharebox%"
@echo.����ѡ��ı�Ŵ浵���ǵ�ǰ�浵
REM @echo.copy /Y "%choose_sharebox%" "%box_current%"
copy /Y "%choose_sharebox%" "%box_current%"
@echo.���ɱ���ļ�
@ECHO.%sharebox_choose_num%>"%c_save_sign%"
goto GameSelectShareBoxNumberMain


:func_open_savepath
set d2r_save=%USERPROFILE%\Saved Games\Diablo II Resurrected
echo.USERPROFILE=%USERPROFILE%
echo.d2r_save=%d2r_save%
REM explorer.exe !D2R_save_folder!
explorer.exe "%d2r_save%"
if "%CurrentMenu%"=="main" goto SetupMain
goto GameStyleFunctionEnd



:set_offline_fullhire
	if exist %offline_fullhire_on%  (
		@ echo.	 ���� ���ر�ȫװ��Ӷ����
		Copy /Y %layouts_folder%\fullhire\hirelinginventorypanelhd_normal.json 		%layouts_folder%\hirelinginventorypanelhd.json
		del	%controller_layouts%\hirelinginventorypanelhd.json
		del	%controller_layouts%\hiremenupanelhd.json
		del %offline_fullhire_on%
	) else (
		@ echo.	 ���� ������ȫװ��Ӷ����
		Copy /Y %layouts_folder%\fullhire\hirelinginventorypanelhd_full.json 		%layouts_folder%\hirelinginventorypanelhd.json
		Copy /Y %controller_layouts%\fullhire\hirelinginventorypanelhd_full.json 	%controller_layouts%\hirelinginventorypanelhd.json
		Copy /Y %controller_layouts%\fullhire\hiremenupanelhd_full.json 			%controller_layouts%\hiremenupanelhd.json
		@echo."x">%offline_fullhire_on%
	)
	@ echo.	 ���á�itemtypes��
	CALL :check_and_get_itemtypes_file
goto GameStyleFunctionEnd

:set_all_sockets
	if not exist %all_sockets%  (
		@ echo.	 ���� ���ָ�ԭ�治�ܴ��״̬��
		@ echo.	 ���� ��armor��
		ren %d2r_excel%\armor.txt armor_allsock.txt
		ren %d2r_excel%\armor_nosock.txt armor.txt

	) else (
		@ echo.	  ���� ����������װ����ס�		
		@ echo.	 ���� ��armor��
		ren %d2r_excel%\armor.txt armor_nosock.txt
		ren %d2r_excel%\armor_allsock.txt armor.txt
	)
	@ echo.	 ���á���Ҫ��׵�itemtype��
	CALL :check_and_get_itemtypes_file

Goto GameStyleFunctionEnd

:set_offline_bigbox

	set /p bigbox_mode=<%offline_bigbox%
	if "%bigbox_mode%"=="all"  (
		@ echo.	 ��������+Ӷ��ȫ��װ��	���롾G��  �л� ��ԭ��״̬������������+��+�����̡�����������+�С������������ӡ�
		@ echo.	 ���� ������ ������+�С�
		
		@ echo.  ����txt�ļ���
		Copy /Y %d2r_excel%\bigbox\inventory_bigbox_stashbox.txt %d2r_excel%\inventory.txt
		
		@ echo.  ����bank json�ļ���
		Copy /Y %layouts_folder%\bigbox\bankexpansionlayouthd_bigbox.json					%layouts_folder%\bankexpansionlayouthd.json
		Copy /Y %layouts_folder%\bigbox\bankoriginallayouthd_bigbox.json					%layouts_folder%\bankoriginallayouthd.json
		Copy /Y %controller_layouts%\bigbox\playerinventoryexpansionlayouthd_bigbox.json	%controller_layouts%\playerinventoryexpansionlayouthd.json
		
		@ echo.  ����box json�ļ���
		Copy /Y %layouts_folder%\bigbox\horadriccubelayouthd_bigbox.json 		%layouts_folder%\horadriccubelayouthd.json
		Copy /Y %controller_layouts%\bigbox\horadriccubelayouthd_bigbox.json	%controller_layouts%\horadriccubelayouthd.json
		
		@ echo.  ����inventory json�ļ���
		Copy /Y %layouts_folder%\bigbox\playerinventoryexpansionlayouthd_normal.json 	%layouts_folder%\playerinventoryexpansionlayouthd.json
		Copy /Y %layouts_folder%\bigbox\playerinventoryoriginallayouthd_normal.json 		%layouts_folder%\playerinventoryoriginallayouthd.json
		del %controller_layouts%\bankexpansionlayouthd.json
		
		@ echo.  �����±�־�ļ�
		@echo.stash+box>%offline_bigbox%
	) else if "%bigbox_mode%"=="stash+box"  (
		@ echo.	 ��������+Ӷ��ȫ��װ��	���롾G��  �л� ��ԭ��״̬������������+��+����������������+�С̡������������ӡ�
		@ echo.	 ���� ������ �����ӡ�
		
		@ echo.  ����txt�ļ���
		Copy /Y %d2r_excel%\bigbox\inventory_bigbox_stash.txt %d2r_excel%\inventory.txt
		
		@ echo.  ����bank json�ļ���
		Copy /Y %layouts_folder%\bigbox\bankexpansionlayouthd_bigbox.json					%layouts_folder%\bankexpansionlayouthd.json
		Copy /Y %layouts_folder%\bigbox\bankoriginallayouthd_bigbox.json					%layouts_folder%\bankoriginallayouthd.json
		Copy /Y %controller_layouts%\bigbox\playerinventoryexpansionlayouthd_bigbox.json	%controller_layouts%\playerinventoryexpansionlayouthd.json
		
		@ echo.  ����box json�ļ���
		Copy /Y %layouts_folder%\bigbox\horadriccubelayouthd_normal.json 		%layouts_folder%\horadriccubelayouthd.json
		del %controller_layouts%\horadriccubelayouthd.json
		
		@ echo.  ����inventory json�ļ���
		Copy /Y %layouts_folder%\bigbox\playerinventoryexpansionlayouthd_normal.json 	%layouts_folder%\playerinventoryexpansionlayouthd.json
		Copy /Y %layouts_folder%\bigbox\playerinventoryoriginallayouthd_normal.json 		%layouts_folder%\playerinventoryoriginallayouthd.json
		del %controller_layouts%\bankexpansionlayouthd.json
		
		@ echo.  �����±�־�ļ�
		@echo.stash>%offline_bigbox%
	) else if "%bigbox_mode%"=="stash"  (
		@ echo.	 ��������+Ӷ��ȫ��װ��	���롾G��  �л� ��ԭ��״̬������������+��+����������������+�С������������ӡ̡�
		@ echo.	 ���� ���ر� �����ӡ�
		@ echo.  ����txt�ļ���
		Copy /Y %d2r_excel%\bigbox\inventory_normal.txt %d2r_excel%\inventory.txt
		
		@ echo.  ����bank json�ļ���
		Copy /Y %layouts_folder%\bigbox\bankexpansionlayouthd_normal.json					%layouts_folder%\bankexpansionlayouthd.json
		Copy /Y %layouts_folder%\bigbox\bankoriginallayouthd_normal.json					%layouts_folder%\bankoriginallayouthd.json
		Copy /Y %controller_layouts%\bigbox\playerinventoryexpansionlayouthd_normal.json	%controller_layouts%\playerinventoryexpansionlayouthd.json
		
		@ echo.  ����box json�ļ���
		Copy /Y %layouts_folder%\bigbox\horadriccubelayouthd_normal.json 		%layouts_folder%\horadriccubelayouthd.json
		del %controller_layouts%\horadriccubelayouthd.json
		
		@ echo.  ����inventory json�ļ���
		Copy /Y %layouts_folder%\bigbox\playerinventoryexpansionlayouthd_normal.json 	%layouts_folder%\playerinventoryexpansionlayouthd.json
		Copy /Y %layouts_folder%\bigbox\playerinventoryoriginallayouthd_normal.json 		%layouts_folder%\playerinventoryoriginallayouthd.json
		del %controller_layouts%\bankexpansionlayouthd.json
		
		@ echo.  �����±�־�ļ�
		@echo.off>%offline_bigbox%
	) else (
		@ echo.	 ��������+Ӷ��ȫ��װ��	���롾G��  �л� ��ԭ��״̬�̡�����������+��+����������������+�С������������ӡ�
		@ echo.	 ���� ������ ������+��+������
		@ echo.  ���ݵ�ǰ�ļ���
		Copy /Y %layouts_folder%\horadriccubelayouthd.json 				%layouts_folder%\bigbox\horadriccubelayouthd_exchange.json
		Copy /Y %layouts_folder%\playerinventoryexpansionlayouthd.json 	%layouts_folder%\bigbox\playerinventoryexpansionlayouthd_exchange.json
		Copy /Y %layouts_folder%\playerinventoryoriginallayouthd.json 	%layouts_folder%\bigbox\playerinventoryoriginallayouthd_exchange.json
		
		@ echo.  ����txt�ļ���
		Copy /Y %d2r_excel%\bigbox\inventory_bigbox_all.txt %d2r_excel%\inventory.txt
		
		@ echo.  ����bank json�ļ���
		Copy /Y %layouts_folder%\bigbox\bankexpansionlayouthd_bigbox.json					%layouts_folder%\bankexpansionlayouthd.json
		Copy /Y %layouts_folder%\bigbox\bankoriginallayouthd_bigbox.json					%layouts_folder%\bankoriginallayouthd.json
		Copy /Y %controller_layouts%\bigbox\playerinventoryexpansionlayouthd_bigbox.json	%controller_layouts%\playerinventoryexpansionlayouthd.json
		
		@ echo.  ����box json�ļ���
		Copy /Y %layouts_folder%\bigbox\horadriccubelayouthd_bigbox.json 		%layouts_folder%\horadriccubelayouthd.json
		Copy /Y %controller_layouts%\bigbox\horadriccubelayouthd_bigbox.json	%controller_layouts%\horadriccubelayouthd.json
		
		@ echo.  ����inventory json�ļ���
		Copy /Y %layouts_folder%\bigbox\playerinventoryexpansionlayouthd_bigbox.json 	%layouts_folder%\playerinventoryexpansionlayouthd.json
		Copy /Y %layouts_folder%\bigbox\playerinventoryoriginallayouthd_bigbox.json 		%layouts_folder%\playerinventoryoriginallayouthd.json
		Copy /Y %controller_layouts%\bigbox\bankexpansionlayouthd_bigbox.json			%controller_layouts%\bankexpansionlayouthd.json
		
		@ echo.  �����±�־�ļ�
		@echo.all>%offline_bigbox%
	)
goto GameStyleFunctionEnd

:set_exp_mode
	set /p exp_mode=<%exp_mode_on%
	if "%exp_mode%"=="20"  (
		@ echo.	 ���� �� ǿ �� ģ ʽ��	���롾E��  �л� ��ԭ��״̬������20������̡�����һ��99��ģʽ��
		COPY /Y %exp_mode_99% %exp_file%
		@echo.99>%exp_mode_on%
		
	) else if "%exp_mode%"=="99"  (
		@ echo.	 ���� �� ǿ �� ģ ʽ��	���롾E��  �л� ��ԭ��״̬������20�����顽����һ��99��ģʽ�̡�
		COPY /Y %exp_mode_default% %exp_file%
		@echo.default>%exp_mode_on%
		
	) else (
		@ echo.	 ���� �� ǿ �� ģ ʽ��	���롾E��  �л� ��ԭ��״̬�̡�����20�����顽����һ��99��ģʽ��
		COPY /Y %exp_mode_20% %exp_file%
		@echo.20>%exp_mode_on%
		
	)
goto GameStyleFunctionEnd


:set_offline_exskill

set /p skill_mode=<%skills_mode_on%
	if "%skill_mode%"=="normal"  (
		@ echo.	 ����  ��  ��  ǿ��	���롾T��  �л� ��ԭ�漼�ܡ��������޼�ʸ��ǹ+�̿�3���Ӿ����̡������������ܼ�ǿ��
		COPY /Y %skills_plus% %skills_file%
		COPY /Y %missiles_plus% %missiles_file%
		@echo.plus>%skills_mode_on%
		
	) else if "%skill_mode%"=="plus"  (
		@ echo.	 ����  ��  ��  ǿ��	���롾T��  �л� ��ԭ�漼�ܡ��������޼�ʸ��ǹ+�̿�3���Ӿ����������������ܼ�ǿ�̡�
		COPY /Y %skills_default% %skills_file%
		COPY /Y %missiles_default% %missiles_file%
		@echo.default>%skills_mode_on%
		
	) else (
		@ echo.	 ����  ��  ��  ǿ��	���롾T��  �л� ��ԭ�漼�ܡ̡��������޼�ʸ��ǹ+�̿�3���Ӿ����������������ܼ�ǿ��
		COPY /Y %skills_normal% %skills_file%
		COPY /Y %missiles_normal% %missiles_file%
		@echo.normal>%skills_mode_on%
		
	)

goto GameStyleFunctionEnd


:set_ass_charge_up

if not exist %ass_charge_default% (
	@ echo.	 ���� �������ʾ�����ͼ�꡿
	move %MDKMOD%\data\hd\overlays\common\charge_ass_large\progressive*.json %MDKMOD%\data\hd\overlays\common\

	del %MDKMOD%\data\hd\vfx\textures\graphic\progressive*.*
	copy /Y %MDKMOD%\data\hd\vfx\textures\graphic\ass_charge_large\progressive*.* %MDKMOD%\data\hd\vfx\textures\graphic\
	xcopy /Y /E %MDKMOD%\data\hd\vfx\particles\overlays\common\ass_charge_large\progressive* %MDKMOD%\data\hd\vfx\particles\overlays\common\

) else if not exist %ass_charge_large% (
	@ echo.	 ���� ��UI��ʾ�����ͼ�꡿
	move %MDKMOD%\data\hd\overlays\common\progressive*.json %MDKMOD%\data\hd\overlays\common\charge_ass_large\
	move %MDKMOD%\data\hd\overlays\common\charge_ass_large_down\progressive*.json %MDKMOD%\data\hd\overlays\common\

	del %MDKMOD%\data\hd\vfx\textures\graphic\progressive*.*
	copy /Y %MDKMOD%\data\hd\vfx\textures\graphic\ass_charge_large\progressive*.* %MDKMOD%\data\hd\vfx\textures\graphic\
	xcopy /Y /E %MDKMOD%\data\hd\vfx\particles\overlays\common\ass_charge_large\progressive* %MDKMOD%\data\hd\vfx\particles\overlays\common\

) else if not exist %ass_charge_large_down% (
	@ echo.	 ���� ��������ʾС����ͼ�꡿
	move %MDKMOD%\data\hd\overlays\common\progressive*.json %MDKMOD%\data\hd\overlays\common\charge_ass_large_down\
	move %MDKMOD%\data\hd\overlays\common\charge_ass_small\progressive*.json %MDKMOD%\data\hd\overlays\common\

	del %MDKMOD%\data\hd\vfx\textures\graphic\progressive*.*
	copy /Y %MDKMOD%\data\hd\vfx\textures\graphic\ass_charge_small\progressive*.* %MDKMOD%\data\hd\vfx\textures\graphic\
	xcopy /Y /E %MDKMOD%\data\hd\vfx\particles\overlays\common\ass_charge_small\progressive* %MDKMOD%\data\hd\vfx\particles\overlays\common\

) else (
	@ echo.	 ���� ������ʾ�����ȼ�ͼ�꡿
	move %MDKMOD%\data\hd\overlays\common\progressive*.json %MDKMOD%\data\hd\overlays\common\charge_ass_small\
)


goto GameStyleFunctionEnd

:set_ass_charge_missiles
if exist %ass_charge_missiles% (
@ echo.	 ���� ����Ч2��
copy /Y %MDKMOD%\data\hd\missiles\assassin_charge\missiles_2.json %MDKMOD%\data\hd\missiles
del %MDKMOD%\data\hd\missiles\assassin_charge\*.chargesign
@echo. "x">%ass_charge_missiles_2%
) else if exist %ass_charge_missiles_2% (
@ echo.	 ���� ���ָ�ԭ����ʽ��
del %MDKMOD%\data\hd\missiles\missiles.json
del %MDKMOD%\data\hd\missiles\assassin_charge\*.chargesign
) else (
@ echo.	 ���� ����Ч1��
copy /Y %MDKMOD%\data\hd\missiles\assassin_charge\missiles.json %MDKMOD%\data\hd\missiles
del %MDKMOD%\data\hd\missiles\assassin_charge\*.chargesign
@echo. "x">%ass_charge_missiles%
)
goto GameStyleFunctionEnd

:open_ass_charge_missiles_file
notepad %MDKMOD%\data\hd\missiles\missiles.json
del %MDKMOD%\data\hd\missiles\assassin_charge\*.chargesign
@echo. "x">%ass_charge_missiles_3%
goto GameStyleFunctionEnd

:set_minimap_units_style
if exist %mini_map_unit% (
@ echo.	 ���� ��ԭ����
ren %mini_map_unit% units_mdk.sprite
ren %mini_map_unit_low% units_mdk.lowend.sprite
) else (
@ echo.	 ���� ��MDKʵ�ķ��
ren %mini_map_unit_mdk% units.sprite
ren %mini_map_unit_low_mdk% units.lowend.sprite
)
goto GameStyleFunctionEnd


:set_ui_zoom_size
	 
	if not exist %ui_mini% (
		@ echo.	 ���� ��65%%�ߴ�UI���桿
		ren %ui_file% hudpanelhd_0.01.json
		ren %ui_filec% hudpanelhd_0.01.json
		ren %ui_6% hudpanelCurrenthd.json
		ren %ui_6c% hudpanelCurrenthd.json
	) else if not exist %ui_6% (
		@ echo.	 ���� ��75%%�ߴ�UI���桿
		ren %ui_file% hudpanelhd_0.65.json
		ren %ui_filec% hudpanelhd_0.65.json
		ren %ui_7% hudpanelCurrenthd.json
		ren %ui_7c% hudpanelCurrenthd.json
	) else if not exist %ui_7% (
		@ echo.	 ���� ��85%%�ߴ�UI���桿	���ڴ�����...���Ե�...
		ren %ui_file% hudpanelhd_0.75.json
		ren %ui_filec% hudpanelhd_0.75.json
		ren %ui_8% hudpanelCurrenthd.json
		ren %ui_8c% hudpanelCurrenthd.json
	) else if not exist %ui_8% (
		@ echo.	 ���� ��100%%�ߴ�UI���桿   ���ڴ�����...���Ե�...
		ren %ui_file% hudpanelhd_0.85.json
		ren %ui_filec% hudpanelhd_0.85.json
		ren %ui_n% hudpanelCurrenthd.json
		ren %ui_nc% hudpanelCurrenthd.json
	) else (
		@ echo.	 ���� ������UI���桿   ���ڴ�����...���Ե�...
		ren %ui_file% hudpanelhd_normal.json
		ren %ui_filec% hudpanelhd_normal.json
		ren %ui_mini% hudpanelCurrenthd.json
		ren %ui_minic% hudpanelCurrenthd.json
	)
@ echo.
goto GameStyleFunctionEnd

:set_font_display_size
	@ echo.
	if exist %font_size% (
	ECHO  ���ָ�Ĭ�������С�����ڴ�����...���Ե�...
	ren %d2r_layouts%\_profileasian.json _profileasian_mdk.json
	) else (
	ECHO  ����������ߴ硿���ڴ�����...���Ե�...
	ren %d2r_layouts%\_profileasian_mdk.json _profileasian.json
	)
goto GameStyleFunctionEnd

:set_poison_nova_effects
if exist %poison_nova_effects% (
	@ echo.	 ���� ���ر�ħ����Ч��
	ren %d2r_missiles%\poison_nova.json poison_nova_mdk.json
) else (
	@ echo.	 ���� ������ħ����Ч��
	ren %d2r_missiles%\poison_nova_mdk.json poison_nova.json
)
goto GameStyleFunctionEnd

:set_sp_effects
if exist %sp_effects% (
	@ echo.	 ���� ���ر�ħ����Ч��
	del %d2r_missiles%\blessedhammer.json
	del %d2r_missiles%\blizzard.json
	del %d2r_missiles%\blue_nova_b.json
	del %d2r_missiles%\chainlightningbolt.json
	del %d2r_missiles%\corpse_explode_guts.json
	del %d2r_missiles%\fire_arrow_explode_2.json
	del %d2r_missiles%\fireball.json
	del %d2r_missiles%\firewallmaker.json
	del %d2r_missiles%\frost_nova.json
	del %d2r_missiles%\ice_bolt.json
	del %d2r_missiles%\ice_orb.json
	del %d2r_missiles%\light_beams.json
	del %d2r_missiles%\lightningbolt.json
	del %d2r_missiles%\poison_nova.json
) else (
	@ echo.	 ���� ������ħ����Ч��
	copy /Y %d2r_missiles%\effects\*.json %d2r_missiles%
)
goto GameStyleFunctionEnd

:set_magicarrow_effects
if exist %magicarrow_effects% (
	@ echo.	 ���� ���ر�ħ������Ч��
	del %d2r_missiles%\arrow.json
	del %d2r_missiles%\x_bow_bolt.json
) else (
	@ echo.	 ���� ������ħ������Ч��
	copy /Y %d2r_missiles%\arrow_effects\arrow.json %d2r_missiles%
	copy /Y %d2r_missiles%\arrow_effects\x_bow_bolt.json %d2r_missiles%
)
goto GameStyleFunctionEnd

:set_nova_effects
if exist %nova_effects_no_nova_storm% (
	@ echo.	 ���� ��ԭ����Ч��
	del %d2r_missiles%\electric_nova.json
	del %d2r_missiles%\lightningbolt_big.json
	del %nova_effects_no_storm%
	del %nova_effects_no_nova_storm%
) else if exist %nova_effects_no_storm% (
	@ echo.	 ���� ���ر�storm+nova��Ч��
	copy /Y %d2r_missiles%\nova_effects\electric_nova.json %d2r_missiles%
	copy /Y %d2r_missiles%\nova_effects\lightningbolt_big.json %d2r_missiles%
	del %nova_effects_no_storm%
	@echo."x">%nova_effects_no_nova_storm%
) else (
	@ echo.	 ���� ���ر�storm��Ч��
	copy /Y %d2r_missiles%\nova_effects\lightningbolt_big.json %d2r_missiles%
	del %nova_effects_no_nova_storm%
	@echo."x">%nova_effects_no_storm%
)
goto GameStyleFunctionEnd


:set_BO_effects

	if not exist %BO_time% (
	@ echo.	 ���� ����ʾ����������Ч��
	move /Y %MDKMOD%\data\hd\overlays\common\battlecommand.json %MDKMOD%\data\hd\overlays\common\shield_bo
	move /Y %MDKMOD%\data\hd\overlays\common\battleorders.json %MDKMOD%\data\hd\overlays\common\shield_bo
	move /Y %MDKMOD%\data\hd\overlays\common\shout.json %MDKMOD%\data\hd\overlays\common\shield_bo
	
	move /Y %MDKMOD%\data\hd\overlays\common\charge_bo\battlecommand.json %MDKMOD%\data\hd\overlays\common
	move /Y %MDKMOD%\data\hd\overlays\common\charge_bo\battleorders.json %MDKMOD%\data\hd\overlays\common
	move /Y %MDKMOD%\data\hd\overlays\common\charge_bo\shout.json %MDKMOD%\data\hd\overlays\common
	) else if not exist %BO_time_charge% (
	@ echo.	 ���� ���ر�BC/BO��BUFF��Ч��
	move /Y %MDKMOD%\data\hd\overlays\common\battlecommand.json %MDKMOD%\data\hd\overlays\common\charge_bo
	move /Y %MDKMOD%\data\hd\overlays\common\battleorders.json %MDKMOD%\data\hd\overlays\common\charge_bo
	move /Y %MDKMOD%\data\hd\overlays\common\shout.json %MDKMOD%\data\hd\overlays\common\charge_bo
	) else (
	@ echo.	 ���� ����ʾ�Ͷ�������Ч��
	move /Y %MDKMOD%\data\hd\overlays\common\shield_bo\battlecommand.json %MDKMOD%\data\hd\overlays\common
	move /Y %MDKMOD%\data\hd\overlays\common\shield_bo\battleorders.json %MDKMOD%\data\hd\overlays\common
	move /Y %MDKMOD%\data\hd\overlays\common\shield_bo\shout.json %MDKMOD%\data\hd\overlays\common
	)
goto GameStyleFunctionEnd

:func_convic_sign
	if not exist %convic_off% (
	echo. �رո�̾����ʾ
	ren %convic_on%  convictionback_mdk.json
	) else (
	echo. ������̾����ʾ
	ren %convic_off%  convictionback.json
	)
Goto GameStyleFunctionEnd

:set_show_helmet
if not exist %no_all_cap% (
	if not exist %no_cap% (
		@ echo.	 ���� ������ʾ��ñ����ñ��
		move /Y %d2r_items%\armor\circlet\*.json %d2r_items%\armor\circlet\mdk
		move /Y %d2r_items%\armor\helmet\*.json %d2r_items%\armor\helmet\mdk
		move /Y %d2r_items%\armor\pelt\*.json %d2r_items%\armor\pelt\mdk
		
		move /Y %d2r_items%\armor\helmet\mdk\cap_hat.json %d2r_items%\armor\helmet
		move /Y %d2r_items%\armor\helmet\mdk\skull_cap.json %d2r_items%\armor\helmet
	) else (
		@ echo.	 ���� ������ʾͷ����
		move /Y %d2r_items%\armor\circlet\mdk\*.json %d2r_items%\armor\circlet
		move /Y %d2r_items%\armor\helmet\mdk\*.json %d2r_items%\armor\helmet
		move /Y %d2r_items%\armor\pelt\mdk\*.json %d2r_items%\armor\pelt
	)
) else (
	@ echo.	 ���� ����ʾͷ����
	move /Y %d2r_items%\armor\circlet\*.json %d2r_items%\armor\circlet\mdk
	move /Y %d2r_items%\armor\helmet\*.json %d2r_items%\armor\helmet\mdk
	move /Y %d2r_items%\armor\pelt\*.json %d2r_items%\armor\pelt\mdk
)
Goto GameStyleFunctionEnd

:set_rune_style
@ echo.
	if exist %rune_style%  (
	ECHO  ���ָ�ԭ�������ʽ�����ڴ�����...���Ե�..
	move /Y %MDKMOD%\data\hd\global\ui\items\misc\rune %MDKMOD%\data\hd\global\ui\items\misc\rune_new
	) else (
	ECHO  ����Ϊ����ŷ�����ʽ�� ���ڴ�����...���Ե�...
	move /Y %MDKMOD%\data\hd\global\ui\items\misc\rune_new %MDKMOD%\data\hd\global\ui\items\misc\rune
	)
goto GameStyleFunctionEnd

:set_hp_bar_style
	@ echo.  
	if not exist %hp_bar% (
	@ echo.   ������Ϊ��������Ѫ����  ���ڴ�����...���Ե�...
	ren %d2r_layouts%\hudmonsterhealthhd.json hudmonsterhealthhd_mdk2nd.json
	ren %d2r_layouts%\hudmonsterhealthhd_mdk1st.json hudmonsterhealthhd.json
	) else if not exist %hp_bar2% (
	@ echo.   ������ΪĬ��Ѫ����  ���ڴ�����...���Ե�...
	ren %d2r_layouts%\hudmonsterhealthhd.json hudmonsterhealthhd_mdk1st.json
	) else (
	@ echo.   ������Ϊ���ط��Ѫ����  ���ڴ�����...���Ե�...
	ren %d2r_layouts%\hudmonsterhealthhd_mdk2nd.json hudmonsterhealthhd.json
	)
goto GameStyleFunctionEnd

:set_color_modifiers
	if exist %color_word% (
		@ echo.	 ���� ���ص������ɫ��  ���ڴ�����...���Ե�...
		del %d2r_strings%\item-modifiers.json
		copy /Y %d2r_strings%\json_db\item-modifiers_lesscolor.json %d2r_strings%\item-modifiers.json
		del %d2r_strings%\json_db\*.mcsign
		@ECHO.  "x">%less_color_word%
	) else if exist %less_color_word% (
		@ echo.	 ���� ��ԭ��ͳһɫ������  ���ڴ�����...���Ե�...
		del %d2r_strings%\item-modifiers.json
		copy /Y %d2r_strings%\json_db\item-modifiers_normal.json %d2r_strings%\item-modifiers.json
		del %d2r_strings%\json_db\*.mcsign
	) else (
		@ echo.	 ���� ����ɫ���Դ�����  ���ڴ�����...���Ե�...
		del %d2r_strings%\item-modifiers.json
		copy /Y %d2r_strings%\json_db\item-modifiers_color.json %d2r_strings%\item-modifiers.json
		del %d2r_strings%\json_db\*.mcsign
		@ECHO.  "x">%color_word%
	)
goto GameStyleFunctionEnd

:set_skill_icons_style
	@ echo.  
	if exist %color_spell% (
	@ echo.   ����ɫ����ͼ�꡿  ���ڴ�����...���Ե�...
	ren %MDKMOD%\data\hd\global\ui\color_spells spells
	) else (
	@ echo.   ��ԭ������ͼ�꡿ ���ڴ�����...���Ե�...
	ren %MDKMOD%\data\hd\global\ui\spells color_spells
	)
goto GameStyleFunctionEnd

:set_potion_style
	@ echo.  
	if exist %potion_style% (
	@ echo.	 ���ָ�ԭ�泬�����ҩƿ��  ���ڴ�����...���Ե�...
	move /Y %MDKMOD%\data\hd\global\ui\items\misc\potion %MDKMOD%\data\hd\global\ui\items\misc\potion_mdk
	) else (
	@ echo.	 �����óɴ�Բƿ�ĳ������ƿ�� ���ڴ�����...���Ե�...
	move /Y %MDKMOD%\data\hd\global\ui\items\misc\potion_mdk %MDKMOD%\data\hd\global\ui\items\misc\potion
	)
goto GameStyleFunctionEnd

:set_potion_sound
	if exist %potion_vo% (
	@ echo.	 ���� ���ָ�ҩˮ��Ч��  	���ڴ�����...���Ե�...
	ren %potion_vo% item_potion_hd_mdk.flac
	) else (
	@ echo.	 ���� ������ҩˮ��Ч��  	���ڴ�����...���Ե�...
	ren %d2r_sfx%\item\item_potion_hd_mdk.flac item_potion_hd.flac
	)
goto GameStyleFunctionEnd

:set_mercenary_portrait_location
	if exist %hireables_down% (
	@ echo.	 ���� ����ʾ����Ļ�Ϸ���
	ren %d2r_layouts%\hireablespanelhd.json hireablespanelhd_down.json
	ren %d2r_layouts%\hireablespanelhd_up.json hireablespanelhd.json
	) else (
	@ echo.	 ���� ����ʾ����Ļ�·���
	ren %d2r_layouts%\hireablespanelhd.json hireablespanelhd_up.json
	ren %d2r_layouts%\hireablespanelhd_down.json hireablespanelhd.json
	)
Goto GameStyleFunctionEnd

:set_show_monster_resistance
	if exist %monster_res% (
	@ echo.	 ���� ���رտ�����ʾ��
		del %d2r_excel%\monstats.txt
		del %d2r_excel%\superuniques.txt
	) else (
	@ echo.	 ���� ������������ʾ��
		copy /Y %d2r_excel%\monstats.txt.mdk %d2r_excel%\monstats.txt
		copy /Y %d2r_excel%\superuniques.txt.mdk %d2r_excel%\superuniques.txt
	)
goto GameStyleFunctionEnd

:set_offline_monster_magnification
	if not exist %monster_2x% (
	@ echo.	 ���� ��3����
	ren %monster_level% levels_2.txt
	ren %monster_3x% levels.txt
	) else if not exist %monster_3x% (
	@ echo.	 ���� ��10����
	ren %monster_level% levels_3.txt
	ren %monster_10x% levels.txt
	) else if not exist %monster_10x% (
	@ echo.	 ���� ��20����
	ren %monster_level% levels_10.txt
	ren %monster_20x% levels.txt
	) else if not exist %monster_20x% (
	@ echo.	 ���� ���رչ���ӱ���
	ren %monster_level% levels_20.txt
	ren %monster_1x% levels.txt
	) else (
	@ echo.	 ���� ��1.5����
	ren %monster_level% levels_1.txt
	ren %monster_2x% levels.txt
	)
Goto GameStyleFunctionEnd

:set_rw_nolimit
	if not exist %rw_nolimit%  (
		@ echo.	 ���� ������֮��ָ�Ĭ�ϡ�
		ren %d2r_excel%\runes.txt runes_nolimit.txt
		ren %d2r_excel%\runes_normal.txt runes.txt
	) else (
		@ echo.	 ���� ������֮�������ơ�
		ren %d2r_excel%\runes.txt runes_normal.txt
		ren %d2r_excel%\runes_nolimit.txt runes.txt
	)
Goto GameStyleFunctionEnd


:func_rune_shop

	set /p rune_shop_mode=<%rune_shop_sign%
	@ECHO.%rune_shop_sign%=%rune_shop_mode%
	if "%rune_shop_mode%"=="rev"  (
		@ echo.	 ���� ʯ �� �� �� �꡿	���롾Q��  �л� ��ԭ���̵�+����ƿ�̡�����+���ı�ʯ������+������ߡ�
		@ echo.rune>%rune_shop_sign%
	) else if "%rune_shop_mode%"=="rune"  (
		@ echo.	 ���� ʯ �� �� �� �꡿	���롾Q��  �л� ��ԭ���̵�+����ƿ+���ı�ʯ�̡�����+������ߡ�
		@ echo.quest>%rune_shop_sign%
	) else if "%rune_shop_mode%"=="quest"  (
		@ echo.	 ���� ʯ �� �� �� �꡿	���롾Q��  �л� ��ԭ���̵�+����ƿ+���ı�ʯ+������ߡ̡������ָ�ԭ�桽
		@ echo.default>%rune_shop_sign%
	) else (
		@ echo.	 ���� ʯ �� �� �� �꡿	���롾Q��  �л� ��ԭ���̵�̡�����+����ƿ������+���ı�ʯ������+������ߡ�
		@ echo.rev>%rune_shop_sign%
	)

	CALL :check_and_get_misc_file
	CALL :check_and_get_itemtypes_file
	
Goto GameStyleFunctionEnd

:GameStyleFunctionEnd
	ping -n 1 127.1>nul
	@ echo.
	@ECHO ������ɣ���������GameStyle_Main...
	@ echo.
	if exist %DEBUG_FILE% ( pause )
	if "%CurrentMenu%"=="SetupMain" goto SetupMain
	if "%CurrentMenu%"=="LightSetupMain" goto LightSetupMain
	if "%CurrentMenu%"=="RuleSetup_Main" goto RuleSetup_Main
	if "%CurrentMenu%"=="RuneSound_Main" goto RuneSound_Main
	if "%CurrentMenu%"=="GameStyle_Main" goto GameStyle_Main
	if "%CurrentMenu%"=="OfflineGame_Main" goto OfflineGame_Main
goto GameStyle_Main

REM===��Ϸ������� END===

:FunctionEnd
	ping -n 1 127.1>nul
	@ echo.
	@ECHO ������ɣ���������...
	@ echo.
	if exist %DEBUG_FILE% ( pause )
	if "%CurrentMenu%"=="SetupMain" goto SetupMain
	if "%CurrentMenu%"=="LightSetupMain" goto LightSetupMain
	if "%CurrentMenu%"=="RuleSetup_Main" goto RuleSetup_Main
	if "%CurrentMenu%"=="RuneSound_Main" goto RuneSound_Main
	if "%CurrentMenu%"=="GameStyle_Main" goto GameStyle_Main
	if "%CurrentMenu%"=="OfflineGame_Main" goto OfflineGame_Main
goto SetupMain


:exit
	@ echo.
exit

REM ===������CALL��������===
REM CALL :check_and_get_itemtypes_file
:check_and_get_itemtypes_file
	@ echo.	 ��check_and_get_itemtypes_file�̡�
	if exist %all_sockets%  (
		@ echo.	 ������ �� װ �� �� չ�����롾H4�� �л� ��ԭ��״̬��������������װ����ס̡�
		if exist %offline_fullhire_on% (
			copy /Y %d2r_excel%\offline\itemtypes_fullhire_normal.txt %ItemTypes_FILE%
		) else (
			copy /Y %d2r_excel%\offline\itemtypes_normal.txt %ItemTypes_FILE%
		)
	) else (
		@ echo.	 ������ �� װ �� �� չ�����롾H4�� �л� ��ԭ��״̬�̡�������������װ����ס�
		if exist %offline_fullhire_on% (
			copy /Y %d2r_excel%\offline\itemtypes_fullhire_allsock.txt %ItemTypes_FILE%
		) else (
			copy /Y %d2r_excel%\offline\itemtypes_allsock.txt %ItemTypes_FILE%
		)
	)
goto :eof

:check_and_get_misc_file

	@set /p rune_shop_check=<%rune_shop_sign%
	if "%rune_shop_check%"=="rev"  (
		@ echo.	 ��ԭ���̵�+����ƿ�̡�%rune_shop_check%
		copy /Y %rune_normal_sock% %Misc_FILE%
	) else if "%rune_shop_check%"=="rune"  (
		@ echo.	 ��ԭ���̵�+����ƿ+���ı�ʯ�̡�%rune_shop_check%
		copy /Y %rune_shop_sock% %Misc_FILE%
	) else if "%rune_shop_check%"=="quest"  (
		@ echo.	 ��ԭ���̵�+����ƿ+���ı�ʯ+������ߡ̡�%rune_shop_check%
		copy /Y %misc_quest_shop_sock% %Misc_FILE%
	) else (
		@ echo.	 ��ԭ���̵�̡�%rune_shop_check%
		copy /Y %rune_default_sock% %Misc_FILE%
	)

goto :eof

:READINI
	set READ_FILE=%1
	if exist !READ_FILE! (
		set /p READ_VALUE=<!READ_FILE!
	) else (
		call :color 4F "ȱʧINI�����ļ�"
		set READ_VALUE=CREATE
		call :GETPATH !READ_FILE!
		md !READ_FILE_PATH!
		@echo.!READ_VALUE!>!READ_FILE!
	)
goto :eof

:GETPATH
	rem ��ȡ���ļ�·��
	set "READ_FILE_PATH=%~dp1"
	echo READ_FILE_PATH=!READ_FILE_PATH!
goto :eof

::Color ��ɫRed ��ɫBlack ��ɫGreen ��ɫYellow ��ɫBlue ���Magenta ��ɫCyan ��ɫWhite
:cred
powershell -Command Write-Host "%*" -foreground "Red"
goto :eof

:cgreen
powershell -Command Write-Host "%*" -foreground "Green"
goto :eof

:cyellow
powershell -Command Write-Host "%*" -foreground "Yellow"
goto :eof


:Color
:: 0 �ڡ�1 ����2 �̡�3 ���ࡢ4 �졢5 �ϡ�6���ػơ�7 ���ҡ�8 ���ҡ�9 ��
:: A ���̡�B ���ࡢC ǳ�졢D ���ϡ�E ǳ�ơ�F ��ɫ
:: ��ɫ����ִ�У�call :color E2 "text"
:: 72������ɫ+����ɫ��7Ϊ����ɫ 2Ϊ����ɫ������󲻻ỻ�У���Ҫ��echo.�����л���
:: v23c
:: Arguments: hexColor text [\n] ...
:: \n -> newline ... -> repeat
:: Supported in windows XP, 7, 8.
:: This version works using Cmd /U
:: In XP extended ascii characters are printed as dots.
:: For print quotes, use empty text.
	SetLocal EnableExtensions EnableDelayedExpansion
	Subst `: "!Temp!" >Nul &`: &Cd \
	SetLocal DisableDelayedExpansion
	Echo(|(Pause >Nul &Findstr "^" >`)
	Cmd /A /D /C Set /P "=." >>` <Nul
	For /F %%# In (
	'"Prompt $H &For %%_ In (_) Do Rem"') Do (
	Cmd /A /D /C Set /P "=%%# %%#" <Nul >`.1
	Copy /Y `.1 /B + `.1 /B + `.1 /B `.3 /B >Nul
	Copy /Y `.1 /B + `.1 /B + `.3 /B `.5 /B >Nul
	Copy /Y `.1 /B + `.1 /B + `.5 /B `.7 /B >Nul
	)
:__Color
	Set "Text=%~2"
	If Not Defined Text (Set Text=^")
	SetLocal EnableDelayedExpansion
	For %%_ In ("&" "|" ">" "<"
	) Do Set "Text=!Text:%%~_=^%%~_!"
	Set /P "LF=" <` &Set "LF=!LF:~0,1!"
	For %%# in ("!LF!") Do For %%_ In (
	\ / :) Do Set "Text=!Text:%%_=%%~#%%_%%~#!"
	For /F delims^=^ eol^= %%# in ("!Text!") Do (
	If #==#! EndLocal
	If \==%%# (Findstr /A:%~1 . \` Nul
	Type `.3) Else If /==%%# (Findstr /A:%~1 . /.\` Nul
	Type `.5) Else (Cmd /A /D /C Echo %%#\..\`>`.dat
	Findstr /F:`.dat /A:%~1 .
	Type `.7))
	If "\n"=="%~3" (Shift
	Echo()
	Shift
	Shift
	If ""=="%~1" Del ` `.1 `.3 `.5 `.7 `.dat &Goto :Eof
Goto :__Color