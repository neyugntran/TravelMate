/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Table, Input, Form, Popconfirm, Button } from "antd";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import ModalCreateTours from "../../modal/ModalCreateTours";
import axiosInstance from "../../../ultis/axiosInstance";

export default function ManagerTour() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [tours, setTours] = useState([]);
  const [filteredTours, setFilteredTours] = useState([]);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState("");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getAllTour();
  }, []);

  const getAllTour = () => {
    setLoading(true);
    const token = JSON.parse(localStorage.getItem("tokenUser"));
    axiosInstance
      .get(`${import.meta.env.VITE_API_URL}/admin/list-tour`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setTours(res.data.data);
        setFilteredTours(res.data.data); // Initially show all tours
        setLoading(false);
      })
      .catch((err) => {
        toast.error("Could not download tour list!");
        console.error(err);
      });
  };

  const isEditing = (record) => record.tour_id === editingKey;

  const edit = (record) => {
    form.setFieldsValue({ ...record });
    setEditingKey(record.tour_id);
  };

  const cancel = () => {
    setEditingKey("");
  };

  const save = async (id) => {
    try {
      const row = await form.validateFields();
      const token = JSON.parse(localStorage.getItem("tokenUser"));
      await axiosInstance.post(
        `${import.meta.env.VITE_API_URL}/admin/update-tour`,
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
      toast.success("Tour updated successfully!");
      setEditingKey("");
      getAllTour();
    } catch (err) {
      toast.error("Failed to update tour");
      console.error(err);
    }
  };

  const handleSearch = (value) => {
    setSearchText(value);
    const filtered = tours.filter((tour) =>
      tour.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredTours(filtered);
  };

  const columns = [
    {
      title: "STT",
      dataIndex: "tour_id",
      key: "tour_id",
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
          alt="Tour"
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
      title: "Duration",
      dataIndex: "duration",
      editable: true,
    },
    {
      title: "Available Seats",
      dataIndex: "available_seats",
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
            <Button onClick={() => save(record.tour_id)} type="link">
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
              title="Are you sure you want to delete this tour?"
              onConfirm={() => handleDelete(record.tour_id)}
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

  const handleDelete = async (id) => {
    const token = JSON.parse(localStorage.getItem("tokenUser"));
    try {
      await axiosInstance.delete(
        `${import.meta.env.VITE_API_URL}/admin/delete-tour/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Tour deleted successfully!");
      getAllTour();
    } catch (error) {
      toast.error("Failed to delete tour.");
      console.error(error);
    }
  };
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
          <Form.Item
            name={dataIndex}
            style={{ margin: 0 }}
            rules={[{ required: true, message: `Please enter ${title}` }]}
          >
            <Input type={inputType} />
          </Form.Item>
        ) : (
          children
        )}
      </td>
    );
  };

  return (
    <div className="w-full pt-4">
      <div className="rounded-lg bg-white px-6 py-4 shadow-sm">
        <h1 className="text-2xl font-bold">Manage Tours</h1>
      </div>
      <div className="text-sm text-gray-500 my-4" aria-label="Breadcrumb">
        <ol className="list-reset flex space-x-2">
          <li>
            <Link to="/admin-dashboard" className="hover:underline">
              Admin
            </Link>
          </li>
          <li>/</li>
          <li>Tour</li>
        </ol>
      </div>
      <div className="bg-white p-6 flex flex-col gap-4 rounded-lg shadow min-h-[280px]">
        <h2 className="text-xl font-semibold mb-4">Tour List</h2>
        <div className="flex items-center flex-row gap-4">
          <Button type="primary" onClick={() => setIsCreateModalOpen(true)}>
            Create Tour
          </Button>
          <Input
            placeholder="Search by tour name"
            value={searchText}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        <Form form={form} component={false}>
          <Table
            dataSource={filteredTours}
            columns={mergedColumns}
            components={{ body: { cell: EditableCell } }}
            rowKey="tour_id"
            loading={loading}
            pagination={{ pageSize: 5 }}
          />
        </Form>
      </div>

      <ModalCreateTours
        isCreateModalOpen={isCreateModalOpen}
        setIsCreateModalOpen={setIsCreateModalOpen}
        getAllTour={getAllTour}
      />
    </div>
  );
}
