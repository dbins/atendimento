import React, { Component } from "react";
import { Link } from "react-router-dom";
const paginas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
export default class Paginacao extends Component {
  render() {
    return (
      <ul className="pagination">
        <li className="page-item">
          <Link
            className="page-link"
            to={{
              pathname: "/catalogo",
              search: "?pagina=1"
            }}
          >
            «
          </Link>
        </li>
        {paginas.map(item => (
          <li key={item} className="page-item">
            <Link
              className="page-link"
              to={{
                pathname: "/catalogo",
                search: "?pagina=" + item
              }}
            >
              {item}
            </Link>
          </li>
        ))}
        <li className="page-item">
          <Link
            className="page-link"
            to={{
              pathname: "/catalogo",
              search: "?pagina=13"
            }}
          >
            »
          </Link>
        </li>
      </ul>
    );
  }
}
