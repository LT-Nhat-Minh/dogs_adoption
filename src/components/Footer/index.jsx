import {
  FacebookOutlined,
  InstagramOutlined,
  MailOutlined,
  PhoneOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import React from "react";
import "./style.scss";
import { FacebookEmbed } from "react-social-media-embed";
import logo from "../../asset/Logo/hanoi-adoption-logo.png";

function Footer(props) {
  const htmlString = `<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto%2F%3Ffbid%3D556869793147502%26set%3Da.556869763147505&show_text=true&width=500" width="500" height="614" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>`;

  return (
    <div className="footer">
      <hr />
      <div className="footer_container" style={{ margin: "100px 0 50px 0" }}>
        <div className="footer_content">
          <div>
            <img
              src={logo}
              alt=""
              style={{ height: "60px", margin: "0 10px" }}
            />
            <div>
              <a href="https://www.facebook.com/hanoipetadoption/">
                <FacebookOutlined />
              </a>
              <a href="https://www.youtube.com/channel/UCdLb536ht3xSJ6YJ-LF8r3g">
                <YoutubeOutlined />
              </a>
              <a href="https://www.instagram.com/hanoipetadoption/">
                <InstagramOutlined />
              </a>
            </div>
          </div>
          <div>
            <div>
              <h3>Về chúng tôi</h3>
              <hr />
              <p>
                Nhóm trẻ tình nguyện viên Việt Nam và quốc tế, hoạt động vì tình
                yêu chó mèo.
              </p>
              <h3>Thông tin liên hệ</h3>
              <hr />
              <ul style={{ listStyleType: "none" }}>
                <li>
                  <a href="/contact">
                    <PhoneOutlined />
                    (+84)39 320 1068
                  </a>
                </li>
                <li>
                  <a href="/email">
                    <MailOutlined />
                    hanoipetadoption@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div dangerouslySetInnerHTML={{ __html: htmlString }} />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer_credits">
        Copyright 2019 / Designed by BMBSoft VietNam
      </div>
    </div>
  );
}

export default Footer;
