import React from 'react'
import {CustomPagination} from "../components/CustomPagination";

const Catalog = () => {
    const total = 200;
  return (
    <div>Catalog
          <CustomPagination total={total}/>
    </div>
  )
}

export default Catalog