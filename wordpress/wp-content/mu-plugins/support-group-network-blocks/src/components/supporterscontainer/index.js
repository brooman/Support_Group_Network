const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.editor;

registerBlockType( 'cgb/supporterscontainer', {

	title: __( 'Supporters Container' ),
	icon: 'shield',
	category: 'sgn-blocks',

	edit: function( props ) {

		return (
			<div className="supporters">
				<InnerBlocks
					allowedBlocks={ [ 'cgb/supporter' ] }
				/>
			</div>
		);
	},

	save: function( ) {
		return null;
	},
} );
