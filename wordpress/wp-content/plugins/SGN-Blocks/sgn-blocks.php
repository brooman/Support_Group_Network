<?php
/**
 * Plugin Name: Support Group Network Gutenberg Blocks
 * Description: A plugin for the SGN Blocks used in the editor (built with Guty Blocks 2)
 * Version: 1.0.0
 * Author: Benjamin Fransson
 * Text Domain: sgnblocks
 * Domain Path: /languages
 */
// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
 
/**
 * Enqueue block JavaScript and CSS for the editor
 */
function sgnblocks_plugin_editor_scripts() {
 
    // Enqueue block editor JS
    wp_register_script(
        'sgnblocks/editor-scripts',
        plugins_url( '/assets/dist/build.js', __FILE__ ),
        [ 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-i18n' ],
        filemtime( plugin_dir_path( __FILE__ ) . '/assets/dist/build.js' ) 
    );
 
    // Enqueue block editor styles
    wp_register_style(
        'sgnblocks/stylesheets',
        plugins_url( 'assets/dist/style.css', __FILE__ ),
        [ 'wp-edit-blocks' ],
        filemtime( plugin_dir_path( __FILE__ ) . 'assets/dist/style.css' ) 
    );

    register_block_type('sgnblocks/block-library', array(
        'editor_script' => 'sgnblocks/editor-scripts',
        'style' => 'sgnblocks/stylesheets'   
    ));
 
}

// Hook the enqueue functions into the editor
add_action( 'init', 'sgnblocks_plugin_editor_scripts' );

/**
 * Enqueue view scripts
 */
function sgnblocks_plugin_view_scripts() {
    if ( is_admin() ) {
        return;
    }

    wp_enqueue_script(
		'sgnblocks/view-scripts',
		plugins_url( '/assets/dist/build.view.js', __FILE__ ),
        array( 'wp-blocks', 'wp-element', 'react', 'react-dom' )
    );
}

add_action( 'enqueue_block_assets', 'sgnblocks_plugin_view_scripts' );