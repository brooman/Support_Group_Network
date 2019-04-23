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
				image,
				title,
				content,
				link,
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

		const onChangeUrl = link => {
			setAttributes( { link } );
		};

		const selectImage = ( value ) => {
			setAttributes( {
				image: value.sizes.full.url,
			} );
		};

		const imageClassNames = [ 'image', '3x4' ].join( ' ' );
		const titleClassNames = [ 'text-lg', 'lightdark' ].join( ' ' );
		const contentClassNames = [ 'text' ].join( ' ' );

		{/* <Image src={image} size="3x4"/> */}

		return [
			<InspectorControls>
				<label className="blocks-base-control__label" htmlFor="url_id_1">URL</label>
				<RichText
					id="url_id_1"
					format="string"
					onChange={ onChangeUrl }
					value={ link }
					placeholder="Enter FULL URL here"
				/>
			</InspectorControls>,

			<div className={ className }>
				<MediaUpload
					onSelect={ selectImage }
					render={ ( { open } ) => {
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
				<a className="link" href={ link }>Learn more...</a>
			</div>,
		];
	},

	save: function( props ) {
		const {
			attributes: {
				image,
				title,
				content,
				link,
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

				<a className="link" href={ link }>Learn more...</a>
			</div>
		);
	},
} );
