import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, CardImg,Butt} from 'reactstrap';
import classnames from 'classnames';

const Example = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div style={{ padding: '.5rem' }} >
      <Nav tabs >
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
          รายละเอียดหลักสูตร 
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            ชั่วโมงเรียน
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
          >
            วิดีโอหลักสูตร
          </NavLink>
        </NavItem>
      </Nav>
      
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1"> <br></br>
          <div class="media">
            <div class="media-body">
              <h5 class="mt-0 mb-1"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;มาตรฐานบัญชีรับ เทคนิคการใช้โปรแกรมสำเร็จรูป QM-Soft และการใช้โปรแกรมทางบัญชี QOS</h5>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; เรียนรู้วิธีการรับเงินสด/เช็ค/เงินโอน การออกใบเสร็จรับเงินโดย QM-Soft และ QOS
                 </div>
            <img class="ml-3" idth="256" height="186" src="./images/ac.png" alt="Generic placeholder image" />
          </div>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="6">
            <Card className = "bg-secondary text-white">
              <CardTitle><h4>&nbsp;&nbsp;&nbsp;&nbsp;ตามมาตราฐานของกรมฝีมือแรง</h4></CardTitle>
                <CardText>&nbsp;&nbsp;กำหนดให้ใช้เวลาในการอบรมรวมกันทั้งหมด 6 ชั่วโมงเรียน</CardText>

              </Card>
            </Col>
          </Row>

        </TabPane>
        <TabPane tabId="4">
          <Row>
            <Col sm="6">
            <Card className = "bg-secondary text-white">
                <CardTitle>ตามมาตราฐานของกรมฝีมือแรง</CardTitle>
                <CardText>กำหนดให้ใช้เวลาในการอบรมรวมกันทั้งหมด 6 ชั่วโมงเรียน</CardText>

              </Card>
            </Col>
          </Row>

        </TabPane>
        <TabPane tabId="3">
        <div style={{ padding: '.5rem' }} >
          <iframe width="560" height="315" src="https://www.youtube.com/embed/vS8EdXO09zs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>

        </TabPane>
      </TabContent>

    </div>
  );
}

export default Example;