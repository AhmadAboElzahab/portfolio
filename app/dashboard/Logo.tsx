import React from 'react';

export default function VerticalLogo() {
  return (
    <div className='flex justify-center '>
      <svg
        version='1.1'
        id='Layer_1'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        x='0px'
        y='0px'
        viewBox='0 0  19.1 64.1'
        height={60}
        xmlSpace='preserve'
      >
        <style>{`
                .st0{fill:#742EFF;}
                .st1{fill:#00CC79;}
                .st2{fill:#FEB80F;}
                .bounce {
                  
                    animation: bounceAnimation 1s ease once;
                }
                @keyframes bounceAnimation {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-5px);
                    }
                }
            `}</style>
        <g transform='translate(0 .5)'>
          <path
            className='st0 bounce'
            d='M10.6,12.2c0.3,0.2,0.6,0.5,0.8,0.8l6.1,10.6c0.6,1.1,0.3,2.4-0.8,3.1C16.4,26.8,16,27,15.6,27H3.4
		c-1.2,0-2.2-1-2.2-2.2c0-0.4,0.1-0.8,0.3-1.1L7.6,13C8.2,11.9,9.6,11.6,10.6,12.2z'
          />
          <path
            className='st1'
            d='M9.5,28.7c-4.4,0-8,3.6-8,8s3.6,8,8,8s8-3.6,8-8S13.9,28.7,9.5,28.7L9.5,28.7z'
          />
          <path
            className='st2'
            d='M4.9,46.4h9.4c1.6,0,2.8,1.3,2.8,2.8v9.4c0,1.6-1.3,2.8-2.8,2.8H4.9c-1.6,0-2.8-1.3-2.8-2.8v-9.4
		C2.1,47.7,3.4,46.4,4.9,46.4z'
          />
        </g>
      </svg>
    </div>
  );
}
