'use client';

import { componentsToShow } from '@/constants/componentsToShow';
import { Country } from '@/types/countriesResponses';
import { useInfiniteScrolling } from '@/hooks/useInfiniteScrolling';

import styles from './styles.module.scss';

interface HomeComponentToShowProps {
  countries: Country[];
}

export default function HomeComponentToShow({ countries }: HomeComponentToShowProps) {
  const [showItems, observerTarget] = useInfiniteScrolling();

  return (
    <div className={styles.container}>
      {componentsToShow.slice(0, showItems).map(({ component: Component, id }) => (
        <Component
          key={id}
          countries={countries}
        />
      ))}
      <div ref={observerTarget} />
    </div>
  );
}
