import React from 'react'
import { Outlet } from 'react-router-dom';
import { Layout, Col, Row, Affix } from 'antd';
import Header from '../header/Header';
import AdminPanel from '../adminPanel/AdminPanel';
import BreadCrumb from '../breadCrumb/BreadCrumb';

const AppLayout = () => {
    const [isAdmin, setIsAdmin] = React.useState(false)
    const date = new Date

    return (
        <Layout style={{ minHeight: '100vh' }}>
            {isAdmin && <AdminPanel />}
            <Layout className="site-layout">
                <Layout.Header className="site-layout-background header" style={{ padding: 0 }} >
                    <Affix>
                        <Row>
                            <Col
                                xs={24}
                                sm={24}
                                md={{ span: 20, offset: 2 }}
                                lg={{ span: 18, offset: 3 }}
                                xl={{ span: 16, offset: 4 }}
                                xxl={{ span: 14, offset: 5 }}
                            >
                                <Header />
                            </Col >
                        </Row >
                    </Affix >
                </Layout.Header>

                <Layout.Content
                    style={{ margin: '0 16px' }}
                    className='content'>
                    <Row>
                        <Col
                            xs={24}
                            sm={24}
                            md={{ span: 20, offset: 2 }}
                            lg={{ span: 18, offset: 3 }}
                            xl={{ span: 16, offset: 4 }}
                            xxl={{ span: 14, offset: 5 }}
                        >
                            <BreadCrumb />
                            <Outlet />
                        </Col>
                    </Row>
                </Layout.Content>

                <Layout.Footer style={{ textAlign: 'center' }} className='footer'>
                    Ant Design &copy; {date.getFullYear()} Created by Ant UED
                </Layout.Footer>
            </Layout>
        </Layout >
    )
}

export default AppLayout