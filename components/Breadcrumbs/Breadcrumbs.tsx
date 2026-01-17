'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import css from './Breadcrumbs.module.css';

export default function Breadcrumbs() {
  const pathname = usePathname();

  if (pathname === '/') return null;

  const segments = pathname.split('/').filter(Boolean);

  return (
    <nav className={css.navContainer}>
      <ul className={css.navList}>
        <li className={css.navItem}>
          <Link href="/" className={css.navLink}>
            Home
          </Link>
        </li>

        {segments.map((segment, index) => {
          const href = `/${segments.slice(0, index + 1).join('/')}`;
          const isLast = index === segments.length - 1;

          return (
            <li key={href} className={css.navItem}>
              <span className={css.navSeparator}>/</span>
              {isLast ? (
                <span className={css.current}>{segment}</span>
              ) : (
                <Link href={href} className={css.navLink}>
                  {segment}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
