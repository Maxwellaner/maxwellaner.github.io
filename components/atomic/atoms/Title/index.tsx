import { HTMLAttributes, ReactNode } from 'react';
import { Text } from './styled';

type TitleProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  fontSize?: string;
};

export function Title({ children, fontSize, ...props }: TitleProps) {
  return (
    <Text
      fontSize={fontSize || ''}
      {...props}
    >
      {children}
    </Text>
  );
}