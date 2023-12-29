import { RACore } from "./RACore";
import { Optional } from 'utility-types';

export type RAConfig = {
  [key:string]:string|boolean|number|null,
};

export type RAConfigSimple = {
  mute:boolean;
  vsync:true|false|'adaptive';
  fps:boolean;
  menu:boolean;
}

const RA_DEFAULT_CONFIG:RAConfig = {
  "menu_driver": "rgui",
  "menu_rgui_full_width_layout": true,
  "menu_rgui_shadows": true,
  "rgui_aspect_ratio": 0,
  "rgui_aspect_ratio_lock": 0,
  "rgui_background_filler_thickness_enable": true,
  "rgui_border_filler_enable": true,
  "rgui_border_filler_thickness_enable": true,
  "rgui_browser_directory": "~/retroarch/userdata/content",
  "rgui_config_directory": "~/retroarch/userdata/config",
  "rgui_extended_ascii": false,
  "rgui_inline_thumbnails": false,
  "rgui_internal_upscale_level": 0,
  "rgui_menu_color_theme": 26,
  "rgui_menu_theme_preset": "",
  "rgui_particle_effect": 1,
  "rgui_particle_effect_speed": 3.999999,
  "rgui_show_start_screen": false,
  "rgui_swap_thumbnails": false,
  "rgui_switch_icons": true,
  "rgui_thumbnail_delay": 0,
  "rgui_thumbnail_downscaler": 0,
  
  "fps_update_interval": 32,

  "notification_show_autoconfig": false,
  "notification_show_cheats_applied": false,
  "notification_show_config_override_load": false,
  "notification_show_fast_forward": false,
  "notification_show_refresh_rate": false,
  "notification_show_remap_load": false,
  "notification_show_screenshot": false,
  "notification_show_screenshot_duration": 0,
  "notification_show_screenshot_flash": 0,
  "notification_show_set_initial_disk": false,

  "input_menu_toggle": "f1",
  "input_menu_toggle_axis": null,
  "input_menu_toggle_btn": null,
  "input_menu_toggle_gamepad_combo": 0,
  "input_menu_toggle_mbtn": null,
  "input_reset": null,
  "input_reset_axis": null,
  "input_reset_btn": null,
  "input_reset_mbtn": null,
  "input_rewind": null,
  "input_rewind_axis": null,
  "input_rewind_btn": null,
  "input_rewind_mbtn": null,
  "input_runahead_toggle": null,
  "input_runahead_toggle_axis": null,
  "input_runahead_toggle_btn": null,
  "input_runahead_toggle_mbtn": null,
  "input_save_state": null,
  "input_save_state_axis": null,
  "input_save_state_btn": null,
  "input_save_state_mbtn": null,
  "input_screenshot": null,
  "input_screenshot_axis": null,
  "input_screenshot_btn": null,
  "input_screenshot_mbtn": null,
  "input_send_debug_info": null,
  "input_send_debug_info_axis": null,
  "input_send_debug_info_btn": null,
  "input_send_debug_info_mbtn": null,
  "input_load_state": null,
  "input_load_state_axis": null,
  "input_load_state_btn": null,
  "input_load_state_mbtn": null,
  "input_movie_record_toggle": null,
  "input_movie_record_toggle_axis": null,
  "input_movie_record_toggle_btn": null,
  "input_movie_record_toggle_mbtn": null,
  "input_shader_next": null,
  "input_shader_next_axis": null,
  "input_shader_next_btn": null,
  "input_shader_next_mbtn": null,
  "input_shader_prev": null,
  "input_shader_prev_axis": null,
  "input_shader_prev_btn": null,
  "input_shader_prev_mbtn": null,
  "input_state_slot_decrease": null,
  "input_state_slot_decrease_axis": null,
  "input_state_slot_decrease_btn": null,
  "input_state_slot_decrease_mbtn": null,
  "input_state_slot_increase": null,
  "input_state_slot_increase_axis": null,
  "input_state_slot_increase_btn": null,
  "input_state_slot_increase_mbtn": null,
  "input_streaming_toggle": null,
  "input_streaming_toggle_axis": null,
  "input_streaming_toggle_btn": null,
  "input_streaming_toggle_mbtn": null,
  "input_toggle_fast_forward": null,
  "input_toggle_fast_forward_axis": null,
  "input_toggle_fast_forward_btn": null,
  "input_toggle_fast_forward_mbtn": null,
  "input_toggle_fullscreen": null,
  "input_toggle_fullscreen_axis": null,
  "input_toggle_fullscreen_btn": null,
  "input_toggle_fullscreen_mbtn": null,
  "input_toggle_slowmotion": null,
  "input_toggle_slowmotion_axis": null,
  "input_toggle_slowmotion_btn": null,
  "input_toggle_slowmotion_mbtn": null,
  "input_audio_mute": null,
  "input_audio_mute_axis": null,
  "input_audio_mute_btn": null,
  "input_audio_mute_mbtn": null,
  "input_desktop_menu_toggle": null,
  "input_desktop_menu_toggle_axis": null,
  "input_desktop_menu_toggle_btn": null,
  "input_desktop_menu_toggle_mbtn": null,
  "input_exit_emulator": null,
  "input_fps_toggle": null,
  "input_game_focus_toggle": null,
  "input_grab_mouse_toggle": null,
  "input_hold_fast_forward": null,
  "input_hold_fast_forward_axis": null,
  "input_hold_fast_forward_btn": null,
  "input_hold_fast_forward_mbtn": null,
  "input_hold_slowmotion": null,
  "input_hold_slowmotion_axis": null,
  "input_hold_slowmotion_btn": null,
  "input_hold_slowmotion_mbtn": null,
  "input_frame_advance": null,
  "input_frame_advance_axis": null,
  "input_frame_advance_btn": null,
  "input_frame_advance_mbtn": null,
  "input_osk_toggle": null,
  "input_osk_toggle_axis": null,
  "input_osk_toggle_btn": null,
  "input_osk_toggle_mbtn": null,
  "input_volume_down": null,
  "input_volume_down_axis": null,
  "input_volume_down_btn": null,
  "input_volume_down_mbtn": null,
  "input_volume_up": null,
  "input_volume_up_axis": null,
  "input_volume_up_btn": null,
  "input_volume_up_mbtn": null,
  "input_pause_toggle": null,
  "input_pause_toggle_axis": null,
  "input_pause_toggle_btn": null,
  "input_pause_toggle_mbtn": null,
  "input_cheat_index_minus": null,
  "input_cheat_index_minus_axis": null,
  "input_cheat_index_minus_btn": null,
  "input_cheat_index_minus_mbtn": null,
  "input_cheat_index_plus": null,
  "input_cheat_index_plus_axis": null,
  "input_cheat_index_plus_btn": null,
  "input_cheat_index_plus_mbtn": null,
  "input_cheat_toggle": null,
  "input_cheat_toggle_axis": null,
  "input_cheat_toggle_btn": null,
  "input_cheat_toggle_mbtn": null,
  "input_close_content": null,
  "input_close_content_axis": null,
  "input_close_content_btn": null,
  "input_close_content_mbtn": null,
  "input_player1_a": "x",
  "input_player1_a_axis": null,
  "input_player1_a_btn": null,
  "input_player1_a_mbtn": null,
  "input_player1_analog_dpad_mode": 0,
  "input_player1_b": "z",
  "input_player1_b_axis": null,
  "input_player1_b_btn": null,
  "input_player1_b_mbtn": null,
  "input_player1_down": "down",
  "input_player1_down_axis": null,
  "input_player1_down_btn": null,
  "input_player1_down_mbtn": null,
  "input_player1_gun_aux_a": null,
  "input_player1_gun_aux_a_axis": null,
  "input_player1_gun_aux_a_btn": null,
  "input_player1_gun_aux_a_mbtn": null,
  "input_player1_gun_aux_b": null,
  "input_player1_gun_aux_b_axis": null,
  "input_player1_gun_aux_b_btn": null,
  "input_player1_gun_aux_b_mbtn": null,
  "input_player1_gun_aux_c": null,
  "input_player1_gun_aux_c_axis": null,
  "input_player1_gun_aux_c_btn": null,
  "input_player1_gun_aux_c_mbtn": null,
  "input_player1_gun_dpad_down": null,
  "input_player1_gun_dpad_down_axis": null,
  "input_player1_gun_dpad_down_btn": null,
  "input_player1_gun_dpad_down_mbtn": null,
  "input_player1_gun_dpad_left": null,
  "input_player1_gun_dpad_left_axis": null,
  "input_player1_gun_dpad_left_btn": null,
  "input_player1_gun_dpad_left_mbtn": null,
  "input_player1_gun_dpad_right": null,
  "input_player1_gun_dpad_right_axis": null,
  "input_player1_gun_dpad_right_btn": null,
  "input_player1_gun_dpad_right_mbtn": null,
  "input_player1_gun_dpad_up": null,
  "input_player1_gun_dpad_up_axis": null,
  "input_player1_gun_dpad_up_btn": null,
  "input_player1_gun_dpad_up_mbtn": null,
  "input_player1_gun_offscreen_shot": null,
  "input_player1_gun_offscreen_shot_axis": null,
  "input_player1_gun_offscreen_shot_btn": null,
  "input_player1_gun_offscreen_shot_mbtn": null,
  "input_player1_gun_select": null,
  "input_player1_gun_select_axis": null,
  "input_player1_gun_select_btn": null,
  "input_player1_gun_select_mbtn": null,
  "input_player1_gun_start": null,
  "input_player1_gun_start_axis": null,
  "input_player1_gun_start_btn": null,
  "input_player1_gun_start_mbtn": null,
  "input_player1_gun_trigger": null,
  "input_player1_gun_trigger_axis": null,
  "input_player1_gun_trigger_btn": null,
  "input_player1_gun_trigger_mbtn": null,
  "input_player1_joypad_index": 0,
  "input_player1_l": "q",
  "input_player1_l2": null,
  "input_player1_l2_axis": null,
  "input_player1_l2_btn": null,
  "input_player1_l2_mbtn": null,
  "input_player1_l3": null,
  "input_player1_l3_axis": null,
  "input_player1_l3_btn": null,
  "input_player1_l3_mbtn": null,
  "input_player1_l_axis": null,
  "input_player1_l_btn": null,
  "input_player1_l_mbtn": null,
  "input_player1_l_x_minus": null,
  "input_player1_l_x_minus_axis": null,
  "input_player1_l_x_minus_btn": null,
  "input_player1_l_x_minus_mbtn": null,
  "input_player1_l_x_plus": null,
  "input_player1_l_x_plus_axis": null,
  "input_player1_l_x_plus_btn": null,
  "input_player1_l_x_plus_mbtn": null,
  "input_player1_l_y_minus": null,
  "input_player1_l_y_minus_axis": null,
  "input_player1_l_y_minus_btn": null,
  "input_player1_l_y_minus_mbtn": null,
  "input_player1_l_y_plus": null,
  "input_player1_l_y_plus_axis": null,
  "input_player1_l_y_plus_btn": null,
  "input_player1_l_y_plus_mbtn": null,
  "input_player1_left": "left",
  "input_player1_left_axis": null,
  "input_player1_left_btn": null,
  "input_player1_left_mbtn": null,
  "input_player1_mouse_index": 0,
  "input_player1_r": "w",
  "input_player1_r2": null,
  "input_player1_r2_axis": null,
  "input_player1_r2_btn": null,
  "input_player1_r2_mbtn": null,
  "input_player1_r3": null,
  "input_player1_r3_axis": null,
  "input_player1_r3_btn": null,
  "input_player1_r3_mbtn": null,
  "input_player1_r_axis": null,
  "input_player1_r_btn": null,
  "input_player1_r_mbtn": null,
  "input_player1_r_x_minus": null,
  "input_player1_r_x_minus_axis": null,
  "input_player1_r_x_minus_btn": null,
  "input_player1_r_x_minus_mbtn": null,
  "input_player1_r_x_plus": null,
  "input_player1_r_x_plus_axis": null,
  "input_player1_r_x_plus_btn": null,
  "input_player1_r_x_plus_mbtn": null,
  "input_player1_r_y_minus": null,
  "input_player1_r_y_minus_axis": null,
  "input_player1_r_y_minus_btn": null,
  "input_player1_r_y_minus_mbtn": null,
  "input_player1_r_y_plus": null,
  "input_player1_r_y_plus_axis": null,
  "input_player1_r_y_plus_btn": null,
  "input_player1_r_y_plus_mbtn": null,
  "input_player1_right": "right",
  "input_player1_right_axis": null,
  "input_player1_right_btn": null,
  "input_player1_right_mbtn": null,
  "input_player1_select": "rshift",
  "input_player1_select_axis": null,
  "input_player1_select_btn": null,
  "input_player1_select_mbtn": null,
  "input_player1_start": "enter",
  "input_player1_start_axis": null,
  "input_player1_start_btn": null,
  "input_player1_start_mbtn": null,
  "input_player1_turbo": null,
  "input_player1_turbo_axis": null,
  "input_player1_turbo_btn": null,
  "input_player1_turbo_mbtn": null,
  "input_player1_up": "up",
  "input_player1_up_axis": null,
  "input_player1_up_btn": null,
  "input_player1_up_mbtn": null,
  "input_player1_x": "s",
  "input_player1_x_axis": null,
  "input_player1_x_btn": null,
  "input_player1_x_mbtn": null,
  "input_player1_y": "a",
  "input_player1_y_axis": null,
  "input_player1_y_btn": null,
  "input_player1_y_mbtn": null
}

