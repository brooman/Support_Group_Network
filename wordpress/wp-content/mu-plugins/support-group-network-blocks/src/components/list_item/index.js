import { InnerBlocks } from '@wordpress/editor';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {
	RichText,
} = wp.editor;

registerBlockType( 'cgb/listitem', {

	title: __( 'List Item' ),
	icon: 'shield',
	category: 'sgn-blocks',

	attributes: {
		content: {
			type: 'string',
			selector: 'li',
		},
	},

	edit: function( props ) {
		const {
			attributes: {
				content,
			},
			className,
			setAttributes,
		} = props;

		const onChangeContent = ( content ) => {
			setAttributes( { content } );
		};

		const classNames = [
			className,
		].join( ' ' );

		return (
			<li className={ classNames }>
				<RichText
					placeholder="Type your content here"
					value={ content }
					onChange={ onChangeContent }
				/>
			</li>
		);
	},

	save: function( props ) {
		const {
			attributes: {
				content,
			},
		} = props;

		return (
			<li>
				{ content }
			</li>
		);
	},
} );
