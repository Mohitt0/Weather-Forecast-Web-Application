import React from 'react'
import UTCDatetime from '../Reusable/UTCDateTime'
import { FaGithub } from 'react-icons/fa'
import Logo from "../../assets/logo.png"
import { Col, Row } from 'react-bootstrap'

const NavbarSection = () => {
  return (
    <Row>
    <Col xs={12}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginBottom: '1rem' }}>
        <img
          src={Logo}
          alt="logo"
          style={{ height: '26px', width: 'auto' }}
        />
        <UTCDatetime />
        <a
          href=""
          target="_blank"
          style={{ display: 'flex' }}
        >
          <FaGithub
            style={{ fontSize: '26px', color: 'white', ':hover': { color: '#2d95bd' } }}
          />
        </a>
      </div>
      {/* <Search onSearchChange={searchChangeHandler} /> */}
    </Col>
  </Row>
  )
}

export default NavbarSection