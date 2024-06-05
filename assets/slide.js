var slide_item = '';
        for(let i =1; i < 5; i++){
            slide_item+=`<div class="slide" >
                <div class="content-slide">
                    <h2><span class="ez-toc-section" id=""></span>GIẢI PHÁP<br>
                        QUẢN LÝ ĐÔ THỊ THÔNG MINH<span class="ez-toc-section-end"></span></h2>
                        <p>Luci RMS là giải pháp được ưa chuộng nhất trong mô hình triển khai Đô thị thông minh đến từ Luci. Chúng tôi hiểu và trân trọng những thách thức trong quá trình vận hành quản lý của bạn. Giải pháp quản lý đô thị thông minh Luci RMS giúp cân bằng giữa việc chăm sóc xuất sắc và chuyên nghiệp cho cư dân trong khi vẫn hoàn thành tốt các công việc của Ban Quản Lý.</p>
                        <p>Luci RMS mang đến cho tất cả những đơn vị quản lý tòa nhà, bất động sản hay căn hộ sự tiện ích, đơn giản và tiết kiệm tối đa nguồn lực.</p>
                        <div class="button-center">
                            <a href="#" target="" class="">
                                <span>Đọc thêm về chúng tôi</span></a>
                        </div>
                        
                </div>
                <img src="./assets/img/slide${i}.jpg" alt="Slide 1">
            </div>`
        }
        document.getElementById('slides-item').innerHTML = slide_item;
    
        const slides = document.querySelector('.slides');
        const slideImages = document.querySelectorAll('.slide');
        const prevButton = document.querySelector('.control-prev');
        const nextButton = document.querySelector('.control-next');
        const indicators = document.querySelectorAll('.indicator');
    
        let currentIndex = 0;
    
        function showSlide(index) {
            if (index >= slideImages.length) {
                currentIndex = 0;
            } else if (index < 0) {
                currentIndex = slideImages.length - 1;
            } else {
                currentIndex = index;
            }
            slides.style.transform = `translateX(${-currentIndex * 100}%)`;
            updateIndicators();
        }
    
        function updateIndicators() {
            indicators.forEach((indicator, index) => {
                if (index === currentIndex) {
                    indicator.classList.add('active');
                } else {
                    indicator.classList.remove('active');
                }
            });
        }
        
        prevButton.addEventListener('click', () => {
            showSlide(currentIndex - 1);
        });
    
        nextButton.addEventListener('click', () => {
            showSlide(currentIndex + 1);
        });
    
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                showSlide(index);
            });
        });
    
        // Optional: Auto-slide functionality
        setInterval(() => {
            showSlide(currentIndex + 1);
        }, 5000); // Change slide every 5 seconds
        