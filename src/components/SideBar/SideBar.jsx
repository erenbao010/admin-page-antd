
// import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
// import { Layout, Menu, theme } from 'antd';
// import {PrimaryLayout} from "./components/Layout";
// import React from 'react';
// const { Header, Content, Footer, Sider } = Layout;
// export const SideBar = () => {
//   const {
//     token: { colorBgContainer },
//   } = theme.useToken();
//   return (
//     <PrimaryLayout>
//       <Sider
//         breakpoint="lg"
//         collapsedWidth="0"
//         onBreakpoint={(broken) => {
//           console.log(broken);
//         }}
//         onCollapse={(collapsed, type) => {
//           console.log(collapsed, type);
//         }}
//       >
//         <div className="demo-logo-vertical" />
//         <Menu
//           theme="dark"
//           mode="inline"
//           defaultSelectedKeys={['4']}
//           items={[UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
//             (icon, index) => ({
//               key: String(index + 1),
//               icon: React.createElement(icon),
//               label: `nav ${index + 1}`,
//             }),
//           )}
//         />
//       </Sider>
//       <Layout>
//         <Header
//           style={{
//             padding: 0,
//             background: colorBgContainer,
//           }}
//         />
//         <Content
//           style={{
//             margin: '24px 16px 0',
//           }}
//         >
//           <div
//             style={{
//               padding: 24,
//               minHeight: 360,
//               background: colorBgContainer,
//             }}
//           >
//             content
//           </div>
//         </Content>
//         <Footer
//           style={{
//             textAlign: 'center',
//           }}
//         >
//           Ant Design ©2023 Created by Ant UED
//         </Footer>
//       </Layout>
//     </PrimaryLayout>
//   );
// };
