"use client"
import Link from "next/link"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { auth } from "../../../firebase/config"
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import "../style.scss"

function Register() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        password2: "",
    })
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    function handleFormChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    async function submitForm(e) {
        e.preventDefault()
        setIsLoading(true)

        try {
            for (let key in formData) {
                if (formData[key] === "") {
                    toast.error("Please fill in all fields", { theme: "dark" })
                    return
                }
            }

            if (formData.password !== formData.password2) {
                toast.error("Passwords do not match", { theme: "dark" })
                return
            }

            await createUserWithEmailAndPassword(auth, formData.email, formData.password)
            toast.success("Account created successfully!", { theme: "dark" })
            router.push('/auth/login')
        } catch (error) {
            let errorMessage = "An error occurred during registration"
            switch (error.code) {
                case 'auth/email-already-in-use':
                    errorMessage = "This email is already registered"
                    break
                case 'auth/invalid-email':
                    errorMessage = "Invalid email format"
                    break
                case 'auth/weak-password':
                    errorMessage = "Password should be at least 6 characters"
                    break
                case 'auth/operation-not-allowed':
                    errorMessage = "Registration is currently disabled"
                    break
            }
            toast.error(errorMessage, { theme: "dark" })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="auth-container">
            <div className="auth-content">
                <h1>Create Account</h1>
                <form onSubmit={submitForm}>
                    <div className="form-field">
                        <label htmlFor="username">Username</label>
                        <input
                            id="username"
                            type="text"
                            placeholder="Enter your username"
                            name="username"
                            onChange={handleFormChange}
                            disabled={isLoading}
                            required
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            name="email"
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
                            placeholder="Create a password"
                            name="password"
                            onChange={handleFormChange}
                            disabled={isLoading}
                            required
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="password2">Confirm Password</label>
                        <input
                            id="password2"
                            type="password"
                            placeholder="Confirm your password"
                            name="password2"
                            onChange={handleFormChange}
                            disabled={isLoading}
                            required
                        />
                    </div>
                    <button className="submit-btn" type="submit" disabled={isLoading}>
                        {isLoading ? 'Creating Account...' : 'Create Account'}
                    </button>
                </form>

                <div className="auth-footer">
                    <p>
                        Already have an account? <Link href="/auth/login">Sign In</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Register
