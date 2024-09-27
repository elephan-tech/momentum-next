import { Page, UnderlineStroke } from "@components";
import { Typography } from "@material-ui/core";
import React from "react";

const wellBeing = () => {
  return (
    <Page title="Well being" description="">
      <div style={{ height: "150px" }}></div>
      <section style={{ width: "90%", margin: "auto", maxWidth: "1200px" }}>
        <Typography variant="h1" color="primary">
          Well Being
        </Typography>
        <Typography variant="h3" color="primary">
          At Monument Academy, the nurturing of students’ social and emotional
          well-being is at the center of our work.
        </Typography>
        <Typography variant="h3" color="primary">
          Well-Being Department
        </Typography>
        <UnderlineStroke color="secondary"></UnderlineStroke>
        <Typography variant="body1" color="primary">
          Monument Academy is staffed with 3 school counselors, a well-being
          clinical manager, and a director. Related services (psychological,
          speech therapy, and occupational therapy) are provided by Premier
          Psychological Services, LLC; Katherine Marshall Wood, PLLC; and
          Psychological Assessment Solutions. Additionally, we partner with
          SMILE, Family Solutions, and Outreach Solutions, Incorporated to
          provide mental health services to our students and families. Our
          Well-Being staff provide evidenced-based behavioral, emotional, and
          therapeutic support for the students.
        </Typography>{" "}
        <Typography variant="h3" color="primary">
          Social Emotional Learning (SEL) Framework
        </Typography>
        <UnderlineStroke color="secondary"></UnderlineStroke>
        <Typography variant="body1" color="primary">
          In order for our students to thrive in the classroom, we train our
          staff to teach them behavioral regulation skills based on the
          evidence-based framework of DBT (Dialectical Behavior Therapy). Every
          student at Monument receives two hours of instruction each week that
          focus on the following principles:
          <ul>
            <li>Mindfulness</li>
            <li>Emotional Regulation</li>
            <li>Distress tolerance</li>
            <li>Interpersonal effectiveness</li>
          </ul>
          Learn more about Dialectical Behavior Therapy at Monument Academy
          here.{/*Add link! https://monumentacademy.org/dbt/ */}
        </Typography>
        <Typography variant="h3" color="primary">
          Student Wellness Lounge
        </Typography>
        <UnderlineStroke color="secondary"></UnderlineStroke>
        <Typography variant="body1" color="primary">
          Our Wellness Lounge is available to all students during the day as an
          opt-in resource to support students in implementing their emotional
          regulation skills. The lounge has 3 purposes for students:
          <u>
            <li>Emotional regulation support</li>
          </u>
          In the Lounge, the students are guided by counselors to utilize their
          DBT skills and coping strategies in order to quickly and effectively
          return back to class.
          <u>
            <li>Lunch/recess alternative space</li>
          </u>
          For some of our students, the lunch and recess environments can have
          overwhelming sensory stimulation, while others find it difficult to
          navigate the unstructured interpersonal demands of the cafeteria. The
          Wellness Lounge offers a calm, quiet space where students can choose
          down-regulation activities such as art, reading, music, or
          collaborative games, with a limited number of peers.
          <ul>
            <li>Return plan</li>
          </ul>
          In the event that a student has an extended leave from Monument due to
          a mental health related hospitalization, or is returning from
          detention at a correctional facility, they spend the day recalibrating
          to the demands of a school day with the counselors in the Lounge.
          During this time, they can develop and process a successful re-entry
          plan to join their peers.
        </Typography>
        <Typography variant="h3" color="primary">
          Restorative Justice
        </Typography>
        <UnderlineStroke color="secondary"></UnderlineStroke>
        <Typography variant="body1" color="primary">
          Monument partners with Restorative DC to establish inclusionary
          discipline policies to keep youth in school and out of prison,
          maintain safe learning environments, and provide opportunities for our
          students to be active and accountable members of their community. We
          are working with Restorative DC to create a stronger school community,
          participate in restorative conversations around interpersonal
          conflict, and empower students to hold their peers accountable when a
          member of the community is harmed.
        </Typography>
        <Typography variant="h3" color="primary">
          Trauma-Informed Staff
        </Typography>
        <UnderlineStroke color="secondary"></UnderlineStroke>
        <Typography variant="body1" color="primary">
          Monument staff are provided with several weeks throughout the year of
          psychoeducational training in trauma-informed and best-practice
          approaches with students. Specifically, our staff are provided
          professional development regarding trauma-informed classroom
          approaches, Adverse Childhood Experiences (ACE’s) study, and
          continuous psychoeducation highlighting the impacts of traumatic
          exposure on student behavior.
        </Typography>
        {/* <Typography variant="h3" color="primary"></Typography>
        <UnderlineStroke color="secondary"></UnderlineStroke>
        <Typography variant="body1" color="primary"></Typography> */}
      </section>
    </Page>
  );
};

export default wellBeing;
