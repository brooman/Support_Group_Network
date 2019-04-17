import './hero.view.scss';
import './hero.editor.scss';

const {
    registerBlockType,
} = wp.blocks;

const { 
    InspectorControls,
    RichText
} = wp.editor;

registerBlockType('sgnblocks/hero', {
    title: 'Hero',
    icon: 'editor-distractionfree',
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
                Hero
            </div>,
        ];
    },

    save(props) {
        // const className = getBlockDefaultClassName('sgnblocks/hero'); // For use with say, BEM
        // const {  } = props.attributes;

        return (
            <div>
                Hero
            </div>
        );
    },
});
