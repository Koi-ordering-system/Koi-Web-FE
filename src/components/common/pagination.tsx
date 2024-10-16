import { Button } from "@/components/ui";
import { cn } from "@/lib";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import React from "react";

interface PaginationProps {
  className?: string;
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  className,
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const generatePageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 6) {
      // Hiển thị tất cả các trang nếu tổng số trang <= 6
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Luôn hiển thị trang 1, trang hiện tại, và trang cuối
      pages.push(1);

      if (currentPage > 3) {
        pages.push("dots-left");
      }

      // Hiển thị trang hiện tại và hai trang liền kề
      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) {
        pages.push("dots-right");
      }

      pages.push(totalPages);
    }

    return pages;
  };

  const handlePageChange = (page: number | string) => {
    if (typeof page === "number") {
      onPageChange(page);
    }
  };

  return (
    <div className={cn("flex justify-center w-full gap-4", className)}>
      {/* Nút Previous */}
      <Button
        variant="ghost"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeft />
        <span className="hidden font-semibold">Previous</span>
      </Button>

      {/* Số trang */}
      {generatePageNumbers().map((page, index) => (
        <Button
          key={index}
          variant={currentPage === page ? "default" : "ghost"}
          onClick={() => handlePageChange(page)}
          disabled={typeof page === "string"}
        >
          {typeof page === "string" ? (
            <MoreHorizontal className="w-4 h-4" />
          ) : (
            page
          )}
        </Button>
      ))}

      {/* Nút Next */}
      <Button
        variant="ghost"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <span className="hidden font-semibold">Next</span>
        <ChevronRight />
      </Button>
    </div>
  );
};

export default Pagination;
