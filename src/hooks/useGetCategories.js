import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const GET_CATEGORIES = gql`
  query getCategories {
    categories {
      id
      cover
      name
      emoji
      path
    }
  }
`
export const useGetCategories = () => {
  const { error, loading, data } = useQuery(GET_CATEGORIES)
  return [error, loading, data]
}
