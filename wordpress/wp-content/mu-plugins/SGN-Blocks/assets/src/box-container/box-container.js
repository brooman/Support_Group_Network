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
        const { className, children, setAttributes } = props;
        // const {  } = props.attributes;
        
        const getLayout = (count) => {
            switch(count){
                case 1:
                return [{isLarge: true}]
                case 2:
                return [{isWide: true}, {isLarge: true}]
                case 3: 
                return [{}, {}, {isLarge: true}]
                case 4: 
                return [{isWide: true}, {}, {}, {isWide: true}]
                case 5:
                return [{}, {}, {isWide: true}, {}, {}]
                default:
                return [{}, {}, {}, {}, {}, {}]
            }
        }
        
        const count = React.Children.count(children)
        const layout = getLayout(count)
        
        const content = React.Children.map(children, (child, index) => {
            return React.cloneElement(child, layout[index]);
        })

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
    