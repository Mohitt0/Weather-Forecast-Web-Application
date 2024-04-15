import React from 'react'
import SectionHeader from './SectionHeader'
import { Col, Row } from 'react-bootstrap'

const Layout = ({content, title, sx, mb, sectionSubHeader}) => {
  return (
    <Row style={sx}>
    <Col xs={12}>
      <SectionHeader title={title} mb={mb?mb: '0'} />
      {sectionSubHeader || null}
    </Col>
    {content}
  </Row>
  )
}

export default Layout