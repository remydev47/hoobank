import React from 'react'
import { stats } from '../constants';
import styles from '../styles';

const Stats = () => {
  return (
    <section className={`${styles.flexStart} flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map((stat) => (
        <div id={stat.id} className='flex flex-row items-center justify-start flex-1 m-3'>
          <h4 className='font-poppins  font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white'>{stat.value}</h4>
          <p className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white'>{stat.title}</p>
        </div>
      ))}
    </section>
  )
}

export default Stats