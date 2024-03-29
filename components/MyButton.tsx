import { Button, ButtonProps } from '@/components/ui/button';

export interface MyButtonProps extends ButtonProps {}

const MyButton = (props: MyButtonProps) => {
  return <Button {...props} />;
};

export default MyButton;
