import React from 'react';
import Badge from 'react-bootstrap/Badge';
let marked = require('marked');

const defaultMD = `# HOWDY! 
## welcome to this fancy markdown previewer
[freeCodeCamp](https://www.freecodecamp.org/oiosello)
Some things I used for this project:
- React
- Bootstrap
- Marked

Look what I can do: 
**bold**, _emphasis_ , _**combined emphasis**_ , and ~~strikethrough~~

Head 1 | Head 2 | Head 3
------ |--------| ------
item1 | item2 | item3
item4 | item5 | item6
item7 | item8 | item9

> example of blockquote
Inline \`code\`
\`\`\`
// code block
function bowie (alien, angel) {
  return alien + angel;
}
\`\`\`
![david bowie](https://i.pinimg.com/474x/88/18/ec/8818ec960e8721f33d6a1f21458b6419.jpg)
`;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      md: defaultMD,
    };
  }

  handleMd(md) {
    this.setState({ md });
  }

  render() {
    const pageStyle = {
      backgroundColor: 'purple'
    };

    const titleStyle = {
      backgroundColor: 'transparent',
      color: 'white',
      
    }

    const subtitleStyle = {
      backgroundColor: 'transparent',
      color: 'white'
    }

    const inputStyle = {
      width: '350px',
      height: '350px',
      marginLeft: 'auto',
      marginRight: 'auto',
      padding: '10px',
    };

    const outputStyle = {
      width: '350px',
      height: 'auto',
      marginLeft: 'auto',
      marginRight: 'auto',
      padding: '10px',
      backgroundColor: 'plum',
    };

    return (
      <div className="App" style={pageStyle}>
        <div className="container">
          <div className="row mt-4">
            <div className="col text-center">
              <h1>
                <Badge className="text-align-center" style={titleStyle}>
                  MARKDOWN PREVIEWER
                </Badge>
              </h1>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6">
              <div className="col text-center">
                <h4>
                  <Badge className="text-align-center" style={subtitleStyle}>
                    input
                  </Badge>
                </h4>
              </div>
              <div className="mark-input" style={inputStyle}>
                <textarea
                  id="editor"
                  className="input"
                  style={inputStyle}
                  value={this.state.md}
                  onChange={(e) => {
                    this.handleMd(e.target.value);
                  }}
                ></textarea>
              </div>
            </div>
            <div className="col-md-6">
              <div className="col text-center">
                <h4>
                  <Badge className="text-align-center" style={subtitleStyle}>
                    output
                  </Badge>
                </h4>
              </div>
              <div
                id="preview"
                style={outputStyle}
                dangerouslySetInnerHTML={{
                  __html: marked(this.state.md),
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

