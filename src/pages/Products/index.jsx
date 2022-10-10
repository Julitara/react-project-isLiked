import React from 'react';
import style from './Products.module.scss';

import { useDispatch, useSelector } from 'react-redux';

import ProductBlock from '../../components/ProductBlock/index';
import { fetchProduct, selectProduct } from '../../redux/slice/productSlice';
import { selectFavorite } from '../../redux/slice/favoriteSlice';
import { setFilterFavorite } from '../../redux/slice/filterFavoriteSlice';

function Products() {
  const [onFilterFavorite, setOnFilterFavorite] = React.useState(false);

  const dispatch = useDispatch();
  const { items, status } = useSelector(selectProduct);
  const favorite = useSelector(selectFavorite);

  React.useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  const onClickFilter = () => {
    dispatch(setFilterFavorite(favorite));
    setOnFilterFavorite(true);
  };

  React.useEffect(() => {
    if (onFilterFavorite) {
      dispatch(setFilterFavorite(favorite));
    }
  });

  const product = items.map((obj) => <ProductBlock key={obj.id} {...obj} />);

  return (
    <main id="main" aria-label="Основной контент страницы">
      <div className={style.container}>
        <section className={style.products}>
          <h1>Список товаров</h1>
          <button onClick={onClickFilter} className={style.products__btn}>
            Сортировать по <span>&#128151;</span>
          </button>
          {status === 'error' ? (
            <div className={style.products_error}>
              <h2>Произошла ошибка 😕</h2>
              <p>Не удалось получить контент с новостями. Попробуйте повторить попытку позже</p>
            </div>
          ) : (
            <ul className={style.products__list}>
              {status === 'loading' ? 'Загрузка карточек товара' : product}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
}

export default Products;
