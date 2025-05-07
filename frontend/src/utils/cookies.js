import Cookies from 'js-cookie'

export const setSessionCookie = (token, rememberMe = false) => {
    Cookies.set('session', token, {
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        expires: rememberMe ? 7 : undefined // 7 дней если rememberMe = true, иначе сессионная кука
    })
}

export const getSessionCookie = () => {
    return Cookies.get('session')
}

export const removeSessionCookie = () => {
    Cookies.remove('session')
} 