import { Form, Input, Modal } from "antd";
import { toast } from "react-toastify";
import axiosInstance from "../../ultis/axiosInstance";

export default function ModalCreateTours({
  getAllTour,
  isCreateModalOpen,
  setIsCreateModalOpen,
}) {
  const [createForm] = Form.useForm();

  return (
    <Modal
      title="Create New Tour"
      open={isCreateModalOpen}
      onCancel={() => {
        setIsCreateModalOpen(false);
        createForm.resetFields();
      }}
      onOk={async () => {
        try {
          const values = await createForm.validateFields();
          const token = JSON.parse(localStorage.getItem("tokenUser"));
          await axiosInstance.post(
            `${import.meta.env.VITE_API_URL}/admin/create-tour`,
            values,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          toast.success("Tour created successfully!");
          setIsCreateModalOpen(false);
          createForm.resetFields();
          getAllTour();
        } catch (err) {
          toast.error("Failed to create tour.");
          console.error(err);
        }
      }}
      okText="Create"
    >
      <Form form={createForm} layout="vertical">
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please enter tour name" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: "Please enter description" }]}
        >
          <Input.TextArea rows={3} />
        </Form.Item>
        <Form.Item
          label="Price"
          name="price"
          rules={[{ required: true, message: "Please enter price" }]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          label="Duration"
          name="duration"
          rules={[{ required: true, message: "Please enter duration (days)" }]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          label="Location"
          name="location"
          rules={[{ required: true, message: "Please enter location" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Available Seats"
          name="available_seats"
          rules={[{ required: true, message: "Please enter seat number" }]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          label="Image URL"
          name="image_url"
          rules={[{ required: true, message: "Please enter image URL" }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
}
