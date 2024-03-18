import React from 'react'
import BlockContent from "@sanity/block-content-to-react";

const BlockContents = ({data}) => {
     return (
          <div className='mt-10'>
               <BlockContent
                    blocks={data}
                    projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                    dataset="production"
               />
          </div>
     )
}

export default BlockContents