import { Box, Button, TextField } from '@mui/material';
import { useState } from 'react';

export interface ISignUpFormProps {
  userName: string;
}

interface Props {
  onSubmit(values: ISignUpFormProps): Promise<string>;
  formIsSubmitting: boolean;
}

export function SignUpForm(props: Props) {
  const { onSubmit, formIsSubmitting } = props;
  const [userName, setUserName] = useState('');
  /**
   * Add validation, and switch to Formik or some other form management.
   */
  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        /**
         * Truly speaking, this should do some pre-submit validation.
         * Specifically - empty userName is invalid.
         */
        try {
          await onSubmit({ userName });
          setUserName('');
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error(error);
        }
      }}
    >
      <Box display="flex" gap={2}>
        <TextField
          id="userId"
          name="userId"
          label="Name"
          placeholder="Your user id"
          value={userName}
          onChange={(event) => {
            setUserName(event.target.value);
          }}
          sx={{
            flex: 'auto',
          }}
        />
        <Button type="submit" variant="contained" disabled={formIsSubmitting}>
          Submit
        </Button>
      </Box>
    </form>
  );
}
