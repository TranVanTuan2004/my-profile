import React from "react";
import "./index.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomeBanner from "./components/HomeBanner";
import ProjectCard from './components/ProjectCard'
import AboutMe from './components/AboutMe'
import SkillCard from './components/SkillCard'
import ContactForm from './components/ContactForm'
import AnimatedCursor from "react-animated-cursor"


function App() {
  return (
    <>
      <AnimatedCursor
        color="#fff"
        innerSize={8}
        outerSize={50}
        innerScale={1}
        outerScale={2.2}
        outerAlpha={0}
        outerStyle={{
          background: '#ffffff',
          mixBlendMode: 'exclusion'
        }}
        innerStyle={{
          backgroundColor: '#F94892'
        }}
      />
      <div>
        <Navbar />
        <HomeBanner id="home" />
        <ProjectCard
          id="project"
          className="odd"
          projectTitle="Ecommerce  website"
          projectDesc="Dự án website thương mại điện tử là một nền tảng trực tuyến cho phép người dùng dễ dàng tìm kiếm, lựa chọn và mua sắm sản phẩm. Website hỗ trợ đầy đủ các chức năng như đăng ký/đăng nhập người dùng, quản lý sản phẩm, giỏ hàng, thanh toán trực tuyến và quản lý đơn hàng. Giao diện thân thiện với người dùng và tối ưu hóa trải nghiệm mua sắm trên mọi thiết bị."
          projectLink="https://github.com/TranVanTuan2004/ecommerce-laravel"
          deployedProjectLink="https://github.com/TranVanTuan2004/ecommerce-laravel"
          projectImg={require('./images/project1.png')}
        />

        <ProjectCard
          projectTitle="Sportify clone"
          projectDesc="Dự án ứng dụng nghe nhạc là một nền tảng trực tuyến cho phép người dùng phát nhạc trực tiếp, tìm kiếm bài hát, nghệ sĩ, tạo và quản lý playlist cá nhân. Ứng dụng được thiết kế với giao diện hiện đại, dễ sử dụng, hỗ trợ phát nhạc liên tục, hiển thị lời bài hát và đề xuất nội dung theo sở thích người dùng. Hệ thống có thể hoạt động mượt mà trên cả máy tính và thiết bị di động."
          projectLink="https://github.com/TranVanTuan2004/FE2-music-app"
          deployedProjectLink="https://github.com/TranVanTuan2004/FE2-music-app"
          projectImg={require('./images/project2.png')}
        />
        <AboutMe id='about' />
        <SkillCard id='skills' />
        <ContactForm id='contact' />
        <Footer />
      </div>
    </>
  );
}

export default App;
