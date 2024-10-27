import React from "react";
import "./style.scss";

function VolunteerBanner1(props) {
  return (
    <div className="container3">
      <div className="contact-info3">
        <h2>Thông Tin Liên Hệ</h2>
        <p><strong>Email:</strong> hanoipetadoption@gmail.com</p>
        <p><strong>Phone:</strong> (+84)39 320 1068</p>
        <p><strong>Location:</strong> Hà Nội - Việt Nam</p>
        
        <h2>Tài Khoản Quyên Góp</h2>
        <p>Chi phí sẽ được chia đều cho các bé khác còn nằm viện và gây dựng nhà chung.</p>
        
        <div className="bank-info3">
          <div>
            <h3>Vietcombank</h3>
            <p>Phạm Thanh Hằng</p>
            <p>0011004054939</p>
            <p>Sở giao dịch Vietcombank</p>
          </div>
          <div>
            <h3>BIDV</h3>
            <p>Phạm Thanh Hằng</p>
            <p>12610000951797</p>
            <p>Chi Nhánh Ba Đình</p>
          </div>
          <div>
            <h3>Techcombank</h3>
            <p>Phạm Thanh Hằng</p>
            <p>19031456730888</p>
            <p>Chi Nhánh Hà Nội</p>
          </div>
          <div>
            <h3>Paypal</h3>
            <p>hanoipetadoptionorg@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="feedback-form3">
        <h2>Gửi Góp Ý</h2>
        <form action="#" method="post">
          <label htmlFor="name">Họ và tên *</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email *</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="subject">Tiêu đề *</label>
          <input type="text" id="subject" name="subject" required />

          <label htmlFor="message">Nội dung *</label>
          <textarea id="message" name="message" required></textarea>

          <div className="captcha3">
            <input type="checkbox" id="captcha" name="captcha" />
            <label htmlFor="captcha">I'm not a robot</label>
          </div>

          <button type="submit">GỬI TIN NHẮN</button>
        </form>
      </div>
    </div>
  );
}

export default VolunteerBanner1;