import Profile from './about/Profile';
import dynamic from 'next/dynamic';
import { Image, Placeholder } from 'cloudinary-react';
const Badges = dynamic(() => import('./badges/Badges'), {
  loading: <p>Loading...</p>,
});
export default () => (
  <section id='about'>
    <h2 className='title'>About</h2>
    <div className='card-container'>
      <div className='card'>
        <div className='logo'>
          <Image
            class='seo'
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
            style={{ width: '100%', height: '100%' }}
          >
            <Placeholder type='pixelate' />
          </Image>
        </div>
        <h2>SEO</h2>
        <p>
          What's the point of creating a great website when no one can find it?
          This is why focusing on SEO is one of my top priorities.
        </p>
      </div>
      <div className='card'>
        <div className='logo'>
          <Image
            class='seo'
            cloudName='dawyijhjw'
            publicId={'portfolio/logos/ux_goyr0i'}
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
            alt={`ux/ui`}
            style={{ width: '100%', height: '100%' }}
          >
            <Placeholder type='pixelate' />
          </Image>
        </div>
        <h2>UX/UI</h2>
        <p>
          Imagine having the best backend in the world but 0 users. My goal is
          to create the best user interface and provide the best user experience
          to allow for the backend to shine and to make sure every user has a
          memorable experience.
        </p>
      </div>
      <div className='card'>
        <div className='logo'>
          <Image
            class='seo'
            cloudName='dawyijhjw'
            publicId={'portfolio/logos/scalable_fvw8jq'}
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
            alt={`scale`}
            style={{ width: '100%', height: '100%' }}
          >
            <Placeholder type='pixelate' />
          </Image>
        </div>
        <h2>Scalability</h2>
        <p>
          There should always be room for growth. Keeping that in mind while
          programing is one of the most important things.
        </p>
      </div>
    </div>

    <div className='main-container'>
      <Profile />
      <Badges />
    </div>

    <style jsx>
      {`
        img {
          width: 100%;
          height: 100%;
          display: block;
        }

        .title {
          margin: 2rem;
        }

        #about {
          width: 100%;
          height: 100%;
          text-align: center;
          clear: both;
          font-family: 'Raleway', sans-serif;
          font-display: swap;
        }

        .card-container {
          max-width: 1800px;
          margin: 2rem auto;
          display: flex;
          height: 100%;
          justify-content: space-between;
          align-items: center;
        }

        .card {
          width: 700px;
          padding: 1rem;
          margin: 0 2rem;
          display: flex;
          justify-content: center;
          flex-flow: column wrap;
          overflow: hidden;
        }
        .card .logo {
          width: 200px;
          height: 200px;
          margin: 0 auto;
        }

        .main-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-column-gap: 5px;
          margin: 0 auto;
          justify-items: center;
        }

        .card:hover .logo .seo {
          animation: grow 1s ease infinite;
          transition: all 60s ease;
        }

        .card:hover .logo .ux {
          animation: spin 1s ease infinite;
          transition: all 60s ease;
        }

        .card:hover .logo .scale {
          animation: fly 1s ease infinite;
          transition: all 60s ease;
          overflow: hidden;
        }

       
        @media (max-width: 1200px) {
          .card-container {
            flex-flow: column nowrap;
          }
          .card {
            width: 320px;
            margin: 1rem 0;
            padding: 0;
            overflow: hidden;
          }

          .card .logo {
            width: 100px;
            height: 100px;
            margin: 0 auto;
          }

          .card p {
            margin: 0;
            padding: 0.5rem;
          }
          .card h2 {
            margin: 0.5rem;
          }

          .main-container {
            display: flex;
            flex-flow: column nowrap;
            height: 750px;
          }
        }
      `}
    </style>
  </section>
);
