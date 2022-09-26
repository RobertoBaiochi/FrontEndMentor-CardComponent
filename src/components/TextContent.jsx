import './TextContent.scss'
import img from '../assets/images/icon-cart.svg'

function TextContent() {
    return ( 
        <section className='textContent'>
            <h2>Perfume</h2>

            <h1>Gabrielle Essence Eau De Parfum</h1>

            <p>A floral, solar and voluptuous interpretation composed by Olivier Polge, 
            Perfumer-Creator for the House of CHANEL.</p>

            <div className='prices'>
                <span>$149.99</span>
                <del>$169.99</del>
            </div>
            <button><img src={img} alt="" />Add to Cart</button>
            
        </section>
     );
}

export default TextContent;
