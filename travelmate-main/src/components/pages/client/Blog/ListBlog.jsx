import { Link } from "react-router-dom"; // Import Link for navigation
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Card, Tooltip } from "antd";
import { UserOutlined, CalendarOutlined } from "@ant-design/icons";

export default function ListBlog({ posts }) {
  return (
    <div>
      <Slider
        dots={true}
        infinite={false}
        speed={500}
        className="slide-blog"
        slidesToShow={3}
        slidesToScroll={1}
        responsive={[
          {
            breakpoint: 1024,
            settings: { slidesToShow: 2 },
          },
          {
            breakpoint: 640,
            settings: { slidesToShow: 1 },
          },
        ]}
      >
        {posts
          .filter((post) => post.status === "published")
          .map((post) => (
            <div key={post.blog_id} className="px-2">
              <Link to={`/blog/${post.blog_id}`}>
                <Card
                  hoverable
                  cover={
                    <img
                      alt={post.title}
                      src={`${import.meta.env.VITE_IMAGE_REVIEW}/${
                        post.images[0].image_url
                      }`}
                      className="h-48 object-cover"
                    />
                  }
                  className="rounded-2xl shadow-sm transition-all duration-300 hover:shadow-lg h-full"
                >
                  <Tooltip title={post.title}>
                    <h2 className="text-xl max-w-[350px] font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased truncate">
                      {post.title}
                    </h2>
                  </Tooltip>
                  <p className="max-w-[350px] overflow-hidden text-ellipsis whitespace-nowrap text-gray-600 mb-3">
                    {post.content}
                  </p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>
                      <UserOutlined className="mr-1" /> {post.author?.name}
                    </span>
                    <span>
                      <CalendarOutlined className="mr-1" />
                      {new Date(post.created_at).toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </Card>
              </Link>
            </div>
          ))}
      </Slider>
    </div>
  );
}
