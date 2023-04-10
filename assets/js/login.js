const username = document.querySelector("#username")
const password = document.querySelector("#password")
const btnLogin = document.querySelector("#btn-login")
const passField = document.querySelector("#password");
const showBtn = document.querySelector(".show-password i");

let apiUser = "http://localhost:3000/user"

// Login
const getUser = async () => { // từ khóa async được sử dụng để định nghĩa một hàm bất đồng bộ (asynchronous function)
    const responses = await fetch(apiUser) //biến responses lưu dữ liệu được trả về từ API khi sử dụng phương thức fetch. Sử dụng từ khóa await để đợi phản hồi từ API trước khi thực hiện các công việc khác. 
    const data = await responses.json(); // phương thức json() để chuyển đổi dữ liệu trả về từ API thành một đối tượng JavaScript.
    return data
}

btnLogin.addEventListener("click", (e) => {
    e.preventDefault() // ngăn chặn hành vi mặc định của button

    if (username.value == "" || password.value == "") {
        alert("Vui lòng nhập đủ thông tin!")
    }else{
        getUser().then((data) => {
            const user = data.find( //sử dụng phương thức find() để tìm kiếm một đối tượng người dùng trong dữ liệu trả về từ API có username và password giống với giá trị đã nhập trong các trường input
                (user) => user.username == username.value && user.password == password.value
            )
            if (user) {
                localStorage.setItem('loggedIn', 'true');
                window.location.href = "index.html"
                updateUI();
            }else{
                alert("Đăng nhập thất bại. Vui lòng kiểm tra lại Username hoặc Password.")
            }
        })
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