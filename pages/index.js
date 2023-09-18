import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I am Adrian Nandu. First of all, I want to say thank you for
          contacting me to undergo for the front-end developer assessment.
        </p>
        <p>
          To be honest I never used and learned Next.js for the web development
          before this. I did learn about React.js in 10-hour course during in my
          web development bootcamp in 2022. Unfortunately, I never applied it in
          my web development.
        </p>
        <p>
          After receiving your message through WhatsApp about the assessment, I
          immediately try to learn Next.js through its website and watching some
          of the videos in YouTube. But, I realized that I need more time to
          learn Next.js.
        </p>
        <p>
          However, I will try to explain at my best about the workflow of the
          assessment.
        </p>
        <p>The workflow:</p>
        <Image src="/images/1.png" alt="" width={500} height={700} />
        <p>
          The UI above is the main or homepage of the website to search for
          movies. By using the API developed by the developer, it will provide
          access to the user about the movies they want to search for. <br></br>
          <br></br>
          For example, if they want to look for the New Releases: by clicking
          the View More button, it will request API of New Movies through GET
          Method to interact with the database in order to return the result of
          the New Releases.
        </p>
        <br></br>
        <Image src="/images/2.png" alt="" width={500} height={700} />
        <p>
          This is another page with the same layout to do specific search, which
          involved movies search and its time. This will involve the GET method
          to request for the APIs such as Genre and TimeSlot.
          <br></br>
          <br></br>
          The Search Results are the returned results after requesting the
          relevant APIs.
        </p>
        <br></br>
        <Image src="/images/3.png" alt="" width={500} height={700} />
        <p>
          This is the third page which involved another APIs of Specific Movie
          Theatre and Search Performer besides the Genre and TimeSlot APIs,
          which is more specific in searching movies compared to to the second
          page.
        </p>
        <p>
          Whenever the users want to give rating for the specific movies, it
          will involve POST Method of Give Rating API in order to rate for the
          movies.
          <br></br>
          <br></br>
          While, the POST of Add movie API, is the New Releases movies added in
          the database by the developer.
        </p>
        <h4>Conclusion</h4>
        <p>
          With proper training in your company or organization, I will learn
          more about web development in the future. All I need is an opportunity
          to be trained and employed by you. Thank you.
        </p>
      </section>
    </Layout>
  );
}
