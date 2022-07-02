import { getHumanFriendlyPrice } from 'utils/apiPriceUtils';

interface FormattedPriceProps {
  value: number;
}

function FormattedPrice({ value }: FormattedPriceProps): JSX.Element {
  return <span>{getHumanFriendlyPrice(value)}</span>;
}

export default FormattedPrice;
