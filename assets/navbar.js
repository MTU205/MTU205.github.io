var navbar =`<div class="logo">
<a href="./index.html">
    <img src="./assets/img/logo.png" alt="Luci">
</a>
</div>
<ul class="menu">
<li><a href="./index.html">Trang chủ</a></li>
<li><a href="./vechungtoi.html">Về chúng tôi</a></li>
<li class="dropdown">
    <a href="#">Giải pháp <i class="fas fa-angle-down"></i></a>
    <div class="dropdown-content">
        <a href="./giaiphap.html">Giải pháp quản lý đô thị thông minh</a> 
    </div>
</li>
<li class="dropdown">
    <a href="#">Sản phẩm <i class="fas fa-angle-down"></i></a>
    <div class="dropdown-content">
        <a href="./sanpham.html">Gateway Indoor</a>
        <a href="./sanpham.html">Gateway Outdoor</a>
        <a href="./sanpham.html">Bộ điều khiển NEMA</a>
        <a href="./sanpham.html">Modbus RTU</a>
        <a href="./sanpham.html">Digital Input</a>
        <a href="./sanpham.html">Digital Output</a>
    </div>
</li>
<li class="dropdown">
    <a href="#">Dịch vụ <i class="fas fa-angle-down"></i></a>
    <div class="dropdown-content">
        <a href="./dichvu.html">Tư vấn dự án</a>
    </div>
</li>
<li><a href="./tintuc.html">Tin tức</a></li>
<li><a href="./tuyendung.html">Tuyển dụng</a></li>
</ul>
<div class="rightbar">
<div class="search-container">
    <button type="submit"><i class="fas fa-search"></i></button>
</div>
<div class="contact-btn">
<a href="./lienhe.html">Liên hệ</a>
</div>
</div>`
document.getElementById("navbar").innerHTML = navbar;