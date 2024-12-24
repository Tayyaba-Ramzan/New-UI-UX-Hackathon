import React from 'react';
import Image from 'next/image';

// Banner Section
const Banner = () => (
  <div>
    <Image
      src="/images/blog.png"
      alt="blog"
      width={1440}
      height={316}
      className="w-full h-auto mt-20"
    />
  </div>
);

// Blog Post Component
const BlogPost = ({
  imgSrc,
  title,
  description,
}: {
  imgSrc: string;
  title: string;
  description: string;
}) => (
  <div className="mt-14 w-full">
    <Image src={imgSrc} alt={`${title}-img`} width={817} height={500} className="w-full" />
    <div className="flex items-center gap-2 lg:gap-4 mt-2">
      <Image src="/images/user.svg" alt="user-img" width={20} height={20} />
      <h3 className="text-[#9F9F9F] text-sm lg:text-base">Admin</h3>
      <Image src="/images/briefcase.svg" alt="briefcase-img" width={20} height={20} />
      <h3 className="text-[#9F9F9F] text-sm lg:text-base">14 Oct 2022</h3>
      <Image src="/images/wood.svg" alt="wood-img" width={20} height={20} />
      <h3 className="text-[#9F9F9F] text-sm lg:text-base">Wood</h3>
    </div>
    <h1 className="text-[20px] lg:text-[30px] font-semibold my-4">{title}</h1>
    <p className="text-[#9F9F9F] mb-8 text-sm lg:text-base">{description}</p>
    <span className="border-b border-black text-sm">Read More</span>
  </div>
);

// Categories Component
const Categories = () => {
  const categories = [
    { name: 'Crafts', count: 2 },
    { name: 'Design', count: 8 },
    { name: 'Handmade', count: 7 },
    { name: 'Interior', count: 1 },
    { name: 'Wood', count: 6 },
  ];

  return (
    <div>
      <h1 className="text-[20px] lg:text-[24px] font-semibold mt-10">Categories</h1>
      <div className="space-y-4 lg:space-y-6">
        {categories.map((category) => (
          <div key={category.name} className="flex justify-between text-sm lg:text-base">
            <h3>{category.name}</h3>
            <span>{category.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Recent Posts Component
const RecentPosts = () => {
  const posts = [
    { src: '/images/pro1.png', title: 'Going all-in with millennial design' },
    { src: '/images/pro2.png', title: 'Exploring new ways of decorating' },
    { src: '/images/pro3.png', title: 'Handmade pieces that took time to make' },
    { src: '/images/pro4.png', title: 'Modern home in Milan' },
    { src: '/images/pro5.png', title: 'Colorful office redesign' },
  ];

  return (
    <div>
      <h1 className="text-[24px] font-semibold mb-8 mt-20">Recent Posts</h1>
      {posts.map((post, index) => (
        <div
          key={index}
          className="flex items-center gap-6 mb-6 border-b border-gray-200 pb-4"
        >
          <Image
            src={post.src}
            alt={`post${index + 1}`}
            width={80}
            height={80}
            className="rounded-md object-cover"
          />
          <div className="flex flex-col">
            <h1 className="font-semibold text-[16px] text-gray-800 w-[160px]">{post.title}</h1>
            <span className="text-[#9F9F9F] text-[14px] mt-2">03 Aug 2022</span>
          </div>
        </div>
      ))}
    </div>



  );
};

// Pagination Component
const Pagination = () => {
  const pages = ['1', '2', '3', 'Next'];

  return (
    <div className="flex items-center justify-center gap-2 lg:gap-8 mt-10 lg:mt-14">
      {pages.map((item) => (
        <div
          key={item}
          className={`w-[40px] lg:w-[60px] h-[40px] lg:h-[60px] flex items-center justify-center ${item === '1' ? 'bg-[#B88E2F] text-white' : 'bg-[#F9F1E7]'
            }`}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

// Blog Page Component
const BlogPage = () => (
  <>
    <Banner />
    <div className="flex flex-col lg:flex-row lg:justify-between items-start lg:h-[2210px] px-4 lg:px-0 mt-16">
      {/* Left Section */}
      <div className="lg:w-1/2 lg:ml-12">
        <BlogPost
          imgSrc="/images/laptop.png"
          title="Going all-in with millennial design"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
        />
        <BlogPost
          imgSrc="/images/drawing.png"
          title="Exploring new ways of decorating"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
        />
        <BlogPost
          imgSrc="/images/book.png"
          title="Handmade pieces that took time to make"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
        />
      </div>
      {/* Right Section */}
      <div className="lg:w-1/2 lg:mr-20 lg:ml-20 mt-10 ">
        <div className="flex items-center justify-end w-full lg:w-[311px] h-[58px] border px-4 border-[#9F9F9F] rounded-md">
          <Image src="/images/research.svg" alt="search-img" width={20} height={20} />
        </div>
        <Categories />
        <RecentPosts />
      </div>
    </div>
    <Pagination />
  </>
);

export default BlogPage;
