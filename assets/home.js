var code= '';
        for(let i = 1;i<5;i++ ){
            code += `<div class="accordion-item">
                <a href="#section1" class="accordion-title" aria-expanded="false">
                    <button class="toggle" aria-label="Toggle"><i class="icon-angle-down"></i></button>
                    <span>Hệ sinh thái Cloud</span>
                </a>
                <div id="section${i}" class="accordion-content">
                    <div class="row">
                        <div class="col">
                            <p>Luci đã tiếp cận hơn 50.000 cư dân thông minh và ghi danh tại hơn 5 đại đô thị trải dọc Việt Nam. Luci mang đến kiến tạo hàng đầu với nhiều ý tưởng độc đáo, chú trọng nâng cao trải nghiệm tiêu dùng và phủ xanh mạng lưới công nghệ trên toàn quốc. Luci đã có mặt tại Hà Nội, TP Hồ Chí Minh, cùng với mạng lưới đối tác quốc tế tại Singapore, Nhật Bản, Hàn Quốc….</p>
                            <a href="#" class="button">Đọc thêm về chúng tôi<i class="icon-angle-right"></i></a>
                        </div>
                        <div class="col">
                            <img src="https://luci.vn/wp-content/uploads/2023/11/He-sinh-thai-Luci-Cloud.jpg.webp" alt="Hệ sinh thái Luci Cloud">
                        </div>
                    </div>
                </div>
            </div>`;
        }
var blog ='';
        for(let i = 1;i<5;i++ ){
            blog += `<div class="blog-card">
            <div class="card-image">
                <img src="./assets/img/blog${i}.jpg" alt="Blog Image">
            </div>
            <div class="card-content">
                <h3 class="card-title">Blog Title</h3>
                <p class="card-description">This is a short description of the blog. It provides a brief overview of the blog content.</p>
                <button class="read-more">Read Me</button>
            </div>
       </div>`
        }
        
        var tableCard = document.getElementById('table-card');
        if (tableCard) tableCard.innerHTML = blog;
        var accordion = document.getElementById('accordion');
        if (accordion) accordion.innerHTML = code;
        var accordion2 = document.getElementById('accordion-2');
        if (accordion2) accordion2.innerHTML = code;
        document.addEventListener('DOMContentLoaded', function () {
            const accordionItems = document.querySelectorAll('.accordion-title');
        
            accordionItems.forEach(item => {
                item.addEventListener('click', function () {
                    const content = this.nextElementSibling;
                    const isOpen = this.getAttribute('aria-expanded') === 'true';
        
                    // Close all open items
                    accordionItems.forEach(i => {
                        i.setAttribute('aria-expanded', 'false');
                        i.nextElementSibling.style.display = 'none';
                    });
        
                    // Toggle current item
                    if (!isOpen) {
                        this.setAttribute('aria-expanded', 'true');
                        content.style.display = 'block';
                    }
                });
            });
        });