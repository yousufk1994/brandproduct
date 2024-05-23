import ImageForm from '../addproduct/ImageForm';
import Form from '../addproduct/Form';
import style from '../addproduct/addProduct.module.css';


function UI() {
  return (
   <div className={style.container}>
     <div className={style.mainContainer}>
      <ImageForm/>
      <Form/>
      </div> 
    </div>
  )
}

export default UI