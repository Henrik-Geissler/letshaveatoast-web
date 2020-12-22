import { Box } from '@chakra-ui/core'
import { Table, TableCaption, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import HeadingV from '../Heading/HeadingV'

interface DataTableVProps {
  ranking: any
}

const DataTableV: React.FC<DataTableVProps> = ({ ranking }) => {
  return (
    <Box maxWidth='800px' mx='auto' width='100%'>
      <Table
        variant='striped'
        colorScheme='lightgray'
        width='100%'
        style={{ borderCollapse: 'unset', borderSpacing: 0 }}
        px={2}
      >
        <Thead>
          <Tr>
            <Th textAlign='center'>
              <Box transform='scale(0.7)'>
                <HeadingV>Rank</HeadingV>
              </Box>
            </Th>
            <Th textAlign='left'>
              <HeadingV>
                <div style={{ textAlign: 'left', marginLeft: '-19%' }}>
                  <Box transform='scale(0.7)'>Name</Box>
                </div>
              </HeadingV>
            </Th>
            <Th textAlign='center'>
              <Box transform='scale(0.7)'>
                <HeadingV>Score</HeadingV>
              </Box>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {ranking.map(item => {
            const topRank =
              item.id === '1' || item.id === '2' || item.id === '3'
            const emptyLine = topRank ? (
              <Tr height='2vh'>
                <Td backgroundColor='#00000000 !important'> </Td>
                <Td backgroundColor='#00000000 !important'> </Td>
                <Td backgroundColor='#00000000 !important'> </Td>
              </Tr>
            ) : (
              <></>
            )
            return (
              <>
                <Tr
                  height='5vh'
                  boxShadow='0 0 0.75em 0 rgba(46, 60, 73, 0.12)'
                >
                  <Td
                    textAlign='center'
                    borderColor={`${
                      item.id === '1'
                        ? '#ecc81a'
                        : item.id === '2'
                        ? '#dbe2e8'
                        : item.id === '3'
                        ? '#dfdfd1'
                        : '#dbe2e8'
                    }`}
                    borderTopStyle='solid'
                    borderBottomStyle='solid'
                    borderTopWidth={topRank || item.id === '4' ? '1px' : '0px'}
                    borderBottomWidth={
                      topRank || item.id === '10' ? '1px' : '0px'
                    }
                    borderLeftWidth='1px'
                    borderLeftStyle='solid'
                    borderBottomLeftRadius={
                      topRank || item.id === '10' ? '0.375rem' : '0px'
                    }
                    borderTopLeftRadius={
                      topRank || item.id === '4' ? '0.375rem' : '0px'
                    }
                    backgroundColor='white'
                  >
                    {item.id}
                  </Td>
                  <Td
                    textAlign='left'
                    borderColor={`${
                      item.id === '1'
                        ? '#ecc81a'
                        : item.id === '2'
                        ? '#dbe2e8'
                        : item.id === '3'
                        ? '#dfdfd1'
                        : '#dbe2e8'
                    }`}
                    borderTopStyle='solid'
                    borderBottomStyle='solid'
                    borderTopWidth={topRank || item.id === '4' ? '1px' : '0px'}
                    borderBottomWidth={
                      topRank || item.id === '10' ? '1px' : '0px'
                    }
                    backgroundColor='white'
                  >
                    {item.name}
                  </Td>
                  <Td
                    textAlign='center'
                    borderColor={`${
                      item.id === '1'
                        ? '#ecc81a'
                        : item.id === '2'
                        ? '#dbe2e8'
                        : item.id === '3'
                        ? '#dfdfd1'
                        : '#dbe2e8'
                    }`}
                    borderTopStyle='solid'
                    borderBottomStyle='solid'
                    borderTopWidth={topRank || item.id === '4' ? '1px' : '0px'}
                    borderBottomWidth={
                      topRank || item.id === '10' ? '1px' : '0px'
                    }
                    borderRightWidth='1px'
                    borderRightStyle='solid'
                    borderBottomRightRadius={
                      topRank || item.id === '10' ? '0.375rem' : '0px'
                    }
                    borderTopRightRadius={
                      topRank || item.id === '4' ? '0.375rem' : '0px'
                    }
                    backgroundColor='white'
                  >
                    {item.value}
                  </Td>
                </Tr>
                {emptyLine}
              </>
            )
          })}
        </Tbody>
      </Table>
    </Box>
  )
}

export default DataTableV
