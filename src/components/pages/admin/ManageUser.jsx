/* eslint-disable no-unused-vars */
import { Table, Tag, Button, Form, Input, Popconfirm, Select } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axiosInstance from "../../../ultis/axiosInstance";

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
  let inputNode = <Input />;
  if (inputType === "select") {
    inputNode = (
      <Select>
        <Select.Option value="admin">Admin</Select.Option>
        <Select.Option value="user">User</Select.Option>
      </Select>
    );
  }

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[{ required: true, message: `Vui lòng nhập ${title}` }]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

export default function ManageUser() {
  const [searchText, setSearchText] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [form] = Form.useForm();
  const [listUser, setListUser] = useState([]);
  const [editingKey, setEditingKey] = useState("");

  const isEditing = (record) => record.user_id === editingKey;

  const getAllUser = () => {
    const token = JSON.parse(localStorage.getItem("tokenUser"));
    axiosInstance
      .get(`${import.meta.env.VITE_API_URL}/admin/list-user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setListUser(res.data);
        setFilteredUsers(res.data);
      })
      .catch((err) => {
        toast.error("Could not download user list!");
        console.error(err);
      });
  };

  const handleSearch = (value) => {
    setSearchText(value);
    const filtered = listUser.filter((user) => {
      const nameMatch = user.name?.toLowerCase().includes(value.toLowerCase());
      const emailMatch = user.email
        ?.toLowerCase()
        .includes(value.toLowerCase());
      return nameMatch || emailMatch;
    });
    setFilteredUsers(filtered);
  };

  useEffect(() => {
    getAllUser();
  }, []);

  const deleteUser = (userId) => {
    const token = JSON.parse(localStorage.getItem("tokenUser"));
    axiosInstance
      .delete(`${import.meta.env.VITE_API_URL}/admin/delete-user/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        toast.success("User deleted successfully!");
        getAllUser();
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to delete user.");
      });
  };
  const edit = (record) => {
    form.setFieldsValue({ ...record });
    setEditingKey(record.user_id);
  };

  const cancel = () => {
    setEditingKey("");
  };

  const save = async (userId) => {
    try {
      const token = JSON.parse(localStorage.getItem("tokenUser"));
      const row = await form.validateFields();
      const updatedUser = { ...row, userId };

      await axiosInstance.post(
        `${import.meta.env.VITE_API_URL}/admin/update-user`,
        updatedUser,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const newData = [...listUser];
      const index = newData.findIndex((item) => item.user_id === userId);
      if (index > -1) {
        newData[index] = { ...newData[index], ...row };
        setListUser(newData);
      }
      setEditingKey("");
      toast.success("Update successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Update failed!");
    }
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "user_id",
      key: "user_id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      editable: true,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      editable: true,
    },
    {
      title: "Password",
      dataIndex: "password",
      key: "password",
      render: (password) => {
        const maskedPassword = "*".repeat(password.length);
        return maskedPassword;
      },
      editable: true,
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      editable: true,
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      editable: true,
      render: (role) => (
        <Tag color={role === "admin" ? "geekblue" : "green"}>
          {role.toUpperCase()}
        </Tag>
      ),
    },
    {
      title: "Blocked",
      dataIndex: "isBlocked",
      key: "isBlocked",
      render: (isBlocked) =>
        isBlocked ? <Tag color="red">Yes</Tag> : <Tag color="green">No</Tag>,
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (_, record) => {
        const editable = isEditing(record);
        const blockText = record.isBlocked ? "Unblock" : "Block";

        return editable ? (
          <span className="flex gap-2">
            <Button onClick={() => save(record.user_id)} type="link">
              Save
            </Button>
            <Popconfirm title="Cancel?" onConfirm={cancel}>
              <Button type="link">Cancel</Button>
            </Popconfirm>
          </span>
        ) : (
          <div className="flex gap-2">
            <Button
              type="link"
              disabled={editingKey !== ""}
              onClick={() => edit(record)}
            >
              Edit
            </Button>
            <Popconfirm
              title={`Are you sure you want to ${blockText.toLowerCase()} this user?`}
              onConfirm={() => toggleBlockUser(record.user_id)}
            >
              <Button type="link" disabled={editingKey !== ""}>
                {blockText}
              </Button>
            </Popconfirm>
            <Popconfirm
              title="Are you sure to delete this user?"
              onConfirm={() => deleteUser(record.user_id)}
              okText="Yes"
              cancelText="No"
            >
              <Button type="link" danger disabled={editingKey !== ""}>
                Delete
              </Button>
            </Popconfirm>
          </div>
        );
      },
    },
  ];

  const toggleBlockUser = (userId) => {
    const token = JSON.parse(localStorage.getItem("tokenUser"));
    axiosInstance
      .post(
        `${import.meta.env.VITE_API_URL}/admin/block-user`,
        { userId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        toast.success("User block status toggled!");
        getAllUser(); // refresh list
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to toggle block status.");
      });
  };
  const mergedColumns = columns.map((col) => {
    if (!col.editable) return col;
    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === "role" ? "select" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <div className="w-full pt-4">
      <div className="rounded-lg bg-white px-6 py-4 shadow-sm">
        <h1 className="text-2xl font-bold">Manage Users</h1>
      </div>

      <div className="text-sm text-gray-500 my-4" aria-label="Breadcrumb">
        <ol className="list-reset flex space-x-2">
          <li>
            <Link to="/admin-dashboard" className="hover:underline">
              Admin
            </Link>
          </li>
          <li>/</li>
          <li>User</li>
        </ol>
      </div>

      <div className="bg-white p-6 rounded-lg shadow min-h-[280px]">
        <h2 className="text-xl font-semibold mb-4">Table User</h2>
        <Input.Search
          placeholder="Search by name or email"
          allowClear
          enterButton="Search"
          className="w-1/3 mb-4"
          value={searchText}
          onChange={(e) => handleSearch(e.target.value)}
          onSearch={handleSearch}
        />

        <Form form={form} component={false}>
          <Table
            components={{ body: { cell: EditableCell } }}
            bordered
            columns={mergedColumns}
            dataSource={filteredUsers}
            rowKey="user_id"
            pagination={{ pageSize: 5 }}
          />
        </Form>
      </div>
    </div>
  );
}
