import React from 'react'
import { ListOfCategories as ListOfCategoriesComponent } from '../components/ListOfCategoriesComponent'
import { useGetCategories } from '../hooks/useGetCategories'

export const ListOfCategories = () => {
  const [error, loading, data] = useGetCategories()
  return <ListOfCategoriesComponent loading={loading} error={error} {...data} />
}
