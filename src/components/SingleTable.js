
import {
    Table, TableContainer, Tbody, Td, Th, Thead, Tr
  } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import '../css/styles.css'


const SingleTable = () => {
   const [data,setData]= useState(null)
  useEffect(() => {
    fetch('https://dummyjson.com/products/1')
    .then(res => res.json())
    .then(json => setData(json))
  }, [])
  return (
    <TableContainer overflowX={'auto'}>
    <Table  className='custom-table' variant='striped'>
      <Thead>
        <Tr>
          <Th fontWeight="bold" color="#fff" isNumeric>id</Th>
          <Th fontWeight="bold" color="#fff">Title</Th>
          <Th color="#fff" fontWeight="bold">description</Th>
          <Th color="#fff" fontWeight="bold" isNumeric>price</Th>
          <Th color="#fff" fontWeight="bold">Discount</Th>
          <Th color="#fff" fontWeight="bold">Rating</Th>
          <Th color="#fff" fontWeight="bold">Stock</Th>
          <Th color="#fff" fontWeight="bold">Brand</Th>
          <Th color="#fff" fontWeight="bold">Category</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>{data?.id}</Td>
          <Td>{data?.title}</Td>
          <Td>{data?.description}</Td>
          <Td>${data?.price}</Td>
          <Td>{data?.discountPercentage}%</Td>
          <Td>{data?.rating}</Td>
          <Td>{data?.stock}</Td>
          <Td>{data?.brand}</Td>
          <Td>{data?.category}</Td>
               </Tr>
        <Tr>
          <Td>{data?.id}</Td>
          <Td>{data?.title}</Td>
          <Td>{data?.description}</Td>
          <Td>${data?.price}</Td>
          <Td>{data?.discountPercentage}%</Td>
          <Td>{data?.rating}</Td>
          <Td>{data?.stock}</Td>
          <Td>{data?.brand}</Td>
          <Td>{data?.category}</Td>
        </Tr>
        <Tr>
          <Td>{data?.id}</Td>
          <Td>{data?.title}</Td>
          <Td>{data?.description}</Td>
          <Td>${data?.price}</Td>
          <Td>{data?.discountPercentage}%</Td>
          <Td>{data?.rating}</Td>
          <Td>{data?.stock}</Td>
          <Td>{data?.brand}</Td>
          <Td>{data?.category}</Td>
        </Tr>
        <Tr>
          <Td>{data?.id}</Td>
          <Td>{data?.title}</Td>
          <Td>{data?.description}</Td>
          <Td>${data?.price}</Td>
          <Td>{data?.discountPercentage}%</Td>
          <Td>{data?.rating}</Td>
          <Td>{data?.stock}</Td>
          <Td>{data?.brand}</Td>
          <Td>{data?.category}</Td>
        </Tr>
        <Tr>
          <Td>{data?.id}</Td>
          <Td>{data?.title}</Td>
          <Td>{data?.description}</Td>
          <Td>${data?.price}</Td>
          <Td>{data?.discountPercentage}%</Td>
          <Td>{data?.rating}</Td>
          <Td>{data?.stock}</Td>
          <Td>{data?.brand}</Td>
          <Td>{data?.category}</Td>
        </Tr>
        <Tr>
          <Td>{data?.id}</Td>
          <Td>{data?.title}</Td>
          <Td>{data?.description}</Td>
          <Td>${data?.price}</Td>
          <Td>{data?.discountPercentage}%</Td>
          <Td>{data?.rating}</Td>
          <Td>{data?.stock}</Td>
          <Td>{data?.brand}</Td>
          <Td>{data?.category}</Td>
        </Tr>
        <Tr>
          <Td>{data?.id}</Td>
          <Td>{data?.title}</Td>
          <Td>{data?.description}</Td>
          <Td>${data?.price}</Td>
          <Td>{data?.discountPercentage}%</Td>
          <Td>{data?.rating}</Td>
          <Td>{data?.stock}</Td>
          <Td>{data?.brand}</Td>
          <Td>{data?.category}</Td>
        </Tr>
        <Tr>
          <Td>{data?.id}</Td>
          <Td>{data?.title}</Td>
          <Td>{data?.description}</Td>
          <Td>${data?.price}</Td>
          <Td>{data?.discountPercentage}%</Td>
          <Td>{data?.rating}</Td>
          <Td>{data?.stock}</Td>
          <Td>{data?.brand}</Td>
          <Td>{data?.category}</Td>
        </Tr>
        <Tr>
          <Td>{data?.id}</Td>
          <Td>{data?.title}</Td>
          <Td>{data?.description}</Td>
          <Td>${data?.price}</Td>
          <Td>{data?.discountPercentage}%</Td>
          <Td>{data?.rating}</Td>
          <Td>{data?.stock}</Td>
          <Td>{data?.brand}</Td>
          <Td>{data?.category}</Td>
        </Tr>

        
      </Tbody>
    </Table>
   </TableContainer>
  )
}

export default SingleTable






