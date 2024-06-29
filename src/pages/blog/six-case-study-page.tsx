import React from 'react';
import {
    dataAboutClient,
    dataCarouselPicture,
    dataProcess, dataTechnology
} from "../../data/data-six-case-study-page";
import Layout from "../../components/layout";
import AboutClient from "../../components/organisms/about-client";
import Process from "../../components/organisms/process";
import CarouselPicture from "../../components/organisms/carousel-picture";
import Technology from "../../components/organisms/technology";
const SixCaseStudyPage = () => (
  <Layout>
    <AboutClient {...dataAboutClient} />
    <Process {...dataProcess} />
    <CarouselPicture {...dataCarouselPicture} />
    <Technology {...dataTechnology} />
  </Layout>
);

export default SixCaseStudyPage;
