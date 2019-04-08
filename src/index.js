import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
   return (
      <div>
         <label htmlFor="name">Name: </label>
         <input type="text" id="name"/>
         <button style={{'background-color': 'blue', 'color': 'white'}}>Submit</button>
      </div>
   );
};

ReactDOM.render(<App />, document.querySelector("#root"));