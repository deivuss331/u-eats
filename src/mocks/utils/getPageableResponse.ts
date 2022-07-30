import type { ApiPageRequest, ApiPageableResponse } from 'types';

interface GetPageableResponseProps<T> extends ApiPageRequest {
  content: T[];
}

export default <T>({ page, size, content }: GetPageableResponseProps<T>): ApiPageableResponse<T> => {
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
