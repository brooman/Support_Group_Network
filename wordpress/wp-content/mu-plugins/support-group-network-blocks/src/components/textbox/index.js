const { __ } = wp.i18n;

const {
	registerBlockType,
} = wp.blocks;

const {
	RichText,
	InspectorControls,
	ColorPalette,
} = wp.editor;

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
		backgroundColor: {
			type: 'string',
			default: 'yellow',
		},
	},

	edit( props ) {
		const {
			attributes: { title, content, backgroundColor },
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
			let colorClass;

			if ( value === '#FFFB56' ) {
				colorClass = 'yellow';
			} else if ( value === '#FF6356' ) {
				colorClass = 'red';
			} else if ( value === '#69D88A' ) {
				colorClass = 'green';
			} else if ( value === '#57DEF4' ) {
				colorClass = 'blue';
			} else {
				// Assume dark is chosen
				colorClass = 'lightdark';
			}

			setAttributes( { backgroundColor: colorClass } );
		};

		const baseClassNames = [ className, backgroundColor ].join( ' ' );

		return [
			<InspectorControls>
				Options
				<br />
				<br />

				<div id="cgb-block-textbox-inspector-control-wrapper">
					<label className="blocks-base-control__label">Textbox Color</label>
					<ColorPalette // Element Tag for Gutenberg standard colour selector
						onChange={ onChangeColorOption } // onChange event callback
					/>
				</div>
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
