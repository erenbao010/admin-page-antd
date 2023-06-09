import React, { useState, useEffect, useContext } from "react";
// import Excel from "components/Excel";
import { Space, Table, Button, Modal, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { users } from "../../store/models/users";

const SubmitButton = ({ form }) => {
  const [submittable, setSubmittable] = React.useState(false);

  // Watch all values
  const values = Form.useWatch([], form);
  useEffect(() => {
    form
      .validateFields({
        validateOnly: true,
      })
      .then(
        () => {
          setSubmittable(true);
        },
        () => {
          setSubmittable(false);
        }
      );
  }, [values]);
  return (
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      Add User
    </Button>
  );
};

const Users = () => {

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Email;",
      key: "email",
      dataIndex: "email",
    },
    {
      title: "Phone",
      key: "phone",
      dataIndex: "phone",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle" >
          <button className="bnt_delete" onClick={() => deleteUser(record.id)} style={{color:'red'}}>Delete</button>
          <button className="btn btn-warning" onClick={() =>updateUser(record)}>Update</button>
        </Space>
      ),
    },
  ];
const updateUser =()=> {
 const upd_obj =  useDispatch.users.findIndex((obj => obj.id == 2));
  console.log(upd_obj);
}

  const usersStore = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch.users.fetchUsers();
  }, [dispatch.users]);
  const [form] = Form.useForm();

  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  const onFinish = (user) => {
    // // Cach 2
    const newData = [
      ...usersStore.listUser,
      {
        key: Math.floor(Math.random() * 10000) + 1,
        name: user.name,
        username: user.name,
        address: "TPHCM",
      },
    ];
    dispatch.users.setListUser(newData);
  };
  const deleteUser = (id) => {

    const newData = usersStore.listUser.filter((user) => user.id !== id);
    dispatch.users.setListUser(newData);
  alert("Want to delete ?")
  };
  return (
    <div className="About">
      <div className="about-section">
        <h1>Users management</h1>
        <Button type="primary" onClick={showModal}>
          Add users
        </Button>
        {/* <Excel
          fileName="export-user"
          data={[
            {
              columns: [
                {
                  title: "User Id",
                  dataIndex: "id",
                  width: 5,
                },
                {
                  title: "Name",
                  dataIndex: "username",
                  width: 20,
                },
                {
                  title: "Email",
                  dataIndex: "email",
                  width: 50,
                },
              ],
              data: usersStore.listUser,
              tabName: "info",
            },
            {
              columns: [
                {
                  title: "Name",
                  dataIndex: "username",
                  width: 30,
                },
                {
                  title: "Phone",
                  dataIndex: "phone",
                  width: 30,
                },
              ],
              data: usersStore.listUser,
              tabName: "contact",
            },
          ]}
        >
          <Button>Export users</Button>
        </Excel> */}
        <Modal
          open={open}
          title="Title"
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
        >
          <Form
            form={form}
            name="validateOnly"
            layout="vertical"
            autoComplete="off"
            onFinish={onFinish}
          >
            <Form.Item
              name="name"
              label="Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="age"
              label="Age"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item>
              <Space>
                <SubmitButton form={form} />
                <Button htmlType="reset">Reset</Button>
              </Space>
            </Form.Item>
          </Form>
        </Modal>
        <Table columns={columns} dataSource={usersStore.listUser} />
      </div>
    </div>
  );
};

export default Users;
