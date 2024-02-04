import { DatePicker } from 'antd';


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
