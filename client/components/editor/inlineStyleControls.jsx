import React from 'react';
import StyleButton from './styleButton';

const INLINE_STYLES = [
  { label: 'Bold', style: 'BOLD' },
  { label: 'Striketrough', style: 'STRIKETHROUGH' },
  { label: 'Italic', style: 'ITALIC' },
  { label: 'Underline', style: 'UNDERLINE' },
  { label: 'Monospace', style: 'CODE' },
  { label: 'Align left', style: 'ALIGN-LEFT' },
  { label: 'Align center', style: 'ALIGN-CENTER' },
  { label: 'Align right', style: 'ALIGN-RIGHT' },
];

const InlineStyleControls = (props) => {
  const currentStyle = props.editorState.getCurrentInlineStyle();
  return (
    <div className="controls">
      {INLINE_STYLES.map(type =>
        <StyleButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />,
     )}
    </div>
  );
};

InlineStyleControls.propTypes = {
  onToggle: React.PropTypes.func.isRequired,
  editorState: React.PropTypes.shape({
    getCurrentInlineStyle: React.PropTypes.func.isRequired,
  }).isRequired,
};

export default InlineStyleControls;
