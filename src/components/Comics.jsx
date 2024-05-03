import React from 'react';
import '../styles/Comics.scss';

const Comics = ({ data }) => {
  return (
    <div className="comics-container">
      {data.map((c) => {
        const detailUrl = c?.urls.find((item) => item.type === 'detail')?.url;
        const thumbnailUrl = `${c?.thumbnail?.path}.${c?.thumbnail?.extension}`;
        
        return (
          <a 
            key={c.id} 
            className="comics-card" 
            style={{ backgroundImage: `url(${thumbnailUrl})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
            href={detailUrl}  
            target='_blank'
            rel='noreferrer'
          >
            <section>
              <h4>{c.title}</h4>
              <p>{c?.prices?.price}</p>
            </section>
          </a>
        );
      })}
    </div>
  );
};

export default Comics;