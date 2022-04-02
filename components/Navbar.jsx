import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.name}>
          <Link href="/" passHref>
            <h1 style={{ cursor: "pointer" }}>pizzadeck</h1>
          </Link>
        </div>
      </div>
      <Link href="/cart" passHref>
        <div className={styles.item}>
          <div style={{ cursor: "pointer" }} className={styles.cart}>
            <Image src="/img/cart.png" alt="" width="30px" height="30px" />
            <div className={styles.counter}>{quantity}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
