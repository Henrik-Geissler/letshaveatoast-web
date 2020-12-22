import { Box, Flex } from '@chakra-ui/core'
import React from 'react'
import ImageV from '../../General/Image/ImageV'
import DataTableV from '../DataTable/DataTableV'

interface DataScreenVProps {
  dataStats: any
  setDataMode: boolean
}

const DataScreenV: React.FC<DataScreenVProps> = ({
  dataStats,
  setDataMode,
}) => {
  if (!dataStats) {
    return <>no data</>
  }
  const ranking = [
    { name: dataStats.name1, value: dataStats.nameSum1, id: '1' },
    { name: dataStats.name2, value: dataStats.nameSum2, id: '2' },
    { name: dataStats.name3, value: dataStats.nameSum3, id: '3' },
    { name: dataStats.name4, value: dataStats.nameSum4, id: '4' },
    { name: dataStats.name5, value: dataStats.nameSum5, id: '5' },
    { name: dataStats.name6, value: dataStats.nameSum6, id: '6' },
    { name: dataStats.name7, value: dataStats.nameSum7, id: '7' },
    { name: dataStats.name8, value: dataStats.nameSum8, id: '8' },
    { name: dataStats.name9, value: dataStats.nameSum9, id: '9' },
    { name: dataStats.name10, value: dataStats.nameSum10, id: '10' },
  ]
  return (
    <Flex
      className='h100'
      position='absolute'
      left='0'
      top='0'
      width='100vw'
      direction='column-reverse'
      pb='8vh'
      justifyContent='space-around'
      pt='28vh'
    >
      <DataTableV ranking={ranking} />
      <Box maxHeight='50px' mb='3vh'>
        <ImageV src='labels/donators' />
      </Box>
    </Flex>
  )
}

export default DataScreenV
