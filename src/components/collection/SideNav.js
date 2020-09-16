import React from "react";
import { Menu } from "antd";
import { Link, useHistory } from "react-router-dom";

export const SideNav = () => {
  const history = useHistory();
  const navItems = [
    { title: "My Store", path: "/" },
    { title: "My Collections", path: "/list" },
    { title: "Add Item", path: "/add" },
    { title: "Settings", path: "/setting" },
  ];
  const activeItem =
    navItems.filter((e) => history.location.pathname.includes(e.path)).pop() ||
    navItems[0];
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={[activeItem.path]}
      style={{
        height: "100%",
        borderRight: 0,
        paddingTop: 20,
        fontWeight: "500",
      }}
    >
      {navItems.map(({ title, path }) => (
        <Menu.Item key={path}>
          <Link to={path}>{title}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
};
