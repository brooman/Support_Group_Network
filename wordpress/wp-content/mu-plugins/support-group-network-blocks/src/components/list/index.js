import { InnerBlocks } from '@wordpress/editor';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType( 'cgb/list', {

	title: __( 'List' ),
	icon: 'shield',
	category: 'sgn-blocks',

	attributes: {
		title: {
			type: 'string',
			selector: 'h3',
		},
	},

	edit: function( props ) {
		const {
			attributes: {
				title,
			},
			className,
		} = props;

		// const isWide = wide ? 'wide' : '';

		const classNames = [
			className,
		].join( ' ' );

		return (
			<div className={ classNames }>
				<h3>{ title }</h3>
				<ul>
					<InnerBlocks />
				</ul>
			</div>
		);
	},

	save: function( props ) {
		const {
			attributes: {
				title,
			},
		} = props;

		return (
			<div>
				<h3>{ title }</h3>
				<ul>
					<InnerBlocks.Content />
				</ul>
			</div>
		);
	},
} );
