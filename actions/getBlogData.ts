import { client } from "@/lib/sanity"

export async function getBlogData(slug:string){
  const query = `*[_type == "post" && slug.current == '${slug}'][0]{
     currentSlug:slug.current,
     title, 
     category->{
         title
      },
      mainImage,
      body,
      publishedAt
}
  `
  const data = await client.fetch(query)
  return data
}