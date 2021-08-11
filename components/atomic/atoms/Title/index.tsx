import { ReactNode } from 'react';
import { Text } from './styled';

type TitleProps = {
  children: ReactNode;
  fontSize?: string;
}

export function Title({ children, fontSize }: TitleProps) {
  return (
    <Text
      fontSize={fontSize || ''}
    >
      {children}
    </Text>
  );
}