import { InnerBlocks } from '@wordpress/editor';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType( 'cgb/textbox', {

	title: __( 'textbox - CGB Block' ),
	icon: 'shield',
	category: 'common',

	edit: function( props ) {
		const { title, content, color, isWide, isLarge, link } = props;

		const classes = `${ color ? color : '' } ${ isWide ? 'wide' : '' } ${ isLarge ? 'large' : '' }`;

		return (
			<div className={ `textbox ${ classes }` }>
				<h3 className="title"><span>{ title }</span></h3>
				<p className="text">{ content }</p>
				{ link && <a className="link" href={ link.url }>{ link.text }</a> }
			</div>
		);
	},

	save: function( ) {
		return null;
	},
} );
