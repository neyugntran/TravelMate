import { Form, Input, Modal } from "antd";
import { useForm } from "antd/es/form/Form";
import { toast } from "react-toastify";
import axiosInstance from "../../ultis/axiosInstance";

export default function ModalCreateHotel({
  isCreateModalOpen,
  setIsCreateModalOpen,
  getAllHotels,
}) {
  const [createForm] = useForm();

  const handleCancel = () => {
    setIsCreateModalOpen(false);
    createForm.resetFields();
  };

  const handleCreate = async () => {
    try {
      const values = await createForm.validateFields();
      const token = JSON.parse(localStorage.getItem("tokenUser"));
      await axiosInstance.post(
        `${import.meta.env.VITE_API_URL}/admin/create-hotel`,
        values,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Hotel created successfully!");
      setIsCreateModalOpen(false);
      createForm.resetFields();
      getAllHotels();
    } catch (err) {
      toast.error("Failed to create hotel.");
      console.error(err);
    }
  };

  return (
    <Modal
      title="Create New Hotel"
      open={isCreateModalOpen}
      onCancel={handleCancel}
      onOk={handleCreate}
      okText="Create"
    >
      <Form form={createForm} layout="vertical">
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please enter hotel name" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Location"
          name="location"
          rules={[{ required: true, message: "Please enter location" }]}
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
