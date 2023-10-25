"use client";

import styles from "./Pagination.module.scss";

type PaginationProps = {
  count: number;
  active: number;
  onClick: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({ count, active, onClick }) => {
  if (count < 2) return null;

  return (
    <div className={styles.pagination}>
      <ul>
        {Array.from({ length: count }, (_, i) => i + 1).map((page) => (
          <li key={page} className={styles.pageItem}>
            <button
              className={page === active ? styles.active : undefined}
              onClick={() => onClick(page)}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
