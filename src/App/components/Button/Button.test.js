import React from 'react';
import { render } from '@testing-library/react';
import { Button } from './Button';


describe('<Button />', () => {
    test('is button mount', ()=>{
        render(<Button title="But" onclick={()=>{}}/>).toBeInTheDocument();
    })
})