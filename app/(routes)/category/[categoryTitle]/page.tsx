import { client } from "@/lib/sanity";
import CategoryDetailsClient from "./category-details-client";

const options = { next: { revalidate: 30 } };
const CategoryDetailsPage = async ({
  params,
}: {
  params: Promise<{ categoryTitle: string }>;
}) => {
  const POSTS_QUERY = `*[_type =="post" && category->title == $categoryTitle]{
                      title,
                      publishedAt,
                      "currrentSlug":slug.current,
                      mainImage,
                      "estimatedReadingTime":round(length(pt::text(body))/5/180),
                      category->{title},
                       author->{name, twitter, bio, image, email},
   }`;
  const posts = await client.fetch(POSTS_QUERY, await params, options);
  
  // if (!posts || posts.length ===0
  // ) {
  //   return (
  //     <div className=" w-full h-full relative flex items-center justify-center">
  //       <div className=" font-semibold">
  //         <h4 className="text-3xl">
  //           Currently we have no blogs in this category
  //         </h4>
  //       </div>
  //     </div>
  //   );
  // }
  return (
    <div className="min-h-screen  md:py-8 py-6">
      <CategoryDetailsClient posts={posts} />
    </div>
  );
};

export default CategoryDetailsPage;
