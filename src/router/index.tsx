import { Routes, Route, BrowserRouter } from "react-router-dom";
import BaseLayout from "../layout/BaseLayout";
import Dashboard from "../pages/Dashboard";
import Posts from "../pages/Posts";
import Settings from "../pages/Settings";
import { publicRouter } from "./routes";
function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        {publicRouter.map((route, key) => {
          const Page = route.element;
          return (
            <Route
              key={key}
              path={route.path}
              element={
                <BaseLayout>
                  <Page />
                </BaseLayout>
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default RouterApp;
