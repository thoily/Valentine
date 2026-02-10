// Thay đổi nội dung búc thư ở đây
var letterContent = "   Gửi em Dương Thị Vân yêu dấu❤️, anh là Thời đây. Anh viết bức thư này để tỏ tình với em nhân dịp Valentine🥰. Anh biết chúng ta chưa quen biết nhau nhiều, nhưng anh cảm thấy rất đặc biệt khi ở bên em☺️. Khi anh biết đến em,anh còn nhớ em có nói với anh rằng không nên tin ai ngoại chừ em, và cách em cho anh những trận game tạ vcl☺️. Anh hy vọng chúng ta có thể tìm hiểu nhau hơn và cùng nhau tạo nên những kỷ niệm đẹp🥰.Có những lúc anh rất thương em ấn tượng với em kể từ khi ngày nghỉ em đi làm thêm ấy😊 chịu khó cần cù dth là những gì hiện lên trong mắt anh😍,thực sự mà nói thì anh rất muốn chúng mình thành đôi😙 sau 1 thời gian gắn bó thì anh có hiểu đôi chút em thích ăn đồ ăn vặt , hoa quả,crep sầu đặc biệt là mỳ cay🥵 Là người phụ nữ đầu tiên của anh thì phải được ưu tiên những gì tốt đẹp nhất😎, là thằng đàn ông nói được phải làm được không giám nói trước với em anh đã chuẩn bị xong đồ trang sức ,mỹ phẩm 💄mà em thích từ lâu rồi nhưng muốn tạo bất ngờ cho em trong dịp tết này đấy , xin lỗi vì chưa có sự thấu hiểu đôi lúc giận hờn vô cớ anh rất muốn được bù đắp cho em🥹 anh muốn đồng hành cùng em anh đã biết câu trả lời của em rồi em nói có yêu anh anh cảm thấy vui lắm (nhưng fb vẫn để độc thân 🤣🤣🤣) và giờ anh cũng biết mình phải làm gì rồi, nói chung rất cảm ơn em, cảm ơn em đã đọc hết .Chúc em một ngày Valentine thật vui vẻ và hạnh phúc❤️ !"";

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 90 

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }

})

