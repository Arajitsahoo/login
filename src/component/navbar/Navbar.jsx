import Links from "./links/Link";
import Link from "next/link";
import styles from "./navbar.module.css";

const Navbar = ()=>{
    return (
        <div className={styles.container}>
            <div>logo</div>
            <div>
                <Links/>
            </div>
        </div>
    )
}

export default Navbar;