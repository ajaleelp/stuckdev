import React from 'react';
import { render } from '@testing-library/react';

import GetHelp from './get-help';

describe('GetHelp', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GetHelp />);
    expect(baseElement).toBeTruthy();
  });
});
