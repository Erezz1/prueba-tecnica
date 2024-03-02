import { CSSProperties, FC } from 'react';
import { Typography } from '@mui/material';

interface Props {
  children: string | string[];
  type?: 'text' | 'title',
  style?: CSSProperties
}
export const Text: FC<Props> = ({
  children,
  type = 'text',
  style
}) => {

  if (type === 'title') {
    return (
      <Typography
        textAlign="center"
        fontSize="2rem"
        fontWeight="bold"
        style={style}
      >
        {children}
      </Typography>
    )
  }

  return (
    <Typography
      textAlign="left"
      fontSize="1rem"
      style={style}
    >
      {children}
    </Typography>
  )
}
