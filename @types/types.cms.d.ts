interface CmsResponse<T> {
  data: T[];
  meta: never;
}

interface CmsSingleEntryResponse<T> {
  data: T;
  meta: never;
}

type Locale = 'en' | 'es'

type Blog = {
  id: number
  attributes: {
    title: string
    content: string
    locale: string
    publishedAt: string
    createdAt: string
    updatedAt: string
    slug: string
  }
}

type Category = {
  id: number
  attributes: {
    title: string
    createdAt: string
    updatedAt: string
    locale: Locale
  }
}

type Seo = {
  id: number
  attributes: {
    title: string
    description: string
    keywords: string
    createdAt: string
    updatedAt: string
    locale: Locale
    image: {
      data: Image | null
    }
  }
}

type Image = {
  id: number
  attributes: {
    name: string
    alternativeText: string
    caption: string
    width: number
    height: number
    url: string
    formats: {
      thumbnail?: {
        url: string
        width: number
        height: number
      },
      small?: {
        url: string
        width: number
        height: number
      }
      medium?: {
        url: string
        width: number
        height: number
      }
      large?: {
        url: string
        width: number
        height: number
      }
    }
  }
}

type StaticPage = {
  id: number
  attributes: {
    title: string
    content: string
    excerpt: string
    keywords: string
    thumbnail?: {
      data: Image | null
    }
    locale: string
    createdAt: string
    updatedAt: string
  }
}

type Post = {
  id: number
  attributes: {
    title: string
    slug: string
    content: string
    excerpt: string
    keywords: string
    category: {
      data: Category | null
    }
    hero?: {
      data: Image | null
    }
    thumbnail?: {
      data: Image | null
    }
    locale: string
    publishedAt: string
    createdAt: string
    updatedAt: string
  }
}

type Update = {
  id: number
  attributes: {
    title: string
    locale: string
    publishedAt: string
    createdAt: string
    updatedAt: string
    date: string
  }
}

type Banner = {
  id: number
  attributes: {
    content: string
    start: string
    end: string
    location: string
    locale: string
    publishedAt: string
    createdAt: string
    updatedAt: string
  }
}

type Feedback = {
  content: string
  liked: boolean
}

type Subscription = {
  email: string
  marketing: boolean
}
