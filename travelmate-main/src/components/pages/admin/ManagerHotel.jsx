/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Table, Input, Form, Popconfirm, Button } from "antd";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import ModalCreateHotel from "../../modal/ModalCreateHotels";
import axiosInstance from "../../../ultis/axiosInstance";

export default function ManagerHotel() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [hotels, setHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState("");

  useEffect(() => {
    getAllHotels();
  }, []);

  const getAllHotels = () => {
    setLoading(true);
    const token = JSON.parse(localStorage.getItem("tokenUser"));
    axiosInstance
      .get(`${import.meta.env.VITE_API_URL}/admin/list-hotel`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setHotels(res.data.data);
        setFilteredHotels(res.data.data); // Initially show all tours

        setLoading(false);
      })
      .catch((err) => {
        toast.error("Could not download hotel list!");
        console.error(err);
      });
  };

  const isEditing = (record) => record.hotel_id === editingKey;

  const edit = (record) => {
    form.setFieldsValue({ ...record });
    setEditingKey(record.hotel_id);
  };

  const cancel = () => {
    setEditingKey("");
  };

  const save = async (id) => {
    try {
      const row = await form.validateFields();
      const token = JSON.parse(localStorage.getItem("tokenUser"));
      await axiosInstance.post(
        `${import.meta.env.VITE_API_URL}/admin/update-hotel`,
        {
          id,
          ...row,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Hotel updated successfully!");
      setEditingKey("");
      getAllHotels();
    } catch (err) {
      toast.error("Failed to update hotel");
      console.error(err);
    }
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "hotel_id",
      key: "hotel_id",
    },
    {
      title: "Name",
      dataIndex: "name",
      editable: true,
    },
    {
      title: "Image",
      dataIndex: "image_url",
      editable: true,
      render: (url) => (
        <img
          src={url}
          alt="Hotel"
          style={{ width: 80, height: 60, objectFit: "cover" }}
        />
      ),
    },
    {
      title: "Location",
      dataIndex: "location",
      editable: true,
    },
    {
      title: "Description",
      dataIndex: "description",
      editable: true,
    },
    {
      title: "Price",
      dataIndex: "price",
      editable: true,
      render: (price) => `$${price.toLocaleString()}`,
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Button onClick={() => save(record.hotel_id)} type="link">
              Save
            </Button>
            <Popconfirm title="Cancel edit?" onConfirm={cancel}>
              <Button type="link">Cancel</Button>
            </Popconfirm>
          </span>
        ) : (
          <span className="flex gap-2">
            <Button
              disabled={editingKey !== ""}
              onClick={() => edit(record)}
              type="link"
            >
              Edit
            </Button>
            <Popconfirm
              title="Are you sure to delete this hotel?"
              onConfirm={() => handleDelete(record.hotel_id)}
              okText="Yes"
              cancelText="No"
            >
              <Button type="link" danger>
                Delete
              </Button>
            </Popconfirm>
          </span>
        );
      },
    },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) return col;
    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType:
          typeof record[col.dataIndex] === "number" ? "number" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  const EditableCell = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
  }) => {
    return (
      <td {...restProps}>
        {editing ? (
          dataIndex === "image_url" ? (
            <Form.Item
              name={dataIndex}
              style={{ margin: 0 }}
              rules={[{ required: true, message: `Please enter ${title}` }]}
            >
              <Input placeholder="Enter image URL" />
            </Form.Item>
          ) : (
            <Form.Item
              name={dataIndex}
              style={{ margin: 0 }}
              rules={[{ required: true, message: `Please enter ${title}` }]}
            >
              <Input />
            </Form.Item>
          )
        ) : (
          children
        )}
      </td>
    );
  };

  const handleDelete = async (id) => {
    const token = JSON.parse(localStorage.getItem("tokenUser"));
    try {
      await axiosInstance.delete(
        `${import.meta.env.VITE_API_URL}/admin/delete-hotel/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Hotel deleted successfully!");
      getAllHotels();
    } catch (error) {
      toast.error("Failed to delete hotel.");
      console.error(error);
    }
  };
  const [searchText, setSearchText] = useState("");

  const handleSearch = (value) => {
    setSearchText(value);
    const filtered = hotels.filter((hotel) =>
      hotel.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredHotels(filtered);
  };
  return (
    <div className="w-full pt-4">
      <div className="rounded-lg bg-white px-6 py-4 shadow-sm">
        <h1 className="text-2xl font-bold">Manage Hotels</h1>
      </div>
      <div className="text-sm text-gray-500 my-4" aria-label="Breadcrumb">
        <ol className="list-reset flex space-x-2">
          <li>
            <Link to="/admin-dashboard" className="hover:underline">
              Admin
            </Link>
          </li>
          <li>/</li>
          <li>Hotel</li>
        </ol>
      </div>
      <div className="bg-white p-6 flex flex-col gap-4 rounded-lg shadow min-h-[280px]">
        <h2 className="text-xl font-semibold mb-4">Hotel List</h2>
        <div className="flex items-center flex-row gap-4">
          <Button type="primary" onClick={() => setIsCreateModalOpen(true)}>
            Create Hotel
          </Button>
          <Input
            placeholder="Search by hotels name"
            value={searchText}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        <Form form={form} component={false}>
          <Table
            dataSource={filteredHotels}
            columns={mergedColumns}
            components={{ body: { cell: EditableCell } }}
            rowKey="hotel_id"
            loading={loading}
            pagination={{ pageSize: 5 }}
          />
        </Form>
      </div>
      <ModalCreateHotel
        isCreateModalOpen={isCreateModalOpen}
        setIsCreateModalOpen={setIsCreateModalOpen}
        getAllHotels={getAllHotels}
      />
    </div>
  );
}
