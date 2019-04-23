/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { InnerBlocks } from '@wordpress/editor';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls, MediaUpload } = wp.editor;

registerBlockType( 'cgb/image', {

	title: __( 'Image' ),
	icon: 'shield',
	category: 'child',

	attributes: {
		image: {
			type: 'string',
			default: 'http://placehold.it/500',
		},
		alt: {
			type: 'string',
			selector: 'attribute',
			attribute: 'alt',
		},
	},

	edit: function( props ) {
		const {
			attributes: {
				image,
				alt,
			},
			className,
			setAttributes,
		} = props;

		const onChangeAlt = alt => {
			setAttributes( { alt } );
		};

		const selectImage = ( value ) => {
			setAttributes( {
				image: value.sizes.full.url,
			} );
		};

		return [
			<InspectorControls>
				<label className="blocks-base-control__label" htmlFor="name_id_1">Image alt text</label>
				<RichText
					id="name_id_1"
					format="string"
					onChange={ onChangeAlt }
					value={ alt }
					placeholder="Enter descriptive text for image"
				/>
			</InspectorControls>,
			<div className={ className } >
				<MediaUpload
					onSelect={ selectImage }
					render={ ( { open } ) => {
						return <img
							src={ image }
							alt={ alt }
							onClick={ open }
						/>;
					} }
				/>
			</div>,
		];
	},

	save: function( props ) {
		const {
			image,
			alt,
		} = props;

		return <div><img src={ image } alt={ alt } /></div>;
	},
} );
