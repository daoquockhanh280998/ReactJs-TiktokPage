import Header from "~/components/Layout/components/Header/Header";
function HeaderLayout({children}) {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default HeaderLayout;
