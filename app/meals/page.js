import MealsGrid from '@/components/meals/meals-grid/meals-grid.component';
import { getMeals } from '@/lib/meals';
import Link from 'next/link';
import { Suspense } from 'react';
import styles from './page.module.css';

import MealsLoadingPage from '@/components/meals/loader/loading';

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

const MealsPage = async () => {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals, created{' '}
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={styles.cta}>
          <Link href={'/meals/share'}>Share your favorite Recipe</Link>
        </p>
      </header>
      <main>
        <Suspense fallback={<MealsLoadingPage />}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
};

export default MealsPage;
