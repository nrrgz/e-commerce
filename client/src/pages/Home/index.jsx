import React from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Products from '../../components/Products';
import Category from '../../components/Category';
import Banner from './HomeComponents/Banner';
import PromoBanner from './HomeComponents/PromoBanner';
import Article from './HomeComponents/Articles';

const Home = () => {

  return (
    <div>
      <Header/>
      <Banner />
      <Category/>
      <Products isMainPage={true}/>
      <PromoBanner/>
      <Article/>
      <Footer />
    </div>
  )
}

export default Home