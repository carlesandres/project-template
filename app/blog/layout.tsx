import { Header } from 'components/header';

interface BlogTemplateProps {
  children: React.ReactNode;
}

const BlogTemplate = (props: BlogTemplateProps) => {
  return (
    <>
      <Header />
      <main className="prose dark:prose-invert prose-code:before:content-none prose-code:after:content-none">
        {props.children}
      </main>
    </>
  );
};

export default BlogTemplate;
