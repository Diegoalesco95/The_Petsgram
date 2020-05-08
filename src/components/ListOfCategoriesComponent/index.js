import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Category } from '../Category'
import { CategorySkeleton } from '../CategorySkeleton'
import { List, Item } from './styles'
import { Error } from '../../styles/Error'

const ListOfCategoriesComponent = ({ loading, error, categories }) => {
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => {
    if (error) {
      return (
        <>
          <CategorySkeleton />
          <Error>
            <p>Upps! parece que se presentó un problema.</p>
            <p>Intenta nuevamente mas tarde.</p>
          </Error>
        </>
      )
    }
    if (loading) {
      return (
        <List>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Item key={item}>
              <CategorySkeleton />
            </Item>
          ))}
        </List>
      )
    }

    return (
      <List fixed={fixed}>
        {categories.map((category) => (
          <Item key={category.id}>
            <Category {...category} path={`/pet/${category.id}`} />
          </Item>
        ))}
      </List>
    )
  }

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}

ListOfCategoriesComponent.propTypes = {
  categories: PropTypes.objectOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        emoji: PropTypes.string,
        cover: PropTypes.string,
        path: PropTypes.string
      })
    )
  ),
  loading: PropTypes.bool,
  error: PropTypes.string
}

export const ListOfCategories = React.memo(ListOfCategoriesComponent)
