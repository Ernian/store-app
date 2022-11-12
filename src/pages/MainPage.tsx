import React from 'react'
import {
    Carousel,
    Row,
    Col,
    Collapse,
    Form,
    Input,
    Button,
} from 'antd';
import openImg from '../assets/images/mike-petrucci-c9FQyqIECds-unsplash.jpg';
import gadgets from '../assets/images/jeremy-bezanger-dSvv95-6FpA-unsplash.jpg';
import clothes1 from '../assets/images/clark-street-mercantile-P3pI6xzovu0-unsplash.jpg';
import clothes2 from '../assets/images/clark-street-mercantile-qnKhZJPKFD8-unsplash.jpg';
import jewelery from '../assets/images/bulbul-ahmed-9OLf9NNcTio-unsplash.jpg'

const MainPage: React.FC = () => {
    const { Panel } = Collapse
    const [form] = Form.useForm()

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values)
    }

    const formCSS: React.CSSProperties = {
        margin: '50px auto',
        padding: 20,
        maxWidth: 700,
        boxSizing: 'border-box',
    }

    return (
        <>
            <Row>
                <Col
                    xs={{ span: 20, offset: 2 }}
                    sm={{ span: 20, offset: 2 }}
                    md={{ span: 18, offset: 3 }}
                    lg={{ span: 18, offset: 3 }}
                    xl={{ span: 18, offset: 3 }}
                    xxl={{ span: 16, offset: 4 }}
                >
                    <Carousel autoplay >
                        <img src={openImg} />
                        <img src={gadgets} />
                        <img src={clothes1} />
                        <img src={clothes2} />
                        <img src={jewelery} />
                    </Carousel>

                    <Collapse accordion style={{ marginTop: 50 }}>
                        <Panel header="This is panel header 1" key="1">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, dolorum placeat cum iusto quas nisi, odio vel similique quisquam sunt temporibus nemo culpa repudiandae cumque quidem! Ratione assumenda enim asperiores?</p>
                        </Panel>
                        <Panel header="This is panel header 2" key="2">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, dolorum placeat cum iusto quas nisi, odio vel similique quisquam sunt temporibus nemo culpa repudiandae cumque quidem! Ratione assumenda enim asperiores?</p>
                        </Panel>
                        <Panel header="This is panel header 3" key="3">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, dolorum placeat cum iusto quas nisi, odio vel similique quisquam sunt temporibus nemo culpa repudiandae cumque quidem! Ratione assumenda enim asperiores?</p>
                        </Panel>
                        <Panel header="This is panel header 4" key="4">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, dolorum placeat cum iusto quas nisi, odio vel similique quisquam sunt temporibus nemo culpa repudiandae cumque quidem! Ratione assumenda enim asperiores?</p>
                        </Panel>
                    </Collapse>

                    <Form
                        form={form}
                        name="write-us"
                        onFinish={onFinish}
                        style={formCSS}
                    >
                        <Form.Item
                            name="email"
                            label="E-mail"
                            rules={[
                                {
                                    type: 'email',
                                    message: 'The input is not valid E-mail!',
                                },
                                {
                                    required: true,
                                    message: 'Please input your E-mail!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="message"
                            label="Your message"
                            rules={[{ required: true, message: 'Please input message' }]}
                        >
                            <Input.TextArea showCount maxLength={300} />
                        </Form.Item>

                        <Form.Item >
                            <Button type="default" htmlType="submit">
                                Send
                            </Button>
                        </Form.Item>
                    </Form>

                </Col>
            </Row>


        </>
    )
}

export default MainPage