import React from 'react';
import ReactDOM from 'react-dom';
import toMaterialStyle from 'material-color-hash';

class Demo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputText: '',
      materialStyle: toMaterialStyle('', '500'),
      shade: '500',
      debounceTimeout: undefined
    };
  }

  updateColor(e) {
    const { shade, debounceTimeout } = this.state;
    const inputText = e.target.value;

    if (debounceTimeout) {
      clearInterval(debounceTimeout);
    }

    const newTimeout = setTimeout(() => {
      const materialStyle = toMaterialStyle(inputText, shade);

      this.setState({
        materialStyle,
        inputText,
        debounceTimeout: undefined
      });
    }, 200);

    this.setState({
      debounceTimeout: newTimeout
    });
  }

  render() {
    const { materialStyle, inputText } = this.state;

    // use materialStyle.color as border color
    const inputMaterialStyle = Object.assign({}, materialStyle, {
      borderColor: materialStyle.color
    });

    return (
      <div>
        {
          ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'].map(s =>
            <div key={s} className="shade" style={toMaterialStyle(inputText, s)}>
              <span className="color-hash">{s}: {toMaterialStyle(inputText, s).backgroundColor}</span>
              {
                s !== '500' ? null :
                  <input
                    type="text"
                    onChange={e => this.updateColor(e)}
                    style={inputMaterialStyle}
                    placeholder="Type in some text.."
                  />
                }
            </div>
          )
        }
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />,
  document.getElementById('demo')
);
