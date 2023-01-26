import { CardProps } from './Card.types';
import * as Style from './Card.style';

const Card = ({ title = 'Default title' }: CardProps) => (
  <Style.Wrapper data-testid="card">
    <Style.Title>{title}</Style.Title>
  </Style.Wrapper>
);

export default Card;
