import axios from 'axios'

import { CMS_URL } from '~/utils/config'

interface CmsResponse<T> {
  data: T[];
  meta: never;
}

export const getBlogBySlug = async (slug: string) => {
  const { data: obj } = await axios.get<CmsResponse<Blog>>(`${ CMS_URL }/blogs?filters[slug][$eq]=${ slug }`)
  return obj.data[0]
}

export const getAllBlogs = async () => {
  const { data: obj } = await axios.get<CmsResponse<Blog>>(`${ CMS_URL }/blogs?filters[category][title][$eq]=Blogs`)
  return obj.data
}

export const getUpdates = async () => {
  const { data: obj } = await axios.get<CmsResponse<Update>>(`${ CMS_URL }/updates`)
  return obj.data
}
