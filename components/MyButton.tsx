import { Button } from '@/components/ui/button';

export interface MyButtonProps extends React.ComponentProps<typeof Button> {}

const MyButton = (props: MyButtonProps) => {
  return <Button {...props} />;
};

export default MyButton;
