import React from 'react'
import {
    Col,
    Row,
    Image,
    Skeleton,
    Tabs,
    Avatar,
    Comment,
    Tooltip,
    Button,
    Form,
    Input,
    List,
} from 'antd';
import {
    DislikeFilled,
    DislikeOutlined,
    LikeFilled,
    LikeOutlined
} from '@ant-design/icons';

import moment from 'moment';

const { TabPane } = Tabs;
const onChange = (key: string) => {
    console.log(key);
};

const { TextArea } = Input;

interface CommentItem {
    author: string;
    avatar: string;
    content: React.ReactNode;
    datetime: string;
}

interface EditorProps {
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onSubmit: () => void;
    submitting: boolean;
    value: string;
}

const CommentList = ({ comments }: { comments: CommentItem[] }) => (
    <List
        dataSource={comments}
        header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
        itemLayout="horizontal"
        renderItem={props => <Comment {...props} />}
    />
);

const Editor = ({ onChange, onSubmit, submitting, value }: EditorProps) => (
    <>
        <Form.Item>
            <TextArea rows={4} onChange={onChange} value={value} />
        </Form.Item>
        <Form.Item>
            <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
                Add Comment
            </Button>
        </Form.Item>
    </>
);

const ProductPage: React.FC = (): JSX.Element => {
    const [comments, setComments] = React.useState<CommentItem[]>([])
    const [submitting, setSubmitting] = React.useState(false)
    const [value, setValue] = React.useState('')

    const handleSubmit = () => {
        if (!value) return;

        setSubmitting(true);

        setTimeout(() => {
            setSubmitting(false);
            setValue('');
            setComments([
                ...comments,
                {
                    author: 'Han Solo',
                    avatar: 'https://joeschmoe.io/api/v1/random',
                    content: <p>{value}</p>,
                    datetime: moment().fromNow(),
                },
            ]);
        }, 1000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target.value);
    };

    const [likes, setLikes] = React.useState(0)
    const [dislikes, setDislikes] = React.useState(0)
    const [action, setAction] = React.useState<string | null>(null)

    const like = () => {
        setLikes(1);
        setDislikes(0);
        setAction('liked');
    };

    const dislike = () => {
        setLikes(0);
        setDislikes(1);
        setAction('disliked');
    };

    const actions = [
        <Tooltip key="comment-basic-like" title="Like">
            <span onClick={like}>
                {React.createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
                <span className="comment-action">{likes}</span>
            </span>
        </Tooltip>,
        <Tooltip key="comment-basic-dislike" title="Dislike">
            <span onClick={dislike}>
                {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
                <span className="comment-action">{dislikes}</span>
            </span>
        </Tooltip>,
    ];

    return (
        <>
            <Row justify='center'>
                <Col
                    style={{ border: '1px solid black', boxSizing: 'border-box', padding: 20 }}
                    xs={{ span: 20 }}
                    sm={{ span: 12 }}
                    md={{ span: 12 }}
                    lg={{ span: 11 }}
                    xl={{ span: 10 }}
                    xxl={{ span: 10 }}
                >
                    <Skeleton.Image active={true} />
                </Col>
                <Col
                    style={{ border: '1px solid black', boxSizing: 'border-box', padding: 20 }}
                    xs={{ span: 20 }}
                    sm={{ span: 12 }}
                    md={{ span: 12 }}
                    lg={{ span: 11 }}
                    xl={{ span: 10 }}
                    xxl={{ span: 10 }}
                >
                    <Tabs onChange={onChange} type="card">
                        <TabPane tab="Description" key="1">
                            Description Description Description Description Description
                        </TabPane>
                        <TabPane tab="Comments" key="2">
                            <Comment
                                actions={actions}
                                author={<a>Han Solo</a>}
                                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
                                content={
                                    <p>
                                        We supply a series of design principles, practical patterns and high quality design
                                        resources (Sketch and Axure), to help people create their product prototypes beautifully
                                        and efficiently.
                                    </p>
                                }
                                datetime={
                                    <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                                        <span>{moment().fromNow()}</span>
                                    </Tooltip>
                                }
                            />
                        </TabPane>
                    </Tabs>
                </Col>
            </Row>
            <Row justify='center'>
                {comments.length > 0 && <CommentList comments={comments} />}
                <Comment
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
                    content={
                        <Editor
                            onChange={handleChange}
                            onSubmit={handleSubmit}
                            submitting={submitting}
                            value={value}
                        />
                    }
                />
            </Row>
        </>

    )
}

export default ProductPage