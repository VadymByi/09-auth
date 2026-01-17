import css from './Header.module.css';
import Link from 'next/link';
import AuthNavigation from '../AuthNavigation/AuthNavigation';

const Header = () => {
  return (
    <header className={css.header}>
      <Link href="/" aria-label="Home" className={css.logo}>
        NoteHub
      </Link>
      <nav aria-label="Main Navigation" className={css.navContainer}>
        <ul className={css.navigation}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/notes/filter/all">Notes</Link>
          </li>
        </ul>

        <AuthNavigation />
      </nav>
    </header>
  );
};

export default Header;
