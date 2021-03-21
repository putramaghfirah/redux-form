import React, { useState } from 'react';
import styled from 'styled-components';
import { Card } from '../Components/Card';
import {
  Form,
  FormControl,
  FormGroup,
  ControlLabel,
  ButtonToolbar,
  Button,
} from 'rsuite';
import { useDispatch } from 'react-redux';

import { userAdded } from '../store/actions';
// import { Unsubscribe } from '../store/store';
// import { Unsubscribe } from '../store/store';
import store from '../store/store';

export function Register() {
  const dispatch = useDispatch();
  const [show, setShow] = useState<boolean>(false);

  function handleBiodata(status: boolean, event: any) {
    const fullname = event.target[0].value;
    const universitas = event.target[1].value;
    const fakultas = event.target[2].value;
    const jurusan = event.target[3].value;

    dispatch(userAdded(fullname, universitas, fakultas, jurusan));

    setShow(true);
  }

  function handleSubmit() {
    console.log(store.getState());
  }

  return (
    <React.Fragment>
      <Title>Create Account</Title>
      {!show && (
        <Card cardWidth="400px">
          <Form fluid onSubmit={handleBiodata}>
            <FormGroup>
              <ControlLabel>Nama Lengkap</ControlLabel>
              <FormControl name="name" />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Universitas</ControlLabel>
              <FormControl name="universitas" />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Fakultas</ControlLabel>
              <FormControl name="fakultas" />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Jurusan</ControlLabel>
              <FormControl name="jurusan" />
            </FormGroup>
            <FormGroup>
              <ButtonToolbar>
                <Button type="submit" appearance="primary">
                  Next
                </Button>
              </ButtonToolbar>
            </FormGroup>
          </Form>
        </Card>
      )}
      {show && (
        <Card cardWidth="400px">
          <Form fluid onSubmit={handleSubmit}>
            <FormGroup>
              <ControlLabel>Username</ControlLabel>
              <FormControl name="username" />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Email</ControlLabel>
              <FormControl name="email" type="email" />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Password</ControlLabel>
              <FormControl name="password" type="password" />
            </FormGroup>
            <FormGroup>
              <ButtonToolbar>
                <Button type="submit" appearance="primary">
                  Create Account
                </Button>
                {/* <Button appearance="default">Cancel</Button> */}
              </ButtonToolbar>
            </FormGroup>
          </Form>
        </Card>
      )}
    </React.Fragment>
  );
}

const Title = styled.p`
  font-size: 20px;
  text-align: center;
  margin-top: 40px;
`;
