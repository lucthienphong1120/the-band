// <!-- js viết menu -->
   
        //gọi biến
        var header = document.getElementById('header');
        var menu = document.getElementById('menu-btn');
        var height = header.clientHeight;
        menu.onclick = function() {
            var close = header.clientHeight === height
            if(close) {
                header.style.height = 'auto'; //mở
            }
            else {
                header.style.height = null; //đóng
            }
        }
        //chọn menu
        var items = document.querySelectorAll('#nav li a[href*="#"]');
        for(var i = 0; i < items.length; i++){
            var item = items[i];
            item.onclick = function(event) {
                var more = this.nextElementSibling && 
                    this.nextElementSibling.classList.contains('subnav');
                if(more){
                    event.preventDefault(); //ngừng sk trả về thẻ more
                }
                else {
                    header.style.height = null; //đóng
                }
            }
        }

   
// <!-- js viết modal (thêm js-modal cạnh modal, thêm js-close cạnh close
//     thêm js-container cạnh container, thêm .modal.open ở css)-->
   
        //gọi biến
        const Buybtn = document.querySelectorAll('.js-buy-ticket')
        const modal = document.querySelector('.js-modal')
        const close = document.querySelector('.js-close')
        const container = document.querySelector('.js-container')
        const pay = document.querySelector('.js-pay')
        function show() {
            // alert("SHOW") // bật lên hộp thông báo web
            modal.classList.add('open') //mở
        }
        function hide() {
            modal.classList.remove('open') //đóng
        }
        // nghe sự kiện click
        for(const btn of Buybtn){
            btn.addEventListener('click',show) 
        }
        close.addEventListener('click',hide)
        modal.addEventListener('click',hide)
        //lỗi sk nổi bọt vì modal ở trên cùng
        container.addEventListener('click', function(event)
            {
                event.stopPropagation() //ngừng sk nổi bọt từ container
            }
        )
        pay.addEventListener('click',hide) //đóng khi pay
   