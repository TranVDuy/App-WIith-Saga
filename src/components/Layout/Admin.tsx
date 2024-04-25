import React from 'react';
import {  Button, Layout, Menu  } from 'antd';
import reduxLogo from '../../logo.svg'
import { useAppDispatch } from 'app/hooks';
import { authAction } from 'features/auth/authSlice';
import {NavLink, Outlet} from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;

export interface AdminProps {}

export const Admin = (props: AdminProps) => {

  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(authAction.logout());
  }

  const items1 = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
  }));

  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div style={{padding: '20px'}}>
          <img 
            width='50px' 
            height='50px' 
            src={reduxLogo} 
            alt="Redux Logo" 
          />
          <span style={{color: '#fff'}}>Admin page</span>
        </div>
        <Menu theme='dark'>
          <Menu.Item>
            <NavLink to="/admin/dashboard">Dashboard</NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink to="/admin/student">student</NavLink>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout
        style={{
          marginLeft: 200,
        }}
      >
        <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items1}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
        <Button onClick={handleLogout} type="primary">Logout</Button>
      </Header>
        <Content
          style={{
            overflow: 'initial',
            background: '#fff' 
          }}
        >
          <div
            style={{
              textAlign: 'center',
            }}
          >
            <Outlet />
             
            </div>
          </Content>
        <Footer
          style={{
            marginLeft: 200,
            textAlign: 'center',
            position: 'fixed',
            left: 0,
            bottom: 0,
          }}
        >
          DUYTV3 ©{new Date().getFullYear()} Created by DUY
        </Footer>
      </Layout>
    </Layout>
  )
}

