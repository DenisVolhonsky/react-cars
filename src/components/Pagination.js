const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };


  console.log(currentPage, totalPages)

  return (
    <div>
      <button onClick={handlePrevious} disabled={currentPage === 1}>
        Preious page
      </button>
      <button onClick={handleNext} disabled={currentPage === totalPages}>
        Next page
      </button>
    </div>
  );
};
export default Pagination;
