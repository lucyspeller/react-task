import React from 'react';
import styled from 'styled-components';

const StyledApp = styled.div`
  width: 100px;
  height: 10px;
  colour: teal;
`;

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
    <StyledApp>
        <p>
          Currency Convertor
        </p>
        {conversions.map(conversion => {
          return (
            <>
              {name}
              {calculator(conversion)}
            </>
          );
        })}
    </StyledApp>
  );
}

export default App;
