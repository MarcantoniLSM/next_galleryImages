'use client'

import './ImagesHub.css'

export default function ImagesHub(){

    const imageGenerator = () => {
        const bodyFontSize = parseInt(window.getComputedStyle(document.body).fontSize);
        const images = [];
        for (let i = 0; i < 12; i++) {
            const imgUrl = `https://picsum.photos/${16*bodyFontSize}?random=${i}`;
            images.push(
                <div className='boxImg'>
                    <img key={i} src={imgUrl} alt={`Image ${i}`} />
                </div>      
                );
        }
        return images;
    }


    return(
        <section id='section'>
            {imageGenerator()}
        </section>
    )
}