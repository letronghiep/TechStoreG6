import Footer from "../footer";
import Header from "../header";
type Props = {
  children: JSX.Element;
};
function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <>{children}</>
      <Footer />
    </>
  );
}

export default Layout;
