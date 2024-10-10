@set ver=MDK.2024.09.01凯恩版
@set FOR_MOD_VER=240706
@set VER_CHECK=NOCHECK
@set SETTER_NAME=MDK MOD设置器.bat
@set MFD=MDK
@set MOD_FOLDER=%MFD%\%MFD%.mpq
chcp 936
@ECHO OFF&PUSHD %~DP0 &TITLE D2R MDK MOD %FOR_MOD_VER%设置器 By ZhangMDKRU#2129  设置器版本%Ver%
mode con cols=122 lines=120
:: 0 黑、1 蓝、2 绿、3 天青、4 红、5 紫、6、棕黄、7 亮灰、8 暗灰、9 青
:: A 亮绿、B 亮青、C 浅红、D 亮紫、E 浅黄、F 白色
:: color E0
color E0
setlocal enabledelayedexpansion

mode con cols=75 lines=25
REM ===判断是否是以管理员模式启动===
bcdedit>nul
if errorlevel 1 (
@ECHO. 检测到当前并未 “以管理员身份运行” 设置器！！！
@ECHO. 不使用管理员身份启动MOD设置器可能无法完整显示
@ECHO. 请手动右键点击设置器文件选择【以管理员身份运行】。
@ECHO. 
@ECHO. 若以管理员模式启动后，设置器依旧无法完整显示，请将设置器创建快捷方式
@ECHO. 然后右键点击快捷方式选择【属性】，在选项栏中勾选【使用旧版控制台】
@ECHO. 
@ECHO. 按任意键将继续运行设置器。
PAUSE
)

REM ===主程序界面使用set===

set DEBUG_FILE=mdk_mod.debug
set SETUP_FOLDER_FILE=mdk_mod.setup

@ echo.	 检测补丁包与MOD相对路径中...
set d2r_path=UNKNOW
if exist %SETUP_FOLDER_FILE% ( set d2r_path=.
) else if exist .\D2R.exe ( set d2r_path=.
) else if exist ..\D2R.exe ( set d2r_path=..
) else if exist ..\..\D2R.exe ( set d2r_path=..\..
) else if exist ..\..\..\D2R.exe ( set d2r_path=..\..\..)

@ echo.	 d2r_path=!d2r_path!
	if "!d2r_path!"=="UNKNOW" (
		@ echo.	 ***错误：未检测到D2R文件夹，请复制MOD文件到D2R安装文件夹中***
		@ echo.	 ***错误：未检测到D2R文件夹，请复制MOD文件到D2R安装文件夹中***
		@ echo.	 ***错误：未检测到D2R文件夹，请复制MOD文件到D2R安装文件夹中***
		call :color E4 "***错误：未检测到D2R文件夹，请复制MOD文件到D2R安装文件夹中***"
		@echo.
		@echo.
		@echo.	 是否需要忽略检测游戏安装文件夹，直接对mod文件进行设置？（Y/N）
		set  obj=""
		set /p obj= 输入 Y 或者 N 按回车执行：
		if /i "%obj%"=="Y" Goto check_setup_correct

		@echo.
		@echo	  放弃直接设置，按任意键退出。
		@echo.
		pause
		goto exit
	)

REM 设置器自检MOD安装情况与自身目录是否正确

:check_setup_correct
@ echo.	 *设置器自检MOD安装情况与目录是否正确
	REM 尝试检测设置器与D2R的相对位置
	set dot_path=UNKNOW
	set dot_path2=UNKNOW
	set dot_path3=UNKNOW
	set dot_path4=UNKNOW
	@ echo.	 检测补丁包与MOD相对路径中...
	if exist %d2r_path%\D2R.exe ( set dot_path=OK)
	if exist %d2r_path%\mods ( set dot_path2=OK)
	if exist %d2r_path%\mods\%MOD_FOLDER%\data ( set dot_path3=OK)
	if exist .\mods\%MOD_FOLDER%\data ( set dot_path4=OK)

	@ echo.	
	@ echo.	 D2R文件路径检测结果：dot_path=!dot_path!
	@ echo.	 MODS文件夹路径检测结果：dot_path2=!dot_path2!
	@ echo.	 MDK MOD文件夹路径检测结果：dot_path3=!dot_path3!
	
	@ echo.	
	@ echo.	 检测D2R.exe文件是否存在……
	set FILE_CHECK_WRONG=0
	if "!dot_path!"=="UNKNOW" ( 
		if exist %SETUP_FOLDER_FILE% (
			@ echo.	 ***检测到封装模式启动，跳过该检测***
		) else (set FILE_CHECK_WRONG=1)
	)
	if "!dot_path2!"=="UNKNOW" (set FILE_CHECK_WRONG=1)
	if "!dot_path3!"=="UNKNOW" (set FILE_CHECK_WRONG=1)
		@ echo.	 !dot_path! !dot_path2! !dot_path3! !dot_path4!
		@ echo.	 FILE_CHECK_WRONG=%FILE_CHECK_WRONG%
	
	if "%FILE_CHECK_WRONG%"=="1" (
		@ echo.	 ***错误：未检测到D2R文件夹，请复制MOD文件到D2R安装文件夹中***
		@ echo.	 ***错误：未检测到D2R文件夹，请复制MOD文件到D2R安装文件夹中***
		@ echo.	 ***错误：未检测到D2R文件夹，请复制MOD文件到D2R安装文件夹中***
		
		if "!dot_path!"=="UNKNOW" ( 
			call :color E4 "   ***错误：未检测到D2R文件夹，请复制MOD文件到D2R安装文件夹中***"
			@echo. 
		)
		if "!dot_path2!"=="UNKNOW" ( 
			call :color E4 "   ***错误：未检测到D2R文件夹，请复制MOD文件到D2R安装文件夹中***"
			@echo. 
			@echo. 请在D2R文件夹下创建mods文件夹安装MOD，或者将MDK MOD压缩包直接解压到D2R文件夹中
		)
		if "!dot_path3!"=="UNKNOW" ( 
			call :color E4 "   ***错误：未检测到MOD文件夹，请在D2R文件夹下建立MODS文件夹***"
			@echo. 
			@echo. 请在D2R文件夹下创建mods文件夹安装MOD，或者将MDK MOD压缩包直接解压到D2R文件夹中
		)
		@echo.
		@echo.
		if "!dot_path4!"=="OK" ( 
			@echo. 虽然MOD文件夹未正确安装到D2R文件夹中，
			@echo. 但检测到设置器与MOD文件夹相对位置正确。
			@echo. 
			@echo. 是否需要直接启动设置器进行设置？（Y/N）
			set  obj=""
			set /p obj= 输入 Y 或者 N 按回车执行：
			@echo.obj=!obj!

			if /i "!obj!"=="Y" (
				set d2r_path=.
				Goto continue_do_setup
			)
		) 
		@echo.
		call :color E4 "按任意键退出..."
		@echo.
		@echo.
		pause
		goto exit
	)

:continue_do_setup

REM ===设置常用文件夹===
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

REM ===设置常用文件===
set Misc_FILE=%d2r_excel%\misc.txt
set TC_FILE=%d2r_excel%\TreasureClassEx.txt
set ItemTypes_FILE=%d2r_excel%\itemtypes.txt

@echo. MDKMOD=%MDKMOD%

REM 勾选框定义
set AutorunCheckOn=%d2r_global_ui%\QucikSwitchButton\CheckIcon\ON.sprite
set AutorunCheckOnLow=%d2r_global_ui%\QucikSwitchButton\CheckIcon\ON.lowend.sprite
set AutorunCheckOff=%d2r_global_ui%\QucikSwitchButton\CheckIcon\OFF.sprite
set AutorunCheckOffLow=%d2r_global_ui%\QucikSwitchButton\CheckIcon\OFF.lowend.sprite
REM 快速退出勾选框
set QuiskEscExit=%d2r_global_ui%\QucikSwitchButton\QuickEsc\CHECK.sprite
set QuiskEscExitLow=%d2r_global_ui%\QucikSwitchButton\QuickEsc\CHECK.lowend.sprite

REM 设置设置器不同语种
set setter_lang_cht=!d2r_path!\setter_lang_cht
set setter_lang_chs=!d2r_path!\setter_lang_chs
set setter_lang_ok=!d2r_path!\setter_lang_ok
set setter_lang_cht_file=%MDKMOD%\MDKMOD_SETTER_CHT.bat
set setter_lang_chs_file=%MDKMOD%\MDKMOD_SETTER_CHS.bat

REM 设置常用文件
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

REM 设置佣兵指示图标
set hire_nickname=%MDKMOD%\data\hd\nickname\particles\hire.particles
set hire_nickname_off=%MDKMOD%\data\hd\nickname\particles\hire_off.particles

REM 设置佣兵全装备外观
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

REM 设置DLC1的标志目录
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

REM 设置器设置字体部分
set font_name=%d2r_ui%\fonts\blizzardglobal-v5_81.ttf
set font_name_zhTW=blizzardglobal-v5_81.ttf
set font_libian=%d2r_ui%\fonts\LiziLibian.ttf
set font_zhunyuan=%d2r_ui%\fonts\LiziZhunyuan.ttf
set font_fangxing=%d2r_ui%\fonts\ARFangxin.ttf
set font_baoxue=%d2r_ui%\fonts\BlizzardGlobal.ttf
set font_heiti=%d2r_ui%\fonts\LiziHeiti.ttf
set font_dahei=%d2r_ui%\fonts\LiziDahei.ttf

REM 怀旧模式字体部分
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


REM 底材信息显示模式设置
set keybinds_fullinfo=%d2r_strings%\json_db\keybinds_fullinfo.json
set keybinds_lessinfo=%d2r_strings%\json_db\keybinds_lessinfo.json
set keybinds_lessinfo_rare=%d2r_strings%\json_db\keybinds_lessinfo_rare.json
set keybinds_lessinfo_rare_base=%d2r_strings%\json_db\keybinds_lessinfo_rare_base.json
set keybinds_setup=%d2r_strings%\json_db\keybinds_sign.setup

REM 戒指等变量显示设置
set amulet_info_setup=%d2r_strings%\json_db\amulet_info_sign.setup
set amulet_info_show=%d2r_strings%\json_db\npcs_show.json
set amulet_info_hide=%d2r_strings%\json_db\npcs_hide.json

REM 各项细节游戏功能调整的标志定义

REM ===符文商店相关文件===
set rune_shop_sign=%d2r_excel%\offline\misc\rune_shop.ini

set rune_default_sock=%d2r_excel%\offline\misc\misc_default_sock.txt
set rune_default_nosock=%d2r_excel%\offline\misc\misc_default_nosock.txt
set rune_normal_sock=%d2r_excel%\offline\misc\misc_normal_sock.txt
set rune_normal_nosock=%d2r_excel%\offline\misc\misc_normal_nosock.txt
set rune_shop_sock=%d2r_excel%\offline\misc\misc_shop_sock.txt
set rune_shop_nosock=%d2r_excel%\offline\misc\misc_shop_nosock.txt
set misc_quest_shop_sock=%d2r_excel%\offline\misc\misc_quest_shop_sock.txt
set misc_quest_shop_nosock=%d2r_excel%\offline\misc\misc_quest_shop_nosock.txt

REM ===物品类型相关文件===
set itemtypes_allsock=%d2r_excel%\offline\itemtypes_allsock.txt


set all_sockets=%d2r_excel%\armor_allsock.txt
set rw_nolimit=%d2r_excel%\runes_nolimit.txt


set convic_off=%MDKMOD%\data\hd\overlays\common\convictionback_mdk.json
set convic_on=%MDKMOD%\data\hd\overlays\common\convictionback.json
set blessedhammer_effect=%d2r_missiles%\blessedhammer.json

REM 咒符统一样式标记
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

REM 咒符样式文件
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

REM 地图显示怪物标记
set automap_monster_mdk_sign=%d2r_excel%\mdk.monsgin
set automap_monster_mdkchaos_sign=%d2r_excel%\mdkchaos.monsgin
set automap_monster_all_sign=%d2r_excel%\all.monsgin
set automap_chest_sign=%d2r_excel%\objects.txt.mdk

REM 底材信息切换文件
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

REM===怪物脚底光源===
set enemy_nolight=%MDKMOD%\data\hd\character\nolight.enemysign
set enemy_light_1=%MDKMOD%\data\hd\character\light_1.enemysign
set enemy_light_2=%MDKMOD%\data\hd\character\light_2.enemysign
set enemy_light_3=%MDKMOD%\data\hd\character\light_3.enemysign
set enemy_nosign=%MDKMOD%\data\hd\character\nosign.enemysign
set monster_json_file=%MDKMOD%\data\hd\character\monsters.json
set monster_json_file_backup=%MDKMOD%\data\hd\character\monsters_mdk.json

REM===语言识别系统使用参数===
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

REM===投射物特效===
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

REM 物品快捷查询图标
set inven_top=%global_image_folder%\ui\mdk\inventory_icon_top
set inven_bottom=%global_image_folder%\ui\mdk\inventory_icon_bottom

REM 旧版迷你方盒文件
REM set mdk_minicube_pi_old_normal		=%d2r_layouts%\playerinventoryexpansionlayouthd_old_normal.json
set mdk_minicube_hc_old_normal=%d2r_layouts%\json_db\horadriccubelayoutminihd_normal_mode_old.json
set mdk_minicube_pi_old_expfile=%d2r_layouts%\json_db\playerinventoryexpansionlayouthd_mdkminicube_old.json
set mdk_minicube_pi_old_origfile=%d2r_layouts%\json_db\playerinventoryoriginallayouthd_mdkminicube_old.json
REM 大字体版
set mdk_minicube_hc_bigfont_mode=%d2r_layouts%\json_db\horadriccubelayoutminihd_bigfont_mode.json
REM 新版迷你方盒文件
set mdk_minicube_hc_new_normal=%d2r_layouts%\json_db\horadriccubelayoutminihd_normal_mode_new.json
set mdk_minicube_pi_new_expfile=%d2r_layouts%\json_db\playerinventoryexpansionlayouthd_mdkminicube_new.json
REM 无迷你方盒
set mdk_minicube_pi_no_minicube=%d2r_layouts%\json_db\playerinventoryexpansionlayouthd_nominicube_mode.json
REM 目标文件
set mdk_minicube_expfile=%d2r_layouts%\playerinventoryexpansionlayouthd.json
set mdk_minicube_origfile=%d2r_layouts%\playerinventoryoriginallayouthd.json
set mdk_minicube_cube_file=%d2r_layouts%\horadriccubelayoutminihd.json

set mini_map_unit=%MDKMOD%\data\hd\global\ui\automap\units.sprite
set mini_map_unit_mdk=%MDKMOD%\data\hd\global\ui\automap\units_mdk.sprite
set mini_map_unit_low=%MDKMOD%\data\hd\global\ui\automap\units.lowend.sprite
set mini_map_unit_low_mdk=%MDKMOD%\data\hd\global\ui\automap\units_mdk.lowend.sprite

REM 切换共享箱子存档用
set d2r_save=%USERPROFILE%\Saved Games\Diablo II Resurrected
set c_save_sign=%MDKMOD%\current_sharebox.shareboxsign
set c_save_sharebox_num=0
set box_current=%d2r_save%\SharedStashSoftCoreV2.d2i
set box_current_backup=%d2r_save%\SharedStashSoftCoreV2_backup.d2i

REM 刺客聚气图标
set ass_charge_up=%MDKMOD%\data\hd\overlays\common\progressive_damage_3.json
set ass_charge_missiles=%MDKMOD%\data\hd\missiles\assassin_charge\ass_charge_1.chargesign
set ass_charge_missiles_2=%MDKMOD%\data\hd\missiles\assassin_charge\ass_charge_2.chargesign
set ass_charge_missiles_3=%MDKMOD%\data\hd\missiles\assassin_charge\ass_charge_3.chargesign

set ass_kick_voice_chunli=%MDKMOD%\data\hd\global\sfx\skill\assassin\chunli
set ass_kick_voice_chunli_sign=%MDKMOD%\data\hd\global\sfx\skill\assassin\chunli\chunli.vosign
set ass_kick_no_voice=%MDKMOD%\data\hd\global\sfx\skill\assassin\novoice
set ass_kick_no_voice_sign=%MDKMOD%\data\hd\global\sfx\skill\assassin\novoice\novoice.vosign

REM ===自动启动文件部分定义===
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

REM ===规则设置界面使用set===
set rule_addr=%d2r_strings%\json_db\rule

REM ===规则文件组成部分定义===
set NoDropCheck=%d2r_strings%\json_db\DropFilter

REM ===规则文件判断标志文件定义，标志文件为组成文件前加s_===
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

REM ===构成组合复制语句用的部分定义===
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

REM===离线各种功能===
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

REM===离线大箱子===
set offline_bigbox=%d2r_layouts%\json_db\bank_bigbox.sign
set offline_fullhire_on=%d2r_layouts%\set_sign\fullhire.ini
set layouts_folder=%d2r_layouts%

REM===符文声音界面使用===
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

REM ==快速购买==
set click_quick_buy=%d2r_layouts%\vendorpanellayouthd.json
set click_quick_buy_off=%d2r_layouts%\vendorpanellayouthd.json.mdk

REM ====Bnet文件独立解析程序标志====
set TFo=%d2r_strings%
set TFile=bnet.json

set Bnet_DB=%TFo%\bnet_db
REM %TFo%\%TFile%

set bnet_text=%Bnet_DB%\bnetText.json
set head=%Bnet_DB%\head.json
set foot=%Bnet_DB%\foot.json
set NullFile=%Bnet_DB%\null.json

set TBnet_file=%TFo%\%TFile%

REM ===在这里设置对应项目的碎片文件===
REM ===设置碎片变量默认为碎片文件路径===
set SendEquipmentToChatFile=%Bnet_DB%\SendEquipmentToChat.json
set set0=%SendEquipmentToChatFile%

set ExpandDialogSelectFile=%Bnet_DB%\ExpandDialogSelect.json
set set1=%ExpandDialogSelectFile%

set NewEquipmentFile=%Bnet_DB%\NewEquipment.json
set set2=%NewEquipmentFile%

REM ====Bnet文件独立解析程序标志END====


REM 某版本首次运行时自动检测并切换简繁体, CHECK为开
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
REM 某版本首次运行时自动检测并切换简繁体END

:SetupMain
@ECHO OFF
mode con cols=120 lines=52
@Cls
@set CurrentMenu=SetupMain

REM ====获取整体判断标志数据====
	REM @echo.读取参数中……
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
	REM ===在此处将设置标志文件的值赋值到对应的设置项中===
	set SendEquipmentToChat=%arr[0]%
	set ExpandDialogSelect=%arr[1]%
	set NewEquipment=%arr[2]%
	
	REM ===测试用，显示一下设置值表用于排错===
	REM @echo. 0=%arr[0]%  1=%arr[1]%  2=%arr[2]%  3=%arr[3]%  4=%arr[4]%  5=%arr[5]%
	
	
@CLS
@ echo.	
REM @ echo.                   ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
REM @ echo.　　               ┃         D2R MDK MOD 自定义设置器 By ZhangMDKRU#2129        ┃
REM @ echo.　　               ┃                 Ver.%Ver%        ┃
REM @ echo.                   ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

:: 颜色 0 黑、1 蓝、2 绿、3 天青、4 红、5 紫、6、棕黄、7 亮灰、8 暗灰、9 青
:: 颜色 A 亮绿、B 亮青、C 浅红、D 亮紫、E 浅黄、F 白色
:: color E0     color D0      背景+文字

:: 0 黑、1 蓝、2 绿、3 天青、4 红、5 紫、6、棕黄、7 亮灰、8 暗灰、9 青
:: A 亮绿、B 亮青、C 浅红、D 亮紫、E 浅黄、F 白色
:: call :color E2 "text"
:: 72代表背景色+文字色，7为背景色 2为文字色，输出后不会换行，需要用echo.来进行换行

@ echo.	━━━━━━━┃ D2R MDK MOD 设置器 %Ver% 适配%FOR_MOD_VER%版  By ZhangMDKRU#2129┃━━━━━━━

if exist %DEBUG_FILE% (
	call :color CF "		DEBUG模式ON		"
)
if exist %SETUP_FOLDER_FILE% (
	call :color DF "		封装模式ON		"
)
if not "%MFD%"=="MDK" (
	call :color 3F "	MOD文件夹：%MFD%	"
)

@echo.  
@echo.  	【请按键选择对应功能页面】▼
call :color E0 "	"
call :color DF "【Z】游戏功能设置 "
@echo. 【X】光线辅助设置 【C】屏蔽掉落设置 【V】血球音效设置 【B】UI风格设置 【N】单机设置
@ echo. 

@ echo.　	◆◆◆◆ MDK MOD 特色功能设置部分 ◆◆◆◆


@set clang=0
@set /p clang=<%d2r_strings%\lang
@ echo.	※※※三个语言版本屏蔽配置文件相互独立，切换后请重新设置屏蔽配置，若无法切换，可能是文件被占用※※※

if "%clang%"=="zhTW_cht" (
	@ echo.	【语言版本】输入【=】 或【=?】切换：【1 重制版繁体】→ 2 旧版翻译繁体 → 3 重制版简体 → 4 国服翻译简体
	) else if "%clang%"=="zhTW_cht_OLD" (
	@ echo.	【语言版本】输入【=】 或【=?】切换：1 重制版繁体→ 【2 旧版翻译繁体 】→ 3 重制版简体 → 4 国服翻译简体
	) else if "%clang%"=="zhTW_chs" (
	@ echo.	【语言版本】输入【=】 或【=?】切换：1 重制版繁体→ 2 旧版翻译繁体 → 【3 重制版简体 】→ 4 国服翻译简体
	) else if "%clang%"=="zhCN" (
	@ echo.	【语言版本】输入【=】 或【=?】切换：1 重制版繁体→ 2 旧版翻译繁体 → 3 重制版简体 → 【4 国服翻译简体】
	) else (
	call :color E4 "	【未知语言】 输入【=】 尝试强制切换到【重置版繁体】"
	@ echo.	 
) 
@ echo.	 

if not exist %font_fangxing% (
	@ echo.	 【普通模式中文字体】	输入【CN】 切换顺序：准圆→黑体→隶变→【原版方形】→励字大黑→暴雪国际	
	) else if not exist %font_dahei% (
	@ echo.	 【普通模式中文字体】	输入【CN】 切换顺序：准圆→黑体→隶变→原版方形→【励字大黑】→暴雪国际	
	) else if not exist %font_baoxue% (
	@ echo.	 【普通模式中文字体】	输入【CN】 切换顺序：准圆→黑体→隶变→原版方形→励字大黑→【暴雪国际】	
	) else if not exist %font_zhunyuan% (
	@ echo.	 【普通模式中文字体】	输入【CN】 切换顺序：【准圆】→黑体→隶变→原版方形→励字大黑→暴雪国际	
	) else if not exist %font_heiti% (
	@ echo.	 【普通模式中文字体】	输入【CN】 切换顺序：准圆→【黑体】→隶变→原版方形→励字大黑→暴雪国际	
	) else if not exist %font_libian% (
	@ echo.	 【普通模式中文字体】	输入【CN】 切换顺序：准圆→黑体→【隶变】→原版方形→励字大黑→暴雪国际	
	) else ( 
	@ echo.	 【获取字体名失败】	输入【CN】 设置 【尝试强制设为原版方形字体】
)
if not exist %d2eng_fonts% (
	@ echo.	 【普通模式英文字体】	输入【EN】 切换顺序：【暗黑2原版英文字体】→与中文字体相同（设置后需重设字体）
	) else (
	@ echo.	 【普通模式英文字体】	输入【EN】 切换顺序：暗黑2原版英文字体→【与中文字体相同】（设置后需重设字体）
)

if not exist %hj_font_fangsong% (
	@ echo.	 *【怀旧模式字体】	输入【HJ】 切换顺序：【仿宋字体】→晴圆字体→锐线统简字体→幼圆字体
	) else if not exist %hj_font_qingyuan% (
	@ echo.	 *【怀旧模式字体】	输入【HJ】 切换顺序：仿宋字体→【晴圆字体】→锐线统简字体→幼圆字体
	) else if not exist %hj_font_ruixiantong% ( 
	@ echo.	 *【怀旧模式字体】	输入【HJ】 切换顺序：仿宋字体→晴圆字体→【锐线统简字体】→幼圆字体
	) else if not exist %hj_font_youyuan% ( 
	@ echo.	 *【怀旧模式字体】	输入【HJ】 切换顺序：仿宋字体→晴圆字体→锐线统简字体→【幼圆字体】
	) else (
	@ echo.	 *【怀旧模式字体】	输入【HJ】 切换顺序：仿宋字体→晴圆字体→锐线统简→幼圆字体
)
@ echo.	
if exist %autorun_sign_100% (
	@ echo.	 【*自动启动功能设置】	输入【AU】 切换 【迷你血条√】+〖显示房间密码×〗+〖迷你方盒×〗
	) else if exist %autorun_sign_010% (
	@ echo.	 【*自动启动功能设置】	输入【AU】 切换 〖迷你血条×〗+【显示房间密码√】+〖迷你方盒×〗
	) else if exist %autorun_sign_001% (
	@ echo.	 【*自动启动功能设置】	输入【AU】 切换 〖迷你血条×〗+〖显示房间密码×〗+【迷你方盒√】
	) else if exist %autorun_sign_110% (
	@ echo.	 【*自动启动功能设置】	输入【AU】 切换 【迷你血条√】+【显示房间密码√】+〖迷你方盒×〗
	) else if exist %autorun_sign_101% (
	@ echo.	 【*自动启动功能设置】	输入【AU】 切换 【迷你血条√】+〖显示房间密码×〗+【迷你方盒√】
	) else if exist %autorun_sign_011% (
	@ echo.	 【*自动启动功能设置】	输入【AU】 切换 〖迷你血条×〗+【显示房间密码√】+【迷你方盒√】
	) else if exist %autorun_sign_111% (
	@ echo.	 【*自动启动功能设置】	输入【AU】 切换 【迷你血条√】+【显示房间密码√】+【迷你方盒√】
	) else if exist %autorun_sign_000% (
	@ echo.	 【*自动启动功能设置】	输入【AU】 切换 〖迷你血条×〗+〖显示房间密码×〗+〖迷你方盒×〗
	) else (
	@ echo.	 【*自动启动功能设置】	未知状态，请尝试输入【AU111】 强制切换状态
)
@ echo.	 		┗（输入【AU】循环切换，输入【AU111】指令来切换，0为关1为开，输入【AUE】手动编辑设置）

@ echo.


REM call :color ED "	  ★★若想在聊天框发送装备信息，请输入 【CHAT】 进入文本设置★★"
REM @ echo.
if "%ExpandDialogSelect%"=="ON" (
	@ echo.	 【扩大NPC选取框】	输入【1】 切换 〖原版〗→【扩大√】
) else (
	@ echo.	 【扩大NPC选取框】	输入【1】 切换 【原版√】→〖扩大〗
	set set1=%NullFile%
)

if "%NewEquipment%"=="ON" (
	@ echo.	 【显示彩蛋装备文案】	输入【2】 切换 〖原版〗→【详细描述√】
) else (
	@ echo.	 【显示彩蛋装备文案】	输入【2】 切换 【原版√】→〖详细描述〗
	set set2=%NullFile%
)
@ echo.

if "%SendEquipmentToChat%"=="ON" (
	@ echo.	 【发送装备到聊天框】	输入【3】 切换 【单行 可以发送√】→〖多行 不能发送〗
) else (
	@ echo.	 【发送装备到聊天框】	输入【3】 切换 〖单行 可发送〗→【多行 不能发送√】
	set set0=%NullFile%
)

if exist %tucao_sign%  (
	@ echo.	 【装备变量与吐槽模式】	输入【Q】 切换 【带吐槽√】→〖不带吐槽〗
) else (
	@ echo.	 【装备变量与吐槽模式】	输入【Q】 切换 〖带吐槽〗→【不带吐槽√】
)   

if exist %base_with_english_sign%  (
	@ echo.	 【底材名称是否带英文】	输入【W】 切换【底材有英文名√】→〖底材无英文名〗
) else (
	@ echo.	 【底材名称是否带英文】	输入【W】 切换〖底材有英文名〗→【底材无英文名√】
)
if exist %old_baseinfo_txt_sign%  (
	@ echo.	  ┗ 【全文字版底材提示】输入【W1】 切换〖图片型底材提示〗→【（早期版本）全文字版底材提示√】
) else (
	@ echo.	  ┗ 【全文字版底材提示】输入【W1】 切换【图片型底材提示√】→〖（早期版本）全文字版底材提示〗
)

@ echo.	   

