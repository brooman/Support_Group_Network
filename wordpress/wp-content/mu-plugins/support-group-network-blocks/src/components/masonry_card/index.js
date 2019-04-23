import { InnerBlocks } from '@wordpress/editor';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType( 'cgb/masonrycard', {

	title: __( 'MasonryCard' ),
	icon: 'shield',
	category: 'sgn-blocks',

	attributes: {
		title: {
			type: 'string',
			source: 'text',
			selector: 'h3 > span',
		},
		content: {
			type: 'string',
			source: 'text',
			selector: '.text',
		},
		link: {
			type: 'string',
			source: 'attribute',
			attribute: 'href',
			selector: 'a.link',
		},
	},

	edit: function( props ) {
		const { title, content, link } = props;

		return (
			<div className="card">
				<div className="masonry">
					<InnerBlocks
						allowedBlocks={
							[
								'cgb/image',
								'cgb/textbox',
							]
						}
					/>
				</div>
				<h3><span className="text-lg lightdark">{ title }</span></h3>
				<div className="card-content">
					<p className="text">{ content }</p>
				</div>
				<a className="link" href={ link }>Learn more...</a>
			</div>
		);
	},

	save: function( props ) {
		const {
			attributes: {
				title,
				content,
				link,
			},
		} = props;

		return (
			<div className="card">
				<div className="masonry">
					<InnerBlocks />
				</div>
				<h3><span className="text-lg lightdark">{ title }</span></h3>
				<div className="card-content">
					<p className="text">{ content }</p>
				</div>
				<a className="link" href={ link }>Learn more...</a>
			</div>
		);
	},
} );
