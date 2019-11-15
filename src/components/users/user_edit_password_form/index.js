import React, { Fragment, useState } from 'react';
import { Button, Field, Control, Input, Column, Title, Help, Label } from "rbx";
import UsersService from '../../../services/users';

function UsersEditFormPassword() {
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    if(password == password_confirmation){
      try {
        await UsersService.updatePassword({ password: password });
        setStatus("success")
      } catch (err) {
        setStatus("error")
      }
    } else{
      setStatus("error_confirmation_password")
    }

  }

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <Field>
          <Control>
            <Label className="has-text-grey">Password</Label>
            <Input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              name="password"
            />
          </Control>
        </Field>
        <Field>
          <Control>
            <Label className="has-text-grey">Password Confirmation</Label>
            <Input
              type="password"
              value={password_confirmation}
              onChange={e => setPasswordConfirmation(e.target.value)}
              required
              name="password_confirmation"
            />
          </Control>
        </Field>

        <Field>
          <Control>
            <Column.Group>
              <Column className="has-text-right">
                <Button color="custom-purple" outlined>Update Password</Button>
              </Column>
            </Column.Group>
          </Control>
        </Field>
        {status == "error_update" &&
          <Help color="danger">Problem in password update</Help>
        }
        {status == "error_confirmation_password" &&
          <Help color="danger">Password don't match</Help>
        }
        {status == "success" &&
          <Help color="primary">Updated with success</Help>
        }
      </form>
    </Fragment>
  )
}

export default UsersEditFormPassword;