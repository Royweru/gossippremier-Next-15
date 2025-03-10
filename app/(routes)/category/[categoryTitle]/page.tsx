import { client } from '@/lib/sanity'

const options = {next:{revalidate:30}}
const CategoryDetailsPage =async ({
  params
}:{
  params:Promise<{categoryTitle:string}>
}) => {
   const POSTS_QUERY = `*[_type =="post" && category->title == $categoryTitle]{
                      title,
                      publishedAt,
                      "currrentSlug":slug.current,
                      mainImage,
                      "estimatedReadingTime":round(length(pt::text(body))/5/180)
   }`
   const posts = await client.fetch(POSTS_QUERY,await params,options)
   
   if(!posts) {
    return(
      <div className=' w-full h-full relative flex items-center justify-center'>
           <div className=' font-semibold'>
                <h4 className='text-3xl'>
                   Currently we have no blogs in this category
                </h4>
           </div>
      </div>
    )
   }
  return (
   <div className='w-full relative '>
   First section
   </div>
  )
}

export default CategoryDetailsPage