import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-grid-system';
import StyledIcon from 'components/icon';
import Button from 'components/button';
import Input from 'components/input';
import { search } from 'assets/icons';

const StyledContainer = styled(Container)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Label = styled.label`
  color: ${({ theme }) => theme.colors.secondary};
  font-family: inherit;
  font-size: 40px;
  font-style: italic;
  line-height: 50px;
  width: 500px;
  text-align: center;
`;

const Main = () => {
  const navigate = useNavigate();

  const handleSubmit = () => navigate('/profile/test');

  return (
    <StyledContainer>
      <form onSubmit={handleSubmit}>
        <Row align="center" justify="center" nogutter>
          <Label>Search Devs</Label>
        </Row>
        <Row align="center" justify="center" nogutter>
          <Col>
            <Input
              type="text"
              value="Type the username here..."
              id="search-input"
            />
          </Col>
          <Col>
            <Button variant="primary">
              <StyledIcon src={search} color="#ECEFF4" />
              Buscar
            </Button>
          </Col>
        </Row>
      </form>
    </StyledContainer>
  );
};

export default Main;
