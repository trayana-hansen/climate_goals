import { Route, Routes } from 'react-router-dom';
import { Cleanup } from '../../Partials/Pages/Cleanup/cleanup';
import { Co2 } from '../../Partials/Pages/Co2/co2';
import { Home } from '../../Partials/Pages/Home/home';
import { Tilmeld } from '../../Partials/Pages/Tilmeld/tilmeld';

const AppRouter = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/co2" element={<Co2 />} />
            <Route path="/cleanup" element={<Cleanup />} />
            <Route path="/tilmeld" element={<Tilmeld />} />
        </Routes>
    )
}

export default AppRouter;
