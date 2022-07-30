import Skeleton from 'react-loading-skeleton';
import { StyledTableWrapper, StyledTable } from './RestaurantDishesTable.styles';

const SKELETON_ROWS_QTY: number = 10;

function RestaurantDishesTableSkeleton(): JSX.Element {
  return (
    <StyledTableWrapper>
      <StyledTable>
        <thead>
          <tr>
            {new Array(4).fill(null).map((_, index) => (
              <td key={index}>
                <Skeleton width="70%" />
              </td>
            ))}
          </tr>
        </thead>

        <tbody>
          {new Array(SKELETON_ROWS_QTY).fill(null).map((_, index) => (
            <tr key={index}>
              <td>
                <Skeleton width="50%" />
              </td>
              <td>
                <Skeleton width="60%" />
              </td>
              <td>
                <Skeleton width="70%" />
              </td>
              <td>
                <Skeleton />
              </td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </StyledTableWrapper>
  );
}

export default RestaurantDishesTableSkeleton;
