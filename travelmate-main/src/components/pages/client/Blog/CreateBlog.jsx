import { Input, Button, Form, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";
import axiosInstance from "../../../../ultis/axiosInstance";

export default function BlogCreate({ onFinish }) {
  const [form] = Form.useForm();

  const handleSubmit = async (values) => {
    try {
      const token = JSON.parse(localStorage.getItem("tokenUser"));
      const user = JSON.parse(localStorage.getItem("user"));
      const formData = new FormData();
      formData.append("user_id", user.userId);
      formData.append("title", values.title);
      formData.append("content", values.description);

      if (values.image?.file) {
        formData.append("images", values.image.file);
      }

      const res = await axiosInstance.post(
        `${import.meta.env.VITE_API_URL}/user/blogs`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success("Post Blog Successfull!");
      onFinish && onFinish(res.data);
      form.resetFields();
    } catch (error) {
      console.error(error);
      toast.error("Post Blog Failed!");
    }
  };

  return (
    <div className="mb-10 bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">Post New Blog</h2>
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Form.Item
          name="title"
          label="Title"
          rules={[{ required: true, message: "Please input title!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: true, message: "Please input description!" }]}
        >
          <Input.TextArea rows={3} />
        </Form.Item>
        <Form.Item
          name="image"
          label="Image"
          valuePropName="file"
          getValueFromEvent={(e) => (e?.fileList?.[0] ? e : null)}
        >
          <Upload beforeUpload={() => false} maxCount={1}>
            <Button icon={<UploadOutlined />}>Upload Image</Button>
          </Upload>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Post Blog
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
