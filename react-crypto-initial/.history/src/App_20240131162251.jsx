import { Layout, Flex } from 'antd';
const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#4096ff',
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#0958d9',
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#1677ff',
};
const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#4096ff',
};
const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  width: 'calc(50% - 8px)',
  maxWidth: 'calc(50% - 8px)',
};


export default function App() {
  return <Layout style={layoutStyle}>
  <Header style={headerStyle}>Header</Header>
  <Layout>
    <Sider width="25%" style={siderStyle}>
      Sider
    </Sider>
    <Content style={contentStyle}>Content</Content>
  </Layout>
  <Footer style={footerStyle}>Footer</Footer>
</Layout>
}
