import { Pagination as MuiPagination } from '@mui/material';
import type { PaginationProps } from '@mui/material';

function Pagination({ page, onChange, ...props }: PaginationProps): JSX.Element {
  return (
    <MuiPagination
      {...props}
      page={page != null ? page + 1 : undefined}
      onChange={(evt, newPage) => onChange?.(evt, newPage - 1)}
    />
  );
}

export default Pagination;
