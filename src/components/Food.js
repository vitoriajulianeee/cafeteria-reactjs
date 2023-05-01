import React from 'react'

const Food = ({food,name}) => {
  return (
    <div>
       <div className="col-sm-6 col-lg-4 col-xl-3 mb-3" >
          <div className="card">
            <div className="card-header text-center font-weight-bold">
              <span >
                {name}
              </span>
            </div>
            <div className="card-body p-0">
             
              <img src={food.image} alt={name} className="w-100" style ={{width: 300}}/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Food
