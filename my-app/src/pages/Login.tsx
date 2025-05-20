import { Card } from 'antd';
import '../styles/login.less';
import LoginForm from "../components/LoginForm";

const Login: React.FC = () => {
    return (
        <div className="login-container">
            <Card
                hoverable
                className="login-card"
            >
                <LoginForm/>
            </Card>
        </div>
    );
};

export default Login;