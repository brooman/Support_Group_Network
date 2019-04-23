const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { } = wp.editor;

registerBlockType( 'cgb/hero', {
	title: __( 'Hero' ),
	icon: 'shield',
	category: 'sgn-blocks',

	edit: function( props ) {
		const { className } = props;

		return (
			null
		);
	},

	save: function( props ) {
		return (
			null
		);
	},
} );
