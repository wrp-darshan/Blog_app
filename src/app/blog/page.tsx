"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaRegUser, FaCalendarDays, FaRegComment, FaArrowRightLong } from "react-icons/fa6";

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
  isDescriptionOptional: boolean;
  isCommentTextOptional: boolean;
};

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch('/api/posts');
      const data = await res.json();
      setPosts(data);
    }
    fetchPosts();
  }, []);

  return (
    <div className="pt-3 md:pb-28 xs:pb-16 pb-12">
      {/* Breadcrumb section */}
      <div className="xs:py-16 py-14 bg-hover">
        <div className="text-white text-center">
          <h1 className='md:text-5xl text-3xl xs:mb-8 mb-6 font-semibold'>Blog Post</h1>
          <ul className="flex space-x-4 justify-center items-center font-normal flex-wrap">
            <li>
              <Link href="/" className="hover:text-gray-800">Home</Link>
            </li>
            <li><FaArrowRightLong /></li>
            <li>
              <span className="font-bold">Blog</span>
            </li>
          </ul>
        </div>
      </div>

      <div className='my-4'>
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden md:flex mb-4 grid">
            <div className="relative">
              <Link href={`/blog/${post.slug}`}>
                <Image src={post.image} alt={post.title} width={300} height={180} className="object-cover w-full md:w-[300px] md:h-[172px]" />
              </Link>
            </div>
            <div className="sm:p-6 p-4">
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-lg font-semibold mb-4 hover:text-hover duration-300">{post.title}</h2>
              </Link>
              <p className="text-gray-600 text-sm mb-4">{post.content}</p>
              <div className="xs:flex text-xs text-gray-500 xs:space-x-6">
                <a href='#' className='flex items-center xs:mb-0 mb-1'><FaRegUser className='mr-2' />{post.post_uploader_name}</a>
                <a href='#' className='flex items-center xs:mb-0 mb-1'><FaCalendarDays className='mr-2' />{post.created_at}</a>
                <a href='#' className='flex items-center xs:mb-0 mb-1'><FaRegComment className='mr-2' />{post.comments} Comments</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

