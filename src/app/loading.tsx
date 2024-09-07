import { Flex, Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'

export default function Loading() {
  return (
    <Flex gap={4} flexWrap={'wrap'}>
      <Skeleton height="400px" w={'500px'} p={4} borderRadius={'1rem'}></Skeleton>
      <Skeleton height="400px" w={'500px'} p={4}></Skeleton>
      <Skeleton height="400px" w={'500px'} p={4}></Skeleton>
      <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" w={'500px'} />
    </Flex>
  )
}
