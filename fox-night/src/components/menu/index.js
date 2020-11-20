import {
  HomeOutlined,
  MenuOutlined,
  UserOutlined,
  WindowsOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { router } from "./../../router";
import { MENU } from "../../common/constant";

export const menuIcon = (icon, isActive) => {
  switch (icon) {
    case MENU.HOME:
      return <HomeOutlined />;
    case MENU.USER:
      return <UserOutlined />;
    case MENU.ABOUT:
      return <WindowsOutlined />;
    case MENU.CATEGORY:
      return <MenuOutlined />;
    default:
      return <HomeOutlined />;
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[String(MENU.HOME)]}>
      {router.map((item, index) => {
        return (
          <Menu.Item key={item.key}>
            {menuIcon(item.icon, null)}
            <span>{item.name}</span>
            <Link to={item.to} />
          </Menu.Item>
        );
      })}
    </Menu>
  );
};
