import React from 'react';
import { render } from "@testing-library/react";
import Display from './Display';

describe('<Display />', () => {
    it('props work', () => {
        const display = render(<Display />);
        display.getByText(/strikes/i);
        display.getByText(/balls/i);
    });
})