import React, { Fragment } from "react"
import ClaraNavbar from "../components/Navbar"
import ClaraFooter from "../components/Footer"
import { Container, Row, Col, Image, ResponsiveEmbed, Card } from "react-bootstrap"
import FadhliPic from "../assets/Fadhli.jpg"
import IlyasPic from "../assets/ilyas.png"
import FajarPic from "../assets/Fajar.jpg"
import IndraPic from "../assets/Indra.jpg"
import TiaraPic from "../assets/Tiara.jpg"
import GebbyPic from "../assets/Gebriela.jpeg"
import SponsorLogos from "../assets/sponsorlogos.png"
import SupportLogos from "../assets/supportlogos.png"

import '../components/AboutUs.css'


function AboutUs() {
  const supervisorMentorData = [
    {
      name: "Umi Sa'adah",
      position: "Dosen Teknik Informatika PENS"
    },
    {
      name: "Desy Intan Permatasari",
      position: "Dosen Teknik Informatika PENS"
    },
    {
      name: "Andhik Ampuh Yunanto",
      position: "Dosen Teknik Informatika PENS"
    },
    {
      name: "Maulidan Bagus Afridian Rasyid",
      position: "Founder Maulidan Games & Rasyid Technologies"
    },
    {
      name: "Willy Achmat Fauzi",
      position: "CEO Sindika"
    },
    {
      name: "Verent Flourencia Irene",
      position: "UX Designer Maulidan Games"
    },
    {
      name: "Mayshella Ainun Wakhidah",
      position: "Mahasiswa Teknik Informatika PENS"
    },
    {
      name: "Andika Ahmad Ramadhan",
      position: "Mahasiswa Teknik Informatika PENS"
    },
    {
      name: "Fandi Ahmad",
      position: "Mahasiswa Teknik Informatika PENS"
    },
    {
      name: "Ardian Kristya Pratama",
      position: "Mobile Developer AlinaMed & Ikkat Inovasi Teknologi"
    },
    {
      name: "Angga Pradipta Kurnia Putra",
      position: "CTO AlinaMed & Mobile Developer Ikkat Inovasi Teknologi"
    },
    {
      name: "Muhammad Alif Pradipta ADP",
      position: "Mobile Developer Sindika"
    },
    {
      name: "Rafly Arief Kanza",
      position: "Owner & Full Stack Developer Punggawastudio.Com"
    },
    {
      name: "Ahmad Jarir At Thobari",
      position: "Software Engineer Rasyid Technologies"
    },
    {
      name: "Ajie Dibyo Respati",
      position: "Mahasiswa Teknik Informatika PENS"
    },
    {
      name: "Achmad Zulkarnain",
      position: "CEO & Co-Founder TrustMedis"
    },
    {
      name: "Arie Affianto",
      position: "Founder Profilku Mobile & Samsung Developer Warrior"
    },
    {
      name: "Tegar Imansyah",
      position: "Software RnD In System Architect Alterra"
    },
  ]

  const developerTeamData = [
    {
      picture: IlyasPic,
      name: "Ilyas Yudhistira",
      nrp: "2110181045"
    },
    {
      picture: FajarPic,
      name: "Fajar Septian",
      nrp: "2110181042"
    },
    {
      picture: IndraPic,
      name: "Indra Pramana",
      nrp: "2110181058"
    },
    {
      picture: TiaraPic,
      name: "Tiara Puspita",
      nrp: "2110181049"
    },
    {
      picture: GebbyPic,
      name: "Gebriela Rifka",
      nrp: "2110181059"
    },
    {
      picture: FadhliPic,
      name: "Fadhli Ubai",
      nrp: "2110181043"
    },
  ]

  const supervisorMentorListItems = supervisorMentorData.map((data) =>
    <>
    <dt class="col-sm-3">{data.name}</dt>
    <dd class="col-sm-9">{data.position}</dd>
    </>
  )

  const developerTeamListItems = developerTeamData.map((data) =>
    <Col xs={6} md={2} align="center">
    <Card style={{ width: '11rem' }}>
      <Card.Img variant="top" className="image-fit"  src={data.picture} />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{data.nrp}</Card.Subtitle>
        </Card.Body>
    </Card>
  </Col>
  )

  return (
    <div>
      <ClaraNavbar currentPage='Home'/>
      <Container className="mt-4">
        <span className="mr-auto h3">
          About Us
        </span>

        <h4 align="center" className="mt-4">Developer Team</h4>

        <Row className="mt-4">
          {developerTeamListItems}
        </Row>

        <h4 align="center" className="mt-4">Sponsored by</h4>
        <div align="center" className="mt-4">
          <Image src={SponsorLogos} className="img-fluid" />
        </div>


        <h4 align="center" className="mt-4">Sponsored by</h4>
          <Row align="center" className="mt-4">
            <Image src={SupportLogos} className="img-fluid" />
          </Row>

        <h4 align="center" className="mt-4">Supervisors & Mentors</h4>

        <Row className="mt-4">
          {supervisorMentorListItems}
        </Row>

      </Container>
      <ClaraFooter />
    </div>
  )
}

export default AboutUs
