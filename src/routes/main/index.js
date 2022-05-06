/* eslint-disable */
import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-grid-system';
import Icon from 'components/icon';
import Button from 'components/button';
import Input from 'components/input';
import { search } from 'assets/icons';
import Stack from 'components/stack';
import Typography from 'components/typography';
import api from 'services/api';

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

const Error = styled(Typography)`
  visibility: ${({ visible }) => visible ? `visible` : `hidden` }
`;

const Main = () => {
  const [value, setValue] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();

    api.get(`/users/${value}`)
      .then(response => {
        console.log('search response', response);
        setIsVisible(false);
        // set user profile data in context
        // navigate(`/profile/${value}`);
      })
      .catch(error => {
        console.log(error);
        setIsVisible(true);
      });
  };

  return (
    <StyledContainer>
      <form onSubmit={handleSubmit}>
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Label>Search Devs</Label>
          <Row align="center" justify="center" nogutter>
            <Col>
              <Input
                id="search-input"
                type="text"
                placeholder="Type the username here..."
                value={value}
                onChange={e => setValue(e.target.value)}
                color="muted"
                bgColor="white"
                borderColor="secondary"
              />
            </Col>
            <Col>
              <Button variant="primary">
                <Icon src={search} color="accent" />
                Buscar
              </Button>
            </Col>
          </Row>
          <Error
            visible={isVisible}
            color="error"
            fontStyle="italic"
            size="s"
          >
            User not found
          </Error>
        </Stack>  
      </form>
    </StyledContainer>
  );
};

export default Main;
