import { Page, Heading, UnderlineStroke } from "@components";
import { Typography, Grid } from "@material-ui/core";
import React from "react";
import Image from "next/image";
import { Autorenew } from "@material-ui/icons";

const aDayatMonument = () => {
  return (
    <Page title="A Day At Monument Academy" description="">
      <div style={{ height: "150px" }}></div>
      <section style={{ width: "90%", margin: "auto" }}>
        <Typography variant="h1" color="primary">
          A Day At Monument Academy
        </Typography>
        <UnderlineStroke color="secondary"></UnderlineStroke>
        <Heading color="primary" decoration="accent" variant="h2">
          A Day At Monument Academy
        </Heading>
        <Grid container direction="row" justify="center" alignItems="center">
          <div style={{ width: "auto", minWidth: "200px", maxWidth: "300px" }}>
            <Image
              src="/images/monument_logo-short.png"
              alt="sunrise-1"
              width={200}
              height={300}
              position="relative"
              style={{
                maxWidth: "300px",
                minWidth: "150px",
                position: "relative",
              }}
            />
          </div>
          <div
            style={{ paddingLeft: "32px", width: "auto", maxWidth: "900px" }}
          >
            <Typography variant="h4" color="primary">
              Rise and Shine
            </Typography>
            <Typography variant="body1" color="">
              Students receive a personal wake-up and eat a family-style
              breakfast with their Houseparent and Student Life Family. Students
              share a personal daily goal with their family and head to advisory
              for community building and DBT skills practice. After advisory,
              the students move to through their daily class schedule.
            </Typography>
          </div>
        </Grid>

        <Grid container direction="row" justify="center" alignItems="center">
          <div style={{ width: "auto", minWidth: "200px", maxWidth: "300px" }}>
            <Image
              src="/images/monument_logo-short.png"
              alt="focus"
              width={200}
              height={300}
              position="relative"
              style={{
                maxWidth: "300px",
                minWidth: "150px",
                position: "relative",
              }}
            />
          </div>
          <div
            style={{ paddingLeft: "32px", width: "auto", maxWidth: "900px" }}
          >
            <Typography variant="h4" color="primary">
              Morning Focus
            </Typography>
            <Typography variant="body1" color="">
              Well-being is weaved throughout all aspects of our program. Every
              morning, students and staff practice mindfulness and engage in a
              group lesson around important social skills. The morning block
              sets students up for a focused, successful day.
            </Typography>
          </div>
        </Grid>

        <Grid container direction="row" justify="center" alignItems="center">
          <div style={{ width: "auto", minWidth: "200px", maxWidth: "300px" }}>
            <Image
              src="/images/monument_logo-short.png"
              alt="reading"
              width={200}
              height={300}
              position="relative"
              style={{
                maxWidth: "300px",
                minWidth: "150px",
                position: "relative",
              }}
            />
          </div>
          <div
            style={{ paddingLeft: "32px", width: "auto", maxWidth: "900px" }}
          >
            <Typography variant="h4" color="primary">
              Academic Blocks
            </Typography>
            <Typography variant="body1" color="">
              Students have daily academic blocks with a maximum of a 1:15 adult
              to student ratio, focusing on Literacy and Humanities, Math, and
              Science. Between these blocks, students have a social lunch,
              recess, and opportunities for electives such as PE, Health,
              Performing Arts, Instrumental Music and Spanish. Classroom
              instruction is targeted to meet student needs and is designed to
              provide all students with choice, movement, and authentic learning
              experiences.
            </Typography>
          </div>
        </Grid>

        <Grid container direction="row" justify="center" alignItems="center">
          <div style={{ width: "auto", minWidth: "200px", maxWidth: "300px" }}>
            <Image
              src="/images/monument_logo-short.png"
              alt="puzzle"
              width={200}
              height={300}
              position="relative"
              style={{
                maxWidth: "300px",
                minWidth: "150px",
                position: "relative",
              }}
            />
          </div>
          <div
            style={{ paddingLeft: "32px", width: "auto", maxWidth: "900px" }}
          >
            <Typography variant="h4" color="primary">
              Student Life Activities
            </Typography>
            <Typography variant="body1" color="">
              After the academic day, students engage in enrichment activities
              that might include sports, cooking club, choir, theater, or
              service clubs. Dinner is eaten family-style, then students do
              their reading homework and have time to relax with evening family
              activities like community meetings, board games, or movie night.
              We provide a warm, home-like environment in the boarding program
              while embedding students’ acquisition of important independent
              living skills.
            </Typography>
          </div>
        </Grid>

        <Grid container direction="row" justify="center" alignItems="center">
          <div style={{ width: "auto", minWidth: "200px", maxWidth: "300px" }}>
            <Image
              src="/images/monument_logo-short.png"
              alt="desk-lamp"
              width={200}
              height={300}
              position="relative"
              style={{
                maxWidth: "300px",
                minWidth: "150px",
                position: "relative",
              }}
            />
          </div>
          <div
            style={{ paddingLeft: "32px", width: "auto", maxWidth: "900px" }}
          >
            <Typography variant="h4" color="primary">
              Closing the Day{" "}
            </Typography>
            <Typography variant="body1" color="">
              Before students prepare for bed, they reflect on the daily goal
              they set in the morning. The Houseparent and the other students in
              the family celebrate and support one another in this process.
              Students then read or journal in their rooms until lights out.
            </Typography>
          </div>
        </Grid>

        <Grid container direction="row" justify="center" alignItems="center">
          <div style={{ width: "auto", minWidth: "200px", maxWidth: "300px" }}>
            <Image
              src="/images/monument_logo-short.png"
              alt="chat-1"
              width={200}
              height={300}
              position="relative"
              style={{
                maxWidth: "300px",
                minWidth: "150px",
                position: "relative",
              }}
            />
          </div>
          <div
            style={{ paddingLeft: "32px", width: "auto", maxWidth: "900px" }}
          >
            <Typography variant="h4" color="primary">
              Drop-off and Pickup
            </Typography>
            <Typography variant="body1" color="">
              Early Sunday evening, students are dropped off and families have a
              chance to speak with staff. The same opportunity exists on Friday
              afternoon when students are picked up for the weekend. The purpose
              of a structured drop-off and pick-up is to establish and develop
              relationships with caregivers and to keep lines of communication
              open to ensure a seamless transition between home and school life.
            </Typography>
          </div>
        </Grid>
      </section>
    </Page>
  );
};

export default aDayatMonument;
