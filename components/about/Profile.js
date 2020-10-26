import { Image, Placeholder } from 'cloudinary-react';

export default () => (
  <div id='profile'>
    <div className='profile-container'>
      <div className='profile-picture'>
        <Image
          cloudName='dawyijhjw'
          publicId={
            'portfolio/logos/42279262_567468957017253_7920891352865308672_n_vaejke'
          }
          width='300'
          format='webp'
          secure='true'
          responive
          responsiveUseBreakpoints='true'
          quality='auto'
          fetchFormat='auto'
          dpr='auto'
          loading='lazy'
          crop='scale'
          height='300'
          alt={`profile-picture`}
          style={{ width: '100%', height: '100%' }}
        >
          <Placeholder type='pixelate' />
        </Image>
      </div>
      <p>
        Highly flexible individual with analytical skills, Hopeful for the
        position of Software Developer where outstanding technical
        experience/skills in software and application development using modern
        tools will be utilized for the advancement of the company.
      </p>
    </div>

    <style jsx>{`
      img {
        width: 100%;
        height: 100%;
      }
      #profile {
        display: flex;
        flex-flow: column wrap;
        width: 50%;
        align-items: center;
        justify-content-center;
        margin: 0 auto;
      }
        @media only screen and (max-width: 600px) {
          #profile{
            width:85%;
          }
        }
      #profile .profile-container{
          width:100%;
          margin: 0 1rem;
      }

      #profile .profile-picture {
        width: 300px;
        margin: 0 auto;
        clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
      }

      @media (max-width: 768px){
        #profile .profile-container{
          width:100%;
        }
        #profile .profile-container{
          margin:0 auto;
          
        }
        #profile .profile-container p{
          width:100%;
        }

        #profile .profile-picture{
          width:200px;
        }
      }
            @media (max-width: 320px){
                        #profile{
                          width:100%;
                          margin:0;
                        }

            }

    `}</style>
  </div>
);
