/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { InnerBlocks } from '@wordpress/editor';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls, MediaUpload } = wp.editor;

registerBlockType( 'cgb/supporter', {

	title: __( 'Supporter' ),
	icon: 'shield',
	category: 'sgn-blocks',

	attributes: {
		image: {
			type: 'string',
			default: 'http://placehold.it/500',
		},
		name: {
			type: 'string',
			selector: 'attribute',
			attribute: 'alt',
		},
	},

	edit: function( props ) {
		const {
			attributes: {
				image,
				name,
			},
			className,
			setAttributes,
		} = props;

		const onChangeName = name => {
			setAttributes( { name } );
		};

		const selectImage = ( value ) => {
			setAttributes( {
				image: value.sizes.full.url,
			} );
		};

		return [
			<InspectorControls>
				<label className="blocks-base-control__label" htmlFor="name_id_1">Supporter Name</label>
				<RichText
					id="name_id_1"
					format="string"
					onChange={ onChangeName }
					value={ name }
					placeholder="Enter supporter name"
				/>
			</InspectorControls>,
			<div className={ className } >
				<MediaUpload
					onSelect={ selectImage }
					render={ ( { open } ) => {
						return <img
							src={ image }
							alt={ name }
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
			name,
		} = props;

		return <div><img src={ image } alt={ name } /></div>;
	},
} );
