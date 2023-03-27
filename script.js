mainProductImage = document.querySelector('.main-product-image').getElementsByTagName('img')[0]
// console.log(mainProductImage)

firstSelectedImg = document.querySelector('[src="images/image-product-1-thumbnail.jpg"]')
// console.log(secondSelectedImg)

firstSelectedImg.addEventListener('click', () => {
    mainProductImage.removeAttribute("src")
    mainProductImage.setAttribute("src", "images/image-product-1.jpg")
    console.log(mainProductImage)
})


secondSelectedImg = document.querySelector('[src="images/image-product-2-thumbnail.jpg"]')
secondSelectedImg.addEventListener('click', () => {
    mainProductImage.removeAttribute("src")
    mainProductImage.setAttribute("src", "images/image-product-2.jpg")
    console.log(mainProductImage)
})


thirdSelectedImg = document.querySelector('[src="images/image-product-3-thumbnail.jpg"]')
thirdSelectedImg.addEventListener('click', () => {
    mainProductImage.removeAttribute("src")
    mainProductImage.setAttribute("src", "images/image-product-3.jpg")
    console.log(mainProductImage)
})

fourthSelectedImg = document.querySelector('[src="images/image-product-4-thumbnail.jpg"]')
fourthSelectedImg.addEventListener('click', () => {
    mainProductImage.removeAttribute("src")
    mainProductImage.setAttribute("src", "images/image-product-4.jpg")
    console.log(mainProductImage)
})
