import { client } from "@/lib/sanity";
import { type SanityDocument } from "next-sanity";

const POSTS_QUERY = `*[
  _type == "post"]|order(publishedAt desc)[0...3]{_id, title, "currentSlug":slug.current, publishedAt}`
  const options = { next: { revalidate: 30 } };

export default async function Home() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  console.log(posts);
  return (
   <>
      <div className="container mx-auto ">
        <h1 className="text-4xl font-bold  mt-8 pl-12">
          GOSSIP 
          <span className=" text-blue-300">
          PREMIER
            </span>
        </h1>
      </div>
      <div className="max-w-5xl mx-auto mt-5">
      <div className="mb-32 grid grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-16 md:gap-y-32 lg:gap-x-32">
        {posts.map((post) => (
          <div key={post._id} className="bg-white shadow-md p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
            <p className="text-gray-600">{new Date(post.publishedAt).toLocaleDateString()}</p>
            <a href={`/post/${post.currentSlug}`} className="text-blue-500 hover:underline">Read more</a>
          </div>
        ))}
        </div>
      </div>
   </>
  );
}
