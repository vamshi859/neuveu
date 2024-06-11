import React from 'react';
import styles from './Bar.module.scss';

type Props = {};

const Bar = (props: Props) => {
  return (
    <div className={`row controls ${styles.bar_styling}`}>
      <section>Bar</section>
    </div>
  );
};

export default Bar;
