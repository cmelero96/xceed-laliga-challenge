import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';
import '@testing-library/jest-dom';

const Wrapper = ({ children }) => <BrowserRouter>{children}</BrowserRouter>;

const renderComponent = (component) => {
  return render(component, { wrapper: Wrapper });
};

describe('App', () => {
  it('renders the title', () => {
    renderComponent(<App></App>);

    expect(screen.getByText('Xceed Liga Challenge 2021')).toBeInTheDocument();
  });
});
