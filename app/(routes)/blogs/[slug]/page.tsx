import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/lib/sanity";
import Link from "next/link";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
   title,
   body,
    publishedAt,
    slug,
    mainImage,
    category->{title},
  
}`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
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
  const postImageUrl = post.mainImage
    ? urlFor(post.mainImage)?.width(550).height(310).url()
    : null;

  return (
    <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
     
         <div className="flex justify-between px-4 mx-auto max-w-screen-2xl ">
      
         <article className="mx-auto w-full max-w-xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <div className=" my-2 lg:my-4">
          <Link href="/" className="hover:underline">
        ← Back to posts
      </Link>
          </div>
          {postImageUrl &&(
           <figure>
           <img
              src={postImageUrl}
              alt={post.title}
              className="aspect-video rounded-xl w-full"
              
              height="310"
            />
             <figcaption className=" text-sm">Digital art by Anonymous</figcaption>
           </figure>
          )}
             <header className="mb-4 lg:mb-6 not-format space-y-2">
            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
              {post.title}
            </h1>
            <p className="text-sm font-mono font-semibold text-gray-500 dark:text-gray-400">
              {post?.category?.title}
            </p>
          </header>
      <div className="space-y-4">
        <p className=" font-mono font-semibold text-sm ">Published: {new Date(post.publishedAt).toLocaleDateString()}</p>
        {Array.isArray(post.body) && <PortableText value={post.body} />}
      </div>
            </article>
         </div>
    

    </main>
  );
}