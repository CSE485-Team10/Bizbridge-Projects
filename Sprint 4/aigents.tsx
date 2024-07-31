'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

function AIgents() {
  const [activeIndex, setActiveIndex] = useState(0);

  const agents = [
    {
      name: 'Finn the Finance AIgent',
      image: 'https://firebasestorage.googleapis.com/v0/b/bizbridge-78490.appspot.com/o/bots%2F_Finn%20Final%20-%20Transparent%202.png?alt=media&token=a4727af5-a09d-4cc5-afa2-ceaf7887069e',
      description: 'Trained on accounting, finance, and valuations of SMBs',
    },
    {
      name: 'Dylan the Broker AIgent',
      image: 'https://firebasestorage.googleapis.com/v0/b/bizbridge-78490.appspot.com/o/bots%2Fdylan.png?alt=media&token=7f44c4db-8718-4210-85eb-f79f78a6383a',
      description: 'Trained on the process and strategies of exiting & selling SMBs',
    },
    {
      name: 'Sharon the Buyer AIgent',
      image: 'https://firebasestorage.googleapis.com/v0/b/bizbridge-78490.appspot.com/o/bots%2Fsharon.png?alt=media&token=7fc7eb5f-2dd3-44ce-833a-cbf60925e5e6',
      description: 'Trained on M&A and deal-making to support buyers',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % agents.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [agents.length]);

  return (
    <div
      style={{
        backgroundImage: 'linear-gradient(to top, #F9F9F9 40%, #E1F1FD 80%)',
        padding: '5rem',
        textAlign: 'center'
      }}
      className="relative mt-5 p-1 md:p-6 max-h-[900px] mx-auto min-h-[900px]"

    > 
      <div className="relative mb-24 pb-14">
        <h1>Supported by our AIgents 24/7</h1>
      </div>
      <div className="relative">
        <section id="slider">
          {agents.map((agent, index) => (
            <input
              key={index}
              type="radio"
              name="slider"
              id={`s${index + 1}`}
              checked={activeIndex === index}
              onChange={() => setActiveIndex(index)}
              style={{ display: 'none' }}
            />
          ))}
          {agents.map((agent, index) => (
            <label
              key={index}
              htmlFor={`s${index + 1}`}
              id={`slide${index + 1}`}
              style={{
                backgroundImage: `url(${agent.image})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                margin: 'auto',
                width: '350px',
                height: '500px',
                borderRadius: '9px',
                position: 'absolute',
                left: '0',
                right: '0',
                cursor: 'pointer',
                transition: 'transform 0.5s ease, box-shadow 0.5s ease',
              }}
            >
              <div style={{
                paddingTop: '10px',
                paddingBottom: '30px',
                color: '#000',
                textAlign: 'center',
                marginTop: '-100px', // Move text container up
                background: 'rgba(255, 255, 255, 0)',
                borderRadius: '8px',
                zIndex: '2'
              }}>
                <h2 style={{ padding: '5px 0' }}>{agent.name}</h2>
                <p style={{ padding: '10px 0', paddingTop:'10px' }}>{agent.description}</p>
              </div>
            </label>
          ))}
        </section>
        <style>{`
          
          #slider {
            height: 35vw;
            position: relative;
            perspective: 1000px;
            transform-style: preserve-3d;
          }
          #slider label {
            box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
          }
          #s1:checked ~ #slide1,
          #s2:checked ~ #slide2,
          #s3:checked ~ #slide3 {
            box-shadow: 0 13px 25px 0 rgba(0, 0, 0, 0.3), 0 11px 7px 0 rgba(0, 0, 0, 0.19);
            transform: translate3d(0, 0, 0);
          }
          #s1:checked ~ #slide2,
          #s2:checked ~ #slide3,
          #s3:checked ~ #slide1 {
            box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3), 0 2px 2px 0 rgba(0, 0, 0, 0.2);
            transform: translate3d(120%, 0%, -300px)rotateY(-40deg);
            opacity: 0.35;
          }
          #s1:checked ~ #slide3,
          #s2:checked ~ #slide1,
          #s3:checked ~ #slide2 {
            box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3), 0 2px 2px 0 rgba(0, 0, 0, 0.2);
            transform: translate3d(-120%, 0%, -300px)rotateY(40deg);
            opacity: 0.35; 
          }
          @media (max-width: 768px) {
            #slider {
              height: auto;
            }
            #slider label {
              width: 80%;
              height: auto;
            }
          }
        `}</style>
      </div>
    </div>
  );
}

export default AIgents;
