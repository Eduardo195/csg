import React from 'react';

class TextAutocomplete extends React.Component {

    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.handleChange(e.target.value);
    }

    render() {
        const { id, ref, labelText, datalist, handleChange, value, className } = this.props;

        const placeholder = this.props.placeholder || (datalist && datalist.length > 0 ? datalist[0] : '');
        const label = labelText ? <label htmlFor={id}>{labelText}</label> : null;

        return (
            <span className={`autocp ${className}`}>
                { label }
                <input
                  ref={ref} type="text" id={id}
                  value={value} list={`${id}-datalist`} placeholder={placeholder}
                  onChange={this.handleChange}
                />
                <datalist id={`${id}-datalist`}>
                    {
                        datalist && datalist.map(entry => (
                            <option key={entry} value={entry} />
                      ))
                  }
                </datalist>
            </span>
        );
    }
}

TextAutocomplete.propTypes = {
    id: React.PropTypes.string.isRequired,
    labelText: React.PropTypes.string,
    handleChange: React.PropTypes.func,
    datalist: React.PropTypes.array.isRequired,
    value: React.PropTypes.string,
    className: React.PropTypes.string,
    placeholder: React.PropTypes.string,
};

export default TextAutocomplete;
