import React from 'react'
import Link from 'gatsby-link'
import Hero from '../components/Hero'
import About from '../components/About'
import Bio from '../components/Bio'
import Listen from '../components/Listen'
import PreOrder from '../components/PreOrder'
import Footer from '../components/Footer'

const IndexPage = () => (
  <div>
    <Hero />
    <About />
    <Bio />
    <Listen />
    <PreOrder />
    <Footer />
  </div>
)

export default IndexPage
