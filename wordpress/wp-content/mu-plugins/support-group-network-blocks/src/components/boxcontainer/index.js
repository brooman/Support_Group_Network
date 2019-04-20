const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.editor;

registerBlockType( 'cgb/boxcontainer', {
	title: __( 'Textbox Container' ),
	icon: 'shield',
	category: 'sgn-blocks',

	edit: function( props ) {
		const { className } = props;

		return (
			<div className={ className }>
				<InnerBlocks
					allowedBlocks={ [ 'cgb/textbox' ] }
				/>
			</div>
		);
	},

	save: function( ) {
		return (
			<div>
				<InnerBlocks.Content />
			</div>
		);
	},
} );
