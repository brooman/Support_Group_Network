<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function multi_block_cgb_block_assets() {

	wp_enqueue_style(
		'multi_block-cgb-style-css',
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ),
		array( 'wp-editor' )

	);
}

add_action( 'enqueue_block_assets', 'multi_block_cgb_block_assets' );

function multi_block_cgb_editor_assets() {

	wp_enqueue_script(
		'multi_block-cgb-block-js',
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' )

	);

	wp_enqueue_style(
		'multi_block-cgb-block-editor-css',
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ),
		array( 'wp-edit-blocks' )

	);
}

add_action( 'enqueue_block_editor_assets', 'multi_block_cgb_editor_assets' );
