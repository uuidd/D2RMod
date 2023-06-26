chcp 936
@set ver=Demo.2023.06.25
@ECHO OFF&PUSHD %~DP0 &TITLE D2R Demo MOD 自定义设置器 Ver.%Ver%
mode con cols=120 lines=62
color 71
setlocal enabledelayedexpansion

REM ===主程序界面使用set===
REM 设置常用文件夹
set d2r_layouts=.\mods\Demo\Demo.mpq\data\global\ui\layouts
set d2r_strings=.\mods\Demo\Demo.mpq\data\local\lng\strings
set d2r_items=.\mods\Demo\Demo.mpq\data\hd\items
set d2r_items_pic=.\mods\Demo\Demo.mpq\data\hd\global\ui\items
set d2r_ui=.\mods\Demo\Demo.mpq\data\hd\ui
set d2r_excel=.\mods\Demo\Demo.mpq\data\global\excel
set d2r_sfx=.\mods\Demo\Demo.mpq\data\hd\global\sfx
set d2r_missiles=.\mods\Demo\Demo.mpq\data\hd\missiles
set objects_folder=.\mods\Demo\Demo.mpq\data\hd\objects
set global_image_folder=.\mods\Demo\Demo.mpq\data\hd\global

REM 设置常用文件
set item-names=%d2r_strings%\item-names.json
set item-runes=%d2r_strings%\item-runes.json
set item-gems=%d2r_strings%\item-gems.json
set item-nameaffixes=%d2r_strings%\item-nameaffixes.json

set del_travincal_hall=.\mods\Demo\Demo.mpq\data\hd\env\preset\act3\travincal\travn.json
set del_chaos_door=.\mods\Demo\Demo.mpq\data\hd\env\preset\act4\diab\entry1.json
set del_act4_lava=.\mods\Demo\Demo.mpq\data\hd\env\model\act4\lava
set del_ballair_pillars=.\\mods\Demo\Demo.mpq\data\hd\env\preset\expansion\baallair\wthrone.json

set  ver_sign=%d2r_strings%\json_db
set mod_folder=.\mods\Demo\Demo.mpq
set install_folder=.\D2R.exe
set string_folder=%d2r_strings%\

REM 设置器自检MOD安装情况与自身目录是否正确
@ echo.	 *设置器自检MOD自身是否正确
if exist %ver_sign% ( 
	REM 测试string目录下的json数据库是否存在 %d2r_strings%\json_db
) else (
	@ echo.	 ***错误：未检测到MOD下面的String文本文件数据库目录***
	@ echo.	 ***设置器无法正常工作，请确认设置器与MOD解压安装目录是否正确***
	pause
	goto exit
)

