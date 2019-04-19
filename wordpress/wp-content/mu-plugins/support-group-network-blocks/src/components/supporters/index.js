import { InnerBlocks } from '@wordpress/editor';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType( 'cgb/block-supporters', {

	title: __( 'Supporters' ),
	icon: 'shield',
	category: 'common',

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
