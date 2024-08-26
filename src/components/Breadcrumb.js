import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav className="text-sm text-white/10">
      <ol className="list-reset flex">
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;

          return (
            <React.Fragment key={to}>
              <span className="mx-2">/</span>
              <li>
                {isLast ? (
                  <span className="text-white/25">{value}</span>
                ) : (
                  <Link to={to} className="text-blue-500 hover:text-blue-600">
                    {value}
                  </Link>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
