import React from 'react';
import { render } from '@testing-library/react';

import HelpGroups from './help-groups';

describe('HelpGroups', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HelpGroups />);
    expect(baseElement).toBeTruthy();
  });
});
