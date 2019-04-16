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
            selector: 'h2.title > span',
        },
        content: {
            type: 'array',
            source: 'children',
            selector: '.text',
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
                <h2 className="title">
                    <RichText
                        tagName="span"
                        placeholder="Add your own Title"
                        value={title}
                        onChange={onChangeTitle}
                    />
                </h2>

                <RichText
                    tagName="p"
                    className="text"
                    placeholder="Add your own content"
                    value={content}
                    onChange={onChangeContent}
                />
            </div>,
        ];
    },

    save(props) {
        const {
            attributes: { title, content }
        } = props;

        return (
            <div>
                <h2 className="title">
                    <span>
                        {title}
                    </span>
                </h2>

                <p className="text">{content}</p>
            </div>
        );
    },
});
