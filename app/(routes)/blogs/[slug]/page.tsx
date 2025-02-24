import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/lib/sanity";
import Link from "next/link";
import Image from "next/image";

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
  const post = await client.fetch<SanityDocument>(POST_QUERY, await params, options);
  const postCategory = post.category.title
  console.log({postCategory})
  const RELATED_POST_QUERY = `*[_type == "post" && category->title == $category && slug.current != $currentSlug]{
    title,
    publishedAt,
    slug,
    mainImage,
    "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180)
  }[0...3]`;

  const relatedPosts = await client.fetch(RELATED_POST_QUERY, {
    category: postCategory,
    currentSlug:  (await params).slug,
  }, options);
 console.log({relatedPosts})
  const postImageUrl = post.mainImage
    ? urlFor(post.mainImage)?.width(550).height(310).url()
    : null;

  return (
    <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
      <div className="flex flex-col lg:flex-row justify-between px-4 mx-auto max-w-screen-2xl gap-8">
        {/* Main Article */}
        <article className="lg:w-2/3 format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <div className="my-2 lg:my-4">
            <Link href="/" className="inline-flex items-center text-blue-600 hover:underline">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" />
              </svg>
              Back to posts
            </Link>
          </div>

          {postImageUrl && (
            <figure className="mb-8">
               <div className="relative h-96 w-full rounded-lg overflow-hidden">
              <Image
                src={postImageUrl}
                alt={post.title}
                layout="fill"
                objectFit="cover"
                className="object-cover"
                />
               </div>
              <figcaption className="mt-2 text-sm text-gray-500 italic">Digital art by Anonymous</figcaption>
            </figure>
          )}

          <header className="mb-8 lg:mb-10 space-y-4">
            <h1 className="mb-4 text-4xl font-extrabold leading-tight text-gray-900 lg:text-5xl dark:text-white">
              {post.title}
            </h1>
            <div className="flex items-center space-x-4">
              <span className="px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-300">
                {post?.category?.title}
              </span>
              <time className="text-sm text-gray-500 dark:text-gray-400">
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
          </header>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            {Array.isArray(post.body) && <PortableText value={post.body} />}
          </div>
        </article>

        {/* Sidebar */}
        <aside className="lg:w-1/3 space-y-8 mt-4">
          {/* Newsletter Subscription */}
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Subscribe to our newsletter</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Get the latest posts delivered right to your inbox</p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Related Posts */}
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Related Posts</h3>
            <div className="space-y-4">
              {/* You'll need to fetch related posts based on category */}
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
                  <div>
                    <h4 className="font-semibold hover:text-blue-600 cursor-pointer">
                      Related post title here
                    </h4>
                    <p className="text-sm text-gray-500">5 min read</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}