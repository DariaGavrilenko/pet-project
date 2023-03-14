import { Button } from 'components/shared/Button';
import { Typography } from 'components/shared/Typography';
import s from './CardDetails.module.scss';
// import rating from '../../assets/img/star.png';

const CardDeails = () => {
  const example = {
    id: 5,
    title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: 'jewelery',
    image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
    rating: {
      rate: 4.6,
      count: 400
    }
  };
  return (
    <div className={s.detailsContainer}>
      <div>
        <img src={example.image} alt="" />
      </div>
      <div className={s.descriptionContainer}>
        <Typography color="dark" variant="h1">
          {example.title}
        </Typography>
        <Typography color="green" variant="h3" className={s.priceContainer}>
          {`${example.price}$`}
        </Typography>
        <Typography color="dark" variant="h4">
          {`${example.rating.count} times bought`}
        </Typography>
        {/* <img src={rating} alt="" className={s.rating} /> */}
        <Typography color="grey" variant="h4" className={s.rate}>
          {example.rating.rate}
        </Typography>
        <Typography color="dark" variant="h3">
          {example.description}
        </Typography>
        <Button color="blue" onClickHandler={() => {}}>
          {'Buy'}
        </Button>
      </div>
    </div>
  );
};

export default CardDeails;