if exist %baseinfo_txt_sign%  (
	@ echo.	 【底材信息显示模式】	输入【E】 设置〖不显示底材信息〗→【显示底材辅助信息√】

		CALL :READINI %keybinds_setup%
		if "!READ_VALUE!"=="lessinfo"  (
			@ echo.	  ┣ 【底材信息模式】	输入【R】 设置【极简√】→〖简+金〗→〖简+金+底材〗→〖全信息〗
		) else if "!READ_VALUE!"=="lessinfo_rare"  (
			@ echo.	  ┣ 【底材信息模式】	输入【R】 设置〖极简〗→【简+金√】→〖简+金+底材〗→〖全信息〗
		) else if "!READ_VALUE!"=="lessinfo_rare_base"  (
			@ echo.	  ┣ 【底材信息模式】	输入【R】 设置〖极简〗→〖简+金〗→【简+金+底材√】→〖全信息〗
		) else if "!READ_VALUE!"=="fullinfo"  (
			@ echo.	  ┣ 【底材信息模式】	输入【R】 设置〖极简〗→〖简+金〗→〖简+金+底材〗→【全信息√】
		) else (
			@ echo.	  ┣ 【底材信息模式】	输入【R】 设置【未知设置？】→〖简+金+底材〗
		)
		
		CALL :READINI %amulet_info_setup%
		if "!READ_VALUE!"=="show_amulet_info"  (
			@ echo.	  ┗ 【饰品变量提示】	输入【T】 设置 〖不显示变量〗→【显示变量√】（包括：戒指/项链/珠宝/咒符）
		) else (
			@ echo.	  ┗ 【饰品变量提示】	输入【T】 设置 【不显示变量√】→〖显示变量〗（包括：戒指/项链/珠宝/咒符）
		)
) else (
	@ echo.	 【底材信息显示模式】	输入【E】 设置【不显示底材信息√】→〖显示底材辅助信息〗
)


@ echo.	
CALL :READINI %vo_file_sign%
if "!READ_VALUE!"=="LESS" (
	@ echo.	 【*删减对白文本（用于提供额外文本量）】输入【VO】 设置〖完整文本〗→【减量文本√】→〖全空文本〗
) else if "!READ_VALUE!"=="NULL" (
	@ echo.	 【*删减对白文本（用于提供额外文本量）】输入【VO】 设置〖完整文本〗→〖减量文本〗→【全空文本√】
) else if "!READ_VALUE!"=="FULL" (
	@ echo.	 【*删减对白文本（用于提供额外文本量）】输入【VO】 设置【完整文本√】→〖减量文本〗→〖全空文本〗
) else (
	@ echo.	 识别出错！【*删减对白文本（用于提供额外文本量）】输入【VO】 设置〖完整文本〗→〖减量文本〗→〖全空文本〗
)

CALL :READINI %modinfo_sign%
if "!READ_VALUE!"=="D2R" (
	@ echo.	 【*存档文件夹位置（解决旧存档冲突）】 	输入【SA】 设置【游戏默认存档位置√】→〖使用MOD独立存档位〗
) else if "!READ_VALUE!"=="MDKMOD" (
	@ echo.	 【*存档文件夹位置（解决旧存档冲突）】	 输入【SA】 设置〖游戏默认存档位置〗→【使用MOD独立存档位√】
) else (
	@ echo.	 识别出错！【*存档文件夹位置（解决旧存档冲突）】 	输入【SA】 设置〖游戏默认存档位置〗→〖使用MOD独立存档位〗
)

@ echo.

if exist %esc_quick_save_sign% (
	@ echo.	 【*按ESC直接保存游戏】 输入【ESC】设置〖原版ESC界面〗→【双击ESC直接保存游戏√】（谨防误操）
) else (
	@ echo.	 【*按ESC直接保存游戏】 输入【ESC】设置【原版ESC界面√】→〖双击ESC直接保存游戏〗
)
if exist %no_loading_anime% (
@ echo.	 【*屏蔽加载开门动画】	输入【A】 设置〖原版状态〗→【屏蔽载入时的开门动画√】（不能跳过加载过程）
) else (
@ echo.	 【*屏蔽加载开门动画】	输入【A】 设置【原版状态√】→〖屏蔽载入时的开门动画〗
)

if exist %function_btn% (
@ echo.	 【虚空按键功能】	输入【F】 设置〖原版状态〗→【UI显示虚空按键√】
) else (
@ echo.	 【虚空按键功能】	输入【F】 设置【原版状态√】→〖UI显示虚空按键〗
)

if exist %anya_shop% (
	@ echo.	 【商店刷装备模式】	输入【Y】 设置〖原版状态〗→〖染色共存模式〗→【刷特定词条模式√】→〖刷底材模式〗
) else if exist %base_shop% (
	@ echo.	 【商店刷装备模式】	输入【Y】 设置〖原版状态〗→〖染色共存模式〗→〖刷特定词条模式〗→【刷底材模式√】
) else if exist %color_shop% (
	@ echo.	 【商店刷装备模式】	输入【Y】 设置〖原版状态〗→【染色共存模式√】→〖刷特定词条模式〗→〖刷底材模式〗
) else (
	@ echo.	 【商店刷装备模式】	输入【Y】 设置【原版状态√】→〖染色共存模式〗→〖刷词条模式〗→〖刷底材模式〗
)
@ echo.	  ┗ 【商店刷装备模式】	输入【Y1】打开【编辑刷商店词条文件】

if exist %click_quick_buy% (
@ echo.	 【*商店快速购买】	输入【U】 设置〖原版状态〗→【单击快速购买√】
) else (
@ echo.	 【*商店快速购买】	输入【U】 设置【原版状态√】→〖单击快速购买〗
)

@ echo.	 
@ echo.	 屏蔽游戏中遮挡视线的模型：
if exist %del_travincal_hall% (
@ echo.		 ┣  输入【H】 切换【屏蔽崔凡客议会大厅的墙壁与外围立柱 √】
) else (
@ echo.		 ┣  输入【H】 切换【屏蔽崔凡客议会大厅的墙壁与外围立柱 ×】
)
if exist %del_chaos_door% (
@ echo.		 ┣  输入【J】 切换【屏蔽混沌避难所大门 √】
) else (
@ echo.		 ┣  输入【J】 切换【屏蔽混沌避难所大门 ×】
)
if exist %del_act4_lava% (
@ echo.		 ┣  输入【K】 切换【屏蔽火焰之河的岩浆 √】
) else (
@ echo.		 ┣  输入【K】 切换【屏蔽火焰之河的岩浆 ×】
)
if exist %del_ballair_pillars% (
@ echo.		 ┗  输入【L】 切换【屏蔽巴尔王座中的立柱与竖旗 √】
) else (
@ echo.		 ┗  输入【L】 切换【屏蔽巴尔王座中的立柱与竖旗 ×】
) 

@ echo.
@ echo.	 输入【M1】 ※【DIY修改金币、无形与有孔装备颜色】打开系统基础颜色定义文件［profilehd.json］
@ echo.	 输入【M2】 ※【DIY修改符文、BUFF结束音效】	打开音效文件夹［sfx目录］
REM @ echo.	 输入【N】 ※【DIY修改掉落显示与规则】		打开掉落规则自定义文件［item-gems.json］
@ echo.	 输入【M3】 ※【DIY修改底材信息】		打开底材信息自定义文件［item-nameaffixes.json］
@ echo.	 输入【M4】 ※【DIY修改文字信息】		打开文本信息自定义文件［mercenaries.json］
@ echo.	 输入【M5】 ※【打开存档文件夹】→［%d2r_save%］
@ echo.
set  obj=""
set /p obj= 输入数字或字母按回车执行：

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
@echo	  无效输入，请看清楚【 】框中的字母重新输入！
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
REM @ echo.                   ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
REM @ echo.　　               ┃         D2R MDK MOD 自定义设置器 By ZhangMDKRU#2129        ┃
REM @ echo.　　               ┃                 Ver.%Ver%        ┃
REM @ echo.                   ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

:: 颜色 0 黑、1 蓝、2 绿、3 天青、4 红、5 紫、6、棕黄、7 亮灰、8 暗灰、9 青
:: 颜色 A 亮绿、B 亮青、C 浅红、D 亮紫、E 浅黄、F 白色
:: color E0     color D0      背景+文字

:: 0 黑、1 蓝、2 绿、3 天青、4 红、5 紫、6、棕黄、7 亮灰、8 暗灰、9 青
:: A 亮绿、B 亮青、C 浅红、D 亮紫、E 浅黄、F 白色
:: call :color E2 "text"
:: 72代表背景色+文字色，7为背景色 2为文字色，输出后不会换行，需要用echo.来进行换行

@ echo.	━━━━━━━┃ D2R MDK MOD 设置器 %Ver% 适配%FOR_MOD_VER%版  By ZhangMDKRU#2129┃━━━━━━━

if exist %DEBUG_FILE% (
	call :color CF "		DEBUG模式ON		"
)
if exist %SETUP_FOLDER_FILE% (
	call :color DF "		封装模式ON		"
)
if not "%MFD%"=="MDK" (
	call :color 3F "	MOD文件夹：%MFD%	"
)

@echo.  
@echo.  	【请按键选择对应功能页面】▼
call :color E0 "	【Z】游戏功能设置 "
call :color DF "【X】光线辅助设置 "
@echo. 【C】屏蔽掉落设置 【V】血球音效设置 【B】UI风格设置 【N】单机设置
@ echo.
@ echo.　	◆◆◆◆ MDK MOD 光线辅助相关功能设置 ◆◆◆◆

set /p entry_guider_mode=<%entry_guider_sign%
if "%entry_guider_mode%"=="light" (
@ echo.	 【重点区域入口引导】	输入【1】 切换〖原版状态〗→【白色光柱√】→〖光圈指引〗
) else if "%entry_guider_mode%"=="circle" (
@ echo.	 【重点区域入口引导】	输入【1】 切换〖原版状态〗→〖白色光柱〗→【光圈指引√】
) else (
@ echo.	 【重点区域入口引导】	输入【1】 切换【原版状态√】→〖白色光柱〗→〖光圈指引〗
)
if exist %wp_guider% (
@ echo.	 【传送点光柱引导】	输入【2】 切换〖原版状态〗→【黄色光柱√】
) else (
@ echo.	 【传送点光柱引导】	输入【2】 切换【原版状态√】→〖黄色光柱〗
)
if exist %lc_light% (
@ echo.	 【大型咒符光柱】	输入【3】 切换〖原版状态〗→【大型咒符（LC板子）带光柱√】
) else (
@ echo.	 【大型咒符光柱】	输入【3】 切换【原版状态√】→〖大型咒符（LC板子）带光柱〗
)

if exist %sc_light% (
@ echo.	 【小型/巨型咒符光柱】	输入【4】 设置〖原版状态〗→【小型/巨型咒符（SC/GC板子）带光柱√】
) else (
@ echo.	 【小型/巨型咒符光柱】	输入【4】 设置【原版状态√】→〖小型/巨型咒符（SC/GC板子）带光柱〗
)

if exist %amulet_light% (
@ echo.	 【项链闪光特效】	输入【5】 设置〖原版状态〗→【项链带闪光特效√】
) else (
@ echo.	 【项链闪光特效】	输入【5】 设置【原版状态√】→〖项链带闪光特效〗
)

if exist %ring_light% (
@ echo.	 【戒指闪光特效】	输入【6】 设置〖原版状态〗→【戒指带闪光特效√】
) else (
@ echo.	 【戒指闪光特效】	输入【6】 设置【原版状态√】→〖戒指带闪光特效〗
)
@ echo. 

if not exist %all_gem% (
@ echo.	 【宝石光柱特效】	输入【7】 设置〖原版状态〗→【全部宝石√】→〖无瑕/珠宝〗
) else if not exist %high_gem% (
@ echo.	 【宝石光柱特效】	输入【7】 设置〖原版状态〗→〖全部宝石〗→【无瑕/珠宝√】
) else (
@ echo.	 【宝石光柱特效】	输入【7】 设置【原版状态√】→〖全部宝石〗→〖无瑕/珠宝〗
)


set /p rune_light_setup_setting=<%rune_light_setup%
if "%rune_light_setup_setting%"=="all_effects" (
@ echo.	 【高等符文掉落特效】	输入【8】 设置〖原版状态〗→〖光柱效果〗→【光柱+星光效果（增加负荷）√】
) else if "%rune_light_setup_setting%"=="light_arrow" (
@ echo.	 【高等符文掉落特效】	输入【8】 设置〖原版状态〗→【光柱效果√】→〖光柱+星光效果（增加负荷）〗
) else (
@ echo.	 【高等符文掉落特效】	输入【8】 设置【原版状态√】→〖光柱效果〗→〖光柱+星光效果（增加负荷）〗
)

if exist %craft_rune_light% (
@ echo.	 【手工符文光柱】	输入【9】 设置〖原版状态〗→【手工符文（4/8/11/12#）带光柱特效√】
) else (
@ echo.	 【手工符文光柱】	输入【9】 设置【原版状态√】→〖手工符文（4/8/11/12#）带光柱特效〗
)

@ echo. 
if exist %objects_aura% (
@ echo.	 【宝箱类物品发光】	输入【U】 设置〖原版状态〗→【宝箱类物品发光√】
) else (
@ echo.	 【宝箱类物品发光】	输入【U】 设置【原版状态√】→〖宝箱类物品发光〗
)
if exist %dest_aura% (
@ echo.	 【可踢坏物品发光】	输入【I】 设置〖原版状态〗→【可踢坏物品发光√】
) else (
@ echo.	 【可踢坏物品发光】	输入【I】 设置【原版状态√】→〖可踢坏物品发光〗
)
if exist %shrines_light% (
@ echo.	 【神坛与水井加光柱】	输入【O】 设置〖原版状态〗→【神坛与水井附带光柱√】
) else (
@ echo.	 【神坛与水井加光柱】	输入【O】 设置【原版状态√】→〖神坛与水井附带光柱〗
)
@ echo.
if exist %player_light% (
@ echo.	 【*全屏幕光源照亮Ⅰ】	输入【P】 设置〖原版状态〗→【全图光源（自身顶置光源）√】
) else (
@ echo.	 【*全屏幕光源照亮Ⅰ】	输入【P】 设置【原版状态√】→〖全图光源（自身顶置光源）〗
)
if exist %vis_light% (
@ echo.	 【*全屏幕光源照亮Ⅱ】	输入【F】 设置〖原版环境光状态〗→【全图光源（使用环境光源）√】
) else (
@ echo.	 【*全屏幕光源照亮Ⅱ】	输入【F】 设置【原版环境光状态√】→〖全图光源（使用环境光源）〗
)
@ echo.

if exist %monster_randtransforms_on% (
@ echo.	 【*亮红色凸显精英怪】	输入【Y】 设置〖原版状态〗→【亮红色凸显精英怪√】（部分精英不变色）
) else (
@ echo.	 【*亮红色凸显精英怪】	输入【Y】 设置【原版状态√】→〖亮红色凸显精英怪〗
)

@ echo.	 【*怪物辅助标记与发光模式】
if exist %enemy_nosign% (
	@ echo.		 ┗  输入【A】 切换【原版状态 √】→〖危险怪物有符文标记〗→〖怪物脚底光源+危险怪物标记〗
) else if exist %enemy_nolight% (
	@ echo.		 ┗  输入【A】 切换〖原版状态〗→【危险怪物有符文标记 √】→〖怪物脚底光源+危险怪物标记〗
) else if exist %enemy_light_2% (
	@ echo.		 ┗  输入【A】 切换〖原版状态〗→〖危险怪物有符文标记〗→【怪物脚底光源+危险怪物标记 √】
) else (
	@ echo.		 ┗  输入【A】 切换【未知状态】→〖怪物脚底光源+危险怪物标记〗
)


@ echo.
set  obj=""
set /p obj= 输入数字或字母按回车执行：

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
@echo	  无效输入，请看清楚【 】框中的字母重新输入！
@echo.
pause
ping -n 1 127.1>nul 
goto LightSetupMain


REM ===Bnet文件解析的程序部分===
	REM ====执行程序====
	:set_SendEquipmentToChat
		if "%SendEquipmentToChat%"=="ON" (
		@ echo.	按 【0】设置，装备显示发送到聊天框：	【单行 可以发送√】→〖多行 不能发送〗
			REM ==修改目标文件==
			set set0=%NullFile%
			REM ==修改标志文件==
			set arr[0]=OFF
		) else (
		@ echo.	按 【0】设置，彩蛋装备文案说明：	〖单行 可发送〗→【多行 不能发送√】
			REM ==修改目标文件==
			set set0=%SendEquipmentToChatFile%
			REM ==修改标志文件==
			set arr[0]=ON
		)
		REM ==执行修改==
	goto CreateBnetFile

	:set_ExpandDialogSelect
		if "%ExpandDialogSelect%"=="ON" (
			@ echo.		按 【1】设置，扩大NPC对话选取框：	〖原版〗→【扩大√】
			REM ==修改目标文件==
			set set1=%NullFile%
			REM ==修改标志文件==
			set arr[1]=OFF
		) else (
			@ echo.		按 【2】设置，扩大NPC对话选取框：	【原版√】→〖扩大〗
			REM ==修改目标文件==
			set set1=%ExpandDialogSelectFile%
			REM ==修改标志文件==
			set arr[1]=ON
		)
		REM ==执行修改==
	goto CreateBnetFile

	:set_NewEquipment
		if "%NewEquipment%"=="ON" (
			@ echo.	按 【2】设置，彩蛋装备文案说明：	〖原版〗→【详细描述√】
			REM ==修改目标文件==
			set set2=%NullFile%
			REM ==修改标志文件==
			set arr[2]=OFF
		) else (
			@ echo.	按 【2】设置，彩蛋装备文案说明：	【原版√】→〖详细描述〗
			REM ==修改目标文件==
			set set2=%NewEquipmentFile%
			REM ==修改标志文件==
			set arr[2]=ON
		)
		REM ==执行修改==
	goto CreateBnetFile

	REM ==执行修改程序==
	:CreateBnetFile
		REM ==执行修改目标文件==
		REM ==有几个设置项，就需要增加几个设置碎片==
		set rule_file=%head%+%bnet_text%+%set0%+%set1%+%set2%+%foot%
		rem set rule_file=%head%+%foot%
		if exist %TBnet_file% (del %TBnet_file%)
		@echo.rule_file=%rule_file%
		@echo. 
		@echo.TBnet_file=%TBnet_file%
		@echo. 
		REM pause
		@echo.  COPY程序开始
		copy /Y /b %rule_file% %TBnet_file%
		@echo.  COPY程序结束
		
		REM ==执行修改标志文件==
		@echo.  生成标志开始：%arr[0]%,%arr[1]%,%arr[2]%,%arr[3]%,%arr[4]%,%arr[5]%
		@echo.%arr[0]%,%arr[1]%,%arr[2]%,%arr[3]%,%arr[4]%,%arr[5]%>%CheckSign%
		
		@echo.  程序执行结束
		REM pause
	goto FunctionEnd
REM ===Bnet文件解析程序END===


REM ===设置器内置隐藏指令部分===
:set_mod_folder
	cls
	@ echo.		 修改MOD文件夹，输入后设置器将改为设置该文件夹的MOD，而并非默认的MDK文件夹。
	set  newmod=""
	set /p newmod= 请输入需要修改的MOD文件夹名：
	
	if /i "%newmod%"=="" Goto set_mod_folder
	
	if exist %MODS%\!newmod!\!newmod!.mpq (
		@ echo.		 检测到新的MOD文件夹，设置器将切换为该文件夹。
		set MDKMOD=%MODS%\%MOD_FOLDER%
	) else (
		@ echo.		 无法检测到MOD文件夹，
		set MDKMOD=%MODS%\%MOD_FOLDER%
	)

Goto FunctionEnd

:set_debug_file
if exist %DEBUG_FILE% (
	@echo	  当前DEBUG模式【开启】，即将【关闭】DEBUG模式
	del %DEBUG_FILE%
) else (
	@echo	  当前DEBUG模式【关闭】，即将【开启】DEBUG模式
	@echo."x">%DEBUG_FILE%
)
Goto FunctionEnd

:set_setup_folder_file
if exist %SETUP_FOLDER_FILE% (
	@echo	  当前封装模式【开启】，即将【关闭】封装模式
	del %SETUP_FOLDER_FILE%
) else (
	@echo	  当前封装模式【关闭】，即将【开启】封装模式
	@echo."x">%SETUP_FOLDER_FILE%
)
Goto FunctionEnd

:run_d2r_game
@ echo.	 将运行程序指令: !d2r_path!\D2R.exe -mod MDK -txt -w
!d2r_path!\D2R.exe -mod MDK -txt -w
Goto FunctionEnd


REM =============================================================
REM =============================================================
REM =============================================================
REM =============================================================
REM =============================================================
:set_click_quick_buy
	if exist %click_quick_buy% (
		@ echo.	 【商店快速购买】	输入【U】 设置〖原版状态〗→【单击快速购买√】
		del %click_quick_buy%
	) else (
		@ echo.	 【商店快速购买】	输入【U】 设置【原版状态√】→〖单击快速购买〗
		COPY /Y %click_quick_buy_off% %click_quick_buy%
	)
Goto FunctionEnd


:set_modinfo_file
	CALL :READINI %modinfo_sign%
	if "!READ_VALUE!"=="D2R" (
		@ echo.	 【*存档文件夹位置（解决旧存档冲突）】 输入【SA】 设置【游戏默认存档位置√】→〖使用MOD独立存档位〗
		COPY /Y %modinfo_mdkmod% %modinfo_file%
		@echo.MDKMOD>!READ_FILE!
	) else if "!READ_VALUE!"=="NULL" (
		@ echo.	 【*存档文件夹位置（解决旧存档冲突）】 输入【SA】 设置〖游戏默认存档位置〗→【使用MOD独立存档位√】
		COPY /Y %modinfo_d2r% %modinfo_file%
		@echo.D2R>!READ_FILE!
	) else (
		@ echo.	 识别出错！【*存档文件夹位置（解决旧存档冲突）】 输入【SA】 设置〖游戏默认存档位置〗→〖使用MOD独立存档位〗
		COPY /Y %modinfo_d2r% %modinfo_file%
		@echo.D2R>!READ_FILE!
	)
Goto FunctionEnd

:set_vo_file
	CALL :READINI %vo_file_sign%
	if "!READ_VALUE!"=="LESS" (
		@ echo.	 【删减对白文本（用于提供额外文本量）】 	输入【VO】 设置〖完整文本〗→【减量文本√】→〖全空文本〗
		COPY /Y %vo_null% %vo_file%
		@echo.NULL>!READ_FILE!
	) else if "!READ_VALUE!"=="NULL" (
		@ echo.	 【删减对白文本（用于提供额外文本量）】 	输入【VO】 设置〖完整文本〗→〖减量文本〗→【全空文本√】
		COPY /Y %vo_full% %vo_file%
		@echo.FULL>!READ_FILE!
	) else (
		@ echo.	 【删减对白文本（用于提供额外文本量）】 	输入【VO】 设置【完整文本√】→〖减量文本〗→〖全空文本〗
		COPY /Y %vo_less% %vo_file%
		@echo.LESS>!READ_FILE!
	)
Goto FunctionEnd


:set_eli_monster_highlight
if exist %monster_randtransforms_on% (
	@ echo.	 【*亮红色凸显精英怪】	输入【N】 设置〖原版状态〗→【亮红色凸显精英怪√】（部分精英不变色）
	ren %monster_randtransforms_on% randtransforms.json.mdk
) else (
	@ echo.	 【*亮红色凸显精英怪】	输入【N】 设置【原版状态√】→〖亮红色凸显精英怪〗
	ren %monster_randtransforms_off% randtransforms.json
)
Goto FunctionEnd

:set_no_panelborder

	if not exist %no_panelborder% (
		@ echo.	 当前是无边框，改成有边框
		ren %d2r_layouts%\panelborderspanelhd.json panelborderspanelhd.json.mdk
	) else (
		@ echo.	 当前是有边框，改成无边框
		ren %d2r_layouts%\panelborderspanelhd.json.mdk panelborderspanelhd.json
	)

Goto FunctionEnd

:set_no_onekey_newgame

	if not exist %no_onekey_newgame% (
		@ echo.	 当前是无按键，改成有按键
		ren %d2r_layouts%\hubQuickJoinGameButtonhd.json hubQuickJoinGameButtonhd_onekey.json
		ren %d2r_layouts%\hubQuickJoinGameButtonhd_normal.json hubQuickJoinGameButtonhd.json
	) else (
		@ echo.	 当前是有按键，改成无按键
		ren %d2r_layouts%\hubQuickJoinGameButtonhd.json hubQuickJoinGameButtonhd_normal.json
		ren %d2r_layouts%\hubQuickJoinGameButtonhd_onekey.json hubQuickJoinGameButtonhd.json
	)

Goto FunctionEnd

:set_no_loading_anime

	if exist %no_loading_anime% (
		@ echo.	 【*屏蔽载入时的开门动画】 输入【E】 设置〖原版状态〗→【屏蔽载入时的开门动画√】（不能跳过加载过程）
		ren %loading_panel_hd% loadscreenpanelhd.json.mdk
		ren %loading_panel% loadscreenpanel.json.mdk
	) else (
		@ echo.	 【*屏蔽载入时的开门动画】 输入【E】 设置【原版状态√】→〖屏蔽载入时的开门动画〗
		ren %loading_panel_hd%.mdk loadscreenpanelhd.json
		ren %loading_panel%.mdk loadscreenpanel.json
	)

Goto FunctionEnd

:clean_setter_lang_sign_file
	if "!d2r_path!"=="." (
		@ echo.	 将清楚设置器语言与本身的记号文件（不包括MOD标记文件）...
		DEL %setter_lang_cht%
		DEL %setter_lang_chs%
		DEL %setter_lang_ok%
		DEL %setter_ver_check%
		DEL %MDKMOD%\data\MDK*
		@ echo.	 清除完成。
	) else (
		@ echo.	 操作错误，当前设置器文件未处于D2R目录中。
		@ echo.	 请将设置器放到D2R游戏文件夹中之后再运行该指令。
	)
	pause
Goto FunctionEnd

:copy_setter_to_db
	if "!d2r_path!"=="." (
		@ echo.	 将当前设置器强制覆盖到设置器数据库...
		COPY /Y %setter_file% %setter_lang_cht_file%
		COPY /Y %setter_file% %setter_lang_chs_file%
		@ echo.	 覆盖完成，请自己转换一下繁体版设置器的繁体汉字
	) else (
		@ echo.	 操作错误，当前设置器文件未处于D2R目录中。
		@ echo.	 请将设置器放到D2R游戏文件夹中之后再运行该指令。
	)
	pause
Goto FunctionEnd

:set_setter_ok
	@echo. x>%setter_lang_ok%
Goto FunctionEnd

:set_setter_cht
	@ echo.	 设置器语言【简体中文】：輸入【CHT】設置為【繁體版MDK MOD設置器】（输入【ISOK】不再显示）
	COPY /Y %setter_lang_cht_file% %setter_file%
	del %setter_lang_chs%
	@echo. x>%setter_lang_cht%
	%setter_file%
	goto eof
Goto FunctionEnd

:set_setter_chs
	@ echo.	 設置器語言【繁體中文】：输入【CHS】设置为【简体版MDK MOD设置器】（输入【ISOK】不再显示）
	COPY /Y %setter_lang_chs_file% %setter_file%
	del %setter_lang_cht%
	@echo. x>%setter_lang_chs%
	%setter_file%
	goto eof
Goto FunctionEnd

REM ===设置器内置隐藏指令部分END===

:set_quick_friendlist
	if exist %quick_friendlist% (
		@ echo.	 【*快捷显示好友列表】	输入【FL】 设置〖原版状态〗→【选人页面显示好友列表√】
		ren %d2r_layouts%\MDKMODShowFriendListhd.json MDKMODShowFriendListhd.json.mdk
	) else (
		@ echo.	 【*快捷显示好友列表】	输入【FL】 设置【原版状态√】→〖选人页面显示好友列表〗
		ren %d2r_layouts%\MDKMODShowFriendListhd.json.mdk MDKMODShowFriendListhd.json
	)
Goto FunctionEnd

