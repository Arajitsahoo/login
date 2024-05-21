
import styles from "./links.module.css"
import Link from "next/link";

const Links = () => {
  const links = [
    { title: "Homepage", path: "/", },
    { title: "Login", path: "/login", },
    
    
  ];

  return (
    <div className={styles.link}>
      {links.map((link =>(
      <Link href={link.path} key={link.title}>
          {link.title}
        </Link>
      )))}
    </div>
  );
};


export default Links