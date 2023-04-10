const username = document.querySelector("#username-signup")
const password = document.querySelector("#password-signup")
const btnSignup = document.querySelector("#btn-signup")
const passField = document.querySelector("#password-signup");
const showBtn = document.querySelector(".show-password i");

let apiUser = "http://localhost:3000/user"

//Signup
btnSignup.addEventListener("click", (e) => {
    e.preventDefault() // ngăn chặn hành vi mặc định của button
    if (username.value == "" || password.value == ""){
        alert("Vui lòng nhập đầy đủ thông tin!")
    }else{
        const user = {
            username: username.value,
            password: password.value,
        }
        fetch(apiUser, { //sử dụng phương thức fetch() để gửi yêu cầu POST đến API apiUser để tạo mới một tài khoản người dùng mới.
            method: "POST",
            headers: {
                "Content-Type": "application/json", // cho biết định dạng của request được gửi đi là json
            },
            body: JSON.stringify(user) //body được chuyển đổi thành một chuỗi JSON. Cụ thể, JSON.stringify sẽ chuyển đổi biến javascrip user thành một chuỗi JSON
        })
        .then((res) => res.json()) //sử dụng phương thức json() để chuyển đổi phản hồi trả về thành một đối tượng JSON
        .then((data) => console.log(data))
        window.location.assign("/login.html")
        alert("Chúc mừng bạn đã đăng ký tài khoản thành công! Vui lòng ấn OK để đăng nhập.")

    }
})

// Ẩn hiện Password 
showBtn.onclick = (()=>{
  if(passField.type === "password"){
    passField.type = "text";
    showBtn.classList.add("hide-password");
  }else{
    passField.type = "password";
    showBtn.classList.remove("hide-password");
  }
});