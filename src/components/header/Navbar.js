import { useState } from "react";
import Toolbar from "./toolBar/Toolbars";
import "./header.css";
import SideDrawer from "./sideMenu/SideDrawer";
import BackDrop from "./backdrop/BackDrop";

export default function App() {

  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen((sideDrawerOpen) => {
      return { sideDrawerOpen };
    });
  };

  const backDropClickHandler = () => {
    setSideDrawerOpen({ sideDrawerOpen: false });
  };

  let backdrop;

  if (sideDrawerOpen) {
    backdrop = <BackDrop click={backDropClickHandler} />;
  }
  return (
    <div style={{ height: "100%" }}>
      <Toolbar drawerToggleClickHandler={drawerToggleClickHandler} />
      <SideDrawer show={sideDrawerOpen} />
      {backdrop}
      <main style={{ marginTop: "44px" }}></main>
    </div>
  );
}
