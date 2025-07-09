import { Button } from '@/components/ui/button';

type MyButtonProps = React.ComponentProps<typeof Button>;

const MyButton = (props: MyButtonProps) => {
  return <Button {...props} />;
};

export default MyButton;
