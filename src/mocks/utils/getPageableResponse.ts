import type { Pageable, PageableResponse } from 'types';

interface IProps<T> extends Pageable {
  content: T[];
}

export default <T>({ page, size, content }: IProps<T>): PageableResponse<T> => {
  const totalItems: number = content.length;
  const isValidPage: boolean = page * size <= totalItems;
  const totalPages: number = Math.ceil(totalItems / size);
  const validPage: number = isValidPage ? page : totalPages - 1;

  return {
    totalPages,
    pageable: {
      page: validPage,
      size,
    },
    content: content.slice(validPage * size, (validPage + 1) * size),
  };
};
