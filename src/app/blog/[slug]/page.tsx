import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaRegUser, FaCalendarDays, FaRegComment, FaArrowRightLong } from "react-icons/fa6";
import { Metadata } from 'next';

type Post = {
  id: number;
  title: string;
  slug: string;
  content: string;
  image: string;
  categories: string[];
  post_uploader_name: string;
  created_at: string;
  comments: number;
  description?: string;
  text1?: string;
  text2?: string;
  isDescriptionOptional: boolean;
  isCommentTextOptional: boolean;
  istext1Optional: boolean;
  istext2Optional: boolean;
};

export const metadata: Metadata = {
  description: 'This is a blog post page',
  icons: {
    icon: "./blogger.ico",
  },
};

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const res = await fetch('http://localhost:3000/api/posts', { cache: "no-store" });
  const posts: Post[] = await res.json();

  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return notFound();
  }

  return (
    <div className='pt-3 md:pb-28 xs:pb-16 pb-12'>
      <div className="xs:py-16 py-14 bg-hover">
        <div className="text-white text-center">
          <h1 className='md:text-5xl text-3xl xs:mb-8 mb-6 font-semibold'>Image Post</h1>
          <ul className="flex space-x-4 justify-center items-center font-normal flex-wrap">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li><FaArrowRightLong /></li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li><FaArrowRightLong /></li>
            <li className="font-bold">{post.title}</li>
          </ul>
        </div>
      </div>

      <div className='my-3 px-3 py-4 bg-white text-hover font-normal'>Breaking News: <span className='text-black'>Astronomy Binoculars A Great Alternative</span></div>
      <div className='bg-white xs:p-5 p-2'>
        <Image src={post.image} alt={post.title} width={1120} height={443} />
        <div className='sm:p-5 p-2'>
          <button className='bg-hover text-white font-normal px-7 py-1 mt-2 block'>{post.categories[0]}</button>
          <a href='#' className='mt-5 xs:text-2xl text-lg inline-block font-bold'>{post.title}</a>
          <div className="xs:flex text-xs text-gray-500 xs:space-x-6 my-3 pb-3">
            <a href='#' className='flex items-center xs:mb-0 mb-2'><FaRegUser className='mr-2 ' />{post.post_uploader_name}</a>
            <a href='#' className='flex items-center xs:mb-0 mb-2'><FaCalendarDays className='mr-2 ' />{post.created_at}</a>
            <a href='#' className='flex items-center xs:mb-0 mb-2'><FaRegComment className='mr-2 ' />{post.comments} Comments</a>
          </div>
          {!post.istext1Optional && post.text1 && (
            <p className='text-gray-500'>{post.text1}</p>
          )}
          {!post.istext2Optional && post.text2 && (
            <p className='text-gray-500 mt-3 '>{post.text2}</p>
          )}
        </div>
      </div>
    </div>
  );
}
