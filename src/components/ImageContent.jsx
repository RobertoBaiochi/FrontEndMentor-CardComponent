import './ImageContent.scss'
import imgDesktop from '../assets/images/image-product-desktop.jpg'
import imgMobile from '../assets/images/image-product-mobile.jpg'

function ImageContent(props) {
    return ( 
        <section className="imageContent">
            <picture className="imageContent">
                <source media="(max-width: 678px)" srcSet={imgMobile} alt="Grabielle Parfum"/>
                <img src={imgDesktop} alt="Grabielle Parfum"/>
            </picture>
        </section>
     );
}

export default ImageContent;