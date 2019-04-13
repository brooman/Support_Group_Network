import './textblock.view.scss';
import './textblock.editor.scss';

const {
    registerBlockType,
} = wp.blocks;

const { 
    InspectorControls,
    RichText
} = wp.editor;

registerBlockType('sgnblocks/textblock', {
    title: 'Colored Text Block',
    icon: 'screenoptions',
    category: 'sgn-blocks',

    attributes: {
        title: {
            type: 'string',
            source: 'text',
            selector: '.title',
        },
        content: {
            type: 'array',
            source: 'children',
            selector: '.text-content',
        },
    },

    edit(props) {
        const {
            attributes: {title, content},
            className,
            setAttributes
        } = props;

        const onChangeContent = content => {
            setAttributes({content});
        }

        const onChangeTitle = title => {
            setAttributes({title});
        }

        return [
            <InspectorControls>
                <div style={{padding: '1em 0'}}>
                    Options
                </div>
            </InspectorControls>,
            
            <div className={className}>
                <RichText
                    tagName="h2"
                    className="title"
                    value={title}
                    onChange={onChangeTitle}
                    unstableOnSplit={ () => false } 
                />

                <RichText
                    tagName="p"
                    className="text-content"
                    value={content}
                    onChange={onChangeContent}
                />
            </div>
            ,
        ];
    },

    save(props) {
        const {
            attributes: { title, content }
        } = props;

        return (
            <div>
                <h2 className="title">{title}</h2>

                <p className="text-content">{content}</p>
            </div>
        );
    },
});
