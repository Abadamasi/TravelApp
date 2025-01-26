import { LoginForm } from 'c:/Users/USER/Documents/TravelApp/travel-app/components/auth/login-form';
import './login.css'; // Import a CSS file for styling
import cuid from 'cuid'; // Correct import statement

const uniqueId = cuid(); // Generate a unique ID

export default function LoginPage() {
    return (
        <div className="login-container">
            <div className="login-card">
                <h1>Login</h1>
                <LoginForm /> {/* Ensure this component is used correctly */}
            </div>
        </div>
    );
}
