import React from 'react';
import marked from 'marked';
import Toolbox from './toolbox';

const defaultMarkdown = `# This is Markdown

## Mardown is an easy way to style text

#### Hashes (#) are used for titles - The more hashes the smaller the title

You can also just write plain text.
To add a newline at the end of a sentence, just leave two spaces at the end, like so.
I'm on a new line.

If you want content to be in the same line, leave no spaces at the end.
I'm on the same line

#### Lists

to make a list, you can use slashes:
- item #1
- item #2
- item #3

Or numbers:
1. Like so
2. And so

### You can add a box by wrapping it in 3 ${'`'}

${'```'}
Hi, I'm a box
${'```'}

###  For tabs, use >
> I'm tabbed text and there's nothing you can do about it.

### Links are achieved by
[A link to Google](http://google.com)
Another link to google: http://google.com`;

function getRawMarkup(markdown) {
    return {
        __html: marked(markdown, { sanitize: true }),
    };
}

class MarkdownBox extends React.Component {
    constructor() {
        super();
        this.state = {
            markdown: defaultMarkdown,
            tab: 0,
        };
        this.onTapEdit = this.onTapEdit.bind(this);
        this.onTapPreview = this.onTapPreview.bind(this);
        this.onTextareaChange = this.onTextareaChange.bind(this);
        this.setTextareaRef = (ref) => { this.textarea = ref; };

        this.onTapBold = this.onTapBold.bind(this);
    }

    onTextareaChange(e) {
        this.updateState({ markdown: e.target.value });
    }

    onTapEdit() {
        this.updateState({ tab: 0 });
    }

    onTapPreview() {
        const text = this.textarea.value;
        this.setState({
            tab: 1,
            markdown: text,
            parsed: getRawMarkup(text || 'Nothing to preview'),
        });
    }

    onTapBold() {
        const text = this.textarea.value;
        const selectionStartIndex = this.textarea.selectionStart;
        const selectionEndIndex = this.textarea.selectionEnd;
        const markdown = `${text.substr(0, selectionStartIndex)}**${text.substr(selectionStartIndex, selectionEndIndex - selectionStartIndex)}**${text.substr(selectionEndIndex)}`;
        this.updateState({ markdown });
    }

    updateState(obj) {
        this.setState(Object.assign({}, this.state, obj));
    }

    render() {
        const isEditSelected = this.state.tab === 0;

        return (
            <div className="markdownBox">
                <div className="nav-container">
                    <nav>
                        <button onClick={this.onTapEdit} className={`${isEditSelected ? 'selected' : ''}`}> Write </button>
                        <button onClick={this.onTapPreview} className={`${!isEditSelected ? 'selected' : ''}`}> Preview </button>
                        <Toolbox onTapBold={this.onTapBold} />
                    </nav>
                </div>
                <div className="content">
                    {
                        isEditSelected &&
                        <textarea
                          ref={this.setTextareaRef}
                          value={this.state.markdown}
                          onChange={this.onTextareaChange}
                        />
                    }
                    {
                        !isEditSelected &&
                        <div className="preview" dangerouslySetInnerHTML={this.state.parsed} />
                  }
                    <div className="helper">
                        <a href="https://guides.github.com/features/mastering-markdown/" target="_blank" rel="noopener noreferrer">
                            <svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16">
                                <path fillRule="evenodd" d="M14.85 3H1.15C.52 3 0 3.52 0 4.15v7.69C0 12.48.52 13 1.15 13h13.69c.64 0 1.15-.52 1.15-1.15v-7.7C16 3.52 15.48 3 14.85 3zM9 11H7V8L5.5 9.92 4 8v3H2V5h2l1.5 2L7 5h2v6zm2.99.5L9.5 8H11V5h2v3h1.5l-2.51 3.5z" />
                            </svg>
                        Mastering Markdown
                      </a>
                    </div>
                </div>
            </div>
        );
    }

}

export default MarkdownBox;
