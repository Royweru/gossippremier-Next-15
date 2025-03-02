
import { BlogSection1 } from "@/components/blogs-section1";
import { BlogSection2 } from "@/components/blog-section2";
import { CategoryGrid } from "@/components/category-grid";
import { EditorsPick } from "@/components/editors-pick";
import { FeaturedStories } from "@/components/featured";
import { Hero } from "@/components/hero";
import { NewsGrid } from "@/components/news-grid";
import { Newsletter } from "@/components/newsletter";
import { client } from "@/lib/sanity";
import { PostType } from "@/types";
import { MustRead } from "@/components/must-read";

const POSTS_QUERY = `*[
  _type == "post"]|order(publishedAt desc){
  _id, 
  title, 
  "currentSlug":slug.current,
  publishedAt,
  mainImage,
  category->{title},
  author->{name, twitter, bio, image, email},
  excerpt
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
        <Newsletter />   
      </div>
      <NewsGrid posts={posts}/>
      <BlogSection1 
       blogPosts={posts}
       tagline="Latest Posts"
       heading="Topping the charts this week"
       description=" The most popular posts on our platform this week. "
      />
      <BlogSection2
       posts= {posts}
      />
      <MustRead posts={posts}/>
   </>
  );
}
