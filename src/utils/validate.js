export const ValidateForm=(email, password)=>{
    const isEmailValid=/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email);
    const isPasswordValid=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password);

    if(!isEmailValid)
        return "Invalid Email Id";

    if(!isPasswordValid)
        return "Invalid Password"

    return null;
}