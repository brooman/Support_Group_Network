import { InnerBlocks } from '@wordpress/editor';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType( 'cgb/masonrycard', {

	title: __( 'MasonryCard' ),
	icon: 'shield',
	category: 'sgn-blocks',

	edit: function( props ) {
		const { children, title, content } = props;

		return (
			<div className="card">
				<div className="masonry">
					<InnerBlocks />
				</div>
				<h3><span className="text-lg lightdark">{ title }</span></h3>
				<div className="card-content">
					<p className="text">{ content }</p>
				</div>
				<a className="link" href="">Learn more...</a>
			</div>
		);
	},

	save: function( ) {
		return null;
	},
} );
