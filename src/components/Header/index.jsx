import { Stack, Typography, Box, Container, TextField, Button } from '@mui/material'
import React from 'react'
import { AiOutlineTwitter, AiOutlineInstagram, AiOutlineSearch } from 'react-icons/ai';
import { FaFacebookSquare } from 'react-icons/fa';
import { BiShoppingBag } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import productsReducer from '../redux/Reducer/ProductsReducers';
import { productSearch } from '../redux/action/ProductsAction';


export const Header = () => {
    const dispatch = useDispatch();
    const selectData = useSelector((state) => state.productsReducer.carts);
    console.log("select = ", selectData);

    const products = useSelector((state) => state.productsReducer.products);
    console.log("products header==== ", products);

    return (
        <div className='header'>
            <Stack sx={{ backgroundColor: '#2b3445', height: '40px'}}>
                <Container>
                    <Box sx={{ marginTop: '10px' }}>
                        <Stack direction='row' justifyContent='space-between'>
                            <Box sx={{ width: '15%' }}>
                                <Stack direction='row' >
                                    <Typography className='hot' >HOT</Typography>
                                    <Typography sx={{ color: 'white', fontSize: '12px', fontFamilt: 'Open Sans', marginTop: '4px', paddingLeft: '5px !important' }}>Free Express Shipping</Typography>
                                </Stack>
                            </Box>
                            <Box>
                                <Stack direction='row' >
                                    <Typography sx={{ color: 'white !important', paddingRight: '5px' }}><AiOutlineTwitter /></Typography>
                                    <Typography sx={{ color: 'white !important', paddingRight: '5px' }}><FaFacebookSquare sx={{ color: 'white' }} /></Typography>
                                    <Typography sx={{ color: 'white !important' }}><AiOutlineInstagram sx={{ color: 'white' }} /></Typography>
                                </Stack>
                            </Box>

                        </Stack>

                    </Box>

                </Container>
            </Stack>

            <Stack>
                <Container>
                    <Stack direction='row' justifyContent='space-between' sx={{ marginTop: '20px' }}>
                        <Box>
                            <Typography sx={{ textAlign: 'left' }}>
                                <img src='https://bazaar.ui-lib.com/assets/images/logo2.svg' />
                            </Typography>
                        </Box>
                        <Box>
                            <Typography sx={{ textAlign: 'left' }}>
                                <Stack direction='row'>
                                    <AiOutlineSearch />
                                    <TextField placeholder="Search for..."  onChange={(e)=>dispatch(productSearch(e.target.value))}/>
                                    <Button variant="contained">All Categories</Button>
                                </Stack>
                            </Typography>
                        </Box>
                        <Box>
                        <Typography className='add_cart'>{selectData.length}</Typography>
                            <Typography sx={{ textAlign: 'left', backgroundColor: '#f6f9fc', borderRadius: '50px', width: '40px', textAlign: 'center', fontSize: '25px' }}>
                                <BiShoppingBag />
                            </Typography>
                        </Box>
                    </Stack>
                </Container>
            </Stack>
        </div>
    )
}
