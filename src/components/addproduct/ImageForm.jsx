import { useState,useRef } from 'react';
import { Button } from '@mui/material';
import style from './formStyle.module.css';
import noImage from '.././image/no-image.jpg';
import Carousel from 'react-bootstrap/Carousel';


function ImageForm() {
  const [images,setImages] = useState([]);
  const clickRef = useRef(null)

  const handleClick = () =>{
    clickRef.current.click();
  }

  const handleImageUpload = (event) => {
    setImages([event.target.files[0],...images]);
  };

  const [first,...rest] = images;


  // const conStyle = images.length > 3? style.ifMore: null;
  return (
    <>
     <div className={`${style.imageContainer}`}>
     {first ? <div className={style.firstDiv}><img src={URL.createObjectURL(first)} className={style.firstImage} alt='fies' /></div> : <div onClick={handleClick}><img className={style.noImage} src={noImage} alt='NO'/></div>}
     <div className={style.image}> 
     {rest && rest.map((val,i) =>{
     if(i < 3){
      return <img src={URL.createObjectURL(val)} key={i} id={i} alt={i} style={{height: '20vh'}}/>
     } 
     else return <img src={URL.createObjectURL(val)} key={i} id={i} alt={i} style={{height: '20vh',width:'100%'}}/> 
     })}
     </div>
    </div> 
    <div className={style.mobileDisplay}>
    <Carousel>
      {images && images.map((data)=> <Carousel.Item><img src={URL.createObjectURL(data)} className={style.mobileImage}/></Carousel.Item>)}
    </Carousel>
    </div>
     <input id="image" ref={clickRef} type="file" accept=".jpg,.jpeg,.png" onChange={handleImageUpload} style={{display: 'none'}}/>
      {first &&
      <label htmlFor="image">
      <Button component='span' variant="contained" sx={{margin: '20px'}}>Import Picture</Button>
      </label>  
      }
      

      </>
    
  )
}

export default ImageForm