:check_setup_correct
@ echo.	 *设置器自检MOD安装情况与目录是否正确
if exist %install_folder% (
	REM 测试设置器与D2R文件相对位置是否正确 .\D2R.exe
else if exist .\Demo MOD功能展示 (
	REM 测试设置器与D2R文件相对位置是否正确 .\D2R.exe
) else ( 
	@ echo.	 ***错误：MOD所在的文件夹位置错误，可能是解压错了目录***
	@ echo.	 尝试检测设置器与D2R的相对位置
	REM 尝试检测设置器与D2R的相对位置
	set dot_path=UNKNOW
	@echo. 检测补丁包与MOD相对路径中...
	if exist .\D2R.exe set dot_path=.
	if exist ..\D2R.exe set dot_path=..
	if exist ..\..\D2R.exe set dot_path=..\..
	if exist ..\..\..\D2R.exe set dot_path=..\..\..
	@echo. 检测结果：dot_path=%dot_path%
	@echo. 检测结果：dot_path=!dot_path!
	if "!dot_path!"=="UNKNOW" (
		@ echo.	 ***错误：未检测到MOD文件夹***
	) else (
		@echo. MOD正确安装的相对路径为 !dot_path!\mods\Demo\Demo.mpq
		@echo. *如果需要自动将MOD移动到正确目录，请按任意键继续，否则请直接关闭批处理。*
		@echo. *如果需要自动将MOD移动到正确目录，请按任意键继续，否则请直接关闭批处理。*
		@echo. *如果需要自动将MOD移动到正确目录，请按任意键继续，否则请直接关闭批处理。*
		@echo. 
		pause
		@echo. 
		@echo. *你确定需要设置器帮你移动mod文件夹吗？*
		@echo. 
		pause
		@echo. 
		@echo. *再次确认一下，你真的确定需要设置器帮你移动mod文件夹吗？【最后一次确认，下面会直接执行】*
		@echo. 
		pause
		set  obj=""
		set /p obj= 输入【Y】进行自动设置目录，输入【N】强制启动设置器：
		if /i "%obj%"=="Y" Goto try_to_move_folder
		if /i "%obj%"=="N" Goto continue_do_setup
		@echo.
		@echo	  无效输入，请看清楚【 】框中的字母重新输入！
		@echo.
		pause
		ping -n 1 127.1>nul 
		goto check_setup_correct

:try_to_move_folder
		@echo. 开始移动MOD目录到正确的位置，原有位置如果有重名文件夹则会更名成Demo_BACKUP
		if exist %ver_sign% (
			@ echo.	 成功检测到MOD文件，即将进行文件移动
			pause
			ren !dot_path!\mods\Demo Demo_BACKUP
			@ echo.	 旧文件夹备份完成，下一步移动文件夹
			pause
			move /Y .\mods\Demo !dot_path!\mods
			@ echo.	 移动文件夹完成，下一步复制设置器到D2R目录
			pause
			copy /Y ".\Demo MOD设置器.bat" "!dot_path!\Demo MOD设置器.bat"
			@ echo.	 复制设置器到D2R目录完成
			@ echo.	 完成，请重新到D2R目录下启动正确的设置器再重新设置
		) else (
			@ echo.	 ***错误：未检测到设置器同目录的Mod文件，可能是解压不完整或者MOD不完整***
		)
	)
	pause
	goto exit
)

:continue_do_setup

REM 自动启动文件部分定义
set autorun_backup=.\mods\Demo\Demo.mpq\data\global\ui\layouts\hudwarningshd.autorun_backup.json
set autorun_off=.\mods\Demo\Demo.mpq\data\global\ui\layouts\hudwarningshd.mdk.json
set autorun_file=.\mods\Demo\Demo.mpq\data\global\ui\layouts\hudwarningshd.json
set noautorun_file=.\mods\Demo\Demo.mpq\data\global\ui\layouts\hudwarningshd.noautorun.json
set AutorunCheck=.\mods\Demo\Demo.mpq\data\hd\global\ui\AutorunCheck

REM 设置DLC1的标志目录
set dlc1_sign=.\mods\Demo\Demo.mpq\data\hd\character\enemy\cr_lancer1
set dlc1_file1=.\mods\Demo\Demo.mpq\data\hd\character\DLC1\corruptrogue1
set dlc1_file2=.\mods\Demo\Demo.mpq\data\hd\character\DLC1\lancer
set dlc1_file3=.\mods\Demo\Demo.mpq\data\hd\character\DLC1\cr_lancer1
set dlc1_file4=.\mods\Demo\Demo.mpq\data\hd\character\DLC1\act2hire.json
set dlc1_t_file1=.\mods\Demo\Demo.mpq\data\hd\character\enemy\corruptrogue1
set dlc1_t_file2=.\mods\Demo\Demo.mpq\data\hd\character\enemy\lancer
set dlc1_t_file3=.\mods\Demo\Demo.mpq\data\hd\character\enemy\cr_lancer1
set dlc1_t_file4=.\mods\Demo\Demo.mpq\data\hd\character\enemy\act2hire.json

set pause_file=%d2r_layouts%\pauselayouthd.json
set font_size=%d2r_layouts%\_profileasian.json
set rune_style=.\mods\Demo\Demo.mpq\data\hd\global\ui\items\misc\rune\zod_rune.sprite
set sc_light=%d2r_items%\misc\charm\charm_small.json
set lc_light=%d2r_items%\misc\charm\charm_medium.json
set ring_light=%d2r_items%\misc\ring\ring.json
set amulet_light=%d2r_items%\misc\amulet\amulet.json
set all_gem=%d2r_items%\misc\gem_all
set high_gem=%d2r_items%\misc\gem_high
set all_rune_light=%d2r_items%\misc\rune_all
set high_rune_light=%d2r_items%\misc\rune_onlylight
set high_rune_star_light=%d2r_items%\misc\rune_starlight
set craft_rune_light=%d2r_items%\misc\rune\ral_rune.json
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
set hj_font_fangsong=.\mods\Demo\Demo.mpq\data\local\font\chi_fangsong
set hj_font_qingyuan=.\mods\Demo\Demo.mpq\data\local\font\chi_qingyuan
set hj_font_ruixiantong=.\mods\Demo\Demo.mpq\data\local\font\chi_ruixiantong
set hj_font_youyuan=.\mods\Demo\Demo.mpq\data\local\font\chi_youyuan
set hj_font_currently=.\mods\Demo\Demo.mpq\data\local\font\chi

set hp_bar=%d2r_layouts%\hudmonsterhealthhd_mdk2nd.json
set hp_bar2=%d2r_layouts%\hudmonsterhealthhd_mdk1st.json
set color_spell=.\mods\Demo\Demo.mpq\data\hd\global\ui\color_spells
set potion_style=.\mods\Demo\Demo.mpq\data\hd\global\ui\items\misc\potion
set no_cap=%d2r_items%\armor\helmet\cap_hat.json
set no_all_cap=%d2r_items%\armor\helmet\helm.json
set hireables_down=%d2r_layouts%\hireablespanelhd_up.json

set color_word=%d2r_strings%\json_db\modifiers_color.mcsign

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
set rune_shop=%d2r_excel%\misc_shop.txt
set rune_normal=%d2r_excel%\misc_normal.txt
set misc_file=%d2r_excel%\misc.txt
set convic_off=.\mods\Demo\Demo.mpq\data\hd\overlays\common\convictionback_mdk.json
set convic_on=.\mods\Demo\Demo.mpq\data\hd\overlays\common\convictionback.json

REM 咒符统一样式标记
set unify_gc_eye_dark_sign=.\mods\Demo\Demo.mpq\data\hd\global\ui\items\misc\charm_db\gc_eye_dark.unifygcsign
set unify_gc_eye_sign=.\mods\Demo\Demo.mpq\data\hd\global\ui\items\misc\charm_db\gc_eye.unifygcsign
set unify_gc_mahua_sign=.\mods\Demo\Demo.mpq\data\hd\global\ui\items\misc\charm_db\gc_mahua.unifygcsign
set unify_gc_guilian_sign=.\mods\Demo\Demo.mpq\data\hd\global\ui\items\misc\charm_db\gc_guilian.unifygcsign

set unify_lc_lingpai_sign=.\mods\Demo\Demo.mpq\data\hd\global\ui\items\misc\charm_db\lc_lingpai.unifylcsign
set unify_lc_niujiao_sign=.\mods\Demo\Demo.mpq\data\hd\global\ui\items\misc\charm_db\lc_niujiao.unifylcsign
set unify_lc_fangta_sign=.\mods\Demo\Demo.mpq\data\hd\global\ui\items\misc\charm_db\lc_fangta.unifylcsign

set unify_sc_tuoyuan_dark_sign=.\mods\Demo\Demo.mpq\data\hd\global\ui\items\misc\charm_db\sc_tuoyuan_dark.unifylcsign
set unify_sc_tuoyuan_sign=.\mods\Demo\Demo.mpq\data\hd\global\ui\items\misc\charm_db\sc_tuoyuan.unifylcsign
set unify_sc_xuanwo_sign=.\mods\Demo\Demo.mpq\data\hd\global\ui\items\misc\charm_db\sc_xuanwo.unifylcsign
set unify_sc_yuanfu_sign=.\mods\Demo\Demo.mpq\data\hd\global\ui\items\misc\charm_db\sc_yuanfu.unifylcsign

REM 咒符样式文件
set gc_eye_dark=.\mods\Demo\Demo.mpq\data\hd\global\ui\items\misc\charm_db\charm_large_eye_dark
set gc_eye=.\mods\Demo\Demo.mpq\data\hd\global\ui\items\misc\charm_db\charm_large1_eye
set gc_mahua=.\mods\Demo\Demo.mpq\data\hd\global\ui\items\misc\charm_db\charm_large2_mahua
set gc_guilian=.\mods\Demo\Demo.mpq\data\hd\global\ui\items\misc\charm_db\charm_large3_guilian

set lc_lingpai=.\mods\Demo\Demo.mpq\data\hd\global\ui\items\misc\charm_db\charm_medium1_lingpai
set lc_niujiao=.\mods\Demo\Demo.mpq\data\hd\global\ui\items\misc\charm_db\charm_medium2_niujiao
set lc_fangta=.\mods\Demo\Demo.mpq\data\hd\global\ui\items\misc\charm_db\charm_medium3_fangta

set sc_tuoyuan_dark=.\mods\Demo\Demo.mpq\data\hd\global\ui\items\misc\charm_db\charm_small1_tuoyuan_dark
set sc_tuoyuan=.\mods\Demo\Demo.mpq\data\hd\global\ui\items\misc\charm_db\charm_small_tuoyuan
set sc_xuanwo=.\mods\Demo\Demo.mpq\data\hd\global\ui\items\misc\charm_db\charm_small2_xuanwo
set sc_yuanfu=.\mods\Demo\Demo.mpq\data\hd\global\ui\items\misc\charm_db\charm_small3_yuanfu

REM 地图显示怪物标记
set automap_monster_mdk_sign=%d2r_excel%\mdk.monsgin
set automap_monster_mdkchaos_sign=%d2r_excel%\mdkchaos.monsgin
set automap_monster_all_sign=%d2r_excel%\all.monsgin
set automap_chest_sign=%d2r_excel%\objects.txt

REM 底材信息切换文件
set old_baseinfo_txt_sign=%d2r_strings%\json_db\old_baseinfo.baseInfoVersign
set old_baseinfo_ver_file=%d2r_strings%\json_db\bnet_old_baseinfo.json
set new_baseinfo_ver_file=%d2r_strings%\json_db\bnet.json
set baseinfo_txt_sign=%d2r_excel%\weapons.txt
set base_with_english_sign=%d2r_strings%\json_db\base_with_english.ensign
set base_no_baseinfo_sign=%d2r_strings%\json_db\base_with_nobase.ensign
set base_with_english=%d2r_strings%\json_db\item-nameaffixes_with_english.json
set base_without_english=%d2r_strings%\json_db\item-nameaffixes_without_english.json
set base_no_baseinfo=%d2r_strings%\json_db\item-nameaffixes_no_baseinfo.json

set entry_guider=.\mods\Demo\Demo.mpq\data\hd\roomtiles_mdk
set entry_guider_c=.\mods\Demo\Demo.mpq\data\hd\roomtiles_c
set objects_aura=%objects_folder%\chests
set dest_aura=%objects_folder%\destructibles\barrel.json
set manmade_aura=%objects_folder%\env_manmade\gibbet.json
set show_arrow=%d2r_strings%\json_db\show_arrow.arrowsign
set player_light=.\mods\Demo\Demo.mpq\data\hd\character\player
set cain_light=.\mods\Demo\Demo.mpq\data\hd\character\npc\cain1.json
set shrines_light=%objects_folder%\shrines_other

set guangyuan_u=.\mods\Demo\Demo.mpq\data\hd\character\guangyuan_u.lightsign
set guangyuan_d=.\mods\Demo\Demo.mpq\data\hd\character\guangyuan_d.lightsign
set guangyuan_n=.\mods\Demo\Demo.mpq\data\hd\character\guangyuan_n.lightsign
set wp_guider=%objects_folder%\waypoint_portals
set anya_shop=%d2r_excel%\anya.shop_mode
set base_shop=%d2r_excel%\base.shop_mode
set BO_time=.\mods\Demo\Demo.mpq\data\hd\overlays\common\shield_bo\battleorders.json
set BO_time_charge=.\mods\Demo\Demo.mpq\data\hd\overlays\common\charge_bo\battleorders.json
set ass_charge_large=.\mods\Demo\Demo.mpq\data\hd\overlays\common\charge_ass_large\progressive_other_1.json
set ass_charge_large_down=.\mods\Demo\Demo.mpq\data\hd\overlays\common\charge_ass_large_down\progressive_other_1.json
set ass_charge_small=.\mods\Demo\Demo.mpq\data\hd\overlays\common\charge_ass_small\progressive_other_1.json
set ass_charge_default=.\mods\Demo\Demo.mpq\data\hd\overlays\common\progressive_other_1.json

REM===怪物脚底光源===
set enemy_nolight=.\mods\Demo\Demo.mpq\data\hd\character\nolight.enemysign
set enemy_light_1=.\mods\Demo\Demo.mpq\data\hd\character\light_1.enemysign
set enemy_light_2=.\mods\Demo\Demo.mpq\data\hd\character\light_2.enemysign
set enemy_light_3=.\mods\Demo\Demo.mpq\data\hd\character\light_3.enemysign
set enemy_nosign=.\mods\Demo\Demo.mpq\data\hd\character\nosign.enemysign

set lang_strings=%d2r_strings%
set lang_zhTW_cht=%d2r_strings%_zhTW_cht
set lang_zhTW_chs=%d2r_strings%_zhTW_chs
set lang_zhCN=%d2r_strings%_zhCN
set lang_zhTW_cht_OLD=%d2r_strings%_zhTW_cht_OLD

set magic_arrow=%d2r_missiles%\arrow.json
set light_javelin=%d2r_missiles%\javelin.json
set monster_res=%d2r_excel%\monstats.txt
set function_btn=.\mods\Demo\Demo.mpq\data\hd\global\ui\mdk\mdk
set map_tips=%d2r_strings%\levels_tips.json
set map_lv=%d2r_strings%\levels_lv.json

set diff_btn_tip=%d2r_layouts%\characterdifficultymodalhd.json
set offline_drop_up=%d2r_excel%\TreasureClassEx.txt.mdkup
set itemratio_up=%d2r_excel%\itemratio.txt
set monster_level=%d2r_excel%\levels.txt
set monster_1x=%d2r_excel%\levels_1.txt
set monster_3x=%d2r_excel%\levels_3.txt
set monster_10x=%d2r_excel%\levels_10.txt
set monster_20x=%d2r_excel%\levels_20.txt
set ntag=0

set sp_effects=%d2r_missiles%\blizzard.json
set magicarrow_effects=%d2r_missiles%\arrow.json
set light_javelin_effects=%d2r_missiles%\javelin.json
set light_axe_effects=%d2r_missiles%\balanced_axe_missile.json
set light_a3mon_effects=%d2r_missiles%\blowdart.json
set nova_effects=%d2r_missiles%\electric_nova.json
set d2eng_fonts=%d2r_ui%\D2ENG_Fonts
set torch_fire=%d2r_missiles%\diabwall.json
set sor_es_aura=.\mods\Demo\Demo.mpq\data\hd\overlays\sorceress\energyshield.json

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

set mini_map_unit=.\mods\Demo\Demo.mpq\data\hd\global\ui\automap\units.sprite
set mini_map_unit_mdk=.\mods\Demo\Demo.mpq\data\hd\global\ui\automap\units_mdk.sprite
set mini_map_unit_low=.\mods\Demo\Demo.mpq\data\hd\global\ui\automap\units.lowend.sprite
set mini_map_unit_low_mdk=.\mods\Demo\Demo.mpq\data\hd\global\ui\automap\units_mdk.lowend.sprite

REM 切换共享箱子存档用
set d2r_save=%USERPROFILE%\Saved Games\Diablo II Resurrected
set c_save_sign=.\mods\Demo\Demo.mpq\current_sharebox.shareboxsign
set c_save_sharebox_num=0
set box_current=%d2r_save%\SharedStashSoftCoreV2.d2i
set box_current_backup=%d2r_save%\SharedStashSoftCoreV2_backup.d2i

REM 刺客聚气图标
set ass_charge_up=.\mods\Demo\Demo.mpq\data\hd\overlays\common\progressive_damage_3.json
set ass_charge_missiles=.\mods\Demo\Demo.mpq\data\hd\missiles\missiles.json

REM ===规则设置界面使用set===
set rule_addr=%d2r_strings%\json_db\rule

REM ===规则文件组成部分定义===
set NoDropCheck=.\mods\Demo\Demo.mpq\data\hd\global\ui\DropFilter

REM ===规则文件判断标志文件定义，标志文件为组成文件前加s_===
set gem_head=%rule_addr%\head.json
set gem_end=%rule_addr%\end.json
set format=%rule_addr%\format.json
set rewrite=%rule_addr%\rewrite.json
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
set offline_exskill=%d2r_excel%\offline\skills_plus.txt
set exp_mode260=%d2r_excel%\experience_260.txt
set exp_mode99=%d2r_excel%\experience_99.txt
set exp_mode_file=%d2r_excel%\experience.txt
set charstats_260=%d2r_excel%\charstats_260.txt
set charstats_file=%d2r_excel%\charstats.txt

set nowtime=%date:~0,4%%date:~5,2%%date:~8,2%_%time:~0,2%_%time:~3,2%_%time:~6,2%

REM===离线大箱子===
set offline_bigbox=%d2r_layouts%\bankexpansionlayouthd_bigbox.json
set offline_fullhire=%d2r_layouts%\hirelinginventorypanelhd_full.json
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
set target_hp_color=.\mods\Demo\Demo.mpq\data\hd\global\ui\panel\hud_02\healthmanaanimation\healthidle\4k\globe_color_hp.sprite
set target_mp_color=.\mods\Demo\Demo.mpq\data\hd\global\ui\panel\hud_02\healthmanaanimation\healthidle\4k\globe_color_mp.sprite
set profile_dir=%d2r_layouts%\json_db\_profilehd_

set battlecommand_end_sign=%d2r_sfx%\states_end_sound\mdk\battlecommand_end.sesign
set battleorders_end_sign=%d2r_sfx%\states_end_sound\mdk\battleorders_end.sesign
set shout_end_sign=%d2r_sfx%\states_end_sound\mdk\shout_end.sesign

set bonearmor_end_sign=%d2r_sfx%\states_end_sound\mdk\bonearmor_end.sesign
set holyshield_end_sign=%d2r_sfx%\states_end_sound\mdk\holyshield_end.sesign

set cyclonearmor_end_sign=%d2r_sfx%\states_end_sound\mdk\cyclonearmor_end.sesign
set morph_end_sign=%d2r_sfx%\states_end_sound\mdk\morph_end.sesign
set markwolf_end_sign=%d2r_sfx%\states_end_sound\mdk\markwolf_end_sign.sesign
set markbear_end_sign=%d2r_sfx%\states_end_sound\mdk\markbear_end_sign.sesign

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

set cubemain_ex=%d2r_excel%\cubemain.txt

:SetupMain
@Cls
@set CurrentMenu=main
@ECHO OFF
@ echo.	
REM @ echo.                   ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
REM @ echo.　　               ┃                     D2R Demo MOD 自定义设置器                 ┃
REM @ echo.　　               ┃                         Ver.%Ver%                           ┃
REM @ echo.                   ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
@ echo.	━━━━━━━━━━┃D2R Demo MOD 自定义设置器 By Demo  Ver.%Ver%┃━━━━━━━━━━
@ echo.				 

@ echo.	 ※输入 【 X 】 进入 【《掉落显示屏蔽规则设置界面》 】
@ echo.	 ※输入 【 C 】 进入 【《血球颜色与游戏音效选择界面 》】
@ echo.	 ※输入 【 V 】 进入 【《游戏UI风格设置界面 》】
@ echo.				 
@ echo.	 ※※※三个语言版本屏蔽配置文件相互独立，切换后请重新设置屏蔽配置※※※
if not exist %lang_zhTW_cht% (
@ echo.	 【游戏语言版本】	输入【=】 切换顺序：【重制版繁体】→ 旧版翻译繁体 → 重制版简体 → 国服翻译简体
) else if not exist %lang_zhTW_cht_OLD% (
@ echo.	 【游戏语言版本】	输入【=】 切换顺序：重制版繁体→ 【旧版翻译繁体 】→ 重制版简体 → 国服翻译简体
) else if not exist %lang_zhTW_chs% (
@ echo.	 【游戏语言版本】	输入【=】 切换顺序：重制版繁体→ 旧版翻译繁体 → 【重制版简体 】→ 国服翻译简体
) else if not exist %lang_zhCN% (
@ echo.	 【游戏语言版本】	输入【=】 切换顺序：重制版繁体→ 旧版翻译繁体 → 重制版简体 → 【国服翻译简体】
) else (
@ echo.	 【未知语言版本】	输入【=】 切换顺序：重制版繁体→ 旧版翻译繁体 → 重制版简体 → 国服翻译简体
) 
@ echo.	 

if not exist %font_fangxing% (
@ echo.	 【普通模式中文字体】	输入【[】 切换顺序：准圆→黑体→隶变→【原版方形】→励字大黑→暴雪国际	
) else if not exist %font_dahei% (
@ echo.	 【普通模式中文字体】	输入【[】 切换顺序：准圆→黑体→隶变→原版方形→【励字大黑】→暴雪国际	
) else if not exist %font_baoxue% (
@ echo.	 【普通模式中文字体】	输入【[】 切换顺序：准圆→黑体→隶变→原版方形→励字大黑→【暴雪国际】	
) else if not exist %font_zhunyuan% (
@ echo.	 【普通模式中文字体】	输入【[】 切换顺序：【准圆】→黑体→隶变→原版方形→励字大黑→暴雪国际	
) else if not exist %font_heiti% (
@ echo.	 【普通模式中文字体】	输入【[】 切换顺序：准圆→【黑体】→隶变→原版方形→励字大黑→暴雪国际	
) else if not exist %font_libian% (
@ echo.	 【普通模式中文字体】	输入【[】 切换顺序：准圆→黑体→【隶变】→原版方形→励字大黑→暴雪国际	
) else ( 
@ echo.	 【获取字体名失败】	输入【[】 设置 【尝试强制设为原版方形字体】  
)
if not exist %d2eng_fonts% (
@ echo.	 【普通模式英文字体】	输入【]】 切换顺序：【暗黑2原版英文字体】→与中文字体相同（设置后需重设字体）
) else (
@ echo.	 【普通模式英文字体】	输入【]】 切换顺序：暗黑2原版英文字体→【与中文字体相同】（设置后需重设字体）
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
@ echo.	 *【怀旧模式字体】	输入【HJ】 切换顺序：仿宋→晴圆→锐线统简→幼圆字体
)

@ echo.	 
@ echo.　	◆◆◆◆ Demo MOD 特色功能设置部分 ◆◆◆◆
@ echo.	 当前状态【重点迷宫入口引导】
if not exist %entry_guider% (
@ echo.	  ┗  输入【1】 切换 【白色光柱√】　〖紫圈+光柱混合×〗　〖关闭引导×〗
) else if not exist %entry_guider_c% (
@ echo.	  ┗  输入【1】 切换 〖白色光柱×〗　【紫圈+光柱混合√】　〖关闭引导×〗
) else (
@ echo.	  ┗  输入【1】 切换 〖白色光柱×〗　〖紫圈+光柱混合×〗　【关闭引导√】
)
if exist %wp_guider% (
@ echo.	 当前状态【传送点黄色光柱引导（跑图用） √】	输入【2】 设置 【关闭传送点光柱引导】  
) else (
@ echo.	 当前状态【传送点黄色光柱引导（跑图用） ×】	输入【2】 设置 【打开传送点光柱引导】  
)
if exist %lc_light% (
@ echo.	 当前状态【LC咒符光柱 √】			输入【3】 设置 【去除大型咒符（LC板子）的光柱效果】  
) else (
@ echo.	 当前状态【LC咒符光柱 ×】			输入【3】 设置 【增加大型咒符（LC板子）的光柱效果】  
)

if exist %sc_light% (
@ echo.	 当前状态【SC/GC咒符光柱 √】			输入【4】 设置 【去除小型/巨型咒符（SC/GC板子）的光柱效果】  
) else (
@ echo.	 当前状态【SC/GC咒符光柱 ×】			输入【4】 设置 【增加小型/巨型咒符（SC/GC板子）的光柱效果】  
)

if exist %amulet_light% (
@ echo.	 当前状态【项链闪光 √】			输入【5】 设置 【去除项链的闪光效果】  
) else (
@ echo.	 当前状态【项链闪光 ×】			输入【5】 设置 【增加项链的闪光效果】  
)

if exist %ring_light% (
@ echo.	 当前状态【戒指闪光 √】			输入【6】 设置 【去除戒指的闪光效果】  
) else (
@ echo.	 当前状态【戒指闪光 ×】			输入【6】 设置 【增加戒指的闪光效果】  
)

if not exist %all_gem% (
@ echo.	 当前状态【宝石光柱：所有】			输入【7】 设置 【无瑕/完美/珠宝 有光柱效果（全有→高级→关闭）】  
) else if not exist %high_gem% (
@ echo.	 当前状态【宝石光柱：无瑕/完美/珠宝】		输入【7】 设置 【关闭宝石光柱效果（高级→关闭→全部）】  
) else (
@ echo.	 当前状态【宝石光柱：关闭】			输入【7】 设置 【全部宝石 光柱效果（关闭→全部→高级）】  
)
if not exist %all_rune_light% (
@ echo.	 当前状态【符文掉落特效：所有符文带特效】	输入【8】 设置 【高等符文光柱+星光效果】（有全屏特效）
) else if not exist %high_rune_star_light% (
@ echo.	 当前状态【符文掉落特效：高等符文光柱+星光效果】输入【8】 设置 【高等符文仅光柱效果】（无全屏特效）
) else if not exist %high_rune_light% (
@ echo.	 当前状态【符文掉落特效：高等符文仅光柱效果】	输入【8】 设置 【关闭符文特效】
) else (
@ echo.	 当前状态【符文掉落特效：关闭】			输入【8】 设置 【全符文光柱特效，高等符文星光特效】  
)
if exist %craft_rune_light% (
@ echo.	 当前状态【4/8/11/12#手工符文光柱：有光柱】	输入【9】 设置 【手工符文无光柱效果】  
) else (
@ echo.	 当前状态【4/8/11/12#手工符文光柱：无光柱】	输入【9】 设置 【手工符文有光柱效果】  
)
if exist %pause_file% (
@ echo.	 当前状态【*暂停界面显示暗金装备图鉴按钮 √】 	输入【PAUSE】 设置 【关闭暗金装备图鉴按钮】  
) else (
@ echo.	 当前状态【*暂停界面显示暗金装备图鉴按钮 ×】 	输入【PAUSE】 设置 【开启暗金装备图鉴按钮】  
)
if exist %autorun_off% (
@ echo.	 当前状态【*自动启动迷你方盒、血条与显示房间密码 ×】 输入【AUTO】 设置 【开启自动启动功能】  
) else (
@ echo.	 当前状态【*自动启动迷你方盒、血条与显示房间密码 √】 输入【AUTO】 设置 【关闭自动启动功能】  
)
@ echo.
@ echo.	 装备与符文之语信息显示模式：
if exist %tucao_sign%  (
@ echo.	  ┗  输入【Q】 切换 【带吐槽√】　〖不带吐槽×〗　〖单行可发聊天框×〗
) else if exist %no_tucao_sign%  (
@ echo.	  ┗  输入【Q】 切换 〖带吐槽×〗　【不带吐槽√】　〖单行可发聊天框×〗
) else (
@ echo.	  ┗  输入【Q】 切换 〖带吐槽×〗　〖不带吐槽×〗　【单行可发聊天框√】
)

if exist %baseinfo_txt_sign%  (
	@ echo.	 当前状态【底材信息：显示底材辅助信息】		输入【T】 设置 【关闭底材辅助信息】  

	if exist %base_with_english_sign%  (
	@ echo.	  ┣  输入【Y】 切换底材信息：【底材有英文名√】　〖底材无英文名×〗　〖仅装备信息×〗
	) else if exist %base_no_baseinfo_sign% (
	@ echo.	  ┣  输入【Y】 切换底材信息：〖底材有英文名×〗　〖底材无英文名×〗　【仅装备信息√】
	) else (
	@ echo.	  ┣  输入【Y】 切换底材信息：〖底材有英文名×〗　【底材无英文名√】　〖仅装备信息×〗
	)
) else (
	@ echo.	 当前状态【底材信息：不显示底材辅助信息】	输入【T】 设置 【显示底材详细信息】  
)
if exist %old_baseinfo_txt_sign%  (
	@ echo.	  ┗  *输入【Y1】 切换底材信息显示版本：【旧版的文字型底材提示√】　〖新版图片型底材提示×〗
) else (
	@ echo.	  ┗  *输入【Y1】 切换底材信息显示版本：〖旧版的文字型底材提示×〗　【新版图片型底材提示√】
)
@ echo.

if exist %function_btn% (
@ echo.	 当前状态【显示虚空宝箱、传送点等功能按键 √】	输入【W】 设置 【关闭虚空按键功能】  
) else (
@ echo.	 当前状态【显示虚空宝箱、传送点等功能按键 ×】	输入【W】 设置 【开启虚空按键功能】  
)
if exist %mdk_minicube_bigfont_mode_sign% (
@ echo.	 当前状态【使用迷你方盒 * 放大字体界面 √】 	输入【E】 设置 【关闭迷你方盒】 
) else if exist %mdk_minicube_normal_old_mode_sign% (
@ echo.	 当前状态【使用迷你方盒（旧版） * 默认界面√】	输入【E】 设置 【迷你方盒 放大字体界面】 
) else if exist %mdk_minicube_normal_mode_sign% (
@ echo.	 当前状态【使用迷你方盒（新版） * 默认界面√】	输入【E】 设置 【迷你方盒（旧版） 默认界面】 
) else (
@ echo.	 当前状态【使用迷你方盒（关闭） ×】		输入【E】 设置 【开启迷你方盒（新版） 默认界面】 
)
if exist %anya_shop% (
@ echo.	 当前状态【刷装备模式（特定变绿+其他不变色）√】 输入【R】 设置 【设置为刷底材模式】
) else if exist %base_shop% (
@ echo.	 当前状态【刷底材模式（非底材变红+特定变绿+底材不变色）√】 输入【R】 设置 【关闭刷商店模式】
) else (
@ echo.	 当前状态【通常商店模式（特定装备变绿色）×】 	输入【R】 设置 【设置为刷装备模式】
)

if exist %objects_aura% (
@ echo.	 当前状态【宝箱类物品发光√】			输入【U】 设置 【关闭宝箱类物品发光】  
) else (
@ echo.	 当前状态【宝箱类物品发光 ×】			输入【U】 设置 【开启宝箱类物品发光】  
)
if exist %dest_aura% (
@ echo.	 当前状态【可踢坏物品标识√】			输入【I】 设置 【关闭可踢坏物品的发光】  
) else (
@ echo.	 当前状态【可踢坏物品标识 ×】			输入【I】 设置 【开启可踢坏物品发光】  
)
if exist %shrines_light% (
@ echo.	 当前状态【神坛与水井附带光柱 √】		输入【O】 设置 【关闭神坛与水井附带光柱】  
) else (
@ echo.	 当前状态【神坛与水井附带光柱 ×】		输入【O】 设置 【开启神坛与水井附带光柱】  
)
if exist %player_light% (
@ echo.	 当前状态【全图光源照亮（无阴影区域） √】	输入【P】 设置 【关闭全图光源】  
) else (
@ echo.	 当前状态【全图光源照亮（无阴影区域） ×】	输入【P】 设置 【开启全图光源】  
)
@ echo.

@ echo.	 怪物辅助标记状态模式（仅能选择其中一种模式）：
if exist %enemy_nosign% (
@ echo.	 当前设置 【原版模式：怪物无任何辅助标记 ×】 
) else if exist %enemy_nolight% (
@ echo.	 当前设置 【辅助模式一：危险怪物有符文标记 √】 
) else if exist %enemy_light_2% (
@ echo.	 当前设置 【辅助模式二：怪物脚底加光源，危险怪物有符文标记 √】 
) else if exist %enemy_light_1% (
@ echo.	 当前设置 【HC辅助模式：怪物出生地加光源，头上加光柱标记，危险怪物有符文标记 √】 
) else (
@ echo.	 当前设置 【未知模式】 
)
@ echo.		 ┣  输入【A】 选择【原版模式：怪物无任何辅助标记】 
@ echo.		 ┣  输入【S】 选择【辅助模式一：危险怪物有符文标记】 
@ echo.		 ┣  输入【D】 选择【辅助模式二：怪物脚底加光源，危险怪物有符文标记】 
@ echo.		 ┗  输入【F】 选择【HC辅助模式：怪物出生地加光源，头上加光柱标记，危险怪物有符文标记】 


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
@ echo.	 输入【G】 ※【DIY修改金币、无形与有孔装备颜色】打开系统基础颜色定义文件［profilehd.json］
@ echo.	 输入【B】 ※【DIY修改符文、BUFF结束音效】	打开音效文件夹［sfx目录］
@ echo.	 输入【N】 ※【DIY修改掉落显示与规则】		打开掉落规则自定义文件［item-gems.json］
@ echo.	 输入【M】 ※【DIY修改底材信息】		打开底材信息自定义文件［item-nameaffixes.json］
@ echo.
set  obj=""
set /p obj= 输入数字或字母按回车执行：

if /i "%obj%"=="[" Goto set_font_file
if /i "%obj%"=="{" Goto set_font_file
if /i "%obj%"=="【" Goto set_font_file
if /i "%obj%"=="-" Goto show_font_picture
if /i "%obj%"=="=" Goto set_lang_ver
if /i "%obj%"=="]" Goto set_d2_oringnal_english_font
if /i "%obj%"=="}" Goto set_d2_oringnal_english_font
if /i "%obj%"=="】" Goto set_d2_oringnal_english_font

if /i "%obj%"=="HJ" Goto set_hj_font_file

if /i "%obj%"=="X" Goto RuleSetup_Main
if /i "%obj%"=="C" Goto RuneSound_Main
if /i "%obj%"=="V" Goto GameStyle_Main

if /i "%obj%"=="1" Goto set_enter_lightbeam_guider
if /i "%obj%"=="2" Goto set_waypoint_lightbeam_guider
if /i "%obj%"=="3" Goto set_large_charm_lightbeam_sign
if /i "%obj%"=="4" Goto set_small_charm_lightbeam_sign
if /i "%obj%"=="5" Goto set_amulet_lightbeam_sign
if /i "%obj%"=="6" Goto set_ring_lightbeam_sign
if /i "%obj%"=="7" Goto set_gems_lightbeam_sign
if /i "%obj%"=="8" Goto set_runes_lightbeam_sign
if /i "%obj%"=="9" Goto set_craft_runes_lightbeam_sign

if /i "%obj%"=="AUTO" Goto set_change_autorun_switch
if /i "%obj%"=="PAUSE" Goto set_pause_file

if /i "%obj%"=="Q" Goto set_equipment_with_tucao
if /i "%obj%"=="W" Goto set_hollow_function
if /i "%obj%"=="E" Goto set_mini_horadric_cube
if /i "%obj%"=="R" Goto set_roll_shop_mode
if /i "%obj%"=="T" Goto set_show_baseinfo
if /i "%obj%"=="Y" Goto set_base_with_english
if /i "%obj%"=="Y1" Goto set_old_baseinfo_ver

if /i "%obj%"=="U" Goto set_chests_with_light
if /i "%obj%"=="I" Goto set_destructibles_with_light
if /i "%obj%"=="O" Goto set_shrines_light
if /i "%obj%"=="P" Goto set_player_light

if /i "%obj%"=="A" Goto set_no_mark_mode
if /i "%obj%"=="S" Goto set_only_rune_mark_mode
if /i "%obj%"=="D" Goto set_light_mark_mode
if /i "%obj%"=="F" Goto set_lightbeam_mark_mode

if /i "%obj%"=="H" Goto set_del_travincal_hall
if /i "%obj%"=="J" Goto set_del_chaos_door
if /i "%obj%"=="K" Goto set_del_act4_lava
if /i "%obj%"=="L" Goto set_del_ballair_pillars

if /i "%obj%"=="G" Goto open_sys_base_color_folder
if /i "%obj%"=="B" Goto open_game_sound_folder
if /i "%obj%"=="N" Goto open_item_gems_file
if /i "%obj%"=="M" Goto open_item_nameaffixes_file

@echo.
@echo	  无效输入，请看清楚【 】框中的字母重新输入！
@echo.
pause
ping -n 1 127.1>nul 
goto SetupMain

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
if exist %pause_file% (
@ echo.	 设置 【关闭暗金装备图鉴按钮】  
ren %d2r_layouts%\pauselayouthd.json pauselayouthd_mdk.json
) else (
@ echo.	 设置 【开启暗金装备图鉴按钮】  
ren %d2r_layouts%\pauselayouthd_mdk.json pauselayouthd.json
)
Goto FunctionEnd

:set_change_autorun_switch
if exist %autorun_off% (
	if exist %autorun_file% (
	del %autorun_file%
	copy /Y %autorun_backup% %autorun_off%
	)
)
if exist %autorun_off% (
	@echo. 当前关闭了自启动文件，将转为开启
	del %autorun_file%
	ren %autorun_off% hudwarningshd.json
	copy /Y %AutorunCheck%\OK.sprite %AutorunCheck%\CHECK.sprite
	copy /Y %AutorunCheck%\OK.lowend.sprite %AutorunCheck%\CHECK.lowend.sprite
) else (
	@echo. 当前使用了自启动文件，将关闭自启动
	ren %autorun_file% hudwarningshd.mdk.json
	copy /Y %noautorun_file% %autorun_file%
	copy /Y %AutorunCheck%\CLOSE.sprite %AutorunCheck%\CHECK.sprite
	copy /Y %AutorunCheck%\CLOSE.lowend.sprite %AutorunCheck%\CHECK.lowend.sprite
)

Goto FunctionEnd

:set_del_travincal_hall
	if exist %del_travincal_hall% (
	@ echo.		 ┣  输入【H】 选择【屏蔽崔凡客议会大厅的墙壁与外围立柱 √】 
	ren .\mods\Demo\Demo.mpq\data\hd\env\preset\act3\travincal\travn.json travn_mdk.json
	ren .\mods\Demo\Demo.mpq\data\hd\env\preset\act3\travincal\travsw.json travsw_mdk.json
	) else (
	@ echo.		 ┣  输入【H】 选择【屏蔽崔凡客议会大厅的墙壁与外围立柱 ×】  
	ren .\mods\Demo\Demo.mpq\data\hd\env\preset\act3\travincal\travn_mdk.json travn.json
	ren .\mods\Demo\Demo.mpq\data\hd\env\preset\act3\travincal\travsw_mdk.json travsw.json
	)
Goto FunctionEnd
:set_del_chaos_door
	if exist %del_chaos_door% (
	@ echo.		 ┣  输入【J】 选择【屏蔽混沌避难所大门 √】 
	ren .\mods\Demo\Demo.mpq\data\hd\env\preset\act4\diab\entry1.json entry1_mdk.json
	) else (
	@ echo.		 ┣  输入【J】 选择【屏蔽混沌避难所大门 ×】 
	ren .\mods\Demo\Demo.mpq\data\hd\env\preset\act4\diab\entry1_mdk.json entry1.json
	)
Goto FunctionEnd
:set_del_act4_lava
	if exist %del_act4_lava% (
		@ echo.		 ┣  输入【K】 选择【屏蔽火焰之河的岩浆 √】 
		ren .\mods\Demo\Demo.mpq\data\hd\env\model\act4\lava lava_mdk
		del .\mods\Demo\Demo.mpq\data\hd\objects\vfx_only\hell_smoke.json
		del .\mods\Demo\Demo.mpq\data\hd\objects\vfx_only\hellfire_1.json
		del .\mods\Demo\Demo.mpq\data\hd\objects\vfx_only\hellfire_2.json
		del .\mods\Demo\Demo.mpq\data\hd\objects\vfx_only\hellfire_3.json
	) else (
	@ echo.		 ┣  输入【K】 选择【屏蔽火焰之河的岩浆 ×】 
		ren .\mods\Demo\Demo.mpq\data\hd\env\model\act4\lava_mdk lava
		copy /Y .\mods\Demo\Demo.mpq\data\hd\objects\vfx_only\mdk\hell_smoke.json .\mods\Demo\Demo.mpq\data\hd\objects\vfx_only
		copy /Y .\mods\Demo\Demo.mpq\data\hd\objects\vfx_only\mdk\hellfire_1.json .\mods\Demo\Demo.mpq\data\hd\objects\vfx_only
		copy /Y .\mods\Demo\Demo.mpq\data\hd\objects\vfx_only\mdk\hellfire_2.json .\mods\Demo\Demo.mpq\data\hd\objects\vfx_only
		copy /Y .\mods\Demo\Demo.mpq\data\hd\objects\vfx_only\mdk\hellfire_3.json .\mods\Demo\Demo.mpq\data\hd\objects\vfx_only
	)
Goto FunctionEnd
:set_del_ballair_pillars
	if exist %del_ballair_pillars% (
	@ echo.		 ┗  输入【L】 选择【屏蔽巴尔王座中的立柱与竖旗 √】
	ren .\mods\Demo\Demo.mpq\data\hd\env\preset\expansion\baallair\wthrone.json wthrone_mdk.json
	) else (
	@ echo.		 ┗  输入【L】 选择【屏蔽巴尔王座中的立柱与竖旗 ×】
	ren .\mods\Demo\Demo.mpq\data\hd\env\preset\expansion\baallair\wthrone_mdk.json wthrone.json
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

:set_base_with_english
if exist %base_with_english_sign%  (
	@ echo.	 当前有英文，设置 【关闭英文名】 
	copy /Y %base_without_english% %item-nameaffixes%
	del %base_with_english_sign%
	del %base_no_baseinfo_sign%
) else if exist %base_no_baseinfo_sign% (
	@ echo.	 当前无底材信息，设置 【开启英文名】 
	copy /Y %base_with_english% %item-nameaffixes%
	del %base_no_baseinfo_sign%
	@ECHO.  "x">%base_with_english_sign%
) else (
	@ echo.	 当前无英文，设置 【无底材信息】  
	copy /Y %base_no_baseinfo% %item-nameaffixes%
	del %base_with_english_sign%
	@ECHO.  "x">%base_no_baseinfo_sign%
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

:set_player_light
if exist %player_light% (
@ echo.	 设置 【关闭全图光源】  
ren .\mods\Demo\Demo.mpq\data\hd\character\player player_mu
) else (
@ echo.	 设置 【开启全图光源】  
ren .\mods\Demo\Demo.mpq\data\hd\character\player_mu player
)
Goto FunctionEnd



:set_mini_horadric_cube
	@ echo. 检测大箱子
	if not exist %offline_bigbox%  (
		@cls
		@ echo. 请先关闭《单机游戏 * 大箱子》功能再调整此项设置。
		pause
		Goto FunctionEnd
	)
if exist %mdk_minicube_normal_mode_sign% (
	@ echo.	 设置 【开启迷你方盒 OLD普通模式】  
	copy /Y %mdk_minicube_hc_old_normal% %mdk_minicube_cube_file%
	copy /Y %mdk_minicube_pi_old_expfile% %mdk_minicube_expfile%
	copy /Y %mdk_minicube_pi_old_origfile% %mdk_minicube_origfile%
	del %mdk_minicube_allsign%
	@echo. "x"> %mdk_minicube_normal_old_mode_sign%
) else if exist %mdk_minicube_normal_old_mode_sign% (
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
ren .\mods\Demo\Demo.mpq\data\hd\global\ui\mdk\mdk mdk_btn
) else (
@ echo.	 设置 【开启虚空按键功能】  
ren .\mods\Demo\Demo.mpq\data\hd\global\ui\mdk\mdk_btn mdk
)
goto FunctionEnd


:show_font_picture
字体展示.jpg
goto SetupMain


:set_no_mark_mode
del .\mods\Demo\Demo.mpq\data\hd\character\enemy\*.json
del .\mods\Demo\Demo.mpq\data\hd\character\*.enemysign
@ECHO.  "x">%enemy_nosign%
goto FunctionEnd

:set_only_rune_mark_mode
del .\mods\Demo\Demo.mpq\data\hd\character\enemy\*.json
copy /Y .\mods\Demo\Demo.mpq\data\hd\character\enemy_nolight\*.json .\mods\Demo\Demo.mpq\data\hd\character\enemy
del .\mods\Demo\Demo.mpq\data\hd\character\*.enemysign
@ECHO.  "x">%enemy_nolight%
goto FunctionEnd

:set_light_mark_mode
del .\mods\Demo\Demo.mpq\data\hd\character\enemy\*.json
copy /Y .\mods\Demo\Demo.mpq\data\hd\character\enemy_light_2\*.json .\mods\Demo\Demo.mpq\data\hd\character\enemy
del .\mods\Demo\Demo.mpq\data\hd\character\*.enemysign
@ECHO.  "x">%enemy_light_2%
goto FunctionEnd

:set_lightbeam_mark_mode
del .\mods\Demo\Demo.mpq\data\hd\character\enemy\*.json
copy /Y .\mods\Demo\Demo.mpq\data\hd\character\enemy_light_1\*.json .\mods\Demo\Demo.mpq\data\hd\character\enemy
del .\mods\Demo\Demo.mpq\data\hd\character\*.enemysign
@ECHO.  "x">%enemy_light_1%
goto FunctionEnd

:雷光标记模式
del .\mods\Demo\Demo.mpq\data\hd\character\enemy\*.json
copy /Y .\mods\Demo\Demo.mpq\data\hd\character\enemy_light_3\*.json .\mods\Demo\Demo.mpq\data\hd\character\enemy
del .\mods\Demo\Demo.mpq\data\hd\character\*.enemysign
@ECHO.  "x">%enemy_light_3%
goto FunctionEnd

:set_destructibles_with_light
if exist %dest_aura% (
@ echo.	 设置 【关闭可踢坏物品的发光和追加光源】  
move /Y mods\Demo\Demo.mpq\data\hd\objects\destructibles\*.json mods\Demo\Demo.mpq\data\hd\objects\destructibles\mdk
move /Y mods\Demo\Demo.mpq\data\hd\objects\destructibles\mdk\barrel_exploding.json mods\Demo\Demo.mpq\data\hd\objects\destructibles
move /Y mods\Demo\Demo.mpq\data\hd\objects\destructibles\mdk\exploding_chest_100.json mods\Demo\Demo.mpq\data\hd\objects\destructibles
move /Y mods\Demo\Demo.mpq\data\hd\objects\destructibles\mdk\ice_cave_evil_urn.json mods\Demo\Demo.mpq\data\hd\objects\destructibles

) else (
@ echo.	 设置 【开启可踢坏物品发光并追加光源】  
move /Y mods\Demo\Demo.mpq\data\hd\objects\destructibles\mdk\*.json mods\Demo\Demo.mpq\data\hd\objects\destructibles
)

goto FunctionEnd


:set_manmade_with_light
if exist %manmade_aura% (
@ echo.	 设置 【关闭神坛、场景物品与门的追加光源】  
ren %objects_folder%\env_manmade\soul_stone_forge.json soul_stone_forge.mdkjson
move /Y mods\Demo\Demo.mpq\data\hd\objects\env_manmade\*.json mods\Demo\Demo.mpq\data\hd\objects\env_manmade\mdk
ren %objects_folder%\env_manmade\soul_stone_forge.mdkjson soul_stone_forge.json
ren %objects_folder%\doors doors_mdk
ren %objects_folder%\shrines_healthmana shrines_healthmana_mdk
ren %objects_folder%\shrines_other shrines_other_mdk
ren %objects_folder%\wells wells_mdk
del .\mods\Demo\Demo.mpq\data\hd\character\enemy\act2hire.json
del .\mods\Demo\Demo.mpq\data\hd\character\enemy\act3hire.json
del .\mods\Demo\Demo.mpq\data\hd\character\enemy\act5hire1.json
del .\mods\Demo\Demo.mpq\data\hd\character\enemy\roguehire.json
) else (
@ echo.	 设置 【开启神坛、场景物品与门的追加光源】  
move /Y mods\Demo\Demo.mpq\data\hd\objects\env_manmade\mdk\*.json mods\Demo\Demo.mpq\data\hd\objects\env_manmade
ren %objects_folder%\doors_mdk doors
ren %objects_folder%\shrines_healthmana_mdk shrines_healthmana
ren %objects_folder%\shrines_other_mdk shrines_other
ren %objects_folder%\wells_mdk wells
copy /Y .\mods\Demo\Demo.mpq\data\hd\character\hirelight_mu\*.json .\mods\Demo\Demo.mpq\data\hd\character\enemy
)
goto FunctionEnd


:set_lang_ver
echo on
if not exist %lang_zhTW_cht_OLD% (
@ echo.	 设置 【重制版简体版本】  
ren %d2r_strings% strings_zhTW_cht_OLD
ping -n 1 127.1>nul
ren %d2r_strings%_zhTW_chs strings
) else if not exist %lang_zhTW_chs% (
@ echo.	 设置 【国服翻译简体版本】  
ren %d2r_strings% strings_zhTW_chs
ping -n 1 127.1>nul
ren %d2r_strings%_zhCN strings
) else if not exist %lang_zhCN% (
@ echo.	 设置 【重制版繁体版本】  =
ren %d2r_strings% strings_zhCN
ping -n 1 127.1>nul
ren %d2r_strings%_zhTW_cht strings
) else (
@ echo.	 设置 【老版繁体版本】  
ren %d2r_strings% strings_zhTW_cht
ping -n 1 127.1>nul
ren %d2r_strings%_zhTW_cht_OLD strings
)

if exist %s_drop_show% (
	@ echo.		 ┗  【显示所有掉落物品】√〖屏蔽低级掉落物品〗
		copy /Y %NoDropCheck%\CLOSE.sprite %NoDropCheck%\CHECK.sprite
		copy /Y %NoDropCheck%\CLOSE.lowend.sprite %NoDropCheck%\CHECK.lowend.sprite
) else (
	@ echo.		 ┗  〖显示所有掉落物品〗　【屏蔽低级掉落物品】√
		copy /Y %NoDropCheck%\OK.sprite %NoDropCheck%\CHECK.sprite
		copy /Y %NoDropCheck%\OK.lowend.sprite %NoDropCheck%\CHECK.lowend.sprite
)

goto FunctionEnd


:set_roll_shop_mode
if exist %anya_shop% (
@ echo.	 设置 【刷底材】  
copy /Y %d2r_excel%\magicprefix.txt.mdk_base %d2r_excel%\magicprefix.txt
copy /Y %d2r_excel%\magicsuffix.txt.mdk_base %d2r_excel%\magicsuffix.txt
copy /Y %d2r_layouts%\globaldatahd_mdk_base.json %d2r_layouts%\globaldatahd.json
del %anya_shop%
@echo. "x">%base_shop%
) else if exist %base_shop% (
@ echo.	 设置 【关闭】
copy /Y %d2r_excel%\magicprefix.txt.default %d2r_excel%\magicprefix.txt
copy /Y %d2r_excel%\magicsuffix.txt.default %d2r_excel%\magicsuffix.txt
copy /Y %d2r_layouts%\globaldatahd_default.json %d2r_layouts%\globaldatahd.json
del %anya_shop%
del %base_shop%
) else (
@ echo.	 设置 【刷装备】  
copy /Y %d2r_excel%\magicprefix.txt.mdk %d2r_excel%\magicprefix.txt
copy /Y %d2r_excel%\magicsuffix.txt.mdk %d2r_excel%\magicsuffix.txt
copy /Y %d2r_layouts%\globaldatahd_shopcolor.json %d2r_layouts%\globaldatahd.json
del %base_shop%
@echo. "x">%anya_shop%
)

goto FunctionEnd


:set_addl_light_mode

if exist %guangyuan_d% (
@ echo.	 设置 【关闭光源】 
del .\mods\Demo\Demo.mpq\data\hd\character\*.lightsign
del .\mods\Demo\Demo.mpq\data\hd\character\player\*.json
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
del .\mods\Demo\Demo.mpq\data\hd\character\*.lightsign
del .\mods\Demo\Demo.mpq\data\hd\character\player\*.json
copy /Y .\mods\Demo\Demo.mpq\data\hd\character\player_mu\*.json .\mods\Demo\Demo.mpq\data\hd\character\player
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
del .\mods\Demo\Demo.mpq\data\hd\character\*.lightsign
del .\mods\Demo\Demo.mpq\data\hd\character\player\*.json
copy /Y .\mods\Demo\Demo.mpq\data\hd\character\player_md\*.json .\mods\Demo\Demo.mpq\data\hd\character\player
copy /Y .\mods\Demo\Demo.mpq\data\hd\character\player_md\*.json .\mods\Demo\Demo.mpq\data\hd\character\player
@ECHO.  "x">%guangyuan_d%
) else (
del .\mods\Demo\Demo.mpq\data\hd\character\*.lightsign
del .\mods\Demo\Demo.mpq\data\hd\character\player\*.json
@ECHO.  "x">%guangyuan_n%
)
goto FunctionEnd

:set_waypoint_lightbeam_guider
if exist %wp_guider% (
@ echo.	 设置 【关闭传送点光柱引导】  
move /Y mods\Demo\Demo.mpq\data\hd\objects\waypoint_portals mods\Demo\Demo.mpq\data\hd\objects\waypoint_portals_mdk
) else (
@ echo.	 设置 【打开传送点光柱引导】  
move /Y mods\Demo\Demo.mpq\data\hd\objects\waypoint_portals_mdk mods\Demo\Demo.mpq\data\hd\objects\waypoint_portals
)
goto FunctionEnd

:set_enter_lightbeam_guider
if not exist %entry_guider% (
	@ echo.	  设置 【切换成紫圈混合】
	ren .\mods\Demo\Demo.mpq\data\hd\roomtiles roomtiles_mdk
	ren .\mods\Demo\Demo.mpq\data\hd\roomtiles_c roomtiles
	copy /Y %objects_folder%\seven_tombs_receptacle_c.json %objects_folder%\env_pillars\seven_tombs_receptacle.json
	copy /Y %objects_folder%\stone_alpha_c.json %objects_folder%\env_stone\stone_alpha.json
	copy /Y %objects_folder%\malus_c.json %objects_folder%\armor_weapons\malus.json
	copy /Y %objects_folder%\inifuss_tree_c.json %objects_folder%\env_wood\inifuss_tree.json
	copy /Y %objects_folder%\gid_b_inn_decoy_c.json %objects_folder%\env_organic\gid_b_inn_decoy.json
) else if not exist %entry_guider_c% (
	ren .\mods\Demo\Demo.mpq\data\hd\roomtiles roomtiles_c
	del %objects_folder%\env_pillars\arcane_tome.json
	del %objects_folder%\env_pillars\seven_tombs_receptacle.json
	del %objects_folder%\env_pillars\town_act_3_gid_b_inn_altar.json
	del %objects_folder%\env_stone\stone_alpha.json
	del %objects_folder%\armor_weapons\malus.json
	del %objects_folder%\env_manmade\soul_stone_forge.json
	del %objects_folder%\env_wood\inifuss_tree.json
	del %objects_folder%\dummy\caged_wussie_1.json
	del %objects_folder%\env_organic\gid_b_inn_decoy.json
	del %objects_folder%\characters\anya_yet_again.json
	del %objects_folder%\characters\wirt.json
	ren .\mods\Demo\Demo.mpq\data\hd\env\model\expansion\siege\expansion_siege_hellportals\pf_hell_portal_n01.json pf_hell_portal_n01_mdk.json
	ren .\mods\Demo\Demo.mpq\data\hd\env\model\expansion\siege\expansion_siege_hellportals\pf_hell_portal_w01.json pf_hell_portal_w01_mdk.json
	ren .\mods\Demo\Demo.mpq\data\hd\env\model\act3\jungle\prefab\pf_jungle_totem_d_foliage01.json pf_jungle_totem_d_foliage01_mdk.json
) else (
	@ echo.	  设置 【打开入口光柱引导】
	ren .\mods\Demo\Demo.mpq\data\hd\roomtiles_mdk roomtiles
	copy /Y %objects_folder%\arcane_tome.json %objects_folder%\env_pillars\arcane_tome.json
	copy /Y %objects_folder%\seven_tombs_receptacle.json %objects_folder%\env_pillars\seven_tombs_receptacle.json
	copy /Y %objects_folder%\town_act_3_gid_b_inn_altar.json %objects_folder%\env_pillars\town_act_3_gid_b_inn_altar.json
	copy /Y %objects_folder%\stone_alpha.json %objects_folder%\env_stone\stone_alpha.json
	copy /Y %objects_folder%\malus.json %objects_folder%\armor_weapons\malus.json
	copy /Y %objects_folder%\soul_stone_forge.json %objects_folder%\env_manmade\soul_stone_forge.json
	copy /Y %objects_folder%\inifuss_tree.json %objects_folder%\env_wood\inifuss_tree.json
	copy /Y %objects_folder%\caged_wussie_1.json %objects_folder%\dummy\caged_wussie_1.json
	copy /Y %objects_folder%\gid_b_inn_decoy.json %objects_folder%\env_organic\gid_b_inn_decoy.json
	copy /Y %objects_folder%\anya_yet_again.json %objects_folder%\characters\anya_yet_again.json
	copy /Y %objects_folder%\wirt.json %objects_folder%\characters\wirt.json
	ren .\mods\Demo\Demo.mpq\data\hd\env\model\expansion\siege\expansion_siege_hellportals\pf_hell_portal_n01_mdk.json pf_hell_portal_n01.json
	ren .\mods\Demo\Demo.mpq\data\hd\env\model\expansion\siege\expansion_siege_hellportals\pf_hell_portal_w01_mdk.json pf_hell_portal_w01.json
	ren .\mods\Demo\Demo.mpq\data\hd\env\model\act3\jungle\prefab\pf_jungle_totem_d_foliage01_mdk.json pf_jungle_totem_d_foliage01.json
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
move /Y mods\Demo\Demo.mpq\data\hd\objects\armor_weapons\*.json mods\Demo\Demo.mpq\data\hd\objects\armor_weapons\mdk
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
move /Y mods\Demo\Demo.mpq\data\hd\objects\characters\mdk\*.* mods\Demo\Demo.mpq\data\hd\objects\characters
move /Y mods\Demo\Demo.mpq\data\hd\objects\armor_weapons\mdk\*.json mods\Demo\Demo.mpq\data\hd\objects\armor_weapons
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

:set_equipment_with_tucao
if exist %tucao_sign%  (
@ echo.		 设置 【装备与符文之语不带吐槽  】 正在处理中...请稍等...
	copy /Y %d2r_strings%\json_db\item-runes_NoTucao.json %item-runes%
	copy /Y %d2r_strings%\json_db\item-names_NoTucao_EliteDye.json %item-names%
	del %tucao_sign%
	@ECHO.  "x">%no_tucao_sign%
) else if exist %no_tucao_sign%  (
	copy /Y %d2r_strings%\json_db\item-runes_sgline.json %item-runes%
	copy /Y %d2r_strings%\json_db\item-names_sgline.json %item-names%
	del %tucao_sign% %no_tucao_sign%
) else (
	@ echo.		 设置 【装备与符文之语带吐槽 】  正在处理中...请稍等...
	copy /Y %d2r_strings%\json_db\item-runes_ShowTucao.json %item-runes%
	copy /Y %d2r_strings%\json_db\item-names_ShowTucao_EliteDye.json %item-names%
	del %no_tucao_sign%
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
move /Y mods\Demo\Demo.mpq\data\hd\items\misc\gem mods\Demo\Demo.mpq\data\hd\items\misc\gem_all
move /Y mods\Demo\Demo.mpq\data\hd\items\misc\gem_high mods\Demo\Demo.mpq\data\hd\items\misc\gem
) else if not exist %high_gem% (
@ echo.   【关闭宝石光柱效果】 正在处理中...请稍等...
move /Y mods\Demo\Demo.mpq\data\hd\items\misc\gem mods\Demo\Demo.mpq\data\hd\items\misc\gem_high
move /Y mods\Demo\Demo.mpq\data\hd\items\misc\gem_nolight mods\Demo\Demo.mpq\data\hd\items\misc\gem
) else (
@ echo.   【增加所有等级宝石光柱效果】 正在处理中...请稍等...
move /Y mods\Demo\Demo.mpq\data\hd\items\misc\gem mods\Demo\Demo.mpq\data\hd\items\misc\gem_nolight
move /Y mods\Demo\Demo.mpq\data\hd\items\misc\gem_all mods\Demo\Demo.mpq\data\hd\items\misc\gem
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
@ echo.

if not exist %all_rune_light% (
	@ echo.	 设置 【高等符文光柱+星光效果】（有全屏特效）
	ren %d2r_items%\misc\rune rune_all
	ren %d2r_items%\misc\rune_starlight rune
) else if not exist %high_rune_star_light% (
	@ echo.	 设置 【高等符文仅光柱效果】（无全屏特效）
	ren %d2r_items%\misc\rune rune_starlight
	ren %d2r_items%\misc\rune_onlylight rune
) else if not exist %high_rune_light% (
	@ echo.	 设置 【关闭符文特效】
	ren %d2r_items%\misc\rune rune_onlylight
) else (
	@ echo.	 设置 【全符文光柱特效，高等符文星光特效】 
	ren %d2r_items%\misc\rune_all rune
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
set CurrentMenu=rule
Cls
@ECHO OFF
@ echo.	
REM @ echo.         ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
REM @ echo.　　     ┃       D2R Demo MOD 屏蔽显示规则设置器 By Demo    ┃
REM @ echo.         ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
@ echo.		━━━━━━━━━━┃D2R Demo MOD 屏蔽显示规则设置器 By Demo┃━━━━━━━━━━
@ echo.		
@ echo.	 ※※※三个语言版本屏蔽配置文件相互独立，切换后请重新设置屏蔽配置※※※
if not exist %lang_zhTW_cht% (
@ echo.	 切换语言循环顺序：【重制版繁体】→ 旧版翻译繁体 → 重制版简体 → 国服翻译简体
) else if not exist %lang_zhTW_cht_OLD% (
@ echo.	 切换语言循环顺序：重制版繁体→ 【旧版翻译繁体 】→ 重制版简体 → 国服翻译简体
) else if not exist %lang_zhTW_chs% (
@ echo.	 切换语言循环顺序：重制版繁体→ 旧版翻译繁体 → 【重制版简体 】→ 国服翻译简体
) else if not exist %lang_zhCN% (
@ echo.	 切换语言循环顺序：重制版繁体→ 旧版翻译繁体 → 重制版简体 → 【国服翻译简体】
) else (
@ echo.	 切换语言循环顺序：重制版繁体→ 旧版翻译繁体 → 重制版简体 → 国服翻译简体
)


if not exist %lang_zhTW_cht% (
@ echo.	 当前语言：【重制版繁体版本】	输入【=】 设置 〖老版翻译繁体版本〗 
) else if not exist %lang_zhTW_cht_OLD% (
@ echo.	 当前语言：【老版翻译繁体版本】	输入【=】 设置 〖重制版简体版本〗 
) else if not exist %lang_zhTW_chs% (
@ echo.	 当前语言：【重制版简体版本】	输入【=】 设置 〖国服翻译简体版本〗 
) else if not exist %lang_zhCN% (
@ echo.	 当前语言：【国服翻译简体版本】	输入【=】 设置 〖重制版繁体版本〗 
) else (
@ echo.	 当前语言：【未知版本】	输入【=】	强制设置 〖重制版繁体版本〗 
)
@ echo.		


@ echo.	 ●　输入【1】切换：是否屏蔽低级掉落《解毒瓶等药剂、无价值的普通/扩展装备》
@ echo.	　　　*注：屏蔽后会出现只显示〖超强〗二字的装备，这是被屏蔽的超强低级装备
if exist %s_drop_show% (
	@ echo.		 ┗  【显示所有掉落物品】√〖屏蔽低级掉落物品〗
	set s_drop=%drop_show%
) else (
	@ echo.		 ┗  〖显示所有掉落物品〗　【屏蔽低级掉落物品】√
	set s_drop=%drop_no%
)
@ echo.		


@ echo.	 ●　输入【2】切换：粗制／破损／陈旧／劣质的　四种”低品质“装备的显示规则
if exist %s_low_red% (
@ echo.		 ┗  低品质装备 【显示为红色】 √〖显示为黑色〗　〖彻底屏蔽〗
set s_low=%low_red%
) else if exist %s_low_black% (
@ echo.		 ┗  低品质装备 〖显示为红色〗　【显示为黑色】√〖彻底屏蔽〗
set s_low=%low_black%
) else if exist %s_low_hide% (
@ echo.		 ┗  低品质装备 〖显示为红色〗　〖显示为黑色〗　【彻底屏蔽】√
set s_low=%low_hide%
) else (
@ echo.		 ┗  识别出错！低品质装备 〖显示为红色〗〖显示为黑色〗〖彻底屏蔽〗
)
@ echo.		


@ echo.	 ●　输入【3】切换：大药瓶《超红、超蓝、大紫瓶》的显示规则
@ echo.	　　　*注：项链、戒指固定显示为图标+文字的方式
if exist %s_ring_texticon% (
@ echo.		 ┗  大药瓶显示为【图标+文字】√　〖仅文字〗　　〖仅图标〗　　〖隐藏红蓝瓶〗
set s_ring=%ring_texticon%
) else if exist %s_ring_text% (
@ echo.		 ┗  大药瓶显示为〖图标+文字〗　　【仅文字】√　〖仅图标〗　　〖隐藏红蓝瓶〗
set s_ring=%ring_text%
) else if exist %s_ring_icon% (
@ echo.		 ┗  大药瓶显示为〖图标+文字〗　　〖仅文字〗　　【仅图标】√　〖隐藏红蓝瓶〗
set s_ring=%ring_icon%
) else if exist %s_ring_hide% (
@ echo.		 ┗  大药瓶显示为〖图标+文字〗　　〖仅文字〗　　〖仅图标〗　　【隐藏红蓝瓶】√
set s_ring=%ring_hide%
) else (
@ echo.		 ┗  识别出错！大药瓶显示〖图标+文字〗　〖仅文字〗　〖仅图标〗　〖隐藏红蓝瓶〗
)
@ echo.		


@ echo.	 ●　输入【4】切换：1-4级红蓝药水的显示规则
if exist %s_potion_show% (
@ echo.		 ┗  1-4级红蓝药水【显示】√　〖屏蔽〗
set s_potion=%potion_show%
) else if exist %s_potion_nodrop% (
@ echo.		 ┗  1-4级红蓝药水〖显示〗　　【屏蔽】√
set s_potion=%potion_nodrop%
) else (
@ echo.		 ┗  识别出错！1-4级红蓝药水规则〖显示〗　〖屏蔽 〗
)
@ echo.		


@ echo.	 ●　输入【5】切换：小紫药水的显示规则
if exist %s_rvs_show% (
@ echo.		 ┗  小紫药水【显示】√　〖屏蔽〗
set s_rvs=%rvs_show%
) else if exist %s_rvs_nodrop% (
@ echo.		 ┗  小紫药水〖显示〗　　【屏蔽】√
set s_rvs=%rvs_nodrop%
) else (
@ echo.		 ┗  识别出错！小紫药水规则〖显示〗　〖屏蔽 〗
)
@ echo.		


@ echo.	 ●　输入【6】切换：宝石的显示规则
if exist %s_gem_texticon% (
@ echo.		 ┣  宝石显示为【图标+文字】√
set s_gem=%gem_texticon%
) else (
@ echo.		 ┣  宝石显示为〖图标+文字〗
)
if exist %s_gem_text% (
@ echo.		 ┣  宝石显示为【仅文字】√
set s_gem=%gem_text%
) else (
@ echo.		 ┣  宝石显示为〖仅文字〗
)
if exist %s_gem_icon% (
@ echo.		 ┣  宝石显示为【仅图标】√
set s_gem=%gem_icon%
) else (
@ echo.		 ┣  宝石显示为〖仅图标〗
)
if exist %s_gem_texticon_tip% (
@ echo.		 ┣  宝石显示为【图标+文字+合成提示】√
set s_gem=%gem_texticon_tip%
) else (
@ echo.		 ┣  宝石显示为〖图标+文字+合成提示〗
)
if exist %s_gem_text_tip% (
@ echo.		 ┣  宝石显示为【仅文字+合成提示】√
set s_gem=%gem_text_tip%
) else (
@ echo.		 ┣  宝石显示为〖仅文字+合成提示〗
)
if exist %s_gem_icon_tip% (
@ echo.		 ┗  宝石显示为【仅图标+合成提示】√
set s_gem=%gem_icon_tip%
) else (
@ echo.		 ┗  宝石显示为〖仅图标+合成提示〗
)
@ echo.		


@ echo.	 ●　输入【7】切换：符文的显示规则
if exist %s_rune_tip% (
@ echo.		 ┗  符文显示为【图标+文字+用途与合成提示】√　〖图标+文字〗
set s_rune=%rune_tip%
) else if exist %s_rune_notip% (
@ echo.		 ┗  符文显示为〖图标+文字+用途与合成提示〗　　【图标+文字】√
set s_rune=%rune_notip%
) else (
@ echo.		 ┗  识别出错！符文显示〖图标+文字+用途与合成提示〗　〖图标+文字 〗
)
@ echo.		


@ echo.	 ●　输入【8】切换：（箭矢）与（弩弹） 的显示规则
if exist %s_arrow_texticon% (
@ echo.		 ┗  箭矢显示为【图标+文字】√　〖仅文字〗　　〖仅图标〗　　〖不显示〗
set s_arrow=%arrow_texticon%
) else if exist %s_arrow_text% (
@ echo.		 ┗  箭矢显示为〖图标+文字〗　　【仅文字】√　〖仅图标〗　　〖不显示〗
set s_arrow=%arrow_text%
) else if exist %s_arrow_icon% (
@ echo.		 ┗  箭矢显示为〖图标+文字〗　　〖仅文字〗　　【仅图标】√　〖不显示〗
set s_arrow=%arrow_icon%
) else if exist %s_arrow_no% (
@ echo.		 ┗  箭矢显示为〖图标+文字〗　　〖仅文字〗　　〖仅图标〗　　【不显示】√
set s_arrow=%arrow_no%
) else (
@ echo.		 ┗  识别出错！箭矢显示〖图标+文字〗　〖仅文字〗　〖仅图标〗　〖不显示 〗
)
@ echo.		


@ echo.	 ●　输入【9】切换：（卷轴）与（钥匙） 的显示规则
if exist %s_scroll_texticon% (
@ echo.		 ┣  卷轴显示为【图标+文字】√　〖仅文字〗　　〖仅图标〗
set s_scroll=%scroll_texticon%
) else if exist %s_scroll_text% (
@ echo.		 ┣  卷轴显示为〖图标+文字〗　　【仅文字】√　〖仅图标〗
set s_scroll=%scroll_text%
) else if exist %s_scroll_icon% (
@ echo.		 ┗  卷轴显示为〖图标+文字〗　　〖仅文字〗　　【仅图标】√
set s_scroll=%scroll_icon%
) else (
@ echo.		 ┗  识别出错！卷轴显示〖图标+文字〗　〖仅文字〗　〖仅图标 〗
)
@ echo.		


@ echo.	 ●　输入【0】切换：普通与扩展的四孔长柄武器（铁魔材料）的显示规则
@ echo.	　　　*注：普通长柄中强制显示镰刀（镰刀妹）与长戟（烦恼诗集）
if exist %s_pole_show% (
@ echo.		 ┗  普/扩 长柄武器材料【显示】√　〖屏蔽〗
set s_pole=%pole_show%
) else if exist %s_pole_nodrop% (
@ echo.		 ┗  普/扩 长柄武器材料〖显示〗　　【屏蔽】√
set s_pole=%pole_nodrop%
) else (
@ echo.		 ┗  识别出错！普/扩 长柄武器材料规则〖显示〗　〖屏蔽 〗
)


@ echo.		
@ echo.	 ●　输入【K】打开item-gems文件进行【自定义修改】
if exist %huaijiu_nodrop% (
@ echo.	 ●　输入【L】切换：掉落屏蔽在“怀旧模式”下是否生效，当前状态【生效】
) else (
@ echo.	 ●　输入【L】切换：掉落屏蔽在“怀旧模式”下是否生效，当前状态【不生效】
)

@ echo.		
@ echo.	 ※输入 【 Z 】 返回 【《设置器主界面》】
@ echo.	 ※输入 【 C 】 进入 【《血球颜色与游戏音效选择界面 》】
@ echo.	 ※输入 【 V 】 进入 【《游戏UI风格设置界面 》】
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
if /i "%obj%"=="=" Goto set_lang_ver

if /i "%obj%"=="Z" Goto SetupMain
if /i "%obj%"=="X" Goto RuleSetup_Main
if /i "%obj%"=="C" Goto RuneSound_Main
if /i "%obj%"=="V" Goto GameStyle_Main

@echo.
@echo	  无效输入，请看清楚【 】框中的内容重新输入！
@echo.
pause
ping -n 1 127.1>nul 
goto RuleSetup_Main


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
	if exist mdk_mod.debug ( pause )
	set rule_file=%gem_head%+%format%+%s_low%+%rewrite%+%s_arrow%+%s_potion%+%s_rvs%+%s_scroll%+%s_gem%+%s_rune%+%s_ring%+%s_drop%+%s_pole%+%gem_end%
	set rule_file2=%gem_head%+%format%+%s_low%+%rewrite%+%s_arrow%+%s_potion%+%s_rvs%+%s_scroll%+%s_gem%+%s_rune%+%s_ring%+%s_drop%2+%s_pole%2+%gem_end%
	@echo. rule_file 为 %rule_file%
	@echo. gem_file 为 %gem_file%
	if exist mdk_mod.debug ( pause )
	del %gem_file%
	copy /Y /b %rule_file% %gem_file%
	copy /Y /b %rule_file2% %gem_file%.legacy
	
	@echo. del_file=%rule_del_file%
	@echo. cre_file=%rule_create_file%
	if exist mdk_mod.debug ( pause )
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
	@ echo.		 ┗  低品质装备【显示为黑色】√
		set s_low=%low_hide%
		set rule_create_file=%s_low_hide%
	) else if exist %s_low_hide% (
	@ echo.		 ┗  低品质装备 【彻底屏蔽】√
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
	if exist %s_drop_no% (
		@echo. 当前不显示掉落，换成显示
		set rule_del_file=%all_drop_sign%
		set s_drop=%drop_show%
		set rule_create_file=%s_drop_show%
		copy /Y %NoDropCheck%\CLOSE.sprite %NoDropCheck%\CHECK.sprite
		copy /Y %NoDropCheck%\CLOSE.lowend.sprite %NoDropCheck%\CHECK.lowend.sprite
	) else (
		@echo. 当前显示掉落，换成不显示
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
		@ echo.		 ┗  箭矢显示为【不显示】√
		set rule_del_file=%all_arrow_sign%
		set s_arrow=%arrow_texticon%
		set rule_create_file=%s_arrow_texticon%
	)
Goto CreateGemFile

:change_ring_rule
	if exist %s_ring_texticon% (
		@ echo.		 ┣  杂物显示为【图标+文字】√
		set rule_del_file=%all_ring_sign%
		set s_ring=%ring_text%
		set rule_create_file=%s_ring_text%
	) else if exist %s_ring_text% (
		@ echo.		 ┣  杂物显示为【仅文字】√
		set rule_del_file=%all_ring_sign%
		set s_ring=%ring_icon%
		set rule_create_file=%s_ring_icon%
	) else if exist %s_ring_icon% (
		@ echo.		 ┗  杂物显示为【仅图标】√
		set rule_del_file=%all_ring_sign%
		set s_ring=%ring_hide%
		set rule_create_file=%s_ring_hide%
	) else (
		@ echo.		 ┗  杂物显示为【隐藏红蓝瓶】√
		set rule_del_file=%all_ring_sign%
		set s_ring=%ring_texticon%
		set rule_create_file=%s_ring_texticon%
	) 
Goto CreateGemFile

:change_gem_rule
	if exist %s_gem_texticon% (
		@ echo.		 ┣  宝石显示为【图标+文字】√
		set rule_del_file=%all_gem_sign%
		set s_gem=%gem_text%
		set rule_create_file=%s_gem_text%
	) else if exist %s_gem_text% (
		@ echo.		 ┣  宝石显示为【仅文字】√
		set rule_del_file=%all_gem_sign%
		set s_gem=%gem_icon%
		set rule_create_file=%s_gem_icon%
	) else if exist %s_gem_icon%  (
		@ echo.		 ┗  宝石显示为【仅图标】√
		set rule_del_file=%all_gem_sign%
		set s_gem=%gem_texticon_tip%
		set rule_create_file=%s_gem_texticon_tip%
	) else if exist %s_gem_texticon_tip% (
		@ echo.		 ┣  宝石显示为【图标+文字+tip】√
		set rule_del_file=%all_gem_sign%
		set s_gem=%gem_text_tip%
		set rule_create_file=%s_gem_text_tip%
	) else if exist %s_gem_text_tip% (
		@ echo.		 ┣  宝石显示为【仅文字+tip】√
		set rule_del_file=%all_gem_sign%
		set s_gem=%gem_icon_tip%
		set rule_create_file=%s_gem_icon_tip%
	) else (
		@ echo.		 ┗  宝石显示为【仅图标+tip】√
		set rule_del_file=%all_gem_sign%
		set s_gem=%gem_texticon%
		set rule_create_file=%s_gem_texticon%
	) 
Goto CreateGemFile

:change_scroll_rule
	echo on
	pause
	if exist %s_scroll_texticon% (
		@ echo.		 ┣  卷轴显示为【图标+文字】√
		set rule_del_file=%all_scroll_sign%
		set s_scroll=%scroll_text%
		set rule_create_file=%s_scroll_text%
	) else if exist %s_scroll_text% (
		@ echo.		 ┣  卷轴显示为【仅文字】√
		set rule_del_file=%all_scroll_sign%
		set s_scroll=%scroll_icon%
		set rule_create_file=%s_scroll_icon%
	) else (
		@ echo.		 ┗  卷轴显示为【仅图标】√
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
Cls
set CurrentMenu=sound
@ECHO OFF
@ echo.	
REM @ echo.         ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
REM @ echo.　　     ┃        D2R Demo MOD 游戏音效设置器 By Demo       ┃
REM @ echo.         ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
@ echo.		━━━━━━━━━━┃D2R Demo MOD 游戏音效设置器 By Demo┃━━━━━━━━━━
@ echo.				 

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
@ echo.		 ┣  输入【85】关闭【圣骑士】【√】【能量护盾（顶球） 语音】
) else (
@ echo.		 ┣  输入【85】开启【圣骑士】【×】【能量护盾（顶球） 语音】
)

if exist %bonearmor_end_sign% (
@ echo.		 ┗  输入【86】关闭【死灵法师】【√】【骸骨护甲（遗忘骑士也会用） 语音】
) else (
@ echo.		 ┗  输入【86】开启【死灵法师】【×】【骸骨护甲（遗忘骑士也会用） 语音】
)

if exist %markwolf_end_sign% (
@ echo.		 ┗  输入【87】关闭【德鲁伊】【√】【狼之印记 语音】
) else (
@ echo.		 ┗  输入【87】开启【德鲁伊】【×】【狼之印记 语音】
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
@ echo.
@ echo.	 猛击 【 Z 】 键，【返回设置器主页面】Return to Setup Main Menu
@ echo.	 猛击 【 X 】 进入 【《掉落显示屏蔽规则设置界面》 】
@ echo.	 猛击 【 V 】 进入 【《游戏UI风格设置界面 》】
@ echo.
@ echo.
set  obj=""
set /p obj= 输入数字或字母按回车执行：

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

if /i "%obj%"=="Z" Goto SetupMain
if /i "%obj%"=="X" Goto RuleSetup_Main
if /i "%obj%"=="C" Goto RuneSound_Main
if /i "%obj%"=="V" Goto GameStyle_Main

@echo.
@echo	  无效输入，请看清楚【 】框中的内容重新输入！
@echo.
pause
ping -n 1 127.1>nul 
goto RuneSound_Main

:set_dlc1
if exist %dlc1_sign% (
@ echo.	 输入【DLC1】切换，DLC 1【白色堕落萝格风格沙漠雇佣兵】 状态：已激活
rd /S /Q %dlc1_t_file1%
rd /S /Q %dlc1_t_file2%
rd /S /Q %dlc1_t_file3%
del %dlc1_t_file4%
) else (
@ echo.	 输入【DLC1】切换，DLC 1【白色堕落萝格风格沙漠雇佣兵】 状态：未激活
xcopy .\mods\Demo\Demo.mpq\data\hd\character\DLC1 .\mods\Demo\Demo.mpq\data\hd\character\enemy /Y /S /E
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
set test_sound_sign=%states_end_sound_folder%\mdk\%se_sound%.sesign
@echo. test_sound_sign=%test_sound_sign%
if exist %test_sound_sign% (
	@ echo.	关闭语音】
	copy /Y %states_end_sound_folder%\se_novoice\%se_sound%.flac %states_end_sound_folder%
	del %test_sound_sign%
) else (
	@ echo.	开启语音】
	copy /Y %states_end_sound_folder%\se_backup\%se_sound%.flac %states_end_sound_folder%
	@ECHO.  "x">%test_sound_sign%
)
@ echo.	完成
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
if exist mdk_mod.debug ( pause )
goto RuneSound_Main

REM===血球颜色与符文声音选择 END===



REM===游戏风格部分===
:GameStyle_Main
Cls
set CurrentMenu=style
@ECHO OFF
@ echo.	
REM @ echo.         ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
REM @ echo.　　     ┃         D2R Demo MOD 游戏风格设置器 By Demo      ┃
REM @ echo.         ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
REM call :cgreen " ━━━━━━━━━━┃D2R Demo MOD 游戏风格设置器 By Demo┃━━━━━━━━━━"
@ echo.		━━━━━━━━━━┃D2R Demo MOD 游戏风格设置器 By Demo┃━━━━━━━━━━
@ echo.	
@ echo.	 请选择下面不同的风格 （带有*号的为新功能）
@ echo.				 
if not exist %ui_mini% (
@ echo.	 当前状态【迷你UI界面】				输入【1】 设置 【65%%尺寸UI界面（迷你→65%%→75%%→85%%→100%%）】
) else if not exist %ui_6% (
@ echo.	 当前状态【65%%尺寸UI界面】			输入【1】 设置 【75%%尺寸UI界面（迷你→65%%→75%%→85%%→100%%）】
) else if not exist %ui_7% (
@ echo.	 当前状态【75%%尺寸UI界面】			输入【1】 设置 【85%%尺寸UI界面（迷你→65%%→75%%→85%%→100%%）】
) else if not exist %ui_8% (
@ echo.	 当前状态【85%%尺寸UI界面】			输入【1】 设置 【100%%尺寸UI界面（迷你→65%%→75%%→85%%→100%%）】
) else (
@ echo.	 当前状态【100%%原版尺寸UI界面】			输入【1】 设置 【迷你UI界面（迷你→65%%→75%%→85%%→100%%）】
)
if exist %font_size% (
@ echo.	 当前状态【字体尺寸：加大尺寸】			输入【2】 设置 【恢复默认字体大小】	
) else (
@ echo.	 当前状态【字体尺寸：原版尺寸】			输入【2】 设置 【增加字体尺寸】		
)
if exist %sp_effects% (
@ echo.	 当前状态【特效：祝福之锤+法师魔法加特效 √】	输入【3】 设置 【关闭浮夸的特效】  
) else (
@ echo.	 当前状态【特效：祝福之锤+法师魔法加特效 ×】	输入【3】 设置 【增加浮夸的特效】  
)
if exist %magicarrow_effects% (
@ echo.	 当前状态【特效：所有普通箭矢加魔法箭特效 √】	输入【4】 设置 【关闭箭矢的魔法特效】
) else (
@ echo.	 当前状态【特效：所有普通箭矢加魔法箭特效 ×】	输入【4】 设置 【开启箭矢的魔法特效】  
)
if exist %light_javelin_effects% (
@ echo.	 当前状态【特效：所有投掷标枪加闪电枪特效 √】	输入【41】设置 【关闭投掷标枪的魔法特效】
) else (
@ echo.	 当前状态【特效：所有投掷标枪加闪电枪特效 ×】	输入【41】设置 【开启投掷标枪的魔法特效】  
)
if exist %light_axe_effects% (
@ echo.	 当前状态【*特效：所有飞斧、飞刀加电尾特效 √】	输入【42】设置 【关闭飞斧、飞刀的魔法特效】
) else (
@ echo.	 当前状态【*特效：所有飞斧、飞刀加电尾特效 ×】	输入【42】设置 【开启飞斧、飞刀的魔法特效】  
)
if exist %light_a3mon_effects% (
@ echo.	 当前状态【*特效：鬼娃吹的飞针加电尾特效 √】	输入【43】设置 【关闭鬼娃飞针的魔法特效】
) else (
@ echo.	 当前状态【*特效：鬼娃吹的飞针加电尾特效 ×】	输入【43】设置 【开启鬼娃飞针的魔法特效】  
)
if exist %nova_effects% (
@ echo.	 当前状态【特效：闪电新星+雷云风暴 降亮度 √】	输入【5】 设置 【恢复原版特效】  
) else (
@ echo.	 当前状态【特效：闪电新星+雷云风暴 降亮度 ×】	输入【5】 设置 【降低特效亮度】  
)
if exist %torch_fire% (
@ echo.	 当前状态【特效：显示地狱火炬的火焰风暴特效 ×】输入【6】 设置 【恢复原版特效】  
) else (
@ echo.	 当前状态【特效：显示地狱火炬的火焰风暴特效 √】输入【6】 设置 【关闭火焰特效】  
)
if not exist %BO_time% (
@ echo.	 当前状态【特效：BO+BC 特效 ：巴尔环特效 √】	输入【7】 设置 【显示聚气环的特效】
) else if not exist %BO_time_charge% (
@ echo.	 当前状态【特效：BO+BC 特效 ：聚气环特效 √】	输入【7】 设置 【关闭BC/BO的BUFF特效】
) else (
@ echo.	 当前状态【特效：BO+BC 特效 ：不显示特效 ×】	输入【7】 设置 【显示巴尔环的特效】 
)
if not exist %convic_off% (
@ echo.	 当前状态【特效：信念/审判光环生效提示 √ 】	输入【8】 设置 【关闭感叹号提示】 
) else (
@ echo.	 当前状态【特效：信念/审判光环生效提示 × 】	输入【8】 设置 【开启感叹号提示】 
)
if not exist %no_all_cap% (
	if not exist %no_cap% (
		@ echo.	 当前状态【头盔显示状态：显示头盔 √ 】		输入【9】 设置 【不显示布帽与骷髅帽】
	) else (
		@ echo.	 当前状态【头盔显示状态：不显示布帽骷髅帽 × 】	输入【9】 设置 【不显示所有头盔】
	)
) else (
	@ echo.	 当前状态【头盔显示状态：不显示所有头盔 × 】	输入【9】 设置 【显示头盔】
)
if not exist %ass_charge_default% (
@ echo.	 当前状态【*刺客聚气：身边显示聚气等级图标 × 】输入【0】 设置 【身边显示大聚气图标】
) else if not exist %ass_charge_large% (
@ echo.	 当前状态【*刺客聚气等级：身边显示聚气大图标 √ 】输入【0】 设置 【UI上显示聚气大图标】
) else if not exist %ass_charge_large_down% (
@ echo.	 当前状态【*刺客聚气等级：UI上显示聚气大图标 √ 】输入【0】 设置 【脚下显示小聚气图标】
) else (
@ echo.	 当前状态【*刺客聚气等级：脚下显示聚气小图标 √ 】输入【0】 设置 【不显示聚气等级图标】
)
if exist %ass_charge_missiles% (
@ echo.	 当前状态【*刺客聚气特效：改特效降低亮度 √ 】	输入【01】 设置 【恢复原版效果】
) else (
@ echo.	 当前状态【*刺客聚气特效：改特效降低亮度 × 】	输入【01】 设置 【修改特效降低亮度】
)
@ echo.	 当前状态【*刺客聚气特效：自定义飞弹特效】	输入【02】 打开 【飞弹特效文件】
if exist %sor_es_aura% (
@ echo.	 当前状态【法师能量护盾：带特效并持续发光】	输入【-】 设置 【恢复原版样式】
) else (
@ echo.	 当前状态【法师能量护盾：原版样式】		输入【-】 设置 【增加特效提示】
)
if exist %rune_style% (
@ echo.	 当前状态【符文风格：带编号】			输入【=】 设置 【恢复原版符文样式】
) else (
@ echo.	 当前状态【符文风格：原版】			输入【=】 设置 【改为带编号符文样式】
)
if not exist %hp_bar% (
@ echo.	 当前状态【血条风格：哥特风格】			输入【W】 设置 【简洁怪物血条】
) else if not exist %hp_bar2% (
@ echo.	 当前状态【血条风格：简洁风格】			输入【W】 设置 【默认血条风格】
) else (
@ echo.	 当前状态【血条风格：默认风格】			输入【W】 设置 【哥特风格血条】
)
if exist %mini_map_unit% (
@ echo.	 当前状态【小地图图标：Demo实心风格】		输入【E】 设置 【原版风格】
) else (
@ echo.	 当前状态【小地图图标：原版风格】		输入【E】 设置 【Demo实心风格】
)
if not exist %color_word% (
@ echo.	 当前状态【词条风格：原版词条】			输入【R】 设置 【彩色属性词条】
) else (
@ echo.	 当前状态【词条风格：彩色词条】			输入【R】 设置 【原版统一色词条】
)
if exist %color_spell% (
@ echo.	 当前状态【技能图标：原版图标】			输入【T】 设置 【彩色技能图标】
) else (
@ echo.	 当前状态【技能图标：彩色图标】			输入【T】 设置 【原版风格技能图标】
)
if exist %potion_style% (
@ echo.	 当前状态【大药瓶：圆瓶类型】			输入【Y】 设置 【恢复原版超大红蓝药瓶】  
) else (
@ echo.	 当前状态【大药瓶：原版类型】			输入【Y】 设置 【设置成大圆瓶的超大红蓝瓶】  
)
if exist %potion_vo% (
@ echo.	 当前状态【药水音效：无音效】			输入【U】 设置 【恢复药水音效】  
) else (
@ echo.	 当前状态【药水音效：有音效】			输入【U】 设置 【屏蔽药水音效】  
)
if exist %hireables_down% (
@ echo.	 当前状态【佣兵图标位置：屏幕下方】		输入【I】 设置 【显示在屏幕上方】  
) else (
@ echo.	 当前状态【佣兵图标位置：屏幕上方】		输入【I】 设置 【显示在屏幕下方】  
)
if exist %cain_light% (
@ echo.	 当前状态【*城内NPC有头衔特效 √】		输入【O】 设置 【关闭头衔特效】  
) else (
@ echo.	 当前状态【*城内NPC有头衔特效 ×】		输入【O】 设置 【开启头衔特效】  
)
if exist %automap_monster_mdk_sign% (
	@ echo.	 当前状态【*小地图标记怪物出生地* 牛+危√】	输入【Q】 切换：
	@ echo.	  ┗  输入【Q】切换：【牛场+危险怪物√】　〖混沌避难所+牛+危×〗　〖所有怪物×〗　〖不显示×〗
) else if exist %automap_monster_mdkchaos_sign% (
	@ echo.	 当前状态【*小地图标记怪物出生地* 超市+牛+危√】输入【Q】 切换：
	@ echo.	  ┗  输入【Q】切换：〖牛场+危险怪物×〗　【混沌避难所+牛+危√】　〖所有怪物×〗　〖不显示×〗
) else if exist %automap_monster_all_sign% (
	@ echo.	 当前状态【*小地图标记怪物出生地* 所有怪物√】	输入【Q】 切换：
	@ echo.	  ┗  输入【Q】切换：〖牛场+危险怪物×〗　〖混沌避难所+牛+危×〗　【所有怪物√】　〖不显示×〗
) else (
	@ echo.	 当前状态【*小地图标记怪物出生地* ×】		输入【Q】 切换：
	@ echo.	  ┗  输入【Q】切换：〖牛场+危险怪物×〗　〖混沌避难所+牛+危×〗　〖所有怪物×〗　【不显示√】
)
if exist %automap_chest_sign% (
@ echo.	 当前状态【*小地图标记箱子位置* √】		输入【Q2】设置 【关闭箱子显示】  
) else (
@ echo.	 当前状态【*小地图标记箱子位置* ×】		输入【Q2】设置 【开启箱子显示】  
)
if exist %monster_res% (
@ echo.	 当前状态【怪物名后显示「地狱难度的抗性」√】	输入【P】 设置 【关闭抗性显示】  
) else (
@ echo.	 当前状态【怪物名后显示「地狱难度的抗性」×】	输入【P】 设置 【开启抗性显示】  
)
if not exist %map_tips% (
@ echo.	 当前状态【地图名后显示「等级/免疫等提示」√】	输入【L】 设置 【仅显示地图等级】  
) else if not exist %map_lv% (
@ echo.	 当前状态【地图名后显示「仅显示地图等级」√】	输入【L】 设置 【关闭地图信息提示】  
) else (
@ echo.	 当前状态【地图名后显示「不显示任何信息」×】	输入【L】 设置 【开启地图信息提示】  
)
if exist %diff_btn_tip% (
@ echo.	 当前状态【选择游戏难度时显示「快捷键提示」√】	输入【K】 设置 【关闭快捷键提示】  
) else (
@ echo.	 当前状态【选择游戏难度时显示「快捷键提示」×】	输入【K】 设置 【开启快捷键提示】  
)
if exist %inven_top% (
@ echo.	 当前状态【*物品栏上方显示「最大变量快捷查询图标」√】		输入【KU】 设置 【关闭物品栏上方图标】  
) else (
@ echo.	 当前状态【*物品栏上方显示「最大变量快捷查询图标」×】		输入【KU】 设置 【开启物品栏上方图标】  
)
if exist %inven_bottom% (
@ echo.	 当前状态【*物品栏下方显示「符文之语等快捷查询图标」√】	输入【KD】 设置 【关闭物品栏下方图标】  
) else (
@ echo.	 当前状态【*物品栏下方显示「符文之语等快捷查询图标」×】	输入【KD】 设置 【开启物品栏下方图标】  
)

@ echo.	 *统一咒符的图案样式（仅自己生效）
if exist %unify_gc_mahua_sign% (
	@ echo.	  ┣  输入【J1】切换，特大咒符统一为：	〖不统一图案×〗【麻花√】〖鬼脸×〗〖眼睛×〗〖眼睛（暗）×〗
) else if exist %unify_gc_guilian_sign% (
	@ echo.	  ┣  输入【J1】切换，特大咒符统一为：	〖不统一图案×〗〖麻花×〗【鬼脸√】〖眼睛×〗〖眼睛（暗）×〗
) else if exist %unify_gc_eye_sign% (
	@ echo.	  ┣  输入【J1】切换，特大咒符统一为：	〖不统一图案×〗〖麻花×〗〖鬼脸×〗【眼睛√】〖眼睛（暗）×〗
) else if exist %unify_gc_eye_dark_sign% (
	@ echo.	  ┣  输入【J1】切换，特大咒符统一为：	〖不统一图案×〗〖麻花×〗〖鬼脸×〗〖眼睛×〗【眼睛（暗）√】
) else (
	@ echo.	  ┣  输入【J1】切换，特大咒符统一为：	【不统一图案√】〖麻花×〗〖鬼脸×〗〖眼睛×〗〖眼睛（暗）×〗
)
if exist %unify_lc_lingpai_sign% (
	@ echo.	  ┣  输入【J2】切换，大咒符统一为：	〖不统一图案×〗【令牌√】〖牛角×〗〖方塔×〗
) else if exist %unify_lc_niujiao_sign% (
	@ echo.	  ┣  输入【J2】切换，大咒符统一为：	〖不统一图案×〗〖令牌×〗【牛角√】〖方塔×〗
) else if exist %unify_lc_fangta_sign% (
	@ echo.	  ┣  输入【J2】切换，大咒符统一为：	〖不统一图案×〗〖令牌×〗〖牛角×〗【方塔√】
) else (
	@ echo.	  ┣  输入【J2】切换，大咒符统一为：	【不统一图案√】〖令牌×〗〖牛角×〗〖方塔×〗
)
if exist %unify_sc_xuanwo_sign% (
	@ echo.	  ┗  输入【J3】切换，小咒符统一为：	〖不统一图案×〗【漩涡√】〖圆符×〗〖椭圆×〗〖椭圆（暗）×〗
) else if exist %unify_sc_yuanfu_sign% (
	@ echo.	  ┗  输入【J3】切换，小咒符统一为：	〖不统一图案×〗〖漩涡×〗【圆符√】〖椭圆×〗〖椭圆（暗）×〗
) else if exist %unify_sc_tuoyuan_sign% (
	@ echo.	  ┗  输入【J3】切换，小咒符统一为：	〖不统一图案×〗〖漩涡×〗〖圆符×〗【椭圆√】〖椭圆（暗）×〗
) else if exist %unify_sc_tuoyuan_dark_sign% (
	@ echo.	  ┗  输入【J3】切换，小咒符统一为：	〖不统一图案×〗〖漩涡×〗〖圆符×〗〖椭圆×〗【椭圆（暗）√】
) else (
	@ echo.	  ┗  输入【J3】切换，小咒符统一为：	【不统一图案√】〖漩涡×〗〖圆符×〗〖椭圆×〗〖椭圆（暗）×〗
)

@ echo.	   
if not exist %monster_3x% (
@ echo.	 当前状态【※单机游戏 ◆ 怪物超级加倍：苦痛3倍】		输入【A】 设置 【10倍】  
) else if not exist %monster_10x% (
@ echo.	 当前状态【※单机游戏 ◆ 怪物超级加倍：绝望10倍】		输入【A】 设置 【20倍】  
) else if not exist %monster_20x% (
@ echo.	 当前状态【※单机游戏 ◆ 怪物超级加倍：毁灭20倍】		输入【A】 设置 【关闭怪物加倍】  
) else (
@ echo.	 当前状态【※单机游戏 ◆ 怪物超级加倍：不加倍】		输入【A】 设置 【3倍】  
)
if not exist %rune_shop%  (
@ echo.	 当前状态【※单机游戏 ◆ 商店出售宝石和符文√ 】	输入【S】 设置 【关闭商店出售符文】*战网无法卖杂物
) else (
@ echo.	 当前状态【※单机游戏 ◆ 商店出售宝石和符文 × 】	输入【S】 设置 【开启商店出售符文】*战网无法卖杂物
)
if not exist %offline_exskill%  (
@ echo.	 当前状态【※单机游戏 ◆ 技能增强（部分技能有bug）√ 】	输入【D】 设置 【关闭单机技能加强】
) else (
@ echo.	 当前状态【※单机游戏 ◆ 技能增强（部分技能有bug）× 】	输入【D】 设置 【开启单机技能加强】
)
if not exist %exp_mode260%  (
@ echo.	 当前状态【※单机游戏 ◆ 经验强化模式：5倍点数模式 √ 】	输入【F】 设置 【开启单机一刀99模式】 
) else if not exist %exp_mode99%  (
@ echo.	 当前状态【※单机游戏 ◆ 经验强化模式：一刀99级 √ 】	输入【F】 设置 【关闭单机经验加强模式】 
) else (
@ echo.	 当前状态【※单机游戏 ◆ 经验强化模式 × 】		输入【F】 设置 【开启20倍经验5倍点数上限模式 】 
)
if not exist %offline_bigbox%  (
@ echo.	 当前状态【※单机游戏 ◆ 大箱子+佣兵全武装 √ 】	输入【G】 设置 【关闭单机大箱子】（战网冲突）
) else (
@ echo.	 当前状态【※单机游戏 ◆ 大箱子+佣兵全武装 × 】	输入【G】 设置 【开启单机大箱子】（战网冲突）
)
if not exist %offline_drop_up%  (
@ echo.	 当前状态【※单机游戏 ◆ 爆率增加 √ 】			输入【H】 设置 【恢复默认爆率】
) else (
@ echo.	 当前状态【※单机游戏 ◆ 爆率增加 × 】			输入【H】 设置 【全面提高爆率】
)
if exist %itemratio_up%  (
@ echo.	 当前状态【※单机游戏 ◆ 染色率增加 √ 】		输入【H1】 设置 【恢复默认染色率】
) else (
@ echo.	 当前状态【※单机游戏 ◆ 染色率增加 × 】		输入【H1】 设置 【全面提高染色率】
)
if exist %cubemain_ex%  (
@ echo.	 当前状态【※单机游戏 ◆ 单机调试用合成公式 √ 】	输入【H2】 设置 【恢复默认合成公式】
) else (
@ echo.	 当前状态【※单机游戏 ◆ 单机调试用合成公式 × 】	输入【H2】 设置 【增加调试用合成公式】
)

@ echo.
@ echo.	 当前状态【※单机游戏 ◆ 切换共享箱子存档（1-9）】	输入【B】 进入 【共享箱子存档切换】

@ echo.
@ echo.	 猛击 【 M 】 键，【打开游戏存档目录】
@ echo.
@ echo.	 猛击 【 Z 】 键，【返回设置器主页面】Return to Setup Main Menu
@ echo.	 猛击 【 X 】 进入 【《掉落显示屏蔽规则设置界面》 】
@ echo.	 猛击 【 C 】 进入 【《血球颜色与游戏音效选择界面 》】
@ echo.
@ echo.
set  obj=""
set /p obj= 输入数字或字母按回车执行：

if /i "%obj%"=="1" Goto set_ui_zoom_size
if /i "%obj%"=="2" Goto set_font_display_size
if /i "%obj%"=="3" Goto set_sp_effects
if /i "%obj%"=="4" Goto set_magicarrow_effects
if /i "%obj%"=="41" Goto set_lightjavelin_effects
if /i "%obj%"=="42" Goto set_axe_effects
if /i "%obj%"=="43" Goto set_a3mon_effects
if /i "%obj%"=="5" Goto set_nova_effects
if /i "%obj%"=="6" Goto set_torch_fire_effect
if /i "%obj%"=="7" Goto set_BO_effects
if /i "%obj%"=="8" Goto func_convic_sign
if /i "%obj%"=="9" Goto set_show_helmet
if /i "%obj%"=="0" Goto set_ass_charge_up
if /i "%obj%"=="01" Goto set_ass_charge_missiles
if /i "%obj%"=="02" Goto open_ass_charge_missiles_file
if /i "%obj%"=="-" Goto set_sor_es_aura
if /i "%obj%"=="_" Goto set_sor_es_aura
if /i "%obj%"=="=" Goto set_rune_style
if /i "%obj%"=="+" Goto set_rune_style

if /i "%obj%"=="W" Goto set_hp_bar_style
if /i "%obj%"=="E" Goto set_minimap_units_style
if /i "%obj%"=="R" Goto set_color_modifiers
if /i "%obj%"=="T" Goto set_skill_icons_style
if /i "%obj%"=="Y" Goto set_potion_style
if /i "%obj%"=="U" Goto set_potion_sound
if /i "%obj%"=="I" Goto set_mercenary_portrait_location
if /i "%obj%"=="O" Goto set_cain_light
if /i "%obj%"=="P" Goto set_show_monster_resistance
if /i "%obj%"=="Q" Goto set_automap_monster_sign
if /i "%obj%"=="Q2" Goto set_automap_chest_sign

if /i "%obj%"=="L" Goto set_map_tips
if /i "%obj%"=="K" Goto set_diff_btn_tip
if /i "%obj%"=="KU" Goto set_inven_top_icon
if /i "%obj%"=="KD" Goto set_inven_bottom_icon

if /i "%obj%"=="J1" Goto set_unify_gc_style
if /i "%obj%"=="J2" Goto set_unify_lc_style
if /i "%obj%"=="J3" Goto set_unify_sc_style

if /i "%obj%"=="A" Goto set_offline_monster_magnification
if /i "%obj%"=="S" Goto func_rune_shop
if /i "%obj%"=="D" Goto set_offline_exskill
if /i "%obj%"=="F" Goto set_exp_mode
if /i "%obj%"=="G" Goto set_offline_bigbox
REM if /i "%obj%"=="G" Goto set_sharebox_backup
if /i "%obj%"=="H" Goto set_offline_drop_up
if /i "%obj%"=="H1" Goto set_offline_itemratio_up
if /i "%obj%"=="H2" Goto set_cubemain_ex

if /i "%obj%"=="B" Goto GameSelectShareBoxNumberMain

if /i "%obj%"=="M" Goto func_open_savepath

if /i "%obj%"=="Z" Goto SetupMain
if /i "%obj%"=="X" Goto RuleSetup_Main
if /i "%obj%"=="C" Goto RuneSound_Main
if /i "%obj%"=="V" Goto GameStyle_Main

@echo.
@echo	  无效输入，请看清楚【 】框中的内容重新输入！
@echo.
pause
ping -n 1 127.1>nul 
goto GameStyle_Main

:GameSelectShareBoxNumberMain
Cls
@call :get_sharebox_num
@ echo.
@ echo.  Demo MOD 共享箱子切换系统（试作型） ver 20220925
@ echo.  
@ echo.  一般情况下，D2R的存档目录为%%USERPROFILE%%\Saved Games\Diablo II Resurrected之中
@ echo.  如果该目录不存在或者设置器没有读写权限时，该切换系统将会出现错误。
@ echo.  存档中不存在共享箱子文件时设置器会自动生成箱子存档.
@ echo.  
@ echo.  读取存档目录为：%USERPROFILE%\Saved Games\Diablo II Resurrected
@ echo.	 当前使用的是第 %c_save_sharebox_num% 号共享箱子
@ echo.
@ echo.	 【切换箱子存档（1-9）】		输入【1-9】 切换 【共享箱子存档】
@ echo.	 提示：请共享箱子存档名字为[ SharedStashSoftCoreV2.d2i ]，若需手动操作切换或备份请参考。

@ echo.
@ echo.
@ echo.	 猛击 【 M 】 键，【打开游戏存档目录】
@ echo.	 猛击 【 Q 】 键，【退回上一个设置页面】
@ echo.
@ echo.	 猛击 【 Z 】 键，【返回设置器主页面】Return to Setup Main Menu
@ echo.	 猛击 【 X 】 进入 【《掉落显示屏蔽规则设置界面》 】
@ echo.	 猛击 【 C 】 进入 【《血球颜色与游戏音效选择界面 》】
@ echo.
@ echo.
set  obj=""
set /p obj= 输入数字或字母按回车执行：

if /i "%obj%"=="M" Goto func_open_savepath
if /i "%obj%"=="Z" Goto SetupMain
if /i "%obj%"=="X" Goto RuleSetup_Main
if /i "%obj%"=="C" Goto RuneSound_Main
if /i "%obj%"=="V" Goto GameStyle_Main
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
if exist %automap_chest_sign% (
	@ echo.	 设置 【关闭箱子显示】  
	del %d2r_excel%\objects.txt
) else (
	@ echo.	  设置 【开启箱子显示】  
	copy /Y %d2r_excel%\objects.txt.mdk %d2r_excel%\objects.txt
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


:set_a3mon_effects
if exist %light_a3mon_effects% (
	@ echo.	 设置 【关闭鬼娃吹针魔法特效】
	ren %d2r_missiles%\blowdart.json blowdart_mdk.json
) else (
@ echo.	 设置 【开启鬼娃吹针魔法特效】  
	ren %d2r_missiles%\blowdart_mdk.json blowdart.json
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
if not exist %offline_drop_up%  (
@ echo.	 当前状态【※单机游戏 ◆ 爆率增加 √ 】	输入【H】 设置 【关闭爆率增加】
ren %d2r_excel%\TreasureClassEx.txt TreasureClassEx.txt.mdkup
ren %d2r_excel%\TreasureClassEx.txt.mdk TreasureClassEx.txt
) else (
@ echo.	 当前状态【※单机游戏 ◆ 爆率增加 × 】	输入【H】 设置 【开启爆率增加】
ren %d2r_excel%\TreasureClassEx.txt TreasureClassEx.txt.mdk
ren %d2r_excel%\TreasureClassEx.txt.mdkup TreasureClassEx.txt
)

goto GameStyleFunctionEnd

:set_offline_itemratio_up
if exist %itemratio_up%  (
@ echo.	 当前状态【※单机游戏 ◆ 染色率增加 √ 】	输入【H】 设置 【关闭染色率增加】
ren %d2r_excel%\itemratio.txt itemratio.txt.mdk
) else (
@ echo.	 当前状态【※单机游戏 ◆ 染色率增加 × 】	输入【H】 设置 【开启染色率增加】
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
) else (
@ echo.	 当前状态【地图名后显示「不显示任何信息」】设置 【开启地图信息提示】  
ren %d2r_strings%\levels_tips.json levels.json
)
goto GameStyleFunctionEnd


:set_cain_light
if exist %cain_light% (
@ echo.	 当前状态【迪卡凯恩有光环与光照提示 √】	输入【O】 设置 【关闭光照提示】  

ren .\mods\Demo\Demo.mpq\data\hd\character\npc npc_mdk

) else (
@ echo.	 当前状态【迪卡凯恩有光环与光照提示 ×】	输入【O】 设置 【开启光照提示】  

ren .\mods\Demo\Demo.mpq\data\hd\character\npc_mdk npc

)
goto GameStyleFunctionEnd


:set_sor_es_aura
if exist %sor_es_aura% (
@ echo.	 设置 【恢复原版样式】
ren %sor_es_aura% energyshield_mdk.json
) else (
@ echo.	 设置 【增加特效提示】
ren .\mods\Demo\Demo.mpq\data\hd\overlays\sorceress\energyshield_mdk.json energyshield.json
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
			copy /Y .\mods\Demo\Demo.mpq\SharedStashSoftCoreV2_7box.d2i "%d2r_save%\SharedStashSoftCoreV2_%%~i.d2i"
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

goto GameStyleFunctionEnd



:set_offline_fullhire
if not exist %offline_fullhire%  (
	@ echo.	 设置 【关闭全装备佣兵】 
	ren %d2r_excel%\itemtypes.txt itemtypes_bigbox.txt
	ren .\mods\Demo\Demo.mpq\data\hd\global\ui\panel\hireling hireling_full
	ren %layouts_folder%\hirelinginventorypanelhd.json hirelinginventorypanelhd_full.json
	ren %layouts_folder%\controller\hirelinginventorypanelhd.json hirelinginventorypanelhd_full.json
	ren %layouts_folder%\controller\hiremenupanelhd.json hiremenupanelhd_full.json
) else (
	@ echo.	 设置 【开启全装备佣兵】 
	ren %d2r_excel%\itemtypes_bigbox.txt itemtypes.txt
	ren .\mods\Demo\Demo.mpq\data\hd\global\ui\panel\hireling_full hireling
	ren %layouts_folder%\hirelinginventorypanelhd_full.json hirelinginventorypanelhd.json
	ren %layouts_folder%\controller\hirelinginventorypanelhd_full.json hirelinginventorypanelhd.json
	ren %layouts_folder%\controller\hiremenupanelhd_full.json hiremenupanelhd.json
)
goto GameStyleFunctionEnd

:set_offline_bigbox
if not exist %offline_bigbox%  (
	
	@ echo.	 设置 【关闭全装备佣兵】 
	ren %d2r_excel%\itemtypes.txt itemtypes_bigbox.txt
	ren .\mods\Demo\Demo.mpq\data\hd\global\ui\panel\hireling hireling_full
	ren %layouts_folder%\hirelinginventorypanelhd.json hirelinginventorypanelhd_full.json
	del %layouts_folder%\hirelinginventorypanelhd.json
	ren %layouts_folder%\controller\hirelinginventorypanelhd.json hirelinginventorypanelhd_full.json
	ren %layouts_folder%\controller\hiremenupanelhd.json hiremenupanelhd_full.json
	
	@ echo.	 设置 【关闭单机大箱子】 
	
	@ echo.  更换txt文件。
	ren %d2r_excel%\inventory.txt inventory_bigbox.txt
	REM ren %d2r_excel%\itemtypes.txt itemtypes_bigbox.txt
	
	@ echo.  更换mdk mod背包文件。
	ren %d2r_layouts%\mdkplayerinventoryexpansionlayouthd.json mdkplayerinventoryexpansionlayouthd_bigbox.json
	ren %d2r_layouts%\mdkplayerinventoryexpansionlayouthd_normal.json mdkplayerinventoryexpansionlayouthd.json

	@ echo.  更换json文件。
	ren %layouts_folder%\bankexpansionlayouthd.json bankexpansionlayouthd_bigbox.json
	ren %layouts_folder%\bankoriginallayouthd.json bankoriginallayouthd_bigbox.json
	ren %layouts_folder%\horadriccubelayouthd.json horadriccubelayouthd_bigbox.json
	ren %layouts_folder%\playerinventoryexpansionlayouthd.json playerinventoryexpansionlayouthd_bigbox.json
	ren %layouts_folder%\playerinventoryoriginallayouthd.json playerinventoryoriginallayouthd_bigbox.json
	
	ren %layouts_folder%\controller\bankexpansionlayouthd.json bankexpansionlayouthd_bigbox.json
	ren %layouts_folder%\controller\horadriccubelayouthd.json horadriccubelayouthd_bigbox.json
	
	ren %layouts_folder%\controller\playerinventoryexpansionlayouthd.json playerinventoryexpansionlayouthd_bigbox.json
	ren %layouts_folder%\controller\playerinventoryexpansionlayouthd_mdkmod.json playerinventoryexpansionlayouthd.json

	@ echo.  恢复备份的文件。
	ren %layouts_folder%\horadriccubelayouthd_exchange.json horadriccubelayouthd.json
	ren %layouts_folder%\playerinventoryexpansionlayouthd_exchange.json playerinventoryexpansionlayouthd.json
	ren %layouts_folder%\playerinventoryoriginallayouthd_exchange.json playerinventoryoriginallayouthd.json
	
) else (
	@ echo.	 设置 【开启全装备佣兵】 
	ren %d2r_excel%\itemtypes_bigbox.txt itemtypes.txt
	ren .\mods\Demo\Demo.mpq\data\hd\global\ui\panel\hireling_full hireling
	copy /Y %layouts_folder%\hirelinginventorypanelhd_full.json %layouts_folder%\hirelinginventorypanelhd.json
	ren %layouts_folder%\controller\hirelinginventorypanelhd_full.json hirelinginventorypanelhd.json
	ren %layouts_folder%\controller\hiremenupanelhd_full.json hiremenupanelhd.json
	
	@ echo.	 设置 【开启单机大箱子】 
	@ echo.  备份当前文件。
	ren %layouts_folder%\horadriccubelayouthd.json horadriccubelayouthd_exchange.json
	ren %layouts_folder%\playerinventoryexpansionlayouthd.json playerinventoryexpansionlayouthd_exchange.json
	ren %layouts_folder%\playerinventoryoriginallayouthd.json playerinventoryoriginallayouthd_exchange.json
	
	@ echo.  更换txt文件。
	ren %d2r_excel%\inventory_bigbox.txt inventory.txt
	REM ren %d2r_excel%\itemtypes_bigbox.txt itemtypes.txt
	
	@ echo.  更换mdk mod背包文件。
	ren %d2r_layouts%\mdkplayerinventoryexpansionlayouthd.json mdkplayerinventoryexpansionlayouthd_normal.json
	ren %d2r_layouts%\mdkplayerinventoryexpansionlayouthd_bigbox.json mdkplayerinventoryexpansionlayouthd.json
	@ echo.  更换json文件。
	ren %layouts_folder%\bankexpansionlayouthd_bigbox.json bankexpansionlayouthd.json
	ren %layouts_folder%\bankoriginallayouthd_bigbox.json bankoriginallayouthd.json
	ren %layouts_folder%\horadriccubelayouthd_bigbox.json horadriccubelayouthd.json
	ren %layouts_folder%\playerinventoryexpansionlayouthd_bigbox.json playerinventoryexpansionlayouthd.json
	ren %layouts_folder%\playerinventoryoriginallayouthd_bigbox.json playerinventoryoriginallayouthd.json
	
	@ echo.  更换j手柄son文件。
	ren %layouts_folder%\controller\bankexpansionlayouthd_bigbox.json bankexpansionlayouthd.json
	ren %layouts_folder%\controller\horadriccubelayouthd_bigbox.json horadriccubelayouthd.json
	ren %layouts_folder%\controller\playerinventoryexpansionlayouthd.json playerinventoryexpansionlayouthd_mdkmod.json
	ren %layouts_folder%\controller\playerinventoryexpansionlayouthd_bigbox.json playerinventoryexpansionlayouthd.json
)
goto GameStyleFunctionEnd

:set_exp_mode
if not exist %exp_mode260%  (
	@ echo.	 当前状态【80倍260级模式 】	设置 【开启单机一刀99模式】 
	ren %exp_mode_file% experience_260.txt
	ren %charstats_file% charstats_260.txt
	ren %exp_mode99% experience.txt
) else if not exist %exp_mode99%  (
	@ echo.	 当前状态【一刀99级模式 】设置 【关闭单机经验加强模式】 
	ren %exp_mode_file% experience_99.txt
) else (
	@ echo.	 当前状态【单机经验强化模式 × 】设置 【开启80倍经验260级上限模式 】 
	ren %exp_mode260% experience.txt
	ren %charstats_260% charstats.txt
)
goto GameStyleFunctionEnd


:set_offline_exskill
if not exist %offline_exskill%  (
	@ echo.	 设置 【关闭单机技能加强】 
	move /Y %d2r_excel%\skills.txt %d2r_excel%\offline\skills_plus.txt
	move /Y %d2r_excel%\offline\skills_normal.txt  %d2r_excel%\skills.txt
	del %d2r_excel%\missiles.txt
) else (
	@ echo.	 设置 【开启单机技能加强】 
	move /Y %d2r_excel%\skills.txt  %d2r_excel%\offline\skills_normal.txt
	move /Y %d2r_excel%\offline\skills_plus.txt %d2r_excel%\skills.txt
	REM copy /Y %d2r_excel%\offline\skilldesc.txt %d2r_excel%\skilldesc.txt
	copy /Y %d2r_excel%\offline\missiles.txt %d2r_excel%\missiles.txt
)
goto GameStyleFunctionEnd


:set_ass_charge_up

if not exist %ass_charge_default% (
	@ echo.	 设置 【身边显示大聚气图标】
	move .\mods\Demo\Demo.mpq\data\hd\overlays\common\charge_ass_large\progressive*.json .\mods\Demo\Demo.mpq\data\hd\overlays\common\

	del .\mods\Demo\Demo.mpq\data\hd\vfx\textures\graphic\progressive*.*
	copy /Y .\mods\Demo\Demo.mpq\data\hd\vfx\textures\graphic\ass_charge_large\progressive*.* .\mods\Demo\Demo.mpq\data\hd\vfx\textures\graphic\
	xcopy /Y /E .\mods\Demo\Demo.mpq\data\hd\vfx\particles\overlays\common\ass_charge_large\progressive* .\mods\Demo\Demo.mpq\data\hd\vfx\particles\overlays\common\

) else if not exist %ass_charge_large% (
	@ echo.	 设置 【UI显示大聚气图标】
	move .\mods\Demo\Demo.mpq\data\hd\overlays\common\progressive*.json .\mods\Demo\Demo.mpq\data\hd\overlays\common\charge_ass_large\
	move .\mods\Demo\Demo.mpq\data\hd\overlays\common\charge_ass_large_down\progressive*.json .\mods\Demo\Demo.mpq\data\hd\overlays\common\

	del .\mods\Demo\Demo.mpq\data\hd\vfx\textures\graphic\progressive*.*
	copy /Y .\mods\Demo\Demo.mpq\data\hd\vfx\textures\graphic\ass_charge_large\progressive*.* .\mods\Demo\Demo.mpq\data\hd\vfx\textures\graphic\
	xcopy /Y /E .\mods\Demo\Demo.mpq\data\hd\vfx\particles\overlays\common\ass_charge_large\progressive* .\mods\Demo\Demo.mpq\data\hd\vfx\particles\overlays\common\

) else if not exist %ass_charge_large_down% (
	@ echo.	 设置 【脚下显示小聚气图标】
	move .\mods\Demo\Demo.mpq\data\hd\overlays\common\progressive*.json .\mods\Demo\Demo.mpq\data\hd\overlays\common\charge_ass_large_down\
	move .\mods\Demo\Demo.mpq\data\hd\overlays\common\charge_ass_small\progressive*.json .\mods\Demo\Demo.mpq\data\hd\overlays\common\

	del .\mods\Demo\Demo.mpq\data\hd\vfx\textures\graphic\progressive*.*
	copy /Y .\mods\Demo\Demo.mpq\data\hd\vfx\textures\graphic\ass_charge_small\progressive*.* .\mods\Demo\Demo.mpq\data\hd\vfx\textures\graphic\
	xcopy /Y /E .\mods\Demo\Demo.mpq\data\hd\vfx\particles\overlays\common\ass_charge_small\progressive* .\mods\Demo\Demo.mpq\data\hd\vfx\particles\overlays\common\

) else (
	@ echo.	 设置 【不显示聚气等级图标】
	move .\mods\Demo\Demo.mpq\data\hd\overlays\common\progressive*.json .\mods\Demo\Demo.mpq\data\hd\overlays\common\charge_ass_small\
)


goto GameStyleFunctionEnd

:set_ass_charge_missiles
if exist %ass_charge_missiles% (
@ echo.	 设置 【恢复原版样式】
del .\mods\Demo\Demo.mpq\data\hd\missiles\missiles.json
) else (
@ echo.	 设置 【降低聚气特效】
copy /Y .\mods\Demo\Demo.mpq\data\hd\missiles\assassin_charge\missiles.json .\mods\Demo\Demo.mpq\data\hd\missiles
)
goto GameStyleFunctionEnd

:open_ass_charge_missiles_file
notepad .\mods\Demo\Demo.mpq\data\hd\missiles\missiles.json
goto GameStyleFunctionEnd

:set_minimap_units_style
if exist %mini_map_unit% (
@ echo.	 设置 【原版风格】
ren %mini_map_unit% units_mdk.sprite
ren %mini_map_unit_low% units_mdk.lowend.sprite
) else (
@ echo.	 设置 【Demo实心风格】
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
if exist %nova_effects% (
	@ echo.	 设置 【关闭nova特效】
	del %d2r_missiles%\electric_nova.json
	del %d2r_missiles%\lightningbolt_big.json
) else (
	@ echo.	 设置 【开启nova特效】
	copy /Y %d2r_missiles%\nova_effects\electric_nova.json %d2r_missiles%
	copy /Y %d2r_missiles%\nova_effects\lightningbolt_big.json %d2r_missiles%
)
goto GameStyleFunctionEnd


:set_BO_effects

	if not exist %BO_time% (
	@ echo.	 设置 【显示聚气环的特效】
	move /Y mods\Demo\Demo.mpq\data\hd\overlays\common\battlecommand.json mods\Demo\Demo.mpq\data\hd\overlays\common\shield_bo
	move /Y mods\Demo\Demo.mpq\data\hd\overlays\common\battleorders.json mods\Demo\Demo.mpq\data\hd\overlays\common\shield_bo
	move /Y mods\Demo\Demo.mpq\data\hd\overlays\common\shout.json mods\Demo\Demo.mpq\data\hd\overlays\common\shield_bo
	
	move /Y mods\Demo\Demo.mpq\data\hd\overlays\common\charge_bo\battlecommand.json mods\Demo\Demo.mpq\data\hd\overlays\common
	move /Y mods\Demo\Demo.mpq\data\hd\overlays\common\charge_bo\battleorders.json mods\Demo\Demo.mpq\data\hd\overlays\common
	move /Y mods\Demo\Demo.mpq\data\hd\overlays\common\charge_bo\shout.json mods\Demo\Demo.mpq\data\hd\overlays\common
	) else if not exist %BO_time_charge% (
	@ echo.	 设置 【关闭BC/BO的BUFF特效】
	move /Y mods\Demo\Demo.mpq\data\hd\overlays\common\battlecommand.json mods\Demo\Demo.mpq\data\hd\overlays\common\charge_bo
	move /Y mods\Demo\Demo.mpq\data\hd\overlays\common\battleorders.json mods\Demo\Demo.mpq\data\hd\overlays\common\charge_bo
	move /Y mods\Demo\Demo.mpq\data\hd\overlays\common\shout.json mods\Demo\Demo.mpq\data\hd\overlays\common\charge_bo
	) else (
	@ echo.	 设置 【显示巴尔环的特效】 
	move /Y mods\Demo\Demo.mpq\data\hd\overlays\common\shield_bo\battlecommand.json mods\Demo\Demo.mpq\data\hd\overlays\common
	move /Y mods\Demo\Demo.mpq\data\hd\overlays\common\shield_bo\battleorders.json mods\Demo\Demo.mpq\data\hd\overlays\common
	move /Y mods\Demo\Demo.mpq\data\hd\overlays\common\shield_bo\shout.json mods\Demo\Demo.mpq\data\hd\overlays\common
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
	move /Y mods\Demo\Demo.mpq\data\hd\global\ui\items\misc\rune mods\Demo\Demo.mpq\data\hd\global\ui\items\misc\rune_new
	) else (
	ECHO  【改为带编号符文样式】 正在处理中...请稍等...
	move /Y mods\Demo\Demo.mpq\data\hd\global\ui\items\misc\rune_new mods\Demo\Demo.mpq\data\hd\global\ui\items\misc\rune
	)
goto GameStyleFunctionEnd

:set_horadric_cube_style
	@ echo. 检测大箱子
	if not exist %offline_bigbox%  (
		@cls
		@ echo. 请先关闭《单机游戏 * 大箱子》功能再调整此项设置。
		pause
		goto GameStyleFunctionEnd
	)
	
	if exist %horadic% (
	@ echo.   【恢复原版赫拉迪克方盒（请不要在古董上乱涂乱画）】 正在处理中...请稍等...
	ren %d2r_layouts%\horadriccubelayouthd.json horadriccubelayouthd_mc.json
	ren %d2r_layouts%\controller\horadriccubelayouthd.json horadriccubelayouthd_mc.json
	ren %d2r_layouts%\horadriccubelayouthd_mdk.json horadriccubelayouthd.json
	) else (
	@ echo.   【实用主义赫拉迪克方盒（MCMod版）】 正在处理中...请稍等...
	ren %d2r_layouts%\horadriccubelayouthd.json horadriccubelayouthd_mdk.json
	ren %d2r_layouts%\horadriccubelayouthd_mc.json horadriccubelayouthd.json
	ren %d2r_layouts%\controller\horadriccubelayouthd_mc.json horadriccubelayouthd.json
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
	if not exist %color_word% (
	@ echo.	 设置 【彩色属性词条】  正在处理中...请稍等...
	del %string_folder%item-modifiers.json
	copy /Y %string_folder%json_db\item-modifiers_color.json %string_folder%item-modifiers.json
	del %string_folder%json_db\*.mcsign
	@ECHO.  "x">%color_word%
	) else (
	@ echo.	 设置 【原版统一色词条】  正在处理中...请稍等...
	del %string_folder%item-modifiers.json
	copy /Y %string_folder%json_db\item-modifiers_normal.json %string_folder%item-modifiers.json
	del %string_folder%json_db\*.mcsign
	)
goto GameStyleFunctionEnd

:set_skill_icons_style
	@ echo.  
	if exist %color_spell% (
	@ echo.   【彩色技能图标】  正在处理中...请稍等...
	ren mods\Demo\Demo.mpq\data\hd\global\ui\color_spells spells
	) else (
	@ echo.   【原版风格技能图标】 正在处理中...请稍等...
	ren mods\Demo\Demo.mpq\data\hd\global\ui\spells color_spells
	)
goto GameStyleFunctionEnd

:set_potion_style
	@ echo.  
	if exist %potion_style% (
	@ echo.	 【恢复原版超大红蓝药瓶】  正在处理中...请稍等...
	move /Y mods\Demo\Demo.mpq\data\hd\global\ui\items\misc\potion mods\Demo\Demo.mpq\data\hd\global\ui\items\misc\potion_mdk
	) else (
	@ echo.	 【设置成大圆瓶的超大红蓝瓶】 正在处理中...请稍等...
	move /Y mods\Demo\Demo.mpq\data\hd\global\ui\items\misc\potion_mdk mods\Demo\Demo.mpq\data\hd\global\ui\items\misc\potion
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
	if not exist %monster_3x% (
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
	@ echo.	 设置 【3倍】 
	ren %monster_level% levels_1.txt
	ren %monster_3x% levels.txt
	)
Goto GameStyleFunctionEnd


:func_rune_shop
	if not exist %rune_shop%  (
	@ echo.	设置 【关闭商店出售符文】 
	ren %misc_file% misc_shop.txt
	ren %rune_normal% misc.txt
	) else (
	@ echo.	设置 【开启商店出售符文】 
	ren %misc_file% misc_normal.txt
	ren %rune_shop% misc.txt
	)
Goto GameStyleFunctionEnd

:GameStyleFunctionEnd
	ping -n 1 127.1>nul
	@ echo.
	@ECHO 操作完成！即将返回GameStyle_Main...
	@ echo.
	if exist mdk_mod.debug ( pause )
goto GameStyle_Main

REM===游戏风格设置 END===

:FunctionEnd
	ping -n 1 127.1>nul
	@ echo.
	@ECHO 操作完成！即将返回...
	@ echo.
	if exist mdk_mod.debug ( pause )
	if "%CurrentMenu%"=="rule" goto RuleSetup_Main
goto SetupMain


:exit
	@ echo.
exit


::Color 红色Red 黑色Black 绿色Green 黄色Yellow 蓝色Blue 洋红Magenta 青色Cyan 白色White
:cred
powershell -Command Write-Host "%*" -foreground "Red"
goto :eof

:cgreen
powershell -Command Write-Host "%*" -foreground "Green"
goto :eof