:set_deadbody_light
if exist %deadbody_sor% (
	@ echo.	 【*尸体附加光环特效】	输入【S】 设置〖原版状态〗→【尸体附加光柱+巴尔环特效√】（进游戏时偶尔也会显示）
	ren %deadbody_sor% combined.timelines.mdk
	ren %deadbody_pal% combined.timelines.mdk
	ren %deadbody_bar% combined.timelines.mdk
	ren %deadbody_ama% combined.timelines.mdk
	ren %deadbody_nec% combined.timelines.mdk
	ren %deadbody_dru% combined.timelines.mdk
	ren %deadbody_asn% combined.timelines.mdk
) else (
	@ echo.	 【*尸体附加光环特效】	输入【S】 设置【原版状态√】→〖尸体附加光柱+巴尔环特效〗
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
	@ echo.	 【怪物辅助标记状态模式】（仅能选择其中一种模式）
	if exist %enemy_nosign% (
		@ echo.		 ┗  输入【A】 切换【原版状态 √】→〖危险怪物有符文标记〗→〖怪物脚底光源+危险怪物标记〗
		Goto set_only_rune_mark_mode
	) else if exist %enemy_nolight% (
		@ echo.		 ┗  输入【A】 切换〖原版状态〗→【危险怪物有符文标记 √】→〖怪物脚底光源+危险怪物标记〗
		Goto set_light_mark_mode
	) else if exist %enemy_light_2% (
		@ echo.		 ┗  输入【A】 切换〖原版状态〗→〖危险怪物有符文标记〗→【怪物脚底光源+危险怪物标记 √】
		Goto set_no_mark_mode
	) else (
		@ echo.		 ┗  输入【A】 切换【未知状态】→〖怪物脚底光源+危险怪物标记〗
		Goto set_light_mark_mode
	)
Goto FunctionEnd

:set_old_baseinfo_ver

if exist %old_baseinfo_txt_sign%  (
	@ echo.	  ┗  *输入【Y2】 切换底材信息显示版本：【旧版的文字型底材提示√】　〖新版图片型底材提示×〗
	del %old_baseinfo_txt_sign%
	copy /Y %new_baseinfo_ver_file% %d2r_strings%\bnet.json
) else (
	@ echo.	  ┗  *输入【Y1】 切换底材信息显示版本：〖旧版的文字型底材提示×〗　【新版图片型底材提示√】
	@ECHO.  "x">%old_baseinfo_txt_sign%
	copy /Y %old_baseinfo_ver_file% %d2r_strings%\bnet.json
)

Goto FunctionEnd

:set_pause_file
if exist %esc_quick_save_sign% (
	@ echo.	 【*按ESC直接保存游戏】 输入【ESC】 设置〖原版ESC界面〗→【按ESC直接保存游戏√】（谨防误操）
	del %pause_file%
	copy /Y %AutorunCheckOff% %QuiskEscExit%
	copy /Y %AutorunCheckOffLow% %QuiskEscExitLow%
	del %esc_quick_save_sign%
) else (
	@ echo.	 【*按ESC直接保存游戏】 输入【ESC】 设置【原版ESC界面√】→〖按ESC直接保存游戏〗
	copy /Y %esc_quick_save_pause_file% %pause_file%
	copy /Y %AutorunCheckOn% %QuiskEscExit%
	copy /Y %AutorunCheckOnLow% %QuiskEscExitLow%
	@echo."x">%esc_quick_save_sign%
)
Goto FunctionEnd

:set_autorun_2nd
	if exist %AutorunShowRes_sign% (
		@ echo.	 【*自动启动功能设置2】	输入【AU20】 切换 【自动显示抗性与技能伤害√】
		copy /Y %AutorunShowRes_off_file% %autorun_file_2nd%
		del %AutorunShowRes_sign%
		
	) else (
		@ echo.	 【*自动启动功能设置2】	输入【AU21】 切换 〖自动显示抗性与技能伤害×〗
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
		@ echo.	  ┗  输入【AU】 切换 【迷你方盒√】　〖迷你血条×〗　〖显示房间密码×〗
		copy /Y %autorun_sign_010_file% %autorun_file%
		del %d2r_layouts%\json_db\*.autorunsign
		@echo. "x" > %autorun_sign_010%
	) else if exist %autorun_sign_010% (
		@ echo.	  ┗  输入【AU】 切换 〖迷你方盒×〗　【迷你血条√】　〖显示房间密码×〗
		copy /Y %autorun_sign_001_file% %autorun_file%
		del %d2r_layouts%\json_db\*.autorunsign
		@echo. "x" > %autorun_sign_001%
	) else if exist %autorun_sign_001% (
		@ echo.	  ┗  输入【AU】 切换 〖迷你方盒×〗　〖迷你血条×〗　【显示房间密码√】
		copy /Y %autorun_sign_110_file% %autorun_file%
		del %d2r_layouts%\json_db\*.autorunsign
		@echo. "x" > %autorun_sign_110%
	) else if exist %autorun_sign_110% (
		@ echo.	  ┗  输入【AU】 切换 【迷你方盒√】　【迷你血条√】　〖显示房间密码×〗
		copy /Y %autorun_sign_101_file% %autorun_file%
		del %d2r_layouts%\json_db\*.autorunsign
		@echo. "x" > %autorun_sign_101%
	) else if exist %autorun_sign_101% (
		@ echo.	  ┗  输入【AU】 切换 【迷你方盒√】　〖迷你血条×〗　【显示房间密码√】
		copy /Y %autorun_sign_011_file% %autorun_file%
		del %d2r_layouts%\json_db\*.autorunsign
		@echo. "x" > %autorun_sign_011%
	) else if exist %autorun_sign_011% (
		@ echo.	  ┗  输入【AU】 切换 〖迷你方盒×〗　【迷你血条√】　【显示房间密码√】
		copy /Y %autorun_sign_111_file% %autorun_file%
		del %d2r_layouts%\json_db\*.autorunsign
		@echo. "x" > %autorun_sign_111%
	) else if exist %autorun_sign_111% (
		@ echo.	  ┗  输入【AU】 切换 【迷你方盒√】　【迷你血条√】　【显示房间密码√】
		copy /Y %autorun_sign_000_file% %autorun_file%
		del %d2r_layouts%\json_db\*.autorunsign
		@echo. "x" > %autorun_sign_000%
		copy /Y %AutorunCheck%\CLOSE.sprite %AutorunCheck%\CHECK.sprite
		copy /Y %AutorunCheck%\CLOSE.lowend.sprite %AutorunCheck%\CHECK.lowend.sprite
	) else if exist %autorun_sign_000% (
		@ echo.	  ┗  输入【AU】 切换 〖迷你方盒×〗　〖迷你血条×〗　〖显示房间密码×〗
		copy /Y %autorun_sign_100_file% %autorun_file%
		del %d2r_layouts%\json_db\*.autorunsign
		@echo. "x" > %autorun_sign_100%
	) else (
		@ echo.	  ┗  未知状态，请尝试输入【AU111】 强制切换状态
		copy /Y %autorun_sign_111_file% %autorun_file%
		del %d2r_layouts%\json_db\*.autorunsign
		@echo. "x" > %autorun_sign_111%
	)
Goto FunctionEnd

:set_del_travincal_hall
	if exist %del_travincal_hall% (
	@ echo.		 ┣  输入【H】 选择【屏蔽崔凡客议会大厅的墙壁与外围立柱 √】
	ren %d2r_env%\preset\act3\travincal\travn.json travn_mdk.json
	ren %d2r_env%\preset\act3\travincal\travsw.json travsw_mdk.json
	) else (
	@ echo.		 ┣  输入【H】 选择【屏蔽崔凡客议会大厅的墙壁与外围立柱 ×】
	ren %d2r_env%\preset\act3\travincal\travn_mdk.json travn.json
	ren %d2r_env%\preset\act3\travincal\travsw_mdk.json travsw.json
	)
Goto FunctionEnd
:set_del_chaos_door
	if exist %del_chaos_door% (
	@ echo.		 ┣  输入【J】 选择【屏蔽混沌避难所大门 √】
	ren %d2r_env%\preset\act4\diab\entry1.json entry1_mdk.json
	) else (
	@ echo.		 ┣  输入【J】 选择【屏蔽混沌避难所大门 ×】
	ren %d2r_env%\preset\act4\diab\entry1_mdk.json entry1.json
	)
Goto FunctionEnd
:set_del_act4_lava
	if exist %del_act4_lava% (
		@ echo.		 ┣  输入【K】 选择【屏蔽火焰之河的岩浆 √】
		ren %d2r_env%\model\act4\lava lava_mdk
		del %MDKMOD%\data\hd\objects\vfx_only\hell_smoke.json
		del %MDKMOD%\data\hd\objects\vfx_only\hellfire_1.json
		del %MDKMOD%\data\hd\objects\vfx_only\hellfire_2.json
		del %MDKMOD%\data\hd\objects\vfx_only\hellfire_3.json
	) else (
	@ echo.		 ┣  输入【K】 选择【屏蔽火焰之河的岩浆 ×】
		ren %d2r_env%\model\act4\lava_mdk lava
		copy /Y %MDKMOD%\data\hd\objects\vfx_only\mdk\hell_smoke.json %MDKMOD%\data\hd\objects\vfx_only
		copy /Y %MDKMOD%\data\hd\objects\vfx_only\mdk\hellfire_1.json %MDKMOD%\data\hd\objects\vfx_only
		copy /Y %MDKMOD%\data\hd\objects\vfx_only\mdk\hellfire_2.json %MDKMOD%\data\hd\objects\vfx_only
		copy /Y %MDKMOD%\data\hd\objects\vfx_only\mdk\hellfire_3.json %MDKMOD%\data\hd\objects\vfx_only
	)
Goto FunctionEnd
:set_del_ballair_pillars
	if exist %del_ballair_pillars% (
	@ echo.		 ┗  输入【L】 选择【屏蔽巴尔王座中的立柱与竖旗 √】
	ren %d2r_env%\preset\expansion\baallair\wthrone.json wthrone_mdk.json
	) else (
	@ echo.		 ┗  输入【L】 选择【屏蔽巴尔王座中的立柱与竖旗 ×】
	ren %d2r_env%\preset\expansion\baallair\wthrone_mdk.json wthrone.json
	) 
Goto FunctionEnd

:set_show_baseinfo
	if exist %baseinfo_txt_sign%  (
		@ echo.	 设置 【关闭底材辅助信息】
		ren %d2r_excel%\armor.txt armor.txt.mdk
		ren %d2r_excel%\weapons.txt weapons.txt.mdk
	) else (
		@ echo.	 设置 【显示底材详细信息】
		ren %d2r_excel%\armor.txt.mdk armor.txt
		ren %d2r_excel%\weapons.txt.mdk weapons.txt
	)
Goto FunctionEnd
:set_amulet_info
	CALL :READINI %amulet_info_setup%
	if "!READ_VALUE!"=="show_amulet_info"  (
		@ echo.	  ┗ 【戒指/项链/珠宝/咒符变量提示】	输入【T2】 设置〖不显示变量〗→【显示变量√】
		COPY /Y %amulet_info_hide% %d2r_strings%\npcs.json
		@echo hide_amulet_info>!READ_FILE!
	) else (
		@ echo.	  ┗ 【戒指/项链/珠宝/咒符变量提示】	输入【T2】 设置【不显示变量√】→〖显示变量〗
		COPY /Y %amulet_info_show% %d2r_strings%\npcs.json
		@echo show_amulet_info>!READ_FILE!
	)
Goto FunctionEnd
:set_baseinfo_version
	CALL :READINI %keybinds_setup%
	if "!READ_VALUE!"=="lessinfo"  (
		@ echo.	  ┗ 【底材信息模式】	输入【T】 设置【极简√】→〖简+金〗→〖简+金+底材〗→〖全信息〗
		COPY /Y %keybinds_lessinfo_rare% %d2r_strings%\keybinds.json
		@echo lessinfo_rare>!READ_FILE!
	) else if "!READ_VALUE!"=="lessinfo_rare"  (
		@ echo.	  ┗ 【底材信息模式】	输入【T】 设置〖极简〗→【简+金√】→〖简+金+底材〗→〖全信息〗
		COPY /Y %keybinds_lessinfo_rare_base% %d2r_strings%\keybinds.json
		@echo lessinfo_rare_base>!READ_FILE!
	) else if "!READ_VALUE!"=="lessinfo_rare_base"  (
		@ echo.	  ┗ 【底材信息模式】	输入【T】 设置〖极简〗→〖简+金〗→【简+金+底材√】→〖全信息〗
		COPY /Y %keybinds_fullinfo% %d2r_strings%\keybinds.json
		@echo fullinfo>!READ_FILE!
	) else if "!READ_VALUE!"=="fullinfo"  (
		@ echo.	  ┗ 【底材信息模式】	输入【T】 设置〖极简〗→〖简+金〗→〖简+金+底材〗→【全信息√】
		COPY /Y %keybinds_lessinfo% %d2r_strings%\keybinds.json
		@echo lessinfo>!READ_FILE!
	) else (
		@ echo.	  ┗ 【底材信息模式】	输入【T】 设置〖极简〗→【简+金√】→〖简+金+底材〗→〖全信息〗
		COPY /Y %keybinds_lessinfo_rare_base% %d2r_strings%\keybinds.json
		@echo lessinfo_rare_base>!READ_FILE!
	)
Goto FunctionEnd

:set_base_with_english
	REM 【底材信息模式】	输入【Y】 切换【底材有英文名√】→〖底材无英文名〗→〖单行模式（可发聊天框）〗
	if exist %base_with_english_sign%  (
		@ echo.	 当前有英文，设置 【关闭英文名】
		copy /Y %base_without_english% %item-nameaffixes%
		del %base_with_english_sign%
		del %base_with_english_sign_sgline%
		del %base_no_baseinfo_sign%
	) else (
		@ echo.	 当前单行模式，设置 【开启英文名】
		copy /Y %base_with_english% %item-nameaffixes%
		del %base_with_english_sign_sgline%
		del %base_no_baseinfo_sign%
		@ECHO.  "x">%base_with_english_sign%
	)
Goto FunctionEnd

:set_shrines_light

if exist %shrines_light% (
	@ echo.	 设置 【关闭神坛与水井附带光柱】
	ren %objects_folder%\shrines_healthmana shrines_healthmana_mdk
	ren %objects_folder%\shrines_other shrines_other_mdk
	ren %objects_folder%\wells wells_mdk
) else (
	@ echo.	 设置 【开启神坛与水井附带光柱】
	ren %objects_folder%\shrines_healthmana_mdk shrines_healthmana
	ren %objects_folder%\shrines_other_mdk shrines_other
	ren %objects_folder%\wells_mdk wells
)
Goto FunctionEnd

:set_vis_light
if exist %vis_light% (
	@ echo.	 设置 关闭【环境光源】
	ren %d2r_env%\vis vis_mdk
) else (
	@ echo.	 设置 打开【环境光源】
	ren %d2r_env%\vis_mdk vis
)

Goto FunctionEnd

:set_player_light
if exist %player_light% (
@ echo.	 设置  关闭【角色光源】打开【环境光源】
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
@ echo.	 设置 打开【角色光源】关闭【环境光源】
COPY /Y %MDKMOD%\data\hd\character\player\player_light\*.json %MDKMOD%\data\hd\character\player
COPY /Y %MDKMOD%\data\hd\character\player\player_light\dru\*.json %MDKMOD%\data\hd\character\enemy
) 
Goto FunctionEnd



:set_mini_horadric_cube
	@ echo. 检测大箱子
	if exist %offline_bigbox%  (
		@cls
		@ echo. 请先关闭《单机游戏 * 大箱子》功能再调整此项设置。
		pause
		Goto FunctionEnd
	)
if exist %mdk_minicube_normal_mode_sign% (
	@ echo.	 设置 【迷你方盒 大字体模式】
	copy /Y %mdk_minicube_hc_bigfont_mode% %mdk_minicube_cube_file%
	copy /Y %mdk_minicube_pi_old_expfile% %mdk_minicube_expfile%
	copy /Y %mdk_minicube_pi_old_origfile% %mdk_minicube_origfile%
	del %mdk_minicube_allsign%
	@echo. "x"> %mdk_minicube_bigfont_mode_sign%
) else if exist %mdk_minicube_bigfont_mode_sign% (
	@ echo.	 设置 【关闭迷你方盒】
	copy /Y %mdk_minicube_pi_no_minicube% %mdk_minicube_expfile%
	del %mdk_minicube_origfile%
	del %mdk_minicube_allsign%
) else (
	@ echo.	 设置 【设置迷你方盒新模式】
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
@ echo.	 设置 【不使用原版英文字体（需重设字体）】
ren %d2r_ui%\fonts D2ENG_Fonts
ren %d2r_ui%\HA_fonts fonts
) else (
@ echo.	 设置 【使用原版英文字体（需重设字体）】
ren %d2r_ui%\fonts HA_fonts
ren %d2r_ui%\D2ENG_Fonts fonts
)
Goto FunctionEnd


:set_hollow_function
if exist %function_btn% (
@ echo.	 设置 【关闭虚空按键功能】
ren %MDKMOD%\data\hd\global\ui\mdk\mdk mdk_btn
) else (
@ echo.	 设置 【开启虚空按键功能】
ren %MDKMOD%\data\hd\global\ui\mdk\mdk_btn mdk
)
goto FunctionEnd


:show_font_picture
字体展示.jpg
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
@ echo.	 设置 【关闭可踢坏物品的发光和追加光源】
move /Y %MDKMOD%\data\hd\objects\destructibles\*.json %MDKMOD%\data\hd\objects\destructibles\mdk
move /Y %MDKMOD%\data\hd\objects\destructibles\mdk\barrel_exploding.json %MDKMOD%\data\hd\objects\destructibles
move /Y %MDKMOD%\data\hd\objects\destructibles\mdk\exploding_chest_100.json %MDKMOD%\data\hd\objects\destructibles
move /Y %MDKMOD%\data\hd\objects\destructibles\mdk\ice_cave_evil_urn.json %MDKMOD%\data\hd\objects\destructibles

) else (
@ echo.	 设置 【开启可踢坏物品发光并追加光源】
move /Y %MDKMOD%\data\hd\objects\destructibles\mdk\*.json %MDKMOD%\data\hd\objects\destructibles
)

goto FunctionEnd


:set_manmade_with_light
if exist %manmade_aura% (
@ echo.	 设置 【关闭神坛、场景物品与门的追加光源】
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
@ echo.	 设置 【开启神坛、场景物品与门的追加光源】
move /Y %MDKMOD%\data\hd\objects\env_manmade\mdk\*.json %MDKMOD%\data\hd\objects\env_manmade
ren %objects_folder%\doors_mdk doors
ren %objects_folder%\shrines_healthmana_mdk shrines_healthmana
ren %objects_folder%\shrines_other_mdk shrines_other
ren %objects_folder%\wells_mdk wells
copy /Y %MDKMOD%\data\hd\character\hirelight_mu\*.json %MDKMOD%\data\hd\character\enemy
)
goto FunctionEnd

