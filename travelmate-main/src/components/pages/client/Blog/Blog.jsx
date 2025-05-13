import { useEffect, useState } from "react";
import { Form } from "antd";
import BlogCreate from "./CreateBlog";
import ListBlog from "./ListBlog";
import axiosInstance from "../../../../ultis/axiosInstance";

export default function Blog() {
  const [showForm, setShowForm] = useState(false);
  const [posts, setPosts] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("tokenUser"));
    const fetchBlogs = async () => {
      try {
        const response = await axiosInstance.get(
          `${import.meta.env.VITE_API_URL}/user/list-blogs`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setPosts(response.data?.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const onFinish = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="max-w-[1440px] mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">List Blog</h1>

      <div className="flex justify-center mb-4">
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          {showForm ? "Close Form" : "Create Blog"}
        </button>
      </div>

      <div
        className={`transition-all duration-500 ${
          showForm
            ? "opacity-100 max-h-[1000px] mb-6"
            : "opacity-0 max-h-0 overflow-hidden"
        }`}
      >
        <BlogCreate onFinish={onFinish} />
      </div>
      <ListBlog posts={posts} />
    </div>
  );
}
