import PageFooter from "./PageFooter";
import PageHeader from "./PageHeader";

interface Props {
  children: React.ReactNode;
}

const Page: React.FC<Props> = (props) => {
  const { children } = props;
  return (
    <div className="overflow-hidden">
      <PageHeader />
      <main>{children}</main>
      <PageFooter />
    </div>
  );
};

export default Page;
