import { useState } from 'react';

const usePaging = () => {
  const [page, setPage] = useState(1);
  const prevPage = () => setPage(page >= 1 ? page - 1 : 1);
  const nextPage = () => setPage(page + 1);

  return { page, prevPage, nextPage };
};

export default usePaging;
