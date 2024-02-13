import React from 'react';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/selectors';
import CarList from '../../components/CarList/CarList';

const Favorite = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <section className="container">
      <CarList cars={favorites} />
    </section>
  );
};

export default Favorite;
