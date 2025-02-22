import BentoGrid from "@/components/bento-grid";
import { CategoryGrid } from "@/components/category-grid";
import { EditorsPick } from "@/components/editors-pick";
import { FeaturedStories } from "@/components/featured";
import { Hero } from "@/components/hero";
import { client } from "@/lib/sanity";
import { PostType } from "@/types";
import { type SanityDocument } from "next-sanity";

const POSTS_QUERY = `*[
  _type == "post"]|order(publishedAt desc)[0...3]{
  _id, 
  title, 
  "currentSlug":slug.current,
  publishedAt,
  mainImage,
  category->{title},
  }`
  const options = { next: { revalidate: 30 } };

export default async function Home() {
  const posts = await client.fetch<PostType[]>(POSTS_QUERY, {}, options);
  // console.log(posts)
  return (
   <>
    <Hero />
    <div className="max-w-5xl mx-auto  py-8 md:px-0 px-4">
        <FeaturedStories posts={posts}/>
        <EditorsPick posts={posts}/>
        <CategoryGrid posts={posts}/>
      </div>
   </>
  );
}
