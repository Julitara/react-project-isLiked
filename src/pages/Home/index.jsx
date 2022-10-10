import React from 'react';
import style from './Home.module.scss';

function Home() {
  return (
    <main id="main" aria-label="Основной контент страницы">
      <div className={style.container}>
        <section className={style.home}>
          <h1>Главная страница сайта</h1>
          <h2>Контент страницы</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis vel eveniet doloremque
            reprehenderit, adipisci laborum ea quod nulla non optio in eos minus dolorem labore
            accusantium. Nisi, illum. Possimus, voluptates!
          </p>
        </section>
      </div>
    </main>
  );
}

export default Home;
