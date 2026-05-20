import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../assets/image/logo.png";
import { Search, Bell, User, ChevronDown } from "lucide-react";

function Header() {
  const [isSearchOpened, setIsSearchOpened] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  /*for blur the dropdown menu when click outside of it */
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        {/* logo */}
        <img className={styles.logo} src={logo} alt="Netflix Logo" />
        {/* //navigation links */}
        <nav className={styles.nav}>
          <Link className={styles.navLink} href="">
            Home
          </Link>
          <Link className={styles.navLink} href="">
            Tv Shows
          </Link>
          <Link className={styles.navLink} href="">
            Movies
          </Link>
          <Link className={styles.navLink} href="">
            New & Popular
          </Link>
          <Link className={styles.navLink} href="">
            My list
          </Link>
          <Link className={styles.navLink} href="">
            BrowLe my language
          </Link>
        </nav>

        {/* rihgt side icons */}
        <div className={styles.rightIcons}>
          {/* // search icon */}
          <div className={styles.searchContainer}>
            <button
              onClick={() => setIsSearchOpened(!isSearchOpened)}
              className={styles.searchButton}
            >
              <Search size={20} />
            </button>
            {isSearchOpened && (
              <input
                type="text"
                placeholder="movie title"
                className={styles.searchInput}
              />
            )}
          </div>
          {/* // notification icon */}
          <button className={styles.notificationButton}>
            <Bell size={20} />
            <span className={styles.notificationBadge}>4</span>
          </button>

          {/* // user profile icon */}
          <div className={styles.profileContainer}>
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className={styles.profileButton}
            >
              {/* user icon */}
              <div className={styles.profileAvator}>
                <User size={20} />
              </div>

              {/* dropdown menu * */}
              <ChevronDown size={20} />
            </button>
            {isProfileOpen && (
              <div className={styles.profileMenu}>
                <Link className={styles.profileMenuItem}>Account</Link>
                <Link className={styles.profileMenuItem}>help Center</Link>
                <hr className={styles.profileMenuDivider} />
                <Link className={styles.profileMenuItem}>Sign Out</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
