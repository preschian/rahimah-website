
import { format } from 'date-fns'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'

export async function getServerSideProps({ query }) {
  const page = query.page || 1
  const url = process.env.API_ENDPOINT || 'http://localhost:3000/'
  const res = await fetch(`${url}/posts?page=${page}&number=6`)
  const data = await res.json()

  const resSites = await fetch(url)
  const sites = await resSites.json()

  return {
    props: {
      data,
      posts: data.posts,
      text: sites.name,
      desc: sites.description,
      page,
    }
  }
}

export default function Home({ posts, text, desc, page }) {
  const title = `${text} - ${desc}`
  const featuredImage = (post) => {
    return post.post_thumbnail && post.post_thumbnail.URL + "?w=480";
  }

  return <div>
    <Head>
      <title>{title}</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/icon.png" />
    </Head>

    <div className="bg-white">
      <div className="container py-8 lg:py-16">
        <Header />

        <p className='text-3xl lg:text-6xl font-bold text-center mt-10 lg:mt-20'>{text}</p>
        <p className='text-lg text-center raleway'>{desc}</p>
      </div>
    </div>

    <div className="container py-8 lg:py-16">
      <div className="columns-1 lg:columns-3 gap-8 space-y-8">
        {posts.map((post) => {
          const cssCenter = !featuredImage(post) && "flex items-center"
          return <Link key={post.slug} className={`bg-white block aspect-square ${cssCenter}`} href={post.slug}>
            {featuredImage(post) && <div className="overflow-hidden">
              <picture>
                <img src={featuredImage(post)} alt="post.title" className="object-cover h-60 w-full" />
              </picture>
            </div>}

            <div className="p-6">
              <p className="font-bold text-xl">{post.title}</p>
              <p className='text-xs text-gray-500 my-2'>{format(new Date(post.date), "MMM dd, yyyy")}</p>

              <div dangerouslySetInnerHTML={{ __html: post.excerpt }}></div></div>
          </Link>
        })}
      </div>

      <div className='inline-block w-full mt-8'>
        <div className="inline-block w-1/2">
          {page > 1 && <Link className='raleway inline-block leading-none border-2 border-gray-600 py-2 px-5 transition-all hover:bg-gray-600 hover:text-white' href={`?page=${parseInt(page) - 1}`}>PREV PAGE</Link>}
        </div>
        <div className="inline-block w-1/2 text-right">
          {posts.length === 6 && <Link className='raleway inline-block leading-none border-2 border-gray-600 py-2 px-5 transition-all hover:bg-gray-600 hover:text-white' href={`?page=${parseInt(page) + 1}`}>NEXT PAGE</Link>}
        </div>

      </div>
    </div>
  </div>
}
