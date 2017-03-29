import { Editor as DraftJsEditor,
  ContentState, convertFromHTML,
  EditorState, RichUtils } from 'draft-js';
import React from 'react';
import BlockStyleControls from './blockStyleControls';
import InlineStyleControls from './inlineStyleControls';

const styleMap = {
  STRIKETHROUGH: {
    textDecoration: 'line-through',
  },
  'ALIGN-CENTER': {
    display: ' block',
    textAlign: 'center',
  },
  'ALIGN-LEFT': {
    display: ' block',
    textAlign: 'left',
  },
  'ALIGN-RIGHT': {
    display: ' block',
    textAlign: 'right',
  },
};

class Editor extends React.Component {
  constructor(props) {
    super(props);
    let startingEditorState;
    if (props.value && props.value.trim() !== '') {
      const blocksFromHTML = convertFromHTML(props.value);
      const state = ContentState.createFromBlockArray(
        blocksFromHTML.contentBlocks,
        blocksFromHTML.entityMap,
      );
      startingEditorState = EditorState.createWithContent(state);
    } else {
      startingEditorState = EditorState.createEmpty();
    }

    this.state = { editorState: startingEditorState };

    this.handleKeyCommand = this.handleKeyCommand.bind(this);
    this.toggleInlineStyle = this.toggleInlineStyle.bind(this);
    this.toggleBlockType = this.toggleBlockType.bind(this);
    this.getEditorRef = (ref) => { this.editor = ref; };
    this.onChange = (editorState) => {
      this.props.onChange(this.editor.refs.editor.innerHTML);
      this.setState({ editorState });
    };
  }

  handleKeyCommand(command) {
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
    if (newState) {
      this.onChange(newState);
    }
  }

  toggleInlineStyle(inlineStyle) {
    this.onChange(
      RichUtils.toggleInlineStyle(
        this.state.editorState,
        inlineStyle,
      ),
    );
  }

  toggleBlockType(blockType) {
    this.onChange(
      RichUtils.toggleBlockType(
        this.state.editorState,
        blockType,
      ),
    );
  }

  render() {
    return (
      <div className="editorWrap">
        <BlockStyleControls
          editorState={this.state.editorState}
          onToggle={this.toggleBlockType}
        />
        <InlineStyleControls
          editorState={this.state.editorState}
          onToggle={this.toggleInlineStyle}
        />
        <div className="editor">
          <DraftJsEditor
            ref={this.getEditorRef}
            customStyleMap={styleMap}
            handleKeyCommand={this.handleKeyCommand}
            editorState={this.state.editorState}
            onChange={this.onChange}
            spellCheck
          />
        </div>
      </div>
    );
  }
}

Editor.propTypes = {
  onChange: React.PropTypes.func.isRequired,
  value: React.PropTypes.string.isRequired,
};

export default Editor;
