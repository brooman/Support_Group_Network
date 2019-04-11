<?php
/**
 * Plugin Name: Custom Gutenberg Blocks
 * Description: A plugin for SGN with Custom Gutenberg blocks.
 * Domain Path: /languages
 * Author: Benjamin Fransson
 * Version: 1.0.0
 * License: MIT
 * License URI: https://opensource.org/licenses/MIT
 */

//  Exit if accessed directly.
defined('ABSPATH') || exit;

// Only load if Gutenberg is available.
if ( ! function_exists( 'register_block_type' ) ) {
	return;
}


function customgutenbergblocks_templates( $args, $post_type ) {

  if ( $post_type == 'post' ) {
    $args['template_lock'] = true;
    $args['template'] = [
      [
        'core/image', [
          'align' => 'left',
        ]
      ],
      [
        'core/paragraph', [
          'placeholder' => 'The only thing you can add',
        ]
      ]
    ];
  }

  return $args;

}
//add_filter( 'register_post_type_args', 'customgutenbergblocks_templates', 20, 2 );

/**
 * Enqueue block editor only JavaScript and CSS
 */
function customgutenbergblocks_editor_scripts()
{

    // Make paths variables so we don't write em twice ;)
    $blockPath = '/assets/js/editor.blocks.js';
    $editorStylePath = '/assets/css/blocks.editor.css';

    // Enqueue the bundled block JS file
    wp_enqueue_script(
        'customgutenbergblocks-blocks-js',
        plugins_url( $blockPath, __FILE__ ),
        [ 'wp-i18n', 'wp-element', 'wp-blocks', 'wp-components', 'wp-editor' ],
        filemtime( plugin_dir_path(__FILE__) . $blockPath )
    );

    // Enqueue optional editor only styles
    wp_enqueue_style(
        'customgutenbergblocks-blocks-editor-css',
        plugins_url( $editorStylePath, __FILE__),
        [],
        filemtime( plugin_dir_path( __FILE__ ) . $editorStylePath )
    );

}

// Hook scripts function into block editor hook
add_action( 'enqueue_block_editor_assets', 'customgutenbergblocks_editor_scripts' );


/**
 * Enqueue front end and editor JavaScript and CSS
 */
function customgutenbergblocks_scripts()
{
    $blockPath = '/assets/js/frontend.blocks.js';
    // Make paths variables so we don't write em twice ;)
    $stylePath = '/assets/css/blocks.style.css';

    // Enqueue the bundled block JS file
    wp_enqueue_script(
        'customgutenbergblocks-blocks-frontend-js',
        plugins_url( $blockPath, __FILE__ ),
        [ 'wp-i18n', 'wp-element', 'wp-blocks', 'wp-components', 'wp-api', 'wp-editor' ],
        filemtime( plugin_dir_path(__FILE__) . $blockPath )
    );

    // Enqueue frontend and editor block styles
    wp_enqueue_style(
        'customgutenbergblocks-blocks-css',
        plugins_url($stylePath, __FILE__),
        null,
        filemtime(plugin_dir_path(__FILE__) . $stylePath )
    );

}

// Hook scripts function into block editor hook
add_action('enqueue_block_assets', 'customgutenbergblocks_scripts');
