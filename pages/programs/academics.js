import { Page, UnderlineStroke } from "@components";
import { Typography } from "@material-ui/core";
import React from "react";

const academics = () => {
  return (
    <Page title="Academics" description="">
      <div style={{ height: "150px" }}></div>
      <section style={{ width: "90%", margin: "auto" }}>
        <Typography variant="h1" color="primary">
          Academics
        </Typography>
        <Typography variant="h3" color="primary">
          Monument Academy’s academic programs are centered on thematic
          planning, project-based learning with principles of Webb’s Depth of
          Knowledge, and higher-order questioning as rooted in Bloom’s Taxonomy.{" "}
        </Typography>
        <Typography variant="h3" color="primary">
          Targeted Learning to Student Needs
        </Typography>
        <UnderlineStroke color="secondary"></UnderlineStroke>
        <Typography variant="body1" color="primary">
          Each Monument Academy student engages in a targeted learning journey
          that is rooted in data driven instruction as evidenced by
          triangulation of MAP data, quarterly assessments, and PARCC data. We
          seek to develop self-directed learners by engaging students in
          academic goal setting during student led conferences, and structuring
          an environment that provides options for how students access content,
          practice new skills, and demonstrate mastery of the standards using
          technology and research.
        </Typography>
        <Typography variant="h3" color="primary">
          Enhanced Academics
        </Typography>
        <UnderlineStroke color="secondary"></UnderlineStroke>
        <Typography variant="body1" color="primary">
          The Monument team is committed to the belief that having a strong
          academic plan in place allows all students, regardless of race,
          disability, and previous history, to develop the skills necessary to
          become lifelong learners. Dr. Jeffrey Grant has built his career
          locally and nationally on a core commitment to strengthening and
          scaling academic school success. In addition to standard quantitative
          measurements of academic success, this includes:
        </Typography>
        <Typography variant="body1" color="primary">
          <ul>
            <li>Differentiating instruction</li>
            <li>Scaffolding to ensure comprehension</li>
            <li>
              Higher-order questioning (question stems grounded in Bloom’s
              Taxonomy)
            </li>
            <li>Complex text accessed in all content areas</li>
            <li>
              Effectively using fresh, relevant data for planning instruction
              and student grouping
            </li>
            <li>Project based learning</li>
            <li>
              Utilization of Tier 2 and Tier 3 vocabulary in all content areas
            </li>
          </ul>
        </Typography>
        <Typography variant="h3" color="primary">
          Extended Learning
        </Typography>
        <UnderlineStroke color="secondary"></UnderlineStroke>
        <Typography variant="body1" color="primary">
          In addition to learning in a traditional classroom, our students have
          opportunities to be exposed to the educational landscape of
          Washington, DC, and beyond. Through a series of field trips, service
          trips, and guest speakers, our students will connect their learning to
          their immediate community and the world.
        </Typography>
        <Typography variant="h3" color="primary">
          Flexible Schedule
        </Typography>
        <UnderlineStroke color="secondary"></UnderlineStroke>
        <Typography variant="body1" color="primary">
          Our middle school schedule was developed with an instructional block
          broken down into 75 minutes.
        </Typography>
        <Typography variant="body1" color="primary">
          <ul>
            <li>
              Students have primary blocks of instructional time with a maximum
              of a 1:8 adult to student ratio.{" "}
            </li>
            <li>
              Core content classes including Reading, Math, Social Studies, and
              Science.
            </li>
            <li>
              Daily 45 minute sessions of Student Led Conferences (SLCs) and
              Dialectical Behavior Therapy (DBT).{" "}
            </li>
          </ul>
          Our goal is to create an environment where each student can work at
          his/her individual pace and with the appropriate materials and
          necessary accommodations. Students have a social lunch, recess, and
          opportunities for arts and other creative activities including
          Performing Arts, Music, Spanish, and Health/PE. The team recognizes
          that many student behavioral challenges and poor outcomes for students
          with disabilities often result from deficits in implementation of
          effective, engaging Tier 1 instruction. Therefore, we focus on
          academic improvements to increase student engagement and academic
          growth, strengthening school culture, and decreasing behaviors that
          interrupt academic and life success.
        </Typography>
      </section>
    </Page>
  );
};

export default academics;
