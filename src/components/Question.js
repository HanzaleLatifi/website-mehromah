import React from 'react'

function Question({ques , answer , id , target, isShow}) {
  return (
    <div className="accordion-item bg-white border border-gray-200  my-4 ">
    <h2 className="accordion-header mb-0" id={id}>
      <button
        className="
    accordion-button
    transform
    relative
    flex
    items-center
    text-xl
    w-full
    py-4
    px-5
    text-pink-700 text-left
    bg-white
    border-0
    transition
    focus:outline-none
  "
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={`#${target}`}
        aria-expanded="true"
        aria-controls={target}
      >
        {ques}
      </button>
    </h2>
    <div
      id={target}
      className={`accordion-collapse collapse ${isShow ? 'show' : '' }`}
      aria-labelledby={id}
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body  py-4 px-5 bg-yellow-100 ">
        <p className='text-base font-light'> {answer} </p>
      </div>
    </div>
  </div>
  )
}

export default Question