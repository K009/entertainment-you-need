import React from 'react';
import PageContext from '../context/index';

// jest to funkcja, która przyjmuje komponent, a następnie zwraca go wzbogaconego o pewne rzeczy - tutaj o PageContext
// przekazujemy propsa context, ktory mowi o tym na jakiej stronie aktualnie sie znajdujemy

const withContext = (Component) => {
  return function contextComponent(props) {
    return (
      <PageContext.Consumer>
        {(context) => <Component {...props} pageContext={context} />}
      </PageContext.Consumer>
    );
  };
};

export default withContext;
