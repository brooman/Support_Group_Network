const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType( 'cgb/block-card', {
	title: __( 'Card' ),
	icon: 'shield',
	category: 'common',

	edit: function( props ) {
		const { image, title, content } = props;

		return (
			<div className="card">
				<Image src={ image } size="3x4" />
				<h3><span className="text-lg lightdark">{ title }</span></h3>
				<div className="card-content">
					<p className="text">{ content }</p>
				</div>
				<a className="link" href="#">Learn more...</a>
			</div>
		);
	},

	save: function( ) {
		return null;
	},
} );
