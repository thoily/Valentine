// Thay đổi nội dung búc thư ở đây
var letterContent = "   Gửi em Dương Thị Vân yêu dấu❤️, anh là Thời đây. Anh viết bức thư này để tỏ tình với em nhân dịp Valentine. Anh biết chúng ta chưa quen biết nhau nhiều, nhưng anh cảm thấy rất đặc biệt khi ở bên em☺️. Khi anh biết đến em,em có nói với anh rằng không nên tin ai ngoại chừ em, và cách em cho anh những trận game tạ vcl☺️.Trước đây anh hy vọng chúng ta có thể tìm hiểu nhau hơn và cùng nhau tạo nên những kỷ niệm đẹp nhưng sau 1 thời gian thì em cho ah bài học về lồn người rồi😭 ,bây giờ anh rất hiểu con người của em😭, em mạnh hơn ngoài sức tưởng tượng của anh đấy Vân ạ😂.Anh đoán anh chỉ là 1 trong danh sách chong iu cua em thôi đúng không?, nên anh nghĩ em còn có nhiều quà valentine từ các chồn iu khác nữa =)) Thực sự anh đã ấp ủ rất nhiều món quà có giá trị cao hơn nhiều từ rất lâu rồi muốn tạo bất ngờ cho về cái tết này nhưng chắc là chẳng còn cơ hội nữa rồi anh cảm nhận được là dạo gần đây anh chẳng được em để ý tới nữa😞 vấn đề ko nằm ở đấy vì anh biết là bản thân ko đủ quan trọng với em😔nghĩ sao cx dc cứ cho ah là 1 thằng tệ bạc đi, không danh phận thế này anh tự lặng lẽ rời đi nhường em cho các chồn iu may mắn khác💔.Đọc đến đây chắc là đúng ý em rồi,vui lắm đúng không ?Chúc em một ngày Valentine thật vui vẻ và hạnh phúc bên các chồn iu của em !";

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
