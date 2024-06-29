import React, { useState } from 'react'
import Card from './Card';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';


const Testimonials = (props) => {
    let reviews = props.reviews;
    // Here we fetched data by making useState index variable
    const [index, setIndex] =useState(0);

    function leftShiftHandler() {
      if(index -1 < 0){
        // reviews.length - 1 ---> means last index of Array.
        setIndex(reviews.length - 1);
      }
      else{
        setIndex(index - 1);
      }

    }

    function rightShiftHandler() {
      if(index + 1 >= reviews.length){
        setIndex(0);
      }
      else{
        setIndex(index + 1);
      }

    }

    function supriseMeHandler() {

      let randomIndex =  Math.floor(Math.random() * reviews.length)
      setIndex(randomIndex);

    }


  return (
    <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center
    mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md'>

      <Card review = {reviews[index]}></Card>


      <div className='tracking-wider flex text-3xl mt-10 gap-3 text-violet-400 font-bold mx-auto'>
        <button className='cursor-pointer hover:text-violet-500 '
        onClick={leftShiftHandler} > 
            <FaChevronLeft></FaChevronLeft>
        </button>

        <button className='cursor-pointer hover:text-violet-500 '
        onClick={rightShiftHandler} >
            <FaChevronRight></FaChevronRight>
        </button>
      </div>

      <div className='mt-6'>
        <button
        onClick={supriseMeHandler}
         className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer 
        px-10 py-2 rounded-md font-bold text-white text-lg '>
            Suprise me
        </button>
      </div>
    </div>
  )
}

export default Testimonials
