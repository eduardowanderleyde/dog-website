import '@testing-library/jest-dom';
import { configure } from '@testing-library/react';

// Adiciona os matchers do jest-dom
expect.extend({
  toBeInTheDocument: (received) => {
    const pass = document.body.contains(received);
    return {
      pass,
      message: () => `expected ${received} ${pass ? 'not ' : ''}to be in the document`,
    };
  },
});

configure({ testIdAttribute: 'data-test' }); 