import styles from "./Layout.module.css"

import ContactUs from "./ContactUs"
import Download from "./Download"
import Help from "./Help"
import Home from "./Home"
import JoinUs from "./JoinUs"
import Login from "./Login"
import Search from "./Search"
import Settings from "./Settings"

function Layout(){
    return (
        <>
            <div>
                <h2>Individual Components</h2>
                <div className={styles.layout}>
                    <JoinUs/>
                    <Settings/>
                    <Login/>
                    <ContactUs/>
                    <Search/>
                    <Help/>
                    <Home/>
                    <Download/>
                </div>
            </div>
        </>
    )
}

export default Layout