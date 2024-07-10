import React from "react";
import { Link, useLocation } from "react-router-dom";

const BreadCrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <section className='page-title'>
      <div className='container'>
        <div className='row'>
          <div className='col col-xs-12'>
            <div className='breadcumb-wrap'>
              <h2>
                {pathnames.length > 0
                  ? pathnames[pathnames.length - 1].replaceAll("-", " ")
                  : "Home"}
              </h2>
              <ol>
                <li>
                  <Link to='/'>
                    <i className='icon-36'></i> Inicio
                  </Link>
                </li>
                {pathnames.map((name, index) => (
                  <li key={index}>
                    <Link to={`/${pathnames.slice(0, index + 1).join("/")}`}>
                      {name.replaceAll("-", " ")}
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadCrumb;
