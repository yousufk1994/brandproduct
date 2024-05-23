import style from './formStyle.module.css';
import Grid from '@mui/material/Unstable_Grid2';
import {TextField,Button,Select,InputLabel,FormControl} from '@mui/material';



function Form() {
  return (
    <Grid container spacing={3}>   
    <Grid lg={3} xs={12}>
    <FormControl variant='filled' className={style.name}><InputLabel >Product Name</InputLabel>
    <Select/></FormControl></Grid>  
    <Grid lg={3} xs={12}><TextField className={style.name} label='Product option'/></Grid>
    <Grid lg={3} xs={12}><TextField className={style.name} label='Product option'/></Grid>
    <Grid lg={3} xs={12}><FormControl variant='filled' className={style.name}><InputLabel >Product Name</InputLabel>
    <Select/></FormControl></Grid> 
    <Grid lg={3} xs={12}><TextField className={style.name} label='Product option'/></Grid>  
    <Grid lg={3} xs={12}><FormControl variant='filled' className={style.name}><InputLabel >Product Name</InputLabel>
    <Select/></FormControl></Grid> 
    <Grid lg={3} xs={12}><FormControl variant='filled' className={style.name}><InputLabel >Product Name</InputLabel>
    <Select/></FormControl></Grid> 
    <Grid lg={3} xs={12}><TextField className={style.name} label='Product option'/></Grid> 
    <Grid lg={3} xs={12}><TextField className={style.name} label='Product option'/></Grid> 
    <Grid lg={3} xs={12}><TextField className={style.name} label='Product option'/></Grid> 
    <Grid lg={3} xs={12}><TextField className={style.name} label='Product option'/></Grid> 
    <Grid lg={3} xs={12}><FormControl variant='filled' className={style.name}><InputLabel >Product Name</InputLabel>
    <Select/></FormControl></Grid> 
    <Grid lg={3} xs={12}><FormControl variant='filled' className={style.name}><InputLabel >Product Name</InputLabel>
    <Select/></FormControl></Grid> 
    <Grid lg={6}/>
    <Grid lg={3} xs={12}><Button variant="contained">Submit</Button></Grid>
  </Grid> 
  )
}

export default Form