const { __ } = wp.i18n;

const {
	registerBlockType,
} = wp.blocks;

const {
	RichText,
	InspectorControls,
	ColorPalette,
} = wp.editor;

// const {
// 	CheckboxControl,
// } = wp.components;

// const {
// 	withState,
// } = wp.compose;

registerBlockType( 'cgb/textbox', {

	title: __( 'Colored Textbox' ),
	icon: 'shield',
	category: 'child',

	attributes: {
		title: {
			type: 'string',
			source: 'text',
			selector: 'h2.title > span',
		},
		content: {
			type: 'string',
			source: 'text',
			selector: '.text',
		},
		color: {
			type: 'string',
			default: 'yellow',
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
			default: '',
		},
		// wide: {
		// 	type: 'boolean',
		// 	default: false,
		// },
	},

	edit( props ) {
		const {
			attributes: {
				title,
				content,
				color,
				linkUrl,
				linkText,
				// wide,
			},
			className,
			setAttributes,
		} = props;

		// const WideCheckboxControl = () =>(
		// 	<CheckboxControl
		// 		heading="Wide"
		// 		label="Is wide"
		// 		help="Should box be wide or not?"
		// 		checked={ ( wide ) }
		// 		onChange={ () => {
		// 			setAttributes( { wide: ! wide } );
		// 		} }
		// 	/>
		// );

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

		// Get value from select > option
		const onChangeColor = value => {
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

			setAttributes( { color: colorClass } );
		};

		// const wideClass = ( wide ) ? 'wide' : '';

		const baseClassNames = [
			className,
			color,
			// wideClass,
		].join( ' ' );

		return [
			<InspectorControls>

				<div id="cgb-block-textbox-inspector-control-wrapper-1">
					<label className="blocks-base-control__label">Textbox Color</label>
					<ColorPalette // Element Tag for Gutenberg standard colour selector
						onChange={ onChangeColor } // onChange event callback
					/>
				</div>

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

				<div id="cgb-block-textbox-inspector-control-wrapper-3">
					<label className="blocks-base-control__label" htmlFor="name_id_2">Link related to card (optional)</label>
					<RichText
						id="name_id_2"
						format="string"
						onChange={ onChangeLinkUrl }
						value={ linkUrl }
						placeholder="Enter url for card link"
					/>
				</div>

				{ /* <WideCheckboxControl /> */ }
			</InspectorControls>,
			<div
				// isWide={ wide }
				className={ baseClassNames }
			>
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

				{ ( ( linkUrl !== '' && linkText !== '' ) ? (
					<a className="link" href={ linkUrl }>{ linkText }</a>
				) : null ) }
			</div>,
		];
	},

	save( props ) {
		const {
			attributes: {
				title,
				content,
				link,
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

				{ ( link !== '' ? (
					<a className="link" href={ link }>Learn more...</a>
				) : null ) }
			</div>
		);
	},
} );
