import React, { PureComponent } from "react";
import ReactPaginate from "react-paginate";
import "./pagination.css";

class Pagination extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { onPageChange, pageCount } = this.props;

    return (
      <div style={{ marginTop: "5%" }}>
        <ReactPaginate
          previousLabel={"Anterior"}
          nextLabel={"Siguiente"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={5}
          pageRangeDisplayed={10}
          onPageChange={onPageChange}
          containerClassName={"pagination align-pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
          initialPage={0}
          forcePage={0}
        />
      </div>
    );
  }
}

export default Pagination;
