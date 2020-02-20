import React from 'react';
import './App.css';

const App = () => {
  const userInput = 27;

  const conversions = [
    {
      name: "USD",
      rate: 2,
    },
    {
      name: "THB",
      rate: 10,
    },
    {
      name: "EUR",
      rate: 5,
    }
  ];

  const calculator = conversion => {
    return conversion.rate * userInput;
  };

  return (
    <div className="App">sss
        <p>
          Currency Convertor
        </p>
        {conversions.map(conversion => {
          return calculator(conversion);
        })}
    </div>
  );
}

export default App;
