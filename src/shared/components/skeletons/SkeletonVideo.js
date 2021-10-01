import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

const SkeletonVideo = () => {
   return (
      <div style={{ width: '100%', margin: '1rem 0' }}>
         <SkeletonTheme color='#343a40' highlightColor='#3c4147'>
            <Skeleton height={180} />           
          
         </SkeletonTheme>
      </div>
   )
}

export default SkeletonVideo
