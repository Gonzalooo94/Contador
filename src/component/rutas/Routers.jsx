import { BrowserRouter, Route , Routes} from 'react-router-dom';
import Home from '../../pages/Home';

export default function Routers ()
{
    return(
        <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Home />} />
        </Routes>
        </BrowserRouter>
    );
}