import Users from "./container/Users/index";
import Home from "./container/Home/index";
import About from "./container/About/index";
import Category from "./container/Category/index";
import { MENU, ROUTE } from "./common/constant";
export const router = [
  {
    to: ROUTE.HOME,
    name: "Home",
    path: ROUTE.HOME,
    component: Home,
    key: MENU.HOME,
    icon: MENU.HOME,
  },
  {
    to: ROUTE.CATEGORY,
    name: "Category",
    path: ROUTE.CATEGORY,
    component: Category,
    key: MENU.CATEGORY,
    icon: MENU.CATEGORY,
  },
  {
    to: ROUTE.USER,
    name: "User",
    path: ROUTE.USER,
    component: Users,
    key: MENU.USER,
    icon: MENU.USER,
  },
  {
    to: ROUTE.ABOUT,
    name: "About",
    path: ROUTE.ABOUT,
    component: About,
    key: MENU.ABOUT,
    icon: MENU.ABOUT,
  },
];
