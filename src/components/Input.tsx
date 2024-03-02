import { FC } from 'react';
import { TextField, TextFieldProps } from '@mui/material';

import { Text } from './Text';

interface Props extends Omit<TextFieldProps, 'variant'>{}
export const Input: FC<Props> = ({ ...props }) => {
  return (
    <div>
      { props.placeholder &&
        <Text
          style={{
            marginBottom: '5px',
            fontWeight: 'bold'
          }}>
            {props.placeholder}
          </Text>
      }
      <TextField
        {...props}
        placeholder=""
        style={{ width: '100%' }}
      />
    </div>
  )
}
