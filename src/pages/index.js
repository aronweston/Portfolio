import React from 'react';
import Section from '../components/Section';
import Layout from '../components/Layout';
import { VueLogo, NodeLogo, ReactLogo } from '../components/Styles';

const Row = ({ children, p = 0, cols = 0, gap = '' }) => {
  return (
    <div className={`grid grid-cols-${cols} ${gap} p-${p}`}>{children}</div>
  );
};

const Container = ({ children, bg, bgWeight, text, p }) => {
  return (
    <div className={`container bg-${bg}-${bgWeight} text-${text} p-${p}`}>
      {children}
    </div>
  );
};

const Index = () => {
  return (
    <Layout title='Aron Weston / Junior Software Engineer / Sydney, NSW'>
      <Section bg='yellow' bgWeight='200'>
        <Row cols='1'>
          <Container text='center' p='10'>
            <h1 className='text-5xl font-bold pb-5'>Aron Weston</h1>
            <h2 className='text-2xl pb-2'>Junior Software Engineer</h2>
            <h2 className='text-xl pb-5'>Sydney, NSW</h2>

            <ul className='block'>
              <li>JavaScript</li>
              <li>
                <ReactLogo />
              </li>
              <li>
                <VueLogo />
              </li>
              <li>
                <NodeLogo />
              </li>
            </ul>
          </Container>
        </Row>
      </Section>
      <Section>
        <Row cols='2'>
          <iframe
            width='100%'
            height='100%'
            src='https://www.youtube.com/embed/L7OLY4HCctQ'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen></iframe>
          <div className='bg-gray-500 p-10 pt-20 pb-20'>
            <span className='text-4xl block pb-2 font-bold'>About Me</span>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              exercitationem doloribus deserunt odio consequatur magnam fugiat
              porro, libero ipsum facilis eius accusamus, sit accusantium
              inventore repudiandae iure quod! Aliquid, porro.
            </span>

            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              quae, illum perferendis iusto, architecto, dolorum facere est
              tenetur earum ullam optio dolorem minima reiciendis et repudiandae
              accusamus maxime! Repellendus, a.
            </span>
          </div>
        </Row>
      </Section>
      <Section bg='gray' bgWeight='100'>
        <Row p='20'>
          <ul>
            <li></li>
          </ul>
        </Row>
      </Section>

      <span>Projects</span>
      <Section bg='gray' bgWeight='100'>
        <Row>
          <div className='bg-gray-100 p-10'>
            <h1>Section</h1>
          </div>
        </Row>
      </Section>
    </Layout>
  );
};

export default Index;
