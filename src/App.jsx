import React from 'react';
import Base from 'terra-base';
import ModalManager from 'terra-modal-manager';
import Example from './Example';

const App = () => (
  <Base locale="en">
    <ModalManager>
      <Example />
    </ModalManager>
  </Base>
);

export default App;
