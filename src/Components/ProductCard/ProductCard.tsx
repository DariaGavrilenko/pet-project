import { Typography } from 'components/shared/Typography';
import s from './ProductCard.module.scss';
import rating from '../../assets/img/star.png';

type ProductCardPropsType = {
  image: string;
  rate: number;
  title: string;
  price: number;
};

const ProductCard = ({ image, rate, title, price }: ProductCardPropsType) => {
  return (
    <div className={s.cardContainer}>
      <img
        className={s.productImg}
        src={image}
        alt="John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet"
      />
      <Typography color="dark" variant="h3" className={s.cardTitle}>
        {title}
      </Typography>
      <div className={s.priceAndRatingContainer}>
        <div className={s.ratingContainer}>
          <img src={rating} alt="" />
          <Typography color="grey" variant="h5">
            {rate}
          </Typography>
        </div>
        <div className={s.priceContainer}>
          <Typography color="green" variant="h5">
            {`${price}$`}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
