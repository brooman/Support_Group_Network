const { __ } = wp.i18n;
const { registerBlockType, ColorPalette } = wp.blocks;
const { RichText, InspectorControls } = wp.editor;

registerBlockType( 'cgb/textbox', {

	title: __( 'Colored Textbox' ),
	icon: 'shield',
	category: 'sgn-blocks',

	attributes: {
		title: {
			type: 'string',
			source: 'text',
			selector: 'h2.title > span',
		},
		content: {
			type: 'array',
			source: 'children',
			selector: '.text',
		},
		backgroundColorClass: {
			type: 'string',
			default: 'yellow',
		},
	},

	edit( props ) {
		const {
			attributes: { title, content, backgroundColorClass },
			className,
			setAttributes,
		} = props;

		const onChangeContent = content => {
			setAttributes( { content } );
		};

		const onChangeTitle = title => {
			setAttributes( { title } );
		};

		// Get value from select > option
		const onChangeColorOption = value => {
			setAttributes( { backgroundColorClass: value } );
		};

		const baseClassNames = [ className, backgroundColorClass ].join( ' ' );

		return [
			<InspectorControls>
				Options
				{ /*
				<label className="blocks-base-control__label">Textbox Color</label>
				<ColorPalette // Element Tag for Gutenberg standard colour selector
					onChange={ onChangeColorOption } // onChange event callback
				/> */ }
			</InspectorControls>,
			<div className={ baseClassNames }>
				<h2 className="title">
					<RichText
						tagName="span"
						placeholder="Add your own Title"
						value={ title }
						onChange={ onChangeTitle }
					/>
				</h2>

				<RichText
					tagName="p"
					className="text"
					placeholder="Add your own content"
					value={ content }
					onChange={ onChangeContent }
				/>
			</div>,
		];
	},

	save( props ) {
		const {
			attributes: {
				title,
				content,
			},
		} = props;

		return (
			<div>
				<h2 className="title">
					<span>
						{ title }
					</span>
				</h2>

				<p className="text">{ content }</p>
			</div>
		);
	},
} );
