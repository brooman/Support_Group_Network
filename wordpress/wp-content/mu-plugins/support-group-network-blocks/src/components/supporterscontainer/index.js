const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.editor;

registerBlockType( 'cgb/supporterscontainer', {

	title: __( 'Supporters Container' ),
	icon: 'shield',
	category: 'sgn-blocks',

	edit: function( props ) {
		const {
			className,
		} = props;

		return (
			<div className={ className }>
				<InnerBlocks
					allowedBlocks={ [ 'cgb/supporter' ] }
				/>
			</div>
		);
	},

	save: function( props ) {
		return (
			<div>
				<InnerBlocks.Content />
			</div>
		);
	},
} );
