import React from 'react';
import styles from '../style';
import { clients } from '../constants';


const Client = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client)=>(
          <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
            <img src={client.logo} alt='logo' className='sm:w-[192px] w-[100px] object-contain hover:filter white '/>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Client