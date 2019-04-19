import { InnerBlocks } from '@wordpress/editor';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType( 'cgb/list', {

	title: __( 'List' ),
	icon: 'shield',
	category: 'sgn-blocks',

	edit: function( props ) {
		const { title, items, wide } = props;

		const isWide = wide ? 'wide' : '';

		return (
			<div className={ `list ${ isWide }` }>
				<h3>{ title }</h3>
				<ul>
					{ items.map( ( item, index ) => {
						return <li className="list-item" key={ index }>{ item }</li>;
					} ) }
				</ul>
			</div>
		);
	},

	save: function( ) {
		return null;
	},
} );
