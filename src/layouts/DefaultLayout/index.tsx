import { Outlet } from "react-router-dom";

import { LayoutContainer, LayoutContent } from "./styles";

import Header from "./../../components/ui/Header";

export default function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <LayoutContent>
        <Outlet />
      </LayoutContent>
    </LayoutContainer>
  );
}
