import axios from 'axios'

import { CMS_URL } from '~/utils/config'

interface CmsResponse<T> {
  data: T[];
  meta: never;
}

interface CmsSingleEntryResponse<T> {
  data: T;
  meta: never;
}

export const getStaticPage = async (slug: string, locale?: string) => {
  const localeParam = locale ? `&locale=${ locale }` : ''
  const { data: obj } = await axios.get<CmsSingleEntryResponse<StaticPage>>(`${ CMS_URL }/${ slug }?populate[0]=seo&populate[1]=seo.image${ localeParam }`)
  return obj.data
}

export const getPostBySlug = async (slug: string) => {
  const { data: obj } = await axios.get<CmsResponse<Post>>(`${ CMS_URL }/posts?filters[slug][$eq]=${ slug }&populate[1]=hero&populate[2]=seo&populate[3]=seo.image`)
  return obj.data[0]
}

export const getAllPosts = async () => {
  const { data: obj } = await axios.get<CmsResponse<Post>>(`${ CMS_URL }/posts?filters[category][title][$eq]=blogs`)
  return obj.data
}

export const getUpdates = async () => {
  const { data: obj } = await axios.get<CmsResponse<Update>>(`${ CMS_URL }/updates`)
  return obj.data
}

export const getBanners = async (location?: string, locale?: string) => {
  const additionalLocation = location ? `filters[location][$in][1]=${ location }&` : ''
  const query = `filters[location][$in][0]=all&${ additionalLocation }sort=createdAt:desc&pagination[start]=0&pagination[limit]=1`
  const localeParam = locale ? `&locale=${ locale }` : ''
  const { data: obj } = await axios.get<CmsResponse<Banner>>(`${ CMS_URL }/banners?${ query }${ localeParam }`)
  return obj.data
}
