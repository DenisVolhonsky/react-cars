import React, { SetStateAction } from "react";

interface PaginationProps {
  currentPage: number;
  setCurrentPage: React.Dispatch<SetStateAction<number>>;
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  setCurrentPage,
  totalPages,
}) => {
  const handlePrevious = (): void => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = (): void => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="container">
      <button
        className="Button"
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        Preious page
      </button>
      <button
        className="Button"
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        Next page
      </button>
    </div>
  );
};
export default Pagination;
