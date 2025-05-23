import React from "react";
import "./AboutMeStyle.css";
import myProfile from "../images/my_image.jpg";

export default function AboutMe({ id }) {
  return (
    <div className="about-container" id={id}>
      <div className="aboutMe-text">
        <h3>Xin Chào, 👋</h3>
        Mình là <span> Trần Văn Tuấn </span>, hiện đang là sinh viên năm 2 chuyên ngành <span>Công Nghệ Thông Tin</span> tại <span>Trường Cao đẳng Công nghệ Thủ Đức. </span>
        Với niềm đam mê học hỏi và khám phá công nghệ, mình luôn nỗ lực rèn luyện kỹ năng chuyên môn cũng như kỹ năng mềm để chuẩn bị cho hành trình nghề nghiệp phía trước.
        <br /> <br />
        Mình đặc biệt quan tâm đến <span>lập trình web </span>và đang không ngừng nâng cao kiến thức qua các dự án cá nhân, khóa học trực tuyến và hoạt động ngoại khóa. Website này là nơi mình chia sẻ thông tin cá nhân, sản phẩm đã thực hiện và những điều mình đang học hỏi mỗi ngày.
        <br /><br />
        <span>Rất vui được kết nối và học hỏi thêm từ bạn!</span>
      </div>
      <div className="profile-photo">
        <div className="heading"> About Me</div>
        <img className="img" style={{ width: '300px', height: '390px', marginTop: '32px', objectFit: 'cover', borderRadius: '8px' }} src={myProfile} alt="Profile"></img>
      </div>
    </div>
  );
}
