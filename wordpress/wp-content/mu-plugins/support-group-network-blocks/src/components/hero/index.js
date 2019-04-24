/* eslint-disable jsx-a11y/no-static-element-interactions */
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
			default: 'Title',
		},
		subtitle: {
			type: 'string',
			selector: 'h2 span',
			default: 'Subtitle',
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
					<MediaUpload
						onSelect={ selectImage }
						render={ ( { open } ) => {
							return (
								<button onClick={ open }>Change hero Image</button>
							);
						} }
					/>
				</div>
			</InspectorControls>,
			<div>
				<div className={ className } style={ { backgroundImage: `url(${ image })` } }>
					<div className="text">
						<h1>
							<RichText
								id="title"
								tagName="span"
								format="string"
								onChange={ onChangeTitle }
								value={ title }
								className="hero-text"
								placeholder="Enter title"
							/>
						</h1>
						<h2>
							<RichText
								id="subtitle"
								tagName="span"
								format="string"
								onChange={ onChangeSubtitle }
								value={ subtitle }
								className="text-lg yellow"
								placeholder="Enter subtitle"
							/>
						</h2>
					</div>
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
				<div style={ { backgroundImage: `url(${ image })` } }>
					<div className="text">
						<h1>
							<span className="hero-text">{ title }</span>
						</h1>
						<h2>
							<span className="text-lg yellow">{ subtitle }</span>
						</h2>
					</div>
				</div>
			</div>
		);
	},
} );
