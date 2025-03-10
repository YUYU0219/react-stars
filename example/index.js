import React, {useState}from 'react'
import ReactDOM from 'react-dom/client';
import Stars from '../src/react-stars'
import NewStars from '../src/newReact-stars'

const firstExample = {
  size: 30,
  value: 3.6,
  edit: false
}

const secondExample = {
  size: 50,
  count: 10,
  char: '',
  color1: '#ff9900',
  color2: '#6599ff',
  onChange: newValue => {
    console.log(`Example 2: new value is ${newValue}`)
  }
}

const thirdExample = {
  size: 40,
  count: 7,
  half: false,
  value: 4,
  onChange: newValue => {
    console.log(`Example 3: new value is ${newValue}`)
  }
}

function App() {
  const [value, setValue] = useState(5.5);
  
  const fourthExample = {
    size: 40,
    count: 10,
    value: value,
    onChange: newValue => {
      console.log(`Example 4: new value is ${newValue}`);
      setValue(newValue);
    }
  }
  
  return (
    <div>
      <h1>react-stars examples</h1>
      <p><i>Star rating component for your React projects</i></p>
      Custom size, preset value, not editable
      <Stars {...firstExample} />
      Custom character, custom colors, 10 stars
      <Stars {...secondExample} />
      Editable, preset value, half stars off
      <Stars {...thirdExample} />

      <br/>
      --------Use new React version complete----------
      <NewStars {...fourthExample}/> 
      <div>Current value: {value} / {fourthExample.count}</div>
      <br/>

      <a href="https://github.com/n49/react-stars">Github</a>&nbsp;|&nbsp;
      <a href="https://www.npmjs.com/package/react-stars">NPM package</a>
    </div>
  );


}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);

