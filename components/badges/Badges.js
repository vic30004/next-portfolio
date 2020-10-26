import React, { lazy, Suspense } from 'react';
import { Image, Placeholder } from 'cloudinary-react';

export default () => (
  <div id='badges'>
    <div id='pinboard'>
      <Image
        cloudName='dawyijhjw'
        publicId={'portfolio/logos/pin-board-2631965_960_720_b0s9us'}
        width='auto'
        format='webp'
        secure='true'
        responive
        responsiveUseBreakpoints='true'
        quality='auto'
        fetchFormat='auto'
        dpr='auto'
        loading='lazy'
        crop='scale'
        height='494'
        alt={`pinboard`}
        style={{ width: '100%', height: '100%' }}
      >
        <Placeholder type='pixelate' />
      </Image>
      <div className='container'>
        <div className='logo'>
          <Image
            cloudName='dawyijhjw'
            publicId={'portfolio/logos/HTML5_Badge_512_gdbacg'}
            width='65'
            format='webp'
            secure='true'
            responive
            responsiveUseBreakpoints='true'
            quality='auto'
            fetchFormat='auto'
            dpr='auto'
            loading='lazy'
            crop='fit'
            height='95'
            alt={`htlm5`}
            style={{ width: '100%', height: '100%' }}
          >
            <Placeholder type='pixelate' />
          </Image>
        </div>
        <div className='logo'>
          <Image
            cloudName='dawyijhjw'
            publicId={'portfolio/logos/1200px-CSS.3.svg_qmqrsc'}
            width='auto'
            format='webp'
            secure='true'
            responive
            responsiveUseBreakpoints='true'
            quality='auto'
            fetchFormat='auto'
            dpr='auto'
            loading='lazy'
            crop='fill'
            height='95'
            alt={`css`}
            style={{ width: '100%', height: '100%' }}
          >
            <Placeholder type='pixelate' />
          </Image>
        </div>
        <div className='logo'>
          <Image
            cloudName='dawyijhjw'
            publicId={'portfolio/logos/600px-JavaScript-logo_pcwwgy'}
            width='auto'
            format='webp'
            secure='true'
            responive
            responsiveUseBreakpoints='true'
            quality='auto'
            fetchFormat='auto'
            dpr='auto'
            loading='lazy'
            crop='fill'
            height='95'
            alt={`javascript`}
            style={{ width: '100%', height: '100%' }}
          >
            <Placeholder type='pixelate' />
          </Image>
        </div>
        <div className='logo'>
          <Image
            cloudName='dawyijhjw'
            publicId={'portfolio/logos/590px-Node.js_logo.svg_tnujf6'}
            width='auto'
            format='webp'
            secure='true'
            responive
            responsiveUseBreakpoints='true'
            quality='auto'
            fetchFormat='auto'
            dpr='auto'
            loading='lazy'
            crop='fill'
            height='95'
            alt={`node js`}
            style={{ width: '100%', height: '100%' }}
          >
            <Placeholder type='pixelate' />
          </Image>
        </div>
        <div className='logo'>
          <Image
            cloudName='dawyijhjw'
            publicId={'portfolio/logos/1200px-MySQL.svg_kwdmwj'}
            width='auto'
            format='webp'
            secure='true'
            responive
            responsiveUseBreakpoints='true'
            quality='auto'
            fetchFormat='auto'
            dpr='auto'
            loading='lazy'
            crop='fill'
            height='95'
            alt={`mysql`}
            style={{ width: '100%', height: '100%' }}
          >
            <Placeholder type='pixelate' />
          </Image>
        </div>
        <div className='logo'>
          <Image
            cloudName='dawyijhjw'
            publicId={'portfolio/logos/jquery-logo-png--800_b53nwl'}
            width='auto'
            format='webp'
            secure='true'
            responive
            responsiveUseBreakpoints='true'
            quality='auto'
            fetchFormat='auto'
            dpr='auto'
            loading='lazy'
            crop='fill'
            height='95'
            alt={`jquery`}
            style={{ width: '100%', height: '100%' }}
          >
            <Placeholder type='pixelate' />
          </Image>
        </div>
        <div className='logo'>
          <Image
            cloudName='dawyijhjw'
            publicId={'portfolio/logos/512px-Bootstrap_logo.svg_kl3qb8'}
            width='auto'
            format='webp'
            secure='true'
            responive
            responsiveUseBreakpoints='true'
            quality='auto'
            fetchFormat='auto'
            dpr='auto'
            loading='lazy'
            crop='fill'
            height='95'
            alt={`bootstrap`}
            style={{ width: '100%', height: '100%' }}
          >
            <Placeholder type='pixelate' />
          </Image>
        </div>
        <div className='logo'>
          <Image
            cloudName='dawyijhjw'
            publicId={'portfolio/logos/Python_logo-512_urnfbd'}
            width='auto'
            format='webp'
            secure='true'
            responive
            responsiveUseBreakpoints='true'
            quality='auto'
            fetchFormat='auto'
            dpr='auto'
            loading='lazy'
            crop='fill'
            height='95'
            alt={`python`}
            style={{ width: '100%', height: '100%' }}
          >
            <Placeholder type='pixelate' />
          </Image>
        </div>
        <div className='logo'>
          <Image
            cloudName='dawyijhjw'
            publicId={'portfolio/logos/C_Sharp_logo_noq1za'}
            width='auto'
            format='webp'
            secure='true'
            responive
            responsiveUseBreakpoints='true'
            quality='auto'
            fetchFormat='auto'
            dpr='auto'
            loading='lazy'
            crop='fill'
            height='95'
            alt={`c#`}
            style={{ width: '100%', height: '100%' }}
          >
            <Placeholder type='pixelate' />
          </Image>
        </div>
        <div className='logo'>
          <Image
            cloudName='dawyijhjw'
            publicId={'portfolio/logos/go-logo-046185B647-seeklogo.com_flyzjn'}
            width='auto'
            format='webp'
            secure='true'
            responive
            responsiveUseBreakpoints='true'
            quality='auto'
            fetchFormat='auto'
            dpr='auto'
            loading='lazy'
            crop='fill'
            height='95'
            alt={`go`}
            style={{ width: '100%', height: '100%' }}
          >
            <Placeholder type='pixelate' />
          </Image>
        </div>
        <div className='logo'>
          <Image
            cloudName='dawyijhjw'
            publicId={'portfolio/logos/mongodb-logo_fhejdh'}
            width='auto'
            format='webp'
            secure='true'
            responive
            responsiveUseBreakpoints='true'
            quality='auto'
            fetchFormat='auto'
            dpr='auto'
            loading='lazy'
            crop='fill'
            height='95'
            alt={`mongodb`}
            style={{ width: '100%', height: '100%' }}
          >
            <Placeholder type='pixelate' />
          </Image>
        </div>
        <div className='logo'>
          <Image
            cloudName='dawyijhjw'
            publicId={
              'portfolio/logos/firebase-logo-402F407EE0-seeklogo.com_k3cgly'
            }
            width='auto'
            format='webp'
            secure='true'
            responive
            responsiveUseBreakpoints='true'
            quality='auto'
            fetchFormat='auto'
            dpr='auto'
            loading='lazy'
            crop='fill'
            height='95'
            alt={`firebase`}
            style={{ width: '100%', height: '100%' }}
          >
            <Placeholder type='pixelate' />
          </Image>
        </div>
        <div className='logo'>
          <Image
            cloudName='dawyijhjw'
            publicId={'portfolio/logos/react_o25hr7'}
            width='auto'
            format='webp'
            secure='true'
            responive
            responsiveUseBreakpoints='true'
            quality='auto'
            fetchFormat='auto'
            dpr='auto'
            loading='lazy'
            crop='fill'
            height='95'
            alt={`react`}
            style={{ width: '100%', height: '100%' }}
          >
            <Placeholder type='pixelate' />
          </Image>
        </div>
        <div className='logo'>
          <Image
            cloudName='dawyijhjw'
            publicId={'portfolio/logos/1280px-Nextjs-logo.svg_ia6q4x'}
            width='auto'
            format='webp'
            secure='true'
            responive
            responsiveUseBreakpoints='true'
            quality='auto'
            fetchFormat='auto'
            dpr='auto'
            loading='lazy'
            crop='fill'
            height='95'
            alt={`nextjs`}
            style={{ width: '100%', height: '100%' }}
          >
            <Placeholder type='pixelate' />
          </Image>
        </div>
        <div className='logo'>
          <Image
            cloudName='dawyijhjw'
            publicId={'portfolio/logos/1_bm7KFpEG2Qahn24t0OTNlQ_lji4zp'}
            width='auto'
            format='webp'
            secure='true'
            responive
            responsiveUseBreakpoints='true'
            quality='auto'
            fetchFormat='auto'
            dpr='auto'
            loading='lazy'
            crop='fill'
            height='95'
            alt={`postgresSQL`}
            style={{ width: '100%', height: '100%' }}
          >
            <Placeholder type='pixelate' />
          </Image>
        </div>
        <div className='logo'>
          <Image
            cloudName='dawyijhjw'
            publicId={
              'portfolio/logos/Docker-Logo-White-RGB_Vertical-BG_0_fpgkur'
            }
            width='auto'
            format='webp'
            secure='true'
            responive
            responsiveUseBreakpoints='true'
            quality='auto'
            fetchFormat='auto'
            dpr='auto'
            loading='lazy'
            crop='fill'
            height='95'
            alt={`docker`}
            style={{ width: '100%', height: '100%' }}
          >
            <Placeholder type='pixelate' />
          </Image>
        </div>
        <div className='logo'>
          <Image
            cloudName='dawyijhjw'
            publicId={'portfolio/logos/django_cfxthi'}
            width='auto'
            format='webp'
            secure='true'
            responive
            responsiveUseBreakpoints='true'
            quality='auto'
            fetchFormat='auto'
            dpr='auto'
            loading='lazy'
            crop='fill'
            height='95'
            alt={`django`}
            style={{ width: '100%', height: '100%' }}
          >
            <Placeholder type='pixelate' />
          </Image>
        </div>
        <div className='logo'>
          <Image
            cloudName='dawyijhjw'
            publicId={'portfolio/logos/download_fnw9m2'}
            width='auto'
            format='webp'
            secure='true'
            responive
            responsiveUseBreakpoints='true'
            quality='auto'
            fetchFormat='auto'
            dpr='auto'
            loading='lazy'
            crop='fill'
            height='95'
            alt={`aws`}
            style={{ width: '100%', height: '100%' }}
          >
            <Placeholder type='pixelate' />
          </Image>
        </div>
        <div className='logo'>
          <Image
            cloudName='dawyijhjw'
            publicId={'portfolio/logos/gql_cfhaey'}
            width='auto'
            format='webp'
            secure='true'
            responive
            responsiveUseBreakpoints='true'
            quality='auto'
            fetchFormat='auto'
            dpr='auto'
            loading='lazy'
            crop='fit'
            height='95'
            alt={`gql`}
            style={{ width: '100%', height: '100%' }}
          >
            <Placeholder type='pixelate' />
          </Image>
        </div>
      </div>
    </div>

    <style jsx>
      {`
        #badges {
          width: 700px;
          height: 500px;
          padding: 3rem 0;
          position: relative;
        }

        img {
          width: 100%;
          height: 100%;
        }

        #pinboard {
          position: absolute;
          max-width: 100%;
        }

        .pinboard-img {
          width: 100%;
          height: 100%;
        }

        #pinboard:before {
          content: '';
          position: absolute;
          width: 88%;
          height: 78%;
          top: 11%;
          left: 6%;
          background: rgba(255, 255, 255, 0.2);
        }

        .container {
          position: absolute;
          width: 600px;
          top: 55px;
          left: 65px;
          display: flex;
          flex-flow: row wrap;
          float: left;
        }

        .logo {
          width: 65px;
          heigth: 70px;
          margin: 0.5rem;
          transition: all 0.5s ease;
        }

        .logo img {
          border-radius: 20%;
          width: 100%;
          height: 100%;
        }

        .logo:hover {
          transform: scale(1.1);
        }

        @media only screen and (max-width: 600px) {
          #badges {
            width: 350px;
            margin: 0 auto;
          }
 

          #pinboard:before {
          }
          .container {
            top: 40px;
            left: 30px;
            width: 250px;
          }
          .logo {
            width: 30px;
            height: 30px;
          }
        }

        @media only screen and (max-width: 700px) {
          #badges {
            width: 370px;
            margin: 0 auto;
          }

          .container {
            width: 320px;
            top: 30px;
            left: 33px;
          }

          .logo {
            width: 46px;
            height: 36px;
          }
        }
          @media only screen and (max-width: 360px) {
          #badges {
            width: 360px;
            margin: 0 auto;
          }
          .logo{
                width: 44px;
    height: 33px;
          }
          @media only screen and (max-width: 320px) {
          #badges {
            width: 298px;
            margin: 0 auto;
          }
                .container {
    width: 255px;
            left: 29px;
          }

          .logo{
    width: 35px;
    height: 24px;
          }
      `}
    </style>
  </div>
);
