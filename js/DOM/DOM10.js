window.onload = () => {
    let view_products_btn = document.querySelector('.view-products')
    let maria_1 = document.querySelector('.footer-l')
    let maria_2 = document.querySelector('.f-r-l')
    let maria_3 = document.querySelector('.f-r-r')
    let amir_r = document.querySelector('header')
    let sherkhon = document.querySelector('.description-product')
    let sherkhon_2 = document.querySelector('.product-image')

    setTimeout(() => {
        maria_3.classList.add('active')

        setTimeout(() => {
            maria_2.classList.add('active')

            setTimeout(() => {
                maria_1.classList.add('active')
                amir_r.classList.add('active')

                setTimeout(() => {
                    sherkhon.classList.add('active')

                    setTimeout(() => {
                        sherkhon_2.classList.add('active')
                    }, 200)
                }, 200)
            }, 200)
        }, 200)
    }, 1000)

    view_products_btn.onclick = () => {
        setTimeout(() => {
            maria_3.classList.remove('active')
    
            setTimeout(() => {
                maria_2.classList.remove('active')
    
                setTimeout(() => {
                    maria_1.classList.remove('active')
                    amir_r.classList.remove('active')
    
                    setTimeout(() => {
                        sherkhon.classList.remove('active')
    
                        setTimeout(() => {
                            sherkhon_2.classList.remove('active')
                        }, 200)
                    }, 200)
                }, 200)
            }, 200)
        }, 1000)
    }
}