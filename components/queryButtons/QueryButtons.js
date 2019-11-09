import React from 'react';

const QueryButtons = ({querySearch,getAll,getDeployed}) => {
  const search = e => {
      let query = e.target.innerText.toLowerCase()
    querySearch(query);
  };

 
  return (
    <div>
      <div id='tech'>
        <ul className='tech-list'>
          <li className='tech-skill' onClick={search}>
            React
          </li>
          <li className='tech-skill' onClick={search}>
            {' '}
            Javascript
          </li>
          <li className='tech-skill' onClick={search}>
            {' '}
            MySql
          </li>
          <li className='tech-skill' onClick={search}>
            {' '}
            Node.js
          </li>
          <li className='tech-skill' onClick={getDeployed}>
            {' '}
            Deployed
          </li>
          <li className='tech-skill' onClick={getAll}>
          {' '}
          All Projects
        </li>
        </ul>
      </div>
      <style jsx>
        {`
        ul{
          padding:0;
          margin:0;
        }
          #tech {
            margin: 2rem 0;
            text-align: center;
            width: 100%;
          }

          .tech-list {
            display: flex;
            justify-content: space-around;
            width:40%;
            margin: 0 auto;
            transition: all 1s ease;
          }

          .tech-skill {
            list-style-type: none;
            cursor: pointer;
            display: inline;
            background:#111;
            color:ivory;
            padding:0.75rem 1rem;
            border-radius: 30px;
            transition: all 1s ease;
          }

          @media (max-width: 768px){
            .tech-list{
              display:grid;
              grid-template-columns: repeat(2,1fr);
            }
            .tech-skill {
              padding:0 0.5rem;
              border-radius:0;
              margin:1rem;
              font-size:.8rem;
            }
          }
        `}
      </style>
    </div>
  );
};

export default QueryButtons;
