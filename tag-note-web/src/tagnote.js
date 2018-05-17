import React, {Component} from 'react';
import { Row, Col } from 'antd';
import { DatePicker } from 'antd';
import { Card } from 'antd';
import { Tabs } from 'antd';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'

const TabPane = Tabs.TabPane;


export default class TagNote extends Component {
    
    constructor(props) {
        super(props);
    }
    
 


    render(){
        return(
            <div className="container-fluid">
                <Row>
                    <Col span={2}></Col>
                    <Col span={20}>
                        <Card title="Tag Note Options">
       <Tabs defaultActiveKey="1">
    <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
    <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
    <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
  </Tabs>
  </Card>
                    </Col>
                     <Col span={2}></Col>
                </Row>
                
                <Row>
                
                </Row>
            <DatePicker />
                
             
                
           
      
            </div>
            
         
        );     
    }
}
    