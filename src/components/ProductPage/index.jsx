import React, { useEffect, useState } from 'react'
import { Stack, Typography, Box, Container, TextField, Button, Paper, Grid, Card, CardContent, checkboxClasses } from '@mui/material'
import { Header } from '../Header'
import { styled } from '@mui/system';
import { addCart, decNumber, fetchUsers, incNumber, sendId, setProducts } from '../redux/action/ProductsAction';
import { useDispatch, useSelector } from 'react-redux';
import productsReducer from '../redux/Reducer/ProductsReducers';
import { FiPlus } from 'react-icons/fi';
import { AiFillStar } from 'react-icons/ai';
import { BsFillLightningChargeFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { AiOutlineMinus } from 'react-icons/ai';


const ProductPage = () => {
  const [show, setShow] = useState(false);
  const [array, setArray] = useState([]);
  const navigate = useNavigate();

  const products = useSelector((state) => state.productsReducer.products);
  console.log("products ==== ", products);

  const mystate = useSelector((state) => state.productsReducer.count);
  console.log("mystate = ", JSON.stringify(mystate));

  const searchProducts = useSelector((state) => state.productsReducer.products);
  console.log("searcProducts ==== ", searchProducts);

  const thirdArray = products.filter((elem) => {
    return searchProducts.some((ele) => {
    return ele.title === elem.title && ele.title === elem.title;
      });
    });
    console.log("thirdArray",thirdArray);

  
    // setArray([...array,...thirdArray]);
  const dispatch = useDispatch();

  useEffect(() => {
  
    dispatch(fetchUsers());
    // getApiData();
  }, []);

  const viewDetails = (id) => {
    dispatch(sendId(id));
    navigate('/viewproductsdetails');
  }

  // const viewDetail = (id) => {
  //   let check = products.find(item => item.id === id);
  //   console.log("check=", check.id);
  //   console.log(id);
  //   id === check.id && setShow(!show)
  //   dispatch(addCart(id));

  // }

  const viewDetailsCart = (id) => {
    let check = products.find(item => item.id === id);
    console.log("check=", check.id);

    dispatch(addCart(id));
    dispatch(incNumber());
    console.log(" main id = ", id);
    setShow(!show);
  }
  const handleEventPlus = () => {
    dispatch(incNumber())
  }

  const handleEventMinus = () => {
    dispatch(decNumber())

  }
  return (
    <div>
      <Header />

      <Stack sx={{ marginTop: '50px', backgroundColor: '#f6f9fc' }}>
        <Container>

          <Stack direction='row'>

            <Typography variant='h5' sx={{ marginTop: '50px', marginBottom: '30px', fontSize: '25px' }}><BsFillLightningChargeFill className='charge_icon' />Flash Deals</Typography>
          </Stack>

          <Box sx={{ flexGrow: 1 }}>
            <Grid container direction='row' sx={{ margin: '0 auto' }}>
              {

                products.map((x) => {

                  return (
                    <Grid item xs={3} sx={{ margin: '0 auto' }}>
                      <Card className='card' sx={{ minWidth: 200, maxWidth: 250, textAlign: 'center', margin: '5px' }} >
                        <CardContent>
                          <Typography className='off'>15% off</Typography>
                          <Typography variant="h5" color="text.secondary" sx={{ marginTop: '40px' }}>
                            <img src={x.images[0]} height='100px' onClick={() => viewDetails(x.id)} />
                          </Typography>


                          <Stack direction='row' justifyContent='space-between'>
                            <Box >
                              <Typography sx={{ textAlign: 'left', marginTop: '70px', color: '#373f50', fontSize: '14px' }}>
                                {x.title}
                              </Typography>
                              <Stack direction='row' sx={{ color: '#faaf00', marginTop: '5px' }}>
                                <Typography><AiFillStar /></Typography>
                                <Typography><AiFillStar /></Typography>
                                <Typography><AiFillStar /></Typography>
                                <Typography><AiFillStar /></Typography>
                                <Typography><AiFillStar /></Typography>
                              </Stack>

                              <Typography sx={{ textAlign: 'left', mb: 1.5, color: '#D23F57', fontWeight: '600' }} color="text.secondary">
                                {x.price}
                              </Typography>
                            </Box>

                            <Box sx={{marginTop:'70px',position:'relative'}}>
                              {
                                mystate === 0 ? (
                                  <Typography  className='singleplus'>
                                  <FiPlus className='plusposi' onClick={() => viewDetailsCart(x.id)} />
                                  </Typography>
                                  )
                                  :
                                  (
                                    <Stack direction='column' >
                                      <Typography className='fiplus_icon11' >
                                        <AiOutlineMinus onClick={() => handleEventMinus()} />
                                      </Typography>

                                      <Typography sx={{ position: 'relative'}}>
                                        <Typography className='count_icon1'>{mystate}
                                        </Typography>
                                      </Typography>

                                      <Typography className='fiminus_icon11' >
                                        <FiPlus onClick={() => handleEventPlus()} />
                                      </Typography>

                                    </Stack>
                                  )
                              }
                            </Box>

                          </Stack>
                        </CardContent>

                      </Card>
                    </Grid>
                  )
                })
              
              }

            </Grid>
           
          </Box>
        </Container>
      </Stack>
    </div>
  )
}

export default ProductPage