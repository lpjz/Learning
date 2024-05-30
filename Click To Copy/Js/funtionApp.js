const btn = document.querySelector(".btn")
const Coupon = document.querySelector(".Coupon")

btn.addEventListener("click", (e)=>{
    Coupon.select()
    Coupon.setSelectionRange(0, 999999)
    navigator.clipboard.writeText(Coupon.value)
    btn.textContent = "Copies"
    setTimeout(()=>{
        btn.textContent = "Copy"
    },3000)
})