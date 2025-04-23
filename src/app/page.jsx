"use cleint";
import QuoteSlider from "/src/components/QuoteSlider";
import Features from "/src/components/Features";
import React from "react";
import Footer from "/src/components/Footer";
import BlogPosts from "/src/components/BlogPosts";
import ReviewSlider from "/src/components/ReviewSlider";
import FAQSection from "/src/components/FaqSection";
import VideoComponent from "/src/components/VideoComponent";
import TeachingWay from "/src/components/TeachingWay";
import WorldConnection from "/src/components/WorldConnection";
import MasterExams from "/src/components/MasterExams";
import SubjectsSlider from "/src/components/SubjectsSlider";
import ProgramsForKids from "/src/components/ProgramsKids";
import HeroSection from "/src/components/HeroSection/HeroSection";
import Story from "/src/components/Story";

const page = () => {
    return (
        <div>
            <HeroSection />
            <Features />
            <Story />
            <TeachingWay />
            <ProgramsForKids />
            <SubjectsSlider />
            <WorldConnection />
            <QuoteSlider />
            <VideoComponent />
            <MasterExams />
            <ReviewSlider />
            <FAQSection />
            <BlogPosts />
            <Footer /> 
        </div>
    );
};

export default page;
