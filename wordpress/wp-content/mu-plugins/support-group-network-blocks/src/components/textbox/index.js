const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
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
	},

	edit( props ) {
		const {
			attributes: { title, content },
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
			// Find some way to update the styling
			// Maybe change class, maybe something else
		};

		return [
			<InspectorControls>
				Options
			</InspectorControls>,
			<div className={ className }>
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

