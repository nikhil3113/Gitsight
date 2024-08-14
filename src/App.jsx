// import BgChanger from "./Pages/BgChanger";

import { RecoilRoot } from "recoil";
import Profile from "./Pages/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
