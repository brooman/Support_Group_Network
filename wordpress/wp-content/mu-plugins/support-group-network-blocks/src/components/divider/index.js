/* eslint-disable react/jsx-key */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;

registerBlockType( 'cgb/divider', {
	title: __( 'Divider' ),
	icon: 'shield',
	category: 'children',

	attributes: {
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
	},

	edit: function( props ) {
		const {
			attributes: {
				title,
				content,
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

		{/* <Image src={image} size="3x4"/> */}

		return (
			<div className={ className }>

				<h3>
					<RichText
						tagName="span"
						value={ title }
						onChange={ onChangeTitle }
					/>
				</h3>
				<div className="card-content">
					<RichText
						tagName="p"
						value={ content }
						onChange={ onChangeContent }
					/>
				</div>
			</div>
		);
	},

	save: function( props ) {
		const {
			attributes: {
				title,
				content,
			},
		} = props;

		return (
			<div>
				<h3>
					<span className="title">{ title }</span>
				</h3>

				<div>
					<p className="text">{ content }</p>
				</div>
			</div>
		);
	},
} );
