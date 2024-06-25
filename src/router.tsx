import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginView from "./views/LoginView";

export default function Routes() {

    return (

        <BrowserRouter>
            <Routes>
                <Route>
                    <Route path="/auth/login" element={<LoginView />} />
                </Route>
                
            </Routes>
        </BrowserRouter>
        
    );
}
