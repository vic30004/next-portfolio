import React, {Fragment} from 'react' 
import { Image, Placeholder } from 'cloudinary-react';

export default () => (
  <Fragment>
    <div className='card-container'>
      <div className='card'>
        <div className='logo'>
          {' '}
          <Image
            cloudName='dawyijhjw'
            publicId={'portfolio/logos/67-512_zzvcnm'}
            width='200'
            format='webp'
            secure='true'
            responive
            responsiveUseBreakpoints='true'
            quality='auto'
            fetchFormat='auto'
            dpr='auto'
            loading='lazy'
            crop='scale'
            height='200'
            alt={`SEO`}
          >
            <Placeholder type='pixelate' />
          </Image>
        </div>
        <h2>SEO</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ex
          animilaudantium, laborum beatae tempore.
        </p>
      </div>
      <div className='card'>
        <div className='logo'>
          <img src='../static/images/ux.png' alt='' />
        </div>
        <h2>UX/UI</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ex
          animilaudantium, laborum beatae tempore.
        </p>
      </div>
      <div className='card'>
        <div className='logo'>
          <img src='../static/images/scalable.png' alt='' />
        </div>
        <h2>Scalability</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ex
          animilaudantium, laborum beatae tempore.
        </p>
      </div>
    </div>
  </Fragment>
);