const RA_DEFAULT_CONFIG_SIMPLE:RAConfigSimple = {
  mute: false,
  vsync: 'adaptive',
  fps: false,
  menu: false
};

export const RAConfigGet = (params:Optional<RAConfigSimple> & {
  core:RACore
}):RAConfig => {
  const simple = {
    ...RA_DEFAULT_CONFIG_SIMPLE,
    ...params
  };

  let config:RAConfig = {
    ...RA_DEFAULT_CONFIG,
    audio_enable: !simple.mute,
    video_vsync: simple.vsync === true,
    vrr_runloop_enable: simple.vsync === 'adaptive',
    fps_show: simple.fps,
  };

  // Menu's enabled?
  let v = simple.menu;
  config.settings_show_accessibility = v;
  config.settings_show_achievements = v;
  config.settings_show_ai_service = v;
  config.settings_show_audio = v;
  config.settings_show_configuration = v;
  config.settings_show_core = v;
  config.settings_show_directory = v;
  config.settings_show_drivers = v;
  config.settings_show_file_browser = v;
  config.settings_show_frame_throttle = v;
  config.settings_show_input = v;
  config.settings_show_latency = v;
  config.settings_show_logging = v;
  config.settings_show_network = v;
  config.settings_show_onscreen_display = v;
  config.settings_show_playlists = v;
  config.settings_show_power_management = v;
  config.settings_show_recording = v;
  config.settings_show_saving = v;
  config.settings_show_user = v;
  config.settings_show_user_interface = v;
  config.settings_show_video = v;
  config.quick_menu_show_add_to_favorites = v;
  config.quick_menu_show_cheats = v;
  config.quick_menu_show_close_content = v;
  config.quick_menu_show_controls = v;
  config.quick_menu_show_information = v;
  config.quick_menu_show_options = v;
  config.quick_menu_show_recording = v;
  config.quick_menu_show_reset_core_association = v;
  config.quick_menu_show_restart_content = v;
  config.quick_menu_show_resume_content = v;
  config.quick_menu_show_save_content_dir_overrides = v;
  config.quick_menu_show_save_core_overrides = v;
  config.quick_menu_show_save_game_overrides = v;
  config.quick_menu_show_save_load_state = v;
  config.quick_menu_show_set_core_association = v;
  config.quick_menu_show_shaders = v;
  config.quick_menu_show_start_recording = v;
  config.quick_menu_show_start_streaming = v;
  config.quick_menu_show_streaming = v;
  config.quick_menu_show_take_screenshot = v;
  config.quick_menu_show_undo_save_load_state = v;
  config.menu_show_advanced_settings = v;
  config.menu_show_configurations = v;
  config.menu_show_core_updater = v;
  config.menu_show_help = v;
  config.menu_show_information = v;
  config.menu_show_latency = v;
  config.menu_show_legacy_thumbnail_updater = v;
  config.menu_show_load_content = v;
  config.menu_show_load_content_animation = v;
  config.menu_show_load_core = v;
  config.menu_show_online_updater = v;
  config.menu_show_overlays = v;
  config.menu_show_quit_retroarch = v;
  config.menu_show_reboot = v;
  config.menu_show_restart_retroarch = v;
  config.menu_show_rewind = v;
  config.menu_show_shutdown = v;
  config.menu_show_sublabels = v;
  config.content_show_add = v;
  config.content_show_add_entry = v;
  config.content_show_explore = v;
  config.content_show_favorites = v;
  config.content_show_history = v;
  config.content_show_music = v;
  config.content_show_playlists = v;
  config.content_show_settings = v;

  return config;
}

export const RAConfigToFile = (config:RAConfig):string => {
  let configStr = "";
  for (let key in config) {
    let value = config[key];
    if(value === null) {
      value = "null"
    }
    configStr += `${key} = "${value.toString()}"\n`;
  }
  return configStr;
}