:set_current_lang_folder_to_default
	@ echo.	 设置 【重制版简体版本】
	@echo on
	if not exist %d2r_strings% (
		@echo. 当前Strings文件夹缺失，尝试将zhTW_cht文件夹更名成strings
		ren %lang_zhTW_cht_strings% strings
		if exist %DEBUG_FILE% ( pause )
	) else (
		@echo. 当前Strings文件夹存在，尝试改名为strings_mdk
		ren %d2r_strings% strings_mdk
		if !errorlevel! == 1 (
			@echo. %d2r_strings%改名为strings_mdk失败！！！
			@echo. 准备强制复制为strings_mdk失败！！！
			xcopy "%d2r_strings%" "%d2r_lng%\strings_mdk\" /Y /S /E
			rd /s /q "%d2r_strings%"
		)
		set /p clang=<%d2r_strings_mdk%\lang
		rd /s /q %d2r_strings%_%clang%
		@echo. 当前语言版本是%clang%
		@echo. 准备转变成%~1
		@echo. ren "%~1" strings_ready
		ren "%~1" strings_ready
		if !errorlevel! == 0 (
			@echo. %~1改名为strings_ready成功
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
			@echo. %~1改名为strings_ready失败！！！
			@echo. 准备强制复制为strings_ready失败！！！
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
				@echo. 语言文本文件夹被占用，无法切换语言版本
				@echo. 文件夹：%~1
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

REM 用于覆盖首页状态勾的图标
if exist %s_drop_show% (
	@ echo.		 ┗  【显示所有掉落物品√】〖屏蔽低级掉落物品〗
		copy /Y %NoDropCheck%\CLOSE.sprite %NoDropCheck%\CHECK.sprite
		copy /Y %NoDropCheck%\CLOSE.lowend.sprite %NoDropCheck%\CHECK.lowend.sprite
) else (
	@ echo.		 ┗  〖显示所有掉落物品〗　【屏蔽低级掉落物品√】
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
	@ echo.	 设置 【刷装备】
	copy /Y %d2r_excel%\offline\magicprefix.txt.mdk %d2r_excel%\magicprefix.txt
	copy /Y %d2r_excel%\offline\magicsuffix.txt.mdk %d2r_excel%\magicsuffix.txt
	copy /Y %d2r_layouts%\globaldatahd_shopcolor.json %d2r_layouts%\globaldatahd.json
	del %base_shop%
	del %color_shop%
	@echo. "x">%anya_shop%
) else if exist %anya_shop% (
	@ echo.	 设置 【刷底材】
	copy /Y %d2r_excel%\offline\magicprefix.txt.mdk_base %d2r_excel%\magicprefix.txt
	copy /Y %d2r_excel%\offline\magicsuffix.txt.mdk_base %d2r_excel%\magicsuffix.txt
	copy /Y %d2r_layouts%\globaldatahd_mdk_base.json %d2r_layouts%\globaldatahd.json
	del %anya_shop%
	del %color_shop%
	@echo. "x">%base_shop%
) else if exist %base_shop% (
	@ echo.	 设置 【关闭】
	copy /Y %d2r_layouts%\globaldatahd_default.json %d2r_layouts%\globaldatahd.json
	del %d2r_excel%\magicprefix.txt
	del %d2r_excel%\magicsuffix.txt
	del %anya_shop%
	del %base_shop%
	del %color_shop%
) else (
	@ echo.	 设置 【共存】
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
@ echo.	 设置 【关闭光源】
del %MDKMOD%\data\hd\character\*.lightsign
del %MDKMOD%\data\hd\character\player\*.json
@ECHO.  "x">%guangyuan_n%
) else if exist %guangyuan_n% (
@ echo.	 设置 【上方光源】
cls
@ echo.	 注意事项：
@ echo.	 辅助光源使用魔法特效来照亮区域，可能影响性能，也可能影响游戏稳定性！
@ echo.	 经优化后的光源资源占用比旧版本要小很多，暂时未发现崩溃的情况。
@ echo.	 在高低差明显的位置可能会出现低地势区域闪烁亮点，都是正常现象。
@ echo.	 该功能是测试功能，稳定性没有保证，尝鲜可用。
@ echo.	 特此告知。
pause
@ echo.	 设置 【开启上方光源】
del %MDKMOD%\data\hd\character\*.lightsign
del %MDKMOD%\data\hd\character\player\*.json
copy /Y %MDKMOD%\data\hd\character\player_mu\*.json %MDKMOD%\data\hd\character\player
@ECHO.  "x">%guangyuan_u%
) else if exist %guangyuan_u% (
@ echo.	 设置 【地下光源】
cls
@ echo.	 注意事项：
@ echo.	 辅助光源使用魔法特效来照亮区域，可能影响性能，也可能影响游戏稳定性！
@ echo.	 经优化后的光源资源占用比旧版本要小很多，暂时未发现崩溃的情况。
@ echo.	 在高低差明显的位置可能会出现低地势区域闪烁亮点，都是正常现象。
@ echo.	 该功能是测试功能，稳定性没有保证，尝鲜可用。
@ echo.	 特此告知。
pause
@ echo.	 设置 【开启地下光源】
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
@ echo.	 设置 【关闭传送点光柱引导】
move /Y %MDKMOD%\data\hd\objects\waypoint_portals %MDKMOD%\data\hd\objects\waypoint_portals_mdk
ren %d2r_env%\mdkmod_waypoint_light\mdkmod_waypoint_light.json mdkmod_waypoint_light.json.mdk
) else (
@ echo.	 设置 【打开传送点光柱引导】
move /Y %MDKMOD%\data\hd\objects\waypoint_portals_mdk %MDKMOD%\data\hd\objects\waypoint_portals
ren %d2r_env%\mdkmod_waypoint_light\mdkmod_waypoint_light.json.mdk mdkmod_waypoint_light.json
)
goto FunctionEnd

:set_enter_lightbeam_guider
	set /p entry_guider_mode=<%entry_guider_sign%
	if "%entry_guider_mode%"=="light" (
		@ echo.	 【重点区域入口引导】	输入【1】 切换〖原版状态〗→【白色光柱√】→〖光圈指引〗
		DEL /F /S /Q %entry_guider_folder%\*.*
		xcopy %entry_guider_c% %entry_guider_folder% /Y /S /E
		
		REM 第一幕任务点指引
		copy /Y %quest_point_ci_folder%\stone_alpha.json	%objects_folder%\env_stone\stone_alpha.json
		copy /Y %quest_point_ci_folder%\inifuss_tree.json		%objects_folder%\env_wood\inifuss_tree.json
		copy /Y %quest_point_ci_folder%\malus.json			%objects_folder%\armor_weapons\malus.json
		REM 第二幕任务点指引
		copy /Y %quest_point_ci_folder%\seven_tombs_receptacle.json %objects_folder%\env_pillars\seven_tombs_receptacle.json
		copy /Y %quest_point_ci_folder%\horadric_cube_chest.json		%objects_folder%\chests\horadric_cube_chest.json
		copy /Y %quest_point_ci_folder%\horadric_scroll_chest.json	%objects_folder%\chests\horadric_scroll_chest.json
		REM 第三幕任务点指引
		copy /Y %quest_point_ci_folder%\gid_b_inn_decoy.json	%objects_folder%\env_organic\gid_b_inn_decoy.json
		copy /Y %quest_point_ci_folder%\khalim_brain_chest.json	%objects_folder%\chests\khalim_brain_chest.json
		copy /Y %quest_point_ci_folder%\khalim_eye_chest.json	%objects_folder%\chests\khalim_eye_chest.json
		copy /Y %quest_point_ci_folder%\khalim_heart_chest.json	%objects_folder%\chests\khalim_heart_chest.json
		REM 第四幕任务点指引
		copy /Y %quest_point_ci_folder%\soul_stone_forge.json	%objects_folder%\env_manmade\soul_stone_forge.json
		REM 第五幕任务点指引
		copy /Y %quest_point_ci_folder%\anya_yet_again.json		%objects_folder%\characters\anya_yet_again.json
		REM 第五幕红门指引
		copy /Y  %quest_point_common_folder%\pf_hell_portal_n01.json	%d2r_env%\model\expansion\siege\expansion_siege_hellportals\pf_hell_portal_n01.json
		copy /Y  %quest_point_common_folder%\pf_hell_portal_w01.json	%d2r_env%\model\expansion\siege\expansion_siege_hellportals\pf_hell_portal_w01.json
		REM 大箱子等其他指引
		copy /Y %quest_point_common_folder%\caged_wussie_1.json				%objects_folder%\dummy\caged_wussie_1.json
		copy /Y %quest_point_common_folder%\arcane_tome.json					%objects_folder%\env_pillars\arcane_tome.json
		copy /Y %quest_point_common_folder%\wirt.json							%objects_folder%\characters\wirt.json
		copy /Y %quest_point_common_folder%\consolation_chest.json			%objects_folder%\chests\consolation_chest.json
		copy /Y %quest_point_common_folder%\special_chest_100.json			%objects_folder%\chests\special_chest_100.json
		copy /Y %quest_point_common_folder%\town_act_3_gid_b_inn_altar.json	%objects_folder%\env_pillars\town_act_3_gid_b_inn_altar.json
		copy /Y %quest_point_common_folder%\pf_jungle_totem_d_foliage01.json	%d2r_env%\model\act3\jungle\prefab\pf_jungle_totem_d_foliage01.json
		REM 恢复光圈指引文件
		copy /Y %d2r_env%\porory\beacon\json_db\*.json	%d2r_env%\porory\beacon
		
		@echo.circle>%entry_guider_sign%
		
	) else if "%entry_guider_mode%"=="circle" (
		@ echo.	 【重点区域入口引导】	输入【1】 切换〖原版状态〗→〖白色光柱〗→【光圈指引√】
			
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
		@ echo.	 【重点区域入口引导】	输入【1】 切换【原版状态√】→〖白色光柱〗→〖光圈指引〗
		DEL /F /S /Q %entry_guider_folder%\*.*
		xcopy %entry_guider_l% %entry_guider_folder%\ /Y /S /E
		
		REM 第一幕任务点指引
		copy /Y %quest_point_line_folder%\stone_alpha.json	%objects_folder%\env_stone\stone_alpha.json
		copy /Y %quest_point_line_folder%\inifuss_tree.json		%objects_folder%\env_wood\inifuss_tree.json
		copy /Y %quest_point_line_folder%\malus.json			%objects_folder%\armor_weapons\malus.json
		REM 第二幕任务点指引
		copy /Y %quest_point_line_folder%\seven_tombs_receptacle.json %objects_folder%\env_pillars\seven_tombs_receptacle.json
		copy /Y %quest_point_line_folder%\horadric_cube_chest.json		%objects_folder%\chests\horadric_cube_chest.json
		copy /Y %quest_point_line_folder%\horadric_scroll_chest.json	%objects_folder%\chests\horadric_scroll_chest.json
		REM 第三幕任务点指引
		copy /Y %quest_point_line_folder%\gid_b_inn_decoy.json	%objects_folder%\env_organic\gid_b_inn_decoy.json
		copy /Y %quest_point_line_folder%\khalim_brain_chest.json	%objects_folder%\chests\khalim_brain_chest.json
		copy /Y %quest_point_line_folder%\khalim_eye_chest.json	%objects_folder%\chests\khalim_eye_chest.json
		copy /Y %quest_point_line_folder%\khalim_heart_chest.json	%objects_folder%\chests\khalim_heart_chest.json
		REM 第四幕任务点指引
		copy /Y %quest_point_line_folder%\soul_stone_forge.json	%objects_folder%\env_manmade\soul_stone_forge.json
		REM 第五幕任务点指引
		copy /Y %quest_point_line_folder%\anya_yet_again.json		%objects_folder%\characters\anya_yet_again.json
		REM 第五幕红门指引
		copy /Y  %quest_point_common_folder%\pf_hell_portal_n01.json	%d2r_env%\model\expansion\siege\expansion_siege_hellportals\pf_hell_portal_n01.json
		copy /Y  %quest_point_common_folder%\pf_hell_portal_w01.json	%d2r_env%\model\expansion\siege\expansion_siege_hellportals\pf_hell_portal_w01.json
		REM 大箱子等其他指引
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
@ echo.	 设置 【关闭宝箱等交互物品发光提示】
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
@ echo.	 设置 【开启宝箱等交互物品发光提示】
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
@ echo.		 设置 【装备与符文之语不带吐槽  】 正在处理中...请稍等...
	copy /Y %d2r_strings%\json_db\item-runes_NoTucao.json %item-runes%
	copy /Y %d2r_strings%\json_db\item-names_NoTucao_EliteDye.json %item-names%
	del %tucao_sign%
	del %base_with_english_sign_sgline% 
	@ECHO.  "x">%no_tucao_sign%
) else (
	@ echo.		 设置 【装备与符文之语带吐槽 】  正在处理中...请稍等...
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
@ echo.	 打开 【基础颜色定义文件】
@ echo.	 ※ 修改前做个备份是好习惯，改文件是游戏最基础的颜色定义，更高级的定义都会
@ echo.	 profilehd文件第71行："FontColorGoldColor": 是金币的颜色
@ echo.	 profilehd文件第77行："FontColorEtherealColor"是无形装备的颜色
@ echo.	 profilehd文件第78行："FontColorEtherealColor"是带孔装备的颜色
@ echo.	  ｛"r": 255, "g": 222, "b": 169, "a": 255｝颜色定义则是由红绿蓝三种基色值和ALPHA透明度构成
@ echo.	 该代码颜色由_profilehd.json文件统一定义，以有定义的可以用$加定义名来引用。
@ echo.	 即将打开文件...
pause
notepad %d2r_layouts%\_profilehd.json
pause
goto FunctionEnd

:open_game_sound_folder
cls
@ echo.	 打开 【音效文件夹】
@ echo.	 high_rune.flac 是高等符文掉落声音
@ echo.	 torch_key.flac 是6BOSS钥匙掉落声音
@ echo.	 item_potion_hd.flac 是药水的掉落声音
@ echo.	 文件夹内有几个可替换的文件供选择，药水声音文件改名或者删除则恢复药水声音。
@ echo.	 即将打开文件夹...
pause
explorer %d2r_sfx%\item\
pause
goto FunctionEnd

:set_large_charm_lightbeam_sign
@ echo.
if exist %lc_light% (
@ echo. 【去除大型护身符（咒符/LC板子）的光柱效果】 正在处理中...请稍等...
ren %d2r_items%\misc\charm\charm_medium.json charm_medium_mdk.json
) else (
@ echo. 【增加大型护身符（咒符/LC板子）的光柱效果】 正在处理中...请稍等...
ren %d2r_items%\misc\charm\charm_medium_mdk.json charm_medium.json
)
goto FunctionEnd

:set_small_charm_lightbeam_sign
@ echo.
if exist %sc_light% (
@ echo.   【去除小型/巨型咒符（SC/GC板子）的光柱效果】正在处理中...请稍等...
ren %d2r_items%\misc\charm\charm_small.json charm_small_mdk.json
ren %d2r_items%\misc\charm\charm_large.json charm_large_mdk.json
) else (
@ echo.   【增加大型咒符（SC/GC板子）的光柱效果】正在处理中...请稍等...
ren %d2r_items%\misc\charm\charm_small_mdk.json charm_small.json
ren %d2r_items%\misc\charm\charm_large_mdk.json charm_large.json
)
goto FunctionEnd


:set_amulet_lightbeam_sign
@ echo.
if exist %amulet_light% (
@ echo.   【去除项链的光柱效果】 正在处理中...请稍等...
ren %d2r_items%\misc\amulet\amulet.json amulet_mdk.json
) else (
@ echo.   【增加项链的光柱效果】 正在处理中...请稍等...
ren %d2r_items%\misc\amulet\amulet_mdk.json amulet.json
)
goto FunctionEnd


:set_ring_lightbeam_sign
@ echo.
if exist %ring_light% (
@ echo.   【去除戒指的光柱效果】 正在处理中...请稍等...
ren %d2r_items%\misc\ring\ring.json ring_mdk.json
) else (
@ echo.   【增加戒指的光柱效果】 正在处理中...请稍等...
ren %d2r_items%\misc\ring\ring_mdk.json ring.json
)
goto FunctionEnd


:set_gems_lightbeam_sign
@ echo.
if not exist %all_gem% (
@ echo.   【仅无暇/完美级宝石有光柱效果】 正在处理中...请稍等...
move /Y %MDKMOD%\data\hd\items\misc\gem %MDKMOD%\data\hd\items\misc\gem_all
move /Y %MDKMOD%\data\hd\items\misc\gem_high %MDKMOD%\data\hd\items\misc\gem
) else if not exist %high_gem% (
@ echo.   【关闭宝石光柱效果】 正在处理中...请稍等...
move /Y %MDKMOD%\data\hd\items\misc\gem %MDKMOD%\data\hd\items\misc\gem_high
move /Y %MDKMOD%\data\hd\items\misc\gem_nolight %MDKMOD%\data\hd\items\misc\gem
) else (
@ echo.   【增加所有等级宝石光柱效果】 正在处理中...请稍等...
move /Y %MDKMOD%\data\hd\items\misc\gem %MDKMOD%\data\hd\items\misc\gem_nolight
move /Y %MDKMOD%\data\hd\items\misc\gem_all %MDKMOD%\data\hd\items\misc\gem
)
goto FunctionEnd


:set_craft_runes_lightbeam_sign
@ echo.
if exist %craft_rune_light% (
@ echo.  【关闭手工符文光柱】 正在处理中...请稍等...
del %d2r_items%\misc\rune\nef_rune.json
del %d2r_items%\misc\rune\ral_rune.json
del %d2r_items%\misc\rune\amn_rune.json
del %d2r_items%\misc\rune\sol_rune.json
) else (
@ echo.  【开启手工符文光柱】 正在处理中...请稍等...
copy /Y %d2r_items%\misc\rune_craft\nef_rune.json %d2r_items%\misc\rune
copy /Y %d2r_items%\misc\rune_craft\ral_rune.json %d2r_items%\misc\rune
copy /Y %d2r_items%\misc\rune_craft\amn_rune.json %d2r_items%\misc\rune
copy /Y %d2r_items%\misc\rune_craft\sol_rune.json %d2r_items%\misc\rune
)
goto FunctionEnd

:set_runes_lightbeam_sign
set /p rune_light_setup_setting=<%rune_light_setup%
if "%rune_light_setup_setting%"=="light_arrow" (
	@ echo.	 【高等符文掉落特效】	输入【8】 设置〖原版状态〗→【光柱特效√】→〖光柱+箭头效果〗
	xcopy %high_rune_star_light% %items_rune_folder% /Y /S /E
	echo all_effects>%rune_light_setup%
	
) else if "%rune_light_setup_setting%"=="all_effects" (
	@ echo.	 【高等符文掉落特效】	输入【8】 设置〖原版状态〗→〖光柱特效〗→【光柱+星光效果√】
	del /Q %items_rune_folder%
	echo original>%rune_light_setup%

) else (
	@ echo.	 【高等符文掉落特效】	输入【8】 设置【原版状态√】→〖光柱特效〗→〖光柱+箭头效果〗
	xcopy %high_rune_arrow_light% %items_rune_folder% /Y /S /E
	echo light_arrow>%rune_light_setup%

)

goto FunctionEnd

:set_hj_font_file
@ echo.	 【怀旧模式字体】切换顺序：仿宋→晴圆→锐线统简
if not exist %hj_font_fangsong% (
	@ echo.	 怀旧模式字体状态【仿宋字体】			输入【HJZT】 设置 【晴圆字体】
	ren %hj_font_currently% chi_fangsong
	ren %hj_font_qingyuan% chi
) else if not exist %hj_font_qingyuan% (
	@ echo.	 怀旧模式字体状态【晴圆字体】			输入【HJZT】 设置 【锐线统简字体】
	ren %hj_font_currently% chi_qingyuan
	ren %hj_font_ruixiantong% chi
) else if not exist %hj_font_ruixiantong% (
	@ echo.	 怀旧模式字体状态【锐线统简字体】			输入【HJZT】 设置 【仿宋字体】
	ren %hj_font_currently% chi_ruixiantong
	ren %hj_font_youyuan% chi
) else if not exist %hj_font_youyuan% ( 
	@ echo.	 *【怀旧模式字体】	输入【HJ】 切换顺序：仿宋字体→晴圆字体→锐线统简字体→【幼圆字体】
	ren %hj_font_currently% chi_youyuan
	ren %hj_font_fangsong% chi
) else (
	@ echo.	 怀旧模式字体状态【获取字体名失败】			输入【HJZT】 设置 【仿宋字体】
	ren %hj_font_currently% chi_backup
	ren %hj_font_fangsong% chi
	)
goto FunctionEnd


:set_font_file
@ echo.  
if not exist %font_dahei% (
@ echo.   【设置为暴雪国际字体】  正在处理中...请稍等...
ren %font_name% LiziDahei.ttf
ren %font_baoxue% %font_name_zhTW%
) else if not exist %font_baoxue% (
@ echo.   【设置为励字准圆繁体字体】  正在处理中...请稍等...
ren %font_name% BlizzardGlobal.ttf
ren %font_zhunyuan% %font_name_zhTW%
) else if not exist %font_zhunyuan% (
@ echo.   【设置为励字准圆简体字体】  正在处理中...请稍等...
ren %font_name% LiziZhunyuan.ttf
ren %font_heiti% %font_name_zhTW%
) else if not exist %font_heiti% (
@ echo.   【设置为励字隶变字体】  正在处理中...请稍等...
ren %font_name% LiziHeiti.ttf
ren %font_libian% %font_name_zhTW%
) else if not exist %font_libian% (
@ echo.   【设置为原版方形字体】  正在处理中...请稍等...
ren %font_name% LiziLibian.ttf
ren %font_fangxing% %font_name_zhTW%
) else if not exist %font_fangxing% (
@ echo.   【设置为励字大黑字体】  正在处理中...请稍等...
ren %font_name% ARFangxin.ttf
ren %font_dahei% %font_name_zhTW%
) else (
ren %font_fangxing% %font_name_zhTW%
)
goto FunctionEnd

:open_item_nameaffixes_file
	cls
	@ echo.
	@ echo.   【即将打开底材文本，底材信息都集中在这里】
	@ echo.   1、此文本中的底材数据会覆盖names中的数据
	@ echo.   2、所以想显示或者删除底材只需要在此文件中找到相应id去修改zhTW项中的文字，删光就是不显示
	@ echo.   3、不想要的底材详细信息也可以在这里搜索，找到后删掉或者直接改掉key项内容让游戏读取不到即可
	@ echo.   其他的请自己发掘...
	pause
	notepad %item-nameaffixes%
	@ echo.   【编辑完后别忘记保存。如果自定义文本出现BUG，可以重装MOD恢复。】
	pause
goto FunctionEnd

:open_mercenaries_file
	cls
	@ echo.
	@ echo.   【即将打开游戏中重新定义显示的文本，大部分和原版不同的文本信息都集中在这里】
	@ echo.   1、搜索你想修改的文字，然后改为你想要显示的文字
	@ echo.   2、重新打开游戏才能生效
	@ echo.   3、请自行备份文件，改出问题了恢复即可，也可以从mod包中重新解压
	@ echo.   其他的请自己发掘...
	pause
	notepad %mercenaries%
	@ echo.   【编辑完后别忘记保存。如果自定义文本出现BUG，可以重装MOD恢复。】
	pause
goto FunctionEnd

:open_item_gems_file
cls
@ echo.
@ echo.   【即将打开自定义文本，大多常用文本都集中在这里】
@ echo.   1、自定义道具颜色等，请在打开的文本中搜索物品名，并按照色块图的颜色代码修改【yc】后面的那个字符
@ echo.   2、想要修改道具名或者隐藏道具，请在打开的文本中搜索物品名，修改文字或者删掉文字，不要删掉双引号
@ echo.   3、修改“劣质”“超强”等，打开文本最开始的一段内容就是这些，自己修改文字
@ echo.   4、修改显示规则，如果知道我在说什么，就去修改，不知道的当我没说过
@ echo.   还有其他的一些细节修改项，请自己发掘...
pause
notepad %item-gems%
@ echo.   【编辑完后别忘记保存。如果自定义文本出现BUG，可以重装MOD恢复。】
pause
goto FunctionEnd

REM ===屏蔽规则界面部分===

:RuleSetup_Main
set CurrentMenu=RuleSetup_Main
mode con cols=120 lines=50
Cls
@ECHO OFF
@ echo.	
REM @ echo.         ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
REM @ echo.　　     ┃       D2R MDK MOD 屏蔽显示规则设置器 By ZhangMDKRU#2129    ┃
REM @ echo.         ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
@ echo.	━━━━┃MDK MOD 屏蔽显示规则设置 %Ver% 适配%FOR_MOD_VER%版  By ZhangMDKRU#2129┃━━━━

@echo.  
@echo.  	【请按键选择对应功能页面】▼
call :color E0 "	【Z】游戏功能设置 【X】光线辅助设置 "
call :color DF "【C】屏蔽掉落设置"
@echo. 【V】血球音效设置 【B】UI风格设置 【N】单机设置

if exist %DEBUG_FILE% (
	call :color CF "		DEBUG模式ON		"
)
if exist %SETUP_FOLDER_FILE% (
	call :color DF "		封装模式ON		"
)
if not "%MFD%"=="MDK" (
	call :color 3F "	MOD文件夹：%MFD%	"
)
@ echo. 

@set clang=0
@set /p clang=<%d2r_strings%\lang
echo.	※※※三个语言版本屏蔽配置文件相互独立，切换后请重新设置屏蔽配置※※※
if "%clang%"=="zhTW_cht" (
@ echo.	【语言版本】输入【=】 或【=?】切换：【1 重制版繁体】→ 2 旧版翻译繁体 → 3 重制版简体 → 4 国服翻译简体
) else if "%clang%"=="zhTW_cht_OLD" (
@ echo.	【语言版本】输入【=】 或【=?】切换：1 重制版繁体→ 【2 旧版翻译繁体 】→ 3 重制版简体 → 4 国服翻译简体
) else if "%clang%"=="zhTW_chs" (
@ echo.	【语言版本】输入【=】 或【=?】切换：1 重制版繁体→ 2 旧版翻译繁体 → 【3 重制版简体 】→ 4 国服翻译简体
) else if "%clang%"=="zhCN" (
@ echo.	【语言版本】输入【=】 或【=?】切换：1 重制版繁体→ 2 旧版翻译繁体 → 3 重制版简体 → 【4 国服翻译简体】
) else (
call :color E4 "	【未知语言】 输入【=】 尝试强制切换到【重置版繁体】"
@ echo.	 
) 
@ echo.	 


@ echo.	 ●　输入【1】切换：是否屏蔽低级掉落《体力药水等药剂、无价值的普通/扩展装备》
@ echo.	　　　*注：屏蔽后会出现只显示〖超强〗二字的装备，这是被屏蔽的超强低级装备
if exist %s_drop_fz_no% (
	@ echo.		 ┗  〖显示所有掉落物品〗→〖屏蔽低级掉落物品〗→【（非资料片）屏蔽低级掉落物品√】
) else if exist %s_drop_no% (
	@ echo.		 ┗  〖显示所有掉落物品〗→【屏蔽低级掉落物品√】→〖（非资料片）屏蔽低级掉落物品〗
) else (
	@ echo.		 ┗  【显示所有掉落物品√】→〖屏蔽低级掉落物品〗→〖（非资料片）屏蔽低级掉落物品〗
)
@ echo.		


@ echo.	 ●　输入【2】切换：粗制／破损／陈旧／劣质的　四种”低品质“装备的显示规则
if exist %s_low_red% (
@ echo.		 ┗  低品质装备 【显示为红色】 √〖显示为黑色〗→〖彻底屏蔽〗
set s_low=%low_red%
) else if exist %s_low_black% (
@ echo.		 ┗  低品质装备 〖显示为红色〗→【显示为黑色√】→〖彻底屏蔽〗
set s_low=%low_black%
) else if exist %s_low_hide% (
@ echo.		 ┗  低品质装备 〖显示为红色〗→〖显示为黑色〗→【彻底屏蔽√】
set s_low=%low_hide%
) else (
@ echo.		 ┗  〖设置识别错误〗
)
@ echo.		


@ echo.	 ●　输入【3】切换：大药瓶《超红、超蓝、大紫瓶》的显示规则
@ echo.	　　　*注：项链、戒指固定显示为图标+文字的方式
if exist %s_ring_texticon% (
@ echo.		 ┗  大药瓶显示为【图标+文字√】→〖仅文字〗→〖仅图标〗→〖隐藏红蓝瓶〗
set s_ring=%ring_texticon%
) else if exist %s_ring_text% (
@ echo.		 ┗  大药瓶显示为〖图标+文字〗→【仅文字√】→〖仅图标〗→〖隐藏红蓝瓶〗
set s_ring=%ring_text%
) else if exist %s_ring_icon% (
@ echo.		 ┗  大药瓶显示为〖图标+文字〗→〖仅文字〗→【仅图标√】→〖隐藏红蓝瓶〗
set s_ring=%ring_icon%
) else if exist %s_ring_hide% (
@ echo.		 ┗  大药瓶显示为〖图标+文字〗→〖仅文字〗→〖仅图标〗→【隐藏红蓝瓶√】
set s_ring=%ring_hide%
) else (
@ echo.		 ┗  〖设置识别错误〗
)
@ echo.		


@ echo.	 ●　输入【4】切换：小紫瓶和1-4级红蓝药水的显示规则
if exist %s_potion_show% (
@ echo.		 ┗  小紫瓶和1-4级红蓝药水【显示√】→〖屏蔽〗
set s_potion=%potion_show%
) else if exist %s_potion_nodrop% (
@ echo.		 ┗  小紫瓶和1-4级红蓝药水〖显示〗→【屏蔽√】
set s_potion=%potion_nodrop%
) else (
@ echo.		 ┗  〖设置识别错误〗
)
@ echo.		


@ echo.	 ●　输入【5】切换：解毒药水的显示规则
if exist %s_rvs_show% (
@ echo.		 ┗  解毒药水【显示√】→〖屏蔽〗
set s_rvs=%rvs_show%
) else if exist %s_rvs_nodrop% (
@ echo.		 ┗  解毒药水〖显示〗→【屏蔽√】
set s_rvs=%rvs_nodrop%
) else (
@ echo.		 ┗  〖设置识别错误〗
)
@ echo.		


@ echo.	 ●　输入【6】切换：宝石的显示规则
if exist %s_gem_texticon% (
	@ echo.		 ┗  显示为【图标+文字√】→〖文字〗→〖图标〗→〖图+文+提示〗→〖文+提示〗→〖图+提示〗
	set s_gem=%gem_texticon%
) else if exist %s_gem_text% (
	@ echo.		 ┗  显示为〖图标+文字〗→【文字√】→〖图标〗→〖图+文+提示〗→〖文+提示〗→〖图+提示〗
	set s_gem=%gem_text%
) else if exist %s_gem_icon% (
	@ echo.		 ┗  显示为〖图标+文字〗→〖文字〗→【图标√】→〖图+文+提示〗→〖文+提示〗→〖图+提示〗
	set s_gem=%gem_icon%
) else if exist %s_gem_texticon_tip% (
	@ echo.		 ┗  显示为〖图标+文字〗→〖文字〗→〖图标〗→【图+文+提示√】→〖文+提示〗→〖图+提示〗
	set s_gem=%gem_texticon_tip%
) else if exist %s_gem_text_tip% (
	@ echo.		 ┗  显示为〖图标+文字〗→〖文字〗→〖图标〗→〖图+文+提示〗→【文+提示√】→〖图+提示〗
	set s_gem=%gem_text_tip%
) else if exist %s_gem_icon_tip% (
	@ echo.		 ┗  显示为〖图标+文字〗→〖文字〗→〖图标〗→〖图+文+提示〗→〖文+提示〗→【图+提示√】
	set s_gem=%gem_icon_tip%
) else (
	@ echo.		 ┗  〖设置识别错误〗
)
@ echo.		


@ echo.	 ●　输入【7】切换：符文的显示规则
if exist %s_rune_tip% (
@ echo.		 ┗  符文显示为【图标+文字+用途与合成提示√】→〖图标+文字〗
set s_rune=%rune_tip%
) else if exist %s_rune_notip% (
@ echo.		 ┗  符文显示为〖图标+文字+用途与合成提示〗→【图标+文字√】
set s_rune=%rune_notip%
) else (
@ echo.		 ┗  〖设置识别错误〗
)
@ echo.		


@ echo.	 ●　输入【8】切换：（箭矢）与（弩弹） 的显示规则
if exist %s_arrow_texticon% (
@ echo.		 ┗  箭矢显示为【图标+文字√】→〖仅文字〗→〖仅图标〗→〖不显示〗
set s_arrow=%arrow_texticon%
) else if exist %s_arrow_text% (
@ echo.		 ┗  箭矢显示为〖图标+文字〗→【仅文字√】→〖仅图标〗→〖不显示〗
set s_arrow=%arrow_text%
) else if exist %s_arrow_icon% (
@ echo.		 ┗  箭矢显示为〖图标+文字〗→〖仅文字〗→【仅图标√】→〖不显示〗
set s_arrow=%arrow_icon%
) else if exist %s_arrow_no% (
@ echo.		 ┗  箭矢显示为〖图标+文字〗→〖仅文字〗→〖仅图标〗→【不显示√】
set s_arrow=%arrow_no%
) else (
@ echo.		 ┗  〖设置识别错误〗
)
@ echo.		


@ echo.	 ●　输入【9】切换：（卷轴）与（钥匙） 的显示规则
if exist %s_scroll_texticon% (
@ echo.		 ┣  卷轴显示为【图标+文字√】→〖仅文字〗→〖仅图标〗
set s_scroll=%scroll_texticon%
) else if exist %s_scroll_text% (
@ echo.		 ┣  卷轴显示为〖图标+文字〗→【仅文字√】→〖仅图标〗
set s_scroll=%scroll_text%
) else if exist %s_scroll_icon% (
@ echo.		 ┗  卷轴显示为〖图标+文字〗→〖仅文字〗→【仅图标√】
set s_scroll=%scroll_icon%
) else (
@ echo.		 ┗  〖设置识别错误〗
)
@ echo.		


@ echo.	 ●　输入【0】切换：普通与扩展的四孔长柄武器（铁魔材料）的显示规则
@ echo.	　　　*注：普通长柄中强制显示镰刀（镰刀妹）与长戟（烦恼诗集）
if exist %s_pole_show% (
@ echo.		 ┗  普/扩 长柄武器材料【显示√】→〖屏蔽〗
set s_pole=%pole_show%
) else if exist %s_pole_nodrop% (
@ echo.		 ┗  普/扩 长柄武器材料〖显示〗→【屏蔽√】
set s_pole=%pole_nodrop%
) else (
@ echo.		 ┗  〖设置识别错误〗
)


@ echo.		
@ echo.	 ●　输入【K】打开item-gems文件进行【自定义修改】
if exist %huaijiu_nodrop% (
@ echo.	 ●　输入【L】切换：在“怀旧模式”下掉落屏蔽是否生效，当前状态【生效】→〖不生效〗
) else (
@ echo.	 ●　输入【L】切换：在“怀旧模式”下掉落屏蔽是否生效，当前状态〖生效〗→【不生效】
)
if exist %huaijiu_idkey% (
@ echo.	 ●　输入【L2】切换：在“怀旧模式”可查询物品的ID与Key值，当前状态【生效】→〖不生效〗
) else (
@ echo.	 ●　输入【L2】切换：在“怀旧模式”可查询物品的ID与Key值，当前状态〖生效〗→【不生效】
)

@ echo.	
@ echo.
set  obj=""
set /p obj= 输入数字或字母按回车执行：

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
@echo	  无效输入，请看清楚【 】框中的内容重新输入！
@echo.
pause
ping -n 1 127.1>nul 
goto RuleSetup_Main


:set_huaijiu_idkey
if exist %huaijiu_idkey% (
	@ echo.	 ●　输入【L2】切换：在“怀旧模式”可查询物品的ID与Key值，当前状态【生效】→〖不生效〗
	DEL %d2r_strings%-legacy\item-modifiers.json
) else (
	@ echo.	 ●　输入【L2】切换：在“怀旧模式”可查询物品的ID与Key值，当前状态〖生效〗→【不生效】
	COPY /Y %d2r_strings%-legacy\json_db\item-modifiers_idkey.json %d2r_strings%-legacy\item-modifiers.json
)
PAUSE
Goto RuleSetup_Main

:set_huaijiu_nodrop
	if exist %huaijiu_nodrop% (
		@ echo.	 当前状态【生效】
		del %huaijiu_nodrop%
		REM ren %huaijiu_nodrop2% mercenaries.json.mdk
	) else (
		@ echo.	 当前状态【不生效】
		cls
		copy /Y %item-gems%.legacy %huaijiu_nodrop%
		@ echo.	
		@ echo.	  怀旧模式无法正确显示屏蔽代码中的Unicode占位符
		@ echo.	  所以直接使用其文件会导致屏蔽的物品显示一堆问号出来。
		@ echo.	  而且由于当前文字框显示字符位123位，而怀旧模式只能使用颜色代码来占位。
		@ echo.	  颜色代码占位是4位，与123不能整除，所以无论如何都会有多余的空格。
		@ echo.	  解决方案只能是整体删掉所有文字，而不能像高清模式那样占位隐藏。
		@ echo.	  所以隐藏的装备就算捡起来，也是看不见名字的，而且你只能通过点击地上的模型捡起来。
		@ echo.	  
		@ echo.	  所以是否要使用这个功能需要你自己权衡。
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
	@echo. 开始生成gem文件
	if exist %DEBUG_FILE% ( pause )
	set rule_file=%gem_head%+%format%+%s_low%+%rewrite%+%s_arrow%+%s_potion%+%s_rvs%+%s_scroll%+%s_gem%+%s_rune%+%s_ring%+%s_drop%+%s_pole%+%gem_end%
	set rule_file2=%gem_head%+%format%+%s_low%+%rewrite%+%s_arrow%+%s_potion%+%s_rvs%+%s_scroll%+%s_gem%+%s_rune%+%s_ring%+%s_drop%2+%s_pole%2+%gem_end%
	@echo. rule_file 为 %rule_file%
	@echo. gem_file 为 %gem_file%
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
	@ECHO 操作完成！
Goto RuleSetup_Main


:change_low_rule
	@ echo.	 九、输入【0】切换：粗制／破损／陈旧／劣质的　四种”低品质“装备的显示规则
	if exist %s_low_red% (
	@ echo.		 ┗  低品质装备 【显示为红色】 √
		set s_low=%low_black%
		set rule_create_file=%s_low_black%
	) else if exist %s_low_black% (
	@ echo.		 ┗  低品质装备【显示为黑色√】
		set s_low=%low_hide%
		set rule_create_file=%s_low_hide%
	) else if exist %s_low_hide% (
	@ echo.		 ┗  低品质装备 【彻底屏蔽√】
		set s_low=%low_red%
		set rule_create_file=%s_low_red%
	) else (
	@ echo.		 ┗  识别出错！
		set s_low=%low_hide%
		set rule_create_file=%s_low_hide%
	)
	set rule_del_file=%all_low_sign%
Goto CreateGemFile


:change_rune_rule
	if exist %s_rune_tip% (
		@echo. 当前显示tip，切换成不显示
		set rule_del_file=%all_rune_sign%
		set s_rune=%rune_notip%
		set rule_create_file=%s_rune_notip%
	) else (
		@echo. 当前不显示tip，切换成显示
		set rule_del_file=%all_rune_sign%
		set s_rune=%rune_tip%
		set rule_create_file=%s_rune_tip%
	)
Goto CreateGemFile

:change_rvs_rule
	if exist %s_rvs_show% (
		@echo. 当前显示rvs，切换成不显示
		set rule_del_file=%all_rvs_sign%
		set s_rvs=%rvs_nodrop%
		set rule_create_file=%s_rvs_nodrop%
	) else (
		@echo. 当前不显示rvs，切换成显示
		set rule_del_file=%all_rvs_sign%
		set s_rvs=%rvs_show%
		set rule_create_file=%s_rvs_show%
	)
Goto CreateGemFile

:change_potion_rule
	if exist %s_potion_show% (
		@echo. 当前显示1-4hp，切换成不显示
		set rule_del_file=%all_potion_sign%
		set s_potion=%potion_nodrop%
		set rule_create_file=%s_potion_nodrop%
	) else (
		@echo. 当前不显示1-4hp，切换成显示
		set rule_del_file=%all_potion_sign%
		set s_potion=%potion_show%
		set rule_create_file=%s_potion_show%
	)
Goto CreateGemFile

:change_pole_rule
	if exist %s_pole_show% (
		@echo. 当前显示普通长柄，切换成不显示
		set rule_del_file=%all_pole_sign%
		set s_pole=%pole_nodrop%
		set rule_create_file=%s_pole_nodrop%
	) else (
		@echo. 当前不显示普通长柄，切换成显示
		set rule_del_file=%all_pole_sign%
		set s_pole=%pole_show%
		set rule_create_file=%s_pole_show%
	)
Goto CreateGemFile

:change_drop_filter
	if exist %s_drop_fz_no% (
		@echo. 当前状态是【非资屏蔽】，换成【不屏蔽】
		::定义rule_del_file=需要删掉的标志文件
		set rule_del_file=%all_drop_sign%
		::定义s_drop=需要合成到gems里的屏蔽文件
		set s_drop=%drop_show%
		::定义rule_create_file=需要重新创建的标志文件
		set rule_create_file=%s_drop_show%
		copy /Y %NoDropCheck%\CLOSE.sprite %NoDropCheck%\CHECK.sprite
		copy /Y %NoDropCheck%\CLOSE.lowend.sprite %NoDropCheck%\CHECK.lowend.sprite
	) else if exist %s_drop_no% (
		@echo. 当前【屏蔽】，换成【非资屏蔽】
		set rule_del_file=%all_drop_sign%
		set s_drop=%drop_fz_no%
		set rule_create_file=%s_drop_fz_no%
		copy /Y %NoDropCheck%\OK.sprite %NoDropCheck%\CHECK.sprite
		copy /Y %NoDropCheck%\OK.lowend.sprite %NoDropCheck%\CHECK.lowend.sprite
	) else (
		@echo. 当前【不屏蔽】，换成【屏蔽】
		set rule_del_file=%all_drop_sign%
		set s_drop=%drop_no%
		set rule_create_file=%s_drop_no%
		copy /Y %NoDropCheck%\OK.sprite %NoDropCheck%\CHECK.sprite
		copy /Y %NoDropCheck%\OK.lowend.sprite %NoDropCheck%\CHECK.lowend.sprite
	)
Goto CreateGemFile


:change_arrow_rule
	if exist %s_arrow_texticon% (
		@ echo.		 ┣  箭矢显示为【图标+文字】
		set rule_del_file=%all_arrow_sign%
		set s_arrow=%arrow_text%
		set rule_create_file=%s_arrow_text%
	) else if exist %s_arrow_text% (
		@ echo.		 ┣  箭矢显示为【仅文字】
		set rule_del_file=%all_arrow_sign%
		set s_arrow=%arrow_icon%
		set rule_create_file=%s_arrow_icon%
	) else if exist %s_arrow_icon% (
		@ echo.		 ┣  箭矢显示为【仅图标】
		set rule_del_file=%all_arrow_sign%
		set s_arrow=%arrow_no%
		set rule_create_file=%s_arrow_no%
	) else (
		@ echo.		 ┗  箭矢显示为【不显示√】
		set rule_del_file=%all_arrow_sign%
		set s_arrow=%arrow_texticon%
		set rule_create_file=%s_arrow_texticon%
	)
Goto CreateGemFile

:change_ring_rule
	if exist %s_ring_texticon% (
		@ echo.		 ┣  杂物显示为【图标+文字√】
		set rule_del_file=%all_ring_sign%
		set s_ring=%ring_text%
		set rule_create_file=%s_ring_text%
	) else if exist %s_ring_text% (
		@ echo.		 ┣  杂物显示为【仅文字√】
		set rule_del_file=%all_ring_sign%
		set s_ring=%ring_icon%
		set rule_create_file=%s_ring_icon%
	) else if exist %s_ring_icon% (
		@ echo.		 ┗  杂物显示为【仅图标√】
		set rule_del_file=%all_ring_sign%
		set s_ring=%ring_hide%
		set rule_create_file=%s_ring_hide%
	) else (
		@ echo.		 ┗  杂物显示为【隐藏红蓝瓶√】
		set rule_del_file=%all_ring_sign%
		set s_ring=%ring_texticon%
		set rule_create_file=%s_ring_texticon%
	) 
Goto CreateGemFile

:change_gem_rule
	if exist %s_gem_texticon% (
		@ echo.		 ┣  宝石显示为【图标+文字√】
		set rule_del_file=%all_gem_sign%
		set s_gem=%gem_text%
		set rule_create_file=%s_gem_text%
	) else if exist %s_gem_text% (
		@ echo.		 ┣  宝石显示为【仅文字√】
		set rule_del_file=%all_gem_sign%
		set s_gem=%gem_icon%
		set rule_create_file=%s_gem_icon%
	) else if exist %s_gem_icon%  (
		@ echo.		 ┗  宝石显示为【仅图标√】
		set rule_del_file=%all_gem_sign%
		set s_gem=%gem_texticon_tip%
		set rule_create_file=%s_gem_texticon_tip%
	) else if exist %s_gem_texticon_tip% (
		@ echo.		 ┣  宝石显示为【图标+文字+tip√】
		set rule_del_file=%all_gem_sign%
		set s_gem=%gem_text_tip%
		set rule_create_file=%s_gem_text_tip%
	) else if exist %s_gem_text_tip% (
		@ echo.		 ┣  宝石显示为【仅文字+tip√】
		set rule_del_file=%all_gem_sign%
		set s_gem=%gem_icon_tip%
		set rule_create_file=%s_gem_icon_tip%
	) else (
		@ echo.		 ┗  宝石显示为【仅图标+tip√】
		set rule_del_file=%all_gem_sign%
		set s_gem=%gem_texticon%
		set rule_create_file=%s_gem_texticon%
	) 
Goto CreateGemFile

:change_scroll_rule
	echo on
	pause
	if exist %s_scroll_texticon% (
		@ echo.		 ┣  卷轴显示为【图标+文字√】
		set rule_del_file=%all_scroll_sign%
		set s_scroll=%scroll_text%
		set rule_create_file=%s_scroll_text%
	) else if exist %s_scroll_text% (
		@ echo.		 ┣  卷轴显示为【仅文字√】
		set rule_del_file=%all_scroll_sign%
		set s_scroll=%scroll_icon%
		set rule_create_file=%s_scroll_icon%
	) else (
		@ echo.		 ┗  卷轴显示为【仅图标√】
		set rule_del_file=%all_scroll_sign%
		set s_scroll=%scroll_texticon%
		set rule_create_file=%s_scroll_texticon%
	) 
	pause
Goto CreateGemFile

:open_gem_file
notepad.exe %gem_file%
Goto RuleSetup_Main

REM===屏蔽规则设置 END===

REM===血球颜色与符文声音选择部分===
:RuneSound_Main
mode con cols=120 lines=57
Cls
set CurrentMenu=RuneSound_Main
@ECHO OFF
@ echo.	

@ echo.	━━━━┃MDK MOD 游戏音效设置 %Ver% 适配%FOR_MOD_VER%版  By ZhangMDKRU#2129┃━━━━

if exist %DEBUG_FILE% (
	call :color CF "		DEBUG模式ON		"
)
if exist %SETUP_FOLDER_FILE% (
	call :color DF "		封装模式ON		"
)
if not "%MFD%"=="MDK" (
	call :color 3F "	MOD文件夹：%MFD%	"
)

@echo.  
@echo.  	【请按键选择对应功能页面】▼
call :color E0 "	【Z】游戏功能设置 【X】光线辅助设置 【C】屏蔽掉落设置 "
call :color DF "【V】血球音效设置 "
@echo. 【B】UI风格设置 【N】单机设置

@echo.  
@ echo.	 请选择下面不同的高等符文音效，或者自己打开文件夹自己改。文件名是high_rune.flac			 
@ echo.	 设置符文掉落声音（Set drop sound of high level rune）
@ echo.		 ┣ 猛击【1】键，我要【D3传奇掉落声音 加 一段激昂的音乐】D3+MUSIC
@ echo.		 ┣ 猛击【2】键，我要【只有D3传奇掉落声音】Only D3
@ echo.	 	 ┣ 猛击【3】键，我要【哇，金色传说】Hearthstone Golden Legend
@ echo.		 ┣ 猛击【4】键，我要【D2原版音效】D2 Original
@ echo.		 ┗ 猛击【5】键，我要【自己替换文件，打开文件夹就行】DIY
@ echo.	 
if exist %zhongli_sound% (
@ echo.	 当前BC/BO/BCry钟离联动音效：【开启】
@ echo.		 ┗ 猛击【6】键，我要【关闭】钟离联动音效 CLOSE BC/BO ZHONGLI SOUNDS
) else (
@ echo.	 当前BC/BO/BCry钟离联动音效：【关闭】
@ echo.		 ┗ 猛击【6】键，我要【开启】钟离联动音效 OPEN BC/BO ZHONGLI SOUNDS
)
@ echo.	 
if exist %states_end_sound% (
@ echo.	 当前BUFF状态结束音效：【开启】（分支设置可生效）
@ echo.	  ┗ 猛击【7】键，我要【关闭】BUFF状态结束音效功能 BUFF END SOUNDS OFF
) else (
@ echo.	 当前BUFF状态结束音效：【关闭】（分支设置均无效）
@ echo.	  ┗ 猛击【7】键，我要【开启】BUFF状态结束音效功能 BUFF END SOUNDS ON
)
@ echo.		 ┃
@ echo.		 ┣  输入【777】开启【所有分支语音】／输入【888】关闭【所有分支语音】

if exist %battlecommand_end_sign% (
@ echo.		 ┣  输入【71】关闭【野蛮人】【√】【战争指挥（CTA/BC/加技能等级） 语音】
) else (
@ echo.		 ┣  输入【71】开启【野蛮人】【×】【战争指挥（CTA/BC/加技能等级） 语音】
)

if exist %battleorders_end_sign% (
@ echo.		 ┣  输入【72】关闭【野蛮人】【√】【战争命令（BO/加血量魔量） 语音】
) else (
@ echo.		 ┣  输入【72】开启【野蛮人】【×】【战争命令（BO/加血量魔量） 语音】
)

if exist %shout_end_sign% (
@ echo.		 ┣  输入【73】关闭【野蛮人】【√】【大吼（加防御） 语音】
) else (
@ echo.		 ┣  输入【73】开启【野蛮人】【×】【大吼（加防御） 语音】
)

if exist %venom_end_sign% (
@ echo.		 ┣  输入【74】关闭【刺　客】【√】【淬毒（悔恨） 语音】
) else (
@ echo.		 ┣  输入【74】开启【刺　客】【×】【淬毒（悔恨） 语音】
)

if exist %bladeshield_end_sign% (
@ echo.		 ┣  输入【75】关闭【刺　客】【√】【利刃之盾 语音】
) else (
@ echo.		 ┣  输入【75】开启【刺　客】【×】【利刃之盾  语音】
)

if exist %burstofspeed_end_sign% (
@ echo.		 ┣  输入【76】关闭【刺　客】【√】【速度爆发 语音】
) else (
@ echo.		 ┣  输入【76】开启【刺　客】【×】【速度爆发 语音】
)

if exist %fade_end_sign% (
@ echo.		 ┣  输入【77】关闭【刺　客】【√】【影散（背信） 语音】
) else (
@ echo.		 ┣  输入【77】开启【刺　客】【×】【影散（背信） 语音】
)

if exist %frozenarmor_end_sign% (
@ echo.		 ┣  输入【78】关闭【魔法师】【√】【冰封甲（1级甲） 语音】
) else (
@ echo.		 ┣  输入【78】开启【魔法师】【×】【冰封甲（1级甲） 语音】
)
if exist %shiverarmor_end_sign% (
@ echo.		 ┣  输入【79】关闭【魔法师】【√】【碎冰甲（2级甲） 语音】
) else (
@ echo.		 ┣  输入【79】开启【魔法师】【×】【碎冰甲（2级甲） 语音】
)
if exist %chillingarmor_end_sign% (
@ echo.		 ┣  输入【80】关闭【魔法师】【√】【寒冰甲（刚毅/3级甲） 语音】
) else (
@ echo.		 ┣  输入【80】开启【魔法师】【×】【寒冰甲（刚毅/3级甲） 语音】
)
if exist %enchant_end_sign% (
@ echo.		 ┣  输入【81】关闭【魔法师】【√】【火焰附魔强化（遵从/熔岩手） 语音】
) else (
@ echo.		 ┣  输入【81】开启【魔法师】【×】【火焰附魔强化（遵从/熔岩手） 语音】
)
if exist %energyshield_end_sign% (
@ echo.		 ┣  输入【82】关闭【魔法师】【√】【能量护盾（顶球） 语音】
) else (
@ echo.		 ┣  输入【82】开启【魔法师】【×】【能量护盾（顶球） 语音】
)

if exist %cyclonearmor_end_sign% (
@ echo.		 ┣  输入【83】关闭【德鲁伊】【√】【气旋护甲 语音】
) else (
@ echo.		 ┣  输入【83】开启【德鲁伊】【×】【气旋护甲  语音】
)

if exist %morph_end_sign% (
@ echo.		 ┣  输入【84】关闭【德鲁伊】【√】【德鲁伊变身 语音】
) else (
@ echo.		 ┣  输入【84】开启【德鲁伊】【×】【德鲁伊变身 语音】
)

if exist %holyshield_end_sign% (
@ echo.		 ┣  输入【85】关闭【圣骑士】【√】【神圣之盾 语音】
) else (
@ echo.		 ┣  输入【85】开启【圣骑士】【×】【神圣之盾 语音】
)

if exist %bonearmor_end_sign% (
@ echo.		 ┣  输入【86】关闭【死灵法师】【√】【骸骨护甲（遗忘骑士也会用） 语音】
) else (
@ echo.		 ┣  输入【86】开启【死灵法师】【×】【骸骨护甲（遗忘骑士也会用） 语音】
)

if exist %markwolf_end_sign% (
@ echo.		 ┣  输入【87】关闭【德鲁伊】【√】【狼之印记 语音】
) else (
@ echo.		 ┣  输入【87】开启【德鲁伊】【×】【狼之印记 语音】
)

if exist %markbear_end_sign% (
@ echo.		 ┗  输入【88】关闭【德鲁伊】【√】【熊之印记 语音】
) else (
@ echo.		 ┗  输入【88】开启【德鲁伊】【×】【熊之印记 语音】
)
@ echo.	 猛击【8】键，打开【BUFF状态结束音效目录】，我要自己替换文件 OPEN END SOUNDS FOLDER


@ echo.	 
@ echo.	 设置生命球与法力球的颜色风格 Set HP/MP Ball Color
@ echo.	 猛击【Q】键，我要【亚马逊风格】血球蓝球 AMA
@ echo.	 猛击【W】键，我要【刺客风格】血球蓝球 ASS
@ echo.	 猛击【E】键，我要【亡灵法师风格】血球蓝球 NEC
@ echo.	 猛击【R】键，我要【野蛮人风格】血球蓝球 BAR
@ echo.	 猛击【T】键，我要【圣骑士风格】血球蓝球 PAL
@ echo.	 猛击【Y】键，我要【女巫风格】血球蓝球 SOR
@ echo.	 猛击【U】键，我要【德鲁伊风格】血球蓝球 DRU
@ echo.	 猛击【I】键，我要【默认红蓝】血球蓝球 Default
REM @ echo.	 猛击【O】键，我要【自定义风格】血球蓝球 Custom（not used）
@ echo.

if exist %dlc1_sign% (
@ echo.	 *输入【DLC1】切换，DLC 1【白色堕落萝格风格沙漠雇佣兵】 状态：已激活
) else (
@ echo.	 *输入【DLC1】切换，DLC 1【白色堕落萝格风格沙漠雇佣兵】 状态：未激活
)
if exist %hire_newtype_sign% (
@ echo.	 *输入【DLC2】切换，DLC 2【全重武装风格雇佣兵（会关闭DLC1）】 状态：已激活
) else (
@ echo.	 *输入【DLC2】切换，DLC 2【全重武装风格雇佣兵（会关闭DLC1）】 状态：未激活
)
@ echo.
set  obj=""
set /p obj= 输入数字或字母按回车执行：

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
@echo	  无效输入，请看清楚【 】框中的内容重新输入！
@echo.
pause
ping -n 1 127.1>nul 
goto RuneSound_Main

:set_dlc2
	if exist %hire_newtype_sign% (
		@ echo.	 输入【DLC1】切换，DLC 1【白色堕落萝格风格沙漠雇佣兵】 状态：已激活
		cls
		@ echo.	 
		@ echo.	 
		@ echo.	 
		@ echo.	 
		@ echo.	 若询问文件夹名称是文件夹名还是文件名，请按【D】选择【是文件夹名】。
		@ echo.	 
		REM  先关闭 DLC1
		rd /S /Q %dlc1_t_file1%
		rd /S /Q %dlc1_t_file2%
		rd /S /Q %dlc1_t_file3%
		xcopy %dlc1_t_file1%.mdk %dlc1_t_file1% /Y /S /E
		xcopy %dlc1_t_file2%.mdk %dlc1_t_file2% /Y /S /E

		del %dlc1_t_file4%
		COPY /Y  %MDKMOD%\data\hd\character\hire_nickname\act2hire.json %MDKMOD%\data\hd\character\enemy

		del %dlc1_sign%
		
		REM 关闭DLC2
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
	@ echo.	 输入【DLC1】切换，DLC 1【白色堕落萝格风格沙漠雇佣兵】 状态：未激活
		REM  先关闭 DLC1
		rd /S /Q %dlc1_t_file1%
		rd /S /Q %dlc1_t_file2%
		rd /S /Q %dlc1_t_file3%
		xcopy %dlc1_t_file1%.mdk %dlc1_t_file1% /Y /S /E
		xcopy %dlc1_t_file2%.mdk %dlc1_t_file2% /Y /S /E

		del %dlc1_t_file4%
		COPY /Y  %MDKMOD%\data\hd\character\hire_nickname\act2hire.json %MDKMOD%\data\hd\character\enemy

		del %dlc1_sign%
		
		REM 激活DLC2
		xcopy %hire_newtype% %MDKMOD%\data\hd\character\enemy /Y /S /E
		echo. "x">"%hire_newtype_sign%"
		
	)
goto RuneSound_Main

:set_dlc1
	if exist %dlc1_sign% (
		@ echo.	 输入【DLC1】切换，DLC 1【白色堕落萝格风格沙漠雇佣兵】 状态：已激活
		cls
		@ echo.	 
		@ echo.	 
		@ echo.	 
		@ echo.	 
		@ echo.	 若询问文件夹名称是文件夹名还是文件名，请按【D】选择【是文件夹名】。
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
	@ echo.	 输入【DLC1】切换，DLC 1【白色堕落萝格风格沙漠雇佣兵】 状态：未激活
		REM 先关闭DLC2的A2 PET
		rd /S /Q %hire_file3%
		COPY /Y  %MDKMOD%\data\hd\character\hire_nickname\act2hire.json %enemy_folder%
		REM 激活DLC1
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
	@ echo.	关闭语音】
	copy /Y %states_end_sound_folder%\se_novoice\!se_sound!.flac %states_end_sound_folder%
	del !test_sound_sign!
) else (
	@ echo.	开启语音】
	copy /Y %states_end_sound_folder%\se_backup\!se_sound!.flac %states_end_sound_folder%
	@ECHO.  "x">!test_sound_sign!
)
@ echo.	完成
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
@ echo.	 我要【关闭BUFF状态结束音效提示（当前已打开）】CLOSE BUFF END SOUND
move /Y %states_end_sound_folder%\mdk\*.flac %states_end_sound_folder%
ren %d2r_excel%\states.txt states.txt.mdk
) else (
@ echo.	 我要【打开BUFF状态结束音效提示（当前已关闭）】CLOSE BUFF END SOUND
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
	@echo. 开始自定义文件判断！
	if not exist %profile_dir%%hp_style%.json (
		cls
		@echo. 错误！
		@echo. 未发现自定义风格文件！请选择已有的几个风格文件。
		Goto RuneSound_Main
	) 
)
@echo. 设置%hp_style%风格文件！
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
@ echo.	 打开 【音效文件夹】
@ echo.	 high_rune_数字.flac 是对应编号的高等符文掉落声音，例如high_rune_30.flac就是30#贝的掉落声音
@ echo.	 torch_key.flac 是6BOSS钥匙掉落声音
@ echo.	 item_potion_hd.flac 是药水的掉落声音
@ echo.	 文件夹内有几个可替换的文件供选择，药水声音文件改名或者删除则恢复药水声音。
@ echo.	 即将打开文件夹...
pause
explorer %d2r_sfx%\item\
pause
goto RuneSound_Main

:RuneSoundChangeOver
ping -n 1 127.1>nul
@ echo.
@ECHO 操作完成！即将返回...
@ echo.
pause
if exist %DEBUG_FILE% ( pause )
goto RuneSound_Main

REM===血球颜色与符文声音选择 END===



REM===游戏风格部分===
:GameStyle_Main
mode con cols=120 lines=48
Cls
set CurrentMenu=GameStyle_Main
@ECHO OFF
@ echo.	

@ echo.	━━━━┃MDK MOD 游戏风格与单机功能设置 %Ver% 适配%FOR_MOD_VER%版  By ZhangMDKRU#2129┃━━━━

if exist %DEBUG_FILE% (
	call :color CF "		DEBUG模式ON		"
)
if exist %SETUP_FOLDER_FILE% (
	call :color DF "		封装模式ON		"
)
if not "%MFD%"=="MDK" (
	call :color 3F "	MOD文件夹：%MFD%	"
)

@echo.  
@echo.  	【请按键选择对应功能页面】▼
call :color E0 "	【Z】游戏功能设置 【X】光线辅助设置 【C】屏蔽掉落设置 【V】血球音效设置 "
call :color DF "【B】UI风格设置 "
@echo. 【N】单机设置

@ echo.


if not exist %ui_mini% (
@ echo.	 【界 面 大 小】	输入【1】  切换〖100%%（默认）〗→【迷你界面√】→〖65%%〗→〖75%%〗→〖85%%〗
) else if not exist %ui_6% (
@ echo.	 【界 面 大 小】	输入【1】  切换〖100%%（默认）〗→〖迷你界面〗→【65%%√】→〖75%%〗→〖85%%〗
) else if not exist %ui_7% (
@ echo.	 【界 面 大 小】	输入【1】  切换〖100%%（默认）〗→〖迷你界面〗→〖65%%〗→【75%%√】→〖85%%〗
) else if not exist %ui_8% (
@ echo.	 【界 面 大 小】	输入【1】  切换〖100%%（默认）〗→〖迷你界面〗→〖65%%〗→〖75%%〗→【85%%√】
) else (
@ echo.	 【界 面 大 小】	输入【1】  切换【100%%（默认）√】→〖迷你界面〗→〖65%%〗→〖75%%〗→〖85%%〗
)
if exist %font_size% (
@ echo.	 【字 体 大 小】	输入【2】  切换〖默认尺寸〗→【加大尺寸√】
) else (
@ echo.	 【字 体 大 小】	输入【2】  切换【默认尺寸√】→〖加大尺寸〗	
)
@ echo.	
if exist %poison_nova_effects% (
@ echo.	 【剧毒新星特效】	输入【3】  切换〖原版〗→【剧毒新星降低亮度√】（死呼瘟疫等装备也生效）
) else (
@ echo.	 【剧毒新星特效】	输入【3】  切换【原版√】→〖剧毒新星降低亮度〗
)
if exist %magicarrow_effects% (
@ echo.	 【箭 矢 特 效】	输入【4】  切换〖原版〗→【增加魔法箭特效√】
) else (
@ echo.	 【箭 矢 特 效】	输入【4】  切换【原版√】→〖增加魔法箭特效〗
)
if exist %light_javelin_effects% (
@ echo.	 【标 枪 特 效】	输入【5】  切换〖原版〗→【增加闪电枪特效√】
) else (
@ echo.	 【标 枪 特 效】	输入【5】  切换【原版√】→〖增加闪电枪特效〗
)
if exist %light_axe_effects% (
@ echo.	 【飞 刀 特 效】	输入【6】  切换〖原版〗→【飞斧、飞刀加电尾特效√】
) else (
@ echo.	 【飞 刀 特 效】	输入【6】  切换【原版√】→〖飞斧、飞刀加电尾特效〗
)
if exist %light_a3mon_effects% (
@ echo.	 【怪物飞针特效】	输入【7】  切换〖原版〗→【飞针加电尾特效√】
) else (
@ echo.	 【怪物飞针特效】	输入【7】  切换【原版√】→〖飞针加电尾特效〗
)
if exist %nova_effects_no_nova_storm% (
@ echo.	 【电 法 特 效】	输入【8】  切换〖原版〗→〖雷云风暴 降亮度〗→【闪电新星+雷云风暴 降亮度√】
) else if exist %nova_effects_no_storm% (
@ echo.	 【电 法 特 效】	输入【8】  切换〖原版〗→【雷云风暴 降亮度√】→〖闪电新星+雷云风暴 降亮度〗
) else (
@ echo.	 【电 法 特 效】	输入【8】  切换【原版√】→〖雷云风暴 降亮度〗→〖闪电新星+雷云风暴 降亮度〗
)
if exist %chain_light_shield_effects% (
@ echo.	 【连闪飞盾特效】	输入【9】  切换〖原版〗→【连闪飞盾特效√】
) else (
@ echo.	 【连闪飞盾特效】	输入【9】  切换【原版√】→〖连闪飞盾特效〗
)
if exist %diablo_light_nova_effects% (
@ echo.	 【红色闪电特效】	输入【10】 切换〖原版〗→【红色闪电特效√】
) else (
@ echo.	 【红色闪电特效】	输入【10】 切换【原版√】→〖红色闪电特效〗
)

if exist %blood_mana_red_aura% (
@ echo.	 【鲜血魔法Debuff红光】	输入【11】 切换〖原版〗→【鲜血魔法Debuff红光提示√】
) else (
@ echo.	 【鲜血魔法Debuff红光】	输入【11】 切换【原版√】→〖鲜血魔法Debuff红光提示〗
)

REM if exist %torch_fire% (
REM @ echo.	 【火炬火风暴特效】	输入【6】  切换〖原版〗→【屏蔽火炬火焰风暴特效√】（*迪亚波罗的火风暴也会被屏蔽）
REM ) else (
REM @ echo.	 【火炬火风暴特效】	输入【6】  切换【原版√】→〖屏蔽火炬火焰风暴特效〗
REM )
if not exist %BO_time% (
@ echo.	 【BO/BC 特 效】	输入【12】 切换〖原版〗→【巴尔环/蓝火特效√】→〖刺客聚气环特效〗
) else if not exist %BO_time_charge% (
@ echo.	 【BO/BC 特 效】	输入【12】 切换〖原版〗→〖巴尔环/蓝火特效〗→【刺客聚气环特效√】
) else (
@ echo.	 【BO/BC 特 效】	输入【12】 切换【原版√】→〖巴尔环/蓝火特效〗→〖刺客聚气环特效〗
)
if not exist %convic_off% (
@ echo.	 【审判光环特效】	输入【13】 切换〖原版〗→【生效时显示感叹号提示 √】
) else (
@ echo.	 【审判光环特效】	输入【13】 切换【原版√】→〖生效时显示感叹号提示〗
)
if exist %blessedhammer_effect% (
@ echo.	 【祝福之锤电尾特效】	输入【14】 切换〖原版〗→【祝福之锤带电尾特效 √】
) else (
@ echo.	 【祝福之锤电尾特效】	输入【14】 切换【原版√】→〖祝福之锤带电尾特效〗
)
if exist %sor_es_aura% (
@ echo.	 【能量护盾特效】	输入【15】 切换〖原版〗→【带特效并持续发光√】
) else (
@ echo.	 【能量护盾特效】	输入【15】 切换【原版√】→〖带特效并持续发光〗
)
@ echo.	

if not exist %ass_charge_default% (
@ echo.	 【*刺客聚气图标】	输入【20】 切换【原版√】→〖身边围绕大图标〗→〖右下角大图标〗→〖脚底小图标〗
) else if not exist %ass_charge_large% (
@ echo.	 【*刺客聚气图标】	输入【20】 切换〖原版〗→【身边围绕大图标√】→〖右下角大图标〗→〖脚底小图标〗
) else if not exist %ass_charge_large_down% (
@ echo.	 【*刺客聚气图标】	输入【20】 切换〖原版〗→〖身边围绕大图标〗→【右下角大图标√】→〖脚底小图标〗
) else (
@ echo.	 【*刺客聚气图标】	输入【20】 切换〖原版〗→〖身边围绕大图标〗→〖右下角大图标〗→【脚底小图标√】
)
if exist %ass_charge_missiles_3% (
@ echo.	 【*刺客聚气特效】	输入【21】 切换〖原版〗→【自定义√】→〖降特效Ⅰ〗→〖降特效Ⅱ〗
) else if exist %ass_charge_missiles% (
@ echo.	 【*刺客聚气特效】	输入【21】 切换〖原版〗→【降特效Ⅰ√】→〖降特效Ⅱ〗
) else if exist %ass_charge_missiles_2% (
@ echo.	 【*刺客聚气特效】	输入【21】 切换〖原版〗→〖降特效Ⅰ〗→【降特效Ⅱ√】
) else (
@ echo.	 【*刺客聚气特效】	输入【21】 切换【原版√】→〖降特效Ⅰ〗→〖降特效Ⅱ〗
)
@ echo.	 【*自定义刺客聚气特效】输入【22】 自行编辑特效配置文件

if exist %ass_kick_voice_chunli_sign% (
@ echo.	 【*刺客踢腿语音】	输入【23】 切换〖原版〗→【街霸3春丽√】→〖无声音〗
) else if exist %ass_kick_no_voice_sign% (
@ echo.	 【*刺客踢腿语音】	输入【23】 切换〖原版〗→〖街霸3春丽〗→【无声音√】
) else (
@ echo.	 【*刺客踢腿语音】	输入【23】 切换【原版√】→〖街霸3春丽〗→〖无声音〗
)
@ echo.

if exist %rune_style% (
@ echo.	 【符文图标风格】	输入【Q】  切换〖原版〗→【彩色带编号√】
) else (
@ echo.	 【符文图标风格】	输入【Q】  切换【原版√】→〖彩色带编号〗
)
if not exist %hp_bar% (
@ echo.	 【怪物血条风格】	输入【W】  切换〖原版〗→【哥特风格√】→〖简洁风格〗
) else if not exist %hp_bar2% (
@ echo.	 【怪物血条风格】	输入【W】  切换〖原版〗→〖哥特风格〗→【简洁风格√】
) else (
@ echo.	 【怪物血条风格】	输入【W】  切换【原版√】→〖哥特风格〗→〖简洁风格〗
)
if exist %mini_map_unit% (
@ echo.	 【地图图标风格】	输入【E】  切换〖原版〗→【MDK实心风格√】
) else (
@ echo.	 【地图图标风格】	输入【E】  切换【原版√】→〖MDK实心风格〗
)
if exist %color_word% (
@ echo.	 【装备词条风格】	输入【R】  切换〖原版〗→【MDK全彩色词条√】→〖MDK重点词条彩色〗
) else if exist %less_color_word% (
@ echo.	 【装备词条风格】	输入【R】  切换〖原版〗→〖MDK彩色属性词条〗→【MDK重点词条彩色√】
) else (
@ echo.	 【装备词条风格】	输入【R】  切换【原版√】→〖MDK彩色属性词条〗→〖MDK重点词条彩色〗
)
if exist %color_spell% (
@ echo.	 【技能图标风格】	输入【T】  切换【原版√】→〖彩色技能图标〗
) else (
@ echo.	 【技能图标风格】	输入【T】  切换〖原版〗→【彩色技能图标√】
)
if exist %potion_style% (
@ echo.	 【药瓶形状风格】	输入【Y】  切换〖原版〗→【圆瓶大药瓶√】
) else (
@ echo.	 【药瓶形状风格】	输入【Y】  切换【原版√】→〖圆瓶大药瓶〗
)
if exist %potion_vo% (
@ echo.	 【药水掉落音效】	输入【U】  切换〖原版〗→【无音效√】
) else (
@ echo.	 【药水掉落音效】	输入【U】  切换【原版√】→〖无音效〗
)
if exist %cain_light% (
@ echo.	 【NPC头衔特效】	输入【I】  切换〖原版〗→【NPC有头衔√】
) else (
@ echo.	 【NPC头衔特效】	输入【I】  切换【原版√】→〖NPC有头衔〗
)
if exist %hire_nickname% (
@ echo.	 【佣兵标记特效】	输入【O】  切换〖原版〗→【佣兵有头衔标记√】
) else (
@ echo.	 【佣兵标记特效】	输入【O】  切换【原版√】→〖佣兵有头衔标记〗
)
if exist %hireables_down% (
@ echo.	 【佣兵图标位置】	输入【P】  切换【屏幕下方√】→〖屏幕上方〗
) else (
@ echo.	 【佣兵图标位置】	输入【P】  切换〖屏幕下方〗→【屏幕上方√】
)

@ echo.	
set SwapCheckSign=%d2r_layouts%\MDKMODWeaponSwapTiphd.json
if exist %SwapCheckSign% (
@ echo.	 【副手武器提示】	输入【A】  切换〖原版状态〗→【显示副手武器提示√】
) else (
@ echo.	 【副手武器提示】	输入【A】  切换【原版状态√】→〖显示副手武器提示〗	
)
if exist %automap_monster_mdk_sign% (
	@ echo.	 【地图标记怪物】	输入【S】  切换〖无标记〗→【牛场+危险怪物√】→〖混沌避难所+牛+危〗→〖所有怪物〗
) else if exist %automap_monster_mdkchaos_sign% (
	@ echo.	 【地图标记怪物】	输入【S】  切换〖无标记〗→〖牛场+危险怪物〗→【混沌避难所+牛+危√】→〖所有怪物〗
) else if exist %automap_monster_all_sign% (
	@ echo.	 【地图标记怪物】	输入【S】  切换〖无标记〗→〖牛场+危险怪物〗→〖混沌避难所+牛+危〗→【所有怪物√】
) else (
	@ echo.	 【地图标记怪物】	输入【S】  切换【无标记√】→〖牛场+危险怪物〗→〖混沌避难所+牛+危〗→〖所有怪物〗
)
if not exist %automap_chest_sign% (
@ echo.	 【地图标记箱子】	输入【D】  切换〖无标记〗→【标记箱子位置√】
) else (
@ echo.	 【地图标记箱子】	输入【D】  切换【无标记√】→〖标记箱子位置〗
)
if exist %monster_res% (
@ echo.	 【敌人抗性提示】	输入【F】  切换〖无提示〗→【名字后显示「地狱难度的抗性」√】
) else (
@ echo.	 【敌人抗性提示】	输入【F】  切换【无提示√】→〖名字后显示「地狱难度的抗性」〗
)
if not exist %map_tips% (
@ echo.	 【地图信息提示】	输入【G】  切换〖无提示〗→【显示「地图等级/免疫」√】→〖显示「地图等级」〗 
) else if not exist %map_lv% (
@ echo.	 【地图信息提示】	输入【G】  切换〖无提示〗→〖显示「地图等级/免疫」〗 →【显示「地图等级」√】
) else (
@ echo.	 【地图信息提示】	输入【G】  切换【无提示√】→〖显示「地图等级/免疫」〗 →〖显示「地图等级」〗 
)
if not exist %no_all_cap% (
	if not exist %no_cap% (
		@ echo.	 【头盔显示状态】	输入【H】  切换【原版√】→〖不显示布帽骷髅帽〗→〖不显示所有头盔〗
	) else (
		@ echo.	 【头盔显示状态】	输入【H】  切换〖原版〗→【不显示布帽骷髅帽√】→〖不显示所有头盔〗
	)
) else (
		@ echo.	 【头盔显示状态】	输入【H】  切换〖原版〗→〖不显示布帽骷髅帽〗→【不显示所有头盔√】
)


@ echo.
set  obj=""
set /p obj= 输入数字或字母按回车执行：

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
@echo	  无效输入，请看清楚【 】框中的内容重新输入！
@echo.
pause
ping -n 1 127.1>nul 
goto GameStyle_Main



REM =========单机游戏设置界面==========

REM===游戏风格部分===
:OfflineGame_Main
mode con cols=120 lines=43
Cls
set CurrentMenu=OfflineGame_Main
REM===读取参数===

REM===显示界面===

@ECHO OFF
@ echo.	

@ echo.	━━━━┃MDK MOD 游戏风格与单机功能设置 %Ver% 适配%FOR_MOD_VER%版  By ZhangMDKRU#2129┃━━━━

if exist %DEBUG_FILE% (
	call :color CF "		DEBUG模式ON		"
)
if exist %SETUP_FOLDER_FILE% (
	call :color DF "		封装模式ON		"
)
if not "%MFD%"=="MDK" (
	call :color 3F "	MOD文件夹：%MFD%	"
)

@echo.  
@echo.  	【请按键选择对应功能页面】▼
call :color E0 "	【Z】游戏功能设置 【X】光线辅助设置 【C】屏蔽掉落设置 【V】血球音效设置 【B】UI风格设置 "
call :color DF "【N】单机设置"

@ echo.	   
@ echo.	   
@ echo.	 【 ◆◆◆ 单 机 游 戏 增 强 功 能 设 定 ◆◆◆ 】
@ echo.	   

set /p tz_mode=<%tz_mode_setup%
if "%tz_mode%"=="normal" (
	@ echo.	 【*邪恶地带扩展模式】	输入【TZ】 设置 【原版状态√】→〖增加区域范围〗→〖精选邪恶区域〗
) else if "%tz_mode%"=="more" (
	@ echo.	 【*邪恶地带扩展模式】	输入【TZ】 设置 〖原版状态〗→【增加区域范围√】→〖精选邪恶区域〗
) else if "%tz_mode%"=="best" (
	@ echo.	 【*邪恶地带扩展模式】	输入【TZ】 设置 〖原版状态〗→〖增加区域范围〗→【精选邪恶区域√】
) else (
	@ echo.	 【*邪恶地带扩展模式】	输入【TZ】 设置 【未知状态？？？】→〖增加区域范围〗
)

set /p caidan_unique_mode=<%caidan_unique_mode_on%
if "%caidan_unique_mode%"=="normal" (
	@ echo.	 【*黑毛召唤与彩蛋装】	输入【CD】 设置 〖原版状态〗→【卖暗金饰品召黑毛√】→〖召黑毛+开放彩蛋装备〗
) else if "%caidan_unique_mode%"=="caidan" (
	@ echo.	 【*黑毛召唤与彩蛋装】	输入【CD】 设置 〖原版状态〗→〖卖暗金饰品召黑毛〗→【召黑毛+开放彩蛋装备√】
) else (
	@ echo.	 【*黑毛召唤与彩蛋装】	输入【CD】 设置 【原版状态√】→〖卖暗金饰品召黑毛〗→〖召黑毛+开放彩蛋装备〗
)

@ echo.	 
if exist %offline_fullhire_on% (
	@ echo.	 【佣 兵 全 副 武 装】	输入【H】  切换 〖原版状态〗→【佣兵全武装√】
) else (
	@ echo.	 【佣 兵 全 副 武 装】	输入【H】  切换 【原版状态√】→〖佣兵全武装〗
)

set /p bigbox_mode=<%offline_bigbox%
if "%bigbox_mode%"=="all"  (
	@ echo.	 【大储物箱背包方盒】	输入【G】  切换 〖原版状态〗→【大箱子+盒+背包√】→〖大箱子+盒〗→〖仅大箱子〗
) else if "%bigbox_mode%"=="stash+box"  (
	@ echo.	 【大储物箱背包方盒】	输入【G】  切换 〖原版状态〗→〖大箱子+盒+背包〗→【大箱子+盒√】→〖仅大箱子〗
) else if "%bigbox_mode%"=="stash"  (
	@ echo.	 【大储物箱背包方盒】	输入【G】  切换 〖原版状态〗→〖大箱子+盒+背包〗→〖大箱子+盒〗→【仅大箱子√】
) else (
	@ echo.	 【大储物箱背包方盒】	输入【G】  切换 【原版状态√】→〖大箱子+盒+背包〗→〖大箱子+盒〗→〖仅大箱子〗
)

@ echo.	 


@set /p rune_shop_mode=<%rune_shop_sign%
if "%rune_shop_mode%"=="rev"  (
	@ echo.	 【宝 石 符 文 商 店】	输入【Q】  切换 【原版商店+大紫瓶√】→〖+符文宝石〗→〖+任务道具〗
) else if "%rune_shop_mode%"=="rune"  (
	@ echo.	 【宝 石 符 文 商 店】	输入【Q】  切换 【原版商店+大紫瓶+符文宝石√】→〖+任务道具〗
) else if "%rune_shop_mode%"=="quest"  (
	@ echo.	 【宝 石 符 文 商 店】	输入【Q】  切换 【原版商店+大紫瓶+符文宝石+任务道具√】→〖恢复原版〗
) else (
	@ echo.	 【宝 石 符 文 商 店】	输入【Q】  切换 【原版商店√】→〖+大紫瓶〗→〖+符文宝石〗→〖+任务道具〗
)

if not exist %monster_2x% (
	@ echo.	 【怪 物 超 级 加 倍】	输入【W】  切换 〖原版密度〗→【1.5倍√】→〖3倍〗→〖10倍〗→〖绝望的20倍〗
) else if not exist %monster_3x% (
	@ echo.	 【怪 物 超 级 加 倍】	输入【W】  切换 〖原版密度〗→〖1.5倍〗→【3倍√】→〖10倍〗→〖绝望的20倍〗
) else if not exist %monster_10x% (
	@ echo.	 【怪 物 超 级 加 倍】	输入【W】  切换 〖原版密度〗→〖1.5倍〗→〖3倍〗→【10倍√】→〖绝望的20倍〗
) else if not exist %monster_20x% (
	@ echo.	 【怪 物 超 级 加 倍】	输入【W】  切换 〖原版密度〗→〖1.5倍〗→〖3倍〗→〖10倍〗→【绝望的20倍√】
) else (
	@ echo.	 【怪 物 超 级 加 倍】	输入【W】  切换 【原版密度√】→〖1.5倍〗→〖3倍〗→〖10倍〗→〖绝望的20倍〗
)

set /p charstats_mode=<%charstats_mode_on%
if "%charstats_mode%"=="plus"  (
	@ echo.	 【角 色 强 化 模 式】	输入【E】  切换 〖原版状态〗→【带初始装备√】→〖加倍点数〗→〖全面强化〗
) else if "%charstats_mode%"=="pro"  (
	@ echo.	 【角 色 强 化 模 式】	输入【E】  切换 〖原版状态〗→〖带初始装备〗→【加倍点数√】→〖全面强化〗
) else if "%charstats_mode%"=="ultra"  (
	@ echo.	 【角 色 强 化 模 式】	输入【E】  切换 〖原版状态〗→〖带初始装备〗→〖加倍点数〗→【全面强化√】
) else (
	@ echo.	 【角 色 强 化 模 式】	输入【E】  切换 【原版状态√】→〖带初始装备〗→〖加倍点数〗→〖全面强化〗
)

set /p exp_mode=<%exp_mode_on%
if "%exp_mode%"=="20"  (
	@ echo.	 【经 验 强 化 模 式】	输入【R】  切换 〖原版状态〗→【20倍经验√】→〖一刀99级模式〗
) else if "%exp_mode%"=="99"  (
	@ echo.	 【经 验 强 化 模 式】	输入【R】  切换 〖原版状态〗→〖20倍经验〗→【一刀99级模式√】
) else (
	@ echo.	 【经 验 强 化 模 式】	输入【R】  切换 【原版状态√】→〖20倍经验〗→〖一刀99级模式〗
)

if exist %cubemain_ex%  (
	@ echo.	 【单 机 合 成 公 式】	输入【T】  切换 〖原版状态〗→【增加调试用合成公式√】
) else (
	@ echo.	 【单 机 合 成 公 式】	输入【T】  切换 【原版状态√】→〖增加调试用合成公式〗
)

if not exist %rw_nolimit%  (
	@ echo.	 【符文之语无限制】	输入【Y】  切换 〖原版状态〗→【解除符文之语装备类型限制√】
) else (
	@ echo.	 【符文之语无限制】	输入【Y】  切换 【原版状态√】→〖解除符文之语装备类型限制〗
)

set /p skill_mode=<%skills_mode_on%
if "%skill_mode%"=="normal"  (
	@ echo.	 【技  能  增  强】	输入【U】  切换 〖原版技能〗→【无限箭矢标枪+刺客3分钟聚气√】→〖单机技能加强〗
) else if "%skill_mode%"=="plus"  (
	@ echo.	 【技  能  增  强】	输入【U】  切换 〖原版技能〗→〖无限箭矢标枪+刺客3分钟聚气〗→【单机技能加强√】
) else (
	@ echo.	 【技  能  增  强】	输入【U】  切换 【原版技能√】→〖无限箭矢标枪+刺客3分钟聚气〗→〖单机技能加强〗
)
@ echo.	

set /p tc_mode=<%TC_mode_on%
if "%tc_mode%"=="modup"  (
	@ echo.	 【爆  率  增  加】	输入【1】  切换 〖原版状态〗→【额外掉落√】→〖无杂物〗→〖爆率UP〗→〖爆率+无杂物〗
) else if "%tc_mode%"=="nomisc"  (
	@ echo.	 【爆  率  增  加】	输入【1】  切换 〖原版状态〗→〖额外掉落〗→【无杂物√】→〖爆率UP〗→〖爆率+无杂物〗
) else if "%tc_mode%"=="tcup"  (
	@ echo.	 【爆  率  增  加】	输入【1】  切换 〖原版状态〗→〖额外掉落〗→〖无杂物〗→【爆率UP√】→〖爆率+无杂物〗
) else if "%tc_mode%"=="allup"  (
	@ echo.	 【爆  率  增  加】	输入【1】  切换 〖原版状态〗→〖额外掉落〗→〖无杂物〗→〖爆率UP〗→【爆率+无杂物√】
) else (
	@ echo.	 【爆  率  增  加】	输入【1】  切换 【原版状态√】→〖额外掉落〗→〖无杂物〗→〖爆率UP〗→〖爆率+无杂物〗
)

if exist %itemratio_up%  (
	@ echo.	 【染 色 率 增 加】	输入【2】  切换 〖原版状态〗→【全面提高染色率√】
) else (
	@ echo.	 【染 色 率 增 加】	输入【2】  切换 【原版状态√】→〖全面提高染色率〗
)



@ echo.	 
if not exist %all_sockets%  (
	@ echo.	 【全 装 备 打 孔】	输入【3】  切换 〖原版状态〗→【增加所有装备打孔√】
) else (
	@ echo.	 【全 装 备 打 孔】	输入【3】  切换 【原版状态√】→〖增加所有装备打孔〗
)

@ echo.	 孔类型说明：◆手套1-3孔→头盔 ◆鞋子1-4孔→盔甲 ◆咒符1-3孔→武器 ◆腰带2孔→全类型 ◆戒指项链1孔
@ echo.	 ▲咒符制作符文之语必须使用“白色咒符”，关闭“全装备打孔”后不合规装备会自动删除！！！
@ echo.	 

if exist %unify_gc_mahua_sign% (
	@ echo.	 【（仅自己生效）统一特大咒符图案】输入【J1】 切换〖恢复默认〗【麻花√】〖鬼脸〗〖眼睛〗〖眼睛（暗）〗
) else if exist %unify_gc_guilian_sign% (
	@ echo.	 【（仅自己生效）统一特大咒符图案】输入【J1】切换〖恢复默认〗〖麻花〗【鬼脸√】〖眼睛〗〖眼睛（暗）〗
) else if exist %unify_gc_eye_sign% (
	@ echo.	 【（仅自己生效）统一特大咒符图案】输入【J1】切换〖恢复默认〗〖麻花〗〖鬼脸〗【眼睛√】〖眼睛（暗）〗
) else if exist %unify_gc_eye_dark_sign% (
	@ echo.	 【（仅自己生效）统一特大咒符图案】输入【J1】切换〖恢复默认〗〖麻花〗〖鬼脸〗〖眼睛〗【眼睛（暗）】
) else (
	@ echo.	 【（仅自己生效）统一特大咒符图案】输入【J1】切换【恢复默认√】〖麻花〗〖鬼脸〗〖眼睛〗〖眼睛（暗）〗
)
if exist %unify_lc_lingpai_sign% (
	@ echo.	 【（仅自己生效）统一 大咒符图案】 输入【J2】切换〖恢复默认〗【令牌√】〖牛角〗〖方塔〗
) else if exist %unify_lc_niujiao_sign% (
	@ echo.	 【（仅自己生效）统一 大咒符图案】 输入【J2】切换〖恢复默认〗〖令牌〗【牛角√】〖方塔〗
) else if exist %unify_lc_fangta_sign% (
	@ echo.	 【（仅自己生效）统一 大咒符图案】 输入【J2】切换〖恢复默认〗〖令牌〗〖牛角〗【方塔√】
) else (
	@ echo.	 【（仅自己生效）统一 大咒符图案】 输入【J2】切换【恢复默认√】〖令牌〗〖牛角〗〖方塔〗
)
if exist %unify_sc_xuanwo_sign% (
	@ echo.	 【（仅自己生效）统一 小咒符图案】 输入【J3】切换〖恢复默认〗【漩涡√】〖圆符〗〖椭圆〗〖椭圆（暗）〗
) else if exist %unify_sc_yuanfu_sign% (
	@ echo.	 【（仅自己生效）统一 小咒符图案】 输入【J3】切换〖恢复默认〗〖漩涡〗【圆符√】〖椭圆〗〖椭圆（暗）〗
) else if exist %unify_sc_tuoyuan_sign% (
	@ echo.	 【（仅自己生效）统一 小咒符图案】 输入【J3】切换〖恢复默认〗〖漩涡〗〖圆符〗【椭圆√】〖椭圆（暗）〗
) else if exist %unify_sc_tuoyuan_dark_sign% (
	@ echo.	 【（仅自己生效）统一 小咒符图案】 输入【J3】切换〖恢复默认〗〖漩涡〗〖圆符〗〖椭圆〗【椭圆（暗）√】
) else (
	@ echo.	 【（仅自己生效）统一 小咒符图案】 输入【J3】切换【恢复默认√】〖漩涡〗〖圆符〗〖椭圆〗〖椭圆（暗）〗
)

@ echo.

	@ echo.	 输入【D1】打开【角色存档简单修改器（Halbu Editor）】 
	@ echo.	 输入【D2】打开【角色装备修改器（DoZerg Diablo Edit 3.0 α v0.32）】 
	@ echo.	 输入【D3】打开【战网恐怖地带预测提示】 
	
@ echo.
call :color E1 "	 "
call :color CF "【※切换共享箱子存档（1-9）】"
@echo. 输入【BOX】 进入 【共享箱子存档切换】（7页大箱子必须设置一次）
REM @ echo.	 【※切换共享箱子存档（1-9）】	输入【BOX】 进入 【共享箱子存档切换】（7页大箱子必须设置一次）

call :color E1 "	 输入【 M 】 打开 【游戏存档目录】"
@ echo.
@ echo.
set  obj=""
set /p obj= 输入数字或字母按回车执行：

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
@echo	  无效输入，请看清楚【 】框中的内容重新输入！
@echo.
pause
ping -n 1 127.1>nul 
goto OfflineGame_Main




REM ==============
REM ====程序部分====
REM ==============
:set_charstats_mode

set /p charstats_mode=<%charstats_mode_on%
if "%charstats_mode%"=="plus"  (
	@ echo.	 【角 色 强 化 模 式】	输入【E2】  切换 〖原版状态〗→【带初始装备√】→〖加倍点数 √〗→〖全面强化〗
	COPY /Y %charstats_pro% %charstats_file%
	@echo.pro>%charstats_mode_on%
	
) else if "%charstats_mode%"=="pro"  (
	@ echo.	 【角 色 强 化 模 式】	输入【E2】  切换 〖原版状态〗→〖带初始装备〗→【加倍点数 √】→〖全面强化〗
	COPY /Y %charstats_ultra% %charstats_file%
	@echo.ultra>%charstats_mode_on%
	
) else if "%charstats_mode%"=="ultra"  (
	@ echo.	 【角 色 强 化 模 式】	输入【E2】  切换 〖原版状态〗→〖带初始装备〗→〖加倍点数 √〗→【全面强化√】
	COPY /Y %charstats_default% %charstats_file%
	@echo.default>%charstats_mode_on%
	
) else (
	@ echo.	 【角 色 强 化 模 式】	输入【E2】  切换 【原版状态√】→【带初始装备〗→〖加倍点数 √〗→〖全面强化〗
	COPY /Y %charstats_plus% %charstats_file%
	@echo.plus>%charstats_mode_on%
	
)
goto GameStyleFunctionEnd

:set_SwapCheckSign
	if exist %SwapCheckSign% (
		del %d2r_layouts%\MDKMODWeaponSwapTiphd.json
		del %controller_layouts%\MDKMODWeaponSwapTiphd.json
	) else (
		@ echo.   【%FuncName%】 OFF 》 ON
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
@ echo.	 【MDK MOD 共享箱子切换系统（试作型） ver 20220925】
@ echo.  
@ echo.	 猛击 【 Z 】 键，返回【MDK MOD设置器】主界面
@ echo.	 猛击 【 X 】 键，返回【掉落显示屏蔽规则】设置界面
@ echo.	 猛击 【 C 】 键，返回【血球颜色与游戏音效】设置界面
@ echo.	 猛击 【 V 】 键，返回【游戏UI风格与功能】设置界面
@ echo.	 猛击 【 B 】 键，返回【单机功能】设置界面
@ echo.  
call :color E4 "	 通常情况下，D2R的存档目录为%%USERPROFILE%%\Saved Games\Diablo II Resurrected之中"
@ echo.  
call :color E4 "	 如果该目录不存在或者设置器没有读写权限时，该切换系统将会出现错误。"
@ echo.  
call :color E4 "	 存档中不存在共享箱子文件时设置器会自动生成共享大箱子存档."
@ echo.  
@ echo.  
@ echo.	 读取存档目录为：%USERPROFILE%\Saved Games\Diablo II Resurrected
call :color EC "	 当前使用的是【第 %c_save_sharebox_num% 号】共享箱子"
@ echo.
@ echo.	 【切换箱子存档（1-9）】	请输入【1-9】 切换 【共享箱子存档】
@ echo.	 提示：请共享箱子存档名字为[ SharedStashSoftCoreV2.d2i ]，若需手动操作切换或备份请参考。

@ echo.
@ echo.
@ echo.	 猛击 【 M 】 键，【打开游戏存档目录】
@ echo.	 猛击 【 Q 】 键，【退回上一个设置页面】
@ echo.
@ echo.
set  obj=""
set /p obj= 输入数字或字母按回车执行：

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
@echo	  无效输入，请看清楚【 】框中的内容重新输入！
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
	@ echo.	 【鲜血魔法Debuff红光】输入【52】 切换〖原版〗→【鲜血魔法Debuff红光提示√】
	ren %d2r_overlays%\common\blood_mana.json blood_mana_mdk.json
) else (
	@ echo.	 【鲜血魔法Debuff红光】输入【52】 切换【原版√】→〖鲜血魔法Debuff红光提示〗
	ren %d2r_overlays%\common\blood_mana_mdk.json blood_mana.json
)

goto GameStyleFunctionEnd

:set_ass_kick_voice
if exist %ass_kick_voice_chunli_sign% (
	@ echo.	 【*刺客踢腿语音】	输入【03】 切换〖原版〗→【街霸3春丽√】→〖无声音〗
	copy /Y %ass_kick_no_voice%\kick*.flac %MDKMOD%\data\hd\global\sfx\skill\assassin
	@echo "x">%ass_kick_no_voice_sign%
	del %ass_kick_voice_chunli_sign%
	
) else if exist %ass_kick_no_voice_sign% (
	@ echo.	 【*刺客踢腿语音】	输入【03】 切换〖原版〗→〖街霸3春丽〗→【无声音√】
	del /Q %MDKMOD%\data\hd\global\sfx\skill\assassin\kick*.flac
	del %ass_kick_voice_chunli_sign%
	del %ass_kick_no_voice_sign%
	
) else (
	@ echo.	 【*刺客踢腿语音】	输入【03】 切换【原版√】→〖街霸3春丽〗→〖无声音〗
	copy /Y %ass_kick_voice_chunli%\kick*.flac %MDKMOD%\data\hd\global\sfx\skill\assassin
	@echo "x">%ass_kick_voice_chunli_sign%
	del %ass_kick_no_voice_sign%
)
goto GameStyleFunctionEnd


:set_chain_light_effects
if exist %chain_light_shield_effects% (
@ echo.	 【连闪飞盾特效】	输入【51】 切换〖原版〗→【连闪飞盾特效√】
ren %d2r_missiles%\chainlightningbolt.json chainlightningbolt_mdk.json
) else (
@ echo.	 【连闪飞盾特效】	输入【51】 切换【原版√】→〖连闪飞盾特效〗
ren %d2r_missiles%\chainlightningbolt_mdk.json chainlightningbolt.json
)

goto GameStyleFunctionEnd

:set_diablo_light_nova_effects
	if exist %diablo_light_nova_effects% (
	@ echo.	 【红色电圈】	输入【51】 切换〖原版〗→【红色电圈√】
	del %d2r_missiles%\electric_nova.json
	del %d2r_missiles%\lightningbolt.json
	del %d2r_missiles%\chainlightningbolt.json
	del %d2r_overlays%\common\lightning.json
	del %diablo_light_nova_effects%
	) else (
	@ echo.	 【红色电圈】	输入【51】 切换【原版√】→〖红色电圈〗
	copy /Y "%d2r_missiles%\red_lighting\electric_nova.json" "%d2r_missiles%\electric_nova.json"
	copy /Y "%d2r_missiles%\red_lighting\lightningbolt.json" "%d2r_missiles%\lightningbolt.json"
	copy /Y "%d2r_missiles%\red_lighting\chainlightningbolt.json" "%d2r_missiles%\chainlightningbolt.json"
	copy /Y "%d2r_missiles%\red_lighting\lightning.json" "%d2r_overlays%\common\lightning.json"
	@echo. "x">%diablo_light_nova_effects%
	)
goto GameStyleFunctionEnd

:set_blessedhammer_effect
	if exist %blessedhammer_effect% (
	@ echo.	 【祝福之锤电尾特效】	输入【81】  切换〖原版〗→【祝福之锤带电尾特效 √】
	ren %d2r_missiles%\blessedhammer.json blessedhammer_mdk.json
	) else (
	@ echo.	 【祝福之锤电尾特效】	输入【81】  切换【原版√】→〖祝福之锤带电尾特效〗
	ren %d2r_missiles%\blessedhammer_mdk.json blessedhammer.json
	
	)
goto GameStyleFunctionEnd

:set_all_caidan_unique

	set /p caidan_unique_mode=<%caidan_unique_mode_on%
	if "%caidan_unique_mode%"=="normal" (
		@ echo.	 【*开放彩蛋装备掉落】	输入【CD】 设置 〖原版状态〗→【不开放彩蛋装备掉落√】→〖开放彩蛋装备掉落〗
		COPY /Y %caidan_unique_mode_caidan% %uniqueitems_file%
		@echo.caidan>%caidan_unique_mode_on%
		
	) else if "%caidan_unique_mode%"=="caidan" (
		@ echo.	 【*开放彩蛋装备掉落】	输入【CD】 设置 〖原版状态〗→〖不开放彩蛋装备掉落〗→【开放彩蛋装备掉落√】
		COPY /Y %caidan_unique_mode_default% %uniqueitems_file%
		@echo.default>%caidan_unique_mode_on%
		
	) else (
		@ echo.	 【*开放彩蛋装备掉落】	输入【CD】 设置 【原版状态√】→〖不开放彩蛋装备掉落〗→〖开放彩蛋装备掉落〗
		COPY /Y %caidan_unique_mode_normal% %uniqueitems_file%
		@echo.normal>%caidan_unique_mode_on%
		
	)
goto GameStyleFunctionEnd


:set_cubemain_ex
	if exist %cubemain_ex%  (
	@ echo.	 设置 【恢复默认合成公式】
	ren %d2r_excel%\cubemain.txt cubemain_mdk.txt
	) else (
	@ echo.	 设置 【增加调试用合成公式】
	ren %d2r_excel%\cubemain_mdk.txt cubemain.txt
	)
goto GameStyleFunctionEnd

:set_automap_chest_sign
if not exist %automap_chest_sign% (
	@ echo.	 设置 【关闭箱子显示】
	ren %d2r_excel%\objects.txt objects.txt.mdk
	ren %d2r_excel%\objects.txt.normal objects.txt
) else (
	@ echo.	  设置 【开启箱子显示】
	ren %d2r_excel%\objects.txt objects.txt.normal
	ren %d2r_excel%\objects.txt.mdk objects.txt
)
goto GameStyleFunctionEnd

:set_automap_monster_sign
@ echo.	 设置 【开启怪物标记】
if exist %automap_monster_mdk_sign% (
	@ echo.	  ┗  输入【Q】切换为：【牛场+危险怪物√】　〖混沌避难所+牛+危×〗　〖所有怪物×〗　〖不显示×〗
	copy /Y %d2r_excel%\monstats2.txt.mdkchaos %d2r_excel%\monstats2.txt
	del %automap_monster_mdk_sign%
	@echo. "">%automap_monster_mdkchaos_sign%
) else if exist %automap_monster_mdkchaos_sign% (
	@ echo.	  ┗  输入【Q】切换为：〖牛场+危险怪物×〗　【混沌避难所+牛+危√】　〖所有怪物×〗　〖不显示×〗
	copy /Y %d2r_excel%\monstats2.txt.all %d2r_excel%\monstats2.txt
	del %automap_monster_mdkchaos_sign%
	@echo. "">%automap_monster_all_sign%
) else if exist %automap_monster_all_sign% (
	@ echo.	  ┗  输入【Q】切换为：〖牛场+危险怪物×〗　〖混沌避难所+牛+危×〗　【所有怪物√】　〖不显示×〗
	del %d2r_excel%\monstats2.txt
	del %automap_monster_all_sign%
) else (
	@ echo.	  ┗  输入【Q】切换为：〖牛场+危险怪物×〗　〖混沌避难所+牛+危×〗　〖所有怪物×〗　【不显示√】
	copy /Y %d2r_excel%\monstats2.txt.mdk %d2r_excel%\monstats2.txt
	@echo. "">%automap_monster_mdk_sign%
)
goto GameStyleFunctionEnd

:set_inven_top_icon
if exist %inven_top% (
	@ echo.	 设置 【关闭物品栏上方图标】
	ren %inven_top% inventory_icon_top_mdk
) else (
	@ echo.	 设置 【开启物品栏上方图标】
	ren %global_image_folder%\ui\mdk\inventory_icon_top_mdk inventory_icon_top
)
goto GameStyleFunctionEnd

:set_inven_bottom_icon
if exist %inven_bottom% (
	@ echo.	 设置 【关闭物品栏下方图标】
	ren %inven_bottom% inventory_icon_bottom_mdk
) else (
	@ echo.	 设置 【开启物品栏下方图标】
	ren %global_image_folder%\ui\mdk\inventory_icon_bottom_mdk inventory_icon_bottom
)
goto GameStyleFunctionEnd



:set_unify_gc_style
if exist %unify_gc_mahua_sign% (
	@ echo.	  ┣  输入【J1】切换，特大咒符统一为：	〖不统一图案×〗【麻花√】〖鬼脸×〗〖眼睛×〗〖眼睛（暗）×〗
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
	@ echo.	  ┣  输入【J1】切换，特大咒符统一为：	〖不统一图案×〗〖麻花×〗【鬼脸√】〖眼睛×〗〖眼睛（暗）×〗
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
	@ echo.	  ┣  输入【J1】切换，特大咒符统一为：	〖不统一图案×〗〖麻花×〗〖鬼脸×〗【眼睛√】〖眼睛（暗）×〗
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
	@ echo.	  ┣  输入【J1】切换，特大咒符统一为：	〖不统一图案×〗〖麻花×〗〖鬼脸×〗〖眼睛×〗【眼睛（暗）√】
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
	@ echo.	  ┣  输入【J1】切换，特大咒符统一为：	【不统一图案√】〖麻花×〗〖鬼脸×〗〖眼睛×〗〖眼睛（暗）×〗
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
	@ echo.	  ┣  输入【J2】切换，大咒符统一为：	〖不统一图案×〗【令牌√】〖牛角×〗〖方塔×〗
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
	@ echo.	  ┣  输入【J2】切换，大咒符统一为：	〖不统一图案×〗〖令牌×〗【牛角√】〖方塔×〗
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
	@ echo.	  ┣  输入【J2】切换，大咒符统一为：	〖不统一图案×〗〖令牌×〗〖牛角×〗【方塔√】
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
	@ echo.	  ┣  输入【J2】切换，大咒符统一为：	【不统一图案√】〖令牌×〗〖牛角×〗〖方塔×〗
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
	@ echo.	  ┗  输入【J3】切换，小咒符统一为：	〖不统一图案×〗【漩涡√】〖圆符×〗〖椭圆×〗〖椭圆（暗）×〗
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
	@ echo.	  ┗  输入【J3】切换，小咒符统一为：	〖不统一图案×〗〖漩涡×〗【圆符√】〖椭圆×〗〖椭圆（暗）×〗
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
	@ echo.	  ┗  输入【J3】切换，小咒符统一为：	〖不统一图案×〗〖漩涡×〗〖圆符×〗【椭圆√】〖椭圆（暗）×〗
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
	@ echo.	  ┗  输入【J3】切换，小咒符统一为：	〖不统一图案×〗〖漩涡×〗〖圆符×〗〖椭圆×〗【椭圆（暗）√】
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
	@ echo.	  ┗  输入【J3】切换，小咒符统一为：	【不统一图案√】〖漩涡×〗〖圆符×〗〖椭圆×〗〖椭圆（暗）×〗
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
		@ echo.	 【*邪恶地带扩展模式】	输入【TZ】 设置【原版状态√】→〖增加区域范围〗→〖精选邪恶区域〗
		COPY /Y %tz_mode_more% %tz_mode_file%
		@echo.more>%tz_mode_setup%
	) else if "%tz_mode%"=="more" (
		@ echo.	 【*邪恶地带扩展模式】	输入【TZ】 设置〖原版状态〗→【增加区域范围√】→〖精选邪恶区域〗
		COPY /Y %tz_mode_best% %tz_mode_file%
		@echo.best>%tz_mode_setup%
	) else if "%tz_mode%"=="best" (
		@ echo.	 【*邪恶地带扩展模式】	输入【TZ】 设置〖原版状态〗→〖增加区域范围〗→【精选邪恶区域√】
		DEL %tz_mode_file%
		@echo.normal>%tz_mode_setup%
	) else (
		@ echo.	 【*邪恶地带扩展模式】	输入【TZ】 设置【未知状态？？？】→〖增加区域范围〗
		COPY /Y %tz_mode_more% %tz_mode_file%
		@echo.more>%tz_mode_setup%
	)
Goto GameStyleFunctionEnd

:set_a3mon_effects
if exist %light_a3mon_effects% (
	@ echo.	 设置 【关闭鬼娃吹针魔法特效】
	ren %d2r_missiles%\blowdart.json blowdart_mdk.json
	ren %d2r_missiles%\spike_fiend_missle.json spike_fiend_missle_mdk.json
) else (
@ echo.	 设置 【开启鬼娃吹针魔法特效】
	ren %d2r_missiles%\blowdart_mdk.json blowdart.json
	ren %d2r_missiles%\spike_fiend_missle_mdk.json spike_fiend_missle.json
)
goto GameStyleFunctionEnd

:set_axe_effects
if exist %light_axe_effects% (
	@ echo.	 设置 【关闭飞斧、飞刀的魔法特效】
	ren %d2r_missiles%\balanced_axe_missile.json balanced_axe_missile_mdk.json
	ren %d2r_missiles%\balanced_knife_missile.json balanced_knife_missile_mdk.json
	ren %d2r_missiles%\missile_dagger.json missile_dagger_mdk.json
	ren %d2r_missiles%\missile_hand_axe.json missile_hand_axe_mdk.json
) else (
@ echo.	 设置 【开启飞斧、飞刀的魔法特效】
	ren %d2r_missiles%\balanced_axe_missile_mdk.json balanced_axe_missile.json
	ren %d2r_missiles%\balanced_knife_missile_mdk.json balanced_knife_missile.json
	ren %d2r_missiles%\missile_dagger_mdk.json missile_dagger.json
	ren %d2r_missiles%\missile_hand_axe_mdk.json missile_hand_axe.json
)
goto GameStyleFunctionEnd

:set_lightjavelin_effects
if exist %light_javelin_effects% (
	@ echo.	 设置 【关闭投掷标枪的魔法特效】
	ren %d2r_missiles%\javelin.json javelin_mdk.json
	ren %d2r_missiles%\glaive.json glaive_mdk.json
	ren %d2r_missiles%\maiden_javelin_missile.json maiden_javelin_missile_mdk.json
	ren %d2r_missiles%\short_spear_missile.json short_spear_missile_mdk.json
	ren %d2r_missiles%\throwing_spear_missile.json throwing_spear_missile_mdk.json
) else (
	@ echo.	 设置 【开启投掷标枪的魔法特效】
	ren %d2r_missiles%\javelin_mdk.json javelin.json
	ren %d2r_missiles%\glaive_mdk.json glaive.json
	ren %d2r_missiles%\maiden_javelin_missile_mdk.json maiden_javelin_missile.json
	ren %d2r_missiles%\short_spear_missile_mdk.json short_spear_missile.json
	ren %d2r_missiles%\throwing_spear_missile_mdk.json throwing_spear_missile.json 
)
goto GameStyleFunctionEnd


:set_diff_btn_tip
if exist %diff_btn_tip% (
@ echo.	 当前状态【选择游戏难度时显示「快捷键提示」 √】	输入【K】 设置 【关闭快捷键提示】
ren %d2r_layouts%\characterdifficultymodalhd.json characterdifficultymodalhd_mdk.json
) else (
@ echo.	 当前状态【选择游戏难度时显示「快捷键提示」 ×】	输入【K】 设置 【开启快捷键提示】
ren %d2r_layouts%\characterdifficultymodalhd_mdk.json characterdifficultymodalhd.json
)
goto GameStyleFunctionEnd

:set_offline_drop_up

	set /p tc_mode=<%TC_mode_on%
	if "%tc_mode%"=="normal"  (
		@ echo.	 【爆  率  增  加】	输入【Y】  切换 〖原版状态〗→【额外掉落√】→〖无杂物〗→〖爆率UP〗→〖爆率+无杂物〗
		COPY /Y %TC_nomisc% %TC_FILE%
		@echo.nomisc>%TC_mode_on%
		
	) else if "%tc_mode%"=="nomisc"  (
		@ echo.	 【爆  率  增  加】	输入【Y】  切换 〖原版状态〗→〖额外掉落〗→【无杂物√】→〖爆率UP〗→〖爆率+无杂物〗
		COPY /Y %TC_tcup% %TC_FILE%
		@echo.tcup>%TC_mode_on%
		
	) else if "%tc_mode%"=="tcup"  (
		@ echo.	 【爆  率  增  加】	输入【Y】  切换 〖原版状态〗→〖额外掉落〗→〖无杂物〗→【爆率UP√】→〖爆率+无杂物〗
		COPY /Y %TC_allup% %TC_FILE%
		@echo.allup>%TC_mode_on%
		
	) else if "%tc_mode%"=="allup"  (
		@ echo.	 【爆  率  增  加】	输入【Y】  切换 〖原版状态〗→〖额外掉落〗→〖无杂物〗→〖爆率UP〗→【爆率+无杂物√】
		COPY /Y %TC_default% %TC_FILE%
		@echo.default>%TC_mode_on%
		
	) else (
		@ echo.	 【爆  率  增  加】	输入【Y】  切换 【原版状态√】→〖额外掉落〗→〖无杂物〗→〖爆率UP〗→〖爆率+无杂物〗
		COPY /Y %TC_normal% %TC_FILE%
		@echo.normal>%TC_mode_on%
		
	)

goto GameStyleFunctionEnd

:set_offline_itemratio_up
if exist %itemratio_up%  (
@ echo.	 【染色率增加 √ 】	输入【H】 设置 【关闭染色率增加】
ren %d2r_excel%\itemratio.txt itemratio.txt.mdk
) else (
@ echo.	 【染色率增加 × 】	输入【H】 设置 【开启染色率增加】
ren %d2r_excel%\itemratio.txt.mdk itemratio.txt
)

goto GameStyleFunctionEnd


:set_map_tips
if not exist %map_tips% (
@ echo.	 当前状态【地图名后显示「地图等级、任务与免疫提示」】 设置 【仅显示地图等级】
ren %d2r_strings%\levels.json levels_tips.json
ren %d2r_strings%\levels_lv.json levels.json
) else if not exist %map_lv% (
@ echo.	 当前状态【地图名后显示「地图等级」】设置 【关闭地图信息提示】
ren %d2r_strings%\levels.json levels_lv.json
ren %d2r_strings%\levels_nolv.json levels.json
) else (
@ echo.	 当前状态【地图名后显示「不显示任何信息」】设置 【开启地图信息提示】
ren %d2r_strings%\levels.json levels_nolv.json
ren %d2r_strings%\levels_tips.json levels.json
)
goto GameStyleFunctionEnd


:set_hire_nickname
	if exist %hire_nickname% (
		@ echo.	 当前状态【迪卡凯恩有光环与光照提示 √】	输入【O】 设置 【关闭光照提示】
		del %hire_nickname%
	) else (
		@ echo.	 当前状态【迪卡凯恩有光环与光照提示 ×】	输入【O】 设置 【开启光照提示】
		copy /Y %hire_nickname%.on %hire_nickname%
	)
goto GameStyleFunctionEnd

:set_cain_light
if exist %cain_light% (
@ echo.	 当前状态【迪卡凯恩有光环与光照提示 √】	输入【O】 设置 【关闭光照提示】

ren %MDKMOD%\data\hd\character\npc npc_mdk

) else (
@ echo.	 当前状态【迪卡凯恩有光环与光照提示 ×】	输入【O】 设置 【开启光照提示】

ren %MDKMOD%\data\hd\character\npc_mdk npc

)
goto GameStyleFunctionEnd


:set_sor_es_aura
if exist %sor_es_aura% (
@ echo.	 设置 【恢复原版样式】
ren %sor_es_aura% energyshield_mdk.json
) else (
@ echo.	 设置 【增加特效提示】
ren %MDKMOD%\data\hd\overlays\sorceress\energyshield_mdk.json energyshield.json
)

goto GameStyleFunctionEnd

:set_torch_fire_effect

if exist %torch_fire% (
@ echo.	 设置 【恢复原版特效】
del %d2r_missiles%\diabwall.json
del %d2r_missiles%\diabwallmaker.json
) else (
@ echo.	 设置 【关闭火焰特效】
del %d2r_missiles%\diabwall.json
del %d2r_missiles%\diabwallmaker.json
copy /Y %d2r_missiles%\torchfire\diabwall.json %d2r_missiles%\diabwall.json
copy /Y %d2r_missiles%\torchfire\diabwallmaker.json %d2r_missiles%\diabwallmaker.json
)

goto GameStyleFunctionEnd

:input_sharebox_num
@ECHO.  
@ECHO.  设置选择的共享存档编号
set  sharebox_choose_num=""
set /p sharebox_choose_num= 输入需要调取的存共享箱子档编号（0-9）：
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
@echo	  无效输入，请输入共享箱子的存档编号（0 - 9）！
@echo	  即将返回功能选择界面。
@echo.
pause
ping -n 1 127.1>nul 
goto GameSelectShareBoxNumberMain

:get_sharebox_num
	REM 判断是否存在标记文件
	if not exist "%c_save_sign%" (
		copy /Y "%box_current%" "%d2r_save%\SharedStashSoftCoreV2_0.d2i"
		@ECHO.0>"%c_save_sign%"
	)
	REM 迭代1-9判断是否存在备用箱子存档
	for /L %%i in (1,1,9) do (
		if not exist "%d2r_save%\SharedStashSoftCoreV2_%%~i.d2i" (
			copy /Y %MDKMOD%\SharedStashSoftCoreV2_7box.d2i "%d2r_save%\SharedStashSoftCoreV2_%%~i.d2i"
		)
	)
	REM 读取标志文件第一行内容赋值
	for /f %%i in (%c_save_sign%) do (
		set c_save_sharebox_num=%%i
		Goto :eof
	)
Goto :eof

:func_change_sharebox

CLS
@echo.
@echo.▲切换共享箱子存档将会强制关闭D2R游戏，将会丢失未保存的游戏进度。▲
@echo.▲请务必手动存档后再进行切换▲
@echo.
@echo.说明：共享箱子存档在游戏进行中可以进行替换，但游戏只在启动程序时加载共享箱子存档。
@echo.　　　所以必须强制关闭游戏才能使得切换生效。
@echo.
@echo.即将关闭暗黑2重制版的游戏进程，若不想关闭游戏，请现在直接关闭设置器。
@echo.
pause

@echo.备份当前存档
copy /Y "%box_current%" "%box_current_backup%"
@echo.读取存档编号
set c_save_sharebox_num=NULL
call :get_sharebox_num
set choose_sharebox=%d2r_save%\SharedStashSoftCoreV2_%sharebox_choose_num%.d2i
set current_sharebox=%d2r_save%\SharedStashSoftCoreV2_%c_save_sharebox_num%.d2i
@echo.当前存档编号c_save_sharebox_num=%c_save_sharebox_num%
@echo.选择的存档编号sharebox_choose_num=%sharebox_choose_num%
@echo.当前存档box_current=%box_current%
@echo.存档备份地址box_current_backup=%box_current_backup%
@echo.选择的存档地址choose_sharebox=%choose_sharebox%
@echo.当前存档存入地址current_sharebox=%current_sharebox%
@echo.

REM echo on
@echo.关闭暗黑游戏
taskkill /f /t /im D2R.exe
@echo.当前存档归入编号位
REM @echo.copy /Y "%box_current%" "%box_current_backup%"
copy /Y "%box_current%" "%box_current_backup%"
@echo.当前存档归入编号位
REM @echo.copy /Y "%box_current%" "%current_sharebox%"
copy /Y "%box_current%" "%current_sharebox%"
@echo.复制选择的编号存档覆盖当前存档
REM @echo.copy /Y "%choose_sharebox%" "%box_current%"
copy /Y "%choose_sharebox%" "%box_current%"
@echo.生成编号文件
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
		@ echo.	 设置 【关闭全装备佣兵】
		Copy /Y %layouts_folder%\fullhire\hirelinginventorypanelhd_normal.json 		%layouts_folder%\hirelinginventorypanelhd.json
		del	%controller_layouts%\hirelinginventorypanelhd.json
		del	%controller_layouts%\hiremenupanelhd.json
		del %offline_fullhire_on%
	) else (
		@ echo.	 设置 【开启全装备佣兵】
		Copy /Y %layouts_folder%\fullhire\hirelinginventorypanelhd_full.json 		%layouts_folder%\hirelinginventorypanelhd.json
		Copy /Y %controller_layouts%\fullhire\hirelinginventorypanelhd_full.json 	%controller_layouts%\hirelinginventorypanelhd.json
		Copy /Y %controller_layouts%\fullhire\hiremenupanelhd_full.json 			%controller_layouts%\hiremenupanelhd.json
		@echo."x">%offline_fullhire_on%
	)
	@ echo.	 设置【itemtypes】
	CALL :check_and_get_itemtypes_file
goto GameStyleFunctionEnd

:set_all_sockets
	if not exist %all_sockets%  (
		@ echo.	 设置 【恢复原版不能打孔状态】
		@ echo.	 设置 【armor】
		ren %d2r_excel%\armor.txt armor_allsock.txt
		ren %d2r_excel%\armor_nosock.txt armor.txt

	) else (
		@ echo.	  设置 【增加所有装备打孔】		
		@ echo.	 设置 【armor】
		ren %d2r_excel%\armor.txt armor_nosock.txt
		ren %d2r_excel%\armor_allsock.txt armor.txt
	)
	@ echo.	 设置【需要打孔的itemtype】
	CALL :check_and_get_itemtypes_file

Goto GameStyleFunctionEnd

:set_offline_bigbox

	set /p bigbox_mode=<%offline_bigbox%
	if "%bigbox_mode%"=="all"  (
		@ echo.	 【大箱子+佣兵全武装】	输入【G】  切换 〖原版状态〗→【大箱子+盒+背包√】→〖大箱子+盒〗→〖仅大箱子〗
		@ echo.	 设置 【开启 大箱子+盒】
		
		@ echo.  更换txt文件。
		Copy /Y %d2r_excel%\bigbox\inventory_bigbox_stashbox.txt %d2r_excel%\inventory.txt
		
		@ echo.  更换bank json文件。
		Copy /Y %layouts_folder%\bigbox\bankexpansionlayouthd_bigbox.json					%layouts_folder%\bankexpansionlayouthd.json
		Copy /Y %layouts_folder%\bigbox\bankoriginallayouthd_bigbox.json					%layouts_folder%\bankoriginallayouthd.json
		Copy /Y %controller_layouts%\bigbox\playerinventoryexpansionlayouthd_bigbox.json	%controller_layouts%\playerinventoryexpansionlayouthd.json
		
		@ echo.  更换box json文件。
		Copy /Y %layouts_folder%\bigbox\horadriccubelayouthd_bigbox.json 		%layouts_folder%\horadriccubelayouthd.json
		Copy /Y %controller_layouts%\bigbox\horadriccubelayouthd_bigbox.json	%controller_layouts%\horadriccubelayouthd.json
		
		@ echo.  更换inventory json文件。
		Copy /Y %layouts_folder%\bigbox\playerinventoryexpansionlayouthd_normal.json 	%layouts_folder%\playerinventoryexpansionlayouthd.json
		Copy /Y %layouts_folder%\bigbox\playerinventoryoriginallayouthd_normal.json 		%layouts_folder%\playerinventoryoriginallayouthd.json
		del %controller_layouts%\bankexpansionlayouthd.json
		
		@ echo.  更换新标志文件
		@echo.stash+box>%offline_bigbox%
	) else if "%bigbox_mode%"=="stash+box"  (
		@ echo.	 【大箱子+佣兵全武装】	输入【G】  切换 〖原版状态〗→〖大箱子+盒+背包〗→【大箱子+盒√】→〖仅大箱子〗
		@ echo.	 设置 【开启 大箱子】
		
		@ echo.  更换txt文件。
		Copy /Y %d2r_excel%\bigbox\inventory_bigbox_stash.txt %d2r_excel%\inventory.txt
		
		@ echo.  更换bank json文件。
		Copy /Y %layouts_folder%\bigbox\bankexpansionlayouthd_bigbox.json					%layouts_folder%\bankexpansionlayouthd.json
		Copy /Y %layouts_folder%\bigbox\bankoriginallayouthd_bigbox.json					%layouts_folder%\bankoriginallayouthd.json
		Copy /Y %controller_layouts%\bigbox\playerinventoryexpansionlayouthd_bigbox.json	%controller_layouts%\playerinventoryexpansionlayouthd.json
		
		@ echo.  更换box json文件。
		Copy /Y %layouts_folder%\bigbox\horadriccubelayouthd_normal.json 		%layouts_folder%\horadriccubelayouthd.json
		del %controller_layouts%\horadriccubelayouthd.json
		
		@ echo.  更换inventory json文件。
		Copy /Y %layouts_folder%\bigbox\playerinventoryexpansionlayouthd_normal.json 	%layouts_folder%\playerinventoryexpansionlayouthd.json
		Copy /Y %layouts_folder%\bigbox\playerinventoryoriginallayouthd_normal.json 		%layouts_folder%\playerinventoryoriginallayouthd.json
		del %controller_layouts%\bankexpansionlayouthd.json
		
		@ echo.  更换新标志文件
		@echo.stash>%offline_bigbox%
	) else if "%bigbox_mode%"=="stash"  (
		@ echo.	 【大箱子+佣兵全武装】	输入【G】  切换 〖原版状态〗→〖大箱子+盒+背包〗→〖大箱子+盒〗→【仅大箱子√】
		@ echo.	 设置 【关闭 大箱子】
		@ echo.  更换txt文件。
		Copy /Y %d2r_excel%\bigbox\inventory_normal.txt %d2r_excel%\inventory.txt
		
		@ echo.  更换bank json文件。
		Copy /Y %layouts_folder%\bigbox\bankexpansionlayouthd_normal.json					%layouts_folder%\bankexpansionlayouthd.json
		Copy /Y %layouts_folder%\bigbox\bankoriginallayouthd_normal.json					%layouts_folder%\bankoriginallayouthd.json
		Copy /Y %controller_layouts%\bigbox\playerinventoryexpansionlayouthd_normal.json	%controller_layouts%\playerinventoryexpansionlayouthd.json
		
		@ echo.  更换box json文件。
		Copy /Y %layouts_folder%\bigbox\horadriccubelayouthd_normal.json 		%layouts_folder%\horadriccubelayouthd.json
		del %controller_layouts%\horadriccubelayouthd.json
		
		@ echo.  更换inventory json文件。
		Copy /Y %layouts_folder%\bigbox\playerinventoryexpansionlayouthd_normal.json 	%layouts_folder%\playerinventoryexpansionlayouthd.json
		Copy /Y %layouts_folder%\bigbox\playerinventoryoriginallayouthd_normal.json 		%layouts_folder%\playerinventoryoriginallayouthd.json
		del %controller_layouts%\bankexpansionlayouthd.json
		
		@ echo.  更换新标志文件
		@echo.off>%offline_bigbox%
	) else (
		@ echo.	 【大箱子+佣兵全武装】	输入【G】  切换 【原版状态√】→〖大箱子+盒+背包〗→〖大箱子+盒〗→〖仅大箱子〗
		@ echo.	 设置 【开启 大箱子+盒+背包】
		@ echo.  备份当前文件。
		Copy /Y %layouts_folder%\horadriccubelayouthd.json 				%layouts_folder%\bigbox\horadriccubelayouthd_exchange.json
		Copy /Y %layouts_folder%\playerinventoryexpansionlayouthd.json 	%layouts_folder%\bigbox\playerinventoryexpansionlayouthd_exchange.json
		Copy /Y %layouts_folder%\playerinventoryoriginallayouthd.json 	%layouts_folder%\bigbox\playerinventoryoriginallayouthd_exchange.json
		
		@ echo.  更换txt文件。
		Copy /Y %d2r_excel%\bigbox\inventory_bigbox_all.txt %d2r_excel%\inventory.txt
		
		@ echo.  更换bank json文件。
		Copy /Y %layouts_folder%\bigbox\bankexpansionlayouthd_bigbox.json					%layouts_folder%\bankexpansionlayouthd.json
		Copy /Y %layouts_folder%\bigbox\bankoriginallayouthd_bigbox.json					%layouts_folder%\bankoriginallayouthd.json
		Copy /Y %controller_layouts%\bigbox\playerinventoryexpansionlayouthd_bigbox.json	%controller_layouts%\playerinventoryexpansionlayouthd.json
		
		@ echo.  更换box json文件。
		Copy /Y %layouts_folder%\bigbox\horadriccubelayouthd_bigbox.json 		%layouts_folder%\horadriccubelayouthd.json
		Copy /Y %controller_layouts%\bigbox\horadriccubelayouthd_bigbox.json	%controller_layouts%\horadriccubelayouthd.json
		
		@ echo.  更换inventory json文件。
		Copy /Y %layouts_folder%\bigbox\playerinventoryexpansionlayouthd_bigbox.json 	%layouts_folder%\playerinventoryexpansionlayouthd.json
		Copy /Y %layouts_folder%\bigbox\playerinventoryoriginallayouthd_bigbox.json 		%layouts_folder%\playerinventoryoriginallayouthd.json
		Copy /Y %controller_layouts%\bigbox\bankexpansionlayouthd_bigbox.json			%controller_layouts%\bankexpansionlayouthd.json
		
		@ echo.  更换新标志文件
		@echo.all>%offline_bigbox%
	)
goto GameStyleFunctionEnd

:set_exp_mode
	set /p exp_mode=<%exp_mode_on%
	if "%exp_mode%"=="20"  (
		@ echo.	 【经 验 强 化 模 式】	输入【E】  切换 〖原版状态〗→【20倍经验√】→〖一刀99级模式〗
		COPY /Y %exp_mode_99% %exp_file%
		@echo.99>%exp_mode_on%
		
	) else if "%exp_mode%"=="99"  (
		@ echo.	 【经 验 强 化 模 式】	输入【E】  切换 〖原版状态〗→〖20倍经验〗→【一刀99级模式√】
		COPY /Y %exp_mode_default% %exp_file%
		@echo.default>%exp_mode_on%
		
	) else (
		@ echo.	 【经 验 强 化 模 式】	输入【E】  切换 【原版状态√】→〖20倍经验〗→〖一刀99级模式〗
		COPY /Y %exp_mode_20% %exp_file%
		@echo.20>%exp_mode_on%
		
	)
goto GameStyleFunctionEnd


:set_offline_exskill

set /p skill_mode=<%skills_mode_on%
	if "%skill_mode%"=="normal"  (
		@ echo.	 【技  能  增  强】	输入【T】  切换 〖原版技能〗→【无限箭矢标枪+刺客3分钟聚气√】→〖单机技能加强〗
		COPY /Y %skills_plus% %skills_file%
		COPY /Y %missiles_plus% %missiles_file%
		@echo.plus>%skills_mode_on%
		
	) else if "%skill_mode%"=="plus"  (
		@ echo.	 【技  能  增  强】	输入【T】  切换 〖原版技能〗→〖无限箭矢标枪+刺客3分钟聚气〗→【单机技能加强√】
		COPY /Y %skills_default% %skills_file%
		COPY /Y %missiles_default% %missiles_file%
		@echo.default>%skills_mode_on%
		
	) else (
		@ echo.	 【技  能  增  强】	输入【T】  切换 【原版技能√】→〖无限箭矢标枪+刺客3分钟聚气〗→〖单机技能加强〗
		COPY /Y %skills_normal% %skills_file%
		COPY /Y %missiles_normal% %missiles_file%
		@echo.normal>%skills_mode_on%
		
	)

goto GameStyleFunctionEnd


:set_ass_charge_up

if not exist %ass_charge_default% (
	@ echo.	 设置 【身边显示大聚气图标】
	move %MDKMOD%\data\hd\overlays\common\charge_ass_large\progressive*.json %MDKMOD%\data\hd\overlays\common\

	del %MDKMOD%\data\hd\vfx\textures\graphic\progressive*.*
	copy /Y %MDKMOD%\data\hd\vfx\textures\graphic\ass_charge_large\progressive*.* %MDKMOD%\data\hd\vfx\textures\graphic\
	xcopy /Y /E %MDKMOD%\data\hd\vfx\particles\overlays\common\ass_charge_large\progressive* %MDKMOD%\data\hd\vfx\particles\overlays\common\

) else if not exist %ass_charge_large% (
	@ echo.	 设置 【UI显示大聚气图标】
	move %MDKMOD%\data\hd\overlays\common\progressive*.json %MDKMOD%\data\hd\overlays\common\charge_ass_large\
	move %MDKMOD%\data\hd\overlays\common\charge_ass_large_down\progressive*.json %MDKMOD%\data\hd\overlays\common\

	del %MDKMOD%\data\hd\vfx\textures\graphic\progressive*.*
	copy /Y %MDKMOD%\data\hd\vfx\textures\graphic\ass_charge_large\progressive*.* %MDKMOD%\data\hd\vfx\textures\graphic\
	xcopy /Y /E %MDKMOD%\data\hd\vfx\particles\overlays\common\ass_charge_large\progressive* %MDKMOD%\data\hd\vfx\particles\overlays\common\

) else if not exist %ass_charge_large_down% (
	@ echo.	 设置 【脚下显示小聚气图标】
	move %MDKMOD%\data\hd\overlays\common\progressive*.json %MDKMOD%\data\hd\overlays\common\charge_ass_large_down\
	move %MDKMOD%\data\hd\overlays\common\charge_ass_small\progressive*.json %MDKMOD%\data\hd\overlays\common\

	del %MDKMOD%\data\hd\vfx\textures\graphic\progressive*.*
	copy /Y %MDKMOD%\data\hd\vfx\textures\graphic\ass_charge_small\progressive*.* %MDKMOD%\data\hd\vfx\textures\graphic\
	xcopy /Y /E %MDKMOD%\data\hd\vfx\particles\overlays\common\ass_charge_small\progressive* %MDKMOD%\data\hd\vfx\particles\overlays\common\

) else (
	@ echo.	 设置 【不显示聚气等级图标】
	move %MDKMOD%\data\hd\overlays\common\progressive*.json %MDKMOD%\data\hd\overlays\common\charge_ass_small\
)


goto GameStyleFunctionEnd

:set_ass_charge_missiles
if exist %ass_charge_missiles% (
@ echo.	 设置 【特效2】
copy /Y %MDKMOD%\data\hd\missiles\assassin_charge\missiles_2.json %MDKMOD%\data\hd\missiles
del %MDKMOD%\data\hd\missiles\assassin_charge\*.chargesign
@echo. "x">%ass_charge_missiles_2%
) else if exist %ass_charge_missiles_2% (
@ echo.	 设置 【恢复原版样式】
del %MDKMOD%\data\hd\missiles\missiles.json
del %MDKMOD%\data\hd\missiles\assassin_charge\*.chargesign
) else (
@ echo.	 设置 【特效1】
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
@ echo.	 设置 【原版风格】
ren %mini_map_unit% units_mdk.sprite
ren %mini_map_unit_low% units_mdk.lowend.sprite
) else (
@ echo.	 设置 【MDK实心风格】
ren %mini_map_unit_mdk% units.sprite
ren %mini_map_unit_low_mdk% units.lowend.sprite
)
goto GameStyleFunctionEnd


:set_ui_zoom_size
	 
	if not exist %ui_mini% (
		@ echo.	 设置 【65%%尺寸UI界面】
		ren %ui_file% hudpanelhd_0.01.json
		ren %ui_filec% hudpanelhd_0.01.json
		ren %ui_6% hudpanelCurrenthd.json
		ren %ui_6c% hudpanelCurrenthd.json
	) else if not exist %ui_6% (
		@ echo.	 设置 【75%%尺寸UI界面】
		ren %ui_file% hudpanelhd_0.65.json
		ren %ui_filec% hudpanelhd_0.65.json
		ren %ui_7% hudpanelCurrenthd.json
		ren %ui_7c% hudpanelCurrenthd.json
	) else if not exist %ui_7% (
		@ echo.	 设置 【85%%尺寸UI界面】	正在处理中...请稍等...
		ren %ui_file% hudpanelhd_0.75.json
		ren %ui_filec% hudpanelhd_0.75.json
		ren %ui_8% hudpanelCurrenthd.json
		ren %ui_8c% hudpanelCurrenthd.json
	) else if not exist %ui_8% (
		@ echo.	 设置 【100%%尺寸UI界面】   正在处理中...请稍等...
		ren %ui_file% hudpanelhd_0.85.json
		ren %ui_filec% hudpanelhd_0.85.json
		ren %ui_n% hudpanelCurrenthd.json
		ren %ui_nc% hudpanelCurrenthd.json
	) else (
		@ echo.	 设置 【迷你UI界面】   正在处理中...请稍等...
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
	ECHO  【恢复默认字体大小】正在处理中...请稍等...
	ren %d2r_layouts%\_profileasian.json _profileasian_mdk.json
	) else (
	ECHO  【增加字体尺寸】正在处理中...请稍等...
	ren %d2r_layouts%\_profileasian_mdk.json _profileasian.json
	)
goto GameStyleFunctionEnd

:set_poison_nova_effects
if exist %poison_nova_effects% (
	@ echo.	 设置 【关闭魔法特效】
	ren %d2r_missiles%\poison_nova.json poison_nova_mdk.json
) else (
	@ echo.	 设置 【开启魔法特效】
	ren %d2r_missiles%\poison_nova_mdk.json poison_nova.json
)
goto GameStyleFunctionEnd

:set_sp_effects
if exist %sp_effects% (
	@ echo.	 设置 【关闭魔法特效】
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
	@ echo.	 设置 【开启魔法特效】
	copy /Y %d2r_missiles%\effects\*.json %d2r_missiles%
)
goto GameStyleFunctionEnd

:set_magicarrow_effects
if exist %magicarrow_effects% (
	@ echo.	 设置 【关闭魔法箭特效】
	del %d2r_missiles%\arrow.json
	del %d2r_missiles%\x_bow_bolt.json
) else (
	@ echo.	 设置 【开启魔法箭特效】
	copy /Y %d2r_missiles%\arrow_effects\arrow.json %d2r_missiles%
	copy /Y %d2r_missiles%\arrow_effects\x_bow_bolt.json %d2r_missiles%
)
goto GameStyleFunctionEnd

:set_nova_effects
if exist %nova_effects_no_nova_storm% (
	@ echo.	 设置 【原版特效】
	del %d2r_missiles%\electric_nova.json
	del %d2r_missiles%\lightningbolt_big.json
	del %nova_effects_no_storm%
	del %nova_effects_no_nova_storm%
) else if exist %nova_effects_no_storm% (
	@ echo.	 设置 【关闭storm+nova特效】
	copy /Y %d2r_missiles%\nova_effects\electric_nova.json %d2r_missiles%
	copy /Y %d2r_missiles%\nova_effects\lightningbolt_big.json %d2r_missiles%
	del %nova_effects_no_storm%
	@echo."x">%nova_effects_no_nova_storm%
) else (
	@ echo.	 设置 【关闭storm特效】
	copy /Y %d2r_missiles%\nova_effects\lightningbolt_big.json %d2r_missiles%
	del %nova_effects_no_nova_storm%
	@echo."x">%nova_effects_no_storm%
)
goto GameStyleFunctionEnd


:set_BO_effects

	if not exist %BO_time% (
	@ echo.	 设置 【显示聚气环的特效】
	move /Y %MDKMOD%\data\hd\overlays\common\battlecommand.json %MDKMOD%\data\hd\overlays\common\shield_bo
	move /Y %MDKMOD%\data\hd\overlays\common\battleorders.json %MDKMOD%\data\hd\overlays\common\shield_bo
	move /Y %MDKMOD%\data\hd\overlays\common\shout.json %MDKMOD%\data\hd\overlays\common\shield_bo
	
	move /Y %MDKMOD%\data\hd\overlays\common\charge_bo\battlecommand.json %MDKMOD%\data\hd\overlays\common
	move /Y %MDKMOD%\data\hd\overlays\common\charge_bo\battleorders.json %MDKMOD%\data\hd\overlays\common
	move /Y %MDKMOD%\data\hd\overlays\common\charge_bo\shout.json %MDKMOD%\data\hd\overlays\common
	) else if not exist %BO_time_charge% (
	@ echo.	 设置 【关闭BC/BO的BUFF特效】
	move /Y %MDKMOD%\data\hd\overlays\common\battlecommand.json %MDKMOD%\data\hd\overlays\common\charge_bo
	move /Y %MDKMOD%\data\hd\overlays\common\battleorders.json %MDKMOD%\data\hd\overlays\common\charge_bo
	move /Y %MDKMOD%\data\hd\overlays\common\shout.json %MDKMOD%\data\hd\overlays\common\charge_bo
	) else (
	@ echo.	 设置 【显示巴尔环的特效】
	move /Y %MDKMOD%\data\hd\overlays\common\shield_bo\battlecommand.json %MDKMOD%\data\hd\overlays\common
	move /Y %MDKMOD%\data\hd\overlays\common\shield_bo\battleorders.json %MDKMOD%\data\hd\overlays\common
	move /Y %MDKMOD%\data\hd\overlays\common\shield_bo\shout.json %MDKMOD%\data\hd\overlays\common
	)
goto GameStyleFunctionEnd

:func_convic_sign
	if not exist %convic_off% (
	echo. 关闭感叹号提示
	ren %convic_on%  convictionback_mdk.json
	) else (
	echo. 开启感叹号提示
	ren %convic_off%  convictionback.json
	)
Goto GameStyleFunctionEnd

:set_show_helmet
if not exist %no_all_cap% (
	if not exist %no_cap% (
		@ echo.	 设置 【不显示布帽骷髅帽】
		move /Y %d2r_items%\armor\circlet\*.json %d2r_items%\armor\circlet\mdk
		move /Y %d2r_items%\armor\helmet\*.json %d2r_items%\armor\helmet\mdk
		move /Y %d2r_items%\armor\pelt\*.json %d2r_items%\armor\pelt\mdk
		
		move /Y %d2r_items%\armor\helmet\mdk\cap_hat.json %d2r_items%\armor\helmet
		move /Y %d2r_items%\armor\helmet\mdk\skull_cap.json %d2r_items%\armor\helmet
	) else (
		@ echo.	 设置 【不显示头盔】
		move /Y %d2r_items%\armor\circlet\mdk\*.json %d2r_items%\armor\circlet
		move /Y %d2r_items%\armor\helmet\mdk\*.json %d2r_items%\armor\helmet
		move /Y %d2r_items%\armor\pelt\mdk\*.json %d2r_items%\armor\pelt
	)
) else (
	@ echo.	 设置 【显示头盔】
	move /Y %d2r_items%\armor\circlet\*.json %d2r_items%\armor\circlet\mdk
	move /Y %d2r_items%\armor\helmet\*.json %d2r_items%\armor\helmet\mdk
	move /Y %d2r_items%\armor\pelt\*.json %d2r_items%\armor\pelt\mdk
)
Goto GameStyleFunctionEnd

:set_rune_style
@ echo.
	if exist %rune_style%  (
	ECHO  【恢复原版符文样式】正在处理中...请稍等..
	move /Y %MDKMOD%\data\hd\global\ui\items\misc\rune %MDKMOD%\data\hd\global\ui\items\misc\rune_new
	) else (
	ECHO  【改为带编号符文样式】 正在处理中...请稍等...
	move /Y %MDKMOD%\data\hd\global\ui\items\misc\rune_new %MDKMOD%\data\hd\global\ui\items\misc\rune
	)
goto GameStyleFunctionEnd

:set_hp_bar_style
	@ echo.  
	if not exist %hp_bar% (
	@ echo.   【设置为简洁风格怪物血条】  正在处理中...请稍等...
	ren %d2r_layouts%\hudmonsterhealthhd.json hudmonsterhealthhd_mdk2nd.json
	ren %d2r_layouts%\hudmonsterhealthhd_mdk1st.json hudmonsterhealthhd.json
	) else if not exist %hp_bar2% (
	@ echo.   【设置为默认血条】  正在处理中...请稍等...
	ren %d2r_layouts%\hudmonsterhealthhd.json hudmonsterhealthhd_mdk1st.json
	) else (
	@ echo.   【设置为哥特风格血条】  正在处理中...请稍等...
	ren %d2r_layouts%\hudmonsterhealthhd_mdk2nd.json hudmonsterhealthhd.json
	)
goto GameStyleFunctionEnd

:set_color_modifiers
	if exist %color_word% (
		@ echo.	 设置 【重点词条彩色】  正在处理中...请稍等...
		del %d2r_strings%\item-modifiers.json
		copy /Y %d2r_strings%\json_db\item-modifiers_lesscolor.json %d2r_strings%\item-modifiers.json
		del %d2r_strings%\json_db\*.mcsign
		@ECHO.  "x">%less_color_word%
	) else if exist %less_color_word% (
		@ echo.	 设置 【原版统一色词条】  正在处理中...请稍等...
		del %d2r_strings%\item-modifiers.json
		copy /Y %d2r_strings%\json_db\item-modifiers_normal.json %d2r_strings%\item-modifiers.json
		del %d2r_strings%\json_db\*.mcsign
	) else (
		@ echo.	 设置 【彩色属性词条】  正在处理中...请稍等...
		del %d2r_strings%\item-modifiers.json
		copy /Y %d2r_strings%\json_db\item-modifiers_color.json %d2r_strings%\item-modifiers.json
		del %d2r_strings%\json_db\*.mcsign
		@ECHO.  "x">%color_word%
	)
goto GameStyleFunctionEnd

:set_skill_icons_style
	@ echo.  
	if exist %color_spell% (
	@ echo.   【彩色技能图标】  正在处理中...请稍等...
	ren %MDKMOD%\data\hd\global\ui\color_spells spells
	) else (
	@ echo.   【原版风格技能图标】 正在处理中...请稍等...
	ren %MDKMOD%\data\hd\global\ui\spells color_spells
	)
goto GameStyleFunctionEnd

:set_potion_style
	@ echo.  
	if exist %potion_style% (
	@ echo.	 【恢复原版超大红蓝药瓶】  正在处理中...请稍等...
	move /Y %MDKMOD%\data\hd\global\ui\items\misc\potion %MDKMOD%\data\hd\global\ui\items\misc\potion_mdk
	) else (
	@ echo.	 【设置成大圆瓶的超大红蓝瓶】 正在处理中...请稍等...
	move /Y %MDKMOD%\data\hd\global\ui\items\misc\potion_mdk %MDKMOD%\data\hd\global\ui\items\misc\potion
	)
goto GameStyleFunctionEnd

:set_potion_sound
	if exist %potion_vo% (
	@ echo.	 设置 【恢复药水音效】  	正在处理中...请稍等...
	ren %potion_vo% item_potion_hd_mdk.flac
	) else (
	@ echo.	 设置 【屏蔽药水音效】  	正在处理中...请稍等...
	ren %d2r_sfx%\item\item_potion_hd_mdk.flac item_potion_hd.flac
	)
goto GameStyleFunctionEnd

:set_mercenary_portrait_location
	if exist %hireables_down% (
	@ echo.	 设置 【显示在屏幕上方】
	ren %d2r_layouts%\hireablespanelhd.json hireablespanelhd_down.json
	ren %d2r_layouts%\hireablespanelhd_up.json hireablespanelhd.json
	) else (
	@ echo.	 设置 【显示在屏幕下方】
	ren %d2r_layouts%\hireablespanelhd.json hireablespanelhd_up.json
	ren %d2r_layouts%\hireablespanelhd_down.json hireablespanelhd.json
	)
Goto GameStyleFunctionEnd

:set_show_monster_resistance
	if exist %monster_res% (
	@ echo.	 设置 【关闭抗性显示】
		del %d2r_excel%\monstats.txt
		del %d2r_excel%\superuniques.txt
	) else (
	@ echo.	 设置 【开启抗性显示】
		copy /Y %d2r_excel%\monstats.txt.mdk %d2r_excel%\monstats.txt
		copy /Y %d2r_excel%\superuniques.txt.mdk %d2r_excel%\superuniques.txt
	)
goto GameStyleFunctionEnd

:set_offline_monster_magnification
	if not exist %monster_2x% (
	@ echo.	 设置 【3倍】
	ren %monster_level% levels_2.txt
	ren %monster_3x% levels.txt
	) else if not exist %monster_3x% (
	@ echo.	 设置 【10倍】
	ren %monster_level% levels_3.txt
	ren %monster_10x% levels.txt
	) else if not exist %monster_10x% (
	@ echo.	 设置 【20倍】
	ren %monster_level% levels_10.txt
	ren %monster_20x% levels.txt
	) else if not exist %monster_20x% (
	@ echo.	 设置 【关闭怪物加倍】
	ren %monster_level% levels_20.txt
	ren %monster_1x% levels.txt
	) else (
	@ echo.	 设置 【1.5倍】
	ren %monster_level% levels_1.txt
	ren %monster_2x% levels.txt
	)
Goto GameStyleFunctionEnd

:set_rw_nolimit
	if not exist %rw_nolimit%  (
		@ echo.	 设置 【符文之语恢复默认】
		ren %d2r_excel%\runes.txt runes_nolimit.txt
		ren %d2r_excel%\runes_normal.txt runes.txt
	) else (
		@ echo.	 设置 【符文之语无限制】
		ren %d2r_excel%\runes.txt runes_normal.txt
		ren %d2r_excel%\runes_nolimit.txt runes.txt
	)
Goto GameStyleFunctionEnd


:func_rune_shop

	set /p rune_shop_mode=<%rune_shop_sign%
	@ECHO.%rune_shop_sign%=%rune_shop_mode%
	if "%rune_shop_mode%"=="rev"  (
		@ echo.	 【宝 石 符 文 商 店】	输入【Q】  切换 【原版商店+大紫瓶√】→〖+符文宝石〗→〖+任务道具〗
		@ echo.rune>%rune_shop_sign%
	) else if "%rune_shop_mode%"=="rune"  (
		@ echo.	 【宝 石 符 文 商 店】	输入【Q】  切换 【原版商店+大紫瓶+符文宝石√】→〖+任务道具〗
		@ echo.quest>%rune_shop_sign%
	) else if "%rune_shop_mode%"=="quest"  (
		@ echo.	 【宝 石 符 文 商 店】	输入【Q】  切换 【原版商店+大紫瓶+符文宝石+任务道具√】→〖恢复原版〗
		@ echo.default>%rune_shop_sign%
	) else (
		@ echo.	 【宝 石 符 文 商 店】	输入【Q】  切换 【原版商店√】→〖+大紫瓶〗→〖+符文宝石〗→〖+任务道具〗
		@ echo.rev>%rune_shop_sign%
	)

	CALL :check_and_get_misc_file
	CALL :check_and_get_itemtypes_file
	
Goto GameStyleFunctionEnd

:GameStyleFunctionEnd
	ping -n 1 127.1>nul
	@ echo.
	@ECHO 操作完成！即将返回GameStyle_Main...
	@ echo.
	if exist %DEBUG_FILE% ( pause )
	if "%CurrentMenu%"=="SetupMain" goto SetupMain
	if "%CurrentMenu%"=="LightSetupMain" goto LightSetupMain
	if "%CurrentMenu%"=="RuleSetup_Main" goto RuleSetup_Main
	if "%CurrentMenu%"=="RuneSound_Main" goto RuneSound_Main
	if "%CurrentMenu%"=="GameStyle_Main" goto GameStyle_Main
	if "%CurrentMenu%"=="OfflineGame_Main" goto OfflineGame_Main
goto GameStyle_Main

REM===游戏风格设置 END===

:FunctionEnd
	ping -n 1 127.1>nul
	@ echo.
	@ECHO 操作完成！即将返回...
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

REM ===程序内CALL函数部分===
REM CALL :check_and_get_itemtypes_file
:check_and_get_itemtypes_file
	@ echo.	 【check_and_get_itemtypes_file√】
	if exist %all_sockets%  (
		@ echo.	 【※打 孔 装 备 拓 展】输入【H4】 切换 〖原版状态〗→【增加所有装备打孔√】
		if exist %offline_fullhire_on% (
			copy /Y %d2r_excel%\offline\itemtypes_fullhire_normal.txt %ItemTypes_FILE%
		) else (
			copy /Y %d2r_excel%\offline\itemtypes_normal.txt %ItemTypes_FILE%
		)
	) else (
		@ echo.	 【※打 孔 装 备 拓 展】输入【H4】 切换 【原版状态√】→〖增加所有装备打孔〗
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
		@ echo.	 【原版商店+大紫瓶√】%rune_shop_check%
		copy /Y %rune_normal_sock% %Misc_FILE%
	) else if "%rune_shop_check%"=="rune"  (
		@ echo.	 【原版商店+大紫瓶+符文宝石√】%rune_shop_check%
		copy /Y %rune_shop_sock% %Misc_FILE%
	) else if "%rune_shop_check%"=="quest"  (
		@ echo.	 【原版商店+大紫瓶+符文宝石+任务道具√】%rune_shop_check%
		copy /Y %misc_quest_shop_sock% %Misc_FILE%
	) else (
		@ echo.	 【原版商店√】%rune_shop_check%
		copy /Y %rune_default_sock% %Misc_FILE%
	)

goto :eof

:READINI
	set READ_FILE=%1
	if exist !READ_FILE! (
		set /p READ_VALUE=<!READ_FILE!
	) else (
		call :color 4F "缺失INI配置文件"
		set READ_VALUE=CREATE
		call :GETPATH !READ_FILE!
		md !READ_FILE_PATH!
		@echo.!READ_VALUE!>!READ_FILE!
	)
goto :eof

:GETPATH
	rem 获取到文件路径
	set "READ_FILE_PATH=%~dp1"
	echo READ_FILE_PATH=!READ_FILE_PATH!
goto :eof

::Color 红色Red 黑色Black 绿色Green 黄色Yellow 蓝色Blue 洋红Magenta 青色Cyan 白色White
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
:: 0 黑、1 蓝、2 绿、3 天青、4 红、5 紫、6、棕黄、7 亮灰、8 暗灰、9 青
:: A 亮绿、B 亮青、C 浅红、D 亮紫、E 浅黄、F 白色
:: 颜色代码执行：call :color E2 "text"
:: 72代表背景色+文字色，7为背景色 2为文字色，输出后不会换行，需要用echo.来进行换行
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