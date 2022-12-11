import Header from "../components/Header"

export async function getServerSideProps({ params }) {
  const url = process.env.API_ENDPOINT || 'http://localhost:3000/'
  const res = await fetch(`${url}/posts/slug:${params.slug}`)
  const data = await res.json()

  return {
    props: {
      featuredMedia: data.post_thumbnail && data.post_thumbnail.URL + "?w=900",
      title: data.title,
      content: data.content
    }
  }
}

export default function Post({ featuredMedia, title, content }) {
  return (
    <div>
      <div className="bg-white">
        <div className="container py-8 lg:py-16">
          <Header />
        </div>
      </div>

      <div className="container py-8 lg:py-16" style={{ maxWidth: '900px' }}>
        <div className="bg-white">
          {featuredMedia && <picture>
            <img src={featuredMedia} alt={title} className='block w-full' />
          </picture>}

          <div className="container p-8" style={{ maxWidth: '600px' }}>
            <p className="text-4xl font-bold">{title}</p>

            <div className="post" dangerouslySetInnerHTML={{ __html: content }}></div>
          </div>
        </div>
      </div>
    </div >
  )
}