type FormInputType = 'text' | 'number' | 'email' | 'password' | 'search' | 'tel'
/** 폼 유효성 상태 */
type FormValid = {
    show: boolean
    type: 'alert' | 'valid'
    message: string
    state?: 'danger' | 'warn' | 'invalid' | 'valid' | 'normal'
}