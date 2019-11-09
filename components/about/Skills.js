export default () => (
  <aside id='tech-skill'>
    <div className='tech-container'>
      <h1 className='tech-title'>Technical Skills</h1>
      <div className='tech-progress'>
        <span>HTML</span>
        <div className='progress'>
          <div
            className='num'
            style={{
              width: '100%'
            }}
          >
            <div
              style={{
                background: '#9C1E35',
                width: '100%',
                height: '100%',
                borderBottomRightRadius: '25px',
                borderTopRightRadius:'25px'
              }}
            ></div>
          </div>
          <div style={{ margin: '0 1rem' }}>90%</div>
        </div>
      </div>
      <div className='tech-progress'>
        <span>CSS</span>
        <div className='progress'>
          <div
            className='num'
            style={{
              width: '100%'
            }}
          >
            <div
              style={{
                background: '#9C1E35',
                width: '100%',
                height: '100%',
                borderBottomRightRadius: '25px',
                borderTopRightRadius:'25px'
              }}
            ></div>
          </div>
          <div style={{ margin: '0 1rem' }}>90%</div>
        </div>
      </div>
      <div className='tech-progress'>
        <span>javascript</span>
        <div className='progress'>
          <div
            className='num'
            style={{
              width: '100%'
            }}
          >
            <div
              style={{
                background: '#9C1E35',
                width: '90%',
                height: '100%',
                borderBottomRightRadius: '25px',
                borderTopRightRadius:'25px'
              }}
            ></div>
          </div>
          <div style={{ margin: '0 1rem' }}>80%</div>
        </div>
      </div>
      <div className='tech-progress'>
        <span>Bootstrap</span>
        <div className='progress'>
          <div
            className='num'
            style={{
              width: '100%'
            }}
          >
            <div
              style={{
                background: '#9C1E35',
                width: '60%',
                height: '100%',
                borderBottomRightRadius: '25px',
                borderTopRightRadius:'25px'
              }}
            ></div>
          </div>
          <div style={{ margin: '0 1rem' }}>50%</div>
        </div>
      </div>
      <div className='tech-progress'>
        <span>jQuery</span>
        <div className='progress'>
          <div
            className='num'
            style={{
              width: '100%'
            }}
          >
            <div
              style={{
                background: '#9C1E35',
                width: '80%',
                height: '100%',
                borderBottomRightRadius: '25px',
                borderTopRightRadius:'25px'
              }}
            ></div>
          </div>
          <div style={{ margin: '0 1rem' }}>80%</div>
        </div>
      </div>
      <div className='tech-progress'>
        <span>Node.js</span>
        <div className='progress'>
          <div
            className='num'
            style={{
              width: '100%'
            }}
          >
            <div
              style={{
                background: '#9C1E35',
                width: '80%',
                height: '100%',
                borderBottomRightRadius: '25px',
                borderTopRightRadius:'25px'
              }}
            ></div>
          </div>
          <div style={{ margin: '0 1rem' }}>80%</div>
        </div>
      </div>
      <div className='tech-progress'>
        <span>Express</span>
        <div className='progress'>
          <div
            className='num'
            style={{
              width: '100%'
            }}
          >
            <div
              style={{
                background: '#9C1E35',
                width: '90%',
                height: '100%',
                borderBottomRightRadius: '25px',
                borderTopRightRadius:'25px'
              }}
            ></div>
          </div>
          <div style={{ margin: '0 1rem' }}>80%</div>
        </div>
      </div>
      <div className='tech-progress'>
        <span>MySql</span>
        <div className='progress'>
          <div
            className='num'
            style={{
              width: '100%'
            }}
          >
            <div
              style={{
                background: '#9C1E35',
                width: '90%',
                height: '100%',
                borderBottomRightRadius: '25px',
                borderTopRightRadius:'25px'
              }}
            ></div>
          </div>
          <div style={{ margin: '0 1rem' }}>80%</div>
        </div>
      </div>
      <div className='tech-progress'>
        <span>Mongo</span>
        <div className='progress'>
          <div
            className='num'
            style={{
              width: '100%'
            }}
          >
            <div
              style={{
                background: '#9C1E35',
                width: '80%',
                height: '100%',
                borderBottomRightRadius: '25px',
                borderTopRightRadius:'25px'
              }}
            ></div>
          </div>
          <div style={{ margin: '0 1rem' }}>70%</div>
        </div>
      </div>
      <div className='tech-progress'>
        <span>React</span>
        <div className='progress'>
          <div
            className='num'
            style={{
              width: '100%'
            }}
          >
            <div
              style={{
                background: '#9C1E35',
                width: '70%',
                height: '100%',
                borderBottomRightRadius: '25px',
                borderTopRightRadius:'25px'
              }}
            ></div>
          </div>
          <div style={{ margin: '0 1rem' }}>60%</div>
        </div>
      </div>
      <div className='tech-progress'>
        <span>Next.js</span>
        <div className='progress'>
          <div
            className='num'
            style={{
              width: '100%',
            }}
          >
            <div
              style={{
                background: '#9C1E35',
                width: '80%',
                height: '100%',
                borderBottomRightRadius: '25px',
                borderTopRightRadius:'25px'
              }}
            ></div>
          </div>
          <div style={{ margin: '0 1rem' }}>70%</div>
        </div>
      </div>
    </div>

    <style jsx>{`
      #tech-skill {
        width: 100%;
        height: 100%;
        padding:3rem 0;
      }
      .tech-progress {
        display: flex;
        justify-content:center;
        alighn-items:center;
        height:100%;
        margin: 0.5rem;
        padding:0 3rem;
      }

      .tech-progress span {
        border: 2px solid black;
        border-top-left-radius: 25px;
        border-bottom-left-radius: 25px;
        width: 20%;
        background: #111;
        color:ivory;
        font-weight:bold;
        padding:.5rem;
      }

      .progress {
        width: 100%;
        border: 2px solid black;
        height: 35px;
        position: relative;
        display: flex;
        flex-flow: row no-wrap;
        border-bottom-right-radius: 25px;
        border-top-right-radius: 25px;
      }

      .num {
        text-align: right;
        width: 100%;
      }

      @keyframes progress {
        0% {
          width: 0;
        }
        70% {
          width: 50%;
        }
      }

      @media (max-width: 768px){
        .tech-progress{
          font-size:.8rem;
        }
        .tech-progress span{
          width:30%;
        }
      }
    `}</style>
  </aside>
);
