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
		linkUrl: {
			type: 'string',
			source: 'attribute',
			attribute: 'href',
			selector: 'a.link',
		},
		linkText: {
			type: 'string',
			source: 'text',
			selector: 'a.link',
			default: 'Learn more...',
		},
	},

	edit: function( props ) {
		const {
			attributes: {
				title,
				content,
				linkUrl,
				linkText,
			},
			className,
			setAttributes,
		} = props;

		const onChangeLinkUrl = linkUrl => {
			setAttributes( { linkUrl } );
		};

		const onChangeLinkText = linkText => {
			setAttributes( { linkText } );
		};

		return [
			<InspectorControls>
				<div id="cgb-block-textbox-inspector-control-wrapper-2">
					<label className="blocks-base-control__label" htmlFor="name_id_1">Text related to card link (optional)</label>
					<RichText
						id="name_id_1"
						format="string"
						onChange={ onChangeLinkText }
						value={ linkText }
						placeholder="Enter text for card link"
					/>
				</div>

				<div id="cgb-block-textbox-inspector-control-wrapper-2">
					<label className="blocks-base-control__label" htmlFor="name_id_1">Link related to card (optional)</label>
					<RichText
						id="name_id_1"
						format="string"
						onChange={ onChangeLinkUrl }
						value={ linkUrl }
						placeholder="Enter link for card"
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

				{ ( ( linkUrl !== '' && linkText !== '' ) ? (
					<a className="link" href={ linkUrl }>{ linkText }</a>
				) : null ) }
			</div>,
		];
	},

	save: function( props ) {
		const {
			attributes: {
				title,
				content,
				linkUrl,
				linkText,
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

				<a className="link" href={ linkUrl }>{ linkText }</a>
			</div>
		);
	},
} );
