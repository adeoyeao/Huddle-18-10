import React from "react"
import Head from "next/head"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Statistics from "../components/Statistics"
import About from "../components/About"
import Subscribe from "../components/Subscribe"
import Footer from "../components/Footer"

const Index = () => {
      return (
            <div>
                  <Head>
                        <title>Huddle</title>
                  </Head>
                  <Navbar />
                  <Hero />
                  <Statistics />
                  <About 
                  url="illustration-grow-together"
                  description="Grow Together Illustration"
                  title="Grow Together"
                  copy="Generate meaningful discussions with your audience and build a strong loyal community. Think of the insightful conversations you miss out on with a feedback form."
                  version="top"/>
                  <About 
                  url="illustration-flowing-conversation"
                  description="Flowing Conversations Illustration"
                  title="Flowing Conversations"
                  copy="You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow."
                  version="middle"/>
                  <About 
                  url="illustration-your-users"
                  description="Your Users Illustration"
                  title="Your Users"
                  copy="It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately."
                  version="bottom"/>
                  <Subscribe />
                  <Footer />
            </div>
      )
}  
   
export default Index