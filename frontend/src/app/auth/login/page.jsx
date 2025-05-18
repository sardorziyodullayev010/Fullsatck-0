"use client"
import { useState } from "react"
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { toast } from "react-toastify"
import { auth } from "../../../firebase/config"
import Link from "next/link"
import "../style.scss"
import { useRouter } from 'next/navigation'
import { FcGoogle } from "react-icons/fc"
import { setSessionCookie } from "../../../utils/cookies"

function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        rememberMe: false
    })
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }

    async function submitForm(e) {
        e.preventDefault()
        setIsLoading(true)

        try {
            // Form validation
            if (!formData.email || !formData.password) {
                toast.error("Please fill in all fields", { theme: "dark" })
                return
            }

            if (!validateEmail(formData.email)) {
                toast.error("Please enter a valid email address", { theme: "dark" })
                return
            }

            const userCredential = await signInWithEmailAndPassword(
                auth, 
                formData.email, 
                formData.password
            )
            const user = userCredential.user
            setSessionCookie(user.uid, formData.rememberMe)
            toast.success("Signed in successfully!", { theme: "dark" })
            router.push('/')
        } catch (error) {
            let errorMessage = "An error occurred during sign in"
            switch (error.code) {
                case 'auth/user-not-found':
                    errorMessage = "No account found with this email"
                    break
                case 'auth/wrong-password':
                    errorMessage = "Invalid password"
                    break
                case 'auth/invalid-email':
                    errorMessage = "Invalid email format"
                    break
                case 'auth/too-many-requests':
                    errorMessage = "Too many failed attempts. Please try again later"
                    break
                case 'auth/invalid-api-key':
                    errorMessage = "Authentication service is currently unavailable. Please try again later."
                    break
            }
            toast.error(errorMessage, { theme: "dark" })
        } finally {
            setIsLoading(false)
        }
    }

    function handleFormChange(e) {
        const { name, value, type, checked } = e.target
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        })
    }

    async function handleGoogleSignIn() {
        setIsLoading(true)
        try {
            const provider = new GoogleAuthProvider()
            const result = await signInWithPopup(auth, provider)
            const user = result.user
            setSessionCookie(user.uid, formData.rememberMe)
            toast.success("Signed in with Google successfully!", { theme: "dark" })
            router.push('/')
        } catch (error) {
            toast.error("Google sign in failed. Please try again.", { theme: "dark" })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="auth-container">
            <div className="auth-content">
                <h1>Sign In</h1>
                <form onSubmit={submitForm}>
                    <div className="form-field">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            name="email"
                            value={formData.email}
                            onChange={handleFormChange}
                            disabled={isLoading}
                            required
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            name="password"
                            value={formData.password}
                            onChange={handleFormChange}
                            disabled={isLoading}
                            required
                        />
                    </div>
                    <div className="form-field checkbox">
                        <input
                            id="rememberMe"
                            type="checkbox"
                            name="rememberMe"
                            checked={formData.rememberMe}
                            onChange={handleFormChange}
                        />
                        <label htmlFor="rememberMe">Remember me</label>
                    </div>
                    <button className="submit-btn" type="submit" disabled={isLoading}>
                        {isLoading ? 'Signing in...' : 'Sign in'}
                    </button>

                    <div className="divider">
                        <span>or continue with</span>
                    </div>

                    <div className="social-login">
                        <button 
                            type="button" 
                            className="google-btn" 
                            onClick={handleGoogleSignIn}
                            disabled={isLoading}
                        >
                            <FcGoogle /> {isLoading ? 'Processing...' : 'Sign in with Google'}
                        </button>
                    </div>
                </form>

                <div className="auth-footer">
                    <p>
                        Don't have an account? <Link href="/auth/register">Register</Link>
                    </p>
                    <p>
                        <Link href="/auth/forgot-password">Forgot Password?</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login