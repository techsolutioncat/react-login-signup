import './style.scss'
import image from '../../../assets/images/subcont-image.png'

function SubCont() {
    return (
        <div className='sub-cont'>
            <div className='main-image'>
                <img src={image} alt='main img'></img>
            </div>
        </div>
    );
  }
  
  export default SubCont;