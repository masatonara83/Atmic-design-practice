import { Footer } from "../atoms/layout/Footer";
import { Header } from "../atoms/layout/Haeder";

export const DefaultLayout = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
