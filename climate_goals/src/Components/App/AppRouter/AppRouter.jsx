import { Route, Routes } from "react-router-dom";
import { Main } from "../../Partials/Main/main";

const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<Main />} />
    </Routes>
  );
};
export default AppRouter;
