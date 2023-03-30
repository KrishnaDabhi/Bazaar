import { Container, Stack, Grid, Card, CardContent, Typography, Box, Button } from '@mui/material';
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Header } from '../Header';
import productsReducer from '../redux/Reducer/ProductsReducers'
import { AiFillStar } from 'react-icons/ai';
import { addCart, decNumber, incNumber } from '../redux/action/ProductsAction';
import { FiPlus } from 'react-icons/fi';
import { AiOutlineMinus } from 'react-icons/ai';


const ViewProductsDetails = () => {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);

    const selectData = useSelector((state) => state.productsReducer.filterProducts);
    console.log("select = ", selectData);

    const selectDataCart = useSelector((state) => state.productsReducer.carts);
    console.log("select = ", selectDataCart);

    const mystate = useSelector((state) => state.productsReducer.count);
    console.log("mystate = ", JSON.stringify(mystate));

    const viewDetailsCart = (id) => {
        // const { itemname, availabletime, price } = products;
        console.log(`useSelector viewdetails = ${JSON.stringify(selectData)}`);

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
        console.log("mystate", mystate.length);
    }
    return (
        <div>ViewProductsDetails
            <Header />
            <Stack sx={{ marginTop: '50px', backgroundColor: '#f6f9fc' }}>
                <Container>
                    {
                        selectData.map((x) => {
                            return (
                                <>
                                    <Container>
                                        <Grid container spacing={2} sx={{ marginTop: '30px' }}>
                                            <Grid item xs={6} >
                                                <Typography>
                                                    <Card sx={{ minWidth: 200, maxWidth: 300, minHeight: 250, maxHeight: 400, margin: '0 auto' }}>
                                                        <CardContent>
                                                            <Typography sx={{ margin: '0 auto', marginTop: '50px', width: '140px' }}>
                                                                <img src={x.images[0]} height='100px' />
                                                            </Typography>
                                                        </CardContent>
                                                    </Card>
                                                </Typography>
                                                <Stack direction='row' sx={{ marginTop: '50px' }}>
                                                    <Grid item xs={6} >
                                                        <Card className='cardimg' sx={{ minWidth: 40, maxWidth: 70, minHeight: 60, maxHeight: 80, margin: '0 auto', border: '1px solid #D23F57', marginRight: '10px', borderRadius: '10px' }}>
                                                            <img src={x.images[0]} height='40px' style={{ marginTop: '-20px !important' }} />
                                                        </Card>
                                                    </Grid>
                                                    <Grid item xs={6} >
                                                        <Card className='cardimg' sx={{ minWidth: 40, maxWidth: 70, minHeight: 60, maxHeight: 80, margin: '0 auto', marginLeft: '10px', border: '1px solid #2b3445', borderRadius: '10px' }}>
                                                            <img src={x.images[0]} height='40px' style={{ marginTop: '-20px !important' }} />
                                                        </Card>
                                                    </Grid>
                                                </Stack>
                                            </Grid>

                                            <Grid item xs={6} sx={{ textAlign: 'left', position: 'relative' }}>
                                                <Typography sx={{ fontSize: '30px', margin: '0px 0px 8px' }}>NikeCourt Zoom Vapor Cage</Typography>
                                                <Stack direction='row'>
                                                    <Typography sx={{ color: '#2b3445', fontSize: '14px' }}>Brand:</Typography>
                                                    <Typography sx={{ color: '#2b3445', fontSize: '14px' }}>{x.title}</Typography>
                                                </Stack>

                                                <Stack direction='row' sx={{ marginTop: '5px' }}>
                                                    <Typography sx={{ color: '#2b3445', fontSize: '14px' }}>Rated:</Typography>
                                                    <Typography sx={{ color: '#2b3445', fontSize: '14px' }}>
                                                        <Stack direction='row' sx={{ color: '#faaf00', marginTop: '2px', paddingLeft: '5px' }}>
                                                            <Typography><AiFillStar /></Typography>
                                                            <Typography><AiFillStar /></Typography>
                                                            <Typography><AiFillStar /></Typography>
                                                            <Typography><AiFillStar /></Typography>
                                                            <Typography sx={{ color: '#2b3445' }}><AiFillStar /></Typography>
                                                        </Stack>

                                                    </Typography>
                                                    <Typography sx={{ color: '#2b3445', fontSize: '14px', fontWeight: 'bold', paddingLeft: '5px' }}>(50)</Typography>
                                                </Stack>

                                                <Typography sx={{ color: '#2b3445', fintSize: '12px', marginTop: '20px' }}>Option</Typography>
                                                <Stack direction='row' sx={{ marginTop: '1px' }}>
                                                    <Button className='opt_btn1'>Option1</Button>
                                                    <Button className='opt_btn2'>Option2</Button>
                                                    <Button className='opt_btn2'>Option3</Button>
                                                    <Button className='opt_btn2'>Option4</Button>
                                                </Stack>

                                                <Typography sx={{ color: '#2b3445', fintSize: '10px !important', marginTop: '20px' }}>Type</Typography>
                                                <Stack direction='row' sx={{ marginTop: '1px' }}>
                                                    <Button className='opt_btn1'>Type1</Button>
                                                    <Button className='opt_btn2'>Type2</Button>
                                                    <Button className='opt_btn2'>Type3</Button>
                                                </Stack>

                                                <Typography sx={{ marginTop: '20px', color: '#D23F57', fontSize: '25px', fontWeight: 'bold' }}>$250.00</Typography>
                                                <Typography sx={{ marginTop: '0px', fontSize: '14px' }}>Stock Avalaible</Typography>

                                                <Box>
                                                    {/*  <Stack direction='row' className='positionset' sx={{ marginTop: '30px', marginBottom: '50px' }}>
                                                        <Typography className='fiplus_icon1' >
                                                            <AiOutlineMinus onClick={() => handleEventMinus()} />
                                                        </Typography>

                                                        <Typography sx={{ position: 'relative' }}>
                                                            <Typography className='count_icon'>{mystate}
                                                            </Typography>
                                                        </Typography>

                                                        <Typography className='fiminus_icon' >
                                                            <FiPlus onClick={() => handleEventPlus()} />
                                                        </Typography>

                            </Stack>*/}

                                                    {
                                                        mystate === 0 ? (<Button className='cart_btn1 ' onClick={() => viewDetailsCart(x.id)}>Add To Cart</Button>)
                                                            :
                                                            (
                                                                <Stack direction='row' className='positionset' sx={{ marginTop: '30px', marginBottom: '50px' }}>
                                                                    <Typography className='fiplus_icon1' >
                                                                        <AiOutlineMinus onClick={() => handleEventMinus()} />
                                                                    </Typography>

                                                                    <Typography sx={{ position: 'relative' }}>
                                                                        <Typography className='count_icon'>{mystate}
                                                                        </Typography>
                                                                    </Typography>

                                                                    <Typography className='fiminus_icon' >
                                                                        <FiPlus onClick={() => handleEventPlus()} />
                                                                    </Typography>

                                                                </Stack>
                                                            )
                                                    }


                                                </Box>



                                                <Stack direction='row' sx={{ marginTop: '50px', marginBottom: '50px' }}>
                                                    <Typography sx={{ color: '#2b3445', fontSize: '14px' }}>Sold By:
                                                    </Typography>
                                                    <Typography sx={{ color: '#2b3445', fontSize: '14px' }}>
                                                        Mobile Store</Typography>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </Container>
                                </>
                            )
                        })
                    }
                </Container>
            </Stack>

        </div>
    )
}

export default ViewProductsDetails