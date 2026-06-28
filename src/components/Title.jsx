import React from 'react'

const Title = ({ subtitle, title1, title2, title3, para }) => {
  return (
    <>
      <div className=''>
        <div>
            <p className='font-firaCode font-normal text-base text-accent'>// {subtitle}</p>
        </div>
        <div className='leading-16 mt-4 mb-2'>
            <h2 className='font-inter font-bold text-[4vw] text-text'>{title1}<span className='text-accent'>{title2}</span></h2>
            <span className='font-inter font-bold text-[4vw] text-accent2'>{title3}</span>
        </div>
        <p className='font-inter font-medium max-w-140 text-text-muted'>{para}</p>
      </div>
    </>
  )
}

export default Title
