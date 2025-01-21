const BlogGrid = () => {
  // Static blog posts data
  const posts = [
    {
      id: 1,
      image:
        "https://demos.codezeel.com/wordpress/WCM06/WCM060147/wp-content/uploads/2024/01/01-1.jpg", // Replace with your image URL
      date: "February 9, 2024",
      author: "Editor",
      title: "How to Write a Blog Post Your Readers Will Love in 5 Steps",
      excerpt:
        "Why the world would end without travel coupons. The 16 worst songs about spa...",
    },
    {
      id: 2,
      image:
        "https://demos.codezeel.com/wordpress/WCM06/WCM060147/wp-content/uploads/2024/01/02-25.jpg", // Replace with your image URL
      date: "February 7, 2024",
      author: "Editor",
      title: "9 Content Marketing Trends and Ideas to Increase Traffic",
      excerpt:
        "Why do people think wholesale accessories are a good idea? Unbelievable cool tech gadget...",
    },
    {
      id: 3,
      image:
        "https://demos.codezeel.com/wordpress/WCM06/WCM060147/wp-content/uploads/2024/01/03-25.jpg", // Replace with your image URL
      date: "February 5, 2024",
      author: "Editor",
      title: "The Ultimate Guide to Marketing Strategies to Improve Sales",
      excerpt:
        "Many things about electronic devices your kids don't want you to know How storage...",
    },
  ];

  return (
    <div className="mx-auto p-4 mb-[12vh] md:mx-[10vw]">
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-gray-800 font-semibold text-3xl lg:text-5xl mb-2 text-center pb-[3vh]">
          From The Blog
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article key={post.id} className="group cursor-pointer">
            {/* Image Container with Zoom Effect */}
            <div className="overflow-hidden rounded-sm mb-4 aspect-[16/10]">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Post Meta */}
            <div className="flex items-center gap-2 text-red-500 uppercase text-lg font-semibold mb-2">
              <time>{post.date}</time>
              <span>•</span>
              <span>by {post.author}</span>
            </div>

            {/* Post Title */}
            <h2 className="text-2xl text-gray-800 font-semibold mb-3 transition-colors">
              {post.title}
            </h2>

            {/* Post Excerpt */}
            <p className="text-gray-600 text-lg line-clamp-2">{post.excerpt}</p>
            <p className="text-gray-800 text-lg mt-3 uppercase underline font-semibold">read more</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogGrid;
