import { InnerBlocks } from '@wordpress/editor';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

const getLayout = ( count ) => {
	switch ( count ) {
		case 1:
			return [ { isLarge: true } ];
		case 2:
			return [ { isWide: true }, { isLarge: true } ];
		case 3:
			return [ {}, {}, { isLarge: true } ];
		case 4:
			return [ { isWide: true }, {}, {}, { isWide: true } ];
		case 5:
			return [ {}, {}, { isWide: true }, {}, {} ];
		default:
			return [ {}, {}, {}, {}, {}, {} ];
	}
};

registerBlockType( 'cgb/boxcontainer', {

	title: __( 'Textbox Container' ),
	icon: 'shield',
	category: 'common',

	edit: function( props ) {
		const { className } = props;

		return (
			<div className={ className }>
				<InnerBlocks
					allowedBlocks={ [ 'sgnblocks/textblock' ] }
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
