<?php
/**
 * Theme for the Postlight Headless WordPress Starter Kit.
 *
 * Read more about this project at https://postlight.com/trackchanges/introducing-postlights-wordpress-react-starter-kit.
 *
 * @package  Postlight_Headless_WP
 */

// Frontend origin.
require_once 'inc/frontend-origin.php';

// ACF commands.
require_once 'inc/class-acf-commands.php';

// Logging functions.
require_once 'inc/log.php';

// CORS handling.
require_once 'inc/cors.php';

// Admin modifications.
require_once 'inc/admin.php';

// Add Menus.
require_once 'inc/menus.php';

// Add Headless Settings area.
require_once 'inc/acf-options.php';

// Add GraphQL resolvers.
require_once 'inc/graphql/resolvers.php';

function support_group_network_color_palette() {
	add_theme_support(
		'editor-color-palette', array(
			array(
				'name'  => esc_html__( 'Yellow', '@@textdomain' ),
				'slug' => 'yellow',
				'color' => '#FFFB56',
			),
			array(
				'name'  => esc_html__( 'Red', '@@textdomain' ),
				'slug' => 'red',
				'color' => '#FF6356',
			),
			array(
				'name'  => esc_html__( 'Green', '@@textdomain' ),
				'slug' => 'green',
				'color' => '#69D88A',
			),
			array(
				'name'  => esc_html__( 'Blue', '@@textdomain' ),
				'slug' => 'blue',
				'color' => '#57DEF4',
			),
			array(
				'name'  => esc_html__( 'Dark', '@@textdomain' ),
				'slug' => 'dark',
				'color' => '#363537',
			)
		)
	);
}
add_action( 'after_setup_theme', 'support_group_network_color_palette' );
// -- Disable Custom Colors
add_theme_support( 'disable-custom-colors' );


function sgn_allowed_block_types( $allowed_blocks ) {
	
	return array(
		'cgb/boxcontainer',
		'cgb/container',
		'cgb/supporterscontainer',
		'cgb/textbox',
		'cgb/supporter',
		'cgb/card',
		'cgb/list',
		'cgb/listitem',
		'cgb/masonrycard',
	);
	
}
add_filter( 'allowed_block_types', 'sgn_allowed_block_types' );

function sgn_block_category( $categories, $post ) {
	return array_merge(
		$categories,
		array(
			array(
				'slug' => 'sgn-blocks',
				'title' => __( 'SGN Blocks', 'sgn-blocks' ),
			),
		)
	);
}
add_filter( 'block_categories', 'sgn_block_category', 10, 2);
