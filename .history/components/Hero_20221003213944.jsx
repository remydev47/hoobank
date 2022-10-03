import React from 'react'
import styles from '../styles'

const Hero = () => {
  return (
   <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:p-18 px-6`}>
      <div className={style.wrapper1}>
        <img 
          src='/images/Discount.svg'
          className={style.icon}
        />
        <p className={`${styles.paragraph} ml-2`}>
         <span className='text-white'>20%</span> Discount for {" "}
         <span className='text-white'>1 Month</span> Account
        </p>
      </div>
    </div>
   </section>

  )
}

export default Hero;

const style = {
  wrapper1:`flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px mb-2]`,
  icon:`w-[32px] h-[32px]`,
  description:`flex flex-row justify-between items-center w-full`,
  details1:`flex-1 font-poppins font-semibold ss:text-[72px]
   text-[52px] text-white ss:leading-[100px] leading-[75px]`,
   details2:`font-poppins font-semibold ss:text-[68px]
   text-[52px] text-white ss:leading-[100px] leading-[75px] w-full`,
  started:`ss:flex hidden md:mr-4 mr-0`,
  image:`w-[100%] h-[100%] relative z-[5]`,
  div1:`absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient`,
  div2:`absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient`, 
  div3:`absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient`, 
}