import React from 'react';
import md from 'markdown-it';

class MarkdownBox extends React.Component {
  constructor(props) {
    super();
    this.md = md({ breaks: true, typographer: true });
    this.state = {
      isEditing: false,
      markdown: props.value || props.placeholder || '',
      parsed: this.parseMarkdown(props.value || props.placeholder || ''),
    };

    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);

    this.onChange = this.onChange.bind(this);
    this.setTextareaRef = (ref) => { this.textarea = ref; };
  }

  componentDidMount() {
    if (this.state.markdown) {
      this.props.onChange(this.state.markdown);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isEditing !== this.state.isEditing && this.state.isEditing) {
      this.textarea.focus();
    }
  }

  onFocus() {
    this.setState({ isEditing: true });
  }

  onBlur() {
    this.updateState({ isEditing: false });
  }

  onChange(e) {
    this.updateState({
      markdown: e.target.value,
      parsed: this.parseMarkdown(e.target.value),
    });

    this.props.onChange(e.target.value);
  }

  parseMarkdown(markdown) {
    return {
      __html: this.md.render(markdown),
    };
  }

  updateState(obj) {
    this.setState(Object.assign({}, this.state, obj));
  }

  render() {
    return (
      <div className="md">
        <div className={'md-input'}>
          <textarea
            ref={this.setTextareaRef} value={this.state.markdown}
            onChange={this.onChange} onBlur={this.onBlur}
          />
        </div>
        <div
          className={'md-preview'}
          dangerouslySetInnerHTML={this.state.parsed}
        />
      </div>
    );
  }

}

MarkdownBox.propTypes = {
  onChange: React.PropTypes.func.isRequired,
  placeholder: React.PropTypes.string,
  value: React.PropTypes.string,
};

export default MarkdownBox;
