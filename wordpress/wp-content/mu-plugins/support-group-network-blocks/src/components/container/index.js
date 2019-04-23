const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {
	RichText,
	InspectorControls,
	InnerBlocks,
} = wp.editor;

registerBlockType( 'cgb/container', {

	title: __( 'Container' ),
	icon: 'shield',
	category: 'sgn-blocks',

	attributes: {
		title: {
			type: 'string',
			selector: 'span.text-lg',
			default: '',
			required: false,
		},
	},

	edit: function( props ) {
		const {
			attributes: {
				title,
			},
			className,
			setAttributes,
		} = props;

		const wide = false;
		const isWide = wide ? 'wide' : '';

		const onChangeTitle = ( title ) => {
			setAttributes( { title } );
		};

		const classNames = [ className, isWide ].join( ' ' );

		return [
			<InspectorControls>
				<label className="blocks-base-control__label" htmlFor="name_id_1">Container Title (Optional)</label>
				<RichText
					id="name_id_1"
					format="string"
					onChange={ onChangeTitle }
					value={ title }
					placeholder="Enter a title for the container"
				/>
			</InspectorControls>,
			<div className={ classNames }>
				{ ( title !== '' ) ? (
					<h2 className="container-title">
						<span className="text-lg lightdark">{ title }</span>
					</h2> ) : null }
				<div className="container-content">
					<InnerBlocks />
				</div>
			</div>,
		];
	},

	save: function( props ) {
		const {
			attributes: {
				title,
			},
		} = props;

		return (
			<div>
				{ ( title !== '' ) ? (
					<h2 className="container-title">
						<span className="text-lg lightdark">{ title }</span>
					</h2> ) : null }
				<div className="container-content">
					<InnerBlocks.Content />
				</div>
			</div>
		);
	},
}, );
