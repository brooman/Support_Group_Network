/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {
	RichText,
	InspectorControls,
	MediaUpload,
} = wp.editor;

registerBlockType( 'cgb/hero', {
	title: __( 'Hero' ),
	icon: 'shield',
	category: 'sgn-blocks',

	attributes: {
		image: {
			type: 'string',
			default: 'http://placehold.it/800x400',
		},
		title: {
			type: 'string',
			selector: 'h1 span',
			default: 'title',
		},
		subtitle: {
			type: 'string',
			selector: 'h2 span',
			default: 'subtitle',
		},
	},

	edit: function( props ) {
		const {
			attributes: {
				image,
				title,
				subtitle,
			},
			className,
			setAttributes,
		} = props;

		const selectImage = ( value ) => {
			setAttributes( {
				image: value.sizes.full.url,
			} );
		};

		const onChangeTitle = ( title ) => {
			setAttributes( { title } );
		};

		const onChangeSubtitle = ( subtitle ) => {
			setAttributes( { subtitle } );
		};

		return [
			<InspectorControls>
				<div>
					<label htmlFor="title">Change Title</label>
					<RichText
						id="title"
						tagName="span"
						format="string"
						onChange={ onChangeTitle }
						value={ title }
						placeholder="Enter descriptive text for image"
					/>
				</div>
				<div>
					<label htmlFor="subtitle">Change Subtitle</label>
					<RichText
						id="subtitle"
						tagName="span"
						format="string"
						onChange={ onChangeSubtitle }
						value={ subtitle }
						placeholder="Enter descriptive text for image"
					/>

				</div>
			</InspectorControls>,
			<div className={ className }>
				<MediaUpload
					onSelect={ selectImage }
					render={ ( { open } ) => {
						return (
							<img src={ image } alt="Hero" />
						);
					} }
				/>
				<div className="text">
					<h1>
						<span className="hero-text">{ title }</span>
					</h1>
					<h2>
						<span className="text-lg yellow">{ subtitle }</span>
					</h2>
				</div>
			</div>,
		];
	},

	save: function( props ) {
		const {
			attributes: {
				image,
				title,
				subtitle,
			},
		} = props;

		return (
			<div>
				<div className="hero" style={ { backgroundImage: `url(${ image })` } }>
					<div className="text">
						<h1><span className="hero-text">{ title }</span></h1>
						<h2><span className="text-lg yellow">{ subtitle }</span></h2>
					</div>
				</div>
			</div>
		);
	},
} );
