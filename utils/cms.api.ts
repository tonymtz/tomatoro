import axios from 'axios'

import { isCleanInput } from '~/utils/clean-input'
import { CMS_URL } from '~/utils/config'

export const getStaticPage = async (slug: string, locale?: string) => {
  if (!isCleanInput(slug)) {
    throw new Error('Invalid slug')
  }

  const localeParam = locale ? `&locale=${ locale }` : ''
  const { data: obj } = await axios.get<CmsSingleEntryResponse<StaticPage>>(`${ CMS_URL }/${ slug }?populate[0]=seo&populate[1]=seo.image${ localeParam }`)
  return obj.data
}

export const getPostBySlug = async (slug: string) => {
  if (!isCleanInput(slug)) {
    throw new Error('Invalid slug')
  }

  const { data: obj } = await axios.get<CmsResponse<Post>>(`${ CMS_URL }/posts?filters[slug][$eq]=${ slug }&populate[1]=hero&populate[2]=seo&populate[3]=seo.image`)
  return obj.data[0]
}

export const getAllPosts = async () => {
  const { data: obj } = await axios.get<CmsResponse<Post>>(`${ CMS_URL }/posts?filters[category][title][$eq]=blogs`)
  return obj.data
}

export const getUpdates = async (locale?: string) => {
  const localeParam = locale ? `?locale=${ locale }` : ''
  const { data: obj } = await axios.get<CmsResponse<Update>>(`${ CMS_URL }/updates${ localeParam }`)
  return obj.data
}

export const getBanners = async (location?: string, locale?: string) => {
  const additionalLocation = location ? `filters[location][$in][1]=${ location }&` : ''
  const query = `filters[location][$in][0]=all&${ additionalLocation }sort=createdAt:desc&pagination[start]=0&pagination[limit]=1`
  const localeParam = locale ? `&locale=${ locale }` : ''
  const { data: obj } = await axios.get<CmsResponse<Banner>>(`${ CMS_URL }/banners?${ query }${ localeParam }`)
  return obj.data
}

export const postFeedback = async (data: Feedback) => {
  const { data: obj } = await axios.post<CmsSingleEntryResponse<Feedback>>('/api/feedback', { data })
  return obj.data
}

export const postSubscription = async (data: Subscription) => {
  const { data: obj } = await axios.post<CmsSingleEntryResponse<Subscription>>('/api/subscribe', { data })
  return obj.data
}
