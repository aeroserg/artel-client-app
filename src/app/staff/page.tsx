// StaffPage.tsx
'use client'
import React from 'react'
import { Box } from '@chakra-ui/react'
import TableBuilder from '@/shared/table/ui/table'
import { staffData, tableSettings } from '@/util/table.store'

const StaffPage = () => {
  return (
    <Box borderTopRadius={'1rem'} backgroundColor={'#ffffff'} height={'95vh'}>
      <TableBuilder rows={staffData} settings={tableSettings} />
    </Box>
  )
}

export default StaffPage
