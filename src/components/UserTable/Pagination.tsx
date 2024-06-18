import {  useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import './pagination.scss'
function Pagination({ setDisplayUsers, usersStored }: any) {
  const [itemOffset, setItemOffset] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = usersStored.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(usersStored.length / itemsPerPage);
  useEffect(() => {
    setDisplayUsers(currentItems);
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % usersStored.length;
    setItemOffset(newOffset);
  };

  const handleSelectChange = (e: any) => {
    setItemsPerPage(e.target.value);
    setDisplayUsers(currentItems)
  };

  return (
    <div className="pagination-wrapper">
      <div>
        {" "}
        Showing{" "}
        <select name="select" id="select" onChange={handleSelectChange}>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
          <option value={40}>40</option>
          <option value={50}>50</option>
          <option value={60}>60</option>
          <option value={70}>70</option>
          <option value={80}>80</option>
          <option value={90}>90</option>
          <option value={100}>100</option>
        </select>{" "}
        out of {usersStored.length}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        className="pagination"
        activeClassName="active-page"
        renderOnZeroPageCount={()=> null}
      />
    </div>
  );
}

export default Pagination;
