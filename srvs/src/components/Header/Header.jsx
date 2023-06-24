import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>Temukan Buku Sesuai Dengan Kesukaanmu!</h2><br />
                <p className='header-text fs-18 fw-3'>Membaca adalah salah satu hobi yang bermanfaat bila didalami. Menjadikan membaca sebagai hobi, dapat meningkatkan kualitas seseorang. Website ini membantu kamu untuk menemukan buku yang ingin kamu baca!</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header