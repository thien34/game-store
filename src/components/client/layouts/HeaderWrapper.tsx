import { categoryService } from '@/services/CategoryService'
import Header from './navbar'

const HeaderWrapper = async () => {
  const { data: categories } = await categoryService.getAllCategories()
  return <Header categories={categories ?? []} />
}

export default HeaderWrapper
