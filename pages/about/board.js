import { Page, UnderlineStroke } from "@components";
import { Typography, Grid } from "@material-ui/core";
import React from "react";
import Image from "next/image";
import { Autorenew } from "@material-ui/icons";

const board = () => {
  return (
    <Page title="Board of Directors" description="">
      <div style={{ height: "150px" }}></div>
      <section style={{ width: "90%", margin: "auto" }}>
        <Typography variant="h2" color="primary">
          Board of Directors
        </Typography>
        <UnderlineStroke></UnderlineStroke>
        <Typography variant="body1" color="">
          Monument Academy benefits from the leadership of a seasoned Board of
          Directors with extensive expertise across a range of industries. Read
          on to learn more, or visit Monument Academy’s Partnership page to
          learn about key partners and supporters of Monument Academy.
          {/* <Typography variant="body1" color="">
          Board Members: Click on this link to view the Monument Board Data
          Dashboard. You will need your Monument Microsoft Account Credentials
          in order to view the dashboard. (Username:
          first.last@monumentacademydc.onmicrosoft.com). Please contact Jeff
          McHugh if you need a password reset.
        </Typography> */}
        </Typography>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <div style={{ width: "auto", minWidth: "200px", maxWidth: "300px" }}>
            <Image
              src="/images/monument_logo-short.png"
              alt="Monument Academy Logo"
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
              Tycely Williams
            </Typography>
            <Typography variant="h5" color="">
              Board Chair
            </Typography>
            <UnderlineStroke></UnderlineStroke>
            <Typography variant="body1" color="">
              Tycely Williams is the Vice President of Development at the YWCA.
              Prior to that, she served as Regional Chief Development Officer at
              Red Cross. She has raised and managed more than $69 million
              dollars for nonprofit organizations. Prior to Red Cross, she was
              Association Director of Major Gifts for the YMCA of Metropolitan
              Washington, and before that she founded and led a professional
              services consulting company for six years. Over the past 18 years,
              she has served as a Director of Development for two health and
              human services organizations, the Artistic Director of two
              community-based dance studios, and the Executive Director for a
              nonprofit organization founded by a Fortune 500 Company. Ms.
              Williams holds an Executive Masters in Leadership from The
              McDonough School of Business at Georgetown University. A Cum Laude
              graduate of Wake Forest University, Tycely possesses a Bachelor of
              Arts degree in Communications with distinguished departmental
              honors and a minor in Journalism.Ms. Williams serves on the
              governing boards of the Association of Fundraising Professionals
              Washington Metro Chapter and Calvary Healthcare.
              <Typography variant="body1" color="">
                What Excites You About Monument Academy
              </Typography>
              <Typography variant="body1" color="">
                I am honored to stand with the visionary Emily Bloomfield, lock
                hearts with the Monument Academy Board of Trustees so we may
                partner with compassionate parents and devoted teachers to
                create a safe place for children to learn, laugh and love. The
                strikingly beautiful smiles of our parents, teachers and
                children excite and inspire me.
              </Typography>
              <Typography variant="body1" color="">
                Favorite Teacher
              </Typography>
              <Typography variant="body1" color="">
                I loved every teacher; my mother and father were teachers. My
                high school debate coach Ms. Marilee Dukes tops the lists of
                teachers I loved. Ms. Dukes taught me to dream. She would say,
                “Tycely stop paying attention to me and pay attention to
                you….look out the window and dream child, prepare to become who
                you want to be and do what you’ve yet to see.”
              </Typography>
            </Typography>
          </div>
        </Grid>
        <hr></hr>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <div style={{ width: "auto", minWidth: "200px", maxWidth: "300px" }}>
            <Image
              src="/images/monument_logo-short.png"
              alt="Monument Academy Logo"
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
              Tameria Lewis
            </Typography>
            <Typography variant="h5" color="">
              Vice Chair
            </Typography>
            <UnderlineStroke></UnderlineStroke>
            <Typography variant="body1" color="">
              Tameria (Tami) Lewis is an educational consultant and is the
              former Deputy Director of Kingsman Academy Public Charter School.
              Tami grew up in foster care in Alabama before attending George
              Washington University and settling in Washington DC in the late
              1980s. She has held numerous leadership positions in DC government
              and the charter school sector focused on improving educational
              opportunities and services for at-risk children and students with
              disabilities. Prior to joining Kingsman Academy, she was the Chief
              Compliance Officer for Cesar Chavez Public Charter Schools and
              previously served as Director of Student Support Services at E.L.
              Haynes Public Charter School. As the Senior Policy Advisor for
              special education at the DC Public Charter School Board, she
              developed policies and procedures to monitor special education
              services at charter schools and collaborated with stakeholders to
              develop and secure funding for innovative programming for students
              with significant service needs.
            </Typography>
            <Typography variant="body1" color="">
              Prior to her work in the DC charter sector, Ms. Lewis served on
              the Mayor’s executive team that transitioned state education
              agency responsibilities from DC Public Schools to the then newly
              established Office of the State Superintendent of Education (OSSE)
              and was OSSE’s first Assistant Superintendent for Special
              Education. In this role, she led OSSE’s successful efforts to
              resolve multiple federal special education class actions by
              developing and implementing policies and systems to improve
              student outcomes and ensure compliance with local and federal
              special education laws. Before moving to OSSE she was the Senior
              Policy Advisor for Education and Service Integration in the
              Mayor’s Office of Policy and Legislative Affairs after holding
              several senior D.C. Council staff positions, including Judiciary
              and Education Committee Clerk, where she focused on the
              intersection of child welfare, juvenile justice and education
              policy.
            </Typography>
          </div>
        </Grid>
        <hr></hr>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <div style={{ width: "auto", minWidth: "200px", maxWidth: "300px" }}>
            <Image
              src="/images/monument_logo-short.png"
              alt="Monument Academy Logo"
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
              Donna Anthony
            </Typography>
            <Typography variant="h5" color="">
              Board Member
            </Typography>
            <UnderlineStroke></UnderlineStroke>
            <Typography variant="body1" color="">
              Donna Anthony serves as the Executive Vice President of Clinical
              Strategy for The HSC Health Care System. She is charged with
              leading The HSC Pediatric Center, HSC Home Care and HSC Health and
              Residential Services. She currently serves as an appointed member
              of the DC Maternal Mortality Review Committee, the DC Maternal and
              Child Health Advisory Committee, and continues to work with DC
              Public Schools on early childhood health initiatives.
            </Typography>
            <Typography variant="body1" color="">
              Prior to joining The HSC Health Care System, Ms. Anthony served as
              the Assistant Superintendent of Health & Wellness at the D.C.
              Office of the State Superintendent of Education. In this role, she
              oversaw all of the federal nutrition programs for schools and
              child care centers, state athletics, and implementation of federal
              and local grant programs and services that support the health and
              wellbeing of children in schools and child care centers in the
              District. In that capacity, she served as an appointed member of
              the D.C. Food Policy Council, the Healthy Youth and Schools
              Commission, the Medical Care Advisory Committee and the Behavioral
              Health Council.
            </Typography>
            <Typography variant="body1" color="">
              Ms. Anthony has a long-standing history of working with children
              with disabilities in various programs at D.C. Public Schools. She
              was instrumental in the opening of Early Stages, the early
              childhood special education evaluation center, and transformed
              Medicaid billing for DCPS, which increased revenue ten-fold. She
              has also served as a gymnastics coach for the Special Olympics in
              Pennsylvania.
            </Typography>
          </div>
        </Grid>
        <hr></hr>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <div style={{ width: "auto", minWidth: "200px", maxWidth: "300px" }}>
            <Image
              src="/images/monument_logo-short.png"
              alt="Monument Academy Logo"
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
              Sharisse Baltimore
            </Typography>
            <Typography variant="h5" color="">
              Parent Board Member
            </Typography>
          </div>
        </Grid>
        <hr></hr>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <div style={{ width: "auto", minWidth: "200px", maxWidth: "300px" }}>
            <Image
              src="/images/monument_logo-short.png"
              alt="Monument Academy Logo"
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
              Dr. Matt Biel
            </Typography>
            <Typography variant="h5" color="">
              Board Member
            </Typography>
            <UnderlineStroke></UnderlineStroke>
            <Typography variant="body1" color="">
              Matthew Biel, MD, MSc is Chief of the Division of Child and
              Adolescent Psychiatry at Georgetown University Hospital and
              Associate Professor of Clinical Psychiatry and Pediatrics at
              Georgetown University School of Medicine. He co-directs the Early
              Childhood Innovation Network, a citywide effort to improve
              developmental outcomes for children and families living in
              underserved communities in Washington, DC. Dr. Biel’s work
              addresses the impact of adversity and stress upon children and
              families. His clinical efforts focus on children and adolescents
              with anxiety and stress disorders, trauma-related conditions,
              autism spectrum disorders, and complex medical illnesses. His
              research has centered on reducing health disparities, improving
              access to mental health care for underserved children and families
              through projects based in primary care and school settings, and
              clinical interventions focusing on trauma and resilience, anxiety,
              and autism. He has published numerous articles and book chapters
              and is involved nationally in psychiatric education and advocacy
              for children’s mental health. Dr. Biel received his medical degree
              and a master’s degree in Community Medicine at Mount Sinai School
              of Medicine. He trained in general psychiatry and in child and
              adolescent psychiatry at New York University School of Medicine.
            </Typography>
          </div>
        </Grid>
        <hr></hr>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <div style={{ width: "auto", minWidth: "200px", maxWidth: "300px" }}>
            <Image
              src="/images/monument_logo-short.png"
              alt="Monument Academy Logo"
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
              Emily Bloomfield
            </Typography>
            <Typography variant="h5" color="">
              Founder
            </Typography>
            <UnderlineStroke></UnderlineStroke>
            <Typography variant="body1" color="">
              Emily Bloomfield is the founder of Monument Academy Public Charter
              School. Ms. Bloomfield brings deep knowledge of the public school
              sector — both traditional and charter — resulting from her years
              of serving on the DC Public Charter School Board and as an elected
              member and President of the Santa Monica-Malibu Unified School
              District Board of Education. She has experience in strategic
              planning, marketing, business, recruiting, staffing and working in
              startups through her work at CitySearch, Carparts.com, the LA
              Times and other organizations. Ms. Bloomfield has a BA from the
              University of Chicago, an MPA from The Maxwell School of
              Citizenship and Public Affairs at Syracuse University and an
              M.Phil in Economics for Oxford University.
            </Typography>
          </div>
        </Grid>
        <hr></hr>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <div style={{ width: "auto", minWidth: "200px", maxWidth: "300px" }}>
            <Image
              src="/images/monument_logo-short.png"
              alt="Monument Academy Logo"
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
              Neela Rathinasamy
            </Typography>
            <Typography variant="h5" color="">
              Board Member
            </Typography>
            <UnderlineStroke></UnderlineStroke>
            <Typography variant="body1" color="">
              Neela has worked in public education in the District of Columbia
              for over a decade, including eight years at the District of
              Columbia Public Schools (DCPS) in a variety of roles. As Deputy
              Chief of Special Education Compliance, she managed DCPS’ response
              to four major federal lawsuits and monitoring by state and federal
              government. DCPS has since exited three out of four lawsuits,
              including two that were nearly two decades old. She was also the
              Chief of Staff in the Office of General Counsel, Deputy Chief of
              Central Office Effectiveness in the Office of Human Capital and a
              member of the Chancellor’s critical response team. Additionally,
              she served as the Assistant Superintendent of Operations in the
              Office of the State Superintendent of Education (OSSE), the state
              education agency of D.C., overseeing grants management, dispute
              resolution, enrollment and residency support, building operations
              and procurement planning. Neela is currently an independent
              consultant. She has a J.D. from the University of Virginia School
              of Law and a B.A. in government from the College of William and
              Mary. She lives in Washington, D.C. with her husband and two
              daughters.
            </Typography>
            <Typography variant="body1" color="">
              What Excites You About Monument Academy
            </Typography>
            <Typography variant="body1" color="">
              Monument Academy serves children in a fundamentally different way
              than a traditional school. I’m excited about the school’s focus on
              meeting students where they are, operating a weekday boarding
              program, filling their lives with supportive adults who believe in
              their potential, and focusing on the needs of the entire family so
              that each student can achieve greatness.
            </Typography>
            <Typography variant="body1" color="">
              Favorite Teacher
            </Typography>
            <Typography variant="body1" color="">
              I’ve been blessed to have many important teachers in my life, my
              parents being the most important of all. My high school history
              teacher, Ms. Wood, is the person I credit with challenging my
              world view and daring me to dream. She taught me the importance
              and power of a single person believing in you, which is what I
              hope that each student at Monument Academy feels in their time at
              the school.
            </Typography>
          </div>
        </Grid>
        <hr></hr>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <div style={{ width: "auto", minWidth: "200px", maxWidth: "300px" }}>
            <Image
              src="/images/monument_logo-short.png"
              alt="Monument Academy Logo"
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
              James Waller
            </Typography>
            <Typography variant="h5" color="">
              Board Member
            </Typography>
            <UnderlineStroke></UnderlineStroke>
          </div>
        </Grid>
        <hr></hr>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <div style={{ width: "auto", minWidth: "200px", maxWidth: "300px" }}>
            <Image
              src="/images/monument_logo-short.png"
              alt="Monument Academy Logo"
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
              Carla Watson
            </Typography>
            <Typography variant="h5" color="">
              Board Member
            </Typography>
            <UnderlineStroke></UnderlineStroke>
          </div>
        </Grid>
      </section>
    </Page>
  );
};

export default board;
