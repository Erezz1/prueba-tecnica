import { CSSProperties, FC } from 'react';
import { Button as Btn } from '@mui/material';
import { grey, blue } from '@mui/material/colors';

interface Props {
  children: string;
  type?: 'primary' | 'grey' | 'text',
  style?: CSSProperties;
  onClick?: () => void;
}
export const Button: FC<Props> = ({
  children,
  type = 'primary',
  style,
  onClick
}) => {

  if (type === 'text') {
    return (
      <Btn
        variant="text"
        style={{
          ...style,
          color: grey[800],
          padding: '10px 2rem'
        }}
        onClick={onClick}
      >
        {children}
      </Btn>
    )
  }

  return (
    <Btn
      variant="contained"
      style={{
        ...style,
        backgroundColor: type === 'primary' ? blue[500] : grey[700],
        padding: '10px 3rem'
      }}
      onClick={onClick}
    >
      {children}
    </Btn>
  )
}
