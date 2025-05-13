import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  UserOutlined,
  CalendarOutlined,
  HeartOutlined,
  SmileOutlined,
  LikeOutlined,
} from "@ant-design/icons";
import { toast } from "react-toastify";
import { Popconfirm } from "antd";
import { IconWowReact } from "../../../../Svg";
import axiosInstance from "../../../../ultis/axiosInstance";

export default function BlogDetail() {
  const user = JSON.parse(localStorage.getItem("user"));
  const { blogId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [replyContent, setReplyContent] = useState("");
  const [replyToCommentId, setReplyToCommentId] = useState(null);
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editingReplyId, setEditingReplyId] = useState(null);
  const [editContent, setEditContent] = useState("");
  const [reaction, setReaction] = useState({});
  const [hoveredButton, setHoveredButton] = useState(null);
  const [listReact, setReact] = useState([]);
  const [reload, setReload] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchReactions = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("tokenUser"));
        const response = await axiosInstance.get(
          `${import.meta.env.VITE_API_URL}/user/reaction/${blogId}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        setReact(response.data);
      } catch (err) {
        console.error("Error fetching reactions:", err);
      }
    };
    fetchReactions();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("tokenUser"));
        const [postRes, commentsRes] = await Promise.all([
          axiosInstance.get(
            `${import.meta.env.VITE_API_URL}/user/blog-detail/${blogId}`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          ),
          axiosInstance.get(`${import.meta.env.VITE_API_URL}/user/comment/${blogId}`, {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);

        setPost(postRes.data.data);
        setComments(commentsRes.data);
      } catch (err) {
        setError("Bài viết không tồn tại.", err);
      } finally {
        setLoading(false);
        setReload(false);
      }
    };

    fetchData();
  }, [blogId, reload]);

  const handleDeleteComment = async (commentId, isReply = false) => {
    try {
      const token = JSON.parse(localStorage.getItem("tokenUser"));
      const url = isReply
        ? `${import.meta.env.VITE_API_URL}/user/comment/${commentId}`
        : `${import.meta.env.VITE_API_URL}/user/comment/${commentId}`;

      await axiosInstance.delete(url, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // Remove the comment from the local state
      setComments((prevComments) =>
        prevComments.filter(
          (comment) =>
            comment.comment_id !== commentId &&
            comment.parent_comment_id !== commentId
        )
      );

      toast.success("Bình luận đã được xóa!");
    } catch (err) {
      toast.error("Xóa bình luận thất bại!");
      console.error(err);
    }
  };

  const handleSubmitComment = async (e) => {
    e.preventDefault();
    const content = replyToCommentId ? replyContent : newComment;
    if (!content.trim()) return;

    try {
      const token = JSON.parse(localStorage.getItem("tokenUser"));
      const response = await axiosInstance.post(
        `${import.meta.env.VITE_API_URL}/user/comment`,
        {
          blog_id: blogId,
          user_id: user.userId,
          content,
          parent_comment_id: replyToCommentId ?? null,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setComments((prevComments) => [response.data, ...prevComments]);
      toast.success("Đăng bình luận thành công!");
      if (replyToCommentId) {
        setReplyContent("");
        setReplyToCommentId(null);
      } else {
        setNewComment("");
      }
    } catch (err) {
      console.error(err);
      toast.error("Đăng bình luận thất bại!");
    }
  };

  const handleReplyClick = (commentId) => {
    setReplyToCommentId(commentId);
    setReplyContent("");
  };

  const handleEditClick = (commentId, currentContent, isReply = false) => {
    if (isReply) {
      setEditingReplyId(commentId);
      setEditContent(currentContent);
    } else {
      setEditingCommentId(commentId);
      setEditContent(currentContent);
    }
  };

  const handleSubmitEdit = async (e, isReply = false) => {
    e.preventDefault();
    if (!editContent.trim()) {
      setEditingCommentId(null);
      setEditingReplyId(null);
      setEditContent("");
      return;
    }
    try {
      const token = JSON.parse(localStorage.getItem("tokenUser"));
      const url = isReply
        ? `${import.meta.env.VITE_API_URL}/user/comment/${editingReplyId}`
        : `${import.meta.env.VITE_API_URL}/user/comment/${editingCommentId}`;
      const response = await axiosInstance.put(
        url,
        { content: editContent },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setComments((prevComments) =>
        prevComments.map((comment) => {
          if (
            comment.comment_id === (isReply ? editingReplyId : editingCommentId)
          ) {
            return {
              ...comment,
              content: response.data.content,
            };
          }
          return comment;
        })
      );

      toast.success("Cập nhật thành công!");
      setEditingCommentId(null);
      setEditingReplyId(null);
      setEditContent("");
    } catch (err) {
      toast.error("Cập nhật thất bại!");
      console.error(err);
    }
  };

  const renderReplies = (parentId) => {
    const replies = comments.filter((c) => c.parent_comment_id === parentId);
    return replies.length > 0 ? (
      <div className="ml-6 mt-4 border-l-2 border-gray-300 pl-4">
        {replies.map((reply) => (
          <div key={reply.comment_id} className="mb-2">
            <p className="text-sm text-gray-600">
              <span className="font-medium">{reply.author?.name}</span> •{" "}
              {new Date(reply.created_at).toLocaleDateString()}
            </p>
            {editingReplyId === reply.comment_id ? (
              <form
                onSubmit={(e) => handleSubmitEdit(e, true)}
                className="mb-6"
              >
                <textarea
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                  placeholder={`Edit comment...`}
                  className="w-full p-3 border border-[#30b8b8] rounded-lg focus:outline-none"
                  rows={4}
                />
                <button
                  type="submit"
                  className="cursor-pointer mt-2 px-4 py-2 bg-[#30b8b8] hover:bg-[#71d4d4] text-white rounded-md"
                >
                  Update Comment
                </button>
              </form>
            ) : (
              <p className="text-gray-700">{reply.content}</p>
            )}
            <div className="flex gap-4">
              {user.userId === reply.user_id && (
                <button
                  onClick={() =>
                    handleEditClick(reply.comment_id, reply.content, true)
                  }
                  className="cursor-pointer mt-2 text-sm text-orange-500"
                >
                  Edit
                </button>
              )}

              {user.userId === reply.user_id && (
                <Popconfirm
                  title="Are you sure to delete this comment?"
                  onConfirm={() => handleDeleteComment(reply.comment_id, true)}
                  okText="Yes"
                  cancelText="No"
                >
                  <button className="cursor-pointer mt-2 text-sm text-red-500">
                    Delete
                  </button>
                </Popconfirm>
              )}
            </div>
          </div>
        ))}
      </div>
    ) : null;
  };

  const renderReactionCounts = (commentId) => {
    const reactionsForComment = listReact.filter(
      (reaction) => reaction.comment_id === commentId
    );

    const totalReactions = reactionsForComment.length;
    return totalReactions;
  };

  const handleMouseEnter = (commentId) => {
    setHoveredButton(commentId);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  const handleReaction = async (commentId, reactionType) => {
    setReaction((prevReactions) => ({
      ...prevReactions,
      [commentId]: reactionType,
    }));
    setHoveredButton(null);

    try {
      const token = JSON.parse(localStorage.getItem("tokenUser"));
      await axiosInstance.post(
        `${import.meta.env.VITE_API_URL}/user/reaction`,
        {
          user_id: user.userId,
          comment_id: hoveredButton,
          type: reactionType,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setReload(true);
    } catch (err) {
      toast.error("Failed to add reaction.");
      console.error(err);
    }
  };

  const deleteReaction = async (userId, commentId) => {
    const token = JSON.parse(localStorage.getItem("tokenUser"));
    try {
      await axiosInstance.delete(`${import.meta.env.VITE_API_URL}/user/reaction`, {
        data: { user_id: userId, comment_id: commentId },
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.info("Reaction removed successfully");
    } catch (error) {
      console.error("Error removing reaction", error);
    } finally {
      setReload(true);
    }
  };

  const renderUserReaction = (reactions, currentUserId) => {
    const userReaction = reactions?.find(
      (reaction) => reaction.user_id === currentUserId
    );

    if (userReaction) {
      switch (userReaction.type) {
        case "like":
          return <span className="text-blue-500">👍 You</span>;
        case "love":
          return <span className="text-red-500">❤️ You</span>;
        case "haha":
          return <span className="text-yellow-500">😂 You</span>;
        case "wow":
          return <span className="text-purple-500">😮 You</span>;
        default:
          return null;
      }
    }
  };

  const handleDeleteBlog = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("tokenUser"));
      await axiosInstance.delete(
        `${import.meta.env.VITE_API_URL}/user/delete-blog/${blogId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast.success("Blog deleted successfully!");
      navigate("/blog");
    } catch (error) {
      toast.error("Failed to delete the blog!");
      console.error(error);
    }
  };

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error) return <div className="text-center mt-10">{error}</div>;

  return (
    <div className="py-8">
      <div className="bg-white px-10 rounded-lg shadow-lg max-w-[1280px] py-10 mx-auto flex flex-col gap-4 items-center">
        {post.user_id === user.userId && (
          <Popconfirm
            title="Are you sure to delete this Blog?"
            onConfirm={() => handleDeleteBlog()}
            okText="Yes"
            cancelText="No"
          >
            <button className="text-right cursor-pointer text-sm text-red-500">
              Delete Blog
            </button>
          </Popconfirm>
        )}
        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-2xl font-semibold text-gray-800 hover:text-amber-600">
            {post.title}
          </h1>

          <div className="flex flex-row items-center gap-6">
            <div className="flex flex-row items-center gap-2">
              <UserOutlined />
              <p>{post.author?.name}</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <CalendarOutlined />
              <p>
                {new Date(post.created_at).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10 items-center">
          <img
            alt={post.title}
            className="w-[700px] rounded-lg shadow-lg h-[500px]"
            src={`${import.meta.env.VITE_IMAGE_REVIEW}/${
              post.images[0]?.image_url
            }`}
          />
          <p className="font-normal">{post.content}</p>
        </div>

        <div className="mt-10 w-full max-w-[800px]">
          <form onSubmit={handleSubmitComment} className="mb-6">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder={`Comment under the name ${user?.name}...`}
              className="w-full p-3 border border-[#30b8b8] rounded-lg focus:outline-none"
              rows={4}
            />
            <button
              type="submit"
              className="cursor-pointer mt-2 px-4 py-2 bg-[#30b8b8] hover:bg-[#71d4d4] text-white rounded-md"
            >
              Post Comment
            </button>
          </form>

          <h2 className="text-xl font-semibold mb-4 text-gray-700">Comments</h2>

          {comments
            .filter((c) => !c.parent_comment_id)
            .map((cmt) => (
              <div
                key={cmt.comment_id}
                className="bg-gray-50 p-4 rounded-lg shadow mb-4"
              >
                <p className="text-sm text-gray-600">
                  <span className="font-medium">{cmt.author?.name}</span> •{" "}
                  {new Date(cmt.created_at).toLocaleDateString()}
                </p>
                {editingCommentId === cmt.comment_id ? (
                  <form onSubmit={(e) => handleSubmitEdit(e)} className="mb-6">
                    <textarea
                      value={editContent}
                      onChange={(e) => setEditContent(e.target.value)}
                      placeholder={`Editing comment...`}
                      className="w-full p-3 border border-[#30b8b8] rounded-lg focus:outline-none"
                      rows={4}
                    />
                    <button
                      type="submit"
                      className="cursor-pointer mt-2 px-4 py-2 bg-[#30b8b8] hover:bg-[#71d4d4] text-white rounded-md"
                    >
                      Update Comment
                    </button>
                  </form>
                ) : (
                  <p className="mt-1 text-gray-800">{cmt.content}</p>
                )}

                <div className="flex flex-row items-baseline gap-4">
                  {user.userId === cmt.user_id && (
                    <button
                      onClick={() =>
                        handleEditClick(cmt.comment_id, cmt.content)
                      }
                      className="cursor-pointer mt-2 ml-2 text-sm text-orange-500"
                    >
                      Edit
                    </button>
                  )}

                  <button
                    onClick={() => handleReplyClick(cmt.comment_id)}
                    className="cursor-pointer mt-2 text-sm text-blue-500"
                  >
                    Reply
                  </button>

                  {user.userId === cmt.user_id ||
                  post.author?.user_id === user.userId ? (
                    <>
                      <Popconfirm
                        title="Are you sure to delete this comment?"
                        onConfirm={() => handleDeleteComment(cmt.comment_id)}
                        okText="Yes"
                        cancelText="No"
                      >
                        <button className="cursor-pointer mt-2 text-sm text-red-500">
                          Delete
                        </button>
                      </Popconfirm>
                    </>
                  ) : null}

                  <div
                    className="relative flex justify-center items-center"
                    onMouseEnter={() => handleMouseEnter(cmt.comment_id)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button className="flex items-center gap-2 p-2 cursor-pointer text-lg text-[#30b8b8]">
                      <p>{renderReactionCounts(cmt.comment_id)}</p>
                      <span
                        className={`${
                          reaction[cmt.comment_id] === "like"
                            ? "text-blue-500"
                            : reaction[cmt.comment_id] === "haha"
                            ? "text-yellow-500"
                            : reaction[cmt.comment_id] === "love"
                            ? "text-red-500"
                            : reaction[cmt.comment_id] === "wow"
                            ? "text-purple-500"
                            : ""
                        }`}
                      >
                        {reaction[cmt.comment_id]
                          ? reaction[cmt.comment_id].charAt(0).toUpperCase() +
                            reaction[cmt.comment_id].slice(1)
                          : "Reaction"}
                      </span>
                      <div
                        className="reaction"
                        onClick={() =>
                          deleteReaction(user.userId, cmt.comment_id)
                        }
                      >
                        {renderUserReaction(cmt.reactions, user.userId)}
                      </div>
                    </button>

                    {hoveredButton === cmt.comment_id && (
                      <div className="absolute flex gap-4 bottom-[35px]">
                        <div
                          onClick={() => handleReaction(cmt.comment_id, "like")}
                          className="cursor-pointer p-2 bg-white rounded-full shadow-lg hover:bg-gray-200"
                        >
                          <LikeOutlined />
                        </div>
                        <div
                          onClick={() => handleReaction(cmt.comment_id, "love")}
                          className="cursor-pointer p-2 bg-white rounded-full shadow-lg hover:bg-gray-200"
                        >
                          <HeartOutlined />
                        </div>
                        <div
                          onClick={() => handleReaction(cmt.comment_id, "haha")}
                          className="cursor-pointer p-2 bg-white rounded-full shadow-lg hover:bg-gray-200"
                        >
                          <SmileOutlined />
                        </div>
                        <div
                          onClick={() => handleReaction(cmt.comment_id, "wow")}
                          className="cursor-pointer p-2 bg-white rounded-full shadow-lg hover:bg-gray-200"
                        >
                          <IconWowReact />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {replyToCommentId === cmt.comment_id && (
                  <form onSubmit={handleSubmitComment} className="mb-6">
                    <textarea
                      value={replyContent}
                      onChange={(e) => setReplyContent(e.target.value)}
                      placeholder={`Reply comment of  ${cmt.author?.name}`}
                      className="w-full p-3 border border-[#30b8b8] rounded-lg focus:outline-none"
                      rows={4}
                    />
                    <button
                      type="submit"
                      className="cursor-pointer mt-2 px-4 py-2 bg-[#30b8b8] hover:bg-[#71d4d4] text-white rounded-md"
                    >
                      Post Reply
                    </button>
                  </form>
                )}

                {renderReplies(cmt.comment_id)}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
