/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-key */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls, MediaUpload } = wp.editor;

registerBlockType( 'cgb/card', {
	title: __( 'Card' ),
	icon: 'shield',
	category: 'sgn-blocks',

	attributes: {
		image: {
			type: 'string',
			default: 'http://placehold.it/500',
		},
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
		},
	},

	edit: function( props ) {
		const {
			attributes: {
				image,
				title,
				content,
				linkUrl,
				linkText,
			},
			className,
			setAttributes,
		} = props;

		const onChangeContent = content => {
			setAttributes( { content } );
		};

		const onChangeTitle = title => {
			setAttributes( { title } );
		};

		const onChangeLinkUrl = linkUrl => {
			setAttributes( { linkUrl } );
		};

		const onChangeLinkText = linkText => {
			setAttributes( { linkText } );
		};

		const selectImage = ( value ) => {
			setAttributes( {
				image: value.sizes.full.url,
			} );
		};

		const imageClassNames = [ 'image', '3x4' ].join( ' ' );
		const titleClassNames = [ 'text-lg', 'lightdark' ].join( ' ' );
		const contentClassNames = [ 'text' ].join( ' ' );

		return [
			<InspectorControls>

				<label className="blocks-base-control__label" htmlFor="url_id_1">Link text</label>
				<RichText
					id="url_text_1"
					tagName="a"
					href={ linkUrl }
					value={ linkText }
					onChange={ onChangeLinkText }
					className="link"
				/>

				<label className="blocks-base-control__label" htmlFor="url_id_1">Link url</label>
				<RichText
					id="url_id_1"
					format="string"
					onChange={ onChangeLinkUrl }
					value={ linkUrl }
					placeholder="Enter FULL URL here"
				/>
			</InspectorControls>,

			<div className={ className }>
				<MediaUpload
					onSelect={ selectImage }
					render={ ( { open } ) => {
						// eslint-disable-next-line jsx-a11y/click-events-have-key-events
						return <div
							className={ imageClassNames }
							style={ {
								backgroundImage: `url('${ image }')`,
							} }
							onClick={ open }
						/>;
					} }
				/>
				<h3>
					<RichText
						tagName="span"
						value={ title }
						onChange={ onChangeTitle }
						className={ titleClassNames }
					/>
				</h3>
				<div className="card-content">
					<RichText
						tagName="p"
						value={ content }
						onChange={ onChangeContent }
						className={ contentClassNames }
					/>
				</div>
				<a className="link" href={ linkUrl }>{ linkText }</a>
			</div>,
		];
	},

	save: function( props ) {
		const {
			attributes: {
				image,
				title,
				content,
				linkUrl,
				linkText,
			},
		} = props;

		return (
			<div>
				<div
					className="image 3x4"
					style={ {
						backgroundImage: `url('${ image }')`,
					} }
				/>

				<h3>
					<span className="text-lg lightdark">{ title }</span>
				</h3>

				<div className="card-content">
					<p className="text">{ content }</p>
				</div>

				<a className="link" href={ linkUrl }>{ linkText }</a>
			</div>
		);
	},
} );
