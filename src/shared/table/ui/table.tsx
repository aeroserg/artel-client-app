import React, { useState } from 'react'
import {
  Box,
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Input,
  Text,
  useToast,
  Spinner,
} from '@chakra-ui/react'
import useGetData from '@/hooks/use-get-data'
import axios from 'axios'

interface RowData {
  id: number
  data: {
    [key: string]: JSX.Element | string | { [key: string]: JSX.Element | string }
  }
}

interface TableSettings {
  header: {
    columns: Array<{
      name: string | null
      width: number
      sortable?: boolean
    }>
  }
  editable?: boolean
  fontSize?: string
}

interface TableBuilderProps {
  rows: RowData[]
  settings: TableSettings
}

const fieldLabels: { [key: string]: string } = {
  photo: 'Фото',
  name: 'Имя',
  license: 'Водительские права',
  phone: 'Телефон',
  balance: 'Баланс',
  task: 'Задача',
}

const TableBuilder: React.FC<TableBuilderProps> = ({ rows, settings }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [editingRow, setEditingRow] = useState<RowData | null>(null)
  const [loading, setLoading] = useState(false)
  const [sortedRows, setSortedRows] = useState<RowData[]>(rows)
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc' | null>(null)
  const [formData, setFormData] = useState<FormData | null>(null)
  const toast = useToast()

  const handleDataSubmit = async () => {
    setLoading(true)
    try {
      const response = await axios.post('/api/save', formData)
      toast({
        title: 'Данные успешно сохранены.',
        status: 'success',
        duration: 2000,
        isClosable: true,
      })
    } catch (err) {
      if (axios.isAxiosError(err)) {
        toast({
          title: 'Ошибка при сохранении данных.',
          description: `Ошибка: ${err.response?.data.slice(0, 150) || 'Неизвестная ошибка'}`,
          status: 'error',
          duration: 2000,
          isClosable: true,
        })
      } else {
        toast({
          title: 'Произошла ошибка.',
          description: `Ошибка: ${(err as Error).message.slice(0, 150)}`,
          status: 'error',
          duration: 2000,
          isClosable: true,
        })
      }
    } finally {
      setLoading(false)
      closeModal()
    }
  }

  const openModal = (row: RowData) => {
    setEditingRow(row)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    setEditingRow(null)
    setFormData(null)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
    const file = e.target.files?.[0]
    if (file) {
      const updatedFormData = formData || new FormData()
      updatedFormData.append(fieldName, file)
      setFormData(updatedFormData)
    }
  }

  const handleSort = (columnKey: string) => {
    const sorted = [...sortedRows].sort((a, b) => {
      const aVal = a.data[columnKey] as string
      const bVal = b.data[columnKey] as string
      if (sortDirection === 'asc') {
        return aVal > bVal ? -1 : 1
      } else {
        return aVal > bVal ? 1 : -1
      }
    })
    setSortedRows(sorted)
    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
  }

  return (
    <Box width="100%">
      <Table variant="simple" width="100%">
        <Thead>
          <Tr>
            {settings.header.columns.map((col, index) => (
              <Th
                key={index}
                width={`${col.width}px`}
                onClick={() => col.sortable && handleSort(col.name || '')}
                cursor={col.sortable ? 'pointer' : 'default'}
                textAlign="left"
              >
                {col.name}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {sortedRows.map((row) => (
            <Tr key={row.id}>
              {Object.entries(row.data).map(([key, value], index) => (
                <Td key={index} p={4} textAlign="left">
                  {typeof value === 'object' &&
                  value !== null &&
                  'photo' in value &&
                  'name' in value ? (
                    <Flex alignItems="center" gap={2}>
                      {typeof value['photo'] === 'string' && (
                        <Image src={value['photo']} alt="photo" width="50px" height="50px" />
                      )}
                      <Text>{value['name']}</Text>
                    </Flex>
                  ) : (
                    <Box>{typeof value === 'string' ? value : null}</Box>
                  )}
                </Td>
              ))}
              {settings.editable && (
                <Td>
                  <Button onClick={() => openModal(row)} variant="unstyled" p={0}>
                    <Image src="/shared/edit-icon.svg" alt="Edit" />
                  </Button>
                </Td>
              )}
            </Tr>
          ))}
        </Tbody>
      </Table>

      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Редактирование</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {editingRow && (
              <Box>
                {Object.entries(editingRow.data).map(([key, value]) => {
                  if (typeof value === 'object' && value !== null) {
                    return Object.entries(value).map(([innerKey, innerValue]) => (
                      <Box key={innerKey} mb={4}>
                        <Text mb={2}>{fieldLabels[innerKey] || ''}</Text>
                        {innerKey === 'photo' ? (
                          <Input
                            type="file"
                            accept=".jpeg,.jpg,.png,.webp"
                            onChange={(e) => handleFileChange(e, innerKey)}
                          />
                        ) : (
                          <Input defaultValue={typeof innerValue === 'string' ? innerValue : ''} />
                        )}
                      </Box>
                    ))
                  } else {
                    return (
                      <Box key={key} mb={4}>
                        <Text mb={2}>{fieldLabels[key] || ''}</Text>
                        {key === 'photo' ? (
                          <Input
                            type="file"
                            accept=".jpeg,.jpg,.png,.webp"
                            onChange={(e) => handleFileChange(e, key)}
                          />
                        ) : (
                          <Input defaultValue={typeof value === 'string' ? value : ''} />
                        )}
                      </Box>
                    )
                  }
                })}
              </Box>
            )}
          </ModalBody>
          <ModalFooter>
            {loading ? (
              <Spinner />
            ) : (
              <>
                <Button colorScheme="blue" mr={3} onClick={() => handleDataSubmit()}>
                  Сохранить
                </Button>
                <Button onClick={closeModal}>Отмена</Button>
              </>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default TableBuilder
