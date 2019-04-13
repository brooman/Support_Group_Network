import './box-container.view.scss';
import './box-container.editor.scss';

const {
    registerBlockType,
} = wp.blocks;

const { 
    InspectorControls,
    RichText,
    InnerBlocks
} = wp.editor;

registerBlockType('sgnblocks/box-container', {
    title: 'Text Block Container',
    icon: 'screenoptions',
    category: 'sgn-blocks',

    supports: {
        align: true,
    },

    attributes: {
        align: true,
    },

    edit(props) {
        const { className, setAttributes } = props;
        // const {  } = props.attributes;

        return [
            <InspectorControls>
                <div style={{padding: '1em 0'}}>
                    Options
                </div>
            </InspectorControls>,
            <div className={className}>
                <InnerBlocks
                    allowedBlocks={['sgnblocks/textblock']}
                />
            </div>,
        ];
    },

    save(props) {
        // const className = getBlockDefaultClassName('sgnblocks/box-container'); // For use with say, BEM
        // const {  } = props.attributes;

        return (
            <div>
                <InnerBlocks.Content />
            </div>
        );
    },
});
