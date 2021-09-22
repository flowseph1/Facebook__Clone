import React, { fragment } from "react";
import "./App.css";
import Feed from "./components/Feed";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Widgets from "./components/Widgets";
import Login from "./components/Login";
import { useStateValue } from "./components/StateProvider";

function App() {
    const [{ user }, dispatch] = useStateValue();

    return (
        <div className="app">
            {!user ? (
                <Login />
            ) : (
                <fragment>
                    {/*header*/}
                    <Header />
                    {/*App body*/}
                    <div className="app__body">
                        {/*SideBar*/}
                        <Sidebar />
                        {/*Feed*/}
                        <Feed />

                        {/*widgets*/}
                        <Widgets />
                    </div>
                </fragment>
            )}
        </div>
    );
}

export default App;
