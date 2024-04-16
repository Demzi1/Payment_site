import React from 'react';
import { card } from '../assets';
import styles, {layout} from '../style';
import Button from './Button';

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className='sm:block hidden'/> in few easy steps
        </h2>
        <p className={`${styles.paragraph} max-w-[480px] mt-5`}>
          Lorem ipsum dolor sit amet animi sed esse tenetur nihil, id nostrum,
          laborum tempore, aut earum perspiciatis Minima nisi similique in dolor
        </p>
        <Button style="mt-10"/>
      </div>

      <div className={layout.sectionImgReverse}>
        <img  src={card} alt='card' className='w-full h-full'/>
      </div>
      
    </section>
  )
}

export default CardDeal