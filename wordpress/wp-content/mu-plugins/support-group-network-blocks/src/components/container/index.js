const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.editor;

registerBlockType( 'cgb/block-container', {

	title: __( 'Container' ),
	icon: 'shield',
	category: 'common',

	edit: function( props ) {
		const { title, wide } = props;

		const isWide = wide ? 'wide' : '';

		return (
			<div className={ `container ${ isWide }` }>
				{ title &&
					<h2 className="container-title">
						<span className="text-lg lightdark">{ title }</span>
					</h2> }
				<div className="container-content">
					<InnerBlocks templateLock={ false } />
				</div>
			</div>
		);
	},

	save: function( ) {
		return null;
	},
}, );
