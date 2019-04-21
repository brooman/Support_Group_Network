import { InnerBlocks } from '@wordpress/editor';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType( 'cgb/supporterscontainer', {

	title: __( 'Supporters Container' ),
	icon: 'shield',
	category: 'sgn-blocks',

	edit: function( props ) {
		const { images } = props;

		return (
			<div className="supporters">
				{ images.map( ( item, index ) => {
					return <img src={ item.src } alt={ item.name } key={ index } />;
				} ) }
			</div>
		);
	},

	save: function( ) {
		return null;
	},
} );
