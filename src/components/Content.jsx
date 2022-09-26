import './Content.scss'
import ImageContent from './ImageContent';
import TextContent from './TextContent';



function Content(props) {
    return ( 
        <div className="wrap-content">
            <ImageContent />
            <TextContent />
        </div>
     );
}

export default Content;