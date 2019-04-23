import { InnerBlocks } from '@wordpress/editor';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls } = wp.editor;

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
		const {
			attributes: {
				title,
				content,
				link,
			},
			className,
			setAttributes,
		} = props;

		const onChangeLink = link => {
			setAttributes( { link } );
		};

		return [
			<InspectorControls>

				<div id="cgb-block-textbox-inspector-control-wrapper-2">
					<label className="blocks-base-control__label" htmlFor="name_id_1">Link related to card (optional)</label>
					<RichText
						id="name_id_1"
						format="string"
						onChange={ onChangeLink }
						value={ link }
						placeholder="Enter descriptive text for image"
					/>
				</div>
			</InspectorControls>,
			<div className={ className }>
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

				{ ( link !== '' ? (
					<a className="link" href={ link }>Learn more...</a>
				) : null ) }
			</div>,
		];
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

				{ ( link !== '' ? (
					<a className="link" href={ link }>Learn more...</a>
				) : null ) }
			</div>
		);
	},
} );
