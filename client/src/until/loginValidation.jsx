function Validation(values) {
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if (values.email === "") {
        error.email = "Tên đăng nhập không được bỏ trống"
    }
    else if(!email_pattern.test(values.email))  {
        error.email = "Tên đăng nhập không hợp lệ"
    }
    else {
        error.email = ""
    }

    if (values.password === "") {
        error.password = "Mật khẩu không được bỏ trống"
    }
    else if(!password_pattern.test(values.password))  {
        error.password = "Mật khẩu không chính xác"
    }
    else {
        error.password = ""
    }
    return error;
}

export default Validation;