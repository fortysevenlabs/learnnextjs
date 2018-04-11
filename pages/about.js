import Layout from '../components/Layout';

const About = () => (
  <div>
    <Layout>
      <p> Knock Knock, what is this about?! </p>
    </Layout>
  </div>
)

export default About;

// Other alternatives to do the same
// METHOD 1
// import withLayout from '../lib/layout'
// 
// const Page = () => (
//   <p>This is the about page</p>
// )
//
// 
// METHOD 2
// export default withLayout(Page)
// 
// const Page = () => (
//   <p>This is the about page</p>
// )
// 
// export default () => (<Layout page={Page}/>)
// 
//
// METHOD 3
// const content = (<p>This is the about page</p>)
// export default () => (<Layout content={content}/>)
