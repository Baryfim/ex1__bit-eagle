import Exchange from "./pages/Exchange/Exchange";
import Home from "./pages/Home/Home";
import { EXCHANGE_ROUTE, HOME_ROUTE } from "./utils/consts";

export const routes = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: EXCHANGE_ROUTE,
        Component: Exchange
    }
]