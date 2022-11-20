import React from 'react'

function Content(props) {
  return (
    <section className="chart-section">
    <div className="container">
      <div className="text-white text-center lg:px-10">
        <h1 className="chart-title">
        {props.title}
        </h1>
        <p className='text-lg text-center'>{props.subtitle}</p>
        <p className="mt-10 md:text-lg">
        {props.description}
        </p>
      </div>
    </div>
  </section>
  )
}

export default Content