import styled from 'styled-components';

const GenericMessage = ({ text }) => {
  return <Padding>{text}</Padding>;
};

export default GenericMessage;

const Padding = styled.div`
  padding-top: 1em;
  height: 100%;
`;
