
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/lib/sanity";

import { MainArticle } from "@/components/blog-page/main-article";
import { IndividualPost } from "@/types";
import { Sidebar } from "@/components/blog-page/sidebar";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
   title,
   body,
    publishedAt,
    slug,
    mainImage,
    category->{title},
  
}`;
;

const { projectId, dataset } = client.config();
export const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = await client.fetch<IndividualPost>(POST_QUERY, await params, options);
  const postCategory = post.category.title
  console.log({postCategory})
  const RELATED_POST_QUERY = `*[_type == "post" && category->title == $category && slug.current != $currentSlug]{
    title,
    publishedAt,
    "currentSlug":slug.current,
    mainImage,
    "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180)
  }[0...3]`;

  const relatedPosts = await client.fetch(RELATED_POST_QUERY, {
    category: postCategory,
    currentSlug:  (await params).slug,
  }, options);
//  console.log({relatedPosts})

  return (
    <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 lg:px-6 md:px-4 px-2 bg-white dark:bg-gray-900 antialiased">
      <div className="flex flex-col lg:flex-row justify-between px-4 mx-auto max-w-screen-2xl gap-8">
        {/* Main Article */}  
  <MainArticle post={post} />
        {/* Sidebar */}
      <Sidebar posts={relatedPosts} />
      </div>
    </main>
  );
}