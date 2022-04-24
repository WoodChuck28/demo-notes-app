import React from 'react'
import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBCarouselElement,
    MDBCarouselCaption,
  } from 'mdb-react-ui-kit';
  import styles from './mystyles.module.css'

export default function APHuman() {
    return(
        
            <MDBCarousel showIndicators showControls fade className={styles.Carousel}>
            <MDBCarouselInner>
                <MDBCarouselItem className='active'>
                <MDBCarouselElement src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).webp' alt='...' />
                <MDBCarouselCaption>
                    <h5>Welcome to AP Human Geography</h5>
                    
                </MDBCarouselCaption>
                </MDBCarouselItem>

                <MDBCarouselItem>
                <MDBCarouselElement src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).webp' alt='...' />
                <MDBCarouselCaption>
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </MDBCarouselCaption>
                </MDBCarouselItem>

                <MDBCarouselItem>
                <MDBCarouselElement src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).webp' alt='...' />
                <MDBCarouselCaption>
                    <h5>Third slide label</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </MDBCarouselCaption>
                </MDBCarouselItem>
            </MDBCarouselInner>
            </MDBCarousel>

        

